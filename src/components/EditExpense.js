import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {startEditExpense, startRemoveExpense} from "../actions/expenses";
import Button from "@material-ui/core/Button";

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
                <div className={"page-header"}>
                    <div className={"content-container"}>
                        <h1 className={"page-header__title"}>Edit Expense</h1>
                    </div>
                </div>
                    <ExpenseForm expense = {this.props.expense} onSubmit = {this.onEdit} />
                    {/*<button onClick = {this.onRemoval}> Remove </button>*/}
                    <div className={"remove-btn"}>
                        <Button variant="contained" type ={"submit"} onClick={this.onRemoval}>
                            Remove Expense
                        </Button>
                    </div>
                <br />
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
        dispatchEdit: (id, expense) => dispatch(startEditExpense(id, expense)),
        dispatchRemove: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);