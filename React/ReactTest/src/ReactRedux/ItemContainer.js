import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from './Redux/Cakes/CakeActions';
import { buyIceCream } from './Redux/IceCreams/IceCreamActions';

function ItemContainer(props){
    return(
        <>
            <h2>items: {props.item}</h2>
            <button onClick={props.dispatchItem}>buy items</button>
        </>
    )
}

const mapStatetoProps = (state, ownProps) =>{
    const item = ownProps.cake ? state.cake.noOfCakes : state.iceCream.numIceCreams
    return{
        item: item
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchItem = ownProps.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIceCream())
    return{
        dispatchItem: dispatchItem
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ItemContainer);