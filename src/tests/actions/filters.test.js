import {setTextFilter, setStartDate,
        sortByDate, sortByAmount, setEndDate} from "../../actions/filters";
import moment from "moment";

// Test case 1
test("Test setTextFilter with given value.", () => {
    const setTextFilterObj = setTextFilter("gas bill");
    expect(setTextFilterObj).toEqual({
        type: "SET_TEXT_FILTER",
        query: "gas bill"
    });
});

// Test case 2
test("Test setTextFilter with no given value (use default).", () => {
    const setTextFilterEmpty = setTextFilter();
    expect(setTextFilterEmpty).toEqual({
        type: "SET_TEXT_FILTER",
        query: ""
    });
});

// Test case 3
test("Test sortByAmount", () => {
    expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

// Test case 4
test("Test sortByDate", () => {
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

// Test case 5
test("Test setStartDate.", () => {
   const testObj = setStartDate(moment(0));
   expect(testObj).toEqual({
       type: "SET_START_DATE",
       startDate: moment(0)
   });
});

// Test case 6
test("Test setEndDate.", () => {
   const testObj = setEndDate(moment(100));
   expect(testObj).toEqual({
       type: "SET_END_DATE",
       endDate: moment(100)
   });
});