import { createStore } from "redux";

const INITIAL_COUNT = 0;

/**
 * Action Generator for adding actions.
 * @param factor
 * @returns {{type: string, addBy: *}}
 */
const addGen = ({ addBy: factor = 1 } = {}) => {
    return {
        type: "INCREMENT",
        addBy: factor
    };
}

/**
 * Action Generator for minus actions.
 * @param factor to subtract
 * @returns Action object {{type: string, minusBy: *}}
 */
const minusGen = ({ minusBy: factor = 1 } = {}) => {
    return {
        type: "DECREMENT",
        minusBy: factor
    };
}

/**
 * Action Generator for reset actions.
 * @returns {{type: string}}
 */
const resetGen = () => {
    return {
        type: "RESET"
    }
}

/**
 * Action Generator for setter action.
 * @param setter
 * @returns {{counter}}
 */
const setGen = ({ setter }) => {
    return {
        type: "SET",
        setter
    }
}

const store = createStore((prevState = {count: INITIAL_COUNT}, action) => {
    switch (action.type) {
        case "INCREMENT":
            const factor = (typeof action.addBy === "number") ? action.addBy : 1;
            return {
                count: prevState.count + factor
            };
        case "DECREMENT":
            const minus = typeof action.minusBy === "number" ? action.minusBy : 1;
            return {
                count: prevState.count - minus
            };
        case "RESET":
            return {
                count: INITIAL_COUNT
            };
        case "SET":
            return {
                count: action.setter
            }
        default:
            return prevState;
    }
});

const unsubscribe = store.subscribe((e) => {
    console.log(store.getState());
});

store.dispatch(addGen({ addBy: 5 }));
store.dispatch(addGen());
store.dispatch(minusGen({ minusBy: 5 }));
store.dispatch(minusGen());
store.dispatch(minusGen({ minusBy: 10 }));
store.dispatch(resetGen());
store.dispatch(setGen({setter: 90}));
store.dispatch(setGen({setter: 3141}));

unsubscribe();