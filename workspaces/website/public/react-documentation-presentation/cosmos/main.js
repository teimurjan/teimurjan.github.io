(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/components/Button/OutlinedButton/index.jsx":
/*!********************************************************!*\
  !*** ./src/components/Button/OutlinedButton/index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/components/Button/OutlinedButton/index.styles.js");
/* harmony import */ var _theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/default */ "./src/theme/default.js");




var OutlinedButton = function OutlinedButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

OutlinedButton.defaultProps = {
  type: "primary",
  theme: _theme_default__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OutlinedButton);

/***/ }),

/***/ "./src/components/Button/OutlinedButton/index.styles.js":
/*!**************************************************************!*\
  !*** ./src/components/Button/OutlinedButton/index.styles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.styles */ "./src/components/Button/index.styles.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background: linear-gradient(to left, white 50%, ", " 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n  transition: all 400ms ease-in-out;\n\n  &:hover {\n    background-position: left bottom;\n    color: white;\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_templateObject(), _index_styles__WEBPACK_IMPORTED_MODULE_1__["colorSelector"], _index_styles__WEBPACK_IMPORTED_MODULE_1__["colorSelector"]));

/***/ }),

/***/ "./src/components/Button/index.fixture.js":
/*!************************************************!*\
  !*** ./src/components/Button/index.fixture.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/components/Button/index.jsx");
/* harmony import */ var _OutlinedButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutlinedButton */ "./src/components/Button/OutlinedButton/index.jsx");
// fixture


/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Primary",
  component: _index__WEBPACK_IMPORTED_MODULE_0__["default"],
  children: "Button"
}, {
  name: "Info",
  component: _index__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    type: 'info'
  },
  children: "Button"
}, {
  name: "Warning",
  component: _index__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    type: 'warning'
  },
  children: "Button"
}, {
  name: "Danger",
  component: _index__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    type: 'danger'
  },
  children: "Button"
}, {
  name: "Primary",
  component: _OutlinedButton__WEBPACK_IMPORTED_MODULE_1__["default"],
  children: "Button"
}, {
  name: "Info",
  component: _OutlinedButton__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    type: 'info'
  },
  children: "Button"
}, {
  name: "Warning",
  component: _OutlinedButton__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    type: 'warning'
  },
  children: "Button"
}, {
  name: "Danger",
  component: _OutlinedButton__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    type: 'danger'
  },
  children: "Button"
}]);

/***/ }),

/***/ "./src/components/Button/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.jsx ***!
  \*****************************************/
/*! exports provided: buttonPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPropTypes", function() { return buttonPropTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/default */ "./src/theme/default.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styles */ "./src/components/Button/index.styles.js");





var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__["default"], props);
};

var buttonPropTypes = {
  /**
   * Button type
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["info", "warning", "danger", "primary"]),

  /**
   * Styled-components theme
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      warning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      danger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }).isRequired
  })
};
Button.defaultProps = {
  type: "primary",
  theme: _theme_default__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Button/index.styles.js":
/*!***********************************************!*\
  !*** ./src/components/Button/index.styles.js ***!
  \***********************************************/
/*! exports provided: colorSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorSelector", function() { return colorSelector; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: 100px;\n  background: ", ";\n  border: 2px solid ", ";\n  color: white;\n  position: relative;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  overflow: hidden;\n\n  &:hover {\n    opacity: 0.85;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var colorSelector = function colorSelector(props) {
  return props.theme.colors[props.type || "primary"];
};
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject(), colorSelector, colorSelector));

/***/ }),

/***/ "./src/theme/default.js":
/*!******************************!*\
  !*** ./src/theme/default.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    warning: "#F7CA18",
    primary: "#65b37a",
    danger: "#D24D57",
    info: "#458af9"
  }
});

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./node_modules/react-cosmos/dist/client/loader-entry.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/teimurgasanov/Projects/presentations/react-documentation/app/node_modules/react-cosmos/dist/client/loader-entry.js */"./node_modules/react-cosmos/dist/client/loader-entry.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.js.map