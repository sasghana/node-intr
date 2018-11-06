webpackJsonp(["myfeed.module"],{

/***/ "./src/app/myfeed/myfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fallIn]>\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <span>My Feed</span>\n      <span fxFlex></span>\n      <!--<button mat-raised-button color=\"warn\" class=\"\"><em> Date </em> <i class=\"material-icons\">unfold_more</i></button>-->\n      <button mat-button><em>Latest</em><i class=\"material-icons\">keyboard_arrow_down</i></button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div fxLayout=\"row\">\n    <mat-list style=\"width: 100%\">\n      <mat-list-item *ngFor=\"let message of messages; last as last\">\n        <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n        <h4 mat-line>{{message.from}}</h4>\n        <p mat-line> {{message.subject}} </p>\n        <p mat-line class=\"demo-secondary-text\">{{message.message}} </p>\n        <button mat-icon-button>\n          <mat-icon>favorite</mat-icon>\n        </button>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/myfeed/myfeed.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .sebm-google-map-container,\n:host ::ng-deep .chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n\n:host ::ng-deep .ngx-charts .gridline-path {\n  stroke: rgba(0, 0, 0, 0.096);\n  stroke-width: 0.5; }\n\n:host ::ng-deep .small-chart .chart-container {\n  height: 200px; }\n\n:host ::ng-deep .small-chart .ngx-charts text {\n  fill: #ffffff !important; }\n\n:host ::ng-deep .mat-column-position {\n  max-width: 40px; }\n\n:host ::ng-deep .mat-column-value {\n  max-width: 100px;\n  text-align: right; }\n\n:host ::ng-deep mat-grid-tile {\n  background-image: url(\"/assets/images/sas-experience.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n:host ::ng-deep .mat-card {\n  display: inline-block;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/myfeed/myfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_router_animations__ = __webpack_require__("./node_modules/angular-router-animations/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_router_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_router_animations__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyfeedComponent = /** @class */ (function () {
    function MyfeedComponent(snackBar) {
        this.snackBar = snackBar;
        this.message = '';
        this.messages = [
            {
                from: 'Hanson',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: '//www.gravatar.com/avatar/51d4780a028c7182c5cc4d78462808c0?s=200&r=pg&d=mm'
            },
            {
                from: 'Ayisi',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: '//www.gravatar.com/avatar/e619f5dad40ff1c5845c70bf407a16f7?s=200&r=pg&d=mm'
            },
            {
                from: 'Info',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: '//www.gravatar.com/avatar/b47216dfe3624c644aec3111e2d83bed?s=200&r=pg&d=mm'
            }
        ];
    }
    MyfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myfeed',
            template: __webpack_require__("./src/app/myfeed/myfeed.component.html"),
            styles: [__webpack_require__("./src/app/myfeed/myfeed.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2_angular_router_animations__["moveIn"])(), Object(__WEBPACK_IMPORTED_MODULE_2_angular_router_animations__["fallIn"])(), Object(__WEBPACK_IMPORTED_MODULE_2_angular_router_animations__["fadeInOut"])(), Object(__WEBPACK_IMPORTED_MODULE_2_angular_router_animations__["growShrink"])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSnackBar */]])
    ], MyfeedComponent);
    return MyfeedComponent;
}());



/***/ }),

/***/ "./src/app/myfeed/myfeed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfeedModule", function() { return MyfeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__myfeed_component__ = __webpack_require__("./src/app/myfeed/myfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myfeed_routing__ = __webpack_require__("./src/app/myfeed/myfeed.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MyfeedModule = /** @class */ (function () {
    function MyfeedModule() {
    }
    MyfeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__myfeed_routing__["a" /* MyfeedRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatToolbarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__myfeed_component__["a" /* MyfeedComponent */]]
        })
    ], MyfeedModule);
    return MyfeedModule;
}());



/***/ }),

/***/ "./src/app/myfeed/myfeed.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyfeedRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myfeed_component__ = __webpack_require__("./src/app/myfeed/myfeed.component.ts");

var MyfeedRoutes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__myfeed_component__["a" /* MyfeedComponent */], data: { heading: 'Myfeed', css: '' }
    }];


/***/ })

});
//# sourceMappingURL=myfeed.module.chunk.js.map