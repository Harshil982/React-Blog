import { Component } from "react";
import ReactArticle from "./ReactArticle";
import PagenotFound from "../Pagenotfound";
import TechHeader from "./TechHeader";
import './../../styles/ReactAnim.css'
import Related from "./Related";

class ReactAnim extends Component {
    componentDidMount()
    {
        window.scrollTo(0, 0);
    }
    render(props) {
        console.log(this.props);
        document.title = `${this.props.location.state.item.ArticleHeading}`
        return (
            <>
                {/* <TechHeader />
                <div className={"react-article"}>
                    <ReactArticle data={this.props.location.state.item} />
                </div>
                <div className={"appreciate"}>
                    <div>
                        <i className="fas fa-thumbs-up"></i><span>9.3K</span>
                    </div>
                    <i className="fas fa-share-alt"></i><span>Share this article</span>
                </div>
                <div className={"Related-articles-cont"}>
                    <Related />
                </div> */}

                {((this.props.location.state) === undefined)
                    ?
                    <PagenotFound />
                    :
                    <>
                        <TechHeader />
                        <div className={"react-article"}>
                            <ReactArticle data={this.props.location.state.item} />
                        </div>
                        <div className={"appreciate"}>
                            <div>
                                <i className="fas fa-thumbs-up"></i><span>9.3K</span>
                            </div>
                            <i className="fas fa-share-alt"></i><span>Share this article</span>
                        </div>
                        <div className={"Related-articles-cont"}>
                            <Related />
                        </div></>}
                    </>
        )
    }
}
export default ReactAnim;