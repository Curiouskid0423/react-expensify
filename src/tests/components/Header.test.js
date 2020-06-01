import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import toJson from "enzyme-to-json";

// Test 1. Test Header with snapshots. Shallow rendering
// works in contrast with Full Rendering with DOM.
test("Test with shallow rendering on Header.", () => {
   const wrapper = shallow(<Header />);
   expect(toJson(wrapper)).toMatchSnapshot();
});

/* TODO:
    Snapshot is a `snapshot` of the current version Component.
    `toJson` extracts the meaningful content from the Enzyme wrapper.
 */