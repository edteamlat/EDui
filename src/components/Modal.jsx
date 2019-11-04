import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

function stopModalContentPropagation(e) {
	e.stopPropagation();
}

const Modal = React.forwardRef((props, ref) => {
	const { className, children, open, close, ...restProps } = props;

	return (
		open && (
			<div
				className={classnames("ed-modal-container", className)}
				ref={ref}
				onClick={close}
				role="presentation"
				{...restProps}
			>
				<div
					className="ed-modal-content"
					onClick={stopModalContentPropagation}
					role="presentation"
				>
					{children}
				</div>
			</div>
		)
	);
});

Modal.propTypes = {
	className: PropTypes.string,
	close: PropTypes.func,
	open: PropTypes.bool,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};

Modal.defaultProps = {
	className: "",
	close: Function.prototype,
	open: false
};

export { Modal };
