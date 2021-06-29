import { Component } from "react";

class ToppostCard extends Component
{
    render(props)
    {
        console.log(this.props)
        return(
            <>
                <img src={process.env.PUBLIC_URL + `${this.props.source.imgPath}` } className={"sub-image"} alt="VK"/>
                <div>
                    <p>{this.props.source.heading}</p>
                    <p><span>{this.props.source.type}</span> / {this.props.source.date}</p>
                </div>
                <p className={"number"}>{this.props.source.number}</p>
            </>
        )
    }
}
export default ToppostCard;