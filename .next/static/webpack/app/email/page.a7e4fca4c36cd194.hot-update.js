"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/email/page",{

/***/ "(app-pages-browser)/./src/app/email/component/Email.tsx":
/*!*******************************************!*\
  !*** ./src/app/email/component/Email.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Email: function() { return /* binding */ Email; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/menu/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _barrel_optimize_names_EllipsisVerticalIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=EllipsisVerticalIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js\");\n/* harmony import */ var _app_utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/helper */ \"(app-pages-browser)/./src/app/utils/helper.ts\");\n\n\n\n\n\nconst Email = (param)=>{\n    let { email, handleDelete, selectedPeople, toggleEmailSelection } = param;\n    const redirectTo = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: selectedPeople.includes(email) ? \"bg-gray-50\" : undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"relative px-7 sm:w-12 sm:px-6\",\n                children: [\n                    selectedPeople.includes(email) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-y-0 left-0 w-0.5 bg-indigo-600\"\n                    }, void 0, false, {\n                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 27\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        className: \"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600\",\n                        value: email.email,\n                        checked: selectedPeople.includes(email),\n                        onChange: ()=>toggleEmailSelection(email)\n                    }, void 0, false, {\n                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 22,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: (0,_app_utils_helper__WEBPACK_IMPORTED_MODULE_2__.classNames)(\"whitespace-nowrap py-4 pr-3 text-sm font-medium\", selectedPeople.includes(email) ? \"text-indigo-600\" : \"text-gray-900\"),\n                onClick: ()=>{\n                    redirectTo;\n                },\n                children: email.name\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 34,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {}, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 42,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                onClick: ()=>{\n                    redirectTo;\n                },\n                children: email.title\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 42,\n                columnNumber: 30\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                onClick: ()=>{\n                    redirectTo;\n                },\n                children: email.email\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 43,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                    as: \"div\",\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {\n                            className: \"-m-1.5 flex items-center p-1.5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_EllipsisVerticalIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"ml-2 h-5 w-5 text-gray-400\",\n                                \"aria-hidden\": \"true\",\n                                color: \"red\"\n                            }, void 0, false, {\n                                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"transition ease-out duration-100\",\n                            enterFrom: \"transform opacity-0 scale-95\",\n                            enterTo: \"transform opacity-100 scale-100\",\n                            leave: \"transition ease-in duration-75\",\n                            leaveFrom: \"transform opacity-100 scale-100\",\n                            leaveTo: \"transform opacity-0 scale-95\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {\n                                className: \"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDelete(email.id),\n                                        className: \"block px-3 py-1 text-sm leading-6 text-gray-900\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n                lineNumber: 44,\n                columnNumber: 23\n            }, undefined)\n        ]\n    }, email.email, true, {\n        fileName: \"/home/ajackus/Documents/syniti/src/app/email/component/Email.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Email;\nvar _c;\n$RefreshReg$(_c, \"Email\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW1haWwvY29tcG9uZW50L0VtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFYztBQUNjO0FBQ25CO0FBU3pDLE1BQU1NLFFBQVE7UUFBQyxFQUFDQyxLQUFLLEVBQUdDLFlBQVksRUFBQ0MsY0FBYyxFQUFDQyxvQkFBb0IsRUFBVztJQUV4RixNQUFNQyxhQUFhLEtBR25CO0lBQ0EscUJBQ0UsOERBQUNDO1FBQXFCQyxXQUFXSixlQUFlSyxRQUFRLENBQUNQLFNBQVMsZUFBZVE7OzBCQUMvRCw4REFBQ0M7Z0JBQUdILFdBQVU7O29CQUNYSixlQUFlSyxRQUFRLENBQUNQLHdCQUN2Qiw4REFBQ1U7d0JBQUlKLFdBQVU7Ozs7OztrQ0FFakIsOERBQUNLO3dCQUNDQyxNQUFLO3dCQUNMTixXQUFVO3dCQUNWTyxPQUFPYixNQUFNQSxLQUFLO3dCQUNsQmMsU0FBU1osZUFBZUssUUFBUSxDQUFDUDt3QkFDakNlLFVBQVUsSUFBTVoscUJBQXFCSDs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ1M7Z0JBQ0NILFdBQVdSLDZEQUFVQSxDQUNuQixtREFDQUksZUFBZUssUUFBUSxDQUFDUCxTQUFTLG9CQUFvQjtnQkFDcERnQixTQUFTO29CQUFLWjtnQkFBVTswQkFFMUJKLE1BQU1pQixJQUFJOzs7Ozs7MEJBRWIsOERBQUNDOzs7OzswQkFBTSw4REFBQ1Q7Z0JBQUdILFdBQVU7Z0JBQW9EVSxTQUFTO29CQUFLWjtnQkFBVTswQkFBSUosTUFBTW1CLEtBQUs7Ozs7OzswQkFDaEgsOERBQUNWO2dCQUFHSCxXQUFVO2dCQUFvRFUsU0FBUztvQkFBS1o7Z0JBQVU7MEJBQUlKLE1BQU1BLEtBQUs7Ozs7OzswQkFDekcsOERBQUNTO2dCQUFHSCxXQUFVOzBCQUM1Qiw0RUFBQ1gseUZBQUlBO29CQUFDeUIsSUFBRztvQkFBTWQsV0FBVTs7c0NBQ3ZCLDhEQUFDWCx5RkFBSUEsQ0FBQzBCLE1BQU07NEJBQUNmLFdBQVU7c0NBQ3JCLDRFQUFDVCw4R0FBb0JBO2dDQUNuQlMsV0FBVTtnQ0FDVmdCLGVBQVk7Z0NBQ1pDLE9BQU07Ozs7Ozs7Ozs7O3NDQUdWLDhEQUFDM0IsK0ZBQVVBOzRCQUNUd0IsSUFBSTFCLDJDQUFRQTs0QkFDWjhCLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZDLFNBQVE7NEJBQ1JDLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZDLFNBQVE7c0NBRVIsNEVBQUNsQyx5RkFBSUEsQ0FBQ21DLEtBQUs7Z0NBQUN4QixXQUFVOzBDQUNwQiw0RUFBQ1gseUZBQUlBLENBQUNvQyxJQUFJOzhDQUNSLDRFQUFDQzt3Q0FDQ2hCLFNBQVMsSUFBTWYsYUFBYUQsTUFBTWlDLEVBQUU7d0NBQ3BDM0IsV0FBVztrREFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BL0NOTixNQUFNQSxLQUFLOzs7OztBQXdEeEIsRUFBQztLQS9EWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9lbWFpbC9jb21wb25lbnQvRW1haWwudHN4PzZiZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJRW1haWwgfSBmcm9tICcuLi9kYXRhL21vZGVsJztcbmltcG9ydCB7IE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5pbXBvcnQgeyBFbGxpcHNpc1ZlcnRpY2FsSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVscGVyJztcblxudHlwZSBMaXN0UHJvcHMgPXtcbiAgICBlbWFpbDpJRW1haWw7XG4gICAgaGFuZGxlRGVsZXRlOkZ1bmN0aW9uXG4gICAgc2VsZWN0ZWRQZW9wbGU6SUVtYWlsW11cbiAgICB0b2dnbGVFbWFpbFNlbGVjdGlvbjpGdW5jdGlvblxufVxuXG5leHBvcnQgY29uc3QgRW1haWwgPSAoe2VtYWlsICwgaGFuZGxlRGVsZXRlLHNlbGVjdGVkUGVvcGxlLHRvZ2dsZUVtYWlsU2VsZWN0aW9ufTpMaXN0UHJvcHMpID0+IHtcblxuICBjb25zdCByZWRpcmVjdFRvID0gKCk9PntcblxuXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8dHIga2V5PXtlbWFpbC5lbWFpbH0gY2xhc3NOYW1lPXtzZWxlY3RlZFBlb3BsZS5pbmNsdWRlcyhlbWFpbCkgPyAnYmctZ3JheS01MCcgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC03IHNtOnctMTIgc206cHgtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKGVtYWlsKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCB3LTAuNSBiZy1pbmRpZ28tNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC0xLzIgLW10LTIgaC00IHctNCByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgZm9jdXM6cmluZy1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFBlb3BsZS5pbmNsdWRlcyhlbWFpbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVFbWFpbFNlbGVjdGlvbihlbWFpbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd3aGl0ZXNwYWNlLW5vd3JhcCBweS00IHByLTMgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKGVtYWlsKSA/ICd0ZXh0LWluZGlnby02MDAnIDogJ3RleHQtZ3JheS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICApfSBvbkNsaWNrPXsoKT0+e3JlZGlyZWN0VG99fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbWFpbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+PC9hPjx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC0zIHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgb25DbGljaz17KCk9PntyZWRpcmVjdFRvfX0+e2VtYWlsLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBvbkNsaWNrPXsoKT0+e3JlZGlyZWN0VG99fT57ZW1haWwuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVsYXRpdmUgd2hpdGVzcGFjZS1ub3dyYXAgcHktNCBwbC0zIHByLTQgdGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHNtOnByLTBcIj5cbiAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCItbS0xLjUgZmxleCBpdGVtcy1jZW50ZXIgcC0xLjVcIj5cbiAgICAgICAgICAgIDxFbGxpcHNpc1ZlcnRpY2FsSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgei0xMCBtdC0yLjUgdy0zMiBvcmlnaW4tdG9wLXJpZ2h0IHJvdW5kZWQtbWQgYmctd2hpdGUgcHktMiBzaGFkb3ctbGcgcmluZy0xIHJpbmctZ3JheS05MDAvNSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZW1haWwuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJsb2NrIHB4LTMgcHktMSB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1wiRGVsZXRlXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1zPlxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiTWVudSIsIlRyYW5zaXRpb24iLCJFbGxpcHNpc1ZlcnRpY2FsSWNvbiIsImNsYXNzTmFtZXMiLCJFbWFpbCIsImVtYWlsIiwiaGFuZGxlRGVsZXRlIiwic2VsZWN0ZWRQZW9wbGUiLCJ0b2dnbGVFbWFpbFNlbGVjdGlvbiIsInJlZGlyZWN0VG8iLCJ0ciIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwidGQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJuYW1lIiwiYSIsInRpdGxlIiwiYXMiLCJCdXR0b24iLCJhcmlhLWhpZGRlbiIsImNvbG9yIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiSXRlbXMiLCJJdGVtIiwiYnV0dG9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/email/component/Email.tsx\n"));

/***/ })

});