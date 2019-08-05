import styled from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import { tableStyle } from '../../utils/mixins/table';
import {
	FIRST_COLOR,
	BORDER_COLOR,
	SECONDARY_COLOR,
	THIRD_COLOR,
	ACCENT_COLOR,
	DARK_COLOR
} from '../../utils/constants';

const types = {
	secondary: SECONDARY_COLOR,
	tertiary: THIRD_COLOR,
	accent: ACCENT_COLOR,
	dark: DARK_COLOR,
	default: FIRST_COLOR
};

export const Table = styled.table`
	${props => tableStyle(types[props.type] || types.default)};
	table-layout    : fixed;
  border-collapse : collapse;
  font-size       : var(--small-font-size);
  background      : #FFF;
  min-width       : 100%;
	th {
    font-family  : var(--heading-font);
    text-align   : left;
    color        : #FFF;
    font-weight  : 700;
    border-right : 1px solid ${transparentize(0.2, '#fff')};
  }

	td {
    min-width     : 100px;
  }
	td:nth-child(even) {
      background : ${transparentize(0.8, BORDER_COLOR)};
    }

	td, th {
    padding : 1em 1.5em;
  }
`;


Table.propTypes = {
	type: PropTypes.oneOf(['secondary', 'tertiary', 'accent', 'dark'])
};
