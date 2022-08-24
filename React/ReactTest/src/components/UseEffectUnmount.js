import React, { useState, useEffect }  from "react";
import UseEffectCounterMouseHover from "./UseEffectCounterMouseHover"
export default function UseEffectUnmount(){
    const [display, setDisplay] = useState(true)

    return(
        <>
            <button onClick={()=>setDisplay(prev => !prev)}>Toggle</button>
            {display && <UseEffectCounterMouseHover />}
        </>
    )
}