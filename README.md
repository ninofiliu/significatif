# significa.tif

Website for my dear friend Victor

# Local dev

- start the client: `cd client; npm run dev`
- serve static assets: `cd static; http-server . -c-1 -p 8081`

# Deployment

1. Generate a password file with `echo team:$(openssl passwd [some password]) > /etc/nginx/passwd`
2. Pull and build
3. Restart all the non-static services
4. Include [nginx.prod.conf](./nginx.prod.conf) in the nginx conf's http block
