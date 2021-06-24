import { Component } from "react";
import Header from "../Header";
import Infocard from "../InfoCard";
import TopPost from "../TopPosts";
import axios from 'axios'
import './../../styles/bollywood.css'

class Bollywood extends Component
{
    state = {
        articledata : [],
        topPost :[]
    }
    constructor()
    {
        super();
        document.title = "Bollywwod Blogs";
        axios.get("http://localhost:3008/bollywood")
            .then((response) => {
                console.log(response);
                this.setState({
                    articledata : response.data.normalArticle,
                    topPost : response.data.TopPostData 
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("fetching data")
    }
    render()
    {
        console.log(this.state.topPost)
        return(
            <>
                <div className={"body-margin"}>
                    <Header />
                    <div className={"bollywood-container"}>
                        <div>
                            <h1>Bollywood</h1>
                            <div className={"line"}></div>
                        </div>
                        <div className={"bollywood-toppost"}>
                            <TopPost topdata={this.state.topPost} />
                        </div>
                        
                        {this.state.articledata.map((item)=>(
                            <div key={item.id}>
                                <Infocard src={item}/>
                            </div>
                        ))}
                        <div className={"advertisement"}>
                            <p>Advertisement</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Bollywood;