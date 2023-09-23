import personService from "../Services/person"

const Persons=({persons,filters, setPersons})=>{
  
  return  <div>
            {persons.filter(person=> person.name.toLowerCase().includes(filters.toLowerCase()))
            .map(person => <Person setPersons={setPersons} person={person} key={person.name} persons={persons}/>)}
          </div>
      }

      const Person=({person, setPersons,persons})=>{
        
        const DeleteOb = (event) => {
          event.preventDefault()

          if (window.confirm(`Delete ${person.name}?`)) {

            const F=persons.filter(pe=>pe.id !== person.id)
            personService.remove(person.id)
              .then(()=>setPersons(F))

          }
      }

        return (
          <div>
            {person.name} {person.number} <button onClick={DeleteOb}>Delete</button>
          </div>
        )
          
      }  

export default Persons