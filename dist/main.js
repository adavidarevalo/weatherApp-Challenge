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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _javaScript_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javaScript/quotes */ \"./src/javaScript/quotes.js\");\n/* harmony import */ var _javaScript_quotes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javaScript_quotes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javaScript_greetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javaScript/greetings */ \"./src/javaScript/greetings.js\");\n/* harmony import */ var _javaScript_greetings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javaScript_greetings__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _javaScript_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javaScript/location */ \"./src/javaScript/location.js\");\n/* harmony import */ var _javaScript_location__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javaScript_location__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javaScript/apiCountry */ \"./src/javaScript/apiCountry.js\");\n/* harmony import */ var _javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_javaScript_apiCountry__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _javaScript_moreInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javaScript/moreInfo */ \"./src/javaScript/moreInfo.js\");\n/* harmony import */ var _javaScript_moreInfo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_javaScript_moreInfo__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://weatherapp-challenge/./src/index.js?");

/***/ }),

/***/ "./src/javaScript/apiCountry.js":
/*!**************************************!*\
  !*** ./src/javaScript/apiCountry.js ***!
  \**************************************/
/***/ (() => {

eval("const searchCountryButton = document.querySelector(\"#searchCountryButton\");\nconst searchCountryInput = document.querySelector(\"#searchCountryInput\");\napiCountry(\"Ecuador\");\nsearchCountryButton.addEventListener(\"click\", () => {\n  if (searchCountryInput.value == \"\") {\n    searchCountryInput.style = \"border:1px solid red;\";\n  } else {\n    apiCountry(searchCountryInput.value);\n    closeButton();\n    searchCountryInput.value = \"\";\n    searchCountryInput.style = \"border:none;\";\n  }\n});\n\nasync function apiCountry(dataCountry) {\n  try {\n    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataCountry}&appid=7daaca17f73b8537056bf2d813d49c18`);\n    const data = await res.json();\n    weatherTime(data);\n    moreInfo(data);\n  } catch (error) {\n    messageError.innerHTML = `\n      <p class=\"locationError\">Cannot to connect in this moment, try after. Thanks for use our service.</p>\n      `;\n  }\n}\n\nfunction weatherTime(printData) {\n  let weatherNivel = document.querySelector(\"#weatherNivel\");\n  weatherNivel.innerHTML = `\n    <p>${Math.floor(printData.main.temp - 273.15)}<span>°C</span></p>\n    <p class=\"weatherNivelCountry\">${printData.name}</p>\n    `;\n} //search Country\n\n\nconst headerSearch = document.querySelector(\"#headerSearch\");\nheaderSearch.addEventListener(\"click\", () => {\n  let searchCountry = document.querySelector(\"#searchCountry\");\n  searchCountry.classList.remove(\"displayNone\");\n  headerSearch.classList.add(\"displayNone\");\n  headerSearchClose.classList.remove(\"displayNone\");\n  headerLocation.style = \"display:none;\";\n}); //close search Country\n\nconst headerSearchClose = document.querySelector(\"#headerSearchClose\");\nheaderSearchClose.addEventListener(\"click\", () => {\n  closeButton();\n});\n\nfunction closeButton() {\n  let searchCountry = document.querySelector(\"#searchCountry\");\n  searchCountry.classList.add(\"displayNone\");\n  headerSearchClose.classList.add(\"displayNone\");\n  headerSearch.classList.remove(\"displayNone\");\n  headerLocation.style = \"display:block;\";\n}\n\nfunction moreInfo(dataMore) {\n  //Wind Status\n  document.querySelector(\"#mainMoreWind\").innerHTML = `${dataMore.wind.speed}<span>mph</span>`; //Humidity\n\n  document.querySelector(\"#mainMoreHumidity\").innerHTML = `${dataMore.main.humidity}<span>%</span>`; //visibility\n\n  document.querySelector(\"#mainMoreVisibility\").innerHTML = `${dataMore.visibility}<span>miles</span>`; //Air \n\n  document.querySelector(\"#mainMoreAir\").innerHTML = `${dataMore.main.pressure}<span>mb</span>`;\n}\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/apiCountry.js?");

/***/ }),

/***/ "./src/javaScript/greetings.js":
/*!*************************************!*\
  !*** ./src/javaScript/greetings.js ***!
  \*************************************/
/***/ (() => {

eval("let date = Date();\nlet separationDate = date.split(\" \");\nlet separationDateHour = separationDate[4].split(\":\");\nlet hour = separationDateHour[0];\nconst bodyContainer = document.querySelector(\"#bodyContainer\");\n\nif (hour < 18) {\n  document.getElementById(\"mainGreetings\").innerHTML = \"GOOD DAY, IT'S CURRENTLY\";\n  iconDay(\"fa-sun\");\n  bodyContainer.style = \"background-image: url(https://www.wallpaperimageshd.com/uploads/2019/05/dark-mountain-nature.jpg);\";\n} else {\n  document.querySelector(\"#mainGreetings\").innerHTML = \"GOOD NIGTH, IT'S CURRENTLY\";\n  iconDay(\"fa-moon\");\n  bodyContainer.style = \"background-image:url(https://i2.wp.com/wallpapershome.com/images/wallpapers/night-sky-3840x2160-5k-4k-wallpaper-stars-mountains-bridge-new-zealand-547.jpg); \";\n}\n\nfunction iconDay(data) {\n  let mainGreetingsIcon = document.createElement(\"i\");\n  mainGreetingsIcon.className = `fas ${data}`;\n  document.getElementById(\"mainGreetingsContainer\").appendChild(mainGreetingsIcon);\n}\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/greetings.js?");

/***/ }),

/***/ "./src/javaScript/location.js":
/*!************************************!*\
  !*** ./src/javaScript/location.js ***!
  \************************************/
/***/ (() => {

eval("const messageError = document.querySelector(\"#messageError\");\nconst headerLocation = document.querySelector(\"#headerLocation\");\nheaderLocation.addEventListener(\"click\", () => {\n  localion();\n});\n\nfunction localion() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(positionNow, Error);\n    messageError.innerHTML = ` `;\n  } else {\n    messageError.innerHTML = `\n        <p class=\"locationError\">Geolocation is not supported by this browser.</p>\n        `;\n  }\n}\n\nasync function positionNow(position) {\n  console.log(position.coords.latitude);\n  console.log(position.coords.longitude);\n\n  try {\n    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7daaca17f73b8537056bf2d813d49c18`);\n    const data = await res.json();\n    console.log(data);\n    let weatherNivel = document.querySelector(\"#weatherNivel\");\n    weatherNivel.innerHTML = `\n          <p>${Math.floor(data.current.temp - 273.15)}<span>°C</span></p>\n          <p class=\"weatherNivelCountry\">${data.timezone}</p>\n          `; //catch\n  } catch (error) {\n    messageError.innerHTML = `\n      <p class=\"locationError\">Cannot to connect in this moment, try after. Thanks for use our service.</p>\n      `;\n  }\n}\n\nfunction Error(error) {\n  switch (error.code) {\n    case error.PERMISSION_DENIED:\n      messageError.innerHTML = `\n      <p class=\"locationError\">User denied the request for Geolocation.</p>\n      `;\n      break;\n\n    case error.POSITION_UNAVAILABLE:\n      messageError.innerHTML = `\n      <p class=\"locationError\">Location information is unavailable.</p>\n      `;\n      break;\n\n    case error.TIMEOUT:\n      messageError.innerHTML = `\n      <p class=\"locationError\">The request to get user location timed out.</p>\n      `;\n      break;\n\n    case error.UNKNOWN_ERROR:\n      messageError.innerHTML = `\n      <p class=\"locationError\">An unknown error occurred.</p>\n      `;\n      break;\n  }\n} //More information\n\n\nfunction more(dataMore) {}\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/location.js?");

/***/ }),

/***/ "./src/javaScript/moreInfo.js":
/*!************************************!*\
  !*** ./src/javaScript/moreInfo.js ***!
  \************************************/
/***/ (() => {

eval("const moreButton = document.querySelector(\".moreButton\");\nconst mainMore = document.querySelector(\".mainMore\");\nconst arrowUp = document.querySelector(\".fa-arrow-circle-up \");\nconst arrowDown = document.querySelector(\".fa-arrow-circle-down \");\nmoreButton.addEventListener(\"click\", () => {\n  mainMore.classList.toggle(\"displayNone\");\n  arrowUp.classList.toggle(\"displayNone\");\n  arrowDown.classList.toggle(\"displayNone\");\n});\n\n//# sourceURL=webpack://weatherapp-challenge/./src/javaScript/moreInfo.js?");

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