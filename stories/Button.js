/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module)
	.add('All buttons', () => (
		<>
			<Button>Test button for EDui</Button>
			<Button color="first-color">Main color</Button>
			<Button color="accent-color">Accent color</Button>
			<Button color="second-color">Second color</Button>
			<Button color="third-color">Third color</Button>
			<Button color="dark-color">Dark color</Button>
			<Button color="unknown-color">Unknown color</Button>
		</>
	))
	.add('Tiny buttons', () => (
		<>
			<Button tiny>Test button for EDui</Button>
			<Button color="first-color" tiny>Main color</Button>
			<Button color="accent-color" tiny>Accent color</Button>
			<Button color="second-color" tiny>Second color</Button>
			<Button color="third-color" tiny>Third color</Button>
			<Button color="dark-color" tiny>Dark color</Button>
			<Button color="unknown-color" tiny>Unknown color</Button>
		</>
	))
	.add('Micro buttons', () => (
		<>
			<Button micro>Test button for EDui</Button>
			<Button color="first-color" micro>Main color</Button>
			<Button color="accent-color" micro>Accent color</Button>
			<Button color="second-color" micro>Second color</Button>
			<Button color="third-color" micro>Third color</Button>
			<Button color="dark-color" micro>Dark color</Button>
			<Button color="unknown-color" micro>Unknown color</Button>
		</>
	))
	.add('Ghost buttons', () => (
		<>
			<Button ghost>Test button for EDui</Button>
			<Button color="first-color" ghost>Main color</Button>
			<Button color="accent-color" ghost>Accent color</Button>
			<Button color="second-color" ghost>Second color</Button>
			<Button color="third-color" ghost>Third color</Button>
			<Button color="dark-color" ghost>Dark color</Button>
			<Button color="unknown-color" ghost>Unknown color</Button>
		</>
	))
	.add('Full buttons', () => (
		<>
			<Button full>Test button for EDui</Button>
			<Button color="first-color" full>Main color</Button>
			<Button color="accent-color" full>Accent color</Button>
			<Button color="second-color" full>Second color</Button>
			<Button color="third-color" full>Third color</Button>
			<Button color="dark-color" full>Dark color</Button>
			<Button color="unknown-color" full>Unknown color</Button>
		</>
	));
