function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-sidenav></app-sidenav>\n\n<app-topnav></app-topnav>\n\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div> -->\n<app-topnav></app-topnav>\n<app-sidenav></app-sidenav>\n<router-outlet></router-outlet>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompanyCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>{{company}}</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"col-md-12 row\">\n\n        <div class=\"col-md-6\">\n            {{ 'home.title' | translate }}\n            <hr>\n            {{ 'home.address' | translate }}\n<br>\n<hr>\n{{ 'home.phone' | translate }}\n<br>\n<hr>\n{{ 'home.email' | translate }}\n\n        </div>\n\n        <div class=\"col-md-6\">\n            <div style=\"text-align:center\">\n                <h2>{{ 'home.contact' | translate }}</h2>\n              </div>\n              <div class=\"row\">\n                <div class=\"\">\n                  <form [formGroup]=\"f\" novalidate>\n                    <label for=\"fname\">{{ 'home.name' | translate }}</label>\n                    <input type=\"text\" id=\"name\" formControlName=\"name\" name=\"name\" placeholder=\"Your name..\">\n                    <label for=\"lname\">{{ 'home.emailid' | translate }}</label>\n                    <input type=\"text\" id=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Your Email Address..\">\n                    <label for=\"lname\">{{ 'home.telephone' | translate }}</label>\n                    <input type=\"text\" id=\"telephone\" formControlName=\"telephone\" name=\"telephone\" placeholder=\"Your telephone number..\">\n                   \n                    <label for=\"subject\">{{ 'home.comment' | translate }}</label>\n                    <textarea id=\"subject\" name=\"comment\" formControlName=\"comment\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n                    <button type=\"submit\" (click)=\"onSubmit(modalTemplate)\" class=\"btn btn-primary\">Submit</button>\n                  </form>\n                </div>\n              </div>\n        </div>\n    </div>\n   \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidenav/sidenav.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidenav/sidenav.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSidenavSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\n      <div class=\"sidebar-heading\">{{ 'home.navigation' | translate }} </div>\n      <div class=\"list-group list-group-flush\">\n        <a [routerLink]=\"['product', language]\" style=\" pointer-events: none;\" class=\"list-group-item list-group-item-action bg-light\">{{ 'home.home' | translate }}</a>\n        <a [routerLink]=\"['product', language]\"  style=\" pointer-events: none;\" class=\"list-group-item list-group-item-action bg-light\">{{ 'home.product' | translate }} <span class=\"badge badge-pill badge-dark\">{{countitems}}</span></a>\n        <a [routerLink]=\"['company', language]\" style=\" pointer-events: none;\" class=\"list-group-item list-group-item-action bg-light\">{{ 'home.company' | translate }}</a>\n        <a [routerLink]=\"['contact', language]\" style=\" pointer-events: none;\" class=\"list-group-item list-group-item-action bg-light\">{{ 'home.contact' | translate }}</a>\n       \n      </div>\n    </div>\n    <!-- /#sidebar-wrapper -->\n  \n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n  \n      <br>\n  \n      <div class=\"container-fluid\">\n        <h1 class=\"mt-4\">{{ 'home.content' | translate }}</h1>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!-- /#page-content-wrapper -->\n  \n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/topnav/topnav.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/topnav/topnav.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutTopnavTopnavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img src=\"https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png\" style=\"height: 50px;width:50px;\">\n        </div>\n        <div class=\"col-md-4\">\n\n        </div>\n        <div class=\"col-md-4\">\n            {{countitems}} {{'home.items' | translate}} / {{'home.symbol' | translate}} {{totalprice}} \n        </div>\n\n    </div>\n\n</div>\n<nav class=\"navbar navbar-fixed-top navbar-dark\">\n    \n    <nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav mr-auto\">\n      \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['login', language]\">{{ 'home.home' | translate }}</a>\n            </li>\n        \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['product', language]\" >{{ 'home.product' | translate }} <span class=\"badge badge-pill badge-light\">{{countitems}}</span></a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['company', language]\">{{ 'home.company' | translate }}</a>\n              </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['contact', language]\">{{ 'home.contact' | translate }}</a>\n              </li>\n      \n          </ul>\n\n          <!-- <input type=\"button\" [(ngModel)]=\"namecopy\" (click)=\"logout(loginvalue)\" name=\"name\" value=\"namecopy\" placeholder=\"name\" />{{namecopy}} -->\n\n         \n\n        <select #langSelect (change)=\"useLanguage(langSelect.value)\">\n        <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n        </select>\n        </div>\n      </nav>\n  </nav>\n\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loggedIn\" class=\"container\">\n  {{'home.loggedin' | translate}}\n  <br>\n  {{'home.accesspages' | translate}}\n  <br>\n  <button type=\"submit\" (click)=\"logout()\"  \n  class=\"btn btn-primary\">Logout</button>&nbsp;&nbsp;&nbsp;&nbsp;\n</div>\n\n<div *ngIf=\"!loggedIn\" class=\"container\">\n \n\t<div class=\"\" >\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"\">{{'home.login' | translate}}</h4>\n\t\t\t<div >\n\t\t\t\t<form [formGroup]=\"f\" novalidate>\n          <div class=\"form-group\" [class.has-danger]=\"((f.get('name').hasError('required') || f.get('name').hasError('email')) && f.get('name').hasError('email') )&& f.get('name').touched\">\n    <label for=\"exampleInputEmail1\">{{'home.emailid' | translate}}</label>\n    <input  formControlName=\"name\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" \n  [class.form-control-danger]=\"f.get('name').hasError('required') && f.get('name').touched\"\n   placeholder=\"Enter email\">\n      <div *ngIf=\"f.get('name').hasError('required') && f.get('name').touched\" class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n         <div *ngIf=\"f.get('name').hasError('email') && f.get('name').touched && !f.get('name').hasError('required')\" class=\"form-control-feedback\">That's not an email address</div>\n  </div>\n  <div class=\"form-group\" [class.has-danger]=\"(f.get('password').hasError('required') || f.get('password').hasError('minlength')) && f.get('password').touched\">\n    <label for=\"exampleInputPassword1\">{{'home.password' | translate}}</label>\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" \n      [class.form-control-danger]=\"f.get('password').hasError('required') && f.get('password').touched\"\n    placeholder=\"Password\">\n\n    <div *ngIf=\"f.get('password').hasError('required') && f.get('password').touched\" class=\"form-control-feedback\">Password required</div>\n\n        <div *ngIf=\"f.get('password').hasError('minlength') && f.get('password').touched\" class=\"form-control-feedback\">Minimum length is 6 characters. Add more!</div>\n\n\n  </div>\n\n  \n    <button type=\"submit\" (click)=\"onSubmit(modalTemplate)\" class=\"btn btn-primary\">Submit</button>\n  \n    <button type=\"submit\" (click)=\"onReset()\" class=\"btn\">Clear </button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <div class=\"row product-list\" style=\"margin: 1em 0;\">\n\n      <!-- START : Product Card -->\n      <div class=\"col-sm-12 col-md-6 col-lg-4 product-list__item\" *ngFor=\"let product of products; let i = index;\">\n        <div class=\"card mb-4 shadow-sm pd-5\">\n          <div class=\"product-list__image\">\n           <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"Card image cap\">\n          </div>\n\n          <div class=\"card-body\">\n            <h6>{{product.name }} / Rs. {{product.price}}</h6>\n            <!-- <p class=\"card-text\">{{product.description}}</p> -->\n            \n              <div class=\"\">\n                <button type=\"button \" class=\"btn btn-sm block\" [ngClass]=\"this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'\" (click)=\"addToCart($event, product.id)\">{{ 'home.addtocart' | translate }}</button>\n              </div>\n          </div>\n        </div>\n      </div>\n      <!-- END : Product Card -->\n\n    </div>\n  </div>  ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company/company.component */
    "./src/app/company/company.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: "product/:lang",
      children: [{
        path: "",
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
      }, {
        path: "product/:lang",
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
      }]
    }, {
      path: "company/:lang",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      component: _company_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"]
    }, {
      path: "login/:lang",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: "contact/:lang",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'shopping';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.setItem('language', 'en'); //Toggle Click Function

          jquery__WEBPACK_IMPORTED_MODULE_2__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#wrapper").toggleClass("toggled");
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/sidenav.service */
    "./src/app/services/sidenav.service.ts");
    /* harmony import */


    var _layout_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/topnav/topnav.component */
    "./src/app/layout/topnav/topnav.component.ts");
    /* harmony import */


    var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/sidenav/sidenav.component */
    "./src/app/layout/sidenav/sidenav.component.ts");
    /* harmony import */


    var _sidebar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sidebar.directive */
    "./src/app/sidebar.directive.ts");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./company/company.component */
    "./src/app/company/company.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var JWT_Module_Options = {
      config: {
        tokenGetter: tokenGetter
      }
    };

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _layout_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__["TopnavComponent"], _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"], _sidebar_directive__WEBPACK_IMPORTED_MODULE_8__["SidebarDirective"], _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot(JWT_Module_Options), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
        }
      })],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"];
        }),
        multi: true
      }, _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["APP_BASE_HREF"],
        useValue: window['_app_base'] || '/'
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(_authservice, _router, activatedRoute, translate) {
        _classCallCheck(this, AuthGuard);

        this._authservice = _authservice;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          console.log(24245);

          if (localStorage.getItem('token')) {
            // console.log(this._authservice.loggedin);
            // console.log("1");
            return true;
          } else {
            //   console.log("2");
            var url = this.activatedRoute['_routerState'].snapshot.url;
            console.log(url);
            console.log(this._router.url.split('/')[2]);

            var lang = this._router.url.split('/')[2];

            this._router.navigate(['/login', lang]);

            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/company/company.component.css":
  /*!***********************************************!*\
    !*** ./src/app/company/company.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompanyCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/company/company.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/company/company.component.ts ***!
    \**********************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppCompanyCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/company.service */
    "./src/app/services/company.service.ts");

    var CompanyComponent = /*#__PURE__*/function () {
      function CompanyComponent(activatedRoute, router, translate, companyservice) {
        _classCallCheck(this, CompanyComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.translate = translate;
        this.companyservice = companyservice;
        this.company = [];
      }

      _createClass(CompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            console.log(params['lang']);

            _this.translate.use(params['lang']);

            _this.companyservice.getCompanylist(params['lang']).subscribe(function (data) {
              // console.log(data.home['products']);
              _this.company = data.message;
              console.log(_this.company);
            });
          });
        }
      }]);

      return CompanyComponent;
    }();

    CompanyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
      }];
    };

    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company.component.css */
      "./src/app/company/company.component.css"))["default"]]
    })], CompanyComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Style inputs */\r\n\r\ninput[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n  resize: vertical;\r\n}\r\n\r\ninput[type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n/* Style the container/contact section */\r\n\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\r\n}\r\n\r\n/* Create two columns that float next to eachother */\r\n\r\n.column {\r\n  float: left;\r\n  width: 50%;\r\n  margin-top: 6px;\r\n  padding: 20px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .column, input[type=submit] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsd0NBQXdDOztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBLG9EQUFvRDs7QUFDcEQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBLCtJQUErSTs7QUFDL0k7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY29udGFpbmVyL2NvbnRhY3Qgc2VjdGlvbiAqL1xyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGNvbHVtbnMgdGhhdCBmbG9hdCBuZXh0IHRvIGVhY2hvdGhlciAqL1xyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbHVtbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/company.service */
    "./src/app/services/company.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(fb, router, activatedRoute, translate, contactservice) {
        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.contactservice = contactservice;
        this.f = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]]
        });
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedRoute.params.subscribe(function (params) {
            console.log(params['lang']);

            _this2.translate.use(params['lang']);

            _this2.language = params['lang'];
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(modal) {
          var _this3 = this;

          if (this.f.valid) {
            console.log(this.f.value);
            this.contactservice.savecontact(this.f.value).subscribe(function (data) {
              console.log(data); //   this.products = data.home['products'];

              alert(data.message);
            });
          } else {
            var temp = this.f.controls['name'];
            console.log('the controls', this.f.controls);
            console.log('name form', temp);
            Object.keys(this.f.controls).forEach(function (key) {
              _this3.f.get(key).markAsTouched();
            });
          }
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/layout/sidenav/sidenav.component.css":
  /*!******************************************************!*\
    !*** ./src/app/layout/sidenav/sidenav.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSidenavSidenavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  #sidebar-wrapper {\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n  }\r\n  \r\n  #sidebar-wrapper .sidebar-heading {\r\n    padding: 0.875rem 1.25rem;\r\n    font-size: 1.2rem;\r\n  }\r\n  \r\n  #sidebar-wrapper .list-group {\r\n    width: 15rem;\r\n  }\r\n  \r\n  #page-content-wrapper {\r\n    min-width: 100vw;\r\n  }\r\n  \r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    #sidebar-wrapper {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled #sidebar-wrapper {\r\n      margin-left: -15rem;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUluQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuICBcclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICB9XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/sidenav/sidenav.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/sidenav/sidenav.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppLayoutSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/sharedservice.service */
    "./src/app/services/sharedservice.service.ts");
    /* harmony import */


    var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/sidenav.service */
    "./src/app/services/sidenav.service.ts");

    var SidenavComponent = /*#__PURE__*/function () {
      function SidenavComponent(sidenavserivce, sharedservice, activatedRoute, router, translate, cdr) {
        _classCallCheck(this, SidenavComponent);

        this.sidenavserivce = sidenavserivce;
        this.sharedservice = sharedservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.translate = translate;
        this.cdr = cdr;
        this.countitems = 0;
        this.language = 'en';
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sharedservice.getProducts().subscribe(function (data) {
            console.log(data);
            _this4.countitems = data.length;
            console.log(_this4.countitems);
          });
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ctorParameters = function () {
      return [{
        type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]
      }, {
        type: src_app_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__["SharedserviceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidenav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidenav/sidenav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav.component.css */
      "./src/app/layout/sidenav/sidenav.component.css"))["default"]]
    })], SidenavComponent);
    /***/
  },

  /***/
  "./src/app/layout/topnav/topnav.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/topnav/topnav.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutTopnavTopnavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item{\r\n    padding:2px;\r\n    margin-left: 7px;\r\n}\r\n\r\n\r\n.navbar{\r\n    position: relative;\r\n    display: block !important;\r\n    padding: .0rem 0rem !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVte1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcblxyXG5cclxuLm5hdmJhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAuMHJlbSAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/topnav/topnav.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/topnav/topnav.component.ts ***!
    \***************************************************/

  /*! exports provided: TopnavComponent */

  /***/
  function srcAppLayoutTopnavTopnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return TopnavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/sharedservice.service */
    "./src/app/services/sharedservice.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_productlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/productlist.service */
    "./src/app/services/productlist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TopnavComponent = /*#__PURE__*/function () {
      function TopnavComponent(sharedservice, translate, productservice, router, activatedRoute) {
        _classCallCheck(this, TopnavComponent);

        this.sharedservice = sharedservice;
        this.translate = translate;
        this.productservice = productservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.countitems = 0;
        this.totalprice = 0;
        this.lang = 'en';
        this.language = 'en';
        this.namecopy = 'Login';
        this.products = [];
      }

      _createClass(TopnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.translate.addLangs(['en', 'hi']);
          this.translate.setDefaultLang('en');
          var browserLang = this.translate.getBrowserLang();
          this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');

          if (localStorage.getItem("token")) {
            this.loginvalue = "Logout";
          } else {
            this.loginvalue = "Login";
          }

          this.sharedservice.getProducts().subscribe(function (data) {
            console.log(data);
            _this5.countitems = data.length;
            console.log(_this5.countitems);

            for (var i = 0; i < data.length; i++) {
              _this5.totalprice += data[i].price;
            }
          });
        }
      }, {
        key: "useLanguage",
        value: function useLanguage(language) {
          console.log(language);
          this.translate.use(language);
          var url = this.activatedRoute['_routerState'].snapshot.url;
          console.log(url);
          console.log(this.router.url.split('/')[1]);
          this.language = language;
          this.router.navigate([this.router.url.split('/')[1], language]);
        }
      }, {
        key: "logout",
        value: function logout(loginvalue) {
          console.log(loginvalue);

          if (loginvalue == "Login") {
            this.loginvalue = "Login";
            this.router.navigate(['login', this.language]);
          } else {
            this.loginvalue = "Logout";
            alert("Logged out successfully!!");
            localStorage.clear();
          }
        }
      }]);

      return TopnavComponent;
    }();

    TopnavComponent.ctorParameters = function () {
      return [{
        type: src_app_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__["SharedserviceService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_productlist_service__WEBPACK_IMPORTED_MODULE_4__["ProductlistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topnav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/topnav/topnav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topnav.component.css */
      "./src/app/layout/topnav/topnav.component.css"))["default"]]
    })], TopnavComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, loginservice, router, activatedRoute, translate) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.loginservice = loginservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.loggedIn = false;
        this.f = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (localStorage.getItem('token')) {
            this.loggedIn = true;
          }

          this.activatedRoute.params.subscribe(function (params) {
            console.log(params['lang']);

            _this6.translate.use(params['lang']);

            _this6.language = params['lang'];
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(modal) {
          var _this7 = this;

          if (this.f.valid) {
            console.log(this.f.value);
            this.loginservice.login(this.f.value).subscribe(function (data) {
              console.log(data); //   this.products = data.home['products'];

              alert(data.message);

              if (data.status_code == 200) {
                localStorage.setItem("token", data.token);

                _this7.router.navigate(["company", _this7.language]);
              }
            });
          } else {
            var temp = this.f.controls['name'];
            console.log('the controls', this.f.controls);
            console.log('name form', temp);
            Object.keys(this.f.controls).forEach(function (key) {
              _this7.f.get(key).markAsTouched();
            });
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.f.reset();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loggedIn = false;
          localStorage.clear();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/product/product.component.css":
  /*!***********************************************!*\
    !*** ./src/app/product/product.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block {\r\n    display: block;\r\n    width: 100%;\r\n    border: none;\r\n    background-color:rgb(86, 109, 97);\r\n    padding: 14px 28px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  \r\n  .card-body {\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 0.25rem !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7O0VBR0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig4NiwgMTA5LCA5Nyk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_productlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/productlist.service */
    "./src/app/services/productlist.service.ts");
    /* harmony import */


    var _services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/sharedservice.service */
    "./src/app/services/sharedservice.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(productservice, mySharedService, activatedRoute, router, translate) {
        _classCallCheck(this, ProductComponent);

        this.productservice = productservice;
        this.mySharedService = mySharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.translate = translate;
        this.products = [];
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.activatedRoute.params.subscribe(function (params) {
            console.log(params['lang']);

            _this8.translate.use(params['lang']);

            _this8.productservice.getProducts(params['lang']).subscribe(function (data) {
              // console.log(data.home['products']);
              _this8.products = data.home['products'];
              console.log(_this8.products);
              _this8.isAdded = new Array(_this8.products.length);

              _this8.isAdded.fill(false, 0, _this8.products.length);

              console.log('this.isAdded -> ', _this8.isAdded, _this8.products);
            });
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(event, productId) {
          var _this9 = this;

          // If Item is already added then display alert message
          if (event.target.classList.contains('btn-success')) {
            alert('This product is already added into cart.');
            return false;
          } // Change button color to green


          this.products.map(function (item, index) {
            if (item.id === productId) {
              _this9.isAdded[index] = true;
            }
          });
          this.singleProduct = this.products.filter(function (product) {
            return product.id === productId;
          }); // this.cartItems.push(this.singleProduct[0]);

          this.mySharedService.addProductToCart(this.singleProduct[0]);
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _services_productlist_service__WEBPACK_IMPORTED_MODULE_3__["ProductlistService"]
      }, {
        type: _services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__["SharedserviceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product.component.css"))["default"]]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwtHelper, token) {
        _classCallCheck(this, AuthService);

        this.jwtHelper = jwtHelper;
        this.token = token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = localStorage.getItem('token'); // Check whether the token is expired and return
          // true or false

          return !this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "loggedin",
        value: function loggedin() {
          //  return true;
          return !!localStorage.getItem('token');
        }
      }, {
        key: "changeAuthStatus",
        value: function changeAuthStatus(value) {
          this.loggedIn.next(value);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
      }, {
        type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/company.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/company.service.ts ***!
    \*********************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppServicesCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var CompanyService = /*#__PURE__*/function () {
      function CompanyService(http, token) {
        _classCallCheck(this, CompanyService);

        this.http = http;
        this.token = token;
        this.url = "http://192.168.0.4/api/";
        this.reqheadermain = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Authorization': 'Bearer ' + this.token.getToken()
        });
      }

      _createClass(CompanyService, [{
        key: "getCompanylist",
        value: function getCompanylist(value) {
          var lang = {
            lang: value
          };
          return this.http.post(this.url + 'getcompany', lang, {
            headers: this.reqheadermain
          });
        }
      }, {
        key: "savecontact",
        value: function savecontact(value) {
          return this.http.post(this.url + 'savecontact', value, {
            headers: this.reqheadermain
          });
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
      }];
    };

    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CompanyService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.url = "http://192.168.0.4/api/";
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(value) {
          // var language =localStorage.getItem('language');
          return this.http.post(this.url + 'login', value);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/productlist.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/productlist.service.ts ***!
    \*************************************************/

  /*! exports provided: ProductlistService */

  /***/
  function srcAppServicesProductlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductlistService", function () {
      return ProductlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductlistService = /*#__PURE__*/function () {
      function ProductlistService(http) {
        _classCallCheck(this, ProductlistService);

        this.http = http;
      }

      _createClass(ProductlistService, [{
        key: "getProducts",
        value: function getProducts(lang) {
          // var language =localStorage.getItem('language');
          if (lang == 'en') {
            return this.http.get('./assets/i18n/en.json');
          }

          if (lang == 'hi') {
            return this.http.get('./assets/i18n/hi.json');
          }
        }
      }]);

      return ProductlistService;
    }();

    ProductlistService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductlistService);
    /***/
  },

  /***/
  "./src/app/services/sharedservice.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/sharedservice.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedserviceService */

  /***/
  function srcAppServicesSharedserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedserviceService", function () {
      return SharedserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedserviceService = /*#__PURE__*/function () {
      function SharedserviceService() {
        _classCallCheck(this, SharedserviceService);

        this.cartItems = [];
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SharedserviceService, [{
        key: "getProducts",
        value: function getProducts() {
          //console.log('this.cartItems :', this.cartItems);
          return this.products.asObservable();
        }
      }, {
        key: "setProducts",
        value: function setProducts(products) {
          var _this$cartItems;

          (_this$cartItems = this.cartItems).push.apply(_this$cartItems, _toConsumableArray(products));

          this.products.next(products);
        } // Add single product to the cart

      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          this.cartItems.push(product);
          console.log(this.cartItems);
          this.products.next(this.cartItems);
        } // Remove single product from the cart

      }, {
        key: "removeProductFromCart",
        value: function removeProductFromCart(productId) {
          var _this10 = this;

          this.cartItems.map(function (item, index) {
            if (item.id === productId) {
              _this10.cartItems.splice(index, 1);
            }
          }); // Update Observable value

          this.products.next(this.cartItems);
        } // Remove all the items added to the cart

      }, {
        key: "emptryCart",
        value: function emptryCart() {
          this.cartItems.length = 0;
          this.products.next(this.cartItems);
        } // Calculate total price on item added to the cart

      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          var total = 0;
          this.cartItems.map(function (item) {
            total += item.price;
          });
          return total;
        }
      }]);

      return SharedserviceService;
    }();

    SharedserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedserviceService);
    /***/
  },

  /***/
  "./src/app/services/sidenav.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/sidenav.service.ts ***!
    \*********************************************/

  /*! exports provided: SidenavService */

  /***/
  function srcAppServicesSidenavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavService", function () {
      return SidenavService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidenavService = /*#__PURE__*/function () {
      function SidenavService() {
        _classCallCheck(this, SidenavService);

        this.hideSideNav = false;
      }

      _createClass(SidenavService, [{
        key: "toggleSideNav",
        value: function toggleSideNav() {
          console.log(1);
          this.hideSideNav = !this.hideSideNav;
        }
      }]);

      return SidenavService;
    }();

    SidenavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SidenavService);
    /***/
  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenService = /*#__PURE__*/function () {
      function TokenService() // public masterService : MasterService
      {
        _classCallCheck(this, TokenService);

        this.url = '';
        this.iss = {
          // login : 'http://192.168.1.237/api/dologin',
          login: 'http://192.168.1.229/api/dologin'
        }; // this.url = masterService.url; 
      }

      _createClass(TokenService, [{
        key: "handle",
        value: function handle(token) {
          this.set(token); // console.log(this.isValid());
          // console.log(this.payload(token));
        }
      }, {
        key: "set",
        value: function set(token) {
          // console.log("setting token");
          //  console.log(token);
          // const tokenvalue = token.split('.')[1];
          // const value = token.split('.')[2];
          // const mainvalue = JSON.parse(atob(tokenvalue));
          // delete mainvalue.code;
          // const obj = btoa(JSON.stringify(mainvalue))
          // const maintoken = obj+'.'+value;
          localStorage.setItem('token', token);
          var token1 = this.getToken(); // var check = {"original":token,"generatedtoken":token1}
          // console.log(check);
        }
      }, {
        key: "get",
        value: function get() {
          return localStorage.getItem('token');
        }
      }, {
        key: "remove",
        value: function remove() {
          return localStorage.removeItem('token');
        }
      }, {
        key: "isValid",
        value: function isValid() {
          var token = this.get();

          if (token) {
            var payload = this.payload(token);

            if (payload) {
              // Object.keys;
              //    console.log("Payload hii");
              // console.log(this.iss);
              // console.log(payload.iss);
              // const obj = <any>Object;
              // return  obj.values(this.iss).map(x => x.substr(0, x.length - 4))?true:false;
              return true; // return Object.values(this.iss).indexOf(payload.iss) > -1 ? true:false
            }
          }

          return false;
        }
      }, {
        key: "payload",
        value: function payload(token) {
          var payload = token.split('.')[0];
          return this.decode(payload);
        }
      }, {
        key: "decode",
        value: function decode(payload) {
          return JSON.parse(atob(payload));
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.isValid();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          // var mainfirst = this.get();
          //  const mainfirst = this.get().split('.')[0];
          //  const mainsecond = this.get().split('.')[1];
          //   const myvalue = this.decode(mainfirst);
          //   myvalue.code = "navituschool";
          //   var obj = {
          //     "typ": "JWT",
          //     "alg": "HS256"
          //   };
          //   var myJSON = JSON.stringify(obj);
          //   const mytype = btoa(myJSON)
          //   const secondvalue = this.Base64EncodeUrl(btoa(JSON.stringify(myvalue)));
          //   const finaltoken = mytype+'.'+secondvalue+'.'+mainsecond;
          var finaltoken = localStorage.getItem('token');
          return finaltoken;
        }
      }, {
        key: "Base64EncodeUrl",
        value: function Base64EncodeUrl(str) {
          return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
        }
      }]);

      return TokenService;
    }();

    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenService);
    /***/
  },

  /***/
  "./src/app/sidebar.directive.ts":
  /*!**************************************!*\
    !*** ./src/app/sidebar.directive.ts ***!
    \**************************************/

  /*! exports provided: SidebarDirective */

  /***/
  function srcAppSidebarDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarDirective", function () {
      return SidebarDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarDirective = /*#__PURE__*/function () {
      function SidebarDirective() {
        _classCallCheck(this, SidebarDirective);

        this.click = false;
      }

      _createClass(SidebarDirective, [{
        key: "onClic",
        value: function onClic() {
          console.log(242535);
          this.click = !this.click;
        }
      }]);

      return SidebarDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-open')], SidebarDirective.prototype, "click", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], SidebarDirective.prototype, "onClic", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appSidebar]',
      exportAs: 'appSidebar'
    })], SidebarDirective);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\shopping\shopping_angular\shopping\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map