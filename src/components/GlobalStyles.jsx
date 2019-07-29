import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import {
	FIRST_COLOR,
	BORDER_COLOR,
	SECONDARY_COLOR,
	THIRD_COLOR,
	ACCENT_COLOR,
	DARK_COLOR,
	LARGE_BREAKPOINT,
	L_UNIT,
	MAX_WIDTH
} from '../utils/constants';

export const GlobalStyles = createGlobalStyle`
	/* Colors */
	@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');
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
	/* Fonts */
	:root {
		--body-font: 'Lato', 'sans-serif';
		--heading-font: 'Open Sans', 'sans-serif';
		--title1: ${rem('24px')};
		--h2-font-size: ${rem('20px')};
  	--h3-font-size: ${rem('16px')};
  	--normal-font-size: ${rem('15px')};
  	--small-font-size: ${rem('13px')};
  	--smaller-font-size: ${rem('12px')};
  	--heading-line-height: 1.3;
  	--body-line-height: 1.6;
	}
	/* Media query */
	:root {
		--s : 0;
  	--m : 640px;
  	--l : 1024px;
  	--lg : ${LARGE_BREAKPOINT};
  	--xl : 1440px;
	}
	/* Grid */
	:root {
		--l-unit: ${L_UNIT};
		--max-width: ${MAX_WIDTH};
	}
	/* z index */
	:root {
		--z-index-modal: 1000;
	}

	@media (min-width: ${LARGE_BREAKPOINT}) {
		:root {
			--h1-font-size: ${rem('36px')};
    	--h2-font-size: ${rem('28px')};
    	--h3-font-size: ${rem('20px')};
    	--normal-font-size: ${rem('16px')};
    	--small-font-size: ${rem('14px')};
    	--smaller-font-siz: ${rem('13px')};
		}
	}
	:root {
		/* Hacks */
		--body-bg-modal: rgba(250, 253, 255, .9);
		--text-color-75: rgba(83,87,90, .75);
		/* --table-color-01: rgba() */
	}

	body {
		font-family: var(--body-font);
	}
`;
