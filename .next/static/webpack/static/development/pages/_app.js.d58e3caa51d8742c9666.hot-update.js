webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/css/style.main.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./assets/css/style.main.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../public/image/books_cactus.jpg */ "./public/image/books_cactus.jpg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\n.bg-pic {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center; }\n\n.mk-login {\n  background-color: #fff;\n  min-height: 100vh;\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n  align-items: center !important;\n  display: flex !important; }\n  .mk-login .mk-login-heading {\n    font-weight: 300;\n    margin-bottom: 1.5rem !important; }\n  .mk-login .form-label-group {\n    position: relative;\n    margin-bottom: 1rem; }\n    .mk-login .form-label-group > input,\n    .mk-login .form-label-group > label {\n      padding: var(--input-padding-y) var(--input-padding-x);\n      height: auto;\n      border-radius: 2rem; }\n    .mk-login .form-label-group > label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 100%;\n      margin-bottom: 0;\n      /* Override default `<label>` margin */\n      line-height: 1.5;\n      color: #495057;\n      cursor: text;\n      /* Match the input under the label */\n      border: 1px solid transparent;\n      border-radius: 0.25rem;\n      transition: all 0.1s ease-in-out; }\n    .mk-login .form-label-group input::-webkit-input-placeholder, .mk-login .form-label-group input:-ms-input-placeholder, .mk-login .form-label-group input::-ms-input-placeholder, .mk-login .form-label-group input::-moz-placeholder, .mk-login .form-label-group input::placeholder {\n      color: transparent; }\n    .mk-login .form-label-group input:not(:placeholder-shown) {\n      padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n      padding-bottom: calc(var(--input-padding-y) / 3); }\n    .mk-login .form-label-group input:not(:placeholder-shown) ~ label {\n      padding-top: calc(var(--input-padding-y) / 3);\n      padding-bottom: calc(var(--input-padding-y) / 3);\n      font-size: 12px;\n      color: #777; }\n  .mk-login .form-btn.auth-google {\n    background-color: #4285f4; }\n\n.btn.coderatings-button {\n  background-color: #d1825f;\n  border: 1px solid #d1825f; }\n  .btn.coderatings-button:hover {\n    background-color: #d1825f; }\n\n.btn.auth-google {\n  background-color: #4285f4; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\nbody {\n  background-color: #E4E4E4; }\n\n.mk-sidebar {\n  position: fixed;\n  top: 52px;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n  .mk-sidebar .mk-sidebar_sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 0.5rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */ }\n    .mk-sidebar .mk-sidebar_sticky .nav-link {\n      cursor: pointer; }\n  .mk-sidebar .mk-sidebar_heading {\n    font-size: 0.75rem;\n    text-transform: uppercase; }\n  .mk-sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n    font-size: 2rem; }\n    .mk-sidebar .nav-link .feather {\n      margin-right: 4px;\n      color: #999; }\n    .mk-sidebar .nav-link.active {\n      color: #007bff; }\n    .mk-sidebar .nav-link:hover .feather,\n    .mk-sidebar .nav-link.active .feather {\n      color: inherit; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .mk-sidebar .mk-sidebar_sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n\n/*\r\n   * Content\r\n\r\n   */\n[role=\"main\"] {\n  padding-top: 48px;\n  /* Space for fixed navbar */ }\n\n/*\r\n   * Navbar\r\n   */\n.navbar-brand {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem; }\n\n.navbar .form-control {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n.mk-control {\n  position: relative;\n  margin-right: 0px; }\n  .mk-control .mk-control_tools {\n    position: fixed;\n    width: 19%;\n    height: 100%;\n    top: 52px;\n    left: 60px;\n    background-color: #f8f9fa;\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n    display: none; }\n    .mk-control .mk-control_tools.active {\n      display: block !important; }\n      .mk-control .mk-control_tools.active + .mk-control_main {\n        width: 75% !important; }\n    .mk-control .mk-control_tools:not(active) + .mk-control_main {\n      width: 93.666667% !important; }\n  .mk-control .mk-control_main {\n    width: 93.666667% !important; }\n\n.mk-list {\n  width: 100%; }\n  .mk-list .mk-list_head {\n    padding-left: 1rem !important; }\n  .mk-list .mk-list_content {\n    padding: 0.25rem !important; }\n    .mk-list .mk-list_content .list-group {\n      margin-top: .4rem; }\n    .mk-list .mk-list_content .list-group-item {\n      background-color: #eceff1;\n      border: 0px solid #eceff1;\n      margin-bottom: .3rem;\n      transition: all 0.5s ease 0s; }\n      .mk-list .mk-list_content .list-group-item:hover {\n        cursor: pointer;\n        background-color: #e3e3e3; }\n\n.mk-justify_between {\n  display: flex !important;\n  justify-content: space-between !important; }\n  .mk-justify_between .mk-items {\n    padding: 0.5rem !important; }\n", "",{"version":3,"sources":["D:/NextJs/make/assets/css/style.main.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,0BAA0B,EAAE;;AAE9B;EACE,yDAA4D;EAC5D,sBAAsB;EACtB,2BAA2B,EAAE;;AAE/B;EACE,sBAAsB;EACtB,iBAAiB;EACjB,4BAA4B;EAC5B,+BAA+B;EAC/B,8BAA8B;EAC9B,wBAAwB,EAAE;EAC1B;IACE,gBAAgB;IAChB,gCAAgC,EAAE;EACpC;IACE,kBAAkB;IAClB,mBAAmB,EAAE;IACrB;;MAEE,sDAAsD;MACtD,YAAY;MACZ,mBAAmB,EAAE;IACvB;MACE,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,cAAc;MACd,WAAW;MACX,gBAAgB;MAChB,sCAAsC;MACtC,gBAAgB;MAChB,cAAc;MACd,YAAY;MACZ,oCAAoC;MACpC,6BAA6B;MAC7B,sBAAsB;MACtB,gCAAgC,EAAE;IACpC;MACE,kBAAkB,EAAE;IACtB;MACE,4EAA4E;MAC5E,gDAAgD,EAAE;IACpD;MACE,6CAA6C;MAC7C,gDAAgD;MAChD,eAAe;MACf,WAAW,EAAE;EACjB;IACE,yBAAyB,EAAE;;AAE/B;EACE,yBAAyB;EACzB,yBAAyB,EAAE;EAC3B;IACE,yBAAyB,EAAE;;AAE/B;EACE,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB,EAAE;;AAEvB;EACE,yBAAyB,EAAE;;AAE7B;EACE,eAAe;EACf,SAAS;EACT,SAAS;EACT,OAAO;EACP,YAAY;EACZ,6CAA6C,EAAE;EAC/C;IACE,kBAAkB;IAClB,MAAM;IACN,0BAA0B;IAC1B,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,6DAA6D,EAAE;IAC/D;MACE,eAAe,EAAE;EACrB;IACE,kBAAkB;IAClB,yBAAyB,EAAE;EAC7B;IACE,gBAAgB;IAChB,WAAW;IACX,eAAe,EAAE;IACjB;MACE,iBAAiB;MACjB,WAAW,EAAE;IACf;MACE,cAAc,EAAE;IAClB;;MAEE,cAAc,EAAE;;AAEtB;EACE;IACE,wBAAwB;IACxB,gBAAgB,EAAE,EAAE;;AAExB;;;IAGI;AACJ;EACE,iBAAiB;EACjB,2BAA2B,EAAE;;AAE/B;;IAEI;AACJ;EACE,oBAAoB;EACpB,uBAAuB;EACvB,eAAe,EAAE;;AAEnB;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,WAAW;EACX,0CAA0C;EAC1C,sCAAsC,EAAE;;AAE1C;EACE,yBAAyB;EACzB,+CAA+C,EAAE;;AAEnD;EACE,kBAAkB;EAClB,iBAAiB,EAAE;EACnB;IACE,eAAe;IACf,UAAU;IACV,YAAY;IACZ,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,gCAAgC;IAChC,+BAA+B;IAC/B,4BAA4B;IAC5B,+BAA+B;IAC/B,aAAa,EAAE;IACf;MACE,yBAAyB,EAAE;MAC3B;QACE,qBAAqB,EAAE;IAC3B;MACE,4BAA4B,EAAE;EAClC;IACE,4BAA4B,EAAE;;AAElC;EACE,WAAW,EAAE;EACb;IACE,6BAA6B,EAAE;EACjC;IACE,2BAA2B,EAAE;IAC7B;MACE,iBAAiB,EAAE;IACrB;MACE,yBAAyB;MACzB,yBAAyB;MACzB,oBAAoB;MACpB,4BAA4B,EAAE;MAC9B;QACE,eAAe;QACf,yBAAyB,EAAE;;AAEnC;EAEE,wBAAwB;EAExB,yCAAyC,EAAE;EAC3C;IACE,0BAA0B,EAAE","file":"style.main.css","sourcesContent":[":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\n.bg-pic {\n  background-image: url(\"../../public/image/books_cactus.jpg\");\n  background-size: cover;\n  background-position: center; }\n\n.mk-login {\n  background-color: #fff;\n  min-height: 100vh;\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n  align-items: center !important;\n  display: flex !important; }\n  .mk-login .mk-login-heading {\n    font-weight: 300;\n    margin-bottom: 1.5rem !important; }\n  .mk-login .form-label-group {\n    position: relative;\n    margin-bottom: 1rem; }\n    .mk-login .form-label-group > input,\n    .mk-login .form-label-group > label {\n      padding: var(--input-padding-y) var(--input-padding-x);\n      height: auto;\n      border-radius: 2rem; }\n    .mk-login .form-label-group > label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 100%;\n      margin-bottom: 0;\n      /* Override default `<label>` margin */\n      line-height: 1.5;\n      color: #495057;\n      cursor: text;\n      /* Match the input under the label */\n      border: 1px solid transparent;\n      border-radius: 0.25rem;\n      transition: all 0.1s ease-in-out; }\n    .mk-login .form-label-group input::-webkit-input-placeholder, .mk-login .form-label-group input:-ms-input-placeholder, .mk-login .form-label-group input::-ms-input-placeholder, .mk-login .form-label-group input::-moz-placeholder, .mk-login .form-label-group input::placeholder {\n      color: transparent; }\n    .mk-login .form-label-group input:not(:placeholder-shown) {\n      padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n      padding-bottom: calc(var(--input-padding-y) / 3); }\n    .mk-login .form-label-group input:not(:placeholder-shown) ~ label {\n      padding-top: calc(var(--input-padding-y) / 3);\n      padding-bottom: calc(var(--input-padding-y) / 3);\n      font-size: 12px;\n      color: #777; }\n  .mk-login .form-btn.auth-google {\n    background-color: #4285f4; }\n\n.btn.coderatings-button {\n  background-color: #d1825f;\n  border: 1px solid #d1825f; }\n  .btn.coderatings-button:hover {\n    background-color: #d1825f; }\n\n.btn.auth-google {\n  background-color: #4285f4; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\nbody {\n  background-color: #E4E4E4; }\n\n.mk-sidebar {\n  position: fixed;\n  top: 52px;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n  .mk-sidebar .mk-sidebar_sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 0.5rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */ }\n    .mk-sidebar .mk-sidebar_sticky .nav-link {\n      cursor: pointer; }\n  .mk-sidebar .mk-sidebar_heading {\n    font-size: 0.75rem;\n    text-transform: uppercase; }\n  .mk-sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n    font-size: 2rem; }\n    .mk-sidebar .nav-link .feather {\n      margin-right: 4px;\n      color: #999; }\n    .mk-sidebar .nav-link.active {\n      color: #007bff; }\n    .mk-sidebar .nav-link:hover .feather,\n    .mk-sidebar .nav-link.active .feather {\n      color: inherit; }\n\n@supports (position: -webkit-sticky) or (position: sticky) {\n  .mk-sidebar .mk-sidebar_sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n\n/*\r\n   * Content\r\n\r\n   */\n[role=\"main\"] {\n  padding-top: 48px;\n  /* Space for fixed navbar */ }\n\n/*\r\n   * Navbar\r\n   */\n.navbar-brand {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem; }\n\n.navbar .form-control {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n.mk-control {\n  position: relative;\n  margin-right: 0px; }\n  .mk-control .mk-control_tools {\n    position: fixed;\n    width: 19%;\n    height: 100%;\n    top: 52px;\n    left: 60px;\n    background-color: #f8f9fa;\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n    display: none; }\n    .mk-control .mk-control_tools.active {\n      display: block !important; }\n      .mk-control .mk-control_tools.active + .mk-control_main {\n        width: 75% !important; }\n    .mk-control .mk-control_tools:not(active) + .mk-control_main {\n      width: 93.666667% !important; }\n  .mk-control .mk-control_main {\n    width: 93.666667% !important; }\n\n.mk-list {\n  width: 100%; }\n  .mk-list .mk-list_head {\n    padding-left: 1rem !important; }\n  .mk-list .mk-list_content {\n    padding: 0.25rem !important; }\n    .mk-list .mk-list_content .list-group {\n      margin-top: .4rem; }\n    .mk-list .mk-list_content .list-group-item {\n      background-color: #eceff1;\n      border: 0px solid #eceff1;\n      margin-bottom: .3rem;\n      transition: all 0.5s ease 0s; }\n      .mk-list .mk-list_content .list-group-item:hover {\n        cursor: pointer;\n        background-color: #e3e3e3; }\n\n.mk-justify_between {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important; }\n  .mk-justify_between .mk-items {\n    padding: 0.5rem !important; }\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGLHNDQUFzQyxtQkFBTyxDQUFDLDhHQUFzRDtBQUNwRyxvQ0FBb0MsbUJBQU8sQ0FBQyw0RUFBcUM7QUFDakY7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsOEJBQThCLCtCQUErQixFQUFFLGFBQWEsc0VBQXNFLDJCQUEyQixnQ0FBZ0MsRUFBRSxlQUFlLDJCQUEyQixzQkFBc0IsaUNBQWlDLG9DQUFvQyxtQ0FBbUMsNkJBQTZCLEVBQUUsaUNBQWlDLHVCQUF1Qix1Q0FBdUMsRUFBRSxpQ0FBaUMseUJBQXlCLDBCQUEwQixFQUFFLHFGQUFxRiwrREFBK0QscUJBQXFCLDRCQUE0QixFQUFFLDJDQUEyQywyQkFBMkIsZUFBZSxnQkFBZ0IsdUJBQXVCLG9CQUFvQix5QkFBeUIsd0VBQXdFLHVCQUF1QixxQkFBcUIsbUZBQW1GLCtCQUErQix5Q0FBeUMsRUFBRSw0UkFBNFIsMkJBQTJCLEVBQUUsaUVBQWlFLHFGQUFxRix5REFBeUQsRUFBRSx5RUFBeUUsc0RBQXNELHlEQUF5RCx3QkFBd0Isb0JBQW9CLEVBQUUscUNBQXFDLGdDQUFnQyxFQUFFLDZCQUE2Qiw4QkFBOEIsOEJBQThCLEVBQUUsbUNBQW1DLGdDQUFnQyxFQUFFLHNCQUFzQiw4QkFBOEIsRUFBRSxnQkFBZ0Isc0JBQXNCLDRCQUE0QiwwQkFBMEIsd0JBQXdCLEVBQUUsVUFBVSw4QkFBOEIsRUFBRSxpQkFBaUIsb0JBQW9CLGNBQWMsY0FBYyxZQUFZLGlCQUFpQixrREFBa0QsRUFBRSxvQ0FBb0MseUJBQXlCLGFBQWEsaUNBQWlDLDBCQUEwQix5QkFBeUIsdUJBQXVCLHNFQUFzRSxnREFBZ0Qsd0JBQXdCLEVBQUUscUNBQXFDLHlCQUF5QixnQ0FBZ0MsRUFBRSwyQkFBMkIsdUJBQXVCLGtC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QUE0QixvQ0FBb0MsRUFBRSwrQkFBK0Isa0NBQWtDLEVBQUUsNkNBQTZDLDBCQUEwQixFQUFFLGtEQUFrRCxrQ0FBa0Msa0NBQWtDLDZCQUE2QixxQ0FBcUMsRUFBRSwwREFBMEQsMEJBQTBCLG9DQUFvQyxFQUFFLHlCQUF5QixvQ0FBb0MsNkJBQTZCLHNDQUFzQyw4Q0FBOEMsRUFBRSxtQ0FBbUMsaUNBQWlDLEVBQUUsS0FBSztBQUM1OVo7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kNThlM2NhYTUxZDg3NDJjOTY2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9wdWJsaWMvaW1hZ2UvYm9va3NfY2FjdHVzLmpwZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07IH1cXG5cXG4uYmctcGljIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLm1rLWxvZ2luIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XFxuICAubWstbG9naW4gLm1rLWxvZ2luLWhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDsgfVxcbiAgLm1rLWxvZ2luIC5mb3JtLWxhYmVsLWdyb3VwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XFxuICAgICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDsgfVxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBjb2xvcjogIzc3NzsgfVxcbiAgLm1rLWxvZ2luIC5mb3JtLWJ0bi5hdXRoLWdvb2dsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7IH1cXG5cXG4uYnRuLmNvZGVyYXRpbmdzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4MjVmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxODI1ZjsgfVxcbiAgLmJ0bi5jb2RlcmF0aW5ncy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4MjVmOyB9XFxuXFxuLmJ0bi5hdXRoLWdvb2dsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0OyB9XFxuXFxuLmJ0bi1sb2dpbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDsgfVxcblxcbi5tay1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5tay1zaWRlYmFyIC5tay1zaWRlYmFyX3N0aWNreSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqLyB9XFxuICAgIC5tay1zaWRlYmFyIC5tay1zaWRlYmFyX3N0aWNreSAubmF2LWxpbmsge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1rLXNpZGViYXIgLm1rLXNpZGViYXJfaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgLm1rLXNpZGViYXIgLm5hdi1saW5rIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgICAubWstc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OyB9XFxuICAgIC5tay1zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMDA3YmZmOyB9XFxuICAgIC5tay1zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcXG4gICAgLm1rLXNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG5cXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xcbiAgLm1rLXNpZGViYXIgLm1rLXNpZGViYXJfc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5OyB9IH1cXG5cXG4vKlxcclxcbiAgICogQ29udGVudFxcclxcblxcclxcbiAgICovXFxuW3JvbGU9XFxcIm1haW5cXFwiXSB7XFxuICBwYWRkaW5nLXRvcDogNDhweDtcXG4gIC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi8gfVxcblxcbi8qXFxyXFxuICAgKiBOYXZiYXJcXHJcXG4gICAqL1xcbi5uYXZiYXItYnJhbmQge1xcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxcblxcbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmZvcm0tY29udHJvbC1kYXJrIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG5cXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XFxuXFxuLm1rLWNvbnRyb2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7IH1cXG4gIC5tay1jb250cm9sIC5tay1jb250cm9sX3Rvb2xzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTklO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogNTJweDtcXG4gICAgbGVmdDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLm1rLWNvbnRyb2wgLm1rLWNvbnRyb2xfdG9vbHMuYWN0aXZlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XFxuICAgICAgLm1rLWNvbnRyb2wgLm1rLWNvbnRyb2xfdG9vbHMuYWN0aXZlICsgLm1rLWNvbnRyb2xfbWFpbiB7XFxuICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7IH1cXG4gICAgLm1rLWNvbnRyb2wgLm1rLWNvbnRyb2xfdG9vbHM6bm90KGFjdGl2ZSkgKyAubWstY29udHJvbF9tYWluIHtcXG4gICAgICB3aWR0aDogOTMuNjY2NjY3JSAhaW1wb3J0YW50OyB9XFxuICAubWstY29udHJvbCAubWstY29udHJvbF9tYWluIHtcXG4gICAgd2lkdGg6IDkzLjY2NjY2NyUgIWltcG9ydGFudDsgfVxcblxcbi5tay1saXN0IHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAubWstbGlzdCAubWstbGlzdF9oZWFkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cXG4gIC5tay1saXN0IC5tay1saXN0X2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cXG4gICAgLm1rLWxpc3QgLm1rLWxpc3RfY29udGVudCAubGlzdC1ncm91cCB7XFxuICAgICAgbWFyZ2luLXRvcDogLjRyZW07IH1cXG4gICAgLm1rLWxpc3QgLm1rLWxpc3RfY29udGVudCAubGlzdC1ncm91cC1pdGVtIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICNlY2VmZjE7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwczsgfVxcbiAgICAgIC5tay1saXN0IC5tay1saXN0X2NvbnRlbnQgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzOyB9XFxuXFxuLm1rLWp1c3RpZnlfYmV0d2VlbiB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxcbiAgLm1rLWp1c3RpZnlfYmV0d2VlbiAubWstaXRlbXMge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6L05leHRKcy9tYWtlL2Fzc2V0cy9jc3Mvc3R5bGUubWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUU7O0FBRTlCO0VBQ0UseURBQTREO0VBQzVELHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBRTs7QUFFL0I7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLHdCQUF3QixFQUFFO0VBQzFCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdDQUFnQyxFQUFFO0VBQ3BDO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFFO0lBQ3JCOztNQUVFLHNEQUFzRDtNQUN0RCxZQUFZO01BQ1osbUJBQW1CLEVBQUU7SUFDdkI7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxjQUFjO01BQ2QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixzQ0FBc0M7TUFDdEMsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxZQUFZO01BQ1osb0NBQW9DO01BQ3BDLDZCQUE2QjtNQUM3QixzQkFBc0I7TUFDdEIsZ0NBQWdDLEVBQUU7SUFDcEM7TUFDRSxrQkFBa0IsRUFBRTtJQUN0QjtNQUNFLDRFQUE0RTtNQUM1RSxnREFBZ0QsRUFBRTtJQUNwRDtNQUNFLDZDQUE2QztNQUM3QyxnREFBZ0Q7TUFDaEQsZUFBZTtNQUNmLFdBQVcsRUFBRTtFQUNqQjtJQUNFLHlCQUF5QixFQUFFOztBQUUvQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBRTtFQUMzQjtJQUNFLHlCQUF5QixFQUFFOztBQUUvQjtFQUNFLHlCQUF5QixFQUFFOztBQUU3QjtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLHlCQUF5QixFQUFFOztBQUU3QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osNkNBQTZDLEVBQUU7RUFDL0M7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2REFBNkQsRUFBRTtJQUMvRDtNQUNFLGVBQWUsRUFBRTtFQUNyQjtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZSxFQUFFO0lBQ2pCO01BQ0UsaUJBQWlCO01BQ2pCLFdBQVcsRUFBRTtJQUNmO01BQ0UsY0FBYyxFQUFFO0lBQ2xCOztNQUVFLGNBQWMsRUFBRTs7QUFFdEI7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBRSxFQUFFOztBQUV4Qjs7O0lBR0k7QUFDSjtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkIsRUFBRTs7QUFFL0I7O0lBRUk7QUFDSjtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFFOztBQUVuQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxzQ0FBc0MsRUFBRTs7QUFFMUM7RUFDRSx5QkFBeUI7RUFDekIsK0NBQStDLEVBQUU7O0FBRW5EO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFFO0VBQ25CO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGFBQWEsRUFBRTtJQUNmO01BQ0UseUJBQXlCLEVBQUU7TUFDM0I7UUFDRSxxQkFBcUIsRUFBRTtJQUMzQjtNQUNFLDRCQUE0QixFQUFFO0VBQ2xDO0lBQ0UsNEJBQTRCLEVBQUU7O0FBRWxDO0VBQ0UsV0FBVyxFQUFFO0VBQ2I7SUFDRSw2QkFBNkIsRUFBRTtFQUNqQztJQUNFLDJCQUEyQixFQUFFO0lBQzdCO01BQ0UsaUJBQWlCLEVBQUU7SUFDckI7TUFDRSx5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRTtNQUM5QjtRQUNFLGVBQWU7UUFDZix5QkFBeUIsRUFBRTs7QUFFbkM7RUFFRSx3QkFBd0I7RUFFeEIseUNBQXlDLEVBQUU7RUFDM0M7SUFDRSwwQkFBMEIsRUFBRVwiLFwiZmlsZVwiOlwic3R5bGUubWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcXG4gIC0taW5wdXQtcGFkZGluZy15OiAwLjc1cmVtOyB9XFxuXFxuLmJnLXBpYyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL3B1YmxpYy9pbWFnZS9ib29rc19jYWN0dXMuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLm1rLWxvZ2luIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XFxuICAubWstbG9naW4gLm1rLWxvZ2luLWhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDsgfVxcbiAgLm1rLWxvZ2luIC5mb3JtLWxhYmVsLWdyb3VwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XFxuICAgICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDsgfVxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAubWstbG9naW4gLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpOyB9XFxuICAgIC5tay1sb2dpbiAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBjb2xvcjogIzc3NzsgfVxcbiAgLm1rLWxvZ2luIC5mb3JtLWJ0bi5hdXRoLWdvb2dsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7IH1cXG5cXG4uYnRuLmNvZGVyYXRpbmdzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4MjVmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxODI1ZjsgfVxcbiAgLmJ0bi5jb2RlcmF0aW5ncy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4MjVmOyB9XFxuXFxuLmJ0bi5hdXRoLWdvb2dsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0OyB9XFxuXFxuLmJ0bi1sb2dpbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDsgfVxcblxcbi5tay1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5tay1zaWRlYmFyIC5tay1zaWRlYmFyX3N0aWNreSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqLyB9XFxuICAgIC5tay1zaWRlYmFyIC5tay1zaWRlYmFyX3N0aWNreSAubmF2LWxpbmsge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1rLXNpZGViYXIgLm1rLXNpZGViYXJfaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgLm1rLXNpZGViYXIgLm5hdi1saW5rIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgICAubWstc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OyB9XFxuICAgIC5tay1zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMDA3YmZmOyB9XFxuICAgIC5tay1zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcXG4gICAgLm1rLXNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG5cXG5Ac3VwcG9ydHMgKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpIHtcXG4gIC5tay1zaWRlYmFyIC5tay1zaWRlYmFyX3N0aWNreSB7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgfSB9XFxuXFxuLypcXHJcXG4gICAqIENvbnRlbnRcXHJcXG5cXHJcXG4gICAqL1xcbltyb2xlPVxcXCJtYWluXFxcIl0ge1xcbiAgcGFkZGluZy10b3A6IDQ4cHg7XFxuICAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovIH1cXG5cXG4vKlxcclxcbiAgICogTmF2YmFyXFxyXFxuICAgKi9cXG4ubmF2YmFyLWJyYW5kIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICBmb250LXNpemU6IDFyZW07IH1cXG5cXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5mb3JtLWNvbnRyb2wtZGFyayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuXFxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxcblxcbi5tay1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogMHB4OyB9XFxuICAubWstY29udHJvbCAubWstY29udHJvbF90b29scyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDE5JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDUycHg7XFxuICAgIGxlZnQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5tay1jb250cm9sIC5tay1jb250cm9sX3Rvb2xzLmFjdGl2ZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxcbiAgICAgIC5tay1jb250cm9sIC5tay1jb250cm9sX3Rvb2xzLmFjdGl2ZSArIC5tay1jb250cm9sX21haW4ge1xcbiAgICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50OyB9XFxuICAgIC5tay1jb250cm9sIC5tay1jb250cm9sX3Rvb2xzOm5vdChhY3RpdmUpICsgLm1rLWNvbnRyb2xfbWFpbiB7XFxuICAgICAgd2lkdGg6IDkzLjY2NjY2NyUgIWltcG9ydGFudDsgfVxcbiAgLm1rLWNvbnRyb2wgLm1rLWNvbnRyb2xfbWFpbiB7XFxuICAgIHdpZHRoOiA5My42NjY2NjclICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWstbGlzdCB7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLm1rLWxpc3QgLm1rLWxpc3RfaGVhZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50OyB9XFxuICAubWstbGlzdCAubWstbGlzdF9jb250ZW50IHtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50OyB9XFxuICAgIC5tay1saXN0IC5tay1saXN0X2NvbnRlbnQgLmxpc3QtZ3JvdXAge1xcbiAgICAgIG1hcmdpbi10b3A6IC40cmVtOyB9XFxuICAgIC5tay1saXN0IC5tay1saXN0X2NvbnRlbnQgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjZWNlZmYxO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC4zcmVtO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7IH1cXG4gICAgICAubWstbGlzdCAubWstbGlzdF9jb250ZW50IC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMzsgfVxcblxcbi5tay1qdXN0aWZ5X2JldHdlZW4ge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XFxuICAubWstanVzdGlmeV9iZXR3ZWVuIC5tay1pdGVtcyB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50OyB9XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==