import express from "express"
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
import morgan from "morgan"
import fs from "fs"
import path from "path"
import { Controller } from "./interfaces"
import errorMiddleware from "./middlewares/error.middleware"

class App {
  public app: express.Application

  constructor(controllers: Controller[]) {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeControllers(controllers)
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

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router)
    })
  }
}

export default App
