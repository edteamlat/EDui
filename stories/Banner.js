import React from 'react';
import { storiesOf } from '@storybook/react';
import { Banner } from '../src';

storiesOf('Banner', module)
	.add('Main banner', () => (
		<Banner diagonal>
			Contenido
		</Banner>
	))
