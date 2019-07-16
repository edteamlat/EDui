import React from 'react';
import { mount } from 'enzyme';
import { Modal } from '../src';

describe('Tests for modal component', () => {
	it('Should be defined', () => {
		expect(Modal).toBeDefined();
	});

	it('Should have at least two divs', () => {
		const ModalComponent = mount(<Modal />);
		console.log(ModalComponent.find('div'));
		expect(ModalComponent.find('div')).toHaveLength(2);
	})
})
