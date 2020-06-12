import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {addExpense} from "../actions/expenses";

export class AddExpense extends React.Component {
    constructor(props) {
        super(props);
    }
    // This component can be transformed into a stateless component, but
    // currently being a classic just for the sake of testing.
    onSubmit = (expenseObj) => {
        this.props.dispatchAdder(expenseObj);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <br/>
                <ExpenseForm onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

// Use mapDispatchToProps to simplify functions for better testing experience.
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAdder: (expenseObj) => dispatch(addExpense(expenseObj))
    };
};

// TODO: We can safely use `connect` without `mapStateToProps` if we don't need info from
//  the store other than the function `dispatch()`, in order to update the redux store.
export default connect(undefined, mapDispatchToProps)(AddExpense);