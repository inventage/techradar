FROM node:20-alpine

WORKDIR /app

# Install project dependencies (wrapper toolchain: aoe_technology_radar,
# tsx, npm-watch, http-server, ...)
COPY package.json package-lock.json* ./
RUN npm install

# Copy our build wrapper + patches and the content needed to bootstrap the
# builder. scripts/ carries techradar.mjs and patches.mjs; everything else
# is the radar content the first build needs.
COPY scripts/ scripts/
COPY config.json about.md custom.css redirects.json ./
COPY public/ public/
COPY radar/ radar/

# Run the real build once, exactly like CI (npm run build -> techradar.mjs).
# This bootstraps .techradar/ (copies the AOE source, installs its deps) and
# applies our patches from scripts/patches.mjs into it: blog links, hidden
# removed blips, blog fields in buildData. The patched .techradar/ is baked
# into the image. The static build/ output is only a side effect and is
# discarded, since we serve via next dev at runtime.
RUN npm run build && rm -rf build .techradar/out .techradar/.next

EXPOSE 3000

# Runtime: docker-compose re-syncs the mounted radar/config/... into the
# already-patched .techradar/ and runs next dev with hot reload. This CMD is
# the fallback for `docker run` without compose.
CMD ["sh", "-c", "cd .techradar && npx next dev -H 0.0.0.0"]
