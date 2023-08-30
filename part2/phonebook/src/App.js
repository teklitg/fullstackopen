import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Compenents/Filter'
import PersonForm from './Compenents/PersonForm'
import Persons from './Compenents/Persons'

const App = () => {
 
 const [persons, setPersons] = useState([ ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] =useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/persons').then(Response=>setPersons(Response.data))
  },[])

  const addNewPerson=(e)=>{
    e.preventDefault();
    const newObj={
      name: newName,
      number: newNumber
    }
    
  persons.find(person=>person.name===newName)? 
  window.alert(newName + " is already added to phonebook")
  :axios.post('http://localhost:3001/persons',newObj)
  .then(Response=>setPersons(persons.concat(Response.data)));
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