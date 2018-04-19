webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"common",
		"account.module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./docs/docs.module": [
		"./src/app/docs/docs.module.ts",
		"docs.module"
	],
	"./dragndrop/dragndrop.module": [
		"./src/app/dragndrop/dragndrop.module.ts",
		"common",
		"dragndrop.module"
	],
	"./ecommerce/ecommerce.module": [
		"./src/app/ecommerce/ecommerce.module.ts",
		"ecommerce.module"
	],
	"./error/error.module": [
		"./src/app/error/error.module.ts",
		"error.module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"common",
		"forms.module"
	],
	"./fullcalendar/fullcalendar.module": [
		"./src/app/fullcalendar/fullcalendar.module.ts",
		"fullcalendar.module"
	],
	"./mail/mail.module": [
		"./src/app/mail/mail.module.ts",
		"mail.module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./material/material.module": [
		"./src/app/material/material.module.ts",
		"material.module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./social/social.module": [
		"./src/app/social/social.module.ts",
		"common",
		"social.module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"common",
		"taskboard.module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"common",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/account/signin');
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/account/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.getAccessToken = function () {
        return JSON.parse(localStorage.getItem('token')).id;
    };
    AuthService.prototype.login = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/authenticate", data, { headers: headers });
    };
    AuthService.prototype.signup = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/signup", data, { headers: headers });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_loading_bar_router__ = __webpack_require__("./node_modules/@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/@ngx-loading-bar/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_auth_guard_service__ = __webpack_require__("./src/app/account/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Angular Material

// Angular Flexlayout

// ngx-translate


// ngx-loading-bar


// ngx-perfect-scrollbar


// google maps

// Template core components






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelSpeed: 2,
    wheelPropagation: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["h" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["k" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["i" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["d" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["e" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["j" /* OptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["a" /* AccordionAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_14__core__["c" /* AccordionLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_14__core__["b" /* AccordionDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["Q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_loading_bar_core__["a" /* LoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyAsQi8vzHfqrt33xQww77MN1Bg84iLSeOM' }),
                __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["c" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                __WEBPACK_IMPORTED_MODULE_18__account_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__account_auth_guard_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_auth_guard_service__ = __webpack_require__("./src/app/account/auth-guard.service.ts");


var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__core__["d" /* AdminLayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__account_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'calendar', loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule' },
            { path: 'messages', loadChildren: './mail/mail.module#MailModule' },
            { path: 'social', loadChildren: './social/social.module#SocialModule' },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'material', loadChildren: './material/material.module#MaterialComponentsModule' },
            { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
            { path: 'taskboard', loadChildren: './taskboard/taskboard.module#TaskboardModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapModule' },
            { path: 'dragndrop', loadChildren: './dragndrop/dragndrop.module#DragndropModule' },
            { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
            { path: 'documentation', loadChildren: './docs/docs.module#DocsModule' }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__core__["e" /* AuthLayoutComponent */],
        children: [
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'error', loadChildren: './error/error.module#ErrorModule' }
        ]
    },
    { path: '**', redirectTo: 'error/404' }
];


/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar class=\"page-loader\" [value]=\"loader.progress$|async\" *ngIf=\"loader.progress$|async\" [ngStyle]=\"{height: '2px'}\"></mat-progress-bar>\n<div class=\"app\" [dir]=\"options.dir\" [ngClass]=\"{\n  'app-dark': options.dark,\n  'boxed': options.boxed,\n  'collapsed-sidebar': options.collapsed,\n  'side-panel-opened': sidePanelOpened,\n  'side-panel-closed': !sidePanelOpened }\">\n\n  <app-header (toggleSidenav)=\"toggleSidenav()\"></app-header>\n\n  <mat-sidenav-container class=\"app-inner\" (click)=\"updatePS()\">\n\n    <mat-sidenav #sidemenu class=\"sidebar-panel\"\n      [mode]=\"isOver() ? 'over' : 'side'\"\n      [opened]=\"!isOver()\"\n      (open)=\"sidePanelOpened = true\"\n      (close)=\"sidePanelOpened = false\"\n      [perfectScrollbar]=\"config\"\n      [disabled]=\"mediaMatcher.matches\">\n      <app-sidebar></app-sidebar>\n    </mat-sidenav>\n\n    <div [perfectScrollbar]=\"config\" [disabled]=\"mediaMatcher.matches\">\n      <router-outlet [className]=\"routeData.css\"></router-outlet>\n    </div>\n\n  </mat-sidenav-container>\n\n</div>\n\n<app-options (messageEvent)=\"receiveMessage($event)\" (toggleFullscreen)=\"toggleFullscreen()\"></app-options>\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/@ngx-loading-bar/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SMALL_WIDTH_BREAKPOINT = 960;
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(_element, router, route, zone, loader, titleService) {
        var _this = this;
        this._element = _element;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.loader = loader;
        this.titleService = titleService;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.options = {
            dark: false,
            boxed: false,
            collapsed: false,
            dir: 'ltr'
        };
        this.config = {};
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () {
            _this.mediaMatcher = mql;
        }); });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.router.url;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
            _this.url = event.url;
            _this.runOnRouteChange();
        });
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        var _this = this;
        if (this.isOver()) {
            this.sidemenu.close();
        }
        else {
            this.updatePS();
        }
        this.route.children.forEach(function (route) {
            var activeRoute = route;
            while (activeRoute.firstChild) {
                activeRoute = activeRoute.firstChild;
            }
            _this.routeData = activeRoute.snapshot.data;
        });
        if (this.routeData.hasOwnProperty('heading')) {
            this.setTitle(this.routeData.heading);
        }
    };
    AdminLayoutComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle + ' | Node - Angular Material 2 Admin Template');
    };
    AdminLayoutComponent.prototype.receiveMessage = function ($event) {
        this.options = $event;
        this.triggerWindowResize();
    };
    AdminLayoutComponent.prototype.toggleSidenav = function () {
        this.sidemenu.toggle();
        this.triggerWindowResize();
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/messages' ||
            this.url === '/calendar' ||
            this.url === '/media' ||
            this.url === '/maps/leaflet' ||
            this.url === '/taskboard') {
            return true;
        }
        else {
            return this.mediaMatcher.matches;
        }
    };
    AdminLayoutComponent.prototype.updatePS = function () {
        var _this = this;
        if (!this.mediaMatcher.matches) {
            setTimeout(function () {
                _this.directiveScroll.update();
            }, 350);
        }
    };
    AdminLayoutComponent.prototype.triggerWindowResize = function () {
        if (typeof (Event) === 'function') {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        }
    };
    AdminLayoutComponent.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.app-inner');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidemenu'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */])
    ], AdminLayoutComponent.prototype, "directiveScroll", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/core/admin-layout/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_loading_bar_core__["b" /* LoadingBarService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            styles: [':host ::ng-deep .mat-drawer-content {padding: 0; display: block!important;} .mat-drawer-container {z-index: 1000}'],
            template: __webpack_require__("./src/app/core/auth-layout/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\">\n  <button (click)=\"toggleSidenav.emit()\" mat-icon-button #tooltip=\"matTooltip\" matTooltip=\"Toggle navigation\" matTooltipPosition=\"after\" matTooltipShowDelay=\"300\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"branding\" [ngStyle.xs]=\"{display: 'none'}\">\n    <!--<svg preserveAspectRatio=\"xMidYMid meet\" width=\"180\" height=\"40\" viewBox=\"0 0 180 40\">-->\n      <!--<use xlink:href=\"#logo\" />-->\n    <!--</svg>-->\n    <img src=\"assets/images/image002.jpg\" alt=\"logo\"  width=\"80%\">\n  </div>\n  <div class=\"search-bar\" fxFlex>\n    <form class=\"search-form\" [ngStyle.xs]=\"{display: 'none'}\">\n      <mat-icon svgIcon=\"search-icon\">search</mat-icon>\n      <input type=\"text\" placeholder=\"What are you looking for?\" />\n    </form>\n  </div>\n  <button mat-icon-button #tooltip=\"matTooltip\" matTooltip=\"Switch accounts\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\">\n    <mat-icon>compare_arrows</mat-icon>\n  </button>\n  <button [matMenuTriggerFor]=\"apps\" mat-icon-button class=\"ml-xs\" #tooltip=\"matTooltip\" matTooltip=\"Apps quick launch\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\">\n    <mat-icon>apps</mat-icon>\n  </button>\n  <button [matMenuTriggerFor]=\"notifications\" mat-icon-button class=\"ml-xs overflow-visible\" #tooltip=\"matTooltip\" matTooltip=\"User notifications\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\">\n    <mat-icon>notifications</mat-icon>\n  </button>\n  <button mat-button [routerLink]=\"['/']\">{{ username }}</button>\n  <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\" #tooltip=\"matTooltip\" matTooltip=\"User links\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\" class=\"ml-xs header-avatar\">\n    <img src=\"assets/images/face3.jpg\" alt=\"\" class=\"toolbar-avatar radius-circle\">\n    <!--<img [src]=\"gravatar\" alt=\"image\" class=\"toolbar-avatar radius-circle\" />-->\n  </button>\n</mat-toolbar>\n\n<!--Apps Menu-->\n<mat-menu #apps=\"matMenu\" x-position=\"before\">\n  <div fxLayout=\"row\" class=\"pa-xs\">\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/messages']\" class=\"block\">\n        <span class=\"block\">\n          <mat-icon class=\"h1 mat-text-default\">email</mat-icon>\n        </span>\n        <small class=\"text-muted\">Emails</small>\n      </a>\n      <a [routerLink]=\"['/calendar']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-muted\">date_range</mat-icon>\n        </span>\n        <small class=\"text-muted\">Calendar</small>\n      </a>\n    </div>\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/social']\" class=\"block\">\n        <span class=\"block\">\n          <mat-icon class=\"h1 mat-text-warn\">person</mat-icon>\n        </span>\n        <small class=\"text-muted\">Social</small>\n      </a>\n      <a [routerLink]=\"['/maps/google']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-default\">place</mat-icon>\n        </span>\n        <small class=\"text-muted\">Map</small>\n      </a>\n    </div>\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/messsages']\" class=\"block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-accent\">ondemand_video</mat-icon>\n        </span>\n        <small class=\"text-muted\">Media</small>\n      </a>\n      <a [routerLink]=\"['/taskboard']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-primary\">view_column</mat-icon>\n        </span>\n        <small class=\"text-muted\">Tasks</small>\n      </a>\n    </div>\n  </div>\n</mat-menu>\n\n<!--User Menu-->\n<mat-menu #user=\"matMenu\" x-position=\"before\">\n  <button mat-menu-item>\n    <mat-icon>settings</mat-icon>\n    Settings\n  </button>\n  <button mat-menu-item [routerLink]=\"['/social']\">\n    <mat-icon>account_box</mat-icon>\n    Profile\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    Disable notifications\n  </button>\n  <button mat-menu-item (click)=\"onLogout()\">\n    <mat-icon>exit_to_app</mat-icon>\n    Sign Out\n  </button>\n</mat-menu>\n\n<!--Notification Menu-->\n<mat-menu #notifications=\"matMenu\" x-position=\"before\" class=\"notifications\">\n  <mat-toolbar>\n    <span class=\"mr-1 ml-1\">Notifications</span>\n  </mat-toolbar>\n  <div [perfectScrollbar]=\"config\" class=\"notifications-inner\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let notice of notificationService.getAll()\">\n        <mat-icon mat-list-avatar class=\"mat-text-{{ notice?.color }} mat-icon mat-list-avatar material-icons\">{{ notice.icon }}</mat-icon>\n        <h4 matLine>{{ notice.text }}</h4>\n        <p matLine *ngIf=\"notice.subtext\">{{ notice.subtext }}</p>\n        <span class=\"text-md mat-text-muted\" matLine *ngIf=\"notice.date\">{{ notice.date | date: 'fullDate' }}</span>\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("./src/app/core/header/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, notificationService, iconRegistry, sanitizer) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = {};
        iconRegistry.addSvgIcon('search-icon', sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg'));
        this.gravatar = localStorage.getItem('image');
        this.username = localStorage.getItem('username');
        console.log('****************************************');
        console.log('toolbar gravatar >>>', this.gravatar);
        console.log('toolbar username  >>>', this.username);
        console.log('****************************************');
    }
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/account/signin');
        console.log("fare well");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__account_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/header/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NOTIFICATIONITEMS = [
    {
        text: 'Social',
        subtext: 'Ligula Purus Adipiscing',
        icon: 'people',
        color: 'primary'
    },
    {
        text: 'Promotions',
        subtext: 'Etiam Ligula Dapibus',
        icon: 'local_offer',
        color: 'warn'
    },
    {
        text: 'Updates',
        subtext: 'Sollicitudin Euismod Fringilla',
        icon: 'info',
        color: 'accent'
    },
    {
        text: 'Removed 6 items from task list',
        date: 1427207139000,
        icon: 'delete_sweep'
    },
    {
        text: 'Completed 2 projects',
        date: 1427412725000,
        icon: 'check_circle'
    },
    {
        text: 'Muted notifications',
        date: 1427546580000,
        icon: 'notifications_paused'
    },
    {
        text: 'Added Joel to contact list',
        date: 1428275520000,
        icon: 'person_add'
    },
    {
        text: 'Missed live call from Ellie',
        date: 1428830580000,
        icon: 'phone_missed'
    },
    {
        text: 'You\'ve been added to HR group',
        date: 1429363920000,
        icon: 'group_add'
    }
];
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.getAll = function () {
        return NOTIFICATIONITEMS;
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/helpers/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORSINVERT; });
var COLORS = [
    '#3f51b5', '#4caf50', '#03a9f4', '#ffeb3b', '#f44336', '#607d8b'
];
var COLORSINVERT = [
    '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'
];


/***/ }),

/***/ "./src/app/core/helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__("./src/app/core/helpers/colors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__colors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__colors__["b"]; });



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_layout_admin_layout_component__ = __webpack_require__("./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_layout_admin_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_layout_auth_layout_component__ = __webpack_require__("./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_layout_auth_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("./src/app/core/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("./src/app/core/menu/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_accordion__ = __webpack_require__("./src/app/core/menu-accordion/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_accordion__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_accordion__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_accordion__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__("./src/app/core/helpers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__helpers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_options_component__ = __webpack_require__("./src/app/core/options/options.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__options_options_component__["a"]; });










/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });





/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__("./src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
    MenuComponent.prototype.addMenuItem = function () {
        this.menuService.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: "\n    <mat-nav-list appAccordion class=\"navigation\">\n      <div *ngFor=\"let menuitem of menuService.getAll()\">\n        <mat-list-item appAccordionLink group=\"{{menuitem.state}}\" *ngIf=\"menuitem.type !== 'divider' || menuitem.type !== 'title'\">\n          <a appAccordionToggle class=\"relative\" [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" href=\"{{ menuitem.state }}\" *ngIf=\"menuitem.type === 'extLink'\">\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" href=\"{{ menuitem.state }}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n            <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n          </a>\n          <mat-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\n            <mat-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n              <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\">{{ childitem.name | translate }}</a>\n            </mat-list-item>\n          </mat-nav-list>\n        </mat-list-item>\n        <mat-divider *ngIf=\"menuitem.type === 'divider'\" class=\"my-1\"></mat-divider>\n        <h5 mat-subheader *ngIf=\"menuitem.type === 'title'\">{{ menuitem.name | translate }}</h5>\n      </div>\n    </mat-nav-list>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/',
        name: 'Dashboard',
        type: 'link',
        icon: ''
    },
    {
        state: 'myfeed',
        name: 'My Feed',
        type: 'link',
        icon: ''
    },
    {
        state: 'post',
        name: 'Posts',
        type: 'link',
        icon: ''
    },
    {
        state: 'groups',
        name: 'All Groups',
        type: 'sub',
        icon: '',
        children: [
            { state: 'signin', name: 'Hr Resources' },
            { state: 'signup', name: 'News' },
            { state: 'forgot', name: 'Events' },
            { state: 'lockscreen', name: 'LOCKSCREEN' },
        ]
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'COMMUNITY'
    },
    {
        state: 'social',
        name: 'People',
        type: 'link',
        icon: ''
    },
    {
        state: 'social',
        name: 'Forums',
        type: 'link',
        icon: ''
    },
    {
        state: 'activity',
        name: 'Site-wide Activity',
        type: 'link',
        icon: ''
    },
    {
        state: 'groups',
        name: 'Groups',
        type: 'link',
        icon: '',
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'APPlICATIONS'
    },
    {
        state: 'calendar',
        name: 'Calendar',
        type: 'link',
        icon: ''
    },
    {
        state: 'messages',
        name: 'MESSAGES',
        type: 'link',
        icon: ''
    },
    {
        state: 'taskboard',
        name: 'TASKBOARD',
        type: 'link',
        icon: '',
    },
    {
        state: 'gallery',
        name: 'Photos',
        type: 'link',
        icon: ''
    },
    {
        state: 'filemanager',
        name: 'File Manager',
        type: 'link',
        icon: '',
    },
    {
        state: 'buggedout',
        name: 'Issue Tracker',
        type: 'link',
        icon: ''
    },
    {
        state: 'software',
        name: 'Softwares',
        type: 'link',
        icon: ''
    },
    {
        state: 'booking',
        name: 'Bookings',
        type: 'link',
        icon: ''
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'SUPPORT'
    },
    {
        state: 'documentation',
        name: 'Knowledge Base',
        type: 'link',
        icon: ''
    }
];
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuService.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/core/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<a [matMenuTriggerFor]=\"settings\">\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-settings\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path></svg>\n  <span>Template options</span>\n</a>\n\n<!--Settings-->\n<mat-menu #settings=\"matMenu\" x-position=\"after\" class=\"settings\">\n  <div [perfectScrollbar]=\"config\">\n    <mat-list>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <mat-checkbox [(ngModel)]=\"options.collapsed\" (change)=\"sendMessage()\">Collapsed Sidebar</mat-checkbox>\n          </div>\n        </div>\n      </mat-list-item>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <mat-checkbox [(ngModel)]=\"options.boxed\" (change)=\"sendMessage()\">Boxed Layout</mat-checkbox>\n          </div>\n        </div>\n      </mat-list-item>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <mat-checkbox [(ngModel)]=\"options.dark\" (change)=\"sendMessage()\">Dark Mode</mat-checkbox>\n          </div>\n        </div>\n      </mat-list-item>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <mat-checkbox (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl'); sendMessage()\">RTL</mat-checkbox>\n          </div>\n        </div>\n      </mat-list-item>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <button mat-raised-button mat-button-sm (click)=\"toggleFullscreen.emit()\">Fullscreen</button>\n          </div>\n        </div>\n      </mat-list-item>\n      <mat-list-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <mat-select placeholder=\"Language\" class=\"mt-1\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\">\n              <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</mat-option>\n            </mat-select>\n          </div>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</mat-menu>"

/***/ }),

/***/ "./src/app/core/options/options.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  z-index: 8;\n  top: 140px;\n  right: -0;\n  width: 40px;\n  height: 40px; }\n  :host > a {\n    height: 40px;\n    line-height: 4.2;\n    padding: 0 5px;\n    display: block;\n    position: relative;\n    cursor: pointer;\n    text-align: center;\n    background: #fff;\n    color: rgba(0, 0, 0, 0.7);\n    -webkit-box-shadow: 0px 0 30px rgba(0, 0, 0, 0.05);\n            box-shadow: 0px 0 30px rgba(0, 0, 0, 0.05); }\n  :host > a > span {\n      font-family: \"Inconsolata\";\n      position: absolute;\n      top: 0;\n      right: 100%;\n      line-height: 40px;\n      padding: 0 12px;\n      font-size: 12px;\n      background: #333;\n      color: #fff;\n      opacity: 0;\n      visibility: hidden;\n      white-space: nowrap; }\n  :host > a:hover {\n      background: #333;\n      color: #fff; }\n  :host > a:hover span {\n        opacity: 1;\n        visibility: visible; }\n"

/***/ }),

/***/ "./src/app/core/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMALL_WIDTH_BREAKPOINT = 960;
var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(translate, zone) {
        var _this = this;
        this.translate = translate;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.currentLang = 'en';
        this.options = {
            dark: false,
            boxed: false,
            collapsed: false,
            dir: 'ltr'
        };
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleFullscreen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () {
            _this.mediaMatcher = mql;
        }); });
    }
    OptionsComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OptionsComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OptionsComponent.prototype, "toggleFullscreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */])
    ], OptionsComponent.prototype, "directiveScroll", void 0);
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-options',
            template: __webpack_require__("./src/app/core/options/options.component.html"),
            styles: [__webpack_require__("./src/app/core/options/options.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <app-menu></app-menu>\n</div>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/core/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__("./src/app/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:9000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map