const mongoose = require('mongoose')


const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
      `mongodb+srv://teklit:${password}@cluster0.9iy5i66.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

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

if(process.argv.length == 3){
  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
}
