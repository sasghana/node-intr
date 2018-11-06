webpackJsonp(["dragndrop.module"],{

/***/ "./src/app/dragndrop/dragndrop.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"ma-1\">Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</p>\n\n<div  fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <mat-card fxFlex>\n    <mat-list [dragula]='\"first-bag\"'>\n      <ng-template ngFor let-todo [ngForOf]=\"todos\">\n        <mat-list-item>\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n            <div fxFlex>\n              <mat-checkbox [checked]=\"todo.finished\">{{todo.name}}</mat-checkbox>\n            </div>\n            <div><mat-icon>more_horiz</mat-icon></div>\n          </div>\n        </mat-list-item>\n      </ng-template>\n    </mat-list>\n  </mat-card>\n  <mat-card fxFlex>\n    <mat-nav-list [dragula]='\"first-bag\"'>\n      <mat-list-item *ngFor=\"let link of links\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n          <div fxFlex>\n            <a mdLine href=\"http://www.google.com\" fxFlex>{{ link.name }}</a>\n          </div>\n          <div>\n            <mat-icon>info</mat-icon>\n          </div>\n        </div>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/dragndrop/dragndrop.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep md-list-item {\n  display: block; }\n\n:host ::ng-deep .gu-mirror {\n  -webkit-transition: opacity 300ms ease-in-out;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 2px;\n  display: block;\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff; }\n\n:host ::ng-deep .mat-list-item {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n:host ::ng-deep .gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n:host ::ng-deep .container .ex-moved {\n  background-color: #e74c3c; }\n\n:host ::ng-deep .container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n:host ::ng-deep .handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n:host ::ng-deep nested-repeat-example .container span {\n  display: block;\n  padding: 8px; }\n"

/***/ }),

/***/ "./src/app/dragndrop/dragndrop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragndropComponent; });
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

var DragndropComponent = /** @class */ (function () {
    function DragndropComponent() {
        this.todos = [{
                finished: true,
                name: 'Learn Angular 2.0',
            }, {
                finished: true,
                name: 'Learn Angular Material 2.0',
            }, {
                finished: false,
                name: 'Build examples',
            }, {
                finished: false,
                name: 'Documentation',
            }, {
                finished: false,
                name: 'Write about your findings',
            }, {
                finished: false,
                name: 'Contribute back to the community',
            },];
        this.links = [{
                name: 'Inbox'
            }, {
                name: 'Outbox'
            }, {
                name: 'Spam'
            }, {
                name: 'Priority'
            }, {
                name: 'Drafts'
            }, {
                name: 'Trash'
            }];
    }
    DragndropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dragndrop',
            template: __webpack_require__("./src/app/dragndrop/dragndrop.component.html"),
            styles: [__webpack_require__("./src/app/dragndrop/dragndrop.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DragndropComponent);
    return DragndropComponent;
}());



/***/ }),

/***/ "./src/app/dragndrop/dragndrop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragndropModule", function() { return DragndropModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dragndrop_routing__ = __webpack_require__("./src/app/dragndrop/dragndrop.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dragndrop_component__ = __webpack_require__("./src/app/dragndrop/dragndrop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DragndropModule = /** @class */ (function () {
    function DragndropModule() {
    }
    DragndropModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__dragndrop_routing__["a" /* DragndropRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dragndrop_component__["a" /* DragndropComponent */]]
        })
    ], DragndropModule);
    return DragndropModule;
}());



/***/ }),

/***/ "./src/app/dragndrop/dragndrop.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragndropRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragndrop_component__ = __webpack_require__("./src/app/dragndrop/dragndrop.component.ts");

var DragndropRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__dragndrop_component__["a" /* DragndropComponent */],
        data: {
            heading: 'Drag and drop',
            css: ''
        }
    }
];


/***/ })

});
//# sourceMappingURL=dragndrop.module.chunk.js.map