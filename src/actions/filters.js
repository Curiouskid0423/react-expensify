/**
 * Actions file for filters.
 * @author Kevin Li
 */


/**
 * Action Generator for setting filter text.
 * @param query
 * @returns {{query: string, type: string}}
 */
export const setTextFilter = (query = "") => {
    return {
        type: "SET_TEXT_FILTER",
        query
    }
};

/**
 * Action generator for setting sortBy to amount.
 * @returns {{type: string}}
 */
export const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
    }
};

/**
 * Action generator for setting sortBy to amount.
 * @returns {{type: string}}
 */
export const sortByDate = () => {
    return {
        type: "SORT_BY_DATE"
    }
};

/**
 * Action Generator of setting start date.
 * @param dateVal
 * @returns {{type: string, startDate: *}}
 */
export const setStartDate = (dateVal) => {
    return {
        type: "SET_START_DATE",
        startDate: dateVal
    }
}

/**
 * Action Generator of setting the end date.
 * @param dateVal
 * @returns {{endDate: *, type: string}}
 */
export const setEndDate = (dateVal) => {
    return {
        type: "SET_END_DATE",
        endDate: dateVal
    }
}
