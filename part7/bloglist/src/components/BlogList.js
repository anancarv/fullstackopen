import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogList = () => {
  const blogs = useSelector((state) => state.blog)
  const byLikes = (b1, b2) => b2.likes - b1.likes

  return blogs.sort(byLikes).map((blog) => <Blog key={blog.id} blog={blog} />)
}

export default BlogList
