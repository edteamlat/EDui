import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";
import { CardContext } from "../utils/contexts";

const CardContent = React.forwardRef(props => {
	const { children, className, ...restProps } = props;

	return (
		<CardContext>
			{({ horizontal }) => (
				<div
					className={classnames(
						"s-pxy-2",
						horizontal && "m-cols-3 m-pxy-0",
						className
					)}
					{...restProps}
				>
					{children}
				</div>
			)}
		</CardContext>
	);
});

CardContent.propTypes = {
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	className: PropTypes.string
};

CardContent.defaultProps = {
	className: ""
};

export { CardContent };
