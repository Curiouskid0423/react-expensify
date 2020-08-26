import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LogIn = (props) => {
    return (
        <div className ={"box-layout"}>
            <div className = {"box-layout__box"}>
                <div className={"box-layout__textarea"}>
                    <h1 className={"box-layout__title"}>React-Expensify</h1>
                    <h3>Keep track of your budget on a React App</h3>
                </div>
                <Button variant="contained" color="primary" onClick = {props.dispatchLogin}>
                    Login
                </Button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogIn);