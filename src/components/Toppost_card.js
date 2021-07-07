import { Component } from "react";

class ToppostCard extends Component {
    render(props) {
        console.log(this.props)
        return (
            <>
                <hr />
                <div className={"flex-cont"}>
                    <img src={process.env.PUBLIC_URL + `${this.props.source.path}`} className={"sub-image"} alt="VK" />
                    <div>
                        <p>{this.props.source.ArticleHeading}</p>
                        <p><span>{this.props.source.type}</span> / {this.props.source.date}</p>
                    </div>
                    <p className={"number"}>{this.props.source.number}</p>
                </div>
            </>
        )
    }
}
export default ToppostCard;