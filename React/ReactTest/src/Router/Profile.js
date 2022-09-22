import { useAuth } from "./Auth"
import {useNavigate} from 'react-router-dom'

export const Profile = () =>{
    const auth = useAuth()
    const navigate = useNavigate()
    const handlelogout = ()=>{
        auth.logOut()
        navigate('/')
    }
    return(
        <>
            <h4>Welcome {auth.user}</h4>
            <button onClick={handlelogout}>Logout</button>
        </>
    )
}