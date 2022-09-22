import { useAuth } from "./Auth"
import {useNavigate, Navigate} from 'react-router-dom'

export const RequireAuth = ({children}) =>{
    const auth = useAuth()
    const navigate = useNavigate()
    
    if(!auth.user){
        return  <Navigate to = '/login' />
    }

    return(
        <>
            {children}
        </>
    )
}