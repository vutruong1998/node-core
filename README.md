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
