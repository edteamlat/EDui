import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
	SMALL_BREAKPOINT,
	MEDIUM_BREAKPOINT,
	LARGE_BREAKPOINT,
	EXTRA_LARGE_BREAKPOINT
} from '../../utils/constants';

export const EDitem = styled.div`
	margin        : 0;
  padding-left  : 1rem;
  padding-right : 1rem;
	box-sizing: border-box;
	/* Percentages */
	${({
		s,
		m = s,
		l = m,
		lg = l
	}) => css`
		@media (min-width: ${SMALL_BREAKPOINT}) {
			width : ${s}%;
		}

		@media (min-width: ${MEDIUM_BREAKPOINT}) {
			width: ${m}%;
		}

		@media (min-width: ${LARGE_BREAKPOINT}) {
			width: ${l}%;
		}

		@media (min-width: ${EXTRA_LARGE_BREAKPOINT}) {
			width: ${lg}%;
		}
	`}

	${props => props.formItem && css`
		margin-bottom : 2rem;
		&:last-child {
			margin-bottom : 0;
		}
	`}
`;

const percentages = [...new Array(20)].map((_, index) => (index + 1) * 5);

EDitem.PropTypes = {
	formItem: PropTypes.bool,
	s: PropTypes.oneOf(percentages),
	m: PropTypes.oneOf(percentages),
	l: PropTypes.oneOf(percentages),
	lg: PropTypes.oneOf(percentages)
};

EDitem.defaultProps = {
	formItem: false,
	s: 100
};
