/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../src';
import { Paper } from './components/Paper';

storiesOf('Grid', module)
	.add('Grid Example', () => (
		<Grid s={4} gap={1} rowGap>
			<Paper>1</Paper>
			<Paper>2</Paper>
			<Paper>3</Paper>
			<Paper>4</Paper>
		</Grid>
	))
	.add('Grid with items columns modifications', () => (
		<Grid s={4} gap={1} rowGap>
			<Paper className="s-cols-4">1</Paper>
			<Paper className="s-cols-3">2</Paper>
			<Paper>3</Paper>
			<Paper className="s-cols-4">4</Paper>
		</Grid>
	))
	.add('Grid specifying column start', () => (
		<Grid s={4}>
			<Paper className="s-x-2 s-cols-3">1</Paper>
		</Grid>
	))
	.add('Grid specifying rows filled by items', () => (
		<Grid s={2} gap={1} rowGap>
			<Paper className="s-rows-2" height>1</Paper>
			<Paper>2</Paper>
			<Paper>3</Paper>
		</Grid>
	))
	.add('Grid modifying initial item row', () => (
		<Grid s={4} gap={2} rowGap>
			<Paper height className="s-rows-2">1</Paper>
			<Paper>2</Paper>
			<Paper className="s-y-2 s-x-2 s-cols-2">3</Paper>
			<Paper>4</Paper>
			<Paper height className="s-rows-2">5</Paper>
		</Grid>
	))
	.add('Nested containers', () => (
		<Grid m={3} gap={1}>
			<Grid s={3} gap={1} rowGap className="s-cols-2">
				<Paper className="s-cols-3">1</Paper>
				<Paper>2</Paper>
				<Paper>3</Paper>
				<Paper>4</Paper>
			</Grid>
			<Paper height>5</Paper>
		</Grid>
	))
	.add('Rows and columns gap', () => (
		<Grid s={2} m={4} lg={6} gap={1} rowGap>
			<Paper>1</Paper>
			<Paper className="m-cols-3">2</Paper>
			<Paper>3</Paper>
			<Paper>4</Paper>
			<Paper>5</Paper>
			<Paper>6</Paper>
			<Paper>7</Paper>
			<Paper>8</Paper>
			<Paper>9</Paper>
			<Paper>10</Paper>
			<Paper>11</Paper>
			<Paper>12</Paper>
		</Grid>
	));
