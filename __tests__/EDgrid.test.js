import React from "react";
import { render } from "@testing-library/react";
import { EDgrid } from "../src";

test("Should render <EDgrid /> without errors", () => {
	const { getByText } = render(<EDgrid>Content</EDgrid>);

	expect(getByText("Content")).toBeInTheDocument();
});
