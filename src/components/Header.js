import { Component } from "react";
import { NavLink } from 'react-router-dom'
import './../styles/header.css'
import logo from './images/siren_1.png'
class Header extends Component
{
    render()
    {
        return(
            <>
                <div className={"main-header"}>
                    <div className={"logo-header"}>
                        <img src={logo} className={"logo"} alt="The Siren" />
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <div className={"nav-style"}>
                        <NavLink to="/Home" activeStyle={{color : "green"}}>Home</NavLink>
                        <NavLink to="/Bollywood" activeStyle={{color : "green"}}>Bollywood</NavLink>
                        <NavLink to="/Technology" activeStyle={{color : "green"}}>Technology</NavLink>
                        <NavLink to="/Hollywood" activeStyle={{color : "green"}}>Hollywood</NavLink>
                        <NavLink to="/Fitness" activeStyle={{color : "green"}}>Fitness</NavLink>
                        <NavLink to="/Food" activeStyle={{color : "green"}}>Food</NavLink>
                </div>
            </>
        )
    }
}
export default Header;