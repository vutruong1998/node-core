import express, { NextFunction, Request, Response } from 'express'
import { getAllPosts, getPostById } from '../services/post.service'
import HttpException from "../exceptions/HttpException";

class PostController {
  public path = '/posts'
  public router = express.Router()

  constructor() {
    this.intializeRoutes()
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts)
    this.router.get(`${this.path}/:id`, this.getPostById)
  }

  public getAllPosts = (request: Request, response: Response) => {
    const posts = getAllPosts()
    response.send(posts)
  }

  public getPostById = (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const post = getPostById(Number(id))
    if (!post) {
      return next(new HttpException(404, `Post with id ${id} not found`))
    }
    response.send(post)
  }
}

export default PostController