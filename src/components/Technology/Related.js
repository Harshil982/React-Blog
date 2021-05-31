import { Component } from "react";
import './../../styles/Related.css'
import RelatedCard from "./RelatedCard";
import related1 from './../images/img_12.jpg'
import related2 from './../images/img_10.jpg'
import related3 from './../images/img_11.jpg'

class Related extends Component
{
    state ={
        AuthorDetail :[
            {
                id :"1",
                src : related1,
                related : "Also tagged Reactjs"
            },
            {
                id :"2",
                src : related2,
                related : "Related reads"
            },
            {
                id :"3",
                src : related3,
                related : "Related reads"
            },
        ]
    }
    render()
    {
        return(
            <>
                <div className={"related-container"}>
                    <h1 className={"more-from"}>More from Siren</h1>
                    <hr/>
                    <div className={"related-card-container"}>
                        {this.state.AuthorDetail.map((item)=>(
                            <div key={item.id}>
                                <RelatedCard AuthorDetail={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
export default Related;