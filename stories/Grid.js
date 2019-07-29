/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, DynamicGrid } from '../src';

storiesOf('Grid', module)
	.add('Grid s', () => (
		<Grid s={1} m={4} gap={2} right>
			<article>1</article>
			<article>2</article>
			<article>3</article>
			<article>4</article>
			<article>5</article>
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
