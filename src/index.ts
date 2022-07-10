import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import { routes } from './routes'

if (!process.env.PORT) {
  process.exit(1)
}

const app = new App(routes)

app.listen()