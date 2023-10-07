
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter"
import Display from "./Components/Display";

function App() {
    
     const [countries, setCountries]= useState([])
     const [filter, setFilter]= useState('')
     const [filterdCountries, setFilterdCountries]= useState([])

   useEffect(() => {
    
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
          .then((Response)=>{setCountries(Response.data) })
            }, [])


  return (
    <div className="App"> 
      {console.log(filterdCountries)}
      <Filter filter={filter} setFilter={setFilter} setFilterdCountries={setFilterdCountries} filterdCountries={filterdCountries} countries={countries}></Filter>
      <Display filterdCountries={filterdCountries} setFilteredCountries={setFilterdCountries}></Display>
    </div>
  );
}

export default App;