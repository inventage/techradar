# Inventage Tech-Radar

This repository contains the markdown files for the blips of the Inventage Tech-Radar. The radar can be found here: TODO

This technology radar is based on AOE's Open Source generator: https://github.com/AOEpeople/aoe_technology_radar

## Content

Markdown files for each Technology Radar blip are located in the [radar](./radar) directory, grouped by date of publication.

Files for the configuration of the technology radar generator are located in the [public](./public) directory.

## How to use?

### Install Dependencies and build

To install all required dependencies and build the radar run:

```bash
npm install
npm run build
```

This build executes the `./scripts/build.sh` script, which uses the AOE technology radar generator and produces static HTML files and other resources. These resources are then patched automatically:
- [path-styles.js](./scripts/patch-styles.js): Let's us override the styles using a custom [styles.css](./public/styles.css).
- [path-translate.js](./scripts/patch-translate.js): Translates all static texts from English to German.

### Static files

After a successful build, the static files are accessible in the `/build` directory.

## Helper scripts

Use [csv2md.js](./scripts/csv2md.js) to generate the blip markdown files from a csv export (see [2023-01-31.csv](./radar/2023-01-31.csv) for details on the required structure).
