import React from "react";
import { shallow } from "enzyme";

import { Button } from "../src";

test("Should render <Button /> without errors", () => {
  const wrapper = shallow(<Button>Text</Button>);
  expect(wrapper.find("button")).toHaveLength(1);
});
