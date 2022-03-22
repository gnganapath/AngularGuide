"use strict";
(self["webpackChunkAngularGuide"] = self["webpackChunkAngularGuide"] || []).push([["src_app_http-client-services_http-client-services_module_ts"],{

/***/ 3044:
/*!*****************************************************************************!*\
  !*** ./src/app/http-client-services/http-client-services-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientServicesRoutingModule": () => (/* binding */ HttpClientServicesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _http_client_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-client-services.component */ 3635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _http_client_services_component__WEBPACK_IMPORTED_MODULE_0__.HttpClientServicesComponent,
        children: []
    }
];
class HttpClientServicesRoutingModule {
}
HttpClientServicesRoutingModule.ɵfac = function HttpClientServicesRoutingModule_Factory(t) { return new (t || HttpClientServicesRoutingModule)(); };
HttpClientServicesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpClientServicesRoutingModule });
HttpClientServicesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HttpClientServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3635:
/*!************************************************************************!*\
  !*** ./src/app/http-client-services/http-client-services.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientServicesComponent": () => (/* binding */ HttpClientServicesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/ajax */ 4730);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function HttpClientServicesComponent_ul_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.id, ": ", i_r1.name, "");
} }
class HttpClientServicesComponent {
    constructor() {
        this.title = '';
        //this.data = "";
        this.title = "Using RxJs with Angular";
        let a = this.getData();
    }
    getData() {
        const response = (0,rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__.ajax)('https://jsonplaceholder.typicode.com/users')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(e => e.response));
        response.subscribe(res => {
            console.log(res);
            this.data = res;
        });
    }
    ngOnInit() {
    }
}
HttpClientServicesComponent.ɵfac = function HttpClientServicesComponent_Factory(t) { return new (t || HttpClientServicesComponent)(); };
HttpClientServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpClientServicesComponent, selectors: [["app-http-client-services"]], decls: 18, vars: 2, consts: [["routerLink", "/http-client-services/http"], ["routerLink", "/http-client-services/diServices"], ["routerLink", "/http-client-services/getpostputdelete"], ["routerLink", "/http-client-services/rxjs"], [4, "ngFor", "ngForOf"]], template: function HttpClientServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Http API call feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Services - sharing data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Http , Methods - Status code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " || ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " rxjs - Observable, Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Http call without httpClient , module using rxjs / ajax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HttpClientServicesComponent_ul_17_Template, 3, 2, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodHRwLWNsaWVudC1zZXJ2aWNlcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 5965:
/*!*********************************************************************!*\
  !*** ./src/app/http-client-services/http-client-services.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientServicesModule": () => (/* binding */ HttpClientServicesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _http_client_services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-client-services-routing.module */ 3044);
/* harmony import */ var _http_client_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client-services.component */ 3635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HttpClientServicesModule {
}
HttpClientServicesModule.ɵfac = function HttpClientServicesModule_Factory(t) { return new (t || HttpClientServicesModule)(); };
HttpClientServicesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HttpClientServicesModule });
HttpClientServicesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _http_client_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.HttpClientServicesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HttpClientServicesModule, { declarations: [_http_client_services_component__WEBPACK_IMPORTED_MODULE_1__.HttpClientServicesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _http_client_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.HttpClientServicesRoutingModule] }); })();


/***/ }),

/***/ 7338:
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajaxGet": () => (/* binding */ ajaxGet),
/* harmony export */   "ajaxPost": () => (/* binding */ ajaxPost),
/* harmony export */   "ajaxDelete": () => (/* binding */ ajaxDelete),
/* harmony export */   "ajaxPut": () => (/* binding */ ajaxPut),
/* harmony export */   "ajaxPatch": () => (/* binding */ ajaxPatch),
/* harmony export */   "ajaxGetJSON": () => (/* binding */ ajaxGetJSON),
/* harmony export */   "AjaxObservable": () => (/* binding */ AjaxObservable),
/* harmony export */   "AjaxSubscriber": () => (/* binding */ AjaxSubscriber),
/* harmony export */   "AjaxResponse": () => (/* binding */ AjaxResponse),
/* harmony export */   "AjaxError": () => (/* binding */ AjaxError),
/* harmony export */   "AjaxTimeoutError": () => (/* binding */ AjaxTimeoutError)
/* harmony export */ });
/* harmony import */ var _util_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/root */ 8666);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Observable */ 2378);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Subscriber */ 14);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operators/map */ 6942);




function getCORSRequest() {
    if (_util_root__WEBPACK_IMPORTED_MODULE_0__.root.XMLHttpRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__.root.XMLHttpRequest();
    }
    else if (!!_util_root__WEBPACK_IMPORTED_MODULE_0__.root.XDomainRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (_util_root__WEBPACK_IMPORTED_MODULE_0__.root.XMLHttpRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__.root.XMLHttpRequest();
    }
    else {
        let progId;
        try {
            const progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (let i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new _util_root__WEBPACK_IMPORTED_MODULE_0__.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new _util_root__WEBPACK_IMPORTED_MODULE_0__.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers = null) {
    return new AjaxObservable({ method: 'GET', url, headers });
}
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url, body, headers });
}
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url, headers });
}
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url, body, headers });
}
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url, body, headers });
}
const mapResponse = (0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)((x, index) => x.response);
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url,
        responseType: 'json',
        headers
    }));
}
class AjaxObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor(urlOrRequest) {
        super();
        const request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
            },
            crossDomain: true,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (const prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    _subscribe(subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    }
}
AjaxObservable.create = (() => {
    const create = (urlOrRequest) => {
        return new AjaxObservable(urlOrRequest);
    };
    create.get = ajaxGet;
    create.post = ajaxPost;
    create.delete = ajaxDelete;
    create.put = ajaxPut;
    create.patch = ajaxPatch;
    create.getJSON = ajaxGetJSON;
    return create;
})();
class AjaxSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_3__.Subscriber {
    constructor(destination, request) {
        super(destination);
        this.request = request;
        this.done = false;
        const headers = request.headers = request.headers || {};
        if (!request.crossDomain && !this.getHeader(headers, 'X-Requested-With')) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        let contentTypeHeader = this.getHeader(headers, 'Content-Type');
        if (!contentTypeHeader && !(_util_root__WEBPACK_IMPORTED_MODULE_0__.root.FormData && request.body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        request.body = this.serializeBody(request.body, this.getHeader(request.headers, 'Content-Type'));
        this.send();
    }
    next(e) {
        this.done = true;
        const { xhr, request, destination } = this;
        let result;
        try {
            result = new AjaxResponse(e, xhr, request);
        }
        catch (err) {
            return destination.error(err);
        }
        destination.next(result);
    }
    send() {
        const { request, request: { user, method, url, async, password, headers, body } } = this;
        try {
            const xhr = this.xhr = request.createXHR();
            this.setupEvents(xhr, request);
            if (user) {
                xhr.open(method, url, async, user, password);
            }
            else {
                xhr.open(method, url, async);
            }
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            this.setHeaders(xhr, headers);
            if (body) {
                xhr.send(body);
            }
            else {
                xhr.send();
            }
        }
        catch (err) {
            this.error(err);
        }
    }
    serializeBody(body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (_util_root__WEBPACK_IMPORTED_MODULE_0__.root.FormData && body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__.root.FormData) {
            return body;
        }
        if (contentType) {
            const splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    }
    setHeaders(xhr, headers) {
        for (let key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    }
    getHeader(headers, headerName) {
        for (let key in headers) {
            if (key.toLowerCase() === headerName.toLowerCase()) {
                return headers[key];
            }
        }
        return undefined;
    }
    setupEvents(xhr, request) {
        const progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            const { subscriber, progressSubscriber, request } = xhrTimeout;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            let error;
            try {
                error = new AjaxTimeoutError(this, request);
            }
            catch (err) {
                error = err;
            }
            subscriber.error(error);
        }
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                let xhrProgress;
                xhrProgress = function (e) {
                    const { progressSubscriber } = xhrProgress;
                    progressSubscriber.next(e);
                };
                if (_util_root__WEBPACK_IMPORTED_MODULE_0__.root.XDomainRequest) {
                    xhr.onprogress = xhrProgress;
                }
                else {
                    xhr.upload.onprogress = xhrProgress;
                }
                xhrProgress.progressSubscriber = progressSubscriber;
            }
            let xhrError;
            xhrError = function (e) {
                const { progressSubscriber, subscriber, request } = xhrError;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                let error;
                try {
                    error = new AjaxError('ajax error', this, request);
                }
                catch (err) {
                    error = err;
                }
                subscriber.error(error);
            };
            xhr.onerror = xhrError;
            xhrError.request = request;
            xhrError.subscriber = this;
            xhrError.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            return;
        }
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
        function xhrLoad(e) {
            const { subscriber, progressSubscriber, request } = xhrLoad;
            if (this.readyState === 4) {
                let status = this.status === 1223 ? 204 : this.status;
                let response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                if (status === 0) {
                    status = response ? 200 : 0;
                }
                if (status < 400) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    let error;
                    try {
                        error = new AjaxError('ajax error ' + status, this, request);
                    }
                    catch (err) {
                        error = err;
                    }
                    subscriber.error(error);
                }
            }
        }
        xhr.onload = xhrLoad;
        xhrLoad.subscriber = this;
        xhrLoad.progressSubscriber = progressSubscriber;
        xhrLoad.request = request;
    }
    unsubscribe() {
        const { done, xhr } = this;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        super.unsubscribe();
    }
}
class AjaxResponse {
    constructor(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
}
const AjaxErrorImpl = (() => {
    function AjaxErrorImpl(message, xhr, request) {
        Error.call(this);
        this.message = message;
        this.name = 'AjaxError';
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
        return this;
    }
    AjaxErrorImpl.prototype = Object.create(Error.prototype);
    return AjaxErrorImpl;
})();
const AjaxError = AjaxErrorImpl;
function parseJson(xhr) {
    if ('response' in xhr) {
        return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
    }
    else {
        return JSON.parse(xhr.responseText || 'null');
    }
}
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            return parseJson(xhr);
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
function AjaxTimeoutErrorImpl(xhr, request) {
    AjaxError.call(this, 'ajax timeout', xhr, request);
    this.name = 'AjaxTimeoutError';
    return this;
}
const AjaxTimeoutError = AjaxTimeoutErrorImpl;


/***/ }),

/***/ 4730:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax)
/* harmony export */ });
/* harmony import */ var _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxObservable */ 7338);

const ajax = (() => _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__.AjaxObservable.create)();


/***/ }),

/***/ 8666:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/root.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ _root)
/* harmony export */ });
const __window = typeof window !== 'undefined' && window;
const __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
const __global = typeof global !== 'undefined' && global;
const _root = __window || __global || __self;
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();



/***/ })

}]);
//# sourceMappingURL=src_app_http-client-services_http-client-services_module_ts.js.map