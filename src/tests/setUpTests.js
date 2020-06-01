import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Just a file to wire up test suites with Enzyme dependency.
Enzyme.configure({
    adapter: new Adapter()
});