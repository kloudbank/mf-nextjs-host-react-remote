(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_ui_ExternalLink_js"],{

/***/ "./node_modules/@heroicons/react/outline/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/index.js ***!
  \********************************************************/
/***/ ((module) => {

let proxy = new Proxy(
  {},
  {
    get: (obj, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `You\'re trying to import \`@heroicons/react/outline/${property}\` from Heroicons v1 but have installed Heroicons v2. Install \`@heroicons/react@v1\` to resolve this error.`
      )
    },
  }
)

module.exports = proxy


/***/ }),

/***/ "./src/ui/ExternalLink.js":
/*!********************************!*\
  !*** ./src/ui/ExternalLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalLink": () => (/* binding */ ExternalLink)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__);

const ExternalLink = ({
  children,
  href
}) => {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
  }, /*#__PURE__*/React.createElement("div", null, children), /*#__PURE__*/React.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ArrowRightIcon, {
    className: "block w-4"
  }));
};

/***/ })

}]);
//# sourceMappingURL=src_ui_ExternalLink_js.js.map