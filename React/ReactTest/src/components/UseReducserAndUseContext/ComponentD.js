import React, {useContext} from "react";
import {CountContext} from './ContainerComponent'

export default function ComponentD(){
    let countContext = useContext(CountContext)

    return(
        <>
            <h3>ComponentD - {countContext.countState}</h3>
            <button onClick={()=>countContext.countDispatch('icreament')}>Increament</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decreament</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </>
    )
}
