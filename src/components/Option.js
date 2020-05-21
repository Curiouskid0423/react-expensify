import React from "react";

const Option = (props) => {
    return (
        <div>
      <span> {props.optionText}
          <button
              onClick={(e) => {
                  props.handleRemoveOption(props.optionText);
              }}
          >
          X
        </button>
      </span>
        </div>
    );
};

export default Option;