import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate} from "../actions/filters";

/**
 * Helper method to update sortBy with select options.
 * @param props is the `props` passed in by ExpenseListFilters
 * @param value
 */
const updateSortBy = (props, value) => {
    if (value === "amount") {
        props.dispatch(sortByAmount());
    } else {
        props.dispatch(sortByDate());
    }
}

const ExpenseListFilters = (props) => {
    return (
        <div>
            <input type = "text" onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}/> &nbsp;
            <select onChange = {(e) => updateSortBy(props, e.target.value)}>
                <option value = "date"> Date </option>
                <option value = "amount"> Amount </option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);