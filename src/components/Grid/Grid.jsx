import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { withDynamicTag } from '../../utils/withDynamicTag';
import { gridGap } from '../../utils/grid';
import {
	MAX_WIDTH,
	LARGE_BREAKPOINT,
	SMALL_BREAKPOINT,
	MEDIUM_BREAKPOINT,
	EXTRA_LARGE_BREAKPOINT
} from '../../utils/constants';
import {
	GridFullContainer,
	getGridColumnWidth
} from '../../utils/mixins/grid';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-column-gap: var(--gap);

	${props => gridGap(props.gap)};
	/* Avoid that in mobile devices items be among the sides */
	width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
	max-width: var(--max-width);

	@media (min-width: ${MAX_WIDTH}) {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	${props => props.rowGap && css`
		grid-row-gap: var(--gap);
	`}

	& & {
		${GridFullContainer}
	}

	${props => props.full && GridFullContainer}

	${props => props.center && css`
		margin-left: auto;
		margin-right: auto;
	`}

	${props => props.right && css`
		margin-left: auto;
    margin-right: 0;
	`}

	${props => props.left && css`
		margin-left: 0;
		margin-right: auto;
	`}

	${({
		s,
		m = s,
		l = m,
		lg = l
	}) => css`
		@media (min-width: ${SMALL_BREAKPOINT}) {
			${getGridColumnWidth(s)}
		}

		@media (min-width: ${MEDIUM_BREAKPOINT}) {
			${getGridColumnWidth(m)}
		}

		@media (min-width: ${LARGE_BREAKPOINT}) {
			${getGridColumnWidth(l)}
		}

		@media (min-width: ${EXTRA_LARGE_BREAKPOINT}) {
			${getGridColumnWidth(lg)}
		}
	`
	}
`;

const gridValues = [...new Array(12)].map((_, i) => i + 1)

Grid.propTypes = {
	gap: PropTypes.oneOf([0, 1, 2, 3, 4]),
	rowGap: PropTypes.bool,
	full: PropTypes.bool,
	center: PropTypes.bool,
	right: PropTypes.bool,
	s: PropTypes.oneOf(gridValues),
	m: PropTypes.oneOf(gridValues),
	l: PropTypes.oneOf(gridValues),
	lg: PropTypes.oneOf(gridValues)
};

Grid.defaultProps = {
	gap: 0,
	rowGap: false,
	full: false,
	center: false,
	right: false,
	s: 1,
	m: null,
	l: null,
	lg: null
};

export const DynamicGrid = withDynamicTag(Grid);
