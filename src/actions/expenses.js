/**
 * Actions file for expenses.
 * @author Kevin Li
 */

import {v4 as uuid} from "uuid";
import database from "../firebase/firebase";


/**
 * @desc A synchronous action generator that returns an object, based
 * on the params passed in by startAddExpense.
 * @param expense
 * @return {{type: string, expense: *}}
 */
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

/**
 * @desc startAddExpense bootstraps the addExpense action dispatch.
 * @param description,  amount, createdAt, note
 * @return an async dispatch function call.
 */
export const startAddExpense = (
    { description = "", amount = 0, createdAt = 0, note = "" } = {}) => {
    return (dispatch) => {
        const expense = { description, amount, createdAt, note };
        // Returning this database call gives a Promise that may be tested on,
        // but the code can work completely fine even if the call isn't returned.
        return database.ref("expense").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}



/**
 * Action for removing expense.
 * @param id
 * @returns {{id: *, type: string}}
 */
export const removeExpense = ({ id }) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

/**
 * Action for editing expense based on provided info.
 * @param id
 * @param editObj
 * @returns {{edit: *, id: *, type: string}}
 */
export const editExpense = (id, editObj) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        edit: editObj
    }
}
