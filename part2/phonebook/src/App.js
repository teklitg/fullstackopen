import { useState } from 'react'
import Filter from './Compenents/Filter'
import PersonForm from './Compenents/PersonForm'
import Persons from './Compenents/Persons'

const App = () => {
 
 const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] =useState('')
  const [filter, setFilter] = useState('')

  const addNewPerson=(e)=>{
    e.preventDefault()
    
  persons.find(person=>person.name===newName)? 
  window.alert(newName + " is already added to phonebook")
  :setPersons(persons.concat({name: newName, number: newNumber}));
  setNewName("")
  setNumber("")
  }

  const handleChange =setValue=> (e) => setValue(e.target.value)


  
  return (
    <div>
      <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleChange(setFilter)}/>

      <h2>add a new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleChangen={handleChange(setNumber)} handleChange={handleChange(setNewName)}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
    </div>
  )
}

export default App