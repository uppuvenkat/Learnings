import React, { useReducer }  from "react";
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"

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

export const CountContext = React.createContext()

export default function ContainerComponent(){
    const [count, dispatch] = useReducer(reducer, initialState)
   
    return(
        <>
            <h2>Counter: {count}</h2>
            <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </>
    )
}