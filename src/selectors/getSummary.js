/**
 * A selector function that takes in a list of expenses,
 * and return an object {total number of items, total amount}
 */

const reducerFn = (curr, val) => curr + val;

export const getExpenseTotal = (expenses) => {
    const startVal = 0;
    return expenses
        .map((item) => item.amount)
        .reduce(reducerFn, startVal);
};
