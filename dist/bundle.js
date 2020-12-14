/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data_structures/stack.ts":
/*!**************************************!*\
  !*** ./src/data_structures/stack.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": () => /* binding */ Stack\n/* harmony export */ });\n/*\nStack implementation in TS - substitute push/pop methods with pointer to top of stack\n*/\nvar Stack = /** @class */ (function () {\n    function Stack(capacity) {\n        this.top = -1;\n        this.stack = new Array(capacity);\n    }\n    //double length of array whenever max size is reached - enables amortized time of O(1) for push\n    Stack.prototype.ensureCapacity = function () {\n        if (this.top === this.stack.length - 1) {\n            var expansion = new Array(this.stack.length);\n            this.stack = this.stack.concat(expansion);\n        }\n    };\n    Stack.prototype.isEmpty = function () {\n        return this.top === -1;\n    };\n    Stack.prototype.size = function () {\n        return this.top + 1;\n    };\n    //O(1) \n    Stack.prototype.push = function (value) {\n        this.ensureCapacity();\n        this.top++; //move top pointer up the stack\n        this.stack[this.top] = value; //set the value where top now points to\n        return value;\n    };\n    Stack.prototype.pop = function () {\n        if (this.isEmpty())\n            return -1;\n        var value = this.stack[this.top]; //return value at top of stack, then move top down\n        this.top--;\n        return value;\n    };\n    Stack.prototype.peek = function () {\n        if (this.isEmpty())\n            return -1;\n        return this.stack[this.top];\n    };\n    Stack.prototype.print = function () {\n        if (this.isEmpty())\n            return \"Stack is empty\";\n        var result = \"\";\n        for (var i = 0; i <= this.top; i++) {\n            result += this.stack[i];\n            if (i !== this.top)\n                result += \", \";\n        }\n        return result;\n    };\n    return Stack;\n}());\n\n\n\n//# sourceURL=webpack://forest/./src/data_structures/stack.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_structures_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_structures/stack */ \"./src/data_structures/stack.ts\");\n\nwindow.Stack = _data_structures_stack__WEBPACK_IMPORTED_MODULE_0__.Stack;\n\n\n//# sourceURL=webpack://forest/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;