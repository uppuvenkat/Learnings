import React, { useReducer }  from "react";

let initialState = 0
const reducer = (state, action)=>{
    switch(action){
        case 'icreament':
            return state+1;
        case 'decrement':
            return state-1
        case 'reset':
            return initialState;
        default:
        return state
    }
}

export default function UseReducerCounterOne(){
    const [count, dispatch] = useReducer(reducer, initialState)
   
    return(
        <>
             <div>{count}</div>
            <button onClick={()=>dispatch('icreament')}>Increament</button>
            <button onClick={()=>dispatch('decrement')}>Decreament</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </>
    )
}