webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CoursesComp.tsx":
/*!****************************************!*\
  !*** ./src/components/CoursesComp.tsx ***!
  \****************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_strapi_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/strapi-client */ \"./src/lib/strapi-client.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/buez/Desktop/projects/mindspire/client/src/components/CoursesComp.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar CoursesComp = function CoursesComp(_ref) {\n  var course = _ref.course;\n  console.log(course); // slider: any;\n  // products: any;\n  // constructor(props) {\n  //   super(props);\n\n  var slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(); // }\n  // render() {\n\n  var settings = {\n    className: \"center\",\n    // centerMode: true,\n    infinite: true,\n    // centerPadding: \"5rem\",\n    slidesToShow: 4,\n    speed: 500,\n    arrows: true,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        // slidesToScroll: 1,\n        infinite: true // dots: true,\n\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        // slidesToScroll: 1,\n        initialSlide: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1 // slidesToScroll: 1,\n\n      }\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"courses\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({\n        ref: slider\n      }, settings), {}, {\n        children: course != null && course.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/products/\".concat(product.slug),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n                className: \"course\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n                  src: product.image,\n                  className: \"img-fluid\",\n                  alt: \"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n                  className: \"course-details mt-2\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"strong\", {\n                    className: \"text-secondary mt-3 mb-0\",\n                    children: product.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    className: \"d-block mb-2\",\n                    children: product.meta_title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    className: \"desc text-justify\",\n                    children: product.meta_description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"strong\", {\n                      className: \"text-danger d-block mt-2 mb-2\",\n                      children: [\"\\u20A6\", product.price]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n                    className: \"btn-primary btn btn-enroll rounded text-center w-100\",\n                    children: \"Enroll Now\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 21\n                }, _this)]\n              }, product.id, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CoursesComp;\nvar client = new _lib_strapi_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nvar getStaticProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var courses;\n    return _home_buez_Desktop_projects_mindspire_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return client.fetchData(\"/products\");\n\n          case 2:\n            courses = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                course: courses\n              }\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStaticProps() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursesComp); // export async function getServerSideProps() {\n//   const product_res = await fetch(`${API_URL}/products/`);\n//   const products = product_res.json();\n//   console.log(products);\n//   return {\n//     props: {\n//       products,\n//     },\n//   };\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"CoursesComp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291cnNlc0NvbXAudHN4PzQ1Y2UiXSwibmFtZXMiOlsiQ291cnNlc0NvbXAiLCJjb3Vyc2UiLCJjb25zb2xlIiwibG9nIiwic2xpZGVyIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic3BlZWQiLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImluaXRpYWxTbGlkZSIsIm1hcCIsInByb2R1Y3QiLCJzbHVnIiwiaW1hZ2UiLCJuYW1lIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIiwiY2xpZW50IiwiU3RyYXBpQ2xpZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaERhdGEiLCJjb3Vyc2VzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQURrQyxDQUVsQztBQUNBO0FBRUE7QUFDQTs7QUFDQSxNQUFNRyxNQUFNLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWYsQ0FQa0MsQ0FRbEM7QUFFQTs7QUFDQSxNQUFNQyxRQUFhLEdBQUc7QUFDcEJDLGFBQVMsRUFBRSxRQURTO0FBRXBCO0FBQ0FDLFlBQVEsRUFBRSxJQUhVO0FBSXBCO0FBQ0FDLGdCQUFZLEVBQUUsQ0FMTTtBQU1wQkMsU0FBSyxFQUFFLEdBTmE7QUFPcEJDLFVBQU0sRUFBRSxJQVBZO0FBUXBCQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVAsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSO0FBQ0FELGdCQUFRLEVBQUUsSUFIRixDQUlSOztBQUpRO0FBRlosS0FEVSxFQVVWO0FBQ0VLLGdCQUFVLEVBQUUsR0FEZDtBQUVFUCxjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVI7QUFDQUssb0JBQVksRUFBRTtBQUhOO0FBRlosS0FWVSxFQWtCVjtBQUNFRCxnQkFBVSxFQUFFLEdBRGQ7QUFFRVAsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETixDQUVSOztBQUZRO0FBRlosS0FsQlU7QUFSUSxHQUF0QjtBQW9DQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDRSxxRUFBQyxrREFBRDtBQUFRLFdBQUcsRUFBRU47QUFBYixTQUF5QkcsUUFBekI7QUFBQSxrQkFDR04sTUFBTSxJQUFJLElBQVYsSUFDQ0EsTUFBTSxDQUFDZSxHQUFQLENBQVcsVUFBQ0MsT0FBRDtBQUFBLDhCQUNULHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksc0JBQWVBLE9BQU8sQ0FBQ0MsSUFBdkIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx3Q0FDRTtBQUFLLHFCQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBbEI7QUFBeUIsMkJBQVMsRUFBQyxXQUFuQztBQUErQyxxQkFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSwwQ0FDRTtBQUFRLDZCQUFTLEVBQUMsMEJBQWxCO0FBQUEsOEJBQ0dGLE9BQU8sQ0FBQ0c7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBS0U7QUFBTyw2QkFBUyxFQUFDLGNBQWpCO0FBQUEsOEJBQ0dILE9BQU8sQ0FBQ0k7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBUUU7QUFBTyw2QkFBUyxFQUFDLG1CQUFqQjtBQUFBLDhCQUNHSixPQUFPLENBQUNLO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSRixlQVdFO0FBQUEsMkNBQ0U7QUFBUSwrQkFBUyxFQUFDLCtCQUFsQjtBQUFBLDJDQUNVTCxPQUFPLENBQUNNLEtBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEYsZUFnQkU7QUFBUSw2QkFBUyxFQUFDLHNEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsaUJBQTZCTixPQUFPLENBQUNPLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVg7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQXJGRDs7S0FBTXhCLFc7QUF1Rk4sSUFBTXlCLE1BQU0sR0FBRyxJQUFJQywwREFBSixFQUFmO0FBRU8sSUFBTUMsY0FBYztBQUFBLHFWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ05GLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixXQUFqQixDQURNOztBQUFBO0FBQ3RCQyxtQkFEc0I7QUFBQSw2Q0FFckI7QUFDTEMsbUJBQUssRUFBRTtBQUNMN0Isc0JBQU0sRUFBRTRCO0FBREg7QUFERixhQUZxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkRixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCO0FBU1EzQiwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3Vyc2VzQ29tcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBmcm9tSW1hZ2VUb1VybCwgQVBJX1VSTCB9IGZyb20gXCIuLi91dGlscy91cmxzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU3RyYXBpQ2xpZW50IGZyb20gXCIuLi9saWIvc3RyYXBpLWNsaWVudFwiO1xuXG5jb25zdCBDb3Vyc2VzQ29tcCA9ICh7IGNvdXJzZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvdXJzZSk7XG4gIC8vIHNsaWRlcjogYW55O1xuICAvLyBwcm9kdWN0czogYW55O1xuXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIC8vICAgc3VwZXIocHJvcHMpO1xuICBjb25zdCBzbGlkZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgLy8gfVxuXG4gIC8vIHJlbmRlcigpIHtcbiAgY29uc3Qgc2V0dGluZ3M6IGFueSA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXG4gICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAvLyBjZW50ZXJQYWRkaW5nOiBcIjVyZW1cIixcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAvLyBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBkb3RzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAvLyBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIC8vIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlc1wiPlxuICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtjb3Vyc2UgIT0gbnVsbCAmJlxuICAgICAgICAgICAgY291cnNlLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtZGV0YWlscyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBtdC0zIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZC1ibG9jayBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5tZXRhX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRlc2MgdGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBkLWJsb2NrIG10LTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAmIzgzNTg7e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYnRuIGJ0bi1lbnJvbGwgcm91bmRlZCB0ZXh0LWNlbnRlciB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5yb2xsIE5vd1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBjbGllbnQgPSBuZXcgU3RyYXBpQ2xpZW50KCk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNsaWVudC5mZXRjaERhdGEoXCIvcHJvZHVjdHNcIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvdXJzZTogY291cnNlcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlc0NvbXA7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHByb2R1Y3RfcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcHJvZHVjdHMvYCk7XG4vLyAgIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdF9yZXMuanNvbigpO1xuLy8gICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgcHJvZHVjdHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CoursesComp.tsx\n");

/***/ })

})