import React from 'react'
import {buyIceCream} from './index'
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <>
            <h2>No of Ice Creams: {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </>
    )
}

const mapStatetoProps = state =>{
    return{
        noOfCakes: state.iceCream.numIceCreams
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        buyCake: ()=>dispatch(buyIceCream())
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CakeContainer);