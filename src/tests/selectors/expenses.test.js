import { getVisibleExpenses } from "../../selectors/expenses";
import moment from "moment";
// Default testing expense object.
import { expenses } from "../fixtures/expenses";

// Test case 1
test("Test with basic text filter (also test toLowerCase work).", () => {
    const filter = {
        text: "lo", sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const selected = getVisibleExpenses(expenses, filter);
    expect(selected).toEqual([expenses[1], expenses[0]]);
});

// Test 2
test("Test with set startDate.", () => {
    const filter = {
        text: "lo", sortBy: "date",
        startDate: moment(0).add(2, "days"),
        endDate: undefined
    };
    const selected = getVisibleExpenses(expenses, filter);
    expect(selected).toEqual([expenses[1]]);
});

// Test 3
test("Test with set endDate.", () => {
    const filter = {
        text: "lo", sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(1, "days")
    };
    const selected = getVisibleExpenses(expenses, filter);
    expect(selected).toEqual([expenses[0]]);
});

// Test 4: sort by date
test("Test sortBy Date", () => {
   const filter = {
       text: "", sortBy: "date",
       startDate: undefined, endDate: undefined
   };
   const selected = getVisibleExpenses(expenses, filter);
   expect(selected).toEqual([
      expenses[2], expenses[1], expenses[0]
   ]);
});

// Test 5: sort by amount
test("Test sortBy Amount", () => {
    const filter = { text: "", sortBy: "amount",
                startDate: undefined, endDate: undefined };
    const selected = getVisibleExpenses(expenses, filter);
    expect(selected).toEqual(
        [expenses[0], expenses[2], expenses[1]]
    );
});