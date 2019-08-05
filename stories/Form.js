/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Select, TextArea, Label, Grid, Button } from '../src';

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
	.add('Textarea', () => <TextArea placeholder="Write your post here" />)
	.add('Label', () => (
		<>
			<form>
				<Label>Name</Label>
				<Input type='text' placeholder='Name' />
			</form>
		</>
	))
	.add('Form', () => (
		<form>
			<Grid s={1} m={2} gap={2} rowGap>
				<Input placeholder="Name" />
				<Input placeholder="Email" type="email" />
				<Input placeholder="Password" type="password" />
				<Input placeholder="Repeat Password" type="password" />
				<Select className="m-cols-2">
					<option>Colombia</option>
					<option>Bolivia</option>
					<option>Argentina</option>
					<option>Peru</option>
					<option>Mexico</option>
				</Select>
				<Button type="submit" className="m-cols-2">Register</Button>
				{/* <Input type="submit" value="Register" className="m-cols-2'"/> */}
			</Grid>
		</form>
	))
