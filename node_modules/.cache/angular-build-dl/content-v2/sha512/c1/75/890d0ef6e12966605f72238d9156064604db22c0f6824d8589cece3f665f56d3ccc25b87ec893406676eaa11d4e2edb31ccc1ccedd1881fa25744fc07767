(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-tabs #tabs>\r\n    <fiv-app-bar slot=\"bottom\" #bar>\r\n      <fiv-fab [fivAppBarFab]=\"position\" #fab (click)=\"doLogout()\">\r\n        <fiv-icon name=\"log-out\"></fiv-icon>\r\n      </fiv-fab>\r\n  \r\n      <fiv-app-bar-tab left tab=\"rumah\">\r\n        <fiv-icon name=\"home\"></fiv-icon>\r\n        <ion-label>Rumah</ion-label>\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab left tab=\"baju\">\r\n        <fiv-icon name=\"body\"></fiv-icon>\r\n        <ion-label>Baju</ion-label>\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab right tab=\"senjata\">\r\n        <fiv-icon name=\"hammer\"></fiv-icon>\r\n        <ion-label>Senjata</ion-label>\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab right tab=\"profile\">\r\n        <fiv-icon name=\"person\"></fiv-icon>\r\n        <ion-label>Profil</ion-label>\r\n      </fiv-app-bar-tab>\r\n    </fiv-app-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'baju',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | baju-baju-module */ "baju-baju-module").then(__webpack_require__.bind(null, /*! ./../baju/baju.module */ "./src/app/baju/baju.module.ts")).then(m => m.BajuPageModule)
                    }
                ]
            },
            {
                path: 'rumah',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | rumah-rumah-module */ "rumah-rumah-module").then(__webpack_require__.bind(null, /*! ./../rumah/rumah.module */ "./src/app/rumah/rumah.module.ts")).then(m => m.RumahPageModule)
                    }
                ]
            },
            {
                path: 'senjata',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | senjata-senjata-module */ "senjata-senjata-module").then(__webpack_require__.bind(null, /*! ./../senjata/senjata.module */ "./src/app/senjata/senjata.module.ts")).then(m => m.SenjataPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/rumah',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/rumah',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container.min {\n  min-height: 70vh;\n  max-width: 411px;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  border: 2px solid var(--ion-color-dark);\n  cursor: url(/assets/icon/cursor.png), auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIubWluIHtcclxuICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gIG1heC13aWR0aDogNDExcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb24vY3Vyc29yLnBuZyksIGF1dG87XHJcbn1cclxuXHJcbmZpdi1hcHAtYmFyIHtcclxuICAvLyAtLWZpdi1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgLy8gLS1maXYtc21hbGwtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgLy8gLS1maXYtc21hbGwtaWNvbi1jb2xvcjogcmVkO1xyXG5cclxuICAvLyAtLWZpdi1iYWRnZS1iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgLy8gLS1maXYtYmFkZ2UtY29sb3I6IHJlZDtcclxuXHJcbiAgLy8gLS1maXYtZG90LWJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuXHJcbiAgLy8gLS1maXYtaWNvbi1hY3Rpdi1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let HomePage = class HomePage {
    constructor(ngroute, firebaseAuthService) {
        this.ngroute = ngroute;
        this.firebaseAuthService = firebaseAuthService;
        this.titleMode = 'hide';
        this.position = 'center';
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.firebaseAuthService.signOut()
                .then(res => {
                console.log(res);
                this.ngroute.navigate(['login']);
            }).catch(error => {
                console.log(error);
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map