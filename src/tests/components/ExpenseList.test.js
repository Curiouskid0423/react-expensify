import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import  { shallow } from "enzyme";
import { expenses as defaultExp } from "../fixtures/expenses";

describe("ExpenseList testing suite", () => {
    test("Should render ExpenseList with expense default.", () => {
       const wrapper = shallow(<ExpenseList expenses = {defaultExp} />);
       expect(wrapper).toMatchSnapshot();
    });

    test("Test ExpenseList with empty expense array", () => {
       const wrapper = shallow(<ExpenseList expenses = {[]} />);
       expect(wrapper).toMatchSnapshot();
    });
});