import personService from "../Services/person"

const Persons=({persons,filters, setPersons, setMessage})=>{
  
  return  <div>
            {persons.filter(person=> person.name.toLowerCase().includes(filters.toLowerCase()))
            .map(person => <Person setMessage={setMessage} setPersons={setPersons} person={person} key={person.name} persons={persons}/>)}
          </div>
      }


const Person=({person, setPersons,persons, setMessage})=>{
        
        const DeleteOb = (event) => {
          event.preventDefault()

          if (window.confirm(`Delete ${person.name}?`)) {

            const F=persons.filter(pe=>pe.id !== person.id)
            personService.remove(person.id)
              .then(()=>setPersons(F))
                .then(()=>setMessage(`${person.name} removed successfully`))
                  .then(()=>setTimeout(()=>setMessage(''), 2000))
                    .catch(()=>{setMessage(`information of ${person.name} has already been removed `)
                               setTimeout(()=>setMessage(''),2000)
                               setPersons(F)})
          }
      }

        return (
          <div>
            {person.name} {person.number} <button onClick={DeleteOb}>Delete</button>
          </div>
        )
          
      }  

export default Persons