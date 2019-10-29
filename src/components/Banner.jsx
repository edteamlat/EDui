import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { EDgrid } from "./EDgrid";
import { CHILDREN_PROPTYPES, COLORS } from "../constants";

const Banner = React.forwardRef((props, ref) => {
  const {
    children,
    image,
    imageAlt,
    className,
    diagonal,
    color,
    id,
    ...restProps
  } = props;

  return (
    <div
      className={classnames(
        "main-banner img-container",
        className,
        diagonal && "diagonal",
        `${color}-color`
      )}
      id={id}
      ref={ref}
      {...restProps}
    >
      <EDgrid large={6}>
        <div className="lg-cols-4 lg-x-2">
          {image && (
            <img className="main-banner__img" src={image} alt={imageAlt} />
          )}
          <div className="main-banner__data s-center">{children}</div>
        </div>
      </EDgrid>
    </div>
  );
});

Banner.propTypes = {
  className: PropTypes.string,
  diagonal: PropTypes.bool,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  id: PropTypes.string,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};

Banner.defaultProps = {
  className: "",
  diagonal: false,
  image: "",
  imageAlt: "Image",
  color: "first",
  id: "main-banner"
};

export { Banner };
