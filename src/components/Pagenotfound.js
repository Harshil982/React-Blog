import { Component } from "react";
import Header from "./Header";
import './../styles/PagenotFound.css'

class PagenotFound extends Component
{
    render()
    {
        return(
            <>
                <Header/>
                <hr />
                <div className={"error"}>
                    <h1>ERROR 404</h1>
                    <h2>PAGE NOT FOUND</h2>
                </div>
            </>
        )
    }
}
export default PagenotFound;