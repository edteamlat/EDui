import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { COLORS, CHILDREN_PROPTYPES } from "../constants";

const Button = React.forwardRef((props, ref) => {
	const {
		color,
		tiny,
		micro,
		full,
		ghost,
		className,
		children,
		onClick,
		...restProps
	} = props;

	return (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			className={classNames(
				"button",
				className,
				`${color}-color`,
				tiny && "tiny",
				micro && "micro",
				full && "full",
				ghost && "ghost"
			)}
			{...restProps}
		>
			{children}
		</button>
	);
});

Button.propTypes = {
	/** Background button color */
	color: PropTypes.oneOf(COLORS),
	className: PropTypes.string,
	tiny: PropTypes.bool,
	ghost: PropTypes.bool,
	full: PropTypes.bool,
	micro: PropTypes.bool,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	onClick: PropTypes.func
};

Button.defaultProps = {
	color: "first",
	className: "",
	tiny: false,
	ghost: false,
	full: false,
	micro: false,
	onClick: Function.prototype
};

export { Button };
