import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => {
    return (
        <ReactModal
            isOpen = {!!props.selected}
            contentLabel = {"Example modal"}
            onRequestClose = {props.clearSelect}
            ariaHideApp = {false}
        >
            <h3>Picked option: {props.selected}</h3>
            <button onClick={props.clearSelect}> Okay </button>
        </ReactModal>
    )
}

export default OptionModal;