'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Switch(_ref) {
  var active = _ref.active,
      className = _ref.className,
      enabled = _ref.enabled,
      _onClick = _ref.onClick,
      small = _ref.small;

  var classes = ['happy-switch', className, active ? 'on ' : 'off', small ? 'small ' : '', enabled ? '' : 'disabled '].join(' ');

  return _react2.default.createElement(
    'div',
    { className: classes, onClick: function onClick(e) {
        return enabled ? _onClick(e) : null;
      } },
    _react2.default.createElement('div', { className: 'switch-toggle' })
  );
}

Switch.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string,
  enabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  small: _propTypes2.default.bool
};
Switch.defaultProps = {
  enabled: true,
  className: ''
};

exports.default = Switch;