"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_redux-ngrx_redux-ngrx_module_ts"],{

/***/ 5482:
/*!*********************************************************!*\
  !*** ./src/app/redux-ngrx/redux-ngrx-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxNgrxRoutingModule": () => (/* binding */ ReduxNgrxRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redux_ngrx_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux-ngrx.component */ 3108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _redux_ngrx_component__WEBPACK_IMPORTED_MODULE_0__.ReduxNgrxComponent,
        children: []
    }
];
class ReduxNgrxRoutingModule {
}
ReduxNgrxRoutingModule.ɵfac = function ReduxNgrxRoutingModule_Factory(t) { return new (t || ReduxNgrxRoutingModule)(); };
ReduxNgrxRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReduxNgrxRoutingModule });
ReduxNgrxRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReduxNgrxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3108:
/*!****************************************************!*\
  !*** ./src/app/redux-ngrx/redux-ngrx.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxNgrxComponent": () => (/* binding */ ReduxNgrxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ReduxNgrxComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReduxNgrxComponent.ɵfac = function ReduxNgrxComponent_Factory(t) { return new (t || ReduxNgrxComponent)(); };
ReduxNgrxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReduxNgrxComponent, selectors: [["app-redux-ngrx"]], decls: 8, vars: 0, consts: [["routerLink", "/redux-ngrx/redux"], ["routerLink", "/redux-ngrx/ngrx"]], template: function ReduxNgrxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "redux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NgRx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWR1eC1uZ3J4LmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 7154:
/*!*************************************************!*\
  !*** ./src/app/redux-ngrx/redux-ngrx.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxNgrxModule": () => (/* binding */ ReduxNgrxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _redux_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux-ngrx-routing.module */ 5482);
/* harmony import */ var _redux_ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux-ngrx.component */ 3108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ReduxNgrxModule {
}
ReduxNgrxModule.ɵfac = function ReduxNgrxModule_Factory(t) { return new (t || ReduxNgrxModule)(); };
ReduxNgrxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReduxNgrxModule });
ReduxNgrxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _redux_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReduxNgrxRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReduxNgrxModule, { declarations: [_redux_ngrx_component__WEBPACK_IMPORTED_MODULE_1__.ReduxNgrxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _redux_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReduxNgrxRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_redux-ngrx_redux-ngrx_module_ts.js.map