webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "D:\\NextJs\\make\\src\\pages\\login\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function Home(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: '',
    password: '',
    chk: false
  }),
      contact = _useState[0],
      setContact = _useState[1];

  var handleChange = function handleChange(e) {
    setContact(_objectSpread(_objectSpread({}, contact), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var Changechk = function Changechk(e) {
    contact.chk = e.target.checked;
    console.log(contact);
    setContact(_objectSpread(_objectSpread({}, contact), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.checked)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(contact);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid pl-0 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row no-gutter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-none d-md-flex col-md-4 col-lg-8 bg-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-md-8 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "mk-login ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-9 col-lg-8 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, __jsx("blockquote", {
    className: "blockquote text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 23
    }
  }), __jsx("label", {
    htmlFor: "inputEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, "Email & User")), __jsx("div", {
    className: "form-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 23
    }
  }), __jsx("label", {
    htmlFor: "inputPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, "Password")), __jsx("div", {
    className: "custom-control custom-checkbox mb-3 pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 23
    }
  }), __jsx("label", {
    className: "custom-control-label ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, "Remember password")), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "Sign in"), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-login  font-weight-bold auth-google-button mb-2 ",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Sign up  Google")))))))));
}

_s(Home, "eZ1rjNCnK1K9xBqQ+JDwTQC6a/E=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2hrIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ2hhbmdlY2hrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBTWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsa0JBSUpDLHNEQUFRLENBQUM7QUFDckNDLFNBQUssRUFBRSxFQUQ4QjtBQUVyQ0MsWUFBUSxFQUFFLEVBRjJCO0FBR3JDQyxPQUFHLEVBQUU7QUFIZ0MsR0FBRCxDQUpKO0FBQUEsTUFJM0JDLE9BSjJCO0FBQUEsTUFJbEJDLFVBSmtCOztBQVdsQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFDeEJGLGNBQVUsaUNBQU1ELE9BQU4scUdBQWdCRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBekIsRUFBZ0NGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF6QyxHQUFWO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBSixDQUFDLEVBQUk7QUFDckJILFdBQU8sQ0FBQ0QsR0FBUixHQUFjSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0ksT0FBdkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLE9BQVo7QUFFQUMsY0FBVSxpQ0FBTUQsT0FBTixxR0FBZ0JHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUF6QixFQUFnQ0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNJLE9BQXpDLEdBQVY7QUFDRCxHQUxEOztBQVFBLE1BQU1HLFlBQVk7QUFBQSxnTUFBRyxpQkFBTVIsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQSxlQUFDLENBQUNTLGNBQUY7QUFDQUgscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixPQUFaOztBQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVFBLFNBRUUsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFQSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQVksYUFBUyxFQUFDLHdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsT0FBRyxFQUFDLEVBQTlCO0FBQWlDLFNBQUssRUFBRSxHQUF4QztBQUE2QyxVQUFNLEVBQUUsR0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFNRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsWUFBdEI7QUFBbUMsUUFBSSxFQUFDLE9BQXhDO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFDMkIsWUFBUSxFQUFFVCxZQURyQztBQUVFLGVBQVcsRUFBQyxjQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU8sV0FBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixDQU5GLEVBWUU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDLGVBQTFCO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFDa0IsWUFBUSxFQUFFQSxZQUQ1QjtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBRTJCLGVBQVcsRUFBQyxVQUZ2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFPLFdBQU8sRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsQ0FaRixFQWtCRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixXQUFPLEVBQUVGLE9BQU8sQ0FBQ0QsR0FBeEM7QUFDRSxRQUFJLEVBQUMsS0FEUDtBQUNhLFlBQVEsRUFBRVEsU0FEdkI7QUFFRSxhQUFTLEVBQUMsc0JBRlo7QUFFbUMsTUFBRSxFQUFDLGNBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQU8sYUFBUyxFQUFDLDJCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLENBbEJGLEVBd0JFO0FBQVEsYUFBUyxFQUFDLG9HQUFsQjtBQUF1SCxRQUFJLEVBQUMsUUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRixFQTBCRTtBQUFRLGFBQVMsRUFBQyx1RkFBbEI7QUFBMEcsUUFBSSxFQUFDLFFBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBMUJGLENBREYsQ0FERixDQURGLENBREYsQ0FMRixDQURGLENBREYsQ0FGRjtBQW9ERDs7R0FsRnVCYixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy4wMDFkYjlmYWZjODBjOTIyMjJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXG5cblxuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjaGs6IGZhbHNlXG4gIH0pO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgc2V0Q29udGFjdCh7IC4uLmNvbnRhY3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgY29uc3QgQ2hhbmdlY2hrID0gZSA9PiB7XG4gICAgY29udGFjdC5jaGsgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpO1xuXG4gICAgc2V0Q29udGFjdCh7IC4uLmNvbnRhY3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQuY2hlY2tlZCB9KTtcbiAgfVxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpXG5cblxuICB9O1xuXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwbC0wIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtZmxleCBjb2wtbWQtNCBjb2wtbGctOCBiZy1waWNcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbGctNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtay1sb2dpbiBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcm93XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05IGNvbC1sZy04IG14LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJibG9ja3F1b3RlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9sZ19tYWtlLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dEVtYWlsXCIgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsICYgVXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+RW1haWwgJiBVc2VyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImlucHV0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1iLTMgcGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjb250YWN0LmNoa31cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtcIiBvbkNoYW5nZT17Q2hhbmdlY2hrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNoZWNrMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIG1sLTJcIiA+UmVtZW1iZXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbG9naW4gdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBjb2RlcmF0aW5ncy1idXR0b24gbWItMlwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbG9naW4gIGZvbnQtd2VpZ2h0LWJvbGQgYXV0aC1nb29nbGUtYnV0dG9uIG1iLTIgXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXAgIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==