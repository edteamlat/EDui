import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "../src";

test("Should render <Button /> without errors", () => {
	const { getByText } = render(<Button>Text</Button>);
	expect(getByText("Text")).toBeInTheDocument();
});

test("Should execute onClick properly", () => {
	let counter = 0;

	const { getByText } = render(
		<Button
			onClick={() => {
				counter += 1;
			}}
		>
			Text
		</Button>
	);

	fireEvent.click(getByText("Text"));
	expect(counter).toBe(1);
});
