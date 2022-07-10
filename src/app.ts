import express, { Router } from "express"
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
import morgan from "morgan"
import fs from "fs"
import path from "path"
import errorMiddleware from "./middlewares/error.middleware"

class App {
  public app: express.Application

  constructor(routes: Router[]) {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
    this.initializeErrorHandling()
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`)
    })
  }

  private initializeMiddlewares() {
    const accessLogStream = fs.createWriteStream(
      path.join(__dirname, "logs/access.log"),
      { flags: "a" }
    )
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(morgan("combined", { stream: accessLogStream }))
    this.app.use(bodyParser.json())
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }

  private initializeRoutes(routes: Router[]) {
    routes.forEach((route) => {
      this.app.use("/", route)
    })
  }
}

export default App
