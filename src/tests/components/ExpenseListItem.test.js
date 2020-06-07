import React from "react";
import { shallow } from "enzyme";
import ExpenseItem from "../../components/ExpenseListItem";
import {expenses as defaultExp } from "../fixtures/expenses";

describe("ExpenseListItem Test Suite", () => {
   it("Should render an ExpenseListItem", () => {
       const testExpense = defaultExp[1];
       const wrapper = shallow(<ExpenseItem
           key = {testExpense.id}
           { ...testExpense }
       />);
       expect(wrapper).toMatchSnapshot();
   });
});

//TODO: Snapshot testing is good since it record the accurately implemented
//  result, so if any unintentional changes occur in the future, the mismatch
//  snapshot will throw an alert to the developer.