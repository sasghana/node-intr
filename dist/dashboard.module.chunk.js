webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fallIn]>\n  <mat-card>\n    <mat-grid-list cols=\"1\" rowHeight=\"100px\">\n      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"3\">\n        <ui-carousel [infinite]=\"true\" [fade]=\"false\" [speed]=\"200\" height=\"300px\" width=\"100%\">\n          <ui-carousel-item>\n            <div style=\"background-image:url('../../assets/images/hero_sas.png')\" class=\"text\">1</div>\n          </ui-carousel-item>\n          <ui-carousel-item>\n            <div style=\"background-image: url('../../assets/images/sas-experience.jpg')\" class=\"text\">2</div>\n          </ui-carousel-item>\n          <ui-carousel-item>\n            <div style=\"background:#3498db\" class=\"text\">3</div>\n          </ui-carousel-item>\n          <ui-carousel-item>\n            <div style=\"background:#f1c40f\" class=\"text\">4</div>\n          </ui-carousel-item>\n          <ui-carousel-item>\n            <div style=\"background:#16a085\" class=\"text\">5</div>\n          </ui-carousel-item>\n          <!--<div class=\"button\">-->\n          <!--Code source-->\n          <!--</div>-->\n        </ui-carousel>\n        <mat-grid-tile-footer>\n          <h3 color=\"white\">All Post </h3>&nbsp;\n          <h3 color=\"white\"> Members </h3>\n          <span fxFlex></span>\n          <h3>More </h3>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-card>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-widget mat-red\">\n        <div mat-card-widget>\n          <div class=\"text-xs-center pl-1 pr-1\">\n            <h4 class=\"font-weight-bold\">Campaigns</h4>\n            <h1 class=\"text-xl font-weight-light\">103</h1>\n            <p class=\"text-md\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-widget mat-indigo\">\n        <div mat-card-widget>\n          <div class=\"text-xs-center pl-1 pr-1\">\n            <h4 class=\"font-weight-bold\">Customers</h4>\n            <h1 class=\"text-xl font-weight-light\">230</h1>\n            <p class=\"text-md\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-widget mat-orange\">\n        <div mat-card-widget>\n          <div class=\"text-xs-center pl-1 pr-1\">\n            <h4 class=\"font-weight-bold\">Queries</h4>\n            <h1 class=\"text-xl font-weight-light\">323</h1>\n            <p class=\"text-md\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-widget mat-green\">\n        <div mat-card-widget>\n          <div class=\"text-xs-center pl-1 pr-1\">\n            <h4 class=\"font-weight-bold\">Opens</h4>\n            <h1 class=\"text-xl font-weight-light\">870</h1>\n            <p class=\"text-md\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card>\n        <div class=\"small-chart mat-green-300 py-2\">\n          <div>\n            <ngx-charts-line-chart\n              class=\"chart-container\"\n              [scheme]=\"colorSchemeSmallChart\"\n              [schemeType]=\"schemeType\"\n              [results]=\"dateDataSmallChartRange\"\n              [legend]=\"showLegend\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"false\"\n              [yAxis]=\"showYAxis\"\n              [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\"\n              [xAxisLabel]=\"xAxisLabel\"\n              [yAxisLabel]=\"yAxisLabel\"\n              [autoScale]=\"autoScale\"\n              [timeline]=\"timeline\"\n              [showGridLines]=\"showGridLines\"\n              [curve]=\"curveSmallChart\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [roundDomains]=\"true\"\n              [tooltipDisabled]=\"true\"\n              (select)=\"select($event)\">\n            </ngx-charts-line-chart>\n          </div>\n        </div>\n        <mat-card-footer class=\"w-100 ma-0 text-xs-center\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"pa-xs\">\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Daily Sales</div>\n              <h3 class=\"my-0\">$ 89.34</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Weekly Sales</div>\n              <h3 class=\"my-0\">$ 498.00</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Monthly Sales</div>\n              <h3 class=\"my-0\">$ 34,903</h3>\n            </div>\n          </div>\n        </mat-card-footer>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card>\n        <div class=\"small-chart mat-brown-300 py-2\">\n          <div>\n            <ngx-charts-bar-vertical\n              class=\"chart-container\"\n              [scheme]=\"colorSchemeSmallChart\"\n              [schemeType]=\"schemeType\"\n              [results]=\"single\"\n              [gradient]=\"false\"\n              [xAxis]=\"false\"\n              [yAxis]=\"showYAxis\"\n              [legend]=\"showLegend\"\n              [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              [xAxisLabel]=\"xAxisLabel\"\n              [yAxisLabel]=\"yAxisLabel\"\n              [showGridLines]=\"showGridLines\"\n              [barPadding]=\"barPadding\"\n              [roundDomains]=\"roundDomains\"\n              (select)=\"select($event)\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\">\n            </ngx-charts-bar-vertical>\n          </div>\n        </div>\n        <mat-card-footer class=\"w-100 ma-0 text-xs-center\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"pa-xs\">\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Daily Sales</div>\n              <h3 class=\"my-0\">$ 89.34</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Weekly Sales</div>\n              <h3 class=\"my-0\">$ 498.00</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Monthly Sales</div>\n              <h3 class=\"my-0\">$ 34,903</h3>\n            </div>\n          </div>\n        </mat-card-footer>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card>\n        <div class=\"small-chart mat-blue-grey-300 py-2\">\n          <div>\n            <ngx-charts-pie-chart\n              class=\"chart-container\"\n              [scheme]=\"colorScheme\"\n              [results]=\"single\"\n              [legend]=\"showLegend\"\n              [explodeSlices]=\"explodeSlices\"\n              [labels]=\"showLabels\"\n              [doughnut]=\"doughnut\"\n              [arcWidth]=\"arcWidth\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [gradient]=\"gradient\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              (select)=\"select($event)\">\n            </ngx-charts-pie-chart>\n          </div>\n        </div>\n        <mat-card-footer class=\"w-100 ma-0 text-xs-center\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"pa-xs\">\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Daily Sales</div>\n              <h3 class=\"my-0\">$ 89.34</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Weekly Sales</div>\n              <h3 class=\"my-0\">$ 498.00</h3>\n            </div>\n            <div fxFlex>\n              <div class=\"text-md mat-text-muted\">Monthly Sales</div>\n              <h3 class=\"my-0\">$ 34,903</h3>\n            </div>\n          </div>\n        </mat-card-footer>\n      </mat-card>\n    </div>\n  </div>\n\n\n  <div fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"column\" fxLayoutWrap=\"wrap\">\n        <div fxFlex=\"100\">\n          <mat-card class=\"card-widget mat-purple\">\n            <div mat-card-widget>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"w-100\">\n                <div>\n                  <h1 class=\"text-xxl mt-0 mb-0\">\n                    <mat-icon class=\"block text-xxl w-auto h-auto\">cloud</mat-icon>\n                  </h1>\n                </div>\n                <div fxFlex class=\"mx-1 text-xs-right\">\n                  <h1 class=\"mt-0 mb-0\">6 &deg;</h1>\n                  <h5 class=\"mt-0 mb-0\">Saturday 2:00 AM</h5>\n                  <p class=\"text-md mt-0 mb-0\">Mostly Sunny</p>\n                </div>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\">\n          <mat-card class=\"card-widget\">\n            <div mat-card-widget>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"w-100\">\n                <div>\n                  <img src=\"assets/images/face1.jpg\" class=\"block radius-circle\" width=\"60\" height=\"60\">\n                </div>\n                <div fxFlex class=\"mx-1 text-xs-right\">\n                  <h1 class=\"mt-0 mb-0\">Envato</h1>\n                  <h5 class=\"mt-0 mb-0\">hello@example.com</h5>\n                  <p class=\"mat-text-muted text-md mt-0 mb-0\">Administrator</p>\n                </div>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex=\"100\">\n          <mat-card class=\"card-widget mat-yellow\">\n            <div mat-card-widget>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"w-100\">\n                <div>\n                  <mat-icon class=\"block text-xxl w-auto h-auto\">filter_hdr</mat-icon>\n                </div>\n                <div fxFlex class=\"mx-1 text-xs-right\">\n                  <h2 class=\"mt-0 mb-0\">Warning!</h2>\n                  <h5 class=\"mt-0 mb-0\">Error Code 404</h5>\n                  <p class=\"mat-text-muted text-md mt-0 mb-0\">Item Not Found</p>\n                </div>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n  \n    </div>\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <mat-card>\n        <mat-card-title>Newsfeed</mat-card-title>\n        <mat-card-subtitle>Stories posted today</mat-card-subtitle>\n        <hr>\n        <mat-list>\n          <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n            <mat-list-item>\n              <img mat-list-avatar src=\"{{item.photo}}\" alt=\"\">\n              <h3 matLine> {{item.from}} </h3>\n              <p matLine> {{item.subject}} - {{item.message}} </p>\n            </mat-list-item>\n          </ng-template>\n        </mat-list>\n      </mat-card>\n    </div>\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n      <mat-card>\n        <div class=\"card-image-header bg-image bg-image-signup\" style=\"height: 213px;\"></div>\n        <mat-card-content class=\"text-xs-center\">\n          <div fxLayout=\"row\"  fxLayoutWrap=\"wrap\" class=\"text-uppercase\">\n            <div fxFlex=\"33.33%\">\n              <h2 class=\"mt-0 mb-0\">24</h2>\n              <p class=\"mt-0 mb-0 text-md mat-text-muted\">Comments</p>\n            </div>\n            <div fxFlex=\"33.33%\">\n              <h2 class=\"mt-0 mb-0\">45</h2>\n              <p class=\"mt-0 mb-0 text-md mat-text-muted\">Likes</p>\n            </div>\n            <div fxFlex=\"33.33%\">\n              <h2 class=\"mt-0 mb-0\">984</h2>\n              <p class=\"mt-0 mb-0 text-md mat-text-muted\">Shares</p>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n  \n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"column\" fxLayoutWrap=\"wrap\">\n        <div>\n          <mat-card>\n            <mat-card-header>\n              <img matCardAvatar src=\"assets/images/avatar.jpg\">\n              <mat-card-subtitle>Yesterday</mat-card-subtitle>\n              <mat-card-title>Gerald Morris</mat-card-title>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/images/material/6.jpg\">\n            <mat-card-content>\n              <button mat-fab mat-fab-card-float class=\"mr-1\" color=\"warn\"><mat-icon>share</mat-icon></button>\n              <p class=\"ma-0\">Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp.</p>\n            </mat-card-content>\n            <hr>\n            <mat-card-actions>\n              <div fxLayout=\"row\">\n                <button mat-icon-button>\n                  <mat-icon>share</mat-icon>\n                </button>\n                <button mat-icon-button>\n                  <mat-icon>favorite</mat-icon>\n                </button>\n                <span fxFlex></span>\n                <button mat-button>More info</button>\n                <button mat-button>Download</button>\n              </div>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n        <div>\n          <mat-card class=\"overflow-hidden\">\n            <mat-card-title>\n              <span>User Uploaded Images</span>\n            </mat-card-title>\n            <mat-grid-list cols=\"4\">\n              <mat-grid-tile *ngFor=\"let id of images\" rowHeight=\"4:3\">\n                <img src=\"assets/images/unsplash/{{ id }}.jpg\" alt=\"Card image cap\"/>\n                <mat-grid-tile-footer>\n                  <span>Gallery image {{ id }}</span>\n                </mat-grid-tile-footer>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"column\" fxLayoutWrap=\"wrap\">\n        <div fxFlex>\n          <mat-card class=\"overflow-hidden\">\n            <agm-map mat-card-image [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"false\"></agm-map>\n          </mat-card>\n        </div>\n        <div fxFlex>\n          <mat-card>\n            <mat-card-content class=\"pb-0\">\n              <div fxLayout=\"row\" class=\"mb-1\">\n                <div fxFlex>\n                  <h2 class=\"mt-0 mb-0\">London, UK</h2>\n                  <h4 class=\"mt-0 mb-0\">Saturday 2:00 AM</h4>\n                  <p class=\"mat-text-muted mt-0 mb-0\">Mostly Sunny</p>\n                </div>\n                <span fxFlex></span>\n                <div fxFlex class=\"text-xs-right\">\n                  <h1 class=\"text-xxl mt-0 mb-0\">\n                    <span>6<sup>&deg;</sup></span>\n                  </h1>\n                </div>\n              </div>\n              <div fxLayout=\"row\" layout-align=\"center\" class=\"mb-1 text-md\">\n                <div class=\"pr-1\" fxFlex>\n                  <div fxLayout=\"row\">\n                    <span>Pressure</span>\n                    <span fxFlex></span>\n                    <span>30.09</span>\n                    <span>hPa</span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Visibility</span>\n                    <span fxFlex></span>\n                    <span>11.27</span>\n                    <span>km</span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Light</span>\n                    <span fxFlex></span>\n                    <span>0.00</span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Light</span>\n                    <span fxFlex></span>\n                    <span>16</span>\n                    <span>C</span>\n                  </div>\n                </div>\n                <div class=\"pl-1\" fxFlex>\n                  <div fxLayout=\"row\">\n                    <span>Humidity</span>\n                    <span fxFlex></span>\n                    <span>94</span>\n                    <span>%</span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Precp.</span>\n                    <span fxFlex></span>\n                    <span></span>\n                    <span>mm</span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Snow Depth</span>\n                    <span fxFlex></span>\n                    <span></span>\n                  </div>\n  \n                  <div fxLayout=\"row\">\n                    <span>Wind Gust</span>\n                    <span fxFlex></span>\n                    <span></span>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n            <mat-card-content class=\"mat-indigo\">\n              <div fxLayout=\"row\" class=\"text-xs-center\">\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>call_received</mat-icon></div>\n                  <div class=\"text-md\">MON</div>\n                  <strong class=\"degree-value\">10</strong>\n                </div>\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>call_received</mat-icon></div>\n                  <div class=\"text-md\">TUE</div>\n                  <strong class=\"degree-value\">8</strong>\n                </div>\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>call_made</mat-icon></div>\n                  <div class=\"text-md\">WED</div>\n                  <strong class=\"degree-value\">6</strong>\n                </div>\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>arrow_upward</mat-icon></div>\n                  <div class=\"text-md\">THU</div>\n                  <strong class=\"degree-value\">6</strong>\n                </div>\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>call_received</mat-icon></div>\n                  <div class=\"text-md\">FRI</div>\n                  <strong class=\"degree-value\">9</strong>\n                </div>\n                <div fxFlex>\n                  <div class=\"text-md\">6 km/h</div>\n                  <div class=\"text-md\"><mat-icon>arrow_forward</mat-icon></div>\n                  <div class=\"text-md\">SAT</div>\n                  <strong class=\"degree-value\">8</strong>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .sebm-google-map-container,\n:host ::ng-deep .chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n\n:host ::ng-deep .ngx-charts .gridline-path {\n  stroke: rgba(0, 0, 0, 0.096);\n  stroke-width: 0.5; }\n\n:host ::ng-deep .small-chart .chart-container {\n  height: 200px; }\n\n:host ::ng-deep .small-chart .ngx-charts text {\n  fill: #ffffff !important; }\n\n:host ::ng-deep .mat-column-position {\n  max-width: 40px; }\n\n:host ::ng-deep .mat-column-value {\n  max-width: 100px;\n  text-align: right; }\n\n:host ::ng-deep mat-grid-tile {\n  background-image: url(\"/assets/images/sas-experience.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\nui-carousel {\n  display: block;\n  margin: 0 auto; }\n\n.text {\n  text-align: center;\n  line-height: 300px;\n  font-size: 40px;\n  color: #fff;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.button {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 35px;\n  width: 120px;\n  line-height: 35px;\n  color: gray;\n  background: #fff;\n  text-align: center;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  position: absolute;\n  z-index: 5;\n  left: 50%;\n  bottom: 50px;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transition: all .3s;\n  -webkit-transition: all .3s;\n  -moz-transition: all .3s;\n  -o-transition: all .3s;\n  -ms-transition: all .3s; }\n\n.button:hover {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); }\n\n.button img {\n  height: 15px;\n  margin: 10px 5px;\n  margin-right: 15px;\n  float: right;\n  opacity: .7; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_data__ = __webpack_require__("./src/app/charts/data.ts");
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






var ELEMENT_DATA = [
    {
        'position': 1,
        'country': 'Bouvet Island',
        'value': 686
    },
    {
        'position': 2,
        'country': 'Vanuatu',
        'value': 718
    },
    {
        'position': 3,
        'country': 'South Africa',
        'value': 342
    },
    {
        'position': 4,
        'country': 'Macedonia',
        'value': 909
    },
    {
        'position': 5,
        'country': 'Afghanistan',
        'value': 960
    }
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'right';
        this.verticalPosition = 'bottom';
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 11;
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.roundEdges = false;
        // line interpolation
        this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBundle"].beta(1);
        this.curveSmallChart = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"];
        this.colorScheme = {
            domain: __WEBPACK_IMPORTED_MODULE_3__core__["f" /* COLORS */]
        };
        this.colorSchemeSmallChart = {
            domain: __WEBPACK_IMPORTED_MODULE_3__core__["g" /* COLORSINVERT */]
        };
        this.schemeType = 'ordinal';
        this.rangeFillOpacity = 0.15;
        // line, area
        this.autoScale = true;
        this.timeline = false;
        // pie
        this.showLabels = false;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        // newsfeed
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
            },];
        this.displayedColumns = ['position', 'country', 'value'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTableDataSource */](ELEMENT_DATA);
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_4__charts_data__["e" /* single */],
            multi: __WEBPACK_IMPORTED_MODULE_4__charts_data__["d" /* multi */]
        });
        this.dateData = Object(__WEBPACK_IMPORTED_MODULE_4__charts_data__["b" /* generateData */])(2, true, 8);
        this.dateDataSmallChart = Object(__WEBPACK_IMPORTED_MODULE_4__charts_data__["b" /* generateData */])(1, false, 5);
        this.dateDataWithRange = Object(__WEBPACK_IMPORTED_MODULE_4__charts_data__["b" /* generateData */])(2, true);
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBarConfig */]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = 5000;
        this.snackBar.open('Welcome to SAS Finance Group, Demo Intranet app', '', config);
    }
    Object.defineProperty(DashboardComponent.prototype, "dateDataWithOrWithoutRange", {
        get: function () {
            if (this.range) {
                return this.dateDataWithRange;
            }
            else {
                return this.dateData;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "dateDataSmallChartRange", {
        get: function () {
            return this.dateDataSmallChart;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    DashboardComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["moveIn"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["fallIn"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["fadeInOut"])(), Object(__WEBPACK_IMPORTED_MODULE_5_angular_router_animations__["growShrink"])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSnackBar */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_routing__ = __webpack_require__("./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ui_carousel__ = __webpack_require__("./node_modules/ui-carousel/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ui_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ui_carousel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__dashboard_routing__["a" /* DashboardRoutes */]),
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
                __WEBPACK_IMPORTED_MODULE_9_ui_carousel__["UICarouselModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */], data: { heading: 'Dashboard', css: '' }
    }];


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map