import React, { useState }  from "react";

export default function HookCounterTwo(){
    const [counter, setCounter] = useState(0)

    const increamentBy5 = ()=>{
        for(let i=0; i<5; i++){
            setCounter(prevC => prevC + 1)
        }
    }

    return(
        <div>
            <div>{counter}</div>
            <button onClick={()=>{setCounter(prevC => prevC + 1)}}>Increament</button>
            <button onClick={()=>{setCounter(prevC => prevC - 1)}}>Decreament</button>
            <button onClick={()=>{setCounter(0)}}>Reset</button>
            <button onClick={increamentBy5}>Increament by 5</button>
        </div>
    )
}