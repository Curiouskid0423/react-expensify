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

import configStore from "./store/configStore";
import { startSetExpenses } from "./actions/expenses";
import { Provider } from "react-redux";

/* Redux store object. */
const store = configStore();
const storage = (
    <Provider store = {store}>
        <Router />
    </Provider>
);



ReactDOM.render(<p>Loading database...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(storage, document.getElementById("app"));
});

