import {combineReducers, createStore} from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

/**
 * With combineReducers,
 * each reducer is in charge of ONE entry in the state object.
 * @return a store object that keeps track of the state object CONSTANTLY,
 * and not just the time it is created.
 */
const launchStore = () => {
    return createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        })
    );
}

export default launchStore;
