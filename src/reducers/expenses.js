/**
 * Expenses reducer file.
 * @author Kevin Li
 */

//TODO: Best practice to keep `reducer` just updating the value, and avoid computations.
//  Do the computations in action generators.
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

export default expenseReducer;