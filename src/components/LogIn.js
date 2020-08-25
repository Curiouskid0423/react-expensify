import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LogIn = (props) => {
    return (
        <div>
            <button onClick = {props.dispatchLogin}>
                Login
            </button>
            <h2>Hello this is a Log In page.</h2>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogIn);