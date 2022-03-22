"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_security-owasp-prodbuild_security-owasp-prodbuild_module_ts"],{

/***/ 3594:
/*!*************************************************************************************!*\
  !*** ./src/app/security-owasp-prodbuild/security-owasp-prodbuild-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityOwaspProdbuildRoutingModule": () => (/* binding */ SecurityOwaspProdbuildRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _security_owasp_prodbuild_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security-owasp-prodbuild.component */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _security_owasp_prodbuild_component__WEBPACK_IMPORTED_MODULE_0__.SecurityOwaspProdbuildComponent,
        children: []
    }
];
class SecurityOwaspProdbuildRoutingModule {
}
SecurityOwaspProdbuildRoutingModule.ɵfac = function SecurityOwaspProdbuildRoutingModule_Factory(t) { return new (t || SecurityOwaspProdbuildRoutingModule)(); };
SecurityOwaspProdbuildRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SecurityOwaspProdbuildRoutingModule });
SecurityOwaspProdbuildRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecurityOwaspProdbuildRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7309:
/*!********************************************************************************!*\
  !*** ./src/app/security-owasp-prodbuild/security-owasp-prodbuild.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityOwaspProdbuildComponent": () => (/* binding */ SecurityOwaspProdbuildComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SecurityOwaspProdbuildComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecurityOwaspProdbuildComponent.ɵfac = function SecurityOwaspProdbuildComponent_Factory(t) { return new (t || SecurityOwaspProdbuildComponent)(); };
SecurityOwaspProdbuildComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecurityOwaspProdbuildComponent, selectors: [["app-security-owasp-prodbuild"]], decls: 11, vars: 0, consts: [["routerLink", "/servicework-pwa-ssr/Security"], ["routerLink", "/servicework-pwa-ssr/OWASP"], ["routerLink", "/servicework-pwa-ssr/prodbuild"]], template: function SecurityOwaspProdbuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Security - Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Owasp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Proddcution Build - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cml0eS1vd2FzcC1wcm9kYnVpbGQuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 8652:
/*!*****************************************************************************!*\
  !*** ./src/app/security-owasp-prodbuild/security-owasp-prodbuild.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityOwaspProdbuildModule": () => (/* binding */ SecurityOwaspProdbuildModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _security_owasp_prodbuild_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security-owasp-prodbuild-routing.module */ 3594);
/* harmony import */ var _security_owasp_prodbuild_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security-owasp-prodbuild.component */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SecurityOwaspProdbuildModule {
}
SecurityOwaspProdbuildModule.ɵfac = function SecurityOwaspProdbuildModule_Factory(t) { return new (t || SecurityOwaspProdbuildModule)(); };
SecurityOwaspProdbuildModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SecurityOwaspProdbuildModule });
SecurityOwaspProdbuildModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _security_owasp_prodbuild_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecurityOwaspProdbuildRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SecurityOwaspProdbuildModule, { declarations: [_security_owasp_prodbuild_component__WEBPACK_IMPORTED_MODULE_1__.SecurityOwaspProdbuildComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _security_owasp_prodbuild_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecurityOwaspProdbuildRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_security-owasp-prodbuild_security-owasp-prodbuild_module_ts.js.map