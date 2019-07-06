import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../colors';
import { sizes } from '../font-sizes';

const Button = styled.button`
  display          : inline-block;
  padding          : .5rem 1rem;
  background-color : ${({ color }) => colors[color] || colors['first-color']};
  color            : #FFF;
  cursor           : pointer;
  text-decoration  : none;
  line-height      : inherit;
  border-radius    : .25rem;
  transition       : transform .05s;
  border           : 1px solid ${({ color }) => colors[color] || colors['first-color']};
  text-align       : center;
  user-select      : none;

	:hover {
		background-color :   ${({ color }) => colors[`${color}-alt`] || colors[color] || colors['first-color']};
    text-decoration  : inherit;
	}

	:active {
		transform : scale(.99);
	}

	/* Tiny buttons */
	${props => props.tiny && css`
		padding   : .25rem .5rem;
  	font-size : ${sizes.small};
	`}

	/* Micro buttons */
	${props => props.micro && css`
		padding: 0 .25rem;
  	font-size: ${sizes.small};
  	line-height: 1.3;
  	border-radius: 0;
	`}
`;

Button.propTypes = {
	color: PropTypes.string,
	tiny: PropTypes.bool,
	micro: PropTypes.bool
};

Button.propTypes = {
	color: 'first-color',
	tiny: false,
	micro: false
};

export { Button };
