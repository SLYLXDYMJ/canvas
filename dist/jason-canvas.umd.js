(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jason-canvas"] = factory();
	else
		root["jason-canvas"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c1c0":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "f1de":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var h="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,y="undefined"==typeof window?{document:h,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(t){for(var e=0;e<t.length;e+=1)this[e]=t[e];return this.length=t.length,this};function p(t,e){var n=[],i=0;if(t&&!e&&t instanceof l)return t;if(t)if("string"==typeof t){var r,o,s=t.trim();if(0<=s.indexOf("<")&&0<=s.indexOf(">")){var a="div";for(0===s.indexOf("<li")&&(a="ul"),0===s.indexOf("<tr")&&(a="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(a="tr"),0===s.indexOf("<tbody")&&(a="table"),0===s.indexOf("<option")&&(a="select"),(o=h.createElement(a)).innerHTML=s,i=0;i<o.childNodes.length;i+=1)n.push(o.childNodes[i])}else for(r=e||"#"!==t[0]||t.match(/[ .<>:~]/)?(e||h).querySelectorAll(t.trim()):[h.getElementById(t.trim().split("#")[1])],i=0;i<r.length;i+=1)r[i]&&n.push(r[i])}else if(t.nodeType||t===y||t===h)n.push(t);else if(0<t.length&&t[0].nodeType)for(i=0;i<t.length;i+=1)n.push(t[i]);return new l(n)}function o(t){for(var e=[],n=0;n<t.length;n+=1)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function b(t){return y.requestAnimationFrame?y.requestAnimationFrame(t):y.webkitRequestAnimationFrame?y.webkitRequestAnimationFrame(t):y.setTimeout(t,1e3/60)}p.fn=l.prototype,p.Class=l,p.Dom7=l;var t=Object.freeze({addClass:function(t){if(void 0===t)return this;for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(e[n]);return this},removeClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(e[n]);return this},hasClass:function(t){return!!this[0]&&this[0].classList.contains(t)},toggleClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(e[n]);return this},attr:function(t,e){var n=arguments;if(1===arguments.length&&"string"==typeof t)return this[0]?this[0].getAttribute(t):void 0;for(var i=0;i<this.length;i+=1)if(2===n.length)this[i].setAttribute(t,e);else for(var r in t)this[i][r]=t[r],this[i].setAttribute(r,t[r]);return this},removeAttr:function(t){for(var e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this},prop:function(t,e){var n=arguments;if(1!==arguments.length||"string"!=typeof t){for(var i=0;i<this.length;i+=1)if(2===n.length)this[i][t]=e;else for(var r in t)this[i][r]=t[r];return this}if(this[0])return this[0][t]},data:function(t,e){var n;if(void 0!==e){for(var i=0;i<this.length;i+=1)(n=this[i]).dom7ElementDataStorage||(n.dom7ElementDataStorage={}),n.dom7ElementDataStorage[t]=e;return this}if(n=this[0]){if(n.dom7ElementDataStorage&&t in n.dom7ElementDataStorage)return n.dom7ElementDataStorage[t];var r=n.getAttribute("data-"+t);return r||void 0}},removeData:function(t){for(var e=0;e<this.length;e+=1){var n=this[e];n.dom7ElementDataStorage&&n.dom7ElementDataStorage[t]&&(n.dom7ElementDataStorage[t]=null,delete n.dom7ElementDataStorage[t])}},dataset:function(){var t=this[0];if(t){var e,n={};if(t.dataset)for(var i in t.dataset)n[i]=t.dataset[i];else for(var r=0;r<t.attributes.length;r+=1){var o=t.attributes[r];0<=o.name.indexOf("data-")&&(n[(e=o.name.split("data-")[1],e.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}))]=o.value)}for(var s in n)"false"===n[s]?n[s]=!1:"true"===n[s]?n[s]=!0:parseFloat(n[s])===1*n[s]&&(n[s]*=1);return n}},val:function(t){var e=this;if(void 0!==t){for(var n=0;n<e.length;n+=1){var i=e[n];if(Array.isArray(t)&&i.multiple&&"select"===i.nodeName.toLowerCase())for(var r=0;r<i.options.length;r+=1)i.options[r].selected=0<=t.indexOf(i.options[r].value);else i.value=t}return e}if(e[0]){if(e[0].multiple&&"select"===e[0].nodeName.toLowerCase()){for(var o=[],s=0;s<e[0].selectedOptions.length;s+=1)o.push(e[0].selectedOptions[s].value);return o}return e[0].value}},transform:function(t){for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransform=t,n.transform=t}return this},transition:function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransitionDuration=t,n.transitionDuration=t}return this},on:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],o=e[1],s=e[2],r=e[3];function a(t){var e=t.target;if(e){var n=t.target.dom7EventData||[];if(n.indexOf(t)<0&&n.unshift(t),p(e).is(o))s.apply(e,n);else for(var i=p(e).parents(),r=0;r<i.length;r+=1)p(i[r]).is(o)&&s.apply(i[r],n)}}function l(t){var e=t&&t.target&&t.target.dom7EventData||[];e.indexOf(t)<0&&e.unshift(t),s.apply(this,e)}"function"==typeof e[1]&&(i=(t=e)[0],s=t[1],r=t[2],o=void 0),r||(r=!1);for(var h,u=i.split(" "),f=0;f<this.length;f+=1){var c=this[f];if(o)for(h=0;h<u.length;h+=1){var d=u[h];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[d]||(c.dom7LiveListeners[d]=[]),c.dom7LiveListeners[d].push({listener:s,proxyListener:a}),c.addEventListener(d,a,r)}else for(h=0;h<u.length;h+=1){var v=u[h];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[v]||(c.dom7Listeners[v]=[]),c.dom7Listeners[v].push({listener:s,proxyListener:l}),c.addEventListener(v,l,r)}}return this},off:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];"function"==typeof e[1]&&(i=(t=e)[0],o=t[1],s=t[2],r=void 0),s||(s=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var h=a[l],u=0;u<this.length;u+=1){var f=this[u],c=void 0;if(!r&&f.dom7Listeners?c=f.dom7Listeners[h]:r&&f.dom7LiveListeners&&(c=f.dom7LiveListeners[h]),c&&c.length)for(var d=c.length-1;0<=d;d-=1){var v=c[d];o&&v.listener===o?(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1)):o&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===o?(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1)):o||(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1))}}return this},once:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this,r=e[0],o=e[1],s=e[2],a=e[3];function l(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];s.apply(this,t),i.off(r,o,l,a),l.dom7proxy&&delete l.dom7proxy}return"function"==typeof e[1]&&(r=(t=e)[0],s=t[1],a=t[2],o=void 0),l.dom7proxy=s,i.on(r,o,l,a)},trigger:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var n=t[0].split(" "),i=t[1],r=0;r<n.length;r+=1)for(var o=n[r],s=0;s<this.length;s+=1){var a=this[s],l=void 0;try{l=new y.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0})}catch(t){(l=h.createEvent("Event")).initEvent(o,!0,!0),l.detail=i}a.dom7EventData=t.filter(function(t,e){return 0<e}),a.dispatchEvent(l),a.dom7EventData=[],delete a.dom7EventData}return this},transitionEnd:function(e){var n,i=["webkitTransitionEnd","transitionend"],r=this;function o(t){if(t.target===this)for(e.call(this,t),n=0;n<i.length;n+=1)r.off(i[n],o)}if(e)for(n=0;n<i.length;n+=1)r.on(i[n],o);return this},animationEnd:function(e){var n,i=["webkitAnimationEnd","animationend"],r=this;function o(t){if(t.target===this)for(e.call(this,t),n=0;n<i.length;n+=1)r.off(i[n],o)}if(e)for(n=0;n<i.length;n+=1)r.on(i[n],o);return this},width:function(){return this[0]===y?y.innerWidth:0<this.length?parseFloat(this.css("width")):null},outerWidth:function(t){if(0<this.length){if(t){var e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},height:function(){return this[0]===y?y.innerHeight:0<this.length?parseFloat(this.css("height")):null},outerHeight:function(t){if(0<this.length){if(t){var e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var t=this[0],e=t.getBoundingClientRect(),n=h.body,i=t.clientTop||n.clientTop||0,r=t.clientLeft||n.clientLeft||0,o=t===y?y.scrollY:t.scrollTop,s=t===y?y.scrollX:t.scrollLeft;return{top:e.top+o-i,left:e.left+s-r}}return null},hide:function(){for(var t=0;t<this.length;t+=1)this[t].style.display="none";return this},show:function(){for(var t=0;t<this.length;t+=1){var e=this[t];"none"===e.style.display&&(e.style.display=""),"none"===y.getComputedStyle(e,null).getPropertyValue("display")&&(e.style.display="block")}return this},styles:function(){return this[0]?y.getComputedStyle(this[0],null):{}},css:function(t,e){var n;if(1===arguments.length){if("string"!=typeof t){for(n=0;n<this.length;n+=1)for(var i in t)this[n].style[i]=t[i];return this}if(this[0])return y.getComputedStyle(this[0],null).getPropertyValue(t)}if(2!==arguments.length||"string"!=typeof t)return this;for(n=0;n<this.length;n+=1)this[n].style[t]=e;return this},toArray:function(){for(var t=[],e=0;e<this.length;e+=1)t.push(this[e]);return t},each:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],e,this[e]))return this;return this},forEach:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],this[e],e))return this;return this},filter:function(t){for(var e=[],n=0;n<this.length;n+=1)t.call(this[n],n,this[n])&&e.push(this[n]);return new l(e)},map:function(t){for(var e=[],n=0;n<this.length;n+=1)e.push(t.call(this[n],n,this[n]));return new l(e)},html:function(t){if(void 0===t)return this[0]?this[0].innerHTML:void 0;for(var e=0;e<this.length;e+=1)this[e].innerHTML=t;return this},text:function(t){if(void 0===t)return this[0]?this[0].textContent.trim():null;for(var e=0;e<this.length;e+=1)this[e].textContent=t;return this},is:function(t){var e,n,i=this[0];if(!i||void 0===t)return!1;if("string"==typeof t){if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(e=p(t),n=0;n<e.length;n+=1)if(e[n]===i)return!0;return!1}if(t===h)return i===h;if(t===y)return i===y;if(t.nodeType||t instanceof l){for(e=t.nodeType?[t]:t,n=0;n<e.length;n+=1)if(e[n]===i)return!0;return!1}return!1},indexOf:function(t){for(var e=0;e<this.length;e+=1)if(this[e]===t)return e;return-1},index:function(){var t,e=this[0];if(e){for(t=0;null!==(e=e.previousSibling);)1===e.nodeType&&(t+=1);return t}},eq:function(t){if(void 0===t)return this;var e,n=this.length;return new l(n-1<t?[]:t<0?(e=n+t)<0?[]:[this[e]]:[this[t]])},append:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];for(var i=0;i<e.length;i+=1){t=e[i];for(var r=0;r<this.length;r+=1)if("string"==typeof t){var o=h.createElement("div");for(o.innerHTML=t;o.firstChild;)this[r].appendChild(o.firstChild)}else if(t instanceof l)for(var s=0;s<t.length;s+=1)this[r].appendChild(t[s]);else this[r].appendChild(t)}return this},appendTo:function(t){return p(t).append(this),this},prepend:function(t){var e,n;for(e=0;e<this.length;e+=1)if("string"==typeof t){var i=h.createElement("div");for(i.innerHTML=t,n=i.childNodes.length-1;0<=n;n-=1)this[e].insertBefore(i.childNodes[n],this[e].childNodes[0])}else if(t instanceof l)for(n=0;n<t.length;n+=1)this[e].insertBefore(t[n],this[e].childNodes[0]);else this[e].insertBefore(t,this[e].childNodes[0]);return this},prependTo:function(t){return p(t).prepend(this),this},insertBefore:function(t){for(var e=p(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0]);else if(1<e.length)for(var i=0;i<e.length;i+=1)e[i].parentNode.insertBefore(this[n].cloneNode(!0),e[i])},insertAfter:function(t){for(var e=p(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0].nextSibling);else if(1<e.length)for(var i=0;i<e.length;i+=1)e[i].parentNode.insertBefore(this[n].cloneNode(!0),e[i].nextSibling)},next:function(t){return 0<this.length?t?this[0].nextElementSibling&&p(this[0].nextElementSibling).is(t)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(t){var e=[],n=this[0];if(!n)return new l([]);for(;n.nextElementSibling;){var i=n.nextElementSibling;t?p(i).is(t)&&e.push(i):e.push(i),n=i}return new l(e)},prev:function(t){if(0<this.length){var e=this[0];return t?e.previousElementSibling&&p(e.previousElementSibling).is(t)?new l([e.previousElementSibling]):new l([]):e.previousElementSibling?new l([e.previousElementSibling]):new l([])}return new l([])},prevAll:function(t){var e=[],n=this[0];if(!n)return new l([]);for(;n.previousElementSibling;){var i=n.previousElementSibling;t?p(i).is(t)&&e.push(i):e.push(i),n=i}return new l(e)},siblings:function(t){return this.nextAll(t).add(this.prevAll(t))},parent:function(t){for(var e=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(t?p(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return p(o(e))},parents:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].parentNode;i;)t?p(i).is(t)&&e.push(i):e.push(i),i=i.parentNode;return p(o(e))},closest:function(t){var e=this;return void 0===t?new l([]):(e.is(t)||(e=e.parents(t).eq(0)),e)},find:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].querySelectorAll(t),r=0;r<i.length;r+=1)e.push(i[r]);return new l(e)},children:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].childNodes,r=0;r<i.length;r+=1)t?1===i[r].nodeType&&p(i[r]).is(t)&&e.push(i[r]):1===i[r].nodeType&&e.push(i[r]);return new l(o(e))},remove:function(){for(var t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this},detach:function(){return this.remove()},add:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n,i;for(n=0;n<t.length;n+=1){var r=p(t[n]);for(i=0;i<r.length;i+=1)this[this.length]=r[i],this.length+=1}return this},empty:function(){for(var t=0;t<this.length;t+=1){var e=this[t];if(1===e.nodeType){for(var n=0;n<e.childNodes.length;n+=1)e.childNodes[n].parentNode&&e.childNodes[n].parentNode.removeChild(e.childNodes[n]);e.textContent=""}}return this}});var e=Object.freeze({scrollTo:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],p=e[2],g=e[3],m=e[4];return 4===e.length&&"function"==typeof g&&(m=g,i=(t=e)[0],r=t[1],p=t[2],m=t[3],g=t[4]),void 0===g&&(g="swing"),this.each(function(){var o,s,t,e,a,l,h,u,f=this,c=0<r||0===r,d=0<i||0===i;if(void 0===g&&(g="swing"),c&&(o=f.scrollTop,p||(f.scrollTop=r)),d&&(s=f.scrollLeft,p||(f.scrollLeft=i)),p){c&&(t=f.scrollHeight-f.offsetHeight,a=Math.max(Math.min(r,t),0)),d&&(e=f.scrollWidth-f.offsetWidth,l=Math.max(Math.min(i,e),0));var v=null;c&&a===o&&(c=!1),d&&l===s&&(d=!1),b(function t(e){void 0===e&&(e=(new Date).getTime()),null===v&&(v=e);var n,i=Math.max(Math.min((e-v)/p,1),0),r="linear"===g?i:.5-Math.cos(i*Math.PI)/2;c&&(h=o+r*(a-o)),d&&(u=s+r*(l-s)),c&&o<a&&a<=h&&(f.scrollTop=a,n=!0),c&&a<o&&h<=a&&(f.scrollTop=a,n=!0),d&&s<l&&l<=u&&(f.scrollLeft=l,n=!0),d&&l<s&&u<=l&&(f.scrollLeft=l,n=!0),n?m&&m():(c&&(f.scrollTop=h),d&&(f.scrollLeft=u),b(t))})}})},scrollTop:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?0<this.length?this[0].scrollTop:null:this.scrollTo(void 0,i,r,o,s)},scrollLeft:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?0<this.length?this[0].scrollLeft:null:this.scrollTo(i,void 0,r,o,s)}});var n=Object.freeze({animate:function(t,e){var n,i=this,m={props:Object.assign({},t),params:Object.assign({duration:300,easing:"swing"},e),elements:i,animating:!1,que:[],easingProgress:function(t,e){return"swing"===t?.5-Math.cos(e*Math.PI)/2:"function"==typeof t?t(e):e},stop:function(){var t;m.frameId&&(t=m.frameId,y.cancelAnimationFrame?y.cancelAnimationFrame(t):y.webkitCancelAnimationFrame?y.webkitCancelAnimationFrame(t):y.clearTimeout(t)),m.animating=!1,m.elements.each(function(t,e){delete e.dom7AnimateInstance}),m.que=[]},done:function(t){if(m.animating=!1,m.elements.each(function(t,e){delete e.dom7AnimateInstance}),t&&t(i),0<m.que.length){var e=m.que.shift();m.animate(e[0],e[1])}},animate:function(h,u){if(m.animating)return m.que.push([h,u]),m;var f=[];m.elements.each(function(e,n){var i,r,o,s,a;n.dom7AnimateInstance||(m.elements[e].dom7AnimateInstance=m),f[e]={container:n},Object.keys(h).forEach(function(t){i=y.getComputedStyle(n,null).getPropertyValue(t).replace(",","."),r=parseFloat(i),o=i.replace(r,""),s=parseFloat(h[t]),a=h[t]+o,f[e][t]={initialFullValue:i,initialValue:r,unit:o,finalValue:s,finalFullValue:a,currentValue:r}})});var c,d,v=null,p=0,g=0,e=!1;return m.animating=!0,m.frameId=b(function t(){var a,l;c=(new Date).getTime(),e||(e=!0,u.begin&&u.begin(i)),null===v&&(v=c),u.progress&&u.progress(i,Math.max(Math.min((c-v)/u.duration,1),0),v+u.duration-c<0?0:v+u.duration-c,v),f.forEach(function(t){var s=t;d||s.done||Object.keys(h).forEach(function(t){if(!d&&!s.done){a=Math.max(Math.min((c-v)/u.duration,1),0),l=m.easingProgress(u.easing,a);var e=s[t],n=e.initialValue,i=e.finalValue,r=e.unit;s[t].currentValue=n+l*(i-n);var o=s[t].currentValue;(n<i&&i<=o||i<n&&o<=i)&&(s.container.style[t]=i+r,(g+=1)===Object.keys(h).length&&(s.done=!0,p+=1),p===f.length&&(d=!0)),d?m.done(u.complete):s.container.style[t]=o+r}})}),d||(m.frameId=b(t))}),m}};if(0===m.elements.length)return i;for(var r=0;r<m.elements.length;r+=1)m.elements[r].dom7AnimateInstance?n=m.elements[r].dom7AnimateInstance:m.elements[r].dom7AnimateInstance=m;return n||(n=m),"stop"===t?n.stop():n.animate(m.props,m.params),i},stop:function(){for(var t=0;t<this.length;t+=1)this[t].dom7AnimateInstance&&this[t].dom7AnimateInstance.stop()}}),s="resize scroll".split(" ");function i(t){for(var e,n=[],i=arguments.length-1;0<i--;)n[i]=arguments[i+1];if(void 0!==n[0])return(e=this).on.apply(e,[t].concat(n));for(var r=0;r<this.length;r+=1)s.indexOf(t)<0&&(t in this[r]?this[r][t]():p(this[r]).trigger(t));return this}return[t,e,n,Object.freeze({click:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["click"].concat(t))},blur:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["blur"].concat(t))},focus:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focus"].concat(t))},focusin:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focusin"].concat(t))},focusout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focusout"].concat(t))},keyup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keyup"].concat(t))},keydown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keydown"].concat(t))},keypress:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keypress"].concat(t))},submit:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["submit"].concat(t))},change:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["change"].concat(t))},mousedown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mousedown"].concat(t))},mousemove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mousemove"].concat(t))},mouseup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseup"].concat(t))},mouseenter:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseenter"].concat(t))},mouseleave:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseleave"].concat(t))},mouseout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseout"].concat(t))},mouseover:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseover"].concat(t))},touchstart:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchstart"].concat(t))},touchend:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchend"].concat(t))},touchmove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchmove"].concat(t))},resize:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["resize"].concat(t))},scroll:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["scroll"].concat(t))}})].forEach(function(e){Object.keys(e).forEach(function(t){p.fn[t]=e[t]})}),p});
//# sourceMappingURL=dom7.min.js.map


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./node_modules/dom7/dist/dom7.min.js
var dom7_min = __webpack_require__("f1de");
var dom7_min_default = /*#__PURE__*/__webpack_require__.n(dom7_min);

// EXTERNAL MODULE: ./node_modules/merge/merge.js
var merge = __webpack_require__("c1c0");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// CONCATENATED MODULE: ./src/cross-line/index.js



var DEFAULT_OPTIONS = {
  // canvas 元素
  canvasEl: '',
  // canvas 背景颜色
  bgColor: '#000',
  // 圆颜色
  circleColor: '#fff',
  // 线颜色
  lineColor: '#fff',
  // 圆透明度
  circleOpacity: 1.0,
  // 线透明度
  lineOpacity: 0.5,
  // 生成的线的数量
  lineNum: 15
};
/* harmony default export */ var cross_line = (function (options) {
  var opts = merge_default()(true, {}, DEFAULT_OPTIONS, options);
  var $canvas = dom7_min_default()(opts.canvasEl);
  var canvas = $canvas[0];
  var ctx = canvas.getContext('2d');
  var cw = canvas.width = parseFloat($canvas.css('width'));
  var cx = cw / 2;
  var ch = canvas.height = parseFloat($canvas.css('height'));
  var cy = ch / 2; // 给 canvas 设置背景色

  $canvas.css('backgroundColor', opts.bgColor);
  ctx.fillStyle = '#000';
  var linesNum = opts.lineNum;
  var linesRy = [];
  var requestId = null;

  function Line(flag) {
    this.flag = flag;
    this.a = {};
    this.b = {};

    if (flag === 'v') {
      this.a.y = 0;
      this.b.y = ch;
      this.a.x = randomIntFromInterval(0, ch);
      this.b.x = randomIntFromInterval(0, ch);
    } else if (flag === 'h') {
      this.a.x = 0;
      this.b.x = cw;
      this.a.y = randomIntFromInterval(0, cw);
      this.b.y = randomIntFromInterval(0, cw);
    }

    this.va = randomIntFromInterval(25, 100) / 100;
    this.vb = randomIntFromInterval(25, 100) / 100;

    this.draw = function () {
      ctx.globalAlpha = opts.lineOpacity;
      ctx.strokeStyle = opts.lineColor;
      ctx.beginPath();
      ctx.moveTo(this.a.x, this.a.y);
      ctx.lineTo(this.b.x, this.b.y);
      ctx.stroke();
    };

    this.update = function () {
      if (this.flag === 'v') {
        this.a.x += this.va;
        this.b.x += this.vb;
      } else if (flag === 'h') {
        this.a.y += this.va;
        this.b.y += this.vb;
      }

      this.edges();
    };

    this.edges = function () {
      if (this.flag === 'v') {
        if (this.a.x < 0 || this.a.x > cw) {
          this.va *= -1;
        }

        if (this.b.x < 0 || this.b.x > cw) {
          this.vb *= -1;
        }
      } else if (flag === 'h') {
        if (this.a.y < 0 || this.a.y > ch) {
          this.va *= -1;
        }

        if (this.b.y < 0 || this.b.y > ch) {
          this.vb *= -1;
        }
      }
    };
  }

  for (var i = 0; i < linesNum; i++) {
    var flag = i % 2 === 0 ? 'h' : 'v';
    var l = new Line(flag);
    linesRy.push(l);
  }

  function Draw() {
    requestId = window.requestAnimationFrame(Draw);
    ctx.clearRect(0, 0, cw, ch);

    for (var i = 0; i < linesRy.length; i++) {
      var l = linesRy[i];
      l.draw();
      l.update();
    }

    for (var i = 0; i < linesRy.length; i++) {
      var l = linesRy[i];

      for (var j = i + 1; j < linesRy.length; j++) {
        var l1 = linesRy[j];
        Intersect2lines(l, l1);
      }
    }
  }

  function Init() {
    linesRy.length = 0;

    for (var i = 0; i < linesNum; i++) {
      var flag = i % 2 === 0 ? 'h' : 'v';
      var l = new Line(flag);
      linesRy.push(l);
    }

    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = null;
    }

    $canvas.attr({
      width: '',
      height: ''
    });
    cw = canvas.width = parseFloat($canvas.css('width'));
    cx = cw / 2;
    ch = canvas.height = parseFloat($canvas.css('height'));
    cy = ch / 2;
    Draw();
  }

  setTimeout(function () {
    Init();
    addEventListener('resize', Init, false);
  }, 15);

  function Intersect2lines(l1, l2) {
    var p1 = l1.a,
        p2 = l1.b,
        p3 = l2.a,
        p4 = l2.b;
    var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
    var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
    var x = p1.x + ua * (p2.x - p1.x);
    var y = p1.y + ua * (p2.y - p1.y);

    if (ua > 0 && ub > 0) {
      markPoint({
        x: x,
        y: y
      });
    }
  }

  function markPoint(p) {
    ctx.globalAlpha = opts.circleOpacity;
    ctx.fillStyle = opts.circleColor;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  function randomIntFromInterval(mn, mx) {
    return ~~(Math.random() * (mx - mn + 1) + mn);
  }
});
// CONCATENATED MODULE: ./src/index.js

var crossLine = cross_line;
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport crossLine */__webpack_require__.d(__webpack_exports__, "crossLine", function() { return crossLine; });




/***/ })

/******/ });
});
//# sourceMappingURL=jason-canvas.umd.js.map