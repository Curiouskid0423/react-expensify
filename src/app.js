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
import {addExpense} from "./actions/expenses";

/* Redux store object. */
const store = configStore();

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
})

const first = store.dispatch(addExpense({ description: "Initial expense", amount: 31415 }));
const second = store.dispatch(addExpense({ description: "Second expense", amount: 84793 }));

unsubscribe();

ReactDOM.render(<Router />, document.getElementById("app"));
