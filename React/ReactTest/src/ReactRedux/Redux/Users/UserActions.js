import {FETCH_API_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE} from './UserTypes'
const  axios = require('axios');

export function fetchApiRequest(){
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

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchApiRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const users = res.data
            // console.log('rrrrr', users)
            dispatch(fetchRequestSuccess(users))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchRequestFailure(errMsg))
        })
    }
}