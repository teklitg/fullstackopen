import { useState, useEffect } from 'react'
import Filter from './Compenents/Filter'
import PersonForm from './Compenents/PersonForm'
import Persons from './Compenents/Persons'
import personServices from './Services/person'
import Notfication from './Compenents/Notification'
import Message from './Compenents/Message'

const App = () => {
 
  const [persons, setPersons] = useState([ ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] =useState('')
  const [filter, setFilter] = useState('')
  const [notify, setNotify] = useState('')
  const [message, setMessage] = useState('')

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
               .then(()=>{setPersons(persons.map((p)=>(p.id !== updatesID? p : updatePerson )))
                 setNotify(`${newOb.name}'s number is replaced`) ;
                 setTimeout(()=>setNotify(''), 4000) ;})
                 .catch(()=>{setMessage(`information of ${newOb.name} has already been removed `)
                 setTimeout(()=>setMessage(''), 2000)})
              } else {

             setPersons(persons.concat(newOb))
             personServices.create(newOb);

             setNotify(`${newOb.name} is added to the list`)
             setTimeout(()=>setNotify(''), 4000)

    }

    setNewName("");
    setNumber("");
  }

  const handleChange =setValue=> (e) => setValue(e.target.value)
  
  return (
    <div>
      <Message message={message}></Message>
      <Notfication notify={notify}></Notfication>
      <h2>Phonebook</h2>
      <Filter filters={filter} handleChange={handleChange(setFilter)}/>

      <h2>add a new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleChangen={handleChange(setNumber)} handleChange={handleChange(setNewName)}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filters={filter} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App