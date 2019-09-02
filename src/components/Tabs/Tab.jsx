import styled , { css } from 'styled-components';
import PropTypes from 'prop-types';

const activeMixin = css `
	/* --tab-color variable is defined at Tabs Component */
	box-shadow: 0 -3px var(--tab-color) inset;
	color: var(--tab-color);
	opacity: 1;
	text-decoration: none;
`

export const Tab = styled.div`
	border: none;
	background: none;
	padding: .75em 1.5em;
	flex: 1 1 0;
	white-space: nowrap;
	color: var(--text-color);
	box-shadow: 0 -1px var(--border-color) inset;
	flex-wrap: nowrap;
	cursor: pointer;

	${props => props.active === props.reference && activeMixin};
	&:hover {
		${activeMixin}
	}
`;

Tab.propTypes = {
	active: PropTypes.number.isRequired,
	reference: PropTypes.number.isRequired
};
