import { Component } from "react";
import './../styles/LatestArticle.css'

class LatestArticle extends Component
{
    render()
    {
        return(
            <>
                <h1 className={"article"}>Latest Articles</h1>
                <div className={"line"}></div>
                <div className={"grid-article"}>

                </div>
            </>
        )
    }
}
export default LatestArticle;