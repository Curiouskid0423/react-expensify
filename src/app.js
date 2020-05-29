/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import configStore from "./store/configStore";
import {getVisibleExpenses} from "./selectors/expenses";
import {addExpense, editExpense} from "./actions/expenses";
import { Provider } from "react-redux";
import {setTextFilter} from "./actions/filters";

/* Redux store object. */
const store = configStore();

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
})

/* Testing data. */
const first = store.dispatch(addExpense({ description: "Initial expense", amount: 84793 }));
const second = store.dispatch(addExpense({ description: "Second expense", amount: 31415, createdAt: 100 }));
const third = store.dispatch(addExpense({ description: "Third expense", amount: 56009, createdAt: 200 }));
// const fourth = store.dispatch(addExpense({ description: "Fourth expense", amount: 44132 }));

const storage = (
    <Provider store = {store}>
        <Router />
    </Provider>
);

ReactDOM.render(storage, document.getElementById("app"));

