import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Test removeExpense.", () => {
    const removeExpObj = removeExpense({ id: "kevinhanyulin" });
    expect(removeExpObj).toEqual({
        type: "REMOVE_EXPENSE",
        id: "kevinhanyulin"
    });
});

test("Test editExpense.", () => {
    const editExpObj
        = editExpense("thisId314", { note: "Edited notes."});
    expect(editExpObj).toEqual({
        type: "EDIT_EXPENSE",
        id: "thisId314",
        edit: { note: "Edited notes." }
    });
});

test("Test addExpense with given value.", () => {
    const expenseData = {
        description: "hello world", amount: 12343, createdAt: 100
    };
    const addExpenseObj = addExpense(expenseData);
    expect(addExpenseObj).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String),
            note: ""
        }
    });
});

test("Test addExpense with default props.", () => {
    const addExpObj = addExpense();
    expect(addExpObj).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "", amount: 0, createdAt: 0,
            note: "", id: expect.any(String)
        }
    });
});