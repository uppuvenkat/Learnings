import {FETCH_API_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE} from './UserTypes'

const initialState = {
    loading: true,
    data:[],
    error:''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_API_REQUEST: return{
            ...state, loading:true
        }
        case FETCH_REQUEST_SUCCESS: return{
            ...state, 
            loading:false, 
            data:action.payload, 
            error:''
        }
        case FETCH_REQUEST_FAILURE: return{
            ...state, 
            loading:false, 
            data:[], 
            error:action.payload
        }
        default: return state
    }
}

export default reducer;