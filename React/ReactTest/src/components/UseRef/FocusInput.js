import React, {useEffect, useRef} from "react";

function FocusInput (){

    let inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return(
        <>
            <input ref={inputRef} type={"text"} value="venkat" />
            <input  type={"text"} value="ram" />
        </>
    )
}

export default FocusInput;