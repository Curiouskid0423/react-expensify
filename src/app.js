/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboard = () => {
    return (
        <div>
            <h4>Hello this is the main dashboard. </h4>
        </div>
    )
};

const AddExpense = () => {
    return (
        <div>
            <h4> Add expense dashboard. </h4>
        </div>
    )
};

const EditExpense = () => {
    return (
        <div>
            <h4> Edit expense dashboard. </h4>
        </div>
    )
};

const HelpPage = () => {
    return (
        <div>
            <h4> Help page. </h4>
        </div>
    )
};

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to = "/" activeClassName = "is-active" exact> Home </NavLink>
            <NavLink to = "/create" activeClassName = "is-active"> AddExpense </NavLink>
            <NavLink to = "/edit" activeClassName = "is-active"> Edit </NavLink>
            <NavLink to = "/help" activeClassName = "is-active"> Help </NavLink>
        </header>
    )
}

// <Link> tag utilizes client side routing by aborting the event listener,
// and manually link internally to our javascript.
const NotFound = () => {
    return (
        <div>
            <h4>404 Not found page. </h4>
            <Link to = "/">Go Home</Link>
        </div>
    )
}
// Browser router takes only one component child (e.g. one div, or one Switch)
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component = {ExpenseDashboard} exact = {true} />
                <Route path = "/create" component = {AddExpense} />
                <Route path = "/edit" component = {EditExpense} />
                <Route path = "/help" component = {HelpPage} />
                <Route component = {NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
