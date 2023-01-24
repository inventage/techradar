# Inventage Tech-Radar

This repository contains the markdown files for the blips of the Inventage Tech-Radar. The radar can be found here: TODO

This technology radar is based on AOE's Open Source generator: https://github.com/AOEpeople/aoe_technology_radar

## Content

Markdown files for each Technology Radar blip are located in the [radar](./radar) directory, grouped by date of publication.

Files for the configuration of the technology radar generator are located in the [public](./public) directory.

## How to use?

### Install Dependencies

To install all required dependencies run:

```bash
npm install
```

### Build the radar

Build the radar using the [build.sh](./build.sh) script:

```bash
./build.sh
```

This script uses the AOE technology radar generator which produces static HTML files and other resources. These resources are then patched automatically:
- [path-styles.js](./patch-styles.js): Let's us override the styles using a custom [styles.css](./public/styles.css).
- [path-translate.js](./patch-translate.js): Translates all static texts from English to German.

### Static files

After a successful build, the static files are accessible in the `/build` directory.

## Helper scripts

Use [csv2md.js](./csv2md.js) to generate the blip markdown files from a csv export (see [2023-01-31.csv](./radar/2023-01-31.csv) for details on the required structure).
