(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rumah-rumah-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/rumah/rumah.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rumah/rumah.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRumahRumahPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Rumah Adat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <ion-content>\r\n      <div class=\"ion-margin \"*ngIf=\"Data\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-md *ngFor=\"let pageData of Data; let i = index\">\r\n              <ion-card>\r\n                <img src=\"{{pageData.imgUrl}}\" />\r\n                <ion-card-content>\r\n                  <ion-card-title class=\"title\">\r\n                  Rumah <strong>{{pageData.Nama}}</strong>\r\n                  </ion-card-title>\r\n                  <ion-card-subtitle class=\"subtitle\"> Daerah Asal : <strong>{{pageData.Daerah}}</strong> </ion-card-subtitle>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </ion-content>\r\n  </ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/rumah/rumah-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/rumah/rumah-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: RumahPageRoutingModule */

    /***/
    function srcAppRumahRumahRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RumahPageRoutingModule", function () {
        return RumahPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _rumah_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rumah.page */
      "./src/app/rumah/rumah.page.ts");

      var routes = [{
        path: '',
        component: _rumah_page__WEBPACK_IMPORTED_MODULE_3__["RumahPage"]
      }];

      var RumahPageRoutingModule = function RumahPageRoutingModule() {
        _classCallCheck(this, RumahPageRoutingModule);
      };

      RumahPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RumahPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/rumah/rumah.module.ts":
    /*!***************************************!*\
      !*** ./src/app/rumah/rumah.module.ts ***!
      \***************************************/

    /*! exports provided: RumahPageModule */

    /***/
    function srcAppRumahRumahModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RumahPageModule", function () {
        return RumahPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _rumah_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rumah-routing.module */
      "./src/app/rumah/rumah-routing.module.ts");
      /* harmony import */


      var _rumah_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rumah.page */
      "./src/app/rumah/rumah.page.ts");

      var RumahPageModule = function RumahPageModule() {
        _classCallCheck(this, RumahPageModule);
      };

      RumahPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rumah_routing_module__WEBPACK_IMPORTED_MODULE_5__["RumahPageRoutingModule"]],
        declarations: [_rumah_page__WEBPACK_IMPORTED_MODULE_6__["RumahPage"]]
      })], RumahPageModule);
      /***/
    },

    /***/
    "./src/app/rumah/rumah.page.scss":
    /*!***************************************!*\
      !*** ./src/app/rumah/rumah.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppRumahRumahPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 100%;\n}\n\nion-content {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVtYWgvcnVtYWgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcnVtYWgvcnVtYWgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/rumah/rumah.page.ts":
    /*!*************************************!*\
      !*** ./src/app/rumah/rumah.page.ts ***!
      \*************************************/

    /*! exports provided: RumahPage */

    /***/
    function srcAppRumahRumahPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RumahPage", function () {
        return RumahPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var RumahPage = /*#__PURE__*/function () {
        function RumahPage(firebaseDB) {
          _classCallCheck(this, RumahPage);

          this.firebaseDB = firebaseDB;
          this.Data = [];
        }

        _createClass(RumahPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this = this;

            this.Data = [];
            this.firebaseDB.collection('rumah').valueChanges().subscribe(function (data) {
              _this.Data = data;
              console.log(_this.Data);
            });
          }
        }]);

        return RumahPage;
      }();

      RumahPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      RumahPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rumah',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rumah.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/rumah/rumah.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rumah.page.scss */
        "./src/app/rumah/rumah.page.scss"))["default"]]
      })], RumahPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rumah-rumah-module-es5.js.map