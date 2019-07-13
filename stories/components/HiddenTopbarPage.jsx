import React, { Component } from 'react';
import { Button, Topbar } from '../../src';

class HiddenTopbarPage extends Component {
	constructor(...props) {
		super(...props);
		this.state = { visible: true };

		this.toggleTopbar = this.toggleTopbar.bind(this);
	}

	toggleTopbar() {
		this.setState(prevState => ({ visible: !prevState.visible }));
	}

	render() {
		const { visible } = this.state;

		return (
			<>
				<Topbar visible={visible}>Topbar</Topbar>
				<Button color='dark-color' onClick={this.toggleTopbar}> {visible ? 'Hidden' : 'Show'} topbar</Button>
			</>
		)
	}
}

export default HiddenTopbarPage;
