import Post from "../interfaces/post.interface";

const posts: Post[] = [
  {
    id: 1,
    name: "Post 1",
  },
]

export const getAllPosts = () => posts
export const getPostById = (id: number) => posts.find((post) => post.id === id)
