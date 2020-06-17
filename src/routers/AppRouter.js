/**
 * Router Components
 * @author Kevin Li
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboard from "../components/Home";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/404Page";

// Browser routers takes only one component child (e.g. one div, or one Switch)
const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component = {ExpenseDashboard} exact = {true} />
                <Route path = "/create" component = {AddExpense} />
                <Route path = "/edit/:id" component={EditExpense} />
                <Route component = {NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;