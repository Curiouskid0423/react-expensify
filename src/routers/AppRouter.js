/**
 * Router Components
 * @author Kevin Li
 */
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import ExpenseDashboard from "../components/Home";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/404Page";
import LogIn from "../components/LogIn";
import PublicRoute from "./PublicRoute";


export const history = createBrowserHistory();

// Browser routers takes only one component child (e.g. one div, or one Switch)
const AppRouter = () => (
    <Router history = {history}>
        <div>
            <Switch>
                <PublicRoute path = "/" component = {LogIn} exact = {true} />
                <PrivateRoute path = "/dashboard" component = {ExpenseDashboard}/>
                <PrivateRoute path = "/create" component = {AddExpense} />
                <PrivateRoute path = "/edit/:id" component={EditExpense} />
                <Route component = {NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;