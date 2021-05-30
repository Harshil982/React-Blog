import { Component } from "react";
import './../styles/LatestArticle.css'
import Infocard from "./InfoCard";
import TopPost from "./TopPosts";
import articleimage1 from './images/img_2.jpg'
import articleimage2 from './images/img_8.jpeg'
import articleimage3 from './images/img_9.jpg'
import articleimage4 from './images/img_10.jpg'

class LatestArticle extends Component
{
    render()
    {
        return(
            <>
                <h1 className={"article"}>Latest Articles</h1>
                <div className={"line"}></div>
                <div className={"grid-article"}>
                    <Infocard src={articleimage1}/>
                    <div className={"ads"}>
                        <h3>Advertisement</h3>
                    </div>
                    <Infocard  src={articleimage2}/>
                    <Infocard  src={articleimage3}/>
                    <div className={"temp"}>
                        <Infocard  src={articleimage4}/>
                    </div>
                    <p className={"more"}>LOAD MORE <i className="fas fa-arrow-right"></i></p>
                    <div className={"toppost"}>
                        <TopPost />
                    </div>
                    <div className={"loadmore"}>
                        <p><i className="fas fa-arrow-down"></i> LOAD MORE</p>
                    </div>
                    <div className={"slideshow"}>
                        <div className={"myslide"}>
                            <img src={articleimage2} alt="slide1" />
                            <div className={"text-part"}>
                                <h3>Title Of Verticle Gallery</h3>
                                <p>Travel / August 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestArticle;