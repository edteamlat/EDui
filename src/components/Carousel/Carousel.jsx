import React, { Component } from 'react'
import styled from 'styled-components'
import { CarouselButton } from './CarouselButton'
import { Icon } from '../Icon'

const CarouselContainer = styled.section`
  position : relative;

  .overflow {
    overflow-x : hidden;
  }

  .animation {
    transition : 0.25s;
  }

`

class Carousel extends Component {

  constructor(...props) {
    super(...props)
    this.LENGTH = 0
    this.VIEW = 0
    this.TRANSLATE = 0
    this.UNIT = 0

    this.state = {
      left: 0,
      right: 0
    }

    this.breakpoints = {
      lg: 0,
      m: 0,
      s: 0
    }

    this.container = React.createRef()
    this.translateContainer = React.createRef()
    this.grid = React.createRef()

    this.setCarouselGrid = this.setCarouselGrid.bind(this)
    this.moveCarusel = this.moveCarusel.bind(this)
    this.prevMove = this.prevMove.bind(this)
    this.nextMove = this.nextMove.bind(this)
  }

  componentDidMount() {
    this.setCarouselGrid()
    addEventListener('resize', this.setCarouselGrid)
  }

  componentWillUnmount() {
    removeEventListener('resize', this.setCarouselGrid)
  }

  setCarouselGrid() {
    let container = this.container.current,
      grid = this.grid.current,
      items = this.props.children

    if (!container || !grid || !items) return

    this.LENGTH = items.length
    this.breakpoints.lg = this.props.lg
    this.breakpoints.m = this.props.m
    this.breakpoints.s = this.props.s

    this.VIEW = matchMedia('(min-width: 640px)').matches
      ? matchMedia('(min-width: 1024px)').matches
        ? this.breakpoints.lg : this.breakpoints.m
      : this.breakpoints.s

    let styles = `
      display: grid;
      grid-column-gap: ${this.props.gap}rem;
      grid-template-columns: repeat(${this.LENGTH}, 1fr);
      width: ${(this.LENGTH / this.VIEW) * 100}%;
    `

    grid.setAttribute('style', styles)

    this.UNIT = 100 / this.VIEW
    this.setState({ right: this.LENGTH - this.VIEW })
    this.COUNTER = this.VIEW
  }

  moveCarusel(type) {
    let container = this.translateContainer.current
    if (type === 'NEXT') {

      if (this.state.right > this.VIEW) {
        this.TRANSLATE -= 100
        this.setState({
          left: this.state.left + this.VIEW,
          right: this.state.right - this.VIEW
        })
      }

      else {
        this.TRANSLATE -= this.UNIT * this.state.right
        this.setState({
          left: this.state.left + this.state.right,
          right: 0
        })
      }

    } else if (type === 'PREV') {

      if (this.state.left > this.VIEW) {
        this.TRANSLATE += 100
        this.setState({
          right: this.state.right + this.VIEW,
          left: this.state.left - this.VIEW
        })
      } else {
        this.TRANSLATE += this.UNIT * this.state.left
        this.setState({
          right: this.state.right + this.state.left,
          left: 0
        })
      }

    }

    container.style.transform = `translate(${this.TRANSLATE}%)`
  }

  prevMove() { this.moveCarusel('PREV') }

  nextMove() { this.moveCarusel('NEXT') }


  render() {

    const { classes, children, buttonsTop } = this.props
    const { left, right } = this.state

    return (
      // Sección
      <CarouselContainer className={classes}>

        {/* Botones */}
        {left > 0 && <CarouselButton top={buttonsTop} left onClick={this.prevMove}><Icon svg="left-arrow" color="var(--first-color)"/></CarouselButton>}
        {right > 0 && <CarouselButton top={buttonsTop} right onClick={this.nextMove}><Icon svg="right-arrow" color="var(--first-color)"/></CarouselButton>}
        
        {/* Contenedor con overflow */}

        <div className="overflow" ref={this.container}>

          <div className="animation" ref={this.translateContainer}>

            {/* Contenedor con contenido */}
            <div ref={this.grid}>

              {children}

            </div>

          </div>
          
        </div>

      </CarouselContainer>

    )

  }

}

export { Carousel }