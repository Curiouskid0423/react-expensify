import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {editExpense, removeExpense} from "../actions/expenses";

const EditExpense = (props) => {
    return (
        <div>
            <h4> Edit expense dashboard. ID:  {props.match.params.id} </h4>
            <ExpenseForm expense = {props.expense} onSubmit = {(expense) => {
                props.dispatch(editExpense(props.match.params.id, expense));
                props.history.push("/");
            }} />
            <button onClick = {() => {
                props.dispatch(removeExpense({ id: props.expense.id}));
                props.history.push("/");
            }}> Remove </button>
        </div>
    )
};

// match.params.id is implicitly returned by React Component.
// ownProps take in the props from the connected component.
const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses.find((item) => {
            return item.id === ownProps.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpense);