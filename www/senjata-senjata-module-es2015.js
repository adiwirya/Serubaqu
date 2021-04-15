(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["senjata-senjata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/senjata/senjata.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/senjata/senjata.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Senjata Traditional</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <ion-content>\r\n      <div class=\"ion-margin \"*ngIf=\"Data\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let pageData of Data; let i = index\">\r\n              <ion-card>\r\n                <img src=\"{{pageData.imgUrl}}\" />\r\n                <ion-card-content>\r\n                  <ion-card-title class=\"title\">\r\n                    Senjata <strong>{{pageData.Nama}}</strong>\r\n                  </ion-card-title>\r\n                  <ion-card-subtitle class=\"subtitle\"> Daerah Asal : <strong>{{pageData.Daerah}}</strong> </ion-card-subtitle>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </ion-content>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/senjata/senjata-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/senjata/senjata-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SenjataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenjataPageRoutingModule", function() { return SenjataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _senjata_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./senjata.page */ "./src/app/senjata/senjata.page.ts");




const routes = [
    {
        path: '',
        component: _senjata_page__WEBPACK_IMPORTED_MODULE_3__["SenjataPage"]
    }
];
let SenjataPageRoutingModule = class SenjataPageRoutingModule {
};
SenjataPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SenjataPageRoutingModule);



/***/ }),

/***/ "./src/app/senjata/senjata.module.ts":
/*!*******************************************!*\
  !*** ./src/app/senjata/senjata.module.ts ***!
  \*******************************************/
/*! exports provided: SenjataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenjataPageModule", function() { return SenjataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _senjata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./senjata-routing.module */ "./src/app/senjata/senjata-routing.module.ts");
/* harmony import */ var _senjata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./senjata.page */ "./src/app/senjata/senjata.page.ts");







let SenjataPageModule = class SenjataPageModule {
};
SenjataPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _senjata_routing_module__WEBPACK_IMPORTED_MODULE_5__["SenjataPageRoutingModule"]
        ],
        declarations: [_senjata_page__WEBPACK_IMPORTED_MODULE_6__["SenjataPage"]]
    })
], SenjataPageModule);



/***/ }),

/***/ "./src/app/senjata/senjata.page.scss":
/*!*******************************************!*\
  !*** ./src/app/senjata/senjata.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n}\n\nion-content {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuamF0YS9zZW5qYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NlbmphdGEvc2VuamF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/senjata/senjata.page.ts":
/*!*****************************************!*\
  !*** ./src/app/senjata/senjata.page.ts ***!
  \*****************************************/
/*! exports provided: SenjataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenjataPage", function() { return SenjataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



let SenjataPage = class SenjataPage {
    constructor(firebaseDB) {
        this.firebaseDB = firebaseDB;
        this.Data = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.Data = [];
        this.firebaseDB.collection('senjata').valueChanges().subscribe(data => {
            this.Data = data;
            console.log(this.Data);
        });
    }
};
SenjataPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SenjataPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-senjata',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./senjata.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/senjata/senjata.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./senjata.page.scss */ "./src/app/senjata/senjata.page.scss")).default]
    })
], SenjataPage);



/***/ })

}]);
//# sourceMappingURL=senjata-senjata-module-es2015.js.map