import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {fetchUsers} from '../index'

function UserContainer({fetchUsers, userData}){
    
    useEffect(()=>{
        fetchUsers()
    },[])
    console.log('ddddddd',userData )
    return(
        <>
            {userData.loading ? 
            <h2>Loading</h2> 
            : userData.error 
            ? <h2>{userData.error}</h2> 
            : <>
            <h2>User data</h2> 
            {userData &&
                userData.data && 
                userData.data.map(user => <div>{user.title}</div>)
             } 
             </>
            }
        </>
    )

}
const mapStatetoProps = (state) =>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(UserContainer)