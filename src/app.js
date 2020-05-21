/**
 * An app.js file that bootstraps the app.
 * @author Kevin Li
 */
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
