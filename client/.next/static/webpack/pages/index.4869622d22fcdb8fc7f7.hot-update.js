webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CoursesComp.tsx":
/*!****************************************!*\
  !*** ./src/components/CoursesComp.tsx ***!
  \****************************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/urls */ \"./src/utils/urls.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/home/buez/Desktop/projects/mindspire/client/src/components/CoursesComp.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // import products from \"../products.json\";\n\n\n\n\nvar CoursesComp = function CoursesComp(_ref) {\n  var products = _ref.products;\n  // slider: any;\n  // products: any;\n  // constructor(props) {\n  //   super(props);\n  var slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(); // }\n  // render() {\n\n  var settings = {\n    className: \"center\",\n    // centerMode: true,\n    infinite: true,\n    // centerPadding: \"5rem\",\n    slidesToShow: 4,\n    speed: 500,\n    arrows: true,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        // slidesToScroll: 1,\n        infinite: true // dots: true,\n\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        // slidesToScroll: 1,\n        initialSlide: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1 // slidesToScroll: 1,\n\n      }\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"courses\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({\n        ref: slider\n      }, settings), {}, {\n        children: [\"TypeError: products.map is not a function\", products.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/products/\".concat(product.name),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n                className: \"course\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n                  src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"fromImageToUrl\"])(product.image),\n                  className: \"img-fluid\",\n                  alt: \"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n                  className: \"course-details mt-2\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"strong\", {\n                    className: \"text-secondary mt-3 mb-0\",\n                    children: product.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    className: \"d-block mb-2\",\n                    children: product.meta_title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    className: \"desc text-justify\",\n                    children: product.meta_description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"strong\", {\n                      className: \"text-danger d-block mt-2 mb-2\",\n                      children: [\"\\u20A6\", product.price]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n                    className: \"btn-primary btn btn-enroll rounded text-center w-100\",\n                    children: \"Enroll Now\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 19\n                }, _this)]\n              }, product.id, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this);\n        })]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CoursesComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursesComp);\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var product_res, products;\n    return _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"API_URL\"], \"/products/\"));\n\n          case 2:\n            product_res = _context.sent;\n            products = product_res.json();\n            return _context.abrupt(\"return\", {\n              props: {\n                products: products\n              }\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"CoursesComp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291cnNlc0NvbXAudHN4PzQ1Y2UiXSwibmFtZXMiOlsiQ291cnNlc0NvbXAiLCJwcm9kdWN0cyIsInNsaWRlciIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsImZyb21JbWFnZVRvVXJsIiwiaW1hZ2UiLCJtZXRhX3RpdGxlIiwibWV0YV9kZXNjcmlwdGlvbiIsInByaWNlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwiQVBJX1VSTCIsInByb2R1Y3RfcmVzIiwianNvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcEM7QUFDQTtBQUVBO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWYsQ0FOb0MsQ0FPcEM7QUFFQTs7QUFDQSxNQUFNQyxRQUFhLEdBQUc7QUFDcEJDLGFBQVMsRUFBRSxRQURTO0FBRXBCO0FBQ0FDLFlBQVEsRUFBRSxJQUhVO0FBSXBCO0FBQ0FDLGdCQUFZLEVBQUUsQ0FMTTtBQU1wQkMsU0FBSyxFQUFFLEdBTmE7QUFPcEJDLFVBQU0sRUFBRSxJQVBZO0FBUXBCQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVAsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSO0FBQ0FELGdCQUFRLEVBQUUsSUFIRixDQUlSOztBQUpRO0FBRlosS0FEVSxFQVVWO0FBQ0VLLGdCQUFVLEVBQUUsR0FEZDtBQUVFUCxjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVI7QUFDQUssb0JBQVksRUFBRTtBQUhOO0FBRlosS0FWVSxFQWtCVjtBQUNFRCxnQkFBVSxFQUFFLEdBRGQ7QUFFRVAsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETixDQUVSOztBQUZRO0FBRlosS0FsQlU7QUFSUSxHQUF0QjtBQW9DQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDRSxxRUFBQyxrREFBRDtBQUFRLFdBQUcsRUFBRU47QUFBYixTQUF5QkcsUUFBekI7QUFBQSxnRUFFR0osUUFBUSxDQUFDYSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDhCQUNaLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksc0JBQWVBLE9BQU8sQ0FBQ0MsSUFBdkIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx3Q0FDRTtBQUNFLHFCQUFHLEVBQUVDLGtFQUFjLENBQUNGLE9BQU8sQ0FBQ0csS0FBVCxDQURyQjtBQUVFLDJCQUFTLEVBQUMsV0FGWjtBQUdFLHFCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUU7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEsMENBQ0U7QUFBUSw2QkFBUyxFQUFDLDBCQUFsQjtBQUFBLDhCQUNHSCxPQUFPLENBQUNDO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUtFO0FBQU8sNkJBQVMsRUFBQyxjQUFqQjtBQUFBLDhCQUFpQ0QsT0FBTyxDQUFDSTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBTUU7QUFBTyw2QkFBUyxFQUFDLG1CQUFqQjtBQUFBLDhCQUNHSixPQUFPLENBQUNLO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORixlQVNFO0FBQUEsMkNBQ0U7QUFBUSwrQkFBUyxFQUFDLCtCQUFsQjtBQUFBLDJDQUNVTCxPQUFPLENBQUNNLEtBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEYsZUFjRTtBQUFRLDZCQUFTLEVBQUMsc0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBLGlCQUE2Qk4sT0FBTyxDQUFDTyxFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQXRGRDs7S0FBTXRCLFc7QUF3RlNBLDBFQUFmO0FBRU8sU0FBZXVCLGNBQXRCO0FBQUE7QUFBQTs7OzJWQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3FCQyxLQUFLLFdBQUlDLG1EQUFKLGdCQUQxQjs7QUFBQTtBQUNDQyx1QkFERDtBQUVDekIsb0JBRkQsR0FFWXlCLFdBQVcsQ0FBQ0MsSUFBWixFQUZaO0FBQUEsNkNBSUU7QUFDTEMsbUJBQUssRUFBRTtBQUNMM0Isd0JBQVEsRUFBUkE7QUFESztBQURGLGFBSkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdXJzZXNDb21wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3Byb2R1Y3RzLmpzb25cIjtcbmltcG9ydCB7IGZyb21JbWFnZVRvVXJsLCBBUElfVVJMIH0gZnJvbSBcIi4uL3V0aWxzL3VybHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ291cnNlc0NvbXAgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIC8vIHNsaWRlcjogYW55O1xuICAvLyBwcm9kdWN0czogYW55O1xuXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIC8vICAgc3VwZXIocHJvcHMpO1xuICBjb25zdCBzbGlkZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgLy8gfVxuXG4gIC8vIHJlbmRlcigpIHtcbiAgY29uc3Qgc2V0dGluZ3M6IGFueSA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXG4gICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyBjZW50ZXJQYWRkaW5nOiBcIjVyZW1cIixcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAvLyBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBkb3RzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAvLyBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIC8vIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlc1wiPlxuICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIFR5cGVFcnJvcjogcHJvZHVjdHMubWFwIGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QubmFtZX1gfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2Zyb21JbWFnZVRvVXJsKHByb2R1Y3QuaW1hZ2UpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLWRldGFpbHMgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IG10LTMgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTJcIj57cHJvZHVjdC5tZXRhX3RpdGxlfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJkZXNjIHRleHQtanVzdGlmeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGQtYmxvY2sgbXQtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAmIzgzNTg7e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYnRuIGJ0bi1lbnJvbGwgcm91bmRlZCB0ZXh0LWNlbnRlciB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEVucm9sbCBOb3dcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlc0NvbXA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcHJvZHVjdF9yZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wcm9kdWN0cy9gKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0X3Jlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CoursesComp.tsx\n");

/***/ })

})