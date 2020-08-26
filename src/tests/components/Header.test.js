import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
import toJson from "enzyme-to-json";


describe("the behavior of Header Component", () => {

   let wrapper;
   let spyLogout = jest.fn();
   beforeEach(() => {
      wrapper = shallow(<Header dispatchLogOut = {spyLogout} />);
   });

   // Test 1. Test Header with snapshots. Shallow rendering.
   it("should shallow render a Header.", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });

   it("should call startlogout on click.", () => {
      wrapper.find("WithStyles(ForwardRef(Button))").simulate("click");
      expect(spyLogout).toHaveBeenCalled();
   })

});


/* TODO:
    Snapshot is a `snapshot` of the current version Component.
    `toJson` extracts the meaningful content from the Enzyme wrapper.
 */