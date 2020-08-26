import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import {startLogout} from "../actions/auth";

export const Header = (props) => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to = "/" activeClassName = "is-active" exact> Home </NavLink>
            <NavLink to = "/create" activeClassName = "is-active"> AddExpense </NavLink>
            <button onClick = {props.dispatchLogOut} > LogOut </button>
        </header>
    )
}

// Remember: The dispatch object "value" has to be a function.
const mapDispatchToProps = (dispatch) => ({
    dispatchLogOut: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);