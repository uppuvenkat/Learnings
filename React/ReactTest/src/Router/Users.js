import { useSearchParams } from "react-router-dom";

export const User = () =>{
    const [searchparams, setSearchparams] = useSearchParams()
    let isActive = searchparams?.get('filter') === 'active'
    return(
        <>
            <h3>User Page</h3>
            <div>User 1</div>
            <div>User 2</div>
            <div>User 3</div>
            <br />
            <button onClick={()=>{setSearchparams({filter: 'active'})}}>Active users</button>
            <button onClick={()=>{setSearchparams({})}}>Reset users</button>
            <br />
            {
                isActive ? <p>Showing active users</p> : <p>Showing all users</p>
            }
        </>
    )
}