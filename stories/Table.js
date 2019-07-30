/* eslint-disable react/jsx-indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, TableContainer } from '../src';

storiesOf('Table', module)
	.add('Table', () => (
		<TableContainer>
			<Table>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>

			</Table>
		</TableContainer>
	))
	.add('Secondary', () => (
		<TableContainer>
			<Table type='secondary'>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
			</Table>
		</TableContainer>
	))
	.add('Tertiary', () => (
		<TableContainer>
			<Table type='tertiary'>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
			</Table>
		</TableContainer>
	))
	.add('Accent', () => (
		<TableContainer>
			<Table type='accent'>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
			</Table>
		</TableContainer>
	))
	.add('Dark', () => (
		<TableContainer>
			<Table type='dark'>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Acciones</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Alejandro</td>
					<td>alejogs4@gmail.com</td>
					<td>Aqui las acciones</td>
				</tr>
			</Table>
		</TableContainer>
	))
