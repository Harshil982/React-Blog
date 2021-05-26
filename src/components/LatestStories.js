import { Component } from "react";
import './../styles/LatestStories.css'
import LatestStoriesCard from "./LatestStories_card";

class LatestStories extends Component
{
    render()
    {
        return(
            <>
                <div className={"LatestStories-container"}>
                    <h1>Latest Stories</h1>
                    <div className={"line"}></div>
                    <hr />
                    <div className={"LatestStories-card-container"}>
                        <LatestStoriesCard />
                        <LatestStoriesCard />
                        <LatestStoriesCard />
                    </div>
                    <hr />
                    <p>VIEW MORE  <i class="fad fa-long-arrow-right"></i></p>
                </div>
            </>
        )
    }
}
export default LatestStories;