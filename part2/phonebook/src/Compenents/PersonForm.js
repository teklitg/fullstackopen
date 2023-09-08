const PersonForm = ({addNewPerson, newName,newNumber, handleChange, handleChangen}) =>{      


  return (<form onSubmit={addNewPerson}>
  <div>
    name: <input value={newName} onChange={handleChange}/>
  </div>
  <div>
    number: <input value={newNumber} onChange={handleChangen}/>
  </div>
  <div>
    <button type="submit">add</button>
  </div>
  </form>)}
  
  export default PersonForm