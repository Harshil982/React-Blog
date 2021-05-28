import { Component } from "react";
import './../styles/LatestCard.css'

class LatestCard extends Component
{
    render(props)
    {
        console.log(this.props);
        return(
            <>
                <div className={"card"}>
                    <img src={this.props.src} alt={"Joshua"} />
                    <div className={"text-content"}>
                        <h3>Joshua Tree</h3>
                        <h3>Overnight Adventure</h3>
                        <p>Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist designation. It has a plethora of temples and palaces.</p>
                        <p><span>Travel</span> / August 2017</p>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestCard;