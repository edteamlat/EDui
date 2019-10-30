import React from "react";
import PropTypes from "prop-types";

const CardHeader = React.forwardRef(props => {
	const { image, horizontal } = props;

	return (
		<div className={`img-container s-ratio-16-9 ${horizontal && 'm-cols-2'}`}>
			<img className={horizontal ? "s-radius-tl-1 s-radius-tr-1 m-radius" : "s-radius-tl-1 s-radius-tr-1"} {...props} src={image} alt="Póster de curso EDteam" />
		</div>
	);
});

CardHeader.propTypes = {
	image: PropTypes.string
};

CardHeader.defaultProps = {
	image: ""
};

export { CardHeader };
