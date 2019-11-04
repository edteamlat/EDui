import React from "react";
import { shallow } from "enzyme";

import { EDgrid } from "../src";

test("Should render <EDgrid /> without errors", () => {
	const divWrapper = shallow(<EDgrid>Content</EDgrid>);
	const articleWrapper = shallow(<EDgrid as="article">Content</EDgrid>);

	expect(divWrapper.find("div")).toHaveLength(1);
	expect(articleWrapper.find("article")).toHaveLength(1);
});
