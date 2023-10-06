
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter"
import Countries from "./Components/Coutries";
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
     
      <Filter filter={filter} setFilter={setFilter} setFilterdCountries={setFilterdCountries} filterdCountries={filterdCountries} countries={countries}></Filter>
      <Display filterdCountries={filterdCountries}></Display>
    </div>
  );
}

export default App;