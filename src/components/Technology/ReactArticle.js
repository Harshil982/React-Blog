import { Component } from "react";
import { Link } from 'react-router-dom';
import './../../styles/ReactArticle.css'
import AuthorInfo from "./AuthorInfo";
import { WrittenBy } from "./WrittenBy";

class ReactArticle extends Component
{
    render(props)
    {
        return(
            <>
                <h1>{this.props.data.ArticleHeading}</h1>
                <AuthorInfo info={this.props.data}  />
                <img className={"fit"} src={this.props.data.path} alt="React Poster"/>
                <p className={"art-cont"}>{this.props.data.completeInfo}</p>
                <p className={"art-cont"}>Let's Talk About Them</p>
                <img className={"fit"} src={this.props.data.otherImage} alt="ProgramPic" />
                <div className={"related-topics"}>
                    <Link to="#">React</Link>
                    <Link to="#">Javascript</Link>
                    <Link to="/google" target="_blank">Animation</Link>
                </div>
                <p className={"likes"}><i className="fas fa-thumbs-up"></i><span>9.3K Likes</span></p>
                <hr />
                    <WrittenBy Authordata={this.props.data}/>
                <hr />
            </>
        )
    }
}
export default ReactArticle;