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

var Toggle = {
  Grow: _react2['default'].createClass({
    displayName: 'Grow',

    render: function render() {
      var _this = this;

      var _props = this.props;
      var toggled = _props.toggled;
      var origin = _props.origin;
      var display = _props.display;

      origin = origin || 'left top';
      display = display || 'block';
      return _react2['default'].createElement(
        _reactMotion2['default'],
        {
          endValue: {
            scale: {
              val: toggled ? 1 : 0,
              config: [200, 20]
            },
            opacity: {
              val: toggled ? 1 : 0
            }
          }
        },
        function (interpolated) {
          var style = {
            transformOrigin: origin || 'left top',
            transform: 'scale(' + interpolated.scale.val + ')',
            opacity: interpolated.opacity.val,
            display: interpolated.opacity.val > 0 ? display : 'none'
          };
          return _this.props.children(style);
        }
      );
    }
  })
};
exports.Toggle = Toggle;

},{"react":"react","react-motion":"react-motion"}]},{},[1]);
