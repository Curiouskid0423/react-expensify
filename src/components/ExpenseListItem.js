import React from "react";

const ExpenseItem = ({ description, amount, createdAt }) => {
    return (
        <div>
            <h4>{ description }</h4>
            <h4> {amount} -- {createdAt} </h4>
        </div>
    );
};

export default ExpenseItem;