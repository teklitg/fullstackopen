const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const Blog = require('./model/model')
const blogRouter= require('./controllers/blog')
const userRouter = require('./controllers/user')
const config = require('./utils/config')

const mongoUrl = config.mongoUrl

mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)
app.use('/api/users', userRouter)

module.exports= app