import React from "react";
import {Link} from "react-router-dom";


const ExpenseItem = ({ id, description,
                         amount, createdAt }) => {
    return (
        <div>
            <Link to = {`/edit/${id}`}>
                <h4>{ description }</h4>
            </Link>
            <h4> {amount} -- {createdAt} </h4>
        </div>
    );
};

export default ExpenseItem;