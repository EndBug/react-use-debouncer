"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDebouncedCallback;

var _react = require("react");

// options will be implemented in later version
function useDebouncedCallback(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    leading: false,
    trailing: true
  };
  var timeout = (0, _react.useRef)(null);
  var allowLeadingCall = (0, _react.useRef)(true);
  var cancelCallback = (0, _react.useCallback)(function () {
    return clearTimeout(timeout.current);
  }, []);
  var immediate = options.leading;
  var postpone = options.trailing === undefined ? true : options.trailing;

  var wrappedCallback = function wrappedCallback() {
    if (postpone) callback();
    allowLeadingCall.current = true;
  };

  var debouncedCallback = (0, _react.useCallback)(function () {
    if (immediate && allowLeadingCall.current) {
      callback();
      allowLeadingCall.current = false;
    }

    timeout.current = setTimeout(wrappedCallback, delay);
    return function () {
      return clearTimeout(timeout.current);
    };
  }, [callback, delay, cancelCallback]);
  return [debouncedCallback, cancelCallback];
}