import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getColor } from '../utils/colors-helpers';

export const Topbar = styled.div`
	background: ${getColor};
	color: #fff;
	padding: .5rem 0;
	display: ${props => (props.visible ? 'block' : 'none')};

	.ed-grid {
    height      : 100%;
    align-items : center;
  }

	input {
		border: none;
	}
`;


Topbar.propTypes = {
	color: PropTypes.string,
	visible: PropTypes.bool
};

Topbar.defaultProps = {
	color: 'first-color',
	visible: true
};
