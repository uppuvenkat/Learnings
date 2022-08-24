import React, {useState, useEffect} from "react";
import axios from "axios";

export default function UseStateDataFetching(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplacholder.typicode.com/posts/1`)
        .then(res =>{
            setLoading(false)
            setPosts(res.data)
            setError('')
        })
        .catch(err => {
            setLoading(false)
            setPosts({})
            setError('something went wrong !')
        })
    },[])

    return(
        <>
            {loading ? 'Loading..' :<div>{posts.title}</div>}
            <div>{error ? error : null}</div>
        </>
    )
}
