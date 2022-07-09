import express, { NextFunction, Request, Response } from 'express'
import { getAllPosts, getPostById, createPost } from '../services/post.service'
import HttpException from "../exceptions/HttpException";
import { Post } from '../interfaces'

class PostController {
  public path = '/posts'
  public router = express.Router()

  constructor() {
    this.intializeRoutes()
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts)
    this.router.get(`${this.path}/:id`, this.getPostById)
    this.router.post(`${this.path}`, this.createPost)
  }

  public getAllPosts = async (request: Request, response: Response) => {
    const posts: Post[] = await getAllPosts()
    return response.send(posts)
  }

  public getPostById = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const post = await getPostById(Number(id))
    if (!post) {
      return next(new HttpException(404, `Post with id ${id} not found`))
    }
    return response.send(post)
  }

  public createPost = async(request: Request, response: Response) => {
    const post = await createPost(request.body)
    return response.send(post)
  }
}

export default PostController