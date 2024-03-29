import { Component } from "react";
import './../styles/TopPosts.css';
import { Link } from 'react-router-dom';
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
                    {this.props.topdata.map((item,i)=> (
                        <div key={i}>
                            {(item.number === "1") && 
                            <Link to={{
                                pathname : `${item.url}`,
                                state : {
                                    item
                                }
                            }}>
                            <img src={process.env.PUBLIC_URL + `${item.path}` } alt="AB" /></Link>}
                        </div>
                    ))}
                    <div className={"flex-cont-1"}>
                        <div>
                            {this.props.topdata.map((item,index) => (
                                <div key={index}>
                                    {(item.number === "1") && 
                                    <Link to={{
                                        pathname : `${item.url}`,
                                        state : {
                                            item
                                        }
                                    }}>
                                    <h2>{item.ArticleHeading}</h2><p><span>{item.type}</span> / {item.date}</p></Link>}
                                </div>
                            ))}
                        </div>
                        {this.props.topdata.map((item,index) => (
                            <div key={index}>
                                {(item.number === "1") && <p className={"number"}>{item.number}</p>}
                            </div>
                        ))}
                    </div>
                    {this.props.topdata.map((item,i) => (
                        <div key={i}>
                            {(item.number !== "1") &&
                            <Link to={{
                                pathname : `${item.url}`,
                                state : {
                                    item
                                }
                            }}>
                            <ToppostCard source={item} /></Link>}
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default TopPost;