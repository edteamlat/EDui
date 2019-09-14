import React from 'react'
import styled, { css } from 'styled-components'
import svgs from '../utils/icons'

export const SvgContainer = styled.div`
  display         : inline-flex;
  justify-content : center;
  align-items     : center;

  svg {
    --size  : 1em;
    display : inline-block;
    height  : var(--size);
    width   : var(--size);
    fill    : currentcolor;
  }

  ${props => props.color && css`
    svg {fill : ${props.color}}
  `}

`

const Icon = ({ svg, click, color }) => {
  const svgRender = svgs[svg] || svgs['default']
  return svgRender &&
    <SvgContainer color={color}>
      <svg viewBox={svgRender.vb} onClick={click} xmlns="http://www.w3.org/2000/svg">{svgRender.code}</svg>
    </SvgContainer>
}

export { Icon }