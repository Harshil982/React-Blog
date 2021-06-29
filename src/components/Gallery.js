import { Component } from "react";
import axios from 'axios'
import './../styles/gallery.css'

class Gallery extends Component
{
    state = {
        mainData : [],
        otherData : []
    }
    componentDidMount()
    {
        axios.get("http://localhost:3008/")
            .then((response) => {
                console.log(response);
                this.setState({
                    mainData : response.data.mainGalleryData,
                    otherData : response.data.otherGalleryData
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("fetching data")
    }
    render()
    {
        return(
            <>
                <div className={"grid-container"}>
                    {this.state.mainData.map((item,index) => (
                        <div className={"grid-item1"} key={index}>
                        <img src={item.imgPath} className={"img1"} alt="img1" />
                        <div className={"text"}>
                            <p className={"title"}>{item.title}</p>
                            <p className={"date"}>{item.type} / {item.date}</p>
                        </div>
                    </div>
                    ))}
                    {this.state.otherData.map((item,index) => (
                        <div className={"grid-item"} key={item.id}>
                        <img src={item.imgPath} className={"img2"} alt="img2" />
                        <div className={"text-cont"}>
                            <p className={"title"}>{item.title}</p>
                            <p className={"date"}>{item.type} / {item.date}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Gallery;