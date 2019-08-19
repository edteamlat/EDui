import { css } from 'styled-components';
import { rem } from 'polished';
import { LARGE_BREAKPOINT } from '../../constants';

export const fontsSetup = css`
	@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');
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
`;
