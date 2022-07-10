import { NextFunction, Request, Response } from 'express'
import { getAllPosts, getPostById, createPost } from '@/services/post.service'
import HttpException from "@/exceptions/HttpException";

class PostController {
  public getAllPosts = async (request: Request, response: Response) => {
    const posts = await getAllPosts()
    return response.send(posts)
  }

  public getPostById = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const post = await getPostById(Number(id))
    if (!post) {
      return next(new HttpException(404, 'Post not found'))
    }
    return response.send(post)
  }

  public createPost = async(request: Request, response: Response) => {
    const post = await createPost(request.body)
    return response.send(post)
  }
}

export default PostController