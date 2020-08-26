import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = ({ id, description,
                         amount, createdAt }) => {
    return (
        <Link className={"list-item"} to = {`/edit/${id}`}>
            <div>
                <h3>{ description }</h3>
                <span>{numeral(amount).format("$0,0.00")}</span>
            </div>
            <h4>
                <span>{ moment(createdAt).format("MMM Do YYYY") }</span>
            </h4>
        </Link>
    );
};

export default ExpenseItem;