const userRouter = require('express').Router()
const User = require('../model/users')
const bcrypt = require('bcrypt')


userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs')
	
  response.json(users)
  })
  
  userRouter.post('/', async (request, response) => {
  
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    
    const user = new User({
        username,
        name,
        passwordHash,
      })

      
     const savUser= await user.save()
      console.log(savUser)
      response.status(201).json(savUser)
  
  })


module.exports = userRouter