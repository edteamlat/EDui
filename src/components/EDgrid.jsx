/* eslint-disable react/require-default-props */
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {
	POSSIBLE_BREAKPOINTS,
	POSSIBLE_GAPS,
	CHILDREN_PROPTYPES
} from "../constants";

const EDgrid = React.forwardRef((props, ref) => {
	const {
		as: Component = "div",
		children,
		className,
		small,
		medium = small,
		large = medium,
		rowsGap,
		gap,
		...restProps
	} = props;

	return (
		<Component
			ref={ref}
			className={classnames(
				"ed-grid",
				className,
				`s-grid-${small}`,
				`m-grid-${medium}`,
				`lg-grid-${large}`,
				rowsGap && "rows-gap",
				typeof gap === "number" && `gap-${gap}`
			)}
			{...restProps}
		>
			{children}
		</Component>
	);
});

EDgrid.propTypes = {
	as: PropTypes.elementType,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	className: PropTypes.string,
	small: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
	medium: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
	large: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
	rowsGap: PropTypes.bool,
	gap: PropTypes.oneOf(POSSIBLE_GAPS)
};

EDgrid.defaultProps = {
	as: "div",
	className: "",
	small: 1,
	rowsGap: false,
	gap: null
};

export { EDgrid };
