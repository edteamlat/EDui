import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

const CardTitle = React.forwardRef(props => {
	const { as: Component = "h3", className, children, ...restPros } = props;

	return <Component className={classnames(className, "t4 s-mb-1")}>{children}</Component>;
});

CardTitle.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
};

CardTitle.defaultProps = {
	as: "h3",
	className: "",
};

export { CardTitle };
