import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Topbar = styled.div`
	background: var(--${props => props.color});
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
	color: PropTypes.oneOf(['first-color', 'second-color', 'third-color', 'accent-color', 'dark-color']),
	visible: PropTypes.bool
};

Topbar.defaultProps = {
	color: 'first-color',
	visible: true
};
