(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-nui-app","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-nui-app","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"test-nui-app","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"test-nui-app","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"test-nui-app","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!********************************************************************!*\
  !*** E:/AllWorkspaces/HBuilderX_Workspace/test-uni-app/pages.json ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 51:
/*!********************************************************************************!*\
  !*** E:/AllWorkspaces/HBuilderX_Workspace/test-uni-app/static/SDK/gsap.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * GSAP 3.3.4
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) { true ? e(exports) : undefined;}(this, function (e) {"use strict";function _inheritsLoose(t, e) {t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;}function _assertThisInitialized(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function n(t) {return "string" == typeof t;}function o(t) {return "function" == typeof t;}function p(t) {return "number" == typeof t;}function q(t) {return void 0 === t;}function r(t) {return "object" == typeof t;}function s(t) {return !1 !== t;}function t() {return "undefined" != typeof window;}function u(t) {return o(t) || n(t);}function K(t) {return (l = pt(t, at)) && ie;}function L(t, e) {return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");}function M(t, e) {return !e && console.warn(t);}function N(t, e) {return t && (at[t] = e) && l && (l[t] = e) || at;}function O() {return 0;}function Y(t) {var e,i,n = t[0];if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {for (i = dt.length; i-- && !dt[i].targetTest(n);) {;}e = dt[i];}for (i = t.length; i--;) {t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e))) || t.splice(i, 1);}return t;}function Z(t) {return t._gsap || Y(yt(t))[0]._gsap;}function $(t, e) {var r = t[e];return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r;}function _(t, e) {return (t = t.split(",")).forEach(e) || t;}function aa(t) {return Math.round(1e5 * t) / 1e5 || 0;}function ba(t, e) {for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {;}return i < r;}function ca(t, e, r) {var i,n = p(t[1]),a = (n ? 2 : 1) + (e < 2 ? 0 : 1),o = t[a];if (n && (o.duration = t[1]), o.parent = r, e) {for (i = o; r && !("immediateRender" in i);) {i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;}o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];}return o;}function da() {var t,e,r = ot.length,i = ot.slice(0);for (ut = {}, t = ot.length = 0; t < r; t++) {(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);}}function ea(t, e, r, i) {ot.length && da(), t.render(e, r, i), ot.length && da();}function fa(t) {var e = parseFloat(t);return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;}function ga(t) {return t;}function ha(t, e) {for (var r in e) {r in t || (t[r] = e[r]);}return t;}function ia(t, e) {for (var r in e) {r in t || "duration" === r || "ease" === r || (t[r] = e[r]);}}function ka(t, e) {for (var i in e) {t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];}return t;}function la(t, e) {var r,i = {};for (r in t) {r in e || (i[r] = t[r]);}return i;}function ma(t) {var e = t.parent || F,r = t.keyframes ? ia : ha;if (s(t.inherit)) for (; e;) {r(t, e.vars.defaults), e = e.parent || e._dp;}return t;}function pa(t, e, r, i) {void 0 === r && (r = "_first"), void 0 === i && (i = "_last");var n = e._prev,a = e._next;n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;}function qa(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;}function ra(t) {for (var e = t; e;) {e._dirty = 1, e = e.parent;}return t;}function ua(t) {return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0;}function wa(t, e) {return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);}function xa(t) {return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0));}function ya(t, e) {var r;if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {if (t._dur < t.duration()) for (r = t; r._dp;) {0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;}t._zTime = -B;}}function za(t, e, r, i) {return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {void 0 === r && (r = "_first"), void 0 === i && (i = "_last");var a,s = t[i];if (n) for (a = e[n]; s && s[n] > a;) {s = s._prev;}s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;}(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || ya(t, e), t;}function Aa(t, e) {return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t);}function Ba(t, e, r, i) {return qt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t), t._lazy = [e, i], 1) : void 0 : 1;}function Ea(t, e, r) {var i = t._repeat,n = aa(e) || 0;return t._dur = n, t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n, t._time > n && (t._time = n, t._tTime = Math.min(t._tTime, t._tDur)), r || ra(t.parent), t.parent && xa(t), t;}function Fa(t) {return t instanceof Bt ? ra(t) : Ea(t, t._dur);}function Ha(t, e) {var r,i,a = t.labels,s = t._recent || mt,o = t.duration() >= E ? s.endTime(!1) : t._dur;return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ha(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;}function Ia(t, e) {return t || 0 === t ? e(t) : e;}function Ka(t) {return (t + "").substr((parseFloat(t) + "").length);}function Na(t, e) {return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;}function Qa(t) {return t.sort(function () {return .5 - Math.random();});}function Ra(t) {if (o(t)) return t;var p = r(t) ? t : { each: t },_ = zt(p.ease),m = p.from || 0,g = parseFloat(p.base) || 0,v = {},e = 0 < m && m < 1,y = isNaN(m) || e,T = p.axis,b = m,w = m;return n(m) ? b = w = { center: .5, edges: .5, end: 1 }[m] || 0 : !e && y && (b = m[0], w = m[1]), function (t, e, r) {var i,n,a,s,o,u,h,l,f,d = (r || p).length,c = v[d];if (!c) {if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, E])[1])) {for (h = -E; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {;}f--;}for (c = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = E, u = h = 0; u < d; u++) {a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : V(a * a + s * s), h < o && (h = o), o < l && (l = o);}"random" === m && Qa(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ka(p.amount || p.each) || 0, _ = _ && d < 0 ? At(_) : _;}return d = (c[t] - c.min) / c.max || 0, aa(c.b + (_ ? _(d) : d) * c.v) + c.u;};}function Sa(e) {var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;return function (t) {return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ka(t));};}function Ta(u, t) {var h,l,e = W(u);return !e && r(u) && (h = e = u.radius || E, u.values ? (u = yt(u.values), (l = !p(u[0])) && (h *= h)) : u = Sa(u.increment)), Ia(t, e ? o(u) ? function (t) {return l = u(t), Math.abs(l - t) <= h ? l : t;} : function (t) {for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = E, s = 0, o = u.length; o--;) {(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);}return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Ka(t);} : Sa(u));}function Ua(t, e, r, i) {return Ia(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;});}function Ya(e, r, t) {return Ia(t, function (t) {return e[~~r(t)];});}function _a(t) {for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : G), s += t.substr(a, e - a) + Ua(n ? r : +r[0], +r[1], +r[2] || 1e-5), a = i + 1;}return s + t.substr(a, t.length - a);}function cb(t, e, r) {var i,n,a,s = t.labels,o = E;for (i in s) {(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);}return a;}function eb(t) {return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;}function jb(t, e, r) {return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0;}function kb(t, e, r) {var i,n,a,s,o,u,h,l,f,d,c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;if (!c) {if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]) c = xt[t];else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];else if ("hsl" === t.substr(0, 3)) {if (c = d = t.match(G), e) {if (~t.indexOf("=")) return c = t.match(J), r && c.length < 4 && (c[3] = 1), c;} else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = jb(s + 1 / 3, i, n), c[1] = jb(s, i, n), c[2] = jb(s - 1 / 3, i, n);} else c = t.match(G) || xt.transparent;c = c.map(Number);}return e && !d && (i = c[0] / wt, n = c[1] / wt, a = c[2] / wt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c;}function lb(t) {var r = [],i = [],n = -1;return t.split(kt).forEach(function (t) {var e = t.match(tt) || [];r.push.apply(r, e), i.push(n += e.length + 1);}), r.c = i, r;}function mb(t, e, r) {var i,n,a,s,o = "",u = (t + o).match(kt),h = e ? "hsla(" : "rgba(",l = 0;if (!u) return t;if (u = u.map(function (t) {return (t = kb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";}), r && (a = lb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) {o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());}if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) {o += n[l] + u[l];}return o + n[s];}function pb(t) {var e,r = t.join(" ");if (kt.lastIndex = 0, kt.test(r)) return e = Ot.test(r), t[1] = mb(t[1], e), t[0] = mb(t[0], e, lb(t[1])), !0;}function xb(t) {var e = (t + "").split("("),r = Ct[e[0]];return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Dt, "").trim() : +i, s = r.substr(e + 1).trim();}return n;}(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Ct._CE && St.test(t) ? Ct._CE("", t) : r;}function zb(t, e) {for (var r, i = t._first; i;) {i instanceof Bt ? zb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? zb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;}}function Bb(t, e, r, i) {void 0 === r && (r = function easeOut(t) {return 1 - e(1 - t);}), void 0 === i && (i = function easeInOut(t) {return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;});var n,a = { easeIn: e, easeOut: r, easeInOut: i };return _(t, function (t) {for (var e in Ct[t] = at[t] = a, Ct[n = t.toLowerCase()] = r, a) {Ct[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ct[t + "." + e] = a[e];}}), a;}function Cb(e) {return function (t) {return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;};}function Db(r, t, e) {function el(t) {return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1;}var i = 1 <= t ? t : 1,n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),a = n / I * (Math.asin(1 / i) || 0),s = "out" === r ? el : "in" === r ? function (t) {return 1 - el(1 - t);} : Cb(el);return n = I / n, s.config = function (t, e) {return Db(r, t, e);}, s;}function Eb(e, r) {function ml(t) {return t ? --t * t * ((r + 1) * t + r) + 1 : 0;}void 0 === r && (r = 1.70158);var t = "out" === e ? ml : "in" === e ? function (t) {return 1 - ml(1 - t);} : Cb(ml);return t.config = function (t) {return Eb(e, t);}, t;}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,P,C,S,D,A,z,U = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },R = { duration: .5, overwrite: !1, delay: 0 },E = 1e8,B = 1 / E,I = 2 * Math.PI,H = I / 4,X = 0,V = Math.sqrt,j = Math.cos,Q = Math.sin,W = Array.isArray,G = /(?:-?\.?\d|\.)+/gi,J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,rt = /\(([^()]+)\)/i,it = /[+-]=-?[\.\d]+/,nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,at = {},st = {},ot = [],ut = {},ht = {},lt = {},ft = 30,dt = [],ct = "",pt = function _merge(t, e) {for (var r in e) {t[r] = e[r];}return t;},_t = function _animationCycle(t, e) {return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;},mt = { _start: 0, endTime: O },gt = function _clamp(t, e, r) {return r < t ? t : e < r ? e : r;},vt = [].slice,yt = function toArray(t, e) {return !n(t) || e || !a && Pt() ? W(t) ? function _flatten(t, e, r) {return void 0 === r && (r = []), t.forEach(function (t) {return n(t) && !e || Na(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);}) || r;}(t, e) : Na(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0);},Tt = function mapRange(e, t, r, i, n) {var a = t - e,s = i - r;return Ia(n, function (t) {return r + ((t - e) / a * s || 0);});},bt = function _callback(t, e, r) {var i,n,a = t.vars,s = a[e];if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ot.length && da(), i ? s.apply(n, i) : s.call(n);},wt = 255,xt = { aqua: [0, wt, wt], lime: [0, wt, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, wt], navy: [0, 0, 128], white: [wt, wt, wt], olive: [128, 128, 0], yellow: [wt, wt, 0], orange: [wt, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [wt, 0, 0], pink: [wt, 192, 203], cyan: [0, wt, wt], transparent: [wt, wt, wt, 0] },kt = function () {var t,e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for (t in xt) {e += "|" + t + "\\b";}return new RegExp(e + ")", "gi");}(),Ot = /hsl[a]?\(/,Mt = (b = Date.now, w = 500, x = 33, k = b(), P = k, S = C = 1 / 240, T = { time: 0, frame: 0, tick: function tick() {gk(!0);}, wake: function wake() {f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ie, (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function (t) {return setTimeout(t, 1e3 * (S - T.time) + 1 | 0);}, m = 1, gk(2));}, sleep: function sleep() {(y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;}, lagSmoothing: function lagSmoothing(t, e) {w = t || 1e8, x = Math.min(e, w, 0);}, fps: function fps(t) {C = 1 / (t || 240), S = T.time + C;}, add: function add(t) {D.indexOf(t) < 0 && D.push(t), Pt();}, remove: function remove(t) {var e;~(e = D.indexOf(t)) && D.splice(e, 1);}, _listeners: D = [] }),Pt = function _wake() {return !m && Mt.wake();},Ct = {},St = /^[\d.\-M][\d.\-,\s]/,Dt = /["']/g,At = function _invertEase(e) {return function (t) {return 1 - e(1 - t);};},zt = function _parseEase(t, e) {return t && (o(t) ? t : Ct[t] || xb(t)) || e;};function gk(e) {var t,r,i = b() - P,n = !0 === e;w < i && (k += i - x), P += i, T.time = (P - k) / 1e3, (0 < (t = T.time - S) || n) && (T.frame++, S += t + (C <= t ? .004 : C - t), r = 1), n || (g = v(gk)), r && D.forEach(function (t) {return t(T.time, i, T.frame, e);});}function Dl(t) {return t < z ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / 2.75) * t + .9375 : A * Math.pow(t - 2.625 / 2.75, 2) + .984375;}_("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {var r = e < 5 ? e + 1 : e;Bb(t + ",Power" + (r - 1), e ? function (t) {return Math.pow(t, r);} : function (t) {return t;}, function (t) {return 1 - Math.pow(1 - t, r);}, function (t) {return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;});}), Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn, Bb("Elastic", Db("in"), Db("out"), Db()), A = 7.5625, z = 1 / 2.75, Bb("Bounce", function (t) {return 1 - Dl(1 - t);}, Dl), Bb("Expo", function (t) {return t ? Math.pow(2, 10 * (t - 1)) : 0;}), Bb("Circ", function (t) {return -(V(1 - t * t) - 1);}), Bb("Sine", function (t) {return 1 === t ? 1 : 1 - j(t * H);}), Bb("Back", Eb("in"), Eb("out"), Eb()), Ct.SteppedEase = Ct.steps = at.SteppedEase = { config: function config(t, e) {void 0 === t && (t = 1);var r = 1 / t,i = t + (e ? 0 : 1),n = e ? 1 : 0;return function (t) {return ((i * gt(0, .99999999, t) | 0) + n) * r;};} }, R.ease = Ct["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {return ct += t + "," + t + "Params,";});var Et,Ft = function GSCache(t, e) {this.id = X++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Zt;},Rt = ((Et = Animation.prototype).delay = function delay(t) {return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;}, Et.duration = function duration(t) {return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;}, Et.totalDuration = function totalDuration(t) {return arguments.length ? (this._dirty = 0, Ea(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;}, Et.totalTime = function totalTime(t, e) {if (Pt(), !arguments.length) return this._tTime;var r = this.parent || this._dp;if (r && r.smoothChildTiming && this._ts) {for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent;) {r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;}!this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && za(this._dp, this, this._start - this._delay);}return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t), ea(this, t, e)), this;}, Et.time = function time(t, e) {return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;}, Et.totalProgress = function totalProgress(t, e) {return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;}, Et.progress = function progress(t, e) {return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;}, Et.iteration = function iteration(t, e) {var r = this.duration() + this._rDelay;return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1;}, Et.timeScale = function timeScale(t) {if (!arguments.length) return this._rts === -B ? 0 : this._rts;if (this._rts === t) return this;var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;return this._rts = +t || 0, this._ts = this._ps || t === -B ? 0 : this._rts, function _recacheAncestors(t) {for (var e = t.parent; e && e.parent;) {e._dirty = 1, e.totalDuration(), e = e.parent;}return t;}(this.totalTime(gt(0, this._tDur, e), !0));}, Et.paused = function paused(t) {return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps;}, Et.startTime = function startTime(t) {if (arguments.length) {this._start = t;var e = this.parent || this._dp;return !e || !e._sort && this.parent || za(e, this, t - this._delay), this;}return this._start;}, Et.endTime = function endTime(t) {return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);}, Et.rawTime = function rawTime(t) {var e = this.parent || this._dp;return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;}, Et.repeat = function repeat(t) {return arguments.length ? (this._repeat = t, Fa(this)) : this._repeat;}, Et.repeatDelay = function repeatDelay(t) {return arguments.length ? (this._rDelay = t, Fa(this)) : this._rDelay;}, Et.yoyo = function yoyo(t) {return arguments.length ? (this._yoyo = t, this) : this._yoyo;}, Et.seek = function seek(t, e) {return this.totalTime(Ha(this, t), s(e));}, Et.restart = function restart(t, e) {return this.play().totalTime(t ? -this._delay : 0, s(e));}, Et.play = function play(t, e) {return null != t && this.seek(t, e), this.reversed(!1).paused(!1);}, Et.reverse = function reverse(t, e) {return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);}, Et.pause = function pause(t, e) {return null != t && this.seek(t, e), this.paused(!0);}, Et.resume = function resume() {return this.paused(!1);}, Et.reversed = function reversed(t) {return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0;}, Et.invalidate = function invalidate() {return this._initted = 0, this._zTime = -B, this;}, Et.isActive = function isActive(t) {var e,r = this.parent || this._dp,i = this._start;return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B));}, Et.eventCallback = function eventCallback(t, e, r) {var i = this.vars;return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];}, Et.then = function then(t) {var i = this;return new Promise(function (e) {function Sm() {var t = i.then;i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;}var r = o(t) ? t : ga;i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Sm() : i._prom = Sm;});}, Et.kill = function kill() {eb(this);}, Animation);function Animation(t, e) {var r = t.parent || F;this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ea(this, +t.duration, 1), this.data = t.data, m || Mt.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);}ha(Rt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -B, _prom: 0, _ps: !1, _rts: 1 });var Bt = function (i) {function Timeline(t, e) {var r;return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && ya(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Aa(_assertThisInitialized(r), t.scrollTrigger), r;}_inheritsLoose(Timeline, i);var t = Timeline.prototype;return t.to = function to(t, e, r, i) {return new Ht(t, ca(arguments, 0, this), Ha(this, p(e) ? i : r)), this;}, t.from = function from(t, e, r, i) {return new Ht(t, ca(arguments, 1, this), Ha(this, p(e) ? i : r)), this;}, t.fromTo = function fromTo(t, e, r, i, n) {return new Ht(t, ca(arguments, 2, this), Ha(this, p(e) ? n : i)), this;}, t.set = function set(t, e, r) {return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ht(t, e, Ha(this, r), 1), this;}, t.call = function call(t, e, r) {return za(this, Ht.delayedCall(0, t, e), Ha(this, r));}, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Ht(t, r, Ha(this, n)), this;}, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);}, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);}, t.render = function render(t, e, r) {var i,n,a,s,o,u,h,l,f,d,c,p,_ = this._time,m = this._dirty ? this.totalDuration() : this._tDur,g = this._dur,v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,y = this._zTime < 0 != t < 0 && (this._initted || !g);if (v !== this._tTime || r || y) {if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = g + this._rDelay, (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && (i = g, s--), d = _t(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock)) {var T = c && 1 & d,b = T === (c && 1 & s);if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;if (b && (this._lock = 2, _ = T ? g + 1e-4 : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;zb(this, p);}if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {var i;if (e < r) for (i = t._first; i && i._start <= r;) {if (!i._dur && "isPause" === i.data && i._start > e) return i;i = i._next;} else for (i = t._last; i && i._start >= r;) {if (!i._dur && "isPause" === i.data && i._start < e) return i;i = i._prev;}}(this, aa(_), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !i || e || bt(this, "onStart"), _ <= i && 0 <= t) for (n = this._first; n;) {if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {if (n.parent !== this) return this.render(t, e, r);if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {h = 0, a && (v += this._zTime = -B);break;}}n = a;} else {n = this._last;for (var w = t < 0 ? t : i; n;) {if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {if (n.parent !== this) return this.render(t, e, r);if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {h = 0, a && (v += this._zTime = w ? -B : B);break;}}n = a;}}if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);this._onUpdate && !e && bt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));}return this;}, t.add = function add(t, e) {var r = this;if (p(e) || (e = Ha(this, e)), !(t instanceof Rt)) {if (W(t)) return t.forEach(function (t) {return r.add(t, e);}), ra(this);if (n(t)) return this.addLabel(t, e);if (!o(t)) return this;t = Ht.delayedCall(0, t);}return this !== t ? za(this, t, e) : this;}, t.getChildren = function getChildren(t, e, r, i) {void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -E);for (var n = [], a = this._first; a;) {a._start >= i && (a instanceof Ht ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;}return n;}, t.getById = function getById(t) {for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {if (e[r].vars.id === t) return e[r];}}, t.remove = function remove(t) {return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));}, t.totalTime = function totalTime(t, e) {return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;}, t.addLabel = function addLabel(t, e) {return this.labels[t] = Ha(this, e), this;}, t.removeLabel = function removeLabel(t) {return delete this.labels[t], this;}, t.addPause = function addPause(t, e, r) {var i = Ht.delayedCall(0, e || O, r);return i.data = "isPause", this._hasPause = 1, za(this, i, Ha(this, t));}, t.removePause = function removePause(t) {var e = this._first;for (t = Ha(this, t); e;) {e._start === t && "isPause" === e.data && qa(e), e = e._next;}}, t.killTweensOf = function killTweensOf(t, e, r) {for (var i = this.getTweensOf(t, r), n = i.length; n--;) {It !== i[n] && i[n].kill(t, e);}return this;}, t.getTweensOf = function getTweensOf(t, e) {for (var r, i = [], n = yt(t), a = this._first; a;) {a instanceof Ht ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;}return i;}, t.tweenTo = function tweenTo(t, e) {e = e || {};var r = this,i = Ha(r, t),n = e.startAt,a = e.onStart,s = e.onStartParams,o = Ht.to(r, ha(e, { ease: "none", lazy: !1, time: i, duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B, onStart: function onStart() {r.pause();var t = e.duration || Math.abs((i - r._time) / r.timeScale());o._dur !== t && Ea(o, t).render(o._time, !0, !0), a && a.apply(o, s || []);} }));return o;}, t.tweenFromTo = function tweenFromTo(t, e, r) {return this.tweenTo(e, ha({ startAt: { time: Ha(this, t) } }, r));}, t.recent = function recent() {return this._recent;}, t.nextLabel = function nextLabel(t) {return void 0 === t && (t = this._time), cb(this, Ha(this, t));}, t.previousLabel = function previousLabel(t) {return void 0 === t && (t = this._time), cb(this, Ha(this, t), 1);}, t.currentLabel = function currentLabel(t) {return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);}, t.shiftChildren = function shiftChildren(t, e, r) {void 0 === r && (r = 0);for (var i, n = this._first, a = this.labels; n;) {n._start >= r && (n._start += t), n = n._next;}if (e) for (i in a) {a[i] >= r && (a[i] += t);}return ra(this);}, t.invalidate = function invalidate() {var t = this._first;for (this._lock = 0; t;) {t.invalidate(), t = t._next;}return i.prototype.invalidate.call(this);}, t.clear = function clear(t) {void 0 === t && (t = !0);for (var e, r = this._first; r;) {e = r._next, this.remove(r), r = e;}return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this);}, t.totalDuration = function totalDuration(t) {var e,r,i,n,a = 0,s = this,o = s._last,u = E;if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));if (s._dirty) {for (n = s.parent; o;) {e = o._prev, o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, za(s, o, i - o._delay, 1)._lock = 0) : u = i, i < 0 && o._ts && (a -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), u = 0), a < (r = xa(o)) && o._ts && (a = r), o = e;}Ea(s, s === F && s._time > a ? s._time : a, 1), s._dirty = 0;}return s._tDur;}, Timeline.updateRoot = function updateRoot(t) {if (F._ts && (ea(F, wa(t, F)), d = Mt.frame), Mt.frame >= ft) {ft += U.autoSleep || 120;var e = F._first;if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {for (; e && !e._ts;) {e = e._next;}e || Mt.sleep();}}}, Timeline;}(Rt);ha(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });function Lb(t, e, i, a, s, u) {var h, l, f, d;if (ht[t] && !1 !== (h = new ht[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || W(t)) return n(t) ? Yt(t, s, e, i, a) : t;var u,h = {};for (u in t) {h[u] = Yt(t[u], s, e, i, a);}return h;}(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c)) for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) {f[h._props[d]] = l;}return h;}var It,Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {o(i) && (i = i(a || 0, t, s));var f,d = t[e],c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,p = o(d) ? l ? jt : Vt : Xt;if (n(i) && (~i.indexOf("random(") && (i = _a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ka(c) || 0))), c !== i) return isNaN(c + i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {var o,u,h,l,f,d,c,p,_ = new ee(this._pt, t, e, 0, 1, Wt, null, n),m = 0,g = 0;for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = _a(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(et) || []; o = et.exec(i);) {l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = { _next: _._pt, p: f || 1 === g ? f : ",", s: d, c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d, m: h && h < 4 ? Math.round : 0 }, m = et.lastIndex);}return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (it.test(i) || c) && (_.e = 0), this._pt = _;}.call(this, t, e, c, i, p, h || U.stringFilter, l)) : (f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Qt : Kt, 0, p), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);},qt = function _initTween(t, e) {var r,i,n,a,o,u,h,l,f,d,c,p,_ = t.vars,m = _.ease,g = _.startAt,v = _.immediateRender,y = _.lazy,T = _.onUpdate,b = _.onUpdateParams,w = _.callbackScope,x = _.runBackwards,k = _.yoyoEase,O = _.keyframes,M = _.autoRevert,P = t._dur,C = t._startAt,S = t._targets,D = t.parent,A = D && "nested" === D.data ? D.parent._targets : S,z = "auto" === t._overwrite,E = t.timeline;if (!E || O && m || (m = "none"), t._ease = zt(m, R.ease), t._yEase = k ? At(zt(!0 === k ? m : k, R.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !E) {if (p = (l = S[0] ? Z(S[0]).harness : 0) && _[l.prop], r = la(_, st), C && C.render(-1, !0).kill(), g) {if (qa(t._startAt = Ht.set(S, ha({ data: "isStart", overwrite: !1, parent: D, immediateRender: !0, lazy: s(y), startAt: null, delay: 0, onUpdate: T, onUpdateParams: b, callbackScope: w, stagger: 0 }, g))), v) if (0 < e) M || (t._startAt = 0);else if (P) return;} else if (x && P) if (C) M || (t._startAt = 0);else if (e && (v = !1), n = ha({ overwrite: !1, data: "isFromStart", lazy: v && s(y), immediateRender: v, stagger: 0, parent: D }, r), p && (n[l.prop] = p), qa(t._startAt = Ht.set(S, n)), v) {if (!e) return;} else _initTween(t._startAt, B);for (t._pt = 0, y = P && s(y) || y && !P, i = 0; i < S.length; i++) {if (h = (o = S[i])._gsap || Y(S)[i]._gsap, t._ptLookup[i] = d = {}, ut[h.id] && da(), c = A === S ? i : A.indexOf(o), l && !1 !== (f = new l()).init(o, p || r, t, c, A) && (t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {d[t] = a;}), f.priority && (u = 1)), !l || p) for (n in r) {ht[n] && (f = Lb(n, r, t, c, o, A)) ? f.priority && (u = 1) : d[n] = a = Lt.call(t, o, n, "get", r[n], c, A, 0, _.stringFilter);}t._op && t._op[i] && t.kill(o, t._op[i]), z && t._pt && (It = t, F.killTweensOf(o, d, "started"), It = 0), t._pt && y && (ut[h.id] = 1);}u && te(t), t._onInit && t._onInit(t);}t._from = !E && !!_.runBackwards, t._onUpdate = T, t._initted = !!t.parent;},Yt = function _parseFuncOrString(t, e, r, i, a) {return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? _a(t) : t;},Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),Ht = function (A) {function Tween(t, e, i, n) {var a;"number" == typeof e && (i.duration = e, e = i, i = null);var o,h,l,f,d,c,_,m,g = (a = A.call(this, n ? e : ma(e), i) || this).vars,v = g.duration,y = g.delay,T = g.immediateRender,b = g.stagger,w = g.overwrite,x = g.keyframes,k = g.defaults,P = g.scrollTrigger,C = g.yoyoEase,S = a.parent,D = (W(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {if (e = a.vars, (o = a.timeline = new Bt({ data: "nested", defaults: k || {} })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, { ease: "none" }), x.forEach(function (t) {return o.to(D, t, ">");});else {if (f = D.length, _ = b ? Ra(b) : O, r(b)) for (d in b) {~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);}for (h = 0; h < f; h++) {for (d in l = {}, e) {Ut.indexOf(d) < 0 && (l[d] = e[d]);}l.stagger = 0, C && (l.yoyoEase = C), m && pt(l, m), c = D[h], l.duration = +Yt(v, _assertThisInitialized(a), h, c, D), l.delay = (+Yt(y, _assertThisInitialized(a), h, c, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(c, l, _(h, c, D));}o.duration() ? v = y = 0 : a.timeline = 0;}v || a.duration(v = o.duration());} else a.timeline = 0;return !0 === w && (It = _assertThisInitialized(a), F.killTweensOf(D), It = 0), S && ya(S, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(S._time) && s(T) && function _hasNoPausedAncestors(t) {return !t || t._ts && _hasNoPausedAncestors(t.parent);}(_assertThisInitialized(a)) && "nested" !== S.data) && (a._tTime = -B, a.render(Math.max(0, -y))), P && Aa(_assertThisInitialized(a), P), a;}_inheritsLoose(Tween, A);var t = Tween.prototype;return t.render = function render(t, e, r) {var i,n,a,s,o,u,h,l,f,d = this._time,c = this._tDur,p = this._dur,_ = c - B < t && 0 <= t ? c : t < B ? 0 : t;if (p) {if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {if (i = _, l = this.timeline, this._repeat) {if (s = p + this._rDelay, (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && (i = p, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = _t(this._tTime, s), i === d && !r && this._initted) return this;a !== o && (l && this._yEase && zb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0));}if (!this._initted) {if (Ba(this, i, r, e)) return this._tTime = 0, this;if (p !== this._dur) return this.render(t, e, r);}for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || bt(this, "onStart"), n = this._pt; n;) {n.r(h, n.d), n = n._next;}l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !_ && !d || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()));}} else !function _renderZeroDurationTween(t, e, r, i) {var n,a,s = t.ratio,o = e < 0 || !e && s && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1,u = t._rDelay,h = 0;if (u && t._repeat && (h = gt(0, t._tDur, e), _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ba(t, e, i, r)) if (o !== s || i || t._zTime === B || !e && t._zTime) {for (a = t._zTime, t._zTime = e || (r ? B : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || bt(t, "onStart"), n = t._pt; n;) {n.r(o, n.d), n = n._next;}t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && bt(t, "onUpdate"), h && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (bt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));} else t._zTime || (t._zTime = e);}(this, t, e, r);return this;}, t.targets = function targets() {return this._targets;}, t.invalidate = function invalidate() {return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);}, t.kill = function kill(t, e) {if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return eb(this);if (this.timeline) {var r = this.timeline.totalDuration();return this.timeline.killTweensOf(t, e, It && !0 !== It.vars.overwrite)._first || eb(this), this.parent && r !== this.timeline.totalDuration() && Ea(this, this._dur * this.timeline._tDur / r), this;}var i,a,s,o,u,h,l,f = this._targets,d = t ? yt(t) : f,c = this._ptLookup,p = this._pt;if ((!e || "all" === e) && function _arraysMatch(t, e) {for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {;}return r < 0;}(f, d)) return eb(this);for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function (t) {return u[t] = 1;}), e = u), e = function _addAliasesToVars(t, e) {var r,i,n,a,s = t[0] ? Z(t[0]).harness : 0,o = s && s.aliases;if (!o) return e;for (i in r = pt({}, e), o) {if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {r[a[n]] = r[i];}}return r;}(f, e)), l = f.length; l--;) {if (~d.indexOf(f[l])) for (u in a = c[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o) {(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);}}return this._initted && !this._pt && p && eb(this), this;}, Tween.to = function to(t, e, r) {return new Tween(t, e, r);}, Tween.from = function from(t, e) {return new Tween(t, ca(arguments, 1));}, Tween.delayedCall = function delayedCall(t, e, r, i) {return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });}, Tween.fromTo = function fromTo(t, e, r) {return new Tween(t, ca(arguments, 2));}, Tween.set = function set(t, e) {return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);}, Tween.killTweensOf = function killTweensOf(t, e, r) {return F.killTweensOf(t, e, r);}, Tween;}(Rt);ha(Ht.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), _("staggerTo,staggerFrom,staggerFromTo", function (r) {Ht[r] = function () {var t = new Bt(),e = vt.call(arguments, 0);return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);};});function Wb(t, e, r) {return t.setAttribute(e, r);}function cc(t, e, r, i) {i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);}var Xt = function _setterPlain(t, e, r) {return t[e] = r;},Vt = function _setterFunc(t, e, r) {return t[e](r);},jt = function _setterFuncWithParam(t, e, r, i) {return t[e](i.fp, r);},Zt = function _getSetter(t, e) {return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Wb : Xt;},Kt = function _renderPlain(t, e) {return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);},Qt = function _renderBoolean(t, e) {return e.set(e.t, e.p, !!(e.s + e.c * t), e);},Wt = function _renderComplexString(t, e) {var r = e._pt,i = "";if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {for (; r;) {i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;}i += e.c;}e.set(e.t, e.p, i, e);},Gt = function _renderPropTweens(t, e) {for (var r = e._pt; r;) {r.r(t, r.d), r = r._next;}},$t = function _addPluginModifier(t, e, r, i) {for (var n, a = this._pt; a;) {n = a._next, a.p === i && a.modifier(t, e, r), a = n;}},Jt = function _killPropTweensOf(t) {for (var e, r, i = this._pt; i;) {r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;}return !e;},te = function _sortPropTweensByPriority(t) {for (var e, r, i, n, a = t._pt; a;) {for (e = a._next, r = i; r && r.pr > a.pr;) {r = r._next;}(a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;}t._pt = i;},ee = (PropTween.prototype.modifier = function modifier(t, e, r) {this.mSet = this.mSet || this.set, this.set = cc, this.m = t, this.mt = r, this.tween = e;}, PropTween);function PropTween(t, e, r, i, n, a, s, o, u) {this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Kt, this.d = s || this, this.set = o || Xt, this.pr = u || 0, (this._next = t) && (t._prev = this);}_(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {return st[t] = 1;}), at.TweenMax = at.TweenLite = Ht, at.TimelineLite = at.TimelineMax = Bt, F = new Bt({ sortChildren: !1, defaults: R, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), U.stringFilter = pb;var re = { registerPlugin: function registerPlugin() {for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {e[r] = arguments[r];}e.forEach(function (t) {return function _createPlugin(t) {var e = (t = !t.name && t.default || t).name,r = o(t),i = e && !r && t.init ? function () {this._props = [];} : t,n = { init: O, render: Gt, add: Lt, kill: Jt, modifier: $t, rawVars: 0 },a = { targetTest: 0, get: 0, getSetter: Zt, aliases: {}, register: 0 };if (Pt(), t !== i) {if (ht[e]) return;ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), ht[i.prop = e] = i, t.targetTest && (dt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";}N(e, i), t.register && t.register(ie, i, ee);}(t);});}, timeline: function timeline(t) {return new Bt(t);}, getTweensOf: function getTweensOf(t, e) {return F.getTweensOf(t, e);}, getProperty: function getProperty(i, t, e, r) {n(i) && (i = yt(i)[0]);var a = Z(i || {}).get,s = e ? ga : fa;return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function (t, e, r) {return s((ht[t] && ht[t].get || a)(i, t, e, r));} : i;}, quickSetter: function quickSetter(r, e, i) {if (1 < (r = yt(r)).length) {var n = r.map(function (t) {return ie.quickSetter(t, e, i);}),a = n.length;return function (t) {for (var e = a; e--;) {n[e](t);}};}r = r[0] || {};var s = ht[e],o = Z(r),u = o.harness && (o.harness.aliases || {})[e] || e,h = s ? function (t) {var e = new s();c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Gt(1, c);} : o.set(r, u);return s ? h : function (t) {return h(r, u, i ? t + i : t, o, 1);};}, isTweening: function isTweening(t) {return 0 < F.getTweensOf(t, !0).length;}, defaults: function defaults(t) {return t && t.ease && (t.ease = zt(t.ease, R.ease)), ka(R, t || {});}, config: function config(t) {return ka(U, t || {});}, registerEffect: function registerEffect(t) {var n = t.name,i = t.effect,e = t.plugins,a = t.defaults,s = t.extendTimeline;(e || "").split(",").forEach(function (t) {return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.");}), lt[n] = function (t, e, r) {return i(yt(t), ha(e || {}, a), r);}, s && (Bt.prototype[n] = function (t, e, i) {return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i);});}, registerEase: function registerEase(t, e) {Ct[t] = zt(e);}, parseEase: function parseEase(t, e) {return arguments.length ? zt(t, e) : Ct;}, getById: function getById(t) {return F.getById(t);}, exportRoot: function exportRoot(t, e) {void 0 === t && (t = {});var r,i,n = new Bt(t);for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r;) {i = r._next, !e && !r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay), r = i;}return za(F, n, 0), n;}, utils: { wrap: function wrap(e, t, r) {var i = t - e;return W(e) ? Ya(e, wrap(0, e.length), t) : Ia(r, function (t) {return (i + (t - e) % i) % i + e;});}, wrapYoyo: function wrapYoyo(e, t, r) {var i = t - e,n = 2 * i;return W(e) ? Ya(e, wrapYoyo(0, e.length - 1), t) : Ia(r, function (t) {return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);});}, distribute: Ra, random: Ua, snap: Ta, normalize: function normalize(t, e, r) {return Tt(t, e, 0, 1, r);}, getUnit: Ka, clamp: function clamp(e, r, t) {return Ia(t, function (t) {return gt(e, r, t);});}, splitColor: kb, toArray: yt, mapRange: Tt, pipe: function pipe() {for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {e[r] = arguments[r];}return function (t) {return e.reduce(function (t, e) {return e(t);}, t);};}, unitize: function unitize(e, r) {return function (t) {return e(parseFloat(t)) + (r || Ka(t));};}, interpolate: function interpolate(e, r, t, i) {var a = isNaN(e + r) ? 0 : function (t) {return (1 - t) * e + t * r;};if (!a) {var s,o,u,h,l,f = n(e),d = {};if (!0 === t && (i = 1) && (t = null), f) e = { p: e }, r = { p: r };else if (W(e) && !W(r)) {for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) {u.push(interpolate(e[o - 1], e[o]));}h--, a = function func(t) {t *= h;var e = Math.min(l, ~~t);return u[e](t - e);}, t = r;} else i || (e = pt(W(e) ? [] : {}, e));if (!u) {for (s in r) {Lt.call(d, e, s, "get", r[s]);}a = function func(t) {return Gt(t, d) || (f ? e.p : e);};}}return Ia(t, a);}, shuffle: Qa }, install: K, effects: lt, ticker: Mt, updateRoot: Bt.updateRoot, plugins: ht, globalTimeline: F, core: { PropTween: ee, globals: N, Tween: Ht, Timeline: Bt, Animation: Rt, getCache: Z, _removeLinkedListItem: pa } };_("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {return re[t] = Ht[t];}), Mt.add(Bt.updateRoot), c = re.to({}, { duration: 0 });function gc(t, e) {for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {r = r._next;}return r;}function ic(t, a) {return { name: t, rawVars: 1, init: function init(t, i, e) {e._onInit = function (t) {var e, r;if (n(i) && (e = {}, _(i, function (t) {return e[t] = 1;}), i = e), a) {for (r in e = {}, i) {e[r] = a(i[r]);}i = e;}!function _addModifiers(t, e) {var r,i,n,a = t._targets;for (r in e) {for (i = a.length; i--;) {(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));}}}(t, i);};} };}var ie = re.registerPlugin({ name: "attr", init: function init(t, e, r, i, n) {var a, s;for (a in e) {(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);}} }, { name: "endArray", init: function init(t, e) {for (var r = e.length; r--;) {this.add(t, r, t[r] || 0, e[r]);}} }, ic("roundProps", Sa), ic("modifiers"), ic("snap", Ta)) || re;Ht.version = Bt.version = ie.version = "3.3.4", f = 1, t() && Pt();function Tc(t, e) {return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);}function Uc(t, e) {return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);}function Vc(t, e) {return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);}function Wc(t, e) {var r = e.s + e.c * t;e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);}function Xc(t, e) {return e.set(e.t, e.p, t ? e.e : e.b, e);}function Yc(t, e) {return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);}function Zc(t, e, r) {return t.style[e] = r;}function $c(t, e, r) {return t.style.setProperty(e, r);}function _c(t, e, r) {return t._gsap[e] = r;}function ad(t, e, r) {return t._gsap.scaleX = t._gsap.scaleY = r;}function bd(t, e, r, i, n) {var a = t._gsap;a.scaleX = a.scaleY = r, a.renderTransform(n, a);}function cd(t, e, r, i, n) {var a = t._gsap;a[e] = r, a.renderTransform(n, a);}function gd(t, e) {var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);return r.style ? r : ae.createElement(t);}function hd(t, e, r) {var i = getComputedStyle(t);return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && hd(t, Ne(e) || e, 1) || "";}function kd() {(function _windowExists() {return "undefined" != typeof window;})() && window.document && (ne = window, ae = ne.document, se = ae.documentElement, ue = gd("div") || { style: {} }, he = gd("div"), Le = Ne(Le), qe = Ne(qe), ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", fe = !!Ne("perspective"), oe = 1);}function ld(t) {var e,r = gd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),i = this.parentNode,n = this.nextSibling,a = this.style.cssText;if (se.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ld;} catch (t) {} else this._gsapBBox && (e = this._gsapBBox());return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), this.style.cssText = a, e;}function md(t, e) {for (var r = e.length; r--;) {if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);}}function nd(e) {var r;try {r = e.getBBox();} catch (t) {r = ld.call(e, !0);}return r && (r.width || r.height) || e.getBBox === ld || (r = ld.call(e, !0)), !r || r.width || r.x || r.y ? r : { x: +md(e, ["x", "cx", "x1"]) || 0, y: +md(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };}function od(t) {return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !nd(t));}function pd(t, e) {if (e) {var r = t.style;e in De && (e = Le), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e);}}function qd(t, e, r, i, n, a) {var s = new ee(t._pt, e, r, 0, 1, a ? Yc : Xc);return (t._pt = s).b = i, s.e = n, t._props.push(r), s;}function sd(t, e, r, i) {var n,a,s,o,u = parseFloat(r) || 0,h = (r + "").trim().substr((u + "").length) || "px",l = ue.style,f = Re.test(e),d = "svg" === t.tagName.toLowerCase(),c = (d ? "client" : "offset") + (f ? "Width" : "Height"),p = "px" === i,_ = "%" === i;return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || p || (u = sd(t, e, r, "px")), o = t.getCTM && od(t), _ && (De[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ae && a.appendChild || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = hd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), n = ue[c], a.removeChild(ue), l.position = "absolute", f && _ && ((s = Z(a)).time = Mt.time, s.width = a[c]), aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))));}function td(t, e, r, i) {var n;return oe || kd(), e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]), De[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : Ke(hd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || hd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? sd(t, e, n, r) + r : n;}function ud(t, e, r, i) {if (!r || "none" === r) {var n = Ne(e, t, 1),a = n && hd(t, n, 1);a && a !== r && (e = n, r = a);}var s,o,u,h,l,f,d,c,p,_,m,g,v = new ee(this._pt, t.style, e, 0, 1, Wt),y = 0,T = 0;if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = hd(t, e) || i, t.style[e] = r), pb(s = [r, i]), i = s[1], u = (r = s[0]).match(tt) || [], (i.match(tt) || []).length) {for (; o = tt.exec(i);) {d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = tt.lastIndex - _.length, _ || (_ = _ || U.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = sd(t, e, f, _) || 0), v._pt = { _next: v._pt, p: p || 1 === T ? p : ",", s: h, c: g ? g * c : c - h, m: l && l < 4 ? Math.round : 0 });}v.c = y < i.length ? i.substring(y, i.length) : "";} else v.r = "display" === e && "none" === i ? Yc : Xc;return it.test(i) && (v.e = 0), this._pt = v;}function wd(t) {var e = t.split(" "),r = e[0],i = e[1] || "50%";return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = He[r] || r, e[1] = He[i] || i, e.join(" ");}function xd(t, e) {if (e.tween && e.tween._time === e.tween._dur) {var r,i,n,a = e.t,s = a.style,o = e.u,u = a._gsap;if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {r = o[n], De[r] && (i = 1, r = "transformOrigin" === r ? qe : Le), pd(a, r);}i && (pd(a, Le), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));}}function Bd(t) {return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;}function Cd(t) {var e = hd(t, Le);return Bd(e) ? Ve : e.substr(7).match(J).map(aa);}function Dd(t, e) {var r,i,n,a,s = t._gsap || Z(t),o = t.style,u = Cd(t);return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, se.appendChild(t)), u = Cd(t), n ? o.display = n : pd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);}function Ed(t, e, r, i, n, a) {var s,o,u,h = t._gsap,l = n || Dd(t, !0),f = h.xOrigin || 0,d = h.yOrigin || 0,c = h.xOffset || 0,p = h.yOffset || 0,_ = l[0],m = l[1],g = l[2],v = l[3],y = l[4],T = l[5],b = e.split(" "),w = parseFloat(b[0]) || 0,x = parseFloat(b[1]) || 0;r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = nd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[qe] = "0px 0px", a && (qd(a, h, "xOrigin", f, w), qd(a, h, "yOrigin", d, x), qd(a, h, "xOffset", c, h.xOffset), qd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);}function Hd(t, e, r) {var i = Ka(e);return aa(parseFloat(e) + parseFloat(sd(t, "x", r + "px", i))) + i;}function Od(t, e, r, i, a, s) {var o,u,h = 360,l = n(a),f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),d = s ? f * s : f - i,c = i + d + "deg";return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ee(t._pt, e, r, i, d, Uc), u.e = c, u.u = "deg", t._props.push(r), u;}function Pd(t, e, r) {var i,n,a,s,o,u,h,l = he.style,f = r._gsap;for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Le] = e, ae.body.appendChild(he), i = Ze(he, 1), De) {(a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ka(a) !== (h = Ka(s)) ? sd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ee(t._pt, f, n, o, u - o, Tc), t._pt.u = h || 0, t._props.push(n));}ae.body.removeChild(he);}var ne,ae,se,oe,ue,he,le,fe,de = Ct.Power0,ce = Ct.Power1,pe = Ct.Power2,_e = Ct.Power3,me = Ct.Power4,ge = Ct.Linear,ve = Ct.Quad,ye = Ct.Cubic,Te = Ct.Quart,be = Ct.Quint,we = Ct.Strong,xe = Ct.Elastic,ke = Ct.Back,Oe = Ct.SteppedEase,Me = Ct.Bounce,Pe = Ct.Sine,Ce = Ct.Expo,Se = Ct.Circ,De = {},Ae = 180 / Math.PI,ze = Math.PI / 180,Ee = Math.atan2,Fe = /([A-Z])/g,Re = /(?:left|right|width|margin|padding|x)/i,Be = /[\s,\(]\S/,Ie = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },Le = "transform",qe = Le + "Origin",Ye = "O,Moz,ms,Ms,Webkit".split(","),Ne = function _checkPropPrefix(t, e, r) {var i = (e || ue).style,n = 5;if (t in i && !r) return t;for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i);) {;}return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t;},Ue = { deg: 1, rad: 1, turn: 1 },He = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },Xe = { clearProps: function clearProps(t, e, r, i, n) {if ("isFromStart" !== n.data) {var a = t._pt = new ee(t._pt, e, r, 0, 0, xd);return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;}} },Ve = [1, 0, 0, 1, 0, 0],je = {},Ze = function _parseTransform(t, e) {var r = t._gsap || new Ft(t);if ("x" in r && !e && !r.uncache) return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,O,M,P,C,S,D,A,z,E,F,R = t.style,B = r.scaleX < 0,I = "deg",L = hd(t, qe) || "0";return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !od(t)), m = Dd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Ed(t, M || L, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ve && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Ae : 0, (f = w || x ? Ee(w, x) * Ae + u : 0) && (o *= Math.cos(f * ze)), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (F = m[6], z = m[7], S = m[8], D = m[9], A = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(F, A)) * Ae, g && (M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + D * y, C = F * v + A * y, S = k * -y + S * v, D = O * -y + D * v, A = F * -y + A * v, E = z * -y + E * v, k = M, O = P, F = C), l = (g = Ee(-w, A)) * Ae, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = M = T * v - S * y, b = P = b * v - D * y, w = C = w * v - A * y), u = (g = Ee(b, T)) * Ae, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + F * F)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Ae : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Bd(hd(t, Le)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + I, r.rotationX = aa(h) + I, r.rotationY = aa(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[qe] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? tr : fe ? Je : Qe, r.uncache = 0, r;},Ke = function _firstTwoOnly(t) {return (t = t.split(" "))[0] + " " + t[1];},Qe = function _renderNon3DTransforms(t, e) {e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Je(t, e);},We = "0deg",Ge = "0px",$e = ") ",Je = function _renderCSSTransforms(t, e) {var r = e || this,i = r.xPercent,n = r.yPercent,a = r.x,s = r.y,o = r.z,u = r.rotation,h = r.rotationY,l = r.rotationX,f = r.skewX,d = r.skewY,c = r.scaleX,p = r.scaleY,_ = r.transformPerspective,m = r.force3D,g = r.target,v = r.zOrigin,y = "",T = "auto" === m && t && 1 !== t || !0 === m;if (v && (l !== We || h !== We)) {var b,w = parseFloat(h) * ze,x = Math.sin(w),k = Math.cos(w);w = parseFloat(l) * ze, b = Math.cos(w), a = Hd(g, a, x * b * -v), s = Hd(g, s, -Math.sin(w) * -v), o = Hd(g, o, k * b * -v + v);}_ !== Ge && (y += "perspective(" + _ + $e), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ge && s === Ge && o === Ge || (y += o !== Ge || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + $e), u !== We && (y += "rotate(" + u + $e), h !== We && (y += "rotateY(" + h + $e), l !== We && (y += "rotateX(" + l + $e), f === We && d === We || (y += "skew(" + f + ", " + d + $e), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + $e), g.style[Le] = y || "translate(0, 0)";},tr = function _renderSVGTransforms(t, e) {var r,i,n,a,s,o = e || this,u = o.xPercent,h = o.yPercent,l = o.x,f = o.y,d = o.rotation,c = o.skewX,p = o.skewY,_ = o.scaleX,m = o.scaleY,g = o.target,v = o.xOrigin,y = o.yOrigin,T = o.xOffset,b = o.yOffset,w = o.forceCSS,x = parseFloat(l),k = parseFloat(f);d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ze, c *= ze, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ze, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = sd(g, "x", l, "px"), k = sd(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Le] = s);};_("padding,margin,Width,Radius", function (e, r) {var t = "Right",i = "Bottom",n = "Left",o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {return r < 2 ? e + t : "border" + t + e;});Xe[1 < r ? "border" + e : e] = function (e, t, r, i, n) {var a, s;if (arguments.length < 4) return a = o.map(function (t) {return td(e, t, r);}), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];}), e.init(t, s, n);};});var er,rr,ir,nr = { name: "css", register: kd, targetTest: function targetTest(t) {return t.style && t.nodeType;}, init: function init(t, e, r, i, n) {var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T = this._props,b = t.style;for (f in oe || kd(), e) {if ("autoRound" !== f && (s = e[f], !ht[f] || !Lb(f, e, r, i, t, n))) if (h = typeof s, l = Xe[f], "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = _a(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);else {if (a = td(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Ie && ("autoAlpha" === f && (1 === u && "hidden" === td(t, "visibility") && o && (u = 0), qd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in De) {if (m || ((g = t._gsap).renderTransform || Ze(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ee(this._pt, b, Le, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), T.push("scaleY", f), f += "X";else {if ("transformOrigin" === f) {s = wd(s), g.svg ? Ed(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && qd(this, g, "zOrigin", g.zOrigin, c), qd(this, b, f, Ke(a), Ke(s)));continue;}if ("svgOrigin" === f) {Ed(t, s, 1, v, 0, this);continue;}if (f in je) {Od(this, g, f, u, s, p);continue;}if ("smoothOrigin" === f) {qd(this, g, "smooth", g.smooth, s);continue;}if ("force3D" === f) {g[f] = s;continue;}if ("transform" === f) {Pd(this, s, t);continue;}}} else f in b || (f = Ne(f) || f);if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = sd(t, f, a, c)), this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Tc : Wc), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = Vc);else if (f in b) ud.call(this, t, f, a, s);else {if (!(f in t)) {L(f, s);continue;}this.add(t, f, t[f], s, i, n);}T.push(f);}}y && te(this);}, get: td, aliases: Ie, getSetter: function getSetter(t, e, r) {var i = Ie[e];return i && i.indexOf(",") < 0 && (e = i), e in De && e !== qe && (t._gsap.x || td(t, "x")) ? r && le === r ? "scale" === e ? ad : _c : (le = r || {}) && ("scale" === e ? bd : cd) : t.style && !q(t.style[e]) ? Zc : ~e.indexOf("-") ? $c : Zt(t, e);}, core: { _removeProperty: pd, _getMatrix: Dd } };ie.utils.checkPrefix = Ne, ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {De[t] = 1;}), _(rr, function (t) {U.units[t] = "deg", je[t] = 1;}), Ie[ir[13]] = er + "," + rr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {var e = t.split(":");Ie[e[1]] = ir[e[0]];}), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {U.units[t] = "px";}), ie.registerPlugin(nr);var ar = ie.registerPlugin(nr) || ie,sr = ar.core.Tween;e.Back = ke, e.Bounce = Me, e.CSSPlugin = nr, e.Circ = Se, e.Cubic = ye, e.Elastic = xe, e.Expo = Ce, e.Linear = ge, e.Power0 = de, e.Power1 = ce, e.Power2 = pe, e.Power3 = _e, e.Power4 = me, e.Quad = ve, e.Quart = Te, e.Quint = be, e.Sine = Pe, e.SteppedEase = Oe, e.Strong = we, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Ht, e.TweenMax = sr, e.default = ar, e.gsap = ar;if (typeof window === "undefined" || window !== e) {Object.defineProperty(e, "__esModule", { value: !0 });} else {delete e.default;}});

/***/ }),

/***/ 52:
/*!*****************************************************************************************!*\
  !*** E:/AllWorkspaces/HBuilderX_Workspace/test-uni-app/static/SDK/ScrollTrigger.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * ScrollTrigger 3.3.4
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) { true ? t(exports) : undefined;}(this, function (e) {"use strict";function B(e) {return e;}function C() {return "undefined" != typeof window;}function D() {return xe || C() && (xe = window.gsap) && xe.registerPlugin && xe;}function E(e) {return !!~i.indexOf(e);}function F(t, e) {var r = e.s;return function (e) {return arguments.length ? t[r] = e : t[r];};}function G(e, t) {var r = t.s,n = t.d2;return (r = "scroll" + n) && E(e) ? Math.max(x[r], Te[r]) - (we["inner" + n] || x["client" + n] || Te["client" + n]) : e[r] - e["offset" + n];}function H(e) {return "string" == typeof e;}function I(e) {return "function" == typeof e;}function J(e) {return "number" == typeof e;}function K(e) {return "object" == typeof e;}function da(e) {return we.getComputedStyle(e);}function fa(e, t) {for (var r in t) {r in e || (e[r] = t[r]);}return e;}function ga(e, t) {var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== da(e)[c] && xe.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),n = e.getBoundingClientRect();return r && r.progress(0).kill(), n;}function ha(e, t) {var r = t.d2;return e["offset" + r] || e["client" + r] || 0;}function ja(t, r, e, n) {return e.split(",").forEach(function (e) {return t(r, e, n);});}function ka(e, t, r) {return e.addEventListener(t, r, { passive: !0 });}function la(e, t, r) {return e.removeEventListener(t, r);}function pa(e, t) {if (H(e)) {var r = e.indexOf("="),n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in d ? d[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);}return e;}function qa(e, t, r, n, o, i, a) {var s = o.startColor,l = o.endColor,c = o.fontSize,f = o.indent,u = o.fontWeight,p = ke.createElement("div"),d = E(r),g = -1 !== e.indexOf("scroller"),h = d ? Te : r,v = -1 !== e.indexOf("start"),m = v ? s : l,b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (b += (n === Ye ? y : w) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.insertBefore(p, h.children[0]), p._offset = p["offset" + n.op.d2], k(p, 0, n, d, v), p;}function ua() {return n = n || s(m);}function va() {n || (n = s(m), Fe || v("scrollStart"), Fe = Ae());}function wa() {return !Ee && 200 < Ae() - Fe && a.restart(!0);}function Aa(e) {var t = v("refreshInit"),r = Ze.length;for (Pe = r; Pe--;) {Ze[Pe].scroll.rec = Ze[Pe].scroll();}for (Pe = 0; Pe < r; Pe++) {Ze[Pe] && Ze[Pe].refresh(!0 !== e);}for (t.forEach(function (e) {return e && e.render && e.render(-1);}), Pe = Ze.length; Pe--;) {Ze[Pe].scroll.rec = 0;}v("refresh");}function Ea(e, t, r) {if (Qe(r), e.parentNode === t) {var n = t.parentNode;n && (n.insertBefore(e, t), n.removeChild(t));}}function Fa(e, t, r) {if (e.parentNode !== t) {for (var n, o = b.length, i = t.style, a = e.style; o--;) {i[n = b[o]] = r[n];}i.position = "absolute" === r.position ? "absolute" : "relative", a[w] = a[y] = "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Be] = ha(e, Xe) + Ke, i[Ne] = ha(e, Ye) + Ke, i[je] = a[We] = a[p] = a[u] = "0", a[Be] = r[Be], a[Ne] = r[Ne], a[je] = r[je], e.parentNode.insertBefore(t, e), t.appendChild(e);}}function Ia(e) {for (var t = T.length, r = e.style, n = [], o = 0; o < t; o++) {n.push(T[o], r[T[o]]);}return n.t = e, n;}function La(e, t, r, n, o, i, a, s, l, c, f, u) {if (I(e) && (e = e(s)), H(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? pa("0" + e.substr(3), r) : 0)), J(e)) a && k(a, r, n, f, !0);else {I(t) && (t = t(s));var p,d,g,h = Se(t)[0] || Te,v = ga(h) || {},m = e.split(" ");v && (v.left || v.top) || "none" !== da(h).display || (g = h.style.display, h.style.display = "block", v = ga(h), g ? h.style.display = g : h.style.removeProperty("display")), p = pa(m[0], v[n.d]), d = pa(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && k(a, d, n, f, r - d < 20 || a._isStart && 20 < d), r -= r - d;}if (i) {var b = e + r,y = i._isStart;u = "scroll" + n.d2, k(i, b, n, f, y && 20 < b || !y && (f ? Math.max(Te[u], x[u]) : i.parentNode[u]) <= b + 1), f && (l = ga(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Ke));}return Math.round(e);}function Oa(l, e) {var c,f = E(l) ? e.sc : F(l, e),u = "_scroll" + e.p2;return l[u] = f, function getTween(e, t, r, n, o) {var i = getTween.tween,a = t.onComplete,s = {};return i && i.kill(), c = f(), t[u] = e, (t.modifiers = s)[u] = function (e) {return f() !== c ? (i.kill(), getTween.tween = 0, e = f()) : n && (e = r + n * i.ratio + o * i.ratio * i.ratio), c = Math.round(e);}, t.onComplete = function () {getTween.tween = 0, a && a.call(i);}, i = getTween.tween = xe.to(l, t);};}var xe,o,we,ke,x,Te,i,a,s,n,Se,Ce,_e,l,Ee,Oe,c,Pe,Ie,Me = 1,Ae = Date.now,f = Ae(),Fe = 0,ze = 1,Le = Math.abs,t = "scrollLeft",r = "scrollTop",u = "left",p = "top",y = "right",w = "bottom",Be = "width",Ne = "height",Re = "Right",qe = "Left",He = "Top",De = "Bottom",je = "padding",We = "margin",Ge = "Width",Je = "Height",Ke = "px",Xe = { s: t, p: u, p2: qe, os: y, os2: Re, d: Be, d2: Ge, a: "x", sc: function sc(e) {return arguments.length ? we.scrollTo(e, Ye.sc()) : we.pageXOffset || ke[t] || x[t] || Te[t] || 0;} },Ye = { s: r, p: p, p2: He, os: w, os2: De, d: Ne, d2: Je, a: "y", op: Xe, sc: function sc(e) {return arguments.length ? we.scrollTo(Xe.sc(), e) : we.pageYOffset || ke[r] || x[r] || Te[r] || 0;} },Ue = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },Ve = { toggleActions: "play", anticipatePin: 0 },d = { top: 0, left: 0, center: .5, bottom: 1, right: 1 },k = function _positionMarker(e, t, r, n, o) {var i = {},a = r[o ? "os2" : "p2"],s = r[o ? "p2" : "os2"];e._isFlipped = o, i[r.a + "Percent"] = o ? -100 : 0, i[r.a] = o ? 1 : 0, i["border" + a + Ge] = 1, i["border" + s + Ge] = 0, i[r.p] = t, xe.set(e, i);},Ze = [],$e = {},g = {},h = [],v = function _dispatch(e) {return g[e] && g[e].map(function (e) {return e();}) || h;},m = function _updateAll() {var e = Ze.length,t = Ae(),r = 50 <= t - f;for (r && (Fe && !Oe && 200 < t - Fe && (Fe = 0, v("scrollEnd")), _e = f, f = t), Pe = 0; Pe < e; Pe++) {Ze[Pe] && Ze[Pe].update(0, r);}n = 0;},b = [u, p, w, y, We + De, We + Re, We + He, We + qe, "display", "flexShrink"],T = b.concat([Be, Ne, "boxSizing", "max" + Ge, "max" + Je, "position", We, je, je + He, je + Re, je + De, je + qe]),S = /([A-Z])/g,Qe = function _setState(e) {for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) {r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(S, "-$1").toLowerCase());}},et = { left: 0, top: 0 },tt = /(?:webkit|moz|length)/i;Xe.op = Ye;var _ = (ScrollTrigger.prototype.init = function init(x, w) {if (this.progress = 0, this.vars && this.kill(1), ze) {var d,e,c,k,g,h,T,S,C,_,O,P,t,M,A,z,L,N,r,R,v,q,D,m,j,b,y,n,W,X,Y,U,o,f,V,Z,$ = (x = fa(H(x) || J(x) || x.nodeType ? { trigger: x } : x, Ve)).horizontal ? Xe : Ye,Q = x.onUpdate,ee = x.toggleClass,i = x.id,te = x.onToggle,re = x.onRefresh,a = x.scrub,ne = x.trigger,oe = x.pin,ie = x.pinSpacing,ae = x.invalidateOnRefresh,se = x.anticipatePin,s = x.onScrubComplete,u = x.onSnapComplete,le = x.once,ce = x.snap,fe = x.pinReparent,ue = !a && 0 !== a,pe = Se(x.scroller || we)[0],l = xe.core.getCache(pe),de = E(pe),ge = [x.onEnter, x.onLeave, x.onEnterBack, x.onLeaveBack],he = ue && (le ? "play" : x.toggleActions).split(" "),p = "markers" in x ? x.markers : Ve.markers,ve = de ? 0 : parseFloat(da(pe)["border" + $.p2 + Ge]) || 0,me = this,be = function softRefresh() {return ScrollTrigger.removeEventListener("scrollEnd", softRefresh) || me.refresh();},ye = x.onRefreshInit && function () {return x.onRefreshInit(me);};se *= 45, Ze.push(me), me.scroller = pe, me.scroll = de ? $.sc : F(pe, $), g = me.scroll(), me.vars = x, w = w || x.animation, l.tweenScroll = l.tweenScroll || { top: Oa(pe, Ye), left: Oa(pe, Xe) }, me.tweenTo = d = l.tweenScroll[$.p], w && (w.vars.lazy = !1, w._initted || !1 !== w.vars.immediateRender && w.render(-.01, !0, !0), me.animation = w.pause(), w.scrollTrigger = me, (o = J(a) && a) && (U = xe.to(w, { ease: "power3", duration: o, onComplete: function onComplete() {return s && s(me);} })), W = 0, i = i || w.vars.id), ce && (K(ce) || (ce = { snapTo: ce }), c = I(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getLabels(i) {return function (e) {var t,r = [],n = i.labels,o = i.duration();for (t in n) {r.push(n[t] / o);}return xe.utils.snap(r, e);};}(w) : xe.utils.snap(ce.snapTo), f = ce.duration || { min: .1, max: 2 }, f = K(f) ? Ce(f.min, f.max) : Ce(f, f), V = xe.delayedCall(ce.delay || o / 2 || .1, function () {if (!Fe || Fe === Y && !Oe) {var e = w && !ue ? w.totalProgress() : me.progress,t = (e - X) / (Ae() - _e) * 1e3 || 0,r = Le(t / 2) * t / .185,n = e + r,o = Ce(0, 1, c(n, me)),i = o - e - r,a = me.scroll(),s = Math.round(T + o * M),l = d.tween;if (a <= S && T <= a) {if (l && !l._initted) {if (l.data <= Math.abs(s - a)) return;l.kill();}d(s, { duration: f(Le(.185 * Math.max(Le(n - e), Le(o - e)) / t / .05 || 0)), ease: ce.ease || "power3", data: Math.abs(s - a), onComplete: function onComplete() {W = X = w && !ue ? w.totalProgress() : me.progress, u && u(me);} }, T + e * M, r * M, i * M);}} else V.restart(!0);}).pause()), i && ($e[i] = me), ne = me.trigger = Se(ne || oe)[0], oe = !0 === oe ? ne : Se(oe)[0], H(ee) && (ee = { targets: ne, className: ee }), oe && (!1 === ie || ie === We || (ie = "flex" !== da(oe.parentNode).display && je), me.pin = oe, !1 !== x.force3D && xe.set(oe, { force3D: !0 }), (e = xe.core.getCache(oe)).spacer ? A = e.pinState : (e.spacer = N = ke.createElement("div"), N.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), e.pinState = A = Ia(oe)), me.spacer = N = e.spacer, n = da(oe), m = n[ie + $.os2], R = xe.getProperty(oe), v = xe.quickSetter(oe, $.a, Ke), Fa(oe, N, n), L = Ia(oe)), p && (t = K(p) ? fa(p, Ue) : Ue, O = qa("scroller-start", i, pe, $, t, 0), P = qa("scroller-end", i, pe, $, t, 0, O), r = O["offset" + $.op.d2], C = qa("start", i, pe, $, t, r), _ = qa("end", i, pe, $, t, r), de || (function _makePositionable(e) {e.style.position = "absolute" === da(e).position ? "absolute" : "relative";}(pe), xe.set([O, P], { force3D: !0 }), b = xe.quickSetter(O, $.a, Ke), y = xe.quickSetter(P, $.a, Ke))), me.revert = function (e) {var t = !1 !== e;t !== k && (me.update(t), oe && t && Ea(oe, N, A), k = t);}, me.refresh = function (e) {if (!Ee && Z) if (oe && e && Fe) ka(ScrollTrigger, "scrollEnd", be);else {var t = Math.max(me.scroll(), me.scroll.rec || 0),r = me.progress,n = w && w.progress();Ee = 1, U && U.kill(), ae && w && w.progress(0).invalidate().progress(me.progress), k || me.revert();var o,i,a,s,l,c,f,u = (de ? we["inner" + $.d2] : pe["client" + $.d2]) || 0,p = de ? et : ga(pe),d = G(pe, $),g = 0,h = 0,v = x.end,m = x.endTrigger || ne,b = x.start || (oe || !ne ? "0 0" : "0 100%"),y = oe && Math.max(0, Ze.indexOf(me)) || 0;if (y) for (c = y; c--;) {Ze[c].pin === oe && Ze[c].revert();}if (T = La(b, ne, u, $, me.scroll(), C, O, me, p, ve, de, d) || (oe ? -.001 : 0), I(v) && (v = v(me)), H(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (H(b) ? b.split(" ")[0] : "") + v : (g = pa(v.substr(2), u), v = H(b) ? b : T + g, m = ne)), S = Math.max(T, La(v || (m ? "100% 0" : d), m, u, $, me.scroll() + g, _, P, me, p, ve, de, d)) || -.001, M = S - T || (T -= .01) && .001, oe) {for (c = y; c--;) {(f = Ze[c]).pin === oe && f.start - f._pinPush < T && (h += f.end - f.start);}if (T += h, S += h, me._pinPush = h, C && h && ((o = {})[$.a] = "+=" + h, xe.set([C, _], o)), o = da(oe), s = $ === Ye, a = me.scroll(), q = parseFloat(R($.a)) + h, Fa(oe, N, o), L = Ia(oe), i = ga(oe, !0), ie && (N.style[ie + $.os2] = M + h + Ke, (j = ie === je ? ha(oe, $) + M + h : 0) && (N.style[$.d] = j + Ke), de && me.scroll(t)), de && ((l = { top: i.top + (s ? a - T : 0) + Ke, left: i.left + (s ? 0 : a - T) + Ke, boxSizing: "border-box", position: "fixed" })[Be] = l.maxWidth = Math.ceil(i.width) + Ke, l[Ne] = l["max" + Je] = Math.ceil(i.height) + Ke, l[We] = l[We + He] = l[We + Re] = l[We + De] = l[We + qe] = "0", l[je] = o[je], l[je + He] = o[je + He], l[je + Re] = o[je + Re], l[je + De] = o[je + De], l[je + qe] = o[je + qe], z = function _copyState(e, t, r) {for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) {n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);}return o.t = e.t, o;}(A, l, fe)), w ? (w.progress(1, !0), D = R($.a) - q + M + h, M !== D && z.splice(z.length - 2, 2), w.progress(0, !0)) : D = M, y) for (c = 0; c < y; c++) {Ze[c].pin === oe && Ze[c].revert(!1);}} else if (ne && me.scroll()) for (i = ne.parentNode; i && i !== Te;) {i._pinOffset && (T -= i._pinOffset, S -= i._pinOffset), i = i.parentNode;}me.start = T, me.end = S, me.scroll() < t && me.scroll(t), me.revert(!1), Ee = 0, n && ue && w.progress(n, !0), r !== me.progress && (U && w.totalProgress(r, !0), me.progress = r, me.update()), oe && ie && (N._pinOffset = Math.round(me.progress * D)), re && re(me);}}, me.getVelocity = function () {return (me.scroll() - h) / (Ae() - _e) * 1e3 || 0;}, me.update = function (e, t) {var r,n,o,i,a,s = me.scroll(),l = e ? 0 : (s - T) / M,c = l < 0 ? 0 : 1 < l ? 1 : l || 0,f = me.progress;if (t && (h = g, g = s, ce && (X = W, W = w && !ue ? w.totalProgress() : c)), se && !c && oe && !Ee && T < s + (s - h) / (Ae() - _e) * se && (c = 1e-4), c !== f && Z) {if (i = (a = (r = me.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, me.direction = f < c ? 1 : -1, me.progress = c, ue || (!U || Ee || Me ? w && w.totalProgress(c, !!Ee) : (U.vars.totalProgress = c, U.invalidate().restart())), oe) if (e && ie && (N.style[ie + $.os2] = m), de) {if (i) {if (o = !e && s < S + 1 && s + 1 >= G(pe, $), fe) {if (!Ee && (r || o)) {var u = ga(oe, !0),p = s - T;oe.style.top = u.top + ($ === Ye ? p : 0) + Ke, oe.style.left = u.left + ($ === Ye ? 0 : p) + Ke;}!function _reparent(e, t) {if (e.parentNode !== t) {var r,n,o = e.style;if (t === Te) for (r in e._stOrig = o.cssText, n = da(e)) {+r || tt.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);} else o.cssText = e._stOrig;t.appendChild(e);}}(oe, Ee || !r && !o ? N : Te);}Qe(r || o ? z : L), D !== M && c < 1 && r || v(q + (1 !== c || o ? 0 : D));}} else v(q + D * c);!ce || d.tween || Ee || Me || (Y = Fe, V.restart(!0)), ee && a && (!le || r) && Se(ee.targets).forEach(function (e) {return e.classList[r ? "add" : "remove"](ee.className);}), !Q || ue || e || Q(me), i && !Ee ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, ue && (o = !a && "none" !== he[n + 1] && he[n + 1] || he[n], w && ("complete" === o || "reset" === o || o in w) && ("complete" === o ? w.pause().totalProgress(1) : "reset" === o ? w.restart(!0).pause() : w[o]()), Q && Q(me)), !a && Ie || (te && a && te(me), ge[n] && ge[n](me), le && (1 === c ? me.kill() : ge[n] = 0), a || ge[n = 1 === c ? 1 : 3] && ge[n](me))) : ue && Q && !Ee && Q(me);}y && (b(s + (O._isFlipped ? 1 : 0)), y(s));}, me.enable = function () {Z || (Z = !0, ka(pe, "resize", wa), ka(pe, "scroll", va), ye && ka(ScrollTrigger, "refreshInit", ye), w && w.add ? xe.delayedCall(.01, me.refresh) && (M = .01) && (T = S = 0) : me.refresh());}, me.disable = function (e) {if (Z && (Z = me.isActive = !1, U && U.pause(), e !== Z && me.update(1), oe && Ea(oe, N, A), ye && la(ScrollTrigger, "refreshInit", ye), V && (V.pause(), d.tween && d.tween.kill()), !de)) {for (var t = Ze.length; t--;) {if (Ze[t].scroller === pe && Ze[t] !== me) return;}la(pe, "resize", wa), la(pe, "scroll", va);}}, me.kill = function (e) {me.disable(e), i && delete $e[i];var t = Ze.indexOf(me);Ze.splice(t, 1), t === Pe && Pe--, w && (w.scrollTrigger = null);}, me.enable();} else this.update = this.refresh = this.kill = B;}, ScrollTrigger.register = function register(e) {if (xe = e || D(), C() && window.document && (we = window, ke = document, x = ke.documentElement, Te = ke.body), xe && (Se = xe.utils.toArray, Ce = xe.utils.clamp, xe.core.globals("ScrollTrigger", ScrollTrigger), Te)) {s = we.requestAnimationFrame || function (e) {return setTimeout(e, 16);}, ka(we, "mousewheel", va), i = [we, ke, x, Te], ka(ke, "scroll", va);var t,r = Te.style,n = r.borderTop;r.borderTop = "1px solid #000", t = ga(Te), Ye.m = Math.round(t.top + Ye.sc()) || 0, Xe.m = Math.round(t.left + Xe.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), l = setInterval(ua, 100), xe.delayedCall(.5, function () {return Me = 0;}), ka(ke, "touchcancel", B), ka(Te, "touchstart", B), ja(ka, ke, "pointerdown,touchstart,mousedown", function () {return Oe = 1;}), ja(ka, ke, "pointerup,touchend,mouseup", function () {return Oe = 0;}), c = xe.utils.checkPrefix("transform"), T.push(c), o = Ae(), a = xe.delayedCall(.2, Aa).pause(), ka(ke, "visibilitychange", function () {return ke.hidden || Aa();}), ka(ke, "DOMContentLoaded", Aa), ka(we, "load", function () {return Fe || Aa();}), ka(we, "resize", wa);}return o;}, ScrollTrigger.defaults = function defaults(e) {for (var t in e) {Ve[t] = e[t];}}, ScrollTrigger.kill = function kill() {ze = 0, Ze.slice(0).forEach(function (e) {return e.kill(1);});}, ScrollTrigger.config = function config(e) {"limitCallbacks" in e && (Ie = !!e.limitCallbacks);var t = e.syncInterval;t && clearInterval(l) || (l = t) && setInterval(ua, t);}, ScrollTrigger);function ScrollTrigger(e, t) {o || ScrollTrigger.register(xe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);}_.version = "3.3.4", _.create = function (e, t) {return new _(e, t);}, _.refresh = function (e) {return e ? wa() : Aa(!0);}, _.update = m, _.maxScroll = function (e, t) {return G(e, t ? Xe : Ye);}, _.getScrollFunc = function (e, t) {return (t = t ? Xe : Ye) && (E(e) ? t.sc : F(e, t));}, _.getById = function (e) {return $e[e];}, _.getAll = function () {return Ze.slice(0);}, _.isScrolling = function () {return !!Fe;}, _.addEventListener = function (e, t) {var r = g[e] || (g[e] = []);~r.indexOf(t) || r.push(t);}, _.removeEventListener = function (e, t) {var r = g[e],n = r && r.indexOf(t);0 <= n && r.splice(n, 1);}, _.batch = function (e, t) {function zg(e, t) {var r = [],n = [],o = xe.delayedCall(i, function () {t(r, n), r = [], n = [];}).pause();return function (e) {r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);};}var r,n = [],o = {},i = t.interval || .016,a = t.batchMax || 1e9;for (r in t) {o[r] = "on" === r.substr(0, 2) && I(t[r]) && "onRefreshInit" !== r ? zg(0, t[r]) : t[r];}return I(a) && (a = a(), ka(_, "refresh", function () {return a = t.batchMax();})), Se(e).forEach(function (e) {var t = {};for (r in o) {t[r] = o[r];}t.trigger = e, n.push(_.create(t));}), n;}, D() && xe.registerPlugin(_), e.ScrollTrigger = _, e.default = _;if (typeof window === "undefined" || window !== e) {Object.defineProperty(e, "__esModule", { value: !0 });} else {delete e.default;}});

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map