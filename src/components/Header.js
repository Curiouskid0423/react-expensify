import React from "react";

/**
 * All functional components also have to be Capitalized to be considered a
 * React component, whereas a class-based component needs to be Caps and extending
 * React.Component to be considered.
 */
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: "Hello I am Kevin"
}

export default Header;