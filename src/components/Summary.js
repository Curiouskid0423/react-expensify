import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExpenseTotal } from "../selectors/getSummary";
import {getVisibleExpenses} from "../selectors/expenses";
import Button from "@material-ui/core/Button";

const Summary = ({ expenses }) => {
    return (
        <div className = {"page-header"}>
            <div className={"content-container"}>
                <h2 className={"page-header__title"}>
                    Viewing <span>{expenses.length}</span> item(s)
                    with a total of <span>{getExpenseTotal(expenses)}</span> dollar(s).
                </h2>
                <Button variant="contained" color = {"primary"}>
                    <Link to = {"/create"} className = {"page-header__action"}>Add Expense</Link>
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(Summary);