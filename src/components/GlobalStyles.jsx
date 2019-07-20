import { createGlobalStyle } from 'styled-components';
import { rem,  } from 'polished'

export const GlobalStyles = createGlobalStyle`
	/* Colors */
	:root {
		--first-color: #007BDF;
		--second-color: #00CBFF;
		--third-color: #FF3C32;
		--accent-color: #FBA905;
		--dark-color: #282D31;
		--border-color: #DFE0E0;
		--text-color: #53575A;
		--body-bg: #FAFDFF;
		/* Alt colors */
		--first-color-alt: #006DC6;
		--second-color-alt: #00BFF0;
		--third-color-alt: #FF2419;
		--accent-color-alt: #F1A000;
		--dark-color-alt: #141618;
		/* Hacks */
		--body-bg-modal: rgba(250, 253, 255, .9);
		--text-color-75: rgba(83,87,90, .75);
	}
	/* Fonts */
	:root {
		--body-font: Lato, 'sans-serif';
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
		--s : 0,
  	--m : 640px,
  	--l : 1024px,
  	--lg : 1024px,
  	--xl : 1440px
	}
	/* z index */
	:root {
		--z-index-modal: 1000;
	}

	@media (min-width: var(--lg)) {
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
