/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { partialRight } from "../utils/functional";
import { objectHasProperties } from "../utils/object";
import {
  POSSIBLE_ITEM_PERCENTAGES,
  POSSIBLE_ROLES,
  CHILDREN_PROPTYPES
} from "../constants";

const hasProperlyFractionProperties = partialRight(objectHasProperties, [
  "numerator",
  "denominator"
]);

const EDitem = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    onClick,
    onKeyUp,
    role,
    small,
    medium = small,
    large = medium,
    ...restProps
  } = props;

  const validSmallFraction = hasProperlyFractionProperties(small);
  const validMediumFraction = hasProperlyFractionProperties(medium);
  const validLargeFraction = hasProperlyFractionProperties(large);

  return (
    <div
      className={classnames(
        "ed-item",
        className,
        typeof small === "number" && `s-${small}`,
        typeof medium === "number" && `m-${medium}`,
        typeof large === "number" && `lg-${large}`,
        validSmallFraction && `s-${small.numerator}-${small.denominator}`,
        validMediumFraction && `m-${medium.numerator}-${medium.denominator}`,
        validLargeFraction && `lg-${large.numerator}-${large.denominator}`
      )}
      ref={ref}
      onClick={onClick}
      onKeyUp={onKeyUp}
      role={role}
      {...restProps}
    >
      {children}
    </div>
  );
});

const breakPointsType = [
  PropTypes.oneOf(POSSIBLE_ITEM_PERCENTAGES),
  PropTypes.shape({
    numerator: PropTypes.number,
    denominator: PropTypes.number
  })
];

EDitem.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  role: PropTypes.oneOf(POSSIBLE_ROLES),
  small: PropTypes.oneOfType(breakPointsType),
  medium: PropTypes.oneOfType(breakPointsType),
  large: PropTypes.oneOfType(breakPointsType)
};

EDitem.defaultProps = {
  small: 100,
  className: "",
  onClick: Function.prototype,
  onKeyUp: Function.prototype,
  role: "presentation"
};

export { EDitem };
