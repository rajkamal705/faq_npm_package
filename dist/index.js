"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Accordion.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Accordion = function Accordion(_ref) {
  var items = _ref.items,
    _ref$allowMultiple = _ref.allowMultiple,
    allowMultiple = _ref$allowMultiple === void 0 ? false : _ref$allowMultiple,
    _ref$defaultOpenFirst = _ref.defaultOpenFirst,
    defaultOpenFirst = _ref$defaultOpenFirst === void 0 ? false : _ref$defaultOpenFirst,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$itemClassName = _ref.itemClassName,
    itemClassName = _ref$itemClassName === void 0 ? '' : _ref$itemClassName,
    _ref$titleClassName = _ref.titleClassName,
    titleClassName = _ref$titleClassName === void 0 ? '' : _ref$titleClassName,
    _ref$contentClassName = _ref.contentClassName,
    contentClassName = _ref$contentClassName === void 0 ? '' : _ref$contentClassName;
  var _useState = (0, _react.useState)(defaultOpenFirst ? [0] : []),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndexes = _useState2[0],
    setActiveIndexes = _useState2[1];
  var toggleItem = function toggleItem(index) {
    setActiveIndexes(function (prev) {
      if (allowMultiple) {
        return prev.includes(index) ? prev.filter(function (i) {
          return i !== index;
        }) : [].concat(_toConsumableArray(prev), [index]);
      }
      return prev.includes(index) ? [] : [index];
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "accordion ".concat(className)
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "accordion-item ".concat(itemClassName, " ").concat(activeIndexes.includes(index) ? 'active' : '')
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "accordion-title ".concat(titleClassName),
      onClick: function onClick() {
        return toggleItem(index);
      },
      "aria-expanded": activeIndexes.includes(index),
      "aria-controls": "accordion-content-".concat(index)
    }, item.title, /*#__PURE__*/_react["default"].createElement("span", {
      className: "accordion-icon"
    }, activeIndexes.includes(index) ? '−' : '+')), /*#__PURE__*/_react["default"].createElement("div", {
      id: "accordion-content-".concat(index),
      className: "accordion-content ".concat(contentClassName),
      role: "region",
      style: {
        maxHeight: activeIndexes.includes(index) ? '1000px' : '0'
      }
    }, item.content));
  }));
};
Accordion.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    content: _propTypes["default"].node.isRequired
  })).isRequired,
  allowMultiple: _propTypes["default"].bool,
  defaultOpenFirst: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  itemClassName: _propTypes["default"].string,
  titleClassName: _propTypes["default"].string,
  contentClassName: _propTypes["default"].string
};
Accordion.defaultProps = {
  allowMultiple: false,
  defaultOpenFirst: false
};
var _default = exports["default"] = Accordion;