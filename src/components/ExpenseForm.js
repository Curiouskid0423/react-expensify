import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import Button from "@material-ui/core/Button";

/**
 * ExpenseForm will be reused in Edit Expense and Add Expense.
 * `react-dates` has some outdated dependencies. Beware.
 * @author Kevin Li
 */

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        const isEdit = !!props.expense;
        this.state = {
            description: isEdit ? props.expense.description : "",
            amount: isEdit ? props.expense.amount.toString() : "",
            note: isEdit ? props.expense.note : "",
            createdAt: isEdit ? moment(props.expense.createdAt) : moment(),
            calFocused: false,
            error: ""
        }
    }

    // Event listener for description change
    onDescChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }

    // Event listener for amount changes, with regex check
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    }

    // Event listener for note changes
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt });
        }
    }

    onAddExpense = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const error = "Please fill out the form.";
            this.setState({ error });
        } else {
            this.setState({error: ""});
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
                <form className={"form"} onSubmit = {this.onAddExpense}>
                    { this.state.error && <h4 className={"form__error"}>{ this.state.error }</h4> }
                    <input className={"text-input"} type = "text" placeholder = "Description"
                           value = {this.state.description} autoFocus = {true}
                           onChange={this.onDescChange}
                    />
                    <input className={"text-input"} type = "number" step =".01" placeholder = "Amount" value={this.state.amount}
                           onChange={this.onAmountChange}/>
                    <textarea className={"text-input"} placeholder = "Optional notes for the expense"
                              value = {this.state.note}
                              onChange={this.onNoteChange}>
                    </textarea>
                    <SingleDatePicker date = {this.state.createdAt}
                                      onDateChange = {this.onDateChange}
                                      focused = {this.state.calFocused}
                                      onFocusChange = {({ focused }) => this.setState({calFocused: focused})}
                                      numberOfMonths = {1} isOutsideRange = {() => false}
                    />
                    <br/>
                    {/*<button type="submit"> Submit </button>*/}
                    <div>
                        <Button variant="contained" color = {"primary"} type ={"submit"}>
                            Submit
                        </Button>
                    </div>
                </form>
        )
    }
}