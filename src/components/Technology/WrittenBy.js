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
                        <p>Written By</p>
                        <p>{this.props.Authordata.authorName}</p>
                        <p>{this.props.Authordata.date}-{this.props.Authordata.readTime}</p>
                    </div>
                </div>
            </>
        )
    }
}