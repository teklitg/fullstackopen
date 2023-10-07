const Interet=({ f,i, setFilteredCountries})=>{
   const show=(e)=>{
          e.preventDefault()
          const element=f
          setFilteredCountries(element)
           }
           
    return(
        <div>
           {f.name.common} <button onClick={show}>show</button>
        </div>
    )
}

const Countries = ({filterdCountries, setFilteredCountries}) => {

    if (filterdCountries.length === 1){

        const arrayLanguage= Object.keys((filterdCountries[0].languages))

        return (
            <div>
                <h1>{filterdCountries[0].name.common}</h1>
                <div>{`capital ${filterdCountries[0].capital}`}</div>
                <div>{`area ${filterdCountries[0].area}`}</div>
                <h2>Languges :</h2>
                    <ul>
                       {arrayLanguage.map(arrayLanguage => <li key={arrayLanguage}>{filterdCountries[0].languages[arrayLanguage]}</li>)}
                    </ul>
                    <img src={filterdCountries[0].flags.png} alt='flag' height='200' width='300' />

                {console.log()}
            </div>
        )
    }

    return (
        <div>
            {filterdCountries.map((f,i)=><Interet key={i} f={f} i={i} setFilteredCountries={setFilteredCountries}></Interet>)}
        </div>
    )
}



export default Countries