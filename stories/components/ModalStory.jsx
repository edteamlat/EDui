import React,{ Component } from 'react';
import { Button, Modal } from '../../src';

class ModalStory extends Component {
	constructor(...props) {
		super(...props);

		this.state = { open: false };

		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	closeModal() {
		this.setState({ open: false });
	}

	openModal() {
		this.setState({ open: true });
	}

	render() {
		const { open } = this.state;

		return (
			<>
				<Button color='accent-color' onClick={this.openModal}>Open modal</Button>
				<Modal open={open} close={this.closeModal}>
					<h1>EDmodal</h1>
				</Modal>
			</>
		)
	}
}

export default ModalStory;
