import { Component } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import LatestStories from "./LatestStories";

class Home extends Component
{
    render()
    {
        return(
            <>
                <Header />
                <Gallery />
                <Latest />
                <LatestArticle />
                <LatestStories />
            </>
        )
    }
}
export default Home;