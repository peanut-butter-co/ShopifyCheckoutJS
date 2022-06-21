"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NotValidFieldException = /*#__PURE__*/function (_Error) {
  _inherits(NotValidFieldException, _Error);

  var _super = _createSuper(NotValidFieldException);

  function NotValidFieldException(value) {
    var _this;

    _classCallCheck(this, NotValidFieldException);

    var message = "".concat(value, " does not have a valid Shopify field element as parent.");
    _this = _super.call(this, message);
    _this.name = 'NotValidFieldException';
    return _this;
  }

  return _createClass(NotValidFieldException);
}( /*#__PURE__*/_wrapNativeSuper(Error));

var NotImplementedError = /*#__PURE__*/function (_Error2) {
  _inherits(NotImplementedError, _Error2);

  var _super2 = _createSuper(NotImplementedError);

  function NotImplementedError(message) {
    _classCallCheck(this, NotImplementedError);

    var sender = new Error().stack.split('\n')[2].replace(' at ', '');
    var error = "The method ".concat(sender, " isn't implemented.");
    if (message) error += " Message: \"".concat(message, "\".");
    return _super2.call(this, error);
  }

  return _createClass(NotImplementedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

var SelectionMethod = /*#__PURE__*/function (_HTMLDivElement) {
  _inherits(SelectionMethod, _HTMLDivElement);

  var _super3 = _createSuper(SelectionMethod);

  function SelectionMethod(element) {
    var _this2;

    _classCallCheck(this, SelectionMethod);

    if (!(element instanceof HTMLDivElement) || !element.classList.contains('radio-wrapper')) {
      throw TypeError('Not a radio-wrapper');
    }

    Object.setPrototypeOf(element, SelectionMethod.prototype);
    return _possibleConstructorReturn(_this2, Object.assign(element, {
      type: 'generic'
    }));
  } // eslint-disable-next-line no-unused-vars


  _createClass(SelectionMethod, [{
    key: "addDescription",
    value: function addDescription(text) {
      throw new NotImplementedError();
    }
  }, {
    key: "input",
    get: function get() {
      var input = this.querySelector('input');
      if (!input) return Error("No input found for the ".concat(this.type, " method"));
      return input;
    }
  }, {
    key: "methodData",
    get: function get() {
      return this.input.dataset;
    }
  }, {
    key: "methodId",
    get: function get() {
      return this.input.id;
    }
  }, {
    key: "checked",
    get: function get() {
      return this.input.checked;
    },
    set: function set(_boolean) {
      this.input.checked = _boolean;
    }
  }]);

  return SelectionMethod;
}( /*#__PURE__*/_wrapNativeSuper(HTMLDivElement));

var ShippingMethod = /*#__PURE__*/function (_SelectionMethod) {
  _inherits(ShippingMethod, _SelectionMethod);

  var _super4 = _createSuper(ShippingMethod);

  function ShippingMethod(element) {
    var _this3;

    _classCallCheck(this, ShippingMethod);

    _this3 = _super4.call(this, element);
    Object.setPrototypeOf(_assertThisInitialized(_this3), ShippingMethod.prototype);
    _this3.type = 'shipping';

    _this3.addEventListener('change', function () {
      var event = new CustomEvent("checkout:shippingmethod:changed", {
        detail: _assertThisInitialized(_this3)
      });
      document.dispatchEvent(event);
    });

    return _this3;
  }

  _createClass(ShippingMethod, [{
    key: "addDescription",
    value: function addDescription(text) {
      var span = this.querySelector('.radio__label__primary');
      var desc = document.createElement('span');
      desc.classList.add('small-text');
      desc.innerHTML = text;
      span.appendChild(document.createElement('br'));
      span.appendChild(desc);
    }
  }, {
    key: "shippingRate",
    get: function get() {
      return this.methodData.checkoutTotalShippingCents / 100;
    }
  }, {
    key: "subtotalPrice",
    get: function get() {
      return this.methodData.checkoutSubtotalPriceCents / 100;
    }
  }]);

  return ShippingMethod;
}(SelectionMethod);

var PaymentMethod = /*#__PURE__*/function (_SelectionMethod2) {
  _inherits(PaymentMethod, _SelectionMethod2);

  var _super5 = _createSuper(PaymentMethod);

  function PaymentMethod(element) {
    var _this4;

    _classCallCheck(this, PaymentMethod);

    if (!element.dataset.selectGateway) throw new NotValidFieldException();
    _this4 = _super5.call(this, element);
    Object.setPrototypeOf(_assertThisInitialized(_this4), PaymentMethod.prototype);
    _this4.type = 'payment';

    _this4.addEventListener('change', function () {
      var event = new CustomEvent("checkout:paymentmethod:changed", {
        detail: _assertThisInitialized(_this4)
      });
      document.dispatchEvent(event);
    });

    return _this4;
  }

  _createClass(PaymentMethod, [{
    key: "addDescription",
    value: function addDescription(text) {
      var desc = this.nextElementSibling.querySelector('.blank-slate');
      desc.innerHTML = text;
    }
  }, {
    key: "methodData",
    get: function get() {
      return this.dataset;
    }
  }, {
    key: "gatewayId",
    get: function get() {
      return this.dataset.selectGateway;
    }
  }, {
    key: "gatewayName",
    get: function get() {
      return this.dataset.gatewayName;
    }
  }]);

  return PaymentMethod;
}(SelectionMethod);
/* eslint-disable constructor-super */


var FieldRetriever = /*#__PURE__*/function () {
  function FieldRetriever() {
    _classCallCheck(this, FieldRetriever);
  }

  _createClass(FieldRetriever, [{
    key: "retrieve",
    value: function retrieve(inputElement) {
      var possibleParentsClasses = ['.field', '.checkbox-wrapper'];
      var element = null;
      var found = possibleParentsClasses.some(function (className) {
        element = inputElement.closest(className);
        if (element != null) return true;
      });

      if (found) {
        var field = {};

        if (!element.classList.contains('field')) {
          field = document.createElement('div');
          var parent = element.parentElement;
          field.classList.add('field');
          field.appendChild(element);
          parent.appendChild(field);
        } else {
          field = element;
        }

        this._setFieldPropierties(field);

        return field;
      } else throw new NotValidFieldException();
    }
  }, {
    key: "_setFieldPropierties",
    value: function _setFieldPropierties(field) {
      if (!field.children) return;
      field.wrapperClass = field.children[0].classList[0];
    }
  }]);

  return FieldRetriever;
}();

var Field = /*#__PURE__*/function (_HTMLDivElement2) {
  _inherits(Field, _HTMLDivElement2);

  var _super6 = _createSuper(Field);

  function Field(args) {
    var _this5;

    _classCallCheck(this, Field);

    var selectors = {
      input: '[id^="checkout_"]',
      errorMessage: '.field__message--error',
      wrapper: '.field__input-wrapper'
    };
    var classes = {
      wrapper: ['field__input-wrapper'],
      field: ['field'],
      fieldInput: ['field__input'],
      label: ['field__label', 'field__label--visible'],
      fieldError: ['field--error'],
      fieldErrorMessage: ['field__message', 'field__message--error']
    };

    if (typeof args == 'string') {
      var input = document.querySelector("#".concat(args));
      var element = new FieldRetriever().retrieve(input);
      Object.setPrototypeOf(element, Field.prototype);
      var field = Object.assign(element, {
        fieldName: element.name,
        fieldId: element.id,
        selectors: selectors,
        classes: classes
      });
      return _possibleConstructorReturn(_this5, field);
    } else if (_typeof(args) == 'object') {
      var _labelElement$classLi;

      var name = args.name,
          _args$label = args.label,
          label = _args$label === void 0 ? name : _args$label;
      var fieldId = "checkout_attributes_".concat(name);
      var fieldName = "checkout[attributes][".concat(name, "]");

      var _element = document.createElement('div');

      _element.classList.add(classes.field);

      var wrapperElement = document.createElement('div');
      wrapperElement.classList.add(classes.wrapper);
      var labelElement = document.createElement('label');

      (_labelElement$classLi = labelElement.classList).add.apply(_labelElement$classLi, _toConsumableArray(classes.label));

      labelElement.innerText = label;
      labelElement.htmlFor = fieldId;
      wrapperElement.appendChild(labelElement);

      _element.appendChild(wrapperElement);

      Object.setPrototypeOf(_element, Field.prototype);

      var _field = Object.assign(_element, {
        fieldName: fieldName,
        fieldId: fieldId,
        selectors: selectors,
        classes: classes
      });

      return _possibleConstructorReturn(_this5, _field);
    }

    return _possibleConstructorReturn(_this5);
  }

  _createClass(Field, [{
    key: "created",
    value: function created() {
      var event = new CustomEvent("checkout:field:created", {
        detail: this
      });
      document.dispatchEvent(event);
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "addField",
    value: function addField(args) {
      throw new NotImplementedError();
    }
  }, {
    key: "showError",
    value: function showError(message) {
      var _this$classList;

      this.removeError();

      (_this$classList = this.classList).add.apply(_this$classList, _toConsumableArray(this.classes.fieldError));

      if (message && message.length > 0) {
        var _errorElement$classLi;

        var errorElement = document.createElement('p');

        (_errorElement$classLi = errorElement.classList).add.apply(_errorElement$classLi, _toConsumableArray(this.classes.fieldErrorMessage));

        errorElement.innerHTML = message;
        this.appendChild(errorElement);
      }
    }
  }, {
    key: "removeError",
    value: function removeError() {
      var _this$classList2;

      (_this$classList2 = this.classList).remove.apply(_this$classList2, _toConsumableArray(this.classes.fieldError));

      var errorElements = this.querySelectorAll(this.selectors.errorMessage);
      errorElements.forEach(function (element) {
        element.remove();
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var event = new CustomEvent("checkout:field:removed", {
        detail: this
      });
      document.dispatchEvent(event);

      _get(_getPrototypeOf(Field.prototype), "remove", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this.querySelector(this.selectors.input).value;
    },
    set: function set(val) {
      var input = this.querySelector(this.selectors.input);
      input.value = val;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(field) {
      if (!field || !(field instanceof Field)) throw TypeError('Object trying to add is not a Field element');
      this.insertAdjacentElement('afterend', field);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(field) {
      if (!field || !(field instanceof Field)) throw TypeError('Object trying to add is not a Field element');
      this.insertAdjacentElement('beforebegin', field);
    }
  }]);

  return Field;
}( /*#__PURE__*/_wrapNativeSuper(HTMLDivElement));

var Tooltip = /*#__PURE__*/function (_HTMLDivElement3) {
  _inherits(Tooltip, _HTMLDivElement3);

  var _super7 = _createSuper(Tooltip);

  function Tooltip(text, fieldId) {
    var _tooltipDiv$classList, _tooltipSpan$classLis, _iconDiv$classList, _iconSVG$classList;

    var _this6;

    var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#question';

    _classCallCheck(this, Tooltip);

    var classes = {
      wrapper: ['field__icon', 'has-tooltip'],
      tooltip: ['tooltip'],
      svgWrapper: ['field__icon-svg'],
      svgIcon: ['icon-svg', 'icon-svg--color-adaptive-lighter', 'icon-svg--size-16', 'icon-svg--block']
    };
    var tooltipDiv = document.createElement('div');
    tooltipDiv.setAttribute('role', 'tooltip');

    (_tooltipDiv$classList = tooltipDiv.classList).add.apply(_tooltipDiv$classList, _toConsumableArray(classes.wrapper));

    var tooltipSpan = document.createElement('span');
    tooltipSpan.id = "tooltip-for-".concat(fieldId);

    (_tooltipSpan$classLis = tooltipSpan.classList).add.apply(_tooltipSpan$classLis, _toConsumableArray(classes.tooltip));

    tooltipSpan.innerText = text;
    var iconDiv = document.createElement('div');

    (_iconDiv$classList = iconDiv.classList).add.apply(_iconDiv$classList, _toConsumableArray(classes.svgWrapper));

    var iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    (_iconSVG$classList = iconSVG.classList).add.apply(_iconSVG$classList, _toConsumableArray(classes.svgIcon));

    iconSVG.setAttribute('role', 'presentation');
    iconSVG.focusable = 'false';
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', icon);
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', icon);
    iconSVG.appendChild(use);
    iconDiv.appendChild(iconSVG);
    tooltipDiv.appendChild(tooltipSpan);
    tooltipDiv.appendChild(iconDiv);
    return _possibleConstructorReturn(_this6, tooltipDiv);
  }

  return _createClass(Tooltip);
}( /*#__PURE__*/_wrapNativeSuper(HTMLDivElement));

var TextField = /*#__PURE__*/function (_Field) {
  _inherits(TextField, _Field);

  var _super8 = _createSuper(TextField);

  function TextField(args) {
    var _this7;

    _classCallCheck(this, TextField);

    _this7 = _super8.call(this, args);
    Object.setPrototypeOf(_assertThisInitialized(_this7), TextField.prototype);

    if (_typeof(args) == 'object') {
      _this7.addField(args);
    }

    _this7.created();

    return _this7;
  }

  _createClass(TextField, [{
    key: "addField",
    value: function addField(args) {
      var _input$classList;

      var input = document.createElement('input');

      (_input$classList = input.classList).add.apply(_input$classList, _toConsumableArray(this.classes.fieldInput));

      input.placeholder = args.placeholder ? args.placeholder : '';
      input.size = args.size ? args.size : 30;
      input.type = args.type ? args.type : 'text';
      input.value = args.defaultValue ? args.defaultValue : '';
      input.name = this.fieldName;
      input.id = this.fieldId;
      this.querySelector(this.selectors.wrapper).appendChild(input);

      if (typeof args.tooltip == 'string') {
        this.addTooltip(args.tooltip);
      }
    }
  }, {
    key: "addTooltip",
    value: function addTooltip() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#question';
      this.removeTooltip();
      var wrapper = this.querySelector(this.selectors.wrapper);
      wrapper.classList.add('field__input-wrapper--icon-right');
      var tooltip = new Tooltip(text, this.fieldId, icon);
      wrapper.appendChild(tooltip);
    }
  }, {
    key: "removeTooltip",
    value: function removeTooltip() {
      var wrapper = this.querySelector(this.selectors.wrapper);
      var tooltips = wrapper.querySelectorAll('.field__icon');
      wrapper.classList.remove('field__input-wrapper--icon-right');
      tooltips.forEach(function (element) {
        element.remove();
      });
    }
  }]);

  return TextField;
}(Field);

var CheckboxField = /*#__PURE__*/function (_Field2) {
  _inherits(CheckboxField, _Field2);

  var _super9 = _createSuper(CheckboxField);

  function CheckboxField(args) {
    var _this8;

    _classCallCheck(this, CheckboxField);

    var selectors = {
      input: 'input[type="checkbox"]',
      wrapper: '.checkbox-wrapper'
    };
    var classes = {
      label: ['checkbox__label'],
      fieldInputWrapper: ['checkbox__input'],
      fieldInput: ['input-checkbox'],
      wrapper: ['checkbox-wrapper']
    };

    if (_typeof(args) == 'object') {
      var _wrapper$classList, _wrapper$classList2;

      args.type = 'checkbox';
      _this8 = _super9.call(this, args);

      var wrapper = _this8.querySelector(_this8.selectors.wrapper);

      (_wrapper$classList = wrapper.classList).remove.apply(_wrapper$classList, _toConsumableArray(wrapper.classList));

      (_wrapper$classList2 = wrapper.classList).add.apply(_wrapper$classList2, _toConsumableArray(classes.wrapper));

      Object.setPrototypeOf(_assertThisInitialized(_this8), CheckboxField.prototype);
      Object.assign(_this8.classes, classes);
      Object.assign(_this8.selectors, selectors);
      var checked = typeof args.checked == 'boolean' ? args.checked : false;

      _this8.addField(checked);
    } else {
      _this8 = _super9.call(this, args);
      Object.setPrototypeOf(_assertThisInitialized(_this8), CheckboxField.prototype);
      Object.assign(_this8.classes, classes);
      Object.assign(_this8.selectors, selectors);
    }

    _this8.created();

    return _possibleConstructorReturn(_this8);
  }

  _createClass(CheckboxField, [{
    key: "addField",
    value: function addField(checked) {
      var _label$classList, _label$classList2, _div$classList, _input$classList2;

      var wrapper = this.querySelector(this.selectors.wrapper);
      var label = wrapper.querySelector('label');

      (_label$classList = label.classList).remove.apply(_label$classList, _toConsumableArray(label.classList));

      (_label$classList2 = label.classList).add.apply(_label$classList2, _toConsumableArray(this.classes.label));

      var div = document.createElement('div');

      (_div$classList = div.classList).add.apply(_div$classList, _toConsumableArray(this.classes.fieldInputWrapper));

      var input = document.createElement('input');

      (_input$classList2 = input.classList).add.apply(_input$classList2, _toConsumableArray(this.classes.fieldInput));

      input.type = 'checkbox';
      input.checked = checked;
      input.name = this.fieldName;
      input.id = this.fieldId;
      div.appendChild(input);
      wrapper.insertBefore(div, label);
    }
  }, {
    key: "checked",
    get: function get() {
      var checkbox = this.querySelector(this.selectors.input);
      return checkbox.checked;
    },
    set: function set(checked) {
      var checkbox = this.querySelector(this.selectors.input);
      checkbox.checked = checked;
    }
  }]);

  return CheckboxField;
}(Field);

var DropdownField = /*#__PURE__*/function (_Field3) {
  _inherits(DropdownField, _Field3);

  var _super10 = _createSuper(DropdownField);

  function DropdownField(args) {
    var _this9;

    _classCallCheck(this, DropdownField);

    var classes = {
      field: ['field', 'field--show-floating-label'],
      fieldInput: ['field__input', 'field__input--select'],
      fieldInputWrapper: ['field__input-wrapper', 'field__input-wrapper--select'],
      arrow: ['field__caret', 'shown-if-js'],
      svgIcon: ['icon-svg', 'icon-svg--color-adaptive-lighter', 'icon-svg--size-10', 'field__caret-svg']
    };
    _this9 = _super10.call(this, args);
    Object.setPrototypeOf(_assertThisInitialized(_this9), DropdownField.prototype);
    Object.assign(_this9.classes, classes);

    if (_typeof(args) == 'object') {
      _this9.addField(args);
    }

    _this9.created();

    return _this9;
  }

  _createClass(DropdownField, [{
    key: "addField",
    value: function addField(args) {
      var _this$classList3, _wrapper$classList3, _input$classList3, _arrow$classList, _iconSVG$classList2;

      if (!args.options) throw new ReferenceError('No options defined for DropdownField');

      (_this$classList3 = this.classList).add.apply(_this$classList3, _toConsumableArray(this.classes.field));

      var wrapper = this.querySelector(this.selectors.wrapper);

      (_wrapper$classList3 = wrapper.classList).add.apply(_wrapper$classList3, _toConsumableArray(this.classes.fieldInputWrapper));

      var input = document.createElement('select');

      (_input$classList3 = input.classList).add.apply(_input$classList3, _toConsumableArray(this.classes.fieldInput));

      input.placeholder = args.placeholder ? args.placeholder : '';
      input.name = this.fieldName;
      input.id = this.fieldId;

      if (args.defaultValue) {
        var defaultOption = document.createElement("option");
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.innerText = args.defaultValue;
        input.add(defaultOption);
        input.placeholder = args.placeholder ? args.placeholder : args.defaultValue;
      }

      args.options.forEach(function (option) {
        var o = document.createElement("option");
        o.innerText = option.text;
        o.value = option.value;
        input.add(o);
      });
      var arrow = document.createElement('div');

      (_arrow$classList = arrow.classList).add.apply(_arrow$classList, _toConsumableArray(this.classes.arrow));

      var iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      (_iconSVG$classList2 = iconSVG.classList).add.apply(_iconSVG$classList2, _toConsumableArray(this.classes.svgIcon));

      iconSVG.setAttribute('role', 'presentation');
      iconSVG.focusable = 'false';
      var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#caret-down');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#caret-down');
      iconSVG.appendChild(use);
      arrow.appendChild(iconSVG);
      wrapper.appendChild(input);
      wrapper.appendChild(arrow);
    }
  }]);

  return DropdownField;
}(Field);

var FieldFactory = /*#__PURE__*/function () {
  function FieldFactory() {
    _classCallCheck(this, FieldFactory);
  }

  _createClass(FieldFactory, [{
    key: "createFieldByElement",
    value: function createFieldByElement(element) {
      switch (element.type) {
        case 'text':
          return new TextField(element.id);

        case 'email':
          return new TextField(element.id);

        case 'tel':
          return new TextField(element.id);

        case 'checkbox':
          return new CheckboxField(element.id);

        case 'select-one':
          return new DropdownField(element.id);

        case 'hidden':
          return null;

        default:
          try {
            return new Field(element.id);
          } catch (e) {
            if (e instanceof NotValidFieldException) return null;else throw e;
          }

      }
    }
  }]);

  return FieldFactory;
}();
/* eslint-disable no-undef */


var Checkout = /*#__PURE__*/function () {
  function Checkout() {
    _classCallCheck(this, Checkout);

    this.Steps = {
      INFORMATION: 'contact_information',
      SHIPPING: 'shipping_method',
      PAYMENT: 'payment_method',
      PROCESSING: 'processing',
      THANKYOU: 'thank_you',
      ORDERSTATUS: 'order_status',
      STOCK_PROBLEMS: 'stock_problems'
    };
    this.selectors = {
      inputs: 'input[id], select[id]',
      selectionMethods: '.section--{TYPE}-method .radio-wrapper',
      fields: '[id^="checkout_"]',
      stockProblem: {
        list: '.stock-problem-table .product__description',
        name: '.product__description__name',
        description: '.product__description__variant'
      }
    };
    document.addEventListener('page:load', this._onLoad.bind(this), false);
    document.addEventListener('page:change', this._onLoad.bind(this), false);
    document.addEventListener('checkout:field:created', this._fieldCreated.bind(this), false);
    document.addEventListener('checkout:field:removed', this._fieldRemoved.bind(this), false);
    this.lastStep = this._getLastStep();
    this.currentStep = this._getCurrentStep();
    this.fields = [];
    this.fields = this._getFields();
  }

  _createClass(Checkout, [{
    key: "_getFields",
    value: function _getFields() {
      var fields = [];
      var fieldNodes = document.querySelectorAll(this.selectors.inputs);
      var fieldFactory = new FieldFactory();
      fieldNodes.forEach(function (el) {
        var field = fieldFactory.createFieldByElement(el);
        if (field != null) fields[el.id] = field;
      });
      return fields;
    }
  }, {
    key: "_getLastStep",
    value: function _getLastStep() {
      var lastStep = sessionStorage.getItem('step');

      if (lastStep == null && document.referrer) {
        var url = new URL(document.referrer);
        lastStep = url.pathname;
      }

      return lastStep;
    }
  }, {
    key: "_getCurrentStep",
    value: function _getCurrentStep() {
      var step = Shopify.Checkout.step;

      if (Shopify.Checkout.page == 'stock_problems') {
        step = this.Steps.STOCK_PROBLEMS;
      }

      if (typeof Shopify.Checkout.OrderStatus != 'undefined') {
        if (Shopify.Checkout.page == 'thank_you') step = this.Steps.THANKYOU;else step = this.Steps.ORDERSTATUS;
      }

      sessionStorage.setItem('step', step);
      return step;
    }
  }, {
    key: "_triggerEvent",
    value: function _triggerEvent(name) {
      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var event = new CustomEvent("checkout:".concat(name), {
        detail: details
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "_getSelectionMethods",
    value: function _getSelectionMethods(type) {
      var methods = document.querySelectorAll(this.selectors.selectionMethods.replace('{TYPE}', type));
      var methodsList = [];
      methods.forEach(function (method) {
        try {
          if (type == 'shipping') {
            methodsList.push(new ShippingMethod(method));
          } else if (type == 'payment') {
            methodsList.push(new PaymentMethod(method));
          }
        } catch (ex) {
          if (!(ex instanceof NotValidFieldException)) {
            throw ex;
          }
        }
      });
      return methodsList;
    }
  }, {
    key: "_getStockProblemList",
    value: function _getStockProblemList() {
      var list = document.querySelectorAll(this.selectors.stockProblem.list);
      var stockProblemList = [];

      var _iterator = _createForOfIteratorHelper(list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var name = item.querySelector(this.selectors.stockProblem.name).innerText;
          var variant = item.querySelector(this.selectors.stockProblem.description).innerText;
          stockProblemList.push({
            name: name,
            variant: variant
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return stockProblemList;
    }
  }, {
    key: "_onLoad",
    value: function _onLoad(event) {
      try {
        this._triggerEvent('load');

        switch (this.currentStep) {
          case this.Steps.INFORMATION:
            this._triggerEvent('load:information');

            break;

          case this.Steps.SHIPPING:
            {
              var shippingMethods = this._getSelectionMethods('shipping');

              this._triggerEvent('load:shipping', {
                shippingMethods: shippingMethods
              });

              break;
            }

          case this.Steps.PAYMENT:
            {
              var paymentMethods = this._getSelectionMethods('payment');

              this._triggerEvent('load:payment', {
                paymentMethods: paymentMethods
              });

              break;
            }

          case this.Steps.PROCESSING:
            this._triggerEvent('load:processing');

            break;

          case this.Steps.THANKYOU:
            this._triggerEvent('load:thankyou');

            break;

          case this.Steps.ORDERSTATUS:
            this._triggerEvent('load:orderstatus');

            break;

          case this.Steps.STOCK_PROBLEMS:
            {
              var stockProblemList = this._getStockProblemList();

              this._triggerEvent('load:stockproblems', {
                stockProblemList: stockProblemList
              });

              break;
            }

          default:
            break;
        }
      } catch (ex) {
        this._triggerEvent('error', {
          step: this.currentStep,
          event: event,
          error: ex
        });
      }
    }
  }, {
    key: "_fieldCreated",
    value: function _fieldCreated(event) {
      var field = event.detail;
      var input = field.querySelector(this.selectors.fields);
      var hasInputAlready = Object.prototype.hasOwnProperty.call(this.fields, input.id);

      if (this.fields && !hasInputAlready) {
        this.fields[input.id] = field;
      }
    }
  }, {
    key: "_fieldRemoved",
    value: function _fieldRemoved(event) {
      var field = event.detail;
      var input = field.querySelector(this.selectors.fields);
      var hasInputAlready = Object.prototype.hasOwnProperty.call(this.fields, input.id);

      if (this.fields && hasInputAlready) {
        delete this.fields[input.id];
      }
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      document.addEventListener("checkout:".concat(event), callback, false);
    }
  }]);

  return Checkout;
}();

var _default = Checkout;
exports["default"] = _default;