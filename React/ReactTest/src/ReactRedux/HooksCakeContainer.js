import React from 'react'
import {buyCake} from './index'
import { useSelector, useDispatch } from 'react-redux';

function HooksCakeContainer(props){
    const noOfCakes = useSelector(state => state.noOfCakes)
    const dispatch = useDispatch()
    return(
        <>
            <h2>No of Cakes: {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </>
    )
}


export default HooksCakeContainer;