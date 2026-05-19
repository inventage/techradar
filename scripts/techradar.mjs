#!/usr/bin/env node
// Wrapper around aoe_technology_radar's bin/techradar.js.
// Replicates the upstream bootstrap, then injects our own patches into
// .techradar/ before running build:data + next dev / next build.
//
// Patches live in scripts/patches.mjs. They are idempotent: each carries a
// marker comment that is checked before applying.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

import { patches } from "./patches.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CWD = path.resolve(__dirname, "..");
const BUILDER_DIR = path.join(CWD, ".techradar");
const SOURCE_DIR = path.join(CWD, "node_modules", "aoe_technology_radar");
const HASH_FILE = path.join(BUILDER_DIR, "hash");

const PARAMETER = process.argv[2]; // "build" or "serve"
const EXTRA_ARGS = process.argv.slice(3);

function info(message) {
  console.log(`\x1b[32m${message}\x1b[0m`);
}
function warn(message) {
  console.log(`\x1b[33mWarning: ${message}\x1b[0m`);
}
function error(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

// ───────────────────────────────────────────────────────────────────
// Bootstrap — copy default content into project root if missing
// ───────────────────────────────────────────────────────────────────
function bootstrap() {
  const defaults = [
    ["radar", path.join(SOURCE_DIR, "data", "radar"), true],
    ["public", path.join(SOURCE_DIR, "public"), true],
    ["config.json", path.join(SOURCE_DIR, "data", "config.default.json"), false],
    ["about.md", path.join(SOURCE_DIR, "data", "about.md"), false],
    ["custom.css", path.join(SOURCE_DIR, "src", "styles", "custom.css"), false],
  ];

  for (const [name, src, isDir] of defaults) {
    const target = path.join(CWD, name);
    if (!fs.existsSync(target)) {
      warn(`Bootstrapping ${name}`);
      if (isDir) {
        fs.cpSync(src, target, { recursive: true });
      } else {
        fs.copyFileSync(src, target);
      }
    }
  }
}

// ───────────────────────────────────────────────────────────────────
// Recreate .techradar/ when our root package.json or patches changed
// ───────────────────────────────────────────────────────────────────
function calculateHash(...files) {
  const hashSum = crypto.createHash("sha256");
  for (const file of files) {
    hashSum.update(fs.readFileSync(file));
  }
  return hashSum.digest("hex");
}

const PATCHES_FILE = path.join(__dirname, "patches.mjs");
const CURRENT_HASH = calculateHash(
  path.join(CWD, "package.json"),
  PATCHES_FILE,
);

let recreate = false;
if (
  !fs.existsSync(BUILDER_DIR) ||
  !fs.existsSync(HASH_FILE) ||
  fs.readFileSync(HASH_FILE, "utf8") !== CURRENT_HASH
) {
  recreate = true;
}

if (recreate) {
  if (fs.existsSync(BUILDER_DIR)) {
    info("Removing stale .techradar/");
    fs.rmSync(BUILDER_DIR, { recursive: true, force: true });
  }
  info("Copying AOE source into .techradar/");
  fs.cpSync(SOURCE_DIR, BUILDER_DIR, { recursive: true });
  fs.writeFileSync(HASH_FILE, CURRENT_HASH);

  info("Installing npm packages in .techradar/");
  execSync("npm install", { cwd: BUILDER_DIR, stdio: "inherit" });
}

bootstrap();

// ───────────────────────────────────────────────────────────────────
// Copy our content into .techradar/
// ───────────────────────────────────────────────────────────────────
try {
  if (fs.existsSync(path.join(BUILDER_DIR, "data", "radar"))) {
    fs.rmSync(path.join(BUILDER_DIR, "data", "radar"), { recursive: true });
  }
  fs.cpSync(path.join(CWD, "radar"), path.join(BUILDER_DIR, "data", "radar"), {
    recursive: true,
  });
  fs.cpSync(path.join(CWD, "public"), path.join(BUILDER_DIR, "public"), {
    recursive: true,
  });
  fs.copyFileSync(
    path.join(CWD, "about.md"),
    path.join(BUILDER_DIR, "data", "about.md"),
  );
  fs.copyFileSync(
    path.join(CWD, "custom.css"),
    path.join(BUILDER_DIR, "src", "styles", "custom.css"),
  );
  fs.copyFileSync(
    path.join(CWD, "config.json"),
    path.join(BUILDER_DIR, "data", "config.json"),
  );
} catch (e) {
  error(e.message);
}

// ───────────────────────────────────────────────────────────────────
// Apply our patches into .techradar/
// ───────────────────────────────────────────────────────────────────
info(`Applying ${patches.length} patches`);
let applied = 0;
let skipped = 0;
for (const patch of patches) {
  const target = path.join(BUILDER_DIR, patch.file);
  if (!fs.existsSync(target)) {
    error(`Patch target not found: ${patch.file}`);
  }
  let contents = fs.readFileSync(target, "utf8");
  if (contents.includes(patch.marker)) {
    skipped++;
    continue;
  }
  if (!contents.includes(patch.find)) {
    error(
      `Patch find string not located in ${patch.file}. AOE may have updated this file; re-author the patch.\n\n--- looking for ---\n${patch.find}\n--- end ---`,
    );
  }
  contents = contents.replace(patch.find, patch.replace);
  fs.writeFileSync(target, contents);
  applied++;
}
info(`  applied: ${applied}, already-present: ${skipped}`);

// ───────────────────────────────────────────────────────────────────
// Build data and run next
// ───────────────────────────────────────────────────────────────────
info("Building data");
execSync("npm run build:data", { cwd: BUILDER_DIR, stdio: "inherit" });

if (PARAMETER === "serve") {
  info("Starting techradar (next dev)");
  const args = EXTRA_ARGS.length ? EXTRA_ARGS.join(" ") : "";
  execSync(`npx next dev ${args}`.trim(), {
    cwd: BUILDER_DIR,
    stdio: "inherit",
  });
} else if (PARAMETER === "build") {
  info("Building techradar (next build)");
  execSync("npm run build", { cwd: BUILDER_DIR, stdio: "inherit" });
  if (fs.existsSync(path.join(CWD, "build"))) {
    fs.rmSync(path.join(CWD, "build"), { recursive: true });
  }
  info(`Copying techradar to ${path.join(CWD, "build")}`);
  fs.renameSync(path.join(BUILDER_DIR, "out"), path.join(CWD, "build"));
} else {
  error(`Usage: techradar.mjs <serve|build> [extra next args]`);
}
