(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Demo = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  }

  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
  }

  function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
  }

  function isFunction(value) {
      return typeof value === 'function';
  }

  function createErrorClass(createImpl) {
      var _super = function (instance) {
          Error.call(instance);
          instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
  }

  var UnsubscriptionError = createErrorClass(function (_super) {
      return function UnsubscriptionErrorImpl(errors) {
          _super(this);
          this.message = errors
              ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
              : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
      };
  });

  function arrRemove(arr, item) {
      if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
      }
  }

  var Subscription = (function () {
      function Subscription(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._teardowns = null;
      }
      Subscription.prototype.unsubscribe = function () {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
              this.closed = true;
              var _parentage = this._parentage;
              if (_parentage) {
                  this._parentage = null;
                  if (Array.isArray(_parentage)) {
                      try {
                          for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                              var parent_1 = _parentage_1_1.value;
                              parent_1.remove(this);
                          }
                      }
                      catch (e_1_1) { e_1 = { error: e_1_1 }; }
                      finally {
                          try {
                              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                          }
                          finally { if (e_1) throw e_1.error; }
                      }
                  }
                  else {
                      _parentage.remove(this);
                  }
              }
              var initialTeardown = this.initialTeardown;
              if (isFunction(initialTeardown)) {
                  try {
                      initialTeardown();
                  }
                  catch (e) {
                      errors = e instanceof UnsubscriptionError ? e.errors : [e];
                  }
              }
              var _teardowns = this._teardowns;
              if (_teardowns) {
                  this._teardowns = null;
                  try {
                      for (var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
                          var teardown_1 = _teardowns_1_1.value;
                          try {
                              execTeardown(teardown_1);
                          }
                          catch (err) {
                              errors = errors !== null && errors !== void 0 ? errors : [];
                              if (err instanceof UnsubscriptionError) {
                                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                              }
                              else {
                                  errors.push(err);
                              }
                          }
                      }
                  }
                  catch (e_2_1) { e_2 = { error: e_2_1 }; }
                  finally {
                      try {
                          if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                      }
                      finally { if (e_2) throw e_2.error; }
                  }
              }
              if (errors) {
                  throw new UnsubscriptionError(errors);
              }
          }
      };
      Subscription.prototype.add = function (teardown) {
          var _a;
          if (teardown && teardown !== this) {
              if (this.closed) {
                  execTeardown(teardown);
              }
              else {
                  if (teardown instanceof Subscription) {
                      if (teardown.closed || teardown._hasParent(this)) {
                          return;
                      }
                      teardown._addParent(this);
                  }
                  (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
              }
          }
      };
      Subscription.prototype._hasParent = function (parent) {
          var _parentage = this._parentage;
          return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
      };
      Subscription.prototype._addParent = function (parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription.prototype._removeParent = function (parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
              this._parentage = null;
          }
          else if (Array.isArray(_parentage)) {
              arrRemove(_parentage, parent);
          }
      };
      Subscription.prototype.remove = function (teardown) {
          var _teardowns = this._teardowns;
          _teardowns && arrRemove(_teardowns, teardown);
          if (teardown instanceof Subscription) {
              teardown._removeParent(this);
          }
      };
      Subscription.EMPTY = (function () {
          var empty = new Subscription();
          empty.closed = true;
          return empty;
      })();
      return Subscription;
  }());
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
      return (value instanceof Subscription ||
          (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
  }
  function execTeardown(teardown) {
      if (isFunction(teardown)) {
          teardown();
      }
      else {
          teardown.unsubscribe();
      }
  }

  var config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: undefined,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false,
  };

  var timeoutProvider = {
      setTimeout: function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var delegate = timeoutProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
      },
      clearTimeout: function (handle) {
          var delegate = timeoutProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: undefined,
  };

  function reportUnhandledError(err) {
      timeoutProvider.setTimeout(function () {
          var onUnhandledError = config.onUnhandledError;
          if (onUnhandledError) {
              onUnhandledError(err);
          }
          else {
              throw err;
          }
      });
  }

  function noop() { }

  var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
  function errorNotification(error) {
      return createNotification('E', undefined, error);
  }
  function nextNotification(value) {
      return createNotification('N', value, undefined);
  }
  function createNotification(kind, value, error) {
      return {
          kind: kind,
          value: value,
          error: error,
      };
  }

  var context = null;
  function errorContext(cb) {
      if (config.useDeprecatedSynchronousErrorHandling) {
          var isRoot = !context;
          if (isRoot) {
              context = { errorThrown: false, error: null };
          }
          cb();
          if (isRoot) {
              var _a = context, errorThrown = _a.errorThrown, error = _a.error;
              context = null;
              if (errorThrown) {
                  throw error;
              }
          }
      }
      else {
          cb();
      }
  }
  function captureError(err) {
      if (config.useDeprecatedSynchronousErrorHandling && context) {
          context.errorThrown = true;
          context.error = err;
      }
  }

  var Subscriber = (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
              _this.destination = destination;
              if (isSubscription(destination)) {
                  destination.add(_this);
              }
          }
          else {
              _this.destination = EMPTY_OBSERVER;
          }
          return _this;
      }
      Subscriber.create = function (next, error, complete) {
          return new SafeSubscriber(next, error, complete);
      };
      Subscriber.prototype.next = function (value) {
          if (this.isStopped) {
              handleStoppedNotification(nextNotification(value), this);
          }
          else {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (this.isStopped) {
              handleStoppedNotification(errorNotification(err), this);
          }
          else {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (this.isStopped) {
              handleStoppedNotification(COMPLETE_NOTIFICATION, this);
          }
          else {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (!this.closed) {
              this.isStopped = true;
              _super.prototype.unsubscribe.call(this);
              this.destination = null;
          }
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          try {
              this.destination.error(err);
          }
          finally {
              this.unsubscribe();
          }
      };
      Subscriber.prototype._complete = function () {
          try {
              this.destination.complete();
          }
          finally {
              this.unsubscribe();
          }
      };
      return Subscriber;
  }(Subscription));
  var SafeSubscriber = (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var next;
          if (isFunction(observerOrNext)) {
              next = observerOrNext;
          }
          else if (observerOrNext) {
              (next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete);
              var context_1;
              if (_this && config.useDeprecatedNextContext) {
                  context_1 = Object.create(observerOrNext);
                  context_1.unsubscribe = function () { return _this.unsubscribe(); };
              }
              else {
                  context_1 = observerOrNext;
              }
              next = next === null || next === void 0 ? void 0 : next.bind(context_1);
              error = error === null || error === void 0 ? void 0 : error.bind(context_1);
              complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
          }
          _this.destination = {
              next: next ? wrapForErrorHandling(next) : noop,
              error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler),
              complete: complete ? wrapForErrorHandling(complete) : noop,
          };
          return _this;
      }
      return SafeSubscriber;
  }(Subscriber));
  function wrapForErrorHandling(handler, instance) {
      return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          try {
              handler.apply(void 0, __spreadArray([], __read(args)));
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  captureError(err);
              }
              else {
                  reportUnhandledError(err);
              }
          }
      };
  }
  function defaultErrorHandler(err) {
      throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
      var onStoppedNotification = config.onStoppedNotification;
      onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
  }
  var EMPTY_OBSERVER = {
      closed: true,
      next: noop,
      error: defaultErrorHandler,
      complete: noop,
  };

  var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

  function identity(x) {
      return x;
  }

  function pipeFromArray(fns) {
      if (fns.length === 0) {
          return identity;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }

  var Observable = (function () {
      function Observable(subscribe) {
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
          errorContext(function () {
              var _a = _this, operator = _a.operator, source = _a.source;
              subscriber.add(operator
                  ?
                      operator.call(subscriber, source)
                  : source
                      ?
                          _this._subscribe(subscriber)
                      :
                          _this._trySubscribe(subscriber));
          });
          return subscriber;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              sink.error(err);
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscriber = new SafeSubscriber({
                  next: function (value) {
                      try {
                          next(value);
                      }
                      catch (err) {
                          reject(err);
                          subscriber.unsubscribe();
                      }
                  },
                  error: reject,
                  complete: resolve,
              });
              _this.subscribe(subscriber);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var _a;
          return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
      return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
      return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
  }

  function hasLift(source) {
      return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
      return function (source) {
          if (hasLift(source)) {
              return source.lift(function (liftedSource) {
                  try {
                      return init(liftedSource, this);
                  }
                  catch (err) {
                      this.error(err);
                  }
              });
          }
          throw new TypeError('Unable to lift unknown Observable type');
      };
  }

  var OperatorSubscriber = (function (_super) {
      __extends(OperatorSubscriber, _super);
      function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this._next = onNext
              ? function (value) {
                  try {
                      onNext(value);
                  }
                  catch (err) {
                      destination.error(err);
                  }
              }
              : _super.prototype._next;
          _this._error = onError
              ? function (err) {
                  try {
                      onError(err);
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._error;
          _this._complete = onComplete
              ? function () {
                  try {
                      onComplete();
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._complete;
          return _this;
      }
      OperatorSubscriber.prototype.unsubscribe = function () {
          var _a;
          var closed = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      };
      return OperatorSubscriber;
  }(Subscriber));

  var ObjectUnsubscribedError = createErrorClass(function (_super) {
      return function ObjectUnsubscribedErrorImpl() {
          _super(this);
          this.name = 'ObjectUnsubscribedError';
          this.message = 'object unsubscribed';
      };
  });

  var Subject = (function (_super) {
      __extends(Subject, _super);
      function Subject() {
          var _this = _super.call(this) || this;
          _this.closed = false;
          _this.observers = [];
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
      }
      Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
      };
      Subject.prototype._throwIfClosed = function () {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
      };
      Subject.prototype.next = function (value) {
          var _this = this;
          errorContext(function () {
              var e_1, _a;
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  var copy = _this.observers.slice();
                  try {
                      for (var copy_1 = __values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()) {
                          var observer = copy_1_1.value;
                          observer.next(value);
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
              }
          });
      };
      Subject.prototype.error = function (err) {
          var _this = this;
          errorContext(function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  _this.hasError = _this.isStopped = true;
                  _this.thrownError = err;
                  var observers = _this.observers;
                  while (observers.length) {
                      observers.shift().error(err);
                  }
              }
          });
      };
      Subject.prototype.complete = function () {
          var _this = this;
          errorContext(function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  _this.isStopped = true;
                  var observers = _this.observers;
                  while (observers.length) {
                      observers.shift().complete();
                  }
              }
          });
      };
      Subject.prototype.unsubscribe = function () {
          this.isStopped = this.closed = true;
          this.observers = null;
      };
      Object.defineProperty(Subject.prototype, "observed", {
          get: function () {
              var _a;
              return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
          },
          enumerable: false,
          configurable: true
      });
      Subject.prototype._trySubscribe = function (subscriber) {
          this._throwIfClosed();
          return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject.prototype._subscribe = function (subscriber) {
          this._throwIfClosed();
          this._checkFinalizedStatuses(subscriber);
          return this._innerSubscribe(subscriber);
      };
      Subject.prototype._innerSubscribe = function (subscriber) {
          var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
          return hasError || isStopped
              ? EMPTY_SUBSCRIPTION
              : (observers.push(subscriber), new Subscription(function () { return arrRemove(observers, subscriber); }));
      };
      Subject.prototype._checkFinalizedStatuses = function (subscriber) {
          var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
          if (hasError) {
              subscriber.error(thrownError);
          }
          else if (isStopped) {
              subscriber.complete();
          }
      };
      Subject.prototype.asObservable = function () {
          var observable = new Observable();
          observable.source = this;
          return observable;
      };
      Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
      };
      return Subject;
  }(Observable));
  var AnonymousSubject = (function (_super) {
      __extends(AnonymousSubject, _super);
      function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
      }
      AnonymousSubject.prototype.next = function (value) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
      };
      AnonymousSubject.prototype.error = function (err) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      };
      AnonymousSubject.prototype.complete = function () {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      AnonymousSubject.prototype._subscribe = function (subscriber) {
          var _a, _b;
          return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject;
  }(Subject));

  var BehaviorSubject = (function (_super) {
      __extends(BehaviorSubject, _super);
      function BehaviorSubject(_value) {
          var _this = _super.call(this) || this;
          _this._value = _value;
          return _this;
      }
      Object.defineProperty(BehaviorSubject.prototype, "value", {
          get: function () {
              return this.getValue();
          },
          enumerable: false,
          configurable: true
      });
      BehaviorSubject.prototype._subscribe = function (subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          !subscription.closed && subscriber.next(this._value);
          return subscription;
      };
      BehaviorSubject.prototype.getValue = function () {
          var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
          if (hasError) {
              throw thrownError;
          }
          this._throwIfClosed();
          return _value;
      };
      BehaviorSubject.prototype.next = function (value) {
          _super.prototype.next.call(this, (this._value = value));
      };
      return BehaviorSubject;
  }(Subject));

  function isScheduler(value) {
      return value && isFunction(value.schedule);
  }

  function last(arr) {
      return arr[arr.length - 1];
  }
  function popScheduler(args) {
      return isScheduler(last(args)) ? args.pop() : undefined;
  }

  var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

  function isPromise(value) {
      return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  function isInteropObservable(input) {
      return isFunction(input[observable]);
  }

  function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
      }
      return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  function isIterable(input) {
      return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
          var reader, _a, value, done;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      reader = readableStream.getReader();
                      _b.label = 1;
                  case 1:
                      _b.trys.push([1, , 9, 10]);
                      _b.label = 2;
                  case 2:
                      return [4, __await(reader.read())];
                  case 3:
                      _a = _b.sent(), value = _a.value, done = _a.done;
                      if (!done) return [3, 5];
                      return [4, __await(void 0)];
                  case 4: return [2, _b.sent()];
                  case 5: return [4, __await(value)];
                  case 6: return [4, _b.sent()];
                  case 7:
                      _b.sent();
                      return [3, 2];
                  case 8: return [3, 10];
                  case 9:
                      reader.releaseLock();
                      return [7];
                  case 10: return [2];
              }
          });
      });
  }
  function isReadableStreamLike(obj) {
      return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  function innerFrom(input) {
      if (input instanceof Observable) {
          return input;
      }
      if (input != null) {
          if (isInteropObservable(input)) {
              return fromInteropObservable(input);
          }
          if (isArrayLike(input)) {
              return fromArrayLike(input);
          }
          if (isPromise(input)) {
              return fromPromise(input);
          }
          if (isAsyncIterable(input)) {
              return fromAsyncIterable(input);
          }
          if (isIterable(input)) {
              return fromIterable(input);
          }
          if (isReadableStreamLike(input)) {
              return fromReadableStreamLike(input);
          }
      }
      throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
      return new Observable(function (subscriber) {
          var obs = obj[observable]();
          if (isFunction(obs.subscribe)) {
              return obs.subscribe(subscriber);
          }
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
      });
  }
  function fromArrayLike(array) {
      return new Observable(function (subscriber) {
          for (var i = 0; i < array.length && !subscriber.closed; i++) {
              subscriber.next(array[i]);
          }
          subscriber.complete();
      });
  }
  function fromPromise(promise) {
      return new Observable(function (subscriber) {
          promise
              .then(function (value) {
              if (!subscriber.closed) {
                  subscriber.next(value);
                  subscriber.complete();
              }
          }, function (err) { return subscriber.error(err); })
              .then(null, reportUnhandledError);
      });
  }
  function fromIterable(iterable) {
      return new Observable(function (subscriber) {
          var e_1, _a;
          try {
              for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                  var value = iterable_1_1.value;
                  subscriber.next(value);
                  if (subscriber.closed) {
                      return;
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          subscriber.complete();
      });
  }
  function fromAsyncIterable(asyncIterable) {
      return new Observable(function (subscriber) {
          process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
      });
  }
  function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a;
      return __awaiter(this, void 0, void 0, function () {
          var value, e_2_1;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _b.trys.push([0, 5, 6, 11]);
                      asyncIterable_1 = __asyncValues(asyncIterable);
                      _b.label = 1;
                  case 1: return [4, asyncIterable_1.next()];
                  case 2:
                      if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                      value = asyncIterable_1_1.value;
                      subscriber.next(value);
                      if (subscriber.closed) {
                          return [2];
                      }
                      _b.label = 3;
                  case 3: return [3, 1];
                  case 4: return [3, 11];
                  case 5:
                      e_2_1 = _b.sent();
                      e_2 = { error: e_2_1 };
                      return [3, 11];
                  case 6:
                      _b.trys.push([6, , 9, 10]);
                      if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                      return [4, _a.call(asyncIterable_1)];
                  case 7:
                      _b.sent();
                      _b.label = 8;
                  case 8: return [3, 10];
                  case 9:
                      if (e_2) throw e_2.error;
                      return [7];
                  case 10: return [7];
                  case 11:
                      subscriber.complete();
                      return [2];
              }
          });
      });
  }

  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) { delay = 0; }
      if (repeat === void 0) { repeat = false; }
      var scheduleSubscription = scheduler.schedule(function () {
          work();
          if (repeat) {
              parentSubscription.add(this.schedule(null, delay));
          }
          else {
              this.unsubscribe();
          }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
          return scheduleSubscription;
      }
  }

  function observeOn(scheduler, delay) {
      if (delay === void 0) { delay = 0; }
      return operate(function (source, subscriber) {
          source.subscribe(new OperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
      });
  }

  function subscribeOn(scheduler, delay) {
      if (delay === void 0) { delay = 0; }
      return operate(function (source, subscriber) {
          subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
      });
  }

  function scheduleObservable(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  function schedulePromise(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
          var i = 0;
          return scheduler.schedule(function () {
              if (i === input.length) {
                  subscriber.complete();
              }
              else {
                  subscriber.next(input[i++]);
                  if (!subscriber.closed) {
                      this.schedule();
                  }
              }
          });
      });
  }

  function scheduleIterable(input, scheduler) {
      return new Observable(function (subscriber) {
          var iterator$1;
          executeSchedule(subscriber, scheduler, function () {
              iterator$1 = input[iterator]();
              executeSchedule(subscriber, scheduler, function () {
                  var _a;
                  var value;
                  var done;
                  try {
                      (_a = iterator$1.next(), value = _a.value, done = _a.done);
                  }
                  catch (err) {
                      subscriber.error(err);
                      return;
                  }
                  if (done) {
                      subscriber.complete();
                  }
                  else {
                      subscriber.next(value);
                  }
              }, 0, true);
          });
          return function () { return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return(); };
      });
  }

  function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
          throw new Error('Iterable cannot be null');
      }
      return new Observable(function (subscriber) {
          executeSchedule(subscriber, scheduler, function () {
              var iterator = input[Symbol.asyncIterator]();
              executeSchedule(subscriber, scheduler, function () {
                  iterator.next().then(function (result) {
                      if (result.done) {
                          subscriber.complete();
                      }
                      else {
                          subscriber.next(result.value);
                      }
                  });
              }, 0, true);
          });
      });
  }

  function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
  }

  function scheduled(input, scheduler) {
      if (input != null) {
          if (isInteropObservable(input)) {
              return scheduleObservable(input, scheduler);
          }
          if (isArrayLike(input)) {
              return scheduleArray(input, scheduler);
          }
          if (isPromise(input)) {
              return schedulePromise(input, scheduler);
          }
          if (isAsyncIterable(input)) {
              return scheduleAsyncIterable(input, scheduler);
          }
          if (isIterable(input)) {
              return scheduleIterable(input, scheduler);
          }
          if (isReadableStreamLike(input)) {
              return scheduleReadableStreamLike(input, scheduler);
          }
      }
      throw createInvalidObservableTypeError(input);
  }

  function from(input, scheduler) {
      return scheduler ? scheduled(input, scheduler) : innerFrom(input);
  }

  function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      var scheduler = popScheduler(args);
      return from(args, scheduler);
  }

  function map(project, thisArg) {
      return operate(function (source, subscriber) {
          var index = 0;
          source.subscribe(new OperatorSubscriber(subscriber, function (value) {
              subscriber.next(project.call(thisArg, value, index++));
          }));
      });
  }

  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function () {
          if (isComplete && !buffer.length && !active) {
              subscriber.complete();
          }
      };
      var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
      var doInnerSub = function (value) {
          expand && subscriber.next(value);
          active++;
          var innerComplete = false;
          innerFrom(project(value, index++)).subscribe(new OperatorSubscriber(subscriber, function (innerValue) {
              onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
              if (expand) {
                  outerNext(innerValue);
              }
              else {
                  subscriber.next(innerValue);
              }
          }, function () {
              innerComplete = true;
          }, undefined, function () {
              if (innerComplete) {
                  try {
                      active--;
                      var _loop_1 = function () {
                          var bufferedValue = buffer.shift();
                          if (innerSubScheduler) {
                              executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                          }
                          else {
                              doInnerSub(bufferedValue);
                          }
                      };
                      while (buffer.length && active < concurrent) {
                          _loop_1();
                      }
                      checkComplete();
                  }
                  catch (err) {
                      subscriber.error(err);
                  }
              }
          }));
      };
      source.subscribe(new OperatorSubscriber(subscriber, outerNext, function () {
          isComplete = true;
          checkComplete();
      }));
      return function () {
          additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
      };
  }

  function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) { concurrent = Infinity; }
      if (isFunction(resultSelector)) {
          return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
      }
      else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
      }
      return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
  }

  function catchError(selector) {
      return operate(function (source, subscriber) {
          var innerSub = null;
          var syncUnsub = false;
          var handledResult;
          innerSub = source.subscribe(new OperatorSubscriber(subscriber, undefined, undefined, function (err) {
              handledResult = innerFrom(selector(err, catchError(selector)(source)));
              if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  handledResult.subscribe(subscriber);
              }
              else {
                  syncUnsub = true;
              }
          }));
          if (syncUnsub) {
              innerSub.unsubscribe();
              innerSub = null;
              handledResult.subscribe(subscriber);
          }
      });
  }

  function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
      return function (source, subscriber) {
          var hasState = hasSeed;
          var state = seed;
          var index = 0;
          source.subscribe(new OperatorSubscriber(subscriber, function (value) {
              var i = index++;
              state = hasState
                  ?
                      accumulator(state, value, i)
                  :
                      ((hasState = true), value);
              emitOnNext && subscriber.next(state);
          }, emitBeforeComplete &&
              (function () {
                  hasState && subscriber.next(state);
                  subscriber.complete();
              })));
      };
  }

  function concatMap(project, resultSelector) {
      return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
  }

  function scan(accumulator, seed) {
      return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
  }

  function skipWhile(predicate) {
      return operate(function (source, subscriber) {
          var taking = false;
          var index = 0;
          source.subscribe(new OperatorSubscriber(subscriber, function (value) { return (taking || (taking = !predicate(value, index++))) && subscriber.next(value); }));
      });
  }

  function switchMap(project, resultSelector) {
      return operate(function (source, subscriber) {
          var innerSubscriber = null;
          var index = 0;
          var isComplete = false;
          var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
          source.subscribe(new OperatorSubscriber(subscriber, function (value) {
              innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
              var innerIndex = 0;
              var outerIndex = index++;
              innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = new OperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                  innerSubscriber = null;
                  checkComplete();
              })));
          }, function () {
              isComplete = true;
              checkComplete();
          }));
      });
  }

  function tap(observerOrNext, error, complete) {
      var tapObserver = isFunction(observerOrNext) || error || complete
          ?
              { next: observerOrNext, error: error, complete: complete }
          : observerOrNext;
      return tapObserver
          ? operate(function (source, subscriber) {
              var _a;
              (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
              var isUnsub = true;
              source.subscribe(new OperatorSubscriber(subscriber, function (value) {
                  var _a;
                  (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                  subscriber.next(value);
              }, function () {
                  var _a;
                  isUnsub = false;
                  (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                  subscriber.complete();
              }, function (err) {
                  var _a;
                  isUnsub = false;
                  (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                  subscriber.error(err);
              }, function () {
                  var _a, _b;
                  if (isUnsub) {
                      (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                  }
                  (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
              }));
          })
          :
              identity;
  }

  /*
   * A pure JavaScript implementation of RIPEMD128 using Uint8Array as input/output.
   * By Feng Dihai <fengdh@gmail.com>, 2015/07/09
   *
   * Based on coiscir/jsdigest (https://github.com/coiscir/jsdigest/blob/master/src/hash/ripemd128.js)
   *
   * ripemd128.js is free software released under terms of the MIT License.
   * You can get a copy on http://opensource.org/licenses/MIT.
   *
   *
   * RIPEMD-128 (c) 1996 Hans Dobbertin, Antoon Bosselaers, and Bart Preneel
   */
  // convert array of number to Uint32Array
  function asUint32Array(arr) {
    return new Uint32Array(arr);
  } // concat 2 typed array


  function concat(a, b) {
    var c = new a.constructor(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
  } // swap high and low bits of a 32-bit int.


  function rotl(x, n) {
    return x >>> 32 - n | x << n;
  }

  var S = [[11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8], // round 1
  [7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12], // round 2
  [11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5], // round 3
  [11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12], // round 4
  [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6], // parallel round 1
  [9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11], // parallel round 2
  [9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5], // parallel round 3
  [15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8] // parallel round 4
  ].map(asUint32Array),
      X = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // round 1
  [7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8], // round 2
  [3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12], // round 3
  [1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2], // round 4
  [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12], // parallel round 1
  [6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2], // parallel round 2
  [15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13], // parallel round 3
  [8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14] // parallel round 4
  ].map(asUint32Array),
      K = asUint32Array([0x00000000, // FF
  0x5a827999, // GG
  0x6ed9eba1, // HH
  0x8f1bbcdc, // II
  0x50a28be6, // III
  0x5c4dd124, // HHH
  0x6d703ef3, // GGG
  0x00000000 // FFF
  ]),
      F = [function (x, y, z) {
    return x ^ y ^ z;
  }, function (x, y, z) {
    return x & y | ~x & z;
  }, function (x, y, z) {
    return (x | ~y) ^ z;
  }, function (x, y, z) {
    return x & z | y & ~z;
  }];
  function ripemd128(data) {
    var aa,
        bb,
        cc,
        dd,
        aaa,
        bbb,
        ccc,
        ddd,
        i,
        l,
        r,
        rr,
        t,
        tmp,
        x,
        hash = new Uint32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]),
        bytes = data.length;
    var padding = new Uint8Array((bytes % 64 < 56 ? 56 : 120) - bytes % 64); // @ts-ignore

    padding[0] = [0x80];
    data = new Uint32Array(concat(data, padding).buffer); // ending with check bits (= little endian 64-bit int, 8 * data.length)

    bytes = bytes << 3;
    x = concat(data, [bytes, bytes >> 31 >> 1]); // update hash

    for (i = 0, t = 0, l = x.length; i < l; i += 16, t = 0) {
      aa = aaa = hash[0];
      bb = bbb = hash[1];
      cc = ccc = hash[2];
      dd = ddd = hash[3];

      for (; t < 64; ++t) {
        r = ~~(t / 16);
        aa = rotl(aa + F[r](bb, cc, dd) + x[i + X[r][t % 16]] + K[r], S[r][t % 16]);
        tmp = dd;
        dd = cc;
        cc = bb;
        bb = aa;
        aa = tmp;
      }

      for (; t < 128; ++t) {
        r = ~~(t / 16);
        rr = ~~((63 - t % 64) / 16);
        aaa = rotl(aaa + F[rr](bbb, ccc, ddd) + x[i + X[r][t % 16]] + K[r], S[r][t % 16]);
        tmp = ddd;
        ddd = ccc;
        ccc = bbb;
        bbb = aaa;
        aaa = tmp;
      }

      ddd = hash[1] + cc + ddd;
      hash[1] = hash[2] + dd + aaa;
      hash[2] = hash[3] + aa + bbb;
      hash[3] = hash[0] + bb + ccc;
      hash[0] = ddd;
    }

    return new Uint8Array(hash.buffer);
  }

  var getExtension = function getExtension(filename, defaultExt) {
    return filename ? /(?:\.([^.]+))?$/.exec(filename)[1] : defaultExt;
  };
  var parseXml = function parseXml(str) {
    return new DOMParser().parseFromString(str, 'text/xml');
  };
  /*
     * Decrypt encrypted data block of keyword index (attrs.Encrypted = "2").
     * @see https://github.com/zhansliu/writemdict/blob/master/fileformat.md#keyword-index-encryption
     * @param buf an ArrayBuffer containing source data
     * @param key an ArrayBuffer holding decryption key, which will be supplied to ripemd128() before decryption
     * @return an ArrayBuffer carrying decrypted data, occupying the same memory space of source buffer
     */

  function decrypt(buf, key) {
    key = ripemd128(key);

    var _byte,
        keylen = key.length,
        prev = 0x36,
        i = 0,
        len = buf.length;

    for (; i < len; i++) {
      _byte = buf[i];
      _byte = _byte >> 4 | _byte << 4;
      _byte = _byte ^ prev ^ i & 0xFF ^ key[i % keylen];
      prev = buf[i];
      buf[i] = _byte;
    }

    return buf;
  }
  function conseq() {
    return arguments.length <= 0 ? undefined : arguments[0];
  }
  /**
   * Test if a value of dictionary attribute is true or not.
   */

  function isTrue(v) {
    v = ((v || false) + '').toLowerCase();
    return v === 'yes' || v === 'true';
  }
  /**
   * Match the first element in list with given offset.
   */

  function matchOffset(list, offset) {
    return list.some(function (el) {
      return el.offset === offset ? list = [el] : false;
    }) ? list : [];
  }

  var sliceFile = function sliceFile(file, offset, len) {
    var file$ = new BehaviorSubject(null);
    file$.subscribe(function () {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file.slice(offset, len));

      reader.onload = function () {
        if (reader.result) {
          file$.next(reader.result);
        }
      };

      reader.onloadend = function () {
        file$.complete();
      };

      reader.onerror = function (err) {
        file$.error(err);
      };

      reader.onabort = function () {
        file$.error("遇到意外退出");
      };
    });
    return file$.pipe(skipWhile(function (buffer) {
      return buffer === null || buffer === undefined || buffer.byteLength <= 0;
    }));
  };

  var _excluded$g = ["file", "next", "offset"];
  var slice = function slice(pos, len) {
    return function (source$) {
      return new Observable(function (observer) {
        return source$.pipe(mergeMap(function (_ref) {
          var file = _ref.file,
              _ref$next = _ref.next,
              next = _ref$next === void 0 ? 0 : _ref$next,
              _ref$offset = _ref.offset,
              offset = _ref$offset === void 0 ? 0 : _ref$offset,
              rest = _objectWithoutProperties(_ref, _excluded$g);

          var start = typeof pos !== 'undefined' ? pos : offset;
          var size = len ? len + next : next;
          var subject$ = sliceFile(file, start, start + size);
          return subject$.pipe(map(function (buffer) {
            return Object.assign(_objectSpread2({
              file: file,
              next: next,
              offset: offset
            }, rest), {
              buffer: buffer,
              offset: start + size
            });
          }));
        })).subscribe({
          next: function next(res) {
            observer.next(res);
          }
        });
      });
    };
  };

  /*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  /* eslint-disable space-unary-ops */

  /* Public constants ==========================================================*/
  /* ===========================================================================*/


  //const Z_FILTERED          = 1;
  //const Z_HUFFMAN_ONLY      = 2;
  //const Z_RLE               = 3;
  const Z_FIXED$1               = 4;
  //const Z_DEFAULT_STRATEGY  = 0;

  /* Possible values of the data_type field (though see inflate()) */
  const Z_BINARY              = 0;
  const Z_TEXT                = 1;
  //const Z_ASCII             = 1; // = Z_TEXT
  const Z_UNKNOWN$1             = 2;

  /*============================================================================*/


  function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

  // From zutil.h

  const STORED_BLOCK = 0;
  const STATIC_TREES = 1;
  const DYN_TREES    = 2;
  /* The three kinds of block type */

  const MIN_MATCH$1    = 3;
  const MAX_MATCH$1    = 258;
  /* The minimum and maximum match lengths */

  // From deflate.h
  /* ===========================================================================
   * Internal compression state.
   */

  const LENGTH_CODES$1  = 29;
  /* number of length codes, not counting the special END_BLOCK code */

  const LITERALS$1      = 256;
  /* number of literal bytes 0..255 */

  const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
  /* number of Literal or Length codes, including the END_BLOCK code */

  const D_CODES$1       = 30;
  /* number of distance codes */

  const BL_CODES$1      = 19;
  /* number of codes used to transfer the bit lengths */

  const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
  /* maximum heap size */

  const MAX_BITS$1      = 15;
  /* All codes must not exceed MAX_BITS bits */

  const Buf_size      = 16;
  /* size of bit buffer in bi_buf */


  /* ===========================================================================
   * Constants
   */

  const MAX_BL_BITS = 7;
  /* Bit length codes must not exceed MAX_BL_BITS bits */

  const END_BLOCK   = 256;
  /* end of block literal code */

  const REP_3_6     = 16;
  /* repeat previous bit length 3-6 times (2 bits of repeat count) */

  const REPZ_3_10   = 17;
  /* repeat a zero length 3-10 times  (3 bits of repeat count) */

  const REPZ_11_138 = 18;
  /* repeat a zero length 11-138 times  (7 bits of repeat count) */

  /* eslint-disable comma-spacing,array-bracket-spacing */
  const extra_lbits =   /* extra bits for each length code */
    new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

  const extra_dbits =   /* extra bits for each distance code */
    new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

  const extra_blbits =  /* extra bits for each bit length code */
    new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

  const bl_order =
    new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
  /* eslint-enable comma-spacing,array-bracket-spacing */

  /* The lengths of the bit length codes are sent in order of decreasing
   * probability, to avoid transmitting the lengths for unused bit length codes.
   */

  /* ===========================================================================
   * Local data. These are initialized only once.
   */

  // We pre-fill arrays with 0 to avoid uninitialized gaps

  const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

  // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
  const static_ltree  = new Array((L_CODES$1 + 2) * 2);
  zero$1(static_ltree);
  /* The static literal tree. Since the bit lengths are imposed, there is no
   * need for the L_CODES extra codes used during heap construction. However
   * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
   * below).
   */

  const static_dtree  = new Array(D_CODES$1 * 2);
  zero$1(static_dtree);
  /* The static distance tree. (Actually a trivial tree since all codes use
   * 5 bits.)
   */

  const _dist_code    = new Array(DIST_CODE_LEN);
  zero$1(_dist_code);
  /* Distance codes. The first 256 values correspond to the distances
   * 3 .. 258, the last 256 values correspond to the top 8 bits of
   * the 15 bit distances.
   */

  const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
  zero$1(_length_code);
  /* length code for each normalized match length (0 == MIN_MATCH) */

  const base_length   = new Array(LENGTH_CODES$1);
  zero$1(base_length);
  /* First normalized length for each code (0 = MIN_MATCH) */

  const base_dist     = new Array(D_CODES$1);
  zero$1(base_dist);
  /* First normalized distance for each code (0 = distance of 1) */


  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

    this.static_tree  = static_tree;  /* static tree or NULL */
    this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
    this.extra_base   = extra_base;   /* base index for extra_bits */
    this.elems        = elems;        /* max number of elements in the tree */
    this.max_length   = max_length;   /* max bit length for the codes */

    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree    = static_tree && static_tree.length;
  }


  let static_l_desc;
  let static_d_desc;
  let static_bl_desc;


  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;     /* the dynamic tree */
    this.max_code = 0;            /* largest code with non zero frequency */
    this.stat_desc = stat_desc;   /* the corresponding static tree */
  }



  const d_code = (dist) => {

    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  };


  /* ===========================================================================
   * Output a short LSB first on the stream.
   * IN assertion: there is enough room in pendingBuf.
   */
  const put_short = (s, w) => {
  //    put_byte(s, (uch)((w) & 0xff));
  //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = (w) & 0xff;
    s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
  };


  /* ===========================================================================
   * Send a value on a given number of bits.
   * IN assertion: length <= 16 and value fits in length bits.
   */
  const send_bits = (s, value, length) => {

    if (s.bi_valid > (Buf_size - length)) {
      s.bi_buf |= (value << s.bi_valid) & 0xffff;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> (Buf_size - s.bi_valid);
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= (value << s.bi_valid) & 0xffff;
      s.bi_valid += length;
    }
  };


  const send_code = (s, c, tree) => {

    send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
  };


  /* ===========================================================================
   * Reverse the first len bits of a code, using straightforward code (a faster
   * method would use a table)
   * IN assertion: 1 <= len <= 15
   */
  const bi_reverse = (code, len) => {

    let res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  };


  /* ===========================================================================
   * Flush the bit buffer, keeping at most 7 bits in it.
   */
  const bi_flush = (s) => {

    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;

    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 0xff;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  };


  /* ===========================================================================
   * Compute the optimal bit lengths for a tree and update the total bit length
   * for the current block.
   * IN assertion: the fields freq and dad are set, heap[heap_max] and
   *    above are the tree nodes sorted by increasing frequency.
   * OUT assertions: the field len is set to the optimal bit length, the
   *     array bl_count contains the frequencies for each bit length.
   *     The length opt_len is updated; static_len is also updated if stree is
   *     not null.
   */
  const gen_bitlen = (s, desc) =>
  //    deflate_state *s;
  //    tree_desc *desc;    /* the tree descriptor */
  {
    const tree            = desc.dyn_tree;
    const max_code        = desc.max_code;
    const stree           = desc.stat_desc.static_tree;
    const has_stree       = desc.stat_desc.has_stree;
    const extra           = desc.stat_desc.extra_bits;
    const base            = desc.stat_desc.extra_base;
    const max_length      = desc.stat_desc.max_length;
    let h;              /* heap index */
    let n, m;           /* iterate over the tree elements */
    let bits;           /* bit length */
    let xbits;          /* extra bits */
    let f;              /* frequency */
    let overflow = 0;   /* number of elements with bit length too large */

    for (bits = 0; bits <= MAX_BITS$1; bits++) {
      s.bl_count[bits] = 0;
    }

    /* In a first pass, compute the optimal bit lengths (which may
     * overflow in the case of the bit length tree).
     */
    tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

    for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1]/*.Len*/ = bits;
      /* We overwrite tree[n].Dad which is no longer needed */

      if (n > max_code) { continue; } /* not a leaf node */

      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base) {
        xbits = extra[n - base];
      }
      f = tree[n * 2]/*.Freq*/;
      s.opt_len += f * (bits + xbits);
      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
      }
    }
    if (overflow === 0) { return; }

    // Trace((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */

    /* Find the first bit length which could increase: */
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0) { bits--; }
      s.bl_count[bits]--;      /* move one leaf down the tree */
      s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
      s.bl_count[max_length]--;
      /* The brother of the overflow item also moves one step up,
       * but this does not affect bl_count[max_length]
       */
      overflow -= 2;
    } while (overflow > 0);

    /* Now recompute all bit lengths, scanning in increasing frequency.
     * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
     * lengths instead of fixing only the wrong ones. This idea is taken
     * from 'ar' written by Haruhiko Okumura.)
     */
    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > max_code) { continue; }
        if (tree[m * 2 + 1]/*.Len*/ !== bits) {
          // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
          s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
          tree[m * 2 + 1]/*.Len*/ = bits;
        }
        n--;
      }
    }
  };


  /* ===========================================================================
   * Generate the codes for a given tree and bit counts (which need not be
   * optimal).
   * IN assertion: the array bl_count contains the bit length statistics for
   * the given tree and the field len is set for all tree elements.
   * OUT assertion: the field code is set for all tree elements of non
   *     zero code length.
   */
  const gen_codes = (tree, max_code, bl_count) =>
  //    ct_data *tree;             /* the tree to decorate */
  //    int max_code;              /* largest code with non zero frequency */
  //    ushf *bl_count;            /* number of codes at each bit length */
  {
    const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
    let code = 0;              /* running code value */
    let bits;                  /* bit index */
    let n;                     /* code index */

    /* The distribution counts are first used to generate the code values
     * without bit reversal.
     */
    for (bits = 1; bits <= MAX_BITS$1; bits++) {
      next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
     * must be all ones.
     */
    //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

    for (n = 0;  n <= max_code; n++) {
      let len = tree[n * 2 + 1]/*.Len*/;
      if (len === 0) { continue; }
      /* Now reverse the bits */
      tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

      //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
      //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
  };


  /* ===========================================================================
   * Initialize the various 'constant' tables.
   */
  const tr_static_init = () => {

    let n;        /* iterates over tree elements */
    let bits;     /* bit counter */
    let length;   /* length value */
    let code;     /* code value */
    let dist;     /* distance index */
    const bl_count = new Array(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */

    // do check in _tr_init()
    //if (static_init_done) return;

    /* For some embedded targets, global variables are not initialized: */
  /*#ifdef NO_INIT_GLOBAL_POINTERS
    static_l_desc.static_tree = static_ltree;
    static_l_desc.extra_bits = extra_lbits;
    static_d_desc.static_tree = static_dtree;
    static_d_desc.extra_bits = extra_dbits;
    static_bl_desc.extra_bits = extra_blbits;
  #endif*/

    /* Initialize the mapping length (0..255) -> length code (0..28) */
    length = 0;
    for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
      base_length[code] = length;
      for (n = 0; n < (1 << extra_lbits[code]); n++) {
        _length_code[length++] = code;
      }
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
     * in two different ways: code 284 + 5 bits or code 285, so we
     * overwrite length_code[255] to use the best encoding:
     */
    _length_code[length - 1] = code;

    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
    dist = 0;
    for (code = 0; code < 16; code++) {
      base_dist[code] = dist;
      for (n = 0; n < (1 << extra_dbits[code]); n++) {
        _dist_code[dist++] = code;
      }
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */
    for (; code < D_CODES$1; code++) {
      base_dist[code] = dist << 7;
      for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
        _dist_code[256 + dist++] = code;
      }
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");

    /* Construct the codes of the static literal tree */
    for (bits = 0; bits <= MAX_BITS$1; bits++) {
      bl_count[bits] = 0;
    }

    n = 0;
    while (n <= 143) {
      static_ltree[n * 2 + 1]/*.Len*/ = 8;
      n++;
      bl_count[8]++;
    }
    while (n <= 255) {
      static_ltree[n * 2 + 1]/*.Len*/ = 9;
      n++;
      bl_count[9]++;
    }
    while (n <= 279) {
      static_ltree[n * 2 + 1]/*.Len*/ = 7;
      n++;
      bl_count[7]++;
    }
    while (n <= 287) {
      static_ltree[n * 2 + 1]/*.Len*/ = 8;
      n++;
      bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
     * tree construction to get a canonical Huffman tree (longest code
     * all ones)
     */
    gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

    /* The static distance tree is trivial: */
    for (n = 0; n < D_CODES$1; n++) {
      static_dtree[n * 2 + 1]/*.Len*/ = 5;
      static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
    }

    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

    //static_init_done = true;
  };


  /* ===========================================================================
   * Initialize a new block.
   */
  const init_block = (s) => {

    let n; /* iterates over tree elements */

    /* Initialize the trees. */
    for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
    for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
    for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

    s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  };


  /* ===========================================================================
   * Flush the bit buffer and align the output on a byte boundary
   */
  const bi_windup = (s) =>
  {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      //put_byte(s, (Byte)s->bi_buf);
      s.pending_buf[s.pending++] = s.bi_buf;
    }
    s.bi_buf = 0;
    s.bi_valid = 0;
  };

  /* ===========================================================================
   * Copy a stored block, storing first the length and its
   * one's complement if requested.
   */
  const copy_block = (s, buf, len, header) =>
  //DeflateState *s;
  //charf    *buf;    /* the input data */
  //unsigned len;     /* its length */
  //int      header;  /* true if block header must be written */
  {
    bi_windup(s);        /* align on byte boundary */

    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    }
  //  while (len--) {
  //    put_byte(s, *buf++);
  //  }
    s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);
    s.pending += len;
  };

  /* ===========================================================================
   * Compares to subtrees, using the tree depth as tie breaker when
   * the subtrees have equal frequency. This minimizes the worst case length.
   */
  const smaller = (tree, n, m, depth) => {

    const _n2 = n * 2;
    const _m2 = m * 2;
    return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
           (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
  };

  /* ===========================================================================
   * Restore the heap property by moving down the tree starting at node k,
   * exchanging a node with the smallest of its two sons if necessary, stopping
   * when the heap property is re-established (each father smaller than its
   * two sons).
   */
  const pqdownheap = (s, tree, k) =>
  //    deflate_state *s;
  //    ct_data *tree;  /* the tree to restore */
  //    int k;               /* node to move down */
  {
    const v = s.heap[k];
    let j = k << 1;  /* left son of k */
    while (j <= s.heap_len) {
      /* Set j to the smallest of the two sons: */
      if (j < s.heap_len &&
        smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      /* Exit if v is smaller than both sons */
      if (smaller(tree, v, s.heap[j], s.depth)) { break; }

      /* Exchange v with the smallest son */
      s.heap[k] = s.heap[j];
      k = j;

      /* And continue down the tree, setting j to the left son of k */
      j <<= 1;
    }
    s.heap[k] = v;
  };


  // inlined manually
  // const SMALLEST = 1;

  /* ===========================================================================
   * Send the block data compressed using the given Huffman trees
   */
  const compress_block = (s, ltree, dtree) =>
  //    deflate_state *s;
  //    const ct_data *ltree; /* literal tree */
  //    const ct_data *dtree; /* distance tree */
  {
    let dist;           /* distance of matched string */
    let lc;             /* match length or unmatched char (if dist == 0) */
    let lx = 0;         /* running index in l_buf */
    let code;           /* the code to send */
    let extra;          /* number of extra bits to send */

    if (s.last_lit !== 0) {
      do {
        dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
        lc = s.pending_buf[s.l_buf + lx];
        lx++;

        if (dist === 0) {
          send_code(s, lc, ltree); /* send a literal byte */
          //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
        } else {
          /* Here, lc is the match length - MIN_MATCH */
          code = _length_code[lc];
          send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
          extra = extra_lbits[code];
          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);       /* send the extra length bits */
          }
          dist--; /* dist is now the match distance - 1 */
          code = d_code(dist);
          //Assert (code < D_CODES, "bad d_code");

          send_code(s, code, dtree);       /* send the distance code */
          extra = extra_dbits[code];
          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);   /* send the extra distance bits */
          }
        } /* literal or match pair ? */

        /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
        //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
        //       "pendingBuf overflow");

      } while (lx < s.last_lit);
    }

    send_code(s, END_BLOCK, ltree);
  };


  /* ===========================================================================
   * Construct one Huffman tree and assigns the code bit strings and lengths.
   * Update the total bit length for the current block.
   * IN assertion: the field freq is set for all tree elements.
   * OUT assertions: the fields len and code are set to the optimal bit length
   *     and corresponding code. The length opt_len is updated; static_len is
   *     also updated if stree is not null. The field max_code is set.
   */
  const build_tree = (s, desc) =>
  //    deflate_state *s;
  //    tree_desc *desc; /* the tree descriptor */
  {
    const tree     = desc.dyn_tree;
    const stree    = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems    = desc.stat_desc.elems;
    let n, m;          /* iterate over heap elements */
    let max_code = -1; /* largest code with non zero frequency */
    let node;          /* new node being created */

    /* Construct the initial heap, with least frequent element in
     * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
     * heap[0] is not used.
     */
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE$1;

    for (n = 0; n < elems; n++) {
      if (tree[n * 2]/*.Freq*/ !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;

      } else {
        tree[n * 2 + 1]/*.Len*/ = 0;
      }
    }

    /* The pkzip format requires that at least one distance code exists,
     * and that at least one bit should be sent even if there is only one
     * possible code. So to avoid special checks later on we force at least
     * two codes of non zero frequency.
     */
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
      tree[node * 2]/*.Freq*/ = 1;
      s.depth[node] = 0;
      s.opt_len--;

      if (has_stree) {
        s.static_len -= stree[node * 2 + 1]/*.Len*/;
      }
      /* node is 0 or 1 so it does not have extra bits */
    }
    desc.max_code = max_code;

    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
     * establish sub-heaps of increasing lengths:
     */
    for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

    /* Construct the Huffman tree by repeatedly combining the least two
     * frequent nodes.
     */
    node = elems;              /* next internal node of the tree */
    do {
      //pqremove(s, tree, n);  /* n = node of least frequency */
      /*** pqremove ***/
      n = s.heap[1/*SMALLEST*/];
      s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
      pqdownheap(s, tree, 1/*SMALLEST*/);
      /***/

      m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

      s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
      s.heap[--s.heap_max] = m;

      /* Create a new node father of n and m */
      tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

      /* and insert the new node in the heap */
      s.heap[1/*SMALLEST*/] = node++;
      pqdownheap(s, tree, 1/*SMALLEST*/);

    } while (s.heap_len >= 2);

    s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

    /* At this point, the fields freq and dad are set. We can now
     * generate the bit lengths.
     */
    gen_bitlen(s, desc);

    /* The field len is now set, we can generate the bit codes */
    gen_codes(tree, max_code, s.bl_count);
  };


  /* ===========================================================================
   * Scan a literal or distance tree to determine the frequencies of the codes
   * in the bit length tree.
   */
  const scan_tree = (s, tree, max_code) =>
  //    deflate_state *s;
  //    ct_data *tree;   /* the tree to be scanned */
  //    int max_code;    /* and its largest code of non zero frequency */
  {
    let n;                     /* iterates over all tree elements */
    let prevlen = -1;          /* last emitted length */
    let curlen;                /* length of current code */

    let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

    let count = 0;             /* repeat count of the current code */
    let max_count = 7;         /* max repeat count */
    let min_count = 4;         /* min repeat count */

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

      if (++count < max_count && curlen === nextlen) {
        continue;

      } else if (count < min_count) {
        s.bl_tree[curlen * 2]/*.Freq*/ += count;

      } else if (curlen !== 0) {

        if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
        s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

      } else {
        s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
      }

      count = 0;
      prevlen = curlen;

      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;

      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;

      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };


  /* ===========================================================================
   * Send a literal or distance tree in compressed form, using the codes in
   * bl_tree.
   */
  const send_tree = (s, tree, max_code) =>
  //    deflate_state *s;
  //    ct_data *tree; /* the tree to be scanned */
  //    int max_code;       /* and its largest code of non zero frequency */
  {
    let n;                     /* iterates over all tree elements */
    let prevlen = -1;          /* last emitted length */
    let curlen;                /* length of current code */

    let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

    let count = 0;             /* repeat count of the current code */
    let max_count = 7;         /* max repeat count */
    let min_count = 4;         /* min repeat count */

    /* tree[max_code+1].Len = -1; */  /* guard already set */
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

      if (++count < max_count && curlen === nextlen) {
        continue;

      } else if (count < min_count) {
        do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        }
        //Assert(count >= 3 && count <= 6, " 3_6?");
        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);

      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);

      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }

      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;

      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;

      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };


  /* ===========================================================================
   * Construct the Huffman tree for the bit lengths and return the index in
   * bl_order of the last bit length code to send.
   */
  const build_bl_tree = (s) => {

    let max_blindex;  /* index of last bit length code of non zero freq */

    /* Determine the bit length frequencies for literal and distance trees */
    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

    /* Build the bit length tree: */
    build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
     * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
     */

    /* Determine the number of bit length codes to send. The pkzip format
     * requires that at least 4 bit length codes be sent. (appnote.txt says
     * 3 but the actual value used is 4.)
     */
    for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
        break;
      }
    }
    /* Update opt_len to include the bit length tree and counts */
    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));

    return max_blindex;
  };


  /* ===========================================================================
   * Send the header for a block using dynamic Huffman trees: the counts, the
   * lengths of the bit length codes, the literal tree and the distance tree.
   * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
   */
  const send_all_trees = (s, lcodes, dcodes, blcodes) =>
  //    deflate_state *s;
  //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
  {
    let rank;                    /* index in bl_order */

    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
    send_bits(s, dcodes - 1,   5);
    send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
    for (rank = 0; rank < blcodes; rank++) {
      //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
    }
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
    //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
  };


  /* ===========================================================================
   * Check if the data type is TEXT or BINARY, using the following algorithm:
   * - TEXT if the two conditions below are satisfied:
   *    a) There are no non-portable control characters belonging to the
   *       "black list" (0..6, 14..25, 28..31).
   *    b) There is at least one printable character belonging to the
   *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
   * - BINARY otherwise.
   * - The following partially-portable control characters form a
   *   "gray list" that is ignored in this detection algorithm:
   *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
   * IN assertion: the fields Freq of dyn_ltree are set.
   */
  const detect_data_type = (s) => {
    /* black_mask is the bit mask of black-listed bytes
     * set bits 0..6, 14..25, and 28..31
     * 0xf3ffc07f = binary 11110011111111111100000001111111
     */
    let black_mask = 0xf3ffc07f;
    let n;

    /* Check for non-textual ("black-listed") bytes. */
    for (n = 0; n <= 31; n++, black_mask >>>= 1) {
      if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
        return Z_BINARY;
      }
    }

    /* Check for textual ("white-listed") bytes. */
    if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
        s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
    for (n = 32; n < LITERALS$1; n++) {
      if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
        return Z_TEXT;
      }
    }

    /* There are no "black-listed" or "white-listed" bytes:
     * this stream either is empty or has tolerated ("gray-listed") bytes only.
     */
    return Z_BINARY;
  };


  let static_init_done = false;

  /* ===========================================================================
   * Initialize the tree data structures for a new zlib stream.
   */
  const _tr_init$1 = (s) =>
  {

    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }

    s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

    s.bi_buf = 0;
    s.bi_valid = 0;

    /* Initialize the first block of the first file: */
    init_block(s);
  };


  /* ===========================================================================
   * Send a stored block
   */
  const _tr_stored_block$1 = (s, buf, stored_len, last) =>
  //DeflateState *s;
  //charf *buf;       /* input block */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
    copy_block(s, buf, stored_len, true); /* with header */
  };


  /* ===========================================================================
   * Send one empty static block to give enough lookahead for inflate.
   * This takes 10 bits, of which 7 may remain in the bit buffer.
   */
  const _tr_align$1 = (s) => {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  };


  /* ===========================================================================
   * Determine the best encoding for the current block: dynamic trees, static
   * trees or store, and output the encoded block to the zip file.
   */
  const _tr_flush_block$1 = (s, buf, stored_len, last) =>
  //DeflateState *s;
  //charf *buf;       /* input block, or NULL if too old */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
    let max_blindex = 0;        /* index of last bit length code of non zero freq */

    /* Build the Huffman trees unless a stored block is forced */
    if (s.level > 0) {

      /* Check if the file is binary or text */
      if (s.strm.data_type === Z_UNKNOWN$1) {
        s.strm.data_type = detect_data_type(s);
      }

      /* Construct the literal and distance trees */
      build_tree(s, s.l_desc);
      // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));

      build_tree(s, s.d_desc);
      // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));
      /* At this point, opt_len and static_len are the total bit lengths of
       * the compressed block data, excluding the tree representations.
       */

      /* Build the bit length tree for the above two trees, and get the index
       * in bl_order of the last bit length code to send.
       */
      max_blindex = build_bl_tree(s);

      /* Determine the best encoding. Compute the block lengths in bytes. */
      opt_lenb = (s.opt_len + 3 + 7) >>> 3;
      static_lenb = (s.static_len + 3 + 7) >>> 3;

      // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
      //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
      //        s->last_lit));

      if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

    } else {
      // Assert(buf != (char*)0, "lost buf");
      opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
    }

    if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
      /* 4: two words for the lengths */

      /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
       * Otherwise we can't have processed more than WSIZE input bytes since
       * the last block flush, because compression would have been
       * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
       * transform a block into a stored block.
       */
      _tr_stored_block$1(s, buf, stored_len, last);

    } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);

    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
     * and uLong implemented on 32 bits.
     */
    init_block(s);

    if (last) {
      bi_windup(s);
    }
    // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
    //       s->compressed_len-7*last));
  };

  /* ===========================================================================
   * Save the match info and tally the frequency counts. Return true if
   * the current block must be flushed.
   */
  const _tr_tally$1 = (s, dist, lc) =>
  //    deflate_state *s;
  //    unsigned dist;  /* distance of matched string */
  //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
  {
    //let out_length, in_length, dcode;

    s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

    s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
    s.last_lit++;

    if (dist === 0) {
      /* lc is the unmatched char */
      s.dyn_ltree[lc * 2]/*.Freq*/++;
    } else {
      s.matches++;
      /* Here, lc is the match length - MIN_MATCH */
      dist--;             /* dist = match distance - 1 */
      //Assert((ush)dist < (ush)MAX_DIST(s) &&
      //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
      //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

      s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
      s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
    }

  // (!) This block is disabled in zlib defaults,
  // don't enable it for binary compatibility

  //#ifdef TRUNCATE_BLOCK
  //  /* Try to guess if it is profitable to stop the current block here */
  //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
  //    /* Compute an upper bound for the compressed length */
  //    out_length = s.last_lit*8;
  //    in_length = s.strstart - s.block_start;
  //
  //    for (dcode = 0; dcode < D_CODES; dcode++) {
  //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
  //    }
  //    out_length >>>= 3;
  //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
  //    //       s->last_lit, in_length, out_length,
  //    //       100L - out_length*100L/in_length));
  //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
  //      return true;
  //    }
  //  }
  //#endif

    return (s.last_lit === s.lit_bufsize - 1);
    /* We avoid equality with lit_bufsize because of wraparound at 64K
     * on 16 bit machines and because stored blocks are restricted to
     * 64K-1 bytes.
     */
  };

  var _tr_init_1  = _tr_init$1;
  var _tr_stored_block_1 = _tr_stored_block$1;
  var _tr_flush_block_1  = _tr_flush_block$1;
  var _tr_tally_1 = _tr_tally$1;
  var _tr_align_1 = _tr_align$1;

  var trees = {
  	_tr_init: _tr_init_1,
  	_tr_stored_block: _tr_stored_block_1,
  	_tr_flush_block: _tr_flush_block_1,
  	_tr_tally: _tr_tally_1,
  	_tr_align: _tr_align_1
  };

  // Note: adler32 takes 12% for level 0 and 2% for level 6.
  // It isn't worth it to make additional optimizations as in original.
  // Small size is preferable.

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  const adler32 = (adler, buf, len, pos) => {
    let s1 = (adler & 0xffff) |0,
        s2 = ((adler >>> 16) & 0xffff) |0,
        n = 0;

    while (len !== 0) {
      // Set limit ~ twice less than 5552, to keep
      // s2 in 31-bits, because we force signed ints.
      // in other case %= will fail.
      n = len > 2000 ? 2000 : len;
      len -= n;

      do {
        s1 = (s1 + buf[pos++]) |0;
        s2 = (s2 + s1) |0;
      } while (--n);

      s1 %= 65521;
      s2 %= 65521;
    }

    return (s1 | (s2 << 16)) |0;
  };


  var adler32_1 = adler32;

  // Note: we can't get significant speed boost here.
  // So write code to minimize size - no pregenerated tables
  // and array tools dependencies.

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  // Use ordinary array, since untyped makes no boost here
  const makeTable = () => {
    let c, table = [];

    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      table[n] = c;
    }

    return table;
  };

  // Create table on load. Just 255 signed longs. Not a problem.
  const crcTable = new Uint32Array(makeTable());


  const crc32 = (crc, buf, len, pos) => {
    const t = crcTable;
    const end = pos + len;

    crc ^= -1;

    for (let i = pos; i < end; i++) {
      crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
  };


  var crc32_1 = crc32;

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var messages = {
    2:      'need dictionary',     /* Z_NEED_DICT       2  */
    1:      'stream end',          /* Z_STREAM_END      1  */
    0:      '',                    /* Z_OK              0  */
    '-1':   'file error',          /* Z_ERRNO         (-1) */
    '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
    '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
    '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
    '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
    '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var constants$2 = {

    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH:         0,
    Z_PARTIAL_FLUSH:    1,
    Z_SYNC_FLUSH:       2,
    Z_FULL_FLUSH:       3,
    Z_FINISH:           4,
    Z_BLOCK:            5,
    Z_TREES:            6,

    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK:               0,
    Z_STREAM_END:       1,
    Z_NEED_DICT:        2,
    Z_ERRNO:           -1,
    Z_STREAM_ERROR:    -2,
    Z_DATA_ERROR:      -3,
    Z_MEM_ERROR:       -4,
    Z_BUF_ERROR:       -5,
    //Z_VERSION_ERROR: -6,

    /* compression levels */
    Z_NO_COMPRESSION:         0,
    Z_BEST_SPEED:             1,
    Z_BEST_COMPRESSION:       9,
    Z_DEFAULT_COMPRESSION:   -1,


    Z_FILTERED:               1,
    Z_HUFFMAN_ONLY:           2,
    Z_RLE:                    3,
    Z_FIXED:                  4,
    Z_DEFAULT_STRATEGY:       0,

    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY:                 0,
    Z_TEXT:                   1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN:                2,

    /* The deflate compression method */
    Z_DEFLATED:               8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




  /* Public constants ==========================================================*/
  /* ===========================================================================*/

  const {
    Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
    Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
    Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
    Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
    Z_UNKNOWN,
    Z_DEFLATED: Z_DEFLATED$2
  } = constants$2;

  /*============================================================================*/


  const MAX_MEM_LEVEL = 9;
  /* Maximum value for memLevel in deflateInit2 */
  const MAX_WBITS$1 = 15;
  /* 32K LZ77 window */
  const DEF_MEM_LEVEL = 8;


  const LENGTH_CODES  = 29;
  /* number of length codes, not counting the special END_BLOCK code */
  const LITERALS      = 256;
  /* number of literal bytes 0..255 */
  const L_CODES       = LITERALS + 1 + LENGTH_CODES;
  /* number of Literal or Length codes, including the END_BLOCK code */
  const D_CODES       = 30;
  /* number of distance codes */
  const BL_CODES      = 19;
  /* number of codes used to transfer the bit lengths */
  const HEAP_SIZE     = 2 * L_CODES + 1;
  /* maximum heap size */
  const MAX_BITS  = 15;
  /* All codes must not exceed MAX_BITS bits */

  const MIN_MATCH = 3;
  const MAX_MATCH = 258;
  const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

  const PRESET_DICT = 0x20;

  const INIT_STATE = 42;
  const EXTRA_STATE = 69;
  const NAME_STATE = 73;
  const COMMENT_STATE = 91;
  const HCRC_STATE = 103;
  const BUSY_STATE = 113;
  const FINISH_STATE = 666;

  const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
  const BS_BLOCK_DONE     = 2; /* block flush performed */
  const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
  const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

  const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

  const err = (strm, errorCode) => {
    strm.msg = messages[errorCode];
    return errorCode;
  };

  const rank = (f) => {
    return ((f) << 1) - ((f) > 4 ? 9 : 0);
  };

  const zero = (buf) => {
    let len = buf.length; while (--len >= 0) { buf[len] = 0; }
  };


  /* eslint-disable new-cap */
  let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
  // This hash causes less collisions, https://github.com/nodeca/pako/issues/135
  // But breaks binary compatibility
  //let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
  let HASH = HASH_ZLIB;

  /* =========================================================================
   * Flush as much pending output as possible. All deflate() output goes
   * through this function so some applications may wish to modify it
   * to avoid allocating a large strm->output buffer and copying into it.
   * (See also read_buf()).
   */
  const flush_pending = (strm) => {
    const s = strm.state;

    //_tr_flush_bits(s);
    let len = s.pending;
    if (len > strm.avail_out) {
      len = strm.avail_out;
    }
    if (len === 0) { return; }

    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) {
      s.pending_out = 0;
    }
  };


  const flush_block_only = (s, last) => {
    _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
  };


  const put_byte = (s, b) => {
    s.pending_buf[s.pending++] = b;
  };


  /* =========================================================================
   * Put a short in the pending buffer. The 16-bit value is put in MSB order.
   * IN assertion: the stream state is correct and there is enough room in
   * pending_buf.
   */
  const putShortMSB = (s, b) => {

    //  put_byte(s, (Byte)(b >> 8));
  //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
  };


  /* ===========================================================================
   * Read a new buffer from the current input stream, update the adler32
   * and total number of bytes read.  All deflate() input goes through
   * this function so some applications may wish to modify it to avoid
   * allocating a large strm->input buffer and copying from it.
   * (See also flush_pending()).
   */
  const read_buf = (strm, buf, start, size) => {

    let len = strm.avail_in;

    if (len > size) { len = size; }
    if (len === 0) { return 0; }

    strm.avail_in -= len;

    // zmemcpy(buf, strm->next_in, len);
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) {
      strm.adler = adler32_1(strm.adler, buf, len, start);
    }

    else if (strm.state.wrap === 2) {
      strm.adler = crc32_1(strm.adler, buf, len, start);
    }

    strm.next_in += len;
    strm.total_in += len;

    return len;
  };


  /* ===========================================================================
   * Set match_start to the longest match starting at the given string and
   * return its length. Matches shorter or equal to prev_length are discarded,
   * in which case the result is equal to prev_length and match_start is
   * garbage.
   * IN assertions: cur_match is the head of the hash chain for the current
   *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
   * OUT assertion: the match length is not greater than s->lookahead.
   */
  const longest_match = (s, cur_match) => {

    let chain_length = s.max_chain_length;      /* max hash chain length */
    let scan = s.strstart; /* current string */
    let match;                       /* matched string */
    let len;                           /* length of current match */
    let best_len = s.prev_length;              /* best match length so far */
    let nice_match = s.nice_match;             /* stop if match long enough */
    const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
        s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

    const _win = s.window; // shortcut

    const wmask = s.w_mask;
    const prev  = s.prev;

    /* Stop when cur_match becomes <= limit. To simplify the code,
     * we prevent matches with the string of window index 0.
     */

    const strend = s.strstart + MAX_MATCH;
    let scan_end1  = _win[scan + best_len - 1];
    let scan_end   = _win[scan + best_len];

    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
     * It is easy to get rid of this optimization if necessary.
     */
    // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

    /* Do not waste too much time if we already have a good match: */
    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    /* Do not look for matches beyond the end of the input. This is necessary
     * to make deflate deterministic.
     */
    if (nice_match > s.lookahead) { nice_match = s.lookahead; }

    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

    do {
      // Assert(cur_match < s->strstart, "no future");
      match = cur_match;

      /* Skip to next match if the match length cannot increase
       * or if the match length is less than 2.  Note that the checks below
       * for insufficient lookahead only occur occasionally for performance
       * reasons.  Therefore uninitialized memory will be accessed, and
       * conditional jumps will be made that depend on those values.
       * However the length of the match is limited to the lookahead, so
       * the output of deflate is not affected by the uninitialized values.
       */

      if (_win[match + best_len]     !== scan_end  ||
          _win[match + best_len - 1] !== scan_end1 ||
          _win[match]                !== _win[scan] ||
          _win[++match]              !== _win[scan + 1]) {
        continue;
      }

      /* The check at best_len-1 can be removed because it will be made
       * again later. (This heuristic is not always a win.)
       * It is not necessary to compare scan[2] and match[2] since they
       * are always equal when the other bytes match, given that
       * the hash keys are equal and that HASH_BITS >= 8.
       */
      scan += 2;
      match++;
      // Assert(*scan == *match, "match[2]?");

      /* We check for insufficient lookahead only every 8th comparison;
       * the 256th check will be made at strstart+258.
       */
      do {
        /*jshint noempty:false*/
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
               _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
               _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
               _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
               scan < strend);

      // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;

      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;
        if (len >= nice_match) {
          break;
        }
        scan_end1  = _win[scan + best_len - 1];
        scan_end   = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

    if (best_len <= s.lookahead) {
      return best_len;
    }
    return s.lookahead;
  };


  /* ===========================================================================
   * Fill the window when the lookahead becomes insufficient.
   * Updates strstart and lookahead.
   *
   * IN assertion: lookahead < MIN_LOOKAHEAD
   * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
   *    At least one byte has been read, or avail_in == 0; reads are
   *    performed for at least two bytes (required for the zip translate_eol
   *    option -- not supported here).
   */
  const fill_window = (s) => {

    const _w_size = s.w_size;
    let p, n, m, more, str;

    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

    do {
      more = s.window_size - s.lookahead - s.strstart;

      // JS ints have 32 bit, block below not needed
      /* Deal with !@#$% 64K limit: */
      //if (sizeof(int) <= 2) {
      //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
      //        more = wsize;
      //
      //  } else if (more == (unsigned)(-1)) {
      //        /* Very unlikely, but possible on 16 bit machine if
      //         * strstart == 0 && lookahead == 1 (input done a byte at time)
      //         */
      //        more--;
      //    }
      //}


      /* If the window is almost full and there is insufficient lookahead,
       * move the upper half to the lower one to make room in the upper half.
       */
      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

        s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        /* we now have strstart >= MAX_DIST */
        s.block_start -= _w_size;

        /* Slide the hash table (could be avoided with 32 bit values
         at the expense of memory usage). We slide even when level == 0
         to keep the hash table consistent if we switch back to level > 0
         later. (Using level 0 permanently is not an optimal usage of
         zlib, so we don't care about this pathological case.)
         */

        n = s.hash_size;
        p = n;

        do {
          m = s.head[--p];
          s.head[p] = (m >= _w_size ? m - _w_size : 0);
        } while (--n);

        n = _w_size;
        p = n;

        do {
          m = s.prev[--p];
          s.prev[p] = (m >= _w_size ? m - _w_size : 0);
          /* If n is not on any hash chain, prev[n] is garbage but
           * its value will never be used.
           */
        } while (--n);

        more += _w_size;
      }
      if (s.strm.avail_in === 0) {
        break;
      }

      /* If there was no sliding:
       *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
       *    more == window_size - lookahead - strstart
       * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
       * => more >= window_size - 2*WSIZE + 2
       * In the BIG_MEM or MMAP case (not yet supported),
       *   window_size == input_size + MIN_LOOKAHEAD  &&
       *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
       * Otherwise, window_size == 2*WSIZE so more >= 2.
       * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
       */
      //Assert(more >= 2, "more < 2");
      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;

      /* Initialize the hash value now that we have some input: */
      if (s.lookahead + s.insert >= MIN_MATCH) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];

        /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
  //#if MIN_MATCH != 3
  //        Call update_hash() MIN_MATCH-3 more times
  //#endif
        while (s.insert) {
          /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
          s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;
          if (s.lookahead + s.insert < MIN_MATCH) {
            break;
          }
        }
      }
      /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
       * but this is not important since only literal bytes will be emitted.
       */

    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

    /* If the WIN_INIT bytes after the end of the current data have never been
     * written, then zero those bytes in order to avoid memory check reports of
     * the use of uninitialized (or uninitialised as Julian writes) bytes by
     * the longest match routines.  Update the high water mark for the next
     * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
     * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
     */
  //  if (s.high_water < s.window_size) {
  //    const curr = s.strstart + s.lookahead;
  //    let init = 0;
  //
  //    if (s.high_water < curr) {
  //      /* Previous high water mark below current data -- zero WIN_INIT
  //       * bytes or up to end of window, whichever is less.
  //       */
  //      init = s.window_size - curr;
  //      if (init > WIN_INIT)
  //        init = WIN_INIT;
  //      zmemzero(s->window + curr, (unsigned)init);
  //      s->high_water = curr + init;
  //    }
  //    else if (s->high_water < (ulg)curr + WIN_INIT) {
  //      /* High water mark at or above current data, but below current data
  //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
  //       * to end of window, whichever is less.
  //       */
  //      init = (ulg)curr + WIN_INIT - s->high_water;
  //      if (init > s->window_size - s->high_water)
  //        init = s->window_size - s->high_water;
  //      zmemzero(s->window + s->high_water, (unsigned)init);
  //      s->high_water += init;
  //    }
  //  }
  //
  //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
  //    "not enough room for search");
  };

  /* ===========================================================================
   * Copy without compression as much as possible from the input stream, return
   * the current block state.
   * This function does not insert new strings in the dictionary since
   * uncompressible data is probably not useful. This function is used
   * only for the level=0 compression option.
   * NOTE: this function should be optimized to avoid extra copying from
   * window to pending_buf.
   */
  const deflate_stored = (s, flush) => {

    /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
     * to pending_buf_size, and each stored block has a 5 byte header:
     */
    let max_block_size = 0xffff;

    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }

    /* Copy as much as possible from input to output: */
    for (;;) {
      /* Fill the window as much as possible: */
      if (s.lookahead <= 1) {

        //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
        //  s->block_start >= (long)s->w_size, "slide too late");
  //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
  //        s.block_start >= s.w_size)) {
  //        throw  new Error("slide too late");
  //      }

        fill_window(s);
        if (s.lookahead === 0 && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */
      }
      //Assert(s->block_start >= 0L, "block gone");
  //    if (s.block_start < 0) throw new Error("block gone");

      s.strstart += s.lookahead;
      s.lookahead = 0;

      /* Emit a stored block if pending_buf will be full: */
      const max_start = s.block_start + max_block_size;

      if (s.strstart === 0 || s.strstart >= max_start) {
        /* strstart == 0 is possible when wraparound on 16-bit machine */
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/


      }
      /* Flush if we may have to slide, otherwise block_start may become
       * negative and the data will be gone:
       */
      if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    }

    s.insert = 0;

    if (flush === Z_FINISH$3) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/
      return BS_FINISH_DONE;
    }

    if (s.strstart > s.block_start) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }

    return BS_NEED_MORE;
  };

  /* ===========================================================================
   * Compress as much as possible from the input stream, return the current
   * block state.
   * This function does not perform lazy evaluation of matches and inserts
   * new strings in the dictionary only for unmatched strings or for short
   * matches. It is used only for the fast compression options.
   */
  const deflate_fast = (s, flush) => {

    let hash_head;        /* head of the hash chain */
    let bflush;           /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break; /* flush the current block */
        }
      }

      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */
      hash_head = 0/*NIL*/;
      if (s.lookahead >= MIN_MATCH) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }

      /* Find the longest match, discarding those <= prev_length.
       * At this point we have always match_length < MIN_MATCH
       */
      if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        s.match_length = longest_match(s, hash_head);
        /* longest_match() sets match_start */
      }
      if (s.match_length >= MIN_MATCH) {
        // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

        /*** _tr_tally_dist(s, s.strstart - s.match_start,
                       s.match_length - MIN_MATCH, bflush); ***/
        bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

        s.lookahead -= s.match_length;

        /* Insert new strings in the hash table only if the match length
         * is not too large. This saves time but degrades compression.
         */
        if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
          s.match_length--; /* string at strstart already in table */
          do {
            s.strstart++;
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
            /* strstart never exceeds WSIZE-MAX_MATCH, so there are
             * always MIN_MATCH bytes ahead.
             */
          } while (--s.match_length !== 0);
          s.strstart++;
        } else
        {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

  //#if MIN_MATCH != 3
  //                Call UPDATE_HASH() MIN_MATCH-3 more times
  //#endif
          /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
           * matter since it will be recomputed at next deflate call.
           */
        }
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s.window[s.strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = _tr_tally(s, 0, s.window[s.strstart]);

        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    }
    s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
    if (flush === Z_FINISH$3) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
    return BS_BLOCK_DONE;
  };

  /* ===========================================================================
   * Same as above, but achieves better compression. We use a lazy
   * evaluation for matches: a match is finally adopted only if there is
   * no better match at the next window position.
   */
  const deflate_slow = (s, flush) => {

    let hash_head;          /* head of hash chain */
    let bflush;              /* set if current block must be flushed */

    let max_insert;

    /* Process the input block. */
    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) { break; } /* flush the current block */
      }

      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */
      hash_head = 0/*NIL*/;
      if (s.lookahead >= MIN_MATCH) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }

      /* Find the longest match, discarding those <= prev_length.
       */
      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH - 1;

      if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
          s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        s.match_length = longest_match(s, hash_head);
        /* longest_match() sets match_start */

        if (s.match_length <= 5 &&
           (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

          /* If prev_match is also MIN_MATCH, match_start is garbage
           * but we will ignore the current match anyway.
           */
          s.match_length = MIN_MATCH - 1;
        }
      }
      /* If there was a match at the previous step and the current
       * match is not better, output the previous match:
       */
      if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH;
        /* Do not insert strings in hash table beyond this. */

        //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

        /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                       s.prev_length - MIN_MATCH, bflush);***/
        bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
        /* Insert in hash table all strings up to the end of the match.
         * strstart-1 and strstart are already inserted. If there is not
         * enough lookahead, the last two strings are not inserted in
         * the hash table.
         */
        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;
        do {
          if (++s.strstart <= max_insert) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
        } while (--s.prev_length !== 0);
        s.match_available = 0;
        s.match_length = MIN_MATCH - 1;
        s.strstart++;

        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

      } else if (s.match_available) {
        /* If there was no match at the previous position, output a
         * single literal. If there was a match but the current match
         * is longer, truncate the previous match to a single literal.
         */
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
        bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

        if (bflush) {
          /*** FLUSH_BLOCK_ONLY(s, 0) ***/
          flush_block_only(s, false);
          /***/
        }
        s.strstart++;
        s.lookahead--;
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        /* There is no previous match to compare with, wait for
         * the next step to decide.
         */
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }

    return BS_BLOCK_DONE;
  };


  /* ===========================================================================
   * For Z_RLE, simply look for runs of bytes, generate matches only of distance
   * one.  Do not maintain a hash table.  (It will be regenerated if this run of
   * deflate switches away from Z_RLE.)
   */
  const deflate_rle = (s, flush) => {

    let bflush;            /* set if current block must be flushed */
    let prev;              /* byte at distance one to match */
    let scan, strend;      /* scan goes up to strend for length of run */

    const _win = s.window;

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the longest run, plus one for the unrolled loop.
       */
      if (s.lookahead <= MAX_MATCH) {
        fill_window(s);
        if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) { break; } /* flush the current block */
      }

      /* See how many times the previous byte repeats */
      s.match_length = 0;
      if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];
        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH;
          do {
            /*jshint noempty:false*/
          } while (prev === _win[++scan] && prev === _win[++scan] &&
                   prev === _win[++scan] && prev === _win[++scan] &&
                   prev === _win[++scan] && prev === _win[++scan] &&
                   prev === _win[++scan] && prev === _win[++scan] &&
                   scan < strend);
          s.match_length = MAX_MATCH - (strend - scan);
          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
      }

      /* Emit match if have run of MIN_MATCH or longer, else emit literal */
      if (s.match_length >= MIN_MATCH) {
        //check_match(s, s.strstart, s.strstart - 1, s.match_length);

        /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
        bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = _tr_tally(s, 0, s.window[s.strstart]);

        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
    return BS_BLOCK_DONE;
  };

  /* ===========================================================================
   * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
   * (It will be regenerated if this run of deflate switches away from Huffman.)
   */
  const deflate_huff = (s, flush) => {

    let bflush;             /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we have a literal to write. */
      if (s.lookahead === 0) {
        fill_window(s);
        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH$2) {
            return BS_NEED_MORE;
          }
          break;      /* flush the current block */
        }
      }

      /* Output a literal byte */
      s.match_length = 0;
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
    return BS_BLOCK_DONE;
  };

  /* Values for max_lazy_match, good_match and max_chain_length, depending on
   * the desired pack level (0..9). The values given below have been tuned to
   * exclude worst case performance for pathological files. Better values may be
   * found for specific files.
   */
  function Config(good_length, max_lazy, nice_length, max_chain, func) {

    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }

  const configuration_table = [
    /*      good lazy nice chain */
    new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
    new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
    new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
    new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

    new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
    new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
    new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
    new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
    new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
    new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
  ];


  /* ===========================================================================
   * Initialize the "longest match" routines for a new zlib stream
   */
  const lm_init = (s) => {

    s.window_size = 2 * s.w_size;

    /*** CLEAR_HASH(s); ***/
    zero(s.head); // Fill with NIL (= 0);

    /* Set the default configuration parameters:
     */
    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;

    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
  };


  function DeflateState() {
    this.strm = null;            /* pointer back to this zlib stream */
    this.status = 0;            /* as the name implies */
    this.pending_buf = null;      /* output still pending */
    this.pending_buf_size = 0;  /* size of pending_buf */
    this.pending_out = 0;       /* next pending byte to output to the stream */
    this.pending = 0;           /* nb of bytes in the pending buffer */
    this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
    this.gzhead = null;         /* gzip header information to write */
    this.gzindex = 0;           /* where in extra, name, or comment */
    this.method = Z_DEFLATED$2; /* can only be DEFLATED */
    this.last_flush = -1;   /* value of flush param for previous deflate call */

    this.w_size = 0;  /* LZ77 window size (32K by default) */
    this.w_bits = 0;  /* log2(w_size)  (8..16) */
    this.w_mask = 0;  /* w_size - 1 */

    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
     * and move to the first half later to keep a dictionary of at least wSize
     * bytes. With this organization, matches are limited to a distance of
     * wSize-MAX_MATCH bytes, but this ensures that IO is always
     * performed with a length multiple of the block size.
     */

    this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
     * is directly used as sliding window.
     */

    this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
     * array to 64K, this link is maintained only for the last 32K strings.
     * An index in this array is thus a window index modulo 32K.
     */

    this.head = null;   /* Heads of the hash chains or NIL. */

    this.ins_h = 0;       /* hash index of string to be inserted */
    this.hash_size = 0;   /* number of elements in hash table */
    this.hash_bits = 0;   /* log2(hash_size) */
    this.hash_mask = 0;   /* hash_size-1 */

    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
     * step. It must be such that after MIN_MATCH steps, the oldest
     * byte no longer takes part in the hash key, that is:
     *   hash_shift * MIN_MATCH >= hash_bits
     */

    this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
     * negative when the window is moved backwards.
     */

    this.match_length = 0;      /* length of best match */
    this.prev_match = 0;        /* previous match */
    this.match_available = 0;   /* set if previous match exists */
    this.strstart = 0;          /* start of string to insert */
    this.match_start = 0;       /* start of matching string */
    this.lookahead = 0;         /* number of valid bytes ahead in window */

    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
     * are discarded. This is used in the lazy match evaluation.
     */

    this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
     * length.  A higher limit improves compression ratio but degrades the
     * speed.
     */

    this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
     * smaller than this value. This mechanism is used only for compression
     * levels >= 4.
     */
    // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
     * greater than this length. This saves time but degrades compression.
     * max_insert_length is used only for compression levels <= 3.
     */

    this.level = 0;     /* compression level (1..9) */
    this.strategy = 0;  /* favor or force Huffman coding*/

    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */

    this.nice_match = 0; /* Stop searching when current match exceeds this */

                /* used by trees.c: */

    /* Didn't use ct_data typedef below to suppress compiler warning */

    // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
    this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
    this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);

    this.l_desc   = null;         /* desc. for literal tree */
    this.d_desc   = null;         /* desc. for distance tree */
    this.bl_desc  = null;         /* desc. for bit length tree */

    //ush bl_count[MAX_BITS+1];
    this.bl_count = new Uint16Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */

    //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
    zero(this.heap);

    this.heap_len = 0;               /* number of elements in the heap */
    this.heap_max = 0;               /* element of largest frequency */
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
     * The same heap array is used to build all trees.
     */

    this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
     */

    this.l_buf = 0;          /* buffer index for literals or lengths */

    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
     * limiting lit_bufsize to 64K:
     *   - frequencies can be kept in 16 bit counters
     *   - if compression is not successful for the first block, all input
     *     data is still in the window so we can still emit a stored block even
     *     when input comes from standard input.  (This can also be done for
     *     all blocks if lit_bufsize is not greater than 32K.)
     *   - if compression is not successful for a file smaller than 64K, we can
     *     even emit a stored file instead of a stored block (saving 5 bytes).
     *     This is applicable only for zip (not gzip or zlib).
     *   - creating new Huffman trees less frequently may not provide fast
     *     adaptation to changes in the input data statistics. (Take for
     *     example a binary file with poorly compressible code followed by
     *     a highly compressible string table.) Smaller buffer sizes give
     *     fast adaptation but have of course the overhead of transmitting
     *     trees more frequently.
     *   - I can't count above 4
     */

    this.last_lit = 0;      /* running index in l_buf */

    this.d_buf = 0;
    /* Buffer index for distances. To simplify the code, d_buf and l_buf have
     * the same number of elements. To use different lengths, an extra flag
     * array would be necessary.
     */

    this.opt_len = 0;       /* bit length of current block with optimal trees */
    this.static_len = 0;    /* bit length of current block with static trees */
    this.matches = 0;       /* number of string matches in current block */
    this.insert = 0;        /* bytes at end of window left to insert */


    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
     * significant bits).
     */
    this.bi_valid = 0;
    /* Number of valid bits in bi_buf.  All bits above the last valid bit
     * are always zero.
     */

    // Used for window memory init. We safely ignore it for JS. That makes
    // sense only for pointers and memory check tools.
    //this.high_water = 0;
    /* High water mark offset in window for initialized bytes -- bytes above
     * this are set to zero in order to avoid memory check warnings when
     * longest match routines access bytes past the input.  This is then
     * updated to the new high water mark.
     */
  }


  const deflateResetKeep = (strm) => {

    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR$2);
    }

    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;

    const s = strm.state;
    s.pending = 0;
    s.pending_out = 0;

    if (s.wrap < 0) {
      s.wrap = -s.wrap;
      /* was made negative by deflate(..., Z_FINISH); */
    }
    s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
    strm.adler = (s.wrap === 2) ?
      0  // crc32(0, Z_NULL, 0)
    :
      1; // adler32(0, Z_NULL, 0)
    s.last_flush = Z_NO_FLUSH$2;
    _tr_init(s);
    return Z_OK$3;
  };


  const deflateReset = (strm) => {

    const ret = deflateResetKeep(strm);
    if (ret === Z_OK$3) {
      lm_init(strm.state);
    }
    return ret;
  };


  const deflateSetHeader = (strm, head) => {

    if (!strm || !strm.state) { return Z_STREAM_ERROR$2; }
    if (strm.state.wrap !== 2) { return Z_STREAM_ERROR$2; }
    strm.state.gzhead = head;
    return Z_OK$3;
  };


  const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

    if (!strm) { // === Z_NULL
      return Z_STREAM_ERROR$2;
    }
    let wrap = 1;

    if (level === Z_DEFAULT_COMPRESSION$1) {
      level = 6;
    }

    if (windowBits < 0) { /* suppress zlib wrapper */
      wrap = 0;
      windowBits = -windowBits;
    }

    else if (windowBits > 15) {
      wrap = 2;           /* write gzip wrapper instead */
      windowBits -= 16;
    }


    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
      windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
      strategy < 0 || strategy > Z_FIXED) {
      return err(strm, Z_STREAM_ERROR$2);
    }


    if (windowBits === 8) {
      windowBits = 9;
    }
    /* until 256-byte window bug fixed */

    const s = new DeflateState();

    strm.state = s;
    s.strm = strm;

    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;

    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);

    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */

    s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

    s.pending_buf_size = s.lit_bufsize * 4;

    //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
    //s->pending_buf = (uchf *) overlay;
    s.pending_buf = new Uint8Array(s.pending_buf_size);

    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
    s.d_buf = 1 * s.lit_bufsize;

    //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
    s.l_buf = (1 + 2) * s.lit_bufsize;

    s.level = level;
    s.strategy = strategy;
    s.method = method;

    return deflateReset(strm);
  };

  const deflateInit = (strm, level) => {

    return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
  };


  const deflate$2 = (strm, flush) => {

    let beg, val; // for gzip header write only

    if (!strm || !strm.state ||
      flush > Z_BLOCK$1 || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
    }

    const s = strm.state;

    if (!strm.output ||
        (!strm.input && strm.avail_in !== 0) ||
        (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
      return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
    }

    s.strm = strm; /* just in case */
    const old_flush = s.last_flush;
    s.last_flush = flush;

    /* Write the header */
    if (s.status === INIT_STATE) {

      if (s.wrap === 2) { // GZIP header
        strm.adler = 0;  //crc32(0L, Z_NULL, 0);
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) { // s->gzhead == Z_NULL
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 :
                      (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                       4 : 0));
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        }
        else {
          put_byte(s, (s.gzhead.text ? 1 : 0) +
                      (s.gzhead.hcrc ? 2 : 0) +
                      (!s.gzhead.extra ? 0 : 4) +
                      (!s.gzhead.name ? 0 : 8) +
                      (!s.gzhead.comment ? 0 : 16)
          );
          put_byte(s, s.gzhead.time & 0xff);
          put_byte(s, (s.gzhead.time >> 8) & 0xff);
          put_byte(s, (s.gzhead.time >> 16) & 0xff);
          put_byte(s, (s.gzhead.time >> 24) & 0xff);
          put_byte(s, s.level === 9 ? 2 :
                      (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                       4 : 0));
          put_byte(s, s.gzhead.os & 0xff);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 0xff);
            put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      }
      else // DEFLATE header
      {
        let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
        let level_flags = -1;

        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= (level_flags << 6);
        if (s.strstart !== 0) { header |= PRESET_DICT; }
        header += 31 - (header % 31);

        s.status = BUSY_STATE;
        putShortMSB(s, header);

        /* Save the adler32 of the preset dictionary: */
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }
        strm.adler = 1; // adler32(0L, Z_NULL, 0);
      }
    }

  //#ifdef GZIP
    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra/* != Z_NULL*/) {
        beg = s.pending;  /* start of bytes to update crc */

        while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              break;
            }
          }
          put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
          s.gzindex++;
        }
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (s.gzindex === s.gzhead.extra.length) {
          s.gzindex = 0;
          s.status = NAME_STATE;
        }
      }
      else {
        s.status = NAME_STATE;
      }
    }
    if (s.status === NAME_STATE) {
      if (s.gzhead.name/* != Z_NULL*/) {
        beg = s.pending;  /* start of bytes to update crc */
        //int val;

        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          // JS specific: little magic to add zero terminator to end of string
          if (s.gzindex < s.gzhead.name.length) {
            val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);

        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.gzindex = 0;
          s.status = COMMENT_STATE;
        }
      }
      else {
        s.status = COMMENT_STATE;
      }
    }
    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment/* != Z_NULL*/) {
        beg = s.pending;  /* start of bytes to update crc */
        //int val;

        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          // JS specific: little magic to add zero terminator to end of string
          if (s.gzindex < s.gzhead.comment.length) {
            val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);

        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.status = HCRC_STATE;
        }
      }
      else {
        s.status = HCRC_STATE;
      }
    }
    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }
        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, (strm.adler >> 8) & 0xff);
          strm.adler = 0; //crc32(0L, Z_NULL, 0);
          s.status = BUSY_STATE;
        }
      }
      else {
        s.status = BUSY_STATE;
      }
    }
  //#endif

    /* Flush as much pending output as possible */
    if (s.pending !== 0) {
      flush_pending(strm);
      if (strm.avail_out === 0) {
        /* Since avail_out is 0, deflate will be called again with
         * more output space, but possibly with both pending and
         * avail_in equal to zero. There won't be anything to do,
         * but this is not an error situation so make sure we
         * return OK instead of BUF_ERROR at next call of deflate:
         */
        s.last_flush = -1;
        return Z_OK$3;
      }

      /* Make sure there is something to do and avoid duplicate consecutive
       * flushes. For repeated and useless calls with Z_FINISH, we keep
       * returning Z_STREAM_END instead of Z_BUF_ERROR.
       */
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
      flush !== Z_FINISH$3) {
      return err(strm, Z_BUF_ERROR$1);
    }

    /* User must not provide more input after the first FINISH: */
    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR$1);
    }

    /* Start a new block or continue the current one.
     */
    if (strm.avail_in !== 0 || s.lookahead !== 0 ||
      (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
      let bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
        (s.strategy === Z_RLE ? deflate_rle(s, flush) :
          configuration_table[s.level].func(s, flush));

      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }
      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          /* avoid BUF_ERROR next call, see above */
        }
        return Z_OK$3;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
         * of deflate should use the same flush parameter to make sure
         * that the flush is complete. So we don't have to output an
         * empty block here, this will be done at next call. This also
         * ensures that for a very small output buffer, we emit at most
         * one empty block.
         */
      }
      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          _tr_align(s);
        }
        else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

          _tr_stored_block(s, 0, 0, false);
          /* For a full flush, this empty block will be recognized
           * as a special marker by inflate_sync().
           */
          if (flush === Z_FULL_FLUSH$1) {
            /*** CLEAR_HASH(s); ***/             /* forget history */
            zero(s.head); // Fill with NIL (= 0);

            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
          return Z_OK$3;
        }
      }
    }
    //Assert(strm->avail_out > 0, "bug2");
    //if (strm.avail_out <= 0) { throw new Error("bug2");}

    if (flush !== Z_FINISH$3) { return Z_OK$3; }
    if (s.wrap <= 0) { return Z_STREAM_END$3; }

    /* Write the trailer */
    if (s.wrap === 2) {
      put_byte(s, strm.adler & 0xff);
      put_byte(s, (strm.adler >> 8) & 0xff);
      put_byte(s, (strm.adler >> 16) & 0xff);
      put_byte(s, (strm.adler >> 24) & 0xff);
      put_byte(s, strm.total_in & 0xff);
      put_byte(s, (strm.total_in >> 8) & 0xff);
      put_byte(s, (strm.total_in >> 16) & 0xff);
      put_byte(s, (strm.total_in >> 24) & 0xff);
    }
    else
    {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }

    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
     * to flush the rest.
     */
    if (s.wrap > 0) { s.wrap = -s.wrap; }
    /* write the trailer only once! */
    return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
  };


  const deflateEnd = (strm) => {

    if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
      return Z_STREAM_ERROR$2;
    }

    const status = strm.state.status;
    if (status !== INIT_STATE &&
      status !== EXTRA_STATE &&
      status !== NAME_STATE &&
      status !== COMMENT_STATE &&
      status !== HCRC_STATE &&
      status !== BUSY_STATE &&
      status !== FINISH_STATE
    ) {
      return err(strm, Z_STREAM_ERROR$2);
    }

    strm.state = null;

    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
  };


  /* =========================================================================
   * Initializes the compression dictionary from the given byte
   * sequence without producing any compressed output.
   */
  const deflateSetDictionary = (strm, dictionary) => {

    let dictLength = dictionary.length;

    if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
      return Z_STREAM_ERROR$2;
    }

    const s = strm.state;
    const wrap = s.wrap;

    if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
      return Z_STREAM_ERROR$2;
    }

    /* when using zlib wrappers, compute Adler-32 for provided dictionary */
    if (wrap === 1) {
      /* adler32(strm->adler, dictionary, dictLength); */
      strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    }

    s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

    /* if dictionary would fill window, just replace the history */
    if (dictLength >= s.w_size) {
      if (wrap === 0) {            /* already empty otherwise */
        /*** CLEAR_HASH(s); ***/
        zero(s.head); // Fill with NIL (= 0);
        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      /* use the tail */
      // dictionary = dictionary.slice(dictLength - s.w_size);
      let tmpDict = new Uint8Array(s.w_size);
      tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */
    const avail = strm.avail_in;
    const next = strm.next_in;
    const input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while (s.lookahead >= MIN_MATCH) {
      let str = s.strstart;
      let n = s.lookahead - (MIN_MATCH - 1);
      do {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];

        s.head[s.ins_h] = str;
        str++;
      } while (--n);
      s.strstart = str;
      s.lookahead = MIN_MATCH - 1;
      fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK$3;
  };


  var deflateInit_1 = deflateInit;
  var deflateInit2_1 = deflateInit2;
  var deflateReset_1 = deflateReset;
  var deflateResetKeep_1 = deflateResetKeep;
  var deflateSetHeader_1 = deflateSetHeader;
  var deflate_2$1 = deflate$2;
  var deflateEnd_1 = deflateEnd;
  var deflateSetDictionary_1 = deflateSetDictionary;
  var deflateInfo = 'pako deflate (from Nodeca project)';

  /* Not implemented
  module.exports.deflateBound = deflateBound;
  module.exports.deflateCopy = deflateCopy;
  module.exports.deflateParams = deflateParams;
  module.exports.deflatePending = deflatePending;
  module.exports.deflatePrime = deflatePrime;
  module.exports.deflateTune = deflateTune;
  */

  var deflate_1$2 = {
  	deflateInit: deflateInit_1,
  	deflateInit2: deflateInit2_1,
  	deflateReset: deflateReset_1,
  	deflateResetKeep: deflateResetKeep_1,
  	deflateSetHeader: deflateSetHeader_1,
  	deflate: deflate_2$1,
  	deflateEnd: deflateEnd_1,
  	deflateSetDictionary: deflateSetDictionary_1,
  	deflateInfo: deflateInfo
  };

  const _has = (obj, key) => {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  var assign = function (obj /*from1, from2, from3, ...*/) {
    const sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
      const source = sources.shift();
      if (!source) { continue; }

      if (typeof source !== 'object') {
        throw new TypeError(source + 'must be non-object');
      }

      for (const p in source) {
        if (_has(source, p)) {
          obj[p] = source[p];
        }
      }
    }

    return obj;
  };


  // Join array of chunks to single array.
  var flattenChunks = (chunks) => {
    // calculate data length
    let len = 0;

    for (let i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    const result = new Uint8Array(len);

    for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
      let chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  };

  var common = {
  	assign: assign,
  	flattenChunks: flattenChunks
  };

  // String encode/decode helpers


  // Quick check if we can use fast array to bin string conversion
  //
  // - apply(Array) can fail on Android 2.2
  // - apply(Uint8Array) can fail on iOS 5.1 Safari
  //
  let STR_APPLY_UIA_OK = true;

  try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


  // Table with utf8 lengths (calculated by first byte of sequence)
  // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
  // because max possible codepoint is 0x10ffff
  const _utf8len = new Uint8Array(256);
  for (let q = 0; q < 256; q++) {
    _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
  }
  _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


  // convert string to array (typed, when possible)
  var string2buf = (str) => {
    if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
      return new TextEncoder().encode(str);
    }

    let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }
      buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    buf = new Uint8Array(buf_len);

    // convert
    for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }
      if (c < 0x80) {
        /* one byte */
        buf[i++] = c;
      } else if (c < 0x800) {
        /* two bytes */
        buf[i++] = 0xC0 | (c >>> 6);
        buf[i++] = 0x80 | (c & 0x3f);
      } else if (c < 0x10000) {
        /* three bytes */
        buf[i++] = 0xE0 | (c >>> 12);
        buf[i++] = 0x80 | (c >>> 6 & 0x3f);
        buf[i++] = 0x80 | (c & 0x3f);
      } else {
        /* four bytes */
        buf[i++] = 0xf0 | (c >>> 18);
        buf[i++] = 0x80 | (c >>> 12 & 0x3f);
        buf[i++] = 0x80 | (c >>> 6 & 0x3f);
        buf[i++] = 0x80 | (c & 0x3f);
      }
    }

    return buf;
  };

  // Helper
  const buf2binstring = (buf, len) => {
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK) {
        return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
      }
    }

    let result = '';
    for (let i = 0; i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }
    return result;
  };


  // convert array to string
  var buf2string = (buf, max) => {
    const len = max || buf.length;

    if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
      return new TextDecoder().decode(buf.subarray(0, max));
    }

    let i, out;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    const utf16buf = new Array(len * 2);

    for (out = 0, i = 0; i < len;) {
      let c = buf[i++];
      // quick process ascii
      if (c < 0x80) { utf16buf[out++] = c; continue; }

      let c_len = _utf8len[c];
      // skip 5 & 6 byte codes
      if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

      // apply mask on first byte
      c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
      // join the rest
      while (c_len > 1 && i < len) {
        c = (c << 6) | (buf[i++] & 0x3f);
        c_len--;
      }

      // terminated by end of string?
      if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

      if (c < 0x10000) {
        utf16buf[out++] = c;
      } else {
        c -= 0x10000;
        utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
        utf16buf[out++] = 0xdc00 | (c & 0x3ff);
      }
    }

    return buf2binstring(utf16buf, out);
  };


  // Calculate max possible position in utf8 buffer,
  // that will not break sequence. If that's not possible
  // - (very small limits) return max size as is.
  //
  // buf[] - utf8 bytes array
  // max   - length limit (mandatory);
  var utf8border = (buf, max) => {

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    let pos = max - 1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
  };

  var strings = {
  	string2buf: string2buf,
  	buf2string: buf2string,
  	utf8border: utf8border
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function ZStream() {
    /* next input byte */
    this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */
    this.avail_in = 0;
    /* total number of input bytes read so far */
    this.total_in = 0;
    /* next output byte should be put there */
    this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */
    this.avail_out = 0;
    /* total number of bytes output so far */
    this.total_out = 0;
    /* last error message, NULL if no error */
    this.msg = ''/*Z_NULL*/;
    /* not visible by applications */
    this.state = null;
    /* best guess about the data type: binary or text */
    this.data_type = 2/*Z_UNKNOWN*/;
    /* adler32 value of the uncompressed data */
    this.adler = 0;
  }

  var zstream = ZStream;

  const toString$1 = Object.prototype.toString;

  /* Public constants ==========================================================*/
  /* ===========================================================================*/

  const {
    Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
    Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
    Z_DEFAULT_COMPRESSION,
    Z_DEFAULT_STRATEGY,
    Z_DEFLATED: Z_DEFLATED$1
  } = constants$2;

  /* ===========================================================================*/


  /**
   * class Deflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[deflate]],
   * [[deflateRaw]] and [[gzip]].
   **/

  /* internal
   * Deflate.chunks -> Array
   *
   * Chunks of output data, if [[Deflate#onData]] not overridden.
   **/

  /**
   * Deflate.result -> Uint8Array
   *
   * Compressed result, generated by default [[Deflate#onData]]
   * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
   **/

  /**
   * Deflate.err -> Number
   *
   * Error code after deflate finished. 0 (Z_OK) on success.
   * You will not need it in real life, because deflate errors
   * are possible only on wrong options or bad `onData` / `onEnd`
   * custom handlers.
   **/

  /**
   * Deflate.msg -> String
   *
   * Error message, if [[Deflate.err]] != 0
   **/


  /**
   * new Deflate(options)
   * - options (Object): zlib deflate options.
   *
   * Creates new deflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `level`
   * - `windowBits`
   * - `memLevel`
   * - `strategy`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw deflate
   * - `gzip` (Boolean) - create gzip wrapper
   * - `header` (Object) - custom header for gzip
   *   - `text` (Boolean) - true if compressed data believed to be text
   *   - `time` (Number) - modification time, unix timestamp
   *   - `os` (Number) - operation system code
   *   - `extra` (Array) - array of bytes with extra data (max 65536)
   *   - `name` (String) - file name (binary string)
   *   - `comment` (String) - comment (binary string)
   *   - `hcrc` (Boolean) - true if header crc should be added
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako')
   *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
   *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * const deflate = new pako.Deflate({ level: 3});
   *
   * deflate.push(chunk1, false);
   * deflate.push(chunk2, true);  // true -> last chunk
   *
   * if (deflate.err) { throw new Error(deflate.err); }
   *
   * console.log(deflate.result);
   * ```
   **/
  function Deflate$1(options) {
    this.options = common.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED$1,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY
    }, options || {});

    let opt = this.options;

    if (opt.raw && (opt.windowBits > 0)) {
      opt.windowBits = -opt.windowBits;
    }

    else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
      opt.windowBits += 16;
    }

    this.err    = 0;      // error code, if happens (0 = Z_OK)
    this.msg    = '';     // error message
    this.ended  = false;  // used to avoid multiple onEnd() calls
    this.chunks = [];     // chunks of compressed data

    this.strm = new zstream();
    this.strm.avail_out = 0;

    let status = deflate_1$2.deflateInit2(
      this.strm,
      opt.level,
      opt.method,
      opt.windowBits,
      opt.memLevel,
      opt.strategy
    );

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    if (opt.header) {
      deflate_1$2.deflateSetHeader(this.strm, opt.header);
    }

    if (opt.dictionary) {
      let dict;
      // Convert data if needed
      if (typeof opt.dictionary === 'string') {
        // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
      } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }

      status = deflate_1$2.deflateSetDictionary(this.strm, dict);

      if (status !== Z_OK$2) {
        throw new Error(messages[status]);
      }

      this._dict_set = true;
    }
  }

  /**
   * Deflate#push(data[, flush_mode]) -> Boolean
   * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
   *   converted to utf8 byte sequence.
   * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
   *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
   *
   * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
   * new compressed chunks. Returns `true` on success. The last data block must
   * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
   * buffers and call [[Deflate#onEnd]].
   *
   * On fail call [[Deflate#onEnd]] with error code and return false.
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/
  Deflate$1.prototype.push = function (data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;

    if (this.ended) { return false; }

    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

    // Convert data if needed
    if (typeof data === 'string') {
      // If we need to compress text, change encoding to utf8.
      strm.input = strings.string2buf(data);
    } else if (toString$1.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    for (;;) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }

      // Make sure avail_out > 6 to avoid repeating markers
      if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }

      status = deflate_1$2.deflate(strm, _flush_mode);

      // Ended => flush and finish
      if (status === Z_STREAM_END$2) {
        if (strm.next_out > 0) {
          this.onData(strm.output.subarray(0, strm.next_out));
        }
        status = deflate_1$2.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK$2;
      }

      // Flush if out buffer full
      if (strm.avail_out === 0) {
        this.onData(strm.output);
        continue;
      }

      // Flush if requested and has data
      if (_flush_mode > 0 && strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }

      if (strm.avail_in === 0) break;
    }

    return true;
  };


  /**
   * Deflate#onData(chunk) -> Void
   * - chunk (Uint8Array): output data.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/
  Deflate$1.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };


  /**
   * Deflate#onEnd(status) -> Void
   * - status (Number): deflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called once after you tell deflate that the input stream is
   * complete (Z_FINISH). By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/
  Deflate$1.prototype.onEnd = function (status) {
    // On success - join
    if (status === Z_OK$2) {
      this.result = common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  // See state defs from inflate.js
  const BAD$1 = 30;       /* got a data error -- remain here until reset */
  const TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */

  /*
     Decode literal, length, and distance codes and write out the resulting
     literal and match bytes until either not enough input or output is
     available, an end-of-block is encountered, or a data error is encountered.
     When large enough input and output buffers are supplied to inflate(), for
     example, a 16K input buffer and a 64K output buffer, more than 95% of the
     inflate execution time is spent in this routine.

     Entry assumptions:

          state.mode === LEN
          strm.avail_in >= 6
          strm.avail_out >= 258
          start >= strm.avail_out
          state.bits < 8

     On return, state.mode is one of:

          LEN -- ran out of enough output space or enough available input
          TYPE -- reached end of block code, inflate() to interpret next block
          BAD -- error in block data

     Notes:

      - The maximum input bits used by a length/distance pair is 15 bits for the
        length code, 5 bits for the length extra, 15 bits for the distance code,
        and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
        Therefore if strm.avail_in >= 6, then there is enough input to avoid
        checking for available input while decoding.

      - The maximum bytes that a single length/distance pair can output is 258
        bytes, which is the maximum length that can be coded.  inflate_fast()
        requires strm.avail_out >= 258 for each loop to avoid checking for
        output space.
   */
  var inffast = function inflate_fast(strm, start) {
    let _in;                    /* local strm.input */
    let last;                   /* have enough input while in < last */
    let _out;                   /* local strm.output */
    let beg;                    /* inflate()'s initial strm.output */
    let end;                    /* while out < end, enough space available */
  //#ifdef INFLATE_STRICT
    let dmax;                   /* maximum distance from zlib header */
  //#endif
    let wsize;                  /* window size or zero if not using window */
    let whave;                  /* valid bytes in the window */
    let wnext;                  /* window write index */
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    let s_window;               /* allocated sliding window, if wsize != 0 */
    let hold;                   /* local strm.hold */
    let bits;                   /* local strm.bits */
    let lcode;                  /* local strm.lencode */
    let dcode;                  /* local strm.distcode */
    let lmask;                  /* mask for first level of length codes */
    let dmask;                  /* mask for first level of distance codes */
    let here;                   /* retrieved table entry */
    let op;                     /* code bits, operation, extra bits, or */
                                /*  window position, window bytes to copy */
    let len;                    /* match length, unused bytes */
    let dist;                   /* match distance */
    let from;                   /* where to copy match from */
    let from_source;


    let input, output; // JS specific, because we have no pointers

    /* copy state to local variables */
    const state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
  //#ifdef INFLATE_STRICT
    dmax = state.dmax;
  //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;


    /* decode literals and length/distances until end-of-block or not enough
       input data or output space */

    top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }

      here = lcode[hold & lmask];

      dolen:
      for (;;) { // Goto emulation
        op = here >>> 24/*here.bits*/;
        hold >>>= op;
        bits -= op;
        op = (here >>> 16) & 0xff/*here.op*/;
        if (op === 0) {                          /* literal */
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          output[_out++] = here & 0xffff/*here.val*/;
        }
        else if (op & 16) {                     /* length base */
          len = here & 0xffff/*here.val*/;
          op &= 15;                           /* number of extra bits */
          if (op) {
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
            }
            len += hold & ((1 << op) - 1);
            hold >>>= op;
            bits -= op;
          }
          //Tracevv((stderr, "inflate:         length %u\n", len));
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = dcode[hold & dmask];

          dodist:
          for (;;) { // goto emulation
            op = here >>> 24/*here.bits*/;
            hold >>>= op;
            bits -= op;
            op = (here >>> 16) & 0xff/*here.op*/;

            if (op & 16) {                      /* distance base */
              dist = here & 0xffff/*here.val*/;
              op &= 15;                       /* number of extra bits */
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
              }
              dist += hold & ((1 << op) - 1);
  //#ifdef INFLATE_STRICT
              if (dist > dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD$1;
                break top;
              }
  //#endif
              hold >>>= op;
              bits -= op;
              //Tracevv((stderr, "inflate:         distance %u\n", dist));
              op = _out - beg;                /* max distance in output */
              if (dist > op) {                /* see if copy from window */
                op = dist - op;               /* distance back in window */
                if (op > whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD$1;
                    break top;
                  }

  // (!) This block is disabled in zlib defaults,
  // don't enable it for binary compatibility
  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
  //                if (len <= op - whave) {
  //                  do {
  //                    output[_out++] = 0;
  //                  } while (--len);
  //                  continue top;
  //                }
  //                len -= op - whave;
  //                do {
  //                  output[_out++] = 0;
  //                } while (--op > whave);
  //                if (op === 0) {
  //                  from = _out - dist;
  //                  do {
  //                    output[_out++] = output[from++];
  //                  } while (--len);
  //                  continue top;
  //                }
  //#endif
                }
                from = 0; // window index
                from_source = s_window;
                if (wnext === 0) {           /* very common case */
                  from += wsize - op;
                  if (op < len) {         /* some from window */
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;  /* rest from output */
                    from_source = output;
                  }
                }
                else if (wnext < op) {      /* wrap around window */
                  from += wsize + wnext - op;
                  op -= wnext;
                  if (op < len) {         /* some from end of window */
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = 0;
                    if (wnext < len) {  /* some from start of window */
                      op = wnext;
                      len -= op;
                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);
                      from = _out - dist;      /* rest from output */
                      from_source = output;
                    }
                  }
                }
                else {                      /* contiguous in window */
                  from += wnext - op;
                  if (op < len) {         /* some from window */
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;  /* rest from output */
                    from_source = output;
                  }
                }
                while (len > 2) {
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  len -= 3;
                }
                if (len) {
                  output[_out++] = from_source[from++];
                  if (len > 1) {
                    output[_out++] = from_source[from++];
                  }
                }
              }
              else {
                from = _out - dist;          /* copy direct from output */
                do {                        /* minimum length is three */
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  len -= 3;
                } while (len > 2);
                if (len) {
                  output[_out++] = output[from++];
                  if (len > 1) {
                    output[_out++] = output[from++];
                  }
                }
              }
            }
            else if ((op & 64) === 0) {          /* 2nd level distance code */
              here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
              continue dodist;
            }
            else {
              strm.msg = 'invalid distance code';
              state.mode = BAD$1;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        }
        else if ((op & 64) === 0) {              /* 2nd level length code */
          here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
          continue dolen;
        }
        else if (op & 32) {                     /* end-of-block */
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.mode = TYPE$1;
          break top;
        }
        else {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD$1;
          break top;
        }

        break; // need to emulate goto via "continue"
      }
    } while (_in < last && _out < end);

    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;

    /* update state and return */
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
    strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
    state.hold = hold;
    state.bits = bits;
    return;
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  const MAXBITS = 15;
  const ENOUGH_LENS$1 = 852;
  const ENOUGH_DISTS$1 = 592;
  //const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

  const CODES$1 = 0;
  const LENS$1 = 1;
  const DISTS$1 = 2;

  const lbase = new Uint16Array([ /* Length codes 257..285 base */
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
    35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
  ]);

  const lext = new Uint8Array([ /* Length codes 257..285 extra */
    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
    19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
  ]);

  const dbase = new Uint16Array([ /* Distance codes 0..29 base */
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
    8193, 12289, 16385, 24577, 0, 0
  ]);

  const dext = new Uint8Array([ /* Distance codes 0..29 extra */
    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
    23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
    28, 28, 29, 29, 64, 64
  ]);

  const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
  {
    const bits = opts.bits;
        //here = opts.here; /* table entry for duplication */

    let len = 0;               /* a code's length in bits */
    let sym = 0;               /* index of code symbols */
    let min = 0, max = 0;          /* minimum and maximum code lengths */
    let root = 0;              /* number of index bits for root table */
    let curr = 0;              /* number of index bits for current table */
    let drop = 0;              /* code bits to drop for sub-table */
    let left = 0;                   /* number of prefix codes available */
    let used = 0;              /* code entries in table used */
    let huff = 0;              /* Huffman code */
    let incr;              /* for incrementing code, index */
    let fill;              /* index for replicating entries */
    let low;               /* low bits for current root entry */
    let mask;              /* mask for low root bits */
    let next;             /* next available space in table */
    let base = null;     /* base value table to use */
    let base_index = 0;
  //  let shoextra;    /* extra bits table to use */
    let end;                    /* use base and extra for symbol > end */
    const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    let extra = null;
    let extra_index = 0;

    let here_bits, here_op, here_val;

    /*
     Process a set of code lengths to create a canonical Huffman code.  The
     code lengths are lens[0..codes-1].  Each length corresponds to the
     symbols 0..codes-1.  The Huffman code is generated by first sorting the
     symbols by length from short to long, and retaining the symbol order
     for codes with equal lengths.  Then the code starts with all zero bits
     for the first code of the shortest length, and the codes are integer
     increments for the same length, and zeros are appended as the length
     increases.  For the deflate format, these bits are stored backwards
     from their more natural integer increment ordering, and so when the
     decoding tables are built in the large loop below, the integer codes
     are incremented backwards.

     This routine assumes, but does not check, that all of the entries in
     lens[] are in the range 0..MAXBITS.  The caller must assure this.
     1..MAXBITS is interpreted as that code length.  zero means that that
     symbol does not occur in this code.

     The codes are sorted by computing a count of codes for each length,
     creating from that a table of starting indices for each length in the
     sorted table, and then entering the symbols in order in the sorted
     table.  The sorted table is work[], with that space being provided by
     the caller.

     The length counts are used for other purposes as well, i.e. finding
     the minimum and maximum length codes, determining if there are any
     codes at all, checking for a valid set of lengths, and looking ahead
     at length counts to determine sub-table sizes when building the
     decoding tables.
     */

    /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
    for (len = 0; len <= MAXBITS; len++) {
      count[len] = 0;
    }
    for (sym = 0; sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }

    /* bound code lengths, force root to be within code lengths */
    root = bits;
    for (max = MAXBITS; max >= 1; max--) {
      if (count[max] !== 0) { break; }
    }
    if (root > max) {
      root = max;
    }
    if (max === 0) {                     /* no symbols to code at all */
      //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
      //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
      //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
      table[table_index++] = (1 << 24) | (64 << 16) | 0;


      //table.op[opts.table_index] = 64;
      //table.bits[opts.table_index] = 1;
      //table.val[opts.table_index++] = 0;
      table[table_index++] = (1 << 24) | (64 << 16) | 0;

      opts.bits = 1;
      return 0;     /* no symbols, but wait for decoding to report error */
    }
    for (min = 1; min < max; min++) {
      if (count[min] !== 0) { break; }
    }
    if (root < min) {
      root = min;
    }

    /* check for an over-subscribed or incomplete set of lengths */
    left = 1;
    for (len = 1; len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];
      if (left < 0) {
        return -1;
      }        /* over-subscribed */
    }
    if (left > 0 && (type === CODES$1 || max !== 1)) {
      return -1;                      /* incomplete set */
    }

    /* generate offsets into symbol table for each length for sorting */
    offs[1] = 0;
    for (len = 1; len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }

    /* sort symbols by length, by symbol order within each length */
    for (sym = 0; sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }

    /*
     Create and fill in decoding tables.  In this loop, the table being
     filled is at next and has curr index bits.  The code being used is huff
     with length len.  That code is converted to an index by dropping drop
     bits off of the bottom.  For codes where len is less than drop + curr,
     those top drop + curr - len bits are incremented through all values to
     fill the table with replicated entries.

     root is the number of index bits for the root table.  When len exceeds
     root, sub-tables are created pointed to by the root entry with an index
     of the low root bits of huff.  This is saved in low to check for when a
     new sub-table should be started.  drop is zero when the root table is
     being filled, and drop is root when sub-tables are being filled.

     When a new sub-table is needed, it is necessary to look ahead in the
     code lengths to determine what size sub-table is needed.  The length
     counts are used for this, and so count[] is decremented as codes are
     entered in the tables.

     used keeps track of how many table entries have been allocated from the
     provided *table space.  It is checked for LENS and DIST tables against
     the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
     the initial root table size constants.  See the comments in inftrees.h
     for more information.

     sym increments through all symbols, and the loop terminates when
     all codes of length max, i.e. all codes, have been processed.  This
     routine permits incomplete codes, so another loop after this one fills
     in the rest of the decoding tables with invalid code markers.
     */

    /* set up for code type */
    // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES$1) {
      base = extra = work;    /* dummy value--not used */
      end = 19;

    } else if (type === LENS$1) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;

    } else {                    /* DISTS */
      base = dbase;
      extra = dext;
      end = -1;
    }

    /* initialize opts for loop */
    huff = 0;                   /* starting code */
    sym = 0;                    /* starting code symbol */
    len = min;                  /* starting code length */
    next = table_index;              /* current table to fill in */
    curr = root;                /* current table index bits */
    drop = 0;                   /* current bits to drop from code for index */
    low = -1;                   /* trigger new sub-table when len > root */
    used = 1 << root;          /* use root table entries */
    mask = used - 1;            /* mask for comparing low */

    /* check available table space */
    if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
      (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
      return 1;
    }

    /* process all codes and make table entries */
    for (;;) {
      /* create table entry */
      here_bits = len - drop;
      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      }
      else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      }
      else {
        here_op = 32 + 64;         /* end of block */
        here_val = 0;
      }

      /* replicate for those indices with low len bits equal to huff */
      incr = 1 << (len - drop);
      fill = 1 << curr;
      min = fill;                 /* save offset to next table */
      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
      } while (fill !== 0);

      /* backwards increment the len-bit code huff */
      incr = 1 << (len - 1);
      while (huff & incr) {
        incr >>= 1;
      }
      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }

      /* go to next symbol, update count, len */
      sym++;
      if (--count[len] === 0) {
        if (len === max) { break; }
        len = lens[lens_index + work[sym]];
      }

      /* create new sub-table if needed */
      if (len > root && (huff & mask) !== low) {
        /* if first time, transition to sub-tables */
        if (drop === 0) {
          drop = root;
        }

        /* increment past last table */
        next += min;            /* here min is 1 << curr */

        /* determine length of next table */
        curr = len - drop;
        left = 1 << curr;
        while (curr + drop < max) {
          left -= count[curr + drop];
          if (left <= 0) { break; }
          curr++;
          left <<= 1;
        }

        /* check for enough space */
        used += 1 << curr;
        if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
          (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
          return 1;
        }

        /* point entry in root table to sub-table */
        low = huff & mask;
        /*table.op[low] = curr;
        table.bits[low] = root;
        table.val[low] = next - opts.table_index;*/
        table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
      }
    }

    /* fill in remaining table entry if code is incomplete (guaranteed to have
     at most one remaining entry, since if the code is incomplete, the
     maximum code length that was allowed to get this far is one bit) */
    if (huff !== 0) {
      //table.op[next + huff] = 64;            /* invalid code marker */
      //table.bits[next + huff] = len - drop;
      //table.val[next + huff] = 0;
      table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
    }

    /* set return parameters */
    //opts.table_index += used;
    opts.bits = root;
    return 0;
  };


  var inftrees = inflate_table;

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.






  const CODES = 0;
  const LENS = 1;
  const DISTS = 2;

  /* Public constants ==========================================================*/
  /* ===========================================================================*/

  const {
    Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
    Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
    Z_DEFLATED
  } = constants$2;


  /* STATES ====================================================================*/
  /* ===========================================================================*/


  const    HEAD = 1;       /* i: waiting for magic header */
  const    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
  const    TIME = 3;       /* i: waiting for modification time (gzip) */
  const    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
  const    EXLEN = 5;      /* i: waiting for extra length (gzip) */
  const    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
  const    NAME = 7;       /* i: waiting for end of file name (gzip) */
  const    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
  const    HCRC = 9;       /* i: waiting for header crc (gzip) */
  const    DICTID = 10;    /* i: waiting for dictionary check value */
  const    DICT = 11;      /* waiting for inflateSetDictionary() call */
  const        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
  const        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
  const        STORED = 14;    /* i: waiting for stored size (length and complement) */
  const        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
  const        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
  const        TABLE = 17;     /* i: waiting for dynamic block table lengths */
  const        LENLENS = 18;   /* i: waiting for code length code lengths */
  const        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
  const            LEN_ = 20;      /* i: same as LEN below, but only first time in */
  const            LEN = 21;       /* i: waiting for length/lit/eob code */
  const            LENEXT = 22;    /* i: waiting for length extra bits */
  const            DIST = 23;      /* i: waiting for distance code */
  const            DISTEXT = 24;   /* i: waiting for distance extra bits */
  const            MATCH = 25;     /* o: waiting for output space to copy string */
  const            LIT = 26;       /* o: waiting for output space to write literal */
  const    CHECK = 27;     /* i: waiting for 32-bit check value */
  const    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
  const    DONE = 29;      /* finished check, done -- remain here until reset */
  const    BAD = 30;       /* got a data error -- remain here until reset */
  const    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
  const    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

  /* ===========================================================================*/



  const ENOUGH_LENS = 852;
  const ENOUGH_DISTS = 592;
  //const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

  const MAX_WBITS = 15;
  /* 32K LZ77 window */
  const DEF_WBITS = MAX_WBITS;


  const zswap32 = (q) => {

    return  (((q >>> 24) & 0xff) +
            ((q >>> 8) & 0xff00) +
            ((q & 0xff00) << 8) +
            ((q & 0xff) << 24));
  };


  function InflateState() {
    this.mode = 0;             /* current inflate mode */
    this.last = false;          /* true if processing last block */
    this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
    this.havedict = false;      /* true if dictionary provided */
    this.flags = 0;             /* gzip header method and flags (0 if zlib) */
    this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
    this.check = 0;             /* protected copy of check value */
    this.total = 0;             /* protected copy of output count */
    // TODO: may be {}
    this.head = null;           /* where to save gzip header information */

    /* sliding window */
    this.wbits = 0;             /* log base 2 of requested window size */
    this.wsize = 0;             /* window size or zero if not using window */
    this.whave = 0;             /* valid bytes in the window */
    this.wnext = 0;             /* window write index */
    this.window = null;         /* allocated sliding window, if needed */

    /* bit accumulator */
    this.hold = 0;              /* input bit accumulator */
    this.bits = 0;              /* number of bits in "in" */

    /* for string and stored block copying */
    this.length = 0;            /* literal or length of data to copy */
    this.offset = 0;            /* distance back to copy string from */

    /* for table and code decoding */
    this.extra = 0;             /* extra bits needed */

    /* fixed and dynamic code tables */
    this.lencode = null;          /* starting table for length/literal codes */
    this.distcode = null;         /* starting table for distance codes */
    this.lenbits = 0;           /* index bits for lencode */
    this.distbits = 0;          /* index bits for distcode */

    /* dynamic table building */
    this.ncode = 0;             /* number of code length code lengths */
    this.nlen = 0;              /* number of length code lengths */
    this.ndist = 0;             /* number of distance code lengths */
    this.have = 0;              /* number of code lengths in lens[] */
    this.next = null;              /* next available space in codes[] */

    this.lens = new Uint16Array(320); /* temporary storage for code lengths */
    this.work = new Uint16Array(288); /* work area for code table building */

    /*
     because we don't have pointers in js, we use lencode and distcode directly
     as buffers so we don't need codes
    */
    //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
    this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
    this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
    this.sane = 0;                   /* if false, allow invalid distance too far */
    this.back = 0;                   /* bits back of last unprocessed length/lit */
    this.was = 0;                    /* initial length of match */
  }


  const inflateResetKeep = (strm) => {

    if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ''; /*Z_NULL*/
    if (state.wrap) {       /* to support ill-conceived Java test suite */
      strm.adler = state.wrap & 1;
    }
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null/*Z_NULL*/;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK$1;
  };


  const inflateReset = (strm) => {

    if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);

  };


  const inflateReset2 = (strm, windowBits) => {
    let wrap;

    /* get the state */
    if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
    const state = strm.state;

    /* extract wrap request from windowBits parameter */
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    }
    else {
      wrap = (windowBits >> 4) + 1;
      if (windowBits < 48) {
        windowBits &= 15;
      }
    }

    /* set number of window bits, free window if different */
    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR$1;
    }
    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }

    /* update state and reset the rest of it */
    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  };


  const inflateInit2 = (strm, windowBits) => {

    if (!strm) { return Z_STREAM_ERROR$1; }
    //strm.msg = Z_NULL;                 /* in case we return an error */

    const state = new InflateState();

    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.window = null/*Z_NULL*/;
    const ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK$1) {
      strm.state = null/*Z_NULL*/;
    }
    return ret;
  };


  const inflateInit = (strm) => {

    return inflateInit2(strm, DEF_WBITS);
  };


  /*
   Return state with length and distance decoding tables and index sizes set to
   fixed code decoding.  Normally this returns fixed tables from inffixed.h.
   If BUILDFIXED is defined, then instead this routine builds the tables the
   first time it's called, and returns those tables the first time and
   thereafter.  This reduces the size of the code by about 2K bytes, in
   exchange for a little execution time.  However, BUILDFIXED should not be
   used for threaded applications, since the rewriting of the tables and virgin
   may not be thread-safe.
   */
  let virgin = true;

  let lenfix, distfix; // We have no pointers in JS, so keep tables separate


  const fixedtables = (state) => {

    /* build fixed huffman tables if first call (may not be thread safe) */
    if (virgin) {
      lenfix = new Int32Array(512);
      distfix = new Int32Array(32);

      /* literal/length table */
      let sym = 0;
      while (sym < 144) { state.lens[sym++] = 8; }
      while (sym < 256) { state.lens[sym++] = 9; }
      while (sym < 280) { state.lens[sym++] = 7; }
      while (sym < 288) { state.lens[sym++] = 8; }

      inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

      /* distance table */
      sym = 0;
      while (sym < 32) { state.lens[sym++] = 5; }

      inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

      /* do this just once */
      virgin = false;
    }

    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  };


  /*
   Update the window with the last wsize (normally 32K) bytes written before
   returning.  If window does not exist yet, create it.  This is only called
   when a window is already in use, or when output has been written during this
   inflate call, but the end of the deflate stream has not been reached yet.
   It is also called to create a window for dictionary data when a dictionary
   is loaded.

   Providing output buffers larger than 32K to inflate() should provide a speed
   advantage, since only the last 32K of output is copied to the sliding window
   upon return from inflate(), and since all distances after the first 32K of
   output will fall in the output data, making match copies simpler and faster.
   The advantage may be dependent on the size of the processor's data caches.
   */
  const updatewindow = (strm, src, end, copy) => {

    let dist;
    const state = strm.state;

    /* if it hasn't been done already, allocate space for the window */
    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;

      state.window = new Uint8Array(state.wsize);
    }

    /* copy state->wsize or less output bytes into the circular window */
    if (copy >= state.wsize) {
      state.window.set(src.subarray(end - state.wsize, end), 0);
      state.wnext = 0;
      state.whave = state.wsize;
    }
    else {
      dist = state.wsize - state.wnext;
      if (dist > copy) {
        dist = copy;
      }
      //zmemcpy(state->window + state->wnext, end - copy, dist);
      state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
      copy -= dist;
      if (copy) {
        //zmemcpy(state->window, end - copy, copy);
        state.window.set(src.subarray(end - copy, end), 0);
        state.wnext = copy;
        state.whave = state.wsize;
      }
      else {
        state.wnext += dist;
        if (state.wnext === state.wsize) { state.wnext = 0; }
        if (state.whave < state.wsize) { state.whave += dist; }
      }
    }
    return 0;
  };


  const inflate$2 = (strm, flush) => {

    let state;
    let input, output;          // input/output buffers
    let next;                   /* next input INDEX */
    let put;                    /* next output INDEX */
    let have, left;             /* available input and output */
    let hold;                   /* bit buffer */
    let bits;                   /* bits in bit buffer */
    let _in, _out;              /* save starting available input and output */
    let copy;                   /* number of stored or match bytes to copy */
    let from;                   /* where to copy match bytes from */
    let from_source;
    let here = 0;               /* current decoding table entry */
    let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */
    let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    let len;                    /* length to copy for repeats, bits to drop */
    let ret;                    /* return code */
    const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
    let opts;

    let n; // temporary variable for NEED_BITS

    const order = /* permutation of code lengths */
      new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


    if (!strm || !strm.state || !strm.output ||
        (!strm.input && strm.avail_in !== 0)) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;
    if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---

    _in = have;
    _out = left;
    ret = Z_OK$1;

    inf_leave: // goto emulation
    for (;;) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          //=== NEEDBITS(16);
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
            state.check = 0/*crc32(0L, Z_NULL, 0)*/;
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//

            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;           /* expect zlib header */
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) ||   /* check if zlib header allowed */
            (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
            strm.msg = 'incorrect header check';
            state.mode = BAD;
            break;
          }
          if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
            strm.msg = 'unknown compression method';
            state.mode = BAD;
            break;
          }
          //--- DROPBITS(4) ---//
          hold >>>= 4;
          bits -= 4;
          //---//
          len = (hold & 0x0f)/*BITS(4)*/ + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          }
          else if (len > state.wbits) {
            strm.msg = 'invalid window size';
            state.mode = BAD;
            break;
          }

          // !!! pako patch. Force use `options.windowBits` if passed.
          // Required to always use max window size by default.
          state.dmax = 1 << state.wbits;
          //state.dmax = 1 << len;

          //Tracev((stderr, "inflate:   zlib header ok\n"));
          strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
          state.mode = hold & 0x200 ? DICTID : TYPE;
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          break;
        case FLAGS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.flags = hold;
          if ((state.flags & 0xff) !== Z_DEFLATED) {
            strm.msg = 'unknown compression method';
            state.mode = BAD;
            break;
          }
          if (state.flags & 0xe000) {
            strm.msg = 'unknown header flags set';
            state.mode = BAD;
            break;
          }
          if (state.head) {
            state.head.text = ((hold >> 8) & 1);
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = TIME;
          /* falls through */
        case TIME:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC4(state.check, hold)
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            hbuf[2] = (hold >>> 16) & 0xff;
            hbuf[3] = (hold >>> 24) & 0xff;
            state.check = crc32_1(state.check, hbuf, 4, 0);
            //===
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = OS;
          /* falls through */
        case OS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.head) {
            state.head.xflags = (hold & 0xff);
            state.head.os = (hold >> 8);
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = EXLEN;
          /* falls through */
        case EXLEN:
          if (state.flags & 0x0400) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0);
              //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
          }
          else if (state.head) {
            state.head.extra = null/*Z_NULL*/;
          }
          state.mode = EXTRA;
          /* falls through */
        case EXTRA:
          if (state.flags & 0x0400) {
            copy = state.length;
            if (copy > have) { copy = have; }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  // Use untyped array for more convenient processing later
                  state.head.extra = new Uint8Array(state.head.extra_len);
                }
                state.head.extra.set(
                  input.subarray(
                    next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    next + copy
                  ),
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
                //zmemcpy(state.head.extra + len, next,
                //        len + copy > state.head.extra_max ?
                //        state.head.extra_max - len : copy);
              }
              if (state.flags & 0x0200) {
                state.check = crc32_1(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) { break inf_leave; }
          }
          state.length = 0;
          state.mode = NAME;
          /* falls through */
        case NAME:
          if (state.flags & 0x0800) {
            if (have === 0) { break inf_leave; }
            copy = 0;
            do {
              // TODO: 2 or 1 bytes?
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */
              if (state.head && len &&
                  (state.length < 65536 /*state.head.name_max*/)) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) { break inf_leave; }
          }
          else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
          /* falls through */
        case COMMENT:
          if (state.flags & 0x1000) {
            if (have === 0) { break inf_leave; }
            copy = 0;
            do {
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */
              if (state.head && len &&
                  (state.length < 65536 /*state.head.comm_max*/)) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) { break inf_leave; }
          }
          else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
          /* falls through */
        case HCRC:
          if (state.flags & 0x0200) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (hold !== (state.check & 0xffff)) {
              strm.msg = 'header crc mismatch';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
          }
          if (state.head) {
            state.head.hcrc = ((state.flags >> 9) & 1);
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE;
          break;
        case DICTID:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          strm.adler = state.check = zswap32(hold);
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = DICT;
          /* falls through */
        case DICT:
          if (state.havedict === 0) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---
            return Z_NEED_DICT$1;
          }
          strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
          state.mode = TYPE;
          /* falls through */
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case TYPEDO:
          if (state.last) {
            //--- BYTEBITS() ---//
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            state.mode = CHECK;
            break;
          }
          //=== NEEDBITS(3); */
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.last = (hold & 0x01)/*BITS(1)*/;
          //--- DROPBITS(1) ---//
          hold >>>= 1;
          bits -= 1;
          //---//

          switch ((hold & 0x03)/*BITS(2)*/) {
            case 0:                             /* stored block */
              //Tracev((stderr, "inflate:     stored block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = STORED;
              break;
            case 1:                             /* fixed block */
              fixedtables(state);
              //Tracev((stderr, "inflate:     fixed codes block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = LEN_;             /* decode codes */
              if (flush === Z_TREES) {
                //--- DROPBITS(2) ---//
                hold >>>= 2;
                bits -= 2;
                //---//
                break inf_leave;
              }
              break;
            case 2:                             /* dynamic block */
              //Tracev((stderr, "inflate:     dynamic codes block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = 'invalid block type';
              state.mode = BAD;
          }
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break;
        case STORED:
          //--- BYTEBITS() ---// /* go to byte boundary */
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
            strm.msg = 'invalid stored block lengths';
            state.mode = BAD;
            break;
          }
          state.length = hold & 0xffff;
          //Tracev((stderr, "inflate:       stored length %u\n",
          //        state.length));
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = COPY_;
          if (flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case COPY_:
          state.mode = COPY;
          /* falls through */
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) { copy = have; }
            if (copy > left) { copy = left; }
            if (copy === 0) { break inf_leave; }
            //--- zmemcpy(put, next, copy); ---
            output.set(input.subarray(next, next + copy), put);
            //---//
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          //Tracev((stderr, "inflate:       stored end\n"));
          state.mode = TYPE;
          break;
        case TABLE:
          //=== NEEDBITS(14); */
          while (bits < 14) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
          //--- DROPBITS(5) ---//
          hold >>>= 5;
          bits -= 5;
          //---//
          state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
          //--- DROPBITS(5) ---//
          hold >>>= 5;
          bits -= 5;
          //---//
          state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
          //--- DROPBITS(4) ---//
          hold >>>= 4;
          bits -= 4;
          //---//
  //#ifndef PKZIP_BUG_WORKAROUND
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = 'too many length or distance symbols';
            state.mode = BAD;
            break;
          }
  //#endif
          //Tracev((stderr, "inflate:       table sizes ok\n"));
          state.have = 0;
          state.mode = LENLENS;
          /* falls through */
        case LENLENS:
          while (state.have < state.ncode) {
            //=== NEEDBITS(3);
            while (bits < 3) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          // We have separate tables & no pointers. 2 commented lines below not needed.
          //state.next = state.codes;
          //state.lencode = state.next;
          // Switch to use dynamic table
          state.lencode = state.lendyn;
          state.lenbits = 7;

          opts = { bits: state.lenbits };
          ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;

          if (ret) {
            strm.msg = 'invalid code lengths set';
            state.mode = BAD;
            break;
          }
          //Tracev((stderr, "inflate:       code lengths ok\n"));
          state.have = 0;
          state.mode = CODELENS;
          /* falls through */
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (;;) {
              here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;

              if ((here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            if (here_val < 16) {
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.lens[state.have++] = here_val;
            }
            else {
              if (here_val === 16) {
                //=== NEEDBITS(here.bits + 2);
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                if (state.have === 0) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 0x03);//BITS(2);
                //--- DROPBITS(2) ---//
                hold >>>= 2;
                bits -= 2;
                //---//
              }
              else if (here_val === 17) {
                //=== NEEDBITS(here.bits + 3);
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                len = 0;
                copy = 3 + (hold & 0x07);//BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
                //---//
              }
              else {
                //=== NEEDBITS(here.bits + 7);
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                len = 0;
                copy = 11 + (hold & 0x7f);//BITS(7);
                //--- DROPBITS(7) ---//
                hold >>>= 7;
                bits -= 7;
                //---//
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }

          /* handle error breaks in while */
          if (state.mode === BAD) { break; }

          /* check for end-of-block code (better have one) */
          if (state.lens[256] === 0) {
            strm.msg = 'invalid code -- missing end-of-block';
            state.mode = BAD;
            break;
          }

          /* build code tables -- note: do not change the lenbits or distbits
             values here (9 and 6) without reading the comments in inftrees.h
             concerning the ENOUGH constants, which depend on those values */
          state.lenbits = 9;

          opts = { bits: state.lenbits };
          ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;
          state.lenbits = opts.bits;
          // state.lencode = state.next;

          if (ret) {
            strm.msg = 'invalid literal/lengths set';
            state.mode = BAD;
            break;
          }

          state.distbits = 6;
          //state.distcode.copy(state.codes);
          // Switch to use dynamic table
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;
          state.distbits = opts.bits;
          // state.distcode = state.next;

          if (ret) {
            strm.msg = 'invalid distances set';
            state.mode = BAD;
            break;
          }
          //Tracev((stderr, 'inflate:       codes ok\n'));
          state.mode = LEN_;
          if (flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case LEN_:
          state.mode = LEN;
          /* falls through */
        case LEN:
          if (have >= 6 && left >= 258) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---
            inffast(strm, _out);
            //--- LOAD() ---
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            //---

            if (state.mode === TYPE) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_op && (here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;;) {
              here = state.lencode[last_val +
                      ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;

              if ((last_bits + here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            //--- DROPBITS(last.bits) ---//
            hold >>>= last_bits;
            bits -= last_bits;
            //---//
            state.back += last_bits;
          }
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.back = -1;
            state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
          /* falls through */
        case LENEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
            //--- DROPBITS(state.extra) ---//
            hold >>>= state.extra;
            bits -= state.extra;
            //---//
            state.back += state.extra;
          }
          //Tracevv((stderr, "inflate:         length %u\n", state.length));
          state.was = state.length;
          state.mode = DIST;
          /* falls through */
        case DIST:
          for (;;) {
            here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if ((here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;;) {
              here = state.distcode[last_val +
                      ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;

              if ((last_bits + here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            //--- DROPBITS(last.bits) ---//
            hold >>>= last_bits;
            bits -= last_bits;
            //---//
            state.back += last_bits;
          }
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break;
          }
          state.offset = here_val;
          state.extra = (here_op) & 15;
          state.mode = DISTEXT;
          /* falls through */
        case DISTEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
            //--- DROPBITS(state.extra) ---//
            hold >>>= state.extra;
            bits -= state.extra;
            //---//
            state.back += state.extra;
          }
  //#ifdef INFLATE_STRICT
          if (state.offset > state.dmax) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
  //#endif
          //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
          state.mode = MATCH;
          /* falls through */
        case MATCH:
          if (left === 0) { break inf_leave; }
          copy = _out - left;
          if (state.offset > copy) {         /* copy from window */
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              }
  // (!) This block is disabled in zlib defaults,
  // don't enable it for binary compatibility
  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
  //          Trace((stderr, "inflate.c too far\n"));
  //          copy -= state.whave;
  //          if (copy > state.length) { copy = state.length; }
  //          if (copy > left) { copy = left; }
  //          left -= copy;
  //          state.length -= copy;
  //          do {
  //            output[put++] = 0;
  //          } while (--copy);
  //          if (state.length === 0) { state.mode = LEN; }
  //          break;
  //#endif
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            }
            else {
              from = state.wnext - copy;
            }
            if (copy > state.length) { copy = state.length; }
            from_source = state.window;
          }
          else {                              /* copy from output */
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) { copy = left; }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) { state.mode = LEN; }
          break;
        case LIT:
          if (left === 0) { break inf_leave; }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              // Use '|' instead of '+' to make sure that result is signed
              hold |= input[next++] << bits;
              bits += 8;
            }
            //===//
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

            }
            _out = left;
            // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = 'incorrect data check';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
          }
          state.mode = LENGTH;
          /* falls through */
        case LENGTH:
          if (state.wrap && state.flags) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (hold !== (state.total & 0xffffffff)) {
              strm.msg = 'incorrect length check';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
          }
          state.mode = DONE;
          /* falls through */
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR$1;
        case SYNC:
          /* falls through */
        default:
          return Z_STREAM_ERROR$1;
      }
    }

    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

    /*
       Return from inflate(), updating the total counts and the check value.
       If there was no progress during the inflate() call, return a buffer
       error.  Call updatewindow() to create and/or update the window state.
       Note: a memory error from inflate() is non-recoverable.
     */

    //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---

    if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                        (state.mode < CHECK || flush !== Z_FINISH$1))) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) {
      strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
    }
    strm.data_type = state.bits + (state.last ? 64 : 0) +
                      (state.mode === TYPE ? 128 : 0) +
                      (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
      ret = Z_BUF_ERROR;
    }
    return ret;
  };


  const inflateEnd = (strm) => {

    if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
      return Z_STREAM_ERROR$1;
    }

    let state = strm.state;
    if (state.window) {
      state.window = null;
    }
    strm.state = null;
    return Z_OK$1;
  };


  const inflateGetHeader = (strm, head) => {

    /* check state */
    if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
    const state = strm.state;
    if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

    /* save header structure */
    state.head = head;
    head.done = false;
    return Z_OK$1;
  };


  const inflateSetDictionary = (strm, dictionary) => {
    const dictLength = dictionary.length;

    let state;
    let dictid;
    let ret;

    /* check state */
    if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR$1; }
    state = strm.state;

    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR$1;
    }

    /* check for correct dictionary identifier */
    if (state.mode === DICT) {
      dictid = 1; /* adler32(0, null, 0)*/
      /* dictid = adler32(dictid, dictionary, dictLength); */
      dictid = adler32_1(dictid, dictionary, dictLength, 0);
      if (dictid !== state.check) {
        return Z_DATA_ERROR$1;
      }
    }
    /* copy dictionary to window using updatewindow(), which will amend the
     existing dictionary if appropriate */
    ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK$1;
  };


  var inflateReset_1 = inflateReset;
  var inflateReset2_1 = inflateReset2;
  var inflateResetKeep_1 = inflateResetKeep;
  var inflateInit_1 = inflateInit;
  var inflateInit2_1 = inflateInit2;
  var inflate_2$1 = inflate$2;
  var inflateEnd_1 = inflateEnd;
  var inflateGetHeader_1 = inflateGetHeader;
  var inflateSetDictionary_1 = inflateSetDictionary;
  var inflateInfo = 'pako inflate (from Nodeca project)';

  /* Not implemented
  module.exports.inflateCopy = inflateCopy;
  module.exports.inflateGetDictionary = inflateGetDictionary;
  module.exports.inflateMark = inflateMark;
  module.exports.inflatePrime = inflatePrime;
  module.exports.inflateSync = inflateSync;
  module.exports.inflateSyncPoint = inflateSyncPoint;
  module.exports.inflateUndermine = inflateUndermine;
  */

  var inflate_1$2 = {
  	inflateReset: inflateReset_1,
  	inflateReset2: inflateReset2_1,
  	inflateResetKeep: inflateResetKeep_1,
  	inflateInit: inflateInit_1,
  	inflateInit2: inflateInit2_1,
  	inflate: inflate_2$1,
  	inflateEnd: inflateEnd_1,
  	inflateGetHeader: inflateGetHeader_1,
  	inflateSetDictionary: inflateSetDictionary_1,
  	inflateInfo: inflateInfo
  };

  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function GZheader() {
    /* true if compressed data believed to be text */
    this.text       = 0;
    /* modification time */
    this.time       = 0;
    /* extra flags (not used when writing a gzip file) */
    this.xflags     = 0;
    /* operating system */
    this.os         = 0;
    /* pointer to extra field or Z_NULL if none */
    this.extra      = null;
    /* extra field length (valid if extra != Z_NULL) */
    this.extra_len  = 0; // Actually, we don't need it in JS,
                         // but leave for few code modifications

    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //

    /* space at extra (only when reading header) */
    // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */
    this.name       = '';
    /* space at name (only when reading header) */
    // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */
    this.comment    = '';
    /* space at comment (only when reading header) */
    // this.comm_max   = 0;
    /* true if there was or will be a header crc */
    this.hcrc       = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */
    this.done       = false;
  }

  var gzheader = GZheader;

  const toString = Object.prototype.toString;

  /* Public constants ==========================================================*/
  /* ===========================================================================*/

  const {
    Z_NO_FLUSH, Z_FINISH,
    Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
  } = constants$2;

  /* ===========================================================================*/


  /**
   * class Inflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[inflate]]
   * and [[inflateRaw]].
   **/

  /* internal
   * inflate.chunks -> Array
   *
   * Chunks of output data, if [[Inflate#onData]] not overridden.
   **/

  /**
   * Inflate.result -> Uint8Array|String
   *
   * Uncompressed result, generated by default [[Inflate#onData]]
   * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
   **/

  /**
   * Inflate.err -> Number
   *
   * Error code after inflate finished. 0 (Z_OK) on success.
   * Should be checked if broken data possible.
   **/

  /**
   * Inflate.msg -> String
   *
   * Error message, if [[Inflate.err]] != 0
   **/


  /**
   * new Inflate(options)
   * - options (Object): zlib inflate options.
   *
   * Creates new inflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `windowBits`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw inflate
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   * By default, when no options set, autodetect deflate/gzip data format via
   * wrapper header.
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako')
   * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
   * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * const inflate = new pako.Inflate({ level: 3});
   *
   * inflate.push(chunk1, false);
   * inflate.push(chunk2, true);  // true -> last chunk
   *
   * if (inflate.err) { throw new Error(inflate.err); }
   *
   * console.log(inflate.result);
   * ```
   **/
  function Inflate$1(options) {
    this.options = common.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ''
    }, options || {});

    const opt = this.options;

    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
      opt.windowBits = -opt.windowBits;
      if (opt.windowBits === 0) { opt.windowBits = -15; }
    }

    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
        !(options && options.windowBits)) {
      opt.windowBits += 32;
    }

    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
      // bit 3 (16) -> gzipped data
      // bit 4 (32) -> autodetect gzip/deflate
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }

    this.err    = 0;      // error code, if happens (0 = Z_OK)
    this.msg    = '';     // error message
    this.ended  = false;  // used to avoid multiple onEnd() calls
    this.chunks = [];     // chunks of compressed data

    this.strm   = new zstream();
    this.strm.avail_out = 0;

    let status  = inflate_1$2.inflateInit2(
      this.strm,
      opt.windowBits
    );

    if (status !== Z_OK) {
      throw new Error(messages[status]);
    }

    this.header = new gzheader();

    inflate_1$2.inflateGetHeader(this.strm, this.header);

    // Setup dictionary
    if (opt.dictionary) {
      // Convert data if needed
      if (typeof opt.dictionary === 'string') {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }
      if (opt.raw) { //In raw mode we need to set the dictionary early
        status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
        if (status !== Z_OK) {
          throw new Error(messages[status]);
        }
      }
    }
  }

  /**
   * Inflate#push(data[, flush_mode]) -> Boolean
   * - data (Uint8Array|ArrayBuffer): input data
   * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
   *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
   *   `true` means Z_FINISH.
   *
   * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
   * new output chunks. Returns `true` on success. If end of stream detected,
   * [[Inflate#onEnd]] will be called.
   *
   * `flush_mode` is not needed for normal operation, because end of stream
   * detected automatically. You may try to use it for advanced things, but
   * this functionality was not tested.
   *
   * On fail call [[Inflate#onEnd]] with error code and return false.
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/
  Inflate$1.prototype.push = function (data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;

    if (this.ended) return false;

    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

    // Convert data if needed
    if (toString.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    for (;;) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }

      status = inflate_1$2.inflate(strm, _flush_mode);

      if (status === Z_NEED_DICT && dictionary) {
        status = inflate_1$2.inflateSetDictionary(strm, dictionary);

        if (status === Z_OK) {
          status = inflate_1$2.inflate(strm, _flush_mode);
        } else if (status === Z_DATA_ERROR) {
          // Replace code with more verbose
          status = Z_NEED_DICT;
        }
      }

      // Skip snyc markers if more data follows and not raw mode
      while (strm.avail_in > 0 &&
             status === Z_STREAM_END &&
             strm.state.wrap > 0 &&
             data[strm.next_in] !== 0)
      {
        inflate_1$2.inflateReset(strm);
        status = inflate_1$2.inflate(strm, _flush_mode);
      }

      switch (status) {
        case Z_STREAM_ERROR:
        case Z_DATA_ERROR:
        case Z_NEED_DICT:
        case Z_MEM_ERROR:
          this.onEnd(status);
          this.ended = true;
          return false;
      }

      // Remember real `avail_out` value, because we may patch out buffer content
      // to align utf8 strings boundaries.
      last_avail_out = strm.avail_out;

      if (strm.next_out) {
        if (strm.avail_out === 0 || status === Z_STREAM_END) {

          if (this.options.to === 'string') {

            let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

            let tail = strm.next_out - next_out_utf8;
            let utf8str = strings.buf2string(strm.output, next_out_utf8);

            // move tail & realign counters
            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

            this.onData(utf8str);

          } else {
            this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
          }
        }
      }

      // Must repeat iteration if out buffer is full
      if (status === Z_OK && last_avail_out === 0) continue;

      // Finalize if end of stream reached.
      if (status === Z_STREAM_END) {
        status = inflate_1$2.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return true;
      }

      if (strm.avail_in === 0) break;
    }

    return true;
  };


  /**
   * Inflate#onData(chunk) -> Void
   * - chunk (Uint8Array|String): output data. When string output requested,
   *   each chunk will be string.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/
  Inflate$1.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };


  /**
   * Inflate#onEnd(status) -> Void
   * - status (Number): inflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called either after you tell inflate that the input stream is
   * complete (Z_FINISH). By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/
  Inflate$1.prototype.onEnd = function (status) {
    // On success - join
    if (status === Z_OK) {
      if (this.options.to === 'string') {
        this.result = this.chunks.join('');
      } else {
        this.result = common.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };


  /**
   * inflate(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Decompress `data` with inflate/ungzip and `options`. Autodetect
   * format via wrapper header by default. That's why we don't provide
   * separate `ungzip` method.
   *
   * Supported options are:
   *
   * - windowBits
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information.
   *
   * Sugar (options):
   *
   * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
   *   negative windowBits implicitly.
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako');
   * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
   * let output;
   *
   * try {
   *   output = pako.inflate(input);
   * } catch (err) {
   *   console.log(err);
   * }
   * ```
   **/
  function inflate$1(input, options) {
    const inflator = new Inflate$1(options);

    inflator.push(input);

    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || messages[inflator.err];

    return inflator.result;
  }


  /**
   * inflateRaw(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * The same as [[inflate]], but creates raw data, without wrapper
   * (header and adler32 crc).
   **/
  function inflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
  }


  /**
   * ungzip(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Just shortcut to [[inflate]], because it autodetects format
   * by header.content. Done for convenience.
   **/


  var Inflate_1$1 = Inflate$1;
  var inflate_2 = inflate$1;
  var inflateRaw_1$1 = inflateRaw$1;
  var ungzip$1 = inflate$1;
  var constants = constants$2;

  var inflate_1$1 = {
  	Inflate: Inflate_1$1,
  	inflate: inflate_2,
  	inflateRaw: inflateRaw_1$1,
  	ungzip: ungzip$1,
  	constants: constants
  };

  const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
  var inflate_1 = inflate;

  /*
   * minilzo-js
   * JavaScript port of minilzo by Alistair Braidwood
   *
   *
   * This library is free software; you can redistribute it and/or
   *  modify it under the terms of the GNU General Public License as
   *  published by the Free Software Foundation; either version 2 of
   *  the License, or (at your option) any later version.
   *
   * You should have received a copy of the GNU General Public License
   *  along with the minilzo-js library; see the file COPYING.
   *  If not, write to the Free Software Foundation, Inc.,
   *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
   */

  /*
   * original minilzo.c by:
   *
   * Markus F.X.J. Oberhumer
   * <markus@oberhumer.com>
   * http://www.oberhumer.com/opensource/lzo/
   */

  /*
   * NOTE:
   *   the full LZO package can be found at
   *   http://www.oberhumer.com/opensource/lzo/
   */
  var lzo = function () {
    var _lzo1x = function _lzo1x() {};

    _lzo1x.prototype = {
      blockSize: 4096,
      OK: 0,
      INPUT_OVERRUN: -4,
      OUTPUT_OVERRUN: -5,
      LOOKBEHIND_OVERRUN: -6,
      EOF_FOUND: -999,
      buf: null,
      buf32: null,
      out: null,
      out32: null,
      cbl: 0,
      ip_end: 0,
      op_end: 0,
      t: 0,
      ip: 0,
      op: 0,
      m_pos: 0,
      skipToFirstLiteralFun: false,
      extendBuffer: function extendBuffer() {
        var newBuffer = new Uint8Array(this.cbl + this.blockSize);
        newBuffer.set(this.out);
        this.out = newBuffer;
        this.out32 = new Uint32Array(this.out.buffer);
        this.state.outputBuffer = this.out;
        this.cbl = this.out.length;
      },
      match_next: function match_next() {
        // if (op_end - op < t) return OUTPUT_OVERRUN;
        // if (ip_end - ip < t+3) return INPUT_OVERRUN;
        while (this.op + 3 > this.cbl) {
          this.extendBuffer();
        }

        this.out[this.op++] = this.buf[this.ip++];

        if (this.t > 1) {
          this.out[this.op++] = this.buf[this.ip++];

          if (this.t > 2) {
            this.out[this.op++] = this.buf[this.ip++];
          }
        }

        this.t = this.buf[this.ip++];
      },
      match_done: function match_done() {
        this.t = this.buf[this.ip - 2] & 3;
        return this.t;
      },
      copy_match: function copy_match() {
        this.t += 2;

        while (this.op + this.t > this.cbl) {
          this.extendBuffer();
        }

        if (this.t > 4 && this.op % 4 === this.m_pos % 4) {
          while (this.op % 4 > 0) {
            this.out[this.op++] = this.out[this.m_pos++];
            this.t--;
          }

          while (this.t > 4) {
            this.out32[0 | this.op / 4] = this.out32[0 | this.m_pos / 4];
            this.op += 4;
            this.m_pos += 4;
            this.t -= 4;
          }
        }

        do {
          this.out[this.op++] = this.out[this.m_pos++];
        } while (--this.t > 0);
      },
      copy_from_buf: function copy_from_buf() {
        while (this.op + this.t > this.cbl) {
          this.extendBuffer();
        }

        if (this.t > 4 && this.op % 4 === this.ip % 4) {
          while (this.op % 4 > 0) {
            this.out[this.op++] = this.buf[this.ip++];
            this.t--;
          }

          while (this.t > 4) {
            this.out32[0 | this.op / 4] = this.buf32[0 | this.ip / 4];
            this.op += 4;
            this.ip += 4;
            this.t -= 4;
          }
        }

        do {
          this.out[this.op++] = this.buf[this.ip++];
        } while (--this.t > 0);
      },
      match: function match() {
        for (;;) {
          if (this.t >= 64) {
            this.m_pos = this.op - 1;
            this.m_pos -= this.t >> 2 & 7;
            this.m_pos -= this.buf[this.ip++] << 3;
            this.t = (this.t >> 5) - 1; // if ( m_pos < out || m_pos >= op) return LOOKBEHIND_OVERRUN;
            // if (op_end - op < t+3-1) return OUTPUT_OVERRUN;

            this.copy_match();

            if (this.match_done() === 0) {
              break;
            } else {
              this.match_next();
              continue;
            }
          } else if (this.t >= 32) {
            this.t &= 31;

            if (this.t === 0) {
              while (this.buf[this.ip] === 0) {
                this.t += 255;
                this.ip++; // if (t > -511) return OUTPUT_OVERRUN;
                // if (ip_end - ip < 1) return INPUT_OVERRUN;
              }

              this.t += 31 + this.buf[this.ip++]; // if (ip_end - ip < 2) return INPUT_OVERRUN;
            }

            this.m_pos = this.op - 1;
            this.m_pos -= (this.buf[this.ip] >> 2) + (this.buf[this.ip + 1] << 6);
            this.ip += 2;
          } else if (this.t >= 16) {
            this.m_pos = this.op;
            this.m_pos -= (this.t & 8) << 11;
            this.t &= 7;

            if (this.t === 0) {
              while (this.buf[this.ip] === 0) {
                this.t += 255;
                this.ip++; // if (t > -511) return OUTPUT_OVERRUN;
                // if (ip_end - ip < 1) return INPUT_OVERRUN;
              }

              this.t += 7 + this.buf[this.ip++]; // if (ip_end - ip < 2) return INPUT_OVERRUN;
            }

            this.m_pos -= (this.buf[this.ip] >> 2) + (this.buf[this.ip + 1] << 6);
            this.ip += 2;

            if (this.m_pos === this.op) {
              this.state.outputBuffer = this.state.outputBuffer.subarray(0, this.op);
              return this.EOF_FOUND;
            }

            this.m_pos -= 0x4000;
          } else {
            this.m_pos = this.op - 1;
            this.m_pos -= this.t >> 2;
            this.m_pos -= this.buf[this.ip++] << 2; // if (m_pos < out || m_pos >= op) return LOOKBEHIND_OVERRUN;
            // if (op_end - op < 2) return OUTPUT_OVERRUN;

            while (this.op + 2 > this.cbl) {
              this.extendBuffer();
            }

            this.out[this.op++] = this.out[this.m_pos++];
            this.out[this.op++] = this.out[this.m_pos];

            if (this.match_done() === 0) {
              break;
            } else {
              this.match_next();
              continue;
            }
          } // if (m_pos < out || m_pos >= op) return LOOKBEHIND_OVERRUN;
          // if (op_end - op < t+3-1) return OUTPUT_OVERRUN;


          this.copy_match();

          if (this.match_done() === 0) {
            break;
          }

          this.match_next();
        }

        return this.OK;
      },
      decompress: function decompress(state) {
        this.state = state;
        this.buf = this.state.inputBuffer;
        var buf_4b = new Uint8Array(this.buf.length + (4 - this.buf.length % 4));
        buf_4b.set(this.buf);
        this.buf32 = new Uint32Array(buf_4b.buffer);
        this.out = new Uint8Array(this.buf.length + (this.blockSize - this.buf.length % this.blockSize));
        this.out32 = new Uint32Array(this.out.buffer);
        this.cbl = this.out.length;
        this.state.outputBuffer = this.out;
        this.ip_end = this.buf.length;
        this.op_end = this.out.length;
        this.t = 0;
        this.ip = 0;
        this.op = 0;
        this.m_pos = 0;
        this.skipToFirstLiteralFun = false;
        var ret; // if (ip_end - ip < 1) return INPUT_OVERRUN;

        if (this.buf[this.ip] > 17) {
          this.t = this.buf[this.ip++] - 17;

          if (this.t < 4) {
            this.match_next();
            ret = this.match();

            if (ret !== this.OK) {
              return ret === this.EOF_FOUND ? this.OK : ret;
            }
          } else {
            // if (op_end - op < t) return OUTPUT_OVERRUN;
            // if (ip_end - ip < t+3) return INPUT_OVERRUN;
            this.copy_from_buf();
            this.skipToFirstLiteralFun = true;
          }
        }

        for (;;) {
          if (!this.skipToFirstLiteralFun) {
            // if (ip_end - ip < 3) return INPUT_OVERRUN;
            this.t = this.buf[this.ip++];

            if (this.t >= 16) {
              ret = this.match();

              if (ret !== this.OK) {
                return ret === this.EOF_FOUND ? this.OK : ret;
              }

              continue;
            }

            if (this.t === 0) {
              while (this.buf[this.ip] === 0) {
                this.t += 255;
                this.ip++; // if (t > 511) return INPUT_OVERRUN;
                // if (ip_end - ip < 1) return INPUT_OVERRUN;
              }

              this.t += 15 + this.buf[this.ip++];
            } // if (op_end - op < t+3) return OUTPUT_OVERRUN;
            // if (ip_end - ip < t+6) return INPUT_OVERRUN;


            this.t += 3;
            this.copy_from_buf();
          } else {
            this.skipToFirstLiteralFun = false;
          }

          this.t = this.buf[this.ip++];

          if (this.t < 16) {
            this.m_pos = this.op - (1 + 0x0800);
            this.m_pos -= this.t >> 2;
            this.m_pos -= this.buf[this.ip++] << 2; // if ( m_pos <  out || m_pos >= op) return LOOKBEHIND_OVERRUN;
            // if (op_end - op < 3) return OUTPUT_OVERRUN;

            while (this.op + 3 > this.cbl) {
              this.extendBuffer();
            }

            this.out[this.op++] = this.out[this.m_pos++];
            this.out[this.op++] = this.out[this.m_pos++];
            this.out[this.op++] = this.out[this.m_pos];

            if (this.match_done() === 0) {
              continue;
            } else {
              this.match_next();
            }
          }

          ret = this.match();

          if (ret !== this.OK) {
            return ret === this.EOF_FOUND ? this.OK : ret;
          }
        }

        return this.OK;
      },
      _compressCore: function _compressCore(in_len, ti) {
        var ip_start = this.ip;
        var ip_end = this.ip + in_len - 20;
        var ii = this.ip;
        this.ip += ti < 4 ? 4 - ti : 0;
        var m_pos;
        var m_off;
        var m_len;
        var dv_hi;
        var dv_lo;
        var dindex;
        this.ip += 1 + (this.ip - ii >> 5);

        for (;;) {
          if (this.ip >= ip_end) {
            break;
          } // dv = this.buf[this.ip] | (this.buf[this.ip + 1] << 8) | (this.buf[this.ip + 2] << 16) | (this.buf[this.ip + 3] << 24);
          // dindex = ((0x1824429d * dv) >> 18) & 16383;
          // The above code doesn't work in JavaScript due to a lack of 64 bit bitwise operations
          // Instead, use (optimised two's complement integer arithmetic)
          // Optimization is based on us only needing the high 16 bits of the lower 32 bit integer.


          dv_lo = this.buf[this.ip] | this.buf[this.ip + 1] << 8;
          dv_hi = this.buf[this.ip + 2] | this.buf[this.ip + 3] << 8;
          dindex = ((dv_lo * 0x429d >>> 16) + dv_hi * 0x429d + dv_lo * 0x1824 & 0xFFFF) >>> 2;
          m_pos = ip_start + this.dict[dindex];
          this.dict[dindex] = this.ip - ip_start;

          if ((dv_hi << 16) + dv_lo !== (this.buf[m_pos] | this.buf[m_pos + 1] << 8 | this.buf[m_pos + 2] << 16 | this.buf[m_pos + 3] << 24)) {
            this.ip += 1 + (this.ip - ii >> 5);
            continue;
          }

          ii -= ti;
          ti = 0;
          var t = this.ip - ii;

          if (t !== 0) {
            if (t <= 3) {
              this.out[this.op - 2] |= t;

              do {
                this.out[this.op++] = this.buf[ii++];
              } while (--t > 0);
            } else {
              if (t <= 18) {
                this.out[this.op++] = t - 3;
              } else {
                var tt = t - 18;
                this.out[this.op++] = 0;

                while (tt > 255) {
                  tt -= 255;
                  this.out[this.op++] = 0;
                }

                this.out[this.op++] = tt;
              }

              do {
                this.out[this.op++] = this.buf[ii++];
              } while (--t > 0);
            }
          }

          m_len = 4; // let skipTo_m_len_done = false;

          if (this.buf[this.ip + m_len] === this.buf[m_pos + m_len]) {
            do {
              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              m_len += 1;

              if (this.buf[this.ip + m_len] !== this.buf[m_pos + m_len]) {
                break;
              }

              if (this.ip + m_len >= ip_end) {
                // skipTo_m_len_done = true;
                break;
              }
            } while (this.buf[this.ip + m_len] === this.buf[m_pos + m_len]);
          } // if (!skipTo_m_len_done) {
          //     let inc = this.ctzl(this.buf[this.ip + m_len] ^ this.buf[m_pos + m_len]) >> 3;
          //     m_len += inc;
          // }


          m_off = this.ip - m_pos;
          this.ip += m_len;
          ii = this.ip;

          if (m_len <= 8 && m_off <= 0x0800) {
            m_off -= 1;
            this.out[this.op++] = m_len - 1 << 5 | (m_off & 7) << 2;
            this.out[this.op++] = m_off >> 3;
          } else if (m_off <= 0x4000) {
            m_off -= 1;

            if (m_len <= 33) {
              this.out[this.op++] = 32 | m_len - 2;
            } else {
              m_len -= 33;
              this.out[this.op++] = 32;

              while (m_len > 255) {
                m_len -= 255;
                this.out[this.op++] = 0;
              }

              this.out[this.op++] = m_len;
            }

            this.out[this.op++] = m_off << 2;
            this.out[this.op++] = m_off >> 6;
          } else {
            m_off -= 0x4000;

            if (m_len <= 9) {
              this.out[this.op++] = 16 | m_off >> 11 & 8 | m_len - 2;
            } else {
              m_len -= 9;
              this.out[this.op++] = 16 | m_off >> 11 & 8;

              while (m_len > 255) {
                m_len -= 255;
                this.out[this.op++] = 0;
              }

              this.out[this.op++] = m_len;
            }

            this.out[this.op++] = m_off << 2;
            this.out[this.op++] = m_off >> 6;
          }
        }

        return in_len - (ii - ip_start - ti);
      },
      compress: function compress(state) {
        this.state = state;
        this.ip = 0;
        this.buf = this.state.inputBuffer;
        var in_len = this.buf.length;
        var max_len = in_len + Math.ceil(in_len / 16) + 64 + 3;
        this.state.outputBuffer = new Uint8Array(max_len);
        this.out = this.state.outputBuffer;
        this.op = 0;
        this.dict = new Uint32Array(16384);
        var l = in_len;
        var t = 0;

        while (l > 20) {
          var ll = l <= 49152 ? l : 49152;

          if (t + ll >> 5 <= 0) {
            break;
          }

          this.dict = new Uint32Array(16384);
          var prev_ip = this.ip;
          t = this._compressCore(ll, t);
          this.ip = prev_ip + ll;
          l -= ll;
        }

        t += l;

        if (t > 0) {
          var ii = in_len - t;

          if (this.op === 0 && t <= 238) {
            this.out[this.op++] = 17 + t;
          } else if (t <= 3) {
            this.out[this.op - 2] |= t;
          } else if (t <= 18) {
            this.out[this.op++] = t - 3;
          } else {
            var tt = t - 18;
            this.out[this.op++] = 0;

            while (tt > 255) {
              tt -= 255;
              this.out[this.op++] = 0;
            }

            this.out[this.op++] = tt;
          }

          do {
            this.out[this.op++] = this.buf[ii++];
          } while (--t > 0);
        }

        this.out[this.op++] = 17;
        this.out[this.op++] = 0;
        this.out[this.op++] = 0;
        this.state.outputBuffer = this.out.subarray(0, this.op);
        return this.OK;
      }
    };
    var instance = new _lzo1x();
    return {
      compress: function compress(state) {
        return instance.compress(state);
      },
      decompress: function decompress(state) {
        return instance.decompress(state);
      }
    };
  }();

  /**
   * Regular expression to strip key if dictionary's "StripKey" attribute is true. 
   */
  var REGEXP_STRIPKEY = {
    'mdx': /[()., '/\\@_-]()/g,
    'mdd': /([.][^.]*$)|[()., '/\\@_-]/g
  };
  var UNDEFINED = void 0;

  var scanner = function scanner(buffer) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _ref.len;
        var v2 = _ref.v2,
        _ref$bpu = _ref.bpu,
        bpu = _ref$bpu === void 0 ? 1 : _ref$bpu,
        decoder = _ref.decoder,
        _ref$tail = _ref.tail,
        tail = _ref$tail === void 0 ? 0 : _ref$tail,
        searchTextLen = _ref.searchTextLen;

    var dv = new DataView(buffer);
    var _offset = 0;
    var methods = {
      forward: function forward(len) {
        return _offset += len;
      },
      offset: function offset() {
        return _offset;
      },
      readInt: function readInt() {
        var res = dv.getUint32(_offset, false);
        methods.forward(4);
        return res;
      },
      readNum: function readNum() {
        methods.forward(4);
        return methods.readInt();
      },
      readUint8: function readUint8() {
        return conseq(dv.getUint8(_offset), methods.forward(1));
      },
      readUint16: function readUint16() {
        return conseq(dv.getUint16(_offset, false), methods.forward(2));
      },
      checksum_v2: function checksum_v2() {
        _offset += 4;
      },
      readBlock: function readBlock(len, expectedBufSize, decryptor) {
        var comp_type = dv.getUint8(_offset);

        if (comp_type === 0) {
          if (v2) {
            methods.forward(8);
          }

          return methods;
        } else {
          _offset += 8;
          len -= 8;
          var tmp = new Uint8Array(buffer, _offset, len);

          if (decryptor) {
            var passkey = new Uint8Array(8);
            passkey.set(new Uint8Array(buffer, _offset - 4, 4));
            passkey.set([0x95, 0x36, 0x00, 0x00], 4);
            tmp = decryptor(tmp, passkey);
          }

          tmp = comp_type === 2 ? inflate_1(tmp) : lzo.decompress(tmp);
          methods.forward(len);
          return scanner(tmp.buffer, {
            len: tmp.length,
            v2: v2,
            bpu: bpu,
            decoder: decoder,
            tail: tail,
            searchTextLen: searchTextLen
          });
        }
      },
      readText: function readText() {
        var len = searchTextLen(dv, _offset);
        var res = conseq(decoder.decode(new Uint8Array(buffer, _offset, len)), methods.forward(len + bpu));
        return res;
      },
      readTextSized: function readTextSized(len) {
        len *= bpu;
        var res = decoder ? decoder.decode(new Uint8Array(buffer, _offset, len)) : '';
        methods.forward(len + tail);
        return res;
      },
      readShort: function readShort() {
        if (v2) {
          return methods.readUint16();
        } else {
          return methods.readUint8();
        }
      },
      readRaw: function readRaw(len) {
        return conseq(new Uint8Array(buffer, _offset, len), methods.forward(len === UNDEFINED ? buffer.byteLength - _offset : len));
      }
    };
    return Object.create(methods);
  };

  var _excluded$f = ["buffer", "next"];
  var readHead = function readHead(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer;
              _ref.next;
              var rest = _objectWithoutProperties(_ref, _excluded$f);

          var sca = scanner(buffer);
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            buffer: buffer,
            next: sca.readInt()
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$e = ["buffer", "file", "next"];
  var readHeader = function readHeader(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer,
              file = _ref.file,
              _next = _ref.next,
              rest = _objectWithoutProperties(_ref, _excluded$e);

          var UTF_16LE = new TextDecoder('utf-16le');
          var header_str = UTF_16LE.decode(new Uint8Array(buffer, 0, _next)).replace(/\0$/, '');
          var xml = parseXml(header_str).querySelector('Dictionary, Library_Data').attributes;
          var attrs = {};

          for (var i = 0, item; i < xml.length; i++) {
            item = xml.item(i);
            attrs[item.nodeName] = item.nodeValue;
          }

          attrs.Encrypted = parseInt(attrs.Encrypted, 10) || 0;
          attrs.Encoding = attrs.Encoding || 'UTF-16';
          var isV2 = parseInt(attrs.GeneratedByEngineVersion, 10) >= 2.0;
          var bpu = attrs.Encoding === 'UTF-16' ? 2 : 1;

          var adaptKey = function adaptKey(key) {
            return key;
          };

          var ext = getExtension(file.name, 'mdx');
          var regexp = REGEXP_STRIPKEY[ext];

          if (isTrue(attrs.KeyCaseSensitive)) {
            adaptKey = isTrue(attrs.StripKey) ? function (key) {
              return key.replace(regexp, '$1');
            } : adaptKey;
          } else {
            adaptKey = isTrue(attrs.StripKey || (isV2 ? '' : 'yes')) ? function (key) {
              return key ? key.toLowerCase().replace(regexp, '$1') : key;
            } : function (key) {
              return key ? key.toLowerCase() : key;
            };
          }

          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            next: _next,
            file: file,
            buffer: buffer,
            offset: _next + 4,
            v2: isV2,
            decryptors: attrs.Encrypted & 0x02 ? [false, decrypt] : [false, false],
            bpu: bpu,
            attrs: attrs,
            decoder: new TextDecoder(attrs.Encoding || 'UTF-16LE'),
            tail: isV2 ? bpu : 0,
            searchTextLen: attrs.Encoding === 'UTF-16' ? function (dv, offset) {
              offset = offset;
              var mark = offset;

              while (dv.getUint16(offset)) {
                offset += bpu;
              }
              return offset - mark;
            } : function (dv, offset) {
              offset = offset;
              var mark = offset;

              while (dv.getUint8(offset++)) {
                /* scan for NUL */
              }

              return offset - mark - 1;
            },
            adaptKey: adaptKey
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$d = ["buffer", "file", "next", "offset"];
  var readKeywordSummary = function readKeywordSummary(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer,
              file = _ref.file,
              _ref$next = _ref.next,
              _next = _ref$next === void 0 ? 0 : _ref$next,
              offset = _ref.offset,
              rest = _objectWithoutProperties(_ref, _excluded$d);

          var sca = scanner(buffer);
          sca.forward(offset);
          var data = {
            num_blocks: sca.readNum(),
            num_entries: sca.readNum(),
            key_index_decomp_len: sca.readNum(),
            key_index_comp_len: sca.readNum(),
            key_blocks_len: sca.readNum(),
            chksum: sca.checksum_v2(),
            len: sca.offset() - _next
          };
          observer.next(_objectSpread2(_objectSpread2(_objectSpread2({}, rest), data), {}, {
            next: data.key_index_comp_len,
            file: file,
            offset: offset + data.len,
            buffer: buffer
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$c = ["file", "offset", "key_blocks_len"],
      _excluded2 = ["buffer", "key_index_comp_len", "key_index_decomp_len", "decryptors", "searchTextLen", "num_blocks", "v2", "bpu", "decoder", "tail", "file"];
  var readKeywordIndex = function readKeywordIndex(source$) {
    return new Observable(function (observer) {
      var subscription = source$.pipe(switchMap(function (_ref) {
        var file = _ref.file,
            offset = _ref.offset,
            key_blocks_len = _ref.key_blocks_len,
            rest = _objectWithoutProperties(_ref, _excluded$c);

        var subject$ = sliceFile(file, offset, offset + key_blocks_len);
        return subject$.pipe(map(function (buffer) {
          return Object.assign(_objectSpread2({
            file: file,
            offset: offset,
            key_blocks_len: key_blocks_len
          }, rest), {
            slicedKeyBlock: {
              buffer: buffer,
              offset: offset + key_blocks_len
            }
          });
        }), skipWhile(function (_ref2) {
          var slicedKeyBlock = _ref2.slicedKeyBlock;
          return slicedKeyBlock.buffer === null || slicedKeyBlock.buffer === undefined;
        }));
      })).subscribe({
        next: function next(_ref3) {
          var buffer = _ref3.buffer,
              key_index_comp_len = _ref3.key_index_comp_len,
              key_index_decomp_len = _ref3.key_index_decomp_len,
              _ref3$decryptors = _ref3.decryptors,
              decryptors = _ref3$decryptors === void 0 ? [false, false] : _ref3$decryptors,
              searchTextLen = _ref3.searchTextLen,
              num_blocks = _ref3.num_blocks,
              v2 = _ref3.v2,
              bpu = _ref3.bpu,
              decoder = _ref3.decoder,
              tail = _ref3.tail,
              file = _ref3.file,
              rest = _objectWithoutProperties(_ref3, _excluded2);

          var sca = scanner(buffer, {
            v2: v2,
            bpu: bpu,
            decoder: decoder,
            tail: tail,
            searchTextLen: searchTextLen
          }).readBlock(key_index_comp_len, key_index_decomp_len, decryptors[1]);
          var keywordIndex = Array(num_blocks);
          var offset = 0;

          for (var i = 0, size; i < num_blocks; i++) {
            keywordIndex[i] = {
              num_entries: conseq(sca.readNum(), size = sca.readShort()),
              first_word: conseq(sca.readTextSized(size), size = sca.readShort()),
              last_word: sca.readTextSized(size),
              comp_size: size = sca.readNum(),
              decomp_size: sca.readNum(),
              offset: offset,
              index: i
            };
            offset += size;
          }

          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            file: file,
            buffer: buffer,
            key_index_comp_len: key_index_comp_len,
            key_index_decomp_len: key_index_decomp_len,
            decryptors: decryptors,
            searchTextLen: searchTextLen,
            num_blocks: num_blocks,
            v2: v2,
            bpu: bpu,
            decoder: decoder,
            tail: tail,
            keywordIndex: keywordIndex,
            offset: rest.offset + rest.key_blocks_len,
            pos: rest.offset + rest.key_blocks_len,
            next: 0
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$b = ["buffer", "pos", "offset"];
  var readRecordSummary = function readRecordSummary(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer,
              pos = _ref.pos;
              _ref.offset;
              var rest = _objectWithoutProperties(_ref, _excluded$b);

          var sca = scanner(buffer);
          var record_summary = {
            num_blocks: sca.readNum(),
            num_entries: sca.readNum(),
            index_len: sca.readNum(),
            blocks_len: sca.readNum(),
            len: sca.offset()
          };
          record_summary.block_pos = pos + record_summary.index_len + record_summary.len;
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            record_summary: record_summary,
            offset: pos + record_summary.len,
            next: record_summary.index_len,
            buffer: buffer
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  /*
   * Create a Record Block Table object to load record block info from record section in mdx/mdd file.
   * Retrived data is stored in an Uint32Array which contains N pairs of (offset_comp, offset_decomp) value,
   * where N is number of record blocks.
   *
   * When looking up a given key for its definition:
   *   1. Search KEY_INDEX to locate keyword block containing the given key.
   *   2. Scanning the found keyword block to get its record offset and size.
   *   3. Search RECORD_BLOCK_TABLE to get record block containing the record.
   *   4. Load the found record block, using its offset and size to retrieve record content.
   *
   * @see https://github.com/zhansliu/writemdict/blob/master/fileformat.md#record-section
   */
  function createRecordBlockTable() {
    var pos = 0,
        // current position
    arr; // backed Uint32Array

    return {
      // Allocate required ArrayBuffer for storing record block table, where len is number of record blocks.
      alloc: function alloc(len) {
        arr = new Uint32Array(len * 2);
      },
      // Store offset pair value (compressed & decompressed) for a record block
      // NOTE: offset_comp is absolute offset counted from start of mdx/mdd file.
      put: function put(offset_comp, offset_decomp) {
        if (arr) {
          arr[pos++] = offset_comp;
          arr[pos++] = offset_decomp;
        }
      },
      // Given offset of a keyword after decompression, return a record block info containing it, else undefined if not found.
      find: function find(keyAt) {
        var hi = (arr.length >> 1) - 1,
            lo = 0,
            i = lo + hi >> 1,
            val = arr[(i << 1) + 1];
        if (keyAt > arr[(hi << 1) + 1] || keyAt < 0) return;

        while (true) {
          if (hi - lo <= 1) {
            if (i < hi) {
              return {
                block_no: i,
                comp_offset: arr[i <<= 1],
                comp_size: arr[i + 2] - arr[i],
                decomp_offset: arr[i + 1],
                decomp_size: arr[i + 3] - arr[i + 1]
              };
            } else {
              return;
            }
          }

          keyAt < val ? hi = i : lo = i;
          i = lo + hi >> 1;
          val = arr[(i << 1) + 1];
        }
      },
      get: function get() {
        return arr;
      }
    };
  }

  var _excluded$a = ["buffer", "offset", "record_summary"];
  var readRecordBlock = function readRecordBlock(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer,
              offset = _ref.offset,
              record_summary = _ref.record_summary,
              rest = _objectWithoutProperties(_ref, _excluded$a);

          var sca = scanner(buffer);
          var size = record_summary.num_blocks;
          var recordIndex = Array(size);
          var pos0 = record_summary.block_pos;
          var pos1 = 0;
          var blockTable = createRecordBlockTable();
          blockTable.alloc(size + 1);

          for (var i = 0, rdx; i < size; i++) {
            recordIndex[i] = rdx = {
              comp_size: sca.readNum(),
              decomp_size: sca.readNum()
            };
            blockTable.put(pos0, pos1);
            pos0 += rdx.comp_size;
            pos1 += rdx.decomp_size;
          }

          blockTable.put(pos0, pos1);
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            blockTable: blockTable,
            recordIndex: recordIndex,
            buffer: buffer,
            offset: offset,
            record_summary: record_summary
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  function parse(file, ext) {
    var file$ = new BehaviorSubject({
      file: file
    });
    return file$.pipe(slice(0, 4), readHead, slice(4, 48), readHeader, readKeywordSummary, slice(), readKeywordIndex, slice(undefined, 32), readRecordSummary, slice(), readRecordBlock);
  }

  var reduce = function reduce(adaptKey, arr, phrase) {
    var len = arr.length;

    if (len > 1) {
      len = len >> 1;
      return phrase > adaptKey(arr[len - 1].last_word) ? reduce(adaptKey, arr.slice(len), phrase) : reduce(adaptKey, arr.slice(0, len), phrase);
    } else {
      return arr[0];
    }
  };

  var _excluded$9 = ["adaptKey", "keywordIndex"];
  var seekVanguard = function seekVanguard(query) {
    return function (source$) {
      return new Observable(function (observer) {
        var subscription = source$.subscribe({
          next: function next(_ref) {
            var adaptKey = _ref.adaptKey,
                keywordIndex = _ref.keywordIndex,
                rest = _objectWithoutProperties(_ref, _excluded$9);

            var word = query.trim().toLowerCase();
            var phrase = adaptKey(word);
            var kdx = reduce(adaptKey, keywordIndex, phrase); // look back for the first record block containing keyword for the specified phrase

            if (phrase <= adaptKey(kdx.last_word)) {
              var index = kdx.index - 1,
                  prev;

              while (prev = keywordIndex[index]) {
                if (adaptKey(prev.last_word) !== adaptKey(kdx.last_word)) {
                  break;
                }

                kdx = prev;
                index--;
              }
            }

            observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
              kdx: kdx,
              phrase: phrase,
              adaptKey: adaptKey,
              keywordIndex: keywordIndex,
              query: query,
              word: word
            }));
          },
          error: function error(err) {
            return observer.error(err);
          },
          complete: function complete() {
            return observer.complete();
          }
        });
        return function () {
          subscription.unsubscribe();
        };
      });
    };
  };

  var _excluded$8 = ["cachedKeys", "kdx", "slicedKeyBlock"];
  var loadKeys = function loadKeys(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var cachedKeys = _ref.cachedKeys,
              kdx = _ref.kdx,
              slicedKeyBlock = _ref.slicedKeyBlock,
              rest = _objectWithoutProperties(_ref, _excluded$8);

          if (cachedKeys && cachedKeys.pilot === kdx.first_word) {
            observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
              cachedKeys: cachedKeys,
              kdx: kdx
            }));
          } else {
            // todo get slicedKeyBlock's value
            observer.next(_objectSpread2(_objectSpread2(_objectSpread2({}, rest), slicedKeyBlock), {}, {
              cachedKeys: cachedKeys,
              kdx: kdx
            }));
          }
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$7 = ["buffer", "kdx", "searchTextLen", "decoder", "bpu"];
  var slicedKeyBlockThen = function slicedKeyBlockThen(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var buffer = _ref.buffer,
              _ref$kdx = _ref.kdx,
              kdx = _ref$kdx === void 0 ? {} : _ref$kdx,
              searchTextLen = _ref.searchTextLen,
              decoder = _ref.decoder,
              bpu = _ref.bpu,
              rest = _objectWithoutProperties(_ref, _excluded$7);

          var sca = scanner(buffer, {
            searchTextLen: searchTextLen,
            decoder: decoder,
            bpu: bpu
          });
          var list = kdx.num_entries ? Array(kdx.num_entries) : [];
          sca.forward(kdx.offset);
          sca = sca.readBlock(kdx.comp_size, kdx.decomp_size);

          for (var i = 0; i < kdx.num_entries; i++) {
            var offset = sca.readNum();
            list[i] = new Object(sca.readText());
            list[i].offset = offset;

            if (i > 0) {
              list[i - 1].size = offset - list[i - 1].offset;
            }
          }

          var cachedKeys = {
            list: list,
            pilot: kdx.first_word
          };
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            buffer: buffer,
            kdx: kdx,
            searchTextLen: searchTextLen,
            decoder: decoder,
            bpu: bpu,
            cachedKeys: cachedKeys
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var shrink = function shrink(adaptKey, arr, phrase) {
    var len = arr.length;
    var sub;

    if (len > 1) {
      len = len >> 1;
      var key = adaptKey(arr[len]);

      if (phrase < key) {
        sub = arr.slice(0, len);
        sub.pos = arr.pos;
      } else {
        sub = arr.slice(len);
        sub.pos = (arr.pos || 0) + len;
      }

      return shrink(adaptKey, sub, phrase);
    } else {
      return (arr.pos || 0) + (phrase <= adaptKey(arr[0]) ? 0 : 1);
    }
  };

  var _excluded$6 = ["buffer", "kdx", "adaptKey", "phrase", "cachedKeys"];
  var seekVanguardThen = function seekVanguardThen(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          _ref.buffer;
              _ref.kdx;
              var adaptKey = _ref.adaptKey,
              phrase = _ref.phrase,
              cachedKeys = _ref.cachedKeys,
              rest = _objectWithoutProperties(_ref, _excluded$6);

          var list = cachedKeys.list;
          var idx = shrink(adaptKey, list, phrase);

          while (idx > 0) {
            if (adaptKey(list[--idx]) !== adaptKey(phrase)) {
              idx++;
              break;
            }
          }

          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            cachedKeys: cachedKeys,
            idx: idx
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$5 = ["query", "kdx", "word", "idx", "cachedKeys"];
  var seekVanguardSpreadMdx = function seekVanguardSpreadMdx(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var _ref$query = _ref.query,
              query = _ref$query === void 0 ? {} : _ref$query;
              _ref.kdx;
              var word = _ref.word,
              idx = _ref.idx,
              cachedKeys = _ref.cachedKeys,
              rest = _objectWithoutProperties(_ref, _excluded$5);

          var list = cachedKeys.list.slice(idx);
          var offset = query.offset;

          if (offset !== UNDEFINED) {
            list = matchOffset(list, offset);
          } else {
            list = list.filter(function (el) {
              return el.toLowerCase() === word;
            });
          }

          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            list: list
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var mdx = function mdx(query) {
    return function (source$) {
      return source$.pipe(seekVanguard(query), loadKeys, slicedKeyBlockThen, seekVanguardThen, seekVanguardSpreadMdx);
    };
  };

  var _excluded$4 = ["slicedKeyBlock", "block", "decryptors", "offset", "searchTextLen", "decoder", "bpu"];
  var findWord = function findWord(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var slicedKeyBlock = _ref.slicedKeyBlock,
              block = _ref.block,
              decryptors = _ref.decryptors,
              offset = _ref.offset,
              searchTextLen = _ref.searchTextLen,
              decoder = _ref.decoder,
              bpu = _ref.bpu,
              rest = _objectWithoutProperties(_ref, _excluded$4);

          var sca = scanner(slicedKeyBlock.buffer, {
            searchTextLen: searchTextLen,
            decoder: decoder,
            bpu: bpu
          }).readBlock(block.comp_size, block.decomp_size);
          sca.forward(offset - block.decomp_offset);
          var definition = sca.readText();
          var isLink = definition.substring(0, 8) !== '@@@LINK=';
          definition = isLink ? definition : null;
          var newQuery = isLink ? null : definition.substring(8);
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            definition: definition,
            newQuery: newQuery,
            slicedKeyBlock: slicedKeyBlock,
            block: block,
            decryptors: decryptors,
            offset: offset
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded$3 = ["file", "block"];
  function search(mdx$, query) {
    return mdx$.pipe(mdx(query), concatMap(function (_ref) {
      var list = _ref.list,
          blockTable = _ref.blockTable,
          slicedKeyBlock = _ref.slicedKeyBlock,
          decryptors = _ref.decryptors,
          file = _ref.file,
          searchTextLen = _ref.searchTextLen,
          decoder = _ref.decoder,
          bpu = _ref.bpu;
      return from(list).pipe(map(function (res) {
        return Object.assign(res, {
          blockTable: blockTable,
          slicedKeyBlock: slicedKeyBlock,
          decryptors: decryptors,
          file: file,
          searchTextLen: searchTextLen,
          decoder: decoder,
          bpu: bpu
        });
      }), map(function (res) {
        return Object.assign(res, {
          block: res.blockTable.find(res.offset)
        });
      }), concatMap(function (_ref2) {
        var file = _ref2.file,
            block = _ref2.block,
            rest = _objectWithoutProperties(_ref2, _excluded$3);

        var subject$ = sliceFile(file, block.comp_offset, block.comp_offset + block.comp_size);
        return subject$.pipe(map(function (buffer) {
          return Object.assign(_objectSpread2({
            file: file,
            block: block
          }, rest), {
            slicedKeyBlock: {
              buffer: buffer,
              offset: block.comp_offset + block.comp_size
            }
          });
        }), findWord, map(function (res) {
          if (res.newQuery) {
            throw res.newQuery;
          } else {
            return res;
          }
        }), catchError(function (error) {
          return mdx(error)(mdx$);
        }));
      }), scan(function (pre, cur) {
        var result = pre.result || [pre.definition];
        result.push(cur.definition);
        return Object.assign(pre, {
          result: result
        });
      }), map(function (res) {
        return Object.assign(res, {
          result: res.result && res.result.length ? res.result : [res.definition]
        });
      }));
    }));
  }

  var _excluded$2 = ["query", "kdx", "word", "idx", "cachedKeys"];
  var seekVanguardSpreadMdd = function seekVanguardSpreadMdd(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          _ref.query;
              _ref.kdx;
              var word = _ref.word,
              idx = _ref.idx,
              cachedKeys = _ref.cachedKeys,
              rest = _objectWithoutProperties(_ref, _excluded$2);

          var candidates = cachedKeys.list.slice(idx).filter(function (item) {
            console.log('seekVanguardSpreadMdd', item);
            return item.toLowerCase() === word;
          });
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            candidates: candidates
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var mdd = function mdd(query) {
    return function (source$) {
      var word = query.trim().toLowerCase();
      word = '\\' + word.replace(/(^[/\\])|([/]$)/, '');
      word = word.replace(/\//g, '\\');
      return source$.pipe(seekVanguard(word), loadKeys, slicedKeyBlockThen, seekVanguardThen, seekVanguardSpreadMdd);
    };
  };

  var _excluded$1 = ["slicedKeyBlock", "block", "candidates"];
  var findResource = function findResource(source$) {
    return new Observable(function (observer) {
      var subscription = source$.subscribe({
        next: function next(_ref) {
          var slicedKeyBlock = _ref.slicedKeyBlock,
              block = _ref.block,
              candidates = _ref.candidates,
              rest = _objectWithoutProperties(_ref, _excluded$1);

          var sca = scanner(slicedKeyBlock.buffer).readBlock(block.comp_size, block.decomp_size);
          sca.forward(candidates.offset - block.decomp_offset);
          var blob = sca.readRaw(candidates.size);
          var resource = URL.createObjectURL(blob);
          observer.next(_objectSpread2(_objectSpread2({}, rest), {}, {
            slicedKeyBlock: slicedKeyBlock,
            block: block,
            candidates: candidates,
            resource: resource
          }));
        },
        error: function error(err) {
          return observer.error(err);
        },
        complete: function complete() {
          return observer.complete();
        }
      });
      return function () {
        subscription.unsubscribe();
      };
    });
  };

  var _excluded = ["file", "candidates", "blockTable"];
  function resource(mdd$, query) {
    return mdd$.pipe(mdd(query), tap(function (res) {
      return console.log('resource 1', res);
    }), map(function (res) {
      if (res.candidates && res.candidates.length) {
        return Object.assign(res, {
          candidates: res.candidates[0]
        });
      } else {
        throw Object.assign(res, {
          message: "*RESOURCE NOT FOUND* ".concat(query),
          noResource: true,
          candidates: null
        });
      }
    }), catchError(function (error) {
      return of(error).pipe(tap(function (_ref) {
        var message = _ref.message;
        return console.log(message);
      }));
    }), concatMap(function (_ref2) {
      var file = _ref2.file,
          candidates = _ref2.candidates,
          blockTable = _ref2.blockTable,
          rest = _objectWithoutProperties(_ref2, _excluded);

      if (candidates) {
        var block = blockTable.find(candidates.offset);
        var subject$ = sliceFile(file, block.comp_offset, block.comp_offset + block.comp_size);
        return subject$.pipe(map(function (buffer) {
          return Object.assign(_objectSpread2({
            file: file,
            block: block
          }, rest), {
            slicedKeyBlock: {
              buffer: buffer,
              offset: block.comp_offset + block.comp_size
            }
          });
        }), findResource);
      } else {
        return of(_objectSpread2({
          file: file,
          candidates: candidates,
          blockTable: blockTable
        }, rest));
      }
    }));
  }

  var defaultResource = [];

  var Mdict = /*#__PURE__*/function () {
    function Mdict(files) {
      _classCallCheck(this, Mdict);

      _defineProperty(this, "resources", defaultResource);

      this.resources = this.load(files);
    }

    _createClass(Mdict, [{
      key: "get",
      value: function get(key) {
        return function (resource) {
          return Reflect.get(resource, key);
        };
      }
    }, {
      key: "load",
      value: function load(files) {
        return _toConsumableArray(files).reduce(function (acc, file) {
          var ext = getExtension(file.name, 'mdx');
          var observable$ = parse(file);
          Object.assign(acc, _defineProperty({}, ext, observable$));
          return acc;
        }, []);
      }
    }, {
      key: "search",
      value: function search$1(query) {
        var mdx$ = this.get('mdx')(this.resources) || new Observable();
        var mdd$ = this.get('mdd')(this.resources);

        var search$ = search(mdx$, query);

        if (mdd$) {
          var resource$ = resource(mdd$, query);
          return search$.pipe(tap(function (res) {
            return console.log('search', res);
          }), mergeMap(function (res) {
            return resource$.pipe(tap(function (data) {
              return console.log('resource', data, Object.assign(res, {
                resource: data.resource
              }));
            }), map(function (_ref) {
              var resource = _ref.resource;
              return Object.assign(res, {
                resource: resource
              });
            }));
          }));
        } else {
          return search$;
        }
      }
    }]);

    return Mdict;
  }();

  exports["default"] = Mdict;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=demo.umd.js.map
