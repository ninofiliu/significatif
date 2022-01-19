# significa.tif

Website for my dear friend Victor

# Local development

- start the client: `cd client; npm run dev`
- serve static assets: `cd static; http-server . -c-1 -p 8081`

# Deployment

1. Generate a password file with `echo team:$(openssl passwd [some password]) > /etc/nginx/passwd`
2. Pull and build
3. Restart all the non-static services
4. Include [nginx.prod.conf](./nginx.prod.conf) in the nginx conf's http block

# Media management

This git repository handles the *logic* of the webite, but its *media* (images and videos) are hosted on Google Cloud Storage. Media loads faster and it's cheaper to host.

To add or remove files, it [can be done online](https://console.cloud.google.com/storage/browser/significatif;tab=objects?project=nino-filiu), or programmatically. Open this directory in the terminal and type one of:

- `source ./scripts.sh pull` downloads pictures
- `source ./scripts.sh pull-and-delete` downloads and removes locally the pictures that are not on the bucket
- `source ./scripts.sh push` uploads pictures
- `source ./scripts.sh push-and-delete` uploads and removes on the bucket the pictures that are not on there locally
