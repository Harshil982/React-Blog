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
                        <NavLink to="/" activeClassName="activeuse">Home</NavLink>
                        <NavLink to="/Bollywood" activeClassName="activeuse">Bollywood</NavLink>
                        <NavLink to="/Technology" activeClassName="activeuse">Technology</NavLink>
                        <NavLink to="/Hollywood" activeClassName="activeuse">Hollywood</NavLink>
                        <NavLink to="/Fitness" activeClassName="activeuse">Fitness</NavLink>
                        <NavLink to="/Food" activeClassName="activeuse">Food</NavLink>
                </div>
            </>
        )
    }
}
export default Header;