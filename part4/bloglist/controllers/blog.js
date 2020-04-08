const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
          response.json(blogs.map(blog => blog.toJSON()))
      })
  })

blogRouter.post('/', (request, response, next) => {
    const body = request.body

    if (Object.keys(body).length === 0) {
        return response.status(400).json({
        error: 'content missing'
        })
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    blog.save()
    .then(savedBlog =>  savedBlog.toJSON())
    .then(savedAndFormattedBlog => {
        console.log(`added ${blog.title} to the blog list`)
        response.json(savedAndFormattedBlog)
        })
    .catch(error => next(error))
})

module.exports = blogRouter