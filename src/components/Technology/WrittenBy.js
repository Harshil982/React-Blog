import { Component } from "react";
import './../../styles/WrittenBy.css'

export class WrittenBy extends Component
{
    render(props)
    {
        console.log(this.props)
        return(
            <>
                <div className={"writtenBy"}>
                    <img src={this.props.Authordata.authorImage} alt={this.props.Authordata.name} />
                    <div>
                        <p className={"wgray"}>Written By</p>
                        <p>{this.props.Authordata.name}</p>
                        <p className={"gray"}>Jan 28,2019 10 min read</p>
                    </div>
                </div>
            </>
        )
    }
}