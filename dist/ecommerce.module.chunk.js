webpackJsonp(["ecommerce.module"],{

/***/ "./src/app/ecommerce/ecommerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ecommerce_routing__ = __webpack_require__("./src/app/ecommerce/ecommerce.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_component__ = __webpack_require__("./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_compact_products_compact_component__ = __webpack_require__("./src/app/ecommerce/products-compact/products-compact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__ = __webpack_require__("./src/app/ecommerce/product-detail/product-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__ecommerce_routing__["a" /* EcommerceRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__products_compact_products_compact_component__["a" /* ProductsCompactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
            ]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecommerce.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_products_component__ = __webpack_require__("./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_compact_products_compact_component__ = __webpack_require__("./src/app/ecommerce/products-compact/products-compact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__ = __webpack_require__("./src/app/ecommerce/product-detail/product-detail.component.ts");



var EcommerceRoutes = [
    {
        path: '',
        children: [{
                path: 'products',
                component: __WEBPACK_IMPORTED_MODULE_0__products_products_component__["a" /* ProductsComponent */],
                data: {
                    heading: 'Products',
                    css: 'view-no-padding'
                }
            }, {
                path: 'compact',
                component: __WEBPACK_IMPORTED_MODULE_1__products_compact_products_compact_component__["a" /* ProductsCompactComponent */],
                data: {
                    heading: 'Compact listing',
                    css: 'view-no-padding'
                }
            }, {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                data: {
                    heading: 'Detail product',
                    css: ''
                }
            }]
    }
];


/***/ }),

/***/ "./src/app/ecommerce/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\" stretch\" class=\"mb-1\">\n    <div fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <div class=\"card-image-header product-image-header\" style=\"background-image: url(assets/images/unsplash/fashion3.jpg); background-position: top;\"></div>\n    </div>\n    <div fxFlex.gt-md=\"60\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"pa-1\">\n      <div class=\"product-detail-header\">\n        <h1 class=\"ma-0 pa-0\"><strong>{{ product.name }}</strong></h1>\n        <h4 class=\"mat-text-muted ma-0 pa-0\">{{ product.description }}</h4>\n\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n          <span fxLayout=\"row\">\n            <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n          </span>\n          <span class=\"px-1\">({{ product.rating }}) Votes</span>\n          <a href=\"javascript:;\">{{ product.rating }} customer reviews</a>\n        </div>\n      </div>\n      <h2 class=\"mat-text-primary mt-1\">\n        <span> $ {{ product.price }}</span>\n        <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n        <span class=\"text-xs mat-text-muted\">*excluding tax</span>\n      </h2>\n\n      <div class=\"description\">\n        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"my-2\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"none center\">\n          <p>Size:</p>\n          <div class=\"mx-1\">\n            <mat-button-toggle-group>\n              <mat-button-toggle>S</mat-button-toggle>\n              <mat-button-toggle>M</mat-button-toggle>\n              <mat-button-toggle>L</mat-button-toggle>\n            </mat-button-toggle-group>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"none center\">\n          <p>Color:</p>\n          <div class=\"mx-1\">\n            <mat-button-toggle-group>\n              <mat-button-toggle>R</mat-button-toggle>\n              <mat-button-toggle>G</mat-button-toggle>\n              <mat-button-toggle>B</mat-button-toggle>\n            </mat-button-toggle-group>\n          </div>\n        </div>\n      </div>\n\n      <button mat-raised-button color=\"primary\" class=\"mr-1\">Add to cart</button>\n      <button mat-raised-button color=\"accent\" class=\"mr-1\">Add to my wishlist</button>\n    </div>\n  </div>\n\n  <mat-tab-group [selectedIndex]=\"2\">\n    <mat-tab>\n      <ng-template matTabLabel>Description</ng-template>\n      <mat-card-content>\n        <p><strong>Donec sed odio dui.</strong></p>\n        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n        <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n      </mat-card-content>\n    </mat-tab>\n    <mat-tab>\n      <ng-template matTabLabel>Specifications</ng-template>\n      <mat-card-content>\n        <div fxLayout=\"column\" layout-align=\"center\">\n          <div fxLayout=\"row\" class=\"py-1\">\n            <span class=\"mat-text-muted\">Processor:&nbsp;</span>          \n            <span>2.0GHz dual-core Intel Core i5 processor</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">CPU:&nbsp;</span>\n            <span>Turbo Boost up to 3.1GHz</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">RAM:&nbsp;</span>\n            <span>8GB 1866MHz memory</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Hard Drive:&nbsp;</span>\n            <span>256GB PCIe-based SSD1</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Graphics Chip:&nbsp;</span>\n            <span>Intel Iris Graphics 540</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Ports:&nbsp;</span>\n            <span>Two Thunderbolt 3 ports</span>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-tab>\n    <mat-tab>\n      <ng-template matTabLabel>Customer Reviews</ng-template>\n      <mat-list>\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n          <mat-list-item>\n            <img mat-list-avatar src=\"{{item.photo}}\" alt=\"\">\n            <h3 matLine> {{item.from}} </h3>\n            <div matLine>\n              <span fxLayout=\"row\">\n                <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= item.rating\" class=\"mat-text-muted\">&#9733;</span>\n              </span>\n            </div>\n            <p matLine> {{item.subject}} - {{item.message}} </p>\n          </mat-list-item>\n        </ng-template>\n      </mat-list>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/ecommerce/product-detail/product-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  -webkit-box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  -webkit-box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  -webkit-box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  -webkit-box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  -webkit-box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  -webkit-box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 13px/28px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 13px/24px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font-size: 10.79px;\n  font-weight: 400;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font-size: 8.71px;\n  font-weight: 400;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 13px/24px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 13px/20px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 13px/20px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-card {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 13px; }\n.mat-checkbox {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-header-cell {\n  font-size: 13px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 13px; }\n.mat-calendar {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 13px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-expansion-panel-header {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 13px/20px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-form-field {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00103px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00103px);\n  -ms-transform: translateY(-1.28122em) scale(0.75);\n  width: 133.33336333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00104px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00104px);\n  -ms-transform: translateY(-1.28121em) scale(0.75);\n  width: 133.33337333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00105px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00105px);\n  -ms-transform: translateY(-1.2812em) scale(0.75);\n  width: 133.33338333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 13px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 13px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px; }\n.mat-radio-button {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-select {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 13px/20px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-step-label {\n  font-size: 13px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 13px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-list-item {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-list-option {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 13px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 13px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 13px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 13px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 13px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 13px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 13px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 13px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-option {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px; }\n.mat-optgroup-label {\n  font: 500 13px/24px -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif; }\n.mat-simple-snackbar {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;\n  font-size: 13px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n:host ::ng-deep .product-image-header {\n  position: relative;\n  top: -5px;\n  left: -5px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  height: 100%; }\n@media (max-width: 959px) {\n    :host ::ng-deep .product-image-header {\n      top: 0;\n      left: 0;\n      border-radius: 2px 2px 0 0;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      height: 400px; } }\n"

/***/ }),

/***/ "./src/app/ecommerce/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
        this.stars = [1, 2, 3, 4, 5];
        this.product = {
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            rating: Math.floor(Math.random() * 6),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        };
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }];
    }
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/ecommerce/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/ecommerce/product-detail/product-detail.component.scss")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/products-compact/products-compact.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"background-none shadow-none\">\n  <mat-sidenav #productsnav [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"pa-0 ma-0\">\n    <div class=\"pl-xs pr-xs pb-xs\">\n      <h3 class=\"mb-xs\">Price</h3>\n      <mat-slider value=\"43\"></mat-slider>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3 class=\"mt-xs\">Brand</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Apple</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Microsoft</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Samsung</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>HTC</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Sony</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Huawei</mat-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3>Screen Size</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>16 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>32 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>64 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>128 GB</mat-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3>OS</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Android</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>iOS</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Windows</mat-checkbox>\n      </div>\n    </div>\n\n    <div class=\"pa-xs\">\n      <button mat-raised-button color=\"primary\">Filter</button>\n    </div>\n\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\" fxHide=\"false\" fxHide.gt-sm>\n    <button (click)=\"productsnav.toggle()\" mat-icon-button>\n      <mat-icon>short_text</mat-icon>\n    </button>\n    <span class=\"mr-1 ml-1\">Filter</span>\n  </mat-toolbar>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-md=\"33.33%\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let product of products\">\n      <mat-card>\n        <div fxLayout=\"row\">\n          <div class=\"media-grid compact bg-cover\" [ngStyle]=\"{'background-image': 'url(../../assets/images/unsplash/'+ product.id +'.jpg)'}\" fxFlex=\"40\">\n            <figure>\n              <div class=\"product-badge\" *ngIf=\"product.status === 'sale'\"><span>Sale</span></div>\n            </figure>\n          </div>\n          <div class=\"pa-1\" fxFlex>\n            <div fxLayout=\"column\">\n              <span fxLayout=\"row\">\n                <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n              </span>\n              <div>\n                <p class=\"ma-0\">{{ product.name }}</p>\n                <p class=\"ma-0 pa-0 text-md\">{{ product.description }}</p>\n              </div>\n\n              <div class=\"mat-text-primary text-base\">\n                <span> $ {{ product.price }}</span>\n                <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/ecommerce/products-compact/products-compact.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  display: block; }\n  :host ::ng-deep mat-sidenav {\n    width: 250px; }\n  :host ::ng-deep .mat-drawer-container {\n    overflow: visible; }\n  :host ::ng-deep .mat-drawer-container .mat-sidenav {\n      overflow: visible; }\n  :host ::ng-deep .mat-drawer-content {\n    padding: 0; }\n  @media (min-width: 959px) {\n    :host ::ng-deep .mat-drawer-side {\n      background-color: rgba(0, 0, 0, 0.04);\n      border-left: 1px solid rgba(0, 0, 0, 0.04);\n      border-right: 1px solid rgba(0, 0, 0, 0.04);\n      -webkit-box-shadow: none !important;\n              box-shadow: none !important; } }\n  :host ::ng-deep .mat-slider-horizontal {\n    width: 100%;\n    min-width: 1px; }\n"

/***/ }),

/***/ "./src/app/ecommerce/products-compact/products-compact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCompactComponent; });
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

var SMALL_WIDTH_BREAKPOINT = 960;
var ProductsCompactComponent = /** @class */ (function () {
    function ProductsCompactComponent() {
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.products = [];
        this.num = 1;
        this.stars = [1, 2, 3, 4, 5];
        for (this.num; this.num <= 21; this.num += 1) {
            this.addProducts(this.num);
        }
    }
    ProductsCompactComponent.prototype.addProducts = function (i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            rating: Math.floor(Math.random() * 6),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        });
    };
    ProductsCompactComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    ProductsCompactComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    ProductsCompactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-compact',
            template: __webpack_require__("./src/app/ecommerce/products-compact/products-compact.component.html"),
            styles: [__webpack_require__("./src/app/ecommerce/products-compact/products-compact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsCompactComponent);
    return ProductsCompactComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"background-none shadow-none\">\n  <mat-sidenav #productsnav [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"pa-0 ma-0\">\n    <div class=\"pl-xs pr-xs pb-xs\">\n      <h3 class=\"mb-xs\">Price</h3>\n      <mat-slider value=\"43\"></mat-slider>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3 class=\"mt-xs\">Brand</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Apple</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Microsoft</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Samsung</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>HTC</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Sony</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Huawei</mat-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3>Screen Size</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>16 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>32 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>64 GB</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>128 GB</mat-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-xs\">\n      <h3>OS</h3>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Android</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>iOS</mat-checkbox>\n      </div>\n      <div class=\"pb-xs\">\n        <mat-checkbox>Windows</mat-checkbox>\n      </div>\n    </div>\n\n    <div class=\"pa-xs\">\n      <button mat-raised-button color=\"primary\">Filter</button>\n    </div>\n\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\" fxHide=\"false\" fxHide.gt-sm>\n    <button (click)=\"productsnav.toggle()\" mat-icon-button>\n      <mat-icon>short_text</mat-icon>\n    </button>\n    <span class=\"mr-1 ml-1\">Filter</span>\n  </mat-toolbar>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"33.3333%\" fxFlex=\"100\" *ngFor=\"let product of products\">\n      <mat-card>\n        <div class=\"media-grid\">\n          <figure>\n            <div class=\"product-badge\" *ngIf=\"product.status === 'sale'\"><span>Sale</span></div>\n            <img src=\"assets/images/unsplash/{{ product.id }}.jpg\">\n            <figcaption>\n              <p>\n                <a href=\"javascript:;\" matTooltip=\"Add to cart\" matTooltipPosition=\"left\">\n                  <mat-icon>shopping_basket</mat-icon>\n                </a>\n                <a href=\"javascript:;\" matTooltip=\"Add to favorites\" matTooltipPosition=\"left\">\n                  <mat-icon>favorite</mat-icon>\n                </a>\n                <a href=\"javascript:;\" matTooltip=\"Share\" matTooltipPosition=\"left\">\n                  <mat-icon>share</mat-icon>\n                </a>\n                <a href=\"javascript:;\" matTooltip=\"Bookmark\" matTooltipPosition=\"left\">\n                  <mat-icon>bookmark</mat-icon>\n                </a>\n              </p>\n            </figcaption>\n          </figure>\n        </div>\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div fxFlex>\n              <p class=\"ma-0\">{{ product.name }}</p>\n              <p class=\"ma-0 pa-0 text-md\">{{ product.description }}</p>\n            </div>\n            <div class=\"mat-text-primary text-base\">\n              <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n              <span> $ {{ product.price }}</span>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  display: block; }\n  :host ::ng-deep mat-sidenav {\n    width: 250px; }\n  :host ::ng-deep .mat-drawer-container {\n    overflow: visible; }\n  :host ::ng-deep .mat-drawer-container .mat-sidenav {\n      overflow: visible; }\n  :host ::ng-deep .mat-drawer-content {\n    padding: 0; }\n  @media (min-width: 959px) {\n    :host ::ng-deep .mat-drawer-side {\n      background-color: rgba(0, 0, 0, 0.04);\n      border-left: 1px solid rgba(0, 0, 0, 0.04);\n      border-right: 1px solid rgba(0, 0, 0, 0.04);\n      -webkit-box-shadow: none !important;\n              box-shadow: none !important; } }\n  :host ::ng-deep .mat-slider-horizontal {\n    width: 100%;\n    min-width: 1px; }\n"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
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

var SMALL_WIDTH_BREAKPOINT = 960;
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.products = [];
        this.num = 1;
        for (this.num; this.num <= 20; this.num += 1) {
            this.addProducts(this.num);
        }
    }
    ProductsComponent.prototype.addProducts = function (i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        });
    };
    ProductsComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    ProductsComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/ecommerce/products/products.component.html"),
            styles: [__webpack_require__("./src/app/ecommerce/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

});
//# sourceMappingURL=ecommerce.module.chunk.js.map