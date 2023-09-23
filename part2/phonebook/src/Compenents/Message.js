const Message=({message})=>{
    const Decoret={
        color : "red",
        border: "solid",
        borderColor: "red",
        backgroundColor: "lightgrey",
        fontSize : 25,
        padding: 10
    }
    if (message=='') {
        
        return null
    }
    return <>
         <div style={Decoret}>
            {`${message}`}
           </div>
          </>
}

export default Message