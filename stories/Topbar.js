import React from 'react';
import { storiesOf } from '@storybook/react';
import { Topbar } from '../src';
import HiddenTopbarPage from './components/HiddenTopbarPage';

storiesOf('Topbar', module)
	.add('Topbar', () => (
		<Topbar color='dark-color'>
			<div className='ed-grid'>
				Topbar test
			</div>
		</Topbar>
	))
	.add('Hidden topbar', () => (
		<HiddenTopbarPage />
	));
