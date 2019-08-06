/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
	Input,
	Select,
	TextArea,
	Label,
	EDgrid,
	Button,
	EDcontainer,
	EDitem
} from '../src';

storiesOf('Form elements', module)
	.add('Input', () => <Input type="text" placeholder="Fill your name" />)
	.add('Input disabled', () => <Input type="text" placeholder="Fill your name" disabled />)
	.add('Select', () => (
		<Select>
			<option>Colombia</option>
			<option>Bolivia</option>
			<option>Argentina</option>
			<option>Peru</option>
			<option>Mexico</option>
		</Select>
	))
	.add('Textarea', () => (
		<TextArea placeholder="Write your post here" />
	))
	.add('Label', () => (
		<form>
			<Label>Name</Label>
			<Input type="text" placeholder="Name" />
		</form>
	))
	.add('Form with grid', () => (
		<form>
			<EDgrid s={1} m={2} gap={2} rowGap>
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
				<TextArea placeholder="Biography" className="m-cols-2" />
				<Button type="submit" className="m-cols-2">Register</Button>
			</EDgrid>
		</form>
	))
	.add('Form with EDcontainer', () => (
		<form>
			<EDcontainer>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Name" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Email" type="email" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Password" type="password" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Repeat Password" type="password" />
				</EDitem>
				<EDitem formItem>
					<Select>
						<option>Colombia</option>
						<option>Bolivia</option>
						<option>Argentina</option>
						<option>Peru</option>
						<option>Mexico</option>
					</Select>
				</EDitem>
				<EDitem formItem>
					<TextArea placeholder="Biography" />
				</EDitem>
				<EDitem formItem>
					<Button type="submit" full>Register</Button>
				</EDitem>
			</EDcontainer>
		</form>
	));
