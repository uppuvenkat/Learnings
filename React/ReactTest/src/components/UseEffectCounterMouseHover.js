import React, { useState, useEffect }  from "react";

export default function UseEffectCounterOne(){
    const [pos, setPos] = useState({x:0, y:0})

    useEffect(()=>{
        console.log('useeffect calling')
        window.addEventListener('mousemove', logMousePosition)
        return () =>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    const logMousePosition = (e) =>{
        console.log('logMousePosition.. calling')
        setPos({...pos, x:e.clientX, y:e.clientY})
    }

    return(
        <div>
            <dic>Mouse Position: X:{pos.x} - y:{pos.y} </dic>
        </div>
    )
}