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

/***/ "(app-pages-browser)/./src/app/email/page.tsx":
/*!********************************!*\
  !*** ./src/app/email/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Email; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_mockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/mockData */ \"(app-pages-browser)/./src/app/email/data/mockData.ts\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ \"(app-pages-browser)/./src/app/utils/helper.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Email() {\n    _s();\n    const [emails, setEmails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_mockData__WEBPACK_IMPORTED_MODULE_2__.emails);\n    const [selectedPeople, setSelectedPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectAllChecked, setSelectAllChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [indeterminate, setIndeterminate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < emails.length;\n        setIndeterminate(isIndeterminate);\n        setSelectAllChecked(selectedPeople.length === emails.length && emails.length > 0);\n    }, [\n        selectedPeople,\n        emails\n    ]);\n    function toggleAll() {\n        if (selectAllChecked || indeterminate) {\n            setSelectedPeople([]);\n            setSelectAllChecked(false);\n        } else {\n            setSelectedPeople([\n                ...emails\n            ]);\n            setSelectAllChecked(true);\n        }\n    }\n    const handleDelete = (email)=>{\n        setEmails(emails.filter((e)=>e.id !== email.id));\n    };\n    function togglePersonSelection(person) {\n        const newSelectedPeople = selectedPeople.includes(person) ? selectedPeople.filter((p)=>p !== person) : [\n            ...selectedPeople,\n            person\n        ];\n        setSelectedPeople(newSelectedPeople);\n        setSelectAllChecked(newSelectedPeople.length === emails.length && emails.length > 0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flow-root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-3xl text-bold\",\n                children: \"Emails\"\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 flow-root\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                selectedPeople.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white\",\n                                        onClick: ()=>{\n                                            selectedPeople.forEach((person)=>{\n                                                handleDelete(person);\n                                            });\n                                            setSelectedPeople([]);\n                                            setSelectAllChecked(false);\n                                        },\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"min-w-full table-fixed divide-y divide-gray-300\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"relative px-7 sm:w-12 sm:px-6\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"checkbox\",\n                                                            className: \"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600\",\n                                                            checked: selectAllChecked,\n                                                            onChange: toggleAll\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900\",\n                                                        children: \"Name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                                                        children: \"Subject\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                                                        children: \"Email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"relative py-3.5 pl-3 pr-4 sm:pr-3\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"sr-only\",\n                                                            children: \"Edit\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            className: \"divide-y divide-gray-200 bg-white\",\n                                            children: emails.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: selectedPeople.includes(person) ? \"bg-gray-50\" : undefined,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"relative px-7 sm:w-12 sm:px-6\",\n                                                            children: [\n                                                                selectedPeople.includes(person) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"absolute inset-y-0 left-0 w-0.5 bg-indigo-600\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                                    lineNumber: 97,\n                                                                    columnNumber: 27\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                    type: \"checkbox\",\n                                                                    className: \"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600\",\n                                                                    value: person.email,\n                                                                    checked: selectedPeople.includes(person),\n                                                                    onChange: ()=>togglePersonSelection(person)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                                    lineNumber: 99,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_3__.classNames)(\"whitespace-nowrap py-4 pr-3 text-sm font-medium\", selectedPeople.includes(person) ? \"text-indigo-600\" : \"text-gray-900\"),\n                                                            children: person.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                                                            children: person.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 115,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                                                            children: person.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, person.email, true, {\n                                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ajackus/Documents/syniti/src/app/email/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Email, \"oSdqoqoG1CrOZDTv7dtUMp3Q9qU=\");\n_c = Email;\nvar _c;\n$RefreshReg$(_c, \"Email\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW1haWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUU7QUFFYjtBQUVUO0FBRTlCLFNBQVNNOztJQUN0QixNQUFNLENBQUNILFFBQVFJLFVBQVUsR0FBR0wsK0NBQVFBLENBQVdFLGtEQUFTQTtJQUN4RCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDakUsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNVLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxrQkFBa0JOLGVBQWVPLE1BQU0sR0FBRyxLQUFLUCxlQUFlTyxNQUFNLEdBQUdaLE9BQU9ZLE1BQU07UUFDMUZGLGlCQUFpQkM7UUFDakJILG9CQUFvQkgsZUFBZU8sTUFBTSxLQUFLWixPQUFPWSxNQUFNLElBQUlaLE9BQU9ZLE1BQU0sR0FBRztJQUNqRixHQUFHO1FBQUNQO1FBQWdCTDtLQUFPO0lBRTNCLFNBQVNhO1FBQ1AsSUFBSU4sb0JBQW9CRSxlQUFlO1lBQ3JDSCxrQkFBa0IsRUFBRTtZQUNwQkUsb0JBQW9CO1FBQ3RCLE9BQU87WUFDTEYsa0JBQWtCO21CQUFJTjthQUFPO1lBQzdCUSxvQkFBb0I7UUFDdEI7SUFDRjtJQUVBLE1BQU1NLGVBQWUsQ0FBQ0M7UUFDcEJYLFVBQVVKLE9BQU9nQixNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsRUFBRSxLQUFLSCxNQUFNRyxFQUFFO0lBQ2xEO0lBRUEsU0FBU0Msc0JBQXNCQyxNQUFjO1FBQzNDLE1BQU1DLG9CQUFvQmhCLGVBQWVpQixRQUFRLENBQUNGLFVBQzlDZixlQUFlVyxNQUFNLENBQUMsQ0FBQ08sSUFBTUEsTUFBTUgsVUFDbkM7ZUFBSWY7WUFBZ0JlO1NBQU87UUFDL0JkLGtCQUFrQmU7UUFDbEJiLG9CQUFvQmEsa0JBQWtCVCxNQUFNLEtBQUtaLE9BQU9ZLE1BQU0sSUFBSVosT0FBT1ksTUFBTSxHQUFHO0lBQ3BGO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTswQkFBcUI7Ozs7OzswQkFDckMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOztnQ0FDWnBCLGVBQWVPLE1BQU0sR0FBRyxtQkFDdkIsOERBQUNZO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRTt3Q0FDQ0MsTUFBSzt3Q0FDTEgsV0FBVTt3Q0FDVkksU0FBUzs0Q0FDUHhCLGVBQWV5QixPQUFPLENBQUMsQ0FBQ1Y7Z0RBQ3RCTixhQUFhTTs0Q0FDZjs0Q0FDQWQsa0JBQWtCLEVBQUU7NENBQ3BCRSxvQkFBb0I7d0NBQ3RCO2tEQUNEOzs7Ozs7Ozs7Ozs4Q0FLTCw4REFBQ3VCO29DQUFNTixXQUFVOztzREFDZiw4REFBQ087c0RBQ0MsNEVBQUNDOztrRUFDQyw4REFBQ0M7d0RBQUdDLE9BQU07d0RBQU1WLFdBQVU7a0VBQ3hCLDRFQUFDVzs0REFDQ1IsTUFBSzs0REFDTEgsV0FBVTs0REFDVlksU0FBUzlCOzREQUNUK0IsVUFBVXpCOzs7Ozs7Ozs7OztrRUFHZCw4REFBQ3FCO3dEQUFHQyxPQUFNO3dEQUFNVixXQUFVO2tFQUEwRTs7Ozs7O2tFQUdwRyw4REFBQ1M7d0RBQUdDLE9BQU07d0RBQU1WLFdBQVU7a0VBQTREOzs7Ozs7a0VBR3RGLDhEQUFDUzt3REFBR0MsT0FBTTt3REFBTVYsV0FBVTtrRUFBNEQ7Ozs7OztrRUFHdEYsOERBQUNTO3dEQUFHQyxPQUFNO3dEQUFNVixXQUFVO2tFQUN4Qiw0RUFBQ0M7NERBQUtELFdBQVU7c0VBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSWhDLDhEQUFDYzs0Q0FBTWQsV0FBVTtzREFDZHpCLE9BQU93QyxHQUFHLENBQUMsQ0FBQ3BCLHVCQUNYLDhEQUFDYTtvREFBc0JSLFdBQVdwQixlQUFlaUIsUUFBUSxDQUFDRixVQUFVLGVBQWVxQjs7c0VBQ2pGLDhEQUFDQzs0REFBR2pCLFdBQVU7O2dFQUNYcEIsZUFBZWlCLFFBQVEsQ0FBQ0YseUJBQ3ZCLDhEQUFDSTtvRUFBSUMsV0FBVTs7Ozs7OzhFQUVqQiw4REFBQ1c7b0VBQ0NSLE1BQUs7b0VBQ0xILFdBQVU7b0VBQ1ZrQixPQUFPdkIsT0FBT0wsS0FBSztvRUFDbkJzQixTQUFTaEMsZUFBZWlCLFFBQVEsQ0FBQ0Y7b0VBQ2pDa0IsVUFBVSxJQUFNbkIsc0JBQXNCQzs7Ozs7Ozs7Ozs7O3NFQUcxQyw4REFBQ3NCOzREQUNDakIsV0FBV3ZCLHlEQUFVQSxDQUNuQixtREFDQUcsZUFBZWlCLFFBQVEsQ0FBQ0YsVUFBVSxvQkFBb0I7c0VBR3ZEQSxPQUFPd0IsSUFBSTs7Ozs7O3NFQUVkLDhEQUFDRjs0REFBR2pCLFdBQVU7c0VBQXFETCxPQUFPeUIsS0FBSzs7Ozs7O3NFQUMvRSw4REFBQ0g7NERBQUdqQixXQUFVO3NFQUFxREwsT0FBT0wsS0FBSzs7Ozs7OzttREF0QnhFSyxPQUFPTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUN6QztHQXRId0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZW1haWwvcGFnZS50c3g/NmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJRW1haWwgfSBmcm9tICcuL2RhdGEvbW9kZWwnO1xuaW1wb3J0IHsgZW1haWxzIGFzIGFsbEVtYWlscyB9IGZyb20gJy4vZGF0YS9tb2NrRGF0YSc7XG5pbXBvcnQgeyBFbWFpbExpc3QgfSBmcm9tICcuL2NvbXBvbmVudC9FbWFpbExpc3QnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtYWlsKCkge1xuICBjb25zdCBbZW1haWxzLCBzZXRFbWFpbHNdID0gdXNlU3RhdGU8SUVtYWlsW10+KGFsbEVtYWlscyk7XG4gIGNvbnN0IFtzZWxlY3RlZFBlb3BsZSwgc2V0U2VsZWN0ZWRQZW9wbGVdID0gdXNlU3RhdGU8SUVtYWlsW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdEFsbENoZWNrZWQsIHNldFNlbGVjdEFsbENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5kZXRlcm1pbmF0ZSwgc2V0SW5kZXRlcm1pbmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0luZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZFBlb3BsZS5sZW5ndGggPiAwICYmIHNlbGVjdGVkUGVvcGxlLmxlbmd0aCA8IGVtYWlscy5sZW5ndGg7XG4gICAgc2V0SW5kZXRlcm1pbmF0ZShpc0luZGV0ZXJtaW5hdGUpO1xuICAgIHNldFNlbGVjdEFsbENoZWNrZWQoc2VsZWN0ZWRQZW9wbGUubGVuZ3RoID09PSBlbWFpbHMubGVuZ3RoICYmIGVtYWlscy5sZW5ndGggPiAwKTtcbiAgfSwgW3NlbGVjdGVkUGVvcGxlLCBlbWFpbHNdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBbGwoKSB7XG4gICAgaWYgKHNlbGVjdEFsbENoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgc2V0U2VsZWN0ZWRQZW9wbGUoW10pO1xuICAgICAgc2V0U2VsZWN0QWxsQ2hlY2tlZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUGVvcGxlKFsuLi5lbWFpbHNdKTtcbiAgICAgIHNldFNlbGVjdEFsbENoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGVtYWlsOiBJRW1haWwpID0+IHtcbiAgICBzZXRFbWFpbHMoZW1haWxzLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gZW1haWwuaWQpKTtcbiAgfTtcblxuICBmdW5jdGlvbiB0b2dnbGVQZXJzb25TZWxlY3Rpb24ocGVyc29uOiBJRW1haWwpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFBlb3BsZSA9IHNlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKHBlcnNvbilcbiAgICAgID8gc2VsZWN0ZWRQZW9wbGUuZmlsdGVyKChwKSA9PiBwICE9PSBwZXJzb24pXG4gICAgICA6IFsuLi5zZWxlY3RlZFBlb3BsZSwgcGVyc29uXTtcbiAgICBzZXRTZWxlY3RlZFBlb3BsZShuZXdTZWxlY3RlZFBlb3BsZSk7XG4gICAgc2V0U2VsZWN0QWxsQ2hlY2tlZChuZXdTZWxlY3RlZFBlb3BsZS5sZW5ndGggPT09IGVtYWlscy5sZW5ndGggJiYgZW1haWxzLmxlbmd0aCA+IDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb3ctcm9vdFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ib2xkXCI+RW1haWxzPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsb3ctcm9vdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC00IC1teS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgcHktMiBhbGlnbi1taWRkbGUgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFBlb3BsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMTQgdG9wLTAgZmxleCBoLTEyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgYmctd2hpdGUgc206bGVmdC0xMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgcHgtMiBweS0xIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktMzAgZGlzYWJsZWQ6aG92ZXI6Ymctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocGVyc29uKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBlb3BsZShbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0QWxsQ2hlY2tlZChmYWxzZSk7IFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCB0YWJsZS1maXhlZCBkaXZpZGUteSBkaXZpZGUtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTcgc206dy0xMiBzbTpweC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC0xLzIgLW10LTIgaC00IHctNCByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgZm9jdXM6cmluZy1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdEFsbENoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cIm1pbi13LVsxMnJlbV0gcHktMy41IHByLTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMuNSBwbC0zIHByLTQgc206cHItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtlbWFpbHMubWFwKChwZXJzb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGVyc29uLmVtYWlsfSBjbGFzc05hbWU9e3NlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKHBlcnNvbikgPyAnYmctZ3JheS01MCcgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC03IHNtOnctMTIgc206cHgtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKHBlcnNvbikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgdy0wLjUgYmctaW5kaWdvLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCB0b3AtMS8yIC1tdC0yIGgtNCB3LTQgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgdGV4dC1pbmRpZ28tNjAwIGZvY3VzOnJpbmctaW5kaWdvLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb24uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUGVvcGxlLmluY2x1ZGVzKHBlcnNvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVQZXJzb25TZWxlY3Rpb24ocGVyc29uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3doaXRlc3BhY2Utbm93cmFwIHB5LTQgcHItMyB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZW9wbGUuaW5jbHVkZXMocGVyc29uKSA/ICd0ZXh0LWluZGlnby02MDAnIDogJ3RleHQtZ3JheS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC0zIHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e3BlcnNvbi50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC0zIHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e3BlcnNvbi5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZW1haWxzIiwiYWxsRW1haWxzIiwiY2xhc3NOYW1lcyIsIkVtYWlsIiwic2V0RW1haWxzIiwic2VsZWN0ZWRQZW9wbGUiLCJzZXRTZWxlY3RlZFBlb3BsZSIsInNlbGVjdEFsbENoZWNrZWQiLCJzZXRTZWxlY3RBbGxDaGVja2VkIiwiaW5kZXRlcm1pbmF0ZSIsInNldEluZGV0ZXJtaW5hdGUiLCJpc0luZGV0ZXJtaW5hdGUiLCJsZW5ndGgiLCJ0b2dnbGVBbGwiLCJoYW5kbGVEZWxldGUiLCJlbWFpbCIsImZpbHRlciIsImUiLCJpZCIsInRvZ2dsZVBlcnNvblNlbGVjdGlvbiIsInBlcnNvbiIsIm5ld1NlbGVjdGVkUGVvcGxlIiwiaW5jbHVkZXMiLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZm9yRWFjaCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJpbnB1dCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInRib2R5IiwibWFwIiwidW5kZWZpbmVkIiwidGQiLCJ2YWx1ZSIsIm5hbWUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/email/page.tsx\n"));

/***/ })

});