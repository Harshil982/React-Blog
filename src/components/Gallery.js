import { Component } from "react";
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import './../styles/gallery.css'

class Gallery extends Component
{
    render()
    {
        return(
            <>
                <div className={"grid-container"}>
                    <div className={"grid-item1"}>
                        <img src={img1} className={"img1"} alt="img1" />
                        <div className={"text"}>
                            <p className={"title"}>Title Of Verticle Gallery</p>
                            <p className={"date"}>Travel / August 2017</p>
                        </div>
                    </div>
                    <div className={"grid-item"}>
                        <img src={img2} className={"img2"} alt="img2" />
                        <div className={"text-cont"}>
                            <p className={"title"}>The Sound Cloud</p>
                            <p className={"title"}>You loved is doomed</p>
                            <p className={"date"}>Travel / August 2017</p>
                        </div>
                    </div>
                    <div className={"grid-item"}>
                        <img src={img2} className={"img2"} alt="img2" />
                        <div className={"text-cont"}>
                            <p className={"title"}>The Sound Cloud</p>
                            <p className={"title"}>You loved is doomed</p>
                            <p className={"date"}>Travel / August 2017</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Gallery;