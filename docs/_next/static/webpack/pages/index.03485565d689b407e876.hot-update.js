webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/Home/BodySection.tsx':
    /*!*********************************************!*\
  !*** ./src/components/Home/BodySection.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mingyugu_Project_kooku_kooku_log_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/tags */ "./src/lib/tags.ts");\n/* harmony import */ var _CardList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardList */ "./src/components/CardList/index.tsx");\n/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TagList */ "./src/components/TagList/index.tsx");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");\n\n\n\nvar _jsxFileName = "/Users/mingyugu/Project/kooku/kooku-log/src/components/Home/BodySection.tsx",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\n\n\n\n\n\n\nvar SNAP_SENSITIVITY = 100;\n\nvar BodySection = function BodySection(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      tags = _ref.tags,\n      scrollToTop = _ref.scrollToTop;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),\n      activeTagIdx = _useState[0],\n      setActiveTagIdx = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),\n      activeTagPosts = _useState2[0],\n      setActiveTagPosts = _useState2[1];\n\n  var tagListRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);\n  var contentsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),\n      touchStart = _useState3[0],\n      setTouchStart = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),\n      touchEnd = _useState4[0],\n      setTouchEnd = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {\n    moveActiveTagToCenter();\n    updatedPosts(); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [activeTagIdx]);\n\n  var moveActiveTagToCenter = function moveActiveTagToCenter() {\n    if (tagListRef.current) {\n      var tagContainerElm = tagListRef.current.firstChild;\n      var tagElm = tagContainerElm.childNodes[activeTagIdx];\n\n      var _tagElm$getBoundingCl = tagElm.getBoundingClientRect(),\n          tagX = _tagElm$getBoundingCl.x,\n          tagWidth = _tagElm$getBoundingCl.width;\n\n      if (tagX < 0) {\n        tagContainerElm.scrollTo(tagContainerElm.scrollLeft + tagX, 0);\n      } else if (tagX + tagWidth > window.innerWidth) {\n        tagContainerElm.scrollTo(tagX + tagWidth + tagContainerElm.scrollLeft - window.innerWidth, 0);\n      }\n    }\n  };\n\n  var updatedPosts = function updatedPosts() {\n    setActiveTagPosts(postsByTag[tags[activeTagIdx].slug]);\n  };\n\n  var postsByTag = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {\n    var obj = {};\n    obj.total = Object(_Users_mingyugu_Project_kooku_kooku_log_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts);\n    tags.forEach(function (tag) {\n      if (tag.slug !== _lib_tags__WEBPACK_IMPORTED_MODULE_3__["TotalTag"].slug) {\n        obj[tag.slug] = posts.filter(function (post) {\n          var _post$tags;\n\n          return ((_post$tags = post.tags) === null || _post$tags === void 0 ? void 0 : _post$tags.findIndex(function (_ref2) {\n            var slug = _ref2.slug;\n            return slug === tag.slug;\n          })) !== -1;\n        });\n      }\n    });\n    return obj;\n  }, [posts, tags]);\n  var handleTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {\n    setTouchStart(e.targetTouches[0].clientX);\n    setTouchEnd(e.targetTouches[0].clientX);\n  }, []);\n  var handleTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {\n    setTouchEnd(e.targetTouches[0].clientX);\n  }, []);\n  var handleTouchEnd = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {\n    if (touchStart - touchEnd > SNAP_SENSITIVITY && activeTagIdx < tags.length - 1) {\n      setActiveTagIdx(activeTagIdx + 1);\n      scrollToTop(contentsRef);\n    }\n\n    if (touchStart - touchEnd < -SNAP_SENSITIVITY && activeTagIdx > 0) {\n      setActiveTagIdx(activeTagIdx - 1);\n      scrollToTop(contentsRef);\n    } // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  }, [touchStart, touchEnd, activeTagIdx]);\n  var updateActiveTag = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {\n    setActiveTagIdx(index);\n    scrollToTop(contentsRef);\n  }, // eslint-disable-next-line react-hooks/exhaustive-deps\n  [activeTagIdx]);\n  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("section", {\n    ref: contentsRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(TagListWrapper, {\n    ref: tagListRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_TagList__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    tags: tags,\n    activeTag: activeTagIdx,\n    updateActiveTag: updateActiveTag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MainCardListContainer, {\n    onTouchStart: handleTouchStart,\n    onTouchMove: handleTouchMove,\n    onTouchEnd: handleTouchEnd,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_CardList__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    posts: activeTagPosts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(BodySection, "GLOAIrq/gkDH88dPcqKduhWmMb4=");\n\n_c = BodySection;\n/* harmony default export */ __webpack_exports__["default"] = (BodySection);\n\nvar TagListWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", false ? undefined : {\n  target: "ekce81f1",\n  label: "TagListWrapper"\n})(false ? undefined : {\n  name: "6mhjut",\n  styles: "position:-webkit-sticky;position:sticky;top:-1px;z-index:10",\n  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5neXVndS9Qcm9qZWN0L2tvb2t1L2tvb2t1LWxvZy9zcmMvY29tcG9uZW50cy9Ib21lL0JvZHlTZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSGlDIiwiZmlsZSI6Ii9Vc2Vycy9taW5neXVndS9Qcm9qZWN0L2tvb2t1L2tvb2t1LWxvZy9zcmMvY29tcG9uZW50cy9Ib21lL0JvZHlTZWN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQb3N0Q29udGVudCB9IGZyb20gJ0AvbGliL3Bvc3RzJztcbmltcG9ydCB7IFRhZ0NvbnRlbnQsIFRvdGFsVGFnIH0gZnJvbSAnQC9saWIvdGFncyc7XG5cbmltcG9ydCBNYWluQ2FyZExpc3QgZnJvbSAnLi4vQ2FyZExpc3QnO1xuaW1wb3J0IFRhZ0xpc3QgZnJvbSAnLi4vVGFnTGlzdCc7XG5cbmNvbnN0IFNOQVBfU0VOU0lUSVZJVFkgPSAxMDA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3RzOiBQb3N0Q29udGVudFtdO1xuICB0YWdzOiBUYWdDb250ZW50W107XG4gIHNjcm9sbFRvVG9wOiAocmVmOiBSZWFjdC5SZWZPYmplY3Q8RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IEJvZHlTZWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0cywgdGFncywgc2Nyb2xsVG9Ub3AgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFnSWR4LCBzZXRBY3RpdmVUYWdJZHhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthY3RpdmVUYWdQb3N0cywgc2V0QWN0aXZlVGFnUG9zdHNdID0gdXNlU3RhdGU8UG9zdENvbnRlbnRbXT4oW10pO1xuXG4gIGNvbnN0IHRhZ0xpc3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250ZW50c1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt0b3VjaFN0YXJ0LCBzZXRUb3VjaFN0YXJ0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG91Y2hFbmQsIHNldFRvdWNoRW5kXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbW92ZUFjdGl2ZVRhZ1RvQ2VudGVyKCk7XG4gICAgdXBkYXRlZFBvc3RzKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbYWN0aXZlVGFnSWR4XSk7XG5cbiAgY29uc3QgbW92ZUFjdGl2ZVRhZ1RvQ2VudGVyID0gKCkgPT4ge1xuICAgIGlmICh0YWdMaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRhZ0NvbnRhaW5lckVsbTogSFRNTERpdkVsZW1lbnQgPSB0YWdMaXN0UmVmLmN1cnJlbnQuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIGNvbnN0IHRhZ0VsbTogSFRNTERpdkVsZW1lbnQgPSB0YWdDb250YWluZXJFbG0uY2hpbGROb2Rlc1thY3RpdmVUYWdJZHhdIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICBjb25zdCB7IHg6IHRhZ1gsIHdpZHRoOiB0YWdXaWR0aCB9ID0gdGFnRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGFnWCA8IDApIHtcbiAgICAgICAgdGFnQ29udGFpbmVyRWxtLnNjcm9sbFRvKHRhZ0NvbnRhaW5lckVsbS5zY3JvbGxMZWZ0ICsgdGFnWCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ1ggKyB0YWdXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRhZ0NvbnRhaW5lckVsbS5zY3JvbGxUbyhcbiAgICAgICAgICB0YWdYICsgdGFnV2lkdGggKyB0YWdDb250YWluZXJFbG0uc2Nyb2xsTGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlZFBvc3RzID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVRhZ1Bvc3RzKHBvc3RzQnlUYWdbdGFnc1thY3RpdmVUYWdJZHhdLnNsdWddKTtcbiAgfTtcblxuICBjb25zdCBwb3N0c0J5VGFnOiB7IFtrZXk6IHN0cmluZ106IFBvc3RDb250ZW50W10gfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG9iajogeyBba2V5OiBzdHJpbmddOiBQb3N0Q29udGVudFtdIH0gPSB7fTtcbiAgICBvYmoudG90YWwgPSBbLi4ucG9zdHNdO1xuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICBpZiAodGFnLnNsdWcgIT09IFRvdGFsVGFnLnNsdWcpIHtcbiAgICAgICAgb2JqW3RhZy5zbHVnXSA9IHBvc3RzLmZpbHRlcihcbiAgICAgICAgICAocG9zdCkgPT4gcG9zdC50YWdzPy5maW5kSW5kZXgoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSB0YWcuc2x1ZykgIT09IC0xXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwgW3Bvc3RzLCB0YWdzXSk7XG5cbiAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0VG91Y2hTdGFydChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgc2V0VG91Y2hFbmQoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRUb3VjaEVuZChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodG91Y2hTdGFydCAtIHRvdWNoRW5kID4gU05BUF9TRU5TSVRJVklUWSAmJiBhY3RpdmVUYWdJZHggPCB0YWdzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEFjdGl2ZVRhZ0lkeChhY3RpdmVUYWdJZHggKyAxKTtcbiAgICAgIHNjcm9sbFRvVG9wKGNvbnRlbnRzUmVmKTtcbiAgICB9XG5cbiAgICBpZiAodG91Y2hTdGFydCAtIHRvdWNoRW5kIDwgLVNOQVBfU0VOU0lUSVZJVFkgJiYgYWN0aXZlVGFnSWR4ID4gMCkge1xuICAgICAgc2V0QWN0aXZlVGFnSWR4KGFjdGl2ZVRhZ0lkeCAtIDEpO1xuICAgICAgc2Nyb2xsVG9Ub3AoY29udGVudHNSZWYpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFt0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgYWN0aXZlVGFnSWR4XSk7XG5cbiAgY29uc3QgdXBkYXRlQWN0aXZlVGFnID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHNldEFjdGl2ZVRhZ0lkeChpbmRleCk7XG4gICAgICBzY3JvbGxUb1RvcChjb250ZW50c1JlZik7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2FjdGl2ZVRhZ0lkeF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHJlZj17Y29udGVudHNSZWZ9PlxuICAgICAgPFRhZ0xpc3RXcmFwcGVyIHJlZj17dGFnTGlzdFJlZn0+XG4gICAgICAgIDxUYWdMaXN0IHRhZ3M9e3RhZ3N9IGFjdGl2ZVRhZz17YWN0aXZlVGFnSWR4fSB1cGRhdGVBY3RpdmVUYWc9e3VwZGF0ZUFjdGl2ZVRhZ30gLz5cbiAgICAgIDwvVGFnTGlzdFdyYXBwZXI+XG4gICAgICA8TWFpbkNhcmRMaXN0Q29udGFpbmVyXG4gICAgICAgIG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cbiAgICAgICAgb25Ub3VjaE1vdmU9e2hhbmRsZVRvdWNoTW92ZX1cbiAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9XG4gICAgICA+XG4gICAgICAgIDxNYWluQ2FyZExpc3QgcG9zdHM9e2FjdGl2ZVRhZ1Bvc3RzfSAvPlxuICAgICAgPC9NYWluQ2FyZExpc3RDb250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keVNlY3Rpb247XG5cbmNvbnN0IFRhZ0xpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xcHg7XG4gIHotaW5kZXg6IDEwO1xuYDtcblxuY29uc3QgTWFpbkNhcmRMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl19 */",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar MainCardListContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", false ? undefined : {\n  target: "ekce81f0",\n  label: "MainCardListContainer"\n})(false ? undefined : {\n  name: "zl1inp",\n  styles: "display:flex;justify-content:center",\n  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5neXVndS9Qcm9qZWN0L2tvb2t1L2tvb2t1LWxvZy9zcmMvY29tcG9uZW50cy9Ib21lL0JvZHlTZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySHdDIiwiZmlsZSI6Ii9Vc2Vycy9taW5neXVndS9Qcm9qZWN0L2tvb2t1L2tvb2t1LWxvZy9zcmMvY29tcG9uZW50cy9Ib21lL0JvZHlTZWN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQb3N0Q29udGVudCB9IGZyb20gJ0AvbGliL3Bvc3RzJztcbmltcG9ydCB7IFRhZ0NvbnRlbnQsIFRvdGFsVGFnIH0gZnJvbSAnQC9saWIvdGFncyc7XG5cbmltcG9ydCBNYWluQ2FyZExpc3QgZnJvbSAnLi4vQ2FyZExpc3QnO1xuaW1wb3J0IFRhZ0xpc3QgZnJvbSAnLi4vVGFnTGlzdCc7XG5cbmNvbnN0IFNOQVBfU0VOU0lUSVZJVFkgPSAxMDA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3RzOiBQb3N0Q29udGVudFtdO1xuICB0YWdzOiBUYWdDb250ZW50W107XG4gIHNjcm9sbFRvVG9wOiAocmVmOiBSZWFjdC5SZWZPYmplY3Q8RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IEJvZHlTZWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0cywgdGFncywgc2Nyb2xsVG9Ub3AgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFnSWR4LCBzZXRBY3RpdmVUYWdJZHhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthY3RpdmVUYWdQb3N0cywgc2V0QWN0aXZlVGFnUG9zdHNdID0gdXNlU3RhdGU8UG9zdENvbnRlbnRbXT4oW10pO1xuXG4gIGNvbnN0IHRhZ0xpc3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250ZW50c1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt0b3VjaFN0YXJ0LCBzZXRUb3VjaFN0YXJ0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG91Y2hFbmQsIHNldFRvdWNoRW5kXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbW92ZUFjdGl2ZVRhZ1RvQ2VudGVyKCk7XG4gICAgdXBkYXRlZFBvc3RzKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbYWN0aXZlVGFnSWR4XSk7XG5cbiAgY29uc3QgbW92ZUFjdGl2ZVRhZ1RvQ2VudGVyID0gKCkgPT4ge1xuICAgIGlmICh0YWdMaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRhZ0NvbnRhaW5lckVsbTogSFRNTERpdkVsZW1lbnQgPSB0YWdMaXN0UmVmLmN1cnJlbnQuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIGNvbnN0IHRhZ0VsbTogSFRNTERpdkVsZW1lbnQgPSB0YWdDb250YWluZXJFbG0uY2hpbGROb2Rlc1thY3RpdmVUYWdJZHhdIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICBjb25zdCB7IHg6IHRhZ1gsIHdpZHRoOiB0YWdXaWR0aCB9ID0gdGFnRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGFnWCA8IDApIHtcbiAgICAgICAgdGFnQ29udGFpbmVyRWxtLnNjcm9sbFRvKHRhZ0NvbnRhaW5lckVsbS5zY3JvbGxMZWZ0ICsgdGFnWCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ1ggKyB0YWdXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRhZ0NvbnRhaW5lckVsbS5zY3JvbGxUbyhcbiAgICAgICAgICB0YWdYICsgdGFnV2lkdGggKyB0YWdDb250YWluZXJFbG0uc2Nyb2xsTGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlZFBvc3RzID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVRhZ1Bvc3RzKHBvc3RzQnlUYWdbdGFnc1thY3RpdmVUYWdJZHhdLnNsdWddKTtcbiAgfTtcblxuICBjb25zdCBwb3N0c0J5VGFnOiB7IFtrZXk6IHN0cmluZ106IFBvc3RDb250ZW50W10gfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG9iajogeyBba2V5OiBzdHJpbmddOiBQb3N0Q29udGVudFtdIH0gPSB7fTtcbiAgICBvYmoudG90YWwgPSBbLi4ucG9zdHNdO1xuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICBpZiAodGFnLnNsdWcgIT09IFRvdGFsVGFnLnNsdWcpIHtcbiAgICAgICAgb2JqW3RhZy5zbHVnXSA9IHBvc3RzLmZpbHRlcihcbiAgICAgICAgICAocG9zdCkgPT4gcG9zdC50YWdzPy5maW5kSW5kZXgoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSB0YWcuc2x1ZykgIT09IC0xXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwgW3Bvc3RzLCB0YWdzXSk7XG5cbiAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0VG91Y2hTdGFydChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgc2V0VG91Y2hFbmQoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRUb3VjaEVuZChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodG91Y2hTdGFydCAtIHRvdWNoRW5kID4gU05BUF9TRU5TSVRJVklUWSAmJiBhY3RpdmVUYWdJZHggPCB0YWdzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEFjdGl2ZVRhZ0lkeChhY3RpdmVUYWdJZHggKyAxKTtcbiAgICAgIHNjcm9sbFRvVG9wKGNvbnRlbnRzUmVmKTtcbiAgICB9XG5cbiAgICBpZiAodG91Y2hTdGFydCAtIHRvdWNoRW5kIDwgLVNOQVBfU0VOU0lUSVZJVFkgJiYgYWN0aXZlVGFnSWR4ID4gMCkge1xuICAgICAgc2V0QWN0aXZlVGFnSWR4KGFjdGl2ZVRhZ0lkeCAtIDEpO1xuICAgICAgc2Nyb2xsVG9Ub3AoY29udGVudHNSZWYpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFt0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgYWN0aXZlVGFnSWR4XSk7XG5cbiAgY29uc3QgdXBkYXRlQWN0aXZlVGFnID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHNldEFjdGl2ZVRhZ0lkeChpbmRleCk7XG4gICAgICBzY3JvbGxUb1RvcChjb250ZW50c1JlZik7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2FjdGl2ZVRhZ0lkeF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHJlZj17Y29udGVudHNSZWZ9PlxuICAgICAgPFRhZ0xpc3RXcmFwcGVyIHJlZj17dGFnTGlzdFJlZn0+XG4gICAgICAgIDxUYWdMaXN0IHRhZ3M9e3RhZ3N9IGFjdGl2ZVRhZz17YWN0aXZlVGFnSWR4fSB1cGRhdGVBY3RpdmVUYWc9e3VwZGF0ZUFjdGl2ZVRhZ30gLz5cbiAgICAgIDwvVGFnTGlzdFdyYXBwZXI+XG4gICAgICA8TWFpbkNhcmRMaXN0Q29udGFpbmVyXG4gICAgICAgIG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cbiAgICAgICAgb25Ub3VjaE1vdmU9e2hhbmRsZVRvdWNoTW92ZX1cbiAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9XG4gICAgICA+XG4gICAgICAgIDxNYWluQ2FyZExpc3QgcG9zdHM9e2FjdGl2ZVRhZ1Bvc3RzfSAvPlxuICAgICAgPC9NYWluQ2FyZExpc3RDb250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keVNlY3Rpb247XG5cbmNvbnN0IFRhZ0xpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xcHg7XG4gIHotaW5kZXg6IDEwO1xuYDtcblxuY29uc3QgTWFpbkNhcmRMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl19 */",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar _c;\n\n$RefreshReg$(_c, "BodySection");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Cb2R5U2VjdGlvbi50c3g/N2Q4ZiJdLCJuYW1lcyI6WyJTTkFQX1NFTlNJVElWSVRZIiwiQm9keVNlY3Rpb24iLCJwb3N0cyIsInRhZ3MiLCJzY3JvbGxUb1RvcCIsInVzZVN0YXRlIiwiYWN0aXZlVGFnSWR4Iiwic2V0QWN0aXZlVGFnSWR4IiwiYWN0aXZlVGFnUG9zdHMiLCJzZXRBY3RpdmVUYWdQb3N0cyIsInRhZ0xpc3RSZWYiLCJ1c2VSZWYiLCJjb250ZW50c1JlZiIsInRvdWNoU3RhcnQiLCJzZXRUb3VjaFN0YXJ0IiwidG91Y2hFbmQiLCJzZXRUb3VjaEVuZCIsInVzZUVmZmVjdCIsIm1vdmVBY3RpdmVUYWdUb0NlbnRlciIsInVwZGF0ZWRQb3N0cyIsImN1cnJlbnQiLCJ0YWdDb250YWluZXJFbG0iLCJmaXJzdENoaWxkIiwidGFnRWxtIiwiY2hpbGROb2RlcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhZ1giLCJ4IiwidGFnV2lkdGgiLCJ3aWR0aCIsInNjcm9sbFRvIiwic2Nyb2xsTGVmdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwb3N0c0J5VGFnIiwic2x1ZyIsInVzZU1lbW8iLCJvYmoiLCJ0b3RhbCIsImZvckVhY2giLCJ0YWciLCJUb3RhbFRhZyIsImZpbHRlciIsInBvc3QiLCJmaW5kSW5kZXgiLCJoYW5kbGVUb3VjaFN0YXJ0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsImxlbmd0aCIsInVwZGF0ZUFjdGl2ZVRhZyIsImluZGV4IiwiVGFnTGlzdFdyYXBwZXIiLCJNYWluQ2FyZExpc3RDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLEdBQXpCOztBQVFB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LEtBQUQsRUFBbUI7QUFDakIvQyxtQkFBZSxDQUFDK0MsS0FBRCxDQUFmO0FBQ0FsRCxlQUFXLENBQUNRLFdBQUQsQ0FBWDtBQUNELEdBSmdDLEVBS2pDO0FBQ0EsR0FBQ04sWUFBRCxDQU5pQyxDQUFuQztBQVNBLFNBQ0U7QUFBUyxPQUFHLEVBQUVNLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDJEQUFDLGNBQUQ7QUFBZ0IsT0FBRyxFQUFFRixVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQUMsZ0RBQUQ7QUFBUyxRQUFJLEVBQUVQLElBQWY7QUFBcUIsYUFBUyxFQUFFRyxZQUFoQztBQUE4QyxtQkFBZSxFQUFFK0MsZUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSwyREFBQyxxQkFBRDtBQUNFLGdCQUFZLEVBQUVSLGdCQURoQjtBQUVFLGVBQVcsRUFBRUssZUFGZjtBQUdFLGNBQVUsRUFBRUMsY0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsMkRBQUMsaURBQUQ7QUFBYyxTQUFLLEVBQUUzQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FKRixDQURGO0FBY0QsQ0EvRkQ7O0dBQU1QLFc7O0tBQUFBLFc7QUFpR1NBLDBFQUFmOztBQUVBLElBQU1zRCxjQUFjLEdBQUcsNkZBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXBCOztBQU9BLElBQU1DLHFCQUFxQixHQUFHLDZGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUEzQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hvbWUvQm9keVNlY3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSAnQC9saWIvcG9zdHMnO1xuaW1wb3J0IHsgVGFnQ29udGVudCwgVG90YWxUYWcgfSBmcm9tICdAL2xpYi90YWdzJztcblxuaW1wb3J0IE1haW5DYXJkTGlzdCBmcm9tICcuLi9DYXJkTGlzdCc7XG5pbXBvcnQgVGFnTGlzdCBmcm9tICcuLi9UYWdMaXN0JztcblxuY29uc3QgU05BUF9TRU5TSVRJVklUWSA9IDEwMDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9zdHM6IFBvc3RDb250ZW50W107XG4gIHRhZ3M6IFRhZ0NvbnRlbnRbXTtcbiAgc2Nyb2xsVG9Ub3A6IChyZWY6IFJlYWN0LlJlZk9iamVjdDxFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuY29uc3QgQm9keVNlY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBvc3RzLCB0YWdzLCBzY3JvbGxUb1RvcCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWdJZHgsIHNldEFjdGl2ZVRhZ0lkeF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZVRhZ1Bvc3RzLCBzZXRBY3RpdmVUYWdQb3N0c10gPSB1c2VTdGF0ZTxQb3N0Q29udGVudFtdPihbXSk7XG5cbiAgY29uc3QgdGFnTGlzdFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvbnRlbnRzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3RvdWNoU3RhcnQsIHNldFRvdWNoU3RhcnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3VjaEVuZCwgc2V0VG91Y2hFbmRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtb3ZlQWN0aXZlVGFnVG9DZW50ZXIoKTtcbiAgICB1cGRhdGVkUG9zdHMoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFthY3RpdmVUYWdJZHhdKTtcblxuICBjb25zdCBtb3ZlQWN0aXZlVGFnVG9DZW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRhZ0xpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgdGFnQ29udGFpbmVyRWxtOiBIVE1MRGl2RWxlbWVudCA9IHRhZ0xpc3RSZWYuY3VycmVudC5maXJzdENoaWxkIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgY29uc3QgdGFnRWxtOiBIVE1MRGl2RWxlbWVudCA9IHRhZ0NvbnRhaW5lckVsbS5jaGlsZE5vZGVzW2FjdGl2ZVRhZ0lkeF0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgIGNvbnN0IHsgeDogdGFnWCwgd2lkdGg6IHRhZ1dpZHRoIH0gPSB0YWdFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0YWdYIDwgMCkge1xuICAgICAgICB0YWdDb250YWluZXJFbG0uc2Nyb2xsVG8odGFnQ29udGFpbmVyRWxtLnNjcm9sbExlZnQgKyB0YWdYLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnWCArIHRhZ1dpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdGFnQ29udGFpbmVyRWxtLnNjcm9sbFRvKFxuICAgICAgICAgIHRhZ1ggKyB0YWdXaWR0aCArIHRhZ0NvbnRhaW5lckVsbS5zY3JvbGxMZWZ0IC0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVkUG9zdHMgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlVGFnUG9zdHMocG9zdHNCeVRhZ1t0YWdzW2FjdGl2ZVRhZ0lkeF0uc2x1Z10pO1xuICB9O1xuXG4gIGNvbnN0IHBvc3RzQnlUYWc6IHsgW2tleTogc3RyaW5nXTogUG9zdENvbnRlbnRbXSB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgb2JqOiB7IFtrZXk6IHN0cmluZ106IFBvc3RDb250ZW50W10gfSA9IHt9O1xuICAgIG9iai50b3RhbCA9IFsuLi5wb3N0c107XG4gICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIGlmICh0YWcuc2x1ZyAhPT0gVG90YWxUYWcuc2x1Zykge1xuICAgICAgICBvYmpbdGFnLnNsdWddID0gcG9zdHMuZmlsdGVyKFxuICAgICAgICAgIChwb3N0KSA9PiBwb3N0LnRhZ3M/LmZpbmRJbmRleCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHRhZy5zbHVnKSAhPT0gLTFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LCBbcG9zdHMsIHRhZ3NdKTtcblxuICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRUb3VjaFN0YXJ0KGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICBzZXRUb3VjaEVuZChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldFRvdWNoRW5kKGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVRvdWNoRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0b3VjaFN0YXJ0IC0gdG91Y2hFbmQgPiBTTkFQX1NFTlNJVElWSVRZICYmIGFjdGl2ZVRhZ0lkeCA8IHRhZ3MubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0QWN0aXZlVGFnSWR4KGFjdGl2ZVRhZ0lkeCArIDEpO1xuICAgICAgc2Nyb2xsVG9Ub3AoY29udGVudHNSZWYpO1xuICAgIH1cblxuICAgIGlmICh0b3VjaFN0YXJ0IC0gdG91Y2hFbmQgPCAtU05BUF9TRU5TSVRJVklUWSAmJiBhY3RpdmVUYWdJZHggPiAwKSB7XG4gICAgICBzZXRBY3RpdmVUYWdJZHgoYWN0aXZlVGFnSWR4IC0gMSk7XG4gICAgICBzY3JvbGxUb1RvcChjb250ZW50c1JlZik7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3RvdWNoU3RhcnQsIHRvdWNoRW5kLCBhY3RpdmVUYWdJZHhdKTtcblxuICBjb25zdCB1cGRhdGVBY3RpdmVUYWcgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgc2V0QWN0aXZlVGFnSWR4KGluZGV4KTtcbiAgICAgIHNjcm9sbFRvVG9wKGNvbnRlbnRzUmVmKTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbYWN0aXZlVGFnSWR4XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gcmVmPXtjb250ZW50c1JlZn0+XG4gICAgICA8VGFnTGlzdFdyYXBwZXIgcmVmPXt0YWdMaXN0UmVmfT5cbiAgICAgICAgPFRhZ0xpc3QgdGFncz17dGFnc30gYWN0aXZlVGFnPXthY3RpdmVUYWdJZHh9IHVwZGF0ZUFjdGl2ZVRhZz17dXBkYXRlQWN0aXZlVGFnfSAvPlxuICAgICAgPC9UYWdMaXN0V3JhcHBlcj5cbiAgICAgIDxNYWluQ2FyZExpc3RDb250YWluZXJcbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVUb3VjaFN0YXJ0fVxuICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlVG91Y2hNb3ZlfVxuICAgICAgICBvblRvdWNoRW5kPXtoYW5kbGVUb3VjaEVuZH1cbiAgICAgID5cbiAgICAgICAgPE1haW5DYXJkTGlzdCBwb3N0cz17YWN0aXZlVGFnUG9zdHN9IC8+XG4gICAgICA8L01haW5DYXJkTGlzdENvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5U2VjdGlvbjtcblxuY29uc3QgVGFnTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbiAgei1pbmRleDogMTA7XG5gO1xuXG5jb25zdCBNYWluQ2FyZExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/BodySection.tsx\n'
      );

      /***/
    }
});
