import { Component } from "react";
import { Link } from 'react-router-dom';
import Poster from './../images/react.png'
import Program from './../images/prog.png'
import './../../styles/ReactArticle.css'
import AuthorInfo from "./AuthorInfo";
import AuthorImg from './../images/avtar.png'
import { WrittenBy } from "./WrittenBy";

class ReactArticle extends Component
{
    state = {
        authorImage : AuthorImg,
        name : "Rajput Harshilsinh"
    }
    render()
    {
        return(
            <>
                <h1>5 ways to Animate a React App</h1>
                <AuthorInfo path={this.state}/>
                <img className={"fit"} src={Poster} alt="React Poster"/>
                <p className={"art-cont"}>Animation in ReactJS app is a popular topic and there are many ways to create defferent types of Animations.
                    Many developers create animation exclusively using css and adding class to HTML tags.This is a great way and
                    you should use it.If you want to create complex animations you can pay attention to GreenSock. GreenSock is the
                    most powerful animation platform .There are also a lot of libraries,component for creating animations in React.
                </p>
                <p className={"art-cont"}>Let's Talk About Them</p>
                <img className={"fit"} src={Program} alt="ProgramPic" />
                {/* <div className={"appreciate"}>
                    <div>
                        <i className="fas fa-thumbs-up"></i><span>9.3K</span>
                    </div>
                    <i className="fas fa-share-alt"></i><span>Share this article</span>
                </div> */}
                <div className={"related-topics"}>
                    <Link to="#">React</Link>
                    <Link to="#">Javascript</Link>
                    <Link to="/google" target="_blank">Animation</Link>
                </div>
                <p className={"likes"}><i className="fas fa-thumbs-up"></i><span>9.3K Likes</span></p>
                <hr />
                    <WrittenBy Authordata={this.state}/>
                <hr />
            </>
        )
    }
}
export default ReactArticle;