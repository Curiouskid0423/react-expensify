import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
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

    it("should handle text change.", () => {
        const value = "lo"
        wrapper.find("input").simulate("change", {
            target: { value }
        });
        expect(setTextFilter).toHaveBeenLastCalledWith(value);
    });

    it("should sort by date.", () => {
        const value = "date";
        wrapper.setProps({ filters: altFilters });
        wrapper.find("select").simulate("change", {
            target: { value }
        });
        expect(sortByDate).toHaveBeenCalled();
    });

    it("should handle date change.", () => {
       const startDate = moment(0).add(3, "days");
       const endDate = moment(0).add(7, "days");
       wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
       expect(setStartDate).toHaveBeenLastCalledWith(startDate);
       expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    });

    it("should handle focus change (state should change)", () => {
        const focused = "endDate";
        wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(focused);
        expect(wrapper.state("calFocused")).toBe(focused);
    });

});