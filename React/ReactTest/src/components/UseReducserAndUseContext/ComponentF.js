import React, {useContext} from "react";
import {CountContext} from './ContainerComponent'

export default function ComponentF(){
    let countContext = useContext(CountContext)

    return(
        <>
            <h3>ComponentF - {countContext.countState}</h3>
            <button onClick={()=>countContext.countDispatch('icreament')}>Increament</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decreament</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </>
    )
}
