import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    name,
    required,
    className,
    placeholder,
    value,
    onChange,
    defaultValue,
    ...restProps
  } = props;

  return (
    <input
      ref={ref}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      required={required}
      className={className}
      {...restProps}
    />
  );
});

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
};

Input.defaultProps = {
  type: "",
  name: "",
  required: "",
  className: "",
  placeholder: "",
  value: "",
  onChange: "",
  defaultValue: ""
};

export { Input };
