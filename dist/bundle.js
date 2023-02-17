/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles/styles.css\");\n\n//# sourceURL=webpack://todo/./src/styles/styles.css?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DomController = (() => {\n  const bodyContainer = document.querySelector('.body-container');\n  const createBtn = document.querySelector('.add-todo');\n  const prompt = document.querySelector('.prompt__div');\n  const exit = document.querySelector('.exit');\n  const priorityLabels = document.querySelectorAll('label');\n  const submitBtn = document.querySelector('#submit__btn');\n  const priorityBtns = document.querySelectorAll('#low, #med, #high');\n\n  createBtn.addEventListener('click', () => {\n    bodyContainer.classList.add('blur');\n    prompt.classList.remove('collapse');\n  });\n\n  exit.addEventListener('click', () => {\n    bodyContainer.classList.remove('blur');\n    prompt.classList.add('collapse');\n  });\n\n  priorityLabels.forEach((label) => {\n    label.addEventListener('click', (e) => {\n      label.classList.add('priority-active');\n      priorityLabels.forEach((lbl) => {\n        if (e.target !== lbl) lbl.classList.remove('priority-active');\n      });\n    });\n  });\n\n  submitBtn.addEventListener('click', () => {\n    if (isFilledOut()) {\n      exit.click();\n      priorityLabels.forEach((label) =>\n        label.classList.remove('priority-active')\n      );\n    }\n  });\n\n  function getFormTitle() {\n    return document.querySelector('#title');\n  }\n  function getFormDetails() {\n    return document.querySelector('#details');\n  }\n\n  function getFormPriority() {\n    return document.querySelector('.priority-btns input:checked');\n  }\n\n  function getFormDueDate() {\n    return document.querySelector('#date');\n  }\n\n  function isFilledOut() {\n    if (\n      getFormTitle().value &&\n      getFormDetails().value &&\n      getFormPriority().id &&\n      getFormDueDate().value\n    )\n      return true;\n    return false;\n  }\n\n  return {\n    submitBtn,\n    isFilledOut,\n    getFormTitle,\n    getFormDetails,\n    getFormPriority,\n    getFormDueDate,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomController);\n\n\n//# sourceURL=webpack://todo/./src/domController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n\n\n\n\n\nconst array = [];\n_domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].submitBtn.addEventListener('click', () => {\n  if (_domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFilledOut()) {\n    array.push(\n      new _todoItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        _domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFormTitle().value,\n        _domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFormDetails().value,\n        _domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFormDueDate().value,\n        _domController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFormPriority().id\n      )\n    );\n  }\n\n  console.log(array);\n  // then populate a list of ToDos in the body based on the array\n});\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  constructor(title, details, dueDate, priority) {\n    this.title = title;\n    this.details = details;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/todoItems.js?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo.png\";\n\n//# sourceURL=webpack://todo/./src/assets/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;