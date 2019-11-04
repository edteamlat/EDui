import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

const CardFooter = React.forwardRef((props, ref) => {
	const { children, className, ...restProps } = props;

	return (
		<footer
			className={classnames(
				"background grey-color-lighter s-px-2 s-py-1 s-radius-bl-1 s-radius-br-1 flex nowrap",
				className
			)}
			ref={ref}
			{...restProps}
		>
			{children}
		</footer>
	);
});

CardFooter.propTypes = {
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	className: PropTypes.string
};

CardFooter.defaultProps = {
	className: ""
};

export { CardFooter };
