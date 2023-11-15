const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const Note = require("./models/persons")
const app = express()


app.use(express.json())
app.use(express.static('build'))
app.use(cors())



let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]
app.get('/api/persons', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
app.get('/info', (request, response) => {
  const date= new Date
  console.log(date)
  response.send(`Phone book has info for ${persons.length} people </br> ${date}`)
})
app.get('/api/persons/:id', (request, response) => {
  const Id = Number(request.params.id)
 const per = persons.find(person =>  person.id === Id)
  
  if (per) {
    response.json(per)
  } else {
    response.status(404)
  }
})
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})
morgan.token("body", (request, response)=>{
               return JSON.stringify(request.body)
           })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.post('/api/persons', (request, response) => {
  const person = request.body
  person.name="Lissa Marttinen"
  person.number="040-243563"
 
  const ID= ()=>{
   return Math.floor(Math.random() * (1000000-5))+5; 
  }
  person.id=ID()
  response.status(201).json({ message: 'User created successfully', user: person });
  if(!(person.name || person.number)){
    return response.status(400).json({ error: 'name must be unique' })
  }
  response.json(person)
})

//data base
app.get('/api/notes', (request, response) => {

})
// upto this database

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is delivering its best on port ${PORT}`)
})

