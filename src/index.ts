import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import PostController from './controllers/post.controller'

if (!process.env.PORT) {
  process.exit(1)
}

const app = new App([
  new PostController()
])

app.listen()