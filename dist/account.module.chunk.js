webpackJsonp(["account.module"],{

/***/ "./src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing__ = __webpack_require__("./src/app/account/account.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__ = __webpack_require__("./src/app/account/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__ = __webpack_require__("./src/app/account/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__ = __webpack_require__("./src/app/account/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("./src/app/account/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__account_routing__["a" /* AccountRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__["a" /* LockscreenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgot_forgot_component__ = __webpack_require__("./src/app/account/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lockscreen_lockscreen_component__ = __webpack_require__("./src/app/account/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("./src/app/account/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/account/signup/signup.component.ts");




var AccountRoutes = [
    { path: '', children: [
            { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_0__forgot_forgot_component__["a" /* ForgotComponent */], data: { heading: 'Forgot password', css: '' } },
            { path: 'lockscreen', component: __WEBPACK_IMPORTED_MODULE_1__lockscreen_lockscreen_component__["a" /* LockscreenComponent */], data: { heading: 'Lockscreen', css: '' } },
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */], data: { heading: 'Signin', css: '' } },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], data: { heading: 'Signup', css: '' } }
        ]
    }
];


/***/ }),

/***/ "./src/app/account/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\">\n  <mat-card class=\"overflow-hidden\">\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"bg-image bg-image-forgot\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" class=\"h-100 py-3\" >\n          <div class=\"text-xs-center pb-1 mat-text-white\">\n            <!--<div style=\"width: 100px;height: 20px;\">-->\n              <!--<svg class=\"logo\" preserveAspectRatio=\"xMidYMid meet\" width=\"180\" height=\"40\" viewBox=\"0 0 180 40\">-->\n                <!--<use xlink:href=\"#logo\" />-->\n              <!--</svg>-->\n            <!--</div>-->\n            <img src=\"assets/images/brand.png\" alt=\"logo\"  width=\"50%\">\n            <!--<p class=\"mt-xs mb-0\"> DEMO <em> <strong class=\"text-lg\">SAS Intranet</strong></em> @2018</p>-->\n          </div>\n        </div>\n      </div>\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <mat-card-content class=\"pa-3\">\n          <h1 class=\"mb-0\">Recover Password</h1>\n          <p class=\"mat-text-muted text-md mt-0 mb-2\">Enter your email and we'll send you instructions on how to reset your password.</p>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div  fxLayout=\"column\"  fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                  <mat-icon matSuffix>email</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n              </div>\n              <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/account/signin']\">Access your account</a>&nbsp;&nbsp;&nbsp;&nbsp;\n              <a [routerLink]=\"['/account/signup']\">Create a new account</a>\n            </div>\n          </form>\n        </mat-card-content>\n      </div>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/account/forgot/forgot.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_router_animations__ = __webpack_require__("./node_modules/angular-router-animations/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_router_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])]
        });
    };
    ForgotComponent.prototype.onSubmit = function () {
        this.router.navigate(['/session/signin']);
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/account/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/account/forgot/forgot.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__["moveIn"])(), Object(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__["fallIn"])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/account/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\">\n  <div class=\"lockscreen-wrapper text-xs-center\">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"lockscreen-avatar\">\n            <img src=\"assets/images/avatar.jpg\" class=\"radius-round\" alt=\"user\" title=\"user\"/>\n          </div>\n          <p class=\"center-block mt-1\">David Miller</p>\n          <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n            <div class=\"pb-1\">\n              <mat-form-field style=\"width: 100%\">\n                <input matInput placeholder=\"Username\" [formControl]=\"form.controls['uname']\">\n                <mat-icon matSuffix>lock</mat-icon>\n              </mat-form-field>\n              <small *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\" class=\"mat-text-warn\">Username is required.</small>\n            </div>\n            <div> <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Unlock</button></div>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/account/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    LockscreenComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    LockscreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/dashboard']);
    };
    LockscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__("./src/app/account/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__("./src/app/account/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/account/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\"  [@moveIn]>\n  <mat-card class=\"overflow-hidden\">\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"bg-image bg-image-signin\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" class=\"h-100 py-3\" >\n          <div class=\"text-xs-center pb-1 mat-text-white\">\n            <!--<div style=\"width: 100px;height: 20px;\">-->\n              <!--<svg class=\"logo\" preserveAspectRatio=\"xMidYMid meet\" width=\"180\" height=\"40\" viewBox=\"0 0 180 40\">-->\n                <!--<use xlink:href=\"#logo\" />-->\n              <!--</svg>-->\n            <!--</div>-->\n            <img src=\"assets/images/brand.png\" alt=\"logo\"  width=\"50%\">\n            <!--<p class=\"mt-xs mb-0\"> DEMO <em> <strong class=\"text-lg\">SAS Intranet</strong></em> @2018</p>-->\n          </div>\n        </div>\n      </div>\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <mat-card-content class=\"pa-3\">\n          <h1 class=\"mb-0\">Login</h1>\n          <p class=\"mat-text-muted text-md mt-0 mb-2\">Sign in with your app id to continue.</p>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                  <mat-icon matSuffix>email</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"form.controls['password']\">\n                  <mat-icon matSuffix>lock</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">Password is required.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-checkbox>Stay logged in</mat-checkbox>\n              </div>\n              <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/account/forgot']\">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;\n              <a [routerLink]=\"['/account/signup']\">Sign up for a new account.</a>\n            </div>\n          </form>\n        </mat-card-content>\n      </div>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/account/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_router_animations__ = __webpack_require__("./node_modules/angular-router-animations/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_router_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_validation__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, fb, router, snackBar) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.horizontalPosition = 'right';
        this.verticalPosition = 'bottom';
        if (authService.isLoggedIn()) {
            this.router.navigate(['/social']);
        }
        this.config = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatSnackBarConfig */]();
        this.config.verticalPosition = this.verticalPosition;
        this.config.horizontalPosition = this.horizontalPosition;
        this.config.duration = 5000;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6_ng2_validation__["CustomValidators"].email])],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var postData = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        console.log('@component postData :: ', JSON.stringify(postData));
        this.authService.login(postData).subscribe(function (data) {
            localStorage.setItem('token', JSON.stringify(data));
            localStorage.setItem('loginToken', data['token']);
            localStorage.setItem('role', data['role']);
            localStorage.setItem('avatar', data['avatar']);
            localStorage.setItem('username', data['name']);
            localStorage.setItem('email', data['email']);
            //   localStorage.setItem('mobile', data['profile'].mobile);
            //   localStorage.setItem('department', data['profile'].department);
            //   localStorage.setItem('bio', data['profile'].bio);
            //   localStorage.setItem('status', data['profile'].status);
            //   localStorage.setItem('position', data['profile'].position);
            console.log('get tokenFromStorage:: ', localStorage.getItem('token'));
            // console.log('get role :: ', localStorage.getItem('role') );
            // console.log('get profile :: ', localStorage.getItem('profile') );
            // console.log('get image :: ', localStorage.getItem('image') );
            console.log('get username :: ', localStorage.getItem('username'));
            console.log('get email :: ', localStorage.getItem('email'));
            console.log('login token :: ', localStorage.getItem('loginToken'));
            _this.snackBar.open('welcome home', '', _this.config);
            _this.router.navigate(['/social']);
        }, function (error) {
            console.log("Error Login :: " + JSON.stringify(error));
            _this.snackBar.open("" + error.error['message'], '', _this.config);
            _this.form.reset();
        });
    };
    SigninComponent.prototype.getCurrentLogin = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (data) {
            console.log('get current user details >>> ', JSON.stringify(data));
        }, function (error) {
            _this.snackBar.open("" + error.error['message'], '', _this.config);
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/account/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/account/signin/signin.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__["moveIn"])(), Object(__WEBPACK_IMPORTED_MODULE_4_angular_router_animations__["fallIn"])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatSnackBar */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/account/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\" [@moveIn]>\n  <mat-card class=\"overflow-hidden\">\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"bg-image bg-image-signup\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" class=\"h-100 py-3\" >\n          <div class=\"text-xs-center pb-1 mat-text-white\">\n            <!--<div style=\"width: 100px;height: 20px;\">-->\n              <!--<svg class=\"logo\" preserveAspectRatio=\"xMidYMid meet\" width=\"180\" height=\"40\" viewBox=\"0 0 180 40\">-->\n                <!--<use xlink:href=\"#logo\" />-->\n              <!--</svg>-->\n            <!--</div>-->\n            <img src=\"assets/images/brand.png\" alt=\"logo\"  width=\"50%\">\n\n            <!--<p class=\"mt-xs mb-0\"> DEMO <em> <strong class=\"text-lg\">SAS Intranet</strong></em> @2018</p>-->\n          </div>\n        </div>\n      </div>\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <mat-card-content class=\"pa-3\">\n          <h1 class=\"mb-0\">Signup</h1>\n          <p class=\"mat-text-muted text-md mt-0 mb-2\">Create an app id to continue.</p>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div fxLayout=\"column\"  fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Username\" type=\"text\" [formControl]=\"form.controls['uname']\">\n                  <mat-icon matSuffix>person</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\" class=\"mat-text-warn\">You must include username.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                  <mat-icon matSuffix>email</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Phone number\" type=\"text\" [formControl]=\"form.controls['phone']\">\n                  <mat-icon matSuffix>phone</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['phone'].hasError('required') && form.controls['phone'].touched\" class=\"mat-text-warn\">You must include phone number.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"form.controls['password']\">\n                  <mat-icon matSuffix>lock</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">You must include password.</small>\n              </div>\n              <div class=\"pb-1\">\n                <mat-form-field style=\"width: 100%\">\n                  <input matInput placeholder=\"Confirm Password\" [formControl]=\"form.controls['confirmPassword']\" type=\"password\">\n                  <mat-icon matSuffix>lock</mat-icon>\n                </mat-form-field>\n                <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"mat-text-warn\">You must include confirm password.</small>\n                <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"mat-text-warn\">Passwords do not math.</small>\n              </div><br>\n              <!--<div class=\"pb-1\">-->\n                <!--<mat-checkbox>I have read and agree to the terms of service.</mat-checkbox>-->\n              <!--</div>-->\n              <button mat-raised-button color=\"primary\" class=\"btn-block\" type=\"submit\" [disabled]=\"!form.valid\">Create your account</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/account/forgot']\">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;\n              <a [routerLink]=\"['/account/signin']\">Access your account.</a>\n            </div>\n          </form>\n        </mat-card-content>\n      </div>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/account/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/account/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_router_animations__ = __webpack_require__("./node_modules/angular-router-animations/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_router_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].equalTo(password));

var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].email])],
            phone: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: password,
            confirmPassword: confirmPassword
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var postData = {
            username: this.form.value.uname,
            email: this.form.value.email,
            mobile: this.form.value.phone,
            password: this.form.value.confirmPassword
        };
        console.log('@component postData :: ', JSON.stringify(postData));
        this.authService.signup(postData).subscribe(function (data) {
            console.log("this.data :: " + JSON.stringify(data));
            _this.router.navigate(['/account/signin']);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/account/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/account/signup/signup.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["moveIn"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["fallIn"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["fadeInOut"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["growShrink"])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map