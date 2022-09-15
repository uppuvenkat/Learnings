import {combineReducers} from 'redux'
import cakeReducer from './Cakes/CakeReducer'
import iceCreamReducer from './IceCreams/IceCreamReducer'
import UserReducer from './Users/UserReducer'

const rootreducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:UserReducer
})

export default rootreducer;
