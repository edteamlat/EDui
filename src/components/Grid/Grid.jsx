import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { withDynamicTag } from '../../utils/withDynamicTag';
import { gridGap } from '../../utils/grid';
import { MAX_WIDTH } from '../../utils/constants';
import { GridFullContainer } from '../../utils/mixins';

const Grid = styled.div`
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
`;

Grid.propTypes = {
	gap: PropTypes.oneOf([0, 1, 2, 3, 4]),
	rowGap: PropTypes.bool,
	full: PropTypes.bool
};

Grid.defaultProps = {
	gap: 0,
	rowGap: false,
	full: false
};

export default withDynamicTag(Grid)
