import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";

const Card = React.forwardRef((props, ref) => {
	const {
		as: Component = "article",
		className,
		url,
		children,
		horizontal,
		...restProps
	} = props;

	return (
		<Component
			ref={ref}
			className={classnames("s-radius-1 s-shadow-bottom s-border", className)}
			{...restProps}
		>
			{children}
		</Component>
	);
});

Card.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};

Card.defaultProps = {
	as: "article",
	className: ""
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Body = CardBody;

export { Card };
