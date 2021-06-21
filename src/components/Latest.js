import { Component } from "react";
import './../styles/Latest.css'
import LatestCard from "./Latest_card";
import CardImage1 from './images/cardimg_1.jpg'
import CardImage2 from './images/img_9.jpg'
import CardImage3 from './images/img_7.jpg'

class Latest extends Component
{
    render()
    {
        return(
            <>
                <h1 className={"latest"}>The Latest</h1>
                <div className={"line"}></div>
                <div className={"card-container"}>
                    <LatestCard src={CardImage1}/>
                    <LatestCard src={CardImage2} />
                    <LatestCard src={CardImage3} />
                </div>
            </>
        )
    }
}
export default Latest;