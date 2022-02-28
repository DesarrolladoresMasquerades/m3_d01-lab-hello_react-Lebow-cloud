import "./NavBar.css"
import logo from "../../images/ironhack-logo-xs.png"
import logoBars from "../../images/menu-top-xs.png"

export default function NavBar (){
    return(
        <nav className="navbar">
            <img src={logo} alt="IronHack Logo" />
            <img  className = "bars" src={logoBars} alt="IronHack Logo" width="20" height="20" />
            
        </nav>
    )
}