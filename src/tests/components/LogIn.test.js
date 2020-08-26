import React from "react";
import { shallow } from "enzyme";
import { LogIn } from "../../components/LogIn";

describe("the behaviors of LogIn page.", () => {

    let wrapper;
    let startLogin = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<LogIn dispatchLogin = {startLogin}/>);
    })

    it("should successfully render a snapshot.", () => {
       expect(wrapper).toMatchSnapshot();
    });

    it("should call startLogin onClick", () => {
        wrapper.find("WithStyles(ForwardRef(Button))").simulate("click");
        expect(startLogin).toHaveBeenCalled();
    })

});