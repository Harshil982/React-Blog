import { Component } from "react";
import './../styles/Latest.css'
import LatestCard from "./Latest_card";

class Latest extends Component
{
    render()
    {
        return(
            <>
                <h1 className={"latest"}>The Latest</h1>
                <div className={"line"}></div>
                <div className={"card-container"}>
                    <LatestCard />
                    <LatestCard />
                    <LatestCard />
                </div>
            </>
        )
    }
}
export default Latest;