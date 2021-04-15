(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["baju-baju-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/baju/baju.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/baju/baju.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBajuBajuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Baju Daerah</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <ion-content>\r\n      <div class=\"ion-margin \"*ngIf=\"Data\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let pageData of Data; let i = index\">\r\n              <ion-card>\r\n                <img src=\"{{pageData.imgUrl}}\" />\r\n                <ion-card-content>\r\n                  <ion-card-title class=\"title\">\r\n                    Baju <strong>{{pageData.Nama}}</strong>\r\n                  </ion-card-title>\r\n                  <ion-card-subtitle class=\"subtitle\"> Daerah Asal : <strong>{{pageData.Daerah}}</strong> </ion-card-subtitle>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </ion-content>\r\n  </ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/baju/baju-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/baju/baju-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: BajuPageRoutingModule */

    /***/
    function srcAppBajuBajuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BajuPageRoutingModule", function () {
        return BajuPageRoutingModule;
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


      var _baju_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./baju.page */
      "./src/app/baju/baju.page.ts");

      var routes = [{
        path: '',
        component: _baju_page__WEBPACK_IMPORTED_MODULE_3__["BajuPage"]
      }];

      var BajuPageRoutingModule = function BajuPageRoutingModule() {
        _classCallCheck(this, BajuPageRoutingModule);
      };

      BajuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BajuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/baju/baju.module.ts":
    /*!*************************************!*\
      !*** ./src/app/baju/baju.module.ts ***!
      \*************************************/

    /*! exports provided: BajuPageModule */

    /***/
    function srcAppBajuBajuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BajuPageModule", function () {
        return BajuPageModule;
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


      var _baju_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./baju-routing.module */
      "./src/app/baju/baju-routing.module.ts");
      /* harmony import */


      var _baju_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./baju.page */
      "./src/app/baju/baju.page.ts");

      var BajuPageModule = function BajuPageModule() {
        _classCallCheck(this, BajuPageModule);
      };

      BajuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _baju_routing_module__WEBPACK_IMPORTED_MODULE_5__["BajuPageRoutingModule"]],
        declarations: [_baju_page__WEBPACK_IMPORTED_MODULE_6__["BajuPage"]]
      })], BajuPageModule);
      /***/
    },

    /***/
    "./src/app/baju/baju.page.scss":
    /*!*************************************!*\
      !*** ./src/app/baju/baju.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppBajuBajuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 100%;\n}\n\nion-content {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFqdS9iYWp1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JhanUvYmFqdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/baju/baju.page.ts":
    /*!***********************************!*\
      !*** ./src/app/baju/baju.page.ts ***!
      \***********************************/

    /*! exports provided: BajuPage */

    /***/
    function srcAppBajuBajuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BajuPage", function () {
        return BajuPage;
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

      var BajuPage = /*#__PURE__*/function () {
        function BajuPage(firebaseDB) {
          _classCallCheck(this, BajuPage);

          this.firebaseDB = firebaseDB;
          this.Data = [];
        }

        _createClass(BajuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this = this;

            this.Data = [];
            this.firebaseDB.collection('baju').valueChanges().subscribe(function (data) {
              _this.Data = data;
              console.log(_this.Data);
            });
          }
        }]);

        return BajuPage;
      }();

      BajuPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      BajuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-baju',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./baju.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/baju/baju.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./baju.page.scss */
        "./src/app/baju/baju.page.scss"))["default"]]
      })], BajuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=baju-baju-module-es5.js.map