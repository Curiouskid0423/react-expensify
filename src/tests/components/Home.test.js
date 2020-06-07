import React from "react";
import ExpenseDashboard from "../../components/Home";
import { shallow } from "enzyme";

describe("ExpenseDashboard Component", () => {
    it("Should render a Dashboard object w/o knowing how " +
        "nested components have changed.", () => {
       const wrapper = shallow(<ExpenseDashboard />);
       expect(wrapper).toMatchSnapshot();
    });
})