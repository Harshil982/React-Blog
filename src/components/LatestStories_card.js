import { Component } from "react";
import './../styles/LatestStories_card.css'

class LatestStoriesCard extends Component {
    state = {
        type: "Tech",
        date: "August 2017"
    }
    render() {
        return (
            <>
                <h3>{this.props.data.heading}</h3>
                <p>{this.props.data.description}</p>
                <p><span>{this.props.data.type}</span> / {this.props.data.date}</p>
            </>
        )
    }
}
export default LatestStoriesCard;