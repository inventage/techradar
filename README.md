# Inventage Tech-Radar

This repository contains the Markdown files for the blips of the Inventage Tech-Radar. The radar can be found here: https://techradar.inventage.com

This technology radar is based on AOE's Open Source generator: https://github.com/AOEpeople/aoe_technology_radar

## Content

Markdown files for each Technology Radar blip are located in the [radar](./radar) directory, grouped by date of publication.

Files for the configuration of the technology radar generator are located in the [root](./) and [public](./public) directories.

## How to use?

### Install Dependencies and build

To install the required dependencies and start an integrated web server, run:

```bash
npm install
npm start
```

The radar may then be accessed under http://localhost:3000. Any changes to the Markdown files will rebuild the radar.

The radar may also be built by running

```bash
npm run build
```

The corresponding artefacts will be written to the `build` directory. The build executes the `./scripts/build.sh` script, which uses the AOE
technology radar generator and produces static HTML files and other resources.

### Static files

After a successful build, the static files are accessible in the `/build` directory.

## Deployment

Deployment is handled by the GitHub Actions workflow in [.github/workflows/main.yml](./.github/workflows/main.yml), which runs on every push and pull request. It has two jobs:

- **Build & Deploy (Preview)** runs for every branch **except** `prod`. It builds the radar and deploys it as a Netlify preview under `https://<branch-slug>--inventage-tech-radar.netlify.app`. On pull requests, the workflow comments the preview URL on the PR.
- **Build & Deploy** runs only for the `prod` branch. It builds the radar and publishes it to GitHub Pages (`gh-pages` branch), which serves the production site at https://techradar.inventage.com (configured via the `cname` setting).

Neither job runs for commits authored by `dependabot[bot]`.

To release changes to production, merge or push them to the `prod` branch. Pushes to `main` (or any other branch) only produce a Netlify preview, not a production deployment.
