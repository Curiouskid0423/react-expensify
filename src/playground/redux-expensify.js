import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// ----------- Expense Section ----------- //

/**
 *  Expense reducer keeps track of the expenses array, i.e. only
 *  modifies the "expenses" portion of  the central state.
 * @param prevState
 * @param action Action to react to
 * @returns {*[]}
 */
const expenseReducer = (prevState = [], action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...prevState,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return prevState.filter((item) => item.id !== action.id);
        case "EDIT_EXPENSE":
            return prevState.map((item) => {
                if (item.id === action.id) {
                    item = {
                        ...item,
                        ...action.edit
                    }
                }
                return item;
            });
        default:
            return prevState;
    }
};

/**
 * Action generator for add expenses.
 * @param description
 * @param note
 * @param amount
 * @param createdAt
 * @returns {{type: string, expense: {note, createdAt, amount: *, description: *, id: string}}}
 */
const addExpense = ({ description, note = "", amount, createdAt = 0}) => {
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

const removeExpense = ({ id }) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

const editExpense = (id, editObj) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        edit: editObj
    }
}

// ----------- Filter Section ----------- //

const filterDefault = {
    text: "", sortBy: "date", startDate: undefined, endDate: undefined
};

const filterReducer = (prevState = filterDefault, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...prevState,
                text: action.query
            }
        default:
            return prevState;
    }
};

const setTextFilter = (query = "") => {
    return {
        type: "SET_TEXT_FILTER",
        query
    }
};

// ----------- createStore Section ----------- //

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

const first = store.dispatch(addExpense({ description: "Initial expense", amount: 31415 }));
const second = store.dispatch(addExpense({ description: "Second expense", amount: 84793 }));
const third = store.dispatch(addExpense({ description: "Third expense", amount: 52520 }));
store.dispatch(removeExpense({ id: first.expense.id }));
store.dispatch(editExpense(second.expense.id, { amount: 78989 }));
//  start FILTER actions.

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

unsubscribe();


/* A demo state variable for development reference. */
const demoState = {
    expenses: [{
        id: 'kevinhanyulin',
        description: "A lunch bill at Berkeley Social Club",
        note: "Make notes of the lunch",
        amount: 1234,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
};
