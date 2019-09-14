/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components'
import { Carousel } from '../src'
import { Paper } from './components/Paper';


const PaddingContainer = styled.div`
  padding: 2rem;
`

storiesOf('Carousel', module)
  .add('Carusel con botones', () => (
    <PaddingContainer>
      <Carousel lg={4} m={3} s={2} gap={1}>
        <Paper>1</Paper>
        <Paper>2</Paper>
        <Paper>3</Paper>
        <Paper>4</Paper>
        <Paper>5</Paper>
        <Paper>6</Paper>
        <Paper>7</Paper>
        <Paper>8</Paper>
        <Paper>9</Paper>
        <Paper>10</Paper>
      </Carousel>
    </PaddingContainer>
  ))
