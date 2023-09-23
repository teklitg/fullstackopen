
const Notfication=({notify})=>{
    
    const Decoret={
        color : "green",
        border: "solid",
        borderColor: "green",
        backgroundColor: "lightgrey",
        fontSize : 25,
        padding: 10
    }

    if(notify === ""){
        return null
    }
    
    return <>
           <div style={Decoret}>
            {notify}
           </div>
          </>
}

export default Notfication