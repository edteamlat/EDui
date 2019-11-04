import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";
import { CardContext } from "../utils/contexts";

const Card = React.forwardRef((props, ref) => {
	const {
		as: Component = "article",
		className,
		children,
		horizontal,
		...restProps
	} = props;

	return (
		<CardContext.Provider value={{ horizontal }}>
			<Component
				ref={ref}
				className={classnames("s-radius-1 s-shadow-bottom s-border", className)}
				{...restProps}
			>
				{children}
			</Component>
		</CardContext.Provider>
	);
});

Card.propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
	horizontal: PropTypes.bool,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};

Card.defaultProps = {
	as: "article",
	className: "",
	horizontal: false
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Body = CardBody;

export { Card };
