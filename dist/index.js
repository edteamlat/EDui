'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display          : inline-block;\n  padding          : .5rem 1rem;\n  background-color : #007BDF;\n  color            : #FFF;\n  cursor           : pointer;\n  text-decoration  : none;\n  line-height      : inherit;\n  border-radius    : .25rem;\n  transition       : transform .05s;\n  border           : 1px solid #007BDF;\n  text-align       : center;\n  user-select      : none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.button(_templateObject());

exports.Button = Button;
