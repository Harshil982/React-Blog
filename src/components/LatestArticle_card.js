import { Component } from "react";
import './../styles/LatestArticle_card.css'
import img2 from './images/img_2.jpg'

class LatestArticleCard extends Component
{
    render()
    {
        return(
            <>
                <div className={"Article-card"}>
                    <hr/>
                    <div className={"card-container"}>
                        <img src={img2} alt="article"/>
                        <div className={"content"}>
                            <h2>Catch Waves With an adventure Guide</h2>
                            <p>Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist designation.</p>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestArticleCard;