import React from "react";
import { render } from "@testing-library/react";

const SampleComponent = () => <h1>Sample</h1>;

test("Health function", () => {
	expect(true).toBe(true);
});

test("SampleComponent", () => {
	const wrapper = render(<SampleComponent />);
	// eslint-disable-next-line no-console
	expect(wrapper.getByText("Sample")).toBeInTheDocument();
});
