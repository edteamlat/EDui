import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { LARGE_BREAKPOINT } from '../../utils/constants'

const CarouselButton = styled.button`
  display         : flex;
  justify-content : center;
  align-items     : center;
  position        : absolute;
  width           : var(--size);
  height          : var(--size);
  background      : white;
  border-radius   : 50%;
  border          : none;
  outline         : none;
  box-shadow      : 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor          : pointer;
  z-index         : 1;

  &:hover {
    background : #f5f5f5;
  }

  @media (min-width: ${LARGE_BREAKPOINT}) {
    --size : 2.5rem;
  }
  
  ${props => props.left && css`
    left      : 0;
    transform : translate(calc(-50% + 0.5rem), -50%);
  `}

  ${props => props.right && css`
    right     : 0;
    transform : translate(calc(50% - 0.5rem), -50%);
  `}

  ${props => props.top && css`
    top: ${props.top};
  `}

`

CarouselButton.PropTypes = {
  top: PropTypes.string
}

CarouselButton.defaultProps = {
  top: '50%'
}

export { CarouselButton }