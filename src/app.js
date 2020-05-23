/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<Router />, document.getElementById("app"));
