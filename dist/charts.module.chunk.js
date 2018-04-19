webpackJsonp(["charts.module"],{

/***/ "./node_modules/@swimlane/ngx-charts/release/common/base-chart.component.css":
/***/ (function(module, exports) {

module.exports = ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    -webkit-transition: opacity 100ms ease-in-out;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .polar-series-path.inactive,\n  .ngx-charts .polar-series-area.inactive,\n  .ngx-charts .area-series.inactive {\n    -webkit-transition: opacity 100ms ease-in-out;\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n  .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .refline-path {\n    stroke: #a8b2c7;\n    stroke-width: 1;\n    stroke-dasharray: 5;\n    stroke-dashoffset: 5; }\n  .ngx-charts .refline-label {\n    font-size: 9px; }\n  .ngx-charts .reference-area {\n    fill-opacity: 0.05;\n    fill: #000; }\n  .ngx-charts .gridline-path-dotted {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none;\n    stroke-dasharray: 1, 20;\n    stroke-dashoffset: 3; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n"

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/common/label.helper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLabel;
/**
 * Formats a label given a date, number or string.
 *
 * @export
 * @param {*} label
 * @returns {string}
 */
function formatLabel(label) {
    if (label instanceof Date) {
        label = label.toLocaleDateString();
    }
    else {
        label = label.toLocaleString();
    }
    return label;
}
//# sourceMappingURL=label.helper.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/color-sets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorSets; });
var colorSets = [
    {
        name: 'vivid',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514'
        ]
    },
    {
        name: 'natural',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
        ]
    },
    {
        name: 'cool',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
        ]
    },
    {
        name: 'fire',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#ff3d00', '#bf360c', '#ff8f00', '#ff6f00', '#ff5722', '#e65100', '#ffca28', '#ffab00'
        ]
    },
    {
        name: 'solar',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'
        ]
    },
    {
        name: 'air',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'
        ]
    },
    {
        name: 'aqua',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'
        ]
    },
    {
        name: 'flame',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#A10A28', '#D3342D', '#EF6D49', '#FAAD67', '#FDDE90', '#DBED91', '#A9D770', '#6CBA67', '#2C9653', '#146738'
        ]
    },
    {
        name: 'ocean',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#1D68FB', '#33C0FC', '#4AFFFE', '#AFFFFF', '#FFFC63', '#FDBD2D', '#FC8A25', '#FA4F1E', '#FA141B', '#BA38D1'
        ]
    },
    {
        name: 'forest',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#55C22D', '#C1F33D', '#3CC099', '#AFFFFF', '#8CFC9D', '#76CFFA', '#BA60FB', '#EE6490', '#C42A1C', '#FC9F32'
        ]
    },
    {
        name: 'horizon',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2597FB', '#65EBFD', '#99FDD0', '#FCEE4B', '#FEFCFA', '#FDD6E3', '#FCB1A8', '#EF6F7B', '#CB96E8', '#EFDEE0'
        ]
    },
    {
        name: 'neons',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FF3333', '#FF33FF', '#CC33FF', '#0000FF', '#33CCFF', '#33FFFF', '#33FF66', '#CCFF33', '#FFCC00', '#FF6600'
        ]
    },
    {
        name: 'picnic',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
        ]
    },
    {
        name: 'night',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2B1B5A', '#501356', '#183356', '#28203F', '#391B3C', '#1E2B3C', '#120634',
            '#2D0432', '#051932', '#453080', '#75267D', '#2C507D', '#4B3880', '#752F7D', '#35547D'
        ]
    },
    {
        name: 'nightLights',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#4e31a5', '#9c25a7', '#3065ab', '#57468b', '#904497', '#46648b',
            '#32118d', '#a00fb3', '#1052a2', '#6e51bd', '#b63cc3', '#6c97cb', '#8671c1', '#b455be', '#7496c3'
        ]
    }
];
//# sourceMappingURL=color-sets.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/color-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hexToRgb */
/* unused harmony export invertColor */
/* unused harmony export shadeRGBColor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");

/**
 * Converts a hex to RGB
 *
 * @export
 * @param {string} hex
 * @returns {*}
 */
function hexToRgb(value) {
    // deprecated, use d3.color()
    return __WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"](value);
}
/**
 * Accepts a color (string) and returns a inverted hex color (string)
 * http://stackoverflow.com/questions/9600295/automatically-change-text-color-to-assure-readability
 *
 * @export
 * @param {any} value
 * @returns {string}
 */
function invertColor(value) {
    var color = __WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"](value);
    var r = color.r, g = color.g, b = color.b, opacity = color.opacity;
    if (opacity === 0) {
        return color.toString();
    }
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    var depth = (yiq >= 128) ? -.8 : .8;
    return shadeRGBColor(color, depth);
}
/**
 * Given a rgb, it will darken/lighten
 * http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 *
 * @export
 * @param {any} { r, g, b }
 * @param {any} percent
 * @returns
 */
function shadeRGBColor(_a, percent) {
    var r = _a.r, g = _a.g, b = _a.b;
    var t = percent < 0 ? 0 : 255;
    var p = percent < 0 ? percent * -1 : percent;
    r = (Math.round((t - r) * p) + r);
    g = (Math.round((t - g) * p) + g);
    b = (Math.round((t - b) * p) + b);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
//# sourceMappingURL=color-utils.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/id.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = id;
var cache = {};
/**
 * Generates a short id.
 *
 * Description:
 *   A 4-character alphanumeric sequence (364 = 1.6 million)
 *   This should only be used for JavaScript specific models.
 *   http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 *
 *   Example: `ebgf`
 */
function id() {
    var newId = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
    // append a 'a' because neo gets mad
    newId = "a" + newId;
    // ensure not already used
    if (!cache[newId]) {
        cache[newId] = true;
        return newId;
    }
    return id();
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__id__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/id.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__id__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_sets__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/color-sets.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/sort.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__throttle__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/throttle.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__color_utils__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/color-utils.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visibility_observer__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/visibility-observer.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/types.js");
/* unused harmony namespace reexport */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/sort.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sortLinear */
/* unused harmony export sortByDomain */
/* unused harmony export sortByTime */
function sortLinear(data, property, direction) {
    if (direction === void 0) { direction = 'asc'; }
    return data.sort(function (a, b) {
        if (direction === 'asc') {
            return a[property] - b[property];
        }
        else {
            return b[property] - a[property];
        }
    });
}
function sortByDomain(data, property, direction, domain) {
    if (direction === void 0) { direction = 'asc'; }
    return data.sort(function (a, b) {
        var aVal = a[property];
        var bVal = b[property];
        var aIdx = domain.indexOf(aVal);
        var bIdx = domain.indexOf(bVal);
        if (direction === 'asc') {
            return aIdx - bIdx;
        }
        else {
            return bIdx - aIdx;
        }
    });
}
function sortByTime(data, property, direction) {
    if (direction === void 0) { direction = 'asc'; }
    return data.sort(function (a, b) {
        var aDate = a[property].getTime();
        var bDate = b[property].getTime();
        if (direction === 'asc') {
            if (aDate > bDate)
                return 1;
            if (bDate > aDate)
                return -1;
            return 0;
        }
        else {
            if (aDate > bDate)
                return -1;
            if (bDate > aDate)
                return 1;
            return 0;
        }
    });
}
//# sourceMappingURL=sort.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttle */
/* unused harmony export throttleable */
/**
 * Throttle a function
 *
 * @export
 * @param {*}      func
 * @param {number} wait
 * @param {*}      [options]
 * @returns
 */
function throttle(func, wait, options) {
    options = options || {};
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 *
 * @export
 * @param {number} duration
 * @param {*} [options]
 * @returns
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDate */
/* unused harmony export isNumber */
function isDate(value) {
    return toString.call(value) === '[object Date]';
}
function isNumber(value) {
    return typeof value === 'number';
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-charts/release/utils/visibility-observer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VisibilityObserver */
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

/**
 * Visibility Observer
 */
var VisibilityObserver = /** @class */ (function () {
    function VisibilityObserver(element, zone) {
        this.element = element;
        this.zone = zone;
        this.visible = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isVisible = false;
        this.runCheck();
    }
    VisibilityObserver.prototype.destroy = function () {
        clearTimeout(this.timeout);
    };
    VisibilityObserver.prototype.onVisibilityChange = function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run(function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        });
    };
    VisibilityObserver.prototype.runCheck = function () {
        var _this = this;
        var check = function () {
            if (!_this.element) {
                return;
            }
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular(function () {
                    _this.timeout = setTimeout(function () { return check(); }, 100);
                });
            }
        };
        this.zone.runOutsideAngular(function () {
            _this.timeout = setTimeout(function () { return check(); });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VisibilityObserver.prototype, "visible", void 0);
    return VisibilityObserver;
}());

//# sourceMappingURL=visibility-observer.js.map

/***/ }),

/***/ "./node_modules/d3-axis/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_axis__ = __webpack_require__("./node_modules/d3-axis/src/axis.js");
/* unused harmony reexport axisTop */
/* unused harmony reexport axisRight */
/* unused harmony reexport axisBottom */
/* unused harmony reexport axisLeft */



/***/ }),

/***/ "./node_modules/d3-axis/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-axis/src/axis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export axisTop */
/* unused harmony export axisRight */
/* unused harmony export axisBottom */
/* unused harmony export axisLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-axis/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__("./node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/d3-axis/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-chord/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_chord__ = __webpack_require__("./node_modules/d3-chord/src/chord.js");
/* unused harmony reexport chord */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ribbon__ = __webpack_require__("./node_modules/d3-chord/src/ribbon.js");
/* unused harmony reexport ribbon */




/***/ }),

/***/ "./node_modules/d3-chord/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-chord/src/chord.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-chord/src/math.js");



function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] - padAngle * n) / k;
    dx = k ? padAngle : __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});


/***/ }),

/***/ "./node_modules/d3-chord/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-chord/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* unused harmony export pi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;


/***/ }),

/***/ "./node_modules/d3-chord/src/ribbon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-chord/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-chord/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-chord/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sa1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sx0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(sa0),
        sy0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        ta1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */];

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_3_d3_path__["a" /* path */])();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(ta0), tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
});


/***/ }),

/***/ "./node_modules/d3-dsv/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__("./node_modules/d3-dsv/src/dsv.js");
/* unused harmony reexport dsvFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__("./node_modules/d3-dsv/src/csv.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__("./node_modules/d3-dsv/src/tsv.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ }),

/***/ "./node_modules/d3-dsv/src/csv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__("./node_modules/d3-dsv/src/dsv.js");


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__("./node_modules/d3-dsv/src/dsv.js");


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),

/***/ "./node_modules/d3-geo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__("./node_modules/d3-geo/src/area.js");
/* unused harmony reexport geoArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bounds__ = __webpack_require__("./node_modules/d3-geo/src/bounds.js");
/* unused harmony reexport geoBounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_centroid__ = __webpack_require__("./node_modules/d3-geo/src/centroid.js");
/* unused harmony reexport geoCentroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_circle__ = __webpack_require__("./node_modules/d3-geo/src/circle.js");
/* unused harmony reexport geoCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__ = __webpack_require__("./node_modules/d3-geo/src/clip/antimeridian.js");
/* unused harmony reexport geoClipAntimeridian */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__ = __webpack_require__("./node_modules/d3-geo/src/clip/circle.js");
/* unused harmony reexport geoClipCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__ = __webpack_require__("./node_modules/d3-geo/src/clip/extent.js");
/* unused harmony reexport geoClipExtent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__ = __webpack_require__("./node_modules/d3-geo/src/clip/rectangle.js");
/* unused harmony reexport geoClipRectangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_contains__ = __webpack_require__("./node_modules/d3-geo/src/contains.js");
/* unused harmony reexport geoContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_distance__ = __webpack_require__("./node_modules/d3-geo/src/distance.js");
/* unused harmony reexport geoDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_graticule__ = __webpack_require__("./node_modules/d3-geo/src/graticule.js");
/* unused harmony reexport geoGraticule */
/* unused harmony reexport geoGraticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_interpolate__ = __webpack_require__("./node_modules/d3-geo/src/interpolate.js");
/* unused harmony reexport geoInterpolate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_length__ = __webpack_require__("./node_modules/d3-geo/src/length.js");
/* unused harmony reexport geoLength */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_path_index__ = __webpack_require__("./node_modules/d3-geo/src/path/index.js");
/* unused harmony reexport geoPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__ = __webpack_require__("./node_modules/d3-geo/src/projection/albers.js");
/* unused harmony reexport geoAlbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__ = __webpack_require__("./node_modules/d3-geo/src/projection/albersUsa.js");
/* unused harmony reexport geoAlbersUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthalEqualArea.js");
/* unused harmony reexport geoAzimuthalEqualArea */
/* unused harmony reexport geoAzimuthalEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthalEquidistant.js");
/* unused harmony reexport geoAzimuthalEquidistant */
/* unused harmony reexport geoAzimuthalEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__ = __webpack_require__("./node_modules/d3-geo/src/projection/conicConformal.js");
/* unused harmony reexport geoConicConformal */
/* unused harmony reexport geoConicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__ = __webpack_require__("./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* unused harmony reexport geoConicEqualArea */
/* unused harmony reexport geoConicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__ = __webpack_require__("./node_modules/d3-geo/src/projection/conicEquidistant.js");
/* unused harmony reexport geoConicEquidistant */
/* unused harmony reexport geoConicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__ = __webpack_require__("./node_modules/d3-geo/src/projection/equirectangular.js");
/* unused harmony reexport geoEquirectangular */
/* unused harmony reexport geoEquirectangularRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__ = __webpack_require__("./node_modules/d3-geo/src/projection/gnomonic.js");
/* unused harmony reexport geoGnomonic */
/* unused harmony reexport geoGnomonicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__ = __webpack_require__("./node_modules/d3-geo/src/projection/identity.js");
/* unused harmony reexport geoIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_projection_index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");
/* unused harmony reexport geoProjection */
/* unused harmony reexport geoProjectionMutator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__ = __webpack_require__("./node_modules/d3-geo/src/projection/mercator.js");
/* unused harmony reexport geoMercator */
/* unused harmony reexport geoMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__ = __webpack_require__("./node_modules/d3-geo/src/projection/naturalEarth1.js");
/* unused harmony reexport geoNaturalEarth1 */
/* unused harmony reexport geoNaturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__ = __webpack_require__("./node_modules/d3-geo/src/projection/orthographic.js");
/* unused harmony reexport geoOrthographic */
/* unused harmony reexport geoOrthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__ = __webpack_require__("./node_modules/d3-geo/src/projection/stereographic.js");
/* unused harmony reexport geoStereographic */
/* unused harmony reexport geoStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__ = __webpack_require__("./node_modules/d3-geo/src/projection/transverseMercator.js");
/* unused harmony reexport geoTransverseMercator */
/* unused harmony reexport geoTransverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_rotation__ = __webpack_require__("./node_modules/d3-geo/src/rotation.js");
/* unused harmony reexport geoRotation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");
/* unused harmony reexport geoStream */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_transform__ = __webpack_require__("./node_modules/d3-geo/src/transform.js");
/* unused harmony reexport geoTransform */






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),

/***/ "./node_modules/d3-geo/src/adder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");





var areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object) {
  areaSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/bounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__("./node_modules/d3-geo/src/area.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__("./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */]]);
  if (p0) {
    var normal = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(equatorial, normal);
    Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["e" /* cartesianNormalizeInPlace */])(inflection);
    inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */] * sign,
        phii,
        antimeridian = Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineEnd();
  if (Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(__WEBPACK_IMPORTED_MODULE_4__stream__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/cartesian.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/centroid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  centroidPointCartesian(cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(__WEBPACK_IMPORTED_MODULE_2__stream__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) return [NaN, NaN];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-geo/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__("./node_modules/d3-geo/src/rotation.js");





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianNormalizeInPlace */])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/antimeridian.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo/src/clip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) { // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]
      ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* atan */])((Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda1)
          - Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__("./node_modules/d3-geo/src/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__("./node_modules/d3-geo/src/pointEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./node_modules/d3-geo/src/clip/index.js");






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["u" /* sqrt */])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/extent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle__ = __webpack_require__("./node_modules/d3-geo/src/clip/rectangle.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(__WEBPACK_IMPORTED_MODULE_0__rectangle__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__("./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__("./node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__("./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["merge"])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/rectangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__("./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__("./node_modules/d3-geo/src/clip/line.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__("./node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 0 : 3
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 2 : 1
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["merge"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/rejoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__("./node_modules/d3-geo/src/pointEqual.js");


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/compose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/contains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__("./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__("./node_modules/d3-geo/src/distance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], coordinates[1]),
      ao = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], point),
      ob = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
}

function containsPolygon(coordinates, point) {
  return !!Object(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */]];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/distance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__("./node_modules/d3-geo/src/length.js");


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/graticule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export graticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");



function graticuleX(y0, y1, dy) {
  var y = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(x))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/interpolate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0),
      cy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1),
      sy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1),
      kx0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x0),
      ky0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x0),
      kx1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x1),
      ky1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x1),
      d = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(y1 - y0) + cy0 * cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(x1 - x0))),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(t *= d) / k,
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */],
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(z, Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/length.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");





var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
/* harmony export (immutable) */ __webpack_exports__["m"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),

/***/ "./node_modules/d3-geo/src/path/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");




var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
    areaSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/bounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/centroid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */]
};


/***/ }),

/***/ "./node_modules/d3-geo/src/path/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__("./node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__("./node_modules/d3-geo/src/path/area.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__("./node_modules/d3-geo/src/path/bounds.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__("./node_modules/d3-geo/src/path/centroid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__("./node_modules/d3-geo/src/path/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__("./node_modules/d3-geo/src/path/measure.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__("./node_modules/d3-geo/src/path/string.js");









/* unused harmony default export */ var _unused_webpack_default_export = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */].result();
  };

  path.measure = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */].result();
  };

  path.bounds = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */].result();
  };

  path.centroid = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/path/measure.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo/src/noop.js");




var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),

/***/ "./node_modules/d3-geo/src/pointEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/polygonContains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__("./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");




var sum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) ^ (winding & 1);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__("./node_modules/d3-geo/src/projection/conicEqualArea.js");


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albersUsa.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__("./node_modules/d3-geo/src/projection/albers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__("./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__("./node_modules/d3-geo/src/projection/fit.js");





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var cache,
      cacheStream,
      lower48 = Object(__WEBPACK_IMPORTED_MODULE_1__albers__["a" /* default */])(), lower48Point,
      alaska = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x),
      k * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(c);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export azimuthalEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




var azimuthalEqualAreaRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(cxcy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / 2);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export azimuthalEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




var azimuthalEquidistantRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(c) {
  return (c = Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* acos */])(c)) && c / Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicConformal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__("./node_modules/d3-geo/src/projection/mercator.js");




function tany(y) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(cy0 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    var r = f / Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y), n);
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(n * x), f - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + fy * fy);
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(fy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(fy), 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__("./node_modules/d3-geo/src/projection/cylindricalEqualArea.js");




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0), n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(r0y)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(r0y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEquidistant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__("./node_modules/d3-geo/src/projection/equirectangular.js");




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : (cy0 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["a" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(nx), g - gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(gy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(gy), g - Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/equirectangular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/fit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__("./node_modules/d3-geo/src/stream.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__("./node_modules/d3-geo/src/path/bounds.js");



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/gnomonic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gnomonicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




function gnomonicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

gnomonicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle__ = __webpack_require__("./node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__("./node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__("./node_modules/d3-geo/src/transform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__("./node_modules/d3-geo/src/projection/fit.js");





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(projection, height, object);
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__("./node_modules/d3-geo/src/clip/antimeridian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__("./node_modules/d3-geo/src/clip/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__("./node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__("./node_modules/d3-geo/src/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__("./node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__("./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__("./node_modules/d3-geo/src/transform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__("./node_modules/d3-geo/src/projection/fit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__("./node_modules/d3-geo/src/projection/resample.js");











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform__["a" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform__["a" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // clip extent
      delta2 = 0.5, projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math__["u" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["c" /* fitSize */])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["d" /* fitWidth */])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitHeight */])(projection, height, object);
  };

  function recenter() {
    projectRotate = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/mercator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__("./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/naturalEarth1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export naturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/orthographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export orthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




function orthographicRaw(x, y) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)];
}

orthographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/resample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__("./node_modules/d3-geo/src/transform.js");




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(a * a + b * b + c * c),
          phi2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(c /= m),
          lambda2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] ? (lambda0 + lambda1) / 2 : Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/stereographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo/src/projection/index.js");




function stereographicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = 1 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

stereographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(z);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/transverseMercator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__("./node_modules/d3-geo/src/projection/mercator.js");



function transverseMercatorRaw(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var m = Object(__WEBPACK_IMPORTED_MODULE_1__mercator__["a" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/rotation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__("./node_modules/d3-geo/src/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo/src/math.js");



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]) ? (deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/stream.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),

/***/ "./node_modules/d3-geo/src/transform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformer;
/* unused harmony default export */ var _unused_webpack_default_export = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),

/***/ "./node_modules/d3-polygon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__("./node_modules/d3-polygon/src/area.js");
/* unused harmony reexport polygonArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_centroid__ = __webpack_require__("./node_modules/d3-polygon/src/centroid.js");
/* unused harmony reexport polygonCentroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hull__ = __webpack_require__("./node_modules/d3-polygon/src/hull.js");
/* unused harmony reexport polygonHull */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_contains__ = __webpack_require__("./node_modules/d3-polygon/src/contains.js");
/* unused harmony reexport polygonContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_length__ = __webpack_require__("./node_modules/d3-polygon/src/length.js");
/* unused harmony reexport polygonLength */







/***/ }),

/***/ "./node_modules/d3-polygon/src/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
});


/***/ }),

/***/ "./node_modules/d3-polygon/src/centroid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
});


/***/ }),

/***/ "./node_modules/d3-polygon/src/contains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0], y = point[1],
      x0 = p[0], y0 = p[1],
      x1, y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
});


/***/ }),

/***/ "./node_modules/d3-polygon/src/cross.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
});


/***/ }),

/***/ "./node_modules/d3-polygon/src/hull.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cross__ = __webpack_require__("./node_modules/d3-polygon/src/cross.js");


function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && Object(__WEBPACK_IMPORTED_MODULE_0__cross__["a" /* default */])(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
});


/***/ }),

/***/ "./node_modules/d3-polygon/src/length.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
});


/***/ }),

/***/ "./node_modules/d3-queue/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_queue__ = __webpack_require__("./node_modules/d3-queue/src/queue.js");
/* unused harmony reexport queue */



/***/ }),

/***/ "./node_modules/d3-queue/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = [].slice;


/***/ }),

/***/ "./node_modules/d3-queue/src/queue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-queue/src/array.js");


var noabort = {};

function Queue(size) {
  this._size = size;
  this._call =
  this._error = null;
  this._tasks = [];
  this._data = [];
  this._waiting =
  this._active =
  this._ended =
  this._start = 0; // inside a synchronous task callback?
}

Queue.prototype = queue.prototype = {
  constructor: Queue,
  defer: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("defer after await");
    if (this._error != null) return this;
    var t = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments, 1);
    t.push(callback);
    ++this._waiting, this._tasks.push(t);
    poke(this);
    return this;
  },
  abort: function() {
    if (this._error == null) abort(this, new Error("abort"));
    return this;
  },
  await: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
    maybeNotify(this);
    return this;
  },
  awaitAll: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = callback;
    maybeNotify(this);
    return this;
  }
};

function poke(q) {
  if (!q._start) {
    try { start(q); } // let the current task complete
    catch (e) {
      if (q._tasks[q._ended + q._active - 1]) abort(q, e); // task errored synchronously
      else if (!q._data) throw e; // await callback errored synchronously
    }
  }
}

function start(q) {
  while (q._start = q._waiting && q._active < q._size) {
    var i = q._ended + q._active,
        t = q._tasks[i],
        j = t.length - 1,
        c = t[j];
    t[j] = end(q, i);
    --q._waiting, ++q._active;
    t = c.apply(null, t);
    if (!q._tasks[i]) continue; // task finished synchronously
    q._tasks[i] = t || noabort;
  }
}

function end(q, i) {
  return function(e, r) {
    if (!q._tasks[i]) return; // ignore multiple callbacks
    --q._active, ++q._ended;
    q._tasks[i] = null;
    if (q._error != null) return; // ignore secondary errors
    if (e != null) {
      abort(q, e);
    } else {
      q._data[i] = r;
      if (q._waiting) poke(q);
      else maybeNotify(q);
    }
  };
}

function abort(q, e) {
  var i = q._tasks.length, t;
  q._error = e; // ignore active callbacks
  q._data = undefined; // allow gc
  q._waiting = NaN; // prevent starting

  while (--i >= 0) {
    if (t = q._tasks[i]) {
      q._tasks[i] = null;
      if (t.abort) {
        try { t.abort(); }
        catch (e) { /* ignore */ }
      }
    }
  }

  q._active = NaN; // allow notification
  maybeNotify(q);
}

function maybeNotify(q) {
  if (!q._active && q._call) {
    var d = q._data;
    q._data = undefined; // allow gc
    q._call(q._error, d);
  }
}

function queue(concurrency) {
  if (concurrency == null) concurrency = Infinity;
  else if (!((concurrency = +concurrency) >= 1)) throw new Error("invalid concurrency");
  return new Queue(concurrency);
}


/***/ }),

/***/ "./node_modules/d3-random/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_uniform__ = __webpack_require__("./node_modules/d3-random/src/uniform.js");
/* unused harmony reexport randomUniform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_normal__ = __webpack_require__("./node_modules/d3-random/src/normal.js");
/* unused harmony reexport randomNormal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_logNormal__ = __webpack_require__("./node_modules/d3-random/src/logNormal.js");
/* unused harmony reexport randomLogNormal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_bates__ = __webpack_require__("./node_modules/d3-random/src/bates.js");
/* unused harmony reexport randomBates */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_irwinHall__ = __webpack_require__("./node_modules/d3-random/src/irwinHall.js");
/* unused harmony reexport randomIrwinHall */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exponential__ = __webpack_require__("./node_modules/d3-random/src/exponential.js");
/* unused harmony reexport randomExponential */








/***/ }),

/***/ "./node_modules/d3-random/src/bates.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__irwinHall__ = __webpack_require__("./node_modules/d3-random/src/irwinHall.js");



/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = __WEBPACK_IMPORTED_MODULE_1__irwinHall__["a" /* default */].source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/defaultSource.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Math.random();
});


/***/ }),

/***/ "./node_modules/d3-random/src/exponential.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/irwinHall.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/logNormal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal__ = __webpack_require__("./node_modules/d3-random/src/normal.js");



/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = __WEBPACK_IMPORTED_MODULE_1__normal__["a" /* default */].source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/normal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/uniform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;
    else max -= min;
    return function() {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-request/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_request__ = __webpack_require__("./node_modules/d3-request/src/request.js");
/* unused harmony reexport request */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_html__ = __webpack_require__("./node_modules/d3-request/src/html.js");
/* unused harmony reexport html */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_json__ = __webpack_require__("./node_modules/d3-request/src/json.js");
/* unused harmony reexport json */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_text__ = __webpack_require__("./node_modules/d3-request/src/text.js");
/* unused harmony reexport text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_xml__ = __webpack_require__("./node_modules/d3-request/src/xml.js");
/* unused harmony reexport xml */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_csv__ = __webpack_require__("./node_modules/d3-request/src/csv.js");
/* unused harmony reexport csv */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_tsv__ = __webpack_require__("./node_modules/d3-request/src/tsv.js");
/* unused harmony reexport tsv */









/***/ }),

/***/ "./node_modules/d3-request/src/csv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__("./node_modules/d3-dsv/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dsv__ = __webpack_require__("./node_modules/d3-request/src/dsv.js");



/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__dsv__["a" /* default */])("text/csv", __WEBPACK_IMPORTED_MODULE_0_d3_dsv__["a" /* csvParse */]));


/***/ }),

/***/ "./node_modules/d3-request/src/dsv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__("./node_modules/d3-request/src/request.js");


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
});

function responseOf(parse, row) {
  return function(request) {
    return parse(request.responseText, row);
  };
}


/***/ }),

/***/ "./node_modules/d3-request/src/html.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("./node_modules/d3-request/src/type.js");


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("text/html", function(xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
}));


/***/ }),

/***/ "./node_modules/d3-request/src/json.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("./node_modules/d3-request/src/type.js");


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("application/json", function(xhr) {
  return JSON.parse(xhr.responseText);
}));


/***/ }),

/***/ "./node_modules/d3-request/src/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__("./node_modules/d3-collection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_dispatch__ = __webpack_require__("./node_modules/d3-dispatch/index.js");



/* harmony default export */ __webpack_exports__["a"] = (function(url, callback) {
  var request,
      event = Object(__WEBPACK_IMPORTED_MODULE_1_d3_dispatch__["a" /* dispatch */])("beforesend", "progress", "load", "error"),
      mimeType,
      headers = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
});

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}


/***/ }),

/***/ "./node_modules/d3-request/src/text.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("./node_modules/d3-request/src/type.js");


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("text/plain", function(xhr) {
  return xhr.responseText;
}));


/***/ }),

/***/ "./node_modules/d3-request/src/tsv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__("./node_modules/d3-dsv/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dsv__ = __webpack_require__("./node_modules/d3-request/src/dsv.js");



/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__dsv__["a" /* default */])("text/tab-separated-values", __WEBPACK_IMPORTED_MODULE_0_d3_dsv__["b" /* tsvParse */]));


/***/ }),

/***/ "./node_modules/d3-request/src/type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__("./node_modules/d3-request/src/request.js");


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, response) {
  return function(url, callback) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
});


/***/ }),

/***/ "./node_modules/d3-request/src/xml.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("./node_modules/d3-request/src/type.js");


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("application/xml", function(xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
}));


/***/ }),

/***/ "./node_modules/d3-voronoi/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_voronoi__ = __webpack_require__("./node_modules/d3-voronoi/src/voronoi.js");
/* unused harmony reexport voronoi */



/***/ }),

/***/ "./node_modules/d3-voronoi/src/Beach.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = removeBeach;
/* harmony export (immutable) */ __webpack_exports__["a"] = addBeach;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedBlackTree__ = __webpack_require__("./node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell__ = __webpack_require__("./node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__("./node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edge__ = __webpack_require__("./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Diagram__ = __webpack_require__("./node_modules/d3-voronoi/src/Diagram.js");






var beachPool = [];

function Beach() {
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(beach);
  __WEBPACK_IMPORTED_MODULE_4__Diagram__["a" /* beaches */].remove(beach);
  beachPool.push(beach);
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]
      && Math.abs(y - lArc.circle.cy) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]
      && Math.abs(y - rArc.circle.cy) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["d" /* setEdgeEnd */])(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["c" /* createEdge */])(lArc.site, rArc.site, null, vertex);

  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = __WEBPACK_IMPORTED_MODULE_4__Diagram__["a" /* beaches */]._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > __WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -__WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -__WEBPACK_IMPORTED_MODULE_4__Diagram__["f" /* epsilon */]) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["c" /* createCell */])(site);
  var newArc = createBeach(site);
  __WEBPACK_IMPORTED_MODULE_4__Diagram__["a" /* beaches */].insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(lArc);
    rArc = createBeach(lArc.site);
    __WEBPACK_IMPORTED_MODULE_4__Diagram__["a" /* beaches */].insert(newArc, rArc);
    newArc.edge = rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["c" /* createEdge */])(lArc.site, newArc.site);
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(lArc);
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["c" /* createEdge */])(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["b" /* detachCircle */])(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["d" /* setEdgeEnd */])(rArc.edge, lSite, rSite, vertex);
  newArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["c" /* createEdge */])(lSite, site, null, vertex);
  rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["c" /* createEdge */])(site, rSite, null, vertex);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* attachCircle */])(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Cell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createCell;
/* harmony export (immutable) */ __webpack_exports__["a"] = cellHalfedgeStart;
/* unused harmony export cellHalfedgeEnd */
/* harmony export (immutable) */ __webpack_exports__["d"] = sortCellHalfedges;
/* harmony export (immutable) */ __webpack_exports__["b"] = clipCells;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Edge__ = __webpack_require__("./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__("./node_modules/d3-voronoi/src/Diagram.js");



function createCell(site) {
  return __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!__WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] || Math.abs(endY - startY) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */]) {
          halfedges.splice(iHalfedge, 0, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, end,
              Math.abs(endX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && y1 - endY > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [x0, Math.abs(startX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startY : y1]
              : Math.abs(endY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && x1 - endX > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [Math.abs(startY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startX : x1, y1]
              : Math.abs(endX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && endY - y0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [x1, Math.abs(startX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startY : y0]
              : Math.abs(endY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && endX - x0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [Math.abs(startY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site = cover.site, v00, v01)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v01, v11)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v11, v10)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
      if (!cell.halfedges.length) {
        delete __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firstCircle; });
/* harmony export (immutable) */ __webpack_exports__["a"] = attachCircle;
/* harmony export (immutable) */ __webpack_exports__["b"] = detachCircle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedBlackTree__ = __webpack_require__("./node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__("./node_modules/d3-voronoi/src/Diagram.js");



var circlePool = [];

var firstCircle;

function Circle() {
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -__WEBPACK_IMPORTED_MODULE_1__Diagram__["g" /* epsilon2 */]) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */]._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */].insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */].remove(circle);
    circlePool.push(circle);
    Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(circle);
    arc.circle = null;
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Diagram.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return edges; });
/* harmony export (immutable) */ __webpack_exports__["d"] = Diagram;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Beach__ = __webpack_require__("./node_modules/d3-voronoi/src/Beach.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell__ = __webpack_require__("./node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__("./node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edge__ = __webpack_require__("./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__ = __webpack_require__("./node_modules/d3-voronoi/src/RedBlackTree.js");






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["b" /* default */];
  circles = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["b" /* default */];

  while (true) {
    circle = __WEBPACK_IMPORTED_MODULE_2__Circle__["c" /* firstCircle */];
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["a" /* addBeach */])(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["b" /* removeBeach */])(circle.arc);
    } else {
      break;
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["d" /* sortCellHalfedges */])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["a" /* clipEdges */])(x0, y0, x1, y1);
    Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["b" /* clipCells */])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["a" /* cellHalfedgeStart */])(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Edge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createEdge;
/* harmony export (immutable) */ __webpack_exports__["b"] = createBorderEdge;
/* harmony export (immutable) */ __webpack_exports__["d"] = setEdgeEnd;
/* harmony export (immutable) */ __webpack_exports__["a"] = clipEdges;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Diagram__ = __webpack_require__("./node_modules/d3-voronoi/src/Diagram.js");


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["b" /* cells */][left.index].halfedges.push(index);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["b" /* cells */][right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */][i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["f" /* epsilon */]
            || Math.abs(edge[0][1] - edge[1][1]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["f" /* epsilon */])) {
      delete __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */][i];
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/RedBlackTree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RedBlackNode;
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ __webpack_exports__["b"] = (RedBlackTree);


/***/ }),

/***/ "./node_modules/d3-voronoi/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-voronoi/src/point.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/voronoi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__("./node_modules/d3-voronoi/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("./node_modules/d3-voronoi/src/point.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Diagram__ = __webpack_require__("./node_modules/d3-voronoi/src/Diagram.js");




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_1__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_1__point__["b" /* y */],
      extent = null;

  function voronoi(data) {
    return new __WEBPACK_IMPORTED_MODULE_2__Diagram__["d" /* default */](data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / __WEBPACK_IMPORTED_MODULE_2__Diagram__["f" /* epsilon */]) * __WEBPACK_IMPORTED_MODULE_2__Diagram__["f" /* epsilon */], Math.round(y(d, i, data) / __WEBPACK_IMPORTED_MODULE_2__Diagram__["f" /* epsilon */]) * __WEBPACK_IMPORTED_MODULE_2__Diagram__["f" /* epsilon */]];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
});


/***/ }),

/***/ "./node_modules/d3-zoom/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_zoom__ = __webpack_require__("./node_modules/d3-zoom/src/zoom.js");
/* unused harmony reexport zoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transform__ = __webpack_require__("./node_modules/d3-zoom/src/transform.js");
/* unused harmony reexport zoomTransform */
/* unused harmony reexport zoomIdentity */




/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ZoomEvent;
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
/* unused harmony export default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  return node.__zoom || identity;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__("./node_modules/d3-dispatch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__("./node_modules/d3-drag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__("./node_modules/d3-transition/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__("./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__("./node_modules/d3-zoom/src/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__("./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__noevent__ = __webpack_require__("./node_modules/d3-zoom/src/noevent.js");










// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].button;
}

function defaultExtent() {
  var e = this, w, h;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    w = e.width.baseVal.value;
    h = e.height.baseVal.value;
  } else {
    w = e.clientWidth;
    h = e.clientHeight;
  }
  return [[0, 0], [w, h]];
}

function defaultTransform() {
  return this.__zoom || __WEBPACK_IMPORTED_MODULE_7__transform__["b" /* identity */];
}

function defaultWheelDelta() {
  return -__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaY * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaMode ? 120 : 1) / 500;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["interpolateZoom"],
      gestures = [],
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    });
  };

  zoom.scaleTo = function(selection, k) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = centroid(e),
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    });
  };

  zoom.translateBy = function(selection, x, y) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function(selection, x, y) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p = centroid(e);
      return constrain(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* identity */].translate(p[0], p[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    });
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, center) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = center || centroid(e),
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args) {
    for (var i = 0, n = gestures.length, g; i < n; ++i) {
      if ((g = gestures[i]).that === that) {
        return g;
      }
    }
    return new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.index = -1;
    this.active = 0;
    this.extent = extent.apply(that, args);
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.index = gestures.push(this) - 1;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        gestures.splice(this.index, 1);
        this.index = -1;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_6__event__["a" /* default */](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
      g.start();
    }

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        v = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        x0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX,
        y0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY;

    Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* dragDisable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view);
    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    g.mouse = [p, this.__zoom.invert(p)];
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
    g.start();

    function mousemoved() {
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
      if (!g.moved) {
        var dx = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX - x0, dy = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["b" /* dragEnable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view, g.moved);
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    if (duration > 0) Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).transition().duration(duration).call(schedule, t1, p0);
    else Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        started,
        n = touches.length, i, t, p;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true;
      else if (!g.touch1) g.touch1 = p;
    }

    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
    if (touchstarting) {
      touchstarting = clearTimeout(touchstarting);
      if (!g.touch1) {
        g.end();
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
        return;
      }
    }

    if (started) {
      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
      g.start();
    }
  }

  function touchmoved() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t, p, l;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else g.end();
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
});


/***/ }),

/***/ "./node_modules/d3/build/package.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export version */
/* unused harmony export description */
/* unused harmony export keywords */
/* unused harmony export homepage */
/* unused harmony export license */
/* unused harmony export author */
/* unused harmony export main */
/* unused harmony export unpkg */
/* unused harmony export jsdelivr */
/* unused harmony export module */
/* unused harmony export repository */
/* unused harmony export scripts */
/* unused harmony export devDependencies */
/* unused harmony export dependencies */
var name = "d3";
var version = "4.13.0";
var description = "Data-Driven Documents";
var keywords = ["dom","visualization","svg","animation","canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
var main = "build/d3.node.js";
var unpkg = "build/d3.min.js";
var jsdelivr = "build/d3.min.js";
var module = "index";
var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
var scripts = {"pretest":"rimraf build && mkdir build && json2module package.json > build/package.js && node rollup.node","test":"tape 'test/**/*-test.js'","prepublishOnly":"npm run test && rollup -c --banner \"$(preamble)\" && uglifyjs -b beautify=false,preamble=\"'$(preamble)'\" build/d3.js -c negate_iife=false -m -o build/d3.min.js","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/build/d3.js d3.v4.js && cp ../d3/build/d3.min.js d3.v4.min.js && git add d3.v4.js d3.v4.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/build/d3.js ../d3/build/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m \"${npm_package_version}\" && git tag -am \"${npm_package_version}\" v${npm_package_version} && git push && git push --tags && cd - && zip -j build/d3.zip -- LICENSE README.md API.md CHANGES.md build/d3.js build/d3.min.js"};
var devDependencies = {"json2module":"0.0","package-preamble":"0.1","rimraf":"2","rollup":"0.53","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"3","tape":"4","uglify-js":"3.2"};
var dependencies = {"d3-array":"1.2.1","d3-axis":"1.0.8","d3-brush":"1.0.4","d3-chord":"1.0.4","d3-collection":"1.0.4","d3-color":"1.0.3","d3-dispatch":"1.0.3","d3-drag":"1.2.1","d3-dsv":"1.0.8","d3-ease":"1.0.3","d3-force":"1.1.0","d3-format":"1.2.2","d3-geo":"1.9.1","d3-hierarchy":"1.1.5","d3-interpolate":"1.1.6","d3-path":"1.0.5","d3-polygon":"1.0.3","d3-quadtree":"1.0.3","d3-queue":"3.0.7","d3-random":"1.1.0","d3-request":"1.0.6","d3-scale":"1.0.7","d3-selection":"1.3.0","d3-shape":"1.2.0","d3-time":"1.0.8","d3-time-format":"2.1.1","d3-timer":"1.0.7","d3-transition":"1.1.1","d3-voronoi":"1.1.2","d3-zoom":"1.7.1"};


/***/ }),

/***/ "./node_modules/d3/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_package__ = __webpack_require__("./node_modules/d3/build/package.js");
/* unused harmony reexport version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["sum"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_axis__ = __webpack_require__("./node_modules/d3-axis/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_brush__ = __webpack_require__("./node_modules/d3-brush/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_chord__ = __webpack_require__("./node_modules/d3-chord/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_collection__ = __webpack_require__("./node_modules/d3-collection/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_dispatch__ = __webpack_require__("./node_modules/d3-dispatch/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_drag__ = __webpack_require__("./node_modules/d3-drag/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_dsv__ = __webpack_require__("./node_modules/d3-dsv/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_ease__ = __webpack_require__("./node_modules/d3-ease/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_force__ = __webpack_require__("./node_modules/d3-force/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3_format__ = __webpack_require__("./node_modules/d3-format/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3_geo__ = __webpack_require__("./node_modules/d3-geo/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__ = __webpack_require__("./node_modules/d3-hierarchy/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3_polygon__ = __webpack_require__("./node_modules/d3-polygon/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_d3_quadtree__ = __webpack_require__("./node_modules/d3-quadtree/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_queue__ = __webpack_require__("./node_modules/d3-queue/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_d3_random__ = __webpack_require__("./node_modules/d3-random/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_d3_request__ = __webpack_require__("./node_modules/d3-request/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_scale__ = __webpack_require__("./node_modules/d3-scale/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_d3_time__ = __webpack_require__("./node_modules/d3-time/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_d3_time_format__ = __webpack_require__("./node_modules/d3-time-format/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_d3_timer__ = __webpack_require__("./node_modules/d3-timer/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3_transition__ = __webpack_require__("./node_modules/d3-transition/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_d3_voronoi__ = __webpack_require__("./node_modules/d3-voronoi/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_d3_zoom__ = __webpack_require__("./node_modules/d3-zoom/index.js");
/* unused harmony namespace reexport */

































/***/ }),

/***/ "./src/app/charts/chartTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var chartGroups = [
    {
        name: 'Bar Charts',
        charts: [
            {
                name: 'Vertical Bar Chart',
                selector: 'bar-vertical',
                inputFormat: 'singleSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'yScaleMax'
                ]
            },
            {
                name: 'Horizontal Bar Chart',
                selector: 'bar-horizontal',
                inputFormat: 'singleSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'xScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'Country',
                    xAxisLabel: 'GDP Per Capita',
                }
            },
            {
                name: 'Grouped Vertical Bar Chart',
                selector: 'bar-vertical-2d',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'yScaleMax'
                ]
            },
            {
                name: 'Grouped Horizontal Bar Chart',
                selector: 'bar-horizontal-2d',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'xScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'Country',
                    xAxisLabel: 'GDP Per Capita',
                }
            },
            {
                name: 'Stacked Vertical Bar Chart',
                selector: 'bar-vertical-stacked',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'yScaleMax'
                ]
            },
            {
                name: 'Stacked Horizontal Bar Chart',
                selector: 'bar-horizontal-stacked',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled', 'xScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'Country',
                    xAxisLabel: 'GDP Per Capita',
                }
            },
            {
                name: 'Normalized Vertical Bar Chart',
                selector: 'bar-vertical-normalized',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled'
                ],
                defaults: {
                    yAxisLabel: 'Normalized GDP Per Capita',
                    xAxisLabel: 'Country',
                }
            },
            {
                name: 'Normalized Horizontal Bar Chart',
                selector: 'bar-horizontal-normalized',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled'
                ],
                defaults: {
                    yAxisLabel: 'Country',
                    xAxisLabel: 'Normalized GDP Per Capita',
                }
            }
        ]
    },
    {
        name: 'Pie Charts',
        charts: [
            {
                name: 'Pie Chart',
                selector: 'pie-chart',
                inputFormat: 'singleSeries',
                options: [
                    'animations', 'colorScheme', 'gradient', 'showLegend', 'legendTitle', 'doughnut', 'arcWidth',
                    'explodeSlices', 'showLabels', 'tooltipDisabled'
                ]
            },
            {
                name: 'Advanced Pie Chart',
                selector: 'advanced-pie-chart',
                inputFormat: 'singleSeries',
                options: ['animations', 'colorScheme', 'gradient', 'tooltipDisabled']
            },
            {
                name: 'Pie Grid',
                selector: 'pie-grid',
                inputFormat: 'singleSeries',
                options: ['animations', 'colorScheme', 'tooltipDisabled']
            }
        ]
    },
    {
        name: 'Line/Area Charts',
        charts: [
            {
                name: 'Line Chart',
                selector: 'line-chart',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
                    'rangeFillOpacity', 'roundDomains', 'tooltipDisabled', 'showRefLines',
                    'referenceLines', 'showRefLabels',
                    'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'GDP Per Capita',
                    xAxisLabel: 'Census Date',
                    linearScale: true
                }
            },
            {
                name: 'Polar Chart',
                selector: 'polar-chart',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'showGridLines', 'curveClosed',
                    'roundDomains', 'tooltipDisabled'
                ],
                defaults: {
                    yAxisLabel: 'GDP Per Capita',
                    xAxisLabel: 'Census Date',
                    linearScale: true
                }
            },
            {
                name: 'Area Chart',
                selector: 'area-chart',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
                    'roundDomains', 'tooltipDisabled',
                    'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'GDP Per Capita',
                    xAxisLabel: 'Census Date',
                    linearScale: true
                }
            },
            {
                name: 'Stacked Area Chart',
                selector: 'area-chart-stacked',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
                    'roundDomains', 'tooltipDisabled',
                    'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
                ],
                defaults: {
                    yAxisLabel: 'GDP Per Capita',
                    xAxisLabel: 'Census Date',
                    linearScale: true
                }
            },
            {
                name: 'Normalized Area Chart',
                selector: 'area-chart-normalized',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
                    'roundDomains', 'tooltipDisabled'
                ],
                defaults: {
                    yAxisLabel: 'Normalized GDP Per Capita',
                    xAxisLabel: 'Census Date',
                    linearScale: true
                }
            },
        ]
    },
    {
        name: 'Other Charts',
        charts: [
            {
                name: 'Bubble Chart',
                selector: 'bubble-chart',
                inputFormat: 'bubble',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'showLegend', 'legendTitle',
                    'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'showGridLines',
                    'roundDomains', 'autoScale', 'minRadius', 'maxRadius', 'tooltipDisabled',
                    'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
                ],
                defaults: {
                    xAxisLabel: 'Census Date',
                    yAxisLabel: 'Life expectancy [years]'
                }
            },
            {
                name: 'Force Directed Graph',
                selector: 'force-directed-graph',
                inputFormat: 'graph',
                options: ['animations', 'colorScheme', 'showLegend', 'legendTitle', 'tooltipDisabled']
            },
            {
                name: 'Heat Map',
                selector: 'heat-map',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend',
                    'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'innerPadding', 'tooltipDisabled'
                ],
                defaults: {
                    yAxisLabel: 'Census Date',
                    cAxisLabel: 'Country'
                }
            },
            {
                name: 'Tree Map',
                selector: 'tree-map',
                inputFormat: 'singleSeries',
                options: ['animations', 'colorScheme', 'tooltipDisabled', 'gradient']
            },
            {
                name: 'Number Cards',
                selector: 'number-card',
                inputFormat: 'singleSeries',
                options: ['animations', 'colorScheme']
            },
            {
                name: 'Gauge',
                selector: 'gauge',
                inputFormat: 'singleSeries',
                options: [
                    'showLegend', 'legendTitle', 'colorScheme', 'min', 'max', 'largeSegments', 'smallSegments', 'units',
                    'angleSpan', 'startAngle', 'showAxis', 'margin', 'tooltipDisabled', 'animations',
                ]
            },
            {
                name: 'Linear Gauge',
                selector: 'linear-gauge',
                inputFormat: 'single',
                options: ['animations', 'colorScheme', 'value', 'previousValue', 'min', 'max', 'units']
            }
        ]
    },
    {
        name: 'Demos',
        charts: [
            {
                name: 'Combo Chart',
                selector: 'combo-chart',
                inputFormat: 'comboChart',
                options: [
                    'animations', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled'
                ]
            },
            {
                name: 'Heat Map - Calendar',
                selector: 'calendar',
                inputFormat: 'calendarData',
                options: [
                    'animations', 'colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend',
                    'innerPadding', 'tooltipDisabled'
                ],
                defaults: {
                    width: 1100,
                    height: 200
                }
            },
            {
                name: 'Number Cards - Status',
                selector: 'status-demo',
                inputFormat: 'statusData',
                options: ['animations', 'colorScheme']
            },
            {
                name: 'TreeMap - Interactive',
                selector: 'tree-map-demo',
                inputFormat: 'treemap',
                options: ['animations', 'colorScheme']
            },
            {
                name: 'Equation Plots',
                selector: 'plot-demo',
                inputFormat: 'statusData',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis',
                    'autoScale', 'showGridLines', 'gradient',
                    'roundDomains', 'tooltipDisabled'
                ]
            },
            {
                name: 'Tooltip Templates',
                selector: 'tooltip-templates',
                inputFormat: 'singleSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
                    'showGridLines', 'roundDomains', 'tooltipDisabled'
                ]
            },
            {
                name: 'Sparklines',
                selector: 'sparkline',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'curve'
                ]
            },
            {
                name: 'Line Chart with Reference Lines',
                selector: 'line-reference-lines',
                inputFormat: 'multiSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
                    'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
                    'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
                    'rangeFillOpacity', 'roundDomains', 'tooltipDisabled', 'showRefLines',
                    'referenceLines', 'showRefLabels'
                ],
                defaults: {
                    yAxisLabel: 'GDP Per Capita',
                    xAxisLabel: 'Year',
                    linearScale: false
                }
            },
            {
                name: 'Timeline Filter Bar Chart',
                selector: 'timeline-filter-bar-chart-demo',
                inputFormat: 'singleSeries',
                options: [
                    'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'showGridLines',
                    'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel'
                ]
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["a"] = (chartGroups);


/***/ }),

/***/ "./src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-xs=\"30\" fxFlex=\"100\" class=\"pb-3\">\n    <mat-card class=\"shadow-none\">\n      <mat-accordion displayMode=\"flat\">\n        <mat-expansion-panel expanded=\"true\">\n          <mat-expansion-panel-header>Chart type</mat-expansion-panel-header>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Chart Type\" [ngModel]=\"chartType\" (ngModelChange)=\"selectChart($event)\">\n              <mat-optgroup *ngFor=\"let group of chartGroups\" [label]=\"group.name\">\n                <mat-option *ngFor=\"let chart of group.charts\" [value]=\"chart.selector\">\n                  {{chart.name}}\n                </mat-option>\n              </mat-optgroup>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>Data</mat-expansion-panel-header>\n          <div class=\"mat-blue-grey mat-text-white pa-xs\">\n            <pre *ngIf=\"chart.inputFormat === 'singleSeries'\">{{single | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'multiSeries' && !linearScale\">{{multi | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'multiSeries' && linearScale && (!range)\">{{dateData | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'multiSeries' && linearScale && range\">{{dateDataWithRange | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'bubble'\">{{bubble | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'comboChart'\">{{barChart | json}}</pre>\n            <pre *ngIf=\"chart.inputFormat === 'comboChart'\">{{lineChartSeries | json}}</pre>\n          </div>\n\n          <mat-checkbox [checked]=\"realTimeData\" (change)=\"realTimeData = $event.target.checked\">\n            Real-time\n          </mat-checkbox>\n\n          <div *ngIf=\"chartType === 'line-chart'\">\n            <br />\n            <mat-checkbox [checked]=\"range\" (change)=\"range = $event.target.checked\">\n              Show min and max values\n            </mat-checkbox>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>Dimensions</mat-expansion-panel-header>\n\n          <mat-checkbox [checked]=\"fitContainer\" [(ngModel)]=\"fitContainer\" (change)=\"toggleFitContainer(fitContainer)\">\n            Fit Container\n          </mat-checkbox>\n\n          <div class=\"mt-2\" *ngIf=\"!fitContainer\">\n            <mat-form-field>\n              <input matInput placeholder=\"Width\" type=\"number\" [(ngModel)]=\"width\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Height\" type=\"number\" [(ngModel)]=\"height\">\n            </mat-form-field>\n\n            <br />\n            <button mat-raised-button (click)=\"applyDimensions()\">Apply dimensions</button>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>Color scheme</mat-expansion-panel-header>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Color scheme\" [(ngModel)]=\"selectedColorScheme\" (ngModelChange)=\"setColorScheme($event)\">\n              <mat-option *ngFor=\"let scheme of colorSets\" [value]=\"scheme.name\">\n                {{scheme.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field *ngIf=\"chart.options.includes('schemeType')\">\n            <mat-select placeholder=\"Color scheme\" [(ngModel)]=\"schemeType\" (ngModelChange)=\"schemeType = $event\">\n              <mat-option value=\"ordinal\">Ordinal</mat-option>\n              <mat-option value=\"linear\">Linear</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Range fill color opacity (0.0 - 1.0)\" type=\"number\" [(ngModel)]=\"rangeFillOpacity\">\n          </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>Options</mat-expansion-panel-header>\n\n          <div *ngIf=\"chart.options.includes('animations')\">\n            <mat-checkbox [checked]=\"animations\" (change)=\"animations = $event.checked\">\n              Animations\n            </mat-checkbox>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('showXAxis')\">\n            <mat-checkbox [checked]=\"showXAxis\" (change)=\"showXAxis = $event.checked\">\n              Show X Axis\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showRefLabels')\">\n            <mat-checkbox [checked]=\"showRefLabels\" (change)=\"showRefLabels = $event.checked\">\n              Show Reference Labels\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showRefLines')\">\n            <mat-checkbox [checked]=\"showRefLines\" (change)=\"showRefLines = $event.checked\">\n              Show Reference Lines\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showYAxis')\">\n            <mat-checkbox [checked]=\"showYAxis\" (change)=\"showYAxis = $event.checked\">\n              Show Y Axis\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showGridLines')\">\n            <mat-checkbox [checked]=\"showGridLines\" (change)=\"showGridLines = $event.checked\">\n              Show Grid Lines\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('roundDomains')\">\n            <mat-checkbox [checked]=\"roundDomains\" (change)=\"roundDomains = $event.checked\">\n              Round Domains\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('gradient')\">\n            <mat-checkbox [checked]=\"gradient\" (change)=\"gradient = $event.checked\">\n              Use Gradients\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showLegend')\">\n            <mat-checkbox [checked]=\"showLegend\" (change)=\"showLegend = $event.checked\">\n              Show Legend\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('roundEdges')\">\n            <mat-checkbox [checked]=\"roundEdges\" (change)=\"roundEdges = $event.checked\">\n              Round Bar Edges\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('legendTitle')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Legend Title\" type=\"text\" [(ngModel)]=\"legendTitle\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('tooltipDisabled')\">\n            <mat-checkbox [checked]=\"tooltipDisabled\" (change)=\"tooltipDisabled = $event.checked\">\n              Disable tooltip\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('showXAxisLabel')\">\n            <mat-checkbox [checked]=\"showXAxisLabel\" (change)=\"showXAxisLabel = $event.checked\">\n              Show X Axis Label\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('xAxisLabel')\">\n            <mat-form-field>\n              <input matInput placeholder=\"X Axis Label\" type=\"text\" [(ngModel)]=\"xAxisLabel\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('showYAxisLabel')\">\n            <mat-checkbox [checked]=\"showYAxisLabel\" (change)=\"showYAxisLabel = $event.checked\">\n              Show Y Axis Label\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('yAxisLabel')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Y Axis Label\" type=\"text\" [(ngModel)]=\"yAxisLabel\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('showLabels')\">\n            <mat-checkbox [checked]=\"showLabels\" (change)=\"showLabels = $event.checked\">\n              Show Labels\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('doughnut')\">\n            <mat-checkbox [checked]=\"doughnut\" (change)=\"doughnut = $event.checked\">\n              Doughnut\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('arcWidth') && doughnut\">\n            <mat-form-field>\n              <input matInput placeholder=\"Arc width (fraction of radius)\" type=\"number\" [disabled]=\"!doughnut\" [(ngModel)]=\"arcWidth\" max=\"1\" min=\"0\" step=\"0.01\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('explodeSlices') && !doughnut\">\n            <mat-checkbox [checked]=\"explodeSlices\" (change)=\"explodeSlices = $event.checked\">\n              Explode Slices\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('autoScale')\">\n            <mat-checkbox [checked]=\"autoScale\" (change)=\"autoScale = $event.checked\">\n              Auto Scale\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('timeline')\">\n            <mat-checkbox [checked]=\"timeline\" (change)=\"timeline = $event.checked\">\n              Timeline\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('curve')\">\n            <mat-form-field>\n              <mat-select placeholder=\"Line Interpolation\" [(ngModel)]=\"curveType\"\n              (ngModelChange)=\"curve = getInterpolationType($event)\">\n                <mat-option *ngFor=\"let interpolationType of interpolationTypes\" [value]=\"interpolationType\">\n                  {{interpolationType}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('curveClosed')\">\n            <mat-form-field>\n              <mat-select placeholder=\"Line Interpolation\" [(ngModel)]=\"closedCurveType\"\n              (ngModelChange)=\"closedCurve = getInterpolationType($event)\">\n              <mat-option *ngFor=\"let interpolationType of closedInterpolationTypes\" [value]=\"interpolationType\">\n                  {{interpolationType}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('min')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Min value\" type=\"number\" [(ngModel)]=\"gaugeMin\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('max')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Max value\" type=\"number\" [(ngModel)]=\"gaugeMax\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('innerPadding')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Inner padding\" [(ngModel)]=\"innerPadding\" min=\"0\" step=\"1\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('barPadding')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Padding between bars\" type=\"number\" [(ngModel)]=\"barPadding\" min=\"0\" step=\"1\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('groupPadding')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Padding between groups\" type=\"number\" [(ngModel)]=\"groupPadding\" min=\"0\" step=\"1\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('value')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Value\" type=\"number\" [(ngModel)]=\"gaugeValue\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('previousValue')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Previous value\" type=\"number\" [(ngModel)]=\"gaugePreviousValue\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('angleSpan')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Angle span\" type=\"number\" [(ngModel)]=\"gaugeAngleSpan\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('startAngle')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Start Angle\" type=\"number\" [(ngModel)]=\"gaugeStartAngle\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('showAxis')\">\n            <mat-checkbox [checked]=\"gaugeShowAxis\" (change)=\"gaugeShowAxis = $event.checked\">\n              Show Axis\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"chart.options.includes('largeSegments')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Number of large segments\" type=\"number\" [(ngModel)]=\"gaugeLargeSegments\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('smallSegments')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Number of small segments\" type=\"number\" [(ngModel)]=\"gaugeSmallSegments\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('units')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Units\" type=\"text\" [(ngModel)]=\"gaugeUnits\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('margin')\">\n            <mat-checkbox [checked]=\"margin\" (change)=\"margin = $event.checked\">\n              Show Margin\n            </mat-checkbox>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('margin') && margin\">\n            <mat-form-field>\n              <input matInput placeholder=\"Top\" type=\"number\" [(ngModel)]=\"marginTop\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Right\" type=\"number\" [(ngModel)]=\"marginRight\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Bottom\" type=\"number\" [(ngModel)]=\"marginBottom\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Left\" type=\"number\" [(ngModel)]=\"marginLeft\">\n            </mat-form-field>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('minRadius')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Minimum Radius\" type=\"number\" [(ngModel)]=\"minRadius\">\n            </mat-form-field>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('maxRadius')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Maximum Radius\" type=\"number\" [(ngModel)]=\"maxRadius\">\n            </mat-form-field>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('xScaleMin')\">\n            <div *ngIf=\"chartType !== 'bubble-chart'\">\n              <label></label>\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"minDatePicker\" [(ngModel)]=\"xScaleMin\" placeholder=\"Minimum X-Scale value\">\n                <mat-datepicker-toggle matSuffix [for]=\"minDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #minDatePicker [touchUi]=\"touch\" [disabled]=\"datepickerDisabled\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"chartType === 'bubble-chart'\">\n              <mat-form-field>\n                <input matInput placeholder=\"Minimum X-Scale value\" type=\"number\" [(ngModel)]=\"xScaleMin\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('xScaleMax')\">\n            <div *ngIf=\"!chartType.startsWith('bar-horizontal') && chartType !== 'bubble-chart'\">\n              <mat-form-field *ngIf=\"!chartType.startsWith('bar-horizontal')\">\n                <input matInput [matDatepicker]=\"maxDatePicker\" [(ngModel)]=\"xScaleMax\" placeholder=\"Maximum X-Scale value\">\n                <mat-datepicker-toggle matSuffix [for]=\"maxDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #maxDatePicker [touchUi]=\"touch\" [disabled]=\"datepickerDisabled\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"chartType.startsWith('bar-horizontal') || chartType === 'bubble-chart'\">\n              <mat-form-field>\n                <input matInput placeholder=\"Maximum X-Scale value\" type=\"number\" [(ngModel)]=\"xScaleMax\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div *ngIf=\"chart.options.includes('yScaleMin')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Minimum Y-Scale value\" type=\"number\" [(ngModel)]=\"yScaleMin\">\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"chart.options.includes('yScaleMax')\">\n            <mat-form-field>\n              <input matInput placeholder=\"Maximum Y-Scale value\" type=\"number\" [(ngModel)]=\"yScaleMax\">\n            </mat-form-field>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-xs=\"70\" fxFlex=\"100\">\n    <mat-card>\n      <mat-toolbar class=\"text-base\">{{chart.name}}</mat-toolbar>\n      <mat-card-content>\n        <div>\n          <ngx-charts-bar-vertical\n            *ngIf=\"chartType === 'bar-vertical'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [customColors]=\"customColors\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            [roundEdges]=\"roundEdges\"\n            [yScaleMax]=\"yScaleMax\"\n            (select)=\"select($event)\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-bar-vertical>\n          <ngx-charts-bar-horizontal\n            *ngIf=\"chartType === 'bar-horizontal'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            [roundEdges]=\"roundEdges\"\n            [xScaleMax]=\"xScaleMax\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal>\n          <ngx-charts-bar-vertical-2d\n            *ngIf=\"chartType === 'bar-vertical-2d'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [groupPadding]=\"groupPadding\"\n            [roundDomains]=\"roundDomains\"\n            [roundEdges]=\"roundEdges\"\n            [yScaleMax]=\"yScaleMax\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-2d>\n          <ngx-charts-bar-horizontal-2d\n            *ngIf=\"chartType === 'bar-horizontal-2d'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [groupPadding]=\"groupPadding\"\n            [roundDomains]=\"roundDomains\"\n            [roundEdges]=\"roundEdges\"\n            [xScaleMax]=\"xScaleMax\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-2d>\n          <ngx-charts-bar-vertical-stacked\n            *ngIf=\"chartType === 'bar-vertical-stacked'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            [yScaleMax]=\"yScaleMax\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-stacked>\n          <ngx-charts-bar-horizontal-stacked\n            *ngIf=\"chartType === 'bar-horizontal-stacked'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            [xScaleMax]=\"xScaleMax\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-stacked>\n          <ngx-charts-bar-vertical-normalized\n            *ngIf=\"chartType === 'bar-vertical-normalized'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-normalized>\n          <ngx-charts-bar-horizontal-normalized\n            *ngIf=\"chartType === 'bar-horizontal-normalized'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-normalized>\n          <ngx-charts-pie-chart\n            *ngIf=\"chartType === 'pie-chart'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [explodeSlices]=\"explodeSlices\"\n            [labels]=\"showLabels\"\n            [doughnut]=\"doughnut\"\n            [arcWidth]=\"arcWidth\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipText]=\"pieTooltipText\"\n            (select)=\"select($event)\">\n          </ngx-charts-pie-chart>\n          <ngx-charts-advanced-pie-chart\n            *ngIf=\"chartType === 'advanced-pie-chart'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipText]=\"pieTooltipText\"\n            (select)=\"select($event)\">\n          </ngx-charts-advanced-pie-chart>\n          <ngx-charts-pie-grid\n            *ngIf=\"chartType === 'pie-grid'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipText]=\"pieTooltipText\"\n            (select)=\"select($event)\">\n          </ngx-charts-pie-grid>\n          <ngx-charts-line-chart\n            *ngIf=\"chartType === 'line-chart'\"\n            [view]=\"view\"\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateDataWithOrWithoutRange\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [xScaleMin]=\"xScaleMin\"\n            [xScaleMax]=\"xScaleMax\"\n            [yScaleMin]=\"yScaleMin\"\n            [yScaleMax]=\"yScaleMax\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [curve]=\"curve\"\n            [rangeFillOpacity]=\"rangeFillOpacity\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-line-chart>\n          <ngx-charts-polar-chart\n            *ngIf=\"chartType === 'polar-chart'\"\n            [view]=\"view\"\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [showGridLines]=\"showGridLines\"\n            [rangeFillOpacity]=\"rangeFillOpacity\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [showSeriesOnHover]=\"showSeriesOnHover\"\n            [curve]=\"closedCurve\"\n            (select)=\"select($event)\">\n          </ngx-charts-polar-chart>\n          <ngx-charts-bubble-chart\n            *ngIf=\"chartType === 'bubble-chart'\"\n            [view]=\"view\"\n            class=\"chart-container\"\n            [results]=\"bubble\"\n            [animations]=\"animations\"\n            [showGridLines]=\"showGridLines\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [xScaleMin]=\"xScaleMin\"\n            [xScaleMax]=\"xScaleMax\"\n            [yScaleMin]=\"yScaleMin\"\n            [yScaleMax]=\"yScaleMax\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [minRadius]=\"minRadius\"\n            [maxRadius]=\"maxRadius\">\n          </ngx-charts-bubble-chart>\n          <ngx-charts-force-directed-graph\n            *ngIf=\"chartType === 'force-directed-graph'\"\n            class=\"chart-container\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [links]=\"graph.links\"\n            [animations]=\"animations\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [nodes]=\"graph.nodes\"\n            [scheme]=\"colorScheme\"\n            [view]=\"view\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-force-directed-graph>\n          <ngx-charts-area-chart\n            *ngIf=\"chartType === 'area-chart'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [xScaleMin]=\"xScaleMin\"\n            [xScaleMax]=\"xScaleMax\"\n            [yScaleMin]=\"yScaleMin\"\n            [yScaleMax]=\"yScaleMax\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [curve]=\"curve\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart>\n          <ngx-charts-area-chart-stacked\n            *ngIf=\"chartType === 'area-chart-stacked'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [timeline]=\"timeline\"\n            [xScaleMin]=\"xScaleMin\"\n            [xScaleMax]=\"xScaleMax\"\n            [yScaleMin]=\"yScaleMin\"\n            [yScaleMax]=\"yScaleMax\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [curve]=\"curve\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart-stacked>\n          <ngx-charts-area-chart-normalized\n            *ngIf=\"chartType === 'area-chart-normalized'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [curve]=\"curve\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart-normalized>\n          <combo-chart-component\n            *ngIf=\"chartType === 'combo-chart'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"comboBarScheme\"\n            [colorSchemeLine]=\"lineChartScheme\"\n            [results]=\"barChart\"\n            [animations]=\"animations\"\n            [lineChart]=\"lineChartSeries\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [yAxisTickFormatting]=\"yLeftTickFormat\"\n            [yLeftAxisScaleFactor]=\"yLeftAxisScale\"\n            [yRightAxisScaleFactor]=\"yRightAxisScale\"\n            [yRightAxisTickFormatting]=\"yRightTickFormat\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showGridLines]=\"showGridLines\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [showRightYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [yAxisLabelRight]=\"yAxisLabelRight\"\n            (select)=\"onSelect($event)\">\n          </combo-chart-component>\n          <ngx-charts-heat-map\n            *ngIf=\"chartType === 'heat-map'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [innerPadding]=\"innerPadding\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n          <ngx-charts-heat-map\n            *ngIf=\"chartType === 'calendar'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"calendarData\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"false\"\n            [showYAxisLabel]=\"false\"\n            [xAxisTickFormatting]=\"calendarAxisTickFormatting\"\n            [tooltipText]=\"calendarTooltipText\"\n            [innerPadding]=\"innerPadding\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n          <ngx-charts-tree-map\n            *ngIf=\"chartType === 'tree-map'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [labelFormatting]=\"gdpLabelFormatting\"\n            [valueFormatting]=\"currencyFormatting\"\n            [gradient]=\"gradient\"\n            (select)=\"select($event)\">\n          </ngx-charts-tree-map>\n          <ngx-charts-number-card\n            *ngIf=\"chartType === 'number-card'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [scheme]=\"colorScheme\"\n            cardColor=\"#232837\"\n            emptyColor=\"#1e222e\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            (select)=\"select($event)\">\n          </ngx-charts-number-card>\n          <div *ngIf=\"chartType === 'status-demo'\">\n            <mat-slider\n              [(ngModel)]=\"salePrice\"\n              [step]=\"100\"\n              [min]=\"0\"\n              [max]=\"10000\"\n              (change)=\"statusData = calcStatusData()\">\n            </mat-slider>\n            Price: ${{salePrice}}\n            <br />\n            <mat-slider\n              [(ngModel)]=\"personnelCost\"\n              [step]=\"100\"\n              [min]=\"0\"\n              [max]=\"10000\"\n              (change)=\"statusData = calcStatusData()\">\n            </mat-slider>\n            Cost: ${{personnelCost}} / hr\n            <ngx-charts-number-card\n              class=\"chart-container\"\n              [view]=\"view\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [scheme]=\"colorScheme\"\n              cardColor=\"#232837\"\n              emptyColor=\"#1e222e\"\n              [results]=\"statusData\"\n              [animations]=\"animations\"\n              [valueFormatting]=\"statusValueFormat\"\n              [labelFormatting]=\"statusLabelFormat\">\n            </ngx-charts-number-card>\n          </div>\n          <ngx-charts-gauge\n            *ngIf=\"chartType === 'gauge'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [textValue]=\"gaugeTextValue\"\n            [scheme]=\"colorScheme\"\n            [min]=\"gaugeMin\"\n            [max]=\"gaugeMax\"\n            [units]=\"gaugeUnits\"\n            [angleSpan]=\"gaugeAngleSpan\"\n            [startAngle]=\"gaugeStartAngle\"\n            [showAxis]=\"gaugeShowAxis\"\n            [bigSegments]=\"gaugeLargeSegments\"\n            [smallSegments]=\"gaugeSmallSegments\"\n            [margin]=\"margin ? [marginTop, marginRight, marginBottom, marginLeft] : null\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-gauge>\n          <ngx-charts-linear-gauge\n            *ngIf=\"chartType === 'linear-gauge'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [animations]=\"animations\"\n            [min]=\"gaugeMin\"\n            [max]=\"gaugeMax\"\n            [value]=\"gaugeValue\"\n            [previousValue]=\"gaugePreviousValue\"\n            [units]=\"gaugeUnits\"\n            (select)=\"select($event)\">\n          </ngx-charts-linear-gauge>\n          <div *ngIf=\"chartType === 'plot-demo'\">\n            <input\n              type=\"text\"\n              [required]=\"true\"\n              [(ngModel)]=\"mathText\"\n              (change)=\"mathFunction = getFunction(mathText); plotData = generatePlotData()\">\n            <ngx-charts-line-chart\n              style=\"position: static; display: inline-block; transform: none;\"\n              [view]=\"view\"\n              class=\"chart-container\"\n              [scheme]=\"colorScheme\"\n              [schemeType]=\"schemeType\"\n              [results]=\"plotData\"\n              [animations]=\"animations\"\n              [legend]=\"false\"\n              [legendTitle]=\"legendTitle\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"showXAxis\"\n              [yAxis]=\"showYAxis\"\n              [showXAxisLabel]=\"false\"\n              [showYAxisLabel]=\"false\"\n              [xAxisLabel]=\"'angle'\"\n              [yAxisLabel]=\"'radius'\"\n              [autoScale]=\"autoScale\"\n              [timeline]=\"timeline\"\n              [showGridLines]=\"showGridLines\"\n              [curve]=\"curves['Cardinal']\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [roundDomains]=\"roundDomains\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              (select)=\"select($event)\">\n            </ngx-charts-line-chart>\n            <p></p>\n            <ngx-charts-polar-chart\n              style=\"position: static; display: inline-block; transform: none;\"\n              [view]=\"view\"\n              class=\"chart-container\"\n              [scheme]=\"colorScheme\"\n              [schemeType]=\"schemeType\"\n              [results]=\"plotData\"\n              [animations]=\"animations\"\n              [legend]=\"false\"\n              [legendTitle]=\"legendTitle\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"false\"\n              [yAxis]=\"true\"\n              [showXAxisLabel]=\"false\"\n              [showYAxisLabel]=\"false\"\n              [xAxisLabel]=\"'angle'\"\n              [yAxisLabel]=\"'radius'\"\n              [autoScale]=\"autoScale\"\n              [showGridLines]=\"showGridLines\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [roundDomains]=\"roundDomains\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              [showSeriesOnHover]=\"showSeriesOnHover\"\n              [curve]=\"curves['Cardinal Closed']\"\n              (select)=\"select($event)\">\n            </ngx-charts-polar-chart>\n          </div>\n          <div class=\"chart-container\"\n            *ngIf=\"chartType === 'tree-map-demo'\"\n            style=\"padding: 10px; border: 1px solid white;\">\n            <h4 style=\"text-align: center;\">\n              <button class=\"btn btn-link\" [class.active]=\"sumBy === 'Size'\" (click)=\"treemapProcess('Size')\">By Size</button>\n              <button class=\"btn btn-link\" [class.active]=\"sumBy === 'Count'\" (click)=\"treemapProcess('Count')\">By Count</button>\n            </h4>\n            <div style=\"height: 17px; font-size: 12px;\">\n              <ng-container *ngFor=\"let item of treemapPath; let last = last;\">\n                <button\n                  class=\"btn btn-link\"\n                  [class.active]=\"last\"\n                  [disabled]=\"last\"\n                  (click)=\"treemapSelect(item)\">{{item.name}} ({{item.value}})\n                </button>\n                <span *ngIf=\"!last\"> / </span>\n              </ng-container>\n            </div>\n            <ngx-charts-tree-map\n              [view]=\"view\"\n              (legendLabelClick)=\"onLegendLabelClick($event)\"\n              [scheme]=\"colorScheme\"\n              [results]=\"treemap\"\n              [animations]=\"animations\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              [gradient]=\"gradient\"\n              (select)=\"treemapSelect($event)\">\n            </ngx-charts-tree-map>\n          </div>\n          <ngx-charts-line-chart\n            *ngIf=\"chartType === 'line-reference-lines'\"\n            [view]=\"view\"\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [animations]=\"animations\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [curve]=\"curve\"\n            [rangeFillOpacity]=\"rangeFillOpacity\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [showRefLines]=\"showRefLines\"\n            [showRefLabels]=\"showRefLabels\"\n            [referenceLines]=\"refLines\"\n            (select)=\"select($event)\">\n          </ngx-charts-line-chart>\n          <ngx-charts-bar-vertical\n            *ngIf=\"chartType === 'tooltip-templates'\"\n            class=\"chart-container\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [customColors]=\"customColors\"\n            [results]=\"single\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [legendTitle]=\"legendTitle\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\">\n            <ng-template #tooltipTemplate let-model=\"model\">\n              <h1>\n                {{getFlag(model.name)}}\n              </h1>\n              <h2>{{model.name}}: {{model.value}}</h2>\n            </ng-template>\n          </ngx-charts-bar-vertical>\n          <ngx-charts-sparkline\n            *ngIf=\"chartType === 'sparkline'\"\n            [view]=\"[100,50]\"\n            class=\"chart-container\"\n            [scheme]=\"'flame'\"\n            [results]=\"sparklineData\"\n            [animations]=\"animations\"\n            [curve]=\"curve\">\n          </ngx-charts-sparkline>\n          <ngx-charts-timeline-filter-bar-chart\n            *ngIf=\"chartType === 'timeline-filter-bar-chart-demo'\"\n            [view]=\"view\"\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"timelineFilterBarData\"\n            [animations]=\"animations\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"false\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"'Executions'\"\n            [showGridLines]=\"showGridLines\"\n            (onFilter)=\"onFilter($event)\">\n          </ngx-charts-timeline-filter-bar-chart>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/charts.component.scss":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  display: block; }\n  :host ::ng-deep .chart-container {\n    height: 400px;\n    width: 100%;\n    display: block; }\n  :host ::ng-deep .ngx-charts .gridline-path {\n    stroke: rgba(0, 0, 0, 0.096);\n    stroke-width: 0.5; }\n  :host ::ng-deep .mat-expansion-panel {\n    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.05) !important;\n            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.05) !important; }\n  :host ::ng-deep pre {\n    font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts_release_utils_color_sets__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/color-sets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_common_label_helper__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/label.helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__("./src/app/charts/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_emoji_flags__ = __webpack_require__("./node_modules/emoji-flags/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_emoji_flags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_emoji_flags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chartTypes__ = __webpack_require__("./src/app/charts/chartTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__combo_chart_data__ = __webpack_require__("./src/app/charts/combo-chart-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-bitwise */










var SMALL_WIDTH_BREAKPOINT = 960;
var monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
var weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });
function multiFormat(value) {
    if (value < 1000) {
        return value.toFixed(2) + "ms";
    }
    value /= 1000;
    if (value < 60) {
        return value.toFixed(2) + "s";
    }
    value /= 60;
    if (value < 60) {
        return value.toFixed(2) + "mins";
    }
    value /= 60;
    return value.toFixed(2) + "hrs";
}
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(location) {
        this.location = location;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.theme = 'dark';
        this.realTimeData = false;
        this.linearScale = false;
        this.range = false;
        this.width = 700;
        this.height = 300;
        this.fitContainer = true;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.legendTitle = 'Legend';
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = '10%';
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.showSeriesOnHover = true;
        this.roundEdges = true;
        this.animations = true;
        this.curves = {
            Basis: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBasis"],
            'Basis Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBasisClosed"],
            Bundle: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBundle"].beta(1),
            Cardinal: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinal"],
            'Cardinal Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinalClosed"],
            'Catmull Rom': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCatmullRom"],
            'Catmull Rom Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCatmullRomClosed"],
            Linear: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"],
            'Linear Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinearClosed"],
            'Monotone X': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveMonotoneX"],
            'Monotone Y': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveMonotoneY"],
            Natural: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveNatural"],
            Step: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStep"],
            'Step After': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStepAfter"],
            'Step Before': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStepBefore"],
            default: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"]
        };
        // line interpolation
        this.curveType = 'Linear';
        this.curve = this.curves[this.curveType];
        this.interpolationTypes = [
            'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
            'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
        ];
        this.closedCurveType = 'Linear Closed';
        this.closedCurve = this.curves[this.closedCurveType];
        this.closedInterpolationTypes = [
            'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
        ];
        this.schemeType = 'ordinal';
        this.rangeFillOpacity = 0.15;
        // Override colors for certain values
        // customColors: any[] = [
        //   {
        //     name: 'Germany',
        //     value: '#0000ff'
        //   }
        // ];
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        // line, area
        this.autoScale = true;
        this.timeline = false;
        // margin
        this.margin = false;
        this.marginTop = 40;
        this.marginRight = 40;
        this.marginBottom = 40;
        this.marginLeft = 40;
        // gauge
        this.gaugeMin = 0;
        this.gaugeMax = 100;
        this.gaugeLargeSegments = 10;
        this.gaugeSmallSegments = 5;
        this.gaugeTextValue = '';
        this.gaugeUnits = 'alerts';
        this.gaugeAngleSpan = 240;
        this.gaugeStartAngle = -120;
        this.gaugeShowAxis = true;
        this.gaugeValue = 50; // linear gauge value
        this.gaugePreviousValue = 70;
        // Combo Chart
        this.barChart = __WEBPACK_IMPORTED_MODULE_9__combo_chart_data__["a" /* barChart */];
        this.lineChartSeries = __WEBPACK_IMPORTED_MODULE_9__combo_chart_data__["b" /* lineChartSeries */];
        this.lineChartScheme = {
            name: 'coolthree',
            selectable: true,
            group: 'Ordinal',
            domain: [
                '#01579b', '#7aa3e5', '#a8385d', '#00bfa5'
            ]
        };
        this.comboBarScheme = {
            name: 'singleLightBlue',
            selectable: true,
            group: 'Ordinal',
            domain: [
                '#01579b'
            ]
        };
        this.showRightYAxisLabel = true;
        this.yAxisLabelRight = 'Utilization';
        // demos
        this.totalSales = 0;
        this.salePrice = 100;
        this.personnelCost = 100;
        this.mathText = '3 - 1.5*sin(x) + cos(2*x) - 1.5*abs(cos(x))';
        this.treemapPath = [];
        this.sumBy = 'Size';
        // Reference lines
        this.showRefLines = true;
        this.showRefLabels = true;
        // Supports any number of reference lines.
        this.refLines = [
            { value: 42500, name: 'Maximum' },
            { value: 37750, name: 'Average' },
            { value: 33000, name: 'Minimum' }
        ];
        this.mathFunction = this.getFunction();
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_6__data__["e" /* single */],
            multi: __WEBPACK_IMPORTED_MODULE_6__data__["d" /* multi */],
            countries: __WEBPACK_IMPORTED_MODULE_7_emoji_flags__["data"],
            chartGroups: __WEBPACK_IMPORTED_MODULE_8__chartTypes__["a" /* default */],
            colorSets: __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts_release_utils_color_sets__["a" /* colorSets */],
            graph: Object(__WEBPACK_IMPORTED_MODULE_6__data__["c" /* generateGraph */])(50),
            bubble: __WEBPACK_IMPORTED_MODULE_6__data__["a" /* bubble */],
            plotData: this.generatePlotData(),
            treemap: __WEBPACK_IMPORTED_MODULE_6__data__["g" /* treemap */]
        });
        this.treemapProcess();
        this.dateData = Object(__WEBPACK_IMPORTED_MODULE_6__data__["b" /* generateData */])(5, false);
        this.dateDataWithRange = Object(__WEBPACK_IMPORTED_MODULE_6__data__["b" /* generateData */])(2, true);
        this.setColorScheme('cool');
        this.calendarData = this.getCalendarData();
        this.statusData = this.getStatusData();
        this.sparklineData = Object(__WEBPACK_IMPORTED_MODULE_6__data__["b" /* generateData */])(1, false, 30);
        this.timelineFilterBarData = Object(__WEBPACK_IMPORTED_MODULE_6__data__["f" /* timelineFilterBarData */])();
    }
    Object.defineProperty(ChartsComponent.prototype, "dateDataWithOrWithoutRange", {
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
    ChartsComponent.prototype.ngOnInit = function () {
        this.selectChart('bar-vertical');
        setInterval(this.updateData.bind(this), 1000);
        if (!this.fitContainer) {
            this.applyDimensions();
        }
    };
    ChartsComponent.prototype.updateData = function () {
        if (!this.realTimeData) {
            return;
        }
        this.gaugeValue = this.gaugeMin + Math.floor(Math.random() * (this.gaugeMax - this.gaugeMin));
        var country = this.countries[Math.floor(Math.random() * this.countries.length)];
        var add = Math.random() < 0.7;
        var remove = Math.random() < 0.5;
        if (remove) {
            if (this.single.length > 1) {
                var index = Math.floor(Math.random() * this.single.length);
                this.single.splice(index, 1);
                this.single = this.single.slice();
            }
            if (this.multi.length > 1) {
                var index = Math.floor(Math.random() * this.multi.length);
                this.multi.splice(index, 1);
                this.multi = this.multi.slice();
            }
            if (this.bubble.length > 1) {
                var index = Math.floor(Math.random() * this.bubble.length);
                this.bubble.splice(index, 1);
                this.bubble = this.bubble.slice();
            }
            if (this.graph.nodes.length > 1) {
                var index = Math.floor(Math.random() * this.graph.nodes.length);
                var value_1 = this.graph.nodes[index].value;
                this.graph.nodes.splice(index, 1);
                var nodes = this.graph.nodes.slice();
                var links = this.graph.links.filter(function (link) {
                    return link.source !== value_1 && link.source.value !== value_1 &&
                        link.target !== value_1 && link.target.value !== value_1;
                });
                this.graph = { links: links, nodes: nodes };
            }
        }
        if (add) {
            // single
            var entry = {
                name: country.name,
                value: Math.floor(10000 + Math.random() * 50000)
            };
            this.single = this.single.concat([entry]);
            // multi
            var multiEntry = {
                name: country.name,
                series: [{
                        name: '1990',
                        value: Math.floor(10000 + Math.random() * 50000)
                    }, {
                        name: '2000',
                        value: Math.floor(10000 + Math.random() * 50000)
                    }, {
                        name: '2010',
                        value: Math.floor(10000 + Math.random() * 50000)
                    }]
            };
            this.multi = this.multi.concat([multiEntry]);
            // graph
            var node = { value: country.name };
            var nodes = this.graph.nodes.concat([node]);
            var link = {
                source: country.name,
                target: nodes[Math.floor(Math.random() * (nodes.length - 1))].value,
            };
            var links = this.graph.links.concat([link]);
            this.graph = { links: links, nodes: nodes };
            // bubble
            var bubbleYear = Math.floor((2010 - 1990) * Math.random() + 1990);
            var bubbleEntry = {
                name: country.name,
                series: [{
                        name: '' + bubbleYear,
                        x: new Date(bubbleYear, 0, 1),
                        y: Math.floor(30 + Math.random() * 70),
                        r: Math.floor(30 + Math.random() * 20),
                    }]
            };
            this.bubble = this.bubble.concat([bubbleEntry]);
            this.statusData = this.getStatusData();
        }
        var date = new Date(Math.floor(1473700105009 + Math.random() * 1000000000));
        for (var _i = 0, _a = this.dateData; _i < _a.length; _i++) {
            var series = _a[_i];
            series.series.push({
                name: date,
                value: Math.floor(2000 + Math.random() * 5000)
            });
        }
        this.dateData = this.dateData.slice();
        this.dateDataWithRange = Object(__WEBPACK_IMPORTED_MODULE_6__data__["b" /* generateData */])(2, true);
        if (this.chart.inputFormat === 'calendarData') {
            this.calendarData = this.getCalendarData();
        }
    };
    ChartsComponent.prototype.applyDimensions = function () {
        this.view = [this.width, this.height];
    };
    ChartsComponent.prototype.toggleFitContainer = function (event) {
        this.fitContainer = event;
        if (this.fitContainer) {
            this.view = undefined;
        }
        else {
            this.applyDimensions();
        }
    };
    ChartsComponent.prototype.selectChart = function (chartSelector) {
        this.chartType = chartSelector = chartSelector.replace('/', '');
        for (var _i = 0, _a = this.chartGroups; _i < _a.length; _i++) {
            var group = _a[_i];
            this.chart = group.charts.find(function (x) { return x.selector === chartSelector; });
            if (this.chart) {
                break;
            }
        }
        this.linearScale = false;
        this.yAxisLabel = 'GDP Per Capita';
        this.xAxisLabel = 'Country';
        this.width = 700;
        this.height = 300;
        Object.assign(this, this.chart.defaults);
        if (!this.fitContainer) {
            this.applyDimensions();
        }
    };
    ChartsComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    ChartsComponent.prototype.getInterpolationType = function (curveType) {
        return this.curves[curveType] || this.curves['default'];
    };
    ChartsComponent.prototype.setColorScheme = function (name) {
        this.selectedColorScheme = name;
        this.colorScheme = this.colorSets.find(function (s) { return s.name === name; });
    };
    ChartsComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    ChartsComponent.prototype.getCalendarData = function () {
        // today
        var now = new Date();
        var todaysDay = now.getDate();
        var thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);
        // Monday
        var thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
        var thisMondayDay = thisMonday.getDate();
        var thisMondayYear = thisMonday.getFullYear();
        var thisMondayMonth = thisMonday.getMonth();
        // 52 weeks before monday
        var calendarData = [];
        var getDate = function (d) { return new Date(thisMondayYear, thisMondayMonth, d); };
        for (var week = -52; week <= 0; week++) {
            var mondayDay = thisMondayDay + (week * 7);
            var monday = getDate(mondayDay);
            // one week
            var series = [];
            for (var dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
                var date = getDate(mondayDay - 1 + dayOfWeek);
                // skip future dates
                if (date > now) {
                    continue;
                }
                // value
                var value = (dayOfWeek < 6) ? (date.getMonth() + 1) : 0;
                series.push({
                    date: date,
                    name: weekdayName.format(date),
                    value: value
                });
            }
            calendarData.push({
                name: monday.toString(),
                series: series
            });
        }
        return calendarData;
    };
    ChartsComponent.prototype.calendarAxisTickFormatting = function (mondayString) {
        var monday = new Date(mondayString);
        var month = monday.getMonth();
        var day = monday.getDate();
        var year = monday.getFullYear();
        var lastSunday = new Date(year, month, day - 1);
        var nextSunday = new Date(year, month, day + 6);
        return (lastSunday.getMonth() !== nextSunday.getMonth()) ? monthName.format(nextSunday) : '';
    };
    ChartsComponent.prototype.calendarTooltipText = function (c) {
        return "\n      <span class=\"tooltip-label\">" + c.label + " \u2022 " + c.cell.date.toLocaleDateString() + "</span>\n      <span class=\"tooltip-val\">" + c.data.toLocaleString() + "</span>\n    ";
    };
    ChartsComponent.prototype.pieTooltipText = function (_a) {
        var data = _a.data;
        var label = Object(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_common_label_helper__["a" /* formatLabel */])(data.name);
        var val = Object(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_common_label_helper__["a" /* formatLabel */])(data.value);
        return "\n      <span class=\"tooltip-label\">" + label + "</span>\n      <span class=\"tooltip-val\">$" + val + "</span>\n    ";
    };
    ChartsComponent.prototype.dollarValueFormat = function (c) {
        return "$" + c.value.toLocaleString();
    };
    ChartsComponent.prototype.getStatusData = function () {
        var sales = Math.round(1E4 * Math.random());
        var dur = 36E5 * Math.random();
        return this.calcStatusData(sales, dur);
    };
    ChartsComponent.prototype.calcStatusData = function (sales, dur) {
        if (sales === void 0) { sales = this.statusData[0].value; }
        if (dur === void 0) { dur = this.statusData[2].value; }
        var ret = sales * this.salePrice;
        var cost = sales * dur / 60 / 60 / 1000 * this.personnelCost;
        var ROI = (ret - cost) / cost;
        return [
            {
                name: 'Sales',
                value: sales
            },
            {
                name: 'Gross',
                value: ret,
                extra: { format: 'currency' }
            },
            {
                name: 'Avg. Time',
                value: dur,
                extra: { format: 'time' }
            },
            {
                name: 'Cost',
                value: cost,
                extra: { format: 'currency' }
            },
            {
                name: 'ROI',
                value: ROI,
                extra: { format: 'percent' }
            }
        ];
    };
    ChartsComponent.prototype.statusValueFormat = function (c) {
        switch (c.data.extra ? c.data.extra.format : '') {
            case 'currency':
                return "$" + Math.round(c.value).toLocaleString();
            case 'time':
                return multiFormat(c.value);
            case 'percent':
                return Math.round(c.value * 100) + "%";
            default:
                return c.value.toLocaleString();
        }
    };
    ChartsComponent.prototype.currencyFormatting = function (c) {
        return "$" + Math.round(c.value).toLocaleString();
    };
    ChartsComponent.prototype.gdpLabelFormatting = function (c) {
        return c.label + "<br/><small class=\"number-card-label\">GDP Per Capita</small>";
    };
    ChartsComponent.prototype.statusLabelFormat = function (c) {
        return c.label + "<br/><small class=\"number-card-label\">This week</small>";
    };
    ChartsComponent.prototype.generatePlotData = function () {
        var _this = this;
        if (!this.mathFunction) {
            return [];
        }
        var twoPi = 2 * Math.PI;
        var length = 25;
        var series = Array.apply(null, { length: length })
            .map(function (d, i) {
            var x = i / (length - 1);
            var t = x * twoPi;
            return {
                name: ~~(x * 360),
                value: _this.mathFunction(t)
            };
        });
        return [{
                name: this.mathText,
                series: series
            }];
    };
    ChartsComponent.prototype.getFunction = function (text) {
        if (text === void 0) { text = this.mathText; }
        try {
            text = "with (Math) { return " + this.mathText + " }";
            var fn = new Function('x', text).bind(Math);
            return (typeof fn(1) === 'number') ? fn : null;
        }
        catch (err) {
            return null;
        }
    };
    ChartsComponent.prototype.treemapProcess = function (sumBy) {
        if (sumBy === void 0) { sumBy = this.sumBy; }
        this.sumBy = sumBy;
        var children = __WEBPACK_IMPORTED_MODULE_6__data__["g" /* treemap */][0];
        var value = (sumBy === 'Size') ? sumChildren(children) : countChildren(children);
        this.treemap = [children];
        this.treemapPath = [{ name: 'Top', children: [children], value: value }];
        function sumChildren(node) {
            return node.value = node.size || __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* sum */](node.children, sumChildren);
        }
        function countChildren(node) {
            return node.value = node.children ? __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* sum */](node.children, countChildren) : 1;
        }
    };
    ChartsComponent.prototype.treemapSelect = function (item) {
        var node;
        if (item.children) {
            var idx = this.treemapPath.indexOf(item);
            this.treemapPath.splice(idx + 1);
            this.treemap = this.treemapPath[idx].children;
            return;
        }
        node = this.treemap.find(function (d) { return d.name === item.name; });
        if (node.children) {
            this.treemapPath.push(node);
            this.treemap = node.children;
        }
    };
    ChartsComponent.prototype.getFlag = function (country) {
        return this.countries.find(function (c) { return c.name === country; }).emoji;
    };
    ChartsComponent.prototype.onFilter = function (event) {
        console.log('timeline filter', event);
    };
    /*
    **
    Combo Chart
    **
    [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
    exposes the left and right min and max axis values for custom scaling, it is probably best to
    scale one axis in relation to the other axis but for flexibility to scale either the left or
    right axis bowth were exposed.
    **
    */
    ChartsComponent.prototype.yLeftAxisScale = function (min, max) {
        return { min: "" + min, max: "" + max };
    };
    ChartsComponent.prototype.yRightAxisScale = function (min, max) {
        return { min: "" + min, max: "" + max };
    };
    ChartsComponent.prototype.yLeftTickFormat = function (data) {
        return "" + data.toLocaleString();
    };
    ChartsComponent.prototype.yRightTickFormat = function (data) {
        return data + "%";
    };
    /*
    **
    End of Combo Chart
    **
    */
    ChartsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    ChartsComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("./src/app/charts/charts.component.html"),
            styles: [__webpack_require__("./src/app/charts/charts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sparkline_sparkline_component__ = __webpack_require__("./src/app/charts/sparkline/sparkline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timeline_filter_bar_chart_timeline_filter_bar_chart_component__ = __webpack_require__("./src/app/charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__combo_chart__ = __webpack_require__("./src/app/charts/combo-chart/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__charts_routing__ = __webpack_require__("./src/app/charts/charts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charts_component__ = __webpack_require__("./src/app/charts/charts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__charts_routing__["a" /* ChartsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["Q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sparkline_sparkline_component__["a" /* SparklineComponent */],
                __WEBPACK_IMPORTED_MODULE_7__timeline_filter_bar_chart_timeline_filter_bar_chart_component__["a" /* TimelineFilterBarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__combo_chart__["a" /* ComboChartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__combo_chart__["b" /* ComboSeriesVerticalComponent */]
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_component__ = __webpack_require__("./src/app/charts/charts.component.ts");

var ChartsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__charts_component__["a" /* ChartsComponent */],
        data: {
            heading: 'Charts',
            css: ''
        }
    }
];


/***/ }),

/***/ "./src/app/charts/combo-chart-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export lineChart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lineChartSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return barChart; });
var lineChart = [
    {
        value: 50,
        name: 'USA',
    },
    {
        value: 80,
        name: 'United Kingdom',
    },
    {
        value: 85,
        name: 'France',
    },
    {
        value: 90,
        name: 'Japan',
    },
    {
        value: 100,
        name: 'China'
    }
];
var lineChartSeries = [
    {
        name: 'Tablets',
        series: [
            {
                name: 'USA',
                value: 50
            },
            {
                value: 80,
                name: 'United Kingdom'
            },
            {
                value: 85,
                name: 'France'
            },
            {
                value: 90,
                name: 'Japan'
            },
            {
                value: 100,
                name: 'China'
            }
        ]
    },
    {
        name: 'Cell Phones',
        series: [
            {
                value: 10,
                name: 'USA'
            },
            {
                value: 20,
                name: 'United Kingdom'
            },
            {
                value: 30,
                name: 'France'
            },
            {
                value: 40,
                name: 'Japan'
            },
            {
                value: 10,
                name: 'China'
            }
        ]
    },
    {
        name: 'Computers',
        series: [
            {
                value: 2,
                name: 'USA',
            },
            {
                value: 4,
                name: 'United Kingdom'
            },
            {
                value: 20,
                name: 'France'
            },
            {
                value: 30,
                name: 'Japan'
            },
            {
                value: 35,
                name: 'China'
            }
        ]
    }
];
var barChart = [
    {
        name: 'USA',
        value: 50000
    },
    {
        name: 'United Kingdom',
        value: 30000
    },
    {
        name: 'France',
        value: 10000
    },
    {
        name: 'Japan',
        value: 5000
    },
    {
        name: 'China',
        value: 500
    }
];


/***/ }),

/***/ "./src/app/charts/combo-chart/combo-chart.component.scss":
/***/ (function(module, exports) {

module.exports = ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    -webkit-transition: opacity 100ms ease-in-out;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .area-series.inactive {\n    -webkit-transition: opacity 100ms ease-in-out;\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n  .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n"

/***/ }),

/***/ "./src/app/charts/combo-chart/combo-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__("./node_modules/d3-scale/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-selector */




var ComboChartComponent = /** @class */ (function (_super) {
    __extends(ComboChartComponent, _super);
    function ComboChartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"];
        _this.legend = false;
        _this.legendTitle = 'Legend';
        _this.tooltipDisabled = false;
        _this.showGridLines = true;
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.animations = true;
        _this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.deactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.scaleType = 'linear';
        _this.yOrientLeft = 'left';
        _this.yOrientRight = 'right';
        _this.legendSpacing = 0;
        _this.barPadding = 8;
        return _this;
    }
    ComboChartComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    ComboChartComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType
        });
        if (!this.yAxis) {
            this.legendSpacing = 0;
        }
        else if (this.showYAxisLabel && this.yAxis) {
            this.legendSpacing = 100;
        }
        else {
            this.legendSpacing = 40;
        }
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        // line chart
        this.xDomainLine = this.getXDomainLine();
        if (this.filteredDomain) {
            this.xDomainLine = this.filteredDomain;
        }
        this.yDomainLine = this.getYDomainLine();
        this.seriesDomain = this.getSeriesDomain();
        this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
    };
    ComboChartComponent.prototype.deactivateAll = function () {
        this.activeEntries = this.activeEntries.slice();
        for (var _i = 0, _a = this.activeEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    };
    ComboChartComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomainLine = this.filteredDomain;
        this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
    };
    ComboChartComponent.prototype.getSeriesDomain = function () {
        this.combinedSeries = this.lineChart.slice(0);
        this.combinedSeries.push({
            name: this.yAxisLabel,
            series: this.results
        });
        return this.combinedSeries.map(function (d) { return d.name; });
    };
    ComboChartComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    ComboChartComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date) {
            return 'time';
        }
        if (num) {
            return 'linear';
        }
        return 'ordinal';
    };
    ComboChartComponent.prototype.getXDomainLine = function () {
        var values = [];
        for (var _i = 0, _a = this.lineChart; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'time') {
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        this.xSet = values;
        return domain;
    };
    ComboChartComponent.prototype.getYDomainLine = function () {
        var domain = [];
        for (var _i = 0, _a = this.lineChart; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var min = Math.min.apply(Math, domain);
        var max = Math.max.apply(Math, domain);
        if (this.yRightAxisScaleFactor) {
            var minMax = this.yRightAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
        }
        else {
            min = Math.min(0, min);
            return [min, max];
        }
    };
    ComboChartComponent.prototype.getXScaleLine = function (domain, width) {
        var scale;
        if (this.bandwidth === undefined) {
            this.bandwidth = (this.dims.width - this.barPadding);
        }
        if (this.scaleType === 'time') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleTime"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scalePoint"])()
                .range([this.bandwidth / 2, width - this.bandwidth / 2])
                .domain(domain);
        }
        return scale;
    };
    ComboChartComponent.prototype.getYScaleLine = function (domain, height) {
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ComboChartComponent.prototype.getXScale = function () {
        this.xDomain = this.getXDomain();
        var spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
        return Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleBand"])()
            .rangeRound([0, this.dims.width])
            .paddingInner(spacing)
            .domain(this.xDomain);
    };
    ComboChartComponent.prototype.getYScale = function () {
        this.yDomain = this.getYDomain();
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
            .range([this.dims.height, 0])
            .domain(this.yDomain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ComboChartComponent.prototype.getXDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    ComboChartComponent.prototype.getYDomain = function () {
        var values = this.results.map(function (d) { return d.value; });
        var min = Math.min.apply(Math, [0].concat(values));
        var max = Math.max.apply(Math, values);
        if (this.yLeftAxisScaleFactor) {
            var minMax = this.yLeftAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
        }
        else {
            return [min, max];
        }
    };
    ComboChartComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    ComboChartComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.xDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
        this.colorsLine = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.colorSchemeLine, this.schemeType, domain, this.customColors);
    };
    ComboChartComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colorsLine;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    ComboChartComponent.prototype.updateLineWidth = function (width) {
        this.bandwidth = width;
    };
    ComboChartComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width + 20;
        this.update();
    };
    ComboChartComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    ComboChartComponent.prototype.onActivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item].concat(this.activeEntries);
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    ComboChartComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["LineSeriesComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["LineSeriesComponent"])
    ], ComboChartComponent.prototype, "lineSeriesComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "curve", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showRightYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisLabelRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ComboChartComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yRightAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "roundDomains", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "colorSchemeLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "lineChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yLeftAxisScaleFactor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yRightAxisScaleFactor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "rangeFillOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "animations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboChartComponent.prototype, "activate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboChartComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('tooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ComboChartComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('seriesTooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ComboChartComponent.prototype, "seriesTooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComboChartComponent.prototype, "hideCircles", null);
    ComboChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'combo-chart-component',
            template: "\n    <ngx-charts-chart\n      [view]=\"[width + legendSpacing, height]\"\n      [showLegend]=\"legend\"\n      [legendOptions]=\"legendOptions\"\n      [activeEntries]=\"activeEntries\"\n      [animations]=\"animations\"\n      (legendLabelClick)=\"onClick($event)\"\n      (legendLabelActivate)=\"onActivate($event)\"\n      (legendLabelDeactivate)=\"onDeactivate($event)\">\n\n      <svg:g [attr.transform]=\"transform\" class=\"bar-chart chart\">\n          <svg:g ngx-charts-x-axis\n          *ngIf=\"xAxis\"\n          [xScale]=\"xScale\"\n          [dims]=\"dims\"\n          [showLabel]=\"showXAxisLabel\"\n          [labelText]=\"xAxisLabel\"\n          [tickFormatting]=\"xAxisTickFormatting\"\n          (dimensionsChanged)=\"updateXAxisHeight($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScale\"\n          [dims]=\"dims\"\n          [yOrient]=\"yOrientLeft\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showYAxisLabel\"\n          [labelText]=\"yAxisLabel\"\n          [tickFormatting]=\"yAxisTickFormatting\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScaleLine\"\n          [dims]=\"dims\"\n          [yOrient]=\"yOrientRight\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showRightYAxisLabel\"\n          [labelText]=\"yAxisLabelRight\"\n          [tickFormatting]=\"yRightAxisTickFormatting\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g ngx-combo-charts-series-vertical\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [colors]=\"colors\"\n          [series]=\"results\"\n          [seriesLine]=\"lineChart\"\n          [dims]=\"dims\"\n          [gradient]=\"gradient\"\n          tooltipDisabled=\"true\"\n          [activeEntries]=\"activeEntries\"\n          [animations]=\"animations\"\n          (activate)=\"onActivate($event)\"\n          (deactivate)=\"onDeactivate($event)\"\n          (bandwidth)=\"updateLineWidth($event)\"\n          (select)=\"onClick($event)\">\n        </svg:g>\n      </svg:g>\n      <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n        <svg:g [attr.clip-path]=\"clipPath\">\n          <svg:g *ngFor=\"let series of lineChart; trackBy:trackBy\">\n            <svg:g ngx-charts-line-series\n              [xScale]=\"xScaleLine\"\n              [yScale]=\"yScaleLine\"\n              [colors]=\"colorsLine\"\n              [data]=\"series\"\n              [activeEntries]=\"activeEntries\"\n              [scaleType]=\"scaleType\"\n              [curve]=\"curve\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [animations]=\"animations\"\n            />\n          </svg:g>\n\n          <svg:g ngx-charts-tooltip-area\n            *ngIf=\"!tooltipDisabled\"\n            [dims]=\"dims\"\n            [xSet]=\"xSet\"\n            [xScale]=\"xScaleLine\"\n            [yScale]=\"yScaleLine\"\n            [results]=\"combinedSeries\"\n            [colors]=\"colorsLine\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (hover)=\"updateHoveredVertical($event)\"\n          />\n\n          <svg:g *ngFor=\"let series of lineChart\">\n            <svg:g ngx-charts-circle-series\n              [xScale]=\"xScaleLine\"\n              [yScale]=\"yScaleLine\"\n              [colors]=\"colorsLine\"\n              [data]=\"series\"\n              [scaleType]=\"scaleType\"\n              [visibleValue]=\"hoveredVertical\"\n              [activeEntries]=\"activeEntries\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              (select)=\"onClick($event, series)\"\n              (activate)=\"onActivate($event)\"\n              (deactivate)=\"onDeactivate($event)\"\n            />\n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
            styles: [__webpack_require__("./src/app/charts/combo-chart/combo-chart.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], ComboChartComponent);
    return ComboChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/charts/combo-chart/combo-series-vertical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboSeriesVerticalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts_release_common_label_helper__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/label.helper.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-selector */



var ComboSeriesVerticalComponent = /** @class */ (function () {
    function ComboSeriesVerticalComponent() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bandwidth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComboSeriesVerticalComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    ComboSeriesVerticalComponent.prototype.update = function () {
        var _this = this;
        var width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
        }
        var d0 = 0;
        var total;
        if (this.type === 'normalized') {
            total = this.series.map(function (d) { return d.value; }).reduce(function (sum, d) { return sum + d; }, 0);
        }
        this.bars = this.series.map(function (d, index) {
            var value = d.value;
            var label = d.name;
            var formattedLabel = Object(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts_release_common_label_helper__["a" /* formatLabel */])(label);
            var roundEdges = _this.type === 'standard';
            var bar = {
                value: value,
                label: label,
                roundEdges: roundEdges,
                data: d,
                width: width,
                formattedLabel: formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (_this.type === 'standard') {
                bar.height = Math.abs(_this.yScale(value) - _this.yScale(0));
                bar.x = _this.xScale(label);
                if (value < 0) {
                    bar.y = _this.yScale(0);
                }
                else {
                    bar.y = _this.yScale(value);
                }
            }
            else if (_this.type === 'stacked') {
                var offset0 = d0;
                var offset1 = offset0 + value;
                d0 += value;
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (_this.type === 'normalized') {
                var offset0 = d0;
                var offset1 = offset0 + value;
                d0 += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (_this.colors.scaleType === 'ordinal') {
                bar.color = _this.colors.getColor(label);
            }
            else {
                if (_this.type === 'standard') {
                    bar.color = _this.colors.getColor(value);
                    bar.gradientStops = _this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = _this.colors.getColor(bar.offset1);
                    bar.gradientStops = _this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            var tooltipLabel = formattedLabel;
            if (_this.seriesName) {
                tooltipLabel = _this.seriesName + " \u2022 " + formattedLabel;
            }
            _this.getSeriesTooltips(_this.seriesLine, index);
            var lineValue = _this.seriesLine[0].series[index].value;
            var lineName = _this.seriesLine[0].series[index].name;
            bar.tooltipText = "\n        <span class=\"tooltip-label\">" + tooltipLabel + "</span>\n        <span class=\"tooltip-val\"> Y1 - " + value.toLocaleString() + " \u2022 Y2 - " + lineValue.toLocaleString() + "%</span>\n      ";
            return bar;
        });
    };
    ComboSeriesVerticalComponent.prototype.getSeriesTooltips = function (seriesLine, index) {
        return seriesLine.map(function (d) {
            return d.series[index];
        });
    };
    ComboSeriesVerticalComponent.prototype.isActive = function (entry) {
        if (!this.activeEntries) {
            return false;
        }
        var item = this.activeEntries.find(function (d) {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    };
    ComboSeriesVerticalComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    ComboSeriesVerticalComponent.prototype.trackBy = function (index, bar) {
        return bar.label;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "dims", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "series", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "seriesLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "xScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "yScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboSeriesVerticalComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ComboSeriesVerticalComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ComboSeriesVerticalComponent.prototype, "seriesName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "animations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "activate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ComboSeriesVerticalComponent.prototype, "bandwidth", void 0);
    ComboSeriesVerticalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'g[ngx-combo-charts-series-vertical]',
            template: "\n    <svg:g ngx-charts-bar *ngFor=\"let bar of bars; trackBy: trackBy\"\n      [@animationState]=\"'active'\"\n      [width]=\"bar.width\"\n      [height]=\"bar.height\"\n      [x]=\"bar.x\"\n      [y]=\"bar.y\"\n      [fill]=\"bar.color\"\n      [stops]=\"bar.gradientStops\"\n      [data]=\"bar.data\"\n      [orientation]=\"'vertical'\"\n      [roundEdges]=\"bar.roundEdges\"\n      [gradient]=\"gradient\"\n      [isActive]=\"isActive(bar.data)\"\n      [animations]=\"animations\"\n      (select)=\"onClick($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      ngx-tooltip\n      [tooltipDisabled]=\"tooltipDisabled\"\n      [tooltipPlacement]=\"'top'\"\n      [tooltipType]=\"'tooltip'\"\n      [tooltipTitle]=\"bar.tooltipText\">\n    </svg:g>\n  ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('animationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                            opacity: 1,
                            transform: '*',
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'scale(0)' }))
                    ])
                ])
            ]
        })
    ], ComboSeriesVerticalComponent);
    return ComboSeriesVerticalComponent;
}());



/***/ }),

/***/ "./src/app/charts/combo-chart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combo_chart_component__ = __webpack_require__("./src/app/charts/combo-chart/combo-chart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__combo_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combo_series_vertical_component__ = __webpack_require__("./src/app/charts/combo-chart/combo-series-vertical.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__combo_series_vertical_component__["a"]; });




/***/ }),

/***/ "./src/app/charts/sparkline/sparkline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__("./node_modules/d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-selector */




var SparklineComponent = /** @class */ (function (_super) {
    __extends(SparklineComponent, _super);
    function SparklineComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoScale = false;
        _this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"];
        _this.schemeType = 'linear';
        _this.animations = true;
        _this.margin = [0, 0, 0, 0];
        return _this;
    }
    SparklineComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: false,
            showYAxis: false,
            xAxisHeight: 0,
            yAxisWidth: 0,
            showXLabel: false,
            showYLabel: false,
            showLegend: false,
            legendType: this.schemeType
        });
        this.xDomain = this.getXDomain();
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.setColors();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
    };
    SparklineComponent.prototype.getXDomain = function () {
        var values = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'time') {
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        this.xSet = values;
        return domain;
    };
    SparklineComponent.prototype.getYDomain = function () {
        if (this.valueDomain) {
            return this.valueDomain;
        }
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var min = Math.min.apply(Math, domain);
        var max = Math.max.apply(Math, domain);
        if (!this.autoScale) {
            min = Math.min(0, min);
        }
        return [min, max];
    };
    SparklineComponent.prototype.getSeriesDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    SparklineComponent.prototype.getXScale = function (domain, width) {
        var scale;
        if (this.scaleType === 'time') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleTime"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scalePoint"])()
                .range([0, width])
                .padding(0.1)
                .domain(domain);
        }
        return scale;
    };
    SparklineComponent.prototype.getYScale = function (domain, height) {
        var scale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return scale;
    };
    SparklineComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date) {
            return 'time';
        }
        if (num) {
            return 'linear';
        }
        return 'ordinal';
    };
    SparklineComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    SparklineComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    SparklineComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineComponent.prototype, "curve", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SparklineComponent.prototype, "valueDomain", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineComponent.prototype, "animations", void 0);
    SparklineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-charts-sparkline',
            template: "\n    <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"false\"\n      [animations]=\"animations\">\n      <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n        <svg:g>\n          <svg:g *ngFor=\"let series of results; trackBy:trackBy\">\n            <svg:g ngx-charts-line-series\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [colors]=\"colors\"\n              [data]=\"series\"\n              [activeEntries]=\"activeEntries\"\n              [scaleType]=\"scaleType\"\n              [curve]=\"curve\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [animations]=\"animations\"\n            />\n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
            styles: [__webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/base-chart.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], SparklineComponent);
    return SparklineComponent;
}(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineFilterBarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale__ = __webpack_require__("./node_modules/d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_brush__ = __webpack_require__("./node_modules/d3-brush/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_utils__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-selector */
/* tslint:disable:no-output-on-prefix */






var TimelineFilterBarChartComponent = /** @class */ (function (_super) {
    __extends(TimelineFilterBarChartComponent, _super);
    function TimelineFilterBarChartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoScale = false;
        _this.schemeType = 'ordinal';
        _this.showGridLines = true;
        _this.animations = true;
        _this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.margin = [10, 20, 10, 0];
        _this.initialized = false;
        return _this;
    }
    TimelineFilterBarChartComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: false,
            legendType: this.schemeType
        });
        this.xDomain = this.getXDomain();
        this.yDomain = this.getYDomain();
        this.timeScale = this.getTimeScale(this.xDomain, this.dims.width);
        this.xScale = this.getXScale(this.xSet, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.setColors();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
        if (this.brush) {
            this.updateBrush();
        }
        this.filterId = 'filter' + Object(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_utils__["a" /* id */])().toString();
        this.filter = "url(#" + this.filterId + ")";
        if (!this.initialized) {
            this.addBrush();
            this.initialized = true;
        }
    };
    TimelineFilterBarChartComponent.prototype.getXDomain = function () {
        var values = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var d = _a[_i];
            if (!values.includes(d.name)) {
                values.push(d.name);
            }
        }
        this.scaleType = this.getScaleType(values);
        var domain = [];
        var min = new Date(Math.min.apply(Math, values));
        min.setHours(0);
        min.setMinutes(0);
        min.setSeconds(0);
        var max = new Date(Math.max.apply(Math, values));
        max.setHours(23);
        max.setMinutes(59);
        max.setSeconds(59);
        domain = [min.getTime(), max.getTime()];
        this.xSet = values;
        return domain;
    };
    TimelineFilterBarChartComponent.prototype.getYDomain = function () {
        if (this.valueDomain) {
            return this.valueDomain;
        }
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var d = _a[_i];
            if (domain.indexOf(d.value) < 0) {
                domain.push(d.value);
            }
            if (d.min !== undefined) {
                if (domain.indexOf(d.min) < 0) {
                    domain.push(d.min);
                }
            }
            if (d.max !== undefined) {
                if (domain.indexOf(d.max) < 0) {
                    domain.push(d.max);
                }
            }
        }
        var min = Math.min.apply(Math, domain);
        var max = Math.max.apply(Math, domain);
        if (!this.autoScale) {
            min = Math.min(0, min);
        }
        return [min, max];
    };
    TimelineFilterBarChartComponent.prototype.getXScale = function (domain, width) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleBand"])()
            .range([0, width])
            .paddingInner(0.1)
            .domain(domain);
    };
    TimelineFilterBarChartComponent.prototype.getTimeScale = function (domain, width) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleTime"])()
            .range([0, width])
            .domain(domain);
    };
    TimelineFilterBarChartComponent.prototype.getYScale = function (domain, height) {
        var scale = Object(__WEBPACK_IMPORTED_MODULE_1_d3_scale__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return scale;
    };
    TimelineFilterBarChartComponent.prototype.getScaleType = function (values) {
        return 'time';
    };
    TimelineFilterBarChartComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    TimelineFilterBarChartComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.xSet;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
    };
    TimelineFilterBarChartComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width;
        this.update();
    };
    TimelineFilterBarChartComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    TimelineFilterBarChartComponent.prototype.addBrush = function () {
        var _this = this;
        if (this.brush) {
            return;
        }
        var height = this.height;
        var width = this.width;
        this.brush = Object(__WEBPACK_IMPORTED_MODULE_2_d3_brush__["brushX"])()
            .extent([[0, 0], [width, height]])
            .on('brush end', function () {
            var selection = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].selection || _this.xScale.range();
            var newDomain = selection.map(_this.timeScale.invert);
            _this.onFilter.emit(newDomain);
            _this.cd.markForCheck();
        });
        Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this.chartElement.nativeElement)
            .select('.brush')
            .call(this.brush);
    };
    TimelineFilterBarChartComponent.prototype.updateBrush = function () {
        if (!this.brush) {
            return;
        }
        var height = this.dims.height;
        var width = this.dims.width;
        this.brush.extent([[0, 0], [width, height]]);
        Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this.chartElement.nativeElement)
            .select('.brush')
            .call(this.brush);
        // clear hardcoded properties so they can be defined by CSS
        Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this.chartElement.nativeElement).select('.selection')
            .attr('fill', undefined)
            .attr('stroke', undefined)
            .attr('fill-opacity', undefined);
        this.cd.markForCheck();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TimelineFilterBarChartComponent.prototype, "valueDomain", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "animations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TimelineFilterBarChartComponent.prototype, "onFilter", void 0);
    TimelineFilterBarChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-charts-timeline-filter-bar-chart',
            template: "\n    <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"false\"\n      [animations]=\"animations\"\n      class=\"timeline-filter-bar-chart\">\n      <svg:g [attr.transform]=\"transform\" class=\"chart\">\n        <svg:g ngx-charts-x-axis\n          *ngIf=\"xAxis\"\n          [xScale]=\"timeScale\"\n          [dims]=\"dims\"\n          [showLabel]=\"showXAxisLabel\"\n          [labelText]=\"xAxisLabel\"\n          [tickFormatting]=\"xAxisTickFormatting\"\n          (dimensionsChanged)=\"updateXAxisHeight($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showYAxisLabel\"\n          [labelText]=\"yAxisLabel\"\n          [tickFormatting]=\"yAxisTickFormatting\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g ngx-charts-series-vertical\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [colors]=\"colors\"\n          [series]=\"results\"\n          [dims]=\"dims\"\n          [gradient]=\"gradient\"\n          [animations]=\"animations\"\n          tooltipDisabled=\"true\">\n        </svg:g>\n      </svg:g>\n\n      <svg:g [attr.transform]=\"transform\"\n        class=\"timeline\">\n        <svg:filter [attr.id]=\"filterId\">\n          <svg:feColorMatrix in=\"SourceGraphic\"\n              type=\"matrix\"\n              values=\"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\" />\n        </svg:filter>\n        <svg:rect x=\"0\"\n          [attr.width]=\"dims.width\"\n          y=\"0\"\n          [attr.height]=\"dims.height\"\n          class=\"brush-background\"\n        />\n        <svg:g class=\"brush\"></svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], TimelineFilterBarChartComponent);
    return TimelineFilterBarChartComponent;
}(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["BaseChartComponent"]));



/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map