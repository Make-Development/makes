module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gMHI");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gMHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //:> 

function Home(props) {
  const jwt = __webpack_require__("tMJi");

  const {
    0: contact,
    1: setContact
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: '',
    chk: false
  });

  const handleChange = e => {
    setContact(_objectSpread(_objectSpread({}, contact), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const Changechk = e => {
    contact.chk = e.target.checked;
    console.log(contact);
    setContact(_objectSpread(_objectSpread({}, contact), {}, {
      [e.target.name]: e.target.checked
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(contact);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid pl-0 bg-white"
  }, __jsx("div", {
    className: "row no-gutter"
  }, __jsx("div", {
    className: "d-none d-md-flex col-md-4 col-lg-8 bg-pic"
  }, __jsx("div", {
    className: ""
  })), __jsx("div", {
    className: "col-md-8 col-lg-4"
  }, __jsx("div", {
    className: "mk-login "
  }, __jsx("div", {
    className: "container row"
  }, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "col-md-9 col-lg-8 mx-auto"
  }, __jsx("h1", {
    className: "mk-login-heading "
  }, "Make"), __jsx("blockquote", {
    className: "blockquote"
  }, __jsx("footer", {
    className: "blockquote-footer"
  }, "Welcome back! ")), __jsx("div", {
    className: "form-label-group"
  }, __jsx("input", {
    type: "text",
    id: "inputEmail",
    name: "email",
    className: "form-control",
    onChange: handleChange,
    placeholder: "Email & User"
  }), __jsx("label", {
    htmlFor: "inputEmail"
  }, "Email & User")), __jsx("div", {
    className: "form-label-group"
  }, __jsx("input", {
    type: "password",
    id: "inputPassword",
    name: "password",
    onChange: handleChange,
    className: "form-control",
    placeholder: "Password"
  }), __jsx("label", {
    htmlFor: "inputPassword"
  }, "Password")), __jsx("div", {
    className: "custom-control custom-checkbox mb-3"
  }, __jsx("input", {
    type: "checkbox",
    checked: contact.chk,
    name: "chk",
    onChange: Changechk,
    className: "custom-control-input",
    id: "customCheck1"
  }), __jsx("label", {
    className: "custom-control-label ml-2"
  }, "Remember password")), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2",
    type: "submit"
  }, "Sign in"), __jsx("hr", {
    className: "my-5"
  }), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold auth-google-button mb-2",
    type: "submit"
  }, "Sign up with Google")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });