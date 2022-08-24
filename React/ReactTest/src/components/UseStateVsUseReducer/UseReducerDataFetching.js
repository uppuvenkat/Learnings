import React, {useEffect, useReducer} from "react";
import axios from "axios";

const initialState = {
    loading: true,
    posts:{},
    error:''
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {...state, loading:false, posts:action.payload, error: false};
        case 'FETCH_FAILURE':
            return {...state, loading:false, posts:{}, error: "something went wrong !"};
        default:
            return state
    }
}

export default function UseReducerDataFetching(){
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res =>{
           dispatch({type:"FETCH_SUCCESS", payload:res.data})
        })
        .catch(err => {
           dispatch({type: "FETCH_FAILURE"})
        })
    },[])

    return(
        <>
            {state.loading ? 'Loading..' :<div>{state.posts.title}</div>}
            <div>{state.error ? state.error : null}</div>
        </>
    )
}