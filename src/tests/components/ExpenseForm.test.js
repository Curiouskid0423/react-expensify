import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses as defaultExp } from "../fixtures/expenses";

describe("ExpenseForm component defaults", () => {
    // First snapshot created for ExpenseForm.
    it("Should render the ExpenseForm accurately.", () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should render an ExpenseForm with given data.", () => {
        const wrapper = shallow(<ExpenseForm expense = { defaultExp[1] }/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should render error for invalid form submission.", () => {
       const wrapper = shallow(<ExpenseForm />);
       expect(wrapper).toMatchSnapshot();
       wrapper.find("form").simulate("submit", {
          preventDefault: () => {}
       });
       expect(wrapper.state("error").length).toBeGreaterThan(0);
       expect(wrapper).toMatchSnapshot();
    });
});

describe("ExpenseForm during edits", () => {

    it("Should change description after edit.", () => {
        const wrapper = shallow(<ExpenseForm />);
        const value = "changed description message";
        expect(wrapper).toMatchSnapshot();
        // The argument is provided to simulate the onChange generated object.
        wrapper.find("input").at(0).simulate("change", {
            target: { value }
        });
        expect(wrapper.state("description")).toEqual("changed description message");
        expect(wrapper).toMatchSnapshot();
    });

    it("Should change on note change.", () => {
       const wrapper = shallow(<ExpenseForm expense = {defaultExp[1]} />);
       const value = "changed note content";
       expect(wrapper).toMatchSnapshot();
       wrapper.find("textarea").at(0).simulate("change", {
           target: { value }
       });
       expect(wrapper.state("note")).toEqual(value);
       expect(wrapper).toMatchSnapshot();
    });

    it("Should change amount when valid input.", () => {
        const wrapper = shallow(<ExpenseForm expense = {defaultExp[1]} />);
        const value = "23.50";
        expect(wrapper).toMatchSnapshot();
        wrapper.find("input").at(1).simulate("change", {
           target: { value }
        });
        expect(wrapper.state("amount")).toEqual(value);
        expect(wrapper).toMatchSnapshot();
    });

    // Should add another test during invalid `amount` input.
});