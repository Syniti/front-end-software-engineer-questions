"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/photo/page",{

/***/ "(app-pages-browser)/./src/app/photo/component/PhotoList.tsx":
/*!***********************************************!*\
  !*** ./src/app/photo/component/PhotoList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PhotoList: function() { return /* binding */ PhotoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=XMarkIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n\n\n\n\nconst PhotoList = (param)=>{\n    let { image } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group-hover:opacity-75\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 100,\n                        height: 100,\n                        src: image.imageSrc,\n                        alt: image.imageAlt,\n                        className: \"h-full w-full object-cover object-center\"\n                    }, void 0, false, {\n                        fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 right-0 m-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            color: \"red\",\n                            width: 25,\n                            onClick: ()=>{\n                                handleDelete(im);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: image.href,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-50 text-white text-center text-sm\",\n                    children: image.name\n                }, void 0, false, {\n                    fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, undefined)\n            }, image.id, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ajackus/Documents/syniti/src/app/photo/component/PhotoList.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PhotoList;\nvar _c;\n$RefreshReg$(_c, \"PhotoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGhvdG8vY29tcG9uZW50L1Bob3RvTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNOO0FBRStCO0FBRWpELE1BQU1HLFlBQVk7UUFBQyxFQUFDQyxLQUFLLEVBQWdCO0lBQzlDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTixrREFBS0E7d0JBQ0pPLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUtMLE1BQU1NLFFBQVE7d0JBQ25CQyxLQUFLUCxNQUFNUSxRQUFRO3dCQUNuQk4sV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ0osbUdBQVNBOzRCQUFDVyxPQUFNOzRCQUFNTixPQUFPOzRCQUFJTyxTQUFTO2dDQUFLQyxhQUFhQzs0QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xFLDhEQUFDQztnQkFBaUJDLE1BQU1kLE1BQU1jLElBQUk7Z0JBQUVDLFFBQU87MEJBQzdDLDRFQUFDQztvQkFBR2QsV0FBVTs4QkFBaUdGLE1BQU1pQixJQUFJOzs7Ozs7ZUFEL0dqQixNQUFNa0IsRUFBRTs7Ozs7Ozs7Ozs7QUFLdEIsRUFBQztLQXJCWW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGhvdG8vY29tcG9uZW50L1Bob3RvTGlzdC50c3g/YzRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJUGhvdG8gfSBmcm9tICcuLi9kYXRhL21vZGVsJztcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5cbmV4cG9ydCBjb25zdCBQaG90b0xpc3QgPSAoe2ltYWdlfTp7aW1hZ2U6SVBob3RvfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1oLTEgYXNwZWN0LXctMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LWgtOCB4bDphc3BlY3Qtdy03IGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgc3JjPXtpbWFnZS5pbWFnZVNyY31cbiAgICAgICAgYWx0PXtpbWFnZS5pbWFnZUFsdH1cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG0tMiB6LTEwIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgIHsvKiBEZWxldGUgSWNvbiAqL31cbiAgICAgICAgPFhNYXJrSWNvbiBjb2xvcj0ncmVkJyB3aWR0aD17MjV9IG9uQ2xpY2s9eygpPT57aGFuZGxlRGVsZXRlKGltKX19Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YSBrZXk9e2ltYWdlLmlkfSBocmVmPXtpbWFnZS5ocmVmfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHAtMiBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPntpbWFnZS5uYW1lfTwvaDM+XG4gIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiWE1hcmtJY29uIiwiUGhvdG9MaXN0IiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlU3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJjb2xvciIsIm9uQ2xpY2siLCJoYW5kbGVEZWxldGUiLCJpbSIsImEiLCJocmVmIiwidGFyZ2V0IiwiaDMiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/photo/component/PhotoList.tsx\n"));

/***/ })

});