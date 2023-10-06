const Filter=({filter , setFilter, countries, filterdCountries, setFilterdCountries}) =>{

   const  handleChange = (event) => {
       const val =event.target.value
       setFilter(val);
    if(val){
       const filterd= countries.filter((c)=>c.name.common.toUpperCase().includes(val.toUpperCase()))
       setFilterdCountries(filterd)
    }
      };
    

    return (
        <div>
            <form>
                find countries <input value={filter} onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default Filter