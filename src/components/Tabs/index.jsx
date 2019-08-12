/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { Component, createContext } from 'react';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const TabsContext = createContext();

export class TabsWrapper extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			active: 0
		};

		this.toggleActiveTab = this.toggleActiveTab.bind(this);
	}

	static Tabs = props => (
		<Tabs {...props}>
			{props.children}
		</Tabs>
	);

	static Tab = props => (
		<TabsContext.Consumer>
			{(value) => (
				<Tab {...props}
					active={value.active}
					reference={props.reference}
					onClick={() => value.toggleActiveTab(props.reference)}>
					{props.children}
				</Tab>
			)}
		</TabsContext.Consumer>
	);

	static Panels = (props) => (
		<div {...props}>
			{props.children}
		</div>
	)

	static Panel = (props) => (
		<TabsContext.Consumer>
			{(value) => (
				<div {...props} style={{ display: props.reference === value.active ? 'block' : 'none' }}>
					{props.children}
				</div>
			)}
		</TabsContext.Consumer>
	)

	toggleActiveTab(newActiveTab) {
		this.setState({ active: newActiveTab });
	}

	render() {
		const { children } = this.props;
		const { active } = this.state;

		return (
			<TabsContext.Provider value={{ active, toggleActiveTab: this.toggleActiveTab }}>
				{children}
			</TabsContext.Provider>
		)
	}
}

// TabsWrapper.propTypes = {
// 	children: PropTypes.node
// };
