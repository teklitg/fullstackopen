const mongoose = require("mongoose")


const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  User : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

blogSchema.set("toJSON", {strictPopulate: false})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog