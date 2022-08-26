import React, {useState} from "react";
import useCustomHook from './useCustomHook' 

function DocTitleTwo(){
    const [count, setCount] = useState(0)

    useCustomHook(count)

    return(
        <>
            <button onClick={()=>{setCount(prev => prev+1)}}>Count - {count}</button>
        </>
    )
}

export default DocTitleTwo