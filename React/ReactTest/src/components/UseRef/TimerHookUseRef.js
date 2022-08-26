import React, {useEffect, useRef, useState} from "react";

function FocusInput (){
    const [timer, setTimer] = useState(0)
    let ref = useRef()

    useEffect(()=>{
        ref.current =  setInterval(()=>{
            setTimer(prev => prev + 1)
        },1000)
        return ()=>{
            clearInterval(ref.current)
        }
    },[])

    return(
        <>
            <div>
                Class Timer: {timer}
                <button onClick={()=>{clearInterval(ref.current)}}>clearInterval</button>
            </div>
        </>
    )
}

export default FocusInput;