import { Component } from "react";
import './../styles/LatestArticle.css'
import LatestArticleCard from "./LatestArticle_card";
import TopPost from "./TopPosts";
import img2 from './images/img_2.jpg'

class LatestArticle extends Component
{
    render()
    {
        return(
            <>
                <h1 className={"article"}>Latest Articles</h1>
                <div className={"line"}></div>
                <div className={"grid-article"}>
                    <LatestArticleCard />
                    <div className={"ads"}>
                        <h3>Advertisement</h3>
                    </div>
                    <LatestArticleCard />
                    <LatestArticleCard />
                    <p className={"more"}>VIEW MORE <i className="fas fa-arrow-right"></i></p>
                    <LatestArticleCard />
                    <div className={"toppost"}>
                        <TopPost />
                    </div>
                    <div className={"loadmore"}>
                        <p><i className="fas fa-arrow-down"></i> LOAD MORE</p>
                    </div>
                    <div className={"slideshow"}>
                        <img src={img2} alt="Amitabh sir"/>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestArticle;