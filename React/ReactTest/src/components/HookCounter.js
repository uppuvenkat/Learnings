import React, { useState }  from "react";

export default function HookCounter(){
    const [counter, setCounter] = useState(0)

    const onCounter = ()=>{
        setCounter(counter+1)
    }
    
    return(
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>Count:{counter}</button>
        </div>
    )
}