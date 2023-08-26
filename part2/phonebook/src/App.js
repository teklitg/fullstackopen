import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '39-44-5323523' }]) 
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
      <h2>Phonebook</h2>
      <span>filter shown with</span>
      <input value={filter} onChange={handleChange(setFilter)}/>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChange(setNewName)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChange(setNumber)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(person=> person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
          <div key={person.name}>{person.name} {person.number}</div> 
        )}
      </div>
    </div>
  )
}

export default App