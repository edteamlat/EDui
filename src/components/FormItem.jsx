import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

const FormItem = React.forwardRef((props, ref) => {
	const { as: Component = "div", children, className, ...restProps } = props;

	return (
		<Component
			className={classnames("form__item", className)}
			ref={ref}
			{...restProps}
		>
			{children}
		</Component>
	);
});

FormItem.propTypes = {
	as: PropTypes.elementType,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	className: PropTypes.string
};

FormItem.defaultProps = {
	as: "div",
	className: ""
};

export { FormItem };
