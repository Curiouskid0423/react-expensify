import React from "react";
import { shallow } from "enzyme";
import ExpenseItem from "../../components/ExpenseListItem";
import {expenses as defaultExp } from "../fixtures/expenses";

describe("ExpenseListItem Test Suite", () => {
   test("Test making an expense list with given object.", () => {
       const testExpense = defaultExp[1];
       const wrapper = shallow(<ExpenseItem
           key = {testExpense.id}
           {...testExpense}
       />);
       // First time matching snapshot is always going to succeed.
       // The idea here is to check the content whenever we have to.
       expect(wrapper).toMatchSnapshot();
   });
});