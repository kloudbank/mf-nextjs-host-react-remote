"use strict";
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_ui_TabGroup_js"],{

/***/ "./src/ui/Tab.js":
/*!***********************!*\
  !*** ./src/ui/Tab.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ "./node_modules/next/navigation.js");
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const Tab = ({
  path,
  item
}) => {
  const segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSelectedLayoutSegment)();
  const href = item.slug ? path + '/' + item.slug : path;
  const isActive =
  // Example home pages e.g. `/layouts`
  !item.slug && segment === null || segment === item.segment ||
  // Nested pages e.g. `/layouts/electronics`
  segment === item.slug;
  return /*#__PURE__*/React.createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('rounded-lg px-3 py-1 text-sm font-medium', {
      'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white': !isActive,
      'bg-vercel-blue text-white': isActive
    })
  }, item.text);
};

/***/ }),

/***/ "./src/ui/TabGroup.js":
/*!****************************!*\
  !*** ./src/ui/TabGroup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabGroup": () => (/* binding */ TabGroup)
/* harmony export */ });
/* harmony import */ var _ui_Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Tab */ "./src/ui/Tab.js");

const TabGroup = ({
  path,
  items
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, items.map(item => /*#__PURE__*/React.createElement(_ui_Tab__WEBPACK_IMPORTED_MODULE_0__.Tab, {
    key: path + item.slug,
    item: item,
    path: path
  })));
};

/***/ })

}]);
//# sourceMappingURL=src_ui_TabGroup_js.js.map