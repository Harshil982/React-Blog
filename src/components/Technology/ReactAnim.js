import { Component } from "react";
import ReactArticle from "./ReactArticle";
import TechHeader from "./TechHeader";
import './../../styles/ReactAnim.css'
import Related from "./Related";

class ReactAnim extends Component
{
    render()
    {
        return(
            <>
                <TechHeader/>
                <div className={"react-article"}>
                    <ReactArticle/>
                </div>
                <div className={"Related-articles-cont"}>
                    <Related/>
                </div>
            </>
        )
    }
}
export default ReactAnim;