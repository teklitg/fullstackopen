const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

userSchema.plugin(uniqueValidator)


const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog