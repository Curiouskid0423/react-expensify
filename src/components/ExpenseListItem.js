import React from "react";
import {connect} from "react-redux";
import {removeExpense} from "../actions/expenses";


const ExpenseItem = ({ id, dispatch, description,
                         amount, createdAt }) => {
    return (
        <div>
            <h4>{ description }</h4>
            <h4> {amount} -- {createdAt} </h4>
            <button onClick={(e) => {
                dispatch(removeExpense({ id })); // Be careful about the params you set
            }}>remove</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseItem);