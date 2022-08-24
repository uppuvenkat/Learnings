import React, { useState, useEffect }  from "react";

export default function UseEffectTimer(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        let intervel = setInterval(tick, 1000)
        return ()=>{
            clearInterval(intervel)
        }
    },[])

    const tick = () =>{
        setCount(prev => prev+1)
        //the below statement works when passed depedency(count) to empty array for useeffect
        // setCount(count+1)

    }

    return(
        <>
            <div>{count}</div>
        </>
    )
}