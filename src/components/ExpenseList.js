import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/expenses";

/**
 * Helper method to load each expense.
 * @param props
 * @return {*}
 */
const ExpensesLoader = (props) => {
    if (props.expenses.length === 0) {
        return (<h4>No expense is tracked under the given condition.</h4>);
    }
    return props.expenses.map((item) => <ExpenseItem key = {item.id} {...item} />);
}

export const ExpenseList = (props) => {
    return (
        <div>
            <ExpensesLoader expenses = {props.expenses} />
        </div>
    )
}

/**
 * MapStateToProps take in two arguments: state, and ownProps
 * The `state` object could actually be called store (redux)
 * @param state
 * @return a `props` object
 */
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);