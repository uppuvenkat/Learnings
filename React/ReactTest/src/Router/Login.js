import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "./Auth"

export const Login = () =>{
    const[user, setUser] = useState(null)

    const auth = useAuth()
    const navigate = useNavigate()

    const handlelogin = ()=>{
        auth.login(user)
        navigate('/')
    }

    return(
        <>
             <label>
                User name: {''}
                <input type='text' value={user} onChange={(e)=>{setUser(e.target.value)}} />
            </label>
            <button onClick={handlelogin}>Login</button>
        </>
    )
}