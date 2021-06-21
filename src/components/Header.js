import { Component } from "react";
import { NavLink } from 'react-router-dom'
import './../styles/header.css'
import logo from './images/siren_1.png'
class Header extends Component
{
    menu = (event) =>{
        console.log(event);
        document.querySelector(".nav-style").classList.toggle("act");
        document.querySelector(".fa-bars").classList.toggle("fa-window-close")
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
                    <div className={"nav-style"}>
                        <NavLink exact activeClassName="activeuse" title="Click to Go to Home Page" to="/home">Home</NavLink>
                        <NavLink  activeClassName="activeuse" title="Click to Go to Bollywood Blogs" to="/Bollywood">Bollywood</NavLink>
                        <NavLink activeClassName="activeuse" title="Click to Go to Technology Blogs" to="/Technology">Technology</NavLink>
                        <NavLink  activeClassName="activeuse" title="Click to Go to Hollywood Blogs" to="/Hollywood">Hollywood</NavLink>
                        <NavLink  activeClassName="activeuse" title="Click to Go to Fitness Blogs" to="/Fitness">Fitness</NavLink>
                        <NavLink  activeClassName="activeuse" title="Click to Go to Food Blogs" to="/Food">Food</NavLink>
                    </div>
                </div>
                <hr className={"hr-line"}/>
            </>
        )
    }
}
export default Header;