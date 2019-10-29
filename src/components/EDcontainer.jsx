/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { POSSIBLE_ROLES, CHILDREN_PROPTYPES } from "../constants";

const EDcontainer = React.forwardRef((props, ref) => {
  const {
    children,
    full,
    onClick,
    className,
    role,
    onKeyUp,
    ...restProps
  } = props;

  return (
    <div
      role={role}
      className={classnames("ed-container", className, full && "full")}
      onClick={onClick}
      onKeyUp={onKeyUp}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

EDcontainer.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  full: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  role: PropTypes.oneOf(POSSIBLE_ROLES),
  onKeyUp: PropTypes.func
};

EDcontainer.defaultProps = {
  full: false,
  onClick: Function.prototype,
  className: "",
  role: "presentation",
  onKeyUp: Function.prototype
};

export { EDcontainer };
