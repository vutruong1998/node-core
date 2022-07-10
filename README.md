Run docker
```sh
docker-compose up -d
```

Copy default.env to .env
```sh
cp default.env .env
```

Migrate database
```sh
yarn migrate
```

Generate prisma
```sh
yarn postinstall
```

How to run this node app?
```sh
yarn serve
```

To bundle
```sh
yarn build
```