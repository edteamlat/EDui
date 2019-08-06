import { css } from 'styled-components';
// Constants
const AMOUNT_COLUMNS = 12;
export const SMALL_BREAKPOINT_STRING = 's';
export const MEDIUM_BREAKPOINT_STRING = 'm';
export const LARGE_BREAKPOINT_STRING = 'l';
export const EXTRA_LARGE_BREAKPOINT_STRING = 'lg';
// Grid
export const GridFullContainer = css`
	width: 100%;
  max-width: 100%;
  margin-right: 0;
  margin-left: 0;
`;

export const getGridColumnWidth = (columns) => {
	const columnWidthCalc = `calc((100% - var(--gap) * ${columns - 1}) / ${columns})`;
	const columnsWidthCalcStyles = css`${columnWidthCalc}`;

	const columnWidth = css`
		grid-template-columns: repeat(${columns}, ${columnsWidthCalcStyles});
	`;
	return columnWidth;
};

export const setColumnSpace = (breakpoint = SMALL_BREAKPOINT_STRING) => {
	let spanColumns = '';

	for (let i = 1; i < AMOUNT_COLUMNS + 1; i += 1) {
		spanColumns += `& > .${breakpoint}-cols-${i} {
			grid-column-end : span ${i};
		}
		`;
	}

	return css`${spanColumns}`;
};

export const setInitialItemColumn = (breakpoint = SMALL_BREAKPOINT_STRING) => {
	let columnsPositionsStyles = '';
	for (let i = 1; i < AMOUNT_COLUMNS + 1; i += 1) {
		columnsPositionsStyles += `& > .${breakpoint}-x-${i} {
			grid-column-start : ${i};
		}
		`;
	}

	return css`${columnsPositionsStyles}`;
};

export const setAmountRowsAnItemFill = (breakpoint = SMALL_BREAKPOINT_STRING) => {
	let rowsStyles = '';
	for (let i = 1; i < AMOUNT_COLUMNS + 1; i += 1) {
		rowsStyles += `& > .${breakpoint}-rows-${i} {
			grid-row-end : span ${i};
		}
		`;
	}

	return css`${rowsStyles}`;
};

export const setInitialRowOfAnItem = (breakpoint = SMALL_BREAKPOINT_STRING) => {
	let itemInitialRowStyles = '';
	for (let i = 1; i < AMOUNT_COLUMNS + 1; i += 1) {
		itemInitialRowStyles += `& > .${breakpoint}-y-${i} {
			grid-row-start : ${i};
		}
		`;
	}

	return css`${itemInitialRowStyles}`;
};
