import React, {useState} from "react";
import useCustomHook from './useCustomHook' 

function DocTitleOne(){
    const [count, setCount] = useState(0)

    useCustomHook(count)

    return(
        <>
            <button onClick={()=>{setCount(prev => prev+1)}}>Count - {count}</button> <br />
        </>
    )
}

export default DocTitleOne