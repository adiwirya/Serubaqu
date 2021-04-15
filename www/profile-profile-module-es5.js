(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
      \**********************************************************************************/

    /*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, GetDownloadURLPipe, GetDownloadURLPipeModule, MAX_OPERATION_RETRY_TIME, MAX_UPLOAD_RETRY_TIME, createStorageRef, createUploadTask, fromTask */

    /***/
    function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireStorageJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
        return AngularFireStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
        return AngularFireStorageModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
        return BUCKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipe", function () {
        return GetDownloadURLPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipeModule", function () {
        return GetDownloadURLPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_OPERATION_RETRY_TIME", function () {
        return MAX_OPERATION_RETRY_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_UPLOAD_RETRY_TIME", function () {
        return MAX_UPLOAD_RETRY_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
        return createStorageRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
        return createUploadTask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromTask", function () {
        return fromTask;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/storage */
      "./node_modules/firebase/storage/dist/index.esm.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @fileoverview added by tsickle
       * Generated from: observable/fromTask.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} task
       * @return {?}
       */


      function fromTask(task) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
        /**
        * @param {?} subscriber
        * @return {?}
        */
        function (subscriber) {
          /** @type {?} */
          var progress =
          /**
          * @param {?} snap
          * @return {?}
          */
          function progress(snap) {
            return subscriber.next(snap);
          };
          /** @type {?} */


          var error =
          /**
          * @param {?} e
          * @return {?}
          */
          function error(e) {
            return subscriber.error(e);
          };
          /** @type {?} */


          var complete =
          /**
          * @return {?}
          */
          function complete() {
            return subscriber.complete();
          };

          task.on('state_changed', progress,
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            progress(task.snapshot);
            error(e);
          },
          /**
          * @return {?}
          */
          function () {
            progress(task.snapshot);
            complete();
          });
          return (
            /**
            * @return {?}
            */
            function () {
              return task.cancel();
            }
          );
        });
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: task.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function AngularFireUploadTask() {}

      if (false) {}
      /**
       * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
       * This method creates an observable of the upload and returns on object that provides
       * multiple methods for controlling and monitoring the file upload.
       * @param {?} task
       * @return {?}
       */


      function createUploadTask(task) {
        /** @type {?} */
        var inner$ = fromTask(task);
        return {
          task: task,
          then: task.then.bind(task),
          "catch": task["catch"].bind(task),
          pause: task.pause.bind(task),
          cancel: task.cancel.bind(task),
          resume: task.resume.bind(task),
          snapshotChanges:
          /**
          * @return {?}
          */
          function snapshotChanges() {
            return inner$;
          },
          percentageChanges:
          /**
          * @return {?}
          */
          function percentageChanges() {
            return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.bytesTransferred / s.totalBytes * 100;
            }));
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: ref.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function AngularFireStorageReference() {}

      if (false) {}
      /**
       * Create an AngularFire wrapped Storage Reference. This object
       * creates observable methods from promise based methods.
       * @param {?} ref
       * @param {?} schedulers
       * @param {?} keepUnstableUntilFirst
       * @return {?}
       */


      function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
        return {
          getDownloadURL:
          /**
          * @return {?}
          */
          function getDownloadURL() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return ref.getDownloadURL();
            }), keepUnstableUntilFirst);
          },
          getMetadata:
          /**
          * @return {?}
          */
          function getMetadata() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return ref.getMetadata();
            }), keepUnstableUntilFirst);
          },
          "delete":
          /**
          * @return {?}
          */
          function _delete() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref["delete"]());
          },
          child:
          /**
          * @param {?} path
          * @return {?}
          */
          function child(path) {
            return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
          },
          updateMetadata:
          /**
          * @param {?} meta
          * @return {?}
          */
          function updateMetadata(meta) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.updateMetadata(meta));
          },
          put:
          /**
          * @param {?} data
          * @param {?=} metadata
          * @return {?}
          */
          function put(data, metadata) {
            /** @type {?} */
            var task = ref.put(data, metadata);
            return createUploadTask(task);
          },
          putString:
          /**
          * @param {?} data
          * @param {?=} format
          * @param {?=} metadata
          * @return {?}
          */
          function putString(data, format, metadata) {
            /** @type {?} */
            var task = ref.putString(data, format, metadata);
            return createUploadTask(task);
          },
          listAll:
          /**
          * @return {?}
          */
          function listAll() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.listAll());
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: storage.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storageBucket');
      /** @type {?} */

      var MAX_UPLOAD_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storage.maxUploadRetryTime');
      /** @type {?} */

      var MAX_OPERATION_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storage.maxOperationRetryTime');
      /**
       * AngularFireStorage Service
       *
       * This service is the main entry point for this feature module. It provides
       * an API for uploading and downloading binary files from Cloud Storage for
       * Firebase.
       */

      var AngularFireStorage = /*#__PURE__*/function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} storageBucket
         * @param {?} platformId
         * @param {?} zone
         * @param {?} maxUploadRetryTime
         * @param {?} maxOperationRetryTime
         */
        function AngularFireStorage(options, nameOrConfig, storageBucket, // tslint:disable-next-line:ban-types
        platformId, zone, maxUploadRetryTime, maxOperationRetryTime) {
          _classCallCheck(this, AngularFireStorage);

          this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
          this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
          /** @type {?} */

          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
          this.storage = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfetchInstance"])("".concat(app.name, ".storage.").concat(storageBucket), 'AngularFireStorage', app,
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var storage = zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return app.storage(storageBucket || undefined);
            });

            if (maxUploadRetryTime) {
              storage.setMaxUploadRetryTime(maxUploadRetryTime);
            }

            if (maxOperationRetryTime) {
              storage.setMaxOperationRetryTime(maxOperationRetryTime);
            }

            return storage;
          }, [maxUploadRetryTime, maxOperationRetryTime]);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(AngularFireStorage, [{
          key: "ref",
          value: function ref(path) {
            return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
          }
          /**
           * @param {?} path
           * @return {?}
           */

        }, {
          key: "refFromURL",
          value: function refFromURL(path) {
            return createStorageRef(this.storage.refFromURL(path), this.schedulers, this.keepUnstableUntilFirst);
          }
          /**
           * @param {?} path
           * @param {?} data
           * @param {?=} metadata
           * @return {?}
           */

        }, {
          key: "upload",
          value: function upload(path, data, metadata) {
            /** @type {?} */
            var storageRef = this.storage.ref(path);
            /** @type {?} */

            var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
            return ref.put(data, metadata);
          }
        }]);

        return AngularFireStorage;
      }();

      AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
        return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAX_UPLOAD_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAX_OPERATION_RETRY_TIME, 8));
      };
      /** @nocollapse */


      AngularFireStorage.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [BUCKET]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAX_UPLOAD_RETRY_TIME]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAX_OPERATION_RETRY_TIME]
          }]
        }];
      };
      /** @nocollapse */


      AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function AngularFireStorage_Factory() {
          return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MAX_UPLOAD_RETRY_TIME, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MAX_OPERATION_RETRY_TIME, 8));
        },
        token: AngularFireStorage,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [BUCKET]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAX_UPLOAD_RETRY_TIME]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAX_OPERATION_RETRY_TIME]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: pipes/storageUrl.pipe.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * to be used with in combination with | async
       */


      var GetDownloadURLPipe = /*#__PURE__*/function () {
        /**
         * @param {?} storage
         * @param {?} cdr
         */
        function GetDownloadURLPipe(storage, cdr) {
          _classCallCheck(this, GetDownloadURLPipe);

          this.storage = storage;
          this.asyncPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"](cdr);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(GetDownloadURLPipe, [{
          key: "transform",
          value: function transform(path) {
            if (path !== this.path) {
              this.path = path;
              this.downloadUrl$ = this.storage.ref(path).getDownloadURL();
            }

            return this.asyncPipe.transform(this.downloadUrl$);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.asyncPipe.ngOnDestroy();
          }
        }]);

        return GetDownloadURLPipe;
      }();

      GetDownloadURLPipe.ɵfac = function GetDownloadURLPipe_Factory(t) {
        return new (t || GetDownloadURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectPipeChangeDetectorRef"]());
      };

      GetDownloadURLPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "getDownloadURL",
        type: GetDownloadURLPipe,
        pure: false
      });
      /** @nocollapse */

      GetDownloadURLPipe.ctorParameters = function () {
        return [{
          type: AngularFireStorage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GetDownloadURLPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
          args: [{
            name: 'getDownloadURL',
            pure: false
          }]
        }], function () {
          return [{
            type: AngularFireStorage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }];
        }, null);
      })();

      if (false) {}

      var GetDownloadURLPipeModule = function GetDownloadURLPipeModule() {
        _classCallCheck(this, GetDownloadURLPipeModule);
      };

      GetDownloadURLPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: GetDownloadURLPipeModule
      });
      GetDownloadURLPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function GetDownloadURLPipeModule_Factory(t) {
          return new (t || GetDownloadURLPipeModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GetDownloadURLPipeModule, {
          declarations: [GetDownloadURLPipe],
          exports: [GetDownloadURLPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GetDownloadURLPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [GetDownloadURLPipe],
            exports: [GetDownloadURLPipe]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: storage.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireStorageModule = function AngularFireStorageModule() {
        _classCallCheck(this, AngularFireStorageModule);
      };

      AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AngularFireStorageModule
      });
      AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AngularFireStorageModule_Factory(t) {
          return new (t || AngularFireStorageModule)();
        },
        providers: [AngularFireStorage],
        imports: [GetDownloadURLPipeModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AngularFireStorageModule, {
          exports: [GetDownloadURLPipeModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            exports: [GetDownloadURLPipeModule],
            providers: [AngularFireStorage]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-storage.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-storage.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
      \**************************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */

    /***/
    function node_modulesCapacitorCoreDistEsmCorePluginDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return FilesystemDirectory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return FilesystemEncoding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return HapticsImpactStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return HapticsNotificationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return KeyboardStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return KeyboardResize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return ActionSheetOptionStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return PermissionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return PhotosAlbumType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return StatusBarStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return StatusBarAnimation;
      });

      var CameraSource;

      (function (CameraSource) {
        CameraSource["Prompt"] = "PROMPT";
        CameraSource["Camera"] = "CAMERA";
        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {}));

      var FilesystemDirectory;

      (function (FilesystemDirectory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */
        FilesystemDirectory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         */

        FilesystemDirectory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */

        FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(FilesystemDirectory || (FilesystemDirectory = {}));

      var FilesystemEncoding;

      (function (FilesystemEncoding) {
        FilesystemEncoding["UTF8"] = "utf8";
        FilesystemEncoding["ASCII"] = "ascii";
        FilesystemEncoding["UTF16"] = "utf16";
      })(FilesystemEncoding || (FilesystemEncoding = {}));

      var HapticsImpactStyle;

      (function (HapticsImpactStyle) {
        HapticsImpactStyle["Heavy"] = "HEAVY";
        HapticsImpactStyle["Medium"] = "MEDIUM";
        HapticsImpactStyle["Light"] = "LIGHT";
      })(HapticsImpactStyle || (HapticsImpactStyle = {}));

      var HapticsNotificationType;

      (function (HapticsNotificationType) {
        HapticsNotificationType["SUCCESS"] = "SUCCESS";
        HapticsNotificationType["WARNING"] = "WARNING";
        HapticsNotificationType["ERROR"] = "ERROR";
      })(HapticsNotificationType || (HapticsNotificationType = {}));

      var KeyboardStyle;

      (function (KeyboardStyle) {
        KeyboardStyle["Dark"] = "DARK";
        KeyboardStyle["Light"] = "LIGHT";
      })(KeyboardStyle || (KeyboardStyle = {}));

      var KeyboardResize;

      (function (KeyboardResize) {
        KeyboardResize["Body"] = "body";
        KeyboardResize["Ionic"] = "ionic";
        KeyboardResize["Native"] = "native";
        KeyboardResize["None"] = "none";
      })(KeyboardResize || (KeyboardResize = {}));

      var ActionSheetOptionStyle;

      (function (ActionSheetOptionStyle) {
        ActionSheetOptionStyle["Default"] = "DEFAULT";
        ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
        ActionSheetOptionStyle["Cancel"] = "CANCEL";
      })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


      var PermissionType;

      (function (PermissionType) {
        PermissionType["Camera"] = "camera";
        PermissionType["Photos"] = "photos";
        PermissionType["Geolocation"] = "geolocation";
        PermissionType["Notifications"] = "notifications";
        PermissionType["ClipboardRead"] = "clipboard-read";
        PermissionType["ClipboardWrite"] = "clipboard-write";
        PermissionType["Microphone"] = "microphone";
      })(PermissionType || (PermissionType = {}));

      var PhotosAlbumType;

      (function (PhotosAlbumType) {
        /**
         * Album is a "smart" album (such as Favorites or Recently Added)
         */
        PhotosAlbumType["Smart"] = "smart";
        /**
         * Album is a cloud-shared album
         */

        PhotosAlbumType["Shared"] = "shared";
        /**
         * Album is a user-created album
         */

        PhotosAlbumType["User"] = "user";
      })(PhotosAlbumType || (PhotosAlbumType = {}));

      var StatusBarStyle;

      (function (StatusBarStyle) {
        /**
         * Light text for dark backgrounds.
         */
        StatusBarStyle["Dark"] = "DARK";
        /**
         * Dark text for light backgrounds.
         */

        StatusBarStyle["Light"] = "LIGHT";
      })(StatusBarStyle || (StatusBarStyle = {}));

      var StatusBarAnimation;

      (function (StatusBarAnimation) {
        /**
         * No animation during show/hide.
         */
        StatusBarAnimation["None"] = "NONE";
        /**
         * Slide animation during show/hide.
         */

        StatusBarAnimation["Slide"] = "SLIDE";
        /**
         * Fade animation during show/hide.
         */

        StatusBarAnimation["Fade"] = "FADE";
      })(StatusBarAnimation || (StatusBarAnimation = {})); //# sourceMappingURL=core-plugin-definitions.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/global.js":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
      \*********************************************************/

    /*! exports provided: Capacitor, Plugins */

    /***/
    function node_modulesCapacitorCoreDistEsmGlobalJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony import */


      var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web-runtime */
      "./node_modules/@capacitor/core/dist/esm/web-runtime.js"); // Create our default Capacitor instance, which will be
      // overridden on native platforms


      var Capacitor = function (globalThis) {
        // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
        // Ensure the global is assigned the same Capacitor instance,
        // then export Capacitor so it can be imported in other modules
        return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
      }( // figure out the current globalThis, such as "window", "self" or "global"
      // ensure errors are not thrown in an node SSR environment or web worker
      typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/index.js":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
      \********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"];
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./global */
      "./node_modules/@capacitor/core/dist/esm/global.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
      });
      /* harmony import */


      var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web-plugins */
      "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
      });
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/util.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
      \*******************************************************/

    /*! exports provided: extend, uuid4 */

    /***/
    function node_modulesCapacitorCoreDistEsmUtilJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return extend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "uuid4", function () {
        return uuid4;
      });

      var extend = function extend(target) {
        var objs = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          objs[_i - 1] = arguments[_i];
        }

        objs.forEach(function (o) {
          if (o && typeof o === 'object') {
            for (var k in o) {
              if (o.hasOwnProperty(k)) {
                target[k] = o[k];
              }
            }
          }
        });
        return target;
      };

      var uuid4 = function uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }; //# sourceMappingURL=util.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
      \**************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmWebPluginsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global */
      "./node_modules/@capacitor/core/dist/esm/global.js");
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web/index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web/accessibility */
      "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony import */


      var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/app */
      "./node_modules/@capacitor/core/dist/esm/web/app.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
      });
      /* harmony import */


      var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./web/browser */
      "./node_modules/@capacitor/core/dist/esm/web/browser.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
      });
      /* harmony import */


      var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./web/camera */
      "./node_modules/@capacitor/core/dist/esm/web/camera.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
      });
      /* harmony import */


      var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./web/clipboard */
      "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
      });
      /* harmony import */


      var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./web/filesystem */
      "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
      });
      /* harmony import */


      var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./web/geolocation */
      "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
      });
      /* harmony import */


      var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./web/device */
      "./node_modules/@capacitor/core/dist/esm/web/device.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
      });
      /* harmony import */


      var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./web/local-notifications */
      "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
      });
      /* harmony import */


      var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./web/share */
      "./node_modules/@capacitor/core/dist/esm/web/share.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
      });
      /* harmony import */


      var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./web/modals */
      "./node_modules/@capacitor/core/dist/esm/web/modals.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
      });
      /* harmony import */


      var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./web/motion */
      "./node_modules/@capacitor/core/dist/esm/web/motion.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
      });
      /* harmony import */


      var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./web/network */
      "./node_modules/@capacitor/core/dist/esm/web/network.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
      });
      /* harmony import */


      var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./web/permissions */
      "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
      });
      /* harmony import */


      var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./web/splash-screen */
      "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
      });
      /* harmony import */


      var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./web/storage */
      "./node_modules/@capacitor/core/dist/esm/web/storage.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
      });
      /* harmony import */


      var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./web/toast */
      "./node_modules/@capacitor/core/dist/esm/web/toast.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
      });

      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

      var registerWebPlugin = function registerWebPlugin(plugin) {
        Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
      }; //# sourceMappingURL=web-plugins.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
      \**************************************************************/

    /*! exports provided: CapacitorWeb */

    /***/
    function node_modulesCapacitorCoreDistEsmWebRuntimeJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
        return CapacitorWeb;
      });

      var CapacitorWeb =
      /** @class */
      function () {
        function CapacitorWeb() {
          var _this = this;

          this.platform = 'web';
          this.isNative = false; // Need to assign here to avoid having to define every plugin but still
          // get the typed benefits of the provided plugins in PluginRegistry

          this.Plugins = {}; // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
          // effectively means that trying to access an unavailable plugin will
          // locally throw, but this is still better than throwing a syntax error.

          if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
              get: function get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  var thisRef_1 = _this;
                  return new Proxy({}, {
                    get: function get(_target, _prop) {
                      if (typeof _target[_prop] === 'undefined') {
                        return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                      } else {
                        return _target[_prop];
                      }
                    }
                  });
                } else {
                  return target[prop];
                }
              }
            });
          }
        }

        CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
          return Promise.reject(pluginName + " does not have web implementation.");
        };

        CapacitorWeb.prototype.getPlatform = function () {
          return this.platform;
        };

        CapacitorWeb.prototype.isPluginAvailable = function (name) {
          return this.Plugins.hasOwnProperty(name);
        };

        CapacitorWeb.prototype.convertFileSrc = function (filePath) {
          return filePath;
        };

        CapacitorWeb.prototype.handleError = function (e) {
          console.error(e);
        };

        return CapacitorWeb;
      }(); //# sourceMappingURL=web-runtime.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
      \********************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility */

    /***/
    function node_modulesCapacitorCoreDistEsmWebAccessibilityJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return AccessibilityPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return Accessibility;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var AccessibilityPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

        function AccessibilityPluginWeb() {
          return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
          }) || this;
        }

        AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
          throw new Error('Feature not available in the browser');
        };

        AccessibilityPluginWeb.prototype.speak = function (options) {
          if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
          }

          var utterance = new SpeechSynthesisUtterance(options.value);

          if (options.language) {
            utterance.lang = options.language;
          }

          window.speechSynthesis.speak(utterance);
          return Promise.resolve();
        };

        return AccessibilityPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/app.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
      \**********************************************************/

    /*! exports provided: AppPluginWeb, App */

    /***/
    function node_modulesCapacitorCoreDistEsmWebAppJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return AppPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return App;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var AppPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

        function AppPluginWeb() {
          var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
          }) || this;

          if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
          }

          return _this;
        }

        AppPluginWeb.prototype.exitApp = function () {
          throw new Error('Method not implemented.');
        };

        AppPluginWeb.prototype.canOpenUrl = function (_options) {
          return Promise.resolve({
            value: true
          });
        };

        AppPluginWeb.prototype.openUrl = function (_options) {
          return Promise.resolve({
            completed: true
          });
        };

        AppPluginWeb.prototype.getLaunchUrl = function () {
          return Promise.resolve({
            url: ''
          });
        };

        AppPluginWeb.prototype.getState = function () {
          return Promise.resolve({
            isActive: document.hidden !== true
          });
        };

        AppPluginWeb.prototype.handleVisibilityChange = function () {
          var data = {
            isActive: document.hidden !== true
          };
          this.notifyListeners('appStateChange', data);
        };

        return AppPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/browser.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
      \**************************************************************/

    /*! exports provided: BrowserPluginWeb, Browser */

    /***/
    function node_modulesCapacitorCoreDistEsmWebBrowserJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return BrowserPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return Browser;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var BrowserPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

        function BrowserPluginWeb() {
          return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
          }) || this;
        }

        BrowserPluginWeb.prototype.open = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow = window.open(options.url, options.windowName || '_blank');
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.prefetch = function (_options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              // Does nothing
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.close = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow && this._lastWindow.close();
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        return BrowserPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/camera.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
      \*************************************************************/

    /*! exports provided: CameraPluginWeb, Camera */

    /***/
    function node_modulesCapacitorCoreDistEsmWebCameraJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return CameraPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var CameraPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

        function CameraPluginWeb() {
          return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
          }) || this;
        }

        CameraPluginWeb.prototype.getPhoto = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var cameraModal_1, e_1;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!options.webUseInput) return [3
                        /*break*/
                        , 1];
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 7];

                      case 1:
                        if (!customElements.get('pwa-camera-modal')) return [3
                        /*break*/
                        , 6];
                        cameraModal_1 = document.createElement('pwa-camera-modal');
                        document.body.appendChild(cameraModal_1);
                        _a.label = 2;

                      case 2:
                        _a.trys.push([2, 4,, 5]);

                        return [4
                        /*yield*/
                        , cameraModal_1.componentOnReady()];

                      case 3:
                        _a.sent();

                        cameraModal_1.addEventListener('onPhoto', function (e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var photo, _a;

                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                              switch (_b.label) {
                                case 0:
                                  photo = e.detail;
                                  if (!(photo === null)) return [3
                                  /*break*/
                                  , 1];
                                  reject('User cancelled photos app');
                                  return [3
                                  /*break*/
                                  , 4];

                                case 1:
                                  if (!(photo instanceof Error)) return [3
                                  /*break*/
                                  , 2];
                                  reject(photo.message);
                                  return [3
                                  /*break*/
                                  , 4];

                                case 2:
                                  _a = resolve;
                                  return [4
                                  /*yield*/
                                  , this._getCameraPhoto(photo, options)];

                                case 3:
                                  _a.apply(void 0, [_b.sent()]);

                                  _b.label = 4;

                                case 4:
                                  cameraModal_1.dismiss();
                                  document.body.removeChild(cameraModal_1);
                                  return [2
                                  /*return*/
                                  ];
                              }
                            });
                          });
                        });
                        cameraModal_1.present();
                        return [3
                        /*break*/
                        , 5];

                      case 4:
                        e_1 = _a.sent();
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 5];

                      case 5:
                        return [3
                        /*break*/
                        , 7];

                      case 6:
                        console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                        this.fileInputExperience(options, resolve);
                        _a.label = 7;

                      case 7:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })];
            });
          });
        };

        CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
          var input = document.querySelector('#_capacitor-camera-input');

          var cleanup = function cleanup() {
            input.parentNode && input.parentNode.removeChild(input);
          };

          if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
          }

          input.accept = 'image/*';
          input.capture = true;

          if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
            input.capture = 'user';
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
            input.capture = 'environment';
          }

          input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';

            if (file.type === 'image/png') {
              format = 'png';
            } else if (file.type === 'image/gif') {
              format = 'gif';
            }

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
              var reader_1 = new FileReader();
              reader_1.addEventListener('load', function () {
                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: reader_1.result,
                    format: format
                  });
                } else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                  var b64 = reader_1.result.split(',')[1];
                  resolve({
                    base64String: b64,
                    format: format
                  });
                }

                cleanup();
              });
              reader_1.readAsDataURL(file);
            } else {
              resolve({
                webPath: URL.createObjectURL(file),
                format: format
              });
              cleanup();
            }
          });
          input.click();
        };

        CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
              resolve({
                webPath: URL.createObjectURL(photo),
                format: format
              });
            } else {
              reader.readAsDataURL(photo);

              reader.onloadend = function () {
                var r = reader.result;

                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: r,
                    format: format
                  });
                } else {
                  resolve({
                    base64String: r.split(',')[1],
                    format: format
                  });
                }
              };

              reader.onerror = function (e) {
                reject(e);
              };
            }
          });
        };

        return CameraPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
      \****************************************************************/

    /*! exports provided: ClipboardPluginWeb, Clipboard */

    /***/
    function node_modulesCapacitorCoreDistEsmWebClipboardJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return ClipboardPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return Clipboard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ClipboardPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

        function ClipboardPluginWeb() {
          return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
          }) || this;
        }

        ClipboardPluginWeb.prototype.write = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;

            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!(options.string !== undefined || options.url)) return [3
                  /*break*/
                  , 2];

                  if (!navigator.clipboard.writeText) {
                    return [2
                    /*return*/
                    , Promise.reject('Writting to clipboard not supported in this browser')];
                  }

                  return [4
                  /*yield*/
                  , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

                case 1:
                  _b.sent();

                  return [3
                  /*break*/
                  , 10];

                case 2:
                  if (!options.image) return [3
                  /*break*/
                  , 9];

                  if (!navigator.clipboard.write) {
                    return [2
                    /*return*/
                    , Promise.reject('Setting images not supported in this browser')];
                  }

                  _b.label = 3;

                case 3:
                  _b.trys.push([3, 7,, 8]);

                  return [4
                  /*yield*/
                  , fetch(options.image)];

                case 4:
                  return [4
                  /*yield*/
                  , _b.sent().blob()];

                case 5:
                  blob = _b.sent();
                  clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                  return [4
                  /*yield*/
                  , navigator.clipboard.write([clipboardItemInput])];

                case 6:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 7:
                  err_1 = _b.sent();
                  return [2
                  /*return*/
                  , Promise.reject('Failed to write image')];

                case 8:
                  return [3
                  /*break*/
                  , 10];

                case 9:
                  return [2
                  /*return*/
                  , Promise.reject('Nothing to write')];

                case 10:
                  return [2
                  /*return*/
                  , Promise.resolve()];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.read = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!!navigator.clipboard.read) return [3
                  /*break*/
                  , 1];

                  if (!navigator.clipboard.readText) {
                    return [2
                    /*return*/
                    , Promise.reject('Reading from clipboard not supported in this browser')];
                  }

                  return [2
                  /*return*/
                  , this.readText()];

                case 1:
                  _a.trys.push([1, 5,, 6]);

                  return [4
                  /*yield*/
                  , navigator.clipboard.read()];

                case 2:
                  clipboardItems = _a.sent();
                  type = clipboardItems[0].types[0];
                  return [4
                  /*yield*/
                  , clipboardItems[0].getType(type)];

                case 3:
                  clipboardBlob = _a.sent();
                  return [4
                  /*yield*/
                  , this._getBlobData(clipboardBlob, type)];

                case 4:
                  data = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: data,
                    type: type
                  })];

                case 5:
                  err_2 = _a.sent();
                  return [2
                  /*return*/
                  , this.readText()];

                case 6:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.readText = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , navigator.clipboard.readText()];

                case 1:
                  text = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: text,
                    type: 'text/plain'
                  })];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            if (type.includes('image')) {
              reader.readAsDataURL(clipboardBlob);
            } else {
              reader.readAsText(clipboardBlob);
            }

            reader.onloadend = function () {
              var r = reader.result;
              resolve(r);
            };

            reader.onerror = function (e) {
              reject(e);
            };
          });
        };

        return ClipboardPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/device.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
      \*************************************************************/

    /*! exports provided: DevicePluginWeb, Device */

    /***/
    function node_modulesCapacitorCoreDistEsmWebDeviceJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return DevicePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "./node_modules/@capacitor/core/dist/esm/util.js");

      var DevicePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

        function DevicePluginWeb() {
          return _super.call(this, {
            name: 'Device',
            platforms: ['web']
          }) || this;
        }

        DevicePluginWeb.prototype.getInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              ua = navigator.userAgent;
              uaFields = this.parseUa(ua);
              return [2
              /*return*/
              , Promise.resolve({
                model: uaFields.model,
                platform: 'web',
                appVersion: '',
                appBuild: '',
                appId: '',
                appName: '',
                operatingSystem: uaFields.operatingSystem,
                osVersion: uaFields.osVersion,
                manufacturer: navigator.vendor,
                isVirtual: false,
                uuid: this.getUid()
              })];
            });
          });
        };

        DevicePluginWeb.prototype.getBatteryInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  battery = {};
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , navigator.getBattery()];

                case 2:
                  battery = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  , Promise.resolve({
                    batteryLevel: battery.level,
                    isCharging: battery.charging
                  })];
              }
            });
          });
        };

        DevicePluginWeb.prototype.getLanguageCode = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , {
                value: navigator.language
              }];
            });
          });
        };

        DevicePluginWeb.prototype.parseUa = function (_ua) {
          var uaFields = {};
          var start = _ua.indexOf('(') + 1;

          var end = _ua.indexOf(') AppleWebKit');

          if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
          }

          var fields = _ua.substring(start, end);

          if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
          } else {
            uaFields.model = fields.split('; ')[0];

            if (navigator.oscpu) {
              uaFields.osVersion = navigator.oscpu;
            } else {
              if (_ua.indexOf('Windows') !== -1) {
                uaFields.osVersion = fields;
              } else {
                var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
              }
            }
          }

          if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
          } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
          } else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
          } else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
          } else {
            uaFields.operatingSystem = 'unknown';
          }

          return uaFields;
        };

        DevicePluginWeb.prototype.getUid = function () {
          var uid = window.localStorage.getItem('_capuid');

          if (uid) {
            return uid;
          }

          uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
          window.localStorage.setItem('_capuid', uid);
          return uid;
        };

        return DevicePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
      \*****************************************************************/

    /*! exports provided: FilesystemPluginWeb, Filesystem */

    /***/
    function node_modulesCapacitorCoreDistEsmWebFilesystemJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return FilesystemPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return Filesystem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var FilesystemPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

        function FilesystemPluginWeb() {
          var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
          }) || this;

          _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          _this.DB_VERSION = 1;
          _this.DB_NAME = 'Disc';
          _this._writeCmds = ['add', 'put', 'delete'];
          return _this;
        }

        FilesystemPluginWeb.prototype.initDb = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              if (this._db !== undefined) {
                return [2
                /*return*/
                , this._db];
              }

              if (!('indexedDB' in window)) {
                throw new Error('This browser doesn\'t support IndexedDB');
              }

              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

                request.onsuccess = function () {
                  _this._db = request.result;
                  resolve(request.result);
                };

                request.onerror = function () {
                  return reject(request.error);
                };

                request.onblocked = function () {
                  console.warn('db blocked');
                };
              })];
            });
          });
        };

        FilesystemPluginWeb.doUpgrade = function (event) {
          var eventTarget = event.target;
          var db = eventTarget.result;

          switch (event.oldVersion) {
            case 0:
            case 1:
            default:
              if (db.objectStoreNames.contains('FileStorage')) {
                db.deleteObjectStore('FileStorage');
              }

              var store = db.createObjectStore('FileStorage', {
                keyPath: 'path'
              });
              store.createIndex('by_folder', 'folder');
          }
        };

        FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var req = store[cmd].apply(store, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var index = store.index(indexName);
                  var req = index[cmd].apply(index, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
          directory = directory || this.DEFAULT_DIRECTORY;
          var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
          var fsPath = '/' + directory;
          if (uriPath !== '') fsPath += '/' + cleanedUriPath;
          return fsPath;
        };

        FilesystemPluginWeb.prototype.clear = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.initDb()];

                case 1:
                  conn = _a.sent();
                  tx = conn.transaction(['FileStorage'], 'readwrite');
                  store = tx.objectStore('FileStorage');
                  store.clear();
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Read a file from disk
         * @param options options for the file read
         * @return a promise that resolves with the read file data result
         */


        FilesystemPluginWeb.prototype.readFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [2
                  /*return*/
                  , {
                    data: entry.content
                  }];
              }
            });
          });
        };
        /**
         * Write a file to disk in the specified location on device
         * @param options options for the file write
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.writeFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  doRecursive = options.recursive;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  encoding = options.encoding;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  subDirIndex = parentPath.indexOf('/', 1);
                  if (!(subDirIndex !== -1)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(subDirIndex);
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: now,
                    mtime: now,
                    content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {
                    uri: pathObj.path
                  }];
              }
            });
          });
        };
        /**
         * Append to a file on disk in the specified location on device
         * @param options options for the file append
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.appendFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, subDirIndex, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  now = Date.now();
                  ctime = now;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  subDirIndex = parentPath.indexOf('/', 1);
                  if (!(subDirIndex !== -1)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(subDirIndex);
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: true
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  if (occupiedEntry !== undefined) {
                    data = occupiedEntry.content + data;
                    ctime = occupiedEntry.ctime;
                  }

                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: ctime,
                    mtime: now,
                    content: data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Delete a file from disk
         * @param options options for the file delete
         * @return a promise that resolves with the deleted file data result
         */


        FilesystemPluginWeb.prototype.deleteFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  if (entries.length !== 0) throw Error('Folder is not empty.');
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [path])];

                case 3:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Create a directory.
         * @param options options for the mkdir
         * @return a promise that resolves with the mkdir result
         */


        FilesystemPluginWeb.prototype.mkdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  doRecursive = options.recursive;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  depth = (path.match(/\//g) || []).length;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 1:
                  parentEntry = _a.sent();
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 2:
                  occupiedEntry = _a.sent();
                  if (depth === 1) throw Error('Cannot create Root directory');
                  if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                  if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                  if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'directory',
                    size: 0,
                    ctime: now,
                    mtime: now
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Remove a directory
         * @param options the options for the directory remove
         */


        FilesystemPluginWeb.prototype.rmdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  path = options.path, directory = options.directory, recursive = options.recursive;
                  fullPath = this.getPath(directory, path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [fullPath])];

                case 1:
                  entry = _b.sent();
                  if (entry === undefined) throw Error('Folder does not exist.');
                  if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: path,
                    directory: directory
                  })];

                case 2:
                  readDirResult = _b.sent();
                  if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                  _i = 0, _a = readDirResult.files;
                  _b.label = 3;

                case 3:
                  if (!(_i < _a.length)) return [3
                  /*break*/
                  , 9];
                  entry_1 = _a[_i];
                  entryPath = path + "/" + entry_1;
                  return [4
                  /*yield*/
                  , this.stat({
                    path: entryPath,
                    directory: directory
                  })];

                case 4:
                  entryObj = _b.sent();
                  if (!(entryObj.type === 'file')) return [3
                  /*break*/
                  , 6];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: entryPath,
                    directory: directory
                  })];

                case 5:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 6:
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: entryPath,
                    directory: directory,
                    recursive: recursive
                  })];

                case 7:
                  _b.sent();

                  _b.label = 8;

                case 8:
                  _i++;
                  return [3
                  /*break*/
                  , 3];

                case 9:
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [fullPath])];

                case 10:
                  _b.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Return a list of files from the directory (not recursive)
         * @param options the options for the readdir operation
         * @return a promise that resolves with the readdir directory listing result
         */


        FilesystemPluginWeb.prototype.readdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  names = entries.map(function (e) {
                    return e.substring(path.length + 1);
                  });
                  return [2
                  /*return*/
                  , {
                    files: names
                  }];
              }
            });
          });
        };
        /**
         * Return full File URI for a path and directory
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.getUri = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Return data about a file
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.stat = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    type: entry.type,
                    size: entry.size,
                    ctime: entry.ctime,
                    mtime: entry.mtime,
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Rename a file or directory
         * @param options the options for the rename operation
         * @return a promise that resolves with the rename result
         */


        FilesystemPluginWeb.prototype.rename = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, true)];
            });
          });
        };
        /**
         * Copy a file or directory
         * @param options the options for the copy operation
         * @return a promise that resolves with the copy result
         */


        FilesystemPluginWeb.prototype.copy = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, false)];
            });
          });
        };
        /**
         * Function that can perform a copy or a rename
         * @param options the options for the rename operation
         * @param doRename whether to perform a rename or copy operation
         * @return a promise that resolves with the result
         */


        FilesystemPluginWeb.prototype._copy = function (options, doRename) {
          if (doRename === void 0) {
            doRename = false;
          }

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                  if (!to || !from) {
                    throw Error('Both to and from must be provided');
                  } // If no "to" directory is provided, use the "from" directory


                  if (!toDirectory) {
                    toDirectory = fromDirectory;
                  }

                  fromPath = this.getPath(fromDirectory, from);
                  toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                  if (fromPath === toPath) {
                    return [2
                    /*return*/
                    , {}];
                  }

                  if (toPath.startsWith(fromPath)) {
                    throw Error('To path cannot contain the from path');
                  }

                  _b.label = 1;

                case 1:
                  _b.trys.push([1, 3,, 6]);

                  return [4
                  /*yield*/
                  , this.stat({
                    path: to,
                    directory: toDirectory
                  })];

                case 2:
                  toObj = _b.sent();
                  return [3
                  /*break*/
                  , 6];

                case 3:
                  e_1 = _b.sent();
                  toPathComponents = to.split('/');
                  toPathComponents.pop();
                  toPath_1 = toPathComponents.join('/');
                  if (!(toPathComponents.length > 0)) return [3
                  /*break*/
                  , 5];
                  return [4
                  /*yield*/
                  , this.stat({
                    path: toPath_1,
                    directory: toDirectory
                  })];

                case 4:
                  toParentDirectory = _b.sent();

                  if (toParentDirectory.type !== 'directory') {
                    throw new Error('Parent directory of the to path is a file');
                  }

                  _b.label = 5;

                case 5:
                  return [3
                  /*break*/
                  , 6];

                case 6:
                  // Cannot overwrite a directory
                  if (toObj && toObj.type === 'directory') {
                    throw new Error('Cannot overwrite a directory with a file');
                  }

                  return [4
                  /*yield*/
                  , this.stat({
                    path: from,
                    directory: fromDirectory
                  })];

                case 7:
                  fromObj = _b.sent();

                  updateTime = function updateTime(path, ctime, mtime) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                      var fullPath, entry;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            fullPath = this.getPath(toDirectory, path);
                            return [4
                            /*yield*/
                            , this.dbRequest('get', [fullPath])];

                          case 1:
                            entry = _a.sent();
                            entry.ctime = ctime;
                            entry.mtime = mtime;
                            return [4
                            /*yield*/
                            , this.dbRequest('put', [entry])];

                          case 2:
                            _a.sent();

                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  };

                  _a = fromObj.type;

                  switch (_a) {
                    case 'file':
                      return [3
                      /*break*/
                      , 8];

                    case 'directory':
                      return [3
                      /*break*/
                      , 15];
                  }

                  return [3
                  /*break*/
                  , 28];

                case 8:
                  return [4
                  /*yield*/
                  , this.readFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 9:
                  file = _b.sent();
                  if (!doRename) return [3
                  /*break*/
                  , 11];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 10:
                  _b.sent();

                  _b.label = 11;

                case 11:
                  // Write the file to the new location
                  return [4
                  /*yield*/
                  , this.writeFile({
                    path: to,
                    directory: toDirectory,
                    data: file.data
                  })];

                case 12:
                  // Write the file to the new location
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 14];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 13:
                  _b.sent();

                  _b.label = 14;

                case 14:
                  // Resolve promise
                  return [2
                  /*return*/
                  , {}];

                case 15:
                  if (toObj) {
                    throw Error('Cannot move a directory over an existing object');
                  }

                  _b.label = 16;

                case 16:
                  _b.trys.push([16, 20,, 21]); // Create the to directory


                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: to,
                    directory: toDirectory,
                    recursive: false
                  })];

                case 17:
                  // Create the to directory
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 19];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 18:
                  _b.sent();

                  _b.label = 19;

                case 19:
                  return [3
                  /*break*/
                  , 21];

                case 20:
                  e_2 = _b.sent();
                  return [3
                  /*break*/
                  , 21];

                case 21:
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 22:
                  contents = _b.sent().files;
                  _i = 0, contents_1 = contents;
                  _b.label = 23;

                case 23:
                  if (!(_i < contents_1.length)) return [3
                  /*break*/
                  , 26];
                  filename = contents_1[_i]; // Move item from the from directory to the to directory

                  return [4
                  /*yield*/
                  , this._copy({
                    from: from + "/" + filename,
                    to: to + "/" + filename,
                    directory: fromDirectory,
                    toDirectory: toDirectory
                  }, doRename)];

                case 24:
                  // Move item from the from directory to the to directory
                  _b.sent();

                  _b.label = 25;

                case 25:
                  _i++;
                  return [3
                  /*break*/
                  , 23];

                case 26:
                  if (!doRename) return [3
                  /*break*/
                  , 28];
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 27:
                  _b.sent();

                  _b.label = 28;

                case 28:
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };

        FilesystemPluginWeb._debug = true;
        return FilesystemPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
      \******************************************************************/

    /*! exports provided: GeolocationPluginWeb, Geolocation */

    /***/
    function node_modulesCapacitorCoreDistEsmWebGeolocationJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return GeolocationPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return Geolocation;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "./node_modules/@capacitor/core/dist/esm/util.js");

      var GeolocationPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

        function GeolocationPluginWeb() {
          return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
          }) || this;
        }

        GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
              window.navigator.geolocation.getCurrentPosition(function (pos) {
                resolve(pos);
              }, function (err) {
                reject(err);
              }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
              }, options));
            });
          });
        };

        GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
          var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
          }, function (err) {
            callback(null, err);
          }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }, options));
          return "" + id;
        };

        GeolocationPluginWeb.prototype.clearWatch = function (options) {
          window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
          return Promise.resolve();
        };

        return GeolocationPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/index.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
      \************************************************************/

    /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmWebIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return WebPluginRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return WebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return mergeWebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return mergeWebPlugin;
      });

      var WebPluginRegistry =
      /** @class */
      function () {
        function WebPluginRegistry() {
          this.plugins = {};
          this.loadedPlugins = {};
        }

        WebPluginRegistry.prototype.addPlugin = function (plugin) {
          this.plugins[plugin.config.name] = plugin;
        };

        WebPluginRegistry.prototype.getPlugin = function (name) {
          return this.plugins[name];
        };

        WebPluginRegistry.prototype.loadPlugin = function (name) {
          var plugin = this.getPlugin(name);

          if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
          }

          plugin.load();
        };

        WebPluginRegistry.prototype.getPlugins = function () {
          var p = [];

          for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
          }

          return p;
        };

        return WebPluginRegistry;
      }();

      var WebPlugins = new WebPluginRegistry();

      var WebPlugin =
      /** @class */
      function () {
        function WebPlugin(config, pluginRegistry) {
          this.config = config;
          this.loaded = false;
          this.listeners = {};
          this.windowListeners = {};

          if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
          } else {
            pluginRegistry.addPlugin(this);
          }
        }

        WebPlugin.prototype.addWindowListener = function (handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        };

        WebPlugin.prototype.removeWindowListener = function (handle) {
          if (!handle) {
            return;
          }

          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        };

        WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
          var _this = this;

          var listeners = this.listeners[eventName];

          if (!listeners) {
            this.listeners[eventName] = [];
          }

          this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
          // go ahead and add it

          var windowListener = this.windowListeners[eventName];

          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }

          return {
            remove: function remove() {
              _this.removeListener(eventName, listenerFunc);
            }
          };
        };

        WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
          var listeners = this.listeners[eventName];

          if (!listeners) {
            return;
          }

          var index = listeners.indexOf(listenerFunc);
          this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
          // remove the window listener

          if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
          }
        };

        WebPlugin.prototype.removeAllListeners = function () {
          this.listeners = {};

          for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
          }

          this.windowListeners = {};
        };

        WebPlugin.prototype.notifyListeners = function (eventName, data) {
          var listeners = this.listeners[eventName];

          if (listeners) {
            listeners.forEach(function (listener) {
              return listener(data);
            });
          }
        };

        WebPlugin.prototype.hasListeners = function (eventName) {
          return !!this.listeners[eventName].length;
        };

        WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
          var _this = this;

          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function handler(event) {
              _this.notifyListeners(pluginEventName, event);
            }
          };
        };

        WebPlugin.prototype.requestPermissions = function () {
          if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
          } else {
            return Promise.resolve({
              results: []
            });
          }
        };

        WebPlugin.prototype.load = function () {
          this.loaded = true;
        };

        return WebPlugin;
      }();

      var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
        return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
      };
      /**
       * For all our known web plugins, merge them into the global plugins
       * registry if they aren't already existing. If they don't exist, that
       * means there's no existing native implementation for it.
       * @param knownPlugins the Capacitor.Plugins global registry.
       */


      var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
        var plugins = WebPlugins.getPlugins();

        for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
          var plugin = plugins_1[_i];
          mergeWebPlugin(knownPlugins, plugin);
        }
      };

      var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
          return;
        }

        knownPlugins[plugin.config.name] = plugin;
      }; //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
      \**************************************************************************/

    /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

    /***/
    function node_modulesCapacitorCoreDistEsmWebLocalNotificationsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return LocalNotificationsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return LocalNotifications;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var LocalNotificationsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

        function LocalNotificationsPluginWeb() {
          var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
          }) || this;

          _this.pending = [];
          return _this;
        }

        LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.listChannels = function () {
          throw new Error('Feature not available in the browser');
        };

        LocalNotificationsPluginWeb.prototype.sendPending = function () {
          var _this = this;

          var toRemove = [];
          var now = +new Date();
          this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
              if (+localNotification.schedule.at <= now) {
                _this.buildNotification(localNotification);

                toRemove.push(localNotification);
              }
            }
          });
          console.log('Sent pending, removing', toRemove);
          this.pending = this.pending.filter(function (localNotification) {
            return !toRemove.find(function (ln) {
              return ln === localNotification;
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
          var _this = this;

          var l = localNotification;

          if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date();
            this.pending.push(l);
            setTimeout(function () {
              _this.sendPending();
            }, diff);
            return;
          }

          this.buildNotification(localNotification);
        };

        LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
          var l = localNotification;
          return new Notification(l.title, {
            body: l.body
          });
        };

        LocalNotificationsPluginWeb.prototype.schedule = function (options) {
          var _this = this;

          var notifications = [];
          options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
          });
          return Promise.resolve({
            notifications: options.notifications.map(function (notification) {
              return {
                id: '' + notification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.getPending = function () {
          return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
              return {
                id: '' + localNotification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
          throw new Error('Method not implemented.');
        };

        LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
          console.log('Cancel these', pending);
          this.pending = this.pending.filter(function (localNotification) {
            return !pending.notifications.find(function (ln) {
              return ln.id === '' + localNotification.id;
            });
          });
          return Promise.resolve();
        };

        LocalNotificationsPluginWeb.prototype.areEnabled = function () {
          return Promise.resolve({
            value: Notification.permission === 'granted'
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermission = function () {
          return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
              var granted = true;

              if (result === 'denied' || result === 'default') {
                granted = false;
              }

              resolve({
                granted: granted
              });
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
          return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
              if (result === 'denied' || result === 'default') {
                reject(result);
                return;
              }

              resolve({
                results: [result]
              });
            });
          });
        };

        return LocalNotificationsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/modals.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
      \*************************************************************/

    /*! exports provided: ModalsPluginWeb, Modals */

    /***/
    function node_modulesCapacitorCoreDistEsmWebModalsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return ModalsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return Modals;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ModalsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

        function ModalsPluginWeb() {
          return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
          }) || this;
        }

        ModalsPluginWeb.prototype.alert = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              window.alert(options.message);
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        ModalsPluginWeb.prototype.prompt = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.prompt(options.message, options.inputText || '');
              return [2
              /*return*/
              , Promise.resolve({
                value: val,
                cancelled: val === null
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.confirm = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.confirm(options.message);
              return [2
              /*return*/
              , Promise.resolve({
                value: val
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.showActions = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, _reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var actionSheet;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    actionSheet = document.querySelector('pwa-action-sheet');

                    if (!actionSheet) {
                      actionSheet = document.createElement('pwa-action-sheet');
                      document.body.appendChild(actionSheet);
                    }

                    actionSheet.header = options.title;
                    actionSheet.cancelable = false;
                    actionSheet.options = options.options;
                    actionSheet.addEventListener('onSelection', function (e) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var selection;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                          selection = e.detail;
                          resolve({
                            index: selection
                          });
                          return [2
                          /*return*/
                          ];
                        });
                      });
                    });
                    return [2
                    /*return*/
                    ];
                  });
                });
              })];
            });
          });
        };

        return ModalsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/motion.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
      \*************************************************************/

    /*! exports provided: MotionPluginWeb, Motion */

    /***/
    function node_modulesCapacitorCoreDistEsmWebMotionJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return MotionPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return Motion;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var MotionPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

        function MotionPluginWeb() {
          var _this = _super.call(this, {
            name: 'Motion'
          }) || this;

          _this.registerWindowListener('devicemotion', 'accel');

          _this.registerWindowListener('deviceorientation', 'orientation');

          return _this;
        }

        return MotionPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/network.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
      \**************************************************************/

    /*! exports provided: NetworkPluginWeb, Network */

    /***/
    function node_modulesCapacitorCoreDistEsmWebNetworkJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return NetworkPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return Network;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var NetworkPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

        function NetworkPluginWeb() {
          var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
          }) || this;

          _this.listenerFunction = null;
          return _this;
        }

        NetworkPluginWeb.prototype.getStatus = function () {
          return new Promise(function (resolve, reject) {
            if (!window.navigator) {
              reject('Network info not available');
              return;
            }

            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
            resolve({
              connected: connected,
              connectionType: connected ? connectionType : 'none'
            });
          });
        };

        NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
          var thisRef = this;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          var onlineBindFunc = listenerFunc.bind(thisRef, {
            connected: true,
            connectionType: connectionType
          });
          var offlineBindFunc = listenerFunc.bind(thisRef, {
            connected: false,
            connectionType: 'none'
          });

          if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
              remove: function remove() {
                window.removeEventListener('online', onlineBindFunc);
                window.removeEventListener('offline', offlineBindFunc);
              }
            };
          }
        };

        return NetworkPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
      \******************************************************************/

    /*! exports provided: PermissionsPluginWeb, Permissions */

    /***/
    function node_modulesCapacitorCoreDistEsmWebPermissionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return PermissionsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return Permissions;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var PermissionsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

        function PermissionsPluginWeb() {
          return _super.call(this, {
            name: 'Permissions'
          }) || this;
        }

        PermissionsPluginWeb.prototype.query = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  navigator = window.navigator;

                  if (!navigator.permissions) {
                    return [2
                    /*return*/
                    , Promise.reject('This browser does not support the Permissions API')];
                  }

                  name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                  return [4
                  /*yield*/
                  , navigator.permissions.query({
                    name: name
                  })];

                case 1:
                  ret = _a.sent();
                  return [2
                  /*return*/
                  , {
                    state: ret.state
                  }];
              }
            });
          });
        };

        return PermissionsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/share.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
      \************************************************************/

    /*! exports provided: SharePluginWeb, Share */

    /***/
    function node_modulesCapacitorCoreDistEsmWebShareJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return SharePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return Share;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var SharePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

        function SharePluginWeb() {
          return _super.call(this, {
            name: 'Share',
            platforms: ['web']
          }) || this;
        }

        SharePluginWeb.prototype.share = function (options) {
          if (!navigator.share) {
            return Promise.reject('Web Share API not available');
          }

          return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
          });
        };

        return SharePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
      \********************************************************************/

    /*! exports provided: SplashScreenPluginWeb, SplashScreen */

    /***/
    function node_modulesCapacitorCoreDistEsmWebSplashScreenJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return SplashScreenPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return SplashScreen;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var SplashScreenPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

        function SplashScreenPluginWeb() {
          return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
          }) || this;
        }

        SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
          return Promise.resolve();
        };

        SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
          return Promise.resolve();
        };

        return SplashScreenPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/storage.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
      \**************************************************************/

    /*! exports provided: StoragePluginWeb, Storage */

    /***/
    function node_modulesCapacitorCoreDistEsmWebStorageJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return StoragePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var StoragePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

        function StoragePluginWeb() {
          var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
          }) || this;

          _this.KEY_PREFIX = '_cap_';
          return _this;
        }

        StoragePluginWeb.prototype.get = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              value: window.localStorage.getItem(_this.makeKey(options.key))
            });
          });
        };

        StoragePluginWeb.prototype.set = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
          });
        };

        StoragePluginWeb.prototype.remove = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
          });
        };

        StoragePluginWeb.prototype.keys = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              keys: Object.keys(localStorage).filter(function (k) {
                return _this.isKey(k);
              }).map(function (k) {
                return _this.getKey(k);
              })
            });
          });
        };

        StoragePluginWeb.prototype.clear = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).forEach(function (k) {
              return window.localStorage.removeItem(k);
            });
            resolve();
          });
        };

        StoragePluginWeb.prototype.makeKey = function (key) {
          return this.KEY_PREFIX + key;
        };

        StoragePluginWeb.prototype.isKey = function (key) {
          return key.indexOf(this.KEY_PREFIX) === 0;
        };

        StoragePluginWeb.prototype.getKey = function (key) {
          return key.substr(this.KEY_PREFIX.length);
        };

        return StoragePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/toast.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
      \************************************************************/

    /*! exports provided: ToastPluginWeb, Toast */

    /***/
    function node_modulesCapacitorCoreDistEsmWebToastJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return ToastPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ToastPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

        function ToastPluginWeb() {
          return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
          }) || this;
        }

        ToastPluginWeb.prototype.show = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              duration = 2000;

              if (options.duration) {
                duration = options.duration === 'long' ? 3500 : 2000;
              }

              toast = document.createElement('pwa-toast');
              toast.duration = duration;
              toast.message = options.text;
              document.body.appendChild(toast);
              return [2
              /*return*/
              ];
            });
          });
        };

        return ToastPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/storage/dist/index.esm.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
      \**********************************************************/

    /*! exports provided: registerStorage */

    /***/
    function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerStorage", function () {
        return registerStorage;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.esm.js");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.esm.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.esm.js");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Constants used in the Firebase Storage library.
       */

      /**
       * Domain name for firebase storage.
       */


      var DEFAULT_HOST = 'firebasestorage.googleapis.com';
      /**
       * The key in Firebase config json for the storage bucket.
       */

      var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
      /**
       * 2 minutes
       *
       * The timeout for all operations except upload.
       */

      var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
      /**
       * 10 minutes
       *
       * The timeout for upload.
       */

      var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

      var FirebaseStorageError =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FirebaseStorageError, _super);

        function FirebaseStorageError(code, message) {
          var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;

          _this.customData = {
            serverResponse: null
          }; // Without this, `instanceof FirebaseStorageError`, in tests for example,
          // returns false.

          Object.setPrototypeOf(_this, FirebaseStorageError.prototype);
          return _this;
        }

        FirebaseStorageError.prototype.codeEquals = function (code) {
          return prependCode(code) === this.code;
        };

        Object.defineProperty(FirebaseStorageError.prototype, "message", {
          get: function get() {
            if (this.customData.serverResponse) {
              return this.message + "\n" + this.customData.serverResponse;
            } else {
              return this.message;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
          get: function get() {
            return this.customData.serverResponse;
          },
          set: function set(serverResponse) {
            this.customData.serverResponse = serverResponse;
          },
          enumerable: false,
          configurable: true
        });
        return FirebaseStorageError;
      }(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"]);

      var Code = {
        // Shared between all platforms
        UNKNOWN: 'unknown',
        OBJECT_NOT_FOUND: 'object-not-found',
        BUCKET_NOT_FOUND: 'bucket-not-found',
        PROJECT_NOT_FOUND: 'project-not-found',
        QUOTA_EXCEEDED: 'quota-exceeded',
        UNAUTHENTICATED: 'unauthenticated',
        UNAUTHORIZED: 'unauthorized',
        RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
        INVALID_CHECKSUM: 'invalid-checksum',
        CANCELED: 'canceled',
        // JS specific
        INVALID_EVENT_NAME: 'invalid-event-name',
        INVALID_URL: 'invalid-url',
        INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
        NO_DEFAULT_BUCKET: 'no-default-bucket',
        CANNOT_SLICE_BLOB: 'cannot-slice-blob',
        SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
        NO_DOWNLOAD_URL: 'no-download-url',
        INVALID_ARGUMENT: 'invalid-argument',
        INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
        APP_DELETED: 'app-deleted',
        INVALID_ROOT_OPERATION: 'invalid-root-operation',
        INVALID_FORMAT: 'invalid-format',
        INTERNAL_ERROR: 'internal-error',
        UNSUPPORTED_ENVIRONMENT: 'unsupported-environment'
      };

      function prependCode(code) {
        return 'storage/' + code;
      }

      function unknown() {
        var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
        return new FirebaseStorageError(Code.UNKNOWN, message);
      }

      function objectNotFound(path) {
        return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
      }

      function quotaExceeded(bucket) {
        return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
      }

      function unauthenticated() {
        var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
        return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
      }

      function unauthorized(path) {
        return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
      }

      function retryLimitExceeded() {
        return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
      }

      function canceled() {
        return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
      }

      function invalidUrl(url) {
        return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
      }

      function invalidDefaultBucket(bucket) {
        return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
      }

      function noDefaultBucket() {
        return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' + "found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
      }

      function cannotSliceBlob() {
        return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
      }

      function serverFileWrongSize() {
        return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
      }

      function noDownloadURL() {
        return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
      }

      function invalidArgument(message) {
        return new FirebaseStorageError(Code.INVALID_ARGUMENT, message);
      }

      function appDeleted() {
        return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
      }
      /**
       * @param name - The name of the operation that was invalid.
       */


      function invalidRootOperation(name) {
        return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
      }
      /**
       * @param format - The format that was not valid.
       * @param message - A message describing the format violation.
       */


      function invalidFormat(format, message) {
        return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
      }
      /**
       * @param message - A message describing the internal error.
       */


      function internalError(message) {
        throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var StringFormat = {
        RAW: 'raw',
        BASE64: 'base64',
        BASE64URL: 'base64url',
        DATA_URL: 'data_url'
      };

      var StringData =
      /** @class */
      function () {
        function StringData(data, contentType) {
          this.data = data;
          this.contentType = contentType || null;
        }

        return StringData;
      }();

      function dataFromString(format, stringData) {
        switch (format) {
          case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));

          case StringFormat.BASE64:
          case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));

          case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
          // do nothing
        } // assert(false);


        throw unknown();
      }

      function utf8Bytes_(value) {
        var b = [];

        for (var i = 0; i < value.length; i++) {
          var c = value.charCodeAt(i);

          if (c <= 127) {
            b.push(c);
          } else {
            if (c <= 2047) {
              b.push(192 | c >> 6, 128 | c & 63);
            } else {
              if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

                if (!valid) {
                  // The second surrogate wasn't there.
                  b.push(239, 191, 189);
                } else {
                  var hi = c;
                  var lo = value.charCodeAt(++i);
                  c = 65536 | (hi & 1023) << 10 | lo & 1023;
                  b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
              } else {
                if ((c & 64512) === 56320) {
                  // Invalid low surrogate.
                  b.push(239, 191, 189);
                } else {
                  b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
                }
              }
            }
          }
        }

        return new Uint8Array(b);
      }

      function percentEncodedBytes_(value) {
        var decoded;

        try {
          decoded = decodeURIComponent(value);
        } catch (e) {
          throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
        }

        return utf8Bytes_(decoded);
      }

      function base64Bytes_(format, value) {
        switch (format) {
          case StringFormat.BASE64:
            {
              var hasMinus = value.indexOf('-') !== -1;
              var hasUnder = value.indexOf('_') !== -1;

              if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
              }

              break;
            }

          case StringFormat.BASE64URL:
            {
              var hasPlus = value.indexOf('+') !== -1;
              var hasSlash = value.indexOf('/') !== -1;

              if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
              }

              value = value.replace(/-/g, '+').replace(/_/g, '/');
              break;
            }
          // do nothing
        }

        var bytes;

        try {
          bytes = atob(value);
        } catch (e) {
          throw invalidFormat(format, 'Invalid character found');
        }

        var array = new Uint8Array(bytes.length);

        for (var i = 0; i < bytes.length; i++) {
          array[i] = bytes.charCodeAt(i);
        }

        return array;
      }

      var DataURLParts =
      /** @class */
      function () {
        function DataURLParts(dataURL) {
          this.base64 = false;
          this.contentType = null;
          var matches = dataURL.match(/^data:([^,]+)?,/);

          if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
          }

          var middle = matches[1] || null;

          if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
          }

          this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
        }

        return DataURLParts;
      }();

      function dataURLBytes_(dataUrl) {
        var parts = new DataURLParts(dataUrl);

        if (parts.base64) {
          return base64Bytes_(StringFormat.BASE64, parts.rest);
        } else {
          return percentEncodedBytes_(parts.rest);
        }
      }

      function dataURLContentType_(dataUrl) {
        var parts = new DataURLParts(dataUrl);
        return parts.contentType;
      }

      function endsWith(s, end) {
        var longEnough = s.length >= end.length;

        if (!longEnough) {
          return false;
        }

        return s.substring(s.length - end.length) === end;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var TaskEvent = {
        /** Triggered whenever the task changes or progress is updated. */
        STATE_CHANGED: 'state_changed'
      };
      var InternalTaskState = {
        RUNNING: 'running',
        PAUSING: 'pausing',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELING: 'canceling',
        CANCELED: 'canceled',
        ERROR: 'error'
      };
      var TaskState = {
        /** The task is currently transferring data. */
        RUNNING: 'running',

        /** The task was paused by the user. */
        PAUSED: 'paused',

        /** The task completed successfully. */
        SUCCESS: 'success',

        /** The task was canceled. */
        CANCELED: 'canceled',

        /** The task failed with an error. */
        ERROR: 'error'
      };

      function taskStateFromInternalTaskState(state) {
        switch (state) {
          case InternalTaskState.RUNNING:
          case InternalTaskState.PAUSING:
          case InternalTaskState.CANCELING:
            return TaskState.RUNNING;

          case InternalTaskState.PAUSED:
            return TaskState.PAUSED;

          case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;

          case InternalTaskState.CANCELED:
            return TaskState.CANCELED;

          case InternalTaskState.ERROR:
            return TaskState.ERROR;

          default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ErrorCode;

      (function (ErrorCode) {
        ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
      })(ErrorCode || (ErrorCode = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
       * doesn't work in React Native on Android.
       */


      var NetworkXhrIo =
      /** @class */
      function () {
        function NetworkXhrIo() {
          var _this = this;

          this.sent_ = false;
          this.xhr_ = new XMLHttpRequest();
          this.errorCode_ = ErrorCode.NO_ERROR;
          this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
              _this.errorCode_ = ErrorCode.ABORT;
              resolve(_this);
            });

            _this.xhr_.addEventListener('error', function () {
              _this.errorCode_ = ErrorCode.NETWORK_ERROR;
              resolve(_this);
            });

            _this.xhr_.addEventListener('load', function () {
              resolve(_this);
            });
          });
        }
        /**
         * @override
         */


        NetworkXhrIo.prototype.send = function (url, method, body, headers) {
          if (this.sent_) {
            throw internalError('cannot .send() more than once');
          }

          this.sent_ = true;
          this.xhr_.open(method, url, true);

          if (headers !== undefined) {
            for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                this.xhr_.setRequestHeader(key, headers[key].toString());
              }
            }
          }

          if (body !== undefined) {
            this.xhr_.send(body);
          } else {
            this.xhr_.send();
          }

          return this.sendPromise_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getErrorCode = function () {
          if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
          }

          return this.errorCode_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getStatus = function () {
          if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
          }

          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseText = function () {
          if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
          }

          return this.xhr_.responseText;
        };
        /**
         * Aborts the request.
         * @override
         */


        NetworkXhrIo.prototype.abort = function () {
          this.xhr_.abort();
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseHeader = function (header) {
          return this.xhr_.getResponseHeader(header);
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
          if (this.xhr_.upload != null) {
            this.xhr_.upload.addEventListener('progress', listener);
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
          if (this.xhr_.upload != null) {
            this.xhr_.upload.removeEventListener('progress', listener);
          }
        };

        return NetworkXhrIo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Factory-like class for creating XhrIo instances.
       */


      var XhrIoPool =
      /** @class */
      function () {
        function XhrIoPool() {}

        XhrIoPool.prototype.createXhrIo = function () {
          return new NetworkXhrIo();
        };

        return XhrIoPool;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function isJustDef(p) {
        return p !== void 0;
      } // eslint-disable-next-line @typescript-eslint/ban-types


      function isFunction(p) {
        return typeof p === 'function';
      }

      function isNonArrayObject(p) {
        return typeof p === 'object' && !Array.isArray(p);
      }

      function isString(p) {
        return typeof p === 'string' || p instanceof String;
      }

      function isNativeBlob(p) {
        return isNativeBlobDefined() && p instanceof Blob;
      }

      function isNativeBlobDefined() {
        return typeof Blob !== 'undefined';
      }

      function validateNumber(argument, minValue, maxValue, value) {
        if (value < minValue) {
          throw new FirebaseStorageError(Code.INVALID_ARGUMENT, "Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
        }

        if (value > maxValue) {
          throw new FirebaseStorageError(Code.INVALID_ARGUMENT, "Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getBlobBuilder() {
        if (typeof BlobBuilder !== 'undefined') {
          return BlobBuilder;
        } else if (typeof WebKitBlobBuilder !== 'undefined') {
          return WebKitBlobBuilder;
        } else {
          return undefined;
        }
      }
      /**
       * Concatenates one or more values together and converts them to a Blob.
       *
       * @param args The values that will make up the resulting blob.
       * @return The blob.
       */


      function getBlob() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var BlobBuilder = getBlobBuilder();

        if (BlobBuilder !== undefined) {
          var bb = new BlobBuilder();

          for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
          }

          return bb.getBlob();
        } else {
          if (isNativeBlobDefined()) {
            return new Blob(args);
          } else {
            throw new FirebaseStorageError(Code.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
          }
        }
      }
      /**
       * Slices the blob. The returned blob contains data from the start byte
       * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
       *
       * @param blob The blob to be sliced.
       * @param start Index of the starting byte.
       * @param end Index of the ending byte.
       * @return The blob slice or null if not supported.
       */


      function sliceBlob(blob, start, end) {
        if (blob.webkitSlice) {
          return blob.webkitSlice(start, end);
        } else if (blob.mozSlice) {
          return blob.mozSlice(start, end);
        } else if (blob.slice) {
          return blob.slice(start, end);
        }

        return null;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param opt_elideCopy - If true, doesn't copy mutable input data
       *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
       *     modified after this blob's construction.
       */


      var FbsBlob =
      /** @class */
      function () {
        function FbsBlob(data, elideCopy) {
          var size = 0;
          var blobType = '';

          if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
          } else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
              this.data_ = new Uint8Array(data);
            } else {
              this.data_ = new Uint8Array(data.byteLength);
              this.data_.set(new Uint8Array(data));
            }

            size = this.data_.length;
          } else if (data instanceof Uint8Array) {
            if (elideCopy) {
              this.data_ = data;
            } else {
              this.data_ = new Uint8Array(data.length);
              this.data_.set(data);
            }

            size = data.length;
          }

          this.size_ = size;
          this.type_ = blobType;
        }

        FbsBlob.prototype.size = function () {
          return this.size_;
        };

        FbsBlob.prototype.type = function () {
          return this.type_;
        };

        FbsBlob.prototype.slice = function (startByte, endByte) {
          if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);

            if (sliced === null) {
              return null;
            }

            return new FbsBlob(sliced);
          } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
          }
        };

        FbsBlob.getBlob = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
              if (val instanceof FbsBlob) {
                return val.data_;
              } else {
                return val;
              }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
          } else {
            var uint8Arrays = args.map(function (val) {
              if (isString(val)) {
                return dataFromString(StringFormat.RAW, val).data;
              } else {
                // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
              }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
              finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
              for (var i = 0; i < array.length; i++) {
                merged_1[index_1++] = array[i];
              }
            });
            return new FbsBlob(merged_1, true);
          }
        };

        FbsBlob.prototype.uploadData = function () {
          return this.data_;
        };

        return FbsBlob;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Location =
      /** @class */
      function () {
        function Location(bucket, path) {
          this.bucket = bucket;
          this.path_ = path;
        }

        Object.defineProperty(Location.prototype, "path", {
          get: function get() {
            return this.path_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Location.prototype, "isRoot", {
          get: function get() {
            return this.path.length === 0;
          },
          enumerable: false,
          configurable: true
        });

        Location.prototype.fullServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
        };

        Location.prototype.bucketOnlyServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o';
        };

        Location.makeFromBucketSpec = function (bucketString) {
          var bucketLocation;

          try {
            bucketLocation = Location.makeFromUrl(bucketString);
          } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
          }

          if (bucketLocation.path === '') {
            return bucketLocation;
          } else {
            throw invalidDefaultBucket(bucketString);
          }
        };

        Location.makeFromUrl = function (url) {
          var location = null;
          var bucketDomain = '([A-Za-z0-9.\\-_]+)';

          function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
              loc.path_ = loc.path_.slice(0, -1);
            }
          }

          var gsPath = '(/(.*))?$';
          var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
          var gsIndices = {
            bucket: 1,
            path: 3
          };

          function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
          }

          var version = 'v[A-Za-z0-9_]+';
          var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
          var firebaseStoragePath = '(/([^?#]*).*)?$';
          var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
          var firebaseStorageIndices = {
            bucket: 1,
            path: 3
          };
          var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
          var cloudStoragePath = '([^?#]*)';
          var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
          var cloudStorageIndices = {
            bucket: 1,
            path: 2
          };
          var groups = [{
            regex: gsRegex,
            indices: gsIndices,
            postModify: gsModify
          }, {
            regex: firebaseStorageRegExp,
            indices: firebaseStorageIndices,
            postModify: httpModify
          }, {
            regex: cloudStorageRegExp,
            indices: cloudStorageIndices,
            postModify: httpModify
          }];

          for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);

            if (captures) {
              var bucketValue = captures[group.indices.bucket];
              var pathValue = captures[group.indices.path];

              if (!pathValue) {
                pathValue = '';
              }

              location = new Location(bucketValue, pathValue);
              group.postModify(location);
              break;
            }
          }

          if (location == null) {
            throw invalidUrl(url);
          }

          return location;
        };

        return Location;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns the Object resulting from parsing the given JSON, or null if the
       * given string does not represent a JSON object.
       */


      function jsonObjectOrNull(s) {
        var obj;

        try {
          obj = JSON.parse(s);
        } catch (e) {
          return null;
        }

        if (isNonArrayObject(obj)) {
          return obj;
        } else {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Contains helper methods for manipulating paths.
       */

      /**
       * @return Null if the path is already at the root.
       */


      function parent(path) {
        if (path.length === 0) {
          return null;
        }

        var index = path.lastIndexOf('/');

        if (index === -1) {
          return '';
        }

        var newPath = path.slice(0, index);
        return newPath;
      }

      function child(path, childPath) {
        var canonicalChildPath = childPath.split('/').filter(function (component) {
          return component.length > 0;
        }).join('/');

        if (path.length === 0) {
          return canonicalChildPath;
        } else {
          return path + '/' + canonicalChildPath;
        }
      }
      /**
       * Returns the last component of a path.
       * '/foo/bar' -> 'bar'
       * '/foo/bar/baz/' -> 'baz/'
       * '/a' -> 'a'
       */


      function lastComponent(path) {
        var index = path.lastIndexOf('/', path.length - 2);

        if (index === -1) {
          return path;
        } else {
          return path.slice(index + 1);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function makeUrl(urlPart) {
        return "https://" + DEFAULT_HOST + "/v0" + urlPart;
      }

      function makeQueryString(params) {
        var encode = encodeURIComponent;
        var queryPart = '?';

        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
          }
        } // Chop off the extra '&' or '?' on the end


        queryPart = queryPart.slice(0, -1);
        return queryPart;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function noXform_(metadata, value) {
        return value;
      }

      var Mapping =
      /** @class */
      function () {
        function Mapping(server, local, writable, xform) {
          this.server = server;
          this.local = local || server;
          this.writable = !!writable;
          this.xform = xform || noXform_;
        }

        return Mapping;
      }();

      var mappings_ = null;

      function xformPath(fullPath) {
        if (!isString(fullPath) || fullPath.length < 2) {
          return fullPath;
        } else {
          return lastComponent(fullPath);
        }
      }

      function getMappings() {
        if (mappings_) {
          return mappings_;
        }

        var mappings = [];
        mappings.push(new Mapping('bucket'));
        mappings.push(new Mapping('generation'));
        mappings.push(new Mapping('metageneration'));
        mappings.push(new Mapping('name', 'fullPath', true));

        function mappingsXformPath(_metadata, fullPath) {
          return xformPath(fullPath);
        }

        var nameMapping = new Mapping('name');
        nameMapping.xform = mappingsXformPath;
        mappings.push(nameMapping);
        /**
         * Coerces the second param to a number, if it is defined.
         */

        function xformSize(_metadata, size) {
          if (size !== undefined) {
            return Number(size);
          } else {
            return size;
          }
        }

        var sizeMapping = new Mapping('size');
        sizeMapping.xform = xformSize;
        mappings.push(sizeMapping);
        mappings.push(new Mapping('timeCreated'));
        mappings.push(new Mapping('updated'));
        mappings.push(new Mapping('md5Hash', null, true));
        mappings.push(new Mapping('cacheControl', null, true));
        mappings.push(new Mapping('contentDisposition', null, true));
        mappings.push(new Mapping('contentEncoding', null, true));
        mappings.push(new Mapping('contentLanguage', null, true));
        mappings.push(new Mapping('contentType', null, true));
        mappings.push(new Mapping('metadata', 'customMetadata', true));
        mappings_ = mappings;
        return mappings_;
      }

      function addRef(metadata, service) {
        function generateRef() {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var loc = new Location(bucket, path);
          return service.makeStorageReference(loc);
        }

        Object.defineProperty(metadata, 'ref', {
          get: generateRef
        });
      }

      function fromResource(service, resource, mappings) {
        var metadata = {};
        metadata['type'] = 'file';
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];
          metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
        }

        addRef(metadata, service);
        return metadata;
      }

      function fromResourceString(service, resourceString, mappings) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromResource(service, resource, mappings);
      }

      function downloadUrlFromResourceString(metadata, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        if (!isString(obj['downloadTokens'])) {
          // This can happen if objects are uploaded through GCS and retrieved
          // through list, so we don't want to throw an Error.
          return null;
        }

        var tokens = obj['downloadTokens'];

        if (tokens.length === 0) {
          return null;
        }

        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
          var base = makeUrl(urlPart);
          var queryString = makeQueryString({
            alt: 'media',
            token: token
          });
          return base + queryString;
        });
        return urls[0];
      }

      function toResourceString(metadata, mappings) {
        var resource = {};
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];

          if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
          }
        }

        return JSON.stringify(resource);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var PREFIXES_KEY = 'prefixes';
      var ITEMS_KEY = 'items';

      function fromBackendResponse(service, bucket, resource) {
        var listResult = {
          prefixes: [],
          items: [],
          nextPageToken: resource['nextPageToken']
        };

        if (resource[PREFIXES_KEY]) {
          for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
          }
        }

        if (resource[ITEMS_KEY]) {
          for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
          }
        }

        return listResult;
      }

      function fromResponseString(service, bucket, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromBackendResponse(service, bucket, resource);
      }

      var RequestInfo =
      /** @class */
      function () {
        function RequestInfo(url, method,
        /**
         * Returns the value with which to resolve the request's promise. Only called
         * if the request is successful. Throw from this function to reject the
         * returned Request's promise with the thrown error.
         * Note: The XhrIo passed to this function may be reused after this callback
         * returns. Do not keep a reference to it in any way.
         */
        handler, timeout) {
          this.url = url;
          this.method = method;
          this.handler = handler;
          this.timeout = timeout;
          this.urlParams = {};
          this.headers = {};
          this.body = null;
          this.errorHandler = null;
          /**
           * Called with the current number of bytes uploaded and total size (-1 if not
           * computable) of the request body (i.e. used to report upload progress).
           */

          this.progressCallback = null;
          this.successCodes = [200];
          this.additionalRetryCodes = [];
        }

        return RequestInfo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws the UNKNOWN FirebaseStorageError if cndn is false.
       */


      function handlerCheck(cndn) {
        if (!cndn) {
          throw unknown();
        }
      }

      function metadataHandler(service, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(service, text, mappings);
          handlerCheck(metadata !== null);
          return metadata;
        }

        return handler;
      }

      function listHandler(service, bucket) {
        function handler(xhr, text) {
          var listResult = fromResponseString(service, bucket, text);
          handlerCheck(listResult !== null);
          return listResult;
        }

        return handler;
      }

      function downloadUrlHandler(service, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(service, text, mappings);
          handlerCheck(metadata !== null);
          return downloadUrlFromResourceString(metadata, text);
        }

        return handler;
      }

      function sharedErrorHandler(location) {
        function errorHandler(xhr, err) {
          var newErr;

          if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
          } else {
            if (xhr.getStatus() === 402) {
              newErr = quotaExceeded(location.bucket);
            } else {
              if (xhr.getStatus() === 403) {
                newErr = unauthorized(location.path);
              } else {
                newErr = err;
              }
            }
          }

          newErr.serverResponse = err.serverResponse;
          return newErr;
        }

        return errorHandler;
      }

      function objectErrorHandler(location) {
        var shared = sharedErrorHandler(location);

        function errorHandler(xhr, err) {
          var newErr = shared(xhr, err);

          if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
          }

          newErr.serverResponse = err.serverResponse;
          return newErr;
        }

        return errorHandler;
      }

      function getMetadata(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function list(service, location, delimiter, pageToken, maxResults) {
        var urlParams = {};

        if (location.isRoot) {
          urlParams['prefix'] = '';
        } else {
          urlParams['prefix'] = location.path + '/';
        }

        if (delimiter && delimiter.length > 0) {
          urlParams['delimiter'] = delimiter;
        }

        if (pageToken) {
          urlParams['pageToken'] = pageToken;
        }

        if (maxResults) {
          urlParams['maxResults'] = maxResults;
        }

        var urlPart = location.bucketOnlyServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }

      function getDownloadUrl(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function updateMetadata(service, location, metadata, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'PATCH';
        var body = toResourceString(metadata, mappings);
        var headers = {
          'Content-Type': 'application/json; charset=utf-8'
        };
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function deleteObject(service, location) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'DELETE';
        var timeout = service.maxOperationRetryTime;

        function handler(_xhr, _text) {}

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.successCodes = [200, 204];
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function determineContentType_(metadata, blob) {
        return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
      }

      function metadataForUpload_(location, blob, metadata) {
        var metadataClone = Object.assign({}, metadata);
        metadataClone['fullPath'] = location.path;
        metadataClone['size'] = blob.size();

        if (!metadataClone['contentType']) {
          metadataClone['contentType'] = determineContentType_(null, blob);
        }

        return metadataClone;
      }

      function multipartUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var headers = {
          'X-Goog-Upload-Protocol': 'multipart'
        };

        function genBoundary() {
          var str = '';

          for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
          }

          return str;
        }

        var boundary = genBoundary();
        headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
        var metadata_ = metadataForUpload_(location, blob, metadata);
        var metadataString = toResourceString(metadata_, mappings);
        var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
        var postBlobPart = '\r\n--' + boundary + '--';
        var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

        if (body === null) {
          throw cannotSliceBlob();
        }

        var urlParams = {
          name: metadata_['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param current The number of bytes that have been uploaded so far.
       * @param total The total number of bytes in the upload.
       * @param opt_finalized True if the server has finished the upload.
       * @param opt_metadata The upload metadata, should
       *     only be passed if opt_finalized is true.
       */


      var ResumableUploadStatus =
      /** @class */
      function () {
        function ResumableUploadStatus(current, total, finalized, metadata) {
          this.current = current;
          this.total = total;
          this.finalized = !!finalized;
          this.metadata = metadata || null;
        }

        return ResumableUploadStatus;
      }();

      function checkResumeHeader_(xhr, allowed) {
        var status = null;

        try {
          status = xhr.getResponseHeader('X-Goog-Upload-Status');
        } catch (e) {
          handlerCheck(false);
        }

        var allowedStatus = allowed || ['active'];
        handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
        return status;
      }

      function createResumableUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var metadataForUpload = metadataForUpload_(location, blob, metadata);
        var urlParams = {
          name: metadataForUpload['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var headers = {
          'X-Goog-Upload-Protocol': 'resumable',
          'X-Goog-Upload-Command': 'start',
          'X-Goog-Upload-Header-Content-Length': blob.size(),
          'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
          'Content-Type': 'application/json; charset=utf-8'
        };
        var body = toResourceString(metadataForUpload, mappings);
        var timeout = service.maxUploadRetryTime;

        function handler(xhr) {
          checkResumeHeader_(xhr);
          var url;

          try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
          } catch (e) {
            handlerCheck(false);
          }

          handlerCheck(isString(url));
          return url;
        }

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       */


      function getResumableUploadStatus(service, location, url, blob) {
        var headers = {
          'X-Goog-Upload-Command': 'query'
        };

        function handler(xhr) {
          var status = checkResumeHeader_(xhr, ['active', 'final']);
          var sizeString = null;

          try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
          } catch (e) {
            handlerCheck(false);
          }

          if (!sizeString) {
            // null or empty string
            handlerCheck(false);
          }

          var size = Number(sizeString);
          handlerCheck(!isNaN(size));
          return new ResumableUploadStatus(size, blob.size(), status === 'final');
        }

        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * Any uploads via the resumable upload API must transfer a number of bytes
       * that is a multiple of this number.
       */


      var resumableUploadChunkSize = 256 * 1024;
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       * @param chunkSize Number of bytes to upload.
       * @param status The previous status.
       *     If not passed or null, we start from the beginning.
       * @throws fbs.Error If the upload is already complete, the passed in status
       *     has a final size inconsistent with the blob, or the blob cannot be sliced
       *     for upload.
       */

      function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
        // TODO(andysoto): standardize on internal asserts
        // assert(!(opt_status && opt_status.finalized));
        var status_ = new ResumableUploadStatus(0, 0);

        if (status) {
          status_.current = status.current;
          status_.total = status.total;
        } else {
          status_.current = 0;
          status_.total = blob.size();
        }

        if (blob.size() !== status_.total) {
          throw serverFileWrongSize();
        }

        var bytesLeft = status_.total - status_.current;
        var bytesToUpload = bytesLeft;

        if (chunkSize > 0) {
          bytesToUpload = Math.min(bytesToUpload, chunkSize);
        }

        var startByte = status_.current;
        var endByte = startByte + bytesToUpload;
        var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
        var headers = {
          'X-Goog-Upload-Command': uploadCommand,
          'X-Goog-Upload-Offset': status_.current
        };
        var body = blob.slice(startByte, endByte);

        if (body === null) {
          throw cannotSliceBlob();
        }

        function handler(xhr, text) {
          // TODO(andysoto): Verify the MD5 of each uploaded range:
          // the 'x-range-md5' header comes back with status code 308 responses.
          // We'll only be able to bail out though, because you can't re-upload a
          // range that you previously uploaded.
          var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
          var newCurrent = status_.current + bytesToUpload;
          var size = blob.size();
          var metadata;

          if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
          } else {
            metadata = null;
          }

          return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
        }

        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.progressCallback = progressCallback || null;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Observer =
      /** @class */
      function () {
        function Observer(nextOrObserver, error, complete) {
          var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;

          if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error;
            this.complete = complete;
          } else {
            var observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
          }
        }

        return Observer;
      }();

      var UploadTaskSnapshot =
      /** @class */
      function () {
        function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
          this.bytesTransferred = bytesTransferred;
          this.totalBytes = totalBytes;
          this.state = state;
          this.metadata = metadata;
          this.task = task;
          this.ref = ref;
        }

        return UploadTaskSnapshot;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a function that invokes f with its arguments asynchronously as a
       * microtask, i.e. as soon as possible after the current script returns back
       * into browser code.
       */
      // eslint-disable-next-line @typescript-eslint/ban-types


      function async(f) {
        return function () {
          var argsToForward = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
          } // eslint-disable-next-line @typescript-eslint/no-floating-promises


          Promise.resolve().then(function () {
            return f.apply(void 0, argsToForward);
          });
        };
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents a blob being uploaded. Can be used to pause/resume/cancel the
       * upload and manage callbacks for various events.
       */


      var UploadTask =
      /** @class */
      function () {
        /**
         * @param ref - The firebaseStorage.Reference object this task came
         *     from, untyped to avoid cyclic dependencies.
         * @param blob - The blob to upload.
         */
        function UploadTask(ref, blob, metadata) {
          var _this = this;

          if (metadata === void 0) {
            metadata = null;
          }
          /**
           * @internal
           */


          this._transferred = 0;
          this._needToFetchStatus = false;
          this._needToFetchMetadata = false;
          this._observers = [];
          this._error = undefined;
          this._uploadUrl = undefined;
          this._request = undefined;
          this._chunkMultiplier = 1;
          this._resolve = undefined;
          this._reject = undefined;
          this._ref = ref;
          this._blob = blob;
          this._metadata = metadata;
          this._mappings = getMappings();
          this._resumable = this._shouldDoResumable(this._blob);
          this._state = InternalTaskState.RUNNING;

          this._errorHandler = function (error) {
            _this._request = undefined;
            _this._chunkMultiplier = 1;

            if (error.codeEquals(Code.CANCELED)) {
              _this._needToFetchStatus = true;

              _this.completeTransitions_();
            } else {
              _this._error = error;

              _this._transition(InternalTaskState.ERROR);
            }
          };

          this._metadataErrorHandler = function (error) {
            _this._request = undefined;

            if (error.codeEquals(Code.CANCELED)) {
              _this.completeTransitions_();
            } else {
              _this._error = error;

              _this._transition(InternalTaskState.ERROR);
            }
          };

          this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;

            _this._start();
          }); // Prevent uncaught rejections on the internal promise from bubbling out
          // to the top level with a dummy handler.

          this._promise.then(null, function () {});
        }

        UploadTask.prototype._makeProgressCallback = function () {
          var _this = this;

          var sizeBefore = this._transferred;
          return function (loaded) {
            return _this._updateProgress(sizeBefore + loaded);
          };
        };

        UploadTask.prototype._shouldDoResumable = function (blob) {
          return blob.size() > 256 * 1024;
        };

        UploadTask.prototype._start = function () {
          if (this._state !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
          }

          if (this._request !== undefined) {
            return;
          }

          if (this._resumable) {
            if (this._uploadUrl === undefined) {
              this._createResumable();
            } else {
              if (this._needToFetchStatus) {
                this._fetchStatus();
              } else {
                if (this._needToFetchMetadata) {
                  // Happens if we miss the metadata on upload completion.
                  this._fetchMetadata();
                } else {
                  this._continueUpload();
                }
              }
            }
          } else {
            this._oneShotUpload();
          }
        };

        UploadTask.prototype._resolveToken = function (callback) {
          var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this._ref.storage.getAuthToken().then(function (authToken) {
            switch (_this._state) {
              case InternalTaskState.RUNNING:
                callback(authToken);
                break;

              case InternalTaskState.CANCELING:
                _this._transition(InternalTaskState.CANCELED);

                break;

              case InternalTaskState.PAUSING:
                _this._transition(InternalTaskState.PAUSED);

                break;
            }
          });
        }; // TODO(andysoto): assert false


        UploadTask.prototype._createResumable = function () {
          var _this = this;

          this._resolveToken(function (authToken) {
            var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

            var createRequest = _this._ref.storage.makeRequest(requestInfo, authToken);

            _this._request = createRequest;
            createRequest.getPromise().then(function (url) {
              _this._request = undefined;
              _this._uploadUrl = url;
              _this._needToFetchStatus = false;

              _this.completeTransitions_();
            }, _this._errorHandler);
          });
        };

        UploadTask.prototype._fetchStatus = function () {
          var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


          var url = this._uploadUrl;

          this._resolveToken(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);

            var statusRequest = _this._ref.storage.makeRequest(requestInfo, authToken);

            _this._request = statusRequest;
            statusRequest.getPromise().then(function (status) {
              status = status;
              _this._request = undefined;

              _this._updateProgress(status.current);

              _this._needToFetchStatus = false;

              if (status.finalized) {
                _this._needToFetchMetadata = true;
              }

              _this.completeTransitions_();
            }, _this._errorHandler);
          });
        };

        UploadTask.prototype._continueUpload = function () {
          var _this = this;

          var chunkSize = resumableUploadChunkSize * this._chunkMultiplier;
          var status = new ResumableUploadStatus(this._transferred, this._blob.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

          var url = this._uploadUrl;

          this._resolveToken(function (authToken) {
            var requestInfo;

            try {
              requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
            } catch (e) {
              _this._error = e;

              _this._transition(InternalTaskState.ERROR);

              return;
            }

            var uploadRequest = _this._ref.storage.makeRequest(requestInfo, authToken);

            _this._request = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
              _this._increaseMultiplier();

              _this._request = undefined;

              _this._updateProgress(newStatus.current);

              if (newStatus.finalized) {
                _this._metadata = newStatus.metadata;

                _this._transition(InternalTaskState.SUCCESS);
              } else {
                _this.completeTransitions_();
              }
            }, _this._errorHandler);
          });
        };

        UploadTask.prototype._increaseMultiplier = function () {
          var currentSize = resumableUploadChunkSize * this._chunkMultiplier; // Max chunk size is 32M.

          if (currentSize < 32 * 1024 * 1024) {
            this._chunkMultiplier *= 2;
          }
        };

        UploadTask.prototype._fetchMetadata = function () {
          var _this = this;

          this._resolveToken(function (authToken) {
            var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);

            var metadataRequest = _this._ref.storage.makeRequest(requestInfo, authToken);

            _this._request = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
              _this._request = undefined;
              _this._metadata = metadata;

              _this._transition(InternalTaskState.SUCCESS);
            }, _this._metadataErrorHandler);
          });
        };

        UploadTask.prototype._oneShotUpload = function () {
          var _this = this;

          this._resolveToken(function (authToken) {
            var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

            var multipartRequest = _this._ref.storage.makeRequest(requestInfo, authToken);

            _this._request = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
              _this._request = undefined;
              _this._metadata = metadata;

              _this._updateProgress(_this._blob.size());

              _this._transition(InternalTaskState.SUCCESS);
            }, _this._errorHandler);
          });
        };

        UploadTask.prototype._updateProgress = function (transferred) {
          var old = this._transferred;
          this._transferred = transferred; // A progress update can make the "transferred" value smaller (e.g. a
          // partial upload not completed by server, after which the "transferred"
          // value may reset to the value at the beginning of the request).

          if (this._transferred !== old) {
            this._notifyObservers();
          }
        };

        UploadTask.prototype._transition = function (state) {
          if (this._state === state) {
            return;
          }

          switch (state) {
            case InternalTaskState.CANCELING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING);
              this._state = state;

              if (this._request !== undefined) {
                this._request.cancel();
              }

              break;

            case InternalTaskState.PAUSING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING);
              this._state = state;

              if (this._request !== undefined) {
                this._request.cancel();
              }

              break;

            case InternalTaskState.RUNNING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.PAUSING);
              var wasPaused = this._state === InternalTaskState.PAUSED;
              this._state = state;

              if (wasPaused) {
                this._notifyObservers();

                this._start();
              }

              break;

            case InternalTaskState.PAUSED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSING);
              this._state = state;

              this._notifyObservers();

              break;

            case InternalTaskState.CANCELED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.CANCELING);
              this._error = canceled();
              this._state = state;

              this._notifyObservers();

              break;

            case InternalTaskState.ERROR:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this._state = state;

              this._notifyObservers();

              break;

            case InternalTaskState.SUCCESS:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this._state = state;

              this._notifyObservers();

              break;
          }
        };

        UploadTask.prototype.completeTransitions_ = function () {
          switch (this._state) {
            case InternalTaskState.PAUSING:
              this._transition(InternalTaskState.PAUSED);

              break;

            case InternalTaskState.CANCELING:
              this._transition(InternalTaskState.CANCELED);

              break;

            case InternalTaskState.RUNNING:
              this._start();

              break;
          }
        };

        Object.defineProperty(UploadTask.prototype, "snapshot", {
          get: function get() {
            var externalState = taskStateFromInternalTaskState(this._state);
            return new UploadTaskSnapshot(this._transferred, this._blob.size(), externalState, this._metadata, this, this._ref);
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Adds a callback for an event.
         * @param type - The type of event to listen for.
         */

        UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
          var _this = this;

          var observer = new Observer(nextOrObserver, error, completed);

          this._addObserver(observer);

          return function () {
            _this._removeObserver(observer);
          };
        };
        /**
         * This object behaves like a Promise, and resolves with its snapshot data
         * when the upload completes.
         * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
         * @param onRejected - The rejection callback.
         */


        UploadTask.prototype.then = function (onFulfilled, onRejected) {
          // These casts are needed so that TypeScript can infer the types of the
          // resulting Promise.
          return this._promise.then(onFulfilled, onRejected);
        };
        /**
         * Equivalent to calling `then(null, onRejected)`.
         */


        UploadTask.prototype["catch"] = function (onRejected) {
          return this.then(null, onRejected);
        };
        /**
         * Adds the given observer.
         */


        UploadTask.prototype._addObserver = function (observer) {
          this._observers.push(observer);

          this._notifyObserver(observer);
        };
        /**
         * Removes the given observer.
         */


        UploadTask.prototype._removeObserver = function (observer) {
          var i = this._observers.indexOf(observer);

          if (i !== -1) {
            this._observers.splice(i, 1);
          }
        };

        UploadTask.prototype._notifyObservers = function () {
          var _this = this;

          this._finishPromise();

          var observers = this._observers.slice();

          observers.forEach(function (observer) {
            _this._notifyObserver(observer);
          });
        };

        UploadTask.prototype._finishPromise = function () {
          if (this._resolve !== undefined) {
            var triggered = true;

            switch (taskStateFromInternalTaskState(this._state)) {
              case TaskState.SUCCESS:
                async(this._resolve.bind(null, this.snapshot))();
                break;

              case TaskState.CANCELED:
              case TaskState.ERROR:
                var toCall = this._reject;
                async(toCall.bind(null, this._error))();
                break;

              default:
                triggered = false;
                break;
            }

            if (triggered) {
              this._resolve = undefined;
              this._reject = undefined;
            }
          }
        };

        UploadTask.prototype._notifyObserver = function (observer) {
          var externalState = taskStateFromInternalTaskState(this._state);

          switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
              if (observer.next) {
                async(observer.next.bind(observer, this.snapshot))();
              }

              break;

            case TaskState.SUCCESS:
              if (observer.complete) {
                async(observer.complete.bind(observer))();
              }

              break;

            case TaskState.CANCELED:
            case TaskState.ERROR:
              if (observer.error) {
                async(observer.error.bind(observer, this._error))();
              }

              break;

            default:
              // TODO(andysoto): assert(false);
              if (observer.error) {
                async(observer.error.bind(observer, this._error))();
              }

          }
        };
        /**
         * Resumes a paused task. Has no effect on a currently running or failed task.
         * @returns True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.resume = function () {
          var valid = this._state === InternalTaskState.PAUSED || this._state === InternalTaskState.PAUSING;

          if (valid) {
            this._transition(InternalTaskState.RUNNING);
          }

          return valid;
        };
        /**
         * Pauses a currently running task. Has no effect on a paused or failed task.
         * @returns True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.pause = function () {
          var valid = this._state === InternalTaskState.RUNNING;

          if (valid) {
            this._transition(InternalTaskState.PAUSING);
          }

          return valid;
        };
        /**
         * Cancels a currently running or paused task. Has no effect on a complete or
         * failed task.
         * @returns True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.cancel = function () {
          var valid = this._state === InternalTaskState.RUNNING || this._state === InternalTaskState.PAUSING;

          if (valid) {
            this._transition(InternalTaskState.CANCELING);
          }

          return valid;
        };

        return UploadTask;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides methods to interact with a bucket in the Firebase Storage service.
       * @param location - An fbs.location, or the URL at
       *     which to base this object, in one of the following forms:
       *         gs://<bucket>/<object-path>
       *         http[s]://firebasestorage.googleapis.com/
       *                     <api-version>/b/<bucket>/o/<object-path>
       *     Any query or fragment strings will be ignored in the http[s]
       *     format. If no value is passed, the storage object will use a URL based on
       *     the project ID of the base firebase.App instance.
       */


      var Reference =
      /** @class */
      function () {
        function Reference(_service, location) {
          this._service = _service;

          if (location instanceof Location) {
            this._location = location;
          } else {
            this._location = Location.makeFromUrl(location);
          }
        }
        /**
         * @returns The URL for the bucket and path this object references,
         *     in the form gs://<bucket>/<object-path>
         * @override
         */


        Reference.prototype.toString = function () {
          return 'gs://' + this._location.bucket + '/' + this._location.path;
        };

        Reference.prototype.newRef = function (service, location) {
          return new Reference(service, location);
        };

        Object.defineProperty(Reference.prototype, "root", {
          /**
           * @returns An reference to the root of this
           *     object's bucket.
           */
          get: function get() {
            var location = new Location(this._location.bucket, '');
            return this.newRef(this._service, location);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "bucket", {
          get: function get() {
            return this._location.bucket;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "fullPath", {
          get: function get() {
            return this._location.path;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "name", {
          get: function get() {
            return lastComponent(this._location.path);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "storage", {
          get: function get() {
            return this._service;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "parent", {
          get: function get() {
            var newPath = parent(this._location.path);

            if (newPath === null) {
              return null;
            }

            var location = new Location(this._location.bucket, newPath);
            return new Reference(this._service, location);
          },
          enumerable: false,
          configurable: true
        });

        Reference.prototype._throwIfRoot = function (name) {
          if (this._location.path === '') {
            throw invalidRootOperation(name);
          }
        };

        return Reference;
      }();
      /**
       * Uploads a blob to this object's location.
       * @public
       * @param ref - Storage Reference where data should be uploaded.
       * @param data - The data to upload.
       * @param metadata - Metadata for the newly uploaded string.
       * @returns An UploadTask that lets you control and
       *     observe the upload.
       */


      function uploadBytesResumable(ref, data, metadata) {
        if (metadata === void 0) {
          metadata = null;
        }

        ref._throwIfRoot('uploadBytesResumable');

        return new UploadTask(ref, new FbsBlob(data), metadata);
      }
      /**
       * Uploads a string to this object's location.
       * @public
       * @param ref - Storage Reference where string should be uploaded.
       * @param value - The string to upload.
       * @param format - The format of the string to upload.
       * @param metadata - Metadata for the newly uploaded object.
       * @returns An UploadTask that lets you control and
       *     observe the upload.
       */


      function uploadString(ref, value, format, metadata) {
        if (format === void 0) {
          format = StringFormat.RAW;
        }

        ref._throwIfRoot('putString');

        var data = dataFromString(format, value);
        var metadataClone = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, metadata);

        if (metadataClone['contentType'] == null && data.contentType != null) {
          metadataClone['contentType'] = data.contentType;
        }

        return new UploadTask(ref, new FbsBlob(data.data, true), metadataClone);
      }
      /**
       * List all items (files) and prefixes (folders) under this storage reference.
       *
       * This is a helper method for calling list() repeatedly until there are
       * no more results. The default pagination size is 1000.
       *
       * Note: The results may not be consistent if objects are changed while this
       * operation is running.
       *
       * Warning: listAll may potentially consume too many resources if there are
       * too many results.
       * @public
       * @param ref - Storage Reference to get list from.
       *
       * @returns A Promise that resolves with all the items and prefixes under
       *      the current storage reference. `prefixes` contains references to
       *      sub-directories and `items` contains references to objects in this
       *      folder. `nextPageToken` is never returned.
       */


      function listAll(ref) {
        var accumulator = {
          prefixes: [],
          items: []
        };
        return listAllHelper(ref, accumulator).then(function () {
          return accumulator;
        });
      }
      /**
       * Separated from listAll because async functions can't use "arguments".
       * @internal
       * @param ref
       * @param accumulator
       * @param pageToken
       */


      function listAllHelper(ref, accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var opt, nextPage;

          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                opt = {
                  // maxResults is 1000 by default.
                  pageToken: pageToken
                };
                return [4
                /*yield*/
                , list$1(ref, opt)];

              case 1:
                nextPage = _c.sent();

                (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

                (_b = accumulator.items).push.apply(_b, nextPage.items);

                if (!(nextPage.nextPageToken != null)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , listAllHelper(ref, accumulator, nextPage.nextPageToken)];

              case 2:
                _c.sent();

                _c.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * List items (files) and prefixes (folders) under this storage reference.
       *
       * List API is only available for Firebase Rules Version 2.
       *
       * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
       * delimited folder structure.
       * Refer to GCS's List API if you want to learn more.
       *
       * To adhere to Firebase Rules's Semantics, Firebase Storage does not
       * support objects whose paths end with "/" or contain two consecutive
       * "/"s. Firebase Storage List API will filter these unsupported objects.
       * list() may fail if there are too many unsupported objects in the bucket.
       * @public
       *
       * @param ref - Storage Reference to get list from.
       * @param options - See ListOptions for details.
       * @returns A Promise that resolves with the items and prefixes.
       *      `prefixes` contains references to sub-folders and `items`
       *      contains references to objects in this folder. `nextPageToken`
       *      can be used to get the rest of the results.
       */


      function list$1(ref, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, op, requestInfo;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (options != null) {
                  if (typeof options.maxResults === 'number') {
                    validateNumber('options.maxResults',
                    /* minValue= */
                    1,
                    /* maxValue= */
                    1000, options.maxResults);
                  }
                }

                return [4
                /*yield*/
                , ref.storage.getAuthToken()];

              case 1:
                authToken = _a.sent();
                op = options || {};
                requestInfo = list(ref.storage, ref._location,
                /*delimiter= */
                '/', op.pageToken, op.maxResults);
                return [2
                /*return*/
                , ref.storage.makeRequest(requestInfo, authToken).getPromise()];
            }
          });
        });
      }
      /**
       * A promise that resolves with the metadata for this object. If this
       * object doesn't exist or metadata cannot be retreived, the promise is
       * rejected.
       * @public
       * @param ref - Storage Reference to get metadata from.
       */


      function getMetadata$1(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, requestInfo;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                ref._throwIfRoot('getMetadata');

                return [4
                /*yield*/
                , ref.storage.getAuthToken()];

              case 1:
                authToken = _a.sent();
                requestInfo = getMetadata(ref.storage, ref._location, getMappings());
                return [2
                /*return*/
                , ref.storage.makeRequest(requestInfo, authToken).getPromise()];
            }
          });
        });
      }
      /**
       * Updates the metadata for this object.
       * @public
       * @param ref - Storage Reference to update metadata for.
       * @param metadata - The new metadata for the object.
       *     Only values that have been explicitly set will be changed. Explicitly
       *     setting a value to null will remove the metadata.
       * @returns A promise that resolves
       *     with the new metadata for this object.
       *     See `firebaseStorage.Reference.prototype.getMetadata`
       */


      function updateMetadata$1(ref, metadata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, requestInfo;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                ref._throwIfRoot('updateMetadata');

                return [4
                /*yield*/
                , ref.storage.getAuthToken()];

              case 1:
                authToken = _a.sent();
                requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
                return [2
                /*return*/
                , ref.storage.makeRequest(requestInfo, authToken).getPromise()];
            }
          });
        });
      }
      /**
       * Returns the download URL for the given Reference.
       * @public
       * @returns A promise that resolves with the download
       *     URL for this object.
       */


      function getDownloadURL(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, requestInfo;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                ref._throwIfRoot('getDownloadURL');

                return [4
                /*yield*/
                , ref.storage.getAuthToken()];

              case 1:
                authToken = _a.sent();
                requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
                return [2
                /*return*/
                , ref.storage.makeRequest(requestInfo, authToken).getPromise().then(function (url) {
                  if (url === null) {
                    throw noDownloadURL();
                  }

                  return url;
                })];
            }
          });
        });
      }
      /**
       * Deletes the object at this location.
       * @public
       * @param ref - Storage Reference for object to delete.
       * @returns A promise that resolves if the deletion succeeds.
       */


      function deleteObject$1(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, requestInfo;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                ref._throwIfRoot('deleteObject');

                return [4
                /*yield*/
                , ref.storage.getAuthToken()];

              case 1:
                authToken = _a.sent();
                requestInfo = deleteObject(ref.storage, ref._location);
                return [2
                /*return*/
                , ref.storage.makeRequest(requestInfo, authToken).getPromise()];
            }
          });
        });
      }
      /**
       * Returns reference for object obtained by appending `childPath` to `ref`.
       * @internal
       *
       * @param ref - Storage Reference to get child of.
       * @param childPath - Child path from provided ref.
       * @returns A reference to the object obtained by
       * appending childPath, removing any duplicate, beginning, or trailing
       * slashes.
       */


      function getChild(ref, childPath) {
        var newPath = child(ref._location.path, childPath);
        var location = new Location(ref._location.bucket, newPath);
        return new Reference(ref.storage, location);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var UploadTaskSnapshotCompat =
      /** @class */
      function () {
        function UploadTaskSnapshotCompat(_delegate, task, ref) {
          this._delegate = _delegate;
          this.task = task;
          this.ref = ref;
        }

        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "bytesTransferred", {
          get: function get() {
            return this._delegate.bytesTransferred;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "metadata", {
          get: function get() {
            return this._delegate.metadata;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "state", {
          get: function get() {
            return this._delegate.state;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "totalBytes", {
          get: function get() {
            return this._delegate.totalBytes;
          },
          enumerable: false,
          configurable: true
        });
        return UploadTaskSnapshotCompat;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var UploadTaskCompat =
      /** @class */
      function () {
        function UploadTaskCompat(_delegate, _ref) {
          this._delegate = _delegate;
          this._ref = _ref;
          this.cancel = this._delegate.cancel.bind(this._delegate);
          this["catch"] = this._delegate["catch"].bind(this._delegate);
          this.pause = this._delegate.pause.bind(this._delegate);
          this.resume = this._delegate.resume.bind(this._delegate);
          this._snapshot = new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
        }

        Object.defineProperty(UploadTaskCompat.prototype, "snapshot", {
          get: function get() {
            return this._snapshot;
          },
          enumerable: false,
          configurable: true
        });

        UploadTaskCompat.prototype.then = function (onFulfilled, onRejected) {
          var _this = this;

          return this._delegate.then(function (snapshot) {
            if (onFulfilled) {
              return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
            }
          }, onRejected);
        };

        UploadTaskCompat.prototype.on = function (type, nextOrObserver, error, completed) {
          var _this = this;

          var wrappedNextOrObserver = undefined;

          if (!!nextOrObserver) {
            if (typeof nextOrObserver === 'function') {
              wrappedNextOrObserver = function wrappedNextOrObserver(taskSnapshot) {
                return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
              };
            } else {
              wrappedNextOrObserver = {
                next: !!nextOrObserver.next ? function (taskSnapshot) {
                  return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                } : undefined,
                complete: nextOrObserver.complete || undefined,
                error: nextOrObserver.error || undefined
              };
            }
          }

          return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
        };

        return UploadTaskCompat;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ListResultCompat =
      /** @class */
      function () {
        function ListResultCompat(_delegate, _service) {
          this._delegate = _delegate;
          this._service = _service;
        }

        Object.defineProperty(ListResultCompat.prototype, "prefixes", {
          get: function get() {
            var _this = this;

            return this._delegate.prefixes.map(function (ref) {
              return new ReferenceCompat(ref, _this._service);
            });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ListResultCompat.prototype, "items", {
          get: function get() {
            var _this = this;

            return this._delegate.items.map(function (ref) {
              return new ReferenceCompat(ref, _this._service);
            });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ListResultCompat.prototype, "nextPageToken", {
          get: function get() {
            return this._delegate.nextPageToken || null;
          },
          enumerable: false,
          configurable: true
        });
        return ListResultCompat;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *  http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ReferenceCompat =
      /** @class */
      function () {
        function ReferenceCompat(_delegate, storage) {
          this._delegate = _delegate;
          this.storage = storage;
        }

        Object.defineProperty(ReferenceCompat.prototype, "name", {
          get: function get() {
            return this._delegate.name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "bucket", {
          get: function get() {
            return this._delegate.bucket;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "fullPath", {
          get: function get() {
            return this._delegate.fullPath;
          },
          enumerable: false,
          configurable: true
        });

        ReferenceCompat.prototype.toString = function () {
          return this._delegate.toString();
        };
        /**
         * @returns A reference to the object obtained by
         * appending childPath, removing any duplicate, beginning, or trailing
         * slashes.
         */


        ReferenceCompat.prototype.child = function (childPath) {
          var reference = getChild(this._delegate, childPath);
          return new ReferenceCompat(reference, this.storage);
        };

        Object.defineProperty(ReferenceCompat.prototype, "root", {
          get: function get() {
            return new ReferenceCompat(this._delegate.root, this.storage);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "parent", {
          /**
           * @returns A reference to the parent of the
           * current object, or null if the current object is the root.
           */
          get: function get() {
            var reference = this._delegate.parent;

            if (reference == null) {
              return null;
            }

            return new ReferenceCompat(reference, this.storage);
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Uploads a blob to this object's location.
         * @param data - The blob to upload.
         * @returns An UploadTask that lets you control and
         * observe the upload.
         */

        ReferenceCompat.prototype.put = function (data, metadata) {
          this._throwIfRoot('put');

          return new UploadTaskCompat(uploadBytesResumable(this._delegate, data, metadata), this);
        };
        /**
         * Uploads a string to this object's location.
         * @param value - The string to upload.
         * @param format - The format of the string to upload.
         * @returns An UploadTask that lets you control and
         * observe the upload.
         */


        ReferenceCompat.prototype.putString = function (value, format, metadata) {
          if (format === void 0) {
            format = StringFormat.RAW;
          }

          this._throwIfRoot('putString');

          return new UploadTaskCompat(uploadString(this._delegate, value, format, metadata), this);
        };
        /**
         * List all items (files) and prefixes (folders) under this storage reference.
         *
         * This is a helper method for calling list() repeatedly until there are
         * no more results. The default pagination size is 1000.
         *
         * Note: The results may not be consistent if objects are changed while this
         * operation is running.
         *
         * Warning: listAll may potentially consume too many resources if there are
         * too many results.
         *
         * @returns A Promise that resolves with all the items and prefixes under
         *  the current storage reference. `prefixes` contains references to
         *  sub-directories and `items` contains references to objects in this
         *  folder. `nextPageToken` is never returned.
         */


        ReferenceCompat.prototype.listAll = function () {
          var _this = this;

          return listAll(this._delegate).then(function (r) {
            return new ListResultCompat(r, _this.storage);
          });
        };
        /**
         * List items (files) and prefixes (folders) under this storage reference.
         *
         * List API is only available for Firebase Rules Version 2.
         *
         * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
         * delimited folder structure. Refer to GCS's List API if you want to learn more.
         *
         * To adhere to Firebase Rules's Semantics, Firebase Storage does not
         * support objects whose paths end with "/" or contain two consecutive
         * "/"s. Firebase Storage List API will filter these unsupported objects.
         * list() may fail if there are too many unsupported objects in the bucket.
         *
         * @param options - See ListOptions for details.
         * @returns A Promise that resolves with the items and prefixes.
         * `prefixes` contains references to sub-folders and `items`
         * contains references to objects in this folder. `nextPageToken`
         * can be used to get the rest of the results.
         */


        ReferenceCompat.prototype.list = function (options) {
          var _this = this;

          return list$1(this._delegate, options).then(function (r) {
            return new ListResultCompat(r, _this.storage);
          });
        };
        /**
         * A promise that resolves with the metadata for this object. If this
         * object doesn't exist or metadata cannot be retreived, the promise is
         * rejected.
         */


        ReferenceCompat.prototype.getMetadata = function () {
          return getMetadata$1(this._delegate);
        };
        /**
         * Updates the metadata for this object.
         * @param metadata - The new metadata for the object.
         * Only values that have been explicitly set will be changed. Explicitly
         * setting a value to null will remove the metadata.
         * @returns A promise that resolves
         * with the new metadata for this object.
         * @see firebaseStorage.Reference.prototype.getMetadata
         */


        ReferenceCompat.prototype.updateMetadata = function (metadata) {
          return updateMetadata$1(this._delegate, metadata);
        };
        /**
         * @returns A promise that resolves with the download
         * URL for this object.
         */


        ReferenceCompat.prototype.getDownloadURL = function () {
          return getDownloadURL(this._delegate);
        };
        /**
         * Deletes the object at this location.
         * @returns A promise that resolves if the deletion succeeds.
         */


        ReferenceCompat.prototype["delete"] = function () {
          this._throwIfRoot('delete');

          return deleteObject$1(this._delegate);
        };

        ReferenceCompat.prototype._throwIfRoot = function (name) {
          if (this._delegate._location.path === '') {
            throw invalidRootOperation(name);
          }
        };

        return ReferenceCompat;
      }();
      /**
       * A request whose promise always fails.
       */


      var FailRequest =
      /** @class */
      function () {
        function FailRequest(error) {
          this.promise_ = Promise.reject(error);
        }
        /** @inheritDoc */


        FailRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        FailRequest.prototype.cancel = function (_appDelete) {};

        return FailRequest;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param f May be invoked
       *     before the function returns.
       * @param callback Get all the arguments passed to the function
       *     passed to f, including the initial boolean.
       */


      function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback, timeout) {
        // TODO(andysoto): make this code cleaner (probably refactor into an actual
        // type instead of a bunch of functions with state shared in the closure)
        var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
        // TODO: find a way to exclude Node type definition for storage because storage only works in browser
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        var timeoutId = null;
        var hitTimeout = false;
        var cancelState = 0;

        function canceled() {
          return cancelState === 2;
        }

        var triggeredCallback = false;

        function triggerCallback() {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
          }
        }

        function callWithDelay(millis) {
          timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
          }, millis);
        }

        function handler(success) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          if (triggeredCallback) {
            return;
          }

          if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          var mustStop = canceled() || hitTimeout;

          if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
          }

          var waitMillis;

          if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
          } else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
          }

          callWithDelay(waitMillis);
        }

        var stopped = false;

        function stop(wasTimeout) {
          if (stopped) {
            return;
          }

          stopped = true;

          if (triggeredCallback) {
            return;
          }

          if (timeoutId !== null) {
            if (!wasTimeout) {
              cancelState = 2;
            }

            clearTimeout(timeoutId);
            callWithDelay(0);
          } else {
            if (!wasTimeout) {
              cancelState = 1;
            }
          }
        }

        callWithDelay(0);
        setTimeout(function () {
          hitTimeout = true;
          stop(true);
        }, timeout);
        return stop;
      }
      /**
       * Stops the retry loop from repeating.
       * If the function is currently "in between" retries, it is invoked immediately
       * with the second parameter as "true". Otherwise, it will be invoked once more
       * after the current invocation finishes iff the current invocation would have
       * triggered another retry.
       */


      function stop(id) {
        id(false);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var NetworkRequest =
      /** @class */
      function () {
        function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
          var _this = this;

          this.pendingXhr_ = null;
          this.backoffId_ = null;
          this.canceled_ = false;
          this.appDelete_ = false;
          this.url_ = url;
          this.method_ = method;
          this.headers_ = headers;
          this.body_ = body;
          this.successCodes_ = successCodes.slice();
          this.additionalRetryCodes_ = additionalRetryCodes.slice();
          this.callback_ = callback;
          this.errorCallback_ = errorCallback;
          this.progressCallback_ = progressCallback;
          this.timeout_ = timeout;
          this.pool_ = pool;
          this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;

            _this.start_();
          });
        }
        /**
         * Actually starts the retry loop.
         */


        NetworkRequest.prototype.start_ = function () {
          var self = this;

          function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
              backoffCallback(false, new RequestEndStatus(false, null, true));
              return;
            }

            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;

            function progressListener(progressEvent) {
              var loaded = progressEvent.loaded;
              var total = progressEvent.lengthComputable ? progressEvent.total : -1;

              if (self.progressCallback_ !== null) {
                self.progressCallback_(loaded, total);
              }
            }

            if (self.progressCallback_ !== null) {
              xhr.addUploadProgressListener(progressListener);
            } // eslint-disable-next-line @typescript-eslint/no-floating-promises


            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
              if (self.progressCallback_ !== null) {
                xhr.removeUploadProgressListener(progressListener);
              }

              self.pendingXhr_ = null;
              xhr = xhr;
              var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
              var status = xhr.getStatus();

              if (!hitServer || self.isRetryStatusCode_(status)) {
                var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                return;
              }

              var successCode = self.successCodes_.indexOf(status) !== -1;
              backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
          }
          /**
           * @param requestWentThrough - True if the request eventually went
           *     through, false if it hit the retry limit or was canceled.
           */


          function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;

            if (status.wasSuccessCode) {
              try {
                var result = self.callback_(xhr, xhr.getResponseText());

                if (isJustDef(result)) {
                  resolve(result);
                } else {
                  resolve();
                }
              } catch (e) {
                reject(e);
              }
            } else {
              if (xhr !== null) {
                var err = unknown();
                err.serverResponse = xhr.getResponseText();

                if (self.errorCallback_) {
                  reject(self.errorCallback_(xhr, err));
                } else {
                  reject(err);
                }
              } else {
                if (status.canceled) {
                  var err = self.appDelete_ ? appDeleted() : canceled();
                  reject(err);
                } else {
                  var err = retryLimitExceeded();
                  reject(err);
                }
              }
            }
          }

          if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
          } else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
          }
        };
        /** @inheritDoc */


        NetworkRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        NetworkRequest.prototype.cancel = function (appDelete) {
          this.canceled_ = true;
          this.appDelete_ = appDelete || false;

          if (this.backoffId_ !== null) {
            stop(this.backoffId_);
          }

          if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
          }
        };

        NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
          // The codes for which to retry came from this page:
          // https://cloud.google.com/storage/docs/exponential-backoff
          var isFiveHundredCode = status >= 500 && status < 600;
          var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
          408, // Too Many Requests: you're getting rate-limited, basically.
          429];
          var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
          var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
          return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
        };

        return NetworkRequest;
      }();
      /**
       * A collection of information about the result of a network request.
       * @param opt_canceled - Defaults to false.
       */


      var RequestEndStatus =
      /** @class */
      function () {
        function RequestEndStatus(wasSuccessCode, xhr, canceled) {
          this.wasSuccessCode = wasSuccessCode;
          this.xhr = xhr;
          this.canceled = !!canceled;
        }

        return RequestEndStatus;
      }();

      function addAuthHeader_(headers, authToken) {
        if (authToken !== null && authToken.length > 0) {
          headers['Authorization'] = 'Firebase ' + authToken;
        }
      }

      function addVersionHeader_(headers) {
        var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION : 'AppManager';
        headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
      }

      function addGmpidHeader_(headers, appId) {
        if (appId) {
          headers['X-Firebase-GMPID'] = appId;
        }
      }

      function makeRequest(requestInfo, appId, authToken, pool) {
        var queryPart = makeQueryString(requestInfo.urlParams);
        var url = requestInfo.url + queryPart;
        var headers = Object.assign({}, requestInfo.headers);
        addGmpidHeader_(headers, appId);
        addAuthHeader_(headers, authToken);
        addVersionHeader_(headers);
        return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function isUrl(path) {
        return /^[A-Za-z]+:\/\//.test(path);
      }
      /**
       * Returns a firebaseStorage.Reference for the given url.
       */


      function refFromURL(service, url) {
        return new Reference(service, url);
      }
      /**
       * Returns a firebaseStorage.Reference for the given path in the default
       * bucket.
       */


      function refFromPath(ref, path) {
        if (ref instanceof StorageService) {
          var service = ref;

          if (service._bucket == null) {
            throw noDefaultBucket();
          }

          var reference = new Reference(service, service._bucket);

          if (path != null) {
            return refFromPath(reference, path);
          } else {
            return reference;
          }
        } else {
          // ref is a Reference
          if (path !== undefined) {
            if (path.includes('..')) {
              throw invalidArgument('`path` param cannot contain ".."');
            }

            return getChild(ref, path);
          } else {
            return ref;
          }
        }
      }

      function ref(serviceOrRef, pathOrUrl) {
        if (pathOrUrl && isUrl(pathOrUrl)) {
          if (serviceOrRef instanceof StorageService) {
            return refFromURL(serviceOrRef, pathOrUrl);
          } else {
            throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
          }
        } else {
          return refFromPath(serviceOrRef, pathOrUrl);
        }
      }

      function extractBucket(config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

        if (bucketString == null) {
          return null;
        }

        return Location.makeFromBucketSpec(bucketString);
      }
      /**
       * A service that provides Firebase Storage Reference instances.
       * @param opt_url - gs:// url to a custom Storage Bucket
       */


      var StorageService =
      /** @class */
      function () {
        function StorageService(app,
        /**
         * @internal
         */
        _authProvider,
        /**
         * @internal
         */
        _pool,
        /**
         * @internal
         */
        _url) {
          this.app = app;
          this._authProvider = _authProvider;
          this._pool = _pool;
          this._url = _url;
          /**
           * @internal
           */

          this._bucket = null;
          this._appId = null;
          this._deleted = false;
          this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
          this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
          this._requests = new Set();

          if (_url != null) {
            this._bucket = Location.makeFromBucketSpec(_url);
          } else {
            this._bucket = extractBucket(this.app.options);
          }
        }

        Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
          get: function get() {
            return this._maxUploadRetryTime;
          },
          set: function set(time) {
            validateNumber('time',
            /* minValue=*/
            0,
            /* maxValue= */
            Number.POSITIVE_INFINITY, time);
            this._maxUploadRetryTime = time;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
          get: function get() {
            return this._maxOperationRetryTime;
          },
          set: function set(time) {
            validateNumber('time',
            /* minValue=*/
            0,
            /* maxValue= */
            Number.POSITIVE_INFINITY, time);
            this._maxOperationRetryTime = time;
          },
          enumerable: false,
          configurable: true
        });

        StorageService.prototype.getAuthToken = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  auth = this._authProvider.getImmediate({
                    optional: true
                  });
                  if (!auth) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , auth.getToken()];

                case 1:
                  tokenData = _a.sent();

                  if (tokenData !== null) {
                    return [2
                    /*return*/
                    , tokenData.accessToken];
                  }

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , null];
              }
            });
          });
        };
        /**
         * Stop running requests and prevent more from being created.
         * @internal
         */


        StorageService.prototype._delete = function () {
          this._deleted = true;

          this._requests.forEach(function (request) {
            return request.cancel();
          });

          this._requests.clear();

          return Promise.resolve();
        };
        /**
         * Returns a new firebaseStorage.Reference object referencing this StorageService
         * at the given Location.
         */


        StorageService.prototype.makeStorageReference = function (loc) {
          return new Reference(this, loc);
        };
        /**
         * @internal
         * @param requestInfo - HTTP RequestInfo object
         * @param authToken - Firebase auth token
         */


        StorageService.prototype.makeRequest = function (requestInfo, authToken) {
          var _this = this;

          if (!this._deleted) {
            var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool);

            this._requests.add(request_1); // Request removes itself from set when complete.


            request_1.getPromise().then(function () {
              return _this._requests["delete"](request_1);
            }, function () {
              return _this._requests["delete"](request_1);
            });
            return request_1;
          } else {
            return new FailRequest(appDeleted());
          }
        };

        return StorageService;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A service that provides firebaseStorage.Reference instances.
       * @param opt_url gs:// url to a custom Storage Bucket
       */


      var StorageServiceCompat =
      /** @class */
      function () {
        function StorageServiceCompat(app, _delegate) {
          var _this = this;

          this.app = app;
          this._delegate = _delegate;
          this.INTERNAL = {
            /**
             * Called when the associated app is deleted.
             */
            "delete": function _delete() {
              return _this._delegate._delete();
            }
          };
        }

        Object.defineProperty(StorageServiceCompat.prototype, "maxOperationRetryTime", {
          get: function get() {
            return this._delegate.maxOperationRetryTime;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StorageServiceCompat.prototype, "maxUploadRetryTime", {
          get: function get() {
            return this._delegate.maxUploadRetryTime;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Returns a firebaseStorage.Reference for the given path in the default
         * bucket.
         */

        StorageServiceCompat.prototype.ref = function (path) {
          if (isUrl(path)) {
            throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
          }

          return new ReferenceCompat(ref(this._delegate, path), this);
        };
        /**
         * Returns a firebaseStorage.Reference object for the given absolute URL,
         * which must be a gs:// or http[s]:// URL.
         */


        StorageServiceCompat.prototype.refFromURL = function (url) {
          if (!isUrl(url)) {
            throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
          }

          try {
            Location.makeFromUrl(url);
          } catch (e) {
            throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
          }

          return new ReferenceCompat(ref(this._delegate, url), this);
        };

        StorageServiceCompat.prototype.setMaxUploadRetryTime = function (time) {
          this._delegate.maxUploadRetryTime = time;
        };

        StorageServiceCompat.prototype.setMaxOperationRetryTime = function (time) {
          this._delegate.maxOperationRetryTime = time;
        };

        return StorageServiceCompat;
      }();

      var name = "@firebase/storage";
      var version = "0.4.2";
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Type constant for Firebase Storage.
       */

      var STORAGE_TYPE = 'storage';

      function factory(container, url) {
        // Dependencies
        // TODO: This should eventually be 'app-compat'
        var app = container.getProvider('app').getImmediate();
        var authProvider = container.getProvider('auth-internal'); // TODO: get StorageService instance from component framework instead
        // of creating a new one.

        var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url));
        return storageServiceCompat;
      }

      function registerStorage(instance) {
        var namespaceExports = {
          // no-inline
          TaskState: TaskState,
          TaskEvent: TaskEvent,
          StringFormat: StringFormat,
          Storage: StorageService,
          Reference: ReferenceCompat
        };
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"](STORAGE_TYPE, factory, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(namespaceExports).setMultipleInstances(true));
        instance.registerVersion(name, version);
      }

      registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/firebase/storage/dist/index.esm.js":
    /*!*********************************************************!*\
      !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
      \*********************************************************/

    /*! no exports provided */

    /***/
    function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/storage */
      "./node_modules/@firebase/storage/dist/index.esm.js"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-margin-horizontal\" *ngIf=\"userData\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"7\" size-sm=\"2\">\r\n        <ion-row class=\"ion-align-items-end ion-justify-content-end\">\r\n          <ion-fab-button color=\"primary\" style=\"position: absolute; z-index: 1\" (click)=\"presentImageActionSheet()\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n          </ion-fab-button>\r\n          <input type=\"file\" *ngIf=\"isDesktop\" #filePicker (change)=\"onFileChoose($event)\"/>\r\n          <ion-img src=\"assets/images/avatar.png\" style=\"object-fit: contain; width: 100%;\" *ngIf=\"!imageUrl\"></ion-img>\r\n          <img id=\"profilePicture\" src=\"{{imageUrl}}\" class=\"circle-image\" *ngIf=\"imageUrl\" (load)=\"imageLoaded()\">\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"6\" offset-sm=\"3\">\r\n        <ion-text class=\"ion-text-center\">\r\n          <h2 class=\"text-bold ion-no-margin ion-margin-top\">\r\n            <b>{{userData.nama}}</b>\r\n          </h2>\r\n          <h4 class=\"ion-no-margin ion-padding-bottom\">\r\n            <b>{{userData.email}}</b>\r\n          </h4>\r\n        </ion-text>\r\n\r\n         <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size=\"12\">\r\n              <ion-button color=\"danger\" expand=\"block\" (click)=\"doLogout()\">\r\n              Logout\r\n              </ion-button>\r\n            </ion-col>\r\n         </ion-row>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".circle-image {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n  overflow: hidden;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgXHJcbi5jaXJjbGUtaW1hZ2V7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(ngroute, firebaseAuthService, firebaseDB, alertCtrl, toastCtrl, actionSheetCtrl, loadingCtrl, router, platform, sanitizer, storage) {
          _classCallCheck(this, ProfilePage);

          this.ngroute = ngroute;
          this.firebaseAuthService = firebaseAuthService;
          this.firebaseDB = firebaseDB;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.actionSheetCtrl = actionSheetCtrl;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.platform = platform;
          this.sanitizer = sanitizer;
          this.storage = storage;
          this.locId = [];
          this.userLocations = [];
          this.isCamera = null;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (this.platform.is('mobile') && this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.isDesktop = true;
            }

            this.firebaseAuthService.userDetails().subscribe(function (res) {
              if (res !== null) {
                _this2.id = res.uid;

                _this2.getUserData();

                console.log(_this2.id);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.firebaseAuthService.signOut().then(function (res) {
                        console.log(res);

                        _this3.ngroute.navigate(['login']);
                      })["catch"](function (error) {
                        console.log(error);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this4 = this;

            this.firebaseDB.doc('Users/' + this.id).valueChanges().subscribe(function (data) {
              _this4.userData = data;
              console.log(_this4.userData);

              if (_this4.userData.profilePic) {
                _this4.imageUrl = _this4.userData.profilePic;
              }
            });
          }
        }, {
          key: "getPicture",
          value: function getPicture(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var image;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(!_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isPluginAvailable('Camera') || this.isDesktop && type === 'gallery')) {
                        _context2.next = 3;
                        break;
                      }

                      this.filePickerRef.nativeElement.click();
                      return _context2.abrupt("return");

                    case 3:
                      _context2.next = 5;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Camera"].getPhoto({
                        quality: 100,
                        width: 500,
                        height: 500,
                        allowEditing: false,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt
                      });

                    case 5:
                      image = _context2.sent;
                      this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image && 'data:image/png;base64,' + image.base64String);
                      this.isCamera = true;
                      this.base64Image = image.base64String;
                      this.uploadImage();

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onFileChoose",
          value: function onFileChoose(event) {
            var _this5 = this;

            var file = event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              console.log('File format not supported');
              this.imageFile = null;
              return;
            }

            reader.onload = function () {
              _this5.imageUrl = reader.result.toString();
            };

            reader.readAsDataURL(file);
            this.isCamera = false;
            this.imageFile = file;
            this.uploadImage();
          }
        }, {
          key: "presentImageActionSheet",
          value: function presentImageActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetCtrl.create({
                        animated: true,
                        mode: 'ios',
                        buttons: [{
                          text: 'Camera',
                          icon: 'camera-outline',
                          handler: function handler() {
                            _this6.getPicture('camera');
                          }
                        }, {
                          text: 'Gallery',
                          icon: 'image-outline',
                          handler: function handler() {
                            _this6.getPicture('gallery');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Please wait...',
                        duration: 3000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(tm, cm) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastCtrl.create({
                        message: tm,
                        duration: 3000,
                        color: cm
                      });

                    case 2:
                      toast = _context5.sent;
                      _context5.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage() {
            var _this7 = this;

            this.presentLoading().then(function () {
              var n = Date.now();
              var filePath = "Profil/".concat(n);

              var fileRef = _this7.storage.ref(filePath);

              var task;

              if (_this7.isCamera) {
                task = fileRef.putString(_this7.base64Image, 'base64', {
                  contentType: 'image/png'
                });
              } else {
                task = _this7.storage.upload("Profil/".concat(n), _this7.imageFile);
              }

              task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                fileRef.getDownloadURL().subscribe(function (url) {
                  if (url) {
                    _this7.downloadURL = url;
                    _this7.userData.imageUrl = _this7.downloadURL;
                    var refPath = 'Users/' + _this7.id;

                    _this7.firebaseDB.doc(refPath).update({
                      profilePic: _this7.userData.imageUrl
                    });
                  }
                });
              })).subscribe();

              _this7.getUserData();

              var msg = 'Image have been uploaded';
              var clr = 'success';

              _this7.presentToast(msg, clr);
            });
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {
            setTimeout(function () {
              var profileWidth = document.getElementById('profilePicture').offsetWidth;
              document.getElementById('profilePicture').style.height = profileWidth + 'px';
            }, 10);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      };

      ProfilePage.propDecorators = {
        filePickerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }]
      };
      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map