/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Topbar } from '../src';
import HiddenTopbarPage from './components/HiddenTopbarPage';

storiesOf('Topbar', module)
	.add('Topbar', () => (
		<Topbar color="third-color">
			<div style={{ textAlign: 'center' }}>
				Topbar test
			</div>
		</Topbar>
	))
	.add('Hidden topbar', () => (
		<HiddenTopbarPage />
	));
