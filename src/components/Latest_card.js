import { Component } from "react";
import './../styles/LatestCard.css'

class LatestCard extends Component
{
    render()
    {
        console.log(this.props);
        return(
            <>
                <div className={"card"}>
                    <img src={this.props.src.imgPath} alt={"Joshua"} />
                    <div className={"text-content"}>
                        <h3>{this.props.src.heading}</h3>
                        <p>{this.props.src.description}</p>
                        <p><span>{this.props.src.type}</span> / {this.props.src.date}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestCard;