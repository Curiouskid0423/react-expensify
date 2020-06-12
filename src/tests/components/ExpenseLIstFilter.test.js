import React from "react";
import { shallow } from "enzyme";
import {filters, altFilters} from "../fixtures/filters";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";

describe("ExpenseListFilter behaviors", () => {

    let wrapper, setTextFilter, setStartDate,
        setEndDate, sortByDate, sortByAmount;
    beforeEach(() => {
        setTextFilter = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();
        sortByAmount = jest.fn();
        sortByDate = jest.fn();
        wrapper = shallow(<ExpenseListFilters
            filters = {filters} setTextFilter = {setTextFilter}
            setStartDate = {setStartDate} setEndDate = {setEndDate}
            sortByAmount = {sortByAmount} sortByDate = {sortByDate}
        />);
    });

    it("should render a match the snapshot.", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render ExpenseListFilter with altFilters.", () => {
       wrapper.setProps({ filters: altFilters });
        expect(wrapper).toMatchSnapshot();
    });

});