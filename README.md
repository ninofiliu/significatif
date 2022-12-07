# significa.tif

Website for my dear friend Victor

# Local development

- [pnpm](https://pnpm.io/)
- [serve](https://www.npmjs.com/package/serve)

```sh
# start the client
cd client
pnpm run dev
# and in another terminal, serve static assets
cd static
serve -l 3001
```

# Deployment

- [netlify console](https://app.netlify.com/sites/significatif/overview)

```sh
# build locally
cd client
pnpm run build
ntl deploy # add --prod if you're sure of it all
```

# Media management

This git repository handles the _logic_ of the webite, but its _media_ (images and videos) are hosted on Google Cloud Storage. Media loads faster and it's cheaper to host.

To add or remove files, it [can be done online](https://console.cloud.google.com/storage/browser/significatif;tab=objects?project=nino-filiu), or programmatically. Open this directory in the terminal and type one of:

- `source ./scripts.sh pull` downloads pictures
- `source ./scripts.sh pull-and-delete` downloads and removes locally the pictures that are not on the bucket
- `source ./scripts.sh push` uploads pictures
- `source ./scripts.sh push-and-delete` uploads and removes on the bucket the pictures that are not on there locally
