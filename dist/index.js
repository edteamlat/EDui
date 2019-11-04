import React, { createContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var CHILDREN_PROPTYPES = [PropTypes.arrayOf(PropTypes.node), PropTypes.node];
var COLORS = ["first", "second", "accent", "third", "dark"];
var POSSIBLE_BREAKPOINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var POSSIBLE_GAPS = [0, 1, 2, 3, 4];
var POSSIBLE_ITEM_PERCENTAGES = _toConsumableArray(new Array(100)).map(function (_, index) {
  return index + 1;
});
var POSSIBLE_ROLES = ["presentation", "button", "link", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "searchbox", "switch", "textbox"];

var Button = React.forwardRef(function (props, ref) {
  var color = props.color,
      tiny = props.tiny,
      micro = props.micro,
      full = props.full,
      ghost = props.ghost,
      className = props.className,
      children = props.children,
      onClick = props.onClick,
      restProps = _objectWithoutProperties(props, ["color", "tiny", "micro", "full", "ghost", "className", "children", "onClick"]);

  return React.createElement("button", _extends({
    ref: ref,
    type: "button",
    onClick: onClick,
    className: classnames("button", className, "".concat(color, "-color"), tiny && "tiny", micro && "micro", full && "full", ghost && "ghost")
  }, restProps), children);
});
Button.propTypes = {
  /** Background button color */
  color: PropTypes.oneOf(COLORS),
  className: PropTypes.string,
  tiny: PropTypes.bool,
  ghost: PropTypes.bool,
  full: PropTypes.bool,
  micro: PropTypes.bool,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  onClick: PropTypes.func
};
Button.defaultProps = {
  color: "first",
  className: "",
  tiny: false,
  ghost: false,
  full: false,
  micro: false,
  onClick: Function.prototype
};

var Table = React.forwardRef(function (props, ref) {
  var type = props.type,
      responsive = props.responsive,
      className = props.className,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["type", "responsive", "className", "children"]);

  var table = React.createElement("table", _extends({
    className: classnames(className, type && "table--".concat(type)),
    ref: ref
  }, restProps), children);
  return responsive ? React.createElement("div", {
    className: "table-container"
  }, table) : table;
});
Table.propTypes = {
  type: PropTypes.oneOf(["secondary", "tertiary", "accent", "dark"]),
  responsive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
Table.defaultProps = {
  type: "",
  responsive: true,
  className: ""
};

var Input = React.forwardRef(function (props, ref) {
  var type = props.type,
      name = props.name,
      required = props.required,
      className = props.className,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      defaultValue = props.defaultValue,
      restProps = _objectWithoutProperties(props, ["type", "name", "required", "className", "placeholder", "value", "onChange", "defaultValue"]);

  return React.createElement("input", _extends({
    ref: ref,
    type: type,
    name: name,
    value: value,
    onChange: onChange,
    defaultValue: defaultValue,
    placeholder: placeholder,
    required: required,
    className: className
  }, restProps));
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
  value: null,
  onChange: Function.prototype,
  defaultValue: ""
};

var FormItem = React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? "div" : _props$as,
      children = props.children,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["as", "children", "className"]);

  return React.createElement(Component, _extends({
    className: classnames("form__item", className),
    ref: ref
  }, restProps), children);
});
FormItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string
};
FormItem.defaultProps = {
  as: "div",
  className: ""
};

var Select = React.forwardRef(function (props, ref) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  return React.createElement("select", _extends({}, restProps, {
    ref: ref
  }), children);
});
Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

var TextArea = React.forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
      className = props.className,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      defaultValue = props.defaultValue,
      restProps = _objectWithoutProperties(props, ["placeholder", "className", "name", "onChange", "value", "defaultValue"]);

  return React.createElement("textarea", _extends({
    className: className,
    name: name,
    onChange: onChange,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    ref: ref
  }, restProps));
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

var Form = React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      onSubmit = props.onSubmit,
      restProps = _objectWithoutProperties(props, ["className", "children", "onSubmit"]);

  return React.createElement("form", _extends({
    className: className,
    ref: ref,
    onSubmit: onSubmit
  }, restProps), children);
});
Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  onSubmit: PropTypes.func
};
Form.defaultProps = {
  className: "",
  onSubmit: Function.prototype
};
Form.Input = Input;
Form.FormItem = FormItem;
Form.Select = Select;
Form.TextArea = TextArea;

var EDgrid = React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? "div" : _props$as,
      children = props.children,
      className = props.className,
      small = props.small,
      _props$medium = props.medium,
      medium = _props$medium === void 0 ? small : _props$medium,
      _props$large = props.large,
      large = _props$large === void 0 ? medium : _props$large,
      rowsGap = props.rowsGap,
      gap = props.gap,
      restProps = _objectWithoutProperties(props, ["as", "children", "className", "small", "medium", "large", "rowsGap", "gap"]);

  return React.createElement(Component, _extends({
    ref: ref,
    className: classnames("ed-grid", className, "s-grid-".concat(small), "m-grid-".concat(medium), "lg-grid-".concat(large), rowsGap && "rows-gap", "gap-".concat(gap))
  }, restProps), children);
});
EDgrid.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string,
  small: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
  medium: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
  large: PropTypes.oneOf(POSSIBLE_BREAKPOINTS),
  rowsGap: PropTypes.bool,
  gap: PropTypes.oneOf(POSSIBLE_GAPS)
};
EDgrid.defaultProps = {
  as: "div",
  className: "",
  small: 1,
  rowsGap: false,
  gap: 0
};

var EDcontainer = React.forwardRef(function (props, ref) {
  var children = props.children,
      full = props.full,
      onClick = props.onClick,
      className = props.className,
      role = props.role,
      onKeyUp = props.onKeyUp,
      restProps = _objectWithoutProperties(props, ["children", "full", "onClick", "className", "role", "onKeyUp"]);

  return React.createElement("div", _extends({
    role: role,
    className: classnames("ed-container", className, full && "full"),
    onClick: onClick,
    onKeyUp: onKeyUp,
    ref: ref
  }, restProps), children);
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

function partialRight(fn) {
  for (var _len = arguments.length, laterArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    laterArguments[_key - 1] = arguments[_key];
  }

  return function partialliedRigthFunction() {
    for (var _len2 = arguments.length, prevArguments = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      prevArguments[_key2] = arguments[_key2];
    }

    return fn.apply(void 0, prevArguments.concat(laterArguments));
  };
}

function objectHasProperties(object, properties) {
  if (_typeof(object) !== "object") {
    return false;
  }

  return properties.every(function (property) {
    return object.hasOwnProperty(property);
  });
}

var hasProperlyFractionProperties = partialRight(objectHasProperties, ["numerator", "denominator"]);
var EDitem = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onClick = props.onClick,
      onKeyUp = props.onKeyUp,
      role = props.role,
      small = props.small,
      _props$medium = props.medium,
      medium = _props$medium === void 0 ? small : _props$medium,
      _props$large = props.large,
      large = _props$large === void 0 ? medium : _props$large,
      restProps = _objectWithoutProperties(props, ["children", "className", "onClick", "onKeyUp", "role", "small", "medium", "large"]);

  var validSmallFraction = hasProperlyFractionProperties(small);
  var validMediumFraction = hasProperlyFractionProperties(medium);
  var validLargeFraction = hasProperlyFractionProperties(large);
  return React.createElement("div", _extends({
    className: classnames("ed-item", className, typeof small === "number" && "s-".concat(small), typeof medium === "number" && "m-".concat(medium), typeof large === "number" && "lg-".concat(large), validSmallFraction && "s-".concat(small.numerator, "-").concat(small.denominator), validMediumFraction && "m-".concat(medium.numerator, "-").concat(medium.denominator), validLargeFraction && "lg-".concat(large.numerator, "-").concat(large.denominator)),
    ref: ref,
    onClick: onClick,
    onKeyUp: onKeyUp,
    role: role
  }, restProps), children);
});
var breakPointsType = [PropTypes.oneOf(POSSIBLE_ITEM_PERCENTAGES), PropTypes.shape({
  numerator: PropTypes.number,
  denominator: PropTypes.number
})];
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

var Topbar = React.forwardRef(function (props, ref) {
  var children = props.children,
      color = props.color,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["children", "color", "className"]);

  return React.createElement("div", _extends({
    className: classnames("topbar", className, "".concat(color, "-color")),
    ref: ref
  }, restProps), children);
});
Topbar.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  color: PropTypes.oneOf(COLORS),
  className: PropTypes.string
};
Topbar.defaultProps = {
  color: "first",
  className: ""
};

var Banner = React.forwardRef(function (props, ref) {
  var children = props.children,
      image = props.image,
      imageAlt = props.imageAlt,
      className = props.className,
      diagonal = props.diagonal,
      color = props.color,
      id = props.id,
      restProps = _objectWithoutProperties(props, ["children", "image", "imageAlt", "className", "diagonal", "color", "id"]);

  return React.createElement("div", _extends({
    className: classnames("main-banner img-container", className, diagonal && "diagonal", "".concat(color, "-color")),
    id: id,
    ref: ref
  }, restProps), React.createElement(EDgrid, {
    large: 6
  }, React.createElement("div", {
    className: "lg-cols-4 lg-x-2"
  }, image && React.createElement("img", {
    className: "main-banner__img",
    src: image,
    alt: imageAlt
  }), React.createElement("div", {
    className: "main-banner__data s-center"
  }, children))));
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

function stopModalContentPropagation(e) {
  e.stopPropagation();
}

var Modal = React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      open = props.open,
      close = props.close,
      restProps = _objectWithoutProperties(props, ["className", "children", "open", "close"]);

  return open && React.createElement("div", _extends({
    className: classnames("ed-modal-container", className),
    ref: ref,
    onClick: close,
    role: "presentation"
  }, restProps), React.createElement("div", {
    className: "ed-modal-content",
    onClick: stopModalContentPropagation,
    role: "presentation"
  }, children));
});
Modal.propTypes = {
  className: PropTypes.string,
  close: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};
Modal.defaultProps = {
  className: "",
  close: Function.prototype,
  open: false
};

var CardContext = createContext();

var CardHeader = React.forwardRef(function (props, ref) {
  var image = props.image,
      className = props.className,
      imageClasses = props.imageClasses,
      alt = props.alt,
      restProps = _objectWithoutProperties(props, ["image", "className", "imageClasses", "alt"]);

  return React.createElement(CardContext.Consumer, null, function (_ref) {
    var horizontal = _ref.horizontal;
    return React.createElement("div", _extends({
      className: classnames(className, "img-container s-ratio-16-9", horizontal && "m-cols-2"),
      ref: ref
    }, restProps), React.createElement("img", {
      className: classnames(imageClasses, horizontal && "s-radius-tl-1 s-radius-tr-1 m-radius", !horizontal && "s-radius-tl-1 s-radius-tr-1"),
      src: image,
      alt: alt
    }));
  });
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

var CardTitle = React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? "h3" : _props$as,
      className = props.className,
      children = props.children,
      restPros = _objectWithoutProperties(props, ["as", "className", "children"]);

  return React.createElement(Component, _extends({
    className: classnames(className, "t4 s-mb-1")
  }, restPros, {
    ref: ref
  }), children);
});
CardTitle.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired
};
CardTitle.defaultProps = {
  as: "h3",
  className: ""
};

var CardContent = React.forwardRef(function (props) {
  var children = props.children,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["children", "className"]);

  return React.createElement(CardContext, null, function (_ref) {
    var horizontal = _ref.horizontal;
    return React.createElement("div", _extends({
      className: classnames("s-pxy-2", horizontal && "m-cols-3 m-pxy-0", className)
    }, restProps), children);
  });
});
CardContent.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string
};
CardContent.defaultProps = {
  className: ""
};

var CardFooter = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["children", "className"]);

  return React.createElement("footer", _extends({
    className: classnames("background grey-color-lighter s-px-2 s-py-1 s-radius-bl-1 s-radius-br-1 flex nowrap", className),
    ref: ref
  }, restProps), children);
});
CardFooter.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string
};
CardFooter.defaultProps = {
  className: ""
};

var CardBody = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["children", "className"]);

  return React.createElement(CardContext.Consumer, null, function (_ref) {
    var horizontal = _ref.horizontal;
    return React.createElement("div", _extends({
      className: classnames(horizontal && "ed-grid m-grid-5 gap-2 m-pxy-2", className),
      ref: ref
    }, restProps), children);
  });
});
CardBody.propTypes = {
  children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
  className: PropTypes.string
};
CardBody.defaultProps = {
  className: ""
};

var Card = React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? "article" : _props$as,
      className = props.className,
      children = props.children,
      horizontal = props.horizontal,
      restProps = _objectWithoutProperties(props, ["as", "className", "children", "horizontal"]);

  return React.createElement(CardContext.Provider, {
    value: {
      horizontal: horizontal
    }
  }, React.createElement(Component, _extends({
    ref: ref,
    className: classnames("s-radius-1 s-shadow-bottom s-border", className)
  }, restProps), children));
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

export { Banner, Button, Card, EDcontainer, EDgrid, EDitem, Form, Modal, Table, Topbar };
//# sourceMappingURL=index.js.map
