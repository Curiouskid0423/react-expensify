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
    if (props.expenses !== []) {
        return props.expenses.map((item) => (
            <div>
               <ExpenseItem key = {item.id} {...item} />
            </div>
        ));
    }
    //FIXME: the below return statement does not work
    return (<h4> No expenses recorded. </h4>);
}

const ExpenseList = (props) => {
    return (
        <div>
            <ExpensesLoader expenses = {props.expenses} />
        </div>
    )
}

/**
 * MapStateToProps take in two arguments: state, and ownProps
 * @param state
 * @return a `props` object
 */
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);