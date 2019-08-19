import { createGlobalStyle } from 'styled-components';

import { colorsSetup } from '../utils/mixins/global-styles/colors';
import { fontsSetup } from '../utils/mixins/global-styles/fonts';
import { breakpointsSetup } from '../utils/mixins/global-styles/breakpoints';
import { gridVariablesSetup } from '../utils/mixins/global-styles/grid';
import { zIndexSetup } from '../utils/mixins/global-styles/z-index';
import { hacksSetup } from '../utils/mixins/global-styles/hacks';
import { resetStylesSetup } from '../utils/mixins/global-styles/reset-styles';

export const GlobalStyles = createGlobalStyle`
	${colorsSetup};
	${fontsSetup};
	${breakpointsSetup};
	${gridVariablesSetup};
	${zIndexSetup};
	${hacksSetup};
	${resetStylesSetup};
`;
