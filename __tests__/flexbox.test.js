import React from "react";
import { shallow } from "enzyme";
import { EDitem, EDcontainer } from "../src";

test("Should render <EDitem /> and <EDcontainer /> without errors", () => {
  const containerWrapper = shallow(<EDcontainer>content</EDcontainer>);
  const itemWrapper = shallow(<EDitem>content</EDitem>);

  expect(containerWrapper.find("div")).toHaveLength(1);
  expect(itemWrapper.find("div")).toHaveLength(1);
});
