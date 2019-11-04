import React from "react";
import PropTypes from "prop-types";

const Select = React.forwardRef((props, ref) => {
	const { children, ...restProps } = props;

	return (
		<select {...restProps} ref={ref}>
			{children}
		</select>
	);
});

Select.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export { Select };
