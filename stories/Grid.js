/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../src';
import { Paper } from './components/Paper';

storiesOf('Grid', module)
	.add('Grid s', () => (
		<Grid s={2} m={4} gap={2} rowGap>
			<Paper>1</Paper>
			<Paper>2</Paper>
			<Paper className="s-cols-2 m-cols-1">3</Paper>
			<Paper>4</Paper>
		</Grid>
	))
	.add('Complex grid', () => (
		<Grid s={1}>
			<article>
				1
			</article>
			<Grid m={2} s={1}>
				<main>2</main>
				<aside>3</aside>
			</Grid>
			<article>4</article>
		</Grid>
	));
