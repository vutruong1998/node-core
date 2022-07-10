import express from 'express'
import PostController from '@/controllers/post.controller'

const path = '/posts'
const router = express.Router()
const postController = new PostController()

export const postRoutes = [
    router.get(path, postController.getAllPosts),
    router.get(`${path}/:id`, postController.getPostById),
    router.post(`${path}`, postController.createPost),
]
