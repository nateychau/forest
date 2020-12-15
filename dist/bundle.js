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

/***/ "./src/data_structures/circular_queue.ts":
/*!***********************************************!*\
  !*** ./src/data_structures/circular_queue.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CircularQueue\": () => /* binding */ CircularQueue\n/* harmony export */ });\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ \"./src/data_structures/queue.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n/*\nImplement circular queue with a fixed-size array\n--------Time constraints------------\nInsert: O(1)\nRemove: O(1)\n*Constant times achieved by using pointers to keep track of where to remove/insert\nSearch: O(n) - must brute force since queue is unsorted\n*/\nvar CircularQueue = /** @class */ (function (_super) {\n    __extends(CircularQueue, _super);\n    function CircularQueue(size) {\n        return _super.call(this, size) || this;\n    }\n    CircularQueue.prototype.enqueue = function (value) {\n        //second case handles cases where rear has wrapped back around to front\n        if ((this.rear === this.queue.length - 1 && this.front === 0) ||\n            this.front === this.rear + 1) {\n            throw \"Queue is full\"; //does not support resizing\n        }\n        if (this.front < 0)\n            this.front++; //if queue is empty, move front pointer to front;\n        this.rear = (this.rear + 1) % this.queue.length; //if rear would move past end of array, wrap it around back to head\n        this.queue[this.rear] = value;\n        return value;\n    };\n    CircularQueue.prototype.dequeue = function () {\n        if (this.isEmpty())\n            return -1;\n        var result = this.queue[this.front];\n        if (this.front === this.rear) {\n            this.front = -1;\n            this.rear = -1;\n        }\n        else {\n            this.front = (this.front + 1) % this.queue.length;\n        }\n        return result;\n    };\n    CircularQueue.prototype.print = function () {\n        if (this.isEmpty())\n            return \"Queue is empty\";\n        var result = \"\";\n        for (var i = this.front; i != this.rear; i = (i + 1) % this.queue.length) {\n            result += this.queue[i] + \", \";\n        }\n        result += this.queue[this.rear];\n        return result;\n    };\n    CircularQueue.prototype.size = function () {\n        if (this.isEmpty())\n            return 0;\n        if (this.rear >= this.front) {\n            return this.rear - this.front + 1;\n        }\n        else {\n            return this.queue.length - this.front + this.rear + 1;\n        }\n    };\n    return CircularQueue;\n}(_queue__WEBPACK_IMPORTED_MODULE_0__.Queue));\n\n\n\n//# sourceURL=webpack://forest/./src/data_structures/circular_queue.ts?");

/***/ }),

/***/ "./src/data_structures/deque.ts":
/*!**************************************!*\
  !*** ./src/data_structures/deque.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deque\": () => /* binding */ Deque\n/* harmony export */ });\n/*\nImplement deque with a circular queue\n--------Time constraints------------\nInsert (at either end): O(1)\nRemove (at either end): O(1)\n*Constant times achieved by using pointers to keep track of where to remove/insert\nSearch: O(n) - must brute force since deque is unsorted\n*/\nvar Deque = /** @class */ (function () {\n    function Deque(capacity) {\n        this.front = -1;\n        this.rear = 0;\n        this.deque = new Array(capacity);\n    }\n    Deque.prototype.isEmpty = function () {\n        return this.front === -1;\n    };\n    Deque.prototype.size = function () {\n        if (this.isEmpty())\n            return 0;\n        if (this.rear >= this.front) { //normal front-to-back case\n            return this.rear - this.front + 1;\n        }\n        else { //wrapped-around case\n            return this.deque.length - this.front + this.rear + 1;\n        }\n    };\n    Deque.prototype.isFull = function () {\n        return (this.rear === this.deque.length - 1 && this.front === 0) ||\n            this.front === this.rear + 1;\n    };\n    Deque.prototype.insertFront = function (value) {\n        if (this.isFull()) {\n            throw \"Deque is full\"; //does not support resizing\n        }\n        if (this.front === -1) { //if deque is empty\n            this.front = 0;\n            this.rear = 0;\n        }\n        else if (this.front === 0) { //if deque will overflow the front end, wrap around to end\n            this.front = this.deque.length - 1;\n        }\n        else {\n            this.front--;\n        }\n        this.deque[this.front] = value;\n        return value;\n    };\n    Deque.prototype.insertRear = function (value) {\n        if (this.isFull()) {\n            throw \"Deque is full\"; //does not support resizing\n        }\n        if (this.front === -1) { //deque is empty\n            this.front = 0;\n            this.rear = 0;\n        }\n        else if (this.rear === this.deque.length - 1) { //if rear will overflow rear end, wrap around to front\n            this.rear = 0;\n        }\n        else {\n            this.rear++;\n        }\n        this.deque[this.rear] = value;\n        return value;\n    };\n    Deque.prototype.removeFront = function () {\n        if (this.isEmpty())\n            return -1;\n        var value = this.deque[this.front];\n        if (this.front === this.rear) {\n            this.front = -1;\n            this.rear = -1;\n        }\n        else if (this.front === this.deque.length - 1) {\n            this.front = 0;\n        }\n        else {\n            this.front++;\n        }\n        return value;\n    };\n    Deque.prototype.removeRear = function () {\n        if (this.isEmpty())\n            return -1;\n        var value = this.deque[this.rear];\n        if (this.front === this.rear) {\n            this.front = -1;\n            this.rear = -1;\n        }\n        else if (this.rear === 0) {\n            this.rear = this.deque.length - 1;\n        }\n        else {\n            this.rear--;\n        }\n        return value;\n    };\n    Deque.prototype.getFront = function () {\n        if (this.isEmpty())\n            return -1;\n        return this.deque[this.front];\n    };\n    Deque.prototype.getRear = function () {\n        if (this.isEmpty())\n            return -1;\n        return this.deque[this.rear];\n    };\n    Deque.prototype.print = function () {\n        if (this.isEmpty())\n            return \"Deque is empty\";\n        var result = \"\";\n        for (var i = this.front; i != this.rear; i = (i + 1) % this.deque.length) {\n            result += this.deque[i] + \", \";\n        }\n        result += this.deque[this.rear];\n        return result;\n    };\n    return Deque;\n}());\n\n\n\n//# sourceURL=webpack://forest/./src/data_structures/deque.ts?");

/***/ }),

/***/ "./src/data_structures/linked_list.ts":
/*!********************************************!*\
  !*** ./src/data_structures/linked_list.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => /* binding */ Node,\n/* harmony export */   \"LinkedList\": () => /* binding */ LinkedList,\n/* harmony export */   \"demoLinkedList\": () => /* binding */ demoLinkedList\n/* harmony export */ });\nvar Node = /** @class */ (function () {\n    function Node(value) {\n        this.next = null;\n        this.value = value;\n    }\n    return Node;\n}());\n\n/*\nImplement linked list with struct-like objects\n--------Time constraints------------\nInsert: O(1)\nRemove: O(1)\n*inserting and removing is handled by rearranging the nodes to which relevant nodes' next\npointers point to\nSearch: O(n) - must brute force since queue is unsorted\n*/\nvar LinkedList = /** @class */ (function () {\n    function LinkedList() {\n    }\n    return LinkedList;\n}());\n\nvar demoLinkedList = function (array) {\n    var list = new LinkedList();\n    var lastCreated;\n    for (var i = 0; i < array.length; i++) {\n        var node = new Node(array[i]);\n        if (i === 0) {\n            list.head = node;\n        }\n        else {\n            lastCreated.next = node;\n        }\n        lastCreated = node;\n    }\n    var currentNode = list.head;\n    while (currentNode.next) {\n        console.log(currentNode.value);\n        currentNode = currentNode.next;\n    }\n};\n\n\n//# sourceURL=webpack://forest/./src/data_structures/linked_list.ts?");

/***/ }),

/***/ "./src/data_structures/queue.ts":
/*!**************************************!*\
  !*** ./src/data_structures/queue.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Queue\": () => /* binding */ Queue\n/* harmony export */ });\n/*\n--------Time constraints------------\nInsert: O(1)\nRemove: O(1)\n*Constant times achieved by using pointers to keep track of where to remove/insert\nSearch: O(n) - must brute force since deque is unsorted\n\n-------Use cases----------------\n\n*/\nvar Queue = /** @class */ (function () {\n    function Queue(size) {\n        this.front = -1;\n        this.rear = -1;\n        this.queue = new Array(size);\n    }\n    Queue.prototype.isEmpty = function () {\n        return this.front === -1;\n    };\n    Queue.prototype.ensureCapacity = function () {\n        if (this.rear === this.queue.length - 1) {\n            var expansion = new Array(this.queue.length);\n            this.queue = this.queue\n                .slice(this.front, this.rear + 1) //slice section of array that is still in use\n                .concat(expansion); //concat to new empty array \n            this.rear -= this.front; //shift pointers back up to appropriate positions\n            this.front = 0;\n        }\n    };\n    Queue.prototype.size = function () {\n        if (this.isEmpty())\n            return 0;\n        return this.rear - this.front + 1;\n    };\n    Queue.prototype.enqueue = function (value) {\n        this.ensureCapacity();\n        if (this.front < 0)\n            this.front++; //if queue is empty, move front pointer to front;\n        this.rear++; //move rear pointer forward, then assign value to rear pointer;\n        this.queue[this.rear] = value;\n        return value;\n    };\n    Queue.prototype.dequeue = function () {\n        if (this.isEmpty())\n            return -1;\n        var value = this.queue[this.front];\n        this.front++;\n        if (this.front > this.rear) { //if front has overlapped rear, then queue is empty\n            this.front = -1; //reset pointers\n            this.rear = -1;\n        }\n        return value;\n    };\n    Queue.prototype.peek = function () {\n        if (this.isEmpty())\n            return -1;\n        return this.queue[this.rear];\n    };\n    Queue.prototype.print = function () {\n        if (this.isEmpty())\n            return \"Queue is empty\";\n        var result = \"\";\n        for (var i = this.front; i <= this.rear; i++) {\n            result += this.queue[i];\n            if (i !== this.rear)\n                result += \", \";\n        }\n        return result;\n    };\n    return Queue;\n}());\n\n\n\n//# sourceURL=webpack://forest/./src/data_structures/queue.ts?");

/***/ }),

/***/ "./src/data_structures/stack.ts":
/*!**************************************!*\
  !*** ./src/data_structures/stack.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": () => /* binding */ Stack\n/* harmony export */ });\n/*\nStack implementation in TS - substitute push/pop methods with pointer to top of stack\n\n--------Time constraints------------\nInsert: O(1) - amortized (array doubles in size whenever filled)\nRemove: O(1)\n*Constant times achieved by using pointers to keep track of where to remove/insert\nSearch: O(n) - must brute force since deque is unsorted\n\n--------Use cases-------------\n-reverse a word\n-used in compilers to handle order of operations\n-browser history\n*/\nvar Stack = /** @class */ (function () {\n    function Stack(capacity) {\n        this.top = -1;\n        this.stack = new Array(capacity);\n    }\n    //double length of array whenever max size is reached - enables amortized time of O(1) for push\n    Stack.prototype.ensureCapacity = function () {\n        if (this.top === this.stack.length - 1) {\n            var expansion = new Array(this.stack.length);\n            this.stack = this.stack.concat(expansion);\n        }\n    };\n    Stack.prototype.isEmpty = function () {\n        return this.top === -1;\n    };\n    Stack.prototype.size = function () {\n        return this.top + 1;\n    };\n    //O(1) \n    Stack.prototype.push = function (value) {\n        this.ensureCapacity();\n        this.top++; //move top pointer up the stack\n        this.stack[this.top] = value; //set the value where top now points to\n        return value;\n    };\n    Stack.prototype.pop = function () {\n        if (this.isEmpty())\n            return -1;\n        var value = this.stack[this.top]; //return value at top of stack, then move top down\n        this.top--;\n        return value;\n    };\n    Stack.prototype.peek = function () {\n        if (this.isEmpty())\n            return -1;\n        return this.stack[this.top];\n    };\n    Stack.prototype.print = function () {\n        if (this.isEmpty())\n            return \"Stack is empty\";\n        var result = \"\";\n        for (var i = 0; i <= this.top; i++) {\n            result += this.stack[i];\n            if (i !== this.top)\n                result += \", \";\n        }\n        return result;\n    };\n    return Stack;\n}());\n\n\n\n//# sourceURL=webpack://forest/./src/data_structures/stack.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_structures_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_structures/stack */ \"./src/data_structures/stack.ts\");\n/* harmony import */ var _data_structures_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_structures/queue */ \"./src/data_structures/queue.ts\");\n/* harmony import */ var _data_structures_circular_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_structures/circular_queue */ \"./src/data_structures/circular_queue.ts\");\n/* harmony import */ var _data_structures_deque__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_structures/deque */ \"./src/data_structures/deque.ts\");\n/* harmony import */ var _data_structures_linked_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data_structures/linked_list */ \"./src/data_structures/linked_list.ts\");\n\n\n\n\n\nwindow.Stack = _data_structures_stack__WEBPACK_IMPORTED_MODULE_0__.Stack;\nwindow.Queue = _data_structures_queue__WEBPACK_IMPORTED_MODULE_1__.Queue;\nwindow.CircularQueue = _data_structures_circular_queue__WEBPACK_IMPORTED_MODULE_2__.CircularQueue;\nwindow.Deque = _data_structures_deque__WEBPACK_IMPORTED_MODULE_3__.Deque;\nwindow.demoLinkedList = _data_structures_linked_list__WEBPACK_IMPORTED_MODULE_4__.demoLinkedList;\n\n\n//# sourceURL=webpack://forest/./src/index.ts?");

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