module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/products/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/products/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/products/[slug].tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products.json */ \"./src/products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ \"./src/products.json\", 1);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/urls */ \"./src/utils/urls.tsx\");\n\nvar _jsxFileName = \"/home/buez/Desktop/projects/mindspire/client/src/pages/products/[slug].tsx\";\n\n\n\n\nconst product = _products_json__WEBPACK_IMPORTED_MODULE_3__[0];\n\nconst ProductComp = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: product.meta_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 32\n      }, undefined), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: product.meta_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"course\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_4__[\"fromImageToUrl\"])(product.image),\n        className: \"img-fluid\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"course-details mt-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          className: \"text-secondary mt-3 mb-0\",\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"d-block mb-2\",\n          children: product.meta_title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"desc text-justify\",\n          children: product.meta_description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            className: \"text-danger d-block mt-2 mb-2\",\n            children: [\"\\u20A6\", product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn-primary btn btn-enroll rounded text-center w-100\",\n          children: \"Enroll Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: product.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductComp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeD9hOGRkIl0sIm5hbWVzIjpbInByb2R1Y3QiLCJwcm9kdWN0cyIsIlByb2R1Y3RDb21wIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJmcm9tSW1hZ2VUb1VybCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxPQUFPLEdBQUdDLDJDQUFRLENBQUMsQ0FBRCxDQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsaUJBQ0dGLE9BQU8sQ0FBQ0csVUFBUixpQkFBc0I7QUFBQSxrQkFBUUgsT0FBTyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR6QixFQUdHSCxPQUFPLENBQUNJLGdCQUFSLGlCQUNDO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFSixPQUFPLENBQUNJO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQyxrRUFBYyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FBeEI7QUFBeUMsaUJBQVMsRUFBQyxXQUFuRDtBQUErRCxXQUFHLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQywwQkFBbEI7QUFBQSxvQkFBOENOLE9BQU8sQ0FBQ087QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQU8sbUJBQVMsRUFBQyxjQUFqQjtBQUFBLG9CQUFpQ1AsT0FBTyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBTyxtQkFBUyxFQUFDLG1CQUFqQjtBQUFBLG9CQUNHSCxPQUFPLENBQUNJO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQU9FO0FBQUEsaUNBQ0U7QUFBUSxxQkFBUyxFQUFDLCtCQUFsQjtBQUFBLGlDQUNVSixPQUFPLENBQUNRLEtBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFZRTtBQUFRLG1CQUFTLEVBQUMsc0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLGVBZUU7QUFBQSxvQkFBSVIsT0FBTyxDQUFDUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdDRCxDQWpDRDs7QUFtQ2VQLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBmcm9tSW1hZ2VUb1VybCB9IGZyb20gXCIuLi8uLi91dGlscy91cmxzXCI7XG5jb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNbMF07XG5cbmNvbnN0IFByb2R1Y3RDb21wID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7cHJvZHVjdC5tZXRhX3RpdGxlICYmIDx0aXRsZT57cHJvZHVjdC5tZXRhX3RpdGxlfTwvdGl0bGU+fVxuXG4gICAgICAgIHtwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb2R1Y3QubWV0YV9kZXNjcmlwdGlvbn0+PC9tZXRhPlxuICAgICAgICApfVxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZVwiPlxuICAgICAgICA8aW1nIHNyYz17ZnJvbUltYWdlVG9VcmwocHJvZHVjdC5pbWFnZSl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLWRldGFpbHMgbXQtMlwiPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgbXQtMyBtYi0wXCI+e3Byb2R1Y3QubmFtZX08L3N0cm9uZz5cblxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTJcIj57cHJvZHVjdC5tZXRhX3RpdGxlfTwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRlc2MgdGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBkLWJsb2NrIG10LTIgbWItMlwiPlxuICAgICAgICAgICAgICAmIzgzNTg7e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYnRuIGJ0bi1lbnJvbGwgcm91bmRlZCB0ZXh0LWNlbnRlciB3LTEwMFwiPlxuICAgICAgICAgICAgRW5yb2xsIE5vd1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwPntwcm9kdWN0LmNvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29tcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products/[slug].tsx\n");

/***/ }),

/***/ "./src/products.json":
/*!***************************!*\
  !*** ./src/products.json ***!
  \***************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"name\\\":\\\"Get It Right\\\",\\\"content\\\":\\\"Get it right course available on mindspire. Learn how to get things right.\\\",\\\"meta_description\\\":\\\"Get it right course for old teachers\\\",\\\"meta_title\\\":\\\"get it right course I\\\",\\\"price\\\":49.99,\\\"slug\\\":\\\"get-it-right\\\",\\\"published_at\\\":\\\"2021-05-18T21:46:10.860Z\\\",\\\"created_at\\\":\\\"2021-05-18T21:45:14.173Z\\\",\\\"updated_at\\\":\\\"2021-05-18T21:46:10.888Z\\\",\\\"image\\\":{\\\"id\\\":1,\\\"name\\\":\\\"course5.png\\\",\\\"alternativeText\\\":\\\"\\\",\\\"caption\\\":\\\"\\\",\\\"width\\\":259,\\\"height\\\":194,\\\"formats\\\":{\\\"thumbnail\\\":{\\\"name\\\":\\\"thumbnail_course5.png\\\",\\\"hash\\\":\\\"thumbnail_course5_a47d045f7c\\\",\\\"ext\\\":\\\".png\\\",\\\"mime\\\":\\\"image/png\\\",\\\"width\\\":208,\\\"height\\\":156,\\\"size\\\":10.66,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/thumbnail_course5_a47d045f7c.png\\\"}},\\\"hash\\\":\\\"course5_a47d045f7c\\\",\\\"ext\\\":\\\".png\\\",\\\"mime\\\":\\\"image/png\\\",\\\"size\\\":11.49,\\\"url\\\":\\\"/uploads/course5_a47d045f7c.png\\\",\\\"previewUrl\\\":null,\\\"provider\\\":\\\"local\\\",\\\"provider_metadata\\\":null,\\\"created_at\\\":\\\"2021-05-18T21:41:17.490Z\\\",\\\"updated_at\\\":\\\"2021-05-18T21:41:17.506Z\\\"}},{\\\"id\\\":2,\\\"name\\\":\\\"Career Path\\\",\\\"content\\\":\\\"Build a successful Career as a Teacher  \\\",\\\"meta_description\\\":\\\"Career Path course available on Mindspire\\\",\\\"meta_title\\\":\\\"Career Path course for teachers\\\",\\\"price\\\":250,\\\"slug\\\":\\\"career-path\\\",\\\"published_at\\\":\\\"2021-05-18T21:48:31.736Z\\\",\\\"created_at\\\":\\\"2021-05-18T21:48:29.090Z\\\",\\\"updated_at\\\":\\\"2021-05-18T21:48:31.762Z\\\",\\\"image\\\":{\\\"id\\\":3,\\\"name\\\":\\\"course1.png\\\",\\\"alternativeText\\\":\\\"\\\",\\\"caption\\\":\\\"\\\",\\\"width\\\":534,\\\"height\\\":302,\\\"formats\\\":{\\\"thumbnail\\\":{\\\"name\\\":\\\"thumbnail_course1.png\\\",\\\"hash\\\":\\\"thumbnail_course1_22bf5001bb\\\",\\\"ext\\\":\\\".png\\\",\\\"mime\\\":\\\"image/png\\\",\\\"width\\\":245,\\\"height\\\":139,\\\"size\\\":91.51,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/thumbnail_course1_22bf5001bb.png\\\"},\\\"small\\\":{\\\"name\\\":\\\"small_course1.png\\\",\\\"hash\\\":\\\"small_course1_22bf5001bb\\\",\\\"ext\\\":\\\".png\\\",\\\"mime\\\":\\\"image/png\\\",\\\"width\\\":500,\\\"height\\\":283,\\\"size\\\":358.13,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/small_course1_22bf5001bb.png\\\"}},\\\"hash\\\":\\\"course1_22bf5001bb\\\",\\\"ext\\\":\\\".png\\\",\\\"mime\\\":\\\"image/png\\\",\\\"size\\\":282.51,\\\"url\\\":\\\"/uploads/course1_22bf5001bb.png\\\",\\\"previewUrl\\\":null,\\\"provider\\\":\\\"local\\\",\\\"provider_metadata\\\":null,\\\"created_at\\\":\\\"2021-05-18T21:46:46.635Z\\\",\\\"updated_at\\\":\\\"2021-05-18T21:46:46.655Z\\\"}}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wcm9kdWN0cy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/products.json\n");

/***/ }),

/***/ "./src/utils/urls.tsx":
/*!****************************!*\
  !*** ./src/utils/urls.tsx ***!
  \****************************/
/*! exports provided: API_URL, fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\nconst API_URL = \"http://localhost:1337\";\n/**\n * Given an Image return the Url\n * Works for local and deployed strapis\n * @param {any } image\n */\n\nconst fromImageToUrl = image => {\n  if (!image) {\n    return \"/vercel.svg\";\n  }\n\n  if (image.url.indexOf(\"/\") === 0) {\n    return `${API_URL}${image.url}`;\n  }\n\n  return image.url;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXJscy50c3g/ODI2ZiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsInVybCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyx1QkFBaEI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUFXO0FBQ3ZDLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsV0FBTyxhQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBSyxDQUFDQyxHQUFOLENBQVVDLE9BQVYsQ0FBa0IsR0FBbEIsTUFBMkIsQ0FBL0IsRUFBa0M7QUFDaEMsV0FBUSxHQUFFSixPQUFRLEdBQUVFLEtBQUssQ0FBQ0MsR0FBSSxFQUE5QjtBQUNEOztBQUVELFNBQU9ELEtBQUssQ0FBQ0MsR0FBYjtBQUNELENBVk0iLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXJscy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbi8qKlxuICogR2l2ZW4gYW4gSW1hZ2UgcmV0dXJuIHRoZSBVcmxcbiAqIFdvcmtzIGZvciBsb2NhbCBhbmQgZGVwbG95ZWQgc3RyYXBpc1xuICogQHBhcmFtIHthbnkgfSBpbWFnZVxuICovXG5leHBvcnQgY29uc3QgZnJvbUltYWdlVG9VcmwgPSAoaW1hZ2UpID0+IHtcbiAgaWYgKCFpbWFnZSkge1xuICAgIHJldHVybiBcIi92ZXJjZWwuc3ZnXCI7XG4gIH1cblxuICBpZiAoaW1hZ2UudXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgcmV0dXJuIGAke0FQSV9VUkx9JHtpbWFnZS51cmx9YDtcbiAgfVxuXG4gIHJldHVybiBpbWFnZS51cmw7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/urls.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });