import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Table = React.forwardRef((props, ref) => {
	const { type, responsive, className, children, ...restProps } = props;

	const table = (
		<table
			className={classnames(className, type && `table--${type}`)}
			ref={ref}
			{...restProps}
		>
			{children}
		</table>
	);

	return responsive ? <div className="table-container">{table}</div> : table;
});

Table.propTypes = {
	type: PropTypes.oneOf(["secondary", "tertiary", "accent", "dark"]),
	responsive: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

Table.defaultProps = {
	type: "",
	responsive: true,
	className: ""
};

export { Table };
