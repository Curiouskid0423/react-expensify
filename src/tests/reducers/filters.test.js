import filterReducer from "../../reducers/filters";
import moment from "moment";

/**
 * Test cases for filtersReducer.
 * @author Kevin Li
 */


// Test case 1: No state, just `@@INIT` action
test("Test with undefined state to utilize default state.", () => {
    const testObj = filterReducer(undefined, { type: "@@INIT" });
    expect(testObj).toEqual({
        text: "", sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});
// Test case 2: set filter text based on given action
test("Set filter text based on the given action.", () => {
    const demoState = {
        text: "", sortBy: "date",
        startDate: undefined, endDate: undefined
    };
   const testObj = filterReducer(demoState, {
       type: "SET_TEXT_FILTER", query: "keyword"
   }) ;
   expect(testObj.text).toBe("keyword");
});

// Test case 3: set sortBy to `amount`
test("Test setting sortBy to amount.", () => {
    const testObj = filterReducer(undefined, {
        type: "SORT_BY_AMOUNT"
    });
    expect(testObj.sortBy).toBe("amount");
});

// Test case 4: set sortBy to `date` (change sortBy to amount first)
test("Test setting sortBy to date.", () => {
    const demoState = {
        text: "", sortBy: "amount",
        startDate: undefined, endDate: undefined
    };
    const testObj = filterReducer(demoState, {
        type: "SORT_BY_DATE"
    });
    expect(testObj.sortBy).toBe("date");
});

// Test case 5: startDate filter (same idea as endDate filter)
test("Test startDate filter.", () => {
    const demoState = {
        text: "", sortBy: "date",
        startDate: undefined, endDate: undefined
    };
    const startDate = moment();
    const testObj = filterReducer(demoState, {
        type: "SET_START_DATE", startDate
    });
    expect(testObj.startDate).toEqual(startDate);
});