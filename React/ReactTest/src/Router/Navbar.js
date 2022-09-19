import { Link, NavLink } from "react-router-dom";

export const Navbar = () =>{

    const navStyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold': 'normal',
            textDecoration: isActive ? 'none': 'underline'
        }
    }

    return(
        <nav style={{padding:'32px', backgroundColor:'aliceblue'}}>
            <NavLink style={navStyles}  to = '/'>Home</NavLink>
            <NavLink style={navStyles} to = '/about'>About</NavLink>
            <NavLink style={navStyles} to = '/products'>Products</NavLink>
        </nav>
    )
}