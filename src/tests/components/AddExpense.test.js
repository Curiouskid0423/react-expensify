import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";

describe("Add expense page defaults.", () => {
   it("should create a default snapshot.", () => {
       const wrapper = shallow(<AddExpense />);
       expect(wrapper).toMatchSnapshot();
   });
});