import {Link, Outlet} from 'react-router-dom'

export const Products = () =>{
    return(
        <>
            <input type={"text"} value='' placeholder="search for products" />
            <nav>
                <Link to={"featured"}>Featured</Link>
                <Link to={"new"}>New</Link>
                <Outlet />
            </nav>
        </>
    )
}