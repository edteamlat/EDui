import React from "react";
import PropTypes from "prop-types";

const TextArea = React.forwardRef((props, ref) => {
  const {
    placeholder,
    className,
    name,
    onChange,
    value,
    defaultValue,
    ...restProps
  } = props;

  return (
    <textarea
      className={className}
      name={name}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      ref={ref}
      {...restProps}
    />
  );
});

TextArea.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};

TextArea.defaultProps = {
  placeholder: "",
  className: "",
  name: "",
  onChange: null,
  value: null,
  defaultValue: null
};

export { TextArea };
