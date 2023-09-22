const Filter = ({filters, handleChange}) =>{
   
   return (<div>
      <span>filter shown with</span>
      <input value={filters} onChange={handleChange}/>
      </div>)
    }

export default Filter