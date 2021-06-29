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
                        {/* <LatestStoriesCard />
                        <LatestStoriesCard />
                        <LatestStoriesCard /> */}
                        {this.props.storiesData.map((item,index) => (
                            <div className={"LatestStories_card"} key={index}>
                                <LatestStoriesCard data={item} />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <p>VIEW MORE <i className="fas fa-arrow-right"></i></p>
                </div>
            </>
        )
    }
}
export default LatestStories;