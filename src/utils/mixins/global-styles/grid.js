import { css } from 'styled-components';
import { L_UNIT, MAX_WIDTH } from '../../constants';

export const gridVariablesSetup = css`
	/* Grid */
	:root {
		--l-unit: ${L_UNIT};
		--max-width: ${MAX_WIDTH};
	}
`;
