import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default launchStore;
