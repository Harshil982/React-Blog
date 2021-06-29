import { Component } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import LatestStories from "./LatestStories";
import axios from 'axios'

class Home extends Component
{
    state = {
        latestData : [],
        toppost :[],
        latestStoriesData : []
    }
    componentDidMount()
    {
        axios.get("http://localhost:3008/")
            .then((response) => {
                console.log(response);
                this.setState({
                    latestData :response.data.latestData,
                    toppost : response.data.topPostdata,
                    latestStoriesData : response.data.latestStories
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("fetching data")
    }
    render()
    {
        console.log(this.state.toppost)
        return(
            <>
                <div className={"body-margin"}>
                    <Header />
                    <Gallery />
                    <Latest data={this.state.latestData}/>
                    <LatestArticle topdata={this.state.toppost}/>
                    <LatestStories storiesData={this.state.latestStoriesData}/>
                </div>
            </>
        )
    }
}
export default Home;