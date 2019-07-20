import { css } from 'styled-components';
import { colors } from './colors';
import { sizes } from './font-sizes';

export const widget = css`
	box-shadow: 0 2px 16px -2px rgba(0,0,0,.15);
	border : none;
	background : #fff;
`;

export const InputForm = css`
	display       : block;
	border        : 1px solid var(${colors['border-color']});
	background    : #fff;
	width         : 100%;
	line-height   : 1.6;
	font-family   : Lato, 'sans-serif'; /* Fuerza a tomar la fuente por defecto */
	font-size     : ${sizes.small};
	color         : var(${colors['text-color']});
	border-radius : .25rem;
	padding       : .5rem 1rem;

	&::placeholder {
    color : rgba(83,87,90, .75);
  }

  &:disabled {
    background :var(${colors['border-color']});
    cursor: default;
  }
`;
