import { Component } from "react";
import './../../styles/AuthorInfo.css'

class AuthorInfo extends Component
{
    render(props)
    {
        console.log(this.props)
        return(
            <>
                <div className={"Author"}>
                    <div className={"person-info"}>
                        <img src={this.props.info.authorImage} alt="AuthorImage" />
                        <div>
                            <p>{this.props.info.authorName}</p>
                            <p className={"date"}>{this.props.info.date} {this.props.info.readTime}</p>
                        </div>
                    </div>
                    <div className={"socialmedia"}>
                        <a href={this.props.info.facebookId} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <a href={this.props.info.instagramId} target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
                        <a href={this.props.info.linkedinID} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href={this.props.info.youtubeId} target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
                    </div>
                </div>
            </>
        )
    }
}
export default AuthorInfo;