/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalStory from './components/ModalStory';

storiesOf('Modal', module)
	.add('Modal', () => (
		<ModalStory />
	));
