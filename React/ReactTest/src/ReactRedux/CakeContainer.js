import React from 'react'
import {buyCake} from './index'
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <>
            <h2>No of Cakes: {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
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
        buyCake: ()=>dispatch(buyCake())
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CakeContainer);