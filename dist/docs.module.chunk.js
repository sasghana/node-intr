webpackJsonp(["docs.module"],{

/***/ "./src/app/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel #overview [expanded]=\"step === 0\">\n    <mat-expansion-panel-header>Overview</mat-expansion-panel-header>\n    <div>\n      <p>\n        This documentation is to help you understand the template's structure. Please go through the documentation carefully to understand how this template is made and how to edit this properly. Basic HTML, CSS(SASS) and JS(Typescript) knowledge is required to customize this template.\n      </p>\n      <p>\n        If you have any questions that are beyond the scope of this help file, please feel free to get in touch.\n      </p>\n      <div class=\"mat-blue-A100 mat-text-white mb-xs pa-xs\">\n        Support requests can go through the form\n        <a href=\"http://themeforest.net/user/iamnyasha/?ref=iamnyasha\" target=\"_blank\">\n          on my ThemeForest profile page\n        </a>\n        or via email.\n      </div>\n\n      <div class=\"mat-red-A100 mat-text-white mb-xs pa-xs\">\n        You should have some knowledge of teminal/command line, NPM, SCSS and Typescript inorder to use this template.<br/> This is also an angular template, static files are not included and neither will this item work with Wordpress.\n      </div>\n\n      <p>\n        Support for my items includes:\n      </p>\n      <ul>\n        <li><a>\n          Responding to questions or problems regarding the item and its features\n        </a></li>\n        <li><a>\n          Fixing bugs and reported issues\n        </a></li>\n        <li><a>\n          Providing updates to ensure compatibility with new software versions\n        </a></li>\n      </ul>\n      <p>\n        Item support does not include:\n      </p>\n      <ul>\n        <li><a>\n          Customization and installation services\n        </a></li>\n        <li><a>\n          Support for third party software and plug-ins\n        </a></li>\n      </ul>\n      <p>\n        Before seeking support please:\n      </p>\n      <ul>\n        <li><a>\n          Make sure your question is a valid item Issue and not a customization request.\n        </a></li>\n        <li><a>\n          Make sure you have read through the documentation and any related guides before asking support on how to accomplish a task.\n        </a></li>\n        <li><a>\n          Make sure to double check the item FAQs.\n        </a></li>\n        <li><a>\n          If you have customized your item and now have an issue, back-track to make sure you didn't make a mistake. If you have made changes and can't find the issue, please provide us with your changelog.\n        </a></li>\n        <li><a>\n          Most of the time we find that the solution to people's issues can be solved with a simple \"Google Search\". You might want to try that before seeking support. You might be able to fix the issue yourself much quicker than we can respond to your request.\n        </a></li>\n        <li><a>\n          Make sure to state the name of the item you are having issues with when requesting support via ThemeForest.\n        </a></li>\n      </ul>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel #what>\n    <mat-expansion-panel-header>What is it</mat-expansion-panel-header>\n    <div ngbPanelContent>\n      <p>\n        Node is a creative material 2 design admin template built for Angular. It comes out of the box with AoT and lazy loading support, Language translation , RTL support and light and dark colour schemes. With this, you get all you need to start working on your SAAS, CRM, CMS or dashboard based project.\n      </p>\n      <p>Key features:</p>\n      <ul>\n        <li>Angular 5 and beyond</li>\n        <li>angular-cli</li>\n        <li>LTR and RTL support</li>\n        <li>Clean design</li>\n        <li>Color themes</li>\n        <li>i18n translation</li>\n      </ul>\n      <p>\n        Once you've purchased Node please consider giving a 5 star rating, it helps in pushing out more updates and adding a lot more features.\n      </p>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel #started>\n    <mat-expansion-panel-header>Getting started</mat-expansion-panel-header>\n    <div ngbPanelContent>\n      <p>This template is built with angular-cli and requires Node 6.9.0+ and NPM 3+ to be installed.</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Installing the prerequisites</strong></p>\n      <p><strong>Node.js and NPM:</strong> You can download Node.js from <a href=\"https://nodejs.org\">https://nodejs.org</a>. NPM comes bundled with Node.js</p>\n\n      <p><strong>angular-cli:</strong> You can install angular-cli by executing from your terminal <b>npm install -g @angular/cli</b>. More details can be found here <a href=\"https://github.com/angular/angular-cli\">https://github.com/angular/angular-cli</a> </p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Installing the npm packages</strong></p>\n      <p>Before proceding you'll need to install packages. You can do this by running <strong>npm install</strong> from the root of your project in your command line to install all the necessary dependencies.</p>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel #cmd>\n    <mat-expansion-panel-header>Commands</mat-expansion-panel-header>\n    <div ngbPanelContent>\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Development server</strong></p>\n      <p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Code scaffolding</strong></p>\n      <p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive/pipe/service/class</code>.</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Building</strong></p>\n      <p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build. Use <code>--aot</code> flag for a AoT build</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Further help</strong></p>\n      <p>To get more help on the <code>angular-cli</code> use <code>ng --help</code> or go check out <a href=\"https://github.com/angular/angular-cli\">https://github.com/angular/angular-cli</a>.</p>\n    </div>\n  </mat-expansion-panel>\n  <mat-expansion-panel #helpers>\n    <mat-expansion-panel-header>Helpers</mat-expansion-panel-header>\n    <div ngbPanelContent>\n      <p>\n        These are all the available helper classes used in the template. Use these alongside the utility classess provided by bootstrap.\n      </p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Helper classes</strong></p>\n      <p>These are all the available helper classes used in the template</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>General</strong></p>\n      <ul>\n        <li>\n          <code>.radius-none</code> (no round corners)\n        </li>\n        <li>\n          <code>.radius-round</code> (border corners based on $border-radius-base)\n        </li>\n        <li>\n          <code>.radius-circle</code> (circle radius corners)\n        </li>\n        <li>\n          <code>.overflow-visible</code>\n        </li>\n        <li>\n          <code>.overflow-hidden</code>\n        </li>\n        <li>\n          <code>.overflow-auto</code>\n        </li>\n        <li>\n          <code>.block</code> (display block)\n        </li>\n        <li>\n          <code>.button-block</code>\n        </li>\n        <li>\n          <code>.inline-block</code>\n        </li>\n        <li>\n          <code>.center-block</code>\n        </li>\n        <li>\n          <code>.relative</code> (position relative)\n        </li>\n        <li>\n          <code>.fixed</code>\n        </li>\n        <li>\n          <code>.absolute</code>\n        </li>\n        <li>\n          <code>.shadow-none</code>\n        </li>\n        <li>\n          <code>.border-none</code>\n        </li>\n        <li>\n          <code>.background-none</code>\n        </li>\n      </ul>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Background colors (Based on material palette)</strong></p>\n      <p>Background colors are named using the format: md-&#123;color&#125;-&#123;shade&#125;</p>\n\n      <p><b>Where color is one of:</b> red, pink , purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orage, brown, grey, blue-grey</p>\n      <p><b>Where shade is one of:</b> 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400, A700</p>\n      <p>e.g md-red-500</p>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Spacing</strong></p>\n      <p>Spacing classes are named using the format: &#123;property&#125;&#123;sides&#125;-&#123;size&#125;</p>\n      <p><b>Where property is one of:</b></p>\n      <ul class=\"\">\n        <li>m - for classes that set margin</li>\n        <li>p - for classes that set padding</li>\n      </ul>\n      <p><b>Where sides is one of:</b></p>\n      <ul class=\"\">\n        <li><code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>\n        <li><code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>\n        <li><code>l</code> - for classes that set <code>margin-left</code> or <code>padding-left</code></li>\n        <li><code>r</code> - for classes that set <code>margin-right</code> or <code>padding-right</code></li>\n        <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>\n        <li><code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>\n        <li><code>a</code> - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>\n      </ul>\n      <p><b>Where size is one of:</b></p>\n      <ul class=\"\">\n        <li><code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code></li>\n        <li><code>1</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer-x</code> or <code>$spacer-y</code></li>\n        <li><code>2</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer-x * 1.5</code> or <code>$spacer-y * 1.5</code></li>\n        <li><code>3</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer-x * 3</code> or <code>$spacer-y * 3</code></li>\n      </ul>\n\n      <p class=\"text-uppercase mt-3 mb-1\"><strong>Text</strong></p>\n      <ul class=\"\">\n        <li>\n          <code>.text-justify</code>\n        </li>\n        <li>\n          <code>.text-nowrap</code>\n        </li>\n        <li>\n          <code>.text-truncate</code>\n        </li>\n        <li>\n          <code>.text-&#123;xs, sm, md, lg&#125;-&#123;left, center, right&#125;</code>\n        </li>\n        <li>\n          <code>.text-lowercase</code>\n        </li>\n        <li>\n          <code>.text-uppercase</code>\n        </li>\n        <li>\n          <code>.text-capitalize</code>\n        </li>\n        <li>\n          <code>.text-xs</code>\n        </li>\n        <li>\n          <code>.text-sm</code>\n        </li>\n        <li>\n          <code>.text-md</code>\n        </li>\n        <li>\n          <code>.text-lg</code>\n        </li>\n        <li>\n          <code>.text-xl</code>\n        </li>\n        <li>\n          <code>.text-xxl</code>\n        </li>\n        <li>\n          <code>.text-weight-normal</code>\n        </li>\n        <li>\n          <code>.text-weight-bold</code>\n        </li>\n        <li>\n          <code>.text-italic</code>\n        </li>\n        <li>\n          <code>.text-hide</code>\n        </li>\n      </ul>\n    </div>\n\n  </mat-expansion-panel>\n  <mat-expansion-panel #extra>\n    <mat-expansion-panel-header>Third party components</mat-expansion-panel-header>\n    <div ngbPanelContent>\n      <p>The following is a list of resources, plugins and other assets used in creating this template. Follow the links for more information on how you can use them.</p>\n      <ul>\n        <li>\n          <a href=\"https://github.com/angular/angular\">One framework. Mobile & desktop.</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/angular/flex-layout\">Angular component Layout engine; using flexbox-2016 css</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/angular/material2\">Material Design components for Angular</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/mattlewis92/angular-calendar\">Angular calendar - A flexible calendar component for angular 2.0+ that can display events on a month, week or day view.</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/swimlane/angular2-data-table\">A feature-rich yet lightweight data-table crafted for Angular2</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/SebastianM/angular2-google-maps\">Angular components for Google Maps</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/500tech/angular2-tree-component\">A simple yet powerful tree component for Angular2</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/valor-software/ng2-dragula\">Simple drag and drop with dragula</a>\n        </li>\n        <li>\n          <a href=\"http://leafletjs.com/\">An open-source JavaScript library for mobile-friendly interactive maps</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/swimlane/ngx-charts\">Declarative Charting Framework for Angular2 and beyond!</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/valor-software/ng2-file-upload\">Easy to use Angular2 components for files upload</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/ngx-translate/core\">The internationalization (i18n) library for Angular </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/yuyang041060120/ng2-validation\">angular2 validation</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/udos86/ng-dynamic-forms\">Rapid form development library for Angular</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/Asymmetrik/ngx-leaflet\">Core Leaflet package for Angular.io</a>\n        </li>\n        <li>\n          <a href=\"https://github.com/aitboudad/ngx-loading-bar\">Automatic page loading / progress bar for Angular 2</a>\n        </li>\n      </ul>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/docs/docs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/docs/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
        this.step = 0;
    }
    DocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-docs',
            template: __webpack_require__("./src/app/docs/docs.component.html"),
            styles: [__webpack_require__("./src/app/docs/docs.component.scss")]
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/docs/docs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_routing__ = __webpack_require__("./src/app/docs/docs.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_component__ = __webpack_require__("./src/app/docs/docs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DocsModule = /** @class */ (function () {
    function DocsModule() {
    }
    DocsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__docs_routing__["a" /* DocsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatExpansionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__docs_component__["a" /* DocsComponent */]
            ]
        })
    ], DocsModule);
    return DocsModule;
}());



/***/ }),

/***/ "./src/app/docs/docs.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docs_component__ = __webpack_require__("./src/app/docs/docs.component.ts");

var DocsRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__docs_component__["a" /* DocsComponent */], data: {
            heading: 'Documentation',
            css: ''
        }
    }
];


/***/ })

});
//# sourceMappingURL=docs.module.chunk.js.map