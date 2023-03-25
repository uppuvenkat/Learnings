import React, { useState }  from "react";

export default function HookCounterFour(){
    const [arr, setArr] = useState([])

    const onAdd = () =>{
        setArr([...arr, 1])
    }

   const  onDelete = () =>{
        arr.pop()
        setArr([...arr])
    }
    return(
        <div>
            <div>Array: [ {arr.join()} ]</div>
            <button onClick={onAdd}>Push to array</button>
            <button onClick={onDelete}>Pop from array</button>
        </div>
    )
}