import { Component } from "react";
import Header from "../Header";
import Infocard from "../InfoCard";
import TopPost from "../TopPosts";
import BTopPostiImg1 from './../images/img_8.jpeg'
import BTopPostiImg2 from './../images/img_1.jpg'
import BTopPostiImg3 from './../images/img_2.jpg'
import BTopPostiImg4 from './../images/img_5.jpg'
import BTopPostiImg5 from './../images/img_7.jpg'
import BTopPostiImg6 from './../images/img_9.jpg'
import BTopPostiImg7 from './../images/img_12.jpg'
import './../../styles/bollywood.css'

class Bollywood extends Component
{
    state = {
        path : [
            {
                id : "card1",
                src :BTopPostiImg1
            },
            {
                id : "card2",
                src :BTopPostiImg2
            },
            {
                id : "card3",
                src :BTopPostiImg3
            },
            {
                id : "card4",
                src :BTopPostiImg4
            },
            {
                id : "card5",
                src :BTopPostiImg5
            },
            {
                id : "card6",
                src :BTopPostiImg6
            },
            {
                id : "card7",
                src :BTopPostiImg7
            }
        ]
    }
    render()
    {
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
                            <TopPost />
                        </div>
                        {this.state.path.map((item)=>(
                            <div key={item.id}>
                                <Infocard src={item.src}/>
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