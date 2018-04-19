webpackJsonp(["material.module"],{

/***/ "./node_modules/hammerjs/hammer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ "./src/app/material/autocomplete/autocomplete-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-autocomplete\">\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Reactive</mat-toolbar>\n    <mat-card-content>\n      Reactive length: {{ reactiveStates.length }}\n      <div>Reactive value: {{ stateCtrl.value | json }}</div>\n      <div>Reactive dirty: {{ stateCtrl.dirty }}</div>\n\n      <mat-form-field floatLabel=\"never\">\n        <input matInput placeholder=\"State\" [matAutocomplete]=\"reactiveAuto\" [formControl]=\"stateCtrl\">\n        <mat-autocomplete #reactiveAuto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let state of reactiveStates | async\" [value]=\"state\">\n            <span>{{ state.name }}</span>\n            <span class=\"demo-secondary-text\"> ({{state.code}}) </span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"stateCtrl.reset()\">Reset</button>\n      <button mat-raised-button color=\"primary\" (click)=\"stateCtrl.setValue(states[10])\">Set Value</button>\n      <button mat-raised-button color=\"primary\" (click)=\"stateCtrl.enabled ? stateCtrl.disable() : stateCtrl.enable()\">\n        Toggle Disabled\n      </button>\n    </mat-card-actions>\n\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Template driven</mat-toolbar>\n    <mat-card-content>\n\n      <div>Template-driven value (currentState): {{ currentState }}</div>\n      <div>Template-driven dirty: {{ modelDir ? modelDir.dirty : false }}</div>\n\n      <!-- Added an ngIf below to test that autocomplete works with ngIf -->\n      <mat-form-field *ngIf=\"true\">\n        <input matInput placeholder=\"State\" [matAutocomplete]=\"tdAuto\" [(ngModel)]=\"currentState\"\n          (ngModelChange)=\"tdStates = filterStates(currentState)\" [disabled]=\"tdDisabled\">\n        <mat-autocomplete #tdAuto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let state of tdStates\" [value]=\"state.name\">\n            <span>{{ state.name }}</span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"modelDir.reset()\">Reset</button>\n      <button mat-raised-button color=\"primary\" (click)=\"currentState='California'\">Set Value</button>\n      <button mat-raised-button color=\"primary\" (click)=\"tdDisabled=!tdDisabled\">\n        Toggle Disabled\n      </button>\n    </mat-card-actions>\n\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Option groups</mat-toolbar>\n    <mat-card-content>\n      <div>Option groups (currentGroupedState): {{ currentGroupedState }}</div>\n\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"State\"\n          [matAutocomplete]=\"groupedAuto\"\n          [(ngModel)]=\"currentGroupedState\"\n          (ngModelChange)=\"filteredGroupedStates = filterStateGroups(currentGroupedState)\">\n      </mat-form-field>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<mat-autocomplete #groupedAuto=\"matAutocomplete\">\n  <mat-optgroup *ngFor=\"let group of filteredGroupedStates\"\n    [label]=\"'States starting with ' + group.letter\">\n    <mat-option *ngFor=\"let state of group.states\" [value]=\"state.name\">{{ state.name }}</mat-option>\n  </mat-optgroup>\n</mat-autocomplete>\n"

/***/ }),

/***/ "./src/app/material/autocomplete/autocomplete-demo.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material/autocomplete/autocomplete-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteDemoComponent = /** @class */ (function () {
    function AutocompleteDemoComponent() {
        var _this = this;
        this.currentState = '';
        this.currentGroupedState = '';
        this.topHeightCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0);
        this.tdDisabled = false;
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.tdStates = this.states;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ code: 'CA', name: 'California' });
        this.reactiveStates = this.stateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__["a" /* startWith */])(this.stateCtrl.value), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (val) { return _this.displayFn(val); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (name) { return _this.filterStates(name); }));
        this.filteredGroupedStates = this.groupedStates = this.states.reduce(function (groups, state) {
            var group = groups.find(function (g) { return g.letter === state.name[0]; });
            if (!group) {
                group = { letter: state.name[0], states: [] };
                groups.push(group);
            }
            group.states.push({ code: state.code, name: state.name });
            return groups;
        }, []);
    }
    AutocompleteDemoComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    AutocompleteDemoComponent.prototype.filterStates = function (val) {
        return val ? this._filter(this.states, val) : this.states;
    };
    AutocompleteDemoComponent.prototype.filterStateGroups = function (val) {
        var _this = this;
        if (val) {
            return this.groupedStates
                .map(function (group) { return ({ letter: group.letter, states: _this._filter(group.states, val) }); })
                .filter(function (group) { return group.states.length > 0; });
        }
        return this.groupedStates;
    };
    AutocompleteDemoComponent.prototype._filter = function (states, val) {
        var filterValue = val.toLowerCase();
        return states.filter(function (state) { return state.name.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"])
    ], AutocompleteDemoComponent.prototype, "modelDir", void 0);
    AutocompleteDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autocomplete-demo',
            template: __webpack_require__("./src/app/material/autocomplete/autocomplete-demo.html"),
            styles: [__webpack_require__("./src/app/material/autocomplete/autocomplete-demo.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteDemoComponent);
    return AutocompleteDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/button-toggle/button-toggle-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Button toggles</mat-toolbar>\n  <mat-card-content>\n    <p>\n      <mat-checkbox (change)=\"isVertical = $event.checked\">Show Button Toggles Vertical</mat-checkbox>\n      &nbsp;&nbsp;\n      <mat-checkbox (change)=\"isDisabled = $event.checked\">Disable Button Toggle Items</mat-checkbox>\n    </p>\n\n    <h5 class=\"mt-2\">Exclusive Selection</h5>\n    <section class=\"demo-section\">\n      <mat-button-toggle-group name=\"alignment\" [vertical]=\"isVertical\">\n        <mat-button-toggle value=\"left\"><mat-icon>format_align_left</mat-icon></mat-button-toggle>\n        <mat-button-toggle value=\"center\"><mat-icon>format_align_center</mat-icon></mat-button-toggle>\n        <mat-button-toggle value=\"right\"><mat-icon>format_align_right</mat-icon></mat-button-toggle>\n        <mat-button-toggle value=\"justify\" [disabled]=\"isDisabled\"><mat-icon>format_align_justify</mat-icon></mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <h5 class=\"mt-2\">Disabled Group</h5>\n    <section class=\"demo-section\">\n      <mat-button-toggle-group name=\"checkbox\" [vertical]=\"isVertical\" [disabled]=\"isDisabled\">\n        <mat-button-toggle value=\"bold\">\n          <mat-icon>format_bold</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"italic\">\n          <mat-icon>format_italic</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"underline\">\n          <mat-icon>format_underline</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <h5 class=\"mt-2\">Multiple Selection</h5>\n    <section class=\"demo-section\">\n      <mat-button-toggle-group multiple [vertical]=\"isVertical\">\n        <mat-button-toggle>Flour</mat-button-toggle>\n        <mat-button-toggle>Eggs</mat-button-toggle>\n        <mat-button-toggle>Sugar</mat-button-toggle>\n        <mat-button-toggle [disabled]=\"isDisabled\">Milk</mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <h5 class=\"mt-2\">Single Toggle</h5>\n    <mat-button-toggle>Yes</mat-button-toggle>\n\n    <h5 class=\"mt-2\">Dynamic Exclusive Selection</h5>\n    <section class=\"demo-section\">\n      <mat-button-toggle-group name=\"pies\" [(ngModel)]=\"favoritePie\" [vertical]=\"isVertical\">\n        <mat-button-toggle *ngFor=\"let pie of pieOptions\" [value]=\"pie\">\n          {{pie}}\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n      <small class=\"block\">Your favorite type of pie is: {{favoritePie}}</small>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material/button-toggle/button-toggle-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonToggleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonToggleDemoComponent = /** @class */ (function () {
    function ButtonToggleDemoComponent() {
        this.isVertical = false;
        this.isDisabled = false;
        this.favoritePie = 'Apple';
        this.pieOptions = [
            'Apple',
            'Cherry',
            'Pecan',
            'Lemon',
        ];
    }
    ButtonToggleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-toggle-demo',
            template: __webpack_require__("./src/app/material/button-toggle/button-toggle-demo.html")
        })
    ], ButtonToggleDemoComponent);
    return ButtonToggleDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/button/button-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-button\">\n  <mat-toolbar class=\"text-base\">Buttons</mat-toolbar>\n  <mat-card-content>\n    <button mat-button>flat</button>\n    <button mat-raised-button>raised</button>\n    <button mat-fab>\n      <mat-icon>check</mat-icon>\n    </button>\n    <button mat-fab>Btn</button>\n    <a mat-fab routerLink=\".\">Link</a>\n    <a mat-fab routerLink=\".\"><mat-icon>check</mat-icon></a>\n    <button mat-mini-fab>\n      <mat-icon>check</mat-icon>\n    </button>\n    <button mat-mini-fab>Btn</button>\n    <a mat-mini-fab routerLink=\".\">Link</a>\n    <br>\n    <a href=\"http://www.google.com\" mat-button color=\"primary\">SEARCH</a>\n    <a href=\"http://www.google.com\" mat-raised-button>SEARCH</a>\n    <a href=\"http://www.google.com\" mat-fab>\n      <mat-icon>check</mat-icon>\n    </a>\n    <a href=\"http://www.google.com\" mat-mini-fab>\n      <mat-icon>check</mat-icon>\n    </a>\n    <br>\n    <button mat-button color=\"primary\">primary</button>\n    <button mat-button color=\"accent\">accent</button>\n    <button mat-button color=\"warn\">warn</button>\n    <br>\n    <button mat-raised-button color=\"primary\">primary</button>\n    <button mat-raised-button color=\"accent\">accent</button>\n    <button mat-raised-button color=\"warn\">warn</button>\n    <br>\n    <button mat-fab color=\"primary\">\n      <mat-icon>home</mat-icon>\n    </button>\n    <button mat-fab color=\"accent\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-fab color=\"warn\">\n      <mat-icon>feedback</mat-icon>\n    </button>\n    <br>\n    <button mat-icon-button color=\"primary\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <button mat-icon-button color=\"accent\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n\n    <button mat-icon-button>\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <br>\n    <div>\n      <p>isDisabled: {{isDisabled}}, clickCounter: <span>{{clickCounter}}</span></p>\n      <button mat-raised-button (click)=\"isDisabled=!isDisabled\">\n        Disable buttons\n      </button>\n      <button mat-raised-button (click)=\"button1.focus()\">Focus 1</button>\n      <button mat-raised-button (click)=\"button2.focus()\">Focus 2</button>\n      <button mat-raised-button (click)=\"button3.focus()\">Focus 3</button>\n      <button mat-raised-button (click)=\"button4.focus()\">Focus 4</button>\n    </div>\n    <button mat-button #button1 [disabled]=\"isDisabled\" (click)=\"clickCounter=clickCounter+1\">off</button>\n    <button mat-button #button2 color=\"primary\" [disabled]=\"isDisabled\">off</button>\n    <a href=\"http://www.google.com\" #button3 mat-button color=\"accent\" [disabled]=\"isDisabled\">off</a>\n    <button mat-raised-button #button4 color=\"primary\" [disabled]=\"isDisabled\">off</button>\n    <button mat-mini-fab [disabled]=\"isDisabled\">\n      <mat-icon>check</mat-icon>\n    </button>\n\n    <button mat-icon-button color=\"accent\" [disabled]=\"isDisabled\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <br>\n    <a href=\"http://www.google.com\" mat-button color=\"primary\">SEARCH</a>\n    <button mat-button>DANCE</button>\n    <br>\n    <a href=\"http://www.google.com\" mat-raised-button color=\"primary\">SEARCH</a>\n    <button mat-raised-button>DANCE</button>\n    <br>\n    <button mat-raised-button>More<mat-icon>more_vert</mat-icon></button>\n    <button mat-raised-button>Check<mat-icon>check</mat-icon></button>\n    <button mat-raised-button>Check<mat-icon>favorite</mat-icon></button>\n    <button mat-raised-button>Last<mat-icon>navigate_before</mat-icon></button>\n    <br>\n    <button mat-button>More<mat-icon>more_vert</mat-icon></button>\n    <button mat-button>Check<mat-icon>check</mat-icon></button>\n    <button mat-button>Check<mat-icon>favorite</mat-icon></button>\n    <button mat-button>Last<mat-icon>navigate_before</mat-icon></button>\n    <br>\n    <button mat-raised-button [disabled]=\"toggleDisable\" (click)=\"toggleDisable = true\">Disable</button>\n    <button mat-button [disabled]=\"!toggleDisable\" (click)=\"toggleDisable = false\">Disable</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material/button/button-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-button button, .demo-button a {\n  margin: 8px;\n  text-transform: uppercase; }\n\n.demo-button section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 8px; }\n\n.demo-button p {\n  padding: 5px 15px; }\n"

/***/ }),

/***/ "./src/app/material/button/button-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonDemoComponent = /** @class */ (function () {
    function ButtonDemoComponent() {
        this.isDisabled = false;
        this.clickCounter = 0;
        this.toggleDisable = false;
    }
    ButtonDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-demo',
            template: __webpack_require__("./src/app/material/button/button-demo.html"),
            styles: [__webpack_require__("./src/app/material/button/button-demo.scss")],
        })
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/card/card-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Cards</mat-toolbar>\n  <mat-card-content>\n\n    <mat-card>\n      <mat-card-content>Hello</mat-card-content>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-title-group>\n          <mat-card-title>Card with title</mat-card-title>\n          <mat-card-subtitle>Subtitle</mat-card-subtitle>\n          <img mat-card-md-image src=\"https://source.unsplash.com/90x90\">\n      </mat-card-title-group>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-subtitle>Subtitle</mat-card-subtitle>\n      <mat-card-title>Card with title and footer</mat-card-title>\n      <mat-card-content>\n        <p>This is supporting text.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n      </mat-card-actions>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n\n    <mat-card class=\"mat-card-flat\">\n      <mat-card-title>Easily customizable</mat-card-title>\n      <mat-card-actions>\n        <button mat-button>First</button>\n        <button mat-button>Second</button>\n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-title>Standard Card</mat-card-title>\n      <mat-card-subtitle>Subtitle</mat-card-subtitle>\n      <hr>\n      <mat-card-content>\n        <p>Standard card with content</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n      </mat-card-content>\n      <hr>\n      <mat-card-actions>\n        <button mat-button color=\"accent\">Action</button>\n        <button mat-button>Cancel</button>\n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-header>\n        <img matCardAvatar src=\"assets/images/avatar.jpg\">\n        <mat-card-title>Header title</mat-card-title>\n        <mat-card-subtitle>Header subtitle</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/images/unsplash/18.jpg\">\n      <mat-card-content>\n        <p>Here is some more content</p>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n       <mat-card-title-group>\n          <img mat-card-sm-image src=\"https://source.unsplash.com/80x80\">\n          <mat-card-title>Card with title</mat-card-title>\n          <mat-card-subtitle>Subtitle</mat-card-subtitle>\n       </mat-card-title-group>\n    </mat-card>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/card/card-demo.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  background-color: gray; }\n\n.demo-card-blue {\n  background-color: #b0becc; }\n\n.mat-card {\n  display: inline-block;\n  width: 100%; }\n\n.mat-card-footer {\n  display: initial; }\n"

/***/ }),

/***/ "./src/app/material/card/card-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardDemoComponent = /** @class */ (function () {
    function CardDemoComponent() {
    }
    CardDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-demo',
            template: __webpack_require__("./src/app/material/card/card-demo.html"),
            styles: [__webpack_require__("./src/app/material/card/card-demo.scss")],
        })
    ], CardDemoComponent);
    return CardDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/checkbox/checkbox-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Checkboxes</mat-toolbar>\n  <mat-card-content>\n    <form>\n      <mat-checkbox [(ngModel)]=\"isChecked\"\n                  name=\"cb\"\n                  value=\"basic_checkbox\"\n                  [color]=\"checkboxColor()\"\n                  (change)=\"isIndeterminate = false\"\n                  [indeterminate]=\"isIndeterminate\"\n                  [disabled]=\"isDisabled\"\n                  [align]=\"alignment\">\n        Do you want to <em>foobar</em> the <em>bazquux</em>?\n\n      </mat-checkbox> - <strong>{{printResult()}}</strong>\n    </form>\n    <div class=\"demo-checkboxes\">\n      <input id=\"indeterminate-toggle\"\n            type=\"checkbox\"\n            [(ngModel)]=\"isIndeterminate\"\n            [disabled]=\"isDisabled\">\n      <label for=\"indeterminate-toggle\">Toggle Indeterminate</label>\n      <input id=\"disabled-toggle\" type=\"checkbox\" [(ngModel)]=\"isDisabled\">\n      <label for=\"disabled-toggle\">Toggle Disabled</label>\n      <input id=\"color-toggle\" type=\"checkbox\" [(ngModel)]=\"useAlternativeColor\">\n      <label for=\"color-toggle\">Toggle Color</label>\n    </div>\n    <div>\n      <p>Alignment:</p>\n      <div>\n        <input #start type=\"radio\"\n                      value=\"start\"\n                      id=\"align-start\"\n                      name=\"alignment\"\n                      (click)=\"alignment = start.value\"\n                      checked>\n        <label for=\"align-start\">Start</label>\n      </div>\n      <div>\n        <input #end type=\"radio\"\n                      value=\"end\"\n                      id=\"align-end\"\n                      name=\"alignment\"\n                      (click)=\"alignment = end.value\">\n        <label for=\"align-end\">End</label>\n      </div>\n    </div>\n\n    <h5 class=\"mt-2\">Pseudo checkboxes</h5>\n    <mat-pseudo-checkbox></mat-pseudo-checkbox>\n    <mat-pseudo-checkbox [disabled]=\"true\"></mat-pseudo-checkbox>\n\n    <mat-pseudo-checkbox state=\"checked\"></mat-pseudo-checkbox>\n    <mat-pseudo-checkbox state=\"checked\" [disabled]=\"true\"></mat-pseudo-checkbox>\n\n    <mat-pseudo-checkbox state=\"indeterminate\"></mat-pseudo-checkbox>\n    <mat-pseudo-checkbox state=\"indeterminate\" [disabled]=\"true\"></mat-pseudo-checkbox>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-toolbar class=\"text-base\">Nested checklist</mat-toolbar>\n  <mat-card-content>\n    <app-mat-checkbox-demo-nested-checklist></app-mat-checkbox-demo-nested-checklist>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/checkbox/checkbox-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-checkboxes {\n  margin: 8px 0; }\n"

/***/ }),

/***/ "./src/app/material/checkbox/checkbox-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatCheckboxDemoNestedChecklistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatCheckboxDemoNestedChecklistComponent = /** @class */ (function () {
    function MatCheckboxDemoNestedChecklistComponent() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    MatCheckboxDemoNestedChecklistComponent.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        if (!subtasks) {
            return false;
        }
        return subtasks.every(function (t) { return t.completed; }) ? true
            : subtasks.every(function (t) { return !t.completed; }) ? false
                : task.completed;
    };
    MatCheckboxDemoNestedChecklistComponent.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MatCheckboxDemoNestedChecklistComponent.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    MatCheckboxDemoNestedChecklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mat-checkbox-demo-nested-checklist',
            styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
            template: __webpack_require__("./src/app/material/checkbox/nested-checklist.html"),
        })
    ], MatCheckboxDemoNestedChecklistComponent);
    return MatCheckboxDemoNestedChecklistComponent;
}());

var CheckboxDemoComponent = /** @class */ (function () {
    function CheckboxDemoComponent() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
        this.useAlternativeColor = false;
    }
    CheckboxDemoComponent.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxDemoComponent.prototype.checkboxColor = function () {
        return this.useAlternativeColor ? 'primary' : 'accent';
    };
    CheckboxDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mat-checkbox-demo',
            template: __webpack_require__("./src/app/material/checkbox/checkbox-demo.html"),
            styles: [__webpack_require__("./src/app/material/checkbox/checkbox-demo.scss")],
        })
    ], CheckboxDemoComponent);
    return CheckboxDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/checkbox/nested-checklist.html":
/***/ (function(module, exports) {

module.exports = "<h5>Tasks</h5>\n<ul style=\"list-style: none; padding-left: 0;\">\n  <li *ngFor=\"let task of tasks\">\n    <mat-checkbox [(ngModel)]=\"task.completed\"\n                 [checked]=\"allComplete(task)\"\n                 [indeterminate]=\"someComplete(task.subtasks)\"\n                 (change)=\"setAllCompleted(task.subtasks, $event.checked)\">\n      <h3 class=\"mb-0 pb-0\">{{task.name}}</h3>\n    </mat-checkbox>\n    <ul style=\"list-style: none\">\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/material/chips/chips-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chips-demo\">\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Static chips</mat-toolbar>\n    <mat-card-content>\n      <h5>Simple</h5>\n\n      <mat-chip-list>\n        <mat-chip>Chip 1</mat-chip>\n        <mat-chip>Chip 2</mat-chip>\n        <mat-chip>Chip 3</mat-chip>\n      </mat-chip-list>\n\n      <h5 class=\"mt-3\">Unstyled</h5>\n\n      <mat-chip-list>\n        <mat-basic-chip>Basic Chip 1</mat-basic-chip>\n        <mat-basic-chip>Basic Chip 2</mat-basic-chip>\n        <mat-basic-chip>Basic Chip 3</mat-basic-chip>\n      </mat-chip-list>\n\n      <h5 class=\"mt-3\">Advanced</h5>\n\n      <mat-chip-list selectable=\"false\">\n        <mat-chip color=\"accent\" selected=\"true\">Selected/Colored</mat-chip>\n\n        <mat-chip color=\"warn\" selected=\"true\" *ngIf=\"visible\"\n                 (destroy)=\"displayMessage('chip destroyed')\" (remove)=\"toggleVisible()\">\n          With Events\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n      <div>{{message}}</div>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Dynamic chips</mat-toolbar>\n    <mat-card-content>\n      <h5>Form Field</h5>\n\n      <p>\n        You can easily put the the <code>&lt;mat-chip-list&gt;</code> inside of an\n        <code>&lt;mat-form-field&gt;</code>.\n      </p>\n\n      <button mat-button (click)=\"tabIndex = (tabIndex === 0 ? -1 : 0)\">\n        Set tabIndex to {{tabIndex === 0 ? -1 : 0}}\n      </button>\n      <mat-form-field class=\"has-chip-list\">\n        <mat-chip-list [tabIndex]=\"tabIndex\" #chipList1 [(ngModel)]=\"selectedPeople\" required>\n          <mat-chip  *ngFor=\"let person of people\" [color]=\"color\" [selectable]=\"selectable\"\n                   [removable]=\"removable\" (remove)=\"remove(person)\">\n            {{person.name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n          <input placeholder=\"New Contributor...\"\n                 [matChipInputFor]=\"chipList1\"\n                 [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                 [matChipInputAddOnBlur]=\"addOnBlur\"\n                 (matChipInputTokenEnd)=\"add($event)\" />\n        </mat-chip-list>\n      </mat-form-field>\n\n\n\n      <p>\n        You can also put <code>&lt;mat-form-field&gt;</code> outside of an <code>mat-chip-list</code>.\n        With <code>matChipInput</code> the input work with chip-list\n      </p>\n\n      <mat-form-field>\n        <mat-chip-list [tabIndex]=\"tabIndex\"  #chipList2 [(ngModel)]=\"selectedPeople\" required>\n          <mat-chip *ngFor=\"let person of people\" [color]=\"color\" [selectable]=\"selectable\"\n                   [removable]=\"removable\" (remove)=\"remove(person)\">\n            {{person.name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n        </mat-chip-list>\n        <input placeholder=\"New Contributor...\"\n               [matChipInputFor]=\"chipList2\"\n               [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n               [matChipInputAddOnBlur]=\"addOnBlur\"\n               (matChipInputTokenEnd)=\"add($event)\" />\n      </mat-form-field>\n\n      <p>\n        Chips list without input\n      </p>\n\n\n      <mat-form-field class=\"has-chip-list\">\n        <mat-chip-list #chipList3>\n          <mat-chip *ngFor=\"let person of people\" [color]=\"color\" [selectable]=\"selectable\"\n                   [removable]=\"removable\" (remove)=\"remove(person)\">\n            {{person.name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n        </mat-chip-list>\n      </mat-form-field>\n\n\n      <p>\n        The example above has overridden the <code>[separatorKeys]</code> input to allow for\n        <code>ENTER</code>, <code>COMMA</code> and <code>SEMI COLON</code> keys.\n      </p>\n\n      <h4>Options</h4>\n      <p>\n        <mat-checkbox name=\"selectable\" [(ngModel)]=\"selectable\">Selectable</mat-checkbox>\n        <mat-checkbox name=\"removable\" [(ngModel)]=\"removable\">Removable</mat-checkbox>\n        <mat-checkbox name=\"addOnBlur\" [(ngModel)]=\"addOnBlur\">Add on Blur</mat-checkbox>\n      </p>\n\n      <h5 class=\"mt-3\">Stacked Chips</h5>\n\n      <p>\n        You can also stack the chips if you want them on top of each other and/or use the\n        <code>(focus)</code> event to run custom code.\n      </p>\n\n      <mat-chip-list class=\"mat-chip-list-stacked\" aria-orientation=\"vertical\" [tabIndex]=\"-1\">\n        <mat-chip *ngFor=\"let aColor of availableColors\"\n                 (focus)=\"color = aColor.color\" color=\"{{aColor.color}}\" selected=\"true\">\n          {{aColor.name}}\n        </mat-chip>\n      </mat-chip-list>\n\n      <h5 class=\"mt-3\">NgModel with chip list</h5>\n      <mat-chip-list [multiple]=\"true\" [(ngModel)]=\"selectedColors\">\n        <mat-chip *ngFor=\"let aColor of availableColors\" color=\"{{aColor.color}}\"\n                 [value]=\"aColor.name\" (remove)=\"removeColor(aColor)\">\n          {{aColor.name}}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n\n      The selected colors are <span *ngFor=\"let color of selectedColors\"> {{color}}</span>.\n\n      <h5 class=\"mt-3\">NgModel with single selection chip list</h5>\n      <mat-chip-list [(ngModel)]=\"selectedColor\">\n        <mat-chip *ngFor=\"let aColor of availableColors\" color=\"{{aColor.color}}\"\n                 [value]=\"aColor.name\" (remove)=\"removeColor(aColor)\">\n          {{aColor.name}}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n\n      The selected color is {{selectedColor}}.\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/material/chips/chips-demo.scss":
/***/ (function(module, exports) {

module.exports = ".chips-demo .mat-chip-list-stacked {\n  display: block;\n  max-width: 200px; }\n\n.chips-demo .mat-card {\n  padding: 0;\n  margin: 16px; }\n\n.chips-demo .mat-card .mat-toolbar {\n    margin: 0; }\n\n.chips-demo .mat-card .mat-card-content {\n    padding: 24px; }\n\n.chips-demo .mat-basic-chip {\n  margin: auto 10px; }\n\n.chips-demo mat-chip-list input {\n  width: 150px; }\n\n.has-chip-list {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/material/chips/chips-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChipsDemoComponent = /** @class */ (function () {
    function ChipsDemoComponent() {
        this.tabIndex = 0;
        this.visible = true;
        this.color = '';
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.message = '';
        // Enter, comma, semi-colon
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__["c" /* COMMA */], 186];
        this.selectedPeople = null;
        this.people = [
            { name: 'Kara' },
            { name: 'Jeremy' },
            { name: 'Topher' },
            { name: 'Elad' },
            { name: 'Kristiyan' },
            { name: 'Paul' }
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        this.selectedColors = ['Primary', 'Warn'];
        this.selectedColor = 'Accent';
    }
    ChipsDemoComponent.prototype.displayMessage = function (message) {
        this.message = message;
    };
    ChipsDemoComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our person
        if ((value || '').trim()) {
            this.people.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsDemoComponent.prototype.remove = function (person) {
        var index = this.people.indexOf(person);
        if (index >= 0) {
            this.people.splice(index, 1);
        }
    };
    ChipsDemoComponent.prototype.removeColor = function (color) {
        var index = this.availableColors.indexOf(color);
        if (index >= 0) {
            this.availableColors.splice(index, 1);
        }
        index = this.selectedColors.indexOf(color.name);
        if (index >= 0) {
            this.selectedColors.splice(index, 1);
        }
    };
    ChipsDemoComponent.prototype.toggleVisible = function () {
        this.visible = false;
    };
    ChipsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-chips-demo',
            template: __webpack_require__("./src/app/material/chips/chips-demo.html"),
            styles: [__webpack_require__("./src/app/material/chips/chips-demo.scss")]
        })
    ], ChipsDemoComponent);
    return ChipsDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/dataset/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var COLORS = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'Darkorange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen'
];


/***/ }),

/***/ "./src/app/material/dataset/names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAMES; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMES = [
    'Abbott',
    'Acevedo',
    'Acosta',
    'Adams',
    'Adkins',
    'Aguilar',
    'Aguirre',
    'Albert',
    'Alexander',
    'Alford',
    'Allen',
    'Allison',
    'Alston',
    'Alvarado',
    'Alvarez',
    'Anderson',
    'Andrews',
    'Anthony',
    'Armstrong',
    'Arnold',
    'Ashley',
    'Atkins',
    'Atkinson',
    'Austin',
    'Avery',
    'Avila',
    'Ayala',
    'Ayers',
    'Bailey',
    'Baird',
    'Baker',
    'Baldwin',
    'Ball',
    'Ballard',
    'Banks',
    'Barber',
    'Barker',
    'Barlow',
    'Barnes',
    'Barnett',
    'Barr',
    'Barrera',
    'Barrett',
    'Barron',
    'Barry',
    'Bartlett',
    'Barton',
    'Bass',
    'Bates',
    'Battle',
    'Bauer',
    'Baxter',
    'Beach',
    'Bean',
    'Beard',
    'Beasley',
    'Beck',
    'Becker',
    'Bell',
    'Bender',
    'Benjamin',
    'Bennett',
    'Benson',
    'Bentley',
    'Benton',
    'Berg',
    'Berger',
    'Bernard',
    'Berry',
    'Best',
    'Bird',
    'Bishop',
    'Black',
    'Blackburn',
    'Blackwell',
    'Blair',
    'Blake',
    'Blanchard',
    'Blankenship',
    'Blevins',
    'Bolton',
    'Bond',
    'Bonner',
    'Booker',
    'Boone',
    'Booth',
    'Bowen',
    'Bowers',
    'Bowman',
    'Boyd',
    'Boyer',
    'Boyle',
    'Bradford',
    'Bradley',
    'Bradshaw',
    'Brady',
    'Branch',
    'Bray',
    'Brennan',
    'Brewer',
    'Bridges',
    'Briggs',
    'Bright',
    'Britt',
    'Brock',
    'Brooks',
    'Brown',
    'Browning',
    'Bruce',
    'Bryan',
    'Bryant',
    'Buchanan',
    'Buck',
    'Buckley',
    'Buckner',
    'Bullock',
    'Burch',
    'Burgess',
    'Burke',
    'Burks',
    'Burnett',
    'Burns',
    'Burris',
    'Burt',
    'Burton',
    'Bush',
    'Butler',
    'Byers',
    'Byrd',
    'Cabrera',
    'Cain',
    'Calderon',
    'Caldwell',
    'Calhoun',
    'Callahan',
    'Camacho',
    'Cameron',
    'Campbell',
    'Campos',
    'Cannon',
    'Cantrell',
    'Cantu',
    'Cardenas',
    'Carey',
    'Carlson',
    'Carney',
    'Carpenter',
    'Carr',
    'Carrillo',
    'Carroll',
    'Carson',
    'Carter',
    'Carver',
    'Case',
    'Casey',
    'Cash',
    'Castaneda',
    'Castillo',
    'Castro',
    'Cervantes',
    'Chambers',
    'Chan',
    'Chandler',
    'Chaney',
    'Chang',
    'Chapman',
    'Charles',
    'Chase',
    'Chavez',
    'Chen',
    'Cherry',
    'Christensen',
    'Christian',
    'Church',
    'Clark',
    'Clarke',
    'Clay',
    'Clayton',
    'Clements',
    'Clemons',
    'Cleveland',
    'Cline',
    'Cobb',
    'Cochran',
    'Coffey',
    'Cohen',
    'Cole',
    'Coleman',
    'Collier',
    'Collins',
    'Colon',
    'Combs',
    'Compton',
    'Conley',
    'Conner',
    'Conrad',
    'Contreras',
    'Conway',
    'Cook',
    'Cooke',
    'Cooley',
    'Cooper',
    'Copeland',
    'Cortez',
    'Cote',
    'Cotton',
    'Cox',
    'Craft',
    'Craig',
    'Crane',
    'Crawford',
    'Crosby',
    'Cross',
    'Cruz',
    'Cummings',
    'Cunningham',
    'Curry',
    'Curtis',
    'Dale',
    'Dalton',
    'Daniel',
    'Daniels',
    'Daugherty',
    'Davenport',
    'David',
    'Davidson',
    'Davis',
    'Dawson',
    'Day',
    'Dean',
    'Decker',
    'Dejesus',
    'Delacruz',
    'Delaney',
    'Deleon',
    'Delgado',
    'Dennis',
    'Diaz',
    'Dickerson',
    'Dickson',
    'Dillard',
    'Dillon',
    'Dixon',
    'Dodson',
    'Dominguez',
    'Donaldson',
    'Donovan',
    'Dorsey',
    'Dotson',
    'Douglas',
    'Downs',
    'Doyle',
    'Drake',
    'Dudley',
    'Duffy',
    'Duke',
    'Duncan',
    'Dunlap',
    'Dunn',
    'Duran',
    'Durham',
    'Dyer',
    'Eaton',
    'Edwards',
    'Elliott',
    'Ellis',
    'Ellison',
    'Emerson',
    'England',
    'English',
    'Erickson',
    'Espinoza',
    'Estes',
    'Estrada',
    'Evans',
    'Everett',
    'Ewing',
    'Farley',
    'Farmer',
    'Farrell',
    'Faulkner',
    'Ferguson',
    'Fernandez',
    'Ferrell',
    'Fields',
    'Figueroa',
    'Finch',
    'Finley',
    'Fischer',
    'Fisher',
    'Fitzgerald',
    'Fitzpatrick',
    'Fleming',
    'Fletcher',
    'Flores',
    'Flowers',
    'Floyd',
    'Flynn',
    'Foley',
    'Forbes',
    'Ford',
    'Foreman',
    'Foster',
    'Fowler',
    'Fox',
    'Francis',
    'Franco',
    'Frank',
    'Franklin',
    'Franks',
    'Frazier',
    'Frederick',
    'Freeman',
    'French',
    'Frost',
    'Fry',
    'Frye',
    'Fuentes',
    'Fuller',
    'Fulton',
    'Gaines',
    'Gallagher',
    'Gallegos',
    'Galloway',
    'Gamble',
    'Garcia',
    'Gardner',
    'Garner',
    'Garrett',
    'Garrison',
    'Garza',
    'Gates',
    'Gay',
    'Gentry',
    'George',
    'Gibbs',
    'Gibson',
    'Gilbert',
    'Giles',
    'Gill',
    'Gillespie',
    'Gilliam',
    'Gilmore',
    'Glass',
    'Glenn',
    'Glover',
    'Goff',
    'Golden',
    'Gomez',
    'Gonzales',
    'Gonzalez',
    'Good',
    'Goodman',
    'Goodwin',
    'Gordon',
    'Gould',
    'Graham',
    'Grant',
    'Graves',
    'Gray',
    'Green',
    'Greene',
    'Greer',
    'Gregory',
    'Griffin',
    'Griffith',
    'Grimes',
    'Gross',
    'Guerra',
    'Guerrero',
    'Guthrie',
    'Gutierrez',
    'Guy',
    'Guzman',
    'Hahn',
    'Hale',
    'Haley',
    'Hall',
    'Hamilton',
    'Hammond',
    'Hampton',
    'Hancock',
    'Haney',
    'Hansen',
    'Hanson',
    'Hardin',
    'Harding',
    'Hardy',
    'Harmon',
    'Harper',
    'Harrell',
    'Harrington',
    'Harris',
    'Harrison',
    'Hart',
    'Hartman',
    'Harvey',
    'Hatfield',
    'Hawkins',
    'Hayden',
    'Hayes',
    'Haynes',
    'Hays',
    'Head',
    'Heath',
    'Hebert',
    'Henderson',
    'Hendricks',
    'Hendrix',
    'Henry',
    'Hensley',
    'Henson',
    'Herman',
    'Hernandez',
    'Herrera',
    'Herring',
    'Hess',
    'Hester',
    'Hewitt',
    'Hickman',
    'Hicks',
    'Higgins',
    'Hill',
    'Hines',
    'Hinton',
    'Hobbs',
    'Hodge',
    'Hodges',
    'Hoffman',
    'Hogan',
    'Holcomb',
    'Holden',
    'Holder',
    'Holland',
    'Holloway',
    'Holman',
    'Holmes',
    'Holt',
    'Hood',
    'Hooper',
    'Hoover',
    'Hopkins',
    'Hopper',
    'Horn',
    'Horne',
    'Horton',
    'House',
    'Houston',
    'Howard',
    'Howe',
    'Howell',
    'Hubbard',
    'Huber',
    'Hudson',
    'Huff',
    'Huffman',
    'Hughes',
    'Hull',
    'Humphrey',
    'Hunt',
    'Hunter',
    'Hurley',
    'Hurst',
    'Hutchinson',
    'Hyde',
    'Ingram',
    'Irwin',
    'Jackson',
    'Jacobs',
    'Jacobson',
    'James',
    'Jarvis',
    'Jefferson',
    'Jenkins',
    'Jennings',
    'Jensen',
    'Jimenez',
    'Johns',
    'Johnson',
    'Johnston',
    'Jones',
    'Jordan',
    'Joseph',
    'Joyce',
    'Joyner',
    'Juarez',
    'Justice',
    'Kane',
    'Kaufman',
    'Keith',
    'Keller',
    'Kelley',
    'Kelly',
    'Kemp',
    'Kennedy',
    'Kent',
    'Kerr',
    'Key',
    'Kidd',
    'Kim',
    'King',
    'Kinney',
    'Kirby',
    'Kirk',
    'Kirkland',
    'Klein',
    'Kline',
    'Knapp',
    'Knight',
    'Knowles',
    'Knox',
    'Koch',
    'Kramer',
    'Lamb',
    'Lambert',
    'Lancaster',
    'Landry',
    'Lane',
    'Lang',
    'Langley',
    'Lara',
    'Larsen',
    'Larson',
    'Lawrence',
    'Lawson',
    'Le',
    'Leach',
    'Leblanc',
    'Lee',
    'Leon',
    'Leonard',
    'Lester',
    'Levine',
    'Levy',
    'Lewis',
    'Lindsay',
    'Lindsey',
    'Little',
    'Livingston',
    'Lloyd',
    'Logan',
    'Long',
    'Lopez',
    'Lott',
    'Love',
    'Lowe',
    'Lowery',
    'Lucas',
    'Luna',
    'Lynch',
    'Lynn',
    'Lyons',
    'Macdonald',
    'Macias',
    'Mack',
    'Madden',
    'Maddox',
    'Maldonado',
    'Malone',
    'Mann',
    'Manning',
    'Marks',
    'Marquez',
    'Marsh',
    'Marshall',
    'Martin',
    'Martinez',
    'Mason',
    'Massey',
    'Mathews',
    'Mathis',
    'Matthews',
    'Maxwell',
    'May',
    'Mayer',
    'Maynard',
    'Mayo',
    'Mays',
    'Mcbride',
    'Mccall',
    'Mccarthy',
    'Mccarty',
    'Mcclain',
    'Mcclure',
    'Mcconnell',
    'Mccormick',
    'Mccoy',
    'Mccray',
    'Mccullough',
    'Mcdaniel',
    'Mcdonald',
    'Mcdowell',
    'Mcfadden',
    'Mcfarland',
    'Mcgee',
    'Mcgowan',
    'Mcguire',
    'Mcintosh',
    'Mcintyre',
    'Mckay',
    'Mckee',
    'Mckenzie',
    'Mckinney',
    'Mcknight',
    'Mclaughlin',
    'Mclean',
    'Mcleod',
    'Mcmahon',
    'Mcmillan',
    'Mcneil',
    'Mcpherson',
    'Meadows',
    'Medina',
    'Mejia',
    'Melendez',
    'Melton',
    'Mendez',
    'Mendoza',
    'Mercado',
    'Mercer',
    'Merrill',
    'Merritt',
    'Meyer',
    'Meyers',
    'Michael',
    'Middleton',
    'Miles',
    'Miller',
    'Mills',
    'Miranda',
    'Mitchell',
    'Molina',
    'Monroe',
    'Montgomery',
    'Montoya',
    'Moody',
    'Moon',
    'Mooney',
    'Moore',
    'Morales',
    'Moran',
    'Moreno',
    'Morgan',
    'Morin',
    'Morris',
    'Morrison',
    'Morrow',
    'Morse',
    'Morton',
    'Moses',
    'Mosley',
    'Moss',
    'Mueller',
    'Mullen',
    'Mullins',
    'Munoz',
    'Murphy',
    'Murray',
    'Myers',
    'Nash',
    'Navarro',
    'Neal',
    'Nelson',
    'Newman',
    'Newton',
    'Nguyen',
    'Nichols',
    'Nicholson',
    'Nielsen',
    'Nieves',
    'Nixon',
    'Noble',
    'Noel',
    'Nolan',
    'Norman',
    'Norris',
    'Norton',
    'Nunez',
    'Obrien',
    'Ochoa',
    'Oconnor',
    'Odom',
    'Odonnell',
    'Oliver',
    'Olsen',
    'Olson',
    'Oneal',
    'Oneil',
    'Oneill',
    'Orr',
    'Ortega',
    'Ortiz',
    'Osborn',
    'Osborne',
    'Owen',
    'Owens',
    'Pace',
    'Pacheco',
    'Padilla',
    'Page',
    'Palmer',
    'Park',
    'Parker',
    'Parks',
    'Parrish',
    'Parsons',
    'Pate',
    'Patel',
    'Patrick',
    'Patterson',
    'Patton',
    'Paul',
    'Payne',
    'Pearson',
    'Peck',
    'Pena',
    'Pennington',
    'Perez',
    'Perkins',
    'Perry',
    'Peters',
    'Petersen',
    'Peterson',
    'Petty',
    'Phelps',
    'Phillips',
    'Pickett',
    'Pierce',
    'Pittman',
    'Pitts',
    'Pollard',
    'Poole',
    'Pope',
    'Porter',
    'Potter',
    'Potts',
    'Powell',
    'Powers',
    'Pratt',
    'Preston',
    'Price',
    'Prince',
    'Pruitt',
    'Puckett',
    'Pugh',
    'Quinn',
    'Ramirez',
    'Ramos',
    'Ramsey',
    'Randall',
    'Randolph',
    'Rasmussen',
    'Ratliff',
    'Ray',
    'Raymond',
    'Reed',
    'Reese',
    'Reeves',
    'Reid',
    'Reilly',
    'Reyes',
    'Reynolds',
    'Rhodes',
    'Rice',
    'Rich',
    'Richard',
    'Richards',
    'Richardson',
    'Richmond',
    'Riddle',
    'Riggs',
    'Riley',
    'Rios',
    'Rivas',
    'Rivera',
    'Rivers',
    'Roach',
    'Robbins',
    'Roberson',
    'Roberts',
    'Robertson',
    'Robinson',
    'Robles',
    'Rocha',
    'Rodgers',
    'Rodriguez',
    'Rodriquez',
    'Rogers',
    'Rojas',
    'Rollins',
    'Roman',
    'Romero',
    'Rosa',
    'Rosales',
    'Rosario',
    'Rose',
    'Ross',
    'Roth',
    'Rowe',
    'Rowland',
    'Roy',
    'Ruiz',
    'Rush',
    'Russell',
    'Russo',
    'Rutledge',
    'Ryan',
    'Salas',
    'Salazar',
    'Salinas',
    'Sampson',
    'Sanchez',
    'Sanders',
    'Sandoval',
    'Sanford',
    'Santana',
    'Santiago',
    'Santos',
    'Sargent',
    'Saunders',
    'Savage',
    'Sawyer',
    'Schmidt',
    'Schneider',
    'Schroeder',
    'Schultz',
    'Schwartz',
    'Scott',
    'Sears',
    'Sellers',
    'Serrano',
    'Sexton',
    'Shaffer',
    'Shannon',
    'Sharp',
    'Sharpe',
    'Shaw',
    'Shelton',
    'Shepard',
    'Shepherd',
    'Sheppard',
    'Sherman',
    'Shields',
    'Short',
    'Silva',
    'Simmons',
    'Simon',
    'Simpson',
    'Sims',
    'Singleton',
    'Skinner',
    'Slater',
    'Sloan',
    'Small',
    'Smith',
    'Snider',
    'Snow',
    'Snyder',
    'Solis',
    'Solomon',
    'Sosa',
    'Soto',
    'Sparks',
    'Spears',
    'Spence',
    'Spencer',
    'Stafford',
    'Stanley',
    'Stanton',
    'Stark',
    'Steele',
    'Stein',
    'Stephens',
    'Stephenson',
    'Stevens',
    'Stevenson',
    'Stewart',
    'Stokes',
    'Stone',
    'Stout',
    'Strickland',
    'Strong',
    'Stuart',
    'Suarez',
    'Sullivan',
    'Summers',
    'Sutton',
    'Swanson',
    'Sweeney',
    'Sweet',
    'Sykes',
    'Talley',
    'Tanner',
    'Tate',
    'Taylor',
    'Terrell',
    'Terry',
    'Thomas',
    'Thompson',
    'Thornton',
    'Tillman',
    'Todd',
    'Torres',
    'Townsend',
    'Tran',
    'Travis',
    'Trevino',
    'Trujillo',
    'Tucker',
    'Turner',
    'Tyler',
    'Tyson',
    'Underwood',
    'Valdez',
    'Valencia',
    'Valentine',
    'Valenzuela',
    'Vance',
    'Vang',
    'Vargas',
    'Vasquez',
    'Vaughan',
    'Vaughn',
    'Vazquez',
    'Vega',
    'Velasquez',
    'Velazquez',
    'Velez',
    'Villarreal',
    'Vincent',
    'Vinson',
    'Wade',
    'Wagner',
    'Walker',
    'Wall',
    'Wallace',
    'Waller',
    'Walls',
    'Walsh',
    'Walter',
    'Walters',
    'Walton',
    'Ward',
    'Ware',
    'Warner',
    'Warren',
    'Washington',
    'Waters',
    'Watkins',
    'Watson',
    'Watts',
    'Weaver',
    'Webb',
    'Weber',
    'Webster',
    'Weeks',
    'Weiss',
    'Welch',
    'Wells',
    'West',
    'Wheeler',
    'Whitaker',
    'White',
    'Whitehead',
    'Whitfield',
    'Whitley',
    'Whitney',
    'Wiggins',
    'Wilcox',
    'Wilder',
    'Wiley',
    'Wilkerson',
    'Wilkins',
    'Wilkinson',
    'William',
    'Williams',
    'Williamson',
    'Willis',
    'Wilson',
    'Winters',
    'Wise',
    'Witt',
    'Wolf',
    'Wolfe',
    'Wong',
    'Wood',
    'Woodard',
    'Woods',
    'Woodward',
    'Wooten',
    'Workman',
    'Wright',
    'Wyatt',
    'Wynn',
    'Yang',
    'Yates',
    'York',
    'Young',
    'Zamora',
    'Zimmerman'
];


/***/ }),

/***/ "./src/app/material/datepicker/datepicker-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Datepicker</mat-toolbar>\n  <mat-card-content>\n    <h5>Options</h5>\n    <p>\n      <mat-checkbox [(ngModel)]=\"touch\">Use touch UI</mat-checkbox>&nbsp;\n      <mat-checkbox [(ngModel)]=\"filterOdd\">Filter odd months and dates</mat-checkbox>&nbsp;\n      <mat-checkbox [(ngModel)]=\"yearView\">Start in year view</mat-checkbox>&nbsp;\n      <mat-checkbox [(ngModel)]=\"datepickerDisabled\">Disable datepicker</mat-checkbox>&nbsp;\n      <mat-checkbox [(ngModel)]=\"inputDisabled\">Disable input</mat-checkbox>\n    </p>\n    <p>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"minDatePicker\" [(ngModel)]=\"minDate\" placeholder=\"Min date\"\n            [disabled]=\"inputDisabled\">\n        <mat-datepicker-toggle matSuffix [for]=\"minDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #minDatePicker [touchUi]=\"touch\" [disabled]=\"datepickerDisabled\"></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"maxDatePicker\" [(ngModel)]=\"maxDate\" placeholder=\"Max date\"\n            [disabled]=\"inputDisabled\">\n        <mat-datepicker-toggle matSuffix [for]=\"maxDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #maxDatePicker [touchUi]=\"touch\" [disabled]=\"datepickerDisabled\"></mat-datepicker>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"startAtPicker\" [(ngModel)]=\"startAt\" placeholder=\"Start at date\"\n            [disabled]=\"inputDisabled\">\n        <mat-datepicker-toggle matSuffix [for]=\"startAtPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #startAtPicker [touchUi]=\"touch\" [disabled]=\"datepickerDisabled\"></mat-datepicker>\n      </mat-form-field>\n    </p>\n\n    <h5 class=\"mt-3\">Result</h5>\n\n    <p>\n      <mat-datepicker-toggle [for]=\"resultPicker\"></mat-datepicker-toggle>\n      <mat-form-field>\n        <input matInput\n              #resultPickerModel=\"ngModel\"\n              [matDatepicker]=\"resultPicker\"\n              [(ngModel)]=\"date\"\n              [min]=\"minDate\"\n              [max]=\"maxDate\"\n              [matDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n              [disabled]=\"inputDisabled\"\n              placeholder=\"Pick a date\"\n              (dateInput)=\"onDateInput($event)\"\n              (dateChange)=\"onDateChange($event)\">\n        <mat-datepicker\n            #resultPicker\n            [touchUi]=\"touch\"\n            [disabled]=\"datepickerDisabled\"\n            [startAt]=\"startAt\"\n            [startView]=\"yearView ? 'year' : 'month'\">\n        </mat-datepicker>\n        <mat-error *ngIf=\"resultPickerModel.hasError('matDatepickerParse')\">\n          \"{{resultPickerModel.getError('matDatepickerParse').text}}\" is not a valid date!\n        </mat-error>\n        <mat-error *ngIf=\"resultPickerModel.hasError('matDatepickerMin')\">Too early!</mat-error>\n        <mat-error *ngIf=\"resultPickerModel.hasError('matDatepickerMax')\">Too late!</mat-error>\n        <mat-error *ngIf=\"resultPickerModel.hasError('matDatepickerFilter')\">Date unavailable!</mat-error>\n      </mat-form-field>\n    </p>\n    <p>Last input: {{lastDateInput}}</p>\n    <p>Last change: {{lastDateChange}}</p>\n    <br>\n    <p>\n      <input #resultPickerModel2\n            [matDatepicker]=\"resultPicker2\"\n            [(ngModel)]=\"date\"\n            [min]=\"minDate\"\n            [max]=\"maxDate\"\n            [disabled]=\"inputDisabled\"\n            [matDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n            placeholder=\"Pick a date\">\n      <mat-datepicker-toggle [for]=\"resultPicker2\"></mat-datepicker-toggle>\n      <mat-datepicker\n          #resultPicker2\n          [touchUi]=\"touch\"\n          [disabled]=\"datepickerDisabled\"\n          [startAt]=\"startAt\"\n          [startView]=\"yearView ? 'year' : 'month'\">\n      </mat-datepicker>\n    </p>\n\n    <h5 class=\"mt-3\">Input disabled datepicker</h5>\n    <p>\n      <mat-datepicker-toggle [for]=\"datePicker1\"></mat-datepicker-toggle>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"datePicker1\" [(ngModel)]=\"date\" [min]=\"minDate\" [max]=\"maxDate\"\n              [matDatepickerFilter]=\"filterOdd ? dateFilter : null\" disabled\n              placeholder=\"Input disabled\">\n        <mat-datepicker #datePicker1 [touchUi]=\"touch\" [startAt]=\"startAt\"\n                      [startView]=\"yearView ? 'year' : 'month'\"></mat-datepicker>\n      </mat-form-field>\n    </p>\n\n    <h5 class=\"mt-3\">Input disabled via FormControl</h5>\n    <p>\n      <mat-datepicker-toggle [for]=\"datePicker2\"></mat-datepicker-toggle>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"datePicker2\" [formControl]=\"dateCtrl\" [min]=\"minDate\"\n              [max]=\"maxDate\" [matDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n              placeholder=\"FormControl disabled\">\n        <mat-datepicker #datePicker2 [touchUi]=\"touch\" [startAt]=\"startAt\"\n                        [startView]=\"yearView ? 'year' : 'month'\"></mat-datepicker>\n      </mat-form-field>\n\n      <button mat-button (click)=\"dateCtrl.disabled ? dateCtrl.enable() : dateCtrl.disable()\">\n        {{dateCtrl.disabled ? 'Enable' : 'Disable'}} FormControl\n      </button>\n    </p>\n\n    <h5 class=\"mt-3\">Input disabled, datepicker popup enabled</h5>\n    <p>\n      <mat-datepicker-toggle [for]=\"datePicker3\"></mat-datepicker-toggle>\n      <mat-form-field>\n        <input matInput disabled [matDatepicker]=\"datePicker3\" [(ngModel)]=\"date\" [min]=\"minDate\"\n              [max]=\"maxDate\" [matDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n              placeholder=\"Input disabled, datepicker enabled\">\n        <mat-datepicker #datePicker3 [touchUi]=\"touch\" [disabled]=\"false\" [startAt]=\"startAt\"\n                      [startView]=\"yearView ? 'year' : 'month'\"></mat-datepicker>\n      </mat-form-field>\n    </p>\n\n    <h5 class=\"mt-3\">Datepicker with value property binding</h5>\n    <p>\n      <mat-datepicker-toggle [for]=\"datePicker4\"></mat-datepicker-toggle>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"datePicker4\" [value]=\"date\" [min]=\"minDate\"\n              [max]=\"maxDate\" [matDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n              placeholder=\"Value binding\">\n        <mat-datepicker #datePicker4 [touchUi]=\"touch\" [startAt]=\"startAt\"\n                        [startView]=\"yearView ? 'year' : 'month'\"></mat-datepicker>\n      </mat-form-field>\n    </p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/datepicker/datepicker-demo.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material/datepicker/datepicker-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatepickerDemoComponent = /** @class */ (function () {
    function DatepickerDemoComponent() {
        var _this = this;
        this.dateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.dateFilter = function (date) { return date.getMonth() % 2 === 1 && date.getDate() % 2 === 0; };
        this.onDateInput = function (e) { return _this.lastDateInput = e.value; };
        this.onDateChange = function (e) { return _this.lastDateChange = e.value; };
    }
    DatepickerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datepicker-demo',
            template: __webpack_require__("./src/app/material/datepicker/datepicker-demo.html"),
            styles: [__webpack_require__("./src/app/material/datepicker/datepicker-demo.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], DatepickerDemoComponent);
    return DatepickerDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/dialog/dialog-demo.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\">\n  <div>\n    <button mat-raised-button color=\"primary\" (click)=\"openJazz()\">\n      Open dialog\n    </button>\n    <button mat-raised-button color=\"accent\" (click)=\"openContentElement()\">\n      Open dialog with content elements\n    </button>\n    <button mat-raised-button color=\"accent\" (click)=\"openTemplate()\">\n      Open dialog with template content\n    </button>\n  </div>\n  <div>\n    <mat-card class=\"demo-dialog-card\">\n      <mat-card-content>\n        <h5>Dialog dimensions</h5>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.width\" placeholder=\"Width\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.height\" placeholder=\"Height\">\n          </mat-form-field>\n        </p>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.minWidth\" placeholder=\"Min Width\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.minHeight\" placeholder=\"Min Height\">\n          </mat-form-field>\n        </p>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.maxWidth\" placeholder=\"Max Width\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.maxHeight\" placeholder=\"Max Height\">\n          </mat-form-field>\n        </p>\n\n        <h5 class=\"mt-2\">Dialog position</h5>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.position.top\" (change)=\"config.position.bottom = ''\" placeholder=\"Top\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.position.bottom\" (change)=\"config.position.top = ''\" placeholder=\"Bottom\">\n          </mat-form-field>\n        </p>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.position.left\" (change)=\"config.position.right = ''\" placeholder=\"Left\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.position.right\" (change)=\"config.position.left = ''\" placeholder=\"Right\">\n          </mat-form-field>\n        </p>\n\n        <h5 class=\"mt-2\">Dialog backdrop</h5>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.backdropClass\" placeholder=\"Backdrop class\">\n          </mat-form-field>\n        </p>\n\n        <mat-checkbox [(ngModel)]=\"config.hasBackdrop\">Has backdrop</mat-checkbox>\n\n        <h5 class=\"mt-2\">Other options</h5>\n\n        <p>\n          <mat-form-field>\n            <mat-select placeholder=\"Button alignment\" [(ngModel)]=\"actionsAlignment\">\n              <mat-option>Start</mat-option>\n              <mat-option value=\"end\">End</mat-option>\n              <mat-option value=\"center\">Center</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </p>\n\n        <p>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"config.data.message\" placeholder=\"Dialog message\">\n          </mat-form-field>\n        </p>\n\n        <p>\n          <mat-checkbox [(ngModel)]=\"config.disableClose\">Disable close</mat-checkbox>\n        </p>\n\n        <h5 class=\"mt-2\">Results</h5>\n        <p>Last afterClosed result: {{lastAfterClosedResult}}</p>\n        <p>Last beforeClose result: {{lastBeforeCloseResult}}</p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<ng-template let-data let-dialogRef=\"dialogRef\">\n  I'm a template dialog. I've been opened {{numTemplateOpens}} times!\n\n  <p>It's Jazz!</p>\n\n  <mat-form-field>\n    <input matInput placeholder=\"How much?\" #howMuch>\n  </mat-form-field>\n\n  <p> {{ data.message }} </p>\n  <button type=\"button\" (click)=\"dialogRef.close(lastCloseResult = howMuch.value)\">Close dialog</button>\n  <button (click)=\"dialogRef.updateSize('500px', '500px').updatePosition({ top: '25px', left: '25px' });\">Change dimensions</button>`\n</ng-template>\n"

/***/ }),

/***/ "./src/app/material/dialog/dialog-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-dialog-card {\n  max-width: 630px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/material/dialog/dialog-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IFrameDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JazzDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentElementDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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



var defaultDialogConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogConfig */]();
var IFrameDialogComponent = /** @class */ (function () {
    function IFrameDialogComponent() {
    }
    IFrameDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-iframe-dialog',
            styles: [
                "iframe {\n      width: 800px;\n    }"
            ],
            template: "\n    <h2 mat-dialog-title>Neptune</h2>\n\n    <mat-dialog-content>\n      <iframe frameborder=\"0\" src=\"https://en.wikipedia.org/wiki/Neptune\"></iframe>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        mat-dialog-close>Close</button>\n    </mat-dialog-actions>\n  "
        })
    ], IFrameDialogComponent);
    return IFrameDialogComponent;
}());

var JazzDialogComponent = /** @class */ (function () {
    function JazzDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dimesionToggle = false;
    }
    JazzDialogComponent.prototype.togglePosition = function () {
        this._dimesionToggle = !this._dimesionToggle;
        if (this._dimesionToggle) {
            this.dialogRef
                .updateSize('500px', '500px')
                .updatePosition({ top: '25px', left: '25px' });
        }
        else {
            this.dialogRef
                .updateSize()
                .updatePosition();
        }
    };
    JazzDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-jazz-dialog',
            template: "\n  <p>It's Jazz!</p>\n\n  <mat-form-field>\n    <input matInput placeholder=\"How much?\" #howMuch>\n  </mat-form-field>\n\n  <p> {{ data.message }} </p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>\n  <button (click)=\"togglePosition()\">Change dimensions</button>"
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDialogRef */], Object])
    ], JazzDialogComponent);
    return JazzDialogComponent;
}());

var ContentElementDialogComponent = /** @class */ (function () {
    function ContentElementDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ContentElementDialogComponent.prototype.showInStackedDialog = function () {
        this.dialog.open(IFrameDialogComponent);
    };
    ContentElementDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-content-element-dialog',
            styles: [
                "img {\n      max-width: 100%;\n    }"
            ],
            template: "\n    <h2 mat-dialog-title>Neptune</h2>\n\n    <mat-dialog-content>\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg\"/>\n\n      <p>\n        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the\n        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,\n        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more\n        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger\n        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1\n        astronomical units (4.50\u00D7109 km). It is named after the Roman god of the sea and has the\n        astronomical symbol \u2646, a stylised version of the god Neptune's trident.\n      </p>\n    </mat-dialog-content>\n\n    <mat-dialog-actions [attr.align]=\"actionsAlignment\">\n      <button\n        mat-raised-button\n        color=\"primary\"\n        mat-dialog-close>Close</button>\n\n      <a\n        mat-button\n        color=\"primary\"\n        href=\"https://en.wikipedia.org/wiki/Neptune\"\n        target=\"_blank\">Read more on Wikipedia</a>\n\n      <button\n        mat-button\n        color=\"secondary\"\n        (click)=\"showInStackedDialog()\">\n        Show in Dialog</button>\n    </mat-dialog-actions>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], ContentElementDialogComponent);
    return ContentElementDialogComponent;
}());

var DialogDemoComponent = /** @class */ (function () {
    function DialogDemoComponent(dialog, doc) {
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            panelClass: 'custom-overlay-pane-class',
            hasBackdrop: true,
            backdropClass: '',
            width: '',
            height: '',
            minWidth: '',
            minHeight: '',
            maxWidth: defaultDialogConfig.maxWidth,
            maxHeight: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                message: 'Jazzy jazz jazz'
            }
        };
        this.numTemplateOpens = 0;
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        dialog.afterOpen.subscribe(function () {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
        });
    }
    DialogDemoComponent.prototype.openJazz = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
        this.dialogRef.beforeClose().subscribe(function (result) {
            _this.lastBeforeCloseResult = result;
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastAfterClosedResult = result;
            _this.dialogRef = null;
        });
    };
    DialogDemoComponent.prototype.openContentElement = function () {
        var dialogRef = this.dialog.open(ContentElementDialogComponent, this.config);
        dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
    };
    DialogDemoComponent.prototype.openTemplate = function () {
        this.numTemplateOpens++;
        this.dialog.open(this.template, this.config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DialogDemoComponent.prototype, "template", void 0);
    DialogDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-demo',
            template: __webpack_require__("./src/app/material/dialog/dialog-demo.html"),
            styles: [__webpack_require__("./src/app/material/dialog/dialog-demo.scss")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], Object])
    ], DialogDemoComponent);
    return DialogDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/drawer/drawer-demo.html":
/***/ (function(module, exports) {

module.exports = "<h5>Basic Use Case</h5>\n\n<mat-drawer-container class=\"demo-drawer-container\">\n  <mat-drawer #start (opened)=\"myinput.focus()\" mode=\"side\">\n    Start Side Drawer\n    <br>\n    <button mat-button (click)=\"start.close()\">Close</button>\n    <br>\n    <button mat-button (click)=\"end.open()\">Open End Side</button>\n    <br>\n    <button mat-button\n            (click)=\"start.mode = (start.mode == 'push' ? 'over' : (start.mode == 'over' ? 'side' : 'push'))\">Toggle Mode</button>\n    <div>Mode: {{start.mode}}</div>\n    <br>\n    <input #myinput>\n  </mat-drawer>\n\n  <mat-drawer #end position=\"end\">\n    End Side Drawer\n    <br>\n    <button mat-button (click)=\"end.close()\">Close</button>\n  </mat-drawer>\n\n  <div class=\"demo-drawer-content\">\n    <h1>My Content</h1>\n\n    <div>\n      <header>Drawer</header>\n      <button mat-raised-button color=\"primary\" (click)=\"start.toggle()\">Toggle Start Side Drawer</button>&nbsp;\n      <button mat-raised-button color=\"primary\" (click)=\"end.toggle()\">Toggle End Side Drawer</button>\n    </div>\n  </div>\n</mat-drawer-container>\n\n<h5 class=\"mt-2\">Drawer Already Opened</h5>\n\n<mat-drawer-container class=\"demo-drawer-container\">\n  <mat-drawer #start2 opened mode=\"side\">\n    Drawer\n  </mat-drawer>\n\n  <div class=\"demo-drawer-content\">\n    <button mat-raised-button color=\"primary\" (click)=\"start2.toggle()\">Toggle Start Side Drawer</button>\n  </div>\n</mat-drawer-container>\n\n<h5 class=\"mt-2\">Dynamic Position Drawer</h5>\n\n<mat-drawer-container class=\"demo-drawer-container\">\n  <mat-drawer #dynamicPosDrawer1 mode=\"side\" [position]=\"invert ? 'end' : 'start'\">Start</mat-drawer>\n  <mat-drawer #dynamicPosDrawer2 mode=\"side\" [position]=\"invert ? 'start' : 'end'\">End</mat-drawer>\n\n  <div class=\"demo-drawer-content\">\n    <button mat-raised-button color=\"primary\" (click)=\"dynamicPosDrawer1.toggle(); dynamicPosDrawer2.toggle()\">\n      Toggle drawers\n    </button>&nbsp;\n    <button mat-raised-button color=\"primary\" (click)=\"invert = !invert\">Change sides</button>\n  </div>\n</mat-drawer-container>\n\n<h5 class=\"mt-2\">Drawer with focus attributes</h5>\n\n<mat-drawer-container class=\"demo-drawer-container\">\n  <mat-drawer #focusDrawer>\n    <mat-nav-list>\n      <a mat-list-item routerLink>Link</a>\n      <a mat-list-item routerLink cdkFocusRegionStart>Focus region start</a>\n      <a mat-list-item routerLink>Link</a>\n      <a mat-list-item routerLink cdkFocusInitial>Initially focused</a>\n      <a mat-list-item routerLink cdkFocusRegionEnd>Focus region end</a>\n      <a mat-list-item routerLink>Link</a>\n    </mat-nav-list>\n  </mat-drawer>\n\n  <div class=\"demo-drawer-content\">\n    <h1>My Content</h1>\n\n    <div>\n      <header>Drawer</header>\n      <button mat-raised-button color=\"primary\" (click)=\"focusDrawer.toggle()\">Toggle Drawer</button>\n    </div>\n  </div>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/material/drawer/drawer-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-drawer-container {\n  border: 1px solid black;\n  height: 200px; }\n\n.demo-drawer-content {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/material/drawer/drawer-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DrawerDemoComponent = /** @class */ (function () {
    function DrawerDemoComponent() {
        this.invert = false;
    }
    DrawerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drawer-demo',
            template: __webpack_require__("./src/app/material/drawer/drawer-demo.html"),
            styles: [__webpack_require__("./src/app/material/drawer/drawer-demo.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        })
    ], DrawerDemoComponent);
    return DrawerDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/expansion/expansion-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Single Expansion Panel</mat-toolbar>\n  <mat-card-content>\n    <mat-expansion-panel class=\"mat-expansion-demo-width\" #myPanel>\n      <mat-expansion-panel-header [expandedHeight]=\"expandedHeight\" [collapsedHeight]=\"collapsedHeight\">\n        <mat-panel-description>This is a panel description.</mat-panel-description>\n        <mat-panel-title>Panel Title</mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <ng-template matExpansionPanelContent>\n        This is the content text that makes sense here.\n        <mat-checkbox>Trigger a ripple</mat-checkbox>\n      </ng-template>\n\n      <mat-action-row>\n        <button mat-button (click)=\"myPanel.expanded = false\">CANCEL</button>\n        <button mat-button>SAVE</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n\n    <br>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"collapsedHeight\" placeholder=\"Collapsed height\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"expandedHeight\" placeholder=\"Expanded height\">\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-toolbar class=\"text-base\">matAccordion</mat-toolbar>\n  <mat-card-content>\n    <div>\n      <p>Accordion Options</p>\n      <div>\n        <mat-slide-toggle [(ngModel)]=\"multi\">Allow Multi Expansion</mat-slide-toggle>\n        <mat-slide-toggle [(ngModel)]=\"hideToggle\">Hide Indicators</mat-slide-toggle>\n        <mat-slide-toggle [(ngModel)]=\"disabled\">Disable Panel 2</mat-slide-toggle>\n        <mat-slide-toggle [(ngModel)]=\"showPanel3\">Show Panel 3</mat-slide-toggle>\n      </div>\n      <p>Accordion Style</p>\n      <mat-radio-group [(ngModel)]=\"displayMode\">\n        <mat-radio-button value=\"default\">Default</mat-radio-button>\n        <mat-radio-button value=\"flat\">Flat</mat-radio-button>\n      </mat-radio-group>\n      <p>Accordion Panel(s)</p>\n      <div>\n        <mat-checkbox [(ngModel)]=\"panel1.expanded\">Panel 1</mat-checkbox>\n        <mat-checkbox [(ngModel)]=\"panel2.expanded\">Panel 2</mat-checkbox>\n      </div>\n    </div>\n    <br>\n    <mat-accordion [displayMode]=\"displayMode\" [multi]=\"multi\"\n                  class=\"mat-expansion-demo-width\">\n      <mat-expansion-panel #panel1  [hideToggle]=\"hideToggle\">\n        <mat-expansion-panel-header>Section 1</mat-expansion-panel-header>\n        <p>This is the content text that makes sense here.</p>\n      </mat-expansion-panel>\n      <mat-expansion-panel #panel2 [hideToggle]=\"hideToggle\" [disabled]=\"disabled\">\n        <mat-expansion-panel-header>Section 2</mat-expansion-panel-header>\n        <p>This is the content text that makes sense here.</p>\n      </mat-expansion-panel>\n      <mat-expansion-panel #panel3 *ngIf=\"showPanel3\" [hideToggle]=\"hideToggle\">\n        <mat-expansion-panel-header>Section 3</mat-expansion-panel-header>\n        <mat-checkbox #showButtons>Reveal Buttons Below</mat-checkbox>\n        <mat-action-row *ngIf=\"showButtons.checked\">\n          <button mat-button (click)=\"panel2.expanded = true\">OPEN SECTION 2</button>\n          <button mat-button (click)=\"panel3.expanded = false\">CLOSE</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/expansion/expansion-demo.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/material/expansion/expansion-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExpansionDemoComponent = /** @class */ (function () {
    function ExpansionDemoComponent() {
        this.displayMode = 'default';
        this.multi = false;
        this.hideToggle = false;
        this.disabled = false;
        this.showPanel3 = true;
    }
    ExpansionDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-expansion-demo',
            styles: [__webpack_require__("./src/app/material/expansion/expansion-demo.scss")],
            template: __webpack_require__("./src/app/material/expansion/expansion-demo.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        })
    ], ExpansionDemoComponent);
    return ExpansionDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/grid-list/grid-list-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-grid-list\">\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Basic grid list</mat-toolbar>\n    <mat-card-content class=\"demo-basic-list\">\n      <mat-grid-list cols=\"4\" [rowHeight]=\"basicRowHeight\">\n        <mat-grid-tile> One </mat-grid-tile>\n        <mat-grid-tile> Two </mat-grid-tile>\n        <mat-grid-tile> Three </mat-grid-tile>\n        <mat-grid-tile> Four </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Fixed-height grid list</mat-toolbar>\n    <mat-card-content>\n      <mat-grid-list [cols]=\"fixedCols\" [rowHeight]=\"fixedRowHeight\">\n        <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n                      [style.background]=\"tile.color\">\n          {{tile.text}}\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n    <mat-card-actions>\n      <p>Change list cols: <input type=\"number\" [(ngModel)]=\"fixedCols\"></p>\n      <p>Change row height: <input type=\"number\" [(ngModel)]=\"fixedRowHeight\"></p>\n      <button mat-button (click)=\"addTileCols()\" color=\"primary\">ADD COLSPAN (THREE)</button>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Ratio-height grid list</mat-toolbar>\n    <mat-card-content class=\"demo-ratio-list\">\n      <mat-grid-list cols=\"2\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\n        <mat-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'lightblue'\">\n          {{tile.text}}\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n    <mat-card-actions>\n      <p>Change ratio: <input [(ngModel)]=\"ratio\"></p>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Fit-height grid list</mat-toolbar>\n    <mat-card-content class=\"demo-fit-list\">\n      <mat-grid-list cols=\"2\" rowHeight=\"fit\" [gutterSize]=\"ratioGutter\"\n                    [style.height]=\"fitListHeight\">\n        <mat-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'#F1EBBA'\">\n          {{tile.text}}\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n    <mat-card-actions>\n      <p>Change list height: <input [(ngModel)]=\"fitListHeight\"></p>\n      <p>Change gutter: <input type=\"number\" [(ngModel)]=\"ratioGutter\"></p>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Grid list with header</mat-toolbar>\n    <mat-card-content>\n      <mat-grid-list cols=\"3\" rowHeight=\"200px\">\n        <mat-grid-tile *ngFor=\"let dog of dogs\" style=\"background:gray\">\n          <mat-grid-tile-header>\n            <mat-icon mat-grid-avatar>info_outline</mat-icon>\n            {{dog.name}}\n          </mat-grid-tile-header>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Grid list with footer</mat-toolbar>\n    <mat-card-content>\n      <mat-grid-list cols=\"3\" rowHeight=\"200px\">\n        <mat-grid-tile *ngFor=\"let dog of dogs\">\n          <img [alt]=\"dog.name\" src=\"https://material.angularjs.org/material2_assets/ngconf/{{dog.name}}.png\">\n          <mat-grid-tile-footer>\n            <h3 mat-line>{{dog.name}}</h3>\n            <span mat-line>Human: {{dog.human}}</span>\n            <mat-icon>star_border</mat-icon>\n          </mat-grid-tile-footer>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/material/grid-list/grid-list-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-grid-list .mat-card {\n  margin: 16px 0; }\n\n.demo-grid-list p {\n  margin: 16px; }\n\n.demo-grid-list .demo-basic-list .mat-grid-tile {\n  background: rgba(0, 0, 0, 0.32); }\n\n.demo-grid-list img {\n  width: 350px; }\n"

/***/ }),

/***/ "./src/app/material/grid-list/grid-list-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridListDemoComponent = /** @class */ (function () {
    function GridListDemoComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.basicRowHeight = 80;
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridListDemoComponent.prototype.addTileCols = function () { this.tiles[2].cols++; };
    GridListDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid-list-demo',
            template: __webpack_require__("./src/app/material/grid-list/grid-list-demo.html"),
            styles: [__webpack_require__("./src/app/material/grid-list/grid-list-demo.scss")]
        })
    ], GridListDemoComponent);
    return GridListDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/input/input-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Basic</mat-toolbar>\n  <mat-card-content>\n    <form>\n      <mat-form-field class=\"demo-full-width\">\n        <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n      </mat-form-field>\n\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <mat-form-field style=\"width: 100%\" floatLabel=\"never\">\n            <input matInput placeholder=\"First name\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field style=\"width: 100%\">\n            <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n          </mat-form-field>\n        </td>\n      </tr></table>\n      <p>\n        <mat-form-field class=\"demo-full-width\">\n          <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkway</textarea>\n        </mat-form-field>\n        <mat-form-field class=\"demo-full-width\">\n          <textarea matInput placeholder=\"Address 2\"></textarea>\n        </mat-form-field>\n      </p>\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <mat-form-field class=\"demo-full-width\">\n            <input matInput placeholder=\"City\" value=\"Mountain View\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"demo-full-width\">\n            <input matInput placeholder=\"State\" maxLength=\"2\" value=\"CA\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"demo-full-width\">\n            <input matInput #postalCode maxLength=\"5\" placeholder=\"Postal Code\" value=\"94043\"\n                   pattern=\"[0-9]{5}\">\n            <mat-hint align=\"end\">\n              <mat-icon>mode_edit</mat-icon>\n              <span aria-live=\"polite\">{{postalCode.value.length}} / 5</span>\n            </mat-hint>\n          </mat-form-field>\n        </td>\n      </tr></table>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Error messages</mat-toolbar>\n  <mat-card-content>\n    <h4>Regular</h4>\n\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample1\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"email\" [formControl]=\"emailFormControl\">\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          This field is required\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\n          Please enter a valid email address\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <h4>With hint</h4>\n\n    <mat-form-field>\n      <input matInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample2\" required>\n      <mat-error>This field is required</mat-error>\n      <mat-hint>Please type something here</mat-hint>\n    </mat-form-field>\n\n\n    <form novalidate>\n      <h4>Inside a form</h4>\n\n      <mat-form-field>\n        <input matInput name=\"example\" placeholder=\"example\"\n          [(ngModel)]=\"errorMessageExample3\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button>Submit</button>\n    </form>\n\n    <h4>With a custom error function</h4>\n    <mat-form-field>\n      <input matInput\n        placeholder=\"example\"\n        [(ngModel)]=\"errorMessageExample4\"\n        [errorStateMatcher]=\"customErrorStateMatcher\"\n        required>\n      <mat-error>This field is required</mat-error>\n    </mat-form-field>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Prefix + Suffix</mat-toolbar>\n  <mat-card-content>\n    <h4>Text</h4>\n    <mat-form-field class=\"demo-text-align-end\">\n      <input matInput placeholder=\"amount\">\n      <span matPrefix>$&nbsp;</span>\n      <span matSuffix>.00</span>\n    </mat-form-field>\n\n    <h4>Icons</h4>\n    <mat-form-field>\n      <input matInput placeholder=\"amount\">\n      <mat-icon matPrefix>attach_money</mat-icon>\n      <mat-icon matSuffix>mode_edit</mat-icon>\n    </mat-form-field>\n\n    <h4>Icon buttons</h4>\n    <mat-form-field>\n      <input matInput placeholder=\"amount\">\n      <button mat-icon-button matPrefix><mat-icon>attach_money</mat-icon></button>\n      <button mat-icon-button matSuffix><mat-icon>mode_edit</mat-icon></button>\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Divider Colors</mat-toolbar>\n  <mat-card-content>\n    <h4>Input</h4>\n    <mat-form-field >\n      <input matInput placeholder=\"Default Color\" value=\"example\">\n    </mat-form-field>\n    <mat-form-field color=\"accent\">\n      <input matInput placeholder=\"Accent Color\" value=\"example\">\n    </mat-form-field>\n    <mat-form-field color=\"warn\">\n      <input matInput placeholder=\"Warn Color\" value=\"example\">\n    </mat-form-field>\n\n    <h4>Textarea</h4>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Default Color\">example</textarea>\n    </mat-form-field>\n    <mat-form-field color=\"accent\">\n      <textarea matInput placeholder=\"Accent Color\">example</textarea>\n    </mat-form-field>\n    <mat-form-field color=\"warn\">\n      <textarea matInput placeholder=\"Warn Color\">example</textarea>\n    </mat-form-field>\n\n    <h4>With error</h4>\n    <mat-form-field >\n      <input matInput placeholder=\"Default Color\" [(ngModel)]=\"dividerColorExample1\" required>\n      <mat-error>This field is required</mat-error>\n    </mat-form-field>\n    <mat-form-field color=\"accent\">\n      <input matInput placeholder=\"Accent Color\" [(ngModel)]=\"dividerColorExample2\" required>\n      <mat-error>This field is required</mat-error>\n    </mat-form-field>\n    <mat-form-field color=\"warn\">\n      <input matInput placeholder=\"Warn Color\" [(ngModel)]=\"dividerColorExample3\" required>\n      <mat-error>This field is required</mat-error>\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Hints</mat-toolbar>\n  <mat-card-content>\n    <h4>Input</h4>\n    <p>\n      <mat-form-field class=\"demo-full-width\">\n        <input matInput\n               #characterCountInputHintExample\n               placeholder=\"Character count (100 max)\"\n               maxLength=\"100\"\n               value=\"Hello world. How are you?\">\n        <mat-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountInputHintExample.value.length}} / 100\n        </mat-hint>\n      </mat-form-field>\n    </p>\n\n    <h4>Textarea</h4>\n    <p>\n      <mat-form-field class=\"demo-full-width\">\n        <textarea matInput\n                  #characterCountTextareaHintExample\n                  placeholder=\"Character count (100 max)\"\n                  maxLength=\"100\">Hello world. How are you?</textarea>\n        <mat-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountTextareaHintExample.value.length}} / 100\n        </mat-hint>\n      </mat-form-field>\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">\n    <span>\n      Hello&nbsp;\n      <mat-form-field color=\"accent\">\n        <input matInput [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\">\n      </mat-form-field>,\n      how are you?\n    </span>\n  </mat-toolbar>\n  <mat-card-content>\n    <p>\n      <mat-form-field>\n        <input matInput disabled placeholder=\"Disabled field\" value=\"Value\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput required placeholder=\"Required field\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field style=\"width: 100%\">\n        <input matInput placeholder=\"100% width placeholder\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field style=\"width: 100%\">\n        <input matInput #input placeholder=\"Character count (100 max)\" maxLength=\"100\">\n        <mat-hint align=\"end\" aria-live=\"polite\">{{input.value.length}} / 100</mat-hint>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input matInput placeholder=\"Show Hint Label\">\n      </mat-form-field>\n    </p>\n\n    <p>\n      <mat-form-field>\n        <input matInput>\n        <mat-placeholder>\n          I <mat-icon>favorite</mat-icon> <b>bold</b> placeholder\n        </mat-placeholder>\n        <mat-hint>\n          I also <mat-icon>home</mat-icon> <i>italic</i> hint labels\n        </mat-hint>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input matInput #hintLabelWithCharCount placeholder=\"Show Hint Label With Character Count\">\n        <mat-hint align=\"end\" aria-live=\"polite\">{{hintLabelWithCharCount.value.length}}</mat-hint>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field style=\"margin-bottom: 4em\">\n        <textarea matInput #longHint placeholder=\"Enter text to count\"></textarea>\n        <mat-hint>\n          Enter some text to count how many characters are in it. The character count is shown on\n          the right.\n        </mat-hint>\n        <mat-hint align=\"end\" style=\"white-space: nowrap\" aria-live=\"polite\">\n          Length: {{longHint.value.length}}\n        </mat-hint>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-checkbox [(ngModel)]=\"color\">Check to change the color:</mat-checkbox>\n      <mat-form-field [color]=\"color ? 'primary' : 'accent'\">\n        <input matInput [placeholder]=\"color ? 'Primary color' : 'Accent color'\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</mat-checkbox>\n      <mat-form-field>\n        <input matInput\n               [required]=\"requiredField\"\n               [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-checkbox [(ngModel)]=\"hideRequiredMarker\">Check to hide the required marker:</mat-checkbox>\n      <mat-form-field [hideRequiredMarker]=\"hideRequiredMarker\" style=\"width: 300px\">\n        <input matInput\n               required\n               [placeholder]=\"hideRequiredMarker ?\n                   'Required Without Marker' : 'Required With Marker'\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-button-toggle-group [(ngModel)]=\"floatingLabel\">\n        <mat-button-toggle value=\"auto\">Auto Float</mat-button-toggle>\n        <mat-button-toggle value=\"always\">Always Float</mat-button-toggle>\n        <mat-button-toggle value=\"never\">Never Float</mat-button-toggle>\n      </mat-button-toggle-group>\n    </p>\n\n    <p>\n      <mat-form-field [floatLabel]=\"floatingLabel\">\n        <input matInput placeholder=\"Placeholder\">\n      </mat-form-field>\n    </p>\n\n    <p>\n      <mat-form-field [floatLabel]=\"floatingLabel\">\n        <mat-label>What is your favorite color?</mat-label>\n        <input matInput type=\"color\" value=\"#00ff00\">\n      </mat-form-field>\n    </p>\n\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"Prefixed\" value=\"example\">\n        <div matPrefix>Example:&nbsp;</div>\n      </mat-form-field>\n      <mat-form-field class=\"demo-text-align-end\">\n        <input matInput placeholder=\"Suffixed\" value=\"123\">\n        <span matSuffix>.00 €</span>\n      </mat-form-field>\n      <br/>\n      Both:\n      <mat-form-field class=\"demo-text-align-end\">\n        <input matInput #email placeholder=\"Email Address\" value=\"angular-core\">\n        <span matPrefix><mat-icon [class.primary]=\"email.focused\">email</mat-icon>&nbsp;</span>\n        <span matSuffix [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\n      </mat-form-field>\n    </p>\n\n    <p>\n      Empty: <mat-form-field><input matInput></mat-form-field>\n      <label>Label: <mat-form-field><input matInput></mat-form-field></label>\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Number Inputs</mat-toolbar>\n  <mat-card-content>\n    <table width=\"100%\">\n      <thead>\n      <td>Table</td>\n      <td colspan=\"3\">\n        <button (click)=\"addABunch(5)\">Add 5</button>\n        <button (click)=\"addABunch(10)\">Add 10</button>\n        <button (click)=\"addABunch(100)\">Add 100</button>\n        <button (click)=\"addABunch(1000)\">Add 1000</button>\n      </td>\n      </thead>\n      <tr *ngFor=\"let item of items; let i = index\">\n        <td>{{i+1}}</td>\n        <td>\n          <mat-form-field>\n            <input matInput\n                   type=\"number\"\n                   placeholder=\"value\"\n                   aria-label=\"hello\"\n                   [(ngModel)]=\"items[i].value\">\n          </mat-form-field>\n        </td>\n        <td>\n          <input type=\"number\" [(ngModel)]=\"items[i].value\">\n        </td>\n        <td>{{item.value}}</td>\n      </tr>\n    </table>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Forms</mat-toolbar>\n  <mat-card-content>\n    <mat-form-field><input matInput placeholder=\"reactive\" [formControl]=\"formControl\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"template\" [(ngModel)]=\"model\" required [disabled]=\"ctrlDisabled\">\n    </mat-form-field>\n    <button mat-raised-button\n            (click)=\"formControl.enabled ? formControl.disable() : formControl.enable()\">\n      DISABLE REACTIVE CTRL\n    </button>\n    <button mat-raised-button (click)=\"ctrlDisabled = !ctrlDisabled\">\n      DISABLE TD CTRL\n    </button>\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"delayed value\" [formControl]=\"delayedFormControl\">\n      </mat-form-field>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Floating labels</mat-toolbar>\n\n  <mat-card-content>\n    <div>\n      <mat-form-field>\n        <input matInput [formControl]=\"placeholderTestControl\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"Only placeholder\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Only label</mat-label>\n        <input matInput [formControl]=\"placeholderTestControl\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Label and placeholder</mat-label>\n        <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n      </mat-form-field>\n\n      <mat-form-field floatLabel=\"always\">\n        <mat-label>Always float</mat-label>\n        <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n      </mat-form-field>\n\n      <mat-form-field floatLabel=\"never\">\n        <mat-label>Never float</mat-label>\n        <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Label and placeholder element</mat-label>\n        <mat-placeholder>The placeholder element</mat-placeholder>\n        <input matInput [formControl]=\"placeholderTestControl\">\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <mat-select [formControl]=\"placeholderTestControl\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"Only placeholder\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Only label</mat-label>\n        <mat-select [formControl]=\"placeholderTestControl\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Label and placeholder</mat-label>\n        <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field floatLabel=\"always\">\n        <mat-label>Always float</mat-label>\n        <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field floatLabel=\"never\">\n        <mat-label>Never float</mat-label>\n        <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Label and placeholder element</mat-label>\n        <mat-placeholder>The placeholder element</mat-placeholder>\n        <mat-select [formControl]=\"placeholderTestControl\">\n          <mat-option value=\"Value\">Value</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <button\n      mat-raised-button\n\n      (click)=\"togglePlaceholderTestValue()\">Toggle value</button>\n\n    <button\n      mat-raised-button\n\n      (click)=\"togglePlaceholderTestTouched()\">Toggle touched</button>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-card demo-basic\">\n  <mat-toolbar class=\"text-base\">Textarea Autosize</mat-toolbar>\n  <mat-card-content>\n    <h3>Regular &lt;textarea&gt;</h3>\n    <textarea class=\"demo-textarea\" matTextareaAutosize matAutosizeMaxRows=\"10\"></textarea>\n\n    <h3>&lt;textarea&gt; with mat-form-field</h3>\n    <div>\n      <mat-form-field>\n        <textarea matInput\n                  matTextareaAutosize\n                  matAutosizeMaxRows=\"10\"\n                  placeholder=\"Autosized textarea\"></textarea>\n      </mat-form-field>\n    </div>\n\n    <h3>&lt;textarea&gt; with ngModel</h3>\n    <div>\n      <label>Input with same ngModel <input [(ngModel)]=\"textareaNgModelValue\"></label>\n    </div>\n    <label>\n      Plain textarea with auto size\n      <textarea matTextareaAutosize [(ngModel)]=\"textareaNgModelValue\"></textarea>\n    </label>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material/input/input-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-full-width {\n  width: 100%; }\n\n.demo-text-align-end {\n  text-align: end; }\n\n.demo-textarea {\n  resize: none;\n  border: none;\n  overflow: auto;\n  padding: 0;\n  background: lightblue; }\n"

/***/ }),

/***/ "./src/app/material/input/input-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputDemoComponent = /** @class */ (function () {
    function InputDemoComponent() {
        var _this = this;
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.placeholderTestControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('hello', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
        this.delayedFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('');
        this.model = 'hello';
        this.customErrorStateMatcher = {
            isErrorState: function (control) {
                if (control) {
                    var hasInteraction = control.dirty || control.touched;
                    var isInvalid = control.invalid;
                    return !!(hasInteraction && isInvalid);
                }
                return false;
            }
        };
        setTimeout(function () { return _this.delayedFormControl.setValue('hello'); }, 100);
    }
    InputDemoComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemoComponent.prototype.togglePlaceholderTestValue = function () {
        this.placeholderTestControl.setValue(this.placeholderTestControl.value === '' ? 'Value' : '');
    };
    InputDemoComponent.prototype.togglePlaceholderTestTouched = function () {
        this.placeholderTestControl.touched ?
            this.placeholderTestControl.markAsUntouched() :
            this.placeholderTestControl.markAsTouched();
    };
    InputDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-input-demo',
            template: __webpack_require__("./src/app/material/input/input-demo.html"),
            styles: [__webpack_require__("./src/app/material/input/input-demo.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], InputDemoComponent);
    return InputDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/list/list-demo.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"thirdLine=!thirdLine\" class=\"demo-button mb-2\">Show third line</button>\n\n<div class=\"demo\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <h5>Normal lists</h5>\n\n    <mat-card>\n      <mat-list>\n        <h3 mat-subheader>Items</h3>\n        <mat-list-item *ngFor=\"let item of items\">\n          {{item}}\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-list>\n        <mat-list-item *ngFor=\"let contact of contacts\">\n          <h3 mat-line>{{contact.name}}</h3>\n          <p mat-line *ngIf=\"thirdLine\">extra line</p>\n          <p mat-line class=\"demo-secondary-text\">{{contact.headline}}</p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-list>\n        <h3 mat-subheader>Today</h3>\n        <mat-list-item *ngFor=\"let message of messages; last as last\">\n          <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n          <h4 mat-line>{{message.from}}</h4>\n          <p mat-line>\n            <span>{{message.subject}} -- </span>\n            <span class=\"demo-secondary-text\">{{message.message}}</span>\n          </p>\n          <mat-divider inset=\"true\" *ngIf=\"!last\"></mat-divider>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item *ngFor=\"let message of messages\">\n          <h4 mat-line>{{message.from}}</h4>\n          <p mat-line> {{message.subject}} </p>\n          <p mat-line class=\"demo-secondary-text\">{{message.message}} </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <h5>Dense lists</h5>\n\n    <mat-card>\n      <mat-list dense>\n        <h3 mat-subheader>Items</h3>\n        <mat-list-item *ngFor=\"let item of items\">\n          {{item}}\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-list dense>\n        <mat-list-item *ngFor=\"let contact of contacts\">\n          <h3 mat-line>{{contact.name}}</h3>\n          <p mat-line class=\"demo-secondary-text\">{{contact.headline}}</p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-list dense>\n        <h3 mat-subheader>Today</h3>\n        <mat-list-item *ngFor=\"let message of messages\">\n          <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n          <h4 mat-line>{{message.from}}</h4>\n          <p mat-line> {{message.subject}} </p>\n          <p mat-line class=\"demo-secondary-text\">{{message.message}} </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <h5>Nav lists</h5>\n\n    <mat-card>\n      <mat-nav-list>\n        <a mat-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\n          {{ link.name }}\n        </a>\n      </mat-nav-list>\n      <div *ngIf=\"infoClicked\">\n        More info!\n      </div>\n    </mat-card>\n\n    <mat-card>\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let link of links\">\n          <a mat-line href=\"http://www.google.com\">{{ link.name }}</a>\n          <button mat-icon-button (click)=\"infoClicked=!infoClicked\">\n            <mat-icon>info</mat-icon>\n          </button>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-nav-list>\n        <a mat-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\n          <mat-icon mat-list-icon>folder</mat-icon>\n          <span mat-line>{{ link.name }}</span>\n          <span mat-line class=\"demo-secondary-text\"> Description </span>\n        </a>\n      </mat-nav-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-nav-list dense>\n        <mat-list-item *ngFor=\"let link of links\">\n          <a mat-line href=\"http://www.google.com\">{{ link.name }}</a>\n          <button mat-icon-button (click)=\"infoClicked=!infoClicked\">\n            <mat-icon class=\"material-icons\">info</mat-icon>\n          </button>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-card>\n  </div>\n\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <h5>Selection list</h5>\n\n    <mat-card>\n      <mat-selection-list #groceries [ngModel]=\"selectedOptions\"\n                          (ngModelChange)=\"onSelectedOptionsChange($event)\"\n                          (change)=\"changeEventCount = changeEventCount + 1\">\n        <h3 mat-subheader>Groceries</h3>\n\n        <mat-list-option value=\"bananas\">Bananas</mat-list-option>\n        <mat-list-option selected value=\"oranges\">Oranges</mat-list-option>\n        <mat-list-option value=\"apples\">Apples</mat-list-option>\n        <mat-list-option value=\"strawberries\">Strawberries</mat-list-option>\n      </mat-selection-list>\n\n      <mat-card-content>\n        <p>Selected: {{selectedOptions | json}}</p>\n        <p>Change Event Count {{changeEventCount}}</p>\n        <p>Model Change Event Count {{modelChangeEventCount}}</p>\n\n        <p>\n          <button mat-raised-button (click)=\"groceries.selectAll()\">Select all</button>\n          <button mat-raised-button (click)=\"groceries.deselectAll()\">Deselect all</button>\n        </p>\n      </mat-card-content>\n\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/material/list/list-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo .mat-icon {\n  color: rgba(0, 0, 0, 0.12); }\n\n.demo .mat-list-icon {\n  color: white;\n  background: rgba(0, 0, 0, 0.3); }\n\n.demo-secondary-text {\n  color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/material/list/list-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListDemoComponent = /** @class */ (function () {
    function ListDemoComponent() {
        this.items = [
            'Pepper',
            'Salt',
            'Paprika'
        ];
        this.contacts = [
            { name: 'Nancy', headline: 'Software engineer' },
            { name: 'Mary', headline: 'TPM' },
            { name: 'Bobby', headline: 'UX designer' }
        ];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
        this.thirdLine = false;
        this.infoClicked = false;
        this.selectedOptions = ['apples'];
        this.changeEventCount = 0;
        this.modelChangeEventCount = 0;
    }
    ListDemoComponent.prototype.onSelectedOptionsChange = function (values) {
        this.selectedOptions = values;
        this.modelChangeEventCount++;
    };
    ListDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-demo',
            template: __webpack_require__("./src/app/material/list/list-demo.html"),
            styles: [__webpack_require__("./src/app/material/list/list-demo.scss")],
        })
    ], ListDemoComponent);
    return ListDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_accordion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_observers__ = __webpack_require__("./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_routing__ = __webpack_require__("./src/app/material/material.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_demo__ = __webpack_require__("./src/app/material/autocomplete/autocomplete-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__button_toggle_button_toggle_demo__ = __webpack_require__("./src/app/material/button-toggle/button-toggle-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__button_button_demo__ = __webpack_require__("./src/app/material/button/button-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__card_card_demo__ = __webpack_require__("./src/app/material/card/card-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__checkbox_checkbox_demo__ = __webpack_require__("./src/app/material/checkbox/checkbox-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__chips_chips_demo__ = __webpack_require__("./src/app/material/chips/chips-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__datepicker_datepicker_demo__ = __webpack_require__("./src/app/material/datepicker/datepicker-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__ = __webpack_require__("./src/app/material/dialog/dialog-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__drawer_drawer_demo__ = __webpack_require__("./src/app/material/drawer/drawer-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__expansion_expansion_demo__ = __webpack_require__("./src/app/material/expansion/expansion-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__grid_list_grid_list_demo__ = __webpack_require__("./src/app/material/grid-list/grid-list-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__input_input_demo__ = __webpack_require__("./src/app/material/input/input-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__list_list_demo__ = __webpack_require__("./src/app/material/list/list-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__menu_menu_demo__ = __webpack_require__("./src/app/material/menu/menu-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__progress_bar_progress_bar_demo__ = __webpack_require__("./src/app/material/progress-bar/progress-bar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__progress_spinner_progress_spinner_demo__ = __webpack_require__("./src/app/material/progress-spinner/progress-spinner-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__radio_radio_demo__ = __webpack_require__("./src/app/material/radio/radio-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ripple_ripple_demo__ = __webpack_require__("./src/app/material/ripple/ripple-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__select_select_demo__ = __webpack_require__("./src/app/material/select/select-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__slide_toggle_slide_toggle_demo__ = __webpack_require__("./src/app/material/slide-toggle/slide-toggle-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__slider_slider_demo__ = __webpack_require__("./src/app/material/slider/slider-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__snack_bar_snack_bar_demo__ = __webpack_require__("./src/app/material/snack-bar/snack-bar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__stepper_stepper_demo__ = __webpack_require__("./src/app/material/stepper/stepper-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__tabs_tabs_demo__ = __webpack_require__("./src/app/material/tabs/tabs-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__toolbar_toolbar_demo__ = __webpack_require__("./src/app/material/toolbar/toolbar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__tooltip_tooltip_demo__ = __webpack_require__("./src/app/material/tooltip/tooltip-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__typography_typography_demo__ = __webpack_require__("./src/app/material/typography/typography-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__table_table_demo_module__ = __webpack_require__("./src/app/material/table/table-demo-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_16__material_routing__["a" /* MaterialRoutes */]),
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["N" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["s" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["w" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["y" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["z" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["E" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["F" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["I" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["K" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["Q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["L" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["u" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_45__table_table_demo_module__["a" /* TableDemoModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_accordion__["c" /* CdkAccordionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["f" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_portal__["g" /* PortalModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["e" /* OverlayContainer */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["b" /* FullscreenOverlayContainer */] },
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_demo__["a" /* AutocompleteDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__button_button_demo__["a" /* ButtonDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__button_toggle_button_toggle_demo__["a" /* ButtonToggleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__card_card_demo__["a" /* CardDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__checkbox_checkbox_demo__["a" /* CheckboxDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__chips_chips_demo__["a" /* ChipsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["a" /* ContentElementDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__datepicker_datepicker_demo__["a" /* DatepickerDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["b" /* DialogDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__drawer_drawer_demo__["a" /* DrawerDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__expansion_expansion_demo__["a" /* ExpansionDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_41__tabs_tabs_demo__["a" /* FoggyTabContentComponent */],
                __WEBPACK_IMPORTED_MODULE_27__grid_list_grid_list_demo__["a" /* GridListDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["c" /* IFrameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__input_input_demo__["a" /* InputDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["d" /* JazzDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__list_list_demo__["a" /* ListDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__checkbox_checkbox_demo__["b" /* MatCheckboxDemoNestedChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_30__menu_menu_demo__["a" /* MenuDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_31__progress_bar_progress_bar_demo__["a" /* ProgressBarDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_32__progress_spinner_progress_spinner_demo__["a" /* ProgressSpinnerDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_33__radio_radio_demo__["a" /* RadioDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_41__tabs_tabs_demo__["b" /* RainyTabContentComponent */],
                __WEBPACK_IMPORTED_MODULE_34__ripple_ripple_demo__["a" /* RippleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_35__select_select_demo__["a" /* SelectDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_37__slider_slider_demo__["a" /* SliderDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__slide_toggle_slide_toggle_demo__["a" /* SlideToggleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_38__snack_bar_snack_bar_demo__["a" /* SnackBarDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_39__stepper_stepper_demo__["a" /* StepperDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_41__tabs_tabs_demo__["c" /* SunnyTabContentComponent */],
                __WEBPACK_IMPORTED_MODULE_41__tabs_tabs_demo__["d" /* TabsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_42__toolbar_toolbar_demo__["a" /* ToolbarDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_43__tooltip_tooltip_demo__["a" /* TooltipDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_44__typography_typography_demo__["a" /* TypographyDemoComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["a" /* ContentElementDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["c" /* IFrameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_demo__["d" /* JazzDialogComponent */]
            ],
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material/material.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_autocomplete_demo__ = __webpack_require__("./src/app/material/autocomplete/autocomplete-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_toggle_button_toggle_demo__ = __webpack_require__("./src/app/material/button-toggle/button-toggle-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button_demo__ = __webpack_require__("./src/app/material/button/button-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_demo__ = __webpack_require__("./src/app/material/card/card-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_demo__ = __webpack_require__("./src/app/material/checkbox/checkbox-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chips_chips_demo__ = __webpack_require__("./src/app/material/chips/chips-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_demo__ = __webpack_require__("./src/app/material/datepicker/datepicker-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_demo__ = __webpack_require__("./src/app/material/dialog/dialog-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drawer_drawer_demo__ = __webpack_require__("./src/app/material/drawer/drawer-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__expansion_expansion_demo__ = __webpack_require__("./src/app/material/expansion/expansion-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_list_grid_list_demo__ = __webpack_require__("./src/app/material/grid-list/grid-list-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input_input_demo__ = __webpack_require__("./src/app/material/input/input-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_list_demo__ = __webpack_require__("./src/app/material/list/list-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_menu_demo__ = __webpack_require__("./src/app/material/menu/menu-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_bar_progress_bar_demo__ = __webpack_require__("./src/app/material/progress-bar/progress-bar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_spinner_progress_spinner_demo__ = __webpack_require__("./src/app/material/progress-spinner/progress-spinner-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__radio_radio_demo__ = __webpack_require__("./src/app/material/radio/radio-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ripple_ripple_demo__ = __webpack_require__("./src/app/material/ripple/ripple-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__select_select_demo__ = __webpack_require__("./src/app/material/select/select-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slide_toggle_slide_toggle_demo__ = __webpack_require__("./src/app/material/slide-toggle/slide-toggle-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__slider_slider_demo__ = __webpack_require__("./src/app/material/slider/slider-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__snack_bar_snack_bar_demo__ = __webpack_require__("./src/app/material/snack-bar/snack-bar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stepper_stepper_demo__ = __webpack_require__("./src/app/material/stepper/stepper-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tabs_routes__ = __webpack_require__("./src/app/material/tabs/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tabs_tabs_demo__ = __webpack_require__("./src/app/material/tabs/tabs-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__toolbar_toolbar_demo__ = __webpack_require__("./src/app/material/toolbar/toolbar-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tooltip_tooltip_demo__ = __webpack_require__("./src/app/material/tooltip/tooltip-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__typography_typography_demo__ = __webpack_require__("./src/app/material/typography/typography-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__table_table_demo_page__ = __webpack_require__("./src/app/material/table/table-demo-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__table_routes__ = __webpack_require__("./src/app/material/table/routes.ts");






























var MaterialRoutes = [{
        path: '',
        children: [{
                path: 'autocomplete',
                component: __WEBPACK_IMPORTED_MODULE_0__autocomplete_autocomplete_demo__["a" /* AutocompleteDemoComponent */],
                data: {
                    heading: 'Autocomple',
                    css: ''
                }
            },
            {
                path: 'button',
                component: __WEBPACK_IMPORTED_MODULE_2__button_button_demo__["a" /* ButtonDemoComponent */],
                data: {
                    heading: 'Button',
                    css: ''
                }
            },
            {
                path: 'button-toggle',
                component: __WEBPACK_IMPORTED_MODULE_1__button_toggle_button_toggle_demo__["a" /* ButtonToggleDemoComponent */],
                data: {
                    heading: 'Button toggle',
                    css: ''
                }
            },
            {
                path: 'card',
                component: __WEBPACK_IMPORTED_MODULE_3__card_card_demo__["a" /* CardDemoComponent */],
                data: {
                    heading: 'Card',
                    css: ''
                }
            },
            {
                path: 'checkbox',
                component: __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_demo__["a" /* CheckboxDemoComponent */],
                data: {
                    heading: 'Checkbox',
                    css: ''
                }
            },
            {
                path: 'chips',
                component: __WEBPACK_IMPORTED_MODULE_5__chips_chips_demo__["a" /* ChipsDemoComponent */],
                data: {
                    heading: 'Chips',
                    css: ''
                }
            },
            {
                path: 'datepicker',
                component: __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_demo__["a" /* DatepickerDemoComponent */],
                data: {
                    heading: 'Datepicker',
                    css: ''
                }
            },
            {
                path: 'dialog',
                component: __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_demo__["b" /* DialogDemoComponent */],
                data: {
                    heading: 'Dialog',
                    css: ''
                }
            },
            {
                path: 'drawer',
                component: __WEBPACK_IMPORTED_MODULE_8__drawer_drawer_demo__["a" /* DrawerDemoComponent */],
                data: {
                    heading: 'Drawer',
                    css: ''
                }
            },
            {
                path: 'expansion',
                component: __WEBPACK_IMPORTED_MODULE_9__expansion_expansion_demo__["a" /* ExpansionDemoComponent */],
                data: {
                    heading: 'Expansion',
                    css: ''
                }
            },
            {
                path: 'grid-list',
                component: __WEBPACK_IMPORTED_MODULE_10__grid_list_grid_list_demo__["a" /* GridListDemoComponent */],
                data: {
                    heading: 'Grid list',
                    css: ''
                }
            },
            {
                path: 'input',
                component: __WEBPACK_IMPORTED_MODULE_11__input_input_demo__["a" /* InputDemoComponent */],
                data: {
                    heading: 'Input',
                    css: ''
                }
            },
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_12__list_list_demo__["a" /* ListDemoComponent */],
                data: {
                    heading: 'List',
                    css: ''
                }
            },
            {
                path: 'menu',
                component: __WEBPACK_IMPORTED_MODULE_13__menu_menu_demo__["a" /* MenuDemoComponent */],
                data: {
                    heading: 'Menu',
                    css: ''
                }
            },
            {
                path: 'progress-bar',
                component: __WEBPACK_IMPORTED_MODULE_14__progress_bar_progress_bar_demo__["a" /* ProgressBarDemoComponent */],
                data: {
                    heading: 'Progress bar',
                    css: ''
                }
            },
            {
                path: 'progress-spinner',
                component: __WEBPACK_IMPORTED_MODULE_15__progress_spinner_progress_spinner_demo__["a" /* ProgressSpinnerDemoComponent */],
                data: {
                    heading: 'Progress spinner',
                    css: ''
                }
            },
            {
                path: 'radio',
                component: __WEBPACK_IMPORTED_MODULE_16__radio_radio_demo__["a" /* RadioDemoComponent */],
                data: {
                    heading: 'Radio',
                    css: ''
                }
            },
            {
                path: 'ripple',
                component: __WEBPACK_IMPORTED_MODULE_17__ripple_ripple_demo__["a" /* RippleDemoComponent */],
                data: {
                    heading: 'Ripple',
                    css: ''
                }
            },
            {
                path: 'select',
                component: __WEBPACK_IMPORTED_MODULE_18__select_select_demo__["a" /* SelectDemoComponent */],
                data: {
                    heading: 'Select',
                    css: ''
                }
            },
            {
                path: 'slide-toggle',
                component: __WEBPACK_IMPORTED_MODULE_19__slide_toggle_slide_toggle_demo__["a" /* SlideToggleDemoComponent */],
                data: {
                    heading: 'Slide toggle',
                    css: ''
                }
            },
            {
                path: 'slider',
                component: __WEBPACK_IMPORTED_MODULE_20__slider_slider_demo__["a" /* SliderDemoComponent */],
                data: {
                    heading: 'Slider',
                    css: ''
                }
            },
            {
                path: 'snack-bar',
                component: __WEBPACK_IMPORTED_MODULE_21__snack_bar_snack_bar_demo__["a" /* SnackBarDemoComponent */],
                data: {
                    heading: 'Snackbar',
                    css: ''
                }
            },
            {
                path: 'stepper',
                component: __WEBPACK_IMPORTED_MODULE_22__stepper_stepper_demo__["a" /* StepperDemoComponent */],
                data: {
                    heading: 'Stepper',
                    css: ''
                }
            },
            {
                path: 'table',
                component: __WEBPACK_IMPORTED_MODULE_28__table_table_demo_page__["a" /* TableDemoPageComponent */],
                children: __WEBPACK_IMPORTED_MODULE_29__table_routes__["a" /* TABLE_DEMO_ROUTES */],
                data: {
                    heading: 'Table',
                    css: ''
                }
            },
            {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_24__tabs_tabs_demo__["d" /* TabsDemoComponent */],
                children: __WEBPACK_IMPORTED_MODULE_23__tabs_routes__["a" /* TABS_DEMO_ROUTES */],
                data: {
                    heading: 'Tabs',
                    css: ''
                }
            },
            {
                path: 'toolbar',
                component: __WEBPACK_IMPORTED_MODULE_25__toolbar_toolbar_demo__["a" /* ToolbarDemoComponent */],
                data: {
                    heading: 'Toolbar',
                    css: ''
                }
            },
            {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_26__tooltip_tooltip_demo__["a" /* TooltipDemoComponent */],
                data: {
                    heading: 'Tooltip',
                    css: ''
                }
            },
            {
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_27__typography_typography_demo__["a" /* TypographyDemoComponent */],
                data: {
                    heading: 'Typography',
                    css: ''
                }
            },
            {
                path: 'expansion',
                component: __WEBPACK_IMPORTED_MODULE_9__expansion_expansion_demo__["a" /* ExpansionDemoComponent */],
                data: {
                    heading: 'Expansion',
                    css: ''
                }
            },
            {
                path: 'stepper',
                component: __WEBPACK_IMPORTED_MODULE_22__stepper_stepper_demo__["a" /* StepperDemoComponent */],
                data: {
                    heading: 'Stepper',
                    css: ''
                }
            },
        ]
    }];


/***/ }),

/***/ "./src/app/material/menu/menu-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-2\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>You clicked on: {{ selected }}</p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let item of items\" (click)=\"select(item.text)\" [disabled]=\"item.disabled\">\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>Menu with divider</p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [matMenuTriggerFor]=\"divider\" aria-label=\"Open basic menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu #divider=\"matMenu\">\n      <ng-container *ngFor=\"let item of items; last as last\">\n        <button mat-menu-item [disabled]=\"item.disabled\">\n          {{ item.text }}\n        </button>\n        <mat-divider *ngIf=\"!last\"></mat-divider>\n      </ng-container>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>Nested menu</p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [matMenuTriggerFor]=\"animals\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu #animals=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n    </mat-menu>\n\n    <mat-menu #vertebrates=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n      <button mat-menu-item>Birds</button>\n      <button mat-menu-item>Mammals</button>\n    </mat-menu>\n\n    <mat-menu #invertebrates=\"matMenu\">\n      <button mat-menu-item>Insects</button>\n      <button mat-menu-item>Molluscs</button>\n      <button mat-menu-item>Crustaceans</button>\n      <button mat-menu-item>Corals</button>\n      <button mat-menu-item>Arachnids</button>\n      <button mat-menu-item>Velvet worms</button>\n      <button mat-menu-item>Horseshoe crabs</button>\n    </mat-menu>\n\n    <mat-menu #fish=\"matMenu\">\n      <button mat-menu-item>Baikal oilfish</button>\n      <button mat-menu-item>Bala shark</button>\n      <button mat-menu-item>Ballan wrasse</button>\n      <button mat-menu-item>Bamboo shark</button>\n      <button mat-menu-item>Banded killifish</button>\n    </mat-menu>\n\n    <mat-menu #amphibians=\"matMenu\">\n      <button mat-menu-item>Sonoran desert toad</button>\n      <button mat-menu-item>Western toad</button>\n      <button mat-menu-item>Arroyo toad</button>\n      <button mat-menu-item>Yosemite toad</button>\n    </mat-menu>\n\n    <mat-menu #reptiles=\"matMenu\">\n      <button mat-menu-item>Banded Day Gecko</button>\n      <button mat-menu-item>Banded Gila Monster</button>\n      <button mat-menu-item>Black Tree Monitor</button>\n      <button mat-menu-item>Blue Spiny Lizard</button>\n    </mat-menu>\n  </div>\n</div>\n\n<div class=\"mb-2\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>Clicking these will navigate:</p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [matMenuTriggerFor]=\"anchorMenu\" aria-label=\"Open anchor menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu #anchorMenu=\"matMenu\">\n      <a mat-menu-item *ngFor=\"let item of items\" href=\"http://www.google.com\" [disabled]=\"item.disabled\">\n        {{ item.text }}\n      </a>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>\n      Position x: before\n    </p>\n\n    <mat-card>\n      <mat-toolbar class=\"end-icon\">\n        <button mat-icon-button [matMenuTriggerFor]=\"posXMenu\" aria-label=\"Open x-positioned menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu xPosition=\"before\" #posXMenu=\"matMenu\" class=\"before\">\n      <button mat-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\n        <mat-icon>{{ item.icon }}</mat-icon>\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>\n      Position y: above\n    </p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [matMenuTriggerFor]=\"posYMenu\" aria-label=\"Open y-positioned menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu yPosition=\"above\" #posYMenu=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n</div>\n\n<div class=\"demo-menu\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>overlapTrigger: false</p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [mat-menu-trigger-for]=\"menuOverlay\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu [overlapTrigger]=\"false\" #menuOverlay=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>\n      Position x: before, overlapTrigger: false\n    </p>\n\n    <mat-card>\n      <mat-toolbar class=\"end-icon\">\n        <button mat-icon-button [mat-menu-trigger-for]=\"posXMenuOverlay\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu xPosition=\"before\" [overlapTrigger]=\"false\" #posXMenuOverlay=\"matMenu\" class=\"before\">\n      <button mat-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\n        <mat-icon>{{ item.icon }}</mat-icon>\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n  <div class=\"menu-section\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n    <p>\n      Position y: above, overlapTrigger: false\n    </p>\n\n    <mat-card>\n      <mat-toolbar>\n        <button mat-icon-button [mat-menu-trigger-for]=\"posYMenuOverlay\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-menu yPosition=\"above\" [overlapTrigger]=\"false\" #posYMenuOverlay=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\n        {{ item.text }}\n      </button>\n    </mat-menu>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/material/menu/menu-demo.scss":
/***/ (function(module, exports) {

module.exports = ".end-icon {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/material/menu/menu-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuDemoComponent = /** @class */ (function () {
    function MenuDemoComponent() {
        this.selected = '';
        this.items = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help', disabled: true },
            { text: 'Sign Out' }
        ];
        this.iconItems = [
            { text: 'Redial', icon: 'dialpad' },
            { text: 'Check voicemail', icon: 'voicemail', disabled: true },
            { text: 'Disable alerts', icon: 'notifications_off' }
        ];
    }
    MenuDemoComponent.prototype.select = function (text) { this.selected = text; };
    MenuDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-demo',
            template: __webpack_require__("./src/app/material/menu/menu-demo.html"),
            styles: [__webpack_require__("./src/app/material/menu/menu-demo.scss")],
        })
    ], MenuDemoComponent);
    return MenuDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/progress-bar/progress-bar-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Progressbars</mat-toolbar>\n  <mat-card-content>\n    <mat-button-toggle-group class=\"demo-progress-bar-controls\" [(ngModel)]=\"color\">\n      <mat-button-toggle value=\"primary\">Primary Color</mat-button-toggle>\n      <mat-button-toggle value=\"accent\">Accent Color</mat-button-toggle>\n      <mat-button-toggle value=\"warn\">Warn Color</mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <h5 class=\"mt-2\">Determinate</h5>\n\n    <div class=\"demo-progress-bar-controls\">\n      <span>Value: {{determinateProgressValue}}</span>\n      <button mat-raised-button (click)=\"stepDeterminateProgressVal(10)\">Increase</button>\n      <button mat-raised-button (click)=\"stepDeterminateProgressVal(-10)\">Decrease</button>\n    </div>\n\n    <div class=\"demo-progress-bar-container\">\n      <mat-progress-bar mode=\"determinate\" [value]=\"determinateProgressValue\" [color]=\"color\">\n      </mat-progress-bar>\n    </div>\n\n    <h5 class=\"mt-2\">Buffer</h5>\n\n    <div class=\"demo-progress-bar-controls\">\n      <span>Value: {{bufferProgressValue}}</span>\n      <button mat-raised-button (click)=\"stepBufferProgressVal(10)\">Increase</button>\n      <button mat-raised-button (click)=\"stepBufferProgressVal(-10)\">Decrease</button>\n      <span class=\"demo-progress-bar-spacer\"></span>\n      <span>Buffer Value: {{bufferBufferValue}}</span>\n      <button mat-raised-button (click)=\"stepBufferBufferVal(10)\">Increase</button>\n      <button mat-raised-button (click)=\"stepBufferBufferVal(-10)\">Decrease</button>\n    </div>\n\n    <div class=\"demo-progress-bar-container\">\n      <mat-progress-bar [value]=\"bufferProgressValue\" [bufferValue]=\"bufferBufferValue\" mode=\"buffer\"\n                      [color]=\"color\"></mat-progress-bar>\n    </div>\n\n    <h5 class=\"mt-2\">Indeterminate</h5>\n    <div class=\"demo-progress-bar-container\">\n      <mat-progress-bar mode=\"indeterminate\" [color]=\"color\"></mat-progress-bar>\n    </div>\n\n    <h5 class=\"mt-2\">Query</h5>\n    <div class=\"demo-progress-bar-container\">\n      <mat-progress-bar mode=\"query\" [color]=\"color\"></mat-progress-bar>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/progress-bar/progress-bar-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-progress-bar-container {\n  width: 100%; }\n  .demo-progress-bar-container mat-progress-bar {\n    margin: 20px 0; }\n  .demo-progress-bar-spacer {\n  display: inline-block;\n  width: 50px; }\n  .demo-progress-bar-controls {\n  margin: 10px 0; }\n"

/***/ }),

/***/ "./src/app/material/progress-bar/progress-bar-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO(josephperrott): Add an automatically filling example progress bar.
var ProgressBarDemoComponent = /** @class */ (function () {
    function ProgressBarDemoComponent() {
        this.color = 'primary';
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressBarDemoComponent.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue = this.clampValue(val + this.determinateProgressValue);
    };
    ProgressBarDemoComponent.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue = this.clampValue(val + this.bufferProgressValue);
    };
    ProgressBarDemoComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue = this.clampValue(val + this.bufferBufferValue);
    };
    ProgressBarDemoComponent.prototype.clampValue = function (value) {
        return Math.max(0, Math.min(100, value));
    };
    ProgressBarDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-bar-demo',
            template: __webpack_require__("./src/app/material/progress-bar/progress-bar-demo.html"),
            styles: [__webpack_require__("./src/app/material/progress-bar/progress-bar-demo.scss")],
        })
    ], ProgressBarDemoComponent);
    return ProgressBarDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/progress-spinner/progress-spinner-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Progress Spinners</mat-toolbar>\n  <mat-card-content>\n    <h5>Determinate</h5>\n\n    <div class=\"demo-progress-spinner-controls\">\n      <p>Value: {{progressValue}}</p>\n      <button mat-raised-button (click)=\"step(10)\">Increase</button>\n      <button mat-raised-button (click)=\"step(-10)\">Decrease</button>\n      <mat-checkbox [(ngModel)]=\"isDeterminate\">Is determinate</mat-checkbox>\n    </div>\n\n    <div class=\"demo-progress-spinner\">\n      <mat-progress-spinner [mode]=\"isDeterminate ? 'determinate' : 'indeterminate'\"\n          [value]=\"progressValue\" color=\"warn\" [strokeWidth]=\"1.6\" [diameter]=\"16\"></mat-progress-spinner>\n      <mat-progress-spinner [mode]=\"isDeterminate ? 'determinate' : 'indeterminate'\"\n          [value]=\"progressValue\" color=\"accent\" [strokeWidth]=\"1\" [diameter]=\"32\"></mat-progress-spinner>\n      <mat-progress-spinner [mode]=\"isDeterminate ? 'determinate' : 'indeterminate'\"\n          [value]=\"progressValue\" color=\"primary\" [diameter]=\"50\"></mat-progress-spinner>\n    </div>\n\n    <h5 class=\"mt-2\">Indeterminate</h5>\n\n    <mat-button-toggle-group class=\"demo-progress-spinner-controls\" [(ngModel)]=\"color\">\n      <mat-button-toggle value=\"primary\">Primary Color</mat-button-toggle>\n      <mat-button-toggle value=\"accent\">Accent Color</mat-button-toggle>\n      <mat-button-toggle value=\"warn\">Warn Color</mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <div class=\"demo-progress-spinner\">\n      <mat-progress-spinner mode=\"indeterminate\" [color]=\"color\"></mat-progress-spinner>\n      <mat-progress-spinner mode=\"indeterminate\" [color]=\"color\"></mat-progress-spinner>\n      <mat-spinner [color]=\"color\"></mat-spinner>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/progress-spinner/progress-spinner-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-progress-spinner {\n  width: 100%; }\n  .demo-progress-spinner .mat-progress-spinner,\n  .demo-progress-spinner .mat-spinner {\n    display: inline-block; }\n  .demo-progress-spinner-controls {\n  margin: 10px 0; }\n"

/***/ }),

/***/ "./src/app/material/progress-spinner/progress-spinner-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressSpinnerDemoComponent = /** @class */ (function () {
    function ProgressSpinnerDemoComponent() {
        this.progressValue = 60;
        this.color = 'primary';
        this.isDeterminate = true;
    }
    ProgressSpinnerDemoComponent.prototype.step = function (val) {
        this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
    };
    ProgressSpinnerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-spinner-demo',
            template: __webpack_require__("./src/app/material/progress-spinner/progress-spinner-demo.html"),
            styles: [__webpack_require__("./src/app/material/progress-spinner/progress-spinner-demo.scss")],
        })
    ], ProgressSpinnerDemoComponent);
    return ProgressSpinnerDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/radio/radio-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Radio</mat-toolbar>\n  <mat-card-content>\n    <h5>Basic Example</h5>\n    <section class=\"demo-section\">\n      <mat-radio-button name=\"group1\" checked>Option 1</mat-radio-button>\n      <mat-radio-button name=\"group1\">Option 2</mat-radio-button>\n      <mat-radio-button name=\"group1\" disabled=\"true\">Option 3 (disabled)</mat-radio-button>\n    </section>\n\n    <h5 class=\"mt-3\">Color Example</h5>\n    <section class=\"demo-section\">\n      <mat-radio-button name=\"group2\">Default (accent)</mat-radio-button>\n      <mat-radio-button name=\"group2\" color=\"primary\">Primary</mat-radio-button>\n      <mat-radio-button name=\"group2\" color=\"accent\">Accent</mat-radio-button>\n      <mat-radio-button name=\"group2\" color=\"warn\">Warn</mat-radio-button>\n    </section>\n\n    <h5 class=\"mt-3\">Dynamic Example</h5>\n    <section class=\"demo-section\">\n      <div>\n        <span>isDisabled: {{isDisabled}}</span>\n        <button mat-raised-button (click)=\"isDisabled=!isDisabled\" class=\"demo-button\">\n          Disable buttons\n        </button>\n      </div>\n      <div>\n        <span>isRequired: {{isRequired}}</span>\n        <button mat-raised-button (click)=\"isRequired=!isRequired\" class=\"demo-button\">\n          Require buttons\n        </button>\n      </div>\n      <div>\n        <span><mat-checkbox [(ngModel)]=\"isAlignEnd\">Align end</mat-checkbox></span>\n      </div>\n      <mat-radio-group\n        name=\"my_options\"\n        [disabled]=\"isDisabled\"\n        [required]=\"isRequired\"\n        [align]=\"isAlignEnd ? 'end' : 'start'\">\n        <mat-radio-button value=\"option_1\">Option 1</mat-radio-button>\n        <mat-radio-button value=\"option_2\">Option 2</mat-radio-button>\n        <mat-radio-button value=\"option_3\">Option 3</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <h5 class=\"mt-3\">Favorite Season Example</h5>\n    <h6>Dynamic Example with two-way data-binding</h6>\n    <section class=\"demo-section\">\n      <mat-radio-group name=\"more_options\" [(ngModel)]=\"favoriteSeason\">\n        <mat-radio-button *ngFor=\"let season of seasonOptions\" name=\"more_options\" [value]=\"season\">\n          {{season}}\n        </mat-radio-button>\n      </mat-radio-group>\n      <p>Your favorite season is: {{favoriteSeason}}</p>\n    </section>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/radio/radio-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-button {\n  margin: 8px;\n  text-transform: uppercase; }\n\n.demo-section .mat-radio-button {\n  margin: 8px; }\n"

/***/ }),

/***/ "./src/app/material/radio/radio-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RadioDemoComponent = /** @class */ (function () {
    function RadioDemoComponent() {
        this.isAlignEnd = false;
        this.isDisabled = false;
        this.isRequired = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-radio-demo',
            template: __webpack_require__("./src/app/material/radio/radio-demo.html"),
            styles: [__webpack_require__("./src/app/material/radio/radio-demo.scss")],
        })
    ], RadioDemoComponent);
    return RadioDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/ripple/ripple-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Ripple</mat-toolbar>\n  <mat-card-content>\n    <section>\n      <mat-checkbox [(ngModel)]=\"disableButtonRipples\">Disable button ripples</mat-checkbox>\n      <button mat-button [disableRipple]=\"disableButtonRipples\">flat</button>\n      <button mat-raised-button [disableRipple]=\"disableButtonRipples\">raised</button>\n      <button mat-fab [disableRipple]=\"disableButtonRipples\">\n        <mat-icon>check</mat-icon>\n      </button>\n      <button mat-mini-fab [disableRipple]=\"disableButtonRipples\">\n        <mat-icon>check</mat-icon>\n      </button>\n    </section>\n\n    <section class=\"mt-2\">\n      <div class=\"demo-ripple-checkbox-option\"><mat-checkbox [(ngModel)]=\"centered\">Centered</mat-checkbox></div>\n      <div class=\"demo-ripple-checkbox-option\"><mat-checkbox [(ngModel)]=\"unbounded\">Unbounded</mat-checkbox></div>\n      <div class=\"demo-ripple-checkbox-option\"><mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox></div>\n      <div class=\"demo-ripple-checkbox-option\"><mat-checkbox [(ngModel)]=\"rounded\">Rounded container (flaky in Firefox)</mat-checkbox></div>\n    </section>\n\n    <section class=\"mt-2\">\n      Speed\n      <mat-radio-group [(ngModel)]=\"rippleSpeed\">\n        <mat-radio-button name=\"demo-ripple-options\" value=\"0.4\">Slow</mat-radio-button>\n        <mat-radio-button name=\"demo-ripple-options\" value=\"1\">Normal</mat-radio-button>\n        <mat-radio-button name=\"demo-ripple-options\" value=\"2\">Fast</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"mt-2\">\n      <mat-form-field>\n        <input matInput placeholder=\"Ripple radius\" aria-label=\"radius\" [(ngModel)]=\"radius\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Ripple color\" aria-label=\"color\" [(ngModel)]=\"rippleColor\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"mt-2\">\n      <button mat-raised-button (click)=\"launchRipple()\">Launch Ripple</button>\n      <button mat-raised-button (click)=\"launchRipple(true)\">Launch Ripple (Persistent)</button>\n      <button mat-raised-button (click)=\"fadeOutAll()\">Fade Out All</button>\n    </section>\n\n    <section class=\"mt-2\">\n      <div class=\"demo-ripple-container\"\n          [class.demo-ripple-disabled]=\"disabled\"\n          [class.demo-ripple-rounded]=\"rounded\"\n          mat-ripple\n          [matRippleCentered]=\"centered\"\n          [matRippleDisabled]=\"disabled\"\n          [matRippleUnbounded]=\"unbounded\"\n          [matRippleRadius]=\"radius\"\n          [matRippleColor]=\"rippleColor\"\n          [matRippleSpeedFactor]=\"rippleSpeed\">\n        Click me\n      </div>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material/ripple/ripple-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-ripple button, .demo-ripple a {\n  margin: 8px;\n  text-transform: uppercase; }\n\n.demo-ripple .demo-ripple-container {\n  -webkit-box-shadow: rgba(0, 0, 0, 0.118) 0 10px 15px, rgba(0, 0, 0, 0.239) 0 5px 10px;\n          box-shadow: rgba(0, 0, 0, 0.118) 0 10px 15px, rgba(0, 0, 0, 0.239) 0 5px 10px;\n  cursor: pointer;\n  font-size: 24px;\n  height: 150px;\n  line-height: 150px;\n  position: relative;\n  text-align: center;\n  -webkit-transition: all 200ms linear;\n  transition: all 200ms linear;\n  width: 200px;\n  -webkit-tap-highlight-color: transparent; }\n\n.demo-ripple .demo-ripple-container.demo-ripple-disabled {\n    color: rgba(32, 32, 32, 0.4); }\n\n.demo-ripple .demo-ripple-container.demo-ripple-rounded {\n    border-radius: 50%;\n    overflow: hidden;\n    z-index: 1; }\n\n.demo-ripple .demo-ripple-checkbox-option {\n  margin: 10px 0; }\n"

/***/ }),

/***/ "./src/app/material/ripple/ripple-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RippleDemoComponent = /** @class */ (function () {
    function RippleDemoComponent() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.rounded = false;
        this.rippleSpeed = 1;
        this.rippleColor = '';
        this.disableButtonRipples = false;
    }
    RippleDemoComponent.prototype.launchRipple = function (persistent) {
        if (persistent === void 0) { persistent = false; }
        if (this.ripple) {
            this.ripple.launch(0, 0, { centered: true, persistent: persistent });
        }
    };
    RippleDemoComponent.prototype.fadeOutAll = function () {
        if (this.ripple) {
            this.ripple.fadeOutAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatRipple */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatRipple */])
    ], RippleDemoComponent.prototype, "ripple", void 0);
    RippleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ripple-demo',
            template: __webpack_require__("./src/app/material/ripple/ripple-demo.html"),
            styles: [__webpack_require__("./src/app/material/ripple/ripple-demo.scss")],
        })
    ], RippleDemoComponent);
    return RippleDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/select/select-demo.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"showSelect=!showSelect\">SHOW SELECT</button>\n\n<div class=\"demo-select\">\n  <mat-card>\n    <mat-toolbar class=\"text-base\">ngModel</mat-toolbar>\n    <mat-card-content>\n      <mat-form-field [floatLabel]=\"floatLabel\" [color]=\"drinksTheme\">\n        <mat-select placeholder=\"Drink\" [(ngModel)]=\"currentDrink\" [required]=\"drinksRequired\"\n          [disabled]=\"drinksDisabled\" #drinkControl=\"ngModel\">\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let drink of drinks\" [value]=\"drink.value\" [disabled]=\"drink.disabled\">\n            {{ drink.viewValue }}\n          </mat-option>\n        </mat-select>\n        <mat-icon matPrefix class=\"demo-drink-icon\">local_drink</mat-icon>\n        <mat-hint>Pick a drink!</mat-hint>\n        <mat-error>You must make a selection</mat-error>\n      </mat-form-field>\n      <p> Value: {{ currentDrink }} </p>\n      <p> Touched: {{ drinkControl.touched }} </p>\n      <p> Dirty: {{ drinkControl.dirty }} </p>\n      <p> Status: {{ drinkControl.control?.status }} </p>\n      <p>\n        <label for=\"floating-placeholder\">Floating placeholder:</label>\n        <select [(ngModel)]=\"floatLabel\" id=\"floating-placeholder\">\n          <option value=\"auto\">Auto</option>\n          <option value=\"always\">Always</option>\n          <option value=\"never\">Never</option>\n        </select>\n      </p>\n      <p>\n        <label for=\"drinks-theme\">Theme:</label>\n        <select [(ngModel)]=\"drinksTheme\" id=\"drinks-theme\">\n          <option *ngFor=\"let theme of availableThemes\" [value]=\"theme.value\">\n            {{theme.name}}\n          </option>\n        </select>\n      </p>\n\n      <button mat-button (click)=\"currentDrink='water-2'\">SET VALUE</button>\n      <button mat-button (click)=\"drinksRequired=!drinksRequired\">TOGGLE REQUIRED</button>\n      <button mat-button (click)=\"drinksDisabled=!drinksDisabled\">TOGGLE DISABLED</button>\n      <button mat-button (click)=\"drinkControl.reset()\">RESET</button>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Multiple selection</mat-toolbar>\n    <mat-card-content>\n      <mat-form-field [color]=\"pokemonTheme\">\n        <mat-select multiple placeholder=\"Pokemon\" [(ngModel)]=\"currentPokemon\"\n          [required]=\"pokemonRequired\" [disabled]=\"pokemonDisabled\" #pokemonControl=\"ngModel\">\n          <mat-option *ngFor=\"let creature of pokemon\" [value]=\"creature.value\">\n            {{ creature.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <p> Value: {{ currentPokemon }} </p>\n      <p> Touched: {{ pokemonControl.touched }} </p>\n      <p> Dirty: {{ pokemonControl.dirty }} </p>\n      <p> Status: {{ pokemonControl.control?.status }} </p>\n      <p>\n        <label for=\"pokemon-theme\">Theme:</label>\n        <select [(ngModel)]=\"pokemonTheme\" id=\"pokemon-theme\">\n          <option *ngFor=\"let theme of availableThemes\" [value]=\"theme.value\">{{ theme.name }}</option>\n        </select>\n      </p>\n      <button mat-button (click)=\"setPokemonValue()\">SET VALUE</button>\n      <button mat-button (click)=\"pokemonRequired=!pokemonRequired\">TOGGLE REQUIRED</button>\n      <button mat-button (click)=\"pokemonDisabled=!pokemonDisabled\">TOGGLE DISABLED</button>\n      <button mat-button (click)=\"pokemonControl.reset()\">RESET</button>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Without Angular forms</mat-toolbar>\n    <mat-card-content>\n      <mat-form-field>\n        <mat-select placeholder=\"Digimon\" [(value)]=\"currentDigimon\">\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let creature of digimon\" [value]=\"creature.value\">\n            {{ creature.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <p>Value: {{ currentDigimon }}</p>\n\n      <button mat-button (click)=\"currentDigimon='pajiramon-3'\">SET VALUE</button>\n      <button mat-button (click)=\"currentDigimon=null\">RESET</button>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">Option groups</mat-toolbar>\n    <mat-card-content>\n      <mat-form-field>\n        <mat-select placeholder=\"Pokemon\" [(ngModel)]=\"currentPokemonFromGroup\">\n          <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n            [disabled]=\"group.disabled\">\n            <mat-option *ngFor=\"let creature of group.pokemon\" [value]=\"creature.value\">\n              {{ creature.viewValue }}\n            </mat-option>\n          </mat-optgroup>\n        </mat-select>\n      </mat-form-field>\n    </mat-card-content>\n  </mat-card>\n\n\n  <mat-card>\n    <mat-toolbar class=\"text-base\">compareWith</mat-toolbar>\n    <mat-card-content>\n      <mat-form-field [color]=\"drinksTheme\">\n        <mat-select placeholder=\"Drink\"\n                   [(ngModel)]=\"currentDrinkObject\"\n                   [required]=\"drinkObjectRequired\"\n                   [compareWith]=\"compareByValue ? compareDrinkObjectsByValue : compareByReference\"\n                   #drinkObjectControl=\"ngModel\">\n          <mat-option *ngFor=\"let drink of drinks\" [value]=\"drink\" [disabled]=\"drink.disabled\">\n            {{ drink.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <p> Value: {{ currentDrinkObject | json }} </p>\n      <p> Touched: {{ drinkObjectControl.touched }} </p>\n      <p> Dirty: {{ drinkObjectControl.dirty }} </p>\n      <p> Status: {{ drinkObjectControl.control?.status }} </p>\n      <p> Comparison Mode: {{ compareByValue ? 'VALUE' : 'REFERENCE' }} </p>\n\n      <button mat-button (click)=\"reassignDrinkByCopy()\"\n              matTooltip=\"This action should clear the display value when comparing by reference.\">\n        REASSIGN DRINK BY COPY\n      </button>\n      <button mat-button (click)=\"drinkObjectRequired=!drinkObjectRequired\">TOGGLE REQUIRED</button>\n      <button mat-button (click)=\"compareByValue=!compareByValue\">TOGGLE COMPARE BY VALUE</button>\n      <button mat-button (click)=\"drinkObjectControl.reset()\">RESET</button>\n    </mat-card-content>\n  </mat-card>\n\n  <div *ngIf=\"showSelect\">\n    <mat-card>\n      <mat-toolbar class=\"text-base\">formControl</mat-toolbar>\n      <mat-card-content>\n        <mat-form-field>\n          <mat-select placeholder=\"Food i would like to eat\" [formControl]=\"foodControl\">\n            <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\"> {{ food.viewValue }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <p> Value: {{ foodControl.value }} </p>\n        <p> Touched: {{ foodControl.touched }} </p>\n        <p> Dirty: {{ foodControl.dirty }} </p>\n        <p> Status: {{ foodControl.status }} </p>\n        <button mat-button (click)=\"foodControl.setValue('pizza-1')\">SET VALUE</button>\n        <button mat-button (click)=\"toggleDisabled()\">TOGGLE DISABLED</button>\n        <button mat-button (click)=\"foodControl.reset()\">RESET</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div *ngIf=\"showSelect\">\n    <mat-card>\n      <mat-toolbar class=\"text-base\">Change event</mat-toolbar>\n      <mat-card-content>\n        <mat-form-field>\n          <mat-select placeholder=\"Starter Pokemon\" (change)=\"latestChangeEvent = $event\">\n            <mat-option *ngFor=\"let creature of pokemon\" [value]=\"creature.value\">{{ creature.viewValue }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <p> Change event value: {{ latestChangeEvent?.value }} </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/material/select/select-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-select .demo-drink-icon {\n  vertical-align: bottom;\n  padding-right: 0.25em; }\n"

/***/ }),

/***/ "./src/app/material/select/select-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent() {
        this.drinksRequired = false;
        this.drinkObjectRequired = false;
        this.pokemonRequired = false;
        this.drinksDisabled = false;
        this.pokemonDisabled = false;
        this.showSelect = false;
        this.currentDrinkObject = { value: 'tea-5', viewValue: 'Tea' };
        this.floatLabel = 'auto';
        this.foodControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('pizza-1');
        this.topHeightCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0);
        this.drinksTheme = 'primary';
        this.pokemonTheme = 'primary';
        this.compareByValue = true;
        this.foods = [
            { value: null, viewValue: 'None' },
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino' },
            { value: 'water-2', viewValue: 'Water' },
            { value: 'pepper-3', viewValue: 'Dr. Pepper' },
            { value: 'coffee-4', viewValue: 'Coffee' },
            { value: 'tea-5', viewValue: 'Tea' },
            { value: 'juice-6', viewValue: 'Orange juice' },
            { value: 'wine-7', viewValue: 'Wine' },
            { value: 'milk-8', viewValue: 'Milk' },
        ];
        this.pokemon = [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'charizard-1', viewValue: 'Charizard' },
            { value: 'squirtle-2', viewValue: 'Squirtle' },
            { value: 'pikachu-3', viewValue: 'Pikachu' },
            { value: 'jigglypuff-4', viewValue: 'Jigglypuff with a really long name that will truncate' },
            { value: 'ditto-5', viewValue: 'Ditto' },
            { value: 'psyduck-6', viewValue: 'Psyduck' },
        ];
        this.availableThemes = [
            { value: 'primary', name: 'Primary' },
            { value: 'accent', name: 'Accent' },
            { value: 'warn', name: 'Warn' }
        ];
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        this.digimon = [
            { value: 'mihiramon-0', viewValue: 'Mihiramon' },
            { value: 'sandiramon-1', viewValue: 'Sandiramon' },
            { value: 'sinduramon-2', viewValue: 'Sinduramon' },
            { value: 'pajiramon-3', viewValue: 'Pajiramon' },
            { value: 'vajiramon-4', viewValue: 'Vajiramon' },
            { value: 'indramon-5', viewValue: 'Indramon' }
        ];
    }
    SelectDemoComponent.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    SelectDemoComponent.prototype.setPokemonValue = function () {
        this.currentPokemon = ['jigglypuff-4', 'psyduck-6'];
    };
    SelectDemoComponent.prototype.reassignDrinkByCopy = function () {
        this.currentDrinkObject = __assign({}, this.currentDrinkObject);
    };
    SelectDemoComponent.prototype.compareDrinkObjectsByValue = function (d1, d2) {
        return d1 && d2 && d1.value === d2.value;
    };
    SelectDemoComponent.prototype.compareByReference = function (o1, o2) {
        return o1 === o2;
    };
    SelectDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-demo',
            template: __webpack_require__("./src/app/material/select/select-demo.html"),
            styles: [__webpack_require__("./src/app/material/select/select-demo.scss")],
        })
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/slide-toggle/slide-toggle-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Slide toggle</mat-toolbar>\n  <mat-card-content>\n    <div class=\"slide-toggle-example\">\n\n      <mat-slide-toggle color=\"primary\" [(ngModel)]=\"firstToggle\">\n        Default Slide Toggle\n      </mat-slide-toggle>\n\n      <mat-slide-toggle [(ngModel)]=\"firstToggle\" disabled>\n        Disabled Slide Toggle\n      </mat-slide-toggle>\n\n      <mat-slide-toggle [disabled]=\"firstToggle\">\n        Disable Bound\n      </mat-slide-toggle>\n\n      <p>Example where the slide toggle is required inside of a form.</p>\n\n      <form #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n        <mat-slide-toggle name=\"slideToggle\" required ngModel>\n          Slide Toggle\n        </mat-slide-toggle>\n\n        <p>\n          <button mat-raised-button type=\"submit\">Submit Form</button>\n        </p>\n\n      </form>\n\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/slide-toggle/slide-toggle-demo.scss":
/***/ (function(module, exports) {

module.exports = ".slide-toggle-example {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .slide-toggle-example mat-slide-toggle {\n    margin: 6px 0; }\n"

/***/ }),

/***/ "./src/app/material/slide-toggle/slide-toggle-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideToggleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideToggleDemoComponent = /** @class */ (function () {
    function SlideToggleDemoComponent() {
    }
    SlideToggleDemoComponent.prototype.onFormSubmit = function () {
        alert("You submitted the form.");
    };
    SlideToggleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slide-toggle-demo',
            template: __webpack_require__("./src/app/material/slide-toggle/slide-toggle-demo.html"),
            styles: [__webpack_require__("./src/app/material/slide-toggle/slide-toggle-demo.scss")],
        })
    ], SlideToggleDemoComponent);
    return SlideToggleDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/slider/slider-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Sliders</mat-toolbar>\n  <mat-card-content>\n    <h5>Default Slider</h5>\n    Label <mat-slider #slidey aria-label=\"Basic slider\"></mat-slider>\n    {{slidey.value}}\n\n    <h5 class=\"mt-2\">Colors</h5>\n    <mat-slider color=\"primary\" value=\"50\" thumbLabel aria-label=\"Primary color slider\"></mat-slider>\n    <mat-slider color=\"accent\" value=\"50\" thumbLabel aria-label=\"Accent color slider\"></mat-slider>\n    <mat-slider color=\"warn\" value=\"50\" thumbLabel aria-label=\"Warn color slider\"></mat-slider>\n\n    <h5 class=\"mt-2\">Slider with Min and Max</h5>\n    <input [(ngModel)]=\"min\" type=\"number\">\n    <mat-slider [min]=\"min\" [max]=\"max\" tickInterval=\"5\" #slider2 aria-label=\"Min & max slider\">\n    </mat-slider>\n    {{slider2.value}}\n    <input [(ngModel)]=\"max\" type=\"number\">\n\n    <h5 class=\"mt-2\">Disabled Slider</h5>\n    <mat-slider disabled [(ngModel)]=\"disabledValue\" [tickInterval]=\"1\" aria-label=\"Disabled slider\">\n    </mat-slider>\n    <input [(ngModel)]=\"disabledValue\" type=\"number\">\n\n    <h5 class=\"mt-2\"h1>Slider with set value</h5>\n    <mat-slider value=\"43\" aria-label=\"Initial value slider\"></mat-slider>\n\n    <h5 class=\"mt-2\">Slider with step defined</h5>\n    <mat-slider min=\"1\" max=\"100\" step=\"20\" #slider5 aria-label=\"Slider with step\"></mat-slider>\n    {{slider5.value}}\n\n    <h5 class=\"mt-2\">Slider with set tick interval</h5>\n    <mat-slider tickInterval=\"auto\" aria-label=\"Slider with auto ticks\"></mat-slider>\n    <mat-slider tickInterval=\"9\" aria-label=\"Slider with ticks\"></mat-slider>\n\n    <h5 class=\"mt-2\">Slider with Thumb Label</h5>\n    <mat-slider thumbLabel aria-label=\"Slider with thumb label\"></mat-slider>\n\n    <h5 class=\"mt-2\">Slider with one-way binding</h5>\n    <mat-slider [value]=\"val\" step=\"40\" aria-label=\"Slider with value binding\"></mat-slider>\n    <input [(ngModel)]=\"val\" type=\"number\">\n\n    <h5 class=\"mt-2\">Slider with two-way binding</h5>\n    <mat-slider [(ngModel)]=\"demo\" step=\"40\" aria-label=\"Slider with ngModel\"></mat-slider>\n    <input [(ngModel)]=\"demo\" type=\"number\">\n\n    <h5 class=\"mt-2\">Inverted slider</h5>\n    <mat-slider invert value=\"50\" tickInterval=\"5\" aria-label=\"Inverted slider\"></mat-slider>\n\n    <h5 class=\"mt-2\">Vertical slider</h5>\n    <mat-slider vertical thumbLabel tickInterval=\"auto\" value=\"50\" aria-label=\"Vertical slider\">\n    </mat-slider>\n\n    <h5 class=\"mt-2\">Inverted vertical slider</h5>\n    <mat-slider vertical invert thumbLabel tickInterval=\"auto\" value=\"50\"\n              aria-label=\"Inverted vertical slider\">\n    </mat-slider>\n\n    <mat-tab-group>\n      <mat-tab label=\"One\">\n        <mat-slider min=\"1\" max=\"5\" value=\"3\" aria-label=\"Slider in a tab\"></mat-slider>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/slider/slider-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderDemoComponent = /** @class */ (function () {
    function SliderDemoComponent() {
        this.val = 50;
        this.min = 0;
        this.max = 100;
        this.disabledValue = 0;
    }
    SliderDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider-demo',
            template: __webpack_require__("./src/app/material/slider/slider-demo.html"),
        })
    ], SliderDemoComponent);
    return SliderDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/snack-bar/snack-bar-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"text-base\">Snackbar</mat-toolbar>\n  <mat-card-content>\n    <div>\n      <div>\n        Message: <mat-form-field><input matInput type=\"text\" [(ngModel)]=\"message\"></mat-form-field>\n      </div>\n      <div>\n        <div>Position in page: </div>\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"horizontalPosition\">\n            <mat-option value=\"start\">Start</mat-option>\n            <mat-option value=\"end\">End</mat-option>\n            <mat-option value=\"left\">Left</mat-option>\n            <mat-option value=\"right\">Right</mat-option>\n            <mat-option value=\"center\">Center</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"verticalPosition\">\n            <mat-option value=\"top\">Top</mat-option>\n            <mat-option value=\"bottom\">Bottom</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-checkbox [(ngModel)]=\"action\">\n          <p *ngIf=\"!action\">Show button on snack bar</p>\n          <mat-form-field *ngIf=\"action\">\n            <input matInput\n                  type=\"text\"\n                  class=\"demo-button-label-input\"\n                  placeholder=\"Snack bar action label\"\n                  [(ngModel)]=\"actionButtonLabel\">\n          </mat-form-field>\n        </mat-checkbox>\n      </div>\n      <div>\n        <mat-checkbox [(ngModel)]=\"setAutoHide\">\n          <p *ngIf=\"!setAutoHide\">Auto hide after duration</p>\n          <mat-form-field *ngIf=\"setAutoHide\">\n            <input matInput\n                  type=\"number\"\n                  class=\"demo-button-label-input\"\n                  placeholder=\"Auto Hide Duration in ms\"\n                  [(ngModel)]=\"autoHide\">\n          </mat-form-field>\n        </mat-checkbox>\n      </div>\n      <p>\n        <mat-checkbox [(ngModel)]=\"addExtraClass\">Add extra class to container</mat-checkbox>\n      </p>\n    </div>\n\n    <button mat-raised-button (click)=\"open()\">OPEN</button>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/material/snack-bar/snack-bar-demo.scss":
/***/ (function(module, exports) {

module.exports = ".party {\n  -webkit-animation: party 5000ms infinite;\n          animation: party 5000ms infinite; }\n\n@-webkit-keyframes party {\n  0% {\n    background: #00f; }\n  10% {\n    background: #8e44ad; }\n  20% {\n    background: #1abc9c; }\n  30% {\n    background: #d35400; }\n  40% {\n    background: #00f; }\n  50% {\n    background: #34495e; }\n  60% {\n    background: #00f; }\n  70% {\n    background: #2980b9; }\n  80% {\n    background: #f1c40f; }\n  90% {\n    background: #2980b9; }\n  100% {\n    background: #0ff; } }\n\n@keyframes party {\n  0% {\n    background: #00f; }\n  10% {\n    background: #8e44ad; }\n  20% {\n    background: #1abc9c; }\n  30% {\n    background: #d35400; }\n  40% {\n    background: #00f; }\n  50% {\n    background: #34495e; }\n  60% {\n    background: #00f; }\n  70% {\n    background: #2980b9; }\n  80% {\n    background: #f1c40f; }\n  90% {\n    background: #2980b9; }\n  100% {\n    background: #0ff; } }\n"

/***/ }),

/***/ "./src/app/material/snack-bar/snack-bar-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackBarDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackBarDemoComponent = /** @class */ (function () {
    function SnackBarDemoComponent(snackBar, dir) {
        this.snackBar = snackBar;
        this.dir = dir;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 10000;
        this.addExtraClass = false;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    SnackBarDemoComponent.prototype.open = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatSnackBarConfig */]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.panelClass = this.addExtraClass ? ['party'] : undefined;
        config.direction = this.dir.value;
        this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
    };
    SnackBarDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-snack-bar-demo',
            styles: [__webpack_require__("./src/app/material/snack-bar/snack-bar-demo.scss")],
            template: __webpack_require__("./src/app/material/snack-bar/snack-bar-demo.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_bidi__["b" /* Dir */]])
    ], SnackBarDemoComponent);
    return SnackBarDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/stepper/stepper-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-checkbox [(ngModel)]=\"isNonLinear\">Disable linear mode</mat-checkbox>\n\n<h5 class=\"mt-2\">Linear Vertical Stepper Demo using a single form</h5>\n<form [formGroup]=\"formGroup\">\n  <mat-vertical-stepper formArrayName=\"formArray\" [linear]=\"!isNonLinear\">\n    <mat-step formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"First Name\" formControlName=\"firstNameFormCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Last Name\" formControlName=\"lastNameFormCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext type=\"button\">Next</button>\n      </div>\n    </mat-step>\n\n    <mat-step formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\" optional>\n      <ng-template matStepLabel>\n        <div>Fill out your email address</div>\n      </ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Email address\" formControlName=\"emailFormCtrl\">\n        <mat-error>The input is invalid.</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious type=\"button\">Back</button>\n        <button mat-button matStepperNext type=\"button\">Next</button>\n      </div>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel>Confirm your information</ng-template>\n      Everything seems correct.\n      <div>\n        <button mat-button>Done</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n</form>\n\n<h5 class=\"mt-2\">Linear Horizontal Stepper Demo using a different form for each step</h5>\n<mat-horizontal-stepper [linear]=\"!isNonLinear\">\n  <mat-step [stepControl]=\"nameFormGroup\">\n    <form [formGroup]=\"nameFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"First Name\" formControlName=\"firstNameCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last Name\" formControlName=\"lastNameCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step [stepControl]=\"emailFormGroup\" optional>\n    <form [formGroup]=\"emailFormGroup\">\n      <ng-template matStepLabel>Fill out your email address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Email address\" formControlName=\"emailCtrl\">\n        <mat-error>The input is invalid</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step>\n    <form>\n      <ng-template matStepLabel>Confirm your information</ng-template>\n      Everything seems correct.\n      <div>\n        <button mat-button>Done</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<h5 class=\"mt-2\">Vertical Stepper Demo</h5>\n<mat-checkbox [(ngModel)]=\"isNonEditable\" class=\"mb-xs\">Make steps non-editable</mat-checkbox>\n<mat-vertical-stepper>\n  <mat-step [editable]=\"!isNonEditable\">\n    <ng-template matStepLabel>Fill out your name</ng-template>\n    <mat-form-field>\n      <input matInput placeholder=\"First Name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Last Name\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step [editable]=\"!isNonEditable\">\n    <ng-template matStepLabel>\n      <div>Fill out your phone number</div>\n    </ng-template>\n    <mat-form-field>\n      <input matInput placeholder=\"Phone number\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperPrevious type=\"button\">Back</button>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step [editable]=\"!isNonEditable\">\n    <ng-template matStepLabel>\n      <div>Fill out your address</div>\n    </ng-template>\n    <mat-form-field>\n      <input matInput placeholder=\"Address\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperPrevious type=\"button\">Back</button>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Confirm your information</ng-template>\n    Everything seems correct.\n    <div>\n      <button mat-button>Done</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n\n<h5 class=\"mt-2\">Horizontal Stepper Demo with Text Label</h5>\n<mat-horizontal-stepper>\n  <mat-step label=\"Fill out your name\">\n    <mat-form-field>\n      <input matInput placeholder=\"First Name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Last Name\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step label=\"Fill out your phone number\">\n    <mat-form-field>\n      <input matInput placeholder=\"Phone number\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperPrevious type=\"button\">Back</button>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step label=\"Fill out your address\">\n    <mat-form-field>\n      <input matInput placeholder=\"Address\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperPrevious type=\"button\">Back</button>\n      <button mat-button matStepperNext type=\"button\">Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step label=\"Confirm your information\">\n    Everything seems correct.\n    <div>\n      <button mat-button>Done</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<h5 class=\"mt-2\">Horizontal Stepper Demo with Templated Label</h5>\n<mat-horizontal-stepper>\n  <mat-step *ngFor=\"let step of steps\">\n    <ng-template matStepLabel>{{step.label}}</ng-template>\n    <mat-form-field>\n      <input matInput placeholder=\"Answer\" [(ngModel)]=\"step.content\">\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<h5 class=\"mt-2\">Stepper with autosize textarea</h5>\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\">\n    <mat-form-field>\n      <textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize>This is an autosize textarea, it should adjust to the size of its content.</textarea>\n    </mat-form-field>\n  </mat-step>\n</mat-horizontal-stepper>\n\n"

/***/ }),

/***/ "./src/app/material/stepper/stepper-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepperDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperDemoComponent = /** @class */ (function () {
    function StepperDemoComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isNonLinear = false;
        this.isNonEditable = false;
        this.steps = [
            { label: 'Confirm your name', content: 'Last name, First name.' },
            { label: 'Confirm your contact information', content: '123-456-7890' },
            { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
            { label: 'You are now done', content: 'Finished!' }
        ];
    }
    Object.defineProperty(StepperDemoComponent.prototype, "formArray", {
        /** Returns a FormArray with the name 'formArray'. */
        get: function () { return this.formGroup.get('formArray'); },
        enumerable: true,
        configurable: true
    });
    StepperDemoComponent.prototype.ngOnInit = function () {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    firstNameFormCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                    lastNameFormCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]
                }),
            ])
        });
        this.nameFormGroup = this._formBuilder.group({
            firstNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]
        });
    };
    StepperDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stepper-demo',
            template: __webpack_require__("./src/app/material/stepper/stepper-demo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], StepperDemoComponent);
    return StepperDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/table/people-database.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LATEST_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataset_names__ = __webpack_require__("./src/app/material/dataset/names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataset_colors__ = __webpack_require__("./src/app/material/dataset/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LATEST_ID = 0;
var PeopleDatabase = /** @class */ (function () {
    function PeopleDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(PeopleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    PeopleDatabase.prototype.initialize = function () {
        LATEST_ID = 0;
        this.dataChange.next([]);
        for (var i = 0; i < 100; i++) {
            this.addPerson();
        }
    };
    PeopleDatabase.prototype.shuffle = function (changeReferences) {
        var copiedData = this.data.slice();
        for (var i = copiedData.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [copiedData[j], copiedData[i - 1]], copiedData[i - 1] = _a[0], copiedData[j] = _a[1];
        }
        if (changeReferences) {
            copiedData = copiedData.map(function (userData) {
                return {
                    id: userData.id,
                    name: userData.name,
                    progress: userData.progress,
                    color: userData.color
                };
            });
        }
        this.dataChange.next(copiedData);
        var _a;
    };
    PeopleDatabase.prototype.addPerson = function () {
        var name = __WEBPACK_IMPORTED_MODULE_1__dataset_names__["a" /* NAMES */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_1__dataset_names__["a" /* NAMES */].length - 1))] + ' ' +
            __WEBPACK_IMPORTED_MODULE_1__dataset_names__["a" /* NAMES */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_1__dataset_names__["a" /* NAMES */].length - 1))].charAt(0) + '.';
        var copiedData = this.data.slice();
        copiedData.push({
            id: (++LATEST_ID).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: __WEBPACK_IMPORTED_MODULE_2__dataset_colors__["a" /* COLORS */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_2__dataset_colors__["a" /* COLORS */].length - 1))]
        });
        this.dataChange.next(copiedData);
    };
    PeopleDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PeopleDatabase);
    return PeopleDatabase;
}());



/***/ }),

/***/ "./src/app/material/table/person-data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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



var PersonDataSource = /** @class */ (function (_super) {
    __extends(PersonDataSource, _super);
    function PersonDataSource(_peopleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._peopleDatabase = _peopleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        return _this;
    }
    PersonDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._paginator.page,
            this._sort.sortChange,
            this._peopleDatabase.dataChange
        ];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__["a" /* merge */].apply(void 0, displayDataChanges).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function () {
            var data = _this.getSortedData();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        }));
    };
    PersonDataSource.prototype.disconnect = function () {
        // No-op
    };
    /** Returns a sorted copy of the database data. */
    PersonDataSource.prototype.getSortedData = function () {
        var _this = this;
        var data = this._peopleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return PersonDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/material/table/person-detail-data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDetailDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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


var PersonDetailDataSource = /** @class */ (function (_super) {
    __extends(PersonDetailDataSource, _super);
    function PersonDetailDataSource(_personDataSource) {
        var _this = _super.call(this) || this;
        _this._personDataSource = _personDataSource;
        return _this;
    }
    PersonDetailDataSource.prototype.connect = function () {
        return this._personDataSource.connect().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (data) {
            var rows = [];
            // Interweave a detail data object for each row data object that will be used for displaying
            // row details. Contains the row data.
            data.forEach(function (person) { return rows.push(person, { detailRow: true, data: person }); });
            return rows;
        }));
    };
    PersonDetailDataSource.prototype.disconnect = function () {
        // No-op
    };
    return PersonDetailDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/material/table/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TABLE_DEMO_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_demo__ = __webpack_require__("./src/app/material/table/table-demo.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var TABLE_DEMO_ROUTES = [
    { path: '', redirectTo: 'main-demo', pathMatch: 'full' },
    { path: 'main-demo', component: __WEBPACK_IMPORTED_MODULE_0__table_demo__["a" /* TableDemoComponent */] }
];


/***/ }),

/***/ "./src/app/material/table/table-demo-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_demo__ = __webpack_require__("./src/app/material/table/table-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_header_demo__ = __webpack_require__("./src/app/material/table/table-header-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people_database__ = __webpack_require__("./src/app/material/table/people-database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_demo_page__ = __webpack_require__("./src/app/material/table/table-demo-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TableDemoModule = /** @class */ (function () {
    function TableDemoModule() {
    }
    TableDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["N" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["O" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["P" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__table_demo__["a" /* TableDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__table_demo_page__["a" /* TableDemoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__table_header_demo__["a" /* TableHeaderDemoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__people_database__["a" /* PeopleDatabase */]
            ],
        })
    ], TableDemoModule);
    return TableDemoModule;
}());



/***/ }),

/***/ "./src/app/material/table/table-demo-page.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/material/table/table-demo-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableDemoPageComponent = /** @class */ (function () {
    function TableDemoPageComponent() {
        this.links = [
            { name: 'Main Page', link: 'main-demo' }
        ];
    }
    TableDemoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/material/table/table-demo-page.html"),
        })
    ], TableDemoPageComponent);
    return TableDemoPageComponent;
}());



/***/ }),

/***/ "./src/app/material/table/table-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-data-source-actions\">\n  <div>\n    <button mat-raised-button (click)=\"connect()\">Connect New Data Source</button>&nbsp;\n    <button mat-raised-button (click)=\"disconnect()\" [disabled]=\"!dataSource\">Disconnect Data Source</button>&nbsp;\n    <button mat-raised-button (click)=\"_peopleDatabase.shuffle(changeReferences)\">Randomize Data</button>&nbsp;\n    <mat-checkbox [(ngModel)]=\"changeReferences\">Change references</mat-checkbox>\n  </div>\n\n  <div class=\"demo-track-by-select\">\n    <div class=\"demo-track-by-label\">Track By: </div>\n    <mat-radio-group [(ngModel)]=\"trackByStrategy\">\n      <mat-radio-button [value]=\"'reference'\">Reference</mat-radio-button>\n      <mat-radio-button [value]=\"'id'\">ID</mat-radio-button>\n      <mat-radio-button [value]=\"'index'\">Index</mat-radio-button>\n    </mat-radio-group>\n  </div>\n</div>\n\n<mat-card class=\"demo-table-card\">\n  <mat-toolbar class=\"text-base\">\n    <span style=\"margin-right: auto;\">CdkTable With Dynamic Column Def</span>\n    <div>\n      <button mat-raised-button\n              (click)=\"addDynamicColumnDef()\"\n              [disabled]=\"dynamicColumnIds.length >= 4\">\n        Add Column Def\n      </button>\n      <button mat-raised-button\n              (click)=\"removeDynamicColumnDef()\"\n              [disabled]=\"dynamicColumnIds.length == 0\">\n        Remove Column Def\n      </button>\n    </div>\n  </mat-toolbar>\n\n  <mat-card-content>\n    <cdk-table [dataSource]=\"dataSource\">\n      <ng-container [cdkColumnDef]=\"column.id\" *ngFor=\"let column of dynamicColumnDefs\">\n        <cdk-header-cell *cdkHeaderCellDef> {{column.headerText}} </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\"> {{row[column.property]}} </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"dynamicColumnIds\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row; columns: dynamicColumnIds;\"></cdk-row>\n    </cdk-table>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"demo-table-card\">\n  <mat-toolbar class=\"text-base\">CdkTable Example</mat-toolbar>\n  <mat-card-content>\n    <div class=\"demo-highlighter mb-1\">\n      Highlight:\n      <mat-checkbox (change)=\"toggleHighlight('first', $event.checked)\">First Row</mat-checkbox>\n      <mat-checkbox (change)=\"toggleHighlight('last', $event.checked)\">Last Row</mat-checkbox>\n      <mat-checkbox (change)=\"toggleHighlight('even', $event.checked)\">Even Rows</mat-checkbox>\n      <mat-checkbox (change)=\"toggleHighlight('odd', $event.checked)\">Odd Rows</mat-checkbox>\n    </div>\n    <cdk-table #table matSort\n              [dataSource]=\"dataSource\"\n              [trackBy]=\"userTrackBy\">\n\n      <!-- Column Definition: ID -->\n      <ng-container cdkColumnDef=\"userId\">\n        <cdk-header-cell *cdkHeaderCellDef\n                        mat-sort-header arrowPosition=\"before\">\n          ID\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\"> {{row.id}} </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Progress -->\n      <ng-container cdkColumnDef=\"progress\">\n        <cdk-header-cell *cdkHeaderCellDef\n                        mat-sort-header start=\"desc\">\n          Progress\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\">\n          <div class=\"demo-progress-stat\">{{row.progress}}%</div>\n          <div class=\"demo-progress-indicator-container\">\n            <div class=\"demo-progress-indicator\"\n                [style.background]=\"row.progress > 50 ? 'green' : 'red'\"\n                [style.opacity]=\"getOpacity(row.progress)\"\n                [style.width.%]=\"row.progress\"></div>\n          </div>\n        </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Name -->\n      <ng-container cdkColumnDef=\"userName\">\n        <cdk-header-cell *cdkHeaderCellDef mat-sort-header>\n          Name\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\"> {{row.name}} </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Color -->\n      <ng-container cdkColumnDef=\"color\">\n        <cdk-header-cell *cdkHeaderCellDef\n                        mat-sort-header disableClear>\n          Color\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\n                            let first = first; let last = last; let even = even; let odd = odd\"\n              [ngClass]=\"{\n                  'demo-row-highlight-first': highlights.has('first') && first,\n                  'demo-row-highlight-last': highlights.has('last') && last,\n                  'demo-row-highlight-even': highlights.has('even') && even,\n                  'demo-row-highlight-odd': highlights.has('odd') && odd\n                }\">\n      </cdk-row>\n    </cdk-table>\n  </mat-card-content>\n</mat-card>\n\n<h5 class=\"mt-3\">MatTable Example</h5>\n\n<div class=\"demo-table-container demo-mat-table-example mat-elevation-z4\">\n\n  <app-table-header-demo (shiftColumns)=\"displayedColumns.push(displayedColumns.shift())\"\n                     (toggleColorColumn)=\"toggleColorColumn()\" class=\"pa-0 ma-0\">\n  </app-table-header-demo>\n\n  <mat-table [dataSource]=\"dataSource\" [trackBy]=\"userTrackBy\">\n\n    <!-- Column Definition: ID -->\n    <ng-container cdkColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Progress -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div class=\"demo-progress-stat\">{{row.progress}}%</div>\n        <div class=\"demo-progress-indicator-container\">\n          <div class=\"demo-progress-indicator\"\n               [style.background]=\"row.progress > 50 ? 'green' : 'red'\"\n               [style.opacity]=\"getOpacity(row.progress)\"\n               [style.width.%]=\"row.progress\"></div>\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Name -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Color -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef>Color</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n  </mat-table>\n\n  <mat-paginator #paginator\n                [length]=\"_peopleDatabase.data.length\"\n                [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n\n<h5 class=\"mt-3\"> MatTable Using 'When' Rows for Interactive Details</h5>\n<mat-card class=\"demo-table-card\">\n  <mat-table [dataSource]=\"dataSourceWithDetails\">\n    <!-- Column Definition: ID -->\n    <ng-container matColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Name -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Detail Column -->\n    <ng-container matColumnDef=\"details\">\n      <mat-cell *matCellDef=\"let row\">\n        <ng-container *ngIf=\"wasExpanded.has(row.data)\">\n          {{row.data.name.split(' ')[0]}}'s favorite color is {{row.data.color}} and has a progress\n          of {{row.data.progress}}%.\n        </ng-container>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"['userId', 'userName']\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: ['userId', 'userName'];\"\n             matRipple\n             class=\"user-row\"\n             [style.borderBottomColor]=\"expandedPerson == row ? 'transparent' : ''\"\n             (click)=\"expandedPerson = row; wasExpanded.add(row)\"></mat-row>\n    <mat-row *matRowDef=\"let row; columns: ['details']; when: isDetailRow\"\n             [@detailExpand]=\"row.data == expandedPerson ? 'expanded' : 'collapsed'\"\n             style=\"overflow: hidden\">\n    </mat-row>\n  </mat-table>\n</mat-card>\n\n<h5 class=\"mt-3\">MatTable With MatTableDataSource Example</h5>\n<mat-form-field>\n  <input matInput #filter placeholder=\"Filter users\">\n</mat-form-field>\n\n<div class=\"demo-table-container demo-mat-table-example mat-elevation-z4 mat-table-selectable\">\n\n  <app-table-header-demo (shiftColumns)=\"displayedColumns.push(displayedColumns.shift())\"\n                     (toggleColorColumn)=\"toggleColorColumn()\" *ngIf=\"selection.isEmpty()\" class=\"pa-0 ma-0\">\n\n    <button mat-menu-item (click)=\"progressSortingDisabled = !progressSortingDisabled\">\n      <mat-icon>sort</mat-icon>\n      Toggle Progress Sorting\n    </button>\n  </app-table-header-demo>\n\n  <div class=\"example-header example-selection-header\"\n       *ngIf=\"!selection.isEmpty()\">\n    {{selection.selected.length}}\n    {{selection.selected.length == 1 ? 'user' : 'users'}}\n    selected\n  </div>\n\n  <mat-table [dataSource]=\"matTableDataSource\" [trackBy]=\"userTrackBy\" matSort\n             #sortForDataSource=\"matSort\">\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [disabled]=\"!matTableDataSource.filteredData.length\"\n                      [checked]=\"isMasterToggleChecked()\"\n                      [indeterminate]=\"isMasterToggleIndeterminate()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: ID -->\n    <ng-container cdkColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Progress -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell\n        *matHeaderCellDef\n        [disabled]=\"progressSortingDisabled\"\n        mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div class=\"demo-progress-stat\">{{row.progress}}%</div>\n        <div class=\"demo-progress-indicator-container\">\n          <div class=\"demo-progress-indicator\"\n               [style.background]=\"row.progress > 50 ? 'green' : 'red'\"\n               [style.opacity]=\"getOpacity(row.progress)\"\n               [style.width.%]=\"row.progress\"></div>\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Name -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Column Definition: Color -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Color</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"matTableDataSourceColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: matTableDataSourceColumns;\"\n             [class.selected]=\"selection.isSelected(row)\"\n             (click)=\"selection.toggle(row)\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator #paginatorForDataSource\n                 [length]=\"_peopleDatabase.data.length\"\n                 [pageSizeOptions]=\"[10, 25, 100]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/material/table/table-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-data-source-actions > div {\n  margin: 16px 0; }\n\n.demo-data-source-actions .demo-track-by-select {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.demo-data-source-actions .demo-track-by-select .demo-track-by-label {\n    margin-right: 8px; }\n\n.demo-data-source-actions .demo-highlighter .mat-checkbox {\n  margin: 0 8px; }\n\n.demo-row-highlight-first {\n  background: #f3f315; }\n\n.demo-row-highlight-last {\n  background: #0dd5fc; }\n\n.demo-row-highlight-even {\n  background: #ff0099; }\n\n.demo-row-highlight-odd {\n  background: #83f52c; }\n\n.demo-table-card {\n  margin: 24px 0;\n  max-height: 450px;\n  overflow: auto; }\n\n.demo-table-card h3 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.user-row {\n  cursor: pointer;\n  position: relative; }\n\n.user-row:hover {\n    background: #f5f5f5; }\n\n.user-row:active {\n    background: #eaeaea; }\n\n/** Styles so that the CDK Table columns have width and font size. */\n\n.cdk-table {\n  font-size: 12px; }\n\n.cdk-table .cdk-row, .cdk-table .cdk-header-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.cdk-table .cdk-cell, .cdk-table .cdk-header-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.cdk-table .cdk-header-cell {\n    font-weight: bold; }\n\n.cdk-table .cdk-header-cell.mat-sort-header-sorted {\n      color: black; }\n\n.demo-mat-table-example table-header-demo {\n  background: white; }\n\n/* Structure so that the table is contained on a card */\n\n.demo-table-container {\n  max-height: 800px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.demo-table-container mat-table {\n    overflow: auto; }\n\n/* Column max widths */\n\n.cdk-column-userId {\n  max-width: 32px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.cdk-column-userName {\n  max-width: 120px; }\n\n.cdk-column-color {\n  max-width: 160px; }\n\n.mat-column-select {\n  max-width: 48px;\n  overflow: inherit; }\n\n/* Progress bar styling */\n\n.cdk-column-progress.cdk-cell, .cdk-column-progress.mat-cell {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.cdk-column-progress.cdk-cell .demo-progress-stat, .cdk-column-progress.mat-cell .demo-progress-stat {\n    width: 32px;\n    padding-right: 8px; }\n\n.cdk-column-progress.cdk-cell .demo-progress-indicator-container, .cdk-column-progress.mat-cell .demo-progress-indicator-container {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.cdk-column-progress.cdk-cell .demo-progress-indicator, .cdk-column-progress.mat-cell .demo-progress-indicator {\n    border-radius: 8px;\n    height: 8px; }\n\n.example-selection-header {\n  height: 64px;\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px; }\n\n.mat-table-selectable .mat-row:hover {\n  background: #eeeeee; }\n\n.mat-table-selectable .mat-row.selected {\n  background: #f5f5f5; }\n"

/***/ }),

/***/ "./src/app/material/table/table-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_database__ = __webpack_require__("./src/app/material/table/people-database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_data_source__ = __webpack_require__("./src/app/material/table/person-data-source.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_detail_data_source__ = __webpack_require__("./src/app/material/table/person-detail-data-source.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var properties = ['id', 'name', 'progress', 'color'];
var TableDemoComponent = /** @class */ (function () {
    function TableDemoComponent(_peopleDatabase) {
        var _this = this;
        this._peopleDatabase = _peopleDatabase;
        this.matTableDataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["M" /* MatTableDataSource */]();
        this.displayedColumns = [];
        this.trackByStrategy = 'reference';
        this.changeReferences = false;
        this.progressSortingDisabled = false;
        this.highlights = new Set();
        this.wasExpanded = new Set();
        this.matTableDataSourceColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.dynamicColumnDefs = [];
        this.dynamicColumnIds = [];
        this.isDetailRow = function (_index, row) { return row.hasOwnProperty('detailRow'); };
        this.userTrackBy = function (index, item) {
            switch (_this.trackByStrategy) {
                case 'id': return item.id;
                case 'reference': return item;
                case 'index': return index;
            }
        };
        this.matTableDataSource.sortingDataAccessor = function (data, property) {
            switch (property) {
                case 'userId': return +data.id;
                case 'userName': return data.name;
                case 'progress': return +data.progress;
                case 'color': return data.color;
                default: return '';
            }
        };
        this.matTableDataSource.filterPredicate =
            function (data, filter) { return data.name.indexOf(filter) !== -1; };
    }
    TableDemoComponent.prototype.ngAfterViewInit = function () {
        // Needs to be set up after the view is initialized since the data source will look at the sort
        // and paginator's initial values to know what data should be rendered.
        this.matTableDataSource.paginator = this.paginatorForDataSource;
        this.matTableDataSource.sort = this.sortForDataSource;
    };
    TableDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connect();
        Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_fromEvent__["fromEvent"])(this.filter.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_debounceTime__["a" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_distinctUntilChanged__["a" /* distinctUntilChanged */])()).subscribe(function () {
            _this.paginatorForDataSource.pageIndex = 0;
            _this.matTableDataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /** Whether all filtered rows are selected. */
    TableDemoComponent.prototype.isAllFilteredRowsSelected = function () {
        var _this = this;
        return this.matTableDataSource.filteredData.every(function (data) { return _this.selection.isSelected(data); });
    };
    /** Whether the selection it totally matches the filtered rows. */
    TableDemoComponent.prototype.isMasterToggleChecked = function () {
        return this.selection.hasValue() &&
            this.isAllFilteredRowsSelected() &&
            this.selection.selected.length >= this.matTableDataSource.filteredData.length;
    };
    /**
     * Whether there is a selection that doesn't capture all the
     * filtered rows there are no filtered rows displayed.
     */
    TableDemoComponent.prototype.isMasterToggleIndeterminate = function () {
        return this.selection.hasValue() &&
            (!this.isAllFilteredRowsSelected() || !this.matTableDataSource.filteredData.length);
    };
    /** Selects all filtered rows if they are not all selected; otherwise clear selection. */
    TableDemoComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isMasterToggleChecked()) {
            this.selection.clear();
        }
        else {
            this.matTableDataSource.filteredData.forEach(function (data) { return _this.selection.select(data); });
        }
    };
    TableDemoComponent.prototype.addDynamicColumnDef = function () {
        var nextProperty = properties[this.dynamicColumnDefs.length];
        this.dynamicColumnDefs.push({
            id: nextProperty.toUpperCase(),
            property: nextProperty,
            headerText: nextProperty
        });
        this.dynamicColumnIds = this.dynamicColumnDefs.map(function (columnDef) { return columnDef.id; });
    };
    TableDemoComponent.prototype.removeDynamicColumnDef = function () {
        this.dynamicColumnDefs.pop();
        this.dynamicColumnIds.pop();
    };
    TableDemoComponent.prototype.connect = function () {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__person_data_source__["a" /* PersonDataSource */](this._peopleDatabase, this.paginator, this.sort);
        this.dataSourceWithDetails = new __WEBPACK_IMPORTED_MODULE_4__person_detail_data_source__["a" /* PersonDetailDataSource */](this.dataSource);
        this._peopleDatabase.initialize();
        this.matTableDataSource.data = this._peopleDatabase.data.slice();
    };
    TableDemoComponent.prototype.disconnect = function () {
        this.dataSource = null;
        this.displayedColumns = [];
    };
    TableDemoComponent.prototype.getOpacity = function (progress) {
        var distanceFromMiddle = Math.abs(50 - progress);
        return distanceFromMiddle / 50 + .3;
    };
    TableDemoComponent.prototype.toggleColorColumn = function () {
        var colorColumnIndex = this.displayedColumns.indexOf('color');
        if (colorColumnIndex === -1) {
            this.displayedColumns.push('color');
        }
        else {
            this.displayedColumns.splice(colorColumnIndex, 1);
        }
    };
    TableDemoComponent.prototype.toggleHighlight = function (property, enable) {
        enable ? this.highlights.add(property) : this.highlights.delete(property);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TableDemoComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginator */])
    ], TableDemoComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatSort */])
    ], TableDemoComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginatorForDataSource'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginator */])
    ], TableDemoComponent.prototype, "paginatorForDataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sortForDataSource'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatSort */])
    ], TableDemoComponent.prototype, "sortForDataSource", void 0);
    TableDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-demo',
            template: __webpack_require__("./src/app/material/table/table-demo.html"),
            styles: [__webpack_require__("./src/app/material/table/table-demo.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["trigger"])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["state"])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["state"])('expanded', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["style"])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["transition"])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__people_database__["a" /* PeopleDatabase */]])
    ], TableDemoComponent);
    return TableDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/table/table-header-demo.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"text-base\">Users</mat-toolbar>\n\n<div class=\"actions\">\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"shiftColumns.next()\">\n      <mat-icon>subdirectory_arrow_left</mat-icon>\n      Shift Columns Left\n    </button>\n    <button mat-menu-item (click)=\"toggleColorColumn.next()\">\n      <mat-icon>color_lens</mat-icon>\n      Toggle Color Column\n    </button>\n    <ng-content></ng-content>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/material/table/table-header-demo.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  min-height: 64px;\n  padding: 0 24px; }\n\n.title {\n  font-size: 20px; }\n\n.actions {\n  color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/material/table/table-header-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableHeaderDemoComponent = /** @class */ (function () {
    function TableHeaderDemoComponent() {
        this.shiftColumns = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleColorColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TableHeaderDemoComponent.prototype, "shiftColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TableHeaderDemoComponent.prototype, "toggleColorColumn", void 0);
    TableHeaderDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-header-demo',
            template: __webpack_require__("./src/app/material/table/table-header-demo.html"),
            styles: [__webpack_require__("./src/app/material/table/table-header-demo.scss")],
        })
    ], TableHeaderDemoComponent);
    return TableHeaderDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/tabs/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs_demo__ = __webpack_require__("./src/app/material/tabs/tabs-demo.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var TABS_DEMO_ROUTES = [
    { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
    { path: 'sunny-tab', component: __WEBPACK_IMPORTED_MODULE_0__tabs_tabs_demo__["c" /* SunnyTabContentComponent */] },
    { path: 'rainy-tab', component: __WEBPACK_IMPORTED_MODULE_0__tabs_tabs_demo__["b" /* RainyTabContentComponent */] },
    { path: 'foggy-tab', component: __WEBPACK_IMPORTED_MODULE_0__tabs_tabs_demo__["a" /* FoggyTabContentComponent */] },
];


/***/ }),

/***/ "./src/app/material/tabs/tabs-demo.html":
/***/ (function(module, exports) {

module.exports = "<h5>Tab Nav Bar</h5>\n\n<button mat-button (click)=\"tabLinks.shift()\">Remove tab</button>\n<button mat-button (click)=\"swapTabLinks()\">Swap first two</button>\n<button mat-button (click)=\"addToLabel()\">Add to labels</button>\n<button mat-button (click)=\"toggleBackground()\">Toggle background</button>\n\n<mat-card class=\"mt-2\">\n  <nav mat-tab-nav-bar aria-label=\"weather navigation links\" [backgroundColor]=\"tabNavBackground\">\n    <a mat-tab-link\n       *ngFor=\"let tabLink of tabLinks; let i = index\"\n       [routerLink]=\"tabLink.link\"\n       routerLinkActive #rla=\"routerLinkActive\"\n       [active]=\"rla.isActive\">\n      {{tabLink.label}}\n    </a>\n    <a mat-tab-link disabled>Disabled Link</a>\n  </nav>\n  <router-outlet></router-outlet>\n</mat-card>\n\n\n<h5 class=\"mt-2\">Tab Group Demo - Dynamic Tabs</h5>\n<div>\n  Selected tab index:\n  <mat-form-field>\n    <input matInput type=\"number\" [(ngModel)]=\"activeTabIndex\">\n  </mat-form-field>\n</div>\n\n<div class=\"demo-dynamic-tabs\" fxLayout=\"row\">\n  <mat-card fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"40\" fxFlex=\"50\">\n    <mat-card-title>Add New Tab</mat-card-title>\n    <mat-card-content>\n      <mat-checkbox [(ngModel)]=\"createWithLongContent\">\n        Include extra content\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"gotoNewTabAfterAdding\">\n        Select after adding\n      </mat-checkbox>\n      <div>\n        Position:\n        <mat-form-field>\n          <input matInput type=\"number\" [(ngModel)]=\"addTabPosition\">\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"primary\"\n              (click)=\"addTab(createWithLongContent)\">\n        Add\n      </button>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"60\" fxFlex=\"50\">\n    <mat-tab-group class=\"demo-tab-group\" dynamicHeight [(selectedIndex)]=\"activeTabIndex\">\n      <mat-tab *ngFor=\"let tab of dynamicTabs\" [disabled]=\"tab.disabled\">\n        <ng-template mat-tab-label>{{tab.label}}</ng-template>\n        <div class=\"tab-content\">\n          {{tab.content}}\n          <br>\n          <br>\n          <div *ngIf=\"tab.extraContent\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n            orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n            gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n            diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n            ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n            venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n            Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n            orci posuere, nec luctus mauris semper.\n            <br>\n            <br>\n            Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n            magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n            Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n            Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n            tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n            nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n            <br>\n            <br>\n            Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n            molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n            at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n            Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n          </div>\n          <br>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n          </mat-form-field>\n          <br><br>\n          <button mat-raised-button\n                  [disabled]=\"dynamicTabs.length == 1\"\n                  (click)=\"deleteTab(tab)\">\n            Delete Tab\n          </button>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</div>\n\n<h5 class=\"mt-2\">Tab Group Demo - Dynamic Height</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" dynamicHeight>\n    <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      <div class=\"tab-content\">\n        {{tab.content}}\n        <br>\n        <br>\n        <div *ngIf=\"tab.extraContent\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n          gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n          diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n          ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n          venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n          Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n          orci posuere, nec luctus mauris semper.\n          <br>\n          <br>\n          Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n          magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n          Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n          Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n          tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n          nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n          <br>\n          <br>\n          Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n          molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n          at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n          Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n        </div>\n        <br>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n        </mat-form-field>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Tab Group Demo - Fixed Height</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" style=\"height: 220px\">\n    <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      <div class=\"tab-content\">\n        {{tab.content}}\n        <br>\n        <br>\n        <div *ngIf=\"tab.extraContent\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n          gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n          diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n          ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n          venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n          Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n          orci posuere, nec luctus mauris semper.\n          <br>\n          <br>\n          Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n          magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n          Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n          Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n          tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n          nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n          <br>\n          <br>\n          Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n          molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n          at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n          Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n        </div>\n        <br>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n        </mat-form-field>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Stretched Tabs</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" style=\"height: 200px\" mat-stretch-tabs>\n    <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      <div class=\"tab-content\">\n        {{tab.content}}\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n\n<h5 class=\"mt-2\">Async Tabs</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\">\n    <mat-tab *ngFor=\"let tab of asyncTabs | async; let i = index\" [disabled]=\"i == 1\">\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n\n      <div class=\"tab-content\">\n        {{tab.content}}\n        <br>\n        <br>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n        </mat-form-field>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<!-- Simple tabs api -->\n<h5 class=\"mt-2\">Tabs with simplified api</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\">\n    <mat-tab label=\"Earth\">\n      <div class=\"tab-content\">\n        This tab is about the Earth!\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Fire\">\n      This tab is about combustion!\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Inverted tabs</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" headerPosition=\"below\">\n    <mat-tab label=\"Earth\">\n      <div class=\"tab-content\">\n        This tab is about the Earth!\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Fire\">\n      <div class=\"tab-content\">\n        This tab is about combustion!\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Accent tabs</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" color=\"accent\">\n    <mat-tab label=\"Earth\">\n      <div class=\"tab-content\">\n        This tab is about the Earth!\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Fire\">\n      <div class=\"tab-content\">\n        This tab is about combustion!\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Tabs with background color</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\" backgroundColor=\"primary\" color=\"accent\">\n    <mat-tab label=\"Earth\">\n      <div class=\"tab-content\">\n        This tab is about the Earth!\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Fire\">\n      <div class=\"tab-content\">\n        This tab is about combustion!\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n<h5 class=\"mt-2\">Tabs with autosize textarea</h5>\n<mat-card>\n  <mat-tab-group class=\"demo-tab-group\">\n    <mat-tab label=\"Tab 1\">\n      <div class=\"tab-content\">\n        <mat-form-field>\n          <textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize>This is an autosize textarea, it should adjust to the size of its content.</textarea>\n        </mat-form-field>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material/tabs/tabs-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-nav-bar sunny-routed-content,\n.demo-nav-bar rainy-routed-content,\n.demo-nav-bar foggy-routed-content {\n  display: block;\n  padding: 12px; }\n\n.demo-tab-group {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\ntabs-demo .mat-card router-outlet + * {\n  padding: 1rem;\n  display: block; }\n\n.demo-dynamic-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.demo-dynamic-tabs .mat-tab-group {\n    min-width: 200px;\n    margin-bottom: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.demo-dynamic-tabs .mat-card {\n    min-width: 160px;\n    margin-right: 16px; }\n\n.demo-dynamic-tabs .mat-card .mat-checkbox {\n      display: block;\n      margin-top: 8px; }\n\n.demo-dynamic-tabs .mat-card .mat-form-field {\n      width: 100px; }\n\n.demo-dynamic-tabs .mat-card button {\n      width: 100%; }\n\n.tab-content {\n  padding: 16px; }\n"

/***/ }),

/***/ "./src/app/material/tabs/tabs-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TabsDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SunnyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RainyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoggyTabContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsDemoComponent = /** @class */ (function () {
    function TabsDemoComponent() {
        var _this = this;
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        this.tabNavBackground = undefined;
        // Standard tabs demo
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        // Dynamic tabs demo
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
    }
    TabsDemoComponent.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsDemoComponent.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsDemoComponent.prototype.swapTabLinks = function () {
        var temp = this.tabLinks[0];
        this.tabLinks[0] = this.tabLinks[1];
        this.tabLinks[1] = temp;
    };
    TabsDemoComponent.prototype.addToLabel = function () {
        this.tabLinks.forEach(function (link) { return link.label += 'extracontent'; });
    };
    TabsDemoComponent.prototype.toggleBackground = function () {
        this.tabNavBackground = this.tabNavBackground ? undefined : 'primary';
    };
    TabsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs-demo',
            template: __webpack_require__("./src/app/material/tabs/tabs-demo.html"),
            styles: [__webpack_require__("./src/app/material/tabs/tabs-demo.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], TabsDemoComponent);
    return TabsDemoComponent;
}());

var SunnyTabContentComponent = /** @class */ (function () {
    function SunnyTabContentComponent() {
    }
    SunnyTabContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sunny-routed-content',
            template: 'This is the routed body of the sunny tab.',
        })
    ], SunnyTabContentComponent);
    return SunnyTabContentComponent;
}());

var RainyTabContentComponent = /** @class */ (function () {
    function RainyTabContentComponent() {
    }
    RainyTabContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rainy-routed-content',
            template: 'This is the routed body of the rainy tab.',
        })
    ], RainyTabContentComponent);
    return RainyTabContentComponent;
}());

var FoggyTabContentComponent = /** @class */ (function () {
    function FoggyTabContentComponent() {
    }
    FoggyTabContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foggy-routed-content',
            template: 'This is the routed body of the foggy tab.',
        })
    ], FoggyTabContentComponent);
    return FoggyTabContentComponent;
}());



/***/ }),

/***/ "./src/app/material/toolbar/toolbar-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-toolbar\">\n\n  <p>\n    <mat-toolbar>\n      <mat-icon class=\"demo-toolbar-icon\">menu</mat-icon>\n      <span>Default Toolbar</span>\n\n      <span class=\"demo-fill-remaining\"></span>\n\n      <mat-icon>code</mat-icon>\n    </mat-toolbar>\n  </p>\n\n  <p>\n    <mat-toolbar color=\"primary\">\n      <mat-icon class=\"demo-toolbar-icon\">menu</mat-icon>\n      <span>Primary Toolbar</span>\n\n      <span class=\"demo-fill-remaining\"></span>\n\n      <mat-icon>code</mat-icon>\n    </mat-toolbar>\n  </p>\n\n  <p>\n    <mat-toolbar color=\"accent\">\n      <mat-icon class=\"demo-toolbar-icon\">menu</mat-icon>\n      <span>Accent Toolbar</span>\n\n      <span class=\"demo-fill-remaining\"></span>\n\n      <mat-icon>code</mat-icon>\n    </mat-toolbar>\n  </p>\n\n  <p>\n    <mat-toolbar color=\"accent\">\n      <mat-toolbar-row>First Row</mat-toolbar-row>\n      <mat-toolbar-row>Second Row</mat-toolbar-row>\n    </mat-toolbar>\n  </p>\n\n  <p>\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span>First Row</span>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <span>Second Row</span>\n\n        <span class=\"demo-fill-remaining\"></span>\n\n        <mat-icon class=\"demo-toolbar-icon\">verified_user</mat-icon>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <span>Third Row</span>\n\n        <span class=\"demo-fill-remaining\"></span>\n\n        <mat-icon class=\"demo-toolbar-icon\">favorite</mat-icon>\n        <mat-icon class=\"demo-toolbar-icon\">delete</mat-icon>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/material/toolbar/toolbar-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-toolbar {\n  padding: 6px; }\n  .demo-toolbar .demo-toolbar-icon {\n    padding: 0 14px; }\n  .demo-toolbar .demo-fill-remaining {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/material/toolbar/toolbar-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToolbarDemoComponent = /** @class */ (function () {
    function ToolbarDemoComponent() {
    }
    ToolbarDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbar-demo',
            template: __webpack_require__("./src/app/material/toolbar/toolbar-demo.html"),
            styles: [__webpack_require__("./src/app/material/toolbar/toolbar-demo.scss")],
        })
    ], ToolbarDemoComponent);
    return ToolbarDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/tooltip/tooltip-demo.html":
/***/ (function(module, exports) {

module.exports = "<button *ngFor=\"let tooltip of tooltips\" matTooltip=\"Tooltip message\">Tooltip Button</button>\n<button (click)=\"tooltips.push(null)\">Add tooltip</button>\n<button (click)=\"tooltips.shift()\" [disabled]=\"tooltips.length == 0\">Remove tooltip</button>\n\n<div class=\"demo-tooltip\">\n  <mat-card class=\"centered\" cdk-scrollable>\n    <button #tooltip=\"matTooltip\"\n            mat-raised-button\n            color=\"primary\"\n            [matTooltip]=\"message\"\n            [matTooltipPosition]=\"position\"\n            [matTooltipDisabled]=\"disabled\"\n            [matTooltipShowDelay]=\"showDelay\"\n            [matTooltipHideDelay]=\"hideDelay\"\n            [matTooltipClass]=\"{'red-tooltip': showExtraClass}\">\n      Mouse over to see the tooltip\n    </button>\n    <div>Scroll down while tooltip is open to see it hide automatically</div>\n    <div style=\"height: 400px;\"></div>\n  </mat-card>\n\n  <p>\n    <mat-radio-group [(ngModel)]=\"position\">\n      <mat-radio-button value=\"below\">Below</mat-radio-button>\n      <mat-radio-button value=\"above\">Above</mat-radio-button>\n      <mat-radio-button value=\"left\">Left</mat-radio-button>\n      <mat-radio-button value=\"right\">Right</mat-radio-button>\n      <mat-radio-button value=\"before\">Before</mat-radio-button>\n      <mat-radio-button value=\"after\">After</mat-radio-button>\n    </mat-radio-group>\n  </p>\n  <p>\n    <strong>Message: </strong>\n    <mat-form-field><input matInput [(ngModel)]=\"message\"></mat-form-field>\n  </p>\n\n  <p>\n    <strong>Disabled: </strong>\n    <mat-checkbox [(ngModel)]=\"disabled\"></mat-checkbox>\n  </p>\n\n  <p>\n    <strong>Show Delay (ms): </strong>\n    <mat-form-field>\n      <input matInput type=\"number\" [(ngModel)]=\"showDelay\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <strong>Hide Delay (ms): </strong>\n    <mat-form-field>\n      <input matInput type=\"number\" [(ngModel)]=\"hideDelay\">\n    </mat-form-field>\n  </p>\n\n  <strong>Mouse over to: </strong>\n  <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.show()\">\n    Show tooltip\n  </button>&nbsp;\n  <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.hide()\">\n    Hide tooltip\n  </button>&nbsp;\n  <button mat-raised-button color=\"primary\" (mouseenter)=\"tooltip.toggle()\">\n    Toggle tooltip\n  </button>&nbsp;\n  <button mat-raised-button color=\"primary\" (mouseenter)=\"showExtraClass = !showExtraClass\">\n    Toggle tooltipClass\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/material/tooltip/tooltip-demo.scss":
/***/ (function(module, exports) {

module.exports = ".demo-tooltip .centered {\n  text-align: center;\n  height: 200px;\n  overflow: auto; }\n  .demo-tooltip .centered button {\n    margin: 16px; }\n  .demo-tooltip .mat-radio-button {\n  display: block; }\n  .red-tooltip {\n  background-color: #ff8080;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/material/tooltip/tooltip-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipDemoComponent = /** @class */ (function () {
    function TooltipDemoComponent() {
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.tooltips = [];
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 1000;
        this.showExtraClass = false;
    }
    TooltipDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip-demo',
            template: __webpack_require__("./src/app/material/tooltip/tooltip-demo.html"),
            styles: [__webpack_require__("./src/app/material/tooltip/tooltip-demo.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        })
    ], TooltipDemoComponent);
    return TooltipDemoComponent;
}());



/***/ }),

/***/ "./src/app/material/typography/typography-demo.html":
/***/ (function(module, exports) {

module.exports = "<!-- via https://en.wikipedia.org/wiki/Pangram -->\n<div class=\"mat-typography\">\n  <h1 class=\"mat-display-4\">How vexingly quick daft zebras jump!</h1>\n  <h1 class=\"mat-display-3\">The wizard quickly jinxed the gnomes before they vaporized.</h1>\n  <h1 class=\"mat-display-2\">The quick brown fox jumps over the lazy dog.</h1>\n  <h1 class=\"mat-display-1\">Grumpy wizards make toxic brew for the evil queen and jack.</h1>\n  <h1>Jackdaws love my big sphinx of quartz.</h1>\n  <h2>The five boxing wizards jump quickly.</h2>\n  <h3>Pack my box with five dozen liquor jugs.</h3>\n  <h4>Bright vixens jump; dozy fowl quack.</h4>\n\n  <div class=\"mat-body\">\n    <p>\n      Lucas ipsum dolor sit amet coruscant fisto hutt dantooine darth binks amidala kessel grievous\n      mara. Ackbar mandalore skywalker calamari. Calrissian binks tusken raider kit. Darth binks\n      chewbacca skywalker. Moff baba padmé antilles darth ponda twi'lek darth. Dagobah naboo mara\n      jawa dagobah ackbar ackbar darth. Mara mace r2-d2 mon naboo darth dantooine leia. Droid\n      chewbacca mace han. Wampa hutt qui-gon solo jango secura tusken raider yoda. Droid boba mon\n      mandalore jinn han binks. Maul darth kit wedge mace utapau darth darth fett.\n    </p>\n\n    <p>\n      Antilles antilles secura yavin. Leia luke owen hutt baba yoda hoth obi-wan. Moff thrawn solo\n      jango mon. Antilles lobot hutt tusken raider moff jade kessel binks. Moff ewok sidious naboo\n      darth ventress tusken raider. Bothan yavin moff fett organa binks jade binks. Mara moff darth\n      jade sidious. Darth binks obi-wan padmé dagobah hutt ponda antilles ackbar. Fett gamorrean\n      obi-wan sidious hutt maul. Organa darth k-3po kessel aayla. Hoth c-3po amidala biggs kenobi\n      twi'lek twi'lek ahsoka. Obi-wan ackbar windu wicket kit c-3po.\n    </p>\n\n    <p>\n      Hutt naboo greedo skywalker hutt luuke ben. Hutt chewbacca jabba solo calrissian jade yoda\n      amidala zabrak. Solo luke antilles c-3p0. Sith darth skywalker fett solo hutt skywalker c-3p0\n      skywalker. Skywalker skywalker solo kessel darth fett. Skywalker skywalker c-3po jango.\n      Alderaan darth boba calamari. Wicket alderaan darth darth chewbacca jango. Darth darth\n      chewbacca ponda solo grievous hutt calrissian lando. Darth mon watto vader chewbacca.\n      Lando mace luke yavin darth wookiee c-3po. Moff kessel skywalker yoda c-3po yavin.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/material/typography/typography-demo.scss":
/***/ (function(module, exports) {

module.exports = ".mat-body {\n  max-width: 800px; }\n"

/***/ }),

/***/ "./src/app/material/typography/typography-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyDemoComponent = /** @class */ (function () {
    function TypographyDemoComponent() {
    }
    TypographyDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography-demo',
            template: __webpack_require__("./src/app/material/typography/typography-demo.html"),
            styles: [__webpack_require__("./src/app/material/typography/typography-demo.scss")],
        })
    ], TypographyDemoComponent);
    return TypographyDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=material.module.chunk.js.map