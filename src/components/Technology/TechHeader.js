import {Component} from 'react'
import logo from './../images/siren_1.png'
import './../../styles/TechHeader.css'

class TechHeader extends Component
{
    render()
    {
        return(
            <>
                <div className={"tech-header"}>
                    <img src={logo} alt="Siren" />
                    <button className={"get-started"}>Get started</button>
                </div>
            </>
        )
    }
}
export default TechHeader;