/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _javaScript_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javaScript/quotes */ \"./src/javaScript/quotes.js\");\n/* harmony import */ var _javaScript_quotes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javaScript_quotes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javaScript_greetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javaScript/greetings */ \"./src/javaScript/greetings.js\");\n/* harmony import */ var _javaScript_greetings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javaScript_greetings__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _javaScript_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javaScript/location */ \"./src/javaScript/location.js\");\n/* harmony import */ var _javaScript_location__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javaScript_location__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javaScript/apiCountry */ \"./src/javaScript/apiCountry.js\");\n/* harmony import */ var _javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://weatherapp-challenge/./src/index.js?");

/***/ }),

/***/ "./src/javaScript/apiCountry.js":
/*!**************************************!*\
  !*** ./src/javaScript/apiCountry.js ***!
  \**************************************/
/***/ (() => {

eval("const searchCountryButton = document.querySelector(\"#searchCountryButton\");\nconst searchCountryInput = document.querySelector(\"#searchCountryInput\");\nsearchCountryButton.addEventListener(\"click\", () => {\n  if (searchCountryInput.value == \"\") {\n    alert(\"Campo Vacio\");\n  } else {\n    apiCountry(searchCountryInput.value);\n  }\n});\n\nasync function apiCountry(dataCountry) {\n  try {\n    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataCountry}&appid=7daaca17f73b8537056bf2d813d49c18`);\n    const data = await res.json();\n    console.log(data);\n    weatherTime(data);\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nfunction weatherTime(printData) {\n  let weatherNivel = document.querySelector(\"#weatherNivel\");\n  weatherNivel.innerHTML = `\n    <p>${Math.floor(printData.main.temp - 273.15)}<span>°C</span></p>\n    <p>${printData.name}</p>\n    `;\n  console.log(printData);\n} //search Country\n\n\nconst headerSearch = document.querySelector(\"#headerSearch\");\nheaderSearch.addEventListener(\"click\", () => {\n  let searchCountry = document.querySelector(\"#searchCountry\");\n  searchCountry.classList.remove(\"displayNone\");\n  headerSearch.classList.add(\"displayNone\");\n  headerSearchClose.classList.remove(\"displayNone\");\n}); //close search Country\n\nconst headerSearchClose = document.querySelector(\"#headerSearchClose\");\nheaderSearchClose.addEventListener(\"click\", () => {\n  let searchCountry = document.querySelector(\"#searchCountry\");\n  searchCountry.classList.add(\"displayNone\");\n  headerSearchClose.classList.add(\"displayNone\");\n  headerSearch.classList.remove(\"displayNone\");\n});\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/apiCountry.js?");

/***/ }),

/***/ "./src/javaScript/greetings.js":
/*!*************************************!*\
  !*** ./src/javaScript/greetings.js ***!
  \*************************************/
/***/ (() => {

eval("let date = Date();\nlet separationDate = date.split(\" \");\nlet separationDateHour = separationDate[4].split(\":\");\nlet hour = separationDateHour[0];\nconst bodyContainer = document.querySelector(\"#bodyContainer\");\n\nif (hour < 18) {\n  document.getElementById(\"mainGreetings\").innerHTML = \"GOOD DAY, IT'S CURRENTLY\";\n  iconDay(\"fa-sun\");\n  bodyContainer.style = \"background-image: url(https://www.fondosdepantalla.top/wp-content/uploads/2016/06/wallpapers-4k-de-carreteras-Fondosdepantalla.top-2.jpg);\";\n} else {\n  document.querySelector(\"#mainGreetings\").innerHTML = \"GOOD NIGTH, IT'S CURRENTLY\";\n  iconDay(\"fa-moon\");\n  bodyContainer.style = \"background-image:url(https://i2.wp.com/wallpapershome.com/images/wallpapers/night-sky-3840x2160-5k-4k-wallpaper-stars-mountains-bridge-new-zealand-547.jpg); \";\n}\n\nfunction iconDay(data) {\n  let mainGreetingsIcon = document.createElement(\"i\");\n  mainGreetingsIcon.className = `fas ${data}`;\n  document.getElementById(\"mainGreetingsContainer\").appendChild(mainGreetingsIcon);\n}\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/greetings.js?");

/***/ }),

/***/ "./src/javaScript/location.js":
/*!************************************!*\
  !*** ./src/javaScript/location.js ***!
  \************************************/
/***/ (() => {

eval("navigator.geolocation.getCurrentPosition(function (position) {\n  console.log(position.coords.latitude);\n  console.log(position.coords.longitude);\n});\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/location.js?");

/***/ }),

/***/ "./src/javaScript/quotes.js":
/*!**********************************!*\
  !*** ./src/javaScript/quotes.js ***!
  \**********************************/
/***/ (() => {

eval("const InspirationAPI = \"https://type.fit/api/quotes\";\nconst mainWeather = document.querySelector(\"#main-weather\");\n\nconst fetchDataPhrases = async () => {\n  try {\n    let randomNumber = Math.floor(Math.random() * 1643);\n    const res = await fetch(InspirationAPI);\n    const data = await res.json();\n    phrases(data[randomNumber]);\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nfetchDataPhrases();\n\nfunction phrases(data) {\n  document.querySelector(\"#mainPhrase\").innerHTML = `${data.text}`;\n  document.querySelector(\"#mainPhraseAutor\").innerHTML = `${data.author}`;\n}\n\ndocument.querySelector(\".fa-redo\").addEventListener(\"click\", () => {\n  fetchDataPhrases();\n});\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/quotes.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weatherapp-challenge/./src/style.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;