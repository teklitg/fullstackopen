import Coutries from './Coutries'



const Display = ({filterdCountries}) =>{

    const long= filterdCountries.length
    
     
     if(long > 10){

        return(
            <div>
                Too many matchs, specify another filter
            </div>
        )
     } 
        
     if (1 < long && long <= 10) {
          
        return (
            <div>
                <Coutries filterdCountries={filterdCountries}></Coutries>
            </div>
        )
     } 
     if(long===1){
        const arrayLanguage= Object.keys((filterdCountries[0].languages))

        return (
            <div>
                <h1>{filterdCountries[long-1].name.common}</h1>
                <div>{`capital ${filterdCountries[long-1].capital}`}</div>
                <div>{`area ${filterdCountries[long-1].area}`}</div>
                <h2>Languges :</h2>
                    <ul>
                       {arrayLanguage.map(arrayLanguage => <li key={arrayLanguage}>{filterdCountries[0].languages[arrayLanguage]}</li>)}
                    </ul>
                    <img src={filterdCountries[0].flags.png} alt='flag' height='200' width='300' />

                {console.log()}
            </div>
        )
     }
    if(long===0){

        return (<div>
            {null}
        </div>)
    }
}
export default Display