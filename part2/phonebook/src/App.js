import { useState, useEffect } from 'react'
import Filter from './Compenents/Filter'
import PersonForm from './Compenents/PersonForm'
import Persons from './Compenents/Persons'
import personServices from './Services/person'

const App = () => {
 
  const [persons, setPersons] = useState([ ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] =useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    personServices.getAll()
      .then(Response=> setPersons(Response.data))
  },[])

  const addNewPerson=(e)=>{
           e.preventDefault()

           const newOb = { name : newName, number: newNumber }

           if (persons.find(person=>person.name===newName)) {

             window.alert(newName + " is already added to phonebook, replace the old number with new one ?")
             
             const inOb= persons.filter(person=>person.name===newName)
             const updatePerson = {...inOb[0], number :newNumber}
             const updatesID = updatePerson.id

             personServices.update(updatesID, updatePerson)
               .then(()=>setPersons(persons.map((p)=>(p.id !== updatesID? p : updatePerson ))))
           
              } else {

             setPersons(persons.concat(newOb))
             personServices.create(newOb);
    }

    setNewName("");
    setNumber("");
  }

  const handleChange =setValue=> (e) => setValue(e.target.value)
  
  return (
    <div>
      <div>
      <h2>Phonebook</h2>
      <Filter filters={filter} handleChange={handleChange(setFilter)}/>

      <h2>add a new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleChangen={handleChange(setNumber)} handleChange={handleChange(setNewName)}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filters={filter} setPersons={setPersons} />
    </div>
    </div>
  )
}

export default App