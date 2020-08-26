import {
    addExpense,
    removeExpense,
    editExpense,
    startAddExpense,
    setExpenses,
    startSetExpenses, startRemoveExpense, startEditExpense
} from "../../actions/expenses";
import {expenses as defaultExp} from "../fixtures/expenses";
import database from "../../firebase/firebase";
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk";

const createStore = configureStore([thunk]);

describe("Expense action behaviors", () => {

    const fakeUID = "thisIsAFakeUID";
    beforeEach((done) => {
        const expenseData = {};
        // Setup dummy data.
        defaultExp.forEach(({ id, description, createdAt, amount, note }) => {
            expenseData[id] = { description, createdAt, amount, note };
        });
        database.ref(`user/${fakeUID}/expense`).set(expenseData).then(() => done());
    });

    test("Test removeExpense.", () => {
        const removeExpObj = removeExpense("kevinhanyulin");
        expect(removeExpObj).toEqual({
            type: "REMOVE_EXPENSE",
            id: "kevinhanyulin"
        });
    });

    test("Test startRemoveExpense with firebase data.", (done) => {
        const store = createStore({ auth: {uid: fakeUID} });
        const id = defaultExp[1].id;
        store.dispatch(startRemoveExpense({ id }))
            .then(() => {
                const actions = store.getActions();
                const uid = store.getState().auth.uid;
                expect(actions[0]).toEqual({
                    type: "REMOVE_EXPENSE", id
                });
                return database.ref(`user/${uid}/expense/${id}`).once("value");
            }).then((target) => {
                expect(target.val()).toBeFalsy();
                done();
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

    test("Test startEditExpense", (done) => {
        const store = createStore({ auth: {uid: fakeUID} });
        const edit = { note: "Edited notes." };
        store.dispatch(
            startEditExpense(defaultExp[1].id, edit)
        ).then(() => {
            const actions = store.getActions();
            const uid = store.getState().auth.uid;
            expect(actions[0]).toEqual({
                type: "EDIT_EXPENSE",
                id: defaultExp[1].id,
                edit
            });
            return database.ref(`user/${uid}/expense/${defaultExp[1].id}`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val().note).toEqual("Edited notes.");
            done();
        })
    })

    test("Test addExpense with given value.", () => {
        const addExpenseObj = addExpense(defaultExp[2]);
        expect(addExpenseObj).toEqual({
            type: "ADD_EXPENSE",
            expense: defaultExp[2]
        });
    });

    // Have to pass in DONE as parameter since this test suite involves async calls.
    // If "done" isn't passed in, this test suite is always going to pass.
    test("Test add expense to database and redux store with defaults.", (done) => {
        const store = createStore({ auth: {uid: fakeUID} });
        const expenseData = {
            description: "My New Macbook Pro",
            amount: 6000,
            note: "The latest model would be released on October.",
            createdAt: 1000
        };

        // Test whether the data is stored to the redux store.
        store.dispatch(startAddExpense(expenseData)).then(() => {
            const actions = store.getActions();
            const uid = store.getState().auth.uid;
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            //    Test whether firebase correctly stores the piece of data.
            database.ref(`user/${uid}/expense/${actions[0].expense.id}`)
                .once("value")
                .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData);
                done();
            });
        });
    });

    test("Test add expense to database and redux store.", (done) => {
        const store = createStore({ auth: {uid: fakeUID} });

        store.dispatch(startAddExpense()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    id: expect.any(String),
                    description: "", amount: 0, createdAt: 0, note: ""
                }
            });
            done();
        });
    });

    test("Test that setExpense works with some data.", () => {
        const action = setExpenses(defaultExp);
        expect(action).toEqual({
            type: "SET_EXPENSES",
            expenses: defaultExp
        });
    });

    test("Test for startSetExpense.", (done) => {
        const store = createStore({ auth: {uid: fakeUID} });
        store.dispatch(startSetExpenses()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "SET_EXPENSES",
                expenses: defaultExp
            });
            done();
        });
    });

    // test("Test addExpense with default props.", () => {
    //     const addExpObj = addExpense();
    //     expect(addExpObj).toEqual({
    //         type: "ADD_EXPENSE",
    //         expense: {
    //             description: "", amount: 0, createdAt: 0,
    //             note: "", id: expect.any(String)
    //         }
    //     });
    // });
})