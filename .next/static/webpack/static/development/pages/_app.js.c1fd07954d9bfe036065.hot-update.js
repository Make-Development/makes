webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MKApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_style_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/css/style.main.css */ "./assets/css/style.main.css");
/* harmony import */ var _assets_css_style_main_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_main_css__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "D:\\NextJs\\make\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var MKApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MKApp, _App);

  var _super = _createSuper(MKApp);

  function MKApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MKApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MKApp, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, "We Are Make !"), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      })), __jsx("script", {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.mk-control_tools').each(function (e) {
        $('[data-tools="true"]').attr('data-tools', 'false');
      });
      $('[data-tools="false"]').click(function (e) {
        $('.mk-control_tools').toggleClass('active');
        return false;
        /* console.log($(this));
        
        if ($('.mk-control_tools')){
          $('.mk-control_tools').toggleClass('active')
          return false;
        }else{
          console.log("2222");
        }*/
        // $('.mk-control_tools').toggleClass('active')
        // return false;
      });
      /*  $('[data-tools="true"]').each(function (e) {
            console.log(e)
            $('.mk-control_tools').toggleClass('active')
        });
        .click(function (e) {
            e.preventDefault()
            $('.mk-control_tools').toggleClass('active')
        });
        $('.dataTools').click(function(e){
            e.preventDefault()
            console.log($('.mk-control_tools'));
            $('.mk-control_tools').toggleClass('active')
        })*/
    }
  }]);

  return MKApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNS0FwcCIsImV2ZW50IiwiYWxlcnQiLCJzdGF0ZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIiQiLCJlYWNoIiwiZSIsImF0dHIiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztJQUlxQkEsSzs7Ozs7Ozs7Ozs7OztpQ0FFSkMsSyxFQUFPO0FBQ2hCQyxXQUFLLENBQUMsMkJBQTJCLEtBQUtDLEtBQUwsQ0FBV0MsS0FBdkMsQ0FBTDtBQUNBSCxXQUFLLENBQUNJLGNBQU47QUFDSDs7OzZCQUdRO0FBQUEsd0JBQzRCLEtBQUtDLEtBRGpDO0FBQUEsVUFDR0MsU0FESCxlQUNHQSxTQURIO0FBQUEsVUFDY0MsU0FEZCxlQUNjQSxTQURkO0FBR0wsYUFDSSxtRUFFSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQyx1REFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixFQUtJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLG9GQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEosRUFPSTtBQUFNLFlBQUksRUFBQyxnREFBWDtBQUE0RCxXQUFHLEVBQUMsWUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBKLENBRkosRUFjSSxNQUFDLFNBQUQseUZBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWRKLEVBaUJJO0FBQVEsV0FBRyxFQUFDLGtEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFqQkosRUFrQkk7QUFBUSxXQUFHLEVBQUMsc0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxCSixFQW1CSTtBQUFRLFdBQUcsRUFBQyx3RUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbkJKLENBREo7QUEwQkg7Ozt3Q0FHbUI7QUFDaEJDLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxJQUF2QixDQUE0QixVQUFTQyxDQUFULEVBQVc7QUFDbkNGLFNBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxJQUF6QixDQUE4QixZQUE5QixFQUEyQyxPQUEzQztBQUNILE9BRkQ7QUFJQUgsT0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJJLEtBQTFCLENBQWdDLFVBQVVGLENBQVYsRUFBYTtBQUN6Q0YsU0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJLLFdBQXZCLENBQW1DLFFBQW5DO0FBQ0EsZUFBTyxLQUFQO0FBQ0E7Ozs7Ozs7O0FBUUc7QUFDQTtBQUNOLE9BYkQ7QUFlQTs7Ozs7Ozs7Ozs7OztBQWFIOzs7O0VBekU4QkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzFmZDA3OTU0ZDliZmUwMzYwNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5tYWluLmNzcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LQXBwIGV4dGVuZHMgQXBwIHtcclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+V2UgQXJlIE1ha2UgITwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCIgPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiID48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiID48L3NjcmlwdD5cclxuXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAkKCcubWstY29udHJvbF90b29scycpLmVhY2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvb2xzPVwidHJ1ZVwiXScpLmF0dHIoJ2RhdGEtdG9vbHMnLCdmYWxzZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10b29scz1cImZhbHNlXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLm1rLWNvbnRyb2xfdG9vbHMnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCQodGhpcykpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGlmICgkKCcubWstY29udHJvbF90b29scycpKXtcclxuICAgICAgICAgICAgICAkKCcubWstY29udHJvbF90b29scycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjIyMlwiKTtcclxuICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAvLyAkKCcubWstY29udHJvbF90b29scycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qICAkKCdbZGF0YS10b29scz1cInRydWVcIl0nKS5lYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAkKCcubWstY29udHJvbF90b29scycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAkKCcubWstY29udHJvbF90b29scycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKCcuZGF0YVRvb2xzJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLm1rLWNvbnRyb2xfdG9vbHMnKSk7XHJcbiAgICAgICAgICAgICAgJCgnLm1rLWNvbnRyb2xfdG9vbHMnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgIH0pKi9cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=