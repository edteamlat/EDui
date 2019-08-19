import { css } from 'styled-components';
import { LARGE_BREAKPOINT } from '../../constants';

export const breakpointsSetup = css`
	/* Media query */
	:root {
		--s : 0;
  	--m : 640px;
  	--l : 1024px;
  	--lg : ${LARGE_BREAKPOINT};
  	--xl : 1440px;
	}
`;
