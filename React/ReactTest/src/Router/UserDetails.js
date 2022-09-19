import { useParams } from "react-router-dom";

export const UserDetails = () =>{
    let user = useParams();
    console.log('lll', user);
    return(
        <>
            <h3>User {user?.id} Details Page</h3>
           
        </>
    )
}