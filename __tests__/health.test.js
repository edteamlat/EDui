import React from "react";
import { shallow } from "enzyme";

const SampleComponent = () => <h1>Sample</h1>;

test("Health function", () => {
  expect(true).toBe(true);
});

test("SampleComponent", () => {
  const wrapper = shallow(<SampleComponent />);
  console.log(wrapper.debug());
  expect(wrapper.find("h1")).toHaveLength(1);
});
