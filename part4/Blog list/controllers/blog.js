const blogRouter = require('express').Router()
const Blog = require('../model/model')
const User = require('../model/users')


blogRouter.get('/',async (request, response) => {
  const blogs = await Blog
   .find({}).populate('blogs')

response.json(users)
  //Blog.find({})
  //.then(blogs => {
  //  response.json(blogs)
  //})
  })
  
  blogRouter.post('/',async (request, response) => {
  
    const body = request.body

    const user = await User.findById(body.userId)
  
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user.id
    })
  
    const savedBlog = await blog.save()
    
    user.blogs = user.blogs.concat(savedBlog._id)
    await blog.save()
    
    response.status(201).json(savedBlog)
  })

module.exports = blogRouter