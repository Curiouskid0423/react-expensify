/**
 * Selector methods for expenses.
 * @author Kevin Li
 */

import moment from "moment";

/**
 * Default for filter state.
 */
const filterDefault = {
    text: "", sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

/**
 * Getter method for visible expenses based on filters.
 * @param expenses
 * @param filters
 * @returns {*}
 */
export const getVisibleExpenses = (expenses,
                            {text, sortBy, startDate, endDate} = filterDefault) => {
    const unSorted = expenses.filter((item) => {
        const expMoment = item.createdAt;

        const textMatch = item.description.toLowerCase().includes(text.toLowerCase());
        const startMatch = startDate ? startDate.isSameOrBefore(expMoment, "day") : true;
        const endMatch = endDate ? endDate.isSameOrAfter(expMoment, "day") : true;
        return textMatch && startMatch && endMatch;
    });
    return sortExpenses(unSorted, sortBy);
}

/**
 * Helper method for sorting expense
 * @param target is the array to be sorted
 * @param sortBy is an indicator of what to sort by
 * @returns a sorted array of expenses
 */
export const sortExpenses = (target, sortBy) => {
    if (sortBy === "amount") {
        return target.sort((a, b) => b.amount - a.amount);
    }
    return target.sort((a, b) => b.createdAt - a.createdAt);
}