import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Select, TextArea, Label } from '../src';

storiesOf('Form elements', module)
	.add('Input', () => <Input type='text' placeholder='Fill your name' />)
	.add('Input disabled', () => <Input type='text' placeholder='Fill your name' disabled />)
	.add('Select', () => (
		<Select>
			<option>Colombia</option>
			<option>Bolivia</option>
			<option>Argentina</option>
			<option>Peru</option>
			<option>Mexico</option>
		</Select>
	))
	.add('Textarea', () => <TextArea placeholder='Write your post here' />)
	.add('Label', () => (
		<>
			<form>
				<Label>Name</Label>
				<Input type='text' placeholder='Name' />
			</form>
		</>
	))
