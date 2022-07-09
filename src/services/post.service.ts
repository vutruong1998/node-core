import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type CreateInput = {
  [key: string]: any
  title: string
}

export const getAllPosts = async () => prisma.post.findMany()
export const getPostById = async (id: number) =>
  prisma.post.findUnique({
    where: {
      id,
    },
  })
export const createPost = async (body: CreateInput) =>
  prisma.post.create({
    data: body,
  })
