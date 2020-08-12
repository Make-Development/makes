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

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\NextJs\\make\\src\\pages\\login\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Home(props) {
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
    className: "container-fluid pl-0 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row no-gutter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-none d-md-flex col-md-4 col-lg-8 bg-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-md-8 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "mk-login ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-9 col-lg-8 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx("blockquote", {
    className: "blockquote text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../lg_make.png",
    alt: "",
    width: 200,
    height: 200,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    id: "inputEmail",
    name: "email",
    className: "form-control",
    onChange: handleChange,
    placeholder: "Email & User",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }), __jsx("label", {
    htmlFor: "inputEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "Email & User")), __jsx("div", {
    className: "form-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "password",
    id: "inputPassword",
    name: "password",
    onChange: handleChange,
    className: "form-control",
    placeholder: "Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }), __jsx("label", {
    htmlFor: "inputPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, "Password")), __jsx("div", {
    className: "custom-control custom-checkbox mb-3 pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: contact.chk,
    name: "chk",
    onChange: Changechk,
    className: "custom-control-input",
    id: "customCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }), __jsx("label", {
    className: "custom-control-label ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, "Remember password")), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Sign in"), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login  font-weight-bold auth-google-button mb-2 ",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Sign up  Google")))))))));
}

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./src/pages/login/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NextJs\make\src\pages\login\index.js */"./src/pages/login/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGsiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ2hhbmdlY2hrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFFZSxTQUFTQSxJQUFULENB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QixNQUFFLEVBQUMsZUFBMUI7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUNrQixZQUFRLEVBQUVBLFlBRDVCO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFFMkIsZUFBVyxFQUFDLFVBRnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU8sV0FBTyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQVpGLEVBa0JFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLFdBQU8sRUFBRU4sT0FBTyxDQUFDSyxHQUF4QztBQUNFLFFBQUksRUFBQyxLQURQO0FBQ2EsWUFBUSxFQUFFTSxTQUR2QjtBQUVFLGFBQVMsRUFBQyxzQkFGWjtBQUVtQyxNQUFFLEVBQUMsY0FGdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUU7QUFBTyxhQUFTLEVBQUMsMkJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsQ0FsQkYsRUF3QkU7QUFBUSxhQUFTLEVBQUMsb0dBQWxCO0FBQXVILFFBQUksRUFBQyxRQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLEVBMEJFO0FBQVEsYUFBUyxFQUFDLHVGQUFsQjtBQUEwRyxRQUFJLEVBQUMsUUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkExQkYsQ0FERixDQURGLENBREYsQ0FERixDQUxGLENBREYsQ0FERixDQUZGO0FBb0RELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZELGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cblxuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjaGs6IGZhbHNlXG4gIH0pO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgc2V0Q29udGFjdCh7IC4uLmNvbnRhY3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgY29uc3QgQ2hhbmdlY2hrID0gZSA9PiB7XG4gICAgY29udGFjdC5jaGsgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpO1xuXG4gICAgc2V0Q29udGFjdCh7IC4uLmNvbnRhY3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQuY2hlY2tlZCB9KTtcbiAgfVxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpXG5cblxuICB9O1xuXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwbC0wIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtZmxleCBjb2wtbWQtNCBjb2wtbGctOCBiZy1waWNcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbGctNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtay1sb2dpbiBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcm93XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05IGNvbC1sZy04IG14LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJibG9ja3F1b3RlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9sZ19tYWtlLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dEVtYWlsXCIgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsICYgVXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+RW1haWwgJiBVc2VyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImlucHV0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1iLTMgcGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjb250YWN0LmNoa31cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtcIiBvbkNoYW5nZT17Q2hhbmdlY2hrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNoZWNrMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIG1sLTJcIiA+UmVtZW1iZXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbG9naW4gdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBjb2RlcmF0aW5ncy1idXR0b24gbWItMlwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbG9naW4gIGZvbnQtd2VpZ2h0LWJvbGQgYXV0aC1nb29nbGUtYnV0dG9uIG1iLTIgXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXAgIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==