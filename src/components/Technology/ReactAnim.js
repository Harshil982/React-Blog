import { Component } from "react";
import ReactArticle from "./ReactArticle";
import TechHeader from "./TechHeader";
import './../../styles/ReactAnim.css'

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
            </>
        )
    }
}
export default ReactAnim;