import { Component } from "react";
import './../styles/LatestArticle.css'
import Infocard from "./InfoCard";
import TopPost from "./TopPosts";
import Carousel from 'react-elastic-carousel';
import axios from 'axios'

class LatestArticle extends Component
{
    state = {
        latestArticle : [],
        slideshow : []
    }
    componentDidMount()
    {
        axios.get("http://localhost:3008/")
            .then((response) => {
                console.log(response);
                this.setState({
                    latestArticle : response.data.latestArticle,
                    slideshow : response.data.slideshowData
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("fetching data")
    }
    render(props)
    {
        console.log(this.props);
        console.log(this.state.latestArticle)
        return(
            <>
                <h1 className={"article"}>Latest Articles</h1>
                <div className={"line"}></div>
                <div className={"grid-article"}>
                    {this.state.latestArticle.map((item,index) => (
                        <div key={item.id}>
                            <Infocard  src={item}/>
                        </div>
                    ))}
                    <div className={"ads"}>
                        <h3>Advertisement</h3>
                    </div>
                    <p className={"more"}>LOAD MORE <i className="fas fa-arrow-right"></i></p>
                    <div className={"toppost"}>
                        <TopPost topdata={this.props.topdata}/>
                    </div>
                    <div className={"loadmore"}>
                        <p><i className="fas fa-arrow-down"></i> LOAD MORE</p>
                    </div>
                    <div className={"slideshow"}>
                        <Carousel>
                            {this.state.slideshow.map((item,index) => (
                                <div className={"myslide"} key={item.id}>
                                    <img src={item.imgPath} alt="slide4" />
                                    <div className={"text-part"}>
                                        <h3>{item.title}</h3>
                                        <p>{item.type} / {item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}
export default LatestArticle;