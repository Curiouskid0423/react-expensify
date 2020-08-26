import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

export const PublicRoute = (
    {isAuthenticated, component: Component, ...rest}
    ) => (<Route {...rest} render = {() => {
        return (isAuthenticated) ?
            <Redirect to = {"/dashboard"} /> :
            <Component {...rest} />
}}/>)



const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);