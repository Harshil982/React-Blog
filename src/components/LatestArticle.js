import { Component } from "react";
import './../styles/LatestArticle.css'
import LatestArticleCard from "./LatestArticle_card";
import { Link } from 'react-router-dom'
import TopPost from "./TopPosts";
import img2 from './images/img_2.jpg'
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
                    <LatestArticleCard src={articleimage1}/>
                    <div className={"ads"}>
                        <h3>Advertisement</h3>
                    </div>
                    <LatestArticleCard  src={articleimage2}/>
                    <LatestArticleCard  src={articleimage3}/>
                    <div className={"temp"}>
                        <LatestArticleCard  src={articleimage4}/>
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
                            <img src={articleimage1} alt="slide1" />
                            <div className={"text-part"}>
                                <h3>Title Of Verticle Gallery</h3>
                                <p>Travel / August 2017</p>
                            </div>
                        </div>
                        <div className={"myslide"}>
                            <img src={articleimage1} alt="slide1" />
                            <div className={"text-part"}>
                                <h3>Title Of Verticle Gallery</h3>
                                <p>Travel / August 2017</p>
                            </div>
                        </div>
                        <div className={"myslide"}>
                            <img src={articleimage1} alt="slide1" />
                            <div className={"text-part"}>
                                <h3>Title Of Verticle Gallery</h3>
                                <p>Travel / August 2017</p>
                            </div>
                        </div>
                        {/* <Link className="prev" onClick={plusSlides(-1)}>&#10094;</Link>
                        <Link className="next" onClick={plusSlides(1)}>&#10095;</Link> */}
                    </div>
                </div>
            </>
        )
    }
}
export default LatestArticle;