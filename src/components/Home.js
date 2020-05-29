import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => {
    return (
        <div>
            <h3> - MAIN DASHBOARD </h3>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
};

export default ExpenseDashboard;