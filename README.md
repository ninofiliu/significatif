# significa.tif

Website for my dear friend Victor

# Local dev

```sh
hs site/dist/dev -p 8080
```

```sh
cd api
npm run dev
```

```sh
hs static -p 8082
```

```sh
hs backoffice/dist -p 8083
```

# Deployment

1. Generate a password file with `echo team:$(openssl passwd [some password]) > /etc/nginx/passwd`
2. Pull and build
3. Restart all the non-static services
4. Serve them through nginx with a conf like [nginx.conf](./nginx.conf)
