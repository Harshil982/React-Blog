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
                        <img src={process.env.PUBLIC_URL + `${this.props.src.path}` }alt="article"/>
                        <div className={"content"}>
                            <h2>{this.props.src.ArticleHeading}</h2>
                            <p>{this.props.src.description}</p>
                            <p><span>{this.props.src.blogType}</span> / {this.props.src.date}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Infocard;