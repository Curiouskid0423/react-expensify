import React from "react";

const LoadingPage = () => {
    return (
        <div className={"loader-object"}>
            <img src = {"/images/loader.gif"} />
            <p>Loading database...</p>
        </div>
    )
};

export default LoadingPage;