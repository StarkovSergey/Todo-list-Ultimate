/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./assets/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./assets/fonts/geomanist/geomanist-book.eot":
/*!***************************************************!*\
  !*** ./assets/fonts/geomanist/geomanist-book.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e92de74905d33fc4b742f2670402a566.eot");

/***/ }),

/***/ "./assets/fonts/geomanist/geomanist-book.svg":
/*!***************************************************!*\
  !*** ./assets/fonts/geomanist/geomanist-book.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c852b8deac65b6c3b277ea846925be6.svg");

/***/ }),

/***/ "./assets/fonts/geomanist/geomanist-book.ttf":
/*!***************************************************!*\
  !*** ./assets/fonts/geomanist/geomanist-book.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2cd42352c5643888b440a9e97113bcdb.ttf");

/***/ }),

/***/ "./assets/fonts/geomanist/geomanist-book.woff":
/*!****************************************************!*\
  !*** ./assets/fonts/geomanist/geomanist-book.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "65f152a73fe54f6db9a062721ef03404.woff");

/***/ }),

/***/ "./assets/fonts/geomanist/geomanist-book.woff2":
/*!*****************************************************!*\
  !*** ./assets/fonts/geomanist/geomanist-book.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4743d4c551199fe7b278801cf21e8fd2.woff2");

/***/ }),

/***/ "./assets/img/delete-full.svg":
/*!************************************!*\
  !*** ./assets/img/delete-full.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5fe530a8e4a8d7e13d09aac343749169.svg");

/***/ }),

/***/ "./assets/img/delete.svg":
/*!*******************************!*\
  !*** ./assets/img/delete.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6f96d850c1eaa9f21a4b2e2f13deaa28.svg");

/***/ }),

/***/ "./assets/img/done.svg":
/*!*****************************!*\
  !*** ./assets/img/done.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe0494a928a900ebfa0542e59d00caa0.svg");

/***/ }),

/***/ "./assets/img/ultimate.svg":
/*!*********************************!*\
  !*** ./assets/img/ultimate.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3651f5d6c2aa00bbcd4f6f37e671c465.svg");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/geomanist/geomanist-book.eot */ "./assets/fonts/geomanist/geomanist-book.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/geomanist/geomanist-book.woff2 */ "./assets/fonts/geomanist/geomanist-book.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/geomanist/geomanist-book.woff */ "./assets/fonts/geomanist/geomanist-book.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/geomanist/geomanist-book.ttf */ "./assets/fonts/geomanist/geomanist-book.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/geomanist/geomanist-book.svg */ "./assets/fonts/geomanist/geomanist-book.svg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/ultimate.svg */ "./assets/img/ultimate.svg");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/done.svg */ "./assets/img/done.svg");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/delete.svg */ "./assets/img/delete.svg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/delete-full.svg */ "./assets/img/delete-full.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#geomanist-book" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Geomanist';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'Geomanist';\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.2px;\n  color: #545e6f;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background: #f1f2f5;\n}\n.header {\n  background: #451771;\n  padding: 20px 25px;\n}\n.logo {\n  display: flex;\n  justify-content: center;\n}\n.logo-ultimate {\n  height: 24px;\n  width: 24px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat center center;\n  background-size: contain;\n}\n.logo-name {\n  margin: 0 0 0 14px;\n  line-height: 24px;\n  font-size: 1.2rem;\n  color: #fff;\n}\n.header-logo img {\n  height: 100%;\n}\n#app {\n  padding: 40px 0;\n}\n/* Todo Styling */\n.todos {\n  width: 420px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 3px 0 rgba(84, 94, 111, 0.2);\n}\n.todos-header {\n  position: relative;\n  padding: 24px 24px 0 24px;\n}\n.todos-header div {\n  color: #777d8c;\n  display: flex;\n}\n.todos-header div p {\n  margin: 0;\n}\n.todos-title {\n  margin: 0 0 8px;\n  font-size: 24px;\n  letter-spacing: 0.2px;\n  font-weight: normal;\n}\n.todos-clear {\n  outline: 0;\n  border: 0;\n  font-family: 'Geomanist';\n  font-size: 12px;\n  color: #939aab;\n  padding: 0 5px;\n  border-radius: 3px;\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  margin-left: auto;\n}\n.todos-clear:hover {\n  color: #ff5858;\n}\n.todos-clear:focus {\n  color: #ff5858;\n  border-color: #ff5858;\n}\n.todos-form {\n  padding: 22px 24px 18px;\n}\n.todos-form input {\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #dcdfe4;\n  padding: 12px 14px;\n  outline: 0;\n  font-family: 'Geomanist';\n  font-size: 14px;\n  color: #545e6f;\n}\n.todos-form input::placeholder {\n  color: #777d8c;\n}\n.todos-form input:focus {\n  border-color: #24b373;\n  box-shadow: 0 0 0 3px #cff1e2;\n}\n.todos-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todos-list li {\n  position: relative;\n  line-height: 26px;\n  font-size: 16px;\n  border-top: 1px solid #dcdfe4;\n  padding: 8px 24px;\n  height: 42px;\n  display: flex;\n}\n.todos-list li:first-child {\n  border-top: 1px solid transparent;\n}\n.todos-list li:last-child input[type='text'] {\n  border-radius: 0 0 10px 10px;\n}\n.todos-list li input[type='checkbox'] {\n  -webkit-appearance: none;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #d2d5da;\n  background: #fff;\n  border-radius: 3px;\n  width: 16px;\n  height: 16px;\n  outline: none;\n  position: relative;\n  z-index: 2;\n  top: 3px;\n  order: 1;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.todos-list li input[type='checkbox']:checked {\n  background: #24b373 url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center center;\n  background-size: contain;\n  border-color: #24b373;\n}\n.todos-list li input[type='checkbox']:focus {\n  border-color: #24b373;\n  box-shadow: 0 0 0 3px #cff1e2;\n}\n.todos-list li span {\n  flex-grow: 1;\n  order: 2;\n}\n.todos-list li input[type='text'] {\n  order: 2;\n  width: 100%;\n  padding: 0 0 0 50px;\n  border: none;\n  outline: 0;\n  font-family: 'Geomanist';\n  color: #545e6f;\n  line-height: 26px;\n  font-size: 16px;\n  letter-spacing: 0.2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 42px;\n  border-bottom: 1px solid #d2d5da;\n  box-shadow: inset 0 1px 3px #d2d5da;\n  z-index: 1;\n}\n.todos-list li button {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat center center;\n  background-size: contain;\n  background-clip: padding-box;\n  outline: 0;\n  cursor: pointer;\n  padding: 0;\n  border: 1px solid transparent;\n  margin-left: auto;\n  order: 3;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 2;\n}\n.todos-list li button:hover {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") no-repeat center center;\n  background-size: contain;\n  background-clip: padding-box;\n}\n.todos-list li button:focus {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") no-repeat center center;\n  background-size: contain;\n  background-clip: padding-box;\n}\n.todos-complete span {\n  text-decoration: line-through;\n  color: #939aab;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var app = document.getElementById('app');
app.innerHTML = "\n<div class=\"todos\">\n  <div class=\"todos-header\">\n    <h3 class=\"todos-title\">Todo List</h3>\n    <div>\n      <p>You have <span class=\"todos-count\"></span> items</p>\n      <button class=\"todos-clear\" type=\"button\" style=\"display: none;\">\n        Clear Completed\n      </button>\n    </div>\n  </div>\n\n  <form name=\"todos\" class=\"todos-form\">\n    <input type=\"text\" placeholder=\"What's next?\" name=\"todo\">\n  </form>\n\n  <ul class=\"todos-list\"></ul>\n</div>\n"; // state

var todos = JSON.parse(localStorage.getItem('todos')) || []; // selectors

var root = document.querySelector('.todos');
var list = root.querySelector('.todos-list');
var count = root.querySelector('.todos-count');
var clear = root.querySelector('.todos-clear');
var form = document.forms.todos;
var input = form.elements.todo; // functions

function saveToStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos(todos) {
  var todoString = '';
  todos.forEach(function (todo, index) {
    todoString += "\n      <li data-id=\"".concat(index, "\"").concat(todo.complete ? ' class="todos-complete"' : '', ">\n        <input type=\"checkbox\"").concat(todo.complete ? ' checked' : '', ">\n        <span>").concat(todo.label, "</span>\n        <button type=\"button\"></button>\n      </li>\n    ");
  });
  list.innerHTML = todoString;
  count.innerHTML = todos.filter(function (todo) {
    return !todo.complete;
  }).length;
  clear.style.display = todos.filter(function (todo) {
    return todo.complete;
  }).length ? 'block' : 'none';
}

function addTodo(event) {
  event.preventDefault();
  var label = input.value.trim();
  var complete = false;
  todos = [].concat(_toConsumableArray(todos), [{
    label: label,
    complete: complete
  }]);
  renderTodos(todos);
  saveToStorage(todos);
  input.value = '';
}

function updateTodo(event) {
  var id = parseInt(event.target.parentNode.getAttribute('data-id'), 10);
  var complete = event.target.checked;
  todos = todos.map(function (todo, index) {
    if (index === id) {
      return _objectSpread(_objectSpread({}, todo), {}, {
        complete: complete
      });
    }

    return todo;
  });
  renderTodos(todos);
  saveToStorage(todos);
}

function editTodo(event) {
  if (event.target.nodeName.toLowerCase() !== 'span') {
    return;
  }

  var id = parseInt(event.target.parentNode.getAttribute('data-id'), 10);
  var todoLabel = todos[id].label;
  var input = document.createElement('input');
  input.type = 'text';
  input.value = todoLabel;

  function handleEdit(event) {
    event.stopPropagation();
    var label = this.value;

    if (this.value !== todoLabel) {
      todos = todos.map(function (todo, index) {
        if (index === id) {
          return _objectSpread(_objectSpread({}, todo), {}, {
            label: label
          });
        }

        return todo;
      });
      renderTodos(todos);
      saveToStorage(todos);
    } // clean up -- good practice


    event.target.style.display = '';
    this.removeEventListener('change', handleEdit);
    this.remove();
  }

  event.target.style.display = 'none';
  event.target.parentNode.append(input);
  input.addEventListener('change', handleEdit);
  input.focus();
}

function deleteTodo(event) {
  if (event.target.nodeName.toLowerCase() !== 'button') {
    return;
  }

  var id = parseInt(event.target.parentNode.getAttribute('data-id'), 10);
  var label = event.target.previousElementSibling.innerText;

  if (window.confirm("Delete ".concat(label, "?"))) {
    todos = todos.filter(function (todo, index) {
      return index !== id;
    });
    renderTodos(todos);
    saveToStorage(todos);
  }
}

function clearCompleteTodos() {
  var count = todos.filter(function (todo) {
    return todo.complete;
  }).length;

  if (count === 0) {
    return;
  }

  if (window.confirm("Delete ".concat(count, " todos?"))) {
    todos = todos.filter(function (todo) {
      return !todo.complete;
    });
    renderTodos(todos);
    saveToStorage(todos);
  }
} // init


function init() {
  renderTodos(todos); // Add Todo

  form.addEventListener('submit', addTodo); // Update Todo

  list.addEventListener('change', updateTodo); // Edit Todo

  list.addEventListener('dblclick', editTodo); // Delete Todo

  list.addEventListener('click', deleteTodo); // Complete All Todos

  clear.addEventListener('click', clearCompleteTodos);
}

init();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map