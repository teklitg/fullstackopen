
const mongoose = require('mongoose')
require('dotenv').config()


const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)  
 .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  name: name,
  number: number,
})

if(process.argv.length == 5){


  note.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}



if(process.argv.length == 9){
  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
     mongoose.connection.close()
  })
}

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
