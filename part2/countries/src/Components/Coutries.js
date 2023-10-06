const Countries = ({filterdCountries}) => {

    return (
        <div>
            {filterdCountries.map((f,i)=> <div key={i}>{f.name.common} </div>
            )}
        </div>
    )
}

export default Countries