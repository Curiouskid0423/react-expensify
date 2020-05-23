import React from "react";
import {Link} from "react-router-dom";

// <Link> tag utilizes client side routing by aborting the event listener,
// and manually link internally to our javascript.
const NotFound = () => {
    return (
        <div>
            <h4>404 Not found page. </h4>
            <Link to = "/">Go Home</Link>
        </div>
    )
}

export default NotFound;