import React from "react";

/**
 * A selector function that takes in a list of expenses,
 * and return an object {total number of items, total amount}
 */
export const getExpenseTotal = (expenses) => {
    let result = {
        num: 0, amount: 0
    }
    for (let i = 0; i < expenses.length; i += 1) {
        result.num += 1;
        result.amount += expenses[i].amount;
    }
    return result;
}
