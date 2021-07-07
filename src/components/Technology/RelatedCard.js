import { Component } from "react";
import './../../styles/RelatedCard.css'
import avtar from './../images/avtar.png'
import { WrittenBy } from "./WrittenBy";

class RelatedCard extends Component
{
    state = {
        authorImage : avtar,
        authorName : "Rajput Harshilsinh",
        date : "August 2017",
        readTime : "23 min",
    }
    render(props)
    {
        return(
            <>
                <div className={"related-card"}>
                    <p>{this.props.AuthorDetail.related}</p>
                    <img src={this.props.AuthorDetail.src} className={"poster"} alt="Img1" />
                    <h1>Joshua Tree Overnight Adventure</h1>
                    <div className={"author"}>
                        <WrittenBy Authordata={this.state}/>
                    </div>
                </div>
            </>
        )
    }
}
export default RelatedCard;