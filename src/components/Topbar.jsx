import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { COLORS, CHILDREN_PROPTYPES } from "../constants";

const Topbar = React.forwardRef((props, ref) => {
	const { children, color, className, ...restProps } = props;

	return (
		<div
			className={classnames("topbar", className, `${color}-color`)}
			ref={ref}
			{...restProps}
		>
			{children}
		</div>
	);
});

Topbar.propTypes = {
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	color: PropTypes.oneOf(COLORS),
	className: PropTypes.string
};

Topbar.defaultProps = {
	color: "first",
	className: ""
};

export { Topbar };
