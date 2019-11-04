import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CardContext } from "../utils/contexts";

const CardHeader = React.forwardRef((props, ref) => {
	const { image, className, imageClasses, alt, ...restProps } = props;

	return (
		<CardContext.Consumer>
			{({ horizontal }) => (
				<div
					className={classnames(
						className,
						"img-container s-ratio-16-9",
						horizontal && "m-cols-2"
					)}
					ref={ref}
					{...restProps}
				>
					<img
						className={classnames(
							imageClasses,
							horizontal && "s-radius-tl-1 s-radius-tr-1 m-radius",
							!horizontal && "s-radius-tl-1 s-radius-tr-1"
						)}
						src={image}
						alt={alt}
					/>
				</div>
			)}
		</CardContext.Consumer>
	);
});

CardHeader.propTypes = {
	image: PropTypes.string,
	className: PropTypes.string,
	imageClasses: PropTypes.string,
	alt: PropTypes.string
};

CardHeader.defaultProps = {
	image: "",
	className: "",
	imageClasses: "",
	alt: ""
};

export { CardHeader };
