import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calFocused: null
        }
    }

    /**
     * Helper method to update sortBy with select options.
     * @param props is the `props` passed in by ExpenseListFilters
     * @param value
     */
    updateSortBy = (props, value) => {
        if (value === "amount") {
            this.props.dispatch(sortByAmount());
        } else {
            this.props.dispatch(sortByDate());
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calFocused) => {
        this.setState(() => ({ calFocused }));
    }

    /**
     * Dummy helper method to generate date id for react-dates library
     * @param moment
     * @return an id for the passed in moment object
     */
    getDateId = (moment) => {
        return moment ? moment.toString() : "emptyDate";
    }

    render() {
        return (
            <div>
                <input type = "text" onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/> &nbsp;
                <select onChange = {(e) => this.updateSortBy(this.props, e.target.value)}>
                    <option value = "date"> Date </option>
                    <option value = "amount"> Amount </option>
                </select>
                <DateRangePicker
                    startDate = { this.props.filters.startDate }
                    startDateId = {this.getDateId(this.props.filters.startDate)}
                    endDate = { this.props.filters.endDate }
                    endDateId = {this.getDateId(this.props.filters.endDate)}
                    onDatesChange = { this.onDatesChange }
                    focusedInput = {this.state.calFocused}
                    onFocusChange = {this.onFocusChange}
                    isOutsideRange = {() => false}
                    numberOfMonths = {1} showClearDates = {true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);