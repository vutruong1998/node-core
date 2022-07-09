import { Router } from 'express'

interface Base {
  id: number
  createdAt?: string
  updatedAt?: string
}

export interface Controller {
  path: string
  router: Router
}

export interface Post extends Base {
  title: string
}
