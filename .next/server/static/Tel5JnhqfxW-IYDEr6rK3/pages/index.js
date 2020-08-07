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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+84V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const main = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("main", {
    role: "main",
    className: " col-md-9 ml-md-auto col-lg-11 mk-control_main mr-3"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (main);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Indexs; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/layouts/navbar/top/Nav_top.js

var __jsx = external_react_default.a.createElement;

const Nav_top = props => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("nav", {
    className: "navbar navbar-light bg-light fixed-top  flex-md-nowrap pl-4 pr-3 py-0 shadow-sm"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#"
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  }), __jsx("span", {
    className: "sr-only"
  }, "(current)")), __jsx("nav", {
    className: "my-2 my-md-0 mr-md-3"
  }, props.children)));
};

/* harmony default export */ var top_Nav_top = (Nav_top);
// CONCATENATED MODULE: ./src/components/layouts/navbar/lefts/Ui_nav.js

var Ui_nav_jsx = external_react_default.a.createElement;

const Ui_nav = props => {
  return Ui_nav_jsx(external_react_default.a.Fragment, null, Ui_nav_jsx("nav", {
    className: " d-none d-md-block bg-light mk-sidebar"
  }, Ui_nav_jsx("div", {
    className: "mk-sidebar_sticky"
  }, Ui_nav_jsx("ul", {
    className: "nav flex-column"
  }, props.children))));
};

/* harmony default export */ var lefts_Ui_nav = (Ui_nav);
// CONCATENATED MODULE: ./src/components/layouts/navbar/lefts/Li_items.js

var Li_items_jsx = external_react_default.a.createElement;

const Li_items = props => {
  return Li_items_jsx(external_react_default.a.Fragment, null, Li_items_jsx("li", {
    className: "nav-item"
  }, props.children));
};

/* harmony default export */ var lefts_Li_items = (Li_items);
// CONCATENATED MODULE: ./src/components/layouts/navbar/NavMain.js

var NavMain_jsx = external_react_default.a.createElement;




const NavMain = props => {
  return NavMain_jsx(external_react_default.a.Fragment, null, NavMain_jsx(top_Nav_top, null, NavMain_jsx("a", {
    className: "px-3 py-2 text-dark",
    href: "#"
  }, NavMain_jsx("svg", {
    viewBox: "0 0 28 28",
    className: "a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry",
    height: 20,
    width: 20
  }, NavMain_jsx("path", {
    d: "M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
  }))), NavMain_jsx("a", {
    className: "px-3 py-2 text-dark",
    href: "#"
  }, NavMain_jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-three-dots-vertical",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, NavMain_jsx("path", {
    fillRule: "evenodd",
    d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  })))), NavMain_jsx(lefts_Ui_nav, null, NavMain_jsx(lefts_Li_items, null, NavMain_jsx("a", {
    className: "nav-link",
    href: "/"
  }, NavMain_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-layers"
  }, NavMain_jsx("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), NavMain_jsx("polyline", {
    points: "2 17 12 22 22 17"
  }), NavMain_jsx("polyline", {
    points: "2 12 12 17 22 12"
  })))), NavMain_jsx(lefts_Li_items, null, NavMain_jsx("a", {
    className: "nav-link ",
    href: "/setting"
  }, NavMain_jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 16 16",
    className: "feather feather-layers",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, NavMain_jsx("path", {
    fillRule: "evenodd",
    d: "M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"
  }))))));
};

/* harmony default export */ var navbar_NavMain = (NavMain);
// EXTERNAL MODULE: ./src/components/layouts/content/main.js
var main = __webpack_require__("+84V");

// CONCATENATED MODULE: ./src/pages/index.js
var pages_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Indexs(props) {
  const {
    0: contact,
    1: setContact
  } = Object(external_react_["useState"])({
    name: ''
  });

  const handleChange = e => {
    setContact(_objectSpread(_objectSpread({}, contact), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(contact);
  };

  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(navbar_NavMain, null), pages_jsx(main["a" /* default */], null, pages_jsx("div", {
    className: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  }, pages_jsx("h1", {
    className: "h2"
  }, "Dashboard"), pages_jsx("div", {
    className: "btn-toolbar mb-2 mb-md-0"
  }, pages_jsx("form", {
    onSubmit: handleSubmit
  }, pages_jsx("div", {
    className: "input-group mb-2 mr-sm-2"
  }, pages_jsx("input", {
    className: "form-control form-control-sm",
    type: "text",
    placeholder: "Name",
    name: "name",
    onChange: handleChange,
    required: true
  }), pages_jsx("div", {
    className: "input-group-prepend"
  }, pages_jsx("input", {
    type: "submit",
    value: "Submit",
    className: "btn btn-sm btn-outline-secondary "
  })))))), pages_jsx("div", {
    className: "row"
  }, props.data.map(({
    show
  }) => pages_jsx("div", {
    className: "col-3"
  }, pages_jsx("div", {
    className: "card mb-3",
    style: {
      maxWidth: 540
    }
  }, pages_jsx("div", {
    className: "row no-gutters"
  }, pages_jsx("div", {
    className: "col-md-4 p-0"
  }, pages_jsx("img", {
    src: show.image.medium,
    className: "card-img-top",
    alt: "..."
  })), pages_jsx("div", {
    className: "col-md-8"
  }, pages_jsx("div", {
    className: "card-body"
  }, pages_jsx("h6", {
    className: "card-title"
  }, show._id, " ", show.name), pages_jsx("p", {
    className: "card-text"
  }, "This is a wider card"), pages_jsx("p", {
    className: "card-text"
  }, pages_jsx("small", {
    className: "text-muted"
  }, "Last updated 3 mins ago")))))))))));
}
async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });