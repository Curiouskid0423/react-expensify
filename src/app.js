/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/AppRouter";
import "normalize.css/normalize.css";
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss";
import "./firebase/firebase";
// This import is just for practicing.
import "./_playground/es6-promise";

import configStore from "./store/configStore";
import { getVisibleExpenses } from "./selectors/expenses";
import { Provider } from "react-redux";

/* Redux store object. */
const store = configStore();
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});

const storage = (
    <Provider store = {store}>
        <Router />
    </Provider>
);

ReactDOM.render(storage, document.getElementById("app"));

