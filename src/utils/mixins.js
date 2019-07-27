import { css } from 'styled-components';
import { transparentize } from 'polished'

export const widget = css`
	box-shadow: 0 2px 16px -2px rgba(0,0,0,.15);
	border : none;
	background : #fff;
`;

export const InputForm = css`
	display       : block;
	border        : 1px solid var(--border-color);
	background    : #fff;
	width         : 100%;
	line-height   : 1.6;
	font-family   : var(--body-font);/* Fuerza a tomar la fuente por defecto */
	font-size     : var(--small-font-size);
	color         : var(--text-color);
	border-radius : .25rem;
	padding       : .5rem 1rem;

	&::placeholder {
    color : var(--text-color-75);
  }

  &:disabled {
    background : var(--border-color);
    cursor: default;
  }
`;


export const tableStyle = color => css`
	th {
		background: ${color};
	}

	tr {
			border-bottom: 1px solid ${transparentize(0.9, color)};
	}
	tr:hover {
			background : ${transparentize(0.9, color)};
	}

	&.first-column {
    td:first-child {
			background : ${transparentize(0.75, color)};
      color: #fff;
    }
  }

	&.center-content {
    text-align: center;

    th {
      text-align: inherit;
    }
  }
`;


export const GridFullContainer = css`
	width: 100%;
  max-width: 100%;
  margin-right: 0;
  margin-left: 0;
`;
