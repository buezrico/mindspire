webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/urls.tsx":
/*!****************************!*\
  !*** ./src/utils/urls.tsx ***!
  \****************************/
/*! exports provided: fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\n// export const API_URL = \"http://localhost:1337\";\n\n/**\n * Given an Image return the Url\n * Works for local and deployed strapis\n * @param {any } image\n */\nvar fromImageToUrl = function fromImageToUrl(image) {\n  if (!image) {\n    return \"/vercel.svg\";\n  } //   if (image.url.indexOf(\"/\") === 0) {\n  //     return `${}${image.url}`;\n  //   }\n\n\n  return image.url;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VybHMudHN4PzgyNmYiXSwibmFtZXMiOlsiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUN2QyxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU8sYUFBUDtBQUNELEdBSHNDLENBS3ZDO0FBQ0E7QUFDQTs7O0FBRUEsU0FBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQ0QsQ0FWTSIsImZpbGUiOiIuL3NyYy91dGlscy91cmxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcblxuLyoqXG4gKiBHaXZlbiBhbiBJbWFnZSByZXR1cm4gdGhlIFVybFxuICogV29ya3MgZm9yIGxvY2FsIGFuZCBkZXBsb3llZCBzdHJhcGlzXG4gKiBAcGFyYW0ge2FueSB9IGltYWdlXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSW1hZ2VUb1VybCA9IChpbWFnZSkgPT4ge1xuICBpZiAoIWltYWdlKSB7XG4gICAgcmV0dXJuIFwiL3ZlcmNlbC5zdmdcIjtcbiAgfVxuXG4gIC8vICAgaWYgKGltYWdlLnVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuICAvLyAgICAgcmV0dXJuIGAke30ke2ltYWdlLnVybH1gO1xuICAvLyAgIH1cblxuICByZXR1cm4gaW1hZ2UudXJsO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/urls.tsx\n");

/***/ })

})