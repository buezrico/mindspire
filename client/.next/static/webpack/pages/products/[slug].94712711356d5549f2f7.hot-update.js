webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./src/pages/products/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/products/[slug].tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products.json */ \"./src/products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ \"./src/products.json\", 1);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/urls */ \"./src/utils/urls.tsx\");\n\n\nvar _jsxFileName = \"/home/buez/Desktop/projects/mindspire/client/src/pages/products/[slug].tsx\",\n    _this = undefined;\n\n\n\n\n\nvar product = _products_json__WEBPACK_IMPORTED_MODULE_3__[0];\n\nvar ProductComp = function ProductComp() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: product.meta_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 32\n      }, _this), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: product.meta_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"course\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_4__[\"fromImageToUrl\"])(product.image),\n        className: \"img-fluid\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"course-details mt-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          className: \"text-secondary mt-3 mb-0\",\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"d-block mb-2\",\n          children: product.meta_title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"desc text-justify\",\n          children: product.meta_description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            className: \"text-danger d-block mt-2 mb-2\",\n            children: [\"\\u20A6\", product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn-primary btn btn-enroll rounded text-center w-100\",\n          children: \"Enroll Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: product.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ProductComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductComp);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductComp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS50c3g/YThkZCJdLCJuYW1lcyI6WyJwcm9kdWN0IiwicHJvZHVjdHMiLCJQcm9kdWN0Q29tcCIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQywyQ0FBUSxDQUFDLENBQUQsQ0FBeEI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsaUJBQ0dGLE9BQU8sQ0FBQ0csVUFBUixpQkFBc0I7QUFBQSxrQkFBUUgsT0FBTyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHpCLEVBR0dILE9BQU8sQ0FBQ0ksZ0JBQVIsaUJBQ0M7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVKLE9BQU8sQ0FBQ0k7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBU0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQyxrRUFBYyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FBeEI7QUFBeUMsaUJBQVMsRUFBQyxXQUFuRDtBQUErRCxXQUFHLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsZ0NBQ0U7QUFBUSxtQkFBUyxFQUFDLDBCQUFsQjtBQUFBLG9CQUE4Q04sT0FBTyxDQUFDTztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBTyxtQkFBUyxFQUFDLGNBQWpCO0FBQUEsb0JBQWlDUCxPQUFPLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFPLG1CQUFTLEVBQUMsbUJBQWpCO0FBQUEsb0JBQ0dILE9BQU8sQ0FBQ0k7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBT0U7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUMsK0JBQWxCO0FBQUEsaUNBQ1VKLE9BQU8sQ0FBQ1EsS0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVlFO0FBQVEsbUJBQVMsRUFBQyxzREFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFlRTtBQUFBLG9CQUFJUixPQUFPLENBQUNTO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWpDRDs7S0FBTVAsVztBQW1DU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3Byb2R1Y3RzLmpzb25cIjtcbmltcG9ydCB7IGZyb21JbWFnZVRvVXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VybHNcIjtcbmNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1swXTtcblxuY29uc3QgUHJvZHVjdENvbXAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHtwcm9kdWN0Lm1ldGFfdGl0bGUgJiYgPHRpdGxlPntwcm9kdWN0Lm1ldGFfdGl0bGV9PC90aXRsZT59XG5cbiAgICAgICAge3Byb2R1Y3QubWV0YV9kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9ufT48L21ldGE+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlXCI+XG4gICAgICAgIDxpbWcgc3JjPXtmcm9tSW1hZ2VUb1VybChwcm9kdWN0LmltYWdlKX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtZGV0YWlscyBtdC0yXCI+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBtdC0zIG1iLTBcIj57cHJvZHVjdC5uYW1lfTwvc3Ryb25nPlxuXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImQtYmxvY2sgbWItMlwiPntwcm9kdWN0Lm1ldGFfdGl0bGV9PC9zbWFsbD5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZGVzYyB0ZXh0LWp1c3RpZnlcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGQtYmxvY2sgbXQtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICYjODM1ODt7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBidG4gYnRuLWVucm9sbCByb3VuZGVkIHRleHQtY2VudGVyIHctMTAwXCI+XG4gICAgICAgICAgICBFbnJvbGwgTm93XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHA+e3Byb2R1Y3QuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb21wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products/[slug].tsx\n");

/***/ }),

/***/ "./src/utils/urls.tsx":
/*!****************************!*\
  !*** ./src/utils/urls.tsx ***!
  \****************************/
/*! exports provided: API_URL, fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\nvar API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\n/**\n * Given an Image return the Url\n * Works for local and deployed strapis\n * @param {any } image\n */\n\nvar fromImageToUrl = function fromImageToUrl(image) {\n  if (!image) {\n    return \"/vercel.svg\";\n  }\n\n  if (image.url.indexOf(\"/\") === 0) {\n    return \"\".concat(API_URL).concat(image.url);\n  }\n\n  return image.url;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VybHMudHN4PzgyNmYiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsInVybCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLE9BQU8sR0FDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFEOUI7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZDLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsV0FBTyxhQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBSyxDQUFDQyxHQUFOLENBQVVDLE9BQVYsQ0FBa0IsR0FBbEIsTUFBMkIsQ0FBL0IsRUFBa0M7QUFDaEMscUJBQVVQLE9BQVYsU0FBb0JLLEtBQUssQ0FBQ0MsR0FBMUI7QUFDRDs7QUFFRCxTQUFPRCxLQUFLLENBQUNDLEdBQWI7QUFDRCxDQVZNIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL3VybHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbi8qKlxuICogR2l2ZW4gYW4gSW1hZ2UgcmV0dXJuIHRoZSBVcmxcbiAqIFdvcmtzIGZvciBsb2NhbCBhbmQgZGVwbG95ZWQgc3RyYXBpc1xuICogQHBhcmFtIHthbnkgfSBpbWFnZVxuICovXG5leHBvcnQgY29uc3QgZnJvbUltYWdlVG9VcmwgPSAoaW1hZ2UpID0+IHtcbiAgaWYgKCFpbWFnZSkge1xuICAgIHJldHVybiBcIi92ZXJjZWwuc3ZnXCI7XG4gIH1cblxuICBpZiAoaW1hZ2UudXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgcmV0dXJuIGAke0FQSV9VUkx9JHtpbWFnZS51cmx9YDtcbiAgfVxuXG4gIHJldHVybiBpbWFnZS51cmw7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/urls.tsx\n");

/***/ })

})