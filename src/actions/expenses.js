/**
 * Actions file for expenses.
 * @author Kevin Li
 */

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
    return (dispatch, getState) => {
        const userId = getState().auth.uid;
        const expense = { description, amount, createdAt, note };
        // Returning this database call gives a Promise that may be tested on,
        // but the code can work completely fine even if the call isn't returned.
        return database.ref(`user/${userId}/expense`).push(expense).then((ref) => {
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
export const removeExpense = (id) => ({
        type: "REMOVE_EXPENSE", id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const userId = getState().auth.uid;
        return database.ref(`user/${userId}/expense/${id}`).set(null).then(() => {
            dispatch(removeExpense(id));
        }, (error) => {
            console.log("Failed at removing an expense:", error);
        });
    }
}


/**
 * Action for editing expense based on provided info.
 * @param id
 * @param editObj
 * @returns {{edit: *, id: *, type: string}}
 */
export const editExpense = (id, editObj) => ({
        type: "EDIT_EXPENSE",
        id,
        edit: editObj
});

export const startEditExpense = (id, editObj = {}) => {
    return (dispatch, getState) => {
        const userId = getState().auth.uid;
         return database.ref(`user/${userId}/expense/${id}`)
             .update(editObj)
             .then(() => {
             dispatch(editExpense(id, editObj));
         });
    }
}

export const setExpenses = (expenses) => {
    return {
        type: "SET_EXPENSES",
        expenses
    };
}

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const userId = getState().auth.uid;
        return database.ref(`user/${userId}/expense`)
            .once("value")
            .then((snapshot) => {
                const lst = [];
                snapshot.forEach((child) => {
                    lst.push({
                        id: child.key,
                        ...child.val()
                    });
                });
                dispatch(setExpenses(lst));
            });
    }
}