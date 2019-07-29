import { css } from 'styled-components';
import { transparentize } from 'polished';

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
