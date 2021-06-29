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
                    {/* <LatestCard src={CardImage1}/>
                    <LatestCard src={CardImage2} />
                    <LatestCard src={CardImage3} /> */}
                    {this.props.data.map((item) => (
                        <div key={item.id}>
                            <LatestCard src={item} />
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Latest;