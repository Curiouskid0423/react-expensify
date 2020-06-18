import React from "react";
import { getExpenseTotal } from "../selectors/getSummary";

const Summary = ({ expenses }) => {
    return (
        <div>
            <h4>
                Viewing {expenses.length} item(s)
                with a total of {getExpenseTotal(expenses)} dollar(s).
            </h4>
        </div>
    );
}

export default Summary;