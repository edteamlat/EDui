import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module)
	.add('With text', () => (
		<Button>Test button for EDui</Button>
	))
	.add('With emojis', () => (
		<Button>😀 😎 👍 💯</Button>
	))
