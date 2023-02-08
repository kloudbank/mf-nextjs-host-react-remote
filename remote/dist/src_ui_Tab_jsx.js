"use strict";
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_ui_Tab_jsx"],{

/***/ "./src/ui/Tab.jsx":
/*!************************!*\
  !*** ./src/ui/Tab.jsx ***!
  \************************/
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

/***/ })

}]);
//# sourceMappingURL=src_ui_Tab_jsx.js.map