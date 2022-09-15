import React, {useState} from 'react'
import {buyCake} from './index'
import { connect } from 'react-redux';

function NewCakeContainer(props){
    const [number, setNumber] = useState(0)
    return(
        <>
            <h2>No of Cakes: {props.noOfCakes}</h2>
            <input type={'text'} value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
        </>
    )
}

const mapStatetoProps = state =>{
    return{
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        buyCake: (number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(NewCakeContainer);