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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.json */ \"./src/data.json\");\n/* harmony import */ var _assets_images_icon_reaction_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icon-reaction.svg */ \"./src/assets/images/icon-reaction.svg\");\n/* harmony import */ var _assets_images_icon_memory_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/icon-memory.svg */ \"./src/assets/images/icon-memory.svg\");\n/* harmony import */ var _assets_images_icon_verbal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/icon-verbal.svg */ \"./src/assets/images/icon-verbal.svg\");\n/* harmony import */ var _assets_images_icon_visual_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/icon-visual.svg */ \"./src/assets/images/icon-visual.svg\");\n\n\n\n\n\n\nvar svgArray = [_assets_images_icon_reaction_svg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_icon_memory_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_images_icon_verbal_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_images_icon_visual_svg__WEBPACK_IMPORTED_MODULE_5__];\nvar scoreTotal = 0;\nvar totalScore = document.querySelector('.card__result__score');\nvar category = document.querySelectorAll('.card__summary__category');\nconsole.log(category);\nvar categoryIcon = document.querySelectorAll('.category__icon');\nvar categoryTitle = document.querySelectorAll('.category__title');\nvar categoryScore = document.querySelectorAll('.category__score');\ncategoryIcon.forEach(function (icon, i) {\n  icon.setAttribute('src', svgArray[i]);\n});\ncategoryTitle.forEach(function (title, i) {\n  title.innerHTML = _data_json__WEBPACK_IMPORTED_MODULE_1__[i].category;\n});\ncategoryScore.forEach(function (score, i) {\n  score.innerHTML = \"\".concat(_data_json__WEBPACK_IMPORTED_MODULE_1__[i].score, \"<span class=\\\"category__score__max\\\"> / 100</span>\");\n  scoreTotal += _data_json__WEBPACK_IMPORTED_MODULE_1__[i].score;\n  totalScore.innerHTML = \"\".concat(Math.floor(scoreTotal / _data_json__WEBPACK_IMPORTED_MODULE_1__.length), \"<span class=\\\"card__result__max\\\">of 100</span>\");\n});\n\n//# sourceURL=webpack://webpack-starter/./src/js/index.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./src/css/style.css?");

/***/ }),

/***/ "./src/assets/images/icon-memory.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-memory.svg ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiNGRkIyMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNNS44MzMgMTEuNjY3YTIuNSAyLjUgMCAxIDAgLjgzNCA0Ljg1OCIvPjxwYXRoIHN0cm9rZT0iI0ZGQjIxRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjUiIGQ9Ik0zLjU1MyAxMy4wMDRhMy4zMzMgMy4zMzMgMCAwIDEtLjcyOC01LjUzbS4wMjUtLjA2N2EyLjA4MyAyLjA4MyAwIDAgMSAyLjk4My0yLjgyNG0uMTk5LjA1NEEyLjA4MyAyLjA4MyAwIDEgMSAxMCAzLjc1djEyLjkxN2ExLjY2NyAxLjY2NyAwIDAgMS0zLjMzMyAwTTEwIDUuODMzYTIuNSAyLjUgMCAwIDAgMi41IDIuNW0xLjY2NyAzLjMzNGEyLjUgMi41IDAgMSAxLS44MzQgNC44NTgiLz48cGF0aCBzdHJva2U9IiNGRkIyMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTYuNDQ3IDEzLjAwNGEzLjMzNCAzLjMzNCAwIDAgMCAuNzI4LTUuNTNtLS4wMjUtLjA2N2EyLjA4MyAyLjA4MyAwIDAgMC0yLjk4My0yLjgyNE0xMCAzLjc1YTIuMDg1IDIuMDg1IDAgMCAxIDIuNTM4LTIuMDMzIDIuMDg0IDIuMDg0IDAgMCAxIDEuNDMgMi45Mm0tLjYzNSAxMi4wM2ExLjY2NyAxLjY2NyAwIDAgMS0zLjMzMyAwIi8+PC9zdmc+\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/images/icon-memory.svg?");

/***/ }),

/***/ "./src/assets/images/icon-reaction.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-reaction.svg ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiNGNTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTAuODMzIDguMzMzVjIuNWwtNi42NjYgOS4xNjdoNVYxNy41bDYuNjY2LTkuMTY3aC01WiIvPjwvc3ZnPg==\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/images/icon-reaction.svg?");

/***/ }),

/***/ "./src/assets/images/icon-verbal.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-verbal.svg ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiMwMEJCOEYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNNy41IDEwaDVNMTAgMTguMzMzQTguMzMzIDguMzMzIDAgMSAwIDEuNjY3IDEwYzAgMS41MTguNDA2IDIuOTQyIDEuMTE1IDQuMTY3bC0uNjk5IDMuNzUgMy43NS0uNjk5QTguMjk1IDguMjk1IDAgMCAwIDEwIDE4LjMzM1oiLz48L3N2Zz4=\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/images/icon-verbal.svg?");

/***/ }),

/***/ "./src/assets/images/icon-visual.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-visual.svg ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiMxMTI1RDYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTAgMTEuNjY3YTEuNjY3IDEuNjY3IDAgMSAwIDAtMy4zMzQgMS42NjcgMS42NjcgMCAwIDAgMCAzLjMzNFoiLz48cGF0aCBzdHJva2U9IiMxMTI1RDYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTcuNSAxMGMtMS41NzQgMi40OTItNC40MDIgNS03LjUgNXMtNS45MjYtMi41MDgtNy41LTVDNC40MTYgNy42MzIgNi42NiA1IDEwIDVzNS41ODQgMi42MzIgNy41IDVaIi8+PC9zdmc+\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/images/icon-visual.svg?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"category\":\"Responsiveness\",\"score\":15,\"icon\":\"../assets/images/icon-reaction.svg\"},{\"category\":\"Thoughts\",\"score\":46,\"icon\":\"../assets/images/icon-memory.svg\"},{\"category\":\"Speech\",\"score\":55,\"icon\":\"../assets/images/icon-verbal.svg\"},{\"category\":\"Perception\",\"score\":24,\"icon\":\"../assets/images/icon-visual.svg\"}]');\n\n//# sourceURL=webpack://webpack-starter/./src/data.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;