import { Component } from "react";

class ToppostCard extends Component
{
    render(props)
    {
        console.log(this.props)
        return(
            <>
                <img src={this.props.source.src} className={"sub-image"} alt="VK"/>
                <div>
                    <p>Catch Waves With an adventure guide</p>
                    <p><span>Travel</span> / August 2017</p>
                </div>
                <p className={"number"}>{this.props.source.number}</p>
            </>
        )
    }
}
export default ToppostCard;