import { BUY_ICE_CREAM } from "./IceCreamTypes";

const initialState = {
    numIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state, numIceCreams:state.numIceCreams-1
        }
        default : return state
    }
}

export default iceCreamReducer;