import { css } from 'styled-components';
// Grid
export const GridFullContainer = css`
	width: 100%;
  max-width: 100%;
  margin-right: 0;
  margin-left: 0;
`;

export const getGridColumnWidth = (columns) => {
	// const amountOfGaps = columns - 1;
	const columnWidth = css`
		grid-template-columns: repeat(${columns}, 1fr);
	`;
	return columnWidth;
};
