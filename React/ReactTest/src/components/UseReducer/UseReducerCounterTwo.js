import React, { useReducer }  from "react";

let initialState = {
    firstCounter: 0,
    secondCounter:10
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'icreament':
            return {...state, firstCounter: state.firstCounter+action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter-action.value};
        case 'icreament2':
            return {...state, secondCounter: state.secondCounter+action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter-action.value};
        case 'reset':
            return initialState;
        default:
        return state
    }
}

export default function UseReducerCounterTwo(){
    const [count, dispatch] = useReducer(reducer, initialState)
   
    return(
        <>
             <div>Counter1: {count.firstCounter}</div>
             <div>Counter2: {count.secondCounter}</div>
            <button onClick={()=>dispatch({type:'icreament', value:1})}>Increament</button>
            <button onClick={()=>dispatch({type:'decrement', value:1})}>Decreament</button>
            <button onClick={()=>dispatch({type:'icreament', value:5})}>IncreamentBy5</button>
            <button onClick={()=>dispatch({type:'decrement', value:5})}>DecreamentBy5</button>
            <button onClick={()=>dispatch({type:'icreament', value:5})}>IncreamentBy5</button>
            <br />
            <button onClick={()=>dispatch({type:'icreament2', value:1})}>Increament</button>
            <button onClick={()=>dispatch({type:'decrement2', value:1})}>Decreament</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}