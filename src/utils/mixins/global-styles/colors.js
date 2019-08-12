import { css } from 'styled-components';
import {
	FIRST_COLOR,
	SECONDARY_COLOR,
	THIRD_COLOR,
	ACCENT_COLOR,
	DARK_COLOR,
	BORDER_COLOR
} from '../../constants';

export const colorsSetup = css`
	/* Colors */
	:root {
		--first-color: ${FIRST_COLOR};
		--second-color: ${SECONDARY_COLOR};
		--third-color: ${THIRD_COLOR};
		--accent-color: ${ACCENT_COLOR};
		--dark-color: ${DARK_COLOR};
		--border-color: ${BORDER_COLOR};
		--text-color: #53575A;
		--body-bg: #FAFDFF;
		/* Alt colors */
		--first-color-alt: #006DC6;
		--second-color-alt: #00BFF0;
		--third-color-alt: #FF2419;
		--accent-color-alt: #F1A000;
		--dark-color-alt: #141618;
	}
`;
