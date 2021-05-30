import { Component } from "react";
import './../styles/InfoCard.css'

class Infocard extends Component
{
    render(props)
    {
        console.log(this.props)
        return(
            <>
                <div className={"Article-card"}>
                    <hr/>
                    <div className={"card-container"}>
                        <img src={this.props.src} alt="article"/>
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
export default Infocard;