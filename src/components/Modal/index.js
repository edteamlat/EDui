
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer } from './ModalContainer';
import { ModalContent } from './ModalContent';

export class Modal extends Component {
	constructor(...props) {
		super(...props);

		this.close = this.close.bind(this);
	}

	close(e) {
		// console.log(e)
	}

	render() {
		const { children, open } = this.props;

		return open && (
			<ModalContainer onClick={this.close}>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalContainer>
		)
	}
}

Modal.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool
};

Modal.defaultProps = {
	open: false
};
