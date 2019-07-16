import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { sizes } from '../utils/font-sizes';
import { getColor, getColorWithAlt } from '../utils/colors-helpers';

const Button = styled.button`
  display          : inline-block;
  padding          : .5rem 1rem;
  background-color : ${getColor};
  color            : #FFF;
  cursor           : pointer;
  text-decoration  : none;
  line-height      : inherit;
  border-radius    : .25rem;
  transition       : transform .05s;
  border           : 1px solid ${getColor};
  text-align       : center;
  user-select      : none;

  :hover {
    background-color :   ${getColorWithAlt};
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
    /* border-radius: 0; */
  `}

	${props => props.ghost && css`
		color      : ${getColorWithAlt};
  	background : none;
  	border     : 1px solid;

  	&:hover {
    	background   : ${getColorWithAlt};
    	color        : #FFF;
    	border-color : transparent;
  	}
	`}

	${props => props.full && css`
		margin-right : 0;
  	margin-left  : 0;
  	width        : 100%;
	`}
`;

Button.propTypes = {
	color: PropTypes.string,
	tiny: PropTypes.bool,
	micro: PropTypes.bool,
	full: PropTypes.bool
};

Button.propTypes = {
	color: 'first-color',
	tiny: false,
	micro: false,
	full: false
};

export { Button };
