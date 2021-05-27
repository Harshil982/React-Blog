import { Component } from "react";
import './../styles/TopPosts.css'
import img2 from './images/img_2.jpg'

class TopPost extends Component
{
    state = {
        src : img2
    }
    render()
    {
        return(
            <>
                <div className={"top-heading"}>
                    <h1>Top Posts</h1>
                    <div className={"line"}></div>
                </div>
                <div className="toppost-body">
                    <img src={this.state.src} alt="AB" />
                    <div className={"flex-cont"}>
                        <div>
                            <h2>Catch Waves With an adventure guide</h2>
                            <p><span>Travel</span> / August 2017</p>
                        </div>
                        <p className={"number"}>1</p>
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <img src={img2} className={"sub-image"} alt="VK"/>
                        <div>
                            <p>Catch Waves With an adventure guide</p>
                            <p><span>Travel</span> / August 2017</p>
                        </div>
                        <p className={"number"}>2</p>
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <img src={img2} className={"sub-image"} alt="VK"/>
                        <div>
                            <p>Catch Waves With an adventure guide</p>
                            <p><span>Travel</span> / August 2017</p>
                        </div>
                        <p className={"number"}>3</p>
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <img src={img2} className={"sub-image"} alt="VK"/>
                        <div>
                            <p>Catch Waves With an adventure guide</p>
                            <p><span>Travel</span> / August 2017</p>
                        </div>
                        <p className={"number"}>4</p>
                    </div>
                </div>
            </>
        )
    }
}
export default TopPost;