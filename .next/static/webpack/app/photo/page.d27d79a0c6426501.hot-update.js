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

/***/ "(app-pages-browser)/./src/app/photo/page.tsx":
/*!********************************!*\
  !*** ./src/app/photo/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Photo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_PhotoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/PhotoList */ \"(app-pages-browser)/./src/app/photo/component/PhotoList.tsx\");\n/* harmony import */ var _data_mockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/mockData */ \"(app-pages-browser)/./src/app/photo/data/mockData.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Photo() {\n    _s();\n    const [images, seiImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_mockData__WEBPACK_IMPORTED_MODULE_3__.sampleImages);\n    const handleDelete = (id)=>{\n        setEmails(images.filter((e)=>!selectedPeople.includes(e)));\n        setSelectedPeople([]);\n        setSelectAllChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-3xl text-bold\",\n                children: [\n                    \"Photos (\",\n                    images.length,\n                    \" items)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/photo/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                    children: images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_PhotoList__WEBPACK_IMPORTED_MODULE_2__.PhotoList, {\n                            image: image\n                        }, image.id, false, {\n                            fileName: \"/home/ajackus/Documents/syniti/src/app/photo/page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/ajackus/Documents/syniti/src/app/photo/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/photo/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ajackus/Documents/syniti/src/app/photo/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Photo, \"rdFMCdcS27e9hkT2h4nEr0mLGbU=\");\n_c = Photo;\nvar _c;\n$RefreshReg$(_c, \"Photo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGhvdG8vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDVTtBQUNIO0FBR2hDLFNBQVNJOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVdFLHdEQUFZQTtJQUczRCxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCQyxVQUFVSixPQUFPSyxNQUFNLENBQUMsQ0FBQ0MsSUFBTSxDQUFDQyxlQUFlQyxRQUFRLENBQUNGO1FBQ3hERyxrQkFBa0IsRUFBRTtRQUNwQkMsb0JBQW9CO0lBQ3RCO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTs7b0JBQXFCO29CQUFTWixPQUFPYyxNQUFNO29CQUFDOzs7Ozs7OzBCQUM1RCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaWixPQUFPZSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNuQiwyREFBU0E7NEJBQWdCbUIsT0FBT0E7MkJBQWpCQSxNQUFNYixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F0QndCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Bob3RvL3BhZ2UudHN4P2JjMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBob3RvTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudC9QaG90b0xpc3RcIjtcbmltcG9ydCB7IHNhbXBsZUltYWdlcyB9IGZyb20gXCIuL2RhdGEvbW9ja0RhdGFcIjtcbmltcG9ydCB7IElQaG90byB9IGZyb20gXCIuL2RhdGEvbW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG8oKSB7XG4gICAgY29uc3QgW2ltYWdlcywgc2VpSW1hZ2VzXSA9IHVzZVN0YXRlPElQaG90b1tdPihzYW1wbGVJbWFnZXMpO1xuXG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6c3RyaW5nKSA9PiB7XG4gICAgICBzZXRFbWFpbHMoaW1hZ2VzLmZpbHRlcigoZSkgPT4gIXNlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKGUpKSk7XG4gICAgICBzZXRTZWxlY3RlZFBlb3BsZShbXSk7XG4gICAgICBzZXRTZWxlY3RBbGxDaGVja2VkKGZhbHNlKTsgXG4gICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtYm9sZFwiPlBob3RvcyAoe2ltYWdlcy5sZW5ndGh9IGl0ZW1zKTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHgtNCBweS0xNiBzbTpweC02IHNtOnB5LTI0IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2U6IElQaG90bykgPT4gKFxuICAgICAgICAgICAgPFBob3RvTGlzdCBrZXk9e2ltYWdlLmlkfSBpbWFnZT17aW1hZ2V9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBob3RvTGlzdCIsInNhbXBsZUltYWdlcyIsIlBob3RvIiwiaW1hZ2VzIiwic2VpSW1hZ2VzIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzZXRFbWFpbHMiLCJmaWx0ZXIiLCJlIiwic2VsZWN0ZWRQZW9wbGUiLCJpbmNsdWRlcyIsInNldFNlbGVjdGVkUGVvcGxlIiwic2V0U2VsZWN0QWxsQ2hlY2tlZCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJsZW5ndGgiLCJtYXAiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/photo/page.tsx\n"));

/***/ })

});