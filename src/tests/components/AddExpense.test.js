import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";
import {expenses as defaultExp} from "../fixtures/expenses";

// We use jest.fn, aka a mock function to test if the a function, usually
// an event listener, is being called with the correct arguments.

describe("Handle onSubmit", () => {

    let spyFn, history, wrapper, rendered;
    // BeforeEach comes in handy when variables are repeated.
    beforeEach(() => {
        spyFn = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(<AddExpense
            dispatchAdder = {spyFn} history = {history} />);
        rendered = wrapper.find("ExpenseForm");
    });

    it("should render a default snapshot.", () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Be careful about the args of expect.
    it("should be called with correct args.", () => {
        rendered.prop("onSubmit")(defaultExp[1]);

        expect(spyFn).toHaveBeenLastCalledWith(defaultExp[1]);
        expect(history.push).toHaveBeenLastCalledWith("/");
    })

});