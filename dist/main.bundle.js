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
	"./leaveapp/leaveapp.module": [
		"./src/app/leaveapp/leaveapp.module.ts",
		"common",
		"leaveapp.module"
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
	"./myfeed/myfeed.module": [
		"./src/app/myfeed/myfeed.module.ts",
		"common",
		"myfeed.module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./posts/posts.module": [
		"./src/app/posts/posts.module.ts",
		"common",
		"posts.module"
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
        this.loginToken = localStorage.getItem('loginToken');
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.getAccessToken = function () {
        return JSON.parse(localStorage.getItem('token')).id;
    };
    AuthService.prototype.getCurrentUser = function () {
        console.log("get current user");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.loginToken });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/users/current", { headers: headers });
    };
    AuthService.prototype.login = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/users/login", data, { headers: headers });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ui_carousel__ = __webpack_require__("./node_modules/ui-carousel/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ui_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ui_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__account_auth_guard_service__ = __webpack_require__("./src/app/account/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_fab_speed_dial__ = __webpack_require__("./node_modules/ng2-fab-speed-dial/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ecodev_fab_speed_dial__ = __webpack_require__("./node_modules/@ecodev/fab-speed-dial/esm5/ecodev-fab-speed-dial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_avatar__ = __webpack_require__("./node_modules/ngx-avatar/ngx-avatar.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__social_profile_service__ = __webpack_require__("./src/app/social/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__posts_posts_service__ = __webpack_require__("./src/app/posts/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tables_issues_service__ = __webpack_require__("./src/app/tables/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__leaveapp_app_service__ = __webpack_require__("./src/app/leaveapp/app.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
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
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["Q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["R" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["M" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_loading_bar_core__["a" /* LoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyAsQi8vzHfqrt33xQww77MN1Bg84iLSeOM' }),
                __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["c" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_fab_speed_dial__["a" /* Ng2FabSpeedDialModule */],
                __WEBPACK_IMPORTED_MODULE_22__ecodev_fab_speed_dial__["a" /* EcoFabSpeedDialModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_avatar__["AvatarModule"],
                __WEBPACK_IMPORTED_MODULE_15_ui_carousel__["UICarouselModule"]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                __WEBPACK_IMPORTED_MODULE_19__account_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__account_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__social_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_25__posts_posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_26__tables_issues_service__["a" /* IssuesService */],
                __WEBPACK_IMPORTED_MODULE_27__leaveapp_app_service__["a" /* AppService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
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
            { path: 'documentation', loadChildren: './docs/docs.module#DocsModule' },
            { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
            { path: 'myfeed', loadChildren: './myfeed/myfeed.module#MyfeedModule' },
            { path: 'leaveapp', loadChildren: './leaveapp/leaveapp.module#LeaveappModule' }
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
        this.titleService.setTitle(newTitle + ' | SAS - Staff Intranet');
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

module.exports = "<mat-toolbar class=\"main-header\">\n  <button (click)=\"toggleSidenav.emit()\" mat-icon-button #tooltip=\"matTooltip\" matTooltip=\"Toggle navigation\" matTooltipPosition=\"after\" matTooltipShowDelay=\"300\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"branding\" [ngStyle.xs]=\"{display: 'none'}\">\n    <!--<svg preserveAspectRatio=\"xMidYMid meet\" width=\"180\" height=\"40\" viewBox=\"0 0 180 40\">-->\n      <!--<use xlink:href=\"#logo\" />-->\n    <!--</svg>-->\n    <img src=\"assets/images/brand.png\" alt=\"logo\"  width=\"100%\">\n  </div>\n  <div class=\"search-bar\" fxFlex>\n    <form class=\"search-form\" [ngStyle.xs]=\"{display: 'none'}\">\n      <mat-icon svgIcon=\"search-icon\">search</mat-icon>\n      <input type=\"text\" placeholder=\"What are you looking for?\" />\n    </form>\n  </div>\n\n  <button [matMenuTriggerFor]=\"apps\" mat-icon-button class=\"ml-xs\" #tooltip=\"matTooltip\" matTooltip=\"Apps quick launch\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\">\n    <mat-icon>apps</mat-icon>\n  </button>\n  <button [matMenuTriggerFor]=\"notifications\" mat-icon-button class=\"ml-xs overflow-visible\" #tooltip=\"matTooltip\" matTooltip=\"User notifications\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\">\n    <mat-icon>notifications</mat-icon>\n  </button>\n  <button mat-button ><em>{{ username }}</em></button>\n  <!--<span><h4><em>{{username}}</em></h4></span>-->\n\n  <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\" #tooltip=\"matTooltip\" matTooltip=\"User links\" matTooltipPosition=\"before\" matTooltipShowDelay=\"300\" class=\"ml-xs header-avatar\">\n    <img src=\"{{gravatar}}\" alt=\"\" class=\"toolbar-avatar radius-circle\">\n    <!--<ngx-avatar gravatarId=\"{{email}}\" [style]=\"customStyle\"></ngx-avatar>-->\n\n  </button>\n</mat-toolbar>\n\n<!--Apps Menu-->\n<mat-menu #apps=\"matMenu\" x-position=\"before\">\n  <div fxLayout=\"row\" class=\"pa-xs\">\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/messages']\" class=\"block\">\n        <span class=\"block\">\n          <mat-icon class=\"h1 mat-text-default\">email</mat-icon>\n        </span>\n        <small class=\"text-muted\">Emails</small>\n      </a>\n      <a [routerLink]=\"['/calendar']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-muted\">date_range</mat-icon>\n        </span>\n        <small class=\"text-muted\">Calendar</small>\n      </a>\n    </div>\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/social']\" class=\"block\">\n        <span class=\"block\">\n          <mat-icon class=\"h1 mat-text-warn\">person</mat-icon>\n        </span>\n        <small class=\"text-muted\">Social</small>\n      </a>\n      <a [routerLink]=\"['/maps/google']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-default\">place</mat-icon>\n        </span>\n        <small class=\"text-muted\">Map</small>\n      </a>\n    </div>\n    <div fxFlex=\"33.3333\" class=\"text-xs-center pa-1\">\n      <a [routerLink]=\"['/messsages']\" class=\"block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-accent\">ondemand_video</mat-icon>\n        </span>\n        <small class=\"text-muted\">Media</small>\n      </a>\n      <a [routerLink]=\"['/taskboard']\" class=\"mt-2 block\">\n        <span class=\"block\">\n            <mat-icon class=\"h1 mat-text-primary\">view_column</mat-icon>\n        </span>\n        <small class=\"text-muted\">Tasks</small>\n      </a>\n    </div>\n  </div>\n</mat-menu>\n\n<!--User Menu-->\n<mat-menu #user=\"matMenu\" x-position=\"before\">\n  <button mat-menu-item>\n    <mat-icon>settings</mat-icon>\n    Settings\n  </button>\n  <button mat-menu-item [routerLink]=\"['/social']\">\n    <mat-icon>account_box</mat-icon>\n    Profile\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    Disable notifications\n  </button>\n  <button mat-menu-item (click)=\"onLogout()\">\n    <mat-icon>exit_to_app</mat-icon>\n    Sign Out\n  </button>\n</mat-menu>\n\n<!--Notification Menu-->\n<mat-menu #notifications=\"matMenu\" x-position=\"before\" class=\"notifications\">\n  <mat-toolbar>\n    <span class=\"mr-1 ml-1\">Notifications</span>\n  </mat-toolbar>\n  <div [perfectScrollbar]=\"config\" class=\"notifications-inner\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let notice of notificationService.getAll()\">\n        <mat-icon mat-list-avatar class=\"mat-text-{{ notice?.color }} mat-icon mat-list-avatar material-icons\">{{ notice.icon }}</mat-icon>\n        <h4 matLine>{{ notice.text }}</h4>\n        <p matLine *ngIf=\"notice.subtext\">{{ notice.subtext }}</p>\n        <span class=\"text-md mat-text-muted\" matLine *ngIf=\"notice.date\">{{ notice.date | date: 'fullDate' }}</span>\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n</mat-menu>\n"

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
        this.customStyle = {
            width: "40px",
            height: "40px",
            lineHeight: "24px",
            display: "block"
        };
        iconRegistry.addSvgIcon('search-icon', sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg'));
        this.gravatar = localStorage.getItem('avatar');
        this.username = localStorage.getItem('username');
        this.email = localStorage.getItem('email');
        console.log('****************************************');
        console.log('toolbar gravatar >>>', this.gravatar);
        console.log('toolbar username  >>>', this.username);
        console.log('toolbar email  >>>', this.email);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatIconRegistry */],
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
        name: 'MyFeed',
        type: 'link',
        icon: ''
    },
    {
        state: 'posts',
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
        state: 'tables',
        name: 'Issue Tracker',
        type: 'sub',
        icon: 'format_line_spacing',
        badge: [{ type: 'blue-grey', value: '6' }],
        children: [
            { state: 'filter', name: 'Post Issue' },
            { state: 'fullscreen', name: 'Admin' }
        ]
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
        state: 'leaveapp',
        name: 'Leave App',
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

/***/ "./src/app/leaveapp/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = /** @class */ (function () {
    function Data(categories, compareList, wishList, cartList, totalPrice) {
        this.categories = categories;
        this.compareList = compareList;
        this.wishList = wishList;
        this.cartList = cartList;
        this.totalPrice = totalPrice;
    }
    return Data;
}());

var AppService = /** @class */ (function () {
    function AppService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.Data = new Data([], // categories
        [], // compareList
        [], // wishList
        [], // cartList
        null // totalPrice
        );
        this.url = 'assets/data/';
    }
    AppService.prototype.getCategories = function () {
        return this.http.get(this.url + 'categories.json');
    };
    AppService.prototype.getProducts = function (type) {
        return this.http.get(this.url + type + '-products.json');
    };
    AppService.prototype.getProductById = function (id) {
        return this.http.get(this.url + 'product-' + id + '.json');
    };
    AppService.prototype.getBanners = function () {
        return this.http.get(this.url + 'banners.json');
    };
    AppService.prototype.addToCompare = function (product) {
        var message, status;
        if (this.Data.compareList.filter(function (item) { return item.id == product.id; })[0]) {
            message = 'The product ' + product.name + ' already added to comparison list.';
            status = 'error';
        }
        else {
            this.Data.compareList.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    AppService.prototype.addToWishList = function (product) {
        var message, status;
        if (this.Data.wishList.filter(function (item) { return item.id == product.id; })[0]) {
            message = 'The product ' + product.name + ' already added to wish list.';
            status = 'error';
        }
        else {
            this.Data.wishList.push(product);
            message = 'The product ' + product.name + ' has been added to wish list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    AppService.prototype.addToCart = function (product) {
        var _this = this;
        var message, status;
        if (this.Data.cartList.filter(function (item) { return item.id == product.id; })[0]) {
            message = 'The product ' + product.name + ' already added to cart.';
            status = 'error';
        }
        else {
            this.Data.totalPrice = null;
            this.Data.cartList.push(product);
            this.Data.cartList.forEach(function (product) {
                _this.Data.totalPrice = _this.Data.totalPrice + product.newPrice;
            });
            message = 'The product ' + product.name + ' has been added to cart.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    };
    AppService.prototype.getBrands = function () {
        return [
            { name: 'aloha', image: 'assets/images/brands/aloha.png' },
            { name: 'dream', image: 'assets/images/brands/dream.png' },
            { name: 'congrats', image: 'assets/images/brands/congrats.png' },
            { name: 'best', image: 'assets/images/brands/best.png' },
            { name: 'original', image: 'assets/images/brands/original.png' },
            { name: 'retro', image: 'assets/images/brands/retro.png' },
            { name: 'king', image: 'assets/images/brands/king.png' },
            { name: 'love', image: 'assets/images/brands/love.png' },
            { name: 'the', image: 'assets/images/brands/the.png' },
            { name: 'easter', image: 'assets/images/brands/easter.png' },
            { name: 'with', image: 'assets/images/brands/with.png' },
            { name: 'special', image: 'assets/images/brands/special.png' },
            { name: 'bravo', image: 'assets/images/brands/bravo.png' }
        ];
    };
    AppService.prototype.getCountries = function () {
        return [
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Aland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'AndorrA', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'S Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'RWANDA', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States', code: 'US' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' }
        ];
    };
    AppService.prototype.getMonths = function () {
        return [
            { value: '01', name: 'January' },
            { value: '02', name: 'February' },
            { value: '03', name: 'March' },
            { value: '04', name: 'April' },
            { value: '05', name: 'May' },
            { value: '06', name: 'June' },
            { value: '07', name: 'July' },
            { value: '08', name: 'August' },
            { value: '09', name: 'September' },
            { value: '10', name: 'October' },
            { value: '11', name: 'November' },
            { value: '12', name: 'December' }
        ];
    };
    AppService.prototype.getYears = function () {
        return ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    };
    AppService.prototype.getDeliveryMethods = function () {
        return [
            { value: 'free', name: 'Free Delivery', desc: '$0.00 / Delivery in 7 to 14 business Days' },
            { value: 'standard', name: 'Standard Delivery', desc: '$7.99 / Delivery in 5 to 7 business Days' },
            { value: 'express', name: 'Express Delivery', desc: '$29.99 / Delivery in 1 business Days' }
        ];
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatSnackBar */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
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



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.token = localStorage.getItem('loginToken');
    }
    PostsService.prototype.getAllPosts = function () {
        console.log("get current user");
        // const headers =  new HttpHeaders({'Authorization': this.token});
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/posts");
    };
    PostsService.prototype.getPost = function (id) {
        console.log("get user profile");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.token });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/posts/" + id, { headers: headers });
    };
    PostsService.prototype.postContent = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/posts", data, { headers: headers });
    };
    PostsService.prototype.updatePost = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/posts", data, { headers: headers });
    };
    PostsService.prototype.deletePost = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/post", data, { headers: headers });
    };
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsService);
    return PostsService;
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

/***/ "./src/app/social/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
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



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.loginToken = localStorage.getItem('loginToken');
    }
    ProfileService.prototype.getPeople = function (id) {
        console.log('getPeople service id :: ', JSON.stringify(id));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/people/" + id, { headers: headers });
    };
    ProfileService.prototype.getPeoples = function () {
        console.log('get all people service  :: ');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/peoples", { headers: headers });
    };
    ProfileService.prototype.getUerProfile = function () {
        console.log("get user profile");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.loginToken });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/profile", { headers: headers });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/tables/issues.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesService; });
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



var IssuesService = /** @class */ (function () {
    function IssuesService(http) {
        this.http = http;
        this.loginToken = localStorage.getItem('loginToken');
    }
    IssuesService.prototype.getAllIssues = function () {
        console.log("GET all issues");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.loginToken });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/users/current", { headers: headers });
    };
    IssuesService.prototype.getIssue = function () {
        console.log("GET issue");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.loginToken });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/users/current", { headers: headers });
    };
    IssuesService.prototype.postIssue = function (data) {
        console.log('@injectable postData :: ', JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.loginToken });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/issues", data, { headers: headers });
    };
    IssuesService.prototype.updateIssue = function () {
        console.log('@injectable postData :: ');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/signup", { headers: headers });
    };
    IssuesService.prototype.removeIssue = function () {
        console.log('@injectable postData :: ');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/api/signup", { headers: headers });
    };
    IssuesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IssuesService);
    return IssuesService;
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
    api_url: 'http://localhost:5000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__ = __webpack_require__("./node_modules/core-js/es6/weak-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_array__ = __webpack_require__("./node_modules/core-js/es7/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classlist_js__ = __webpack_require__("./node_modules/classlist.js/classList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classlist_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_classlist_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_intl__ = __webpack_require__("./node_modules/intl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_intl_locale_data_jsonp_en_js__ = __webpack_require__("./node_modules/intl/locale-data/jsonp/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_intl_locale_data_jsonp_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_intl_locale_data_jsonp_en_js__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/














/* ngx-charts required polyfill ie11 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
 // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */




/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map