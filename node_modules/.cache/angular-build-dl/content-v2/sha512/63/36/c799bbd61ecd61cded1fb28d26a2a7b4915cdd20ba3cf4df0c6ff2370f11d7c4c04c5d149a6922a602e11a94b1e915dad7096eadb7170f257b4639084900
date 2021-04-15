(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n  <div class=\"ion-padding ion-margin-top\">\r\n    <ion-row class=\"ion-padding-top ion-padding-bottom ion-margin-top\">\r\n        <img class=\"logo\" src=\"assets/images/Logo.png\"/>\r\n    </ion-row>\r\n    <form [formGroup]=\"loginform\" (ngSubmit)=\"doLogin()\" novalidate>\r\n    <ion-row>\r\n        <ion-col class=\"ion-padding-top ion-padding-bottom ion-margin-top\" >\r\n        <ion-list inset class=\"no-border\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"text\" [formControl]=\"loginform.controls['useremail']\" required></ion-input>\r\n            <div *ngIf=\"loginform.controls['useremail'].dirty && !loginform.controls['useremail'].valid\">\r\n              <p *ngIf=\"loginform.controls['useremail'].errors.InvalidEmail\">Harap masukkan ID email yang valid</p>\r\n            </div>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">Kata Sandi</ion-label>\r\n            <ion-input type=\"password\" [formControl]=\"loginform.controls['userpass']\" required></ion-input>\r\n            <div *ngIf=\"loginform.controls['userpass'].dirty && !loginform.controls['userpass'].valid\">\r\n              <p *ngIf=\"loginform.controls['userpass'].errors?.minlength\">Kata sandi harus minimal 6 karakter</p>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"login-button ripple-parent\" type=\"submit\" [disabled]=\"!loginform.valid\">Masuk</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"footer\">\r\n    <ion-button expand=\"block\" fill=\"clear\" expand=\"full\" [routerLink]=\"['/register']\">Belum Punya Akun? Daftar Sekarang</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #80ccff;\n}\nion-content .logo {\n  height: auto;\n  max-width: 12em;\n  margin: 0 auto;\n  padding-bottom: 50px;\n}\nion-content .no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\nion-content ion-row {\n  align-items: center;\n  text-align: center;\n}\n@media only screen and (min-width: 768px) {\n  ion-content ion-col.col {\n    margin: 0 auto;\n    max-width: 40%;\n  }\n}\nion-content span {\n  color: white;\n}\nion-content ion-item {\n  padding-left: 10px !important;\n  margin-bottom: 0px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em;\n  --background: transparent !important;\n}\nion-content ion-list {\n  background-color: transparent !important;\n  margin: 0;\n}\nion-content .login-button {\n  width: 100%;\n  font-size: 0.9em;\n  --background: #39acdc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNOO0FBQ0k7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFQUNOO0FBQ0Y7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFBTjtBQUVJO0VBQ0Usd0NBQUE7RUFDQSxTQUFBO0FBQU47QUFHSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBjY2ZmO1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogMTJlbTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLm5vLWJvcmRlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaW9uLWNvbC5jb2wge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMzlhY2RjO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _helpers_validation_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/validation.helpers */ "./src/app/helpers/validation.helpers.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");









let LoginPage = class LoginPage {
    constructor(fbauth, loginFormbuilder, valuechecker, toastservice, fbstore, firebaseAuthService, ngroute) {
        this.fbauth = fbauth;
        this.loginFormbuilder = loginFormbuilder;
        this.valuechecker = valuechecker;
        this.toastservice = toastservice;
        this.fbstore = fbstore;
        this.firebaseAuthService = firebaseAuthService;
        this.ngroute = ngroute;
        this.loginform = this.loginFormbuilder.group({
            useremail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.valuechecker.emailCheck],
            userpass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, '']
        });
    }
    ngOnInit() {
    }
    doLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loginform.valid) {
                this.firebaseAuthService.signIn(this.loginform.get('useremail').value, this.loginform.get('userpass').value).then((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                });
                this.loginform.reset();
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _helpers_validation_helpers__WEBPACK_IMPORTED_MODULE_4__["Validator"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map