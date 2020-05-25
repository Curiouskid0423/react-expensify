/**
 * Actions file for expenses.
 * @author Kevin Li
 */

import {v4 as uuid} from "uuid";

/**
 * Action generator for add expenses.
 * @param description
 * @param note is optional
 * @param amount
 * @param createdAt stored in numeric value (in respect to unix epoch time)
 * @returns {{type: string, expense: {note, createdAt, amount: *, description: *, id: string}}}
 */
export const addExpense = ({ description, note = "", amount, createdAt = 0}) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

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
