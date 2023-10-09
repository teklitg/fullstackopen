const express = require('express')
const app = express()

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
  response.json(persons)
})

app.get('/info', (request, response) => {
  const date= new Date
  console.log(date)
  response.send(`Phone book has info for ${persons.length} people </br> ${date}`)
})

//app.get('/api/persons/:id', (request, response) => {
  //const Id = Number(request.params.id)
 // const per = persons.find(person =>  person.id === Id)
  
 // if (per) {
  //  response.json(per)
  //} else {
  //  response.status(404)
  //}
//})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is delivering its best on port ${PORT}`)
})