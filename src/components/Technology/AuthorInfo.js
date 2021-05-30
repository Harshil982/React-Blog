import { Component } from "react";
import './../../styles/AuthorInfo.css'

class AuthorInfo extends Component
{
    render(props)
    {
        return(
            <>
                <div className={"Author"}>
                    <div className={"person-info"}>
                        <img src={this.props.path.authorImage} alt="AuthorImage" />
                        <div>
                            <p>{this.props.path.name}</p>
                            <p className={"date"}>Jan 28,2019 10 min read</p>
                        </div>
                    </div>
                    <div className={"socialmedia"}>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-youtube-square"></i>
                    </div>
                </div>
            </>
        )
    }
}
export default AuthorInfo;