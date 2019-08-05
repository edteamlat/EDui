/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Grid } from '../src';

storiesOf('Button', module)
	.add('First buttons', () => (
		<>
			<Grid s={4} gap={2}>
				<article>
					<Button color="accent-color" onClick={action('click')}>Normal button</Button>
				</article>
				<article>
					<Button color="first-color" tiny onClick={action('click')}>Tiny button</Button>
				</article>
				<article>
					<Button color="first-color" micro onClick={action('click')}>Micro button</Button>
				</article>
				<article>
					<Button color="first-color" ghost onClick={action('click')}>Ghost button</Button>
				</article>
			</Grid>
			{/* <Button color="first-color" full onClick={action('click')}>Full button</Button> */}
		</>
	))
	.add('Second buttons', () => (
		<>
			<Button color="second-color" onClick={action('click')}>Second button</Button>
			<Button color="second-color" tiny onClick={action('click')}>Tiny button</Button>
			<Button color="second-color" micro onClick={action('click')}>Micro button</Button>
			<Button color="second-color" ghost onClick={action('click')}>Ghost button</Button>
			<Button color="second-color" full onClick={action('click')}>Full button</Button>
		</>
	))
	.add('Accent buttons', () => (
		<>
			<Button color="accent-color" onClick={action('click')}>Accent button</Button>
			<Button color="accent-color" tiny onClick={action('click')}>Tiny button</Button>
			<Button color="accent-color" micro onClick={action('click')}>Micro button</Button>
			<Button color="accent-color" ghost onClick={action('click')}>Ghost button</Button>
			<Button color="accent-color" full onClick={action('click')}>Full button</Button>
		</>
	))
	.add('Third buttons', () => (
		<>
			<Button color="third-color" onClick={action('click')}>Third button</Button>
			<Button color="third-color" tiny onClick={action('click')}>Tiny button</Button>
			<Button color="third-color" micro onClick={action('click')}>Micro button</Button>
			<Button color="third-color" ghost onClick={action('click')}>Ghost button</Button>
			<Button color="third-color" full onClick={action('click')}>Full button</Button>
		</>
	))
	.add('Dark buttons', () => (
		<>
			<Button color="dark-color" onClick={action('click')}>Dark button</Button>
			<Button color="dark-color" tiny onClick={action('click')}>Tiny button</Button>
			<Button color="dark-color" micro onClick={action('click')}>Micro button</Button>
			<Button color="dark-color" ghost onClick={action('click')}>Ghost button</Button>
			<Button color="dark-color" full onClick={action('click')}>Full button</Button>
		</>
	));
