// Patches applied to .techradar/ on every wrapper run.
//
// Each patch is an idempotent string replacement. The marker comment is
// checked first; if present, the patch is skipped. If the `find` string is
// not located, the wrapper fails loudly so we can re-author the patch
// against a newer AOE release.

const MARKER = "/* inventage-blog-link-patch */";

export const patches = [
  // ───────────────────────────────────────────────────────────────────
  // 1. types.ts — add `blog?: BlogLink` to Item and Revision
  // ───────────────────────────────────────────────────────────────────
  {
    file: "src/lib/types.ts",
    marker: "// inventage-blog-link-patch",
    find: `export interface Revision {
  release: Release;
  ring: string;
  body?: string;
}`,
    replace: `// inventage-blog-link-patch
export interface BlogLink {
  title: string;
  url: string;
}

export interface Revision {
  release: Release;
  ring: string;
  body?: string;
  blog?: BlogLink;
}`,
  },
  {
    file: "src/lib/types.ts",
    marker: "/* blog-on-item */",
    find: `  release: Release;
  revisions?: Revision[];`,
    replace: `  release: Release;
  blog?: BlogLink; /* blog-on-item */
  revisions?: Revision[];`,
  },

  // ───────────────────────────────────────────────────────────────────
  // 2. buildData.ts — pass blog through into Item + Revision
  // ───────────────────────────────────────────────────────────────────
  {
    file: "scripts/buildData.ts",
    marker: "/* blog-on-new-item */",
    find: `            quadrant: data.quadrant,
            body,
            featured: data.featured !== false,`,
    replace: `            quadrant: data.quadrant,
            body,
            blog: data.blog /* blog-on-new-item */,
            featured: data.featured !== false,`,
  },
  {
    file: "scripts/buildData.ts",
    marker: "/* blog-on-update */",
    find: `          items[id].release = releaseDate;
          items[id].body = body || items[id].body;`,
    replace: `          items[id].release = releaseDate;
          items[id].body = body || items[id].body;
          items[id].blog = data.blog; /* blog-on-update */`,
  },
  {
    file: "scripts/buildData.ts",
    marker: "/* blog-on-revision */",
    find: `        items[id].revisions!.push({
          release: releaseDate,
          ring: data.ring,
          body,
        });`,
    replace: `        items[id].revisions!.push({
          release: releaseDate,
          ring: data.ring,
          body,
          blog: data.blog, /* blog-on-revision */
        });`,
  },

  // ───────────────────────────────────────────────────────────────────
  // 3. ItemDetail.tsx — render the Blogpost footer in each Revision
  // ───────────────────────────────────────────────────────────────────
  {
    file: "src/components/ItemDetail/ItemDetail.tsx",
    marker: "/* blog-on-revisionprops */",
    find: `interface RevisionProps {
  id: string;
  release: string;
  ring: string;
  body?: string;
}`,
    replace: `import { BlogLink } from "@/lib/types"; /* blog-on-revisionprops */

interface RevisionProps {
  id: string;
  release: string;
  ring: string;
  body?: string;
  blog?: BlogLink;
}`,
  },
  {
    file: "src/components/ItemDetail/ItemDetail.tsx",
    marker: "/* blog-on-revisionfn */",
    find: `function Revision({ id, release, ring, body }: RevisionProps) {`,
    replace: `function Revision({ id, release, ring, body, blog }: RevisionProps /* blog-on-revisionfn */) {`,
  },
  {
    file: "src/components/ItemDetail/ItemDetail.tsx",
    marker: "{/* blog-on-revisionjsx-v2 */}",
    find: `        {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
        {editLink && (`,
    replace: `        {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
        {/* blog-on-revisionjsx-v2 */}
        {blog ? (
          <a className="custom-blog-link" href={blog.url} target="_blank" rel="noopener noreferrer">
            <span className="custom-blog-link-label">Blogpost:</span>{" "}
            <span className="custom-blog-link-title">{blog.title}</span>
          </a>
        ) : null}
        {editLink && (`,
  },

  // ───────────────────────────────────────────────────────────────────
  // 4. Quadrant pages — hide removed blips (featured: false) entirely
  //    instead of showing them faded. Their detail pages stay reachable
  //    via links and the revision history of other blips.
  // ───────────────────────────────────────────────────────────────────
  {
    file: "src/pages/[quadrant]/index.tsx",
    marker: "/* inventage-hide-removed-patch */",
    find: `    () => quadrant?.id && getItems(quadrant.id).sort(sortByFeaturedAndTitle),`,
    replace: `    () =>
      quadrant?.id &&
      getItems(quadrant.id, true) /* inventage-hide-removed-patch */
        .sort(sortByFeaturedAndTitle),`,
  },

  // ───────────────────────────────────────────────────────────────────
  // 5. ItemDetail.tsx — propagate blog from the top-level Item into
  //    the first Revision (the latest release block)
  // ───────────────────────────────────────────────────────────────────
  {
    file: "src/components/ItemDetail/ItemDetail.tsx",
    marker: "{/* blog-on-itemtoplevel */}",
    find: `        <Revision
          id={item.id}
          release={item.release}
          ring={item.ring}
          body={item.body}
        />`,
    replace: `        {/* blog-on-itemtoplevel */}
        <Revision
          id={item.id}
          release={item.release}
          ring={item.ring}
          body={item.body}
          blog={item.blog}
        />`,
  },
];

export { MARKER };
