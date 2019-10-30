import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

const CardContent = React.forwardRef(props => {
  const { children, className, horizontal, ...restProps } = props;

  return (
    <div
      className={classnames("s-pxy-2", horizontal && "m-cols-3 m-pxy-0", className)}
      {...restProps}
    >
      {children}
    </div>
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
