//! az-highlight-search-sorter-match version 1.0.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com) (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("az-search-sorter"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "az-search-sorter"], factory);
	else if(typeof exports === 'object')
		exports["azHighlightSearchSorterMatch"] = factory(require("angular"), require("az-search-sorter"));
	else
		root["azHighlightSearchSorterMatch"] = factory(root["angular"], root["azSearchSorter"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _azSearchSorter = __webpack_require__(2);

	var _azSearchSorter2 = _interopRequireDefault(_azSearchSorter);

	var _lodashEscape = __webpack_require__(3);

	var _lodashEscape2 = _interopRequireDefault(_lodashEscape);

	var ngModuleName = 'azHighlightSearchSorterMatch';

	var ngModule = _angular2['default'].module(ngModuleName, ['ngSanitize']);

	exports['default'] = ngModule.filter('highlightSearchSorterMatch', highlightSearchSorterMatchFunction).name;
	// <-- exporting the module name

	function highlightSearchSorterMatchFunction($sce) {
	  var highlightOpen = '<strong>';
	  var highlightClose = '</strong>';

	  return function highlightSearchSorterMatch(input, search) {
	    if (!input || !search) {
	      return input;
	    }
	    var cleanInput = (0, _lodashEscape2['default'])(input);
	    var lowerCleanInput = cleanInput.toLowerCase();
	    search = search.toLowerCase();
	    if (contains(lowerCleanInput, search)) {
	      cleanInput = cleanInput.replace(new RegExp('(' + search + ')', 'ig'), highlightOpen + '$1' + highlightClose);
	    } else {
	      cleanInput = highlightIndexes(cleanInput, search);
	    }
	    return $sce.trustAsHtml(cleanInput);
	  };

	  function highlightIndexes(cleanInput, search) {
	    var lowerCleanInput = cleanInput.toLowerCase();
	    var indexes = _azSearchSorter2['default'].getAcronymIndexes(lowerCleanInput, search);
	    if (isEmptyArray(indexes)) {
	      indexes = _azSearchSorter2['default'].getMatchingStringIndexes(lowerCleanInput, search);
	    }
	    if (!isEmptyArray(indexes)) {
	      (function () {
	        var highlightedInput = '';
	        var currentIndex = 0;
	        indexes.forEach(function (anIndex) {
	          var needsOpen = !contains(indexes, anIndex - 1);
	          var needsClose = !contains(indexes, anIndex + 1);
	          var open = needsOpen ? highlightOpen : '';
	          var close = needsClose ? highlightClose : '';
	          highlightedInput += [cleanInput.substr(currentIndex, anIndex - currentIndex), open, cleanInput.substr(anIndex, 1), close].join('');
	          currentIndex = anIndex + 1;
	        });
	        cleanInput = highlightedInput + cleanInput.substr(currentIndex);
	      })();
	    }
	    return cleanInput;
	  }
	}
	highlightSearchSorterMatchFunction.$inject = ["$sce"];

	// UTILS
	function contains(container, item) {
	  return container.indexOf(item) !== -1;
	}

	function isEmptyArray(thing) {
	  return !thing || !thing.length;
	}
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseToString = __webpack_require__(4);

	/** Used to match HTML entities and HTML characters. */
	var reUnescapedHtml = /[&<>"'`]/g,
	    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	/** Used to map characters to HTML entities. */
	var htmlEscapes = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '`': '&#96;'
	};

	/**
	 * Used by `_.escape` to convert characters to HTML entities.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	function escapeHtmlChar(chr) {
	  return htmlEscapes[chr];
	}

	/**
	 * Converts the characters "&", "<", ">", '"', "'", and '`', in `string` to
	 * their corresponding HTML entities.
	 *
	 * **Note:** No other characters are escaped. To escape additional characters
	 * use a third-party library like [_he_](https://mths.be/he).
	 *
	 * Though the ">" character is escaped for symmetry, characters like
	 * ">" and "/" don't require escaping in HTML and have no special meaning
	 * unless they're part of a tag or unquoted attribute value.
	 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	 * (under "semi-related fun fact") for more details.
	 *
	 * Backticks are escaped because in Internet Explorer < 9, they can break out
	 * of attribute values or HTML comments. See [#102](https://html5sec.org/#102),
	 * [#108](https://html5sec.org/#108), and [#133](https://html5sec.org/#133) of
	 * the [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
	 *
	 * When working with HTML you should always quote attribute values to reduce
	 * XSS vectors. See [Ryan Grove's article](http://wonko.com/post/html-escaping)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escape('fred, barney, & pebbles');
	 * // => 'fred, barney, &amp; pebbles'
	 */
	function escape(string) {
	  // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	  string = baseToString(string);
	  return (string && reHasUnescapedHtml.test(string))
	    ? string.replace(reUnescapedHtml, escapeHtmlChar)
	    : string;
	}

	module.exports = escape;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ }
/******/ ])
});
;