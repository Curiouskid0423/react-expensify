import expenseReducer from "../../reducers/expenses";
import { expenses as defaultExp } from "../fixtures/expenses";
import {expect} from "@jest/globals";
import {v4 as uuid} from "uuid";

describe("Expense Reducer testing suite.", () => {

// Test 1 should set to default state
    test("Test with default values.", () => {
        const initState = expenseReducer(undefined, { type: "@@INIT" });
        expect(initState).toEqual([]);
    });

// Test 2 add expense with empty expenses array
    test("Test add expense.", () => {
        const addState = expenseReducer(defaultExp, {
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String), description: "Hello",
                note: "Hello, world.",
                amount: 520,
                createdAt: 0
            }
        });
        expect(addState.length).toBe(4);
        expect(addState[3].note).toEqual("Hello, world.");
    });

// Test 3 remove expense with valid id
// TODO: defaultExp is a shallow copy of the expense fixture.
    test("Test remove expense with valid id.", () => {
        const removeState = expenseReducer(defaultExp, {
            type: "REMOVE_EXPENSE",
            id: defaultExp[1].id
        });
        expect(removeState).toEqual([defaultExp[0], defaultExp[2]]);
    });

// Test 4 remove expense with invalid id (things should remain intact
    test("Test remove expense with an invalid id.", () => {
        const removeState = expenseReducer(defaultExp, {
            type: "REMOVE_EXPENSE",
            id: 123123
        });
        expect(removeState).toEqual(defaultExp);
    });

// Test 5 edit expense with valid id
    test("Test edit expense with a valid id.", () => {
        const editState = expenseReducer(defaultExp, {
                type: "EDIT_EXPENSE",
                id: defaultExp[1].id,
                edit: { note: "Changed to this note." }
            }
        );
        expect(editState[1].note).toEqual("Changed to this note.");
    });
// Test 6 for setExpenses with data.
    test("Test that setExpenses does set expenses.", () => {
        const afterSet = expenseReducer(defaultExp, {
            type: "SET_EXPENSES",
            expenses: [defaultExp[1]]
        });
        expect(afterSet).toEqual([defaultExp[1]]);
    })
});