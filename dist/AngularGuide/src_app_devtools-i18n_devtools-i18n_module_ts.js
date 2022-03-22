"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_devtools-i18n_devtools-i18n_module_ts"],{

/***/ 9472:
/*!***************************************************************!*\
  !*** ./src/app/devtools-i18n/devtools-i18n-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevtoolsI18nRoutingModule": () => (/* binding */ DevtoolsI18nRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _devtools_i18n_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools-i18n.component */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _devtools_i18n_component__WEBPACK_IMPORTED_MODULE_0__.DevtoolsI18nComponent,
        children: []
    }
];
class DevtoolsI18nRoutingModule {
}
DevtoolsI18nRoutingModule.ɵfac = function DevtoolsI18nRoutingModule_Factory(t) { return new (t || DevtoolsI18nRoutingModule)(); };
DevtoolsI18nRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DevtoolsI18nRoutingModule });
DevtoolsI18nRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DevtoolsI18nRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8260:
/*!**********************************************************!*\
  !*** ./src/app/devtools-i18n/devtools-i18n.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevtoolsI18nComponent": () => (/* binding */ DevtoolsI18nComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class DevtoolsI18nComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevtoolsI18nComponent.ɵfac = function DevtoolsI18nComponent_Factory(t) { return new (t || DevtoolsI18nComponent)(); };
DevtoolsI18nComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevtoolsI18nComponent, selectors: [["app-devtools-i18n"]], decls: 11, vars: 0, consts: [["routerLink", "/devtool-i18n-cheatsheet/DevTools - debuggin"], ["routerLink", "/devtool-i18n-cheatsheet/i18n"], ["routerLink", "/devtool-i18n-cheatsheet/cheatsheet"]], template: function DevtoolsI18nComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DevTools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " i18n - Internalization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cheatsheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZ0b29scy1pMThuLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 3253:
/*!*******************************************************!*\
  !*** ./src/app/devtools-i18n/devtools-i18n.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevtoolsI18nModule": () => (/* binding */ DevtoolsI18nModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _devtools_i18n_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools-i18n-routing.module */ 9472);
/* harmony import */ var _devtools_i18n_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devtools-i18n.component */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class DevtoolsI18nModule {
}
DevtoolsI18nModule.ɵfac = function DevtoolsI18nModule_Factory(t) { return new (t || DevtoolsI18nModule)(); };
DevtoolsI18nModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DevtoolsI18nModule });
DevtoolsI18nModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _devtools_i18n_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevtoolsI18nRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DevtoolsI18nModule, { declarations: [_devtools_i18n_component__WEBPACK_IMPORTED_MODULE_1__.DevtoolsI18nComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _devtools_i18n_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevtoolsI18nRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_devtools-i18n_devtools-i18n_module_ts.js.map