import React from "react";
import { render } from "@testing-library/react";
import { EDitem, EDcontainer } from "../src";

test("Should render <EDitem /> and <EDcontainer /> without errors", () => {
	const containerWrapper = render(
		<EDcontainer>
			content
			<EDitem>Item</EDitem>
		</EDcontainer>
	);

	expect(containerWrapper.getByText("content")).toBeInTheDocument();
	expect(containerWrapper.getByText("Item")).toBeInTheDocument();
});
