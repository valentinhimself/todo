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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DomController = (() => {\n  const bodyContainer = document.querySelector('.body-container');\n  const createBtn = document.querySelector('.add-todo');\n  const prompt = document.querySelector('.prompt__div');\n  const exit = document.querySelector('.exit');\n  const priorityLabels = document.querySelectorAll('label');\n  const submitBtn = document.querySelector('#submit__btn');\n\n  createBtn.addEventListener('click', () => {\n    bodyContainer.classList.add('blur');\n    prompt.classList.remove('collapse');\n  });\n\n  exit.addEventListener('click', () => {\n    bodyContainer.classList.remove('blur');\n    prompt.classList.add('collapse');\n  });\n\n  priorityLabels.forEach((label) => {\n    label.addEventListener('click', (e) => {\n      label.classList.add('priority-active');\n      priorityLabels.forEach((lbl) => {\n        if (e.target !== lbl) lbl.classList.remove('priority-active');\n      });\n    });\n  });\n\n  submitBtn.addEventListener('click', () => {\n    if (isFilledOut()) {\n      exit.click();\n      priorityLabels.forEach((label) =>\n        label.classList.remove('priority-active')\n      );\n    }\n  });\n\n  function getFormTitle() {\n    return document.querySelector('#title');\n  }\n  function getFormDetails() {\n    return document.querySelector('#details');\n  }\n\n  function getFormPriority() {\n    return document.querySelector('.priority-btns input:checked');\n  }\n\n  function getFormDueDate() {\n    return document.querySelector('#date');\n  }\n\n  function isFilledOut() {\n    if (\n      getFormTitle().value &&\n      getFormDetails().value &&\n      getFormPriority().id &&\n      getFormDueDate().value\n    )\n      return true;\n    return false;\n  }\n\n  function resetInputs() {\n    getFormTitle().value = '';\n    getFormDetails().value = '';\n    getFormDueDate().value = '';\n  }\n\n  return {\n    submitBtn,\n    bodyContainer,\n    isFilledOut,\n    getFormTitle,\n    getFormDetails,\n    getFormPriority,\n    getFormDueDate,\n    resetInputs,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomController);\n\n\n//# sourceURL=webpack://todo/./src/domController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/check.png */ \"./src/assets/check.png\");\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n\n\n\n\n\n\n// function ToDo() {\nconst array = [];\nwindow.array = array;\n_domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].submitBtn.addEventListener('click', () => {\n  function pushToDoToArray() {\n    if (_domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isFilledOut()) {\n      array.push(\n        new _todoItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n          _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getFormTitle().value,\n          _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getFormDetails().value,\n          _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getFormDueDate().value,\n          _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getFormPriority().id\n        )\n      );\n    }\n  }\n  pushToDoToArray();\n\n  function addToDoToDOM() {\n    _todoItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createToDoItem(\n      array[array.length - 1].title,\n      array[array.length - 1].priority\n    );\n    _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resetInputs();\n  }\n  addToDoToDOM();\n  EditPrompts();\n  console.log(array);\n});\n\nfunction EditPrompts() {\n  console.log('called Edit Prompts');\n  const editPrompt = document.querySelector('.edit-prompt__div ');\n  const editIcons = document.querySelectorAll('.edit-icon');\n  const titleEdit = document.querySelector('#title-edit');\n  const detailsEdit = document.querySelector('#details-edit');\n  const dateEdit = document.querySelector('#date-edit');\n  const priorityEditArr = document.querySelector('.edit-priority-btns label');\n  const exit = document.querySelector('.exit-edit');\n  const editSubmitBtn = document.querySelector('#edit__btn');\n  let currentNode;\n  let currentToDoTitle;\n  let arrayIndex;\n\n  exit.addEventListener('click', closeEditPrompt);\n\n  editIcons.forEach((icon) =>\n    icon.addEventListener('click', () => {\n      // getCurrentNodeToDoTitle(icon);\n      // getCurrentNodeIndex(array, currentToDoTitle);\n      // setEditValues(currentToDoTitle);\n      assignClassCurrentNode(icon);\n      populateEditFields();\n      openEditPrompt();\n    })\n  );\n\n  editSubmitBtn.addEventListener('click', callOnSubmit);\n\n  function callOnSubmit() {\n    console.log(currentNode);\n    updateToDoDOM();\n    closeEditPrompt();\n    resetEdit();\n  }\n\n  function assignClassCurrentNode(icon) {\n    icon.parentElement.parentElement.classList.add('isBeingEdited');\n    currentNode = document.querySelector('.isBeingEdited');\n  }\n\n  function populateEditFields() {\n    titleEdit.value = currentNode.querySelector('.item-text-title').textContent;\n    selectEditPriorityButton().click();\n  }\n\n  function selectEditPriorityButton() {\n    return document.querySelector(\n      `#${document.querySelector('.isBeingEdited').classList[1]}_lbl-edit`\n    );\n  }\n\n  function openEditPrompt() {\n    editPrompt.classList.remove('collapse');\n    _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bodyContainer.classList.add('blur');\n  }\n\n  function updateToDoDOM() {\n    if (currentNode) {\n      currentNode.querySelector('.item-text-title').textContent =\n        titleEdit.value;\n      changeItemPriority();\n    }\n  }\n\n  function changeItemPriority() {\n    currentNode.classList.remove(currentNode.classList[1]);\n    currentNode.classList.add(\n      document\n        .querySelector('.edit-priority-btns .priority-active')\n        .id.split('_')[0]\n    );\n  }\n\n  function closeEditPrompt() {\n    editPrompt.classList.add('collapse');\n    _domController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bodyContainer.classList.remove('blur');\n  }\n\n  function resetEdit() {\n    if (currentNode) {\n      currentNode.classList.remove('isBeingEdited');\n      currentNode = undefined;\n    }\n  }\n\n  //   function getCurrentNodeToDoTitle(icon) {\n  //     currentToDoTitle =\n  //       icon.parentElement.parentElement.parentElement.querySelector(\n  //         '.item-text-title'\n  //       ).textContent;\n  //     return currentToDoTitle;\n  //   }\n\n  //   function getCurrentNodeIndex(arr, title) {\n  //     arrayIndex = arr.findIndex((object) => object.title === title);\n  //   }\n\n  //   function setEditValues(title) {\n  //     titleEdit.textContent = title;\n  //     detailsEdit.textContent = array[arrayIndex].details;\n  //     dateEdit.value = array[arrayIndex].dueDate;\n  //   }\n\n  //   function updateToDoArray() {\n  //     // arrayIndex = arr.findIndex((object) => object.title === title);\n\n  //     array[arrayIndex].title = titleEdit.value;\n  //     array[arrayIndex].details = detailsEdit.value;\n  //     array[arrayIndex].dueDate = dateEdit.value;\n  //     array[arrayIndex].priority = (() => {\n  //       const checkedValue = document\n  //         .querySelector('.edit-prompt__div .priority-btns input:checked')\n  //         .id.slice(0, 3);\n  //       if (checkedValue === 'low' || checkedValue === 'med') return checkedValue;\n  //       return 'high';\n  //     })();\n  //   }\n\n  //   function updateToDoDOM() {\n  //     console.log(arrayIndex);\n  //     console.log(array[arrayIndex]);\n  //     currentNode.querySelector('.item-text-title').textContent =\n  //       array[arrayIndex].title;\n  //     // ).textContent = titleEdit.value;\n  //   }\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoItem)\n/* harmony export */ });\nclass ToDoItem {\n  constructor(title, details, dueDate, priority) {\n    this.title = title;\n    this.details = details;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  static createToDoItem(title, priority) {\n    this.title = title;\n    this.priority = priority;\n\n    const main = document.querySelector('main');\n    const todoItem = document.createElement('div');\n    todoItem.classList.add('todo-item');\n    todoItem.classList.add(`${this.priority}`);\n\n    const left = document.createElement('div');\n    left.classList.add('left');\n\n    const checkBox = document.createElement('span');\n    checkBox.classList.add('check-box');\n    left.appendChild(checkBox);\n\n    const itemTitle = document.createElement('span');\n    itemTitle.textContent = `${this.title}`;\n    itemTitle.classList.add('item-text-title');\n    left.appendChild(itemTitle);\n\n    const right = document.createElement('div');\n    right.classList.add('right');\n\n    const detailsButton = document.createElement('button');\n    detailsButton.classList.add('details__btn');\n    detailsButton.setAttribute('type', 'button');\n    detailsButton.textContent = 'Details';\n    right.appendChild(detailsButton);\n\n    const dueDate = document.createElement('span');\n    dueDate.classList.add('item-due-date');\n    right.appendChild(dueDate);\n\n    const editIcon = document.createElement('span');\n    editIcon.classList.add('edit-icon');\n    const svgEdit = `\n  <svg fill=\"#000000\" width=\"50px\" height=\"50px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M20.548,3.452a1.542,1.542,0,0,1,0,2.182L12.912,13.27,9.639,14.361l1.091-3.273,7.636-7.636A1.542,1.542,0,0,1,20.548,3.452ZM4,21H19a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7H5V6h7a1,1,0,0,0,0-2H4A1,1,0,0,0,3,5V20A1,1,0,0,0,4,21Z\" />\n  </svg>\n`;\n    editIcon.innerHTML = svgEdit;\n    right.appendChild(editIcon);\n\n    const deleteIcon = document.createElement('span');\n    deleteIcon.classList.add('delete-icon');\n    const svgDelete = `\n  <svg fill=\"#000000\" width=\"50px\" height=\"50px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>trashcan</title>\n    <path d=\"M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z\"></path>\n  </svg>\n`;\n    deleteIcon.innerHTML = svgDelete;\n    right.appendChild(deleteIcon);\n\n    todoItem.appendChild(left);\n    todoItem.appendChild(right);\n\n    main.appendChild(todoItem);\n\n    checkBox.addEventListener('click', () => {\n      checkBox.classList.toggle('checked');\n      itemTitle.classList.toggle('checked');\n      dueDate.classList.toggle('checked');\n      editIcon.classList.toggle('checked');\n      deleteIcon.classList.toggle('checked');\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/todoItems.js?");

/***/ }),

/***/ "./src/assets/check.png":
/*!******************************!*\
  !*** ./src/assets/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/check.png\";\n\n//# sourceURL=webpack://todo/./src/assets/check.png?");

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