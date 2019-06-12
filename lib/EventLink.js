"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _core = _interopRequireDefault(require("@mixspa/core"));

var _preactRouter = require("preact-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var handleClick = function handleClick(next, event) {
  _core["default"].emit('mixspa:url:changed', event.target.getAttribute('href'));

  next && next(event);
};

var EventLink = function EventLink(_ref) {
  var _onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["onClick"]);

  return (0, _preact.h)(_preactRouter.Link, _extends({
    onClick: function onClick(e) {
      return handleClick(_onClick, e);
    }
  }, rest));
};

var _default = EventLink;
exports["default"] = _default;