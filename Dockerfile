FROM node:20-alpine

WORKDIR /app

# Install project dependencies (includes nodemon, npm-watch, tsx)
COPY package.json package-lock.json* ./
RUN npm install

# The aoe_technology_radar "techradar build" bootstraps .techradar/ by copying
# the package source there and installing its deps. Do this once at build time
# with a dummy radar so the directory structure is ready.
COPY config.json about.md custom.css ./
COPY public/ public/
RUN mkdir -p radar/2000-01-01 && \
    printf -- '---\ntitle: init\nring: assess\nquadrant: tools\ntags: []\n---\ninit\n' > radar/2000-01-01/init.md && \
    npx techradar build || true && \
    rm -rf radar/2000-01-01 build/

# Copy the actual radar content
COPY radar/ radar/

# Rebuild data with the real content
RUN cp -r radar .techradar/data/radar && \
    cp public/* .techradar/public/ && \
    cp about.md .techradar/data/about.md && \
    cp custom.css .techradar/src/styles/custom.css && \
    cp config.json .techradar/data/config.json && \
    cd .techradar && npx tsx scripts/buildData.ts

EXPOSE 3000
CMD ["sh", "-c", "cd .techradar && npx next dev"]
