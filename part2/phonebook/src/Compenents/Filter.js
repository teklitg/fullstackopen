
const Filter = ({filter, handleChange}) =>{
   return (<div>
      <span>filter shown with</span>
      <input value={filter} onChange={handleChange}/>
      </div>)
    }

export default Filter