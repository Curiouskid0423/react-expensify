import React from "react";

const EditExpense = (props) => {
    return (
        <div>
            <h4> Edit expense dashboard. ID:  {props.match.params.id} </h4>
        </div>
    )
};

export default EditExpense;