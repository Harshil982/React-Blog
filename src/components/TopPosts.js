import { Component } from "react";
import './../styles/TopPosts.css'
import img2 from './images/img_2.jpg'
import TopPostimage1 from './images/img_8.jpeg'
import TopPostimage2 from './images/img_9.jpg'
import TopPostimage3 from './images/img_10.jpg'
import ToppostCard from "./Toppost_card";

class TopPost extends Component
{
    constructor()
    {
        super();
        this.state = {
            data : [
            {
                number : 2,
                src : TopPostimage1
            },
            {
                number : 3,
                src : TopPostimage2
            },
            {
                number : 4,
                src : TopPostimage3
            },
          ],
        }
    }
    
    render(props)
    {
        console.log(this.props);
        return(
            <>
                <div className={"top-heading"}>
                    <h1>Top Posts</h1>
                    <div className={"underline"}></div>
                </div>
                <div className="toppost-body">
                    <img src={img2} alt="AB" />
                    <div className={"flex-cont"}>
                        <div>
                            {this.props.topdata.map((item,index) => (
                                <div key={index}>
                                    {(item.number === "1") && <h2>{item.heading}</h2>}
                                </div>
                            ))}
                            {this.props.topdata.map((item,index) => (
                                <div key={index}>
                                    {(item.number === "1") && <p>{item.type} / {item.date}</p>}
                                </div>
                            ))}
                        </div>
                        {this.props.topdata.map((item,index) => (
                            <div key={index}>
                                {(item.number === "1") && <p className={"number"}>{item.number}</p>}
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <ToppostCard source={this.state.data[0]}/>
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <ToppostCard  source={this.state.data[1]}/>
                    </div>
                    <hr />
                    <div className={"flex-cont"}>
                        <ToppostCard  source={this.state.data[2]}/>
                    </div>
                </div>
            </>
        )
    }
}
export default TopPost;