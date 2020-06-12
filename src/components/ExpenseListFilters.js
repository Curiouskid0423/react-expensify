import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import { DateRangePicker } from "react-dates";

// Export the unconnected version of ExpenseListFilters for testing.
export class ExpenseListFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calFocused: null
        }
    }

    /**
     * Helper method to update sortBy with select options.
     * @param e is the data from event listener.
     */
    updateSortBy = (e) => {
        const value = e.target.value;
        if (value === "amount") {
            this.props.sortByAmount();
        } else {
            this.props.sortByDate();
        }
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
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
                <input type = "text" onChange={this.onTextChange}/> &nbsp;
                <select onChange = {this.updateSortBy}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (dateVal) => dispatch(setStartDate(dateVal)),
        setEndDate: (dateVal) => dispatch(setEndDate(dateVal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);