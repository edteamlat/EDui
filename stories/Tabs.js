import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabsWrapper } from '../src';

storiesOf('Tabs', module)
	.add('Just tabs', () => (
		<TabsWrapper>
			<TabsWrapper.Tabs>
				<TabsWrapper.Tab reference={0}>Tab 1</TabsWrapper.Tab>
				<TabsWrapper.Tab reference={1}>Tab 2</TabsWrapper.Tab>
				<TabsWrapper.Tab reference={2}>Tab 3</TabsWrapper.Tab>
			</TabsWrapper.Tabs>
		</TabsWrapper>
	))
	.add('Tabs with panels', () => (
		<TabsWrapper>
			<TabsWrapper.Tabs>
				<TabsWrapper.Tab reference={0}>Tab 1</TabsWrapper.Tab>
				<TabsWrapper.Tab reference={1}>Tab 2</TabsWrapper.Tab>
				<TabsWrapper.Tab reference={2}>Tab 3</TabsWrapper.Tab>
			</TabsWrapper.Tabs>
			<TabsWrapper.Panels>
				<TabsWrapper.Panel reference={0}>Content 1</TabsWrapper.Panel>
				<TabsWrapper.Panel reference={1}>Content 2</TabsWrapper.Panel>
				<TabsWrapper.Panel reference={2}>Content 3</TabsWrapper.Panel>
			</TabsWrapper.Panels>
		</TabsWrapper>
	))
