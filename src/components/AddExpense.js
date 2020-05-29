import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {addExpense} from "../actions/expenses";

const AddExpense = (props) => {
    return (
        <div>
            <br/>
            <ExpenseForm onSubmit = {(expenseObj) => {
                props.dispatch(addExpense(expenseObj));
                props.history.push("/");
            }}/>
        </div>
    )
};

// TODO: We can safely use `connect` without `mapStateToProps` if we don't need
//  info from the store other than the function `dispatch()`.
export default connect()(AddExpense);