import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {startLogout} from "../actions/auth";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

export const Header = (props) => {
    return (
        <header className={"header"}>
            <Link to = "/dashboard" className={"header__title"}>
                <h1> Expensify </h1>
            </Link>
            <div className={"header__right"}>
                <Button variant="contained" color = {"primary"}
                        className = {"header__button"} onClick = {props.dispatchLogOut}>
                    Logout
                </Button>
                <Avatar className = {"header__avatar"}> {props.nameInitial} </Avatar>
            </div>
        </header>
    )
}

// Remember: The dispatch object "value" has to be a function.
const mapDispatchToProps = (dispatch) => ({
    dispatchLogOut: () => dispatch(startLogout())
})

const mapStateToProps = (state) => ({
    nameInitial: state.auth.nameInitial
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);