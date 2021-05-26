import { Component } from "react";
import './../styles/LatestStories_card.css'

class LatestStoriesCard extends Component
{
    state = {
        type : "Tech",
        date : "August 2017"
    }
    render()
    {
        return(
        <>
            <div className={"LatestStories_card"}>
                <h3>Catches Wave with an Adventure guide </h3>
                <p>Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist designation. It has a plethora of temples and palaces.Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist designation. It has a plethora of temples and palaces.</p>
                <p><span>{this.state.type}</span> / {this.state.date}</p>
            </div>
        </>
        )
    }
}
export default LatestStoriesCard;