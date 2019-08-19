import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ALLOWED_COLORS, DEFUALT_COLOR } from '../../utils/constants';
import { Tab } from './Tab';

export const Tabs = styled.div`
	display: flex;
	width: 100%;
	overflow-x: auto;

	${Tab} {
		--tab-color: var(--${props => props.color});
	}
`;


Tabs.propTypes = {
	color: PropTypes.oneOf(ALLOWED_COLORS)
};

Tabs.defaultProps = {
	color: DEFUALT_COLOR
};
