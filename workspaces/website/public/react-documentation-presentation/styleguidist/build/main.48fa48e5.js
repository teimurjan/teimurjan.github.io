(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/OutlinedButton/index.md":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/OutlinedButton/index.md ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = { 'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [{\n        'type': 'code',\n        'content': '<div style={{ display: \"flex\", justifyContent: \"space-around\" }}>\\n  <OutlinedButton>Button</OutlinedButton>\\n  <OutlinedButton type=\"info\">Button</OutlinedButton>\\n  <OutlinedButton type=\"warning\">Button</OutlinedButton>\\n  <OutlinedButton type=\"danger\">Button</OutlinedButton>\\n</div>',\n        'settings': {},\n        'evalInContext': evalInContext\n    }]\n\t\n\n//# sourceURL=webpack:///./src/components/Button/OutlinedButton/index.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/index.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/index.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = { 'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'Standard button component to be used everywhere. Handling events for the button is described [here](https://reactjs.org/docs/handling-events.html).'\n    },\n    {\n        'type': 'code',\n        'content': '<div style={{ display: \"flex\", justifyContent: \"space-around\" }}>\\n  <Button>Button</Button>\\n  <Button type=\"info\">Button</Button>\\n  <Button type=\"warning\">Button</Button>\\n  <Button type=\"danger\">Button</Button>\\n</div>',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/components/Button/index.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/Button/OutlinedButton/index.jsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/Button/OutlinedButton/index.jsx ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': '',\n    'displayName': 'OutlinedButton',\n    'methods': [],\n    'props': [\n        {\n            'type': {\n                'name': 'shape',\n                'value': {\n                    'colors': {\n                        'name': 'shape',\n                        'value': {\n                            'warning': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'primary': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'danger': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'info': {\n                                'name': 'string',\n                                'required': true\n                            }\n                        },\n                        'required': true\n                    }\n                }\n            },\n            'required': false,\n            'description': 'Styled-components theme',\n            'defaultValue': {\n                'value': 'defaultTheme',\n                'computed': true\n            },\n            'tags': {},\n            'name': 'theme'\n        },\n        {\n            'type': {\n                'name': 'enum',\n                'value': [\n                    {\n                        'value': '\"info\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"warning\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"danger\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"primary\"',\n                        'computed': false\n                    }\n                ]\n            },\n            'required': false,\n            'description': 'Button type',\n            'defaultValue': {\n                'value': '\"primary\"',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'type'\n        }\n    ],\n    'doclets': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/OutlinedButton/index.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/OutlinedButton/index.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/Button/OutlinedButton/index.jsx?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/Button/index.jsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/Button/index.jsx ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': '',\n    'displayName': 'Button',\n    'methods': [],\n    'props': [\n        {\n            'type': {\n                'name': 'shape',\n                'value': {\n                    'colors': {\n                        'name': 'shape',\n                        'value': {\n                            'warning': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'primary': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'danger': {\n                                'name': 'string',\n                                'required': true\n                            },\n                            'info': {\n                                'name': 'string',\n                                'required': true\n                            }\n                        },\n                        'required': true\n                    }\n                }\n            },\n            'required': false,\n            'description': 'Styled-components theme',\n            'defaultValue': {\n                'value': 'defaultTheme',\n                'computed': true\n            },\n            'tags': {},\n            'name': 'theme'\n        },\n        {\n            'type': {\n                'name': 'enum',\n                'value': [\n                    {\n                        'value': '\"info\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"warning\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"danger\"',\n                        'computed': false\n                    },\n                    {\n                        'value': '\"primary\"',\n                        'computed': false\n                    }\n                ]\n            },\n            'required': false,\n            'description': 'Button type',\n            'defaultValue': {\n                'value': '\"primary\"',\n                'computed': false\n            },\n            'tags': {},\n            'name': 'type'\n        }\n    ],\n    'doclets': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/index.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/Button/index.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/Button/index.jsx?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./src/components/Button/OutlinedButton/index.jsx":
/*!********************************************************!*\
  !*** ./src/components/Button/OutlinedButton/index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ \"./src/components/Button/OutlinedButton/index.styles.js\");\n/* harmony import */ var _theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/default */ \"./src/theme/default.js\");\n\n\n\n\nvar OutlinedButton = function OutlinedButton(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\nOutlinedButton.defaultProps = {\n  type: \"primary\",\n  theme: _theme_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutlinedButton);\n\n//# sourceURL=webpack:///./src/components/Button/OutlinedButton/index.jsx?");

/***/ }),

/***/ "./src/components/Button/OutlinedButton/index.styles.js":
/*!**************************************************************!*\
  !*** ./src/components/Button/OutlinedButton/index.styles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.styles */ \"./src/components/Button/index.styles.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  color: \", \";\\n  background: linear-gradient(to left, white 50%, \", \" 50%);\\n  background-size: 200% 100%;\\n  background-position: right bottom;\\n  transition: all 400ms ease-in-out;\\n\\n  &:hover {\\n    background-position: left bottom;\\n    color: white;\\n    opacity: 1;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_index_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject(), _index_styles__WEBPACK_IMPORTED_MODULE_1__[\"colorSelector\"], _index_styles__WEBPACK_IMPORTED_MODULE_1__[\"colorSelector\"]));\n\n//# sourceURL=webpack:///./src/components/Button/OutlinedButton/index.styles.js?");

/***/ }),

/***/ "./src/components/Button/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.jsx ***!
  \*****************************************/
/*! exports provided: buttonPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonPropTypes\", function() { return buttonPropTypes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/default */ \"./src/theme/default.js\");\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styles */ \"./src/components/Button/index.styles.js\");\n\n\n\n\n\nvar Button = function Button(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n};\n\nvar buttonPropTypes = {\n  /**\n   * Button type\n   */\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([\"info\", \"warning\", \"danger\", \"primary\"]),\n\n  /**\n   * Styled-components theme\n   */\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      warning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      danger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }).isRequired\n  })\n};\nButton.defaultProps = {\n  type: \"primary\",\n  theme: _theme_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button/index.jsx?");

/***/ }),

/***/ "./src/components/Button/index.styles.js":
/*!***********************************************!*\
  !*** ./src/components/Button/index.styles.js ***!
  \***********************************************/
/*! exports provided: colorSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorSelector\", function() { return colorSelector; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 40px;\\n  width: 100px;\\n  background: \", \";\\n  border: 2px solid \", \";\\n  color: white;\\n  position: relative;\\n  cursor: pointer;\\n  font-size: 14px;\\n  font-weight: bold;\\n  overflow: hidden;\\n\\n  &:hover {\\n    opacity: 0.85;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar colorSelector = function colorSelector(props) {\n  return props.theme.colors[props.type || \"primary\"];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject(), colorSelector, colorSelector));\n\n//# sourceURL=webpack:///./src/components/Button/index.styles.js?");

/***/ }),

/***/ "./src/theme/default.js":
/*!******************************!*\
  !*** ./src/theme/default.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  colors: {\n    warning: \"#F7CA18\",\n    primary: \"#65b37a\",\n    danger: \"#D24D57\",\n    info: \"#458af9\"\n  }\n});\n\n//# sourceURL=webpack:///./src/theme/default.js?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./node_modules/react-styleguidist/lib/index ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/teimurgasanov/Projects/presentations/react-documentation/app/node_modules/react-styleguidist/lib/index */\"./node_modules/react-styleguidist/lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/react-styleguidist/lib/index?");

/***/ })

},[[0,"runtime~main",0]]]);