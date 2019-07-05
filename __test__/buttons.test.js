import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../src';

describe('Tests for button component', () => {
  it('Render a Button without errors', () => {
		const button = mount(<Button />);
		expect(button.find('button')).toHaveLength(1)
  });
});
