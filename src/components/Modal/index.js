
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer } from './ModalContainer';
import { ModalContent } from './ModalContent';

function stopModalContentPropagation(e) {
	e.stopPropagation();
}

export class Modal extends Component {
	constructor(...props) {
		super(...props);
		this.close = this.close.bind(this);
	}

	close() {
		const { close } = this.props;
		close();
	}

	render() {
		const { children, open } = this.props;

		return open && (
			<ModalContainer onClick={this.close}>
				<ModalContent onClick={stopModalContentPropagation}>
					{children}
				</ModalContent>
			</ModalContainer>
		)
	}
}

Modal.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
	close: PropTypes.func
};

Modal.defaultProps = {
	open: false,
	close: Function.prototype
};
