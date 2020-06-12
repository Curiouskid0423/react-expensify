import React from "react";
import { shallow } from "enzyme";
import {EditExpense} from "../../components/EditExpense";
import {expenses as defaultExp} from "../fixtures/expenses";

describe("EditExpense page behaviors.", () => {

    let wrapper, spyEdit, spyRemove, history;
    let selectedExp = defaultExp[1];
    beforeEach(() => {
        spyEdit = jest.fn();
        spyRemove = jest.fn();
        history = { push: jest.fn() }
        wrapper = shallow(<EditExpense
            expense = { selectedExp } dispatchEdit = {spyEdit}
            dispatchRemove = {spyRemove} history = {history}
        />);
    })

    it("should successfully render a default snapshot.", () => {
       expect(wrapper).toMatchSnapshot();
    });

    it("should handle editExpense action.", () => {
        wrapper.find("ExpenseForm").prop("onSubmit")(selectedExp);
        expect(spyEdit).toHaveBeenLastCalledWith(selectedExp.id, selectedExp);
        expect(history.push).toHaveBeenLastCalledWith("/");
    });

    it("should handle removeExpense action.", () => {
       wrapper.find("button").simulate("click");
       expect(spyRemove).toHaveBeenLastCalledWith({id: selectedExp.id });
       expect(history.push).toHaveBeenLastCalledWith("/");
    });

});