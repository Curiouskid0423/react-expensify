import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {editExpense, removeExpense} from "../actions/expenses";

export class EditExpense extends React.Component {
    constructor(props) {
        super(props);
    }

    onEdit = (expense) => {
        const id = this.props.expense.id;
        this.props.dispatchEdit(id, expense);
        this.props.history.push("/");
    }

    onRemoval = () => {
        this.props.dispatchRemove({ id: this.props.expense.id});
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <ExpenseForm expense = {this.props.expense} onSubmit = {this.onEdit} />
                <button onClick = {this.onRemoval}> Remove </button>
            </div>
        )
    }

}

// match.params.id is implicitly returned by React Component.
// ownProps take in the props from the connected component.
const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses.find((item) => {
            return item.id === ownProps.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEdit: (id, expense) => dispatch(editExpense(id, expense)),
        dispatchRemove: (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);