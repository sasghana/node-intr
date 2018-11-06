webpackJsonp(["tables.module"],{

/***/ "./src/app/tables/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material fullscreen\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"0\"\n  [rowHeight]=\"50\"\n  [scrollbarV]=\"true\"\n  [scrollbarH]=\"true\"\n  [rows]=\"rows\">\n  <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/data-table/data-table.component.scss":
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/tables/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
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

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    DataTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__("./src/app/tables/data-table/data-table.component.html"),
            styles: [__webpack_require__("./src/app/tables/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-editing/table-editing.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  #mydatatable\n  class=\"material\"\n  [headerHeight]=\"50\"\n  [limit]=\"5\"\n  [columnMode]=\"'force'\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  [rows]=\"rows\">\n  <ngx-datatable-column name=\"Name\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n      <span\n        title=\"Double click to edit\"\n        (dblclick)=\"editing[row.$$index + '-name'] = true\"\n        *ngIf=\"!editing[row.$$index + '-name']\">\n        {{value}}\n      </span>\n      <input\n        autofocus\n        (blur)=\"updateValue($event, 'name', value, row)\"\n        *ngIf=\"editing[row.$$index + '-name']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\">\n    <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\n       <span\n        title=\"Double click to edit\"\n        (dblclick)=\"editing[row.$$index + '-gender'] = true\"\n        *ngIf=\"!editing[row.$$index + '-gender']\">\n        {{value}}\n      </span>\n      <select\n        *ngIf=\"editing[row.$$index + '-gender']\"\n        (change)=\"updateValue($event, 'gender', value, row)\"\n        [value]=\"value\">\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n      </select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\">\n      {{value}}\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/table-editing/table-editing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/table-editing/table-editing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditingComponent; });
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

var TableEditingComponent = /** @class */ (function () {
    function TableEditingComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditingComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    TableEditingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-editing',
            template: __webpack_require__("./src/app/tables/table-editing/table-editing.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-editing/table-editing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableEditingComponent);
    return TableEditingComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-filter/table-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-card demo-basic\">\n\n<!--<mat-card>-->\n  <!--<mat-toolbar class=\"text-base\">matAccordion</mat-toolbar>-->\n  <!--<mat-card-content>-->\n    <!--<div>-->\n      <!--<p>Accordion Options</p>-->\n      <!--<div>-->\n        <!--<mat-slide-toggle [(ngModel)]=\"multi\">Allow Multi Expansion</mat-slide-toggle>-->\n        <!--<mat-slide-toggle [(ngModel)]=\"hideToggle\">Hide Indicators</mat-slide-toggle>-->\n        <!--<mat-slide-toggle [(ngModel)]=\"disabled\">Disable Panel 2</mat-slide-toggle>-->\n        <!--<mat-slide-toggle [(ngModel)]=\"showPanel3\">Show Panel 3</mat-slide-toggle>-->\n      <!--</div>-->\n      <!--<p>Accordion Style</p>-->\n      <!--<mat-radio-group [(ngModel)]=\"displayMode\">-->\n        <!--<mat-radio-button value=\"default\">Default</mat-radio-button>-->\n        <!--<mat-radio-button value=\"flat\">Flat</mat-radio-button>-->\n      <!--</mat-radio-group>-->\n      <!--<p>Accordion Panel(s)</p>-->\n      <!--<div>-->\n        <!--<mat-checkbox [(ngModel)]=\"panel1.expanded\">Panel 1</mat-checkbox>-->\n        <!--<mat-checkbox [(ngModel)]=\"panel2.expanded\">Panel 2</mat-checkbox>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<br>-->\n\n  <!--</mat-card-content>-->\n<!--</mat-card>-->\n\n\n<mat-accordion [multi]=\"multi\" class=\"mat-expansion-demo-width\">\n  <mat-expansion-panel #panel1  [hideToggle]=\"hideToggle\">\n    <mat-expansion-panel-header>Create <em> &nbsp; Issue </em> &nbsp; +</mat-expansion-panel-header>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onPostIssue()\">\n      <div class=\"px-xs pb-1\">\n        <mat-form-field class=\"w-100\">\n          <input matInput placeholder=\"Title\" type=\"text\" [formControl]=\"form.controls['title']\">\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"w-100 pb-1\">\n        <div fxFlex=\"50\" class=\"px-xs\">\n          <mat-form-field class=\"w-100\" floatLabel=\"\">\n            <input matInput placeholder=\"Reported By\" type=\"text\" [formControl]=\"form.controls['reportedby']\" value=\"{{username}}\">\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"50\" class=\"px-xs\">\n          <!--<mat-form-field class=\"w-100\">-->\n            <!--<input matInput placeholder=\"Status\" type=\"text\" [formControl]=\"form.controls['status']\" value=\"Open\">-->\n          <!--</mat-form-field>-->\n\n          <mat-form-field class=\"w-100\">\n            <mat-select placeholder=\"Status\" [formControl]=\"form.controls['status']\">\n              <mat-option *ngFor=\"let status of status\" [value]=\"status.value\"> <em>{{ status.viewValue }}</em></mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"w-100 pb-1\">\n        <div fxFlex=\"50\" class=\"px-xs\">\n          <mat-form-field class=\"w-100\">\n            <textarea matInput placeholder=\"Issue Description\" [formControl]=\"form.controls['description']\"></textarea>\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"50\" class=\"px-xs\">\n          <mat-form-field class=\"w-100\">\n            <textarea matInput placeholder=\"Areas Affected\" [formControl]=\"form.controls['areasAffected']\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"w-100\">\n        <div fxFlex=\"33.33\">\n\n          <mat-form-field class=\"w-100\">\n            <mat-select placeholder=\"Assign To\" [formControl]=\"form.controls['assignto']\">\n              <mat-option *ngFor=\"let assign of assignto\" [value]=\"assign.value\"> <em>{{ assign.viewValue }}</em></mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"33.33\" class=\"px-xs\">\n\n          <mat-form-field class=\"w-100\">\n            <mat-select placeholder=\"Department\" [formControl]=\"form.controls['department']\">\n              <mat-option *ngFor=\"let depart of department\" [value]=\"depart.value\"> <em>{{ depart.viewValue }}</em></mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        </div>\n        <div fxFlex=\"33.33\" class=\"px-xs\">\n\n          <mat-form-field class=\"w-100\">\n            <mat-select placeholder=\"Priority\" [formControl]=\"form.controls['priority']\">\n              <mat-option *ngFor=\"let prior of priority\" [value]=\"prior.value\"> <em>{{ prior.viewValue }}</em></mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <button mat-raised-button color=\"primary\" type=\"submit\" >Submit</button>\n\n    </form>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel #panel2 [hideToggle]=\"hideToggle\" [disabled]=\"disabled\">\n    <mat-expansion-panel-header>View Reported <em> &nbsp;Issues</em></mat-expansion-panel-header>\n    <ngx-datatable\n      class='material'\n      [columns]=\"columns\"\n      [columnMode]=\"'force'\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"50\"\n      [rowHeight]=\"50\"\n      [scrollbarV]=\"true\"\n      [scrollbarH]=\"true\"\n      [limit]=\"10\"\n      [rows]='rows'>\n    </ngx-datatable>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel #panel3 *ngIf=\"showPanel3\" [hideToggle]=\"hideToggle\">\n    <mat-expansion-panel-header>Section 3</mat-expansion-panel-header>\n    <mat-checkbox #showButtons>Reveal Buttons Below</mat-checkbox>\n    <mat-action-row *ngIf=\"showButtons.checked\">\n      <button mat-button (click)=\"panel2.expanded = true\">OPEN SECTION 2</button>\n      <button mat-button (click)=\"panel3.expanded = false\">CLOSE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n\n\n"

/***/ }),

/***/ "./src/app/tables/table-filter/table-filter.component.scss":
/***/ (function(module, exports) {

module.exports = ".demo-full-width {\n  width: 100%; }\n\n.demo-text-align-end {\n  text-align: end; }\n\n.demo-textarea {\n  resize: none;\n  border: none;\n  overflow: auto;\n  padding: 0;\n  background: lightblue; }\n"

/***/ }),

/***/ "./src/app/tables/table-filter/table-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFilterComponent; });
/* unused harmony export ExpansionDemoComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issues_service__ = __webpack_require__("./src/app/tables/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent(dialog, fb, issuesService, snackBar, router) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.issuesService = issuesService;
        this.snackBar = snackBar;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'id' },
            { name: 'title' },
            { name: 'status' },
            { name: 'priority' },
            { name: 'assignee' },
            { name: 'description' },
            { name: 'department' },
            { name: 'ticket' },
            { name: 'date' }
        ];
        this.status = [
            { value: null, viewValue: 'None' },
            { value: 'open', viewValue: 'Open' },
            { value: 'pending', viewValue: 'Pending' },
            { value: 'complete', viewValue: 'Complete' }
        ];
        this.priority = [
            { value: null, viewValue: 'None' },
            { value: 'normal', viewValue: 'Normal' },
            { value: 'medium', viewValue: 'Medium' },
            { value: 'high', viewValue: 'High' }
        ];
        this.department = [
            { value: null, viewValue: 'None' },
            { value: 'IT', viewValue: 'Information Technology' },
            { value: 'HR', viewValue: 'Human Resource' },
            { value: 'Admin', viewValue: 'Admin' },
            { value: 'SASIM', viewValue: 'SAS Investment' },
            { value: 'Research', viewValue: 'SAS Research' }
        ];
        this.assignto = [
            { value: 'Admin', viewValue: 'Admin' },
            { value: 'Ayisi Addo', viewValue: 'Ayisi Addo' },
            { value: 'Hanson Peprah', viewValue: 'Hanson' },
            { value: 'Demo', viewValue: 'Demo' },
            { value: 'Boahemaa Frimpong', viewValue: 'Boahemaa Frimpong' },
            { value: 'Tracy Topez', viewValue: 'Tracy Topez' },
            { value: 'Gordon Ahordoh', viewValue: 'Gordon Ahordoh' },
            { value: 'Wasila', viewValue: 'Wasila Yeboah' },
            { value: 'George', viewValue: 'George Bampoh' },
        ];
        this.horizontalPosition = 'right';
        this.verticalPosition = 'bottom';
        this.fetch(function (data) {
            // cache our list
            _this.temp = data.slice();
            // push our inital complete list
            _this.rows = data;
        });
        this.username = localStorage.getItem('username');
    }
    TableFilterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            title: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            reportedby: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            status: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            assignto: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            areasAffected: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            department: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            priority: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    };
    TableFilterComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/issuetracker.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableFilterComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    // Issue tracker
    TableFilterComponent.prototype.onPostIssue = function () {
        var _this = this;
        var issueData = {
            reportedby: this.username,
            title: this.form.value.title,
            description: this.form.value.description,
            status: this.form.value.status,
            assignto: this.form.value.assignto,
            areasAffected: this.form.value.areasAffected,
            department: this.form.value.department,
            priority: this.form.value.priority
        };
        console.log('formgroup: post issue', issueData);
        this.issuesService.postIssue(issueData).subscribe(function (data) {
            console.log(data);
            _this.snackBar.open('welcome home', '', _this.config);
            _this.router.navigate(['/tables/filter']);
        }, function (err) {
            console.log(err);
            console.log("error posting issue :: " + JSON.stringify(err));
            _this.snackBar.open("" + JSON.stringify(err.message), '', _this.config);
            _this.form.reset();
        });
    };
    TableFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-filter',
            template: __webpack_require__("./src/app/tables/table-filter/table-filter.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-filter/table-filter.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__issues_service__["a" /* IssuesService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], TableFilterComponent);
    return TableFilterComponent;
}());

var ExpansionDemoComponent = /** @class */ (function () {
    function ExpansionDemoComponent() {
        this.displayMode = 'default';
        this.multi = false;
        this.hideToggle = false;
        this.disabled = false;
        this.showPanel3 = true;
    }
    return ExpansionDemoComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-paging/table-paging.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  [limit]=\"10\">\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/table-paging/table-paging.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/table-paging/table-paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePagingComponent; });
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

var TablePagingComponent = /** @class */ (function () {
    function TablePagingComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TablePagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePagingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-paging',
            template: __webpack_require__("./src/app/tables/table-paging/table-paging.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-paging/table-paging.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablePagingComponent);
    return TablePagingComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\nclass=\"material\"\n[columnMode]=\"'force'\"\n[headerHeight]=\"50\"\n[footerHeight]=\"50\"\n[rowHeight]=\"50\"\n[scrollbarV]=\"true\"\n[scrollbarH]=\"true\"\n[rows]=\"rows\">\n  <ngx-datatable-column\n    name=\"Name\"\n    [width]=\"300\"\n    [frozenLeft]=\"true\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"Gender\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"Age\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"City\"\n    [width]=\"150\"\n    prop=\"address.city\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"State\"\n    [width]=\"300\"\n    prop=\"address.state\"\n    [frozenRight]=\"true\">\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning.component.scss":
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePinningComponent; });
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

var TablePinningComponent = /** @class */ (function () {
    function TablePinningComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TablePinningComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePinningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-pinning',
            template: __webpack_require__("./src/app/tables/table-pinning/table-pinning.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-pinning/table-pinning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablePinningComponent);
    return TablePinningComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-selection/table-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material selection-cell\"\n  [rows]=\"rows\"\n  [columnMode]=\"'force'\"\n  [columns]=\"columns\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"50\"\n  [selected]=\"selected\"\n  [selectionType]=\"'cell'\"\n  (select)=\"onSelect($event)\"\n  (activate)=\"onActivate($event)\">\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/table-selection/table-selection.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/table-selection/table-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSelectionComponent; });
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

var TableSelectionComponent = /** @class */ (function () {
    function TableSelectionComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSelectionComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableSelectionComponent.prototype.onSelect = function (event) {
        console.log('Event: select', event, this.selected);
    };
    TableSelectionComponent.prototype.onActivate = function (event) {
        console.log('Event: activate', event);
    };
    TableSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-selection',
            template: __webpack_require__("./src/app/tables/table-selection/table-selection.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-selection/table-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableSelectionComponent);
    return TableSelectionComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [sortType]=\"'multi'\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"50\">\n</ngx-datatable>"

/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting.component.scss":
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSortingComponent; });
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

var TableSortingComponent = /** @class */ (function () {
    function TableSortingComponent() {
        var _this = this;
        this.rows = [];
        this.columns = [
            { name: 'Company' },
            { name: 'Name' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSortingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    TableSortingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-sorting',
            template: __webpack_require__("./src/app/tables/table-sorting/table-sorting.component.html"),
            styles: [__webpack_require__("./src/app/tables/table-sorting/table-sorting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableSortingComponent);
    return TableSortingComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_accordion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_observers__ = __webpack_require__("./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tables_routing__ = __webpack_require__("./src/app/tables/tables.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_table_data_table_component__ = __webpack_require__("./src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__table_editing_table_editing_component__ = __webpack_require__("./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__table_filter_table_filter_component__ = __webpack_require__("./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_paging_table_paging_component__ = __webpack_require__("./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__table_pinning_table_pinning_component__ = __webpack_require__("./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__table_selection_table_selection_component__ = __webpack_require__("./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__table_sorting_table_sorting_component__ = __webpack_require__("./src/app/tables/table-sorting/table-sorting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_18__tables_routing__["a" /* TablesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["O" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["u" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["A" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["D" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["E" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["F" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["G" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["P" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["Q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["R" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["M" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["v" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_accordion__["c" /* CdkAccordionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["f" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_portal__["g" /* PortalModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__data_table_data_table_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_20__table_editing_table_editing_component__["a" /* TableEditingComponent */],
                __WEBPACK_IMPORTED_MODULE_21__table_filter_table_filter_component__["a" /* TableFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__table_paging_table_paging_component__["a" /* TablePagingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__table_pinning_table_pinning_component__["a" /* TablePinningComponent */],
                __WEBPACK_IMPORTED_MODULE_24__table_selection_table_selection_component__["a" /* TableSelectionComponent */],
                __WEBPACK_IMPORTED_MODULE_25__table_sorting_table_sorting_component__["a" /* TableSortingComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["e" /* OverlayContainer */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["b" /* FullscreenOverlayContainer */] },
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table_data_table_component__ = __webpack_require__("./src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_editing_table_editing_component__ = __webpack_require__("./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_filter_table_filter_component__ = __webpack_require__("./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_paging_table_paging_component__ = __webpack_require__("./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_pinning_table_pinning_component__ = __webpack_require__("./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_selection_table_selection_component__ = __webpack_require__("./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_sorting_table_sorting_component__ = __webpack_require__("./src/app/tables/table-sorting/table-sorting.component.ts");







var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: __WEBPACK_IMPORTED_MODULE_0__data_table_data_table_component__["a" /* DataTableComponent */],
                data: {
                    heading: 'Fullscreen',
                    css: 'view-no-padding'
                }
            }, {
                path: 'editing',
                component: __WEBPACK_IMPORTED_MODULE_1__table_editing_table_editing_component__["a" /* TableEditingComponent */],
                data: {
                    heading: 'Editing',
                    css: ''
                }
            }, {
                path: 'filter',
                component: __WEBPACK_IMPORTED_MODULE_2__table_filter_table_filter_component__["a" /* TableFilterComponent */],
                data: {
                    heading: 'Filer',
                    css: ''
                }
            }, {
                path: 'paging',
                component: __WEBPACK_IMPORTED_MODULE_3__table_paging_table_paging_component__["a" /* TablePagingComponent */],
                data: {
                    heading: 'Paging',
                    css: ''
                }
            }, {
                path: 'pinning',
                component: __WEBPACK_IMPORTED_MODULE_4__table_pinning_table_pinning_component__["a" /* TablePinningComponent */],
                data: {
                    heading: 'Pinned',
                    css: ''
                }
            }, {
                path: 'selection',
                component: __WEBPACK_IMPORTED_MODULE_5__table_selection_table_selection_component__["a" /* TableSelectionComponent */],
                data: {
                    heading: 'Selection',
                    css: ''
                }
            }, {
                path: 'sorting',
                component: __WEBPACK_IMPORTED_MODULE_6__table_sorting_table_sorting_component__["a" /* TableSortingComponent */],
                data: {
                    heading: 'Sorting',
                    css: ''
                }
            }]
    }
];


/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map