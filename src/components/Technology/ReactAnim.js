import { Component } from "react";
import ReactArticle from "./ReactArticle";
import TechHeader from "./TechHeader";
import './../../styles/ReactAnim.css'
import Related from "./Related";

class ReactAnim extends Component
{
    componentDidMount()
    {
        document.title = "Technology";
    }
    render()
    {
        return(
            <>
                <TechHeader/>
                <div className={"react-article"}>
                    <ReactArticle/>
                </div>
                <div className={"appreciate"}>
                    <div>
                        <i className="fas fa-thumbs-up"></i><span>9.3K</span>
                    </div>
                    <i className="fas fa-share-alt"></i><span>Share this article</span>
                </div>
                <div className={"Related-articles-cont"}>
                    <Related/>
                </div>
            </>
        )
    }
}
export default ReactAnim;