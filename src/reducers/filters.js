import moment from "moment";
/**
 * Filter reducer file.
 * @author Kevin Li
 */

const filterDefault = {
    text: "", sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};
/**
 * Reducer function for filter.
 * @param prevState
 * @param action
 * @returns the updated filter entry of the state object
 */
const filterReducer = (prevState = filterDefault, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...prevState,
                text: action.query
            };
        case "SORT_BY_AMOUNT":
            return {
                ...prevState,
                sortBy: "amount"
            };
        case "SORT_BY_DATE":
            return {
                ...prevState,
                sortBy: "date"
            };
        case "SET_START_DATE":
            return {
                ...prevState,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...prevState,
                endDate: action.endDate
            };
        default:
            return prevState;
    }
};

export default filterReducer;