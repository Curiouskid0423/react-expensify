import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItem = ({ id, description,
                         amount, createdAt }) => {
    return (
        <div>
            <Link to = {`/edit/${id}`}>
                <h4>{ description }</h4>
            </Link>
            <h4>
                {numeral(amount).format("$0,0.00")}
                &nbsp;--&nbsp;
                { moment(createdAt).format("MMM Do YYYY") }
            </h4>
        </div>
    );
};

export default ExpenseItem;