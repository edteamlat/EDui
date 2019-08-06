/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Banner, EDgrid } from '../src';

storiesOf('Banner', module)
	.add('Main banner', () => (
		<Banner diagonal imageContainer>
			<EDgrid m={6}>
				<div className="s-cols-4 s-x-2">
					<img src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
						className="main-banner__img"
						alt="banner picture" />
					<div class="main-banner__data">
						<h2>Contenido</h2>
					</div>
				</div>
			</EDgrid>
		</Banner>
	))
