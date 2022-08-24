import React, { useState, useEffect }  from "react";
import axios from "axios";

export default function UseEffectDataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
    },[])

    return(
        <>
            <div>{posts.map(post => <div key={post.id}>{post.title} </div>)}</div>
        </>
    )
}