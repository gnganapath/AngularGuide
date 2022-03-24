"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_routing-navigation_routing-navigation_module_ts"],{

/***/ 1045:
/*!*************************************************************************!*\
  !*** ./src/app/routing-navigation/routing-navigation-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingNavigationRoutingModule": () => (/* binding */ RoutingNavigationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _routing_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing-navigation.component */ 3004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _routing_navigation_component__WEBPACK_IMPORTED_MODULE_0__.RoutingNavigationComponent,
        children: []
    }
];
class RoutingNavigationRoutingModule {
}
RoutingNavigationRoutingModule.ɵfac = function RoutingNavigationRoutingModule_Factory(t) { return new (t || RoutingNavigationRoutingModule)(); };
RoutingNavigationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RoutingNavigationRoutingModule });
RoutingNavigationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingNavigationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3004:
/*!********************************************************************!*\
  !*** ./src/app/routing-navigation/routing-navigation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingNavigationComponent": () => (/* binding */ RoutingNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class RoutingNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoutingNavigationComponent.ɵfac = function RoutingNavigationComponent_Factory(t) { return new (t || RoutingNavigationComponent)(); };
RoutingNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutingNavigationComponent, selectors: [["app-routing-navigation"]], decls: 11, vars: 0, consts: [["routerLink", "/routing-navigation/approuting"], ["routerLink", "/routing-navigation/databinding"], ["routerLink", "/routing-navigation/twowaybinding"]], template: function RoutingNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " App Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lazy - module - Child loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Auth Gaurds - CanActivate, CanLoad, Resolve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0aW5nLW5hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 9301:
/*!*****************************************************************!*\
  !*** ./src/app/routing-navigation/routing-navigation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingNavigationModule": () => (/* binding */ RoutingNavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _routing_navigation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing-navigation-routing.module */ 1045);
/* harmony import */ var _routing_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing-navigation.component */ 3004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class RoutingNavigationModule {
}
RoutingNavigationModule.ɵfac = function RoutingNavigationModule_Factory(t) { return new (t || RoutingNavigationModule)(); };
RoutingNavigationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoutingNavigationModule });
RoutingNavigationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _routing_navigation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutingNavigationRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutingNavigationModule, { declarations: [_routing_navigation_component__WEBPACK_IMPORTED_MODULE_1__.RoutingNavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _routing_navigation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutingNavigationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_routing-navigation_routing-navigation_module_ts.js.map