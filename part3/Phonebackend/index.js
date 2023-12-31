const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const Note = require("./models/persons")
const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

const name = process.argv[2]
const number = process.argv[3]

const note = new Note({
  name: name,
  number: number,
})

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

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

app.get('/api/persons', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
app.get('/info', (request, response) => {
  const date= new Date
  console.log(date)
  Note.find({}).then((peoples=>{
    response.send(`Phone book has info for ${peoples.length} people </br> ${date}`)
  }))

})
app.get('/api/persons/:id', (request, response, next) => {
 const Id = Number(request.params.id)
 const per = persons.find(person =>  person.id === Id)
  
  Note.findById(request.params.id)
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})
app.delete('/api/persons/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    }).catch(error => next(error))
})
morgan.token("body", (request, response)=>{
               return JSON.stringify(request.body)
           })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.post('/api/persons', (request, response, next) => {
  if(process.argv.length === 4){
    note.save().then(result => {
      console.log(`added ${name} number ${number} to phonebook`)
    })
  }
})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    name: body.name,
    number: body.number,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
      console.log("updated")
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is delivering its best on port ${PORT}`)
})
