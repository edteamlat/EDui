import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CHILDREN_PROPTYPES } from "../constants";

const CardBody = React.forwardRef(props => {
  const { children, className, horizontal, ...restProps } = props;

  return (
    <div
      className={classnames(horizontal && "ed-grid m-grid-5 gap-2 m-pxy-2", className)}
      {...restProps}
    >
      {children}
    </div>
  );
});

CardBody.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string
};

CardBody.defaultProps = {
  className: ""
};

export { CardBody };
