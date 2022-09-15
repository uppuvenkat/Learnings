const  axios = require('axios');
const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
//state
const initialState = {
    loading: true,
    data:[],
    error:''
}
//string constants
const FETCH_API_REQUEST = "FETCH_API_REQUEST"
const FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS"
const FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE"
//Action creators
function fetchApiRequest(){
    return{
        type:FETCH_API_REQUEST,
    }
}
function fetchRequestSuccess(users){
    return{
        type:FETCH_REQUEST_SUCCESS,
        payload:users
    }
}
function fetchRequestFailure(err){
    return{
        type:FETCH_REQUEST_FAILURE,
        payload:err
    }
}
//reducer
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
//thunk action creator
const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchApiRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const users = res.data.map(user => user.id)
            // console.log('rrrrr', users)
            dispatch(fetchRequestSuccess(users))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchRequestFailure(errMsg))
        })
    }
}


const store = createStore(reducer, applyMiddleWare(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
