import React, { useState, useEffect }  from "react";

export default function UseEffectCounterOne(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        document.title = `clicked ${count} times`
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(prev => prev + 1)}>clicked {count} times</button>
        </div>
    )
}