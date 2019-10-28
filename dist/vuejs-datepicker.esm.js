import { getYear, getMonth, getDate, getHours, getMinutes, isValid, lightFormat, getTime as getTime$1, setMinutes, format, isDate } from 'date-fns';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var Language =
/*#__PURE__*/
function () {
  function Language(language, months, monthsAbbr, days) {
    _classCallCheck(this, Language);

    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }

  _createClass(Language, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string');
      }

      this._language = language;
    }
  }, {
    key: "months",
    get: function get() {
      return this._months;
    },
    set: function set(months) {
      if (months.length !== 12) {
        throw new RangeError("There must be 12 months for ".concat(this.language, " language"));
      }

      this._months = months;
    }
  }, {
    key: "monthsAbbr",
    get: function get() {
      return this._monthsAbbr;
    },
    set: function set(monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError("There must be 12 abbreviated months for ".concat(this.language, " language"));
      }

      this._monthsAbbr = monthsAbbr;
    }
  }, {
    key: "days",
    get: function get() {
      return this._days;
    },
    set: function set(days) {
      if (days.length !== 7) {
        throw new RangeError("There must be 7 days for ".concat(this.language, " language"));
      }

      this._days = days;
    }
  }]);

  return Language;
}(); // eslint-disable-next-line

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) // eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear(date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth(date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate(date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }

    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr(date, days) {
    if (_typeof(date) !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (_typeof(month) === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (_typeof(month) === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return monthsAbbr[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate(date, format, translation) {
    translation = !translation ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month).replace(/su/, this.getNthSuffix(this.getDate(date))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray(start, end) {
    var dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }

    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput(val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  }
};
var makeDateUtils = function makeDateUtils(useUtc) {
  return _objectSpread2({}, utils, {
    useUtc: useUtc
  });
};
var utils$1 = _objectSpread2({}, utils) // eslint-disable-next-line
;

var script = {
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    };
  },
  computed: {
    formattedValue: function formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate) {
        return this.typedDate;
      }

      return typeof this.format === 'function' ? this.format(this.selectedDate) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    },
    computedInputClass: function computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread2({
          'form-control': true
        }, this.inputClass);
      }

      return this.inputClass;
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate() {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar() {
      this.$emit('showCalendar');
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if ([27, // escape
      13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);

        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred() {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },

    /**
     * emit a clearDate event
     */
    clearDate: function clearDate() {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelector('input');
  }
} // eslint-disable-next-line
;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: { "input-group-prepend": _vm.bootstrapStyling },
              style: { "cursor:not-allowed;": _vm.disabled },
              on: { click: _vm.showCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.calendarButtonIcon }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.calendarButtonIconContent) +
                        "\n        "
                    ),
                    !_vm.calendarButtonIcon
                      ? _c("span", [_vm._v("…")])
                      : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          type: _vm.inline ? "hidden" : "text",
          name: _vm.name,
          id: _vm.id,
          "open-date": _vm.openDate,
          placeholder: _vm.placeholder,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          required: _vm.required,
          readonly: !_vm.typeable,
          autocomplete: "off"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          click: _vm.showCalendar,
          keyup: _vm.parseTypedDate,
          blur: _vm.inputBlurred
        }
      }),
      _vm._v(" "),
      _vm.clearButton && _vm.selectedDate
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__clear-button",
              class: { "input-group-append": _vm.bootstrapStyling },
              on: {
                click: function($event) {
                  return _vm.clearDate()
                }
              }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.clearButtonIcon }, [
                    !_vm.clearButtonIcon ? _c("span", [_vm._v("×")]) : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("afterDateInput")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DateInput = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".vue-scroll-picker {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.vue-scroll-picker-list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.vue-scroll-picker-list-rotator {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding-top: calc(63px);\n}\n.vue-scroll-picker-list-rotator.-transition {\n  will-change: top;\n  transition: top cubic-bezier(0.23, 1, 0.32, 1) 150ms;\n}\n\n.vue-scroll-picker-item {\n  position: relative;\n  text-align: center;\n  height: 53px;\n  line-height: 53px;\n  font-size: inherit;\n}\n.vue-scroll-picker-item.-placeholder {\n  color: #aaa;\n}\n.vue-scroll-picker-item.-selected {\n  color: #000;\n  font-size: inherit;\n}\n.vue-scroll-picker-item.disabled {\n  color: #aaa;\n}\n.vue-scroll-picker-item .vdp-label {\n  position: absolute;\n  right: 0;\n  font-size: 12px;\n}\n\n.vue-scroll-picker-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.vue-scroll-picker-layer .top,\n.vue-scroll-picker-layer .middle,\n.vue-scroll-picker-layer .bottom {\n  position: absolute;\n}\n.vue-scroll-picker-layer .top {\n  box-sizing: border-box;\n  background: linear-gradient(180deg, #fff 10%, rgba(255, 255, 255, 0.7));\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 35%;\n  cursor: pointer;\n}\n.vue-scroll-picker-layer .middle {\n  top: 35%;\n  left: 0;\n  right: 0;\n  bottom: 35%;\n}\n.vue-scroll-picker-layer .bottom {\n  background: linear-gradient(0deg, #fff 10%, rgba(255, 255, 255, 0.7));\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 35%;\n  cursor: pointer;\n}";
styleInject(css);

var isTouchable = typeof window !== 'undefined' && 'ontouchstart' in window;

var withLabel = function withLabel(a, b) {
  return a ? b + ' ' + "<span class=\"vdp-label\">".concat(a, "</span>") : b;
};

var VPicker = {
  props: {
    value: null,
    initial: null,
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    dragSensitivity: {
      type: Number,
      "default": 1.7
    },
    touchSensitivity: {
      type: Number,
      "default": 1.7
    },
    scrollSensitivity: {
      type: Number,
      "default": 1
    },
    placeholder: String
  },
  data: function data() {
    var _this = this;

    var lastIndex = this.placeholder ? -1 : 0;

    if (this.value) {
      this.options.forEach(function (option, index) {
        if (option === _this.value || option.value === _this.value) {
          lastIndex = index;
        }
      });
    }

    return {
      top: 0,
      pivots: null,
      lastIndex: lastIndex,
      transitioning: false,
      transitionTO: null,
      startTop: null,
      isMouseDown: false,
      isDragging: false,
      isScrolling: false,
      startY: null,
      scrollMax: null
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:
              if (this.initial) {
                this.options.map(function (v, i) {
                  if (v.id === _this2.initial) {
                    _this2.lastIndex = i;
                  }
                });
              }

              this.$el.addEventListener('touchstart', this.onStart);
              this.$el.addEventListener('touchmove', this.onTouchMove);
              this.$el.addEventListener('touchend', this.onEnd);
              this.$el.addEventListener('touchcancel', this.onCancel);
              this.$el.addEventListener('mousewheel', this.onScroll);
              this.$el.addEventListener('wheel', this.onScroll); // for IE

              this.$el.addEventListener('mousedown', this.onStart);
              this.$el.addEventListener('mousemove', this.onMouseMove);
              this.$el.addEventListener('mouseup', this.onEnd);
              this.$el.addEventListener('mouseleave', this.onCancel);
              this.calculatePivots();

              if (this.lastIndex > 0) {
                this.top = this.pivots[this.lastIndex] * -1;
              }

              if (!this.value && this.sanitizedOptions[this.lastIndex]) {
                this.$emit('input', this.sanitizedOptions[this.lastIndex].value);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  destroyed: function destroyed() {
    this.$el.removeEventListener('touchstart', this.onStart);
    this.$el.removeEventListener('touchmove', this.onTouchMove);
    this.$el.removeEventListener('touchend', this.onEnd);
    this.$el.removeEventListener('touchcancel', this.onCancel);
    this.$el.removeEventListener('mousewheel', this.onScroll);
    this.$el.removeEventListener('wheel', this.onScroll); // for IE

    this.$el.removeEventListener('mousedown', this.onStart);
    this.$el.removeEventListener('mousemove', this.onMouseMove);
    this.$el.removeEventListener('mouseup', this.onEnd);
    this.$el.removeEventListener('mouseleave', this.onCancel);
  },
  computed: {
    sanitizedOptions: function sanitizedOptions() {
      return this.options.map(function (option) {
        if (option.hasOwnProperty('value') && option.hasOwnProperty('name')) {
          return option;
        }

        return {
          value: option,
          name: option
        };
      });
    },
    optLen: function optLen() {
      return this.options.length;
    }
  },
  watch: {
    initial: function initial(val) {
      this.calculateIndex(val);
    },
    value: function value(val) {
      this.calculateIndex(val);
    },
    optLen: function optLen(v) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.calculatePivots();

        var maxIdx = v - 1;

        if (_this3.lastIndex >= maxIdx) {
          _this3.correction(maxIdx);

          return false;
        } else {
          _this3.correction(_this3.lastIndex);
        }
      });
    }
  },
  methods: {
    calculateIndex: function calculateIndex(v) {
      var foundIndex = -1;
      this.sanitizedOptions.forEach(function (option, index) {
        if (option.value === v || option.id === v) foundIndex = index;
      });

      if (this.lastIndex !== foundIndex) {
        this.correction(foundIndex);
      }
    },
    calculatePivots: function calculatePivots() {
      var _this4 = this;

      if (!this.$refs.items || !this.$refs.selection) {
        this.pivots = [];
        return;
      }

      var rect = this.$refs.selection.getBoundingClientRect();
      var med = (rect.top + rect.bottom) / 2;
      this.pivots = this.$refs.items.map(function (item) {
        var itemRect = item.getBoundingClientRect();
        return Math.round(((itemRect.top + itemRect.bottom) / 2 - med) * 10) / 10 - _this4.top;
      });
      this.scrollMax = this.pivots[this.pivots.length - 1] * -1;
    },
    onScroll: function onScroll(e) {
      var _this5 = this;

      if (this.top >= 0 && e.deltaY < 0) return;
      if (this.top <= this.scrollMax && e.deltaY > 0) return;
      e.preventDefault();
      e.stopPropagation();
      if (this.isScrolling) return;
      this.isScrolling = true;

      if (e.deltaY < 0) {
        this.correction(this.lastIndex - Math.floor(Math.abs(e.deltaY) / 30 * this.scrollSensitivity + 1));
      } else if (e.deltaY > 0) {
        this.correction(this.lastIndex + Math.floor(Math.abs(e.deltaY) / 30 * this.scrollSensitivity + 1));
      }

      setTimeout(function () {
        _this5.isScrolling = false;
      }, 80);
    },
    getTouchInfo: function getTouchInfo(e) {
      return isTouchable ? e.changedTouches[0] || e.touches[0] : e;
    },
    onStart: function onStart(e) {
      if (e.cancelable) {
        e.preventDefault();
        e.stopPropagation();
      }

      var touchInfo = this.getTouchInfo(e);
      this.startTop = this.top;
      this.startY = touchInfo.pageY;

      if (!isTouchable) {
        this.isMouseDown = true;
      }

      this.isDragging = false;
    },
    onTouchMove: function onTouchMove(e) {
      e.preventDefault();
      e.stopPropagation();

      if (isTouchable || this.isMouseDown) {
        var touchInfo = this.getTouchInfo(e);
        var diff = touchInfo.pageY - this.startY;

        if (Math.abs(diff) > 1.5) {
          this.isDragging = true;
        }

        this.top = this.startTop + diff * this.touchSensitivity;
      }
    },
    onMouseMove: function onMouseMove(e) {
      e.preventDefault();
      e.stopPropagation();

      if (isTouchable || this.isMouseDown) {
        var touchInfo = this.getTouchInfo(e);
        var diff = touchInfo.pageY - this.startY;

        if (Math.abs(diff) > 1.5) {
          this.isDragging = true;
        }

        this.top = this.startTop + diff * this.dragSensitivity;
      }
    },
    onEnd: function onEnd(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.isDragging) {
        this.isDragging = false;
        this.isMouseDown = false;
        this.handleClick(e);
        return;
      }

      this.isDragging = false;
      this.isMouseDown = false;
      this.correctionAfterDragging();
    },
    onCancel: function onCancel(e) {
      e.preventDefault();
      e.stopPropagation();

      if (isTouchable || this.isMouseDown) {
        this.correctionAfterDragging();
        this.isMouseDown = false;
        this.isDragging = false;
      }
    },
    handleClick: function handleClick(e) {
      var touchInfo = this.getTouchInfo(e);
      var x = touchInfo.clientX; // not pageX (pageX = clientX + scrollLeft)

      var y = touchInfo.clientY; // not pageY (pageY = clientY + scrollTop)

      var topRect = this.$refs.top.getBoundingClientRect();
      var bottomRect = this.$refs.bottom.getBoundingClientRect();

      if (topRect.left <= x && x <= topRect.right && topRect.top <= y && y <= topRect.bottom) {
        this.correction(this.lastIndex - 1);
      } else if (bottomRect.left <= x && x <= bottomRect.right && bottomRect.top <= y && y <= bottomRect.bottom) {
        this.correction(this.lastIndex + 1);
      }
    },
    correctionAfterDragging: function correctionAfterDragging() {
      var index = null;
      var diff = null;
      var top = this.top;

      if (this.placeholder) {
        index = -1;
        diff = 0 + top;
      }

      this.pivots.forEach(function (pivot, i) {
        var _diff = pivot + top;

        if (diff === null || Math.abs(diff) > Math.abs(_diff)) {
          index = i;
          diff = _diff;
        }
      });
      this.correction(index);
    },
    correction: function correction(index) {
      var _this6 = this;

      if (!this.pivots) return;
      index = Math.min(Math.max(index, this.placeholder ? -1 : 0), this.pivots.length - 1);

      if (this.lastIndex !== index && index < this.sanitizedOptions.length) {
        this.lastIndex = index;
        this.$emit('input', index > -1 ? this.sanitizedOptions[index].value : null);
      }

      this.top = index > -1 ? this.pivots[index] * -1 : 0;
      this.transitioning = true;

      if (this.transitionTO) {
        clearTimeout(this.transitionTO);
        this.transitionTO = null;
      }

      this.transitionTO = setTimeout(function () {
        _this6.transitioning = false;
        _this6.transitionTO = null;
      }, 100);
    }
  },
  render: function render(h) {
    var _this7 = this;

    var items = [];

    if (this.placeholder) {
      items.push(h('div', {
        "class": {
          'vue-scroll-picker-item': true,
          '-placeholder': true,
          '-selected': this.lastIndex === -1
        },
        ref: 'placeholder',
        domProps: {
          innerHTML: this.placeholder
        }
      }));
    }

    items = items.concat(this.sanitizedOptions.map(function (option, index) {
      return h('div', {
        "class": {
          'vue-scroll-picker-item': true,
          '-selected': _this7.lastIndex === index,
          'disabled': option.disabled
        },
        key: option.id,
        // MUST HAVE PROPERTY `id`
        ref: 'items',
        refInFor: true,
        domProps: {
          innerHTML: _this7.lastIndex === index ? withLabel(option.label, option.name) : option.name
        }
      });
    }));
    return h('div', {
      "class": ['vue-scroll-picker']
    }, [h('div', {
      "class": ['vue-scroll-picker-list']
    }, [h('div', {
      "class": {
        'vue-scroll-picker-list-rotator': true,
        '-transition': this.transitioning
      },
      style: {
        top: "".concat(this.top, "px")
      }
    }, items)]), h('div', {
      "class": ['vue-scroll-picker-layer'],
      on: {
        'wheel': function wheel(e) {
          return e.preventDefault();
        }
      }
    }, [h('div', {
      "class": ['top'],
      ref: 'top'
    }), h('div', {
      "class": ['middle'],
      ref: 'selection'
    }), h('div', {
      "class": ['bottom'],
      ref: 'bottom'
    })])]);
  }
};

//
//
//
//
//
//
var script$1 = {
  props: {
    right: Boolean,
    left: Boolean
  }
};

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "vdp__arrow-container",
      on: {
        click: function($event) {
          return _vm.$emit("click")
        }
      }
    },
    [
      _c("div", {
        staticClass: "arrow",
        class: { right: _vm.right, left: _vm.left }
      })
    ]
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-3cc02769_0", { source: ".vdp__arrow-container[data-v-3cc02769] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vdp__arrow-container[data-v-3cc02769]:hover {\n  cursor: pointer;\n}\n.vdp__arrow-container.disabled .arrow[data-v-3cc02769]::before {\n  border-color: #ddd;\n}\n.vdp__arrow-container.disabled .arrow[data-v-3cc02769]::after {\n  background-color: #ddd;\n}\n.vdp__arrow-container .arrow[data-v-3cc02769] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vdp__arrow-container .arrow[data-v-3cc02769]::before {\n  content: \"\";\n  display: block;\n  width: 14px;\n  height: 14px;\n  border-style: solid;\n  border-color: #0070ff;\n  border-width: 2px 2px 0 0;\n  position: absolute;\n  transform-origin: 50% 50%;\n}\n.vdp__arrow-container .arrow[data-v-3cc02769]::after {\n  content: \"\";\n  display: block;\n  top: 50%;\n  left: 50%;\n  background-color: #0070ff;\n  position: absolute;\n  transform-origin: 50% 50%;\n}\n.vdp__arrow-container .arrow.right[data-v-3cc02769]::before {\n  transform: rotate(225deg);\n}\n.vdp__arrow-container .arrow.right[data-v-3cc02769]::after {\n  width: 20px;\n  height: 2px;\n  transform: translate(-9px, -1px);\n}\n.vdp__arrow-container .arrow.left[data-v-3cc02769]::before {\n  transform: rotate(45deg);\n}\n.vdp__arrow-container .arrow.left[data-v-3cc02769]::after {\n  width: 20px;\n  height: 2px;\n  transform: translate(-10px, -1px);\n}\n\n/*# sourceMappingURL=Arrow.vue.map */", map: {"version":3,"sources":["/Users/rei/web/ww-datepicker/src/components/Arrow.vue","Arrow.vue"],"names":[],"mappings":"AAgBA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ACfA;ADgBA;EACA,eAAA;ACdA;ADiBA;EACA,kBAAA;ACfA;ADiBA;EACA,sBAAA;ACfA;ADkBA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AChBA;ADiBA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;ACfA;ADiBA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;ACfA;ADiBA;EACA,yBAAA;ACfA;ADiBA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;ACfA;ADiBA;EACA,wBAAA;ACfA;ADiBA;EACA,WAAA;EACA,WAAA;EACA,iCAAA;ACfA;;AAEA,oCAAoC","file":"Arrow.vue","sourcesContent":["<template>\n  <div class=\"vdp__arrow-container\" @click=\"$emit('click')\">\n    <div class=\"arrow\" :class=\"{'right': right, 'left': left}\" />\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    right: Boolean,\n    left: Boolean\n  }\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.vdp__arrow-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    cursor: pointer;\n  }\n  &.disabled {\n    .arrow::before {\n      border-color: #ddd;\n    }\n    .arrow::after {\n      background-color: #ddd;\n    }\n  }\n  .arrow {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    &::before {\n      content: '';\n      display: block;\n      width: 14px;\n      height: 14px;\n      border-style: solid;\n      border-color: #0070ff;\n      border-width: 2px 2px 0 0;\n      position: absolute;\n      transform-origin: 50% 50%;\n    }\n    &::after {\n      content: '';\n      display: block;\n      top: 50%;\n      left: 50%;\n      background-color: #0070ff;\n      position: absolute;\n      transform-origin: 50% 50%;\n    }\n    &.right::before {\n      transform: rotate(225deg);\n    }\n    &.right::after {\n      width: 20px;\n      height: 2px;\n      transform: translate(-9px, -1px);\n    }\n    &.left::before {\n      transform: rotate(45deg);\n    }\n    &.left::after {\n      width: 20px;\n      height: 2px;\n      transform: translate(-10px, -1px);\n    }\n  }\n}\n\n</style>\n",".vdp__arrow-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vdp__arrow-container:hover {\n  cursor: pointer;\n}\n.vdp__arrow-container.disabled .arrow::before {\n  border-color: #ddd;\n}\n.vdp__arrow-container.disabled .arrow::after {\n  background-color: #ddd;\n}\n.vdp__arrow-container .arrow {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.vdp__arrow-container .arrow::before {\n  content: \"\";\n  display: block;\n  width: 14px;\n  height: 14px;\n  border-style: solid;\n  border-color: #0070ff;\n  border-width: 2px 2px 0 0;\n  position: absolute;\n  transform-origin: 50% 50%;\n}\n.vdp__arrow-container .arrow::after {\n  content: \"\";\n  display: block;\n  top: 50%;\n  left: 50%;\n  background-color: #0070ff;\n  position: absolute;\n  transform-origin: 50% 50%;\n}\n.vdp__arrow-container .arrow.right::before {\n  transform: rotate(225deg);\n}\n.vdp__arrow-container .arrow.right::after {\n  width: 20px;\n  height: 2px;\n  transform: translate(-9px, -1px);\n}\n.vdp__arrow-container .arrow.left::before {\n  transform: rotate(45deg);\n}\n.vdp__arrow-container .arrow.left::after {\n  width: 20px;\n  height: 2px;\n  transform: translate(-10px, -1px);\n}\n\n/*# sourceMappingURL=Arrow.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-3cc02769";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var Arrow = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

//

var getDay = function getDay(n, monFst) {
  if (monFst) {
    return n === 0 ? 6 : n - 1;
  } else return n;
};

var script$2 = {
  components: {
    Arrow: Arrow,
    VPicker: VPicker
  },
  props: {
    mDate: Number,
    isMobile: Boolean,
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      "default": function _default(day) {
        return day.date;
      }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  mounted: function mounted() {
    this.initialDay = new Date(this.mDate).getDate();
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils,
      initialDay: 0
    };
  },
  watch: {
    mDate: function mDate(v) {
      var day = new Date(v).getDate();
      this.initialDay = day;
    }
  },
  computed: {
    fDays: function fDays() {
      return this.days.map(function (v) {
        return {
          value: v,
          name: v.date,
          label: v.dayOfW,
          id: v.id,
          disabled: v.isDisabled
        };
      });
    },

    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek() {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return this.translation.days;
    },

    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays() {
      var d = this.pageDate;
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;
      }

      return this.utils.getDay(dObj);
    },

    /**
     * @return {Object[]}
     */
    days: function days() {
      var d = this.pageDate;
      var days = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0,
          id: this.utils.getDate(dObj),
          dayOfW: this.daysOfWeek[getDay(this.utils.getDay(dObj), this.mondayFirst)]
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName() {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd() {
      return this.translation.ymd && this.translation.ymd === true;
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextMonthDisabled(this.pageTimestamp) : this.isPreviousMonthDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousMonthDisabled(this.pageTimestamp) : this.isNextMonthDisabled(this.pageTimestamp);
    }
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date.isDisabled && !this.isMobile) {
        this.$emit('selectedDisabled', date);
        return false;
      }

      this.$emit('selectDate', date);
    },

    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar() {
      this.$emit('showMonthCalendar');
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth(incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },

    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth() {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d);
    },

    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth() {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d);
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (_this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }

      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate(date) {
      var _this2 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false;
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (_this2.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    },
    dayClasses: function dayClasses(day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart(date) {
      return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.from) === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd(date) {
      return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.to) === this.utils.getDate(date);
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.isMobile
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showDayView,
              expression: "showDayView"
            }
          ],
          class: [_vm.calendarClass, "vdp-datepicker__calendar"],
          style: _vm.calendarStyle,
          on: {
            mousedown: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _vm._t("beforeCalendarHeader"),
          _vm._v(" "),
          _c(
            "header",
            { staticClass: "vdp__header" },
            [
              _c("Arrow", {
                staticClass: "prev",
                class: { disabled: _vm.isLeftNavDisabled },
                attrs: { right: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "day__month_btn middle__btn",
                  class: _vm.allowedToShowView("month") ? "up" : "",
                  on: { click: _vm.showMonthCalendar }
                },
                [
                  _vm._v(
                    _vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName) +
                      " " +
                      _vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName)
                  )
                ]
              ),
              _vm._v(" "),
              _c("Arrow", {
                staticClass: "next",
                class: { disabled: _vm.isRightNavDisabled },
                attrs: { left: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { class: _vm.isRtl ? "flex-rtl" : "" },
            [
              _vm._l(_vm.daysOfWeek, function(d) {
                return _c(
                  "span",
                  { key: d.timestamp, staticClass: "cell day-header" },
                  [_vm._v(_vm._s(d))]
                )
              }),
              _vm._v(" "),
              _vm.blankDays > 0
                ? _vm._l(_vm.blankDays, function(d) {
                    return _c("span", {
                      key: d.timestamp,
                      staticClass: "cell day blank"
                    })
                  })
                : _vm._e(),
              _vm._l(_vm.days, function(day) {
                return _c("span", {
                  key: day.timestamp,
                  staticClass: "cell day",
                  class: _vm.dayClasses(day),
                  domProps: { innerHTML: _vm._s(_vm.dayCellContent(day)) },
                  on: {
                    click: function($event) {
                      return _vm.selectDate(day)
                    }
                  }
                })
              })
            ],
            2
          )
        ],
        2
      )
    : _c(
        "div",
        { staticClass: "vdp-day__mobile" },
        [
          _c("VPicker", {
            attrs: { initial: _vm.initialDay, options: _vm.fDays },
            on: {
              input: function($event) {
                return _vm.selectDate($event)
              }
            }
          })
        ],
        1
      )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerDay = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//

var getMaxDays = function getMaxDays(m, y) {
  return new Date(y, m + 1, 0).getDate();
};

var script$3 = {
  components: {
    Arrow: Arrow,
    VPicker: VPicker
  },
  props: {
    mDate: [Number, Date],
    isMobile: Boolean,
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  mounted: function mounted() {
    this.initialMonth = new Date(this.mDate).getMonth();
  },
  watch: {
    mDate: function mDate(v) {
      var m = new Date(v).getMonth();
      this.initialMonth = m;
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils,
      initialMonth: 0
    };
  },
  computed: {
    fMonths: function fMonths() {
      return this.months.map(function (v) {
        return {
          value: v,
          name: v.month,
          id: v.id,
          disabled: v.isDisabled
        };
      });
    },
    months: function months() {
      var d = this.pageDate;
      var months = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i++) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj),
          id: i,
          maxDays: getMaxDays(i, d.getFullYear())
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextYearDisabled(this.pageTimestamp) : this.isPreviousYearDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousYearDisabled(this.pageTimestamp) : this.isNextYearDisabled(this.pageTimestamp);
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      if (month.isDisabled && !this.isMobile) {
        return false;
      }

      this.$emit('selectMonth', month);
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },

    /**
     * Decrements the year
     */
    previousYear: function previousYear() {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Increments the year
     */
    nextYear: function nextYear() {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar() {
      this.$emit('showYearCalendar');
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) && this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date);
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to) || this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from) || this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.isMobile
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showMonthView,
              expression: "showMonthView"
            }
          ],
          class: [_vm.calendarClass, "vdp-datepicker__calendar"],
          style: _vm.calendarStyle,
          on: {
            mousedown: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _vm._t("beforeCalendarHeader"),
          _vm._v(" "),
          _c(
            "header",
            { staticClass: "vdp__header" },
            [
              _c("Arrow", {
                staticClass: "prev",
                class: { disabled: _vm.isLeftNavDisabled },
                attrs: { right: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.nextYear() : _vm.previousYear();
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "month__year_btn middle__btn",
                  class: _vm.allowedToShowView("year") ? "up" : "",
                  on: { click: _vm.showYearCalendar }
                },
                [_vm._v(_vm._s(_vm.pageYearName))]
              ),
              _vm._v(" "),
              _c("Arrow", {
                staticClass: "next",
                class: { disabled: _vm.isRightNavDisabled },
                attrs: { left: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.previousYear() : _vm.nextYear();
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.months, function(month) {
            return _c(
              "span",
              {
                key: month.timestamp,
                staticClass: "cell month",
                class: {
                  selected: month.isSelected,
                  disabled: month.isDisabled
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.selectMonth(month)
                  }
                }
              },
              [_vm._v(_vm._s(month.month))]
            )
          })
        ],
        2
      )
    : _c(
        "div",
        { staticClass: "vdp-month__mobile" },
        [
          _c("VPicker", {
            attrs: { initial: _vm.initialMonth, options: _vm.fMonths },
            on: {
              input: function($event) {
                return _vm.selectMonth($event)
              }
            }
          })
        ],
        1
      )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerMonth = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  components: {
    Arrow: Arrow,
    VPicker: VPicker
  },
  props: {
    mDate: Number,
    isMobile: Boolean,
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  mounted: function mounted() {
    this.initialYear = new Date(this.mDate).getFullYear();
  },
  watch: {
    mDate: function mDate(v) {
      var y = new Date(v).getFullYear();
      this.initialYear = y;
    }
  },
  computed: {
    fYears: function fYears() {
      return this.makeYrs(this.mDate).map(function (v) {
        return {
          value: v,
          id: v.year,
          name: v.year,
          disabled: v.isDisabled
        };
      });
    },
    years: function years() {
      var d = this.pageDate;
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },

    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade() {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextDecadeDisabled(this.pageTimestamp) : this.isPreviousDecadeDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousDecadeDisabled(this.pageTimestamp) : this.isNextDecadeDisabled(this.pageTimestamp);
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils,
      initialYear: 0
    };
  },
  methods: {
    makeYrs: function makeYrs(dt) {
      // let chDate = new Date(dt)
      var d = new Date();
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() * 10) / 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() * 10) / 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj),
          id: this.utils.getFullYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },
    selectYear: function selectYear(year) {
      if (year.isDisabled && !this.isMobile) {
        return false;
      }

      this.$emit('selectYear', year);
    },
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade() {
      if (this.isPreviousDecadeDisabled()) {
        return false;
      }

      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    },
    nextDecade: function nextDecade() {
      if (this.isNextDecadeDisabled()) {
        return false;
      }

      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date);
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.isMobile
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showYearView,
              expression: "showYearView"
            }
          ],
          class: [_vm.calendarClass, "vdp-datepicker__calendar"],
          style: _vm.calendarStyle,
          on: {
            mousedown: function($event) {
              $event.preventDefault();
            }
          }
        },
        [
          _vm._t("beforeCalendarHeader"),
          _vm._v(" "),
          _c(
            "header",
            { staticClass: "vdp__header" },
            [
              _c("Arrow", {
                staticClass: "prev",
                class: { disabled: _vm.isLeftNavDisabled },
                attrs: { right: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "middle__btn" }, [
                _vm._v(_vm._s(_vm.getPageDecade))
              ]),
              _vm._v(" "),
              _c("Arrow", {
                staticClass: "next",
                class: { disabled: _vm.isRightNavDisabled },
                attrs: { left: true },
                on: {
                  click: function($event) {
                    _vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.years, function(year) {
            return _c(
              "span",
              {
                key: year.timestamp,
                staticClass: "cell year",
                class: { selected: year.isSelected, disabled: year.isDisabled },
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.selectYear(year)
                  }
                }
              },
              [_vm._v(_vm._s(year.year))]
            )
          })
        ],
        2
      )
    : _c(
        "div",
        { staticClass: "vdp-year__mobile" },
        [
          _c("VPicker", {
            attrs: { initial: _vm.initialYear, options: _vm.fYears },
            on: {
              input: function($event) {
                return _vm.selectYear($event)
              }
            }
          })
        ],
        1
      )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerYear = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//

var getTime = function getTime(date) {
  return +new Date(date);
};

var isBefore = function isBefore(d1, d2) {
  return new Date(d1).getTime() < new Date(d2).getTime();
};

var isAfter = function isAfter(d1, d2) {
  return new Date(d1).getTime() > new Date(d2).getTime();
};

var script$5 = {
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      "default": 'dd MMM yyyy'
    },
    language: {
      type: Object,
      "default": function _default() {
        return en;
      }
    },
    openDate: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      "default": 'day'
    },
    maximumView: {
      type: String,
      "default": 'year'
    },
    isReadonly: Boolean
  },
  data: function data() {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      mobileIsShow: false,

      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,

      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,

      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils,
      mobSelected: {
        day: {},
        month: {},
        year: {},
        date: null,
        unix: 0,
        hasValue: false
      }
    };
  },
  watch: {
    value: function value(_value) {
      this.setValue(_value);
    },
    openDate: function openDate() {
      this.setPageDate();
    },
    initialView: function initialView() {
      this.setInitialView();
    },
    mobDateWatch: function mobDateWatch() {
      this.setDate(this.mobSelected.date);
    }
  },
  computed: {
    mobDateWatch: function mobDateWatch() {
      return this.mobSelected.unix;
    },
    isMobile: function isMobile() {
      return window && window.innerWidth <= 425;
    },
    isMobileInline: function isMobileInline() {
      return this.isInline ? true : this.mobileIsShow;
    },
    computedInitialView: function computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate: function pageDate() {
      return new Date(this.pageTimestamp);
    },
    translation: function translation() {
      return this.language;
    },
    calendarStyle: function calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined
      };
    },
    isOpen: function isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline: function isInline() {
      return !!this.inline;
    },
    isRtl: function isRtl() {
      return this.translation.rtl === true;
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar() {
      if (this.isReadonly) {
        this.$emit('readonly');
        return;
      }

      if (this.isMobile) {
        this.mobileIsShow = true;
        return;
      }

      if (this.disabled || this.isInline) {
        return false;
      }

      if (this.isOpen) {
        return this.close(true);
      }

      this.setInitialView();
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView() {
      var initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(this.initialView, "' cannot be rendered based on minimum '").concat(this.minimumView, "' and maximum '").concat(this.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;

        case 'month':
          this.showMonthCalendar();
          break;

        default:
          this.showDayCalendar();
          break;
      }
    },

    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }

      this.close();
      this.showDayView = true;
      return true;
    },

    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }

      this.close();
      this.showMonthView = true;
      return true;
    },

    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }

      this.close();
      this.showYearView = true;
      return true;
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate(timestamp) {
      if (this.isMobile && !this.mobSelected.hasValue) return;
      var date = new Date(timestamp);
      this.setPageDate(date);

      if (this.isDateInRange(date)) {
        this.selectedDate = date;
        this.$emit('selected', date);
        this.$emit('input', date);
      }

      return false;
    },

    /**
     * Clear the selected date
     */
    clearDate: function clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },
    isDateInRange: function isDateInRange(date) {
      // only implemented disabled to and from dates
      if (!this.disabledDates || !this.disabledDates.to || !this.disabledDates.from) return true;
      var dTo = new Date(this.disabledDates.to);
      var dFrom = new Date(this.disabledDates.from);
      var d = new Date(date);

      if (isBefore(d, dTo) || isAfter(d, dFrom)) {
        return false;
      }

      return true;
    },
    letValueBe: function letValueBe() {
      this.mobSelected.hasValue = true;
    },
    mobileSelDay: function mobileSelDay(date) {
      this.letValueBe();
      this.mobSelected.day = date;
      var max = this.mobSelected.month.maxDays;
      var day = date.date >= max ? max : date.date;
      this.mobSelected.date.setDate(day);
      this.mobSelected.unix = +new Date(this.mobSelected.date);
    },
    mobileSelMonth: function mobileSelMonth(date) {
      this.mobSelected.month = date;
      var max = this.mobSelected.month.maxDays;

      if (date.maxDays >= max) {
        this.mobileSelDay({
          date: this.mobSelected.day.date
        });
      }

      this.mobSelected.date.setMonth(date.id);
      this.mobSelected.unix = +new Date(this.mobSelected.date);
    },
    mobileSelYear: function mobileSelYear(date) {
      this.mobSelected.year = date;
      this.mobSelected.date.setFullYear(date.year);
      this.mobSelected.unix = +new Date(this.mobSelected.date);
    },

    /**
     * @param {Object} date
     */
    selectDate: function selectDate(date) {
      this.setDate(date.timestamp);

      if (!this.isInline) {
        this.close(true);
      }

      this.resetTypedDate = new Date();
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear: function selectYear(year) {
      var date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
      this.initSelected(date);
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }

      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate(date) {
      this.setDate(date.getTime());
    },

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close(emitEvent) {
      this.mobileIsShow = false;
      this.showDayView = this.showMonthView = this.showYearView = false;

      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }

        document.removeEventListener('click', this.clickOutside, false);
      }
    },

    /**
     * Initiate the component
     */
    init: function init() {
      if (this.value) {
        this.setValue(this.value);
        this.initSelected(this.value);
      } else if (this.isMobile && !this.value) {
        this.initSelected(new Date(), false);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    },
    initSelected: function initSelected(value) {
      var hasValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.mobSelected.year.timestamp = getTime(value);
      this.mobSelected.year.year = new Date(value).getFullYear();
      this.mobSelected.month.timestamp = getTime(value);
      this.mobSelected.month.month = new Date(value).getMonth();
      this.mobSelected.day.timestamp = getTime(value);
      this.mobSelected.day.date = new Date(value).getDate();
      this.mobSelected.date = new Date(value);
      this.mobSelected.unix = +new Date(value);
      this.mobSelected.hasValue = hasValue;
    }
  },
  mounted: function mounted() {
    this.init();
  }
} // eslint-disable-next-line
;

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "vdp-datepicker",
      class: [_vm.wrapperClass, _vm.isRtl ? "rtl" : ""]
    },
    [
      _c(
        "date-input",
        {
          attrs: {
            selectedDate: _vm.selectedDate,
            resetTypedDate: _vm.resetTypedDate,
            format: _vm.format,
            translation: _vm.translation,
            inline: _vm.inline,
            id: _vm.id,
            name: _vm.name,
            refName: _vm.refName,
            openDate: _vm.openDate,
            placeholder: _vm.placeholder,
            inputClass: _vm.inputClass,
            typeable: _vm.typeable,
            clearButton: _vm.clearButton,
            clearButtonIcon: _vm.clearButtonIcon,
            calendarButton: _vm.calendarButton,
            calendarButtonIcon: _vm.calendarButtonIcon,
            calendarButtonIconContent: _vm.calendarButtonIconContent,
            disabled: _vm.disabled,
            required: _vm.required,
            bootstrapStyling: _vm.bootstrapStyling,
            "use-utc": _vm.useUtc
          },
          on: {
            showCalendar: _vm.showCalendar,
            closeCalendar: _vm.close,
            typedDate: _vm.setTypedDate,
            clearDate: _vm.clearDate
          }
        },
        [_vm._t("afterDateInput", null, { slot: "afterDateInput" })],
        2
      ),
      _vm._v(" "),
      !_vm.isMobile
        ? [
            _vm.allowedToShowView("day")
              ? _c(
                  "picker-day",
                  {
                    attrs: {
                      pageDate: _vm.pageDate,
                      selectedDate: _vm.selectedDate,
                      showDayView: _vm.showDayView,
                      fullMonthName: _vm.fullMonthName,
                      allowedToShowView: _vm.allowedToShowView,
                      disabledDates: _vm.disabledDates,
                      highlighted: _vm.highlighted,
                      calendarClass: _vm.calendarClass,
                      calendarStyle: _vm.calendarStyle,
                      translation: _vm.translation,
                      pageTimestamp: _vm.pageTimestamp,
                      isRtl: _vm.isRtl,
                      mondayFirst: _vm.mondayFirst,
                      dayCellContent: _vm.dayCellContent,
                      "use-utc": _vm.useUtc
                    },
                    on: {
                      changedMonth: _vm.handleChangedMonthFromDayPicker,
                      selectDate: _vm.selectDate,
                      showMonthCalendar: _vm.showMonthCalendar,
                      selectedDisabled: _vm.selectDisabledDate
                    }
                  },
                  [
                    _vm._t("beforeCalendarHeader", null, {
                      slot: "beforeCalendarHeader"
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.allowedToShowView("month")
              ? _c(
                  "picker-month",
                  {
                    attrs: {
                      pageDate: _vm.pageDate,
                      selectedDate: _vm.selectedDate,
                      showMonthView: _vm.showMonthView,
                      allowedToShowView: _vm.allowedToShowView,
                      disabledDates: _vm.disabledDates,
                      calendarClass: _vm.calendarClass,
                      calendarStyle: _vm.calendarStyle,
                      translation: _vm.translation,
                      isRtl: _vm.isRtl,
                      "use-utc": _vm.useUtc
                    },
                    on: {
                      selectMonth: _vm.selectMonth,
                      showYearCalendar: _vm.showYearCalendar,
                      changedYear: _vm.setPageDate
                    }
                  },
                  [
                    _vm._t("beforeCalendarHeader", null, {
                      slot: "beforeCalendarHeader"
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.allowedToShowView("year")
              ? _c(
                  "picker-year",
                  {
                    attrs: {
                      pageDate: _vm.pageDate,
                      selectedDate: _vm.selectedDate,
                      showYearView: _vm.showYearView,
                      allowedToShowView: _vm.allowedToShowView,
                      disabledDates: _vm.disabledDates,
                      calendarClass: _vm.calendarClass,
                      calendarStyle: _vm.calendarStyle,
                      translation: _vm.translation,
                      isRtl: _vm.isRtl,
                      "use-utc": _vm.useUtc
                    },
                    on: {
                      selectYear: _vm.selectYear,
                      changedDecade: _vm.setPageDate
                    }
                  },
                  [
                    _vm._t("beforeCalendarHeader", null, {
                      slot: "beforeCalendarHeader"
                    })
                  ],
                  2
                )
              : _vm._e()
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.isMobile && _vm.isMobileInline
        ? _c(
            "div",
            { staticClass: "mobile-view" },
            [
              _c("picker-year", {
                staticClass: "mobile-view__item",
                attrs: {
                  mDate: _vm.mobSelected.unix,
                  isMobile: _vm.isMobile,
                  pageDate: _vm.pageDate,
                  selectedDate: _vm.selectedDate,
                  showYearView: _vm.showYearView,
                  allowedToShowView: _vm.allowedToShowView,
                  disabledDates: _vm.disabledDates,
                  calendarClass: _vm.calendarClass,
                  calendarStyle: _vm.calendarStyle,
                  translation: _vm.translation,
                  isRtl: _vm.isRtl,
                  "use-utc": _vm.useUtc
                },
                on: { selectYear: _vm.mobileSelYear }
              }),
              _vm._v(" "),
              _c("picker-month", {
                staticClass: "mobile-view__item",
                attrs: {
                  mDate: _vm.mobSelected.unix,
                  isMobile: _vm.isMobile,
                  pageDate: _vm.pageDate,
                  selectedDate: _vm.selectedDate,
                  showMonthView: _vm.showMonthView,
                  allowedToShowView: _vm.allowedToShowView,
                  disabledDates: _vm.disabledDates,
                  calendarClass: _vm.calendarClass,
                  calendarStyle: _vm.calendarStyle,
                  translation: _vm.translation,
                  isRtl: _vm.isRtl,
                  "use-utc": _vm.useUtc
                },
                on: { selectMonth: _vm.mobileSelMonth }
              }),
              _vm._v(" "),
              _c("picker-day", {
                staticClass: "mobile-view__item",
                attrs: {
                  mDate: _vm.mobSelected.unix,
                  isMobile: _vm.isMobile,
                  pageDate: _vm.pageDate,
                  selectedDate: _vm.selectedDate,
                  showDayView: _vm.showDayView,
                  fullMonthName: _vm.fullMonthName,
                  allowedToShowView: _vm.allowedToShowView,
                  disabledDates: _vm.disabledDates,
                  highlighted: _vm.highlighted,
                  calendarClass: _vm.calendarClass,
                  calendarStyle: _vm.calendarStyle,
                  translation: _vm.translation,
                  pageTimestamp: _vm.pageTimestamp,
                  isRtl: _vm.isRtl,
                  mondayFirst: _vm.mondayFirst,
                  dayCellContent: _vm.dayCellContent,
                  "use-utc": _vm.useUtc
                },
                on: {
                  selectDate: _vm.mobileSelDay,
                  selectedDisabled: _vm.selectDisabledDate
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-79c33fde_0", { source: ".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 340px;\n  border: 2px solid #0070ff;\n  padding: 26px;\n}\n.vdp-datepicker__calendar header.vdp__header {\n  height: 40px;\n  display: flex;\n  line-height: 40px;\n  text-align: center;\n}\n.vdp-datepicker__calendar header.vdp__header .middle__btn {\n  flex: 1;\n}\n.vdp-datepicker__calendar header.vdp__header span {\n  display: block;\n  font-size: 24px;\n  text-align: center;\n}\n.vdp-datepicker__calendar header.vdp__header .prev.disabled {\n  color: #ddd;\n}\n.vdp-datepicker__calendar header.vdp__header .next.disabled {\n  color: #ddd;\n}\n.vdp-datepicker__calendar header.vdp__header .prev:not(.disabled),\n.vdp-datepicker__calendar header.vdp__header .next:not(.disabled),\n.vdp-datepicker__calendar header.vdp__header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header.vdp__header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header.vdp__header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header.vdp__header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  background-color: #0070ff;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #0070ff;\n  color: #fff;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #0070ff;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #0070ff;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n  color: #c6c7c8;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.blank {\n  border: none;\n}\n.vdp-datepicker__calendar .exist-days .day:nth-child(7n),\n.vdp-datepicker__calendar .exist-days .day:last-child {\n  border-right: 1px solid #ececec;\n}\n.vdp-datepicker__calendar .exist-days .day.fst-act-svn-days {\n  border-top: 1px solid #ececec;\n}\n.vdp-datepicker__calendar .exist-days .day {\n  border: 1px solid #ececec;\n  border-right: none;\n  border-top: none;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n.vdp-datepicker .mobile-view {\n  height: 180px;\n  display: flex;\n  background-color: #fff;\n}\n.vdp-datepicker .mobile-view__item {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n}\n.vdp-datepicker .mobile-view__item .vue-scroll-picker-item.-selected {\n  font-size: 24px;\n}\n.vdp-datepicker .mobile-view .vdp-year__mobile {\n  flex: 1 1 20%;\n}\n.vdp-datepicker .mobile-view .vdp-month__mobile {\n  flex: 1 1 35%;\n}\n.vdp-datepicker .mobile-view .vdp-day__mobile {\n  flex: 1 1 25%;\n  padding-right: 1rem;\n}\n.vdp-datepicker .mobile-view .vdp-list__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(0,0,0,0.4);\n}\n", map: {"version":3,"sources":["Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,OAAO;AACT;AACA;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;;EAEE,+BAA+B;AACjC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB","file":"Datepicker.vue","sourcesContent":[".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 340px;\n  border: 2px solid #0070ff;\n  padding: 26px;\n}\n.vdp-datepicker__calendar header.vdp__header {\n  height: 40px;\n  display: flex;\n  line-height: 40px;\n  text-align: center;\n}\n.vdp-datepicker__calendar header.vdp__header .middle__btn {\n  flex: 1;\n}\n.vdp-datepicker__calendar header.vdp__header span {\n  display: block;\n  font-size: 24px;\n  text-align: center;\n}\n.vdp-datepicker__calendar header.vdp__header .prev.disabled {\n  color: #ddd;\n}\n.vdp-datepicker__calendar header.vdp__header .next.disabled {\n  color: #ddd;\n}\n.vdp-datepicker__calendar header.vdp__header .prev:not(.disabled),\n.vdp-datepicker__calendar header.vdp__header .next:not(.disabled),\n.vdp-datepicker__calendar header.vdp__header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header.vdp__header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header.vdp__header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header.vdp__header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  background-color: #0070ff;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #0070ff;\n  color: #fff;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #0070ff;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #0070ff;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n  color: #c6c7c8;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.blank {\n  border: none;\n}\n.vdp-datepicker__calendar .exist-days .day:nth-child(7n),\n.vdp-datepicker__calendar .exist-days .day:last-child {\n  border-right: 1px solid #ececec;\n}\n.vdp-datepicker__calendar .exist-days .day.fst-act-svn-days {\n  border-top: 1px solid #ececec;\n}\n.vdp-datepicker__calendar .exist-days .day {\n  border: 1px solid #ececec;\n  border-right: none;\n  border-top: none;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n.vdp-datepicker .mobile-view {\n  height: 180px;\n  display: flex;\n  background-color: #fff;\n}\n.vdp-datepicker .mobile-view__item {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n}\n.vdp-datepicker .mobile-view__item .vue-scroll-picker-item.-selected {\n  font-size: 24px;\n}\n.vdp-datepicker .mobile-view .vdp-year__mobile {\n  flex: 1 1 20%;\n}\n.vdp-datepicker .mobile-view .vdp-month__mobile {\n  flex: 1 1 35%;\n}\n.vdp-datepicker .mobile-view .vdp-day__mobile {\n  flex: 1 1 25%;\n  padding-right: 1rem;\n}\n.vdp-datepicker .mobile-view .vdp-list__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(0,0,0,0.4);\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var Datepicker = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    browser,
    undefined
  );

var addZero = function addZero(v) {
  return v < 10 ? '0' + v : String(v);
};

var isPm = function isPm(v) {
  return v === 'PM';
};

var swapTwelve = function swapTwelve(pred) {
  return function (v) {
    if (pred) {
      return v === 0 ? 12 : v;
    } else return v;
  };
};

var getHrs = function getHrs(date, isPm) {
  if (!date) return 0;
  var h = isPm ? 'H' : 'h';
  return Number(lightFormat(new Date(date), h));
};

var script$6 = {
  components: {
    VPicker: VPicker
  },
  props: {
    isMilitary: Boolean,
    meridiem: String,
    selectedVal: Number
  },
  data: function data() {
    return {
      selHour: null,
      selMin: null,
      selectedTime: undefined,
      shouldRender: false
    };
  },
  mounted: function mounted() {
    this.initTime(this.selectedVal);
  },
  computed: {
    currentDate: function currentDate() {
      return {
        year: getYear(this.selectedVal),
        month: getMonth(this.selectedVal),
        date: getDate(this.selectedVal),
        hour: getHours(this.selectedVal),
        minute: getMinutes(this.selectedVal)
      };
    },
    formattedVal: function formattedVal() {
      if (!this.selectedTime || !isValid(this.selectedTime)) return '';
      return lightFormat(this.selectedTime, 'hh:mm') || '';
    },
    hoursLen: function hoursLen() {
      return this.isMilitary ? 24 : 12;
    },
    hours: function hours() {
      var _this = this;

      return _toConsumableArray(Array(this.hoursLen).keys()).map(function (v) {
        return {
          value: v,
          id: v,
          name: addZero(swapTwelve(isPm(_this.meridiem))(v))
        };
      });
    },
    minutes: function minutes() {
      return _toConsumableArray(Array(60).keys()).map(function (v) {
        return {
          value: v,
          id: v,
          name: addZero(v)
        };
      });
    }
  },
  watch: {
    meridiem: function meridiem() {
      if (!this.shouldRender) return;
      this.selectedTime = this.makeDate();
      this.changed();
    }
  },
  methods: {
    initTime: function initTime(v) {
      var _this2 = this;

      this.selHour = getHrs(v, this.isMilitary);
      this.selMin = getMinutes(v);
      this.selectedTime = new Date(v);
      this.$nextTick(function () {
        _this2.shouldRender = true;
      });
    },
    makeDate: function makeDate() {
      var _this$currentDate = this.currentDate,
          year = _this$currentDate.year,
          month = _this$currentDate.month,
          date = _this$currentDate.date;
      var h = this.selHour;
      var m = this.selMin;
      var mer = this.meridiem;

      if (mer && !this.isMilitary) {
        return new Date("".concat(month + 1, "/").concat(date, "/").concat(year, " ").concat(h, ":").concat(m, " ").concat(mer));
      }

      return new Date("".concat(month + 1, "/").concat(date, "/").concat(year, " ").concat(h, ":").concat(m));
    },
    handleHours: function handleHours(val) {
      this.selHour = val;
      this.selectedTime = this.makeDate();
      this.changed();
    },
    handleMinutes: function handleMinutes(val) {
      this.selMin = val;
      this.selectedTime = this.makeDate();
      this.changed();
    },
    changed: function changed() {
      var ev = {
        date: this.selectedTime,
        formatted: this.formattedVal
      };
      this.$emit('time:changed', ev);
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "tp__container",
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm.$slots.left
        ? _c("div", { staticClass: "left" }, [_vm._t("left")], 2)
        : _vm._e(),
      _vm._v(" "),
      _vm.shouldRender
        ? _c(
            "div",
            { staticClass: "mid" },
            [
              _c("VPicker", {
                attrs: { initial: _vm.selHour, options: _vm.hours },
                on: { input: _vm.handleHours }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator" }, [_vm._v(":")]),
              _vm._v(" "),
              _c("VPicker", {
                attrs: { initial: _vm.selMin, options: _vm.minutes },
                on: { input: _vm.handleMinutes }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.right
        ? _c("div", { staticClass: "right" }, [_vm._t("right")], 2)
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-00b7e148_0", { source: ".tp__container {\n  z-index: 10;\n  display: flex;\n}\n.tp__container .left {\n  height: 100%;\n  flex: 1 1 25%;\n}\n.tp__container .mid {\n  position: relative;\n  flex: 1 1 50%;\n  display: flex;\n  justify-content: center;\n  font-size: inherit;\n}\n.tp__container .mid .separator {\n  align-items: center;\n  display: flex;\n  color: #000;\n}\n.tp__container .right {\n  height: 100%;\n  flex: 1 1 25%;\n}\n\n/*# sourceMappingURL=PickerTime.vue.map */", map: {"version":3,"sources":["/Users/rei/web/ww-datepicker/src/components/TimePicker/PickerTime.vue","PickerTime.vue"],"names":[],"mappings":"AA6IA;EACA,WAAA;EACA,aAAA;AC5IA;AD8IA;EACA,YAAA;EACA,aAAA;AC5IA;AD8IA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AC5IA;AD6IA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;AC3IA;AD8IA;EACA,YAAA;EACA,aAAA;AC5IA;;AAEA,yCAAyC","file":"PickerTime.vue","sourcesContent":["<template>\n  <div class=\"tp__container\" @mousedown.prevent>\n    <div v-if=\"$slots.left\" class=\"left\">\n      <slot name=\"left\"></slot>\n    </div>\n    <div class=\"mid\"\n        v-if=\"shouldRender\">\n      <VPicker\n        :initial=\"selHour\"\n        :options=\"hours\"\n        @input=\"handleHours\"\n      />\n      <div class=\"separator\">:</div>\n      <VPicker\n        :initial=\"selMin\"\n        :options=\"minutes\"\n        @input=\"handleMinutes\"\n      />\n    </div>\n    <div v-if=\"$slots.right\" class=\"right\">\n      <slot name=\"right\"></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { lightFormat, getYear, getMonth, getDate, getHours, getMinutes, isValid } from 'date-fns'\nimport VPicker from '../VPicker'\n\nconst addZero = v => v < 10 ? '0' + v : String(v)\n\nconst isPm = v => v === 'PM'\nconst swapTwelve = pred => v => {\n  if (pred) {\n    return v === 0 ? 12 : v\n  } else return v\n}\n\nconst getHrs = (date, isPm) => {\n  if (!date) return 0\n  let h = isPm ? 'H' : 'h'\n  return Number(lightFormat(new Date(date), h))\n}\n\nexport default {\n  components: {VPicker},\n  props: {\n    isMilitary: Boolean,\n    meridiem: String,\n    selectedVal: Number\n  },\n  data: () => ({\n    selHour: null,\n    selMin: null,\n    selectedTime: undefined,\n    shouldRender: false\n  }),\n  mounted () {\n    this.initTime(this.selectedVal)\n  },\n  computed: {\n    currentDate() {\n      return {\n        year: getYear(this.selectedVal),\n        month: getMonth(this.selectedVal),\n        date: getDate(this.selectedVal),\n        hour: getHours(this.selectedVal),\n        minute: getMinutes(this.selectedVal)\n      }\n    },\n    formattedVal() {\n      if (!this.selectedTime || !isValid(this.selectedTime)) return ''\n      return lightFormat(this.selectedTime, 'hh:mm') || ''\n    },\n    hoursLen() {\n      return this.isMilitary ? 24 : 12\n    },\n    hours() {\n      return [...Array(this.hoursLen).keys()]\n        .map(v => ({\n          value: v, id: v, name: addZero(swapTwelve(isPm(this.meridiem))(v))\n        }))\n    },\n    minutes() {\n      return [...Array(60).keys()]\n        .map(v => ({value: v, id: v, name: addZero(v)}))\n    }\n  },\n  watch: {\n    meridiem() {\n      if (!this.shouldRender) return\n      this.selectedTime = this.makeDate()\n      this.changed()\n    },\n    // selectedVal(v) {\n    //   this.selHour = getHrs(v, this.isMilitary)\n    //   this.selMin = getMinutes(v)\n    //   this.selectedTime = this.makeDate()\n    // }\n  },\n  methods: {\n    initTime(v) {\n      this.selHour = getHrs(v, this.isMilitary)\n      this.selMin = getMinutes(v)\n      this.selectedTime = new Date(v)\n      this.$nextTick(() => {\n        this.shouldRender = true\n      })\n    },\n    makeDate() {\n      const { year, month, date } = this.currentDate\n      const h = this.selHour\n      const m = this.selMin\n      const mer = this.meridiem\n      if (mer && !this.isMilitary) {\n        return new Date(`${month + 1}/${date}/${year} ${h}:${m} ${mer}`)\n      }\n      return new Date(`${month + 1}/${date}/${year} ${h}:${m}`)\n    },\n    handleHours(val) {\n      this.selHour = val\n      this.selectedTime = this.makeDate()\n      this.changed()\n    },\n    handleMinutes(val) {\n      this.selMin = val\n      this.selectedTime = this.makeDate()\n      this.changed()\n    },\n    changed() {\n      let ev = {\n        date: this.selectedTime,\n        formatted: this.formattedVal\n      }\n      this.$emit('time:changed', ev)\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n.tp__container {\n  z-index: 10;\n  display: flex;\n\n  .left {\n    height: 100%;\n    flex: 1 1 25%;\n  }\n  .mid {\n    position: relative;\n    flex: 1 1 50%;\n    display: flex;\n    justify-content: center;\n    font-size: inherit;\n    .separator {\n      align-items: center;\n      display: flex;\n      color: #000;\n    }\n  }\n  .right {\n    height: 100%;\n    flex: 1 1 25%;\n  }\n}\n</style>\n",".tp__container {\n  z-index: 10;\n  display: flex;\n}\n.tp__container .left {\n  height: 100%;\n  flex: 1 1 25%;\n}\n.tp__container .mid {\n  position: relative;\n  flex: 1 1 50%;\n  display: flex;\n  justify-content: center;\n  font-size: inherit;\n}\n.tp__container .mid .separator {\n  align-items: center;\n  display: flex;\n  color: #000;\n}\n.tp__container .right {\n  height: 100%;\n  flex: 1 1 25%;\n}\n\n/*# sourceMappingURL=PickerTime.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var PickerTime = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    browser,
    undefined
  );

//
//
//
//
//
//
var AM = 'AM';
var PM = 'PM';
var script$7 = {
  props: {
    am: Boolean,
    selected: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'tp__meridiem-btn': true,
        'selected': this.selected
      };
    },
    meridiem: function meridiem() {
      return this.am ? AM : PM;
    }
  },
  methods: {
    onClick: function onClick(m) {
      this.$emit('click', m);
    }
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: _vm.classes,
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.onClick(_vm.meridiem)
        }
      }
    },
    [_vm._v("\n  " + _vm._s(_vm.meridiem) + "\n")]
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-1e7de114_0", { source: ".tp__meridiem-btn {\n  background-color: #f6f6f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.tp__meridiem-btn.selected {\n  background-color: #0070ff;\n  color: #fff;\n}\n\n/*# sourceMappingURL=MeridiemBtn.vue.map */", map: {"version":3,"sources":["/Users/rei/web/ww-datepicker/src/components/TimePicker/MeridiemBtn.vue","MeridiemBtn.vue"],"names":[],"mappings":"AAmCA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,eAAA;AClCA;ADmCA;EACA,yBAAA;EACA,WAAA;ACjCA;;AAEA,0CAA0C","file":"MeridiemBtn.vue","sourcesContent":["<template>\n  <div :class=\"classes\" @click.self=\"onClick(meridiem)\">\n    {{ meridiem }}\n  </div>\n</template>\n\n<script>\nconst AM = 'AM'\nconst PM = 'PM'\n\nexport default {\n  props: {\n    am: Boolean,\n    selected: Boolean\n  },\n  computed: {\n    classes() {\n      return {\n        'tp__meridiem-btn': true,\n        'selected': this.selected\n      }\n    },\n    meridiem() {\n      return this.am ? AM : PM\n    }\n  },\n  methods: {\n    onClick(m) {\n      this.$emit('click', m)\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n.tp__meridiem-btn {\n  background-color: #f6f6f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n  &.selected {\n    background-color: #0070ff;\n    color: #fff;\n  }\n}\n</style>\n",".tp__meridiem-btn {\n  background-color: #f6f6f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.tp__meridiem-btn.selected {\n  background-color: #0070ff;\n  color: #fff;\n}\n\n/*# sourceMappingURL=MeridiemBtn.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var MeridiemBtn = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    browser,
    undefined
  );

//
var AM$1 = 'AM';
var PM$1 = 'PM';

var with24hours = function with24hours(use24) {
  return use24 ? 'HH' : 'hh';
};

var constructDefDate = function constructDefDate() {
  return setMinutes(new Date(), 0);
};

var script$8 = {
  components: {
    PickerTime: PickerTime,
    MeridiemBtn: MeridiemBtn
  },
  props: {
    // ONLY DATE OBJECT OR UNIX TIME!!!
    value: [Date, Number, String],
    inline: Boolean,
    militaryTime: Boolean,
    pickerContainerClass: [String, Array, Object],
    inputClass: [String, Array, Object],
    inputContainerClass: [String, Array, Object],
    isReadonly: Boolean,
    placeholder: {
      type: String,
      "default": 'Pick time'
    }
  },
  mounted: function mounted() {
    this.init();
    this.addResizeListener();

    if (this.inline) {
      this.setMeridiem(this.unix);
    }
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.onResizeEvent);
  },
  data: function data() {
    return {
      show: false,
      currMeridiem: null,
      selectedVal: null,
      windowWidth: 0
    };
  },
  computed: {
    unix: function unix() {
      // return getTime(this.selectedVal) || getTime(constructDefDate())
      if (this.value) return getTime$1(this.value);else if (this.selectedVal) return getTime$1(this.selectedVal);else return getTime$1(constructDefDate());
    },
    showOrInline: function showOrInline() {
      return this.inline ? true : this.show;
    },
    fmtVal: function fmtVal() {
      if (!this.selectedVal) return '';
      var h = with24hours(this.militaryTime);
      return format(this.selectedVal, "".concat(h, ":mm"));
    },
    amPm: function amPm() {
      return this.militaryTime ? '' : this.currMeridiem;
    },
    containerStyles: function containerStyles() {
      return {
        position: this.inline ? 'static' : 'absolute'
      };
    }
  },
  watch: {
    value: function value(val) {
      this.setValue(val);
    }
  },
  methods: {
    addResizeListener: function addResizeListener() {
      if (window) {
        window.addEventListener('resize', this.onResizeEvent);
        window.dispatchEvent(new window.Event('resize'));
      }
    },
    onResizeEvent: function onResizeEvent(e) {
      this.windowWidth = e.target.innerWidth;
    },
    init: function init() {
      if (this.value && isDate(this.value)) {
        this.setValue(this.value);
      }
    },
    setMeridiem: function setMeridiem(date) {
      var h = getHours(date);
      this.currMeridiem = h >= 12 ? PM$1 : AM$1;
    },
    setValue: function setValue(date) {
      if (typeof date === 'number' || typeof date === 'string') {
        var d = new Date(date);
        date = isValid(d) ? d : null;
      }

      if (!date) {
        this.selectedVal = constructDefDate();
        this.setMeridiem(constructDefDate());
        return false;
      }

      this.selectedVal = date;
      this.setMeridiem(date);
    },
    handleTimeChange: function handleTimeChange(p) {
      this.selectedVal = p.date;
      this.emitSelected(p.date, p.formatted);
    },
    showTime: function showTime() {
      if (this.isReadonly) {
        this.$emit('readonly');
        return;
      }

      this.show = !this.show;
      this.emitShow();
    },
    onBlur: function onBlur() {
      this.show = false;
      this.emitClose();
    },
    emitShow: function emitShow() {
      this.$emit('time:show');
    },
    emitClose: function emitClose() {
      this.$emit('time:close');
    },
    emitSelected: function emitSelected(time, fmt) {
      this.$emit('time:selected', {
        time: time,
        formatted: fmt
      });
      this.$emit('input', time);
    }
  }
};

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "vtp__timepicker" },
    [
      !_vm.inline
        ? _c("div", { class: [_vm.inputContainerClass, "input-container"] }, [
            _c("input", {
              ref: "input",
              class: [_vm.inputClass, "tp__input"],
              attrs: {
                readonly: true,
                type: _vm.inline ? "hidden" : "text",
                placeholder: _vm.placeholder
              },
              domProps: { value: _vm.fmtVal },
              on: { click: _vm.showTime, blur: _vm.onBlur }
            }),
            _vm._v(" "),
            !_vm.militaryTime
              ? _c("span", { staticClass: "meridiem" }, [
                  _vm._v(_vm._s(_vm.amPm))
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showOrInline && _vm.unix
        ? _c("PickerTime", {
            class: _vm.pickerContainerClass,
            style: _vm.containerStyles,
            attrs: {
              isMilitary: _vm.militaryTime,
              meridiem: _vm.currMeridiem,
              selectedVal: _vm.unix
            },
            on: { "time:changed": _vm.handleTimeChange },
            scopedSlots: _vm._u(
              [
                !_vm.militaryTime && _vm.currMeridiem && _vm.windowWidth <= 420
                  ? {
                      key: "left",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            { staticClass: "btn-container" },
                            [
                              _c("MeridiemBtn", {
                                attrs: {
                                  am: "",
                                  selected: _vm.currMeridiem === "AM"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.currMeridiem = $event;
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  : null,
                !_vm.militaryTime && _vm.currMeridiem
                  ? {
                      key: "right",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            { staticClass: "btn-container" },
                            [
                              _vm.windowWidth > 420
                                ? _c("MeridiemBtn", {
                                    attrs: {
                                      am: "",
                                      selected: _vm.currMeridiem === "AM"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.currMeridiem = $event;
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("MeridiemBtn", {
                                attrs: { selected: _vm.currMeridiem === "PM" },
                                on: {
                                  click: function($event) {
                                    _vm.currMeridiem = $event;
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  : null
              ],
              null,
              true
            )
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-e287329c_0", { source: ".vtp__timepicker {\n  position: relative;\n}\n.vtp__timepicker * {\n  box-sizing: border-box;\n}\n.vtp__timepicker .input-container {\n  position: relative;\n}\n.vtp__timepicker .meridiem {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.vtp__timepicker .tp__input {\n  width: 100%;\n}\n.vtp__timepicker .btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\n.vtp__timepicker .btn-container .tp__meridiem-btn {\n  width: 64px;\n  height: 40px;\n}\n@media screen and (min-width: 420px) {\n.vtp__timepicker .btn-container .tp__meridiem-btn {\n    width: 32px;\n    height: 32px;\n}\n}\n.vtp__timepicker .btn-container .mer__only-desktop {\n  display: flex;\n}\n@media screen and (max-width: 420px) {\n.vtp__timepicker .btn-container .mer__only-desktop {\n    display: none;\n}\n}\n.vtp__timepicker .btn-container.mer__only-mob {\n  display: none;\n}\n@media screen and (max-width: 420px) {\n.vtp__timepicker .btn-container.mer__only-mob {\n    display: flex;\n}\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["/Users/rei/web/ww-datepicker/src/components/TimePicker/index.vue","index.vue"],"names":[],"mappings":"AA+LA;EACA,kBAAA;AC9LA;AD+LA;EACA,sBAAA;AC7LA;AD+LA;EACA,kBAAA;AC7LA;AD+LA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,6BAAA;AC7LA;AD+LA;EACA,WAAA;AC7LA;ADgMA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AC9LA;AD+LA;EACA,WAAA;EACA,YAAA;AC7LA;AD8LA;AAHA;IAIA,WAAA;IACA,YAAA;AC3LE;AACF;AD6LA;EACA,aAAA;AC3LA;AD4LA;AAFA;IAGA,aAAA;ACzLE;AACF;AD2LA;EACA,aAAA;ACzLA;AD0LA;AAFA;IAGA,aAAA;ACvLE;AACF;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <div class=\"vtp__timepicker\">\n    <div v-if=\"!inline\"\n      :class=\"[inputContainerClass, 'input-container']\"\n    >\n      <input\n        ref=\"input\"\n        :readonly=\"true\"\n        :type=\"inline ? 'hidden' : 'text'\"\n        :class=\"[inputClass, 'tp__input']\"\n        :value=\"fmtVal\"\n        :placeholder=\"placeholder\"\n        @click=\"showTime\"\n        @blur=\"onBlur\"\n      >\n      <span v-if=\"!militaryTime\" class=\"meridiem\">{{amPm}}</span>\n    </div>\n    <PickerTime\n      v-if=\"showOrInline && unix\"\n      :class=\"pickerContainerClass\"\n      :isMilitary=\"militaryTime\"\n      :meridiem=\"currMeridiem\"\n      :selectedVal=\"unix\"\n      :style=\"containerStyles\"\n      @time:changed=\"handleTimeChange\"\n    >\n      <template v-if=\"!militaryTime && currMeridiem && windowWidth <= 420\" #left>\n        <div class=\"btn-container\">\n          <MeridiemBtn\n            am\n            :selected=\"currMeridiem === 'AM'\"\n            @click=\"currMeridiem = $event\"\n          />\n        </div>\n      </template>\n      <template v-if=\"!militaryTime && currMeridiem\" #right>\n        <div class=\"btn-container\">\n          <MeridiemBtn\n            v-if=\"windowWidth > 420\"\n            am\n            :selected=\"currMeridiem === 'AM'\"\n            @click=\"currMeridiem = $event\"\n          />\n          <MeridiemBtn\n            :selected=\"currMeridiem === 'PM'\"\n            @click=\"currMeridiem = $event\"\n          />\n        </div>\n      </template>\n    </PickerTime>\n  </div>\n</template>\n\n<script>\nimport { format, isValid, isDate, getHours, getTime, setMinutes } from 'date-fns'\nimport PickerTime from './PickerTime.vue'\nimport MeridiemBtn from './MeridiemBtn.vue'\n\nconst AM = 'AM'\nconst PM = 'PM'\n\nconst with24hours = (use24) => use24 ? 'HH' : 'hh'\nconst constructDefDate = () => setMinutes(new Date(), 0)\n\nexport default {\n  components: {PickerTime, MeridiemBtn},\n  props: {\n    // ONLY DATE OBJECT OR UNIX TIME!!!\n    value: [Date, Number, String],\n    inline: Boolean,\n    militaryTime: Boolean,\n    pickerContainerClass: [String, Array, Object],\n    inputClass: [String, Array, Object],\n    inputContainerClass: [String, Array, Object],\n    isReadonly: Boolean,\n    placeholder: {\n      type: String,\n      default: 'Pick time'\n    }\n  },\n  mounted() {\n    this.init()\n    this.addResizeListener()\n    if (this.inline) {\n      this.setMeridiem(this.unix)\n    }\n  },\n  destroyed() {\n    window.removeEventListener('resize', this.onResizeEvent)\n  },\n  data() {\n    return {\n      show: false,\n      currMeridiem: null,\n      selectedVal: null,\n      windowWidth: 0\n    }\n  },\n  computed: {\n    unix() {\n      // return getTime(this.selectedVal) || getTime(constructDefDate())\n      if (this.value) return getTime(this.value)\n      else if (this.selectedVal) return getTime(this.selectedVal)\n      else return getTime(constructDefDate())\n    },\n    showOrInline() {\n      return this.inline ? true : this.show\n    },\n    fmtVal() {\n      if (!this.selectedVal) return ''\n      let h = with24hours(this.militaryTime)\n      return format(this.selectedVal, `${h}:mm`)\n    },\n    amPm() {\n      return this.militaryTime ? '' : this.currMeridiem\n    },\n    containerStyles() {\n      return {\n        position: this.inline ? 'static' : 'absolute'\n      }\n    }\n  },\n  watch: {\n    value(val) {\n      this.setValue(val)\n    }\n  },\n  methods: {\n    addResizeListener() {\n      if (window) {\n        window.addEventListener('resize', this.onResizeEvent)\n        window.dispatchEvent(new window.Event('resize'))\n      }\n    },\n    onResizeEvent(e) {\n      this.windowWidth = e.target.innerWidth\n    },\n    init() {\n      if (this.value && isDate(this.value)) {\n        this.setValue(this.value)\n      }\n    },\n    setMeridiem(date) {\n      let h = getHours(date)\n      this.currMeridiem = h >= 12 ? PM : AM\n    },\n    setValue(date) {\n      if (typeof date === 'number' || typeof date === 'string') {\n        let d = new Date(date)\n        date = isValid(d) ? d : null\n      }\n\n      if (!date) {\n        this.selectedVal = constructDefDate()\n        this.setMeridiem(constructDefDate())\n        return false\n      }\n      this.selectedVal = date\n      this.setMeridiem(date)\n    },\n    handleTimeChange(p) {\n      this.selectedVal = p.date\n      this.emitSelected(p.date, p.formatted)\n    },\n    showTime() {\n      if (this.isReadonly) {\n        this.$emit('readonly')\n        return\n      }\n      this.show = !this.show\n      this.emitShow()\n    },\n    onBlur() {\n      this.show = false\n      this.emitClose()\n    },\n    emitShow() {\n      this.$emit('time:show')\n    },\n    emitClose() {\n      this.$emit('time:close')\n    },\n    emitSelected(time, fmt) {\n      this.$emit('time:selected', { time, formatted: fmt })\n      this.$emit('input', time)\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n.vtp__timepicker {\n  position: relative;\n  * {\n    box-sizing: border-box;\n  }\n  .input-container {\n    position: relative;\n  }\n  .meridiem {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .tp__input {\n    width: 100%;\n  }\n\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    height: 100%;\n    .tp__meridiem-btn {\n      width: 64px;\n      height: 40px;\n      @media screen and (min-width: 420px) {\n        width: 32px;\n        height: 32px;\n      }\n    }\n    .mer__only-desktop {\n      display: flex;\n      @media screen and (max-width: 420px) {\n        display: none;\n      }\n    }\n    &.mer__only-mob {\n      display: none;\n      @media screen and (max-width: 420px) {\n        display: flex;\n      }\n    }\n  }\n}\n</style>\n",".vtp__timepicker {\n  position: relative;\n}\n.vtp__timepicker * {\n  box-sizing: border-box;\n}\n.vtp__timepicker .input-container {\n  position: relative;\n}\n.vtp__timepicker .meridiem {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.vtp__timepicker .tp__input {\n  width: 100%;\n}\n.vtp__timepicker .btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\n.vtp__timepicker .btn-container .tp__meridiem-btn {\n  width: 64px;\n  height: 40px;\n}\n@media screen and (min-width: 420px) {\n  .vtp__timepicker .btn-container .tp__meridiem-btn {\n    width: 32px;\n    height: 32px;\n  }\n}\n.vtp__timepicker .btn-container .mer__only-desktop {\n  display: flex;\n}\n@media screen and (max-width: 420px) {\n  .vtp__timepicker .btn-container .mer__only-desktop {\n    display: none;\n  }\n}\n.vtp__timepicker .btn-container.mer__only-mob {\n  display: none;\n}\n@media screen and (max-width: 420px) {\n  .vtp__timepicker .btn-container.mer__only-mob {\n    display: flex;\n  }\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject SSR */
  

  
  var index = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    browser,
    undefined
  );

export { Datepicker, index as Timepicker };
