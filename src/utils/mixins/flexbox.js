import { css } from 'styled-components';
import { SMALL_BREAKPOINT_STRING } from './grid';

const NUMBER_OF_FRACTIONS = 20;

export const setPercentagesClasses = (breakpoint = SMALL_BREAKPOINT_STRING) => {
	let percentagesClasses = '';
	for (let i = 1; i < NUMBER_OF_FRACTIONS + 1; i += 1) {
		percentagesClasses += `.${breakpoint}-${i * 5} {
			width : ${i * 5}%;
		}
		`;
	}
	return css`${percentagesClasses}`;
};
