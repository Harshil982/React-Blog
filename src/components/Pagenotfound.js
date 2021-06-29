import { Component } from "react";
import Header from "./Header";
import './../styles/PagenotFound.css'
// import axios from 'axios';

class PagenotFound extends Component {
    // state = {
    //     path: [],
    //     topdata : []
    // }
    // componentDidMount() {
    //     document.title = "Error 404";
    //     axios.get("http://localhost:3008/bollywood")
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({
    //                 path: response.data.list,
    //                 topdata : response.data.top
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     console.log("fetching data")
    // }
    render() {
        // console.log(this.state.path);
        return (
            <>
                <div className={"body-margin"}>
                    <Header />
                    <div className={"error"}>
                        <h1>ERROR 404</h1>
                        <h2>PAGE NOT FOUND</h2>
                    </div>
                    {/* {this.state.path.map((item) => (
                        <div>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                    {this.state.topdata.map((item) => (
                        <p>{item.top}</p>
                    ))} */}
                </div>
            </>
        )
    }
}
export default PagenotFound;