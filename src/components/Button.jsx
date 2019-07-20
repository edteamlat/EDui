import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display          : inline-block;
  padding          : .5rem 1rem;
  background-color : var(--${props => props.color});
  color            : #FFF;
  cursor           : pointer;
  text-decoration  : none;
  line-height      : inherit;
  border-radius    : .25rem;
  transition       : transform .05s;
  border           : 1px solid var(--${props => props.color});
  text-align       : center;
  user-select      : none;

  :hover {
    background-color :   var(--${props => props.color}-alt);
    text-decoration  : inherit;
  }

  :active {
    transform : scale(.99);
  }

  /* Tiny buttons */
  ${props => props.tiny && css`
    padding   : .25rem .5rem;
    font-size : var(--small-font-size);
  `}

  /* Micro buttons */
  ${props => props.micro && css`
    padding: 0 .25rem;
    font-size: var(--small-font-size);
    line-height: 1.3;
    /* border-radius: 0; */
  `}

	${props => props.ghost && css`
		color      : var(--${props.color}-alt);
  	background : none;
  	border     : 1px solid;

  	&:hover {
    	background   : var(--${props.color}-alt);
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
	color: PropTypes.oneOf(['first-color', 'second-color', 'third-color', 'accent-color', 'dark-color']),
	tiny: PropTypes.bool,
	micro: PropTypes.bool,
	full: PropTypes.bool
};

Button.defaultProps = {
	color: 'first-color',
	tiny: false,
	micro: false,
	full: false
};

export { Button };
