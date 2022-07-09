Run docker
`docker-compose up -d`

Copy default.env to .env
`cp default.env .env`

Migrate database
`yarn migrate`

Generate prisma
`yarn postinstall`