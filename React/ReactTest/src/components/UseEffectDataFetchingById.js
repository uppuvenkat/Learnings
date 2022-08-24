import React, { useState, useEffect }  from "react";
import axios from "axios";

export default function UseEffectDataFetchingById(){
    const [posts, setPosts] = useState({ })
    const [num, setNum] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
    },[num])

    return(
        <>
            <div>{posts.id}</div>
            <div>{posts.title}</div>
            <br />
            <input type="text" value={num} onChange={e=>setNum(e.target.value)} />
        </>
    )
}