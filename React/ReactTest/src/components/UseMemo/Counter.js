import React, {useMemo, useState} from "react";

function Counter({type, value}){
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const isEven = useMemo(()=>{
        let i = 0
        while(i<2000000000) i++;
        return counterOne %2 === 0
    }, [counterOne])

    return(
        <>
           <button onClick={()=>{setCounterOne(prev => prev +1)}}>Counter1: {counterOne}</button> <span>{isEven ? 'Even' : 'odd' }</span>
           <br />
           <button onClick={()=>{setCounterTwo(prev => prev +1)}}>Counter2: {counterTwo}</button>
        </>
    )
}

export default Counter;
