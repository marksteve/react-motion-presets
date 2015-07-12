(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _reactMotion2 = _interopRequireDefault(_reactMotion);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Toggle = {
  Grow: _react2['default'].createClass({
    displayName: 'Grow',

    render: function render() {
      var props = (0, _objectAssign2['default'])({
        origin: 'left top',
        display: 'block'
      }, this.props);
      return _react2['default'].createElement(
        _reactMotion2['default'],
        {
          endValue: {
            scale: {
              val: props.toggled ? 1 : 0,
              config: [200, 20]
            },
            opacity: {
              val: props.toggled ? 1 : 0
            }
          }
        },
        function (interpolated) {
          var style = {
            transformOrigin: props.origin || 'left top',
            transform: 'scale(' + interpolated.scale.val + ')',
            opacity: interpolated.opacity.val,
            display: interpolated.opacity.val > 0 ? props.display : 'none'
          };
          return props.children(style);
        }
      );
    }
  })
};
exports.Toggle = Toggle;

},{"object-assign":2,"react":"react","react-motion":"react-motion"}],2:[function(require,module,exports){
'use strict';
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}]},{},[1]);
