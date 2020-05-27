/**
 * Higher-order component practice. A prologue before utilizing react-redux connect().
 * @author Kevin Li
 */

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
    return (
        <div>
            {props.isAdmin && <h3>{props.info}</h3>}
            <h4>Hello world. This is component Info.</h4>
        </div>
    );
};

const enhanceComp = (WrappedComp) => {
    return (props) => (
        <div>
            <h1>Header Enhanced.</h1>
            {/* TODO: `object spread operator` is valid since
                    props are passed in as object all the time. */}
            <WrappedComp {...props} />
        </div>
    )
}

// This is a higher order component!
const Enhanced = enhanceComp(Info);

ReactDOM.render(<Enhanced isAdmin = {true} info = "These are the inquired details." />, document.getElementById("app"));