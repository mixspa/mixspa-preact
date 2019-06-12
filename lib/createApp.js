"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _core = _interopRequireDefault(require("@mixspa/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createApp = function createApp(tag, renderCom) {
  _core["default"].define({
    tag: tag,
    render: function render(parentEl) {
      (0, _preact.render)(renderCom(_core["default"].getAttributes(parentEl)), parentEl);
    }
  });
};

var _default = createApp;
exports["default"] = _default;