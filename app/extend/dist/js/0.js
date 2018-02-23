webpackJsonp([0],{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_newsletter_vue__ = __webpack_require__(76);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d5d636e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_newsletter_vue__ = __webpack_require__(80);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_newsletter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d5d636e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_newsletter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/newsletter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d5d636e", Component.options)
  } else {
    hotAPI.reload("data-v-4d5d636e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "newsletter",
  props: ['newsletter'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("75ee1568", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d5d636e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./newsletter.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d5d636e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./newsletter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\n.maxWidth{\n    max-width:670px;\n}\n.table-style{\n    width:100%;\n    max-width:670px;\n    border:0px;\n    text-align:center;\n    background:#ffffff;\n}\n.margin-top{\n    margin-top: 35px;\n}\n.padding-top{\n    padding-top:30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      {
        staticStyle: {
          width: "100%",
          "font-family":
            "PingHei, PingFang SC, STHeitiSC-Light, Microsoft Yahei, Arial, sans-serif"
        },
        attrs: {
          width: "100%",
          border: "0",
          align: "center",
          cellpadding: "0",
          bgcolor: "#F5F5F5",
          cellspacing: "0"
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("tr", [
          _c(
            "td",
            {
              attrs: {
                height: "55",
                align: "center",
                valign: "bottom",
                colspan: "3"
              }
            },
            [
              _c(
                "a",
                {
                  staticStyle: { color: "#999999", "font-size": "14px" },
                  attrs: { href: _vm.newsletter.titleUrl }
                },
                [_vm._v("View in browser")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("td", { attrs: { width: "15" } }),
        _vm._v(" "),
        _c(
          "td",
          { attrs: { align: "center" } },
          [
            _c(
              "div",
              { staticStyle: { "max-width": "670px", margin: "0 auto" } },
              [
                _c(
                  "table",
                  {
                    staticStyle: {
                      "max-width": "670px",
                      background: "#ffffff"
                    },
                    attrs: {
                      width: "100%",
                      "max-width": "670",
                      border: "0",
                      align: "center",
                      cellpadding: "0",
                      bgcolor: "#ffffff"
                    }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c(
                          "table",
                          {
                            staticStyle: {
                              background: "#ffffff",
                              margin: "0 auto"
                            },
                            attrs: {
                              width: "100%",
                              border: "0",
                              align: "center",
                              cellpadding: "0",
                              cellspacing: "0",
                              bgcolor: "#ffffff"
                            }
                          },
                          [
                            _c("tr", [
                              _c("td", { attrs: { width: "5%" } }),
                              _vm._v(" "),
                              _c("td", { attrs: { width: "90%" } }, [
                                _c(
                                  "table",
                                  {
                                    staticStyle: { "text-align": "left" },
                                    attrs: {
                                      width: "100%",
                                      border: "0",
                                      align: "center",
                                      cellpadding: "0",
                                      cellspacing: "0",
                                      bgcolor: "#ffffff"
                                    }
                                  },
                                  [
                                    _c("tr", [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          attrs: {
                                            height: "62%",
                                            valign: "bottom",
                                            align: "right"
                                          }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticStyle: {
                                                color: "#1fa0e8",
                                                padding: "0",
                                                margin: "0",
                                                "font-size": "14px",
                                                "letter-spacing": "1px"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "16px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Vol." +
                                                      _vm._s(
                                                        _vm.newsletter.vol
                                                      ) +
                                                      "  "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    color: "#666666",
                                                    "font-size": "14px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.newsletter.newsdate
                                                    )
                                                  )
                                                ]
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "letter-spacing": "0px",
                                                    "text-decoration": "none"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    " Editor in Chief - " +
                                                      _vm._s(
                                                        _vm.newsletter.author
                                                      )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _c(
                                          "table",
                                          {
                                            staticStyle: {
                                              "font-size": "14px"
                                            },
                                            attrs: {
                                              width: "100%",
                                              border: "0",
                                              align: "center",
                                              cellpadding: "0",
                                              cellspacing: "0"
                                            }
                                          },
                                          [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    "padding-top": "30px"
                                                  },
                                                  attrs: { colspan: "2" }
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        _vm.newsletter.topImage,
                                                      width: "100%"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    "padding-top": "30px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "14px",
                                                        color: "#666",
                                                        "line-height": "1.7",
                                                        "margin-bottom": "12px"
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.newsletter.topContent,
                                                      function(content) {
                                                        return _c(
                                                          "p",
                                                          {
                                                            key: content.key,
                                                            staticStyle: {
                                                              "margin-bottom":
                                                                "10px"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(content) +
                                                                "\n                                                                    "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { width: "5%" } })
                            ]),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.newsletter.mainContents, function(mainContent) {
              return _c(
                "div",
                {
                  key: mainContent.key,
                  staticStyle: { "max-width": "670px", margin: "0 auto" }
                },
                [
                  _c(
                    "table",
                    {
                      class: { "margin-top": mainContent.type === "head" },
                      staticStyle: {
                        "max-width": "670px",
                        background: "#ffffff"
                      },
                      attrs: {
                        width: "100%",
                        "max-width": "670",
                        border: "0",
                        align: "center",
                        cellpadding: "0",
                        bgcolor: "#ffffff"
                      }
                    },
                    [
                      _c("tr", [
                        _c("td", [
                          _c(
                            "table",
                            {
                              staticStyle: {
                                background: "#ffffff",
                                margin: "0 auto"
                              },
                              attrs: {
                                width: "100%",
                                border: "0",
                                align: "center",
                                cellpadding: "0",
                                cellspacing: "0",
                                bgcolor: "#ffffff"
                              }
                            },
                            [
                              _c("tr", [
                                _c("td", { attrs: { width: "5%" } }),
                                _vm._v(" "),
                                _c("td", { attrs: { width: "90%" } }, [
                                  _c(
                                    "table",
                                    {
                                      staticStyle: { "text-align": "left" },
                                      attrs: {
                                        width: "100%",
                                        border: "0",
                                        align: "center",
                                        cellpadding: "0",
                                        cellspacing: "0",
                                        bgcolor: "#ffffff"
                                      }
                                    },
                                    [
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _c(
                                            "table",
                                            {
                                              staticStyle: {
                                                "font-size": "14px"
                                              },
                                              attrs: {
                                                width: "100%",
                                                border: "0",
                                                align: "center",
                                                cellpadding: "0",
                                                cellspacing: "0"
                                              }
                                            },
                                            [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    class: {
                                                      "padding-top":
                                                        mainContent.type ===
                                                        "head"
                                                    }
                                                  },
                                                  [
                                                    mainContent.type ==
                                                      "head" &&
                                                    mainContent.headTitle
                                                      ? _c("div", [
                                                          _c("div", {
                                                            staticStyle: {
                                                              height: "16px",
                                                              "border-left":
                                                                "6px solid #1fa0e8",
                                                              display:
                                                                "inline-block",
                                                              "padding-right":
                                                                "6px"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "16px",
                                                                color: "#666"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  mainContent.headTitle
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticStyle: {
                                                        "margin-top": "30px"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    mainContent.primaryTitle
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "16px",
                                                              color: "#1fa0e8",
                                                              "line-height":
                                                                "1.7",
                                                              "text-decoration":
                                                                "none"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "a",
                                                              {
                                                                staticStyle: {
                                                                  "font-size":
                                                                    "16px",
                                                                  color:
                                                                    "#1fa0e8",
                                                                  "line-height":
                                                                    "1.7",
                                                                  "text-decoration":
                                                                    "none"
                                                                },
                                                                attrs: {
                                                                  target:
                                                                    "_blank",
                                                                  href:
                                                                    mainContent.primaryHref
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                                        " +
                                                                    _vm._s(
                                                                      mainContent.primaryTitle
                                                                    ) +
                                                                    "\n                                                                    "
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    mainContent.primaryTitle
                                                      ? _c(
                                                          "p",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "12px",
                                                              color: "#999999",
                                                              "margin-bottom":
                                                                "7px",
                                                              "margin-top": "0",
                                                              display:
                                                                "inline-block"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              " By " +
                                                                _vm._s(
                                                                  mainContent.author
                                                                ) +
                                                                "   "
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color:
                                                                    "#1fa0e8"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "  / Contributed by " +
                                                                    _vm._s(
                                                                      mainContent.region
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    mainContent.beforeContent
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "14px",
                                                              color: "#666666",
                                                              "line-height":
                                                                "1.7",
                                                              "padding-bottom":
                                                                "12px"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                    " +
                                                                _vm._s(
                                                                  mainContent.beforeContent
                                                                ) +
                                                                "\n                                                                "
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    mainContent.primaryTitle
                                                      ? _c(
                                                          "table",
                                                          {
                                                            staticStyle: {
                                                              "border-top":
                                                                "#eeeeee solid 1px",
                                                              background:
                                                                "#ffffff",
                                                              "padding-top":
                                                                "12px"
                                                            },
                                                            attrs: {
                                                              width: "100%",
                                                              border: "0",
                                                              cellpadding: "0",
                                                              bgcolor: "#ffffff"
                                                            }
                                                          },
                                                          [
                                                            _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "padding-right":
                                                                      "8px",
                                                                    color:
                                                                      "#999999",
                                                                    "font-size":
                                                                      "14px",
                                                                    "line-height":
                                                                      "1.9"
                                                                  },
                                                                  attrs: {
                                                                    valign:
                                                                      "top"
                                                                  }
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    staticStyle: {
                                                                      "padding-right":
                                                                        "8px",
                                                                      float:
                                                                        "left"
                                                                    },
                                                                    attrs: {
                                                                      src:
                                                                        "http://cdn2.pingpongx.com/newsletter/imgs/avatar.png"
                                                                    }
                                                                  }),
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      mainContent
                                                                        .primaryContent[0]
                                                                    )
                                                                  ),
                                                                  _vm._l(
                                                                    mainContent.primaryContent,
                                                                    function(
                                                                      content,
                                                                      index
                                                                    ) {
                                                                      return mainContent
                                                                        .primaryContent
                                                                        .length >
                                                                        1
                                                                        ? _c(
                                                                            "span",
                                                                            {
                                                                              key: index
                                                                            },
                                                                            [
                                                                              index >
                                                                              0
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticStyle: {
                                                                                        "margin-top":
                                                                                          "15px",
                                                                                        display:
                                                                                          "block"
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          content
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          mainContent.img
                                            ? _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "padding-top": "30px",
                                                      "text-align": "center"
                                                    },
                                                    attrs: { colspan: "2" }
                                                  },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src:
                                                          mainContent.img.src,
                                                        width: "70%"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticStyle: {
                                                          color: "#A5A5A5",
                                                          "font-size": "12px"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              mainContent.img
                                                                .title
                                                            ) +
                                                            "\n                                                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          mainContent.import
                                            ? _c(
                                                "table",
                                                {
                                                  staticStyle: {
                                                    "font-size": "14px"
                                                  },
                                                  attrs: {
                                                    width: "100%",
                                                    border: "0",
                                                    align: "center",
                                                    cellpadding: "0",
                                                    cellspacing: "0"
                                                  }
                                                },
                                                [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "padding-top": "30px"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "table",
                                                          {
                                                            attrs: {
                                                              width: "100%",
                                                              border: "0",
                                                              cellpadding: "0",
                                                              bgcolor: "#ffffff"
                                                            }
                                                          },
                                                          [
                                                            _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    color:
                                                                      "#666",
                                                                    "font-size":
                                                                      "14px",
                                                                    "line-height":
                                                                      "1.9"
                                                                  },
                                                                  attrs: {
                                                                    valign:
                                                                      "top"
                                                                  }
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    staticStyle: {
                                                                      "padding-right":
                                                                        "3px"
                                                                    },
                                                                    attrs: {
                                                                      src:
                                                                        "http://cdn2.pingpongx.com/newsletter/imgs/mark-left.png",
                                                                      width:
                                                                        "14"
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        mainContent
                                                                          .import
                                                                          .content
                                                                      )
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("img", {
                                                                    staticStyle: {
                                                                      "padding-left":
                                                                        "3px"
                                                                    },
                                                                    attrs: {
                                                                      src:
                                                                        "http://cdn2.pingpongx.com/newsletter/imgs/mark-right.png",
                                                                      width:
                                                                        "14"
                                                                    }
                                                                  }),
                                                                  _c("br"),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticStyle: {
                                                                        color:
                                                                          "#999"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "- " +
                                                                          _vm._s(
                                                                            mainContent
                                                                              .import
                                                                              .region
                                                                          )
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          mainContent.position != "end"
                                            ? _c(
                                                "div",
                                                {
                                                  staticStyle: {
                                                    "background-color": "#fff",
                                                    height: "1px",
                                                    "padding-top": "30px"
                                                  }
                                                },
                                                [
                                                  _c("div", {
                                                    staticStyle: {
                                                      height: "1px",
                                                      "background-color":
                                                        "#1fa0e8"
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { attrs: { width: "5%" } })
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      mainContent.position == "end"
                        ? _c("tr", [_vm._m(5, true)])
                        : _vm._e()
                    ]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _vm._t("finalContent"),
            _vm._v(" "),
            _c("tr", [
              _c("td", { attrs: { width: "15" } }),
              _vm._v(" "),
              _c(
                "td",
                { attrs: { align: "center" } },
                [_vm._m(6), _vm._v(" "), _vm._t("default")],
                2
              ),
              _vm._v(" "),
              _c("td", { attrs: { width: "15" } })
            ])
          ],
          2
        ),
        _vm._v(" "),
        _vm._m(7)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { attrs: { align: "center", colspan: "3", bgcolor: "#2080ca" } },
        [
          _c("div", { staticClass: "max-width: 670px;" }, [
            _c(
              "table",
              {
                staticStyle: {
                  "max-width": "670px",
                  "text-align": "left",
                  background: "#2080ca"
                },
                attrs: {
                  width: "100%",
                  "max-width": "670",
                  border: "0",
                  align: "center",
                  cellpadding: "0",
                  bgcolor: "#2080ca"
                }
              },
              [
                _c("tr", [_c("td", { attrs: { colspan: "3", height: "30" } })]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { attrs: { width: "4%" } }),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        "padding-right": "20px",
                        "font-size": "14px",
                        color: "#ffffff"
                      },
                      attrs: { width: "70%" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticStyle: {
                            margin: "0",
                            "margin-bottom": "18px",
                            "font-size": "16px",
                            "letter-spacing": "-1px"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    想与大家分享你的独到见解？"
                          ),
                          _c("br"),
                          _vm._v(
                            " 想让你的新闻评述也刊登在「PingPong看世界」被所有人传阅？\n                                    "
                          ),
                          _c("br")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticStyle: { margin: "0", "font-weight": "200" } },
                        [
                          _vm._v(
                            "\n                                    SO EASY!"
                          ),
                          _c("br"),
                          _vm._v(" 将新闻链接和你的一小段评述发送至 "),
                          _c(
                            "a",
                            {
                              staticStyle: {
                                color: "#ffffff",
                                "text-decoration": "underline"
                              },
                              attrs: {
                                href: "mailto:Charles.Horne@pingpongx.com"
                              }
                            },
                            [_vm._v("Charles.Horne@pingpongx.com")]
                          ),
                          _vm._v(
                            "                                (邮件主题请以“【投稿】” 开头)，与跨境电商或支付相关的新闻均可。如果是英文新闻请附上中文评述，反之中文新闻则请附上英文评述。第一次投稿被选中的小伙伴，你的头像会和评述一起出现在「PingPong看世界」中哟！准备好被膜拜了吗?\n                                    期待你的精彩投稿！\n                                "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("td", { attrs: { width: "26%", valign: "top" } }, [
                    _c("img", {
                      attrs: {
                        src:
                          "http://cdn2.pingpongx.com/newsletter/imgs/newsletter-right.png",
                        width: "100%",
                        height: "161"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { attrs: { colspan: "3" } }, [
                    _c("div", { staticStyle: { height: "30px" } })
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "3", height: "10" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { height: "30" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { width: "38%", valign: "top" } }, [
      _c("img", {
        staticStyle: { "margin-top": "4px" },
        attrs: {
          border: "0",
          height: "37",
          src: "http://cdn2.pingpongx.com/client/imgs/logo.png",
          width: "116"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_c("div", { staticStyle: { height: "30px" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("div", { staticStyle: { height: "30px" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          "margin-top": "12px",
          color: "#999999",
          "text-align": "center",
          background: "#F5F5F5",
          "font-size": "12px"
        }
      },
      [
        _vm._v(
          "\n                        版权所有 2015-2018 ©PingPong Global Solutions, Inc. All Rights Reserved."
        ),
        _c(
          "a",
          {
            staticStyle: { color: "#666666" },
            attrs: { href: "http://www.pingpongx.com" }
          },
          [_vm._v("www.pingpongx.com")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { height: "15" } })])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d5d636e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=0.js.map