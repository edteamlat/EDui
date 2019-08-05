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
	getGridColumnWidth,
	setColumnSpace,
	SMALL_BREAKPOINT_STRING,
	MEDIUM_BREAKPOINT_STRING,
	EXTRA_LARGE_BREAKPOINT_STRING,
	setInitialItemColumn,
	setAmountRowsAnItemFill,
	setInitialRowOfAnItem
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
			${setColumnSpace(SMALL_BREAKPOINT_STRING)}
			${setInitialItemColumn(SMALL_BREAKPOINT_STRING)}
			${setAmountRowsAnItemFill(SMALL_BREAKPOINT_STRING)}
			${setInitialRowOfAnItem(SMALL_BREAKPOINT_STRING)}
		}

		@media (min-width: ${MEDIUM_BREAKPOINT}) {
			${getGridColumnWidth(m)}
			${setColumnSpace(MEDIUM_BREAKPOINT_STRING)}
			${setInitialItemColumn(MEDIUM_BREAKPOINT_STRING)}
			${setAmountRowsAnItemFill(MEDIUM_BREAKPOINT_STRING)}
			${setInitialRowOfAnItem(MEDIUM_BREAKPOINT_STRING)}
		}

		@media (min-width: ${LARGE_BREAKPOINT}) {
			${getGridColumnWidth(l)}
			${setColumnSpace(LARGE_BREAKPOINT)}
			${setInitialItemColumn(LARGE_BREAKPOINT)}
			${setAmountRowsAnItemFill(LARGE_BREAKPOINT)}
			${setInitialRowOfAnItem(LARGE_BREAKPOINT)}
		}

		@media (min-width: ${EXTRA_LARGE_BREAKPOINT}) {
			${getGridColumnWidth(lg)}
			${setColumnSpace(EXTRA_LARGE_BREAKPOINT_STRING)}
			${setInitialItemColumn(EXTRA_LARGE_BREAKPOINT_STRING)}
			${setAmountRowsAnItemFill(EXTRA_LARGE_BREAKPOINT_STRING)}
			${setInitialRowOfAnItem(EXTRA_LARGE_BREAKPOINT_STRING)}
		}
	`
	}
	/* Cols */
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
