import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

// Test 1. Test Header with snapshots. Shallow rendering
// works in contrast with Full Rendering with DOM.
test("Test with shallow rendering on Header.", () => {
   const renderer = new ReactShallowRenderer();
   renderer.render(<Header />);
   expect(renderer.getRenderOutput()).toMatchSnapshot();
});