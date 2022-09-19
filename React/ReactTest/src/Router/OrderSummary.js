import {useNavigate} from 'react-router-dom'

export const OrderSummary = () =>{
    const navigate = useNavigate();

    return(
        <>
            <h3>Order Confirmed..!</h3>
            <button onClick={()=> navigate(-1)} >Go back</button>

        </>
    )
}