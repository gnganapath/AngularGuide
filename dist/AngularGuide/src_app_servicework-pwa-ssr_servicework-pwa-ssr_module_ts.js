"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_servicework-pwa-ssr_servicework-pwa-ssr_module_ts"],{

/***/ 4271:
/*!***************************************************************************!*\
  !*** ./src/app/servicework-pwa-ssr/servicework-pwa-ssr-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceworkPwaSsrRoutingModule": () => (/* binding */ ServiceworkPwaSsrRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _servicework_pwa_ssr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicework-pwa-ssr.component */ 6062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _servicework_pwa_ssr_component__WEBPACK_IMPORTED_MODULE_0__.ServiceworkPwaSsrComponent }
];
class ServiceworkPwaSsrRoutingModule {
}
ServiceworkPwaSsrRoutingModule.ɵfac = function ServiceworkPwaSsrRoutingModule_Factory(t) { return new (t || ServiceworkPwaSsrRoutingModule)(); };
ServiceworkPwaSsrRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ServiceworkPwaSsrRoutingModule });
ServiceworkPwaSsrRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ServiceworkPwaSsrRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6062:
/*!**********************************************************************!*\
  !*** ./src/app/servicework-pwa-ssr/servicework-pwa-ssr.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceworkPwaSsrComponent": () => (/* binding */ ServiceworkPwaSsrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ServiceworkPwaSsrComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceworkPwaSsrComponent.ɵfac = function ServiceworkPwaSsrComponent_Factory(t) { return new (t || ServiceworkPwaSsrComponent)(); };
ServiceworkPwaSsrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceworkPwaSsrComponent, selectors: [["app-servicework-pwa-ssr"]], decls: 11, vars: 0, consts: [["routerLink", "/servicework-pwa-ssr/servicework"], ["routerLink", "/servicework-pwa-ssr/pwa"], ["routerLink", "/servicework-pwa-ssr/ssr"]], template: function ServiceworkPwaSsrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Service Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " PWA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " servicework-pwa-ssr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNld29yay1wd2Etc3NyLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 3658:
/*!*******************************************************************!*\
  !*** ./src/app/servicework-pwa-ssr/servicework-pwa-ssr.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceworkPwaSsrModule": () => (/* binding */ ServiceworkPwaSsrModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _servicework_pwa_ssr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicework-pwa-ssr-routing.module */ 4271);
/* harmony import */ var _servicework_pwa_ssr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicework-pwa-ssr.component */ 6062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ServiceworkPwaSsrModule {
}
ServiceworkPwaSsrModule.ɵfac = function ServiceworkPwaSsrModule_Factory(t) { return new (t || ServiceworkPwaSsrModule)(); };
ServiceworkPwaSsrModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServiceworkPwaSsrModule });
ServiceworkPwaSsrModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _servicework_pwa_ssr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceworkPwaSsrRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiceworkPwaSsrModule, { declarations: [_servicework_pwa_ssr_component__WEBPACK_IMPORTED_MODULE_1__.ServiceworkPwaSsrComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _servicework_pwa_ssr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceworkPwaSsrRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_servicework-pwa-ssr_servicework-pwa-ssr_module_ts.js.map