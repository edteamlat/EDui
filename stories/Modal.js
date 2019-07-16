/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../src';

storiesOf('Modal', module)
	.add('Open Modal', () => (
		<Modal open>
			<h1>EDModal</h1>
		</Modal>
	))
	.add('Closed modal', () => (
		<Modal>
			<h1>EDModal</h1>
		</Modal>
	));
