import React from "react";
import { getExpenseTotal } from "../selectors/getSummary";

const Summary = ({ expenses }) => {
    return (
        <div>
            <h4>
                Viewing {getExpenseTotal(expenses).num} item(s)
                with a total of {getExpenseTotal(expenses).amount}
            </h4>
        </div>
    );
}

export default Summary;