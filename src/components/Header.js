import { Component } from "react";
import { NavLink } from 'react-router-dom'
import './../styles/header.css'
import logo from './images/siren_1.png'
class Header extends Component
{
    menu = (event) =>{
        console.log(event);
        document.querySelector(".nav-style").classList.toggle("act")
    }
    render()
    {
        return(
            <>
                <div className={"main-header"}>
                    <div className={"logo-header"}>
                        <img src={logo} className={"logo"} alt="The Siren" />
                        <i className="fas fa-bars" onClick={this.menu}></i>
                    </div>
                </div>
                <div className={"nav-style"}>
                        <NavLink exact activeClassName="activeuse" to="/">Home</NavLink>
                        <NavLink  activeClassName="activeuse" to="/Bollywood">Bollywood</NavLink>
                        <NavLink activeClassName="activeuse" to="/Technology">Technology</NavLink>
                        <NavLink  activeClassName="activeuse" to="/Hollywood">Hollywood</NavLink>
                        <NavLink  activeClassName="activeuse" to="/Fitness">Fitness</NavLink>
                        <NavLink  activeClassName="activeuse" to="/Food">Food</NavLink>
                </div>
                <hr className={"hr-line"}/>
            </>
        )
    }
}
export default Header;