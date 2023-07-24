(function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var l$1 = Symbol.for("react.element"),
	  n$2 = Symbol.for("react.portal"),
	  p$2 = Symbol.for("react.fragment"),
	  q$2 = Symbol.for("react.strict_mode"),
	  r$2 = Symbol.for("react.profiler"),
	  t$1 = Symbol.for("react.provider"),
	  u = Symbol.for("react.context"),
	  v$2 = Symbol.for("react.forward_ref"),
	  w$2 = Symbol.for("react.suspense"),
	  x$3 = Symbol.for("react.memo"),
	  y$3 = Symbol.for("react.lazy"),
	  z$3 = Symbol.iterator;
	function A$5(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = z$3 && a[z$3] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var B$4 = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  C$4 = Object.assign,
	  D$4 = {};
	function E$4(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$4;
	  this.updater = e || B$4;
	}
	E$4.prototype.isReactComponent = {};
	E$4.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	E$4.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F$1() {}
	F$1.prototype = E$4.prototype;
	function G$2(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$4;
	  this.updater = e || B$4;
	}
	var H$2 = G$2.prototype = new F$1();
	H$2.constructor = G$2;
	C$4(H$2, E$4.prototype);
	H$2.isPureReactComponent = !0;
	var I$2 = Array.isArray,
	  J$1 = Object.prototype.hasOwnProperty,
	  K$4 = {
	    current: null
	  },
	  L$2 = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function M$2(a, b, e) {
	  var d,
	    c = {},
	    k = null,
	    h = null;
	  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J$1.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
	  var g = arguments.length - 2;
	  if (1 === g) c.children = e;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    c.children = f;
	  }
	  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	  return {
	    $$typeof: l$1,
	    type: a,
	    key: k,
	    ref: h,
	    props: c,
	    _owner: K$4.current
	  };
	}
	function N$2(a, b) {
	  return {
	    $$typeof: l$1,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function O$2(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === l$1;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var P$2 = /\/+/g;
	function Q$2(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R$2(a, b, e, d, c) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case l$1:
	        case n$2:
	          h = !0;
	      }
	  }
	  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$2(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b, e, "", function (a) {
	    return a;
	  })) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
	  h = 0;
	  d = "" === d ? "." : d + ":";
	  if (I$2(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = d + Q$2(k, g);
	    h += R$2(k, b, e, f, c);
	  } else if (f = A$5(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q$2(k, g++), h += R$2(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	  return h;
	}
	function S$2(a, b, e) {
	  if (null == a) return a;
	  var d = [],
	    c = 0;
	  R$2(a, d, "", "", function (a) {
	    return b.call(e, a, c++);
	  });
	  return d;
	}
	function T$2(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    b.then(function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	    }, function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	    });
	    -1 === a._status && (a._status = 0, a._result = b);
	  }
	  if (1 === a._status) return a._result.default;
	  throw a._result;
	}
	var U$2 = {
	    current: null
	  },
	  V$2 = {
	    transition: null
	  },
	  W$2 = {
	    ReactCurrentDispatcher: U$2,
	    ReactCurrentBatchConfig: V$2,
	    ReactCurrentOwner: K$4
	  };
	var Children = {
	  map: S$2,
	  forEach: function (a, b, e) {
	    S$2(a, function () {
	      b.apply(this, arguments);
	    }, e);
	  },
	  count: function (a) {
	    var b = 0;
	    S$2(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return S$2(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
	    return a;
	  }
	};
	var Component = E$4;
	var Fragment$1 = p$2;
	var Profiler$1 = r$2;
	var PureComponent = G$2;
	var StrictMode$1 = q$2;
	var Suspense$1 = w$2;
	var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1 = W$2;
	var cloneElement = function (a, b, e) {
	  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	  var d = C$4({}, a.props),
	    c = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = K$4.current);
	    void 0 !== b.key && (c = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) J$1.call(b, f) && !L$2.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    d.children = g;
	  }
	  return {
	    $$typeof: l$1,
	    type: a.type,
	    key: c,
	    ref: k,
	    props: d,
	    _owner: h
	  };
	};
	var createContext = function (a) {
	  a = {
	    $$typeof: u,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null,
	    _defaultValue: null,
	    _globalName: null
	  };
	  a.Provider = {
	    $$typeof: t$1,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	var createElement = M$2;
	var createFactory = function (a) {
	  var b = M$2.bind(null, a);
	  b.type = a;
	  return b;
	};
	var createRef = function () {
	  return {
	    current: null
	  };
	};
	var forwardRef = function (a) {
	  return {
	    $$typeof: v$2,
	    render: a
	  };
	};
	var isValidElement = O$2;
	var lazy = function (a) {
	  return {
	    $$typeof: y$3,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: T$2
	  };
	};
	var memo = function (a, b) {
	  return {
	    $$typeof: x$3,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	var startTransition = function (a) {
	  var b = V$2.transition;
	  V$2.transition = {};
	  try {
	    a();
	  } finally {
	    V$2.transition = b;
	  }
	};
	var unstable_act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	var useCallback = function (a, b) {
	  return U$2.current.useCallback(a, b);
	};
	var useContext = function (a) {
	  return U$2.current.useContext(a);
	};
	var useDebugValue = function () {};
	var useDeferredValue = function (a) {
	  return U$2.current.useDeferredValue(a);
	};
	var useEffect = function (a, b) {
	  return U$2.current.useEffect(a, b);
	};
	var useId = function () {
	  return U$2.current.useId();
	};
	var useImperativeHandle = function (a, b, e) {
	  return U$2.current.useImperativeHandle(a, b, e);
	};
	var useInsertionEffect$1 = function (a, b) {
	  return U$2.current.useInsertionEffect(a, b);
	};
	var useLayoutEffect = function (a, b) {
	  return U$2.current.useLayoutEffect(a, b);
	};
	var useMemo = function (a, b) {
	  return U$2.current.useMemo(a, b);
	};
	var useReducer = function (a, b, e) {
	  return U$2.current.useReducer(a, b, e);
	};
	var useRef = function (a) {
	  return U$2.current.useRef(a);
	};
	var useState = function (a) {
	  return U$2.current.useState(a);
	};
	var useSyncExternalStore = function (a, b, e) {
	  return U$2.current.useSyncExternalStore(a, b, e);
	};
	var useTransition = function () {
	  return U$2.current.useTransition();
	};
	var version$1 = "18.2.0";
	var react_production_min = {
	  Children: Children,
	  Component: Component,
	  Fragment: Fragment$1,
	  Profiler: Profiler$1,
	  PureComponent: PureComponent,
	  StrictMode: StrictMode$1,
	  Suspense: Suspense$1,
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1,
	  cloneElement: cloneElement,
	  createContext: createContext,
	  createElement: createElement,
	  createFactory: createFactory,
	  createRef: createRef,
	  forwardRef: forwardRef,
	  isValidElement: isValidElement,
	  lazy: lazy,
	  memo: memo,
	  startTransition: startTransition,
	  unstable_act: unstable_act,
	  useCallback: useCallback,
	  useContext: useContext,
	  useDebugValue: useDebugValue,
	  useDeferredValue: useDeferredValue,
	  useEffect: useEffect,
	  useId: useId,
	  useImperativeHandle: useImperativeHandle,
	  useInsertionEffect: useInsertionEffect$1,
	  useLayoutEffect: useLayoutEffect,
	  useMemo: useMemo,
	  useReducer: useReducer,
	  useRef: useRef,
	  useState: useState,
	  useSyncExternalStore: useSyncExternalStore,
	  useTransition: useTransition,
	  version: version$1
	};

	var react_development = createCommonjsModule(function (module, exports) {
	});
	react_development.Children;
	react_development.Component;
	react_development.Fragment;
	react_development.Profiler;
	react_development.PureComponent;
	react_development.StrictMode;
	react_development.Suspense;
	react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	react_development.cloneElement;
	react_development.createContext;
	react_development.createElement;
	react_development.createFactory;
	react_development.createRef;
	react_development.forwardRef;
	react_development.isValidElement;
	react_development.lazy;
	react_development.memo;
	react_development.startTransition;
	react_development.unstable_act;
	react_development.useCallback;
	react_development.useContext;
	react_development.useDebugValue;
	react_development.useDeferredValue;
	react_development.useEffect;
	react_development.useId;
	react_development.useImperativeHandle;
	react_development.useInsertionEffect;
	react_development.useLayoutEffect;
	react_development.useMemo;
	react_development.useReducer;
	react_development.useRef;
	react_development.useState;
	react_development.useSyncExternalStore;
	react_development.useTransition;
	react_development.version;

	var react = createCommonjsModule(function (module) {

	  {
	    module.exports = react_production_min;
	  }
	});
	var react_1 = react.Children;
	var react_2 = react.Component;
	var react_3 = react.Fragment;
	var react_4 = react.Profiler;
	var react_5 = react.PureComponent;
	var react_6 = react.StrictMode;
	var react_7 = react.Suspense;
	var react_8 = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	var react_9 = react.cloneElement;
	var react_10 = react.createContext;
	var react_11 = react.createElement;
	var react_12 = react.createFactory;
	var react_13 = react.createRef;
	var react_14 = react.forwardRef;
	var react_15 = react.isValidElement;
	var react_16 = react.lazy;
	var react_17 = react.memo;
	var react_18 = react.startTransition;
	var react_19 = react.unstable_act;
	var react_20 = react.useCallback;
	var react_21 = react.useContext;
	var react_22 = react.useDebugValue;
	var react_23 = react.useDeferredValue;
	var react_24 = react.useEffect;
	var react_25 = react.useId;
	var react_26 = react.useImperativeHandle;
	var react_27 = react.useInsertionEffect;
	var react_28 = react.useLayoutEffect;
	var react_29 = react.useMemo;
	var react_30 = react.useReducer;
	var react_31 = react.useRef;
	var react_32 = react.useState;
	var react_33 = react.useSyncExternalStore;
	var react_34 = react.useTransition;
	var react_35 = react.version;

	var React = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': react,
		__moduleExports: react,
		Children: react_1,
		Component: react_2,
		Fragment: react_3,
		Profiler: react_4,
		PureComponent: react_5,
		StrictMode: react_6,
		Suspense: react_7,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: react_8,
		cloneElement: react_9,
		createContext: react_10,
		createElement: react_11,
		createFactory: react_12,
		createRef: react_13,
		forwardRef: react_14,
		isValidElement: react_15,
		lazy: react_16,
		memo: react_17,
		startTransition: react_18,
		unstable_act: react_19,
		useCallback: react_20,
		useContext: react_21,
		useDebugValue: react_22,
		useDeferredValue: react_23,
		useEffect: react_24,
		useId: react_25,
		useImperativeHandle: react_26,
		useInsertionEffect: react_27,
		useLayoutEffect: react_28,
		useMemo: react_29,
		useReducer: react_30,
		useRef: react_31,
		useState: react_32,
		useSyncExternalStore: react_33,
		useTransition: react_34,
		version: react_35
	});

	var scheduler_production_min = createCommonjsModule(function (module, exports) {

	  function f(a, b) {
	    var c = a.length;
	    a.push(b);
	    a: for (; 0 < c;) {
	      var d = c - 1 >>> 1,
	        e = a[d];
	      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	    }
	  }
	  function h(a) {
	    return 0 === a.length ? null : a[0];
	  }
	  function k(a) {
	    if (0 === a.length) return null;
	    var b = a[0],
	      c = a.pop();
	    if (c !== b) {
	      a[0] = c;
	      a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
	        var m = 2 * (d + 1) - 1,
	          C = a[m],
	          n = m + 1,
	          x = a[n];
	        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
	      }
	    }
	    return b;
	  }
	  function g(a, b) {
	    var c = a.sortIndex - b.sortIndex;
	    return 0 !== c ? c : a.id - b.id;
	  }
	  if ("object" === typeof performance && "function" === typeof performance.now) {
	    var l = performance;
	    exports.unstable_now = function () {
	      return l.now();
	    };
	  } else {
	    var p = Date,
	      q = p.now();
	    exports.unstable_now = function () {
	      return p.now() - q;
	    };
	  }
	  var r = [],
	    t = [],
	    u = 1,
	    v = null,
	    y = 3,
	    z = !1,
	    A = !1,
	    B = !1,
	    D = "function" === typeof setTimeout ? setTimeout : null,
	    E = "function" === typeof clearTimeout ? clearTimeout : null,
	    F = "undefined" !== typeof setImmediate ? setImmediate : null;
	  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	  function G(a) {
	    for (var b = h(t); null !== b;) {
	      if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
	      b = h(t);
	    }
	  }
	  function H(a) {
	    B = !1;
	    G(a);
	    if (!A) if (null !== h(r)) A = !0, I(J);else {
	      var b = h(t);
	      null !== b && K(H, b.startTime - a);
	    }
	  }
	  function J(a, b) {
	    A = !1;
	    B && (B = !1, E(L), L = -1);
	    z = !0;
	    var c = y;
	    try {
	      G(b);
	      for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
	        var d = v.callback;
	        if ("function" === typeof d) {
	          v.callback = null;
	          y = v.priorityLevel;
	          var e = d(v.expirationTime <= b);
	          b = exports.unstable_now();
	          "function" === typeof e ? v.callback = e : v === h(r) && k(r);
	          G(b);
	        } else k(r);
	        v = h(r);
	      }
	      if (null !== v) var w = !0;else {
	        var m = h(t);
	        null !== m && K(H, m.startTime - b);
	        w = !1;
	      }
	      return w;
	    } finally {
	      v = null, y = c, z = !1;
	    }
	  }
	  var N = !1,
	    O = null,
	    L = -1,
	    P = 5,
	    Q = -1;
	  function M() {
	    return exports.unstable_now() - Q < P ? !1 : !0;
	  }
	  function R() {
	    if (null !== O) {
	      var a = exports.unstable_now();
	      Q = a;
	      var b = !0;
	      try {
	        b = O(!0, a);
	      } finally {
	        b ? S() : (N = !1, O = null);
	      }
	    } else N = !1;
	  }
	  var S;
	  if ("function" === typeof F) S = function () {
	    F(R);
	  };else if ("undefined" !== typeof MessageChannel) {
	    var T = new MessageChannel(),
	      U = T.port2;
	    T.port1.onmessage = R;
	    S = function () {
	      U.postMessage(null);
	    };
	  } else S = function () {
	    D(R, 0);
	  };
	  function I(a) {
	    O = a;
	    N || (N = !0, S());
	  }
	  function K(a, b) {
	    L = D(function () {
	      a(exports.unstable_now());
	    }, b);
	  }
	  exports.unstable_IdlePriority = 5;
	  exports.unstable_ImmediatePriority = 1;
	  exports.unstable_LowPriority = 4;
	  exports.unstable_NormalPriority = 3;
	  exports.unstable_Profiling = null;
	  exports.unstable_UserBlockingPriority = 2;
	  exports.unstable_cancelCallback = function (a) {
	    a.callback = null;
	  };
	  exports.unstable_continueExecution = function () {
	    A || z || (A = !0, I(J));
	  };
	  exports.unstable_forceFrameRate = function (a) {
	    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
	  };
	  exports.unstable_getCurrentPriorityLevel = function () {
	    return y;
	  };
	  exports.unstable_getFirstCallbackNode = function () {
	    return h(r);
	  };
	  exports.unstable_next = function (a) {
	    switch (y) {
	      case 1:
	      case 2:
	      case 3:
	        var b = 3;
	        break;
	      default:
	        b = y;
	    }
	    var c = y;
	    y = b;
	    try {
	      return a();
	    } finally {
	      y = c;
	    }
	  };
	  exports.unstable_pauseExecution = function () {};
	  exports.unstable_requestPaint = function () {};
	  exports.unstable_runWithPriority = function (a, b) {
	    switch (a) {
	      case 1:
	      case 2:
	      case 3:
	      case 4:
	      case 5:
	        break;
	      default:
	        a = 3;
	    }
	    var c = y;
	    y = a;
	    try {
	      return b();
	    } finally {
	      y = c;
	    }
	  };
	  exports.unstable_scheduleCallback = function (a, b, c) {
	    var d = exports.unstable_now();
	    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
	    switch (a) {
	      case 1:
	        var e = -1;
	        break;
	      case 2:
	        e = 250;
	        break;
	      case 5:
	        e = 1073741823;
	        break;
	      case 4:
	        e = 1E4;
	        break;
	      default:
	        e = 5E3;
	    }
	    e = c + e;
	    a = {
	      id: u++,
	      callback: b,
	      priorityLevel: a,
	      startTime: c,
	      expirationTime: e,
	      sortIndex: -1
	    };
	    c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
	    return a;
	  };
	  exports.unstable_shouldYield = M;
	  exports.unstable_wrapCallback = function (a) {
	    var b = y;
	    return function () {
	      var c = y;
	      y = b;
	      try {
	        return a.apply(this, arguments);
	      } finally {
	        y = c;
	      }
	    };
	  };
	});
	scheduler_production_min.unstable_now;
	scheduler_production_min.unstable_IdlePriority;
	scheduler_production_min.unstable_ImmediatePriority;
	scheduler_production_min.unstable_LowPriority;
	scheduler_production_min.unstable_NormalPriority;
	scheduler_production_min.unstable_Profiling;
	scheduler_production_min.unstable_UserBlockingPriority;
	scheduler_production_min.unstable_cancelCallback;
	scheduler_production_min.unstable_continueExecution;
	scheduler_production_min.unstable_forceFrameRate;
	scheduler_production_min.unstable_getCurrentPriorityLevel;
	scheduler_production_min.unstable_getFirstCallbackNode;
	scheduler_production_min.unstable_next;
	scheduler_production_min.unstable_pauseExecution;
	scheduler_production_min.unstable_requestPaint;
	scheduler_production_min.unstable_runWithPriority;
	scheduler_production_min.unstable_scheduleCallback;
	scheduler_production_min.unstable_shouldYield;
	scheduler_production_min.unstable_wrapCallback;

	var scheduler_development = createCommonjsModule(function (module, exports) {
	});
	scheduler_development.unstable_now;
	scheduler_development.unstable_IdlePriority;
	scheduler_development.unstable_ImmediatePriority;
	scheduler_development.unstable_LowPriority;
	scheduler_development.unstable_NormalPriority;
	scheduler_development.unstable_Profiling;
	scheduler_development.unstable_UserBlockingPriority;
	scheduler_development.unstable_cancelCallback;
	scheduler_development.unstable_continueExecution;
	scheduler_development.unstable_forceFrameRate;
	scheduler_development.unstable_getCurrentPriorityLevel;
	scheduler_development.unstable_getFirstCallbackNode;
	scheduler_development.unstable_next;
	scheduler_development.unstable_pauseExecution;
	scheduler_development.unstable_requestPaint;
	scheduler_development.unstable_runWithPriority;
	scheduler_development.unstable_scheduleCallback;
	scheduler_development.unstable_shouldYield;
	scheduler_development.unstable_wrapCallback;

	var scheduler = createCommonjsModule(function (module) {

	  {
	    module.exports = scheduler_production_min;
	  }
	});

	function p$1(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = new Set(),
	  ea = {};
	function fa(a, b) {
	  ha(a, b);
	  ha(a + "Capture", b);
	}
	function ha(a, b) {
	  ea[a] = b;
	  for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	  ja = Object.prototype.hasOwnProperty,
	  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	  la = {},
	  ma = {};
	function oa(a) {
	  if (ja.call(ma, a)) return !0;
	  if (ja.call(la, a)) return !1;
	  if (ka.test(a)) return ma[a] = !0;
	  la[a] = !0;
	  return !1;
	}
	function pa(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;
	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;
	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;
	    default:
	      return !1;
	  }
	}
	function qa(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;
	    case 4:
	      return !1 === b;
	    case 5:
	      return isNaN(b);
	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}
	function v$1(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}
	var z$2 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  z$2[a] = new v$1(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  z$2[b] = new v$1(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  z$2[a] = new v$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  z$2[a] = new v$1(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  z$2[a] = new v$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  z$2[a] = new v$1(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  z$2[a] = new v$1(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  z$2[a] = new v$1(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  z$2[a] = new v$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$1(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  z$2[a] = new v$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z$2.xlinkHref = new v$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  z$2[a] = new v$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
	  var e = z$2.hasOwnProperty(b) ? z$2[b] : null;
	  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  va = Symbol.for("react.element"),
	  wa = Symbol.for("react.portal"),
	  ya = Symbol.for("react.fragment"),
	  za = Symbol.for("react.strict_mode"),
	  Aa = Symbol.for("react.profiler"),
	  Ba = Symbol.for("react.provider"),
	  Ca = Symbol.for("react.context"),
	  Da = Symbol.for("react.forward_ref"),
	  Ea = Symbol.for("react.suspense"),
	  Fa = Symbol.for("react.suspense_list"),
	  Ga = Symbol.for("react.memo"),
	  Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ja && a[Ja] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var A$4 = Object.assign,
	  La;
	function Ma(a) {
	  if (void 0 === La) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    La = b && b[1] || "";
	  }
	  return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
	  if (!a || Na) return "";
	  Na = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (l) {
	          var d = l;
	        }
	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (l) {
	          d = l;
	        }
	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (l) {
	        d = l;
	      }
	      a();
	    }
	  } catch (l) {
	    if (l && d && "string" === typeof l.stack) {
	      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) {
	            var k = "\n" + e[g].replace(" at new ", " at ");
	            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
	            return k;
	          } while (1 <= g && 0 <= h);
	        }
	        break;
	      }
	    }
	  } finally {
	    Na = !1, Error.prepareStackTrace = c;
	  }
	  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
	  switch (a.tag) {
	    case 5:
	      return Ma(a.type);
	    case 16:
	      return Ma("Lazy");
	    case 13:
	      return Ma("Suspense");
	    case 19:
	      return Ma("SuspenseList");
	    case 0:
	    case 2:
	    case 15:
	      return a = Oa(a.type, !1), a;
	    case 11:
	      return a = Oa(a.type.render, !1), a;
	    case 1:
	      return a = Oa(a.type, !0), a;
	    default:
	      return "";
	  }
	}
	function Qa(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;
	  switch (a) {
	    case ya:
	      return "Fragment";
	    case wa:
	      return "Portal";
	    case Aa:
	      return "Profiler";
	    case za:
	      return "StrictMode";
	    case Ea:
	      return "Suspense";
	    case Fa:
	      return "SuspenseList";
	  }
	  if ("object" === typeof a) switch (a.$$typeof) {
	    case Ca:
	      return (a.displayName || "Context") + ".Consumer";
	    case Ba:
	      return (a._context.displayName || "Context") + ".Provider";
	    case Da:
	      var b = a.render;
	      a = a.displayName;
	      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	      return a;
	    case Ga:
	      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
	    case Ha:
	      b = a._payload;
	      a = a._init;
	      try {
	        return Qa(a(b));
	      } catch (c) {}
	  }
	  return null;
	}
	function Ra(a) {
	  var b = a.type;
	  switch (a.tag) {
	    case 24:
	      return "Cache";
	    case 9:
	      return (b.displayName || "Context") + ".Consumer";
	    case 10:
	      return (b._context.displayName || "Context") + ".Provider";
	    case 18:
	      return "DehydratedFragment";
	    case 11:
	      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	    case 7:
	      return "Fragment";
	    case 5:
	      return b;
	    case 4:
	      return "Portal";
	    case 3:
	      return "Root";
	    case 6:
	      return "Text";
	    case 16:
	      return Qa(b);
	    case 8:
	      return b === za ? "StrictMode" : "Mode";
	    case 22:
	      return "Offscreen";
	    case 12:
	      return "Profiler";
	    case 21:
	      return "Scope";
	    case 13:
	      return "Suspense";
	    case 19:
	      return "SuspenseList";
	    case 25:
	      return "TracingMarker";
	    case 1:
	    case 0:
	    case 17:
	    case 2:
	    case 14:
	    case 15:
	      if ("function" === typeof b) return b.displayName || b.name || null;
	      if ("string" === typeof b) return b;
	  }
	  return null;
	}
	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return a;
	    case "object":
	      return a;
	    default:
	      return "";
	  }
	}
	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	    d = "" + a[b];
	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	      f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}
	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;
	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}
	function Ya(a, b) {
	  var c = b.checked;
	  return A$4({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}
	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	    d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}
	function ab(a, b) {
	  b = b.checked;
	  null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
	  ab(a, b);
	  var c = Sa(b.value),
	    d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }
	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}
	function cb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
	  a = a.options;
	  if (b) {
	    b = {};
	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;
	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }
	      null !== b || a[e].disabled || (b = a[e]);
	    }
	    null !== b && (b.selected = !0);
	  }
	}
	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(p$1(91));
	  return A$4({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}
	function hb(a, b) {
	  var c = b.value;
	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;
	    if (null != c) {
	      if (null != b) throw Error(p$1(92));
	      if (eb(c)) {
	        if (1 < c.length) throw Error(p$1(93));
	        c = c[0];
	      }
	      b = c;
	    }
	    null == b && (b = "");
	    c = b;
	  }
	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}
	function ib(a, b) {
	  var c = Sa(b.value),
	    d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";
	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";
	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}
	function lb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb,
	  nb = function (a) {
	    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return a(b, c, d, e);
	      });
	    } : a;
	  }(function (a, b) {
	    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
	      mb = mb || document.createElement("div");
	      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
	      for (; b.firstChild;) a.appendChild(b.firstChild);
	    }
	  });
	function ob(a, b) {
	  if (b) {
	    var c = a.firstChild;
	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }
	  a.textContent = b;
	}
	var pb = {
	    animationIterationCount: !0,
	    aspectRatio: !0,
	    borderImageOutset: !0,
	    borderImageSlice: !0,
	    borderImageWidth: !0,
	    boxFlex: !0,
	    boxFlexGroup: !0,
	    boxOrdinalGroup: !0,
	    columnCount: !0,
	    columns: !0,
	    flex: !0,
	    flexGrow: !0,
	    flexPositive: !0,
	    flexShrink: !0,
	    flexNegative: !0,
	    flexOrder: !0,
	    gridArea: !0,
	    gridRow: !0,
	    gridRowEnd: !0,
	    gridRowSpan: !0,
	    gridRowStart: !0,
	    gridColumn: !0,
	    gridColumnEnd: !0,
	    gridColumnSpan: !0,
	    gridColumnStart: !0,
	    fontWeight: !0,
	    lineClamp: !0,
	    lineHeight: !0,
	    opacity: !0,
	    order: !0,
	    orphans: !0,
	    tabSize: !0,
	    widows: !0,
	    zIndex: !0,
	    zoom: !0,
	    fillOpacity: !0,
	    floodOpacity: !0,
	    stopOpacity: !0,
	    strokeDasharray: !0,
	    strokeDashoffset: !0,
	    strokeMiterlimit: !0,
	    strokeOpacity: !0,
	    strokeWidth: !0
	  },
	  qb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(pb).forEach(function (a) {
	  qb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    pb[b] = pb[a];
	  });
	});
	function rb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
	  a = a.style;
	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	      e = rb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}
	var tb = A$4({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});
	function ub(a, b) {
	  if (b) {
	    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(p$1(60));
	      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$1(61));
	    }
	    if (null != b.style && "object" !== typeof b.style) throw Error(p$1(62));
	  }
	}
	function vb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;
	    default:
	      return !0;
	  }
	}
	var wb = null;
	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null,
	  zb = null,
	  Ab = null;
	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(p$1(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}
	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
	  if (zb) {
	    var a = zb,
	      b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}
	function Gb(a, b) {
	  return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
	  if (Ib) return a(b, c);
	  Ib = !0;
	  try {
	    return Gb(a, b, c);
	  } finally {
	    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
	  }
	}
	function Kb(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];
	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;
	    default:
	      a = !1;
	  }
	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(p$1(231, b, typeof c));
	  return c;
	}
	var Lb = !1;
	if (ia) try {
	  var Mb = {};
	  Object.defineProperty(Mb, "passive", {
	    get: function () {
	      Lb = !0;
	    }
	  });
	  window.addEventListener("test", Mb, Mb);
	  window.removeEventListener("test", Mb, Mb);
	} catch (a) {
	  Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);
	  try {
	    b.apply(c, l);
	  } catch (m) {
	    this.onError(m);
	  }
	}
	var Ob = !1,
	  Pb = null,
	  Qb = !1,
	  Rb = null,
	  Sb = {
	    onError: function (a) {
	      Ob = !0;
	      Pb = a;
	    }
	  };
	function Tb(a, b, c, d, e, f, g, h, k) {
	  Ob = !1;
	  Pb = null;
	  Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
	  Tb.apply(this, arguments);
	  if (Ob) {
	    if (Ob) {
	      var l = Pb;
	      Ob = !1;
	      Pb = null;
	    } else throw Error(p$1(198));
	    Qb || (Qb = !0, Rb = l);
	  }
	}
	function Vb(a) {
	  var b = a,
	    c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;
	    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}
	function Wb(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }
	  return null;
	}
	function Xb(a) {
	  if (Vb(a) !== a) throw Error(p$1(188));
	}
	function Yb(a) {
	  var b = a.alternate;
	  if (!b) {
	    b = Vb(a);
	    if (null === b) throw Error(p$1(188));
	    return b !== a ? null : a;
	  }
	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;
	    if (null === f) {
	      d = e.return;
	      if (null !== d) {
	        c = d;
	        continue;
	      }
	      break;
	    }
	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return Xb(e), a;
	        if (f === d) return Xb(e), b;
	        f = f.sibling;
	      }
	      throw Error(p$1(188));
	    }
	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }
	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }
	        h = h.sibling;
	      }
	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }
	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }
	          h = h.sibling;
	        }
	        if (!g) throw Error(p$1(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(p$1(190));
	  }
	  if (3 !== c.tag) throw Error(p$1(188));
	  return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
	  a = Yb(a);
	  return null !== a ? $b(a) : null;
	}
	function $b(a) {
	  if (5 === a.tag || 6 === a.tag) return a;
	  for (a = a.child; null !== a;) {
	    var b = $b(a);
	    if (null !== b) return b;
	    a = a.sibling;
	  }
	  return null;
	}
	var ac = scheduler.unstable_scheduleCallback,
	  bc = scheduler.unstable_cancelCallback,
	  cc = scheduler.unstable_shouldYield,
	  dc = scheduler.unstable_requestPaint,
	  B$3 = scheduler.unstable_now,
	  ec = scheduler.unstable_getCurrentPriorityLevel,
	  fc = scheduler.unstable_ImmediatePriority,
	  gc = scheduler.unstable_UserBlockingPriority,
	  hc = scheduler.unstable_NormalPriority,
	  ic = scheduler.unstable_LowPriority,
	  jc = scheduler.unstable_IdlePriority,
	  kc = null,
	  lc = null;
	function mc(a) {
	  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
	    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
	  } catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc,
	  pc = Math.log,
	  qc = Math.LN2;
	function nc(a) {
	  a >>>= 0;
	  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64,
	  sc = 4194304;
	function tc(a) {
	  switch (a & -a) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return a & 4194240;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return a & 130023424;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 1073741824;
	    default:
	      return a;
	  }
	}
	function uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return 0;
	  var d = 0,
	    e = a.suspendedLanes,
	    f = a.pingedLanes,
	    g = c & 268435455;
	  if (0 !== g) {
	    var h = g & ~e;
	    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
	  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
	  if (0 === d) return 0;
	  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
	  0 !== (d & 4) && (d |= c & 16);
	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}
	function vc(a, b) {
	  switch (a) {
	    case 1:
	    case 2:
	    case 4:
	      return b + 250;
	    case 8:
	    case 16:
	    case 32:
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return b + 5E3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return -1;
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function wc(a, b) {
	  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
	    var g = 31 - oc(f),
	      h = 1 << g,
	      k = e[g];
	    if (-1 === k) {
	      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
	    } else k <= b && (a.expiredLanes |= h);
	    f &= ~h;
	  }
	}
	function xc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
	  var a = rc;
	  rc <<= 1;
	  0 === (rc & 4194240) && (rc = 64);
	  return a;
	}
	function zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);
	  return b;
	}
	function Ac(a, b, c) {
	  a.pendingLanes |= b;
	  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
	  a = a.eventTimes;
	  b = 31 - oc(b);
	  a[b] = c;
	}
	function Bc(a, b) {
	  var c = a.pendingLanes & ~b;
	  a.pendingLanes = b;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= b;
	  a.mutableReadLanes &= b;
	  a.entangledLanes &= b;
	  b = a.entanglements;
	  var d = a.eventTimes;
	  for (a = a.expirationTimes; 0 < c;) {
	    var e = 31 - oc(c),
	      f = 1 << e;
	    b[e] = 0;
	    d[e] = -1;
	    a[e] = -1;
	    c &= ~f;
	  }
	}
	function Cc(a, b) {
	  var c = a.entangledLanes |= b;
	  for (a = a.entanglements; c;) {
	    var d = 31 - oc(c),
	      e = 1 << d;
	    e & b | a[d] & b && (a[d] |= b);
	    c &= ~e;
	  }
	}
	var C$3 = 0;
	function Dc(a) {
	  a &= -a;
	  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec,
	  Fc,
	  Gc,
	  Hc,
	  Ic,
	  Jc = !1,
	  Kc = [],
	  Lc = null,
	  Mc = null,
	  Nc = null,
	  Oc = new Map(),
	  Pc = new Map(),
	  Qc = [],
	  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      Lc = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      Mc = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      Nc = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      Oc.delete(b.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      Pc.delete(b.pointerId);
	  }
	}
	function Tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = {
	    blockedOn: b,
	    domEventName: c,
	    eventSystemFlags: d,
	    nativeEvent: f,
	    targetContainers: [e]
	  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}
	function Uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return Lc = Tc(Lc, a, b, c, d, e), !0;
	    case "dragenter":
	      return Mc = Tc(Mc, a, b, c, d, e), !0;
	    case "mouseover":
	      return Nc = Tc(Nc, a, b, c, d, e), !0;
	    case "pointerover":
	      var f = e.pointerId;
	      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
	      return !0;
	    case "gotpointercapture":
	      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
	  }
	  return !1;
	}
	function Vc(a) {
	  var b = Wc(a.target);
	  if (null !== b) {
	    var c = Vb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = Wb(c), null !== b) {
	        a.blockedOn = b;
	        Ic(a.priority, function () {
	          Gc(c);
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }
	  a.blockedOn = null;
	}
	function Xc(a) {
	  if (null !== a.blockedOn) return !1;
	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null === c) {
	      c = a.nativeEvent;
	      var d = new c.constructor(c.type, c);
	      wb = d;
	      c.target.dispatchEvent(d);
	      wb = null;
	    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }
	  return !0;
	}
	function Zc(a, b, c) {
	  Xc(a) && c.delete(b);
	}
	function $c() {
	  Jc = !1;
	  null !== Lc && Xc(Lc) && (Lc = null);
	  null !== Mc && Xc(Mc) && (Mc = null);
	  null !== Nc && Xc(Nc) && (Nc = null);
	  Oc.forEach(Zc);
	  Pc.forEach(Zc);
	}
	function ad(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, $c)));
	}
	function bd(a) {
	  function b(b) {
	    return ad(b, a);
	  }
	  if (0 < Kc.length) {
	    ad(Kc[0], a);
	    for (var c = 1; c < Kc.length; c++) {
	      var d = Kc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }
	  null !== Lc && ad(Lc, a);
	  null !== Mc && ad(Mc, a);
	  null !== Nc && ad(Nc, a);
	  Oc.forEach(b);
	  Pc.forEach(b);
	  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
	  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig,
	  dd = !0;
	function ed(a, b, c, d) {
	  var e = C$3,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C$3 = 1, fd(a, b, c, d);
	  } finally {
	    C$3 = e, cd.transition = f;
	  }
	}
	function gd(a, b, c, d) {
	  var e = C$3,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C$3 = 4, fd(a, b, c, d);
	  } finally {
	    C$3 = e, cd.transition = f;
	  }
	}
	function fd(a, b, c, d) {
	  if (dd) {
	    var e = Yc(a, b, c, d);
	    if (null === e) hd(a, b, d, id$3, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
	      for (; null !== e;) {
	        var f = Cb(e);
	        null !== f && Ec(f);
	        f = Yc(a, b, c, d);
	        null === f && hd(a, b, d, id$3, c);
	        if (f === e) break;
	        e = f;
	      }
	      null !== e && d.stopPropagation();
	    } else hd(a, b, d, null, c);
	  }
	}
	var id$3 = null;
	function Yc(a, b, c, d) {
	  id$3 = null;
	  a = xb(d);
	  a = Wc(a);
	  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
	    a = Wb(b);
	    if (null !== a) return a;
	    a = null;
	  } else if (3 === c) {
	    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
	    a = null;
	  } else b !== a && (a = null);
	  id$3 = a;
	  return null;
	}
	function jd(a) {
	  switch (a) {
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 1;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "toggle":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 4;
	    case "message":
	      switch (ec()) {
	        case fc:
	          return 1;
	        case gc:
	          return 4;
	        case hc:
	        case ic:
	          return 16;
	        case jc:
	          return 536870912;
	        default:
	          return 16;
	      }
	    default:
	      return 16;
	  }
	}
	var kd = null,
	  ld = null,
	  md = null;
	function nd() {
	  if (md) return md;
	  var a,
	    b = ld,
	    c = b.length,
	    d,
	    e = "value" in kd ? kd.value : kd.textContent,
	    f = e.length;
	  for (a = 0; a < c && b[a] === e[a]; a++);
	  var g = c - a;
	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
	  return !0;
	}
	function qd() {
	  return !1;
	}
	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;
	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }
	  A$4(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}
	var sd = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (a) {
	      return a.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  td = rd(sd),
	  ud = A$4({}, sd, {
	    view: 0,
	    detail: 0
	  }),
	  vd = rd(ud),
	  wd,
	  xd,
	  yd,
	  Ad = A$4({}, ud, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: zd,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (a) {
	      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	    },
	    movementX: function (a) {
	      if ("movementX" in a) return a.movementX;
	      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	      return wd;
	    },
	    movementY: function (a) {
	      return "movementY" in a ? a.movementY : xd;
	    }
	  }),
	  Bd = rd(Ad),
	  Cd = A$4({}, Ad, {
	    dataTransfer: 0
	  }),
	  Dd = rd(Cd),
	  Ed = A$4({}, ud, {
	    relatedTarget: 0
	  }),
	  Fd = rd(Ed),
	  Gd = A$4({}, sd, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Hd = rd(Gd),
	  Id = A$4({}, sd, {
	    clipboardData: function (a) {
	      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	    }
	  }),
	  Jd = rd(Id),
	  Kd = A$4({}, sd, {
	    data: 0
	  }),
	  Ld = rd(Kd),
	  Md = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  Nd = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  Od = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
	  return Pd;
	}
	var Qd = A$4({}, ud, {
	    key: function (a) {
	      if (a.key) {
	        var b = Md[a.key] || a.key;
	        if ("Unidentified" !== b) return b;
	      }
	      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: zd,
	    charCode: function (a) {
	      return "keypress" === a.type ? od(a) : 0;
	    },
	    keyCode: function (a) {
	      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    },
	    which: function (a) {
	      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    }
	  }),
	  Rd = rd(Qd),
	  Sd = A$4({}, Ad, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  Td = rd(Sd),
	  Ud = A$4({}, ud, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: zd
	  }),
	  Vd = rd(Ud),
	  Wd = A$4({}, sd, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Xd = rd(Wd),
	  Yd = A$4({}, Ad, {
	    deltaX: function (a) {
	      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	    },
	    deltaY: function (a) {
	      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  Zd = rd(Yd),
	  $d = [9, 13, 27, 32],
	  ae$1 = ia && "CompositionEvent" in window,
	  be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce$1 = ia && "TextEvent" in window && !be,
	  de = ia && (!ae$1 || be && 8 < be && 11 >= be),
	  ee$1 = String.fromCharCode(32),
	  fe = !1;
	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);
	    case "keydown":
	      return 229 !== b.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function he(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie$1 = !1;
	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he(b);
	    case "keypress":
	      if (32 !== b.which) return null;
	      fe = !0;
	      return ee$1;
	    case "textInput":
	      return a = b.data, a === ee$1 && fe ? null : a;
	    default:
	      return null;
	  }
	}
	function ke(a, b) {
	  if (ie$1) return "compositionend" === a || !ae$1 && ge(a, b) ? (a = nd(), md = ld = kd = null, ie$1 = !1, a) : null;
	  switch (a) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }
	      return null;
	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;
	    default:
	      return null;
	  }
	}
	var le$1 = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};
	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le$1[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne$1(a, b, c, d) {
	  Eb(d);
	  b = oe$1(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}
	var pe$1 = null,
	  qe = null;
	function re$2(a) {
	  se$1(a, 0);
	}
	function te$1(a) {
	  var b = ue$1(a);
	  if (Wa(b)) return a;
	}
	function ve$1(a, b) {
	  if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
	  var xe;
	  if (ia) {
	    var ye = ("oninput" in document);
	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }
	    xe = ye;
	  } else xe = !1;
	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
	  pe$1 && (pe$1.detachEvent("onpropertychange", Be), qe = pe$1 = null);
	}
	function Be(a) {
	  if ("value" === a.propertyName && te$1(qe)) {
	    var b = [];
	    ne$1(b, qe, a, xb(a));
	    Jb(re$2, b);
	  }
	}
	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe$1 = b, qe = c, pe$1.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe);
	}
	function Ee(a, b) {
	  if ("click" === a) return te$1(b);
	}
	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te$1(b);
	}
	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	    d = Object.keys(b);
	  if (c.length !== d.length) return !1;
	  for (d = 0; d < c.length; d++) {
	    var e = c[d];
	    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
	  }
	  return !0;
	}
	function Je(a) {
	  for (; a && a.firstChild;) a = a.firstChild;
	  return a;
	}
	function Ke(a, b) {
	  var c = Je(a);
	  a = 0;
	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }
	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }
	        c = c.parentNode;
	      }
	      c = void 0;
	    }
	    c = Je(c);
	  }
	}
	function Le(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }
	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }
	  return b;
	}
	function Ne(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
	  var b = Me(),
	    c = a.focusedElem,
	    d = a.selectionRange;
	  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
	    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
	      a = a.getSelection();
	      var e = c.textContent.length,
	        f = Math.min(d.start, e);
	      d = void 0 === d.end ? f : Math.min(d.end, e);
	      !a.extend && f > d && (e = d, d = f, f = e);
	      e = Ke(c, f);
	      var g = Ke(c, d);
	      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
	    }
	    b = [];
	    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
	      element: a,
	      left: a.scrollLeft,
	      top: a.scrollTop
	    });
	    "function" === typeof c.focus && c.focus();
	    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
	  }
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
	  Qe = null,
	  Re = null,
	  Se = null,
	  Te = !1;
	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Ie(Se, d) || (Se = d, d = oe$1(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}
	function Ve(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}
	var We = {
	    animationend: Ve("Animation", "AnimationEnd"),
	    animationiteration: Ve("Animation", "AnimationIteration"),
	    animationstart: Ve("Animation", "AnimationStart"),
	    transitionend: Ve("Transition", "TransitionEnd")
	  },
	  Xe = {},
	  Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
	  if (Xe[a]) return Xe[a];
	  if (!We[a]) return a;
	  var b = We[a],
	    c;
	  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
	  return a;
	}
	var $e = Ze("animationend"),
	  af = Ze("animationiteration"),
	  bf = Ze("animationstart"),
	  cf = Ze("transitionend"),
	  df = new Map(),
	  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
	  df.set(a, b);
	  fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
	  var hf = ef[gf],
	    jf = hf.toLowerCase(),
	    kf = hf[0].toUpperCase() + hf.slice(1);
	  ff(jf, "on" + kf);
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Ub(d, b, void 0, a);
	  a.currentTarget = null;
	}
	function se$1(a, b) {
	  b = 0 !== (b & 4);
	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	      e = d.event;
	    d = d.listeners;
	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	          k = h.instance,
	          l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      }
	    }
	  }
	  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D$3(a, b) {
	  var c = b[of];
	  void 0 === c && (c = b[of] = new Set());
	  var d = a + "__bubble";
	  c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
	  var d = 0;
	  b && (d |= 4);
	  pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
	  if (!a[rf]) {
	    a[rf] = !0;
	    da.forEach(function (b) {
	      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
	    });
	    var b = 9 === a.nodeType ? a : a.ownerDocument;
	    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
	  }
	}
	function pf(a, b, c, d) {
	  switch (jd(b)) {
	    case 1:
	      var e = ed;
	      break;
	    case 4:
	      e = gd;
	      break;
	    default:
	      e = fd;
	  }
	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;
	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }
	      for (; null !== h;) {
	        g = Wc(h);
	        if (null === g) return;
	        k = g.tag;
	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }
	        h = h.parentNode;
	      }
	    }
	    d = d.return;
	  }
	  Jb(function () {
	    var d = f,
	      e = xb(c),
	      g = [];
	    a: {
	      var h = df.get(a);
	      if (void 0 !== h) {
	        var k = td,
	          n = a;
	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;
	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;
	          case "focusin":
	            n = "focus";
	            k = Fd;
	            break;
	          case "focusout":
	            n = "blur";
	            k = Fd;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;
	          case "click":
	            if (2 === c.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;
	          case $e:
	          case af:
	          case bf:
	            k = Hd;
	            break;
	          case cf:
	            k = Xd;
	            break;
	          case "scroll":
	            k = vd;
	            break;
	          case "wheel":
	            k = Zd;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }
	        var t = 0 !== (b & 4),
	          J = !t && "scroll" === a,
	          x = t ? null !== h ? h + "Capture" : null : h;
	        t = [];
	        for (var w = d, u; null !== w;) {
	          u = w;
	          var F = u.stateNode;
	          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
	          if (J) break;
	          w = w.return;
	        }
	        0 < t.length && (h = new k(h, n, null, c, e), g.push({
	          event: h,
	          listeners: t
	        }));
	      }
	    }
	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	          if (k) {
	            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
	          } else k = null, n = d;
	          if (k !== n) {
	            t = Bd;
	            F = "onMouseLeave";
	            x = "onMouseEnter";
	            w = "mouse";
	            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
	            J = null == k ? h : ue$1(k);
	            u = null == n ? h : ue$1(n);
	            h = new t(F, w + "leave", k, c, e);
	            h.target = J;
	            h.relatedTarget = u;
	            F = null;
	            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
	            J = F;
	            if (k && n) b: {
	              t = k;
	              x = n;
	              w = 0;
	              for (u = t; u; u = vf(u)) w++;
	              u = 0;
	              for (F = x; F; F = vf(F)) u++;
	              for (; 0 < w - u;) t = vf(t), w--;
	              for (; 0 < u - w;) x = vf(x), u--;
	              for (; w--;) {
	                if (t === x || null !== x && t === x.alternate) break b;
	                t = vf(t);
	                x = vf(x);
	              }
	              t = null;
	            } else t = null;
	            null !== k && wf(g, h, k, t, !1);
	            null !== n && null !== J && wf(g, J, n, t, !0);
	          }
	        }
	      }
	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var na = ve$1;else if (me(h)) {
	          if (we) na = Fe;else {
	            na = De;
	            var xa = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
	        if (na && (na = na(a, d))) {
	          ne$1(g, na, c, e);
	          break a;
	        }
	        xa && xa(a, h, d);
	        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
	      }
	      xa = d ? ue$1(d) : window;
	      switch (a) {
	        case "focusin":
	          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
	          break;
	        case "focusout":
	          Se = Re = Qe = null;
	          break;
	        case "mousedown":
	          Te = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;
	        case "selectionchange":
	          if (Pe) break;
	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }
	      var $a;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var ba = "onCompositionStart";
	            break b;
	          case "compositionend":
	            ba = "onCompositionEnd";
	            break b;
	          case "compositionupdate":
	            ba = "onCompositionUpdate";
	            break b;
	        }
	        ba = void 0;
	      } else ie$1 ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
	      ba && (de && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), xa = oe$1(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
	        event: ba,
	        listeners: xa
	      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
	      if ($a = ce$1 ? je(a, c) : ke(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = $a);
	    }
	    se$1(g, b);
	  });
	}
	function tf(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}
	function oe$1(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	      f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
	    a = a.return;
	  }
	  return d;
	}
	function vf(a) {
	  if (null === a) return null;
	  do a = a.return; while (a && 5 !== a.tag);
	  return a ? a : null;
	}
	function wf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	      k = h.alternate,
	      l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
	    c = c.return;
	  }
	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}
	var xf = /\r\n?/g,
	  yf = /\u0000|\uFFFD/g;
	function zf(a) {
	  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
	  b = zf(b);
	  if (zf(a) !== b && c) throw Error(p$1(425));
	}
	function Bf() {}
	var Cf = null,
	  Df = null;
	function Ef(a, b) {
	  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
	  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  Hf = "function" === typeof Promise ? Promise : void 0,
	  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
	    return Hf.resolve(null).then(a).catch(If);
	  } : Ff;
	function If(a) {
	  setTimeout(function () {
	    throw a;
	  });
	}
	function Kf(a, b) {
	  var c = b,
	    d = 0;
	  do {
	    var e = c.nextSibling;
	    a.removeChild(c);
	    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
	      if (0 === d) {
	        a.removeChild(e);
	        bd(b);
	        return;
	      }
	      d--;
	    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
	    c = e;
	  } while (c);
	  bd(b);
	}
	function Lf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	    if (8 === b) {
	      b = a.data;
	      if ("$" === b || "$!" === b || "$?" === b) break;
	      if ("/$" === b) return null;
	    }
	  }
	  return a;
	}
	function Mf(a) {
	  a = a.previousSibling;
	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;
	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }
	    a = a.previousSibling;
	  }
	  return null;
	}
	var Nf = Math.random().toString(36).slice(2),
	  Of = "__reactFiber$" + Nf,
	  Pf = "__reactProps$" + Nf,
	  uf = "__reactContainer$" + Nf,
	  of = "__reactEvents$" + Nf,
	  Qf = "__reactListeners$" + Nf,
	  Rf = "__reactHandles$" + Nf;
	function Wc(a) {
	  var b = a[Of];
	  if (b) return b;
	  for (var c = a.parentNode; c;) {
	    if (b = c[uf] || c[Of]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
	        if (c = a[Of]) return c;
	        a = Mf(a);
	      }
	      return b;
	    }
	    a = c;
	    c = a.parentNode;
	  }
	  return null;
	}
	function Cb(a) {
	  a = a[Of] || a[uf];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(p$1(33));
	}
	function Db(a) {
	  return a[Pf] || null;
	}
	var Sf = [],
	  Tf = -1;
	function Uf(a) {
	  return {
	    current: a
	  };
	}
	function E$3(a) {
	  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G$1(a, b) {
	  Tf++;
	  Sf[Tf] = a.current;
	  a.current = b;
	}
	var Vf = {},
	  H$1 = Uf(Vf),
	  Wf = Uf(!1),
	  Xf = Vf;
	function Yf(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Vf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	    f;
	  for (f in c) e[f] = b[f];
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}
	function Zf(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}
	function $f() {
	  E$3(Wf);
	  E$3(H$1);
	}
	function ag(a, b, c) {
	  if (H$1.current !== Vf) throw Error(p$1(168));
	  G$1(H$1, b);
	  G$1(Wf, c);
	}
	function bg(a, b, c) {
	  var d = a.stateNode;
	  b = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();
	  for (var e in d) if (!(e in b)) throw Error(p$1(108, Ra(a) || "Unknown", e));
	  return A$4({}, c, d);
	}
	function cg(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
	  Xf = H$1.current;
	  G$1(H$1, a);
	  G$1(Wf, Wf.current);
	  return !0;
	}
	function dg(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(p$1(169));
	  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E$3(Wf), E$3(H$1), G$1(H$1, a)) : E$3(Wf);
	  G$1(Wf, c);
	}
	var eg = null,
	  fg = !1,
	  gg = !1;
	function hg(a) {
	  null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
	  fg = !0;
	  hg(a);
	}
	function jg() {
	  if (!gg && null !== eg) {
	    gg = !0;
	    var a = 0,
	      b = C$3;
	    try {
	      var c = eg;
	      for (C$3 = 1; a < c.length; a++) {
	        var d = c[a];
	        do d = d(!0); while (null !== d);
	      }
	      eg = null;
	      fg = !1;
	    } catch (e) {
	      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
	    } finally {
	      C$3 = b, gg = !1;
	    }
	  }
	  return null;
	}
	var kg = [],
	  lg = 0,
	  mg = null,
	  ng = 0,
	  og = [],
	  pg = 0,
	  qg = null,
	  rg = 1,
	  sg = "";
	function tg(a, b) {
	  kg[lg++] = ng;
	  kg[lg++] = mg;
	  mg = a;
	  ng = b;
	}
	function ug(a, b, c) {
	  og[pg++] = rg;
	  og[pg++] = sg;
	  og[pg++] = qg;
	  qg = a;
	  var d = rg;
	  a = sg;
	  var e = 32 - oc(d) - 1;
	  d &= ~(1 << e);
	  c += 1;
	  var f = 32 - oc(b) + e;
	  if (30 < f) {
	    var g = e - e % 5;
	    f = (d & (1 << g) - 1).toString(32);
	    d >>= g;
	    e -= g;
	    rg = 1 << 32 - oc(b) + e | c << e | d;
	    sg = f + a;
	  } else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
	  null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
	  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
	  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null,
	  yg = null,
	  I$1 = !1,
	  zg = null;
	function Ag(a, b) {
	  var c = Bg(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  b = a.deletions;
	  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
	    case 13:
	      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
	        id: rg,
	        overflow: sg
	      } : null, a.memoizedState = {
	        dehydrated: b,
	        treeContext: c,
	        retryLane: 1073741824
	      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
	    default:
	      return !1;
	  }
	}
	function Dg(a) {
	  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
	  if (I$1) {
	    var b = yg;
	    if (b) {
	      var c = b;
	      if (!Cg(a, b)) {
	        if (Dg(a)) throw Error(p$1(418));
	        b = Lf(c.nextSibling);
	        var d = xg;
	        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I$1 = !1, xg = a);
	      }
	    } else {
	      if (Dg(a)) throw Error(p$1(418));
	      a.flags = a.flags & -4097 | 2;
	      I$1 = !1;
	      xg = a;
	    }
	  }
	}
	function Fg(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	  xg = a;
	}
	function Gg(a) {
	  if (a !== xg) return !1;
	  if (!I$1) return Fg(a), I$1 = !0, !1;
	  var b;
	  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
	  if (b && (b = yg)) {
	    if (Dg(a)) throw Hg(), Error(p$1(418));
	    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
	  }
	  Fg(a);
	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(p$1(317));
	    a: {
	      a = a.nextSibling;
	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;
	          if ("/$" === c) {
	            if (0 === b) {
	              yg = Lf(a.nextSibling);
	              break a;
	            }
	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }
	        a = a.nextSibling;
	      }
	      yg = null;
	    }
	  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
	  return !0;
	}
	function Hg() {
	  for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
	  yg = xg = null;
	  I$1 = !1;
	}
	function Jg(a) {
	  null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b) {
	  if (a && a.defaultProps) {
	    b = A$4({}, b);
	    a = a.defaultProps;
	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	    return b;
	  }
	  return b;
	}
	var Mg = Uf(null),
	  Ng = null,
	  Og = null,
	  Pg = null;
	function Qg() {
	  Pg = Og = Ng = null;
	}
	function Rg(a) {
	  var b = Mg.current;
	  E$3(Mg);
	  a._currentValue = b;
	}
	function Sg(a, b, c) {
	  for (; null !== a;) {
	    var d = a.alternate;
	    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
	    if (a === c) break;
	    a = a.return;
	  }
	}
	function Tg(a, b) {
	  Ng = a;
	  Pg = Og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
	}
	function Vg(a) {
	  var b = a._currentValue;
	  if (Pg !== a) if (a = {
	    context: a,
	    memoizedValue: b,
	    next: null
	  }, null === Og) {
	    if (null === Ng) throw Error(p$1(308));
	    Og = a;
	    Ng.dependencies = {
	      lanes: 0,
	      firstContext: a
	    };
	  } else Og = Og.next = a;
	  return b;
	}
	var Wg = null;
	function Xg(a) {
	  null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b, c, d) {
	  var e = b.interleaved;
	  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
	  b.interleaved = c;
	  return Zg(a, d);
	}
	function Zg(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;
	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	  return 3 === c.tag ? c.stateNode : null;
	}
	var $g = !1;
	function ah(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null,
	      interleaved: null,
	      lanes: 0
	    },
	    effects: null
	  };
	}
	function bh(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}
	function ch(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}
	function dh(a, b, c) {
	  var d = a.updateQueue;
	  if (null === d) return null;
	  d = d.shared;
	  if (0 !== (K$3 & 2)) {
	    var e = d.pending;
	    null === e ? b.next = b : (b.next = e.next, e.next = b);
	    d.pending = b;
	    return Zg(a, c);
	  }
	  e = d.interleaved;
	  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
	  d.interleaved = b;
	  return Zg(a, c);
	}
	function eh(a, b, c) {
	  b = b.updateQueue;
	  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	function fh(a, b) {
	  var c = a.updateQueue,
	    d = a.alternate;
	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	      f = null;
	    c = c.firstBaseUpdate;
	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);
	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;
	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }
	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}
	function gh(a, b, c, d) {
	  var e = a.updateQueue;
	  $g = !1;
	  var f = e.firstBaseUpdate,
	    g = e.lastBaseUpdate,
	    h = e.shared.pending;
	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	      l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var m = a.alternate;
	    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
	  }
	  if (null !== f) {
	    var q = e.baseState;
	    g = 0;
	    m = l = k = null;
	    h = f;
	    do {
	      var r = h.lane,
	        y = h.eventTime;
	      if ((d & r) === r) {
	        null !== m && (m = m.next = {
	          eventTime: y,
	          lane: 0,
	          tag: h.tag,
	          payload: h.payload,
	          callback: h.callback,
	          next: null
	        });
	        a: {
	          var n = a,
	            t = h;
	          r = b;
	          y = c;
	          switch (t.tag) {
	            case 1:
	              n = t.payload;
	              if ("function" === typeof n) {
	                q = n.call(y, q, r);
	                break a;
	              }
	              q = n;
	              break a;
	            case 3:
	              n.flags = n.flags & -65537 | 128;
	            case 0:
	              n = t.payload;
	              r = "function" === typeof n ? n.call(y, q, r) : n;
	              if (null === r || void 0 === r) break a;
	              q = A$4({}, q, r);
	              break a;
	            case 2:
	              $g = !0;
	          }
	        }
	        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
	      } else y = {
	        eventTime: y,
	        lane: r,
	        tag: h.tag,
	        payload: h.payload,
	        callback: h.callback,
	        next: null
	      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
	      h = h.next;
	      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
	    } while (1);
	    null === m && (k = q);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = m;
	    b = e.shared.interleaved;
	    if (null !== b) {
	      e = b;
	      do g |= e.lane, e = e.next; while (e !== b);
	    } else null === f && (e.shared.lanes = 0);
	    hh |= g;
	    a.lanes = g;
	    a.memoizedState = q;
	  }
	}
	function ih(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	      e = d.callback;
	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(p$1(191, e));
	      e.call(d);
	    }
	  }
	}
	var jh = new react.Component().refs;
	function kh(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : A$4({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var nh = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Vb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L$1(),
	      e = lh(a),
	      f = ch(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L$1(),
	      e = lh(a),
	      f = ch(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = L$1(),
	      d = lh(a),
	      e = ch(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    b = dh(a, e, d);
	    null !== b && (mh(b, a, d, c), eh(b, a, d));
	  }
	};
	function oh(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function ph(a, b, c) {
	  var d = !1,
	    e = Vf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = nh;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}
	function qh(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
	}
	function rh(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = jh;
	  ah(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H$1.current, e.context = Yf(a, f));
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b, c) {
	  a = c.ref;
	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;
	      if (c) {
	        if (1 !== c.tag) throw Error(p$1(309));
	        var d = c.stateNode;
	      }
	      if (!d) throw Error(p$1(147, a));
	      var e = d,
	        f = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
	      b = function (a) {
	        var b = e.refs;
	        b === jh && (b = e.refs = {});
	        null === a ? delete b[f] : b[f] = a;
	      };
	      b._stringRef = f;
	      return b;
	    }
	    if ("string" !== typeof a) throw Error(p$1(284));
	    if (!c._owner) throw Error(p$1(290, a));
	  }
	  return a;
	}
	function th(a, b) {
	  a = Object.prototype.toString.call(b);
	  throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function uh(a) {
	  var b = a._init;
	  return b(a._payload);
	}
	function vh(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.deletions;
	      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
	    }
	  }
	  function c(c, d) {
	    if (!a) return null;
	    for (; null !== d;) b(c, d), d = d.sibling;
	    return null;
	  }
	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	    return a;
	  }
	  function e(a, b) {
	    a = wh(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }
	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return b.flags |= 1048576, c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
	    b.flags |= 2;
	    return c;
	  }
	  function g(b) {
	    a && null === b.alternate && (b.flags |= 2);
	    return b;
	  }
	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function k(a, b, c, d) {
	    var f = c.type;
	    if (f === ya) return m(a, b, c.props.children, d, c.key);
	    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
	    d = yh(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = sh(a, b, c);
	    d.return = a;
	    return d;
	  }
	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }
	  function m(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function q(a, b, c) {
	    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case va:
	          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
	        case wa:
	          return b = zh(b, a.mode, c), b.return = a, b;
	        case Ha:
	          var d = b._init;
	          return q(a, d(b._payload), c);
	      }
	      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
	      th(a, b);
	    }
	    return null;
	  }
	  function r(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case va:
	          return c.key === e ? k(a, b, c, d) : null;
	        case wa:
	          return c.key === e ? l(a, b, c, d) : null;
	        case Ha:
	          return e = c._init, r(a, b, e(c._payload), d);
	      }
	      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
	      th(a, c);
	    }
	    return null;
	  }
	  function y(a, b, c, d, e) {
	    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case va:
	          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
	        case wa:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	        case Ha:
	          var f = d._init;
	          return y(a, b, c, f(d._payload), e);
	      }
	      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
	      th(b, d);
	    }
	    return null;
	  }
	  function n(e, g, h, k) {
	    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
	      u.index > w ? (x = u, u = null) : x = u.sibling;
	      var n = r(e, u, h[w], k);
	      if (null === n) {
	        null === u && (u = x);
	        break;
	      }
	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, w);
	      null === m ? l = n : m.sibling = n;
	      m = n;
	      u = x;
	    }
	    if (w === h.length) return c(e, u), I$1 && tg(e, w), l;
	    if (null === u) {
	      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
	      I$1 && tg(e, w);
	      return l;
	    }
	    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    I$1 && tg(e, w);
	    return l;
	  }
	  function t(e, g, h, k) {
	    var l = Ka(h);
	    if ("function" !== typeof l) throw Error(p$1(150));
	    h = l.call(h);
	    if (null == h) throw Error(p$1(151));
	    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
	      m.index > w ? (x = m, m = null) : x = m.sibling;
	      var t = r(e, m, n.value, k);
	      if (null === t) {
	        null === m && (m = x);
	        break;
	      }
	      a && m && null === t.alternate && b(e, m);
	      g = f(t, g, w);
	      null === u ? l = t : u.sibling = t;
	      u = t;
	      m = x;
	    }
	    if (n.done) return c(e, m), I$1 && tg(e, w), l;
	    if (null === m) {
	      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	      I$1 && tg(e, w);
	      return l;
	    }
	    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	    a && m.forEach(function (a) {
	      return b(e, a);
	    });
	    I$1 && tg(e, w);
	    return l;
	  }
	  function J(a, d, f, h) {
	    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
	    if ("object" === typeof f && null !== f) {
	      switch (f.$$typeof) {
	        case va:
	          a: {
	            for (var k = f.key, l = d; null !== l;) {
	              if (l.key === k) {
	                k = f.type;
	                if (k === ya) {
	                  if (7 === l.tag) {
	                    c(a, l.sibling);
	                    d = e(l, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
	                  c(a, l.sibling);
	                  d = e(l, f.props);
	                  d.ref = sh(a, l, f);
	                  d.return = a;
	                  a = d;
	                  break a;
	                }
	                c(a, l);
	                break;
	              } else b(a, l);
	              l = l.sibling;
	            }
	            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
	          }
	          return g(a);
	        case wa:
	          a: {
	            for (l = f.key; null !== d;) {
	              if (d.key === l) {
	                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                  c(a, d.sibling);
	                  d = e(d, f.children || []);
	                  d.return = a;
	                  a = d;
	                  break a;
	                } else {
	                  c(a, d);
	                  break;
	                }
	              } else b(a, d);
	              d = d.sibling;
	            }
	            d = zh(f, a.mode, h);
	            d.return = a;
	            a = d;
	          }
	          return g(a);
	        case Ha:
	          return l = f._init, J(a, d, l(f._payload), h);
	      }
	      if (eb(f)) return n(a, d, f, h);
	      if (Ka(f)) return t(a, d, f, h);
	      th(a, f);
	    }
	    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
	  }
	  return J;
	}
	var Bh = vh(!0),
	  Ch = vh(!1),
	  Dh = {},
	  Eh = Uf(Dh),
	  Fh = Uf(Dh),
	  Gh = Uf(Dh);
	function Hh(a) {
	  if (a === Dh) throw Error(p$1(174));
	  return a;
	}
	function Ih(a, b) {
	  G$1(Gh, b);
	  G$1(Fh, a);
	  G$1(Eh, Dh);
	  a = b.nodeType;
	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
	      break;
	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
	  }
	  E$3(Eh);
	  G$1(Eh, b);
	}
	function Jh() {
	  E$3(Eh);
	  E$3(Fh);
	  E$3(Gh);
	}
	function Kh(a) {
	  Hh(Gh.current);
	  var b = Hh(Eh.current);
	  var c = lb(b, a.type);
	  b !== c && (G$1(Fh, a), G$1(Eh, c));
	}
	function Lh(a) {
	  Fh.current === a && (E$3(Eh), E$3(Fh));
	}
	var M$1 = Uf(0);
	function Mh(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 128)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }
	    if (b === a) break;
	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }
	    b.sibling.return = b.return;
	    b = b.sibling;
	  }
	  return null;
	}
	var Nh = [];
	function Oh() {
	  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
	  Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher,
	  Qh = ua.ReactCurrentBatchConfig,
	  Rh = 0,
	  N$1 = null,
	  O$1 = null,
	  P$1 = null,
	  Sh = !1,
	  Th = !1,
	  Uh = 0,
	  Vh = 0;
	function Q$1() {
	  throw Error(p$1(321));
	}
	function Wh(a, b) {
	  if (null === b) return !1;
	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
	  return !0;
	}
	function Xh(a, b, c, d, e, f) {
	  Rh = f;
	  N$1 = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
	  a = c(d, e);
	  if (Th) {
	    f = 0;
	    do {
	      Th = !1;
	      Uh = 0;
	      if (25 <= f) throw Error(p$1(301));
	      f += 1;
	      P$1 = O$1 = null;
	      b.updateQueue = null;
	      Ph.current = $h;
	      a = c(d, e);
	    } while (Th);
	  }
	  Ph.current = ai;
	  b = null !== O$1 && null !== O$1.next;
	  Rh = 0;
	  P$1 = O$1 = N$1 = null;
	  Sh = !1;
	  if (b) throw Error(p$1(300));
	  return a;
	}
	function bi() {
	  var a = 0 !== Uh;
	  Uh = 0;
	  return a;
	}
	function ci() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
	  return P$1;
	}
	function di() {
	  if (null === O$1) {
	    var a = N$1.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = O$1.next;
	  var b = null === P$1 ? N$1.memoizedState : P$1.next;
	  if (null !== b) P$1 = b, O$1 = a;else {
	    if (null === a) throw Error(p$1(310));
	    O$1 = a;
	    a = {
	      memoizedState: O$1.memoizedState,
	      baseState: O$1.baseState,
	      baseQueue: O$1.baseQueue,
	      queue: O$1.queue,
	      next: null
	    };
	    null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
	  }
	  return P$1;
	}
	function ei(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}
	function fi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$1(311));
	  c.lastRenderedReducer = a;
	  var d = O$1,
	    e = d.baseQueue,
	    f = c.pending;
	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }
	    d.baseQueue = e = f;
	    c.pending = null;
	  }
	  if (null !== e) {
	    f = e.next;
	    d = d.baseState;
	    var h = g = null,
	      k = null,
	      l = f;
	    do {
	      var m = l.lane;
	      if ((Rh & m) === m) null !== k && (k = k.next = {
	        lane: 0,
	        action: l.action,
	        hasEagerState: l.hasEagerState,
	        eagerState: l.eagerState,
	        next: null
	      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
	        var q = {
	          lane: m,
	          action: l.action,
	          hasEagerState: l.hasEagerState,
	          eagerState: l.eagerState,
	          next: null
	        };
	        null === k ? (h = k = q, g = d) : k = k.next = q;
	        N$1.lanes |= m;
	        hh |= m;
	      }
	      l = l.next;
	    } while (null !== l && l !== f);
	    null === k ? g = d : k.next = h;
	    He(d, b.memoizedState) || (Ug = !0);
	    b.memoizedState = d;
	    b.baseState = g;
	    b.baseQueue = k;
	    c.lastRenderedState = d;
	  }
	  a = c.interleaved;
	  if (null !== a) {
	    e = a;
	    do f = e.lane, N$1.lanes |= f, hh |= f, e = e.next; while (e !== a);
	  } else null === e && (c.lanes = 0);
	  return [b.memoizedState, c.dispatch];
	}
	function gi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$1(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	    e = c.pending,
	    f = b.memoizedState;
	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;
	    do f = a(f, g.action), g = g.next; while (g !== e);
	    He(f, b.memoizedState) || (Ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }
	  return [f, d];
	}
	function hi() {}
	function ii(a, b) {
	  var c = N$1,
	    d = di(),
	    e = b(),
	    f = !He(d.memoizedState, e);
	  f && (d.memoizedState = e, Ug = !0);
	  d = d.queue;
	  ji(ki.bind(null, c, d, a), [a]);
	  if (d.getSnapshot !== b || f || null !== P$1 && P$1.memoizedState.tag & 1) {
	    c.flags |= 2048;
	    li(9, mi.bind(null, c, d, e, b), void 0, null);
	    if (null === R$1) throw Error(p$1(349));
	    0 !== (Rh & 30) || ni(c, b, e);
	  }
	  return e;
	}
	function ni(a, b, c) {
	  a.flags |= 16384;
	  a = {
	    getSnapshot: b,
	    value: c
	  };
	  b = N$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N$1.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function mi(a, b, c, d) {
	  b.value = c;
	  b.getSnapshot = d;
	  oi(b) && pi$2(a);
	}
	function ki(a, b, c) {
	  return c(function () {
	    oi(b) && pi$2(a);
	  });
	}
	function oi(a) {
	  var b = a.getSnapshot;
	  a = a.value;
	  try {
	    var c = b();
	    return !He(a, c);
	  } catch (d) {
	    return !0;
	  }
	}
	function pi$2(a) {
	  var b = Zg(a, 1);
	  null !== b && mh(b, a, 1, -1);
	}
	function qi(a) {
	  var b = ci();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = {
	    pending: null,
	    interleaved: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: ei,
	    lastRenderedState: a
	  };
	  b.queue = a;
	  a = a.dispatch = ri.bind(null, N$1, a);
	  return [b.memoizedState, a];
	}
	function li(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = N$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N$1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}
	function si() {
	  return di().memoizedState;
	}
	function ti(a, b, c, d) {
	  var e = ci();
	  N$1.flags |= a;
	  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function ui(a, b, c, d) {
	  var e = di();
	  d = void 0 === d ? null : d;
	  var f = void 0;
	  if (null !== O$1) {
	    var g = O$1.memoizedState;
	    f = g.destroy;
	    if (null !== d && Wh(d, g.deps)) {
	      e.memoizedState = li(b, c, f, d);
	      return;
	    }
	  }
	  N$1.flags |= a;
	  e.memoizedState = li(1 | b, c, f, d);
	}
	function vi(a, b) {
	  return ti(8390656, 8, a, b);
	}
	function ji(a, b) {
	  return ui(2048, 8, a, b);
	}
	function wi(a, b) {
	  return ui(4, 2, a, b);
	}
	function xi(a, b) {
	  return ui(4, 4, a, b);
	}
	function yi(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}
	function zi(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return ui(4, 4, yi.bind(null, b, a), c);
	}
	function Ai() {}
	function Bi(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}
	function Ci(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}
	function Di(a, b, c) {
	  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
	  He(c, b) || (c = yc(), N$1.lanes |= c, hh |= c, a.baseState = !0);
	  return b;
	}
	function Ei(a, b) {
	  var c = C$3;
	  C$3 = 0 !== c && 4 > c ? c : 4;
	  a(!0);
	  var d = Qh.transition;
	  Qh.transition = {};
	  try {
	    a(!1), b();
	  } finally {
	    C$3 = c, Qh.transition = d;
	  }
	}
	function Fi() {
	  return di().memoizedState;
	}
	function Gi(a, b, c) {
	  var d = lh(a);
	  c = {
	    lane: d,
	    action: c,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
	    var e = L$1();
	    mh(c, a, d, e);
	    Ji(c, b, d);
	  }
	}
	function ri(a, b, c) {
	  var d = lh(a),
	    e = {
	      lane: d,
	      action: c,
	      hasEagerState: !1,
	      eagerState: null,
	      next: null
	    };
	  if (Hi(a)) Ii(b, e);else {
	    var f = a.alternate;
	    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
	      var g = b.lastRenderedState,
	        h = f(g, c);
	      e.hasEagerState = !0;
	      e.eagerState = h;
	      if (He(h, g)) {
	        var k = b.interleaved;
	        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
	        b.interleaved = e;
	        return;
	      }
	    } catch (l) {} finally {}
	    c = Yg(a, b, e, d);
	    null !== c && (e = L$1(), mh(c, a, d, e), Ji(c, b, d));
	  }
	}
	function Hi(a) {
	  var b = a.alternate;
	  return a === N$1 || null !== b && b === N$1;
	}
	function Ii(a, b) {
	  Th = Sh = !0;
	  var c = a.pending;
	  null === c ? b.next = b : (b.next = c.next, c.next = b);
	  a.pending = b;
	}
	function Ji(a, b, c) {
	  if (0 !== (c & 4194240)) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	var ai = {
	    readContext: Vg,
	    useCallback: Q$1,
	    useContext: Q$1,
	    useEffect: Q$1,
	    useImperativeHandle: Q$1,
	    useInsertionEffect: Q$1,
	    useLayoutEffect: Q$1,
	    useMemo: Q$1,
	    useReducer: Q$1,
	    useRef: Q$1,
	    useState: Q$1,
	    useDebugValue: Q$1,
	    useDeferredValue: Q$1,
	    useTransition: Q$1,
	    useMutableSource: Q$1,
	    useSyncExternalStore: Q$1,
	    useId: Q$1,
	    unstable_isNewReconciler: !1
	  },
	  Yh = {
	    readContext: Vg,
	    useCallback: function (a, b) {
	      ci().memoizedState = [a, void 0 === b ? null : b];
	      return a;
	    },
	    useContext: Vg,
	    useEffect: vi,
	    useImperativeHandle: function (a, b, c) {
	      c = null !== c && void 0 !== c ? c.concat([a]) : null;
	      return ti(4194308, 4, yi.bind(null, b, a), c);
	    },
	    useLayoutEffect: function (a, b) {
	      return ti(4194308, 4, a, b);
	    },
	    useInsertionEffect: function (a, b) {
	      return ti(4, 2, a, b);
	    },
	    useMemo: function (a, b) {
	      var c = ci();
	      b = void 0 === b ? null : b;
	      a = a();
	      c.memoizedState = [a, b];
	      return a;
	    },
	    useReducer: function (a, b, c) {
	      var d = ci();
	      b = void 0 !== c ? c(b) : b;
	      d.memoizedState = d.baseState = b;
	      a = {
	        pending: null,
	        interleaved: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: a,
	        lastRenderedState: b
	      };
	      d.queue = a;
	      a = a.dispatch = Gi.bind(null, N$1, a);
	      return [d.memoizedState, a];
	    },
	    useRef: function (a) {
	      var b = ci();
	      a = {
	        current: a
	      };
	      return b.memoizedState = a;
	    },
	    useState: qi,
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      return ci().memoizedState = a;
	    },
	    useTransition: function () {
	      var a = qi(!1),
	        b = a[0];
	      a = Ei.bind(null, a[1]);
	      ci().memoizedState = a;
	      return [b, a];
	    },
	    useMutableSource: function () {},
	    useSyncExternalStore: function (a, b, c) {
	      var d = N$1,
	        e = ci();
	      if (I$1) {
	        if (void 0 === c) throw Error(p$1(407));
	        c = c();
	      } else {
	        c = b();
	        if (null === R$1) throw Error(p$1(349));
	        0 !== (Rh & 30) || ni(d, b, c);
	      }
	      e.memoizedState = c;
	      var f = {
	        value: c,
	        getSnapshot: b
	      };
	      e.queue = f;
	      vi(ki.bind(null, d, f, a), [a]);
	      d.flags |= 2048;
	      li(9, mi.bind(null, d, f, c, b), void 0, null);
	      return c;
	    },
	    useId: function () {
	      var a = ci(),
	        b = R$1.identifierPrefix;
	      if (I$1) {
	        var c = sg;
	        var d = rg;
	        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
	        b = ":" + b + "R" + c;
	        c = Uh++;
	        0 < c && (b += "H" + c.toString(32));
	        b += ":";
	      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
	      return a.memoizedState = b;
	    },
	    unstable_isNewReconciler: !1
	  },
	  Zh = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: fi,
	    useRef: si,
	    useState: function () {
	      return fi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return Di(b, O$1.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = fi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  },
	  $h = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: gi,
	    useRef: si,
	    useState: function () {
	      return gi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return null === O$1 ? b.memoizedState = a : Di(b, O$1.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = gi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  };
	function Ki(a, b) {
	  try {
	    var c = "",
	      d = b;
	    do c += Pa(d), d = d.return; while (d);
	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }
	  return {
	    value: a,
	    source: b,
	    stack: e,
	    digest: null
	  };
	}
	function Li(a, b, c) {
	  return {
	    value: a,
	    source: null,
	    stack: null != c ? c : null,
	    digest: null != b ? b : null
	  };
	}
	function Mi(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;
	  c.callback = function () {
	    Pi || (Pi = !0, Qi = d);
	    Mi(a, b);
	  };
	  return c;
	}
	function Ri(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;
	  if ("function" === typeof d) {
	    var e = b.value;
	    c.payload = function () {
	      return d(e);
	    };
	    c.callback = function () {
	      Mi(a, b);
	    };
	  }
	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    Mi(a, b);
	    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}
	function Ti(a, b, c) {
	  var d = a.pingCache;
	  if (null === d) {
	    d = a.pingCache = new Ni();
	    var e = new Set();
	    d.set(b, e);
	  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
	  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
	}
	function Vi(a) {
	  do {
	    var b;
	    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
	    if (b) return a;
	    a = a.return;
	  } while (null !== a);
	  return null;
	}
	function Wi(a, b, c, d, e) {
	  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
	  a.flags |= 65536;
	  a.lanes = e;
	  return a;
	}
	var Xi = ua.ReactCurrentOwner,
	  Ug = !1;
	function Yi(a, b, c, d) {
	  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
	}
	function Zi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  Tg(b, e);
	  d = Xh(a, b, c, d, f, e);
	  c = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I$1 && c && vg(b);
	  b.flags |= 1;
	  Yi(a, b, d, e);
	  return b.child;
	}
	function aj(a, b, c, d, e) {
	  if (null === a) {
	    var f = c.type;
	    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
	    a = yh(c.type, null, d, b, b.mode, e);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  f = a.child;
	  if (0 === (a.lanes & e)) {
	    var g = f.memoizedProps;
	    c = c.compare;
	    c = null !== c ? c : Ie;
	    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
	  }
	  b.flags |= 1;
	  a = wh(f, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}
	function cj(a, b, c, d, e) {
	  if (null !== a) {
	    var f = a.memoizedProps;
	    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
	  }
	  return dj(a, b, c, d, e);
	}
	function ej(a, b, c) {
	  var d = b.pendingProps,
	    e = d.children,
	    f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode) {
	    if (0 === (b.mode & 1)) b.memoizedState = {
	      baseLanes: 0,
	      cachePool: null,
	      transitions: null
	    }, G$1(fj, gj), gj |= c;else {
	      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	        baseLanes: a,
	        cachePool: null,
	        transitions: null
	      }, b.updateQueue = null, G$1(fj, gj), gj |= a, null;
	      b.memoizedState = {
	        baseLanes: 0,
	        cachePool: null,
	        transitions: null
	      };
	      d = null !== f ? f.baseLanes : c;
	      G$1(fj, gj);
	      gj |= d;
	    }
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G$1(fj, gj), gj |= d;
	  Yi(a, b, e, c);
	  return b.child;
	}
	function hj(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function dj(a, b, c, d, e) {
	  var f = Zf(c) ? Xf : H$1.current;
	  f = Yf(b, f);
	  Tg(b, e);
	  c = Xh(a, b, c, d, f, e);
	  d = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I$1 && d && vg(b);
	  b.flags |= 1;
	  Yi(a, b, c, e);
	  return b.child;
	}
	function ij(a, b, c, d, e) {
	  if (Zf(c)) {
	    var f = !0;
	    cg(b);
	  } else f = !1;
	  Tg(b, e);
	  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	      h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	      l = c.contextType;
	    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H$1.current, l = Yf(b, l));
	    var m = c.getDerivedStateFromProps,
	      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
	    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
	    $g = !1;
	    var r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
	  } else {
	    g = b.stateNode;
	    bh(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : Lg(b.type, h);
	    g.props = l;
	    q = b.pendingProps;
	    r = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H$1.current, k = Yf(b, k));
	    var y = c.getDerivedStateFromProps;
	    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
	    $g = !1;
	    r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    var n = b.memoizedState;
	    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
	  }
	  return kj(a, b, c, d, f, e);
	}
	function kj(a, b, c, d, e, f) {
	  hj(a, b);
	  var g = 0 !== (b.flags & 128);
	  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
	  d = b.stateNode;
	  Xi.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && dg(b, c, !0);
	  return b.child;
	}
	function lj(a) {
	  var b = a.stateNode;
	  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
	  Ih(a, b.containerInfo);
	}
	function mj(a, b, c, d, e) {
	  Ig();
	  Jg(e);
	  b.flags |= 256;
	  Yi(a, b, c, d);
	  return b.child;
	}
	var nj = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0
	};
	function oj(a) {
	  return {
	    baseLanes: a,
	    cachePool: null,
	    transitions: null
	  };
	}
	function pj(a, b, c) {
	  var d = b.pendingProps,
	    e = M$1.current,
	    f = !1,
	    g = 0 !== (b.flags & 128),
	    h;
	  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
	  G$1(M$1, e & 1);
	  if (null === a) {
	    Eg(b);
	    a = b.memoizedState;
	    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
	    g = d.children;
	    a = d.fallback;
	    return f ? (d = b.mode, f = b.child, g = {
	      mode: "hidden",
	      children: g
	    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
	  }
	  e = a.memoizedState;
	  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
	  if (f) {
	    f = d.fallback;
	    g = b.mode;
	    e = a.child;
	    h = e.sibling;
	    var k = {
	      mode: "hidden",
	      children: d.children
	    };
	    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
	    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
	    f.return = b;
	    d.return = b;
	    d.sibling = f;
	    b.child = d;
	    d = f;
	    f = b.child;
	    g = a.child.memoizedState;
	    g = null === g ? oj(c) : {
	      baseLanes: g.baseLanes | c,
	      cachePool: null,
	      transitions: g.transitions
	    };
	    f.memoizedState = g;
	    f.childLanes = a.childLanes & ~c;
	    b.memoizedState = nj;
	    return d;
	  }
	  f = a.child;
	  a = f.sibling;
	  d = wh(f, {
	    mode: "visible",
	    children: d.children
	  });
	  0 === (b.mode & 1) && (d.lanes = c);
	  d.return = b;
	  d.sibling = null;
	  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
	  b.child = d;
	  b.memoizedState = null;
	  return d;
	}
	function rj(a, b) {
	  b = qj({
	    mode: "visible",
	    children: b
	  }, a.mode, 0, null);
	  b.return = a;
	  return a.child = b;
	}
	function tj(a, b, c, d) {
	  null !== d && Jg(d);
	  Bh(b, a.child, null, c);
	  a = rj(b, b.pendingProps.children);
	  a.flags |= 2;
	  b.memoizedState = null;
	  return a;
	}
	function sj(a, b, c, d, e, f, g) {
	  if (c) {
	    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p$1(422))), tj(a, b, g, d);
	    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
	    f = d.fallback;
	    e = b.mode;
	    d = qj({
	      mode: "visible",
	      children: d.children
	    }, e, 0, null);
	    f = Ah(f, e, g, null);
	    f.flags |= 2;
	    d.return = b;
	    f.return = b;
	    d.sibling = f;
	    b.child = d;
	    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
	    b.child.memoizedState = oj(g);
	    b.memoizedState = nj;
	    return f;
	  }
	  if (0 === (b.mode & 1)) return tj(a, b, g, null);
	  if ("$!" === e.data) {
	    d = e.nextSibling && e.nextSibling.dataset;
	    if (d) var h = d.dgst;
	    d = h;
	    f = Error(p$1(419));
	    d = Li(f, d, void 0);
	    return tj(a, b, g, d);
	  }
	  h = 0 !== (g & a.childLanes);
	  if (Ug || h) {
	    d = R$1;
	    if (null !== d) {
	      switch (g & -g) {
	        case 4:
	          e = 2;
	          break;
	        case 16:
	          e = 8;
	          break;
	        case 64:
	        case 128:
	        case 256:
	        case 512:
	        case 1024:
	        case 2048:
	        case 4096:
	        case 8192:
	        case 16384:
	        case 32768:
	        case 65536:
	        case 131072:
	        case 262144:
	        case 524288:
	        case 1048576:
	        case 2097152:
	        case 4194304:
	        case 8388608:
	        case 16777216:
	        case 33554432:
	        case 67108864:
	          e = 32;
	          break;
	        case 536870912:
	          e = 268435456;
	          break;
	        default:
	          e = 0;
	      }
	      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
	      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
	    }
	    uj();
	    d = Li(Error(p$1(421)));
	    return tj(a, b, g, d);
	  }
	  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
	  a = f.treeContext;
	  yg = Lf(e.nextSibling);
	  xg = b;
	  I$1 = !0;
	  zg = null;
	  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
	  b = rj(b, d.children);
	  b.flags |= 4096;
	  return b;
	}
	function wj(a, b, c) {
	  a.lanes |= b;
	  var d = a.alternate;
	  null !== d && (d.lanes |= b);
	  Sg(a.return, b, c);
	}
	function xj(a, b, c, d, e) {
	  var f = a.memoizedState;
	  null === f ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e
	  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function yj(a, b, c) {
	  var d = b.pendingProps,
	    e = d.revealOrder,
	    f = d.tail;
	  Yi(a, b, d.children, c);
	  d = M$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
	    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;
	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }
	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  G$1(M$1, d);
	  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;
	      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      xj(b, !1, e, c, f);
	      break;
	    case "backwards":
	      c = null;
	      e = b.child;
	      for (b.child = null; null !== e;) {
	        a = e.alternate;
	        if (null !== a && null === Mh(a)) {
	          b.child = e;
	          break;
	        }
	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }
	      xj(b, !0, c, null, f);
	      break;
	    case "together":
	      xj(b, !1, null, null, void 0);
	      break;
	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}
	function jj(a, b) {
	  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function $i(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  hh |= b.lanes;
	  if (0 === (c & b.childLanes)) return null;
	  if (null !== a && b.child !== a.child) throw Error(p$1(153));
	  if (null !== b.child) {
	    a = b.child;
	    c = wh(a, a.pendingProps);
	    b.child = c;
	    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
	    c.sibling = null;
	  }
	  return b.child;
	}
	function zj(a, b, c) {
	  switch (b.tag) {
	    case 3:
	      lj(b);
	      Ig();
	      break;
	    case 5:
	      Kh(b);
	      break;
	    case 1:
	      Zf(b.type) && cg(b);
	      break;
	    case 4:
	      Ih(b, b.stateNode.containerInfo);
	      break;
	    case 10:
	      var d = b.type._context,
	        e = b.memoizedProps.value;
	      G$1(Mg, d._currentValue);
	      d._currentValue = e;
	      break;
	    case 13:
	      d = b.memoizedState;
	      if (null !== d) {
	        if (null !== d.dehydrated) return G$1(M$1, M$1.current & 1), b.flags |= 128, null;
	        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
	        G$1(M$1, M$1.current & 1);
	        a = $i(a, b, c);
	        return null !== a ? a.sibling : null;
	      }
	      G$1(M$1, M$1.current & 1);
	      break;
	    case 19:
	      d = 0 !== (c & b.childLanes);
	      if (0 !== (a.flags & 128)) {
	        if (d) return yj(a, b, c);
	        b.flags |= 128;
	      }
	      e = b.memoizedState;
	      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	      G$1(M$1, M$1.current);
	      if (d) break;else return null;
	    case 22:
	    case 23:
	      return b.lanes = 0, ej(a, b, c);
	  }
	  return $i(a, b, c);
	}
	var Aj, Bj, Cj, Dj;
	Aj = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};
	Bj = function () {};
	Cj = function (a, b, c, d) {
	  var e = a.memoizedProps;
	  if (e !== d) {
	    a = b.stateNode;
	    Hh(Eh.current);
	    var f = null;
	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;
	      case "select":
	        e = A$4({}, e, {
	          value: void 0
	        });
	        d = A$4({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;
	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;
	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
	    }
	    ub(c, d);
	    var g;
	    c = null;
	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];
	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D$3("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
	    }
	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};
	Dj = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};
	function Ej(a, b) {
	  if (!I$1) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;
	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	      null === c ? a.tail = null : c.sibling = null;
	      break;
	    case "collapsed":
	      c = a.tail;
	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}
	function S$1(a) {
	  var b = null !== a.alternate && a.alternate.child === a.child,
	    c = 0,
	    d = 0;
	  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
	  a.subtreeFlags |= d;
	  a.childLanes = c;
	  return b;
	}
	function Fj(a, b, c) {
	  var d = b.pendingProps;
	  wg(b);
	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return S$1(b), null;
	    case 1:
	      return Zf(b.type) && $f(), S$1(b), null;
	    case 3:
	      d = b.stateNode;
	      Jh();
	      E$3(Wf);
	      E$3(H$1);
	      Oh();
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
	      Bj(a, b);
	      S$1(b);
	      return null;
	    case 5:
	      Lh(b);
	      var e = Hh(Gh.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(p$1(166));
	          S$1(b);
	          return null;
	        }
	        a = Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[Of] = b;
	          d[Pf] = f;
	          a = 0 !== (b.mode & 1);
	          switch (c) {
	            case "dialog":
	              D$3("cancel", d);
	              D$3("close", d);
	              break;
	            case "iframe":
	            case "object":
	            case "embed":
	              D$3("load", d);
	              break;
	            case "video":
	            case "audio":
	              for (e = 0; e < lf.length; e++) D$3(lf[e], d);
	              break;
	            case "source":
	              D$3("error", d);
	              break;
	            case "img":
	            case "image":
	            case "link":
	              D$3("error", d);
	              D$3("load", d);
	              break;
	            case "details":
	              D$3("toggle", d);
	              break;
	            case "input":
	              Za(d, f);
	              D$3("invalid", d);
	              break;
	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              D$3("invalid", d);
	              break;
	            case "textarea":
	              hb(d, f), D$3("invalid", d);
	          }
	          ub(c, f);
	          e = null;
	          for (var g in f) if (f.hasOwnProperty(g)) {
	            var h = f[g];
	            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D$3("scroll", d);
	          }
	          switch (c) {
	            case "input":
	              Va(d);
	              db(d, f, !0);
	              break;
	            case "textarea":
	              Va(d);
	              jb(d);
	              break;
	            case "select":
	            case "option":
	              break;
	            default:
	              "function" === typeof f.onClick && (d.onclick = Bf);
	          }
	          d = e;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
	          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[Of] = b;
	          a[Pf] = d;
	          Aj(a, b, !1, !1);
	          b.stateNode = a;
	          a: {
	            g = vb(c, d);
	            switch (c) {
	              case "dialog":
	                D$3("cancel", a);
	                D$3("close", a);
	                e = d;
	                break;
	              case "iframe":
	              case "object":
	              case "embed":
	                D$3("load", a);
	                e = d;
	                break;
	              case "video":
	              case "audio":
	                for (e = 0; e < lf.length; e++) D$3(lf[e], a);
	                e = d;
	                break;
	              case "source":
	                D$3("error", a);
	                e = d;
	                break;
	              case "img":
	              case "image":
	              case "link":
	                D$3("error", a);
	                D$3("load", a);
	                e = d;
	                break;
	              case "details":
	                D$3("toggle", a);
	                e = d;
	                break;
	              case "input":
	                Za(a, d);
	                e = Ya(a, d);
	                D$3("invalid", a);
	                break;
	              case "option":
	                e = d;
	                break;
	              case "select":
	                a._wrapperState = {
	                  wasMultiple: !!d.multiple
	                };
	                e = A$4({}, d, {
	                  value: void 0
	                });
	                D$3("invalid", a);
	                break;
	              case "textarea":
	                hb(a, d);
	                e = gb(a, d);
	                D$3("invalid", a);
	                break;
	              default:
	                e = d;
	            }
	            ub(c, e);
	            h = e;
	            for (f in h) if (h.hasOwnProperty(f)) {
	              var k = h[f];
	              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D$3("scroll", a) : null != k && ta(a, f, k, g));
	            }
	            switch (c) {
	              case "input":
	                Va(a);
	                db(a, d, !1);
	                break;
	              case "textarea":
	                Va(a);
	                jb(a);
	                break;
	              case "option":
	                null != d.value && a.setAttribute("value", "" + Sa(d.value));
	                break;
	              case "select":
	                a.multiple = !!d.multiple;
	                f = d.value;
	                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	                break;
	              default:
	                "function" === typeof e.onClick && (a.onclick = Bf);
	            }
	            switch (c) {
	              case "button":
	              case "input":
	              case "select":
	              case "textarea":
	                d = !!d.autoFocus;
	                break a;
	              case "img":
	                d = !0;
	                break a;
	              default:
	                d = !1;
	            }
	          }
	          d && (b.flags |= 4);
	        }
	        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
	      }
	      S$1(b);
	      return null;
	    case 6:
	      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(p$1(166));
	        c = Hh(Gh.current);
	        Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.memoizedProps;
	          d[Of] = b;
	          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
	            case 3:
	              Af(d.nodeValue, c, 0 !== (a.mode & 1));
	              break;
	            case 5:
	              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
	          }
	          f && (b.flags |= 4);
	        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
	      }
	      S$1(b);
	      return null;
	    case 13:
	      E$3(M$1);
	      d = b.memoizedState;
	      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
	        if (I$1 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
	          if (null === a) {
	            if (!f) throw Error(p$1(318));
	            f = b.memoizedState;
	            f = null !== f ? f.dehydrated : null;
	            if (!f) throw Error(p$1(317));
	            f[Of] = b;
	          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
	          S$1(b);
	          f = !1;
	        } else null !== zg && (Gj(zg), zg = null), f = !0;
	        if (!f) return b.flags & 65536 ? b : null;
	      }
	      if (0 !== (b.flags & 128)) return b.lanes = c, b;
	      d = null !== d;
	      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M$1.current & 1) ? 0 === T$1 && (T$1 = 3) : uj()));
	      null !== b.updateQueue && (b.flags |= 4);
	      S$1(b);
	      return null;
	    case 4:
	      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S$1(b), null;
	    case 10:
	      return Rg(b.type._context), S$1(b), null;
	    case 17:
	      return Zf(b.type) && $f(), S$1(b), null;
	    case 19:
	      E$3(M$1);
	      f = b.memoizedState;
	      if (null === f) return S$1(b), null;
	      d = 0 !== (b.flags & 128);
	      g = f.rendering;
	      if (null === g) {
	        if (d) Ej(f, !1);else {
	          if (0 !== T$1 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
	            g = Mh(a);
	            if (null !== g) {
	              b.flags |= 128;
	              Ej(f, !1);
	              d = g.updateQueue;
	              null !== d && (b.updateQueue = d, b.flags |= 4);
	              b.subtreeFlags = 0;
	              d = c;
	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;
	              G$1(M$1, M$1.current & 1 | 2);
	              return b.child;
	            }
	            a = a.sibling;
	          }
	          null !== f.tail && B$3() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        }
	      } else {
	        if (!d) if (a = Mh(g), null !== a) {
	          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I$1) return S$1(b), null;
	        } else 2 * B$3() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
	      }
	      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B$3(), b.sibling = null, c = M$1.current, G$1(M$1, d ? c & 1 | 2 : c & 1), b;
	      S$1(b);
	      return null;
	    case 22:
	    case 23:
	      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S$1(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S$1(b), null;
	    case 24:
	      return null;
	    case 25:
	      return null;
	  }
	  throw Error(p$1(156, b.tag));
	}
	function Jj(a, b) {
	  wg(b);
	  switch (b.tag) {
	    case 1:
	      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 3:
	      return Jh(), E$3(Wf), E$3(H$1), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
	    case 5:
	      return Lh(b), null;
	    case 13:
	      E$3(M$1);
	      a = b.memoizedState;
	      if (null !== a && null !== a.dehydrated) {
	        if (null === b.alternate) throw Error(p$1(340));
	        Ig();
	      }
	      a = b.flags;
	      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 19:
	      return E$3(M$1), null;
	    case 4:
	      return Jh(), null;
	    case 10:
	      return Rg(b.type._context), null;
	    case 22:
	    case 23:
	      return Ij(), null;
	    case 24:
	      return null;
	    default:
	      return null;
	  }
	}
	var Kj = !1,
	  U$1 = !1,
	  Lj = "function" === typeof WeakSet ? WeakSet : Set,
	  V$1 = null;
	function Mj(a, b) {
	  var c = a.ref;
	  if (null !== c) if ("function" === typeof c) try {
	    c(null);
	  } catch (d) {
	    W$1(a, b, d);
	  } else c.current = null;
	}
	function Nj(a, b, c) {
	  try {
	    c();
	  } catch (d) {
	    W$1(a, b, d);
	  }
	}
	var Oj = !1;
	function Pj(a, b) {
	  Cf = dd;
	  a = Me();
	  if (Ne(a)) {
	    if ("selectionStart" in a) var c = {
	      start: a.selectionStart,
	      end: a.selectionEnd
	    };else a: {
	      c = (c = a.ownerDocument) && c.defaultView || window;
	      var d = c.getSelection && c.getSelection();
	      if (d && 0 !== d.rangeCount) {
	        c = d.anchorNode;
	        var e = d.anchorOffset,
	          f = d.focusNode;
	        d = d.focusOffset;
	        try {
	          c.nodeType, f.nodeType;
	        } catch (F) {
	          c = null;
	          break a;
	        }
	        var g = 0,
	          h = -1,
	          k = -1,
	          l = 0,
	          m = 0,
	          q = a,
	          r = null;
	        b: for (;;) {
	          for (var y;;) {
	            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
	            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
	            3 === q.nodeType && (g += q.nodeValue.length);
	            if (null === (y = q.firstChild)) break;
	            r = q;
	            q = y;
	          }
	          for (;;) {
	            if (q === a) break b;
	            r === c && ++l === e && (h = g);
	            r === f && ++m === d && (k = g);
	            if (null !== (y = q.nextSibling)) break;
	            q = r;
	            r = q.parentNode;
	          }
	          q = y;
	        }
	        c = -1 === h || -1 === k ? null : {
	          start: h,
	          end: k
	        };
	      } else c = null;
	    }
	    c = c || {
	      start: 0,
	      end: 0
	    };
	  } else c = null;
	  Df = {
	    focusedElem: a,
	    selectionRange: c
	  };
	  dd = !1;
	  for (V$1 = b; null !== V$1;) if (b = V$1, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V$1 = a;else for (; null !== V$1;) {
	    b = V$1;
	    try {
	      var n = b.alternate;
	      if (0 !== (b.flags & 1024)) switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          break;
	        case 1:
	          if (null !== n) {
	            var t = n.memoizedProps,
	              J = n.memoizedState,
	              x = b.stateNode,
	              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
	            x.__reactInternalSnapshotBeforeUpdate = w;
	          }
	          break;
	        case 3:
	          var u = b.stateNode.containerInfo;
	          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
	          break;
	        case 5:
	        case 6:
	        case 4:
	        case 17:
	          break;
	        default:
	          throw Error(p$1(163));
	      }
	    } catch (F) {
	      W$1(b, b.return, F);
	    }
	    a = b.sibling;
	    if (null !== a) {
	      a.return = b.return;
	      V$1 = a;
	      break;
	    }
	    V$1 = b.return;
	  }
	  n = Oj;
	  Oj = !1;
	  return n;
	}
	function Qj(a, b, c) {
	  var d = b.updateQueue;
	  d = null !== d ? d.lastEffect : null;
	  if (null !== d) {
	    var e = d = d.next;
	    do {
	      if ((e.tag & a) === a) {
	        var f = e.destroy;
	        e.destroy = void 0;
	        void 0 !== f && Nj(b, c, f);
	      }
	      e = e.next;
	    } while (e !== d);
	  }
	}
	function Rj(a, b) {
	  b = b.updateQueue;
	  b = null !== b ? b.lastEffect : null;
	  if (null !== b) {
	    var c = b = b.next;
	    do {
	      if ((c.tag & a) === a) {
	        var d = c.create;
	        c.destroy = d();
	      }
	      c = c.next;
	    } while (c !== b);
	  }
	}
	function Sj(a) {
	  var b = a.ref;
	  if (null !== b) {
	    var c = a.stateNode;
	    switch (a.tag) {
	      case 5:
	        a = c;
	        break;
	      default:
	        a = c;
	    }
	    "function" === typeof b ? b(a) : b.current = a;
	  }
	}
	function Tj(a) {
	  var b = a.alternate;
	  null !== b && (a.alternate = null, Tj(b));
	  a.child = null;
	  a.deletions = null;
	  a.sibling = null;
	  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
	  a.stateNode = null;
	  a.return = null;
	  a.dependencies = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.stateNode = null;
	  a.updateQueue = null;
	}
	function Uj(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
	  a: for (;;) {
	    for (; null === a.sibling;) {
	      if (null === a.return || Uj(a.return)) return null;
	      a = a.return;
	    }
	    a.sibling.return = a.return;
	    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
	      if (a.flags & 2) continue a;
	      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
	    }
	    if (!(a.flags & 2)) return a.stateNode;
	  }
	}
	function Wj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	function Xj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
	}
	var X$1 = null,
	  Yj = !1;
	function Zj(a, b, c) {
	  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
	}
	function ak(a, b, c) {
	  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
	    lc.onCommitFiberUnmount(kc, c);
	  } catch (h) {}
	  switch (c.tag) {
	    case 5:
	      U$1 || Mj(c, b);
	    case 6:
	      var d = X$1,
	        e = Yj;
	      X$1 = null;
	      Zj(a, b, c);
	      X$1 = d;
	      Yj = e;
	      null !== X$1 && (Yj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$1.removeChild(c.stateNode));
	      break;
	    case 18:
	      null !== X$1 && (Yj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X$1, c.stateNode));
	      break;
	    case 4:
	      d = X$1;
	      e = Yj;
	      X$1 = c.stateNode.containerInfo;
	      Yj = !0;
	      Zj(a, b, c);
	      X$1 = d;
	      Yj = e;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      if (!U$1 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
	        e = d = d.next;
	        do {
	          var f = e,
	            g = f.destroy;
	          f = f.tag;
	          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
	          e = e.next;
	        } while (e !== d);
	      }
	      Zj(a, b, c);
	      break;
	    case 1:
	      if (!U$1 && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
	        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
	      } catch (h) {
	        W$1(c, b, h);
	      }
	      Zj(a, b, c);
	      break;
	    case 21:
	      Zj(a, b, c);
	      break;
	    case 22:
	      c.mode & 1 ? (U$1 = (d = U$1) || null !== c.memoizedState, Zj(a, b, c), U$1 = d) : Zj(a, b, c);
	      break;
	    default:
	      Zj(a, b, c);
	  }
	}
	function bk(a) {
	  var b = a.updateQueue;
	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Lj());
	    b.forEach(function (b) {
	      var d = ck.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}
	function dk(a, b) {
	  var c = b.deletions;
	  if (null !== c) for (var d = 0; d < c.length; d++) {
	    var e = c[d];
	    try {
	      var f = a,
	        g = b,
	        h = g;
	      a: for (; null !== h;) {
	        switch (h.tag) {
	          case 5:
	            X$1 = h.stateNode;
	            Yj = !1;
	            break a;
	          case 3:
	            X$1 = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	          case 4:
	            X$1 = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	        }
	        h = h.return;
	      }
	      if (null === X$1) throw Error(p$1(160));
	      ak(f, g, e);
	      X$1 = null;
	      Yj = !1;
	      var k = e.alternate;
	      null !== k && (k.return = null);
	      e.return = null;
	    } catch (l) {
	      W$1(e, b, l);
	    }
	  }
	  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
	}
	function ek(a, b) {
	  var c = a.alternate,
	    d = a.flags;
	  switch (a.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        try {
	          Qj(3, a, a.return), Rj(3, a);
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	        try {
	          Qj(5, a, a.return);
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 1:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      break;
	    case 5:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      if (a.flags & 32) {
	        var e = a.stateNode;
	        try {
	          ob(e, "");
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      if (d & 4 && (e = a.stateNode, null != e)) {
	        var f = a.memoizedProps,
	          g = null !== c ? c.memoizedProps : f,
	          h = a.type,
	          k = a.updateQueue;
	        a.updateQueue = null;
	        if (null !== k) try {
	          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
	          vb(h, g);
	          var l = vb(h, f);
	          for (g = 0; g < k.length; g += 2) {
	            var m = k[g],
	              q = k[g + 1];
	            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
	          }
	          switch (h) {
	            case "input":
	              bb(e, f);
	              break;
	            case "textarea":
	              ib(e, f);
	              break;
	            case "select":
	              var r = e._wrapperState.wasMultiple;
	              e._wrapperState.wasMultiple = !!f.multiple;
	              var y = f.value;
	              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
	          }
	          e[Pf] = f;
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 6:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        if (null === a.stateNode) throw Error(p$1(162));
	        e = a.stateNode;
	        f = a.memoizedProps;
	        try {
	          e.nodeValue = f;
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 3:
	      dk(b, a);
	      fk(a);
	      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
	        bd(b.containerInfo);
	      } catch (t) {
	        W$1(a, a.return, t);
	      }
	      break;
	    case 4:
	      dk(b, a);
	      fk(a);
	      break;
	    case 13:
	      dk(b, a);
	      fk(a);
	      e = a.child;
	      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B$3()));
	      d & 4 && bk(a);
	      break;
	    case 22:
	      m = null !== c && null !== c.memoizedState;
	      a.mode & 1 ? (U$1 = (l = U$1) || m, dk(b, a), U$1 = l) : dk(b, a);
	      fk(a);
	      if (d & 8192) {
	        l = null !== a.memoizedState;
	        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V$1 = a, m = a.child; null !== m;) {
	          for (q = V$1 = m; null !== V$1;) {
	            r = V$1;
	            y = r.child;
	            switch (r.tag) {
	              case 0:
	              case 11:
	              case 14:
	              case 15:
	                Qj(4, r, r.return);
	                break;
	              case 1:
	                Mj(r, r.return);
	                var n = r.stateNode;
	                if ("function" === typeof n.componentWillUnmount) {
	                  d = r;
	                  c = r.return;
	                  try {
	                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
	                  } catch (t) {
	                    W$1(d, c, t);
	                  }
	                }
	                break;
	              case 5:
	                Mj(r, r.return);
	                break;
	              case 22:
	                if (null !== r.memoizedState) {
	                  hk(q);
	                  continue;
	                }
	            }
	            null !== y ? (y.return = r, V$1 = y) : hk(q);
	          }
	          m = m.sibling;
	        }
	        a: for (m = null, q = a;;) {
	          if (5 === q.tag) {
	            if (null === m) {
	              m = q;
	              try {
	                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
	              } catch (t) {
	                W$1(a, a.return, t);
	              }
	            }
	          } else if (6 === q.tag) {
	            if (null === m) try {
	              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
	            } catch (t) {
	              W$1(a, a.return, t);
	            }
	          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
	            q.child.return = q;
	            q = q.child;
	            continue;
	          }
	          if (q === a) break a;
	          for (; null === q.sibling;) {
	            if (null === q.return || q.return === a) break a;
	            m === q && (m = null);
	            q = q.return;
	          }
	          m === q && (m = null);
	          q.sibling.return = q.return;
	          q = q.sibling;
	        }
	      }
	      break;
	    case 19:
	      dk(b, a);
	      fk(a);
	      d & 4 && bk(a);
	      break;
	    case 21:
	      break;
	    default:
	      dk(b, a), fk(a);
	  }
	}
	function fk(a) {
	  var b = a.flags;
	  if (b & 2) {
	    try {
	      a: {
	        for (var c = a.return; null !== c;) {
	          if (Uj(c)) {
	            var d = c;
	            break a;
	          }
	          c = c.return;
	        }
	        throw Error(p$1(160));
	      }
	      switch (d.tag) {
	        case 5:
	          var e = d.stateNode;
	          d.flags & 32 && (ob(e, ""), d.flags &= -33);
	          var f = Vj(a);
	          Xj(a, f, e);
	          break;
	        case 3:
	        case 4:
	          var g = d.stateNode.containerInfo,
	            h = Vj(a);
	          Wj(a, h, g);
	          break;
	        default:
	          throw Error(p$1(161));
	      }
	    } catch (k) {
	      W$1(a, a.return, k);
	    }
	    a.flags &= -3;
	  }
	  b & 4096 && (a.flags &= -4097);
	}
	function ik(a, b, c) {
	  V$1 = a;
	  jk(a);
	}
	function jk(a, b, c) {
	  for (var d = 0 !== (a.mode & 1); null !== V$1;) {
	    var e = V$1,
	      f = e.child;
	    if (22 === e.tag && d) {
	      var g = null !== e.memoizedState || Kj;
	      if (!g) {
	        var h = e.alternate,
	          k = null !== h && null !== h.memoizedState || U$1;
	        h = Kj;
	        var l = U$1;
	        Kj = g;
	        if ((U$1 = k) && !l) for (V$1 = e; null !== V$1;) g = V$1, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V$1 = k) : kk(e);
	        for (; null !== f;) V$1 = f, jk(f), f = f.sibling;
	        V$1 = e;
	        Kj = h;
	        U$1 = l;
	      }
	      lk(a);
	    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V$1 = f) : lk(a);
	  }
	}
	function lk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    if (0 !== (b.flags & 8772)) {
	      var c = b.alternate;
	      try {
	        if (0 !== (b.flags & 8772)) switch (b.tag) {
	          case 0:
	          case 11:
	          case 15:
	            U$1 || Rj(5, b);
	            break;
	          case 1:
	            var d = b.stateNode;
	            if (b.flags & 4 && !U$1) if (null === c) d.componentDidMount();else {
	              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
	              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
	            }
	            var f = b.updateQueue;
	            null !== f && ih(b, f, d);
	            break;
	          case 3:
	            var g = b.updateQueue;
	            if (null !== g) {
	              c = null;
	              if (null !== b.child) switch (b.child.tag) {
	                case 5:
	                  c = b.child.stateNode;
	                  break;
	                case 1:
	                  c = b.child.stateNode;
	              }
	              ih(b, g, c);
	            }
	            break;
	          case 5:
	            var h = b.stateNode;
	            if (null === c && b.flags & 4) {
	              c = h;
	              var k = b.memoizedProps;
	              switch (b.type) {
	                case "button":
	                case "input":
	                case "select":
	                case "textarea":
	                  k.autoFocus && c.focus();
	                  break;
	                case "img":
	                  k.src && (c.src = k.src);
	              }
	            }
	            break;
	          case 6:
	            break;
	          case 4:
	            break;
	          case 12:
	            break;
	          case 13:
	            if (null === b.memoizedState) {
	              var l = b.alternate;
	              if (null !== l) {
	                var m = l.memoizedState;
	                if (null !== m) {
	                  var q = m.dehydrated;
	                  null !== q && bd(q);
	                }
	              }
	            }
	            break;
	          case 19:
	          case 17:
	          case 21:
	          case 22:
	          case 23:
	          case 25:
	            break;
	          default:
	            throw Error(p$1(163));
	        }
	        U$1 || b.flags & 512 && Sj(b);
	      } catch (r) {
	        W$1(b, b.return, r);
	      }
	    }
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V$1 = c;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	function hk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    var c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V$1 = c;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	function kk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    try {
	      switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          var c = b.return;
	          try {
	            Rj(4, b);
	          } catch (k) {
	            W$1(b, c, k);
	          }
	          break;
	        case 1:
	          var d = b.stateNode;
	          if ("function" === typeof d.componentDidMount) {
	            var e = b.return;
	            try {
	              d.componentDidMount();
	            } catch (k) {
	              W$1(b, e, k);
	            }
	          }
	          var f = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W$1(b, f, k);
	          }
	          break;
	        case 5:
	          var g = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W$1(b, g, k);
	          }
	      }
	    } catch (k) {
	      W$1(b, b.return, k);
	    }
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    var h = b.sibling;
	    if (null !== h) {
	      h.return = b.return;
	      V$1 = h;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	var mk = Math.ceil,
	  nk = ua.ReactCurrentDispatcher,
	  ok = ua.ReactCurrentOwner,
	  pk = ua.ReactCurrentBatchConfig,
	  K$3 = 0,
	  R$1 = null,
	  Y = null,
	  Z$1 = 0,
	  gj = 0,
	  fj = Uf(0),
	  T$1 = 0,
	  qk = null,
	  hh = 0,
	  rk = 0,
	  sk = 0,
	  tk = null,
	  uk = null,
	  gk = 0,
	  Hj = Infinity,
	  vk = null,
	  Pi = !1,
	  Qi = null,
	  Si = null,
	  wk = !1,
	  xk = null,
	  yk = 0,
	  zk = 0,
	  Ak = null,
	  Bk = -1,
	  Ck = 0;
	function L$1() {
	  return 0 !== (K$3 & 6) ? B$3() : -1 !== Bk ? Bk : Bk = B$3();
	}
	function lh(a) {
	  if (0 === (a.mode & 1)) return 1;
	  if (0 !== (K$3 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
	  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
	  a = C$3;
	  if (0 !== a) return a;
	  a = window.event;
	  a = void 0 === a ? 16 : jd(a.type);
	  return a;
	}
	function mh(a, b, c, d) {
	  if (50 < zk) throw zk = 0, Ak = null, Error(p$1(185));
	  Ac(a, c, d);
	  if (0 === (K$3 & 2) || a !== R$1) a === R$1 && (0 === (K$3 & 2) && (rk |= c), 4 === T$1 && Dk(a, Z$1)), Ek(a, d), 1 === c && 0 === K$3 && 0 === (b.mode & 1) && (Hj = B$3() + 500, fg && jg());
	}
	function Ek(a, b) {
	  var c = a.callbackNode;
	  wc(a, b);
	  var d = uc(a, a === R$1 ? Z$1 : 0);
	  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
	    null != c && bc(c);
	    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
	      0 === (K$3 & 6) && jg();
	    }), c = null;else {
	      switch (Dc(d)) {
	        case 1:
	          c = fc;
	          break;
	        case 4:
	          c = gc;
	          break;
	        case 16:
	          c = hc;
	          break;
	        case 536870912:
	          c = jc;
	          break;
	        default:
	          c = hc;
	      }
	      c = Gk(c, Hk.bind(null, a));
	    }
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}
	function Hk(a, b) {
	  Bk = -1;
	  Ck = 0;
	  if (0 !== (K$3 & 6)) throw Error(p$1(327));
	  var c = a.callbackNode;
	  if (Ik() && a.callbackNode !== c) return null;
	  var d = uc(a, a === R$1 ? Z$1 : 0);
	  if (0 === d) return null;
	  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
	    b = d;
	    var e = K$3;
	    K$3 |= 2;
	    var f = Kk();
	    if (R$1 !== a || Z$1 !== b) vk = null, Hj = B$3() + 500, Lk(a, b);
	    do try {
	      Mk();
	      break;
	    } catch (h) {
	      Nk(a, h);
	    } while (1);
	    Qg();
	    nk.current = f;
	    K$3 = e;
	    null !== Y ? b = 0 : (R$1 = null, Z$1 = 0, b = T$1);
	  }
	  if (0 !== b) {
	    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
	    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$3()), c;
	    if (6 === b) Dk(a, d);else {
	      e = a.current.alternate;
	      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$3()), c;
	      a.finishedWork = e;
	      a.finishedLanes = d;
	      switch (b) {
	        case 0:
	        case 1:
	          throw Error(p$1(345));
	        case 2:
	          Qk(a, uk, vk);
	          break;
	        case 3:
	          Dk(a, d);
	          if ((d & 130023424) === d && (b = gk + 500 - B$3(), 10 < b)) {
	            if (0 !== uc(a, 0)) break;
	            e = a.suspendedLanes;
	            if ((e & d) !== d) {
	              L$1();
	              a.pingedLanes |= a.suspendedLanes & e;
	              break;
	            }
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 4:
	          Dk(a, d);
	          if ((d & 4194240) === d) break;
	          b = a.eventTimes;
	          for (e = -1; 0 < d;) {
	            var g = 31 - oc(d);
	            f = 1 << g;
	            g = b[g];
	            g > e && (e = g);
	            d &= ~f;
	          }
	          d = e;
	          d = B$3() - d;
	          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
	          if (10 < d) {
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 5:
	          Qk(a, uk, vk);
	          break;
	        default:
	          throw Error(p$1(329));
	      }
	    }
	  }
	  Ek(a, B$3());
	  return a.callbackNode === c ? Hk.bind(null, a) : null;
	}
	function Ok(a, b) {
	  var c = tk;
	  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
	  a = Jk(a, b);
	  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
	  return a;
	}
	function Gj(a) {
	  null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
	  for (var b = a;;) {
	    if (b.flags & 16384) {
	      var c = b.updateQueue;
	      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
	        var e = c[d],
	          f = e.getSnapshot;
	        e = e.value;
	        try {
	          if (!He(f(), e)) return !1;
	        } catch (g) {
	          return !1;
	        }
	      }
	    }
	    c = b.child;
	    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
	      if (b === a) break;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) return !0;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }
	  return !0;
	}
	function Dk(a, b) {
	  b &= ~sk;
	  b &= ~rk;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;
	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - oc(b),
	      d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}
	function Fk(a) {
	  if (0 !== (K$3 & 6)) throw Error(p$1(327));
	  Ik();
	  var b = uc(a, 0);
	  if (0 === (b & 1)) return Ek(a, B$3()), null;
	  var c = Jk(a, b);
	  if (0 !== a.tag && 2 === c) {
	    var d = xc(a);
	    0 !== d && (b = d, c = Ok(a, d));
	  }
	  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B$3()), c;
	  if (6 === c) throw Error(p$1(345));
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Qk(a, uk, vk);
	  Ek(a, B$3());
	  return null;
	}
	function Rk(a, b) {
	  var c = K$3;
	  K$3 |= 1;
	  try {
	    return a(b);
	  } finally {
	    K$3 = c, 0 === K$3 && (Hj = B$3() + 500, fg && jg());
	  }
	}
	function Sk(a) {
	  null !== xk && 0 === xk.tag && 0 === (K$3 & 6) && Ik();
	  var b = K$3;
	  K$3 |= 1;
	  var c = pk.transition,
	    d = C$3;
	  try {
	    if (pk.transition = null, C$3 = 1, a) return a();
	  } finally {
	    C$3 = d, pk.transition = c, K$3 = b, 0 === (K$3 & 6) && jg();
	  }
	}
	function Ij() {
	  gj = fj.current;
	  E$3(fj);
	}
	function Lk(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, Gf(c));
	  if (null !== Y) for (c = Y.return; null !== c;) {
	    var d = c;
	    wg(d);
	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && $f();
	        break;
	      case 3:
	        Jh();
	        E$3(Wf);
	        E$3(H$1);
	        Oh();
	        break;
	      case 5:
	        Lh(d);
	        break;
	      case 4:
	        Jh();
	        break;
	      case 13:
	        E$3(M$1);
	        break;
	      case 19:
	        E$3(M$1);
	        break;
	      case 10:
	        Rg(d.type._context);
	        break;
	      case 22:
	      case 23:
	        Ij();
	    }
	    c = c.return;
	  }
	  R$1 = a;
	  Y = a = wh(a.current, null);
	  Z$1 = gj = b;
	  T$1 = 0;
	  qk = null;
	  sk = rk = hh = 0;
	  uk = tk = null;
	  if (null !== Wg) {
	    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
	      c.interleaved = null;
	      var e = d.next,
	        f = c.pending;
	      if (null !== f) {
	        var g = f.next;
	        f.next = e;
	        d.next = g;
	      }
	      c.pending = d;
	    }
	    Wg = null;
	  }
	  return a;
	}
	function Nk(a, b) {
	  do {
	    var c = Y;
	    try {
	      Qg();
	      Ph.current = ai;
	      if (Sh) {
	        for (var d = N$1.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }
	        Sh = !1;
	      }
	      Rh = 0;
	      P$1 = O$1 = N$1 = null;
	      Th = !1;
	      Uh = 0;
	      ok.current = null;
	      if (null === c || null === c.return) {
	        T$1 = 1;
	        qk = b;
	        Y = null;
	        break;
	      }
	      a: {
	        var f = a,
	          g = c.return,
	          h = c,
	          k = b;
	        b = Z$1;
	        h.flags |= 32768;
	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k,
	            m = h,
	            q = m.tag;
	          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
	            var r = m.alternate;
	            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
	          }
	          var y = Vi(g);
	          if (null !== y) {
	            y.flags &= -257;
	            Wi(y, g, h, f, b);
	            y.mode & 1 && Ti(f, l, b);
	            b = y;
	            k = l;
	            var n = b.updateQueue;
	            if (null === n) {
	              var t = new Set();
	              t.add(k);
	              b.updateQueue = t;
	            } else n.add(k);
	            break a;
	          } else {
	            if (0 === (b & 1)) {
	              Ti(f, l, b);
	              uj();
	              break a;
	            }
	            k = Error(p$1(426));
	          }
	        } else if (I$1 && h.mode & 1) {
	          var J = Vi(g);
	          if (null !== J) {
	            0 === (J.flags & 65536) && (J.flags |= 256);
	            Wi(J, g, h, f, b);
	            Jg(Ki(k, h));
	            break a;
	          }
	        }
	        f = k = Ki(k, h);
	        4 !== T$1 && (T$1 = 2);
	        null === tk ? tk = [f] : tk.push(f);
	        f = g;
	        do {
	          switch (f.tag) {
	            case 3:
	              f.flags |= 65536;
	              b &= -b;
	              f.lanes |= b;
	              var x = Oi(f, k, b);
	              fh(f, x);
	              break a;
	            case 1:
	              h = k;
	              var w = f.type,
	                u = f.stateNode;
	              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
	                f.flags |= 65536;
	                b &= -b;
	                f.lanes |= b;
	                var F = Ri(f, h, b);
	                fh(f, F);
	                break a;
	              }
	          }
	          f = f.return;
	        } while (null !== f);
	      }
	      Tk(c);
	    } catch (na) {
	      b = na;
	      Y === c && null !== c && (Y = c = c.return);
	      continue;
	    }
	    break;
	  } while (1);
	}
	function Kk() {
	  var a = nk.current;
	  nk.current = ai;
	  return null === a ? ai : a;
	}
	function uj() {
	  if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
	  null === R$1 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
	}
	function Jk(a, b) {
	  var c = K$3;
	  K$3 |= 2;
	  var d = Kk();
	  if (R$1 !== a || Z$1 !== b) vk = null, Lk(a, b);
	  do try {
	    Uk();
	    break;
	  } catch (e) {
	    Nk(a, e);
	  } while (1);
	  Qg();
	  K$3 = c;
	  nk.current = d;
	  if (null !== Y) throw Error(p$1(261));
	  R$1 = null;
	  Z$1 = 0;
	  return T$1;
	}
	function Uk() {
	  for (; null !== Y;) Vk(Y);
	}
	function Mk() {
	  for (; null !== Y && !cc();) Vk(Y);
	}
	function Vk(a) {
	  var b = Wk(a.alternate, a, gj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Tk(a) : Y = b;
	  ok.current = null;
	}
	function Tk(a) {
	  var b = a;
	  do {
	    var c = b.alternate;
	    a = b.return;
	    if (0 === (b.flags & 32768)) {
	      if (c = Fj(c, b, gj), null !== c) {
	        Y = c;
	        return;
	      }
	    } else {
	      c = Jj(c, b);
	      if (null !== c) {
	        c.flags &= 32767;
	        Y = c;
	        return;
	      }
	      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
	        T$1 = 6;
	        Y = null;
	        return;
	      }
	    }
	    b = b.sibling;
	    if (null !== b) {
	      Y = b;
	      return;
	    }
	    Y = b = a;
	  } while (null !== b);
	  0 === T$1 && (T$1 = 5);
	}
	function Qk(a, b, c) {
	  var d = C$3,
	    e = pk.transition;
	  try {
	    pk.transition = null, C$3 = 1, Xk(a, b, c, d);
	  } finally {
	    pk.transition = e, C$3 = d;
	  }
	  return null;
	}
	function Xk(a, b, c, d) {
	  do Ik(); while (null !== xk);
	  if (0 !== (K$3 & 6)) throw Error(p$1(327));
	  c = a.finishedWork;
	  var e = a.finishedLanes;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(p$1(177));
	  a.callbackNode = null;
	  a.callbackPriority = 0;
	  var f = c.lanes | c.childLanes;
	  Bc(a, f);
	  a === R$1 && (Y = R$1 = null, Z$1 = 0);
	  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
	    Ik();
	    return null;
	  }));
	  f = 0 !== (c.flags & 15990);
	  if (0 !== (c.subtreeFlags & 15990) || f) {
	    f = pk.transition;
	    pk.transition = null;
	    var g = C$3;
	    C$3 = 1;
	    var h = K$3;
	    K$3 |= 4;
	    ok.current = null;
	    Pj(a, c);
	    ek(c, a);
	    Oe(Df);
	    dd = !!Cf;
	    Df = Cf = null;
	    a.current = c;
	    ik(c);
	    dc();
	    K$3 = h;
	    C$3 = g;
	    pk.transition = f;
	  } else a.current = c;
	  wk && (wk = !1, xk = a, yk = e);
	  f = a.pendingLanes;
	  0 === f && (Si = null);
	  mc(c.stateNode);
	  Ek(a, B$3());
	  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
	    componentStack: e.stack,
	    digest: e.digest
	  });
	  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
	  0 !== (yk & 1) && 0 !== a.tag && Ik();
	  f = a.pendingLanes;
	  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
	  jg();
	  return null;
	}
	function Ik() {
	  if (null !== xk) {
	    var a = Dc(yk),
	      b = pk.transition,
	      c = C$3;
	    try {
	      pk.transition = null;
	      C$3 = 16 > a ? 16 : a;
	      if (null === xk) var d = !1;else {
	        a = xk;
	        xk = null;
	        yk = 0;
	        if (0 !== (K$3 & 6)) throw Error(p$1(331));
	        var e = K$3;
	        K$3 |= 4;
	        for (V$1 = a.current; null !== V$1;) {
	          var f = V$1,
	            g = f.child;
	          if (0 !== (V$1.flags & 16)) {
	            var h = f.deletions;
	            if (null !== h) {
	              for (var k = 0; k < h.length; k++) {
	                var l = h[k];
	                for (V$1 = l; null !== V$1;) {
	                  var m = V$1;
	                  switch (m.tag) {
	                    case 0:
	                    case 11:
	                    case 15:
	                      Qj(8, m, f);
	                  }
	                  var q = m.child;
	                  if (null !== q) q.return = m, V$1 = q;else for (; null !== V$1;) {
	                    m = V$1;
	                    var r = m.sibling,
	                      y = m.return;
	                    Tj(m);
	                    if (m === l) {
	                      V$1 = null;
	                      break;
	                    }
	                    if (null !== r) {
	                      r.return = y;
	                      V$1 = r;
	                      break;
	                    }
	                    V$1 = y;
	                  }
	                }
	              }
	              var n = f.alternate;
	              if (null !== n) {
	                var t = n.child;
	                if (null !== t) {
	                  n.child = null;
	                  do {
	                    var J = t.sibling;
	                    t.sibling = null;
	                    t = J;
	                  } while (null !== t);
	                }
	              }
	              V$1 = f;
	            }
	          }
	          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V$1 = g;else b: for (; null !== V$1;) {
	            f = V$1;
	            if (0 !== (f.flags & 2048)) switch (f.tag) {
	              case 0:
	              case 11:
	              case 15:
	                Qj(9, f, f.return);
	            }
	            var x = f.sibling;
	            if (null !== x) {
	              x.return = f.return;
	              V$1 = x;
	              break b;
	            }
	            V$1 = f.return;
	          }
	        }
	        var w = a.current;
	        for (V$1 = w; null !== V$1;) {
	          g = V$1;
	          var u = g.child;
	          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V$1 = u;else b: for (g = w; null !== V$1;) {
	            h = V$1;
	            if (0 !== (h.flags & 2048)) try {
	              switch (h.tag) {
	                case 0:
	                case 11:
	                case 15:
	                  Rj(9, h);
	              }
	            } catch (na) {
	              W$1(h, h.return, na);
	            }
	            if (h === g) {
	              V$1 = null;
	              break b;
	            }
	            var F = h.sibling;
	            if (null !== F) {
	              F.return = h.return;
	              V$1 = F;
	              break b;
	            }
	            V$1 = h.return;
	          }
	        }
	        K$3 = e;
	        jg();
	        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
	          lc.onPostCommitFiberRoot(kc, a);
	        } catch (na) {}
	        d = !0;
	      }
	      return d;
	    } finally {
	      C$3 = c, pk.transition = b;
	    }
	  }
	  return !1;
	}
	function Yk(a, b, c) {
	  b = Ki(c, b);
	  b = Oi(a, b, 1);
	  a = dh(a, b, 1);
	  b = L$1();
	  null !== a && (Ac(a, 1, b), Ek(a, b));
	}
	function W$1(a, b, c) {
	  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
	    if (3 === b.tag) {
	      Yk(b, a, c);
	      break;
	    } else if (1 === b.tag) {
	      var d = b.stateNode;
	      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
	        a = Ki(c, a);
	        a = Ri(b, a, 1);
	        b = dh(b, a, 1);
	        a = L$1();
	        null !== b && (Ac(b, 1, a), Ek(b, a));
	        break;
	      }
	    }
	    b = b.return;
	  }
	}
	function Ui(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = L$1();
	  a.pingedLanes |= a.suspendedLanes & c;
	  R$1 === a && (Z$1 & c) === c && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$3() - gk ? Lk(a, 0) : sk |= c);
	  Ek(a, b);
	}
	function Zk(a, b) {
	  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
	  var c = L$1();
	  a = Zg(a, b);
	  null !== a && (Ac(a, b, c), Ek(a, c));
	}
	function vj(a) {
	  var b = a.memoizedState,
	    c = 0;
	  null !== b && (c = b.retryLane);
	  Zk(a, c);
	}
	function ck(a, b) {
	  var c = 0;
	  switch (a.tag) {
	    case 13:
	      var d = a.stateNode;
	      var e = a.memoizedState;
	      null !== e && (c = e.retryLane);
	      break;
	    case 19:
	      d = a.stateNode;
	      break;
	    default:
	      throw Error(p$1(314));
	  }
	  null !== d && d.delete(b);
	  Zk(a, c);
	}
	var Wk;
	Wk = function (a, b, c) {
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
	      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
	      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
	    }
	  } else Ug = !1, I$1 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
	  b.lanes = 0;
	  switch (b.tag) {
	    case 2:
	      var d = b.type;
	      jj(a, b);
	      a = b.pendingProps;
	      var e = Yf(b, H$1.current);
	      Tg(b, c);
	      e = Xh(null, b, d, a, e, c);
	      var f = bi();
	      b.flags |= 1;
	      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I$1 && f && vg(b), Yi(null, b, e, c), b = b.child);
	      return b;
	    case 16:
	      d = b.elementType;
	      a: {
	        jj(a, b);
	        a = b.pendingProps;
	        e = d._init;
	        d = e(d._payload);
	        b.type = d;
	        e = b.tag = $k(d);
	        a = Lg(d, a);
	        switch (e) {
	          case 0:
	            b = dj(null, b, d, a, c);
	            break a;
	          case 1:
	            b = ij(null, b, d, a, c);
	            break a;
	          case 11:
	            b = Zi(null, b, d, a, c);
	            break a;
	          case 14:
	            b = aj(null, b, d, Lg(d.type, a), c);
	            break a;
	        }
	        throw Error(p$1(306, d, ""));
	      }
	      return b;
	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
	    case 3:
	      a: {
	        lj(b);
	        if (null === a) throw Error(p$1(387));
	        d = b.pendingProps;
	        f = b.memoizedState;
	        e = f.element;
	        bh(a, b);
	        gh(b, d, null, c);
	        var g = b.memoizedState;
	        d = g.element;
	        if (f.isDehydrated) {
	          if (f = {
	            element: d,
	            isDehydrated: !1,
	            cache: g.cache,
	            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
	            transitions: g.transitions
	          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
	            e = Ki(Error(p$1(423)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else if (d !== e) {
	            e = Ki(Error(p$1(424)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I$1 = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
	        } else {
	          Ig();
	          if (d === e) {
	            b = $i(a, b, c);
	            break a;
	          }
	          Yi(a, b, d, c);
	        }
	        b = b.child;
	      }
	      return b;
	    case 5:
	      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
	    case 6:
	      return null === a && Eg(b), null;
	    case 13:
	      return pj(a, b, c);
	    case 4:
	      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
	    case 7:
	      return Yi(a, b, b.pendingProps, c), b.child;
	    case 8:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 12:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        f = b.memoizedProps;
	        g = e.value;
	        G$1(Mg, d._currentValue);
	        d._currentValue = g;
	        if (null !== f) if (He(f.value, g)) {
	          if (f.children === e.children && !Wf.current) {
	            b = $i(a, b, c);
	            break a;
	          }
	        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
	          var h = f.dependencies;
	          if (null !== h) {
	            g = f.child;
	            for (var k = h.firstContext; null !== k;) {
	              if (k.context === d) {
	                if (1 === f.tag) {
	                  k = ch(-1, c & -c);
	                  k.tag = 2;
	                  var l = f.updateQueue;
	                  if (null !== l) {
	                    l = l.shared;
	                    var m = l.pending;
	                    null === m ? k.next = k : (k.next = m.next, m.next = k);
	                    l.pending = k;
	                  }
	                }
	                f.lanes |= c;
	                k = f.alternate;
	                null !== k && (k.lanes |= c);
	                Sg(f.return, c, b);
	                h.lanes |= c;
	                break;
	              }
	              k = k.next;
	            }
	          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
	            g = f.return;
	            if (null === g) throw Error(p$1(341));
	            g.lanes |= c;
	            h = g.alternate;
	            null !== h && (h.lanes |= c);
	            Sg(g, c, b);
	            g = f.sibling;
	          } else g = f.child;
	          if (null !== g) g.return = f;else for (g = f; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }
	            f = g.sibling;
	            if (null !== f) {
	              f.return = g.return;
	              g = f;
	              break;
	            }
	            g = g.return;
	          }
	          f = g;
	        }
	        Yi(a, b, e.children, c);
	        b = b.child;
	      }
	      return b;
	    case 9:
	      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
	    case 14:
	      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
	    case 15:
	      return cj(a, b, b.type, b.pendingProps, c);
	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
	    case 19:
	      return yj(a, b, c);
	    case 22:
	      return ej(a, b, c);
	  }
	  throw Error(p$1(156, b.tag));
	};
	function Gk(a, b) {
	  return ac(a, b);
	}
	function al(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function Bg(a, b, c, d) {
	  return new al(a, b, c, d);
	}
	function bj(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}
	function $k(a) {
	  if ("function" === typeof a) return bj(a) ? 1 : 0;
	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Da) return 11;
	    if (a === Ga) return 14;
	  }
	  return 2;
	}
	function wh(a, b) {
	  var c = a.alternate;
	  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
	  c.flags = a.flags & 14680064;
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}
	function yh(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ya:
	      return Ah(c.children, e, f, b);
	    case za:
	      g = 8;
	      e |= 8;
	      break;
	    case Aa:
	      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
	    case Ea:
	      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
	    case Fa:
	      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
	    case Ia:
	      return qj(c, e, f, b);
	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case Ba:
	          g = 10;
	          break a;
	        case Ca:
	          g = 9;
	          break a;
	        case Da:
	          g = 11;
	          break a;
	        case Ga:
	          g = 14;
	          break a;
	        case Ha:
	          g = 16;
	          d = null;
	          break a;
	      }
	      throw Error(p$1(130, null == a ? a : typeof a, ""));
	  }
	  b = Bg(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}
	function Ah(a, b, c, d) {
	  a = Bg(7, a, d, b);
	  a.lanes = c;
	  return a;
	}
	function qj(a, b, c, d) {
	  a = Bg(22, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  a.stateNode = {
	    isHidden: !1
	  };
	  return a;
	}
	function xh(a, b, c) {
	  a = Bg(6, a, null, b);
	  a.lanes = c;
	  return a;
	}
	function zh(a, b, c) {
	  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}
	function bl(a, b, c, d, e) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode = this.pendingContext = this.context = null;
	  this.callbackPriority = 0;
	  this.eventTimes = zc(0);
	  this.expirationTimes = zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = zc(0);
	  this.identifierPrefix = d;
	  this.onRecoverableError = e;
	  this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b, c, d, e, f, g, h, k) {
	  a = new bl(a, b, c, h, k);
	  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
	  f = Bg(3, null, null, b);
	  a.current = f;
	  f.stateNode = a;
	  f.memoizedState = {
	    element: d,
	    isDehydrated: c,
	    cache: null,
	    transitions: null,
	    pendingSuspenseBoundaries: null
	  };
	  ah(f);
	  return a;
	}
	function dl(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: wa,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}
	function el(a) {
	  if (!a) return Vf;
	  a = a._reactInternals;
	  a: {
	    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
	    var b = a;
	    do {
	      switch (b.tag) {
	        case 3:
	          b = b.stateNode.context;
	          break a;
	        case 1:
	          if (Zf(b.type)) {
	            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
	            break a;
	          }
	      }
	      b = b.return;
	    } while (null !== b);
	    throw Error(p$1(171));
	  }
	  if (1 === a.tag) {
	    var c = a.type;
	    if (Zf(c)) return bg(a, c, b);
	  }
	  return b;
	}
	function fl(a, b, c, d, e, f, g, h, k) {
	  a = cl(c, d, !0, a, e, f, g, h, k);
	  a.context = el(null);
	  c = a.current;
	  d = L$1();
	  e = lh(c);
	  f = ch(d, e);
	  f.callback = void 0 !== b && null !== b ? b : null;
	  dh(c, f, e);
	  a.current.lanes = e;
	  Ac(a, e, d);
	  Ek(a, d);
	  return a;
	}
	function gl(a, b, c, d) {
	  var e = b.current,
	    f = L$1(),
	    g = lh(e);
	  c = el(c);
	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = ch(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  a = dh(e, b, g);
	  null !== a && (mh(a, e, g, f), eh(a, e, g));
	  return g;
	}
	function hl(a) {
	  a = a.current;
	  if (!a.child) return null;
	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;
	    default:
	      return a.child.stateNode;
	  }
	}
	function il(a, b) {
	  a = a.memoizedState;
	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}
	function jl(a, b) {
	  il(a, b);
	  (a = a.alternate) && il(a, b);
	}
	function kl() {
	  return null;
	}
	var ll = "function" === typeof reportError ? reportError : function (a) {
	  console.error(a);
	};
	function ml(a) {
	  this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function (a) {
	  var b = this._internalRoot;
	  if (null === b) throw Error(p$1(409));
	  gl(a, b, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function () {
	  var a = this._internalRoot;
	  if (null !== a) {
	    this._internalRoot = null;
	    var b = a.containerInfo;
	    Sk(function () {
	      gl(null, a, null, null);
	    });
	    b[uf] = null;
	  }
	};
	function nl(a) {
	  this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function (a) {
	  if (a) {
	    var b = Hc();
	    a = {
	      blockedOn: null,
	      target: a,
	      priority: b
	    };
	    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
	    Qc.splice(c, 0, a);
	    0 === c && Vc(a);
	  }
	};
	function ol(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {}
	function rl(a, b, c, d, e) {
	  if (e) {
	    if ("function" === typeof d) {
	      var f = d;
	      d = function () {
	        var a = hl(g);
	        f.call(a);
	      };
	    }
	    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
	    a._reactRootContainer = g;
	    a[uf] = g.current;
	    sf(8 === a.nodeType ? a.parentNode : a);
	    Sk();
	    return g;
	  }
	  for (; e = a.lastChild;) a.removeChild(e);
	  if ("function" === typeof d) {
	    var h = d;
	    d = function () {
	      var a = hl(k);
	      h.call(a);
	    };
	  }
	  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
	  a._reactRootContainer = k;
	  a[uf] = k.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  Sk(function () {
	    gl(b, k, c, d);
	  });
	  return k;
	}
	function sl(a, b, c, d, e) {
	  var f = c._reactRootContainer;
	  if (f) {
	    var g = f;
	    if ("function" === typeof e) {
	      var h = e;
	      e = function () {
	        var a = hl(g);
	        h.call(a);
	      };
	    }
	    gl(b, g, a, e);
	  } else g = rl(c, b, a, e, d);
	  return hl(g);
	}
	Ec = function (a) {
	  switch (a.tag) {
	    case 3:
	      var b = a.stateNode;
	      if (b.current.memoizedState.isDehydrated) {
	        var c = tc(b.pendingLanes);
	        0 !== c && (Cc(b, c | 1), Ek(b, B$3()), 0 === (K$3 & 6) && (Hj = B$3() + 500, jg()));
	      }
	      break;
	    case 13:
	      Sk(function () {
	        var b = Zg(a, 1);
	        if (null !== b) {
	          var c = L$1();
	          mh(b, a, 1, c);
	        }
	      }), jl(a, 1);
	  }
	};
	Fc = function (a) {
	  if (13 === a.tag) {
	    var b = Zg(a, 134217728);
	    if (null !== b) {
	      var c = L$1();
	      mh(b, a, 134217728, c);
	    }
	    jl(a, 134217728);
	  }
	};
	Gc = function (a) {
	  if (13 === a.tag) {
	    var b = lh(a),
	      c = Zg(a, b);
	    if (null !== c) {
	      var d = L$1();
	      mh(c, a, b, d);
	    }
	    jl(a, b);
	  }
	};
	Hc = function () {
	  return C$3;
	};
	Ic = function (a, b) {
	  var c = C$3;
	  try {
	    return C$3 = a, b();
	  } finally {
	    C$3 = c;
	  }
	};
	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      bb(a, c);
	      b = c.name;
	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;
	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	        for (b = 0; b < c.length; b++) {
	          var d = c[b];
	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(p$1(90));
	            Wa(d);
	            bb(d, e);
	          }
	        }
	      }
	      break;
	    case "textarea":
	      ib(a, c);
	      break;
	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};
	Gb = Rk;
	Hb = Sk;
	var tl = {
	    usingClientEntryPoint: !1,
	    Events: [Cb, ue$1, Db, Eb, Fb, Rk]
	  },
	  ul = {
	    findFiberByHostInstance: Wc,
	    bundleType: 0,
	    version: "18.2.0",
	    rendererPackageName: "react-dom"
	  };
	var vl = {
	  bundleType: ul.bundleType,
	  version: ul.version,
	  rendererPackageName: ul.rendererPackageName,
	  rendererConfig: ul.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setErrorHandler: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ua.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = Zb(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null,
	  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!wl.isDisabled && wl.supportsFiber) try {
	    kc = wl.inject(vl), lc = wl;
	  } catch (a) {}
	}
	var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	var createPortal = function (a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!ol(b)) throw Error(p$1(200));
	  return dl(a, b, null, c);
	};
	var createRoot = function (a, b) {
	  if (!ol(a)) throw Error(p$1(299));
	  var c = !1,
	    d = "",
	    e = ll;
	  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
	  b = cl(a, 1, !1, null, null, c, !1, d, e);
	  a[uf] = b.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  return new ml(b);
	};
	var findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;
	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(p$1(188));
	    a = Object.keys(a).join(",");
	    throw Error(p$1(268, a));
	  }
	  a = Zb(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};
	var flushSync = function (a) {
	  return Sk(a);
	};
	var hydrate = function (a, b, c) {
	  if (!pl(b)) throw Error(p$1(200));
	  return sl(null, a, b, !0, c);
	};
	var hydrateRoot = function (a, b, c) {
	  if (!ol(a)) throw Error(p$1(405));
	  var d = null != c && c.hydratedSources || null,
	    e = !1,
	    f = "",
	    g = ll;
	  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
	  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
	  a[uf] = b.current;
	  sf(a);
	  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
	  return new nl(b);
	};
	var render = function (a, b, c) {
	  if (!pl(b)) throw Error(p$1(200));
	  return sl(null, a, b, !1, c);
	};
	var unmountComponentAtNode = function (a) {
	  if (!pl(a)) throw Error(p$1(40));
	  return a._reactRootContainer ? (Sk(function () {
	    sl(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[uf] = null;
	    });
	  }), !0) : !1;
	};
	var unstable_batchedUpdates = Rk;
	var unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!pl(c)) throw Error(p$1(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
	  return sl(a, b, c, !1, d);
	};
	var version = "18.2.0-next-9e3b772b8-20220608";
	var reactDom_production_min = {
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  createPortal: createPortal,
	  createRoot: createRoot,
	  findDOMNode: findDOMNode,
	  flushSync: flushSync,
	  hydrate: hydrate,
	  hydrateRoot: hydrateRoot,
	  render: render,
	  unmountComponentAtNode: unmountComponentAtNode,
	  unstable_batchedUpdates: unstable_batchedUpdates,
	  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	  version: version
	};

	var reactDom_development=createCommonjsModule(function(module,exports){});reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;reactDom_development.createPortal;reactDom_development.createRoot;reactDom_development.findDOMNode;reactDom_development.flushSync;reactDom_development.hydrate;reactDom_development.hydrateRoot;reactDom_development.render;reactDom_development.unmountComponentAtNode;reactDom_development.unstable_batchedUpdates;reactDom_development.unstable_renderSubtreeIntoContainer;reactDom_development.version;

	var reactDom = createCommonjsModule(function (module) {

	  function checkDCE() {
	    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	      return;
	    }
	    try {
	      // Verify that the code above has been dead code eliminated (DCE'd).
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	    } catch (err) {
	      // DevTools shouldn't crash React, no matter what.
	      // We should still report in case we break this code.
	      console.error(err);
	    }
	  }
	  {
	    // DCE check should happen before ReactDOM bundle executes so that
	    // DevTools can report bad minification during injection.
	    checkDCE();
	    module.exports = reactDom_production_min;
	  }
	});
	reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	var reactDom_2 = reactDom.createPortal;
	reactDom.createRoot;
	reactDom.findDOMNode;
	reactDom.flushSync;
	reactDom.hydrate;
	reactDom.hydrateRoot;
	reactDom.render;
	reactDom.unmountComponentAtNode;
	reactDom.unstable_batchedUpdates;
	reactDom.unstable_renderSubtreeIntoContainer;
	reactDom.version;

	var client = createCommonjsModule(function (module, exports) {

	  {
	    exports.createRoot = reactDom.createRoot;
	    exports.hydrateRoot = reactDom.hydrateRoot;
	  }
	});
	client.createRoot;
	client.hydrateRoot;

	function _iterableToArrayLimit$1(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
	  }
	}
	function ownKeys$1(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2$1(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}
	function _classCallCheck$1(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties$1(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
	  }
	}
	function _createClass$1(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$1(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty$1(obj, key, value) {
	  key = _toPropertyKey$1(key);
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
	function _inherits$1(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf$1(subClass, superClass);
	}
	function _getPrototypeOf$1(o) {
	  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf$1(o);
	}
	function _setPrototypeOf$1(o, p) {
	  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf$1(o, p);
	}
	function _isNativeReflectConstruct$1() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}
	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	function _possibleConstructorReturn$1(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized$1(self);
	}
	function _createSuper$1(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf$1(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf$1(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn$1(this, result);
	  };
	}
	function _slicedToArray$1(arr, i) {
	  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
	}
	function _toArray(arr) {
	  return _arrayWithHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest$1();
	}
	function _toConsumableArray$1(arr) {
	  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
	}
	function _arrayWithoutHoles$1(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
	}
	function _arrayWithHoles$1(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _iterableToArray$1(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _unsupportedIterableToArray$1(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
	}
	function _arrayLikeToArray$1(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableSpread$1() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _nonIterableRest$1() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _toPrimitive$1(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	function _toPropertyKey$1(arg) {
	  var key = _toPrimitive$1(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}

	function ascending$5(a, b) {
	  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function descending$1(a, b) {
	  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	}

	function bisector$2(f) {
	  let compare1, compare2, delta;

	  // If an accessor is specified, promote it to a comparator. In this case we
	  // can test whether the search value is (self-) comparable. We can’t do this
	  // for a comparator (except for specific, known comparators) because we can’t
	  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
	  // used to test whether a single value is comparable.
	  if (f.length !== 2) {
	    compare1 = ascending$5;
	    compare2 = (d, x) => ascending$5(f(d), x);
	    delta = (d, x) => f(d) - x;
	  } else {
	    compare1 = f === ascending$5 || f === descending$1 ? f : zero$3;
	    compare2 = f;
	    delta = f;
	  }
	  function left(a, x, lo = 0, hi = a.length) {
	    if (lo < hi) {
	      if (compare1(x, x) !== 0) return hi;
	      do {
	        const mid = lo + hi >>> 1;
	        if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
	      } while (lo < hi);
	    }
	    return lo;
	  }
	  function right(a, x, lo = 0, hi = a.length) {
	    if (lo < hi) {
	      if (compare1(x, x) !== 0) return hi;
	      do {
	        const mid = lo + hi >>> 1;
	        if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
	      } while (lo < hi);
	    }
	    return lo;
	  }
	  function center(a, x, lo = 0, hi = a.length) {
	    const i = left(a, x, lo, hi - 1);
	    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
	  }
	  return {
	    left,
	    center,
	    right
	  };
	}
	function zero$3() {
	  return 0;
	}

	function number$2(x) {
	  return x === null ? NaN : +x;
	}

	bisector$2(ascending$5);
	bisector$2(number$2).center;

	var noop$3 = {
	  value: function () {}
	};
	function dispatch$1() {
	  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
	    _[t] = [];
	  }
	  return new Dispatch$1(_);
	}
	function Dispatch$1(_) {
	  this._ = _;
	}
	function parseTypenames$4(typenames, types) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	      i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	    return {
	      type: t,
	      name: name
	    };
	  });
	}
	Dispatch$1.prototype = dispatch$1.prototype = {
	  constructor: Dispatch$1,
	  on: function (typename, callback) {
	    var _ = this._,
	      T = parseTypenames$4(typename + "", _),
	      t,
	      i = -1,
	      n = T.length;

	    // If no callback was specified, return the callback of the given type and name.
	    if (arguments.length < 2) {
	      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$4(_[t], typename.name))) return t;
	      return;
	    }

	    // If a type was specified, set the callback for the given type and name.
	    // Otherwise, if a null callback was specified, remove callbacks of the given name.
	    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    while (++i < n) {
	      if (t = (typename = T[i]).type) _[t] = set$4(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$4(_[t], typename.name, null);
	    }
	    return this;
	  },
	  copy: function () {
	    var copy = {},
	      _ = this._;
	    for (var t in _) copy[t] = _[t].slice();
	    return new Dispatch$1(copy);
	  },
	  call: function (type, that) {
	    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  },
	  apply: function (type, that, args) {
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  }
	};
	function get$4(type, name) {
	  for (var i = 0, n = type.length, c; i < n; ++i) {
	    if ((c = type[i]).name === name) {
	      return c.value;
	    }
	  }
	}
	function set$4(type, name, callback) {
	  for (var i = 0, n = type.length; i < n; ++i) {
	    if (type[i].name === name) {
	      type[i] = noop$3, type = type.slice(0, i).concat(type.slice(i + 1));
	      break;
	    }
	  }
	  if (callback != null) type.push({
	    name: name,
	    value: callback
	  });
	  return type;
	}

	var xhtml$2 = "http://www.w3.org/1999/xhtml";
	var namespaces$2 = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml$2,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	function namespace$2 (name) {
	  var prefix = name += "",
	    i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces$2.hasOwnProperty(prefix) ? {
	    space: namespaces$2[prefix],
	    local: name
	  } : name; // eslint-disable-line no-prototype-builtins
	}

	function creatorInherit$2(name) {
	  return function () {
	    var document = this.ownerDocument,
	      uri = this.namespaceURI;
	    return uri === xhtml$2 && document.documentElement.namespaceURI === xhtml$2 ? document.createElement(name) : document.createElementNS(uri, name);
	  };
	}
	function creatorFixed$2(fullname) {
	  return function () {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}
	function creator$2 (name) {
	  var fullname = namespace$2(name);
	  return (fullname.local ? creatorFixed$2 : creatorInherit$2)(fullname);
	}

	function none$2() {}
	function selector$2 (selector) {
	  return selector == null ? none$2 : function () {
	    return this.querySelector(selector);
	  };
	}

	function selection_select$2 (select) {
	  if (typeof select !== "function") select = selector$2(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }
	  return new Selection$5(subgroups, this._parents);
	}

	// Given something array like (or null), returns something that is strictly an
	// array. This is used to ensure that array-like objects passed to d3.selectAll
	// or selection.selectAll are converted into proper arrays when creating a
	// selection; we don’t ever want to create a selection backed by a live
	// HTMLCollection or NodeList. However, note that selection.selectAll will use a
	// static NodeList as a group, since it safely derived from querySelectorAll.
	function array$3(x) {
	  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
	}

	function empty$2() {
	  return [];
	}
	function selectorAll$2 (selector) {
	  return selector == null ? empty$2 : function () {
	    return this.querySelectorAll(selector);
	  };
	}

	function arrayAll$2(select) {
	  return function () {
	    return array$3(select.apply(this, arguments));
	  };
	}
	function selection_selectAll$2 (select) {
	  if (typeof select === "function") select = arrayAll$2(select);else select = selectorAll$2(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }
	  return new Selection$5(subgroups, parents);
	}

	function matcher$2 (selector) {
	  return function () {
	    return this.matches(selector);
	  };
	}
	function childMatcher$2(selector) {
	  return function (node) {
	    return node.matches(selector);
	  };
	}

	var find$2 = Array.prototype.find;
	function childFind$2(match) {
	  return function () {
	    return find$2.call(this.children, match);
	  };
	}
	function childFirst$2() {
	  return this.firstElementChild;
	}
	function selection_selectChild$2 (match) {
	  return this.select(match == null ? childFirst$2 : childFind$2(typeof match === "function" ? match : childMatcher$2(match)));
	}

	var filter$2 = Array.prototype.filter;
	function children$2() {
	  return Array.from(this.children);
	}
	function childrenFilter$2(match) {
	  return function () {
	    return filter$2.call(this.children, match);
	  };
	}
	function selection_selectChildren$2 (match) {
	  return this.selectAll(match == null ? children$2 : childrenFilter$2(typeof match === "function" ? match : childMatcher$2(match)));
	}

	function selection_filter$2 (match) {
	  if (typeof match !== "function") match = matcher$2(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Selection$5(subgroups, this._parents);
	}

	function sparse$2 (update) {
	  return new Array(update.length);
	}

	function selection_enter$2 () {
	  return new Selection$5(this._enter || this._groups.map(sparse$2), this._parents);
	}
	function EnterNode$2(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}
	EnterNode$2.prototype = {
	  constructor: EnterNode$2,
	  appendChild: function (child) {
	    return this._parent.insertBefore(child, this._next);
	  },
	  insertBefore: function (child, next) {
	    return this._parent.insertBefore(child, next);
	  },
	  querySelector: function (selector) {
	    return this._parent.querySelector(selector);
	  },
	  querySelectorAll: function (selector) {
	    return this._parent.querySelectorAll(selector);
	  }
	};

	function constant$5 (x) {
	  return function () {
	    return x;
	  };
	}

	function bindIndex$2(parent, group, enter, update, exit, data) {
	  var i = 0,
	    node,
	    groupLength = group.length,
	    dataLength = data.length;

	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode$2(parent, data[i]);
	    }
	  }

	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}
	function bindKey$2(parent, group, enter, update, exit, data, key) {
	  var i,
	    node,
	    nodeByKeyValue = new Map(),
	    groupLength = group.length,
	    dataLength = data.length,
	    keyValues = new Array(groupLength),
	    keyValue;

	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
	      if (nodeByKeyValue.has(keyValue)) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue.set(keyValue, node);
	      }
	    }
	  }

	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = key.call(parent, data[i], i, data) + "";
	    if (node = nodeByKeyValue.get(keyValue)) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue.delete(keyValue);
	    } else {
	      enter[i] = new EnterNode$2(parent, data[i]);
	    }
	  }

	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
	      exit[i] = node;
	    }
	  }
	}
	function datum$2(node) {
	  return node.__data__;
	}
	function selection_data$2 (value, key) {
	  if (!arguments.length) return Array.from(this, datum$2);
	  var bind = key ? bindKey$2 : bindIndex$2,
	    parents = this._parents,
	    groups = this._groups;
	  if (typeof value !== "function") value = constant$5(value);
	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	      group = groups[j],
	      groupLength = group.length,
	      data = arraylike$2(value.call(parent, parent && parent.__data__, j, parents)),
	      dataLength = data.length,
	      enterGroup = enter[j] = new Array(dataLength),
	      updateGroup = update[j] = new Array(dataLength),
	      exitGroup = exit[j] = new Array(groupLength);
	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }
	  update = new Selection$5(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	}

	// Given some data, this returns an array-like view of it: an object that
	// exposes a length property and allows numeric indexing. Note that unlike
	// selectAll, this isn’t worried about “live” collections because the resulting
	// array will only be used briefly while data is being bound. (It is possible to
	// cause the data to change while iterating by using a key function, but please
	// don’t; we’d rather avoid a gratuitous copy.)
	function arraylike$2(data) {
	  return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
	  : Array.from(data); // Map, Set, iterable, string, or anything else
	}

	function selection_exit$2 () {
	  return new Selection$5(this._exit || this._groups.map(sparse$2), this._parents);
	}

	function selection_join$2 (onenter, onupdate, onexit) {
	  var enter = this.enter(),
	    update = this,
	    exit = this.exit();
	  if (typeof onenter === "function") {
	    enter = onenter(enter);
	    if (enter) enter = enter.selection();
	  } else {
	    enter = enter.append(onenter + "");
	  }
	  if (onupdate != null) {
	    update = onupdate(update);
	    if (update) update = update.selection();
	  }
	  if (onexit == null) exit.remove();else onexit(exit);
	  return enter && update ? enter.merge(update).order() : update;
	}

	function selection_merge$2 (context) {
	  var selection = context.selection ? context.selection() : context;
	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Selection$5(merges, this._parents);
	}

	function selection_order$2 () {
	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	  return this;
	}

	function selection_sort$2 (compare) {
	  if (!compare) compare = ascending$4;
	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }
	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }
	  return new Selection$5(sortgroups, this._parents).order();
	}
	function ascending$4(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function selection_call$2 () {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	}

	function selection_nodes$2 () {
	  return Array.from(this);
	}

	function selection_node$2 () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }
	  return null;
	}

	function selection_size$2 () {
	  let size = 0;
	  for (const node of this) ++size; // eslint-disable-line no-unused-vars
	  return size;
	}

	function selection_empty$2 () {
	  return !this.node();
	}

	function selection_each$2 (callback) {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }
	  return this;
	}

	function attrRemove$5(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS$5(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant$5(name, value) {
	  return function () {
	    this.setAttribute(name, value);
	  };
	}
	function attrConstantNS$5(fullname, value) {
	  return function () {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}
	function attrFunction$5(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
	  };
	}
	function attrFunctionNS$5(fullname, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}
	function selection_attr$2 (name, value) {
	  var fullname = namespace$2(name);
	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	  }
	  return this.each((value == null ? fullname.local ? attrRemoveNS$5 : attrRemove$5 : typeof value === "function" ? fullname.local ? attrFunctionNS$5 : attrFunction$5 : fullname.local ? attrConstantNS$5 : attrConstant$5)(fullname, value));
	}

	function defaultView$2 (node) {
	  return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
	  || node.document && node // node is a Window
	  || node.defaultView; // node is a Document
	}

	function styleRemove$5(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant$5(name, value, priority) {
	  return function () {
	    this.style.setProperty(name, value, priority);
	  };
	}
	function styleFunction$5(name, value, priority) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
	  };
	}
	function selection_style$2 (name, value, priority) {
	  return arguments.length > 1 ? this.each((value == null ? styleRemove$5 : typeof value === "function" ? styleFunction$5 : styleConstant$5)(name, value, priority == null ? "" : priority)) : styleValue$2(this.node(), name);
	}
	function styleValue$2(node, name) {
	  return node.style.getPropertyValue(name) || defaultView$2(node).getComputedStyle(node, null).getPropertyValue(name);
	}

	function propertyRemove$2(name) {
	  return function () {
	    delete this[name];
	  };
	}
	function propertyConstant$2(name, value) {
	  return function () {
	    this[name] = value;
	  };
	}
	function propertyFunction$2(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];else this[name] = v;
	  };
	}
	function selection_property$2 (name, value) {
	  return arguments.length > 1 ? this.each((value == null ? propertyRemove$2 : typeof value === "function" ? propertyFunction$2 : propertyConstant$2)(name, value)) : this.node()[name];
	}

	function classArray$2(string) {
	  return string.trim().split(/^|\s+/);
	}
	function classList$2(node) {
	  return node.classList || new ClassList$2(node);
	}
	function ClassList$2(node) {
	  this._node = node;
	  this._names = classArray$2(node.getAttribute("class") || "");
	}
	ClassList$2.prototype = {
	  add: function (name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function (name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function (name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};
	function classedAdd$2(node, names) {
	  var list = classList$2(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.add(names[i]);
	}
	function classedRemove$2(node, names) {
	  var list = classList$2(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.remove(names[i]);
	}
	function classedTrue$2(names) {
	  return function () {
	    classedAdd$2(this, names);
	  };
	}
	function classedFalse$2(names) {
	  return function () {
	    classedRemove$2(this, names);
	  };
	}
	function classedFunction$2(names, value) {
	  return function () {
	    (value.apply(this, arguments) ? classedAdd$2 : classedRemove$2)(this, names);
	  };
	}
	function selection_classed$2 (name, value) {
	  var names = classArray$2(name + "");
	  if (arguments.length < 2) {
	    var list = classList$2(this.node()),
	      i = -1,
	      n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }
	  return this.each((typeof value === "function" ? classedFunction$2 : value ? classedTrue$2 : classedFalse$2)(names, value));
	}

	function textRemove$2() {
	  this.textContent = "";
	}
	function textConstant$5(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction$5(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}
	function selection_text$2 (value) {
	  return arguments.length ? this.each(value == null ? textRemove$2 : (typeof value === "function" ? textFunction$5 : textConstant$5)(value)) : this.node().textContent;
	}

	function htmlRemove$2() {
	  this.innerHTML = "";
	}
	function htmlConstant$2(value) {
	  return function () {
	    this.innerHTML = value;
	  };
	}
	function htmlFunction$2(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}
	function selection_html$2 (value) {
	  return arguments.length ? this.each(value == null ? htmlRemove$2 : (typeof value === "function" ? htmlFunction$2 : htmlConstant$2)(value)) : this.node().innerHTML;
	}

	function raise$2() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}
	function selection_raise$2 () {
	  return this.each(raise$2);
	}

	function lower$2() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}
	function selection_lower$2 () {
	  return this.each(lower$2);
	}

	function selection_append$2 (name) {
	  var create = typeof name === "function" ? name : creator$2(name);
	  return this.select(function () {
	    return this.appendChild(create.apply(this, arguments));
	  });
	}

	function constantNull$2() {
	  return null;
	}
	function selection_insert$2 (name, before) {
	  var create = typeof name === "function" ? name : creator$2(name),
	    select = before == null ? constantNull$2 : typeof before === "function" ? before : selector$2(before);
	  return this.select(function () {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	}

	function remove$2() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}
	function selection_remove$2 () {
	  return this.each(remove$2);
	}

	function selection_cloneShallow$2() {
	  var clone = this.cloneNode(false),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_cloneDeep$2() {
	  var clone = this.cloneNode(true),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_clone$2 (deep) {
	  return this.select(deep ? selection_cloneDeep$2 : selection_cloneShallow$2);
	}

	function selection_datum$2 (value) {
	  return arguments.length ? this.property("__data__", value) : this.node().__data__;
	}

	function contextListener$2(listener) {
	  return function (event) {
	    listener.call(this, event, this.__data__);
	  };
	}
	function parseTypenames$3(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	      i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {
	      type: t,
	      name: name
	    };
	  });
	}
	function onRemove$2(typename) {
	  return function () {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;else delete this.__on;
	  };
	}
	function onAdd$2(typename, value, options) {
	  return function () {
	    var on = this.__on,
	      o,
	      listener = contextListener$2(value);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	        this.addEventListener(o.type, o.listener = listener, o.options = options);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, options);
	    o = {
	      type: typename.type,
	      name: typename.name,
	      value: value,
	      listener: listener,
	      options: options
	    };
	    if (!on) this.__on = [o];else on.push(o);
	  };
	}
	function selection_on$2 (typename, value, options) {
	  var typenames = parseTypenames$3(typename + ""),
	    i,
	    n = typenames.length,
	    t;
	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }
	  on = value ? onAdd$2 : onRemove$2;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	  return this;
	}

	function dispatchEvent$2(node, type, params) {
	  var window = defaultView$2(node),
	    event = window.CustomEvent;
	  if (typeof event === "function") {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
	  }
	  node.dispatchEvent(event);
	}
	function dispatchConstant$2(type, params) {
	  return function () {
	    return dispatchEvent$2(this, type, params);
	  };
	}
	function dispatchFunction$2(type, params) {
	  return function () {
	    return dispatchEvent$2(this, type, params.apply(this, arguments));
	  };
	}
	function selection_dispatch$2 (type, params) {
	  return this.each((typeof params === "function" ? dispatchFunction$2 : dispatchConstant$2)(type, params));
	}

	function* selection_iterator$2 () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) yield node;
	    }
	  }
	}

	var root$3 = [null];
	function Selection$5(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}
	function selection$2() {
	  return new Selection$5([[document.documentElement]], root$3);
	}
	function selection_selection$2() {
	  return this;
	}
	Selection$5.prototype = selection$2.prototype = {
	  constructor: Selection$5,
	  select: selection_select$2,
	  selectAll: selection_selectAll$2,
	  selectChild: selection_selectChild$2,
	  selectChildren: selection_selectChildren$2,
	  filter: selection_filter$2,
	  data: selection_data$2,
	  enter: selection_enter$2,
	  exit: selection_exit$2,
	  join: selection_join$2,
	  merge: selection_merge$2,
	  selection: selection_selection$2,
	  order: selection_order$2,
	  sort: selection_sort$2,
	  call: selection_call$2,
	  nodes: selection_nodes$2,
	  node: selection_node$2,
	  size: selection_size$2,
	  empty: selection_empty$2,
	  each: selection_each$2,
	  attr: selection_attr$2,
	  style: selection_style$2,
	  property: selection_property$2,
	  classed: selection_classed$2,
	  text: selection_text$2,
	  html: selection_html$2,
	  raise: selection_raise$2,
	  lower: selection_lower$2,
	  append: selection_append$2,
	  insert: selection_insert$2,
	  remove: selection_remove$2,
	  clone: selection_clone$2,
	  datum: selection_datum$2,
	  on: selection_on$2,
	  dispatch: selection_dispatch$2,
	  [Symbol.iterator]: selection_iterator$2
	};

	var nextId$2 = 0;
	function Local$2() {
	  this._ = "@" + (++nextId$2).toString(36);
	}
	Local$2.prototype = {
	  constructor: Local$2,
	  get: function (node) {
	    var id = this._;
	    while (!(id in node)) if (!(node = node.parentNode)) return;
	    return node[id];
	  },
	  set: function (node, value) {
	    return node[this._] = value;
	  },
	  remove: function (node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function () {
	    return this._;
	  }
	};

	function define$1 (constructor, factory, prototype) {
	  constructor.prototype = factory.prototype = prototype;
	  prototype.constructor = constructor;
	}
	function extend$1(parent, definition) {
	  var prototype = Object.create(parent.prototype);
	  for (var key in definition) prototype[key] = definition[key];
	  return prototype;
	}

	function Color$1() {}
	var darker$1 = 0.7;
	var brighter$1 = 1 / darker$1;
	var reI$1 = "\\s*([+-]?\\d+)\\s*",
	  reN$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	  reP$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	  reHex$1 = /^#([0-9a-f]{3,8})$/,
	  reRgbInteger$1 = new RegExp("^rgb\\(" + [reI$1, reI$1, reI$1] + "\\)$"),
	  reRgbPercent$1 = new RegExp("^rgb\\(" + [reP$1, reP$1, reP$1] + "\\)$"),
	  reRgbaInteger$1 = new RegExp("^rgba\\(" + [reI$1, reI$1, reI$1, reN$1] + "\\)$"),
	  reRgbaPercent$1 = new RegExp("^rgba\\(" + [reP$1, reP$1, reP$1, reN$1] + "\\)$"),
	  reHslPercent$1 = new RegExp("^hsl\\(" + [reN$1, reP$1, reP$1] + "\\)$"),
	  reHslaPercent$1 = new RegExp("^hsla\\(" + [reN$1, reP$1, reP$1, reN$1] + "\\)$");
	var named$1 = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};
	define$1(Color$1, color$1, {
	  copy: function (channels) {
	    return Object.assign(new this.constructor(), this, channels);
	  },
	  displayable: function () {
	    return this.rgb().displayable();
	  },
	  hex: color_formatHex$1,
	  // Deprecated! Use color.formatHex.
	  formatHex: color_formatHex$1,
	  formatHsl: color_formatHsl$1,
	  formatRgb: color_formatRgb$1,
	  toString: color_formatRgb$1
	});
	function color_formatHex$1() {
	  return this.rgb().formatHex();
	}
	function color_formatHsl$1() {
	  return hslConvert$1(this).formatHsl();
	}
	function color_formatRgb$1() {
	  return this.rgb().formatRgb();
	}
	function color$1(format) {
	  var m, l;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex$1.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn$1(m) // #ff0000
	  : l === 3 ? new Rgb$1(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
	  : l === 8 ? rgba$1(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
	  : l === 4 ? rgba$1(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
	  : null // invalid hex
	  ) : (m = reRgbInteger$1.exec(format)) ? new Rgb$1(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	  : (m = reRgbPercent$1.exec(format)) ? new Rgb$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	  : (m = reRgbaInteger$1.exec(format)) ? rgba$1(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	  : (m = reRgbaPercent$1.exec(format)) ? rgba$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	  : (m = reHslPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	  : (m = reHslaPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	  : named$1.hasOwnProperty(format) ? rgbn$1(named$1[format]) // eslint-disable-line no-prototype-builtins
	  : format === "transparent" ? new Rgb$1(NaN, NaN, NaN, 0) : null;
	}
	function rgbn$1(n) {
	  return new Rgb$1(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	}
	function rgba$1(r, g, b, a) {
	  if (a <= 0) r = g = b = NaN;
	  return new Rgb$1(r, g, b, a);
	}
	function rgbConvert$1(o) {
	  if (!(o instanceof Color$1)) o = color$1(o);
	  if (!o) return new Rgb$1();
	  o = o.rgb();
	  return new Rgb$1(o.r, o.g, o.b, o.opacity);
	}
	function rgb$1(r, g, b, opacity) {
	  return arguments.length === 1 ? rgbConvert$1(r) : new Rgb$1(r, g, b, opacity == null ? 1 : opacity);
	}
	function Rgb$1(r, g, b, opacity) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	define$1(Rgb$1, rgb$1, extend$1(Color$1, {
	  brighter: function (k) {
	    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
	    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  darker: function (k) {
	    k = k == null ? darker$1 : Math.pow(darker$1, k);
	    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  rgb: function () {
	    return this;
	  },
	  displayable: function () {
	    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	  },
	  hex: rgb_formatHex$1,
	  // Deprecated! Use color.formatHex.
	  formatHex: rgb_formatHex$1,
	  formatRgb: rgb_formatRgb$1,
	  toString: rgb_formatRgb$1
	}));
	function rgb_formatHex$1() {
	  return "#" + hex$1(this.r) + hex$1(this.g) + hex$1(this.b);
	}
	function rgb_formatRgb$1() {
	  var a = this.opacity;
	  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
	}
	function hex$1(value) {
	  value = Math.max(0, Math.min(255, Math.round(value) || 0));
	  return (value < 16 ? "0" : "") + value.toString(16);
	}
	function hsla$1(h, s, l, a) {
	  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
	  return new Hsl$1(h, s, l, a);
	}
	function hslConvert$1(o) {
	  if (o instanceof Hsl$1) return new Hsl$1(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Color$1)) o = color$1(o);
	  if (!o) return new Hsl$1();
	  if (o instanceof Hsl$1) return o;
	  o = o.rgb();
	  var r = o.r / 255,
	    g = o.g / 255,
	    b = o.b / 255,
	    min = Math.min(r, g, b),
	    max = Math.max(r, g, b),
	    h = NaN,
	    s = max - min,
	    l = (max + min) / 2;
	  if (s) {
	    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
	    s /= l < 0.5 ? max + min : 2 - max - min;
	    h *= 60;
	  } else {
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new Hsl$1(h, s, l, o.opacity);
	}
	function hsl$1(h, s, l, opacity) {
	  return arguments.length === 1 ? hslConvert$1(h) : new Hsl$1(h, s, l, opacity == null ? 1 : opacity);
	}
	function Hsl$1(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	define$1(Hsl$1, hsl$1, extend$1(Color$1, {
	  brighter: function (k) {
	    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
	    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function (k) {
	    k = k == null ? darker$1 : Math.pow(darker$1, k);
	    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function () {
	    var h = this.h % 360 + (this.h < 0) * 360,
	      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	      l = this.l,
	      m2 = l + (l < 0.5 ? l : 1 - l) * s,
	      m1 = 2 * l - m2;
	    return new Rgb$1(hsl2rgb$1(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb$1(h, m1, m2), hsl2rgb$1(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
	  },
	  displayable: function () {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	  },
	  formatHsl: function () {
	    var a = this.opacity;
	    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
	  }
	}));

	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb$1(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
	}

	const radians$1 = Math.PI / 180;
	const degrees$3 = 180 / Math.PI;

	// https://observablehq.com/@mbostock/lab-and-rgb
	const K$2 = 18,
	  Xn$1 = 0.96422,
	  Yn$1 = 1,
	  Zn$1 = 0.82521,
	  t0$2 = 4 / 29,
	  t1$2 = 6 / 29,
	  t2$1 = 3 * t1$2 * t1$2,
	  t3$1 = t1$2 * t1$2 * t1$2;
	function labConvert$1(o) {
	  if (o instanceof Lab$1) return new Lab$1(o.l, o.a, o.b, o.opacity);
	  if (o instanceof Hcl$1) return hcl2lab$1(o);
	  if (!(o instanceof Rgb$1)) o = rgbConvert$1(o);
	  var r = rgb2lrgb$1(o.r),
	    g = rgb2lrgb$1(o.g),
	    b = rgb2lrgb$1(o.b),
	    y = xyz2lab$1((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn$1),
	    x,
	    z;
	  if (r === g && g === b) x = z = y;else {
	    x = xyz2lab$1((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn$1);
	    z = xyz2lab$1((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn$1);
	  }
	  return new Lab$1(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	}
	function lab$1(l, a, b, opacity) {
	  return arguments.length === 1 ? labConvert$1(l) : new Lab$1(l, a, b, opacity == null ? 1 : opacity);
	}
	function Lab$1(l, a, b, opacity) {
	  this.l = +l;
	  this.a = +a;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	define$1(Lab$1, lab$1, extend$1(Color$1, {
	  brighter: function (k) {
	    return new Lab$1(this.l + K$2 * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  darker: function (k) {
	    return new Lab$1(this.l - K$2 * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  rgb: function () {
	    var y = (this.l + 16) / 116,
	      x = isNaN(this.a) ? y : y + this.a / 500,
	      z = isNaN(this.b) ? y : y - this.b / 200;
	    x = Xn$1 * lab2xyz$1(x);
	    y = Yn$1 * lab2xyz$1(y);
	    z = Zn$1 * lab2xyz$1(z);
	    return new Rgb$1(lrgb2rgb$1(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb$1(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb$1(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
	  }
	}));
	function xyz2lab$1(t) {
	  return t > t3$1 ? Math.pow(t, 1 / 3) : t / t2$1 + t0$2;
	}
	function lab2xyz$1(t) {
	  return t > t1$2 ? t * t * t : t2$1 * (t - t0$2);
	}
	function lrgb2rgb$1(x) {
	  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	}
	function rgb2lrgb$1(x) {
	  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	}
	function hclConvert$1(o) {
	  if (o instanceof Hcl$1) return new Hcl$1(o.h, o.c, o.l, o.opacity);
	  if (!(o instanceof Lab$1)) o = labConvert$1(o);
	  if (o.a === 0 && o.b === 0) return new Hcl$1(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
	  var h = Math.atan2(o.b, o.a) * degrees$3;
	  return new Hcl$1(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	}
	function hcl$1(h, c, l, opacity) {
	  return arguments.length === 1 ? hclConvert$1(h) : new Hcl$1(h, c, l, opacity == null ? 1 : opacity);
	}
	function Hcl$1(h, c, l, opacity) {
	  this.h = +h;
	  this.c = +c;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	function hcl2lab$1(o) {
	  if (isNaN(o.h)) return new Lab$1(o.l, 0, 0, o.opacity);
	  var h = o.h * radians$1;
	  return new Lab$1(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	}
	define$1(Hcl$1, hcl$1, extend$1(Color$1, {
	  brighter: function (k) {
	    return new Hcl$1(this.h, this.c, this.l + K$2 * (k == null ? 1 : k), this.opacity);
	  },
	  darker: function (k) {
	    return new Hcl$1(this.h, this.c, this.l - K$2 * (k == null ? 1 : k), this.opacity);
	  },
	  rgb: function () {
	    return hcl2lab$1(this).rgb();
	  }
	}));

	var A$3 = -0.14861,
	  B$2 = +1.78277,
	  C$2 = -0.29227,
	  D$2 = -0.90649,
	  E$2 = +1.97294,
	  ED$1 = E$2 * D$2,
	  EB$1 = E$2 * B$2,
	  BC_DA$1 = B$2 * C$2 - D$2 * A$3;
	function cubehelixConvert$1(o) {
	  if (o instanceof Cubehelix$1) return new Cubehelix$1(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Rgb$1)) o = rgbConvert$1(o);
	  var r = o.r / 255,
	    g = o.g / 255,
	    b = o.b / 255,
	    l = (BC_DA$1 * b + ED$1 * r - EB$1 * g) / (BC_DA$1 + ED$1 - EB$1),
	    bl = b - l,
	    k = (E$2 * (g - l) - C$2 * bl) / D$2,
	    s = Math.sqrt(k * k + bl * bl) / (E$2 * l * (1 - l)),
	    // NaN if l=0 or l=1
	    h = s ? Math.atan2(k, bl) * degrees$3 - 120 : NaN;
	  return new Cubehelix$1(h < 0 ? h + 360 : h, s, l, o.opacity);
	}
	function cubehelix$3(h, s, l, opacity) {
	  return arguments.length === 1 ? cubehelixConvert$1(h) : new Cubehelix$1(h, s, l, opacity == null ? 1 : opacity);
	}
	function Cubehelix$1(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	define$1(Cubehelix$1, cubehelix$3, extend$1(Color$1, {
	  brighter: function (k) {
	    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
	    return new Cubehelix$1(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function (k) {
	    k = k == null ? darker$1 : Math.pow(darker$1, k);
	    return new Cubehelix$1(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function () {
	    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians$1,
	      l = +this.l,
	      a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	      cosh = Math.cos(h),
	      sinh = Math.sin(h);
	    return new Rgb$1(255 * (l + a * (A$3 * cosh + B$2 * sinh)), 255 * (l + a * (C$2 * cosh + D$2 * sinh)), 255 * (l + a * (E$2 * cosh)), this.opacity);
	  }
	}));

	function basis(t1, v0, v1, v2, v3) {
	  var t2 = t1 * t1,
	    t3 = t2 * t1;
	  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
	}
	function basis$1 (values) {
	  var n = values.length - 1;
	  return function (t) {
	    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	      v1 = values[i],
	      v2 = values[i + 1],
	      v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	      v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	    return basis((t - i / n) * n, v0, v1, v2, v3);
	  };
	}

	var constant$4 = (x => () => x);

	function linear$1(a, d) {
	  return function (t) {
	    return a + t * d;
	  };
	}
	function exponential$1(a, b, y) {
	  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
	    return Math.pow(a + t * b, y);
	  };
	}
	function hue$1(a, b) {
	  var d = b - a;
	  return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$4(isNaN(a) ? b : a);
	}
	function gamma$2(y) {
	  return (y = +y) === 1 ? nogamma$1 : function (a, b) {
	    return b - a ? exponential$1(a, b, y) : constant$4(isNaN(a) ? b : a);
	  };
	}
	function nogamma$1(a, b) {
	  var d = b - a;
	  return d ? linear$1(a, d) : constant$4(isNaN(a) ? b : a);
	}

	var interpolateRgb$1 = (function rgbGamma(y) {
	  var color = gamma$2(y);
	  function rgb(start, end) {
	    var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
	      g = color(start.g, end.g),
	      b = color(start.b, end.b),
	      opacity = nogamma$1(start.opacity, end.opacity);
	    return function (t) {
	      start.r = r(t);
	      start.g = g(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	  rgb.gamma = rgbGamma;
	  return rgb;
	})(1);
	function rgbSpline(spline) {
	  return function (colors) {
	    var n = colors.length,
	      r = new Array(n),
	      g = new Array(n),
	      b = new Array(n),
	      i,
	      color;
	    for (i = 0; i < n; ++i) {
	      color = rgb$1(colors[i]);
	      r[i] = color.r || 0;
	      g[i] = color.g || 0;
	      b[i] = color.b || 0;
	    }
	    r = spline(r);
	    g = spline(g);
	    b = spline(b);
	    color.opacity = 1;
	    return function (t) {
	      color.r = r(t);
	      color.g = g(t);
	      color.b = b(t);
	      return color + "";
	    };
	  };
	}
	var rgbBasis = rgbSpline(basis$1);

	function interpolateNumber$1 (a, b) {
	  return a = +a, b = +b, function (t) {
	    return a * (1 - t) + b * t;
	  };
	}

	var reA$1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	  reB$1 = new RegExp(reA$1.source, "g");
	function zero$2(b) {
	  return function () {
	    return b;
	  };
	}
	function one$1(b) {
	  return function (t) {
	    return b(t) + "";
	  };
	}
	function interpolateString$1 (a, b) {
	  var bi = reA$1.lastIndex = reB$1.lastIndex = 0,
	    // scan index for next number in b
	    am,
	    // current match in a
	    bm,
	    // current match in b
	    bs,
	    // string preceding current number in b, if any
	    i = -1,
	    // index in s
	    s = [],
	    // string constants and placeholders
	    q = []; // number interpolators

	  // Coerce inputs to strings.
	  a = a + "", b = b + "";

	  // Interpolate pairs of numbers in a & b.
	  while ((am = reA$1.exec(a)) && (bm = reB$1.exec(b))) {
	    if ((bs = bm.index) > bi) {
	      // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) {
	      // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else {
	      // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({
	        i: i,
	        x: interpolateNumber$1(am, bm)
	      });
	    }
	    bi = reB$1.lastIndex;
	  }

	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }

	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2 ? q[0] ? one$1(q[0].x) : zero$2(b) : (b = q.length, function (t) {
	    for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	    return s.join("");
	  });
	}

	var degrees$2 = 180 / Math.PI;
	var identity$2 = {
	  translateX: 0,
	  translateY: 0,
	  rotate: 0,
	  skewX: 0,
	  scaleX: 1,
	  scaleY: 1
	};
	function decompose$1 (a, b, c, d, e, f) {
	  var scaleX, scaleY, skewX;
	  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	  return {
	    translateX: e,
	    translateY: f,
	    rotate: Math.atan2(b, a) * degrees$2,
	    skewX: Math.atan(skewX) * degrees$2,
	    scaleX: scaleX,
	    scaleY: scaleY
	  };
	}

	var svgNode$1;

	/* eslint-disable no-undef */
	function parseCss$1(value) {
	  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
	  return m.isIdentity ? identity$2 : decompose$1(m.a, m.b, m.c, m.d, m.e, m.f);
	}
	function parseSvg$1(value) {
	  if (value == null) return identity$2;
	  if (!svgNode$1) svgNode$1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
	  svgNode$1.setAttribute("transform", value);
	  if (!(value = svgNode$1.transform.baseVal.consolidate())) return identity$2;
	  value = value.matrix;
	  return decompose$1(value.a, value.b, value.c, value.d, value.e, value.f);
	}

	function interpolateTransform$1(parse, pxComma, pxParen, degParen) {
	  function pop(s) {
	    return s.length ? s.pop() + " " : "";
	  }
	  function translate(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push("translate(", null, pxComma, null, pxParen);
	      q.push({
	        i: i - 4,
	        x: interpolateNumber$1(xa, xb)
	      }, {
	        i: i - 2,
	        x: interpolateNumber$1(ya, yb)
	      });
	    } else if (xb || yb) {
	      s.push("translate(" + xb + pxComma + yb + pxParen);
	    }
	  }
	  function rotate(a, b, s, q) {
	    if (a !== b) {
	      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
	      q.push({
	        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
	        x: interpolateNumber$1(a, b)
	      });
	    } else if (b) {
	      s.push(pop(s) + "rotate(" + b + degParen);
	    }
	  }
	  function skewX(a, b, s, q) {
	    if (a !== b) {
	      q.push({
	        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
	        x: interpolateNumber$1(a, b)
	      });
	    } else if (b) {
	      s.push(pop(s) + "skewX(" + b + degParen);
	    }
	  }
	  function scale(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: interpolateNumber$1(xa, xb)
	      }, {
	        i: i - 2,
	        x: interpolateNumber$1(ya, yb)
	      });
	    } else if (xb !== 1 || yb !== 1) {
	      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	    }
	  }
	  return function (a, b) {
	    var s = [],
	      // string constants and placeholders
	      q = []; // number interpolators
	    a = parse(a), b = parse(b);
	    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skewX(a.skewX, b.skewX, s, q);
	    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	    a = b = null; // gc
	    return function (t) {
	      var i = -1,
	        n = q.length,
	        o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  };
	}
	var interpolateTransformCss$1 = interpolateTransform$1(parseCss$1, "px, ", "px)", "deg)");
	var interpolateTransformSvg$1 = interpolateTransform$1(parseSvg$1, ", ", ")", ")");

	var epsilon2$1 = 1e-12;
	function cosh$1(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}
	function sinh$1(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}
	function tanh$1(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}
	((function zoomRho(rho, rho2, rho4) {
	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0],
	      uy0 = p0[1],
	      w0 = p0[2],
	      ux1 = p1[0],
	      uy1 = p1[1],
	      w1 = p1[2],
	      dx = ux1 - ux0,
	      dy = uy1 - uy0,
	      d2 = dx * dx + dy * dy,
	      i,
	      S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2$1) {
	      S = Math.log(w1 / w0) / rho;
	      i = function (t) {
	        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
	      };
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function (t) {
	        var s = t * S,
	          coshr0 = cosh$1(r0),
	          u = w0 / (rho2 * d1) * (coshr0 * tanh$1(rho * s + r0) - sinh$1(r0));
	        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh$1(rho * s + r0)];
	      };
	    }
	    i.duration = S * 1000 * rho / Math.SQRT2;
	    return i;
	  }
	  zoom.rho = function (_) {
	    var _1 = Math.max(1e-3, +_),
	      _2 = _1 * _1,
	      _4 = _2 * _2;
	    return zoomRho(_1, _2, _4);
	  };
	  return zoom;
	}))(Math.SQRT2, 2, 4);

	function cubehelix$2(hue) {
	  return function cubehelixGamma(y) {
	    y = +y;
	    function cubehelix(start, end) {
	      var h = hue((start = cubehelix$3(start)).h, (end = cubehelix$3(end)).h),
	        s = nogamma$1(start.s, end.s),
	        l = nogamma$1(start.l, end.l),
	        opacity = nogamma$1(start.opacity, end.opacity);
	      return function (t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	    cubehelix.gamma = cubehelixGamma;
	    return cubehelix;
	  }(1);
	}
	cubehelix$2(hue$1);
	var cubehelixLong = cubehelix$2(nogamma$1);

	var frame = 0,
	  // is an animation frame pending?
	  timeout$1 = 0,
	  // is a timeout pending?
	  interval = 0,
	  // are any timers active?
	  pokeDelay = 1000,
	  // how frequently we check for clock skew
	  taskHead,
	  taskTail,
	  clockLast = 0,
	  clockNow = 0,
	  clockSkew = 0,
	  clock = typeof performance === "object" && performance.now ? performance : Date,
	  setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
	    setTimeout(f, 17);
	  };
	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}
	function clearNow() {
	  clockNow = 0;
	}
	function Timer() {
	  this._call = this._time = this._next = null;
	}
	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function (callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function () {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};
	function timer(callback, delay, time) {
	  var t = new Timer();
	  t.restart(callback, delay, time);
	  return t;
	}
	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead,
	    e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
	    t = t._next;
	  }
	  --frame;
	}
	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  frame = timeout$1 = 0;
	  try {
	    timerFlush();
	  } finally {
	    frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}
	function poke() {
	  var now = clock.now(),
	    delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}
	function nap() {
	  var t0,
	    t1 = taskHead,
	    t2,
	    time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}
	function sleep(time) {
	  if (frame) return; // Soonest alarm already set, or will be.
	  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
	  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
	  if (delay > 24) {
	    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
	    frame = 1, setFrame(wake);
	  }
	}

	function timeout (callback, delay, time) {
	  var t = new Timer();
	  delay = delay == null ? 0 : +delay;
	  t.restart(elapsed => {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	}

	var emptyOn$2 = dispatch$1("start", "end", "cancel", "interrupt");
	var emptyTween$2 = [];
	var CREATED$2 = 0;
	var SCHEDULED$2 = 1;
	var STARTING$2 = 2;
	var STARTED$2 = 3;
	var RUNNING$2 = 4;
	var ENDING$2 = 5;
	var ENDED$2 = 6;
	function schedule$2 (node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};else if (id in schedules) return;
	  create$2(node, id, {
	    name: name,
	    index: index,
	    // For context during callback.
	    group: group,
	    // For context during callback.
	    on: emptyOn$2,
	    tween: emptyTween$2,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED$2
	  });
	}
	function init$2(node, id) {
	  var schedule = get$3(node, id);
	  if (schedule.state > CREATED$2) throw new Error("too late; already scheduled");
	  return schedule;
	}
	function set$3(node, id) {
	  var schedule = get$3(node, id);
	  if (schedule.state > STARTED$2) throw new Error("too late; already running");
	  return schedule;
	}
	function get$3(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	  return schedule;
	}
	function create$2(node, id, self) {
	  var schedules = node.__transition,
	    tween;

	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = timer(schedule, 0, self.time);
	  function schedule(elapsed) {
	    self.state = SCHEDULED$2;
	    self.timer.restart(start, self.delay, self.time);

	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }
	  function start(elapsed) {
	    var i, j, n, o;

	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED$2) return stop();
	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;

	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED$2) return timeout(start);

	      // Interrupt the active transition, if any.
	      if (o.state === RUNNING$2) {
	        o.state = ENDED$2;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }

	      // Cancel any pre-empted transitions.
	      else if (+i < id) {
	        o.state = ENDED$2;
	        o.timer.stop();
	        o.on.call("cancel", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	    }

	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    timeout(function () {
	      if (self.state === STARTED$2) {
	        self.state = RUNNING$2;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });

	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING$2;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING$2) return; // interrupted
	    self.state = STARTED$2;

	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }
	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING$2, 1),
	      i = -1,
	      n = tween.length;
	    while (++i < n) {
	      tween[i].call(node, t);
	    }

	    // Dispatch the end event.
	    if (self.state === ENDING$2) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }
	  function stop() {
	    self.state = ENDED$2;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) return; // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}

	function interrupt$2 (node, name) {
	  var schedules = node.__transition,
	    schedule,
	    active,
	    empty = true,
	    i;
	  if (!schedules) return;
	  name = name == null ? null : name + "";
	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) {
	      empty = false;
	      continue;
	    }
	    active = schedule.state > STARTING$2 && schedule.state < ENDING$2;
	    schedule.state = ENDED$2;
	    schedule.timer.stop();
	    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }
	  if (empty) delete node.__transition;
	}

	function selection_interrupt$2 (name) {
	  return this.each(function () {
	    interrupt$2(this, name);
	  });
	}

	function tweenRemove$2(id, name) {
	  var tween0, tween1;
	  return function () {
	    var schedule = set$3(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }
	    schedule.tween = tween1;
	  };
	}
	function tweenFunction$2(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    var schedule = set$3(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = {
	          name: name,
	          value: value
	        }, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }
	    schedule.tween = tween1;
	  };
	}
	function transition_tween$2 (name, value) {
	  var id = this._id;
	  name += "";
	  if (arguments.length < 2) {
	    var tween = get$3(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }
	  return this.each((value == null ? tweenRemove$2 : tweenFunction$2)(id, name, value));
	}
	function tweenValue$2(transition, name, value) {
	  var id = transition._id;
	  transition.each(function () {
	    var schedule = set$3(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });
	  return function (node) {
	    return get$3(node, id).value[name];
	  };
	}

	function interpolate$2 (a, b) {
	  var c;
	  return (typeof b === "number" ? interpolateNumber$1 : b instanceof color$1 ? interpolateRgb$1 : (c = color$1(b)) ? (b = c, interpolateRgb$1) : interpolateString$1)(a, b);
	}

	function attrRemove$4(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS$4(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant$4(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttribute(name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrConstantNS$4(fullname, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttributeNS(fullname.space, fullname.local);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrFunction$4(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttribute(name);
	    string0 = this.getAttribute(name);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function attrFunctionNS$4(fullname, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    string0 = this.getAttributeNS(fullname.space, fullname.local);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function transition_attr$2 (name, value) {
	  var fullname = namespace$2(name),
	    i = fullname === "transform" ? interpolateTransformSvg$1 : interpolate$2;
	  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$4 : attrFunction$4)(fullname, i, tweenValue$2(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$4 : attrRemove$4)(fullname) : (fullname.local ? attrConstantNS$4 : attrConstant$4)(fullname, i, value));
	}

	function attrInterpolate$2(name, i) {
	  return function (t) {
	    this.setAttribute(name, i.call(this, t));
	  };
	}
	function attrInterpolateNS$2(fullname, i) {
	  return function (t) {
	    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	  };
	}
	function attrTweenNS$2(fullname, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS$2(fullname, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function attrTween$2(name, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolate$2(name, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_attrTween$2 (name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  var fullname = namespace$2(name);
	  return this.tween(key, (fullname.local ? attrTweenNS$2 : attrTween$2)(fullname, value));
	}

	function delayFunction$2(id, value) {
	  return function () {
	    init$2(this, id).delay = +value.apply(this, arguments);
	  };
	}
	function delayConstant$2(id, value) {
	  return value = +value, function () {
	    init$2(this, id).delay = value;
	  };
	}
	function transition_delay$2 (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? delayFunction$2 : delayConstant$2)(id, value)) : get$3(this.node(), id).delay;
	}

	function durationFunction$2(id, value) {
	  return function () {
	    set$3(this, id).duration = +value.apply(this, arguments);
	  };
	}
	function durationConstant$2(id, value) {
	  return value = +value, function () {
	    set$3(this, id).duration = value;
	  };
	}
	function transition_duration$2 (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? durationFunction$2 : durationConstant$2)(id, value)) : get$3(this.node(), id).duration;
	}

	function easeConstant$2(id, value) {
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    set$3(this, id).ease = value;
	  };
	}
	function transition_ease$2 (value) {
	  var id = this._id;
	  return arguments.length ? this.each(easeConstant$2(id, value)) : get$3(this.node(), id).ease;
	}

	function easeVarying$2(id, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (typeof v !== "function") throw new Error();
	    set$3(this, id).ease = v;
	  };
	}
	function transition_easeVarying$2 (value) {
	  if (typeof value !== "function") throw new Error();
	  return this.each(easeVarying$2(this._id, value));
	}

	function transition_filter$2 (match) {
	  if (typeof match !== "function") match = matcher$2(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Transition$2(subgroups, this._parents, this._name, this._id);
	}

	function transition_merge$2 (transition) {
	  if (transition._id !== this._id) throw new Error();
	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Transition$2(merges, this._parents, this._name, this._id);
	}

	function start$2(name) {
	  return (name + "").trim().split(/^|\s+/).every(function (t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}
	function onFunction$2(id, name, listener) {
	  var on0,
	    on1,
	    sit = start$2(name) ? init$2 : set$3;
	  return function () {
	    var schedule = sit(this, id),
	      on = schedule.on;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	    schedule.on = on1;
	  };
	}
	function transition_on$2 (name, listener) {
	  var id = this._id;
	  return arguments.length < 2 ? get$3(this.node(), id).on.on(name) : this.each(onFunction$2(id, name, listener));
	}

	function removeFunction$2(id) {
	  return function () {
	    var parent = this.parentNode;
	    for (var i in this.__transition) if (+i !== id) return;
	    if (parent) parent.removeChild(this);
	  };
	}
	function transition_remove$2 () {
	  return this.on("end.remove", removeFunction$2(this._id));
	}

	function transition_select$2 (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selector$2(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        schedule$2(subgroup[i], name, id, i, subgroup, get$3(node, id));
	      }
	    }
	  }
	  return new Transition$2(subgroups, this._parents, name, id);
	}

	function transition_selectAll$2 (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selectorAll$2(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$3(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            schedule$2(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }
	  return new Transition$2(subgroups, parents, name, id);
	}

	var Selection$4 = selection$2.prototype.constructor;
	function transition_selection$2 () {
	  return new Selection$4(this._groups, this._parents);
	}

	function styleNull$2(name, interpolate) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue$2(this, name),
	      string1 = (this.style.removeProperty(name), styleValue$2(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	  };
	}
	function styleRemove$4(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant$4(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = styleValue$2(this, name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function styleFunction$4(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue$2(this, name),
	      value1 = value(this),
	      string1 = value1 + "";
	    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue$2(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function styleMaybeRemove$2(id, name) {
	  var on0,
	    on1,
	    listener0,
	    key = "style." + name,
	    event = "end." + key,
	    remove;
	  return function () {
	    var schedule = set$3(this, id),
	      on = schedule.on,
	      listener = schedule.value[key] == null ? remove || (remove = styleRemove$4(name)) : undefined;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
	    schedule.on = on1;
	  };
	}
	function transition_style$2 (name, value, priority) {
	  var i = (name += "") === "transform" ? interpolateTransformCss$1 : interpolate$2;
	  return value == null ? this.styleTween(name, styleNull$2(name, i)).on("end.style." + name, styleRemove$4(name)) : typeof value === "function" ? this.styleTween(name, styleFunction$4(name, i, tweenValue$2(this, "style." + name, value))).each(styleMaybeRemove$2(this._id, name)) : this.styleTween(name, styleConstant$4(name, i, value), priority).on("end.style." + name, null);
	}

	function styleInterpolate$2(name, i, priority) {
	  return function (t) {
	    this.style.setProperty(name, i.call(this, t), priority);
	  };
	}
	function styleTween$2(name, value, priority) {
	  var t, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t = (i0 = i) && styleInterpolate$2(name, i, priority);
	    return t;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_styleTween$2 (name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, styleTween$2(name, value, priority == null ? "" : priority));
	}

	function textConstant$4(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction$4(value) {
	  return function () {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}
	function transition_text$2 (value) {
	  return this.tween("text", typeof value === "function" ? textFunction$4(tweenValue$2(this, "text", value)) : textConstant$4(value == null ? "" : value + ""));
	}

	function textInterpolate$2(i) {
	  return function (t) {
	    this.textContent = i.call(this, t);
	  };
	}
	function textTween$2(value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && textInterpolate$2(i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_textTween$2 (value) {
	  var key = "text";
	  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, textTween$2(value));
	}

	function transition_transition$2 () {
	  var name = this._name,
	    id0 = this._id,
	    id1 = newId$2();
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = get$3(node, id0);
	        schedule$2(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }
	  return new Transition$2(groups, this._parents, name, id1);
	}

	function transition_end$2 () {
	  var on0,
	    on1,
	    that = this,
	    id = that._id,
	    size = that.size();
	  return new Promise(function (resolve, reject) {
	    var cancel = {
	        value: reject
	      },
	      end = {
	        value: function () {
	          if (--size === 0) resolve();
	        }
	      };
	    that.each(function () {
	      var schedule = set$3(this, id),
	        on = schedule.on;

	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) {
	        on1 = (on0 = on).copy();
	        on1._.cancel.push(cancel);
	        on1._.interrupt.push(cancel);
	        on1._.end.push(end);
	      }
	      schedule.on = on1;
	    });

	    // The selection was empty, resolve end immediately
	    if (size === 0) resolve();
	  });
	}

	var id$2 = 0;
	function Transition$2(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}
	function newId$2() {
	  return ++id$2;
	}
	var selection_prototype$2 = selection$2.prototype;
	Transition$2.prototype = {
	  constructor: Transition$2,
	  select: transition_select$2,
	  selectAll: transition_selectAll$2,
	  selectChild: selection_prototype$2.selectChild,
	  selectChildren: selection_prototype$2.selectChildren,
	  filter: transition_filter$2,
	  merge: transition_merge$2,
	  selection: transition_selection$2,
	  transition: transition_transition$2,
	  call: selection_prototype$2.call,
	  nodes: selection_prototype$2.nodes,
	  node: selection_prototype$2.node,
	  size: selection_prototype$2.size,
	  empty: selection_prototype$2.empty,
	  each: selection_prototype$2.each,
	  on: transition_on$2,
	  attr: transition_attr$2,
	  attrTween: transition_attrTween$2,
	  style: transition_style$2,
	  styleTween: transition_styleTween$2,
	  text: transition_text$2,
	  textTween: transition_textTween$2,
	  remove: transition_remove$2,
	  tween: transition_tween$2,
	  delay: transition_delay$2,
	  duration: transition_duration$2,
	  ease: transition_ease$2,
	  easeVarying: transition_easeVarying$2,
	  end: transition_end$2,
	  [Symbol.iterator]: selection_prototype$2[Symbol.iterator]
	};

	function cubicInOut(t) {
	  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	}

	var exponent$1 = 3;
	(function custom(e) {
	  e = +e;
	  function polyIn(t) {
	    return Math.pow(t, e);
	  }
	  polyIn.exponent = custom;
	  return polyIn;
	})(exponent$1);
	(function custom(e) {
	  e = +e;
	  function polyOut(t) {
	    return 1 - Math.pow(1 - t, e);
	  }
	  polyOut.exponent = custom;
	  return polyOut;
	})(exponent$1);
	(function custom(e) {
	  e = +e;
	  function polyInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	  }
	  polyInOut.exponent = custom;
	  return polyInOut;
	})(exponent$1);

	// tpmt is two power minus ten times t scaled to [0,1]
	function tpmt(x) {
	  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
	}

	var overshoot = 1.70158;
	(function custom(s) {
	  s = +s;
	  function backIn(t) {
	    return (t = +t) * t * (s * (t - 1) + t);
	  }
	  backIn.overshoot = custom;
	  return backIn;
	})(overshoot);
	(function custom(s) {
	  s = +s;
	  function backOut(t) {
	    return --t * t * ((t + 1) * s + t) + 1;
	  }
	  backOut.overshoot = custom;
	  return backOut;
	})(overshoot);
	(function custom(s) {
	  s = +s;
	  function backInOut(t) {
	    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	  }
	  backInOut.overshoot = custom;
	  return backInOut;
	})(overshoot);

	var tau$2 = 2 * Math.PI,
	  amplitude = 1,
	  period = 0.3;
	(function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);
	  function elasticIn(t) {
	    return a * tpmt(- --t) * Math.sin((s - t) / p);
	  }
	  elasticIn.amplitude = function (a) {
	    return custom(a, p * tau$2);
	  };
	  elasticIn.period = function (p) {
	    return custom(a, p);
	  };
	  return elasticIn;
	})(amplitude, period);
	(function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);
	  function elasticOut(t) {
	    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
	  }
	  elasticOut.amplitude = function (a) {
	    return custom(a, p * tau$2);
	  };
	  elasticOut.period = function (p) {
	    return custom(a, p);
	  };
	  return elasticOut;
	})(amplitude, period);
	(function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$2);
	  function elasticInOut(t) {
	    return ((t = t * 2 - 1) < 0 ? a * tpmt(-t) * Math.sin((s - t) / p) : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
	  }
	  elasticInOut.amplitude = function (a) {
	    return custom(a, p * tau$2);
	  };
	  elasticInOut.period = function (p) {
	    return custom(a, p);
	  };
	  return elasticInOut;
	})(amplitude, period);

	var defaultTiming$2 = {
	  time: null,
	  // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: cubicInOut
	};
	function inherit$2(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      throw new Error(`transition ${id} not found`);
	    }
	  }
	  return timing;
	}
	function selection_transition$2 (name) {
	  var id, timing;
	  if (name instanceof Transition$2) {
	    id = name._id, name = name._name;
	  } else {
	    id = newId$2(), (timing = defaultTiming$2).time = now(), name = name == null ? null : name + "";
	  }
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        schedule$2(node, name, id, i, group, timing || inherit$2(node, id));
	      }
	    }
	  }
	  return new Transition$2(groups, this._parents, name, id);
	}

	selection$2.prototype.interrupt = selection_interrupt$2;
	selection$2.prototype.transition = selection_transition$2;

	const pi$1 = Math.PI,
	  tau$1 = 2 * pi$1,
	  epsilon$1 = 1e-6,
	  tauEpsilon = tau$1 - epsilon$1;
	function append(strings) {
	  this._ += strings[0];
	  for (let i = 1, n = strings.length; i < n; ++i) {
	    this._ += arguments[i] + strings[i];
	  }
	}
	function appendRound(digits) {
	  let d = Math.floor(digits);
	  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
	  if (d > 15) return append;
	  const k = 10 ** d;
	  return function (strings) {
	    this._ += strings[0];
	    for (let i = 1, n = strings.length; i < n; ++i) {
	      this._ += Math.round(arguments[i] * k) / k + strings[i];
	    }
	  };
	}
	class Path {
	  constructor(digits) {
	    this._x0 = this._y0 =
	    // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = "";
	    this._append = digits == null ? append : appendRound(digits);
	  }
	  moveTo(x, y) {
	    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
	  }
	  closePath() {
	    if (this._x1 !== null) {
	      this._x1 = this._x0, this._y1 = this._y0;
	      this._append`Z`;
	    }
	  }
	  lineTo(x, y) {
	    this._append`L${this._x1 = +x},${this._y1 = +y}`;
	  }
	  quadraticCurveTo(x1, y1, x, y) {
	    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
	  }
	  bezierCurveTo(x1, y1, x2, y2, x, y) {
	    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
	  }
	  arcTo(x1, y1, x2, y2, r) {
	    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

	    // Is the radius negative? Error.
	    if (r < 0) throw new Error(`negative radius: ${r}`);
	    let x0 = this._x1,
	      y0 = this._y1,
	      x21 = x2 - x1,
	      y21 = y2 - y1,
	      x01 = x0 - x1,
	      y01 = y0 - y1,
	      l01_2 = x01 * x01 + y01 * y01;

	    // Is this path empty? Move to (x1,y1).
	    if (this._x1 === null) {
	      this._append`M${this._x1 = x1},${this._y1 = y1}`;
	    }

	    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	    else if (!(l01_2 > epsilon$1)) ;

	    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	    // Equivalently, is (x1,y1) coincident with (x2,y2)?
	    // Or, is the radius zero? Line to (x1,y1).
	    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
	      this._append`L${this._x1 = x1},${this._y1 = y1}`;
	    }

	    // Otherwise, draw an arc!
	    else {
	      let x20 = x2 - x0,
	        y20 = y2 - y0,
	        l21_2 = x21 * x21 + y21 * y21,
	        l20_2 = x20 * x20 + y20 * y20,
	        l21 = Math.sqrt(l21_2),
	        l01 = Math.sqrt(l01_2),
	        l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	        t01 = l / l01,
	        t21 = l / l21;

	      // If the start tangent is not coincident with (x0,y0), line to.
	      if (Math.abs(t01 - 1) > epsilon$1) {
	        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
	      }
	      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
	    }
	  }
	  arc(x, y, r, a0, a1, ccw) {
	    x = +x, y = +y, r = +r, ccw = !!ccw;

	    // Is the radius negative? Error.
	    if (r < 0) throw new Error(`negative radius: ${r}`);
	    let dx = r * Math.cos(a0),
	      dy = r * Math.sin(a0),
	      x0 = x + dx,
	      y0 = y + dy,
	      cw = 1 ^ ccw,
	      da = ccw ? a0 - a1 : a1 - a0;

	    // Is this path empty? Move to (x0,y0).
	    if (this._x1 === null) {
	      this._append`M${x0},${y0}`;
	    }

	    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
	      this._append`L${x0},${y0}`;
	    }

	    // Is this arc empty? We’re done.
	    if (!r) return;

	    // Does the angle go the wrong way? Flip the direction.
	    if (da < 0) da = da % tau$1 + tau$1;

	    // Is this a complete circle? Draw two arcs to complete the circle.
	    if (da > tauEpsilon) {
	      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
	    }

	    // Is this arc non-empty? Draw an arc!
	    else if (da > epsilon$1) {
	      this._append`A${r},${r},0,${+(da >= pi$1)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
	    }
	  }
	  rect(x, y, w, h) {
	    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
	  }
	  toString() {
	    return this._;
	  }
	}

	function define (constructor, factory, prototype) {
	  constructor.prototype = factory.prototype = prototype;
	  prototype.constructor = constructor;
	}
	function extend(parent, definition) {
	  var prototype = Object.create(parent.prototype);
	  for (var key in definition) prototype[key] = definition[key];
	  return prototype;
	}

	function Color() {}
	var darker = 0.7;
	var brighter = 1 / darker;
	var reI = "\\s*([+-]?\\d+)\\s*",
	  reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	  reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	  reHex = /^#([0-9a-f]{3,8})$/,
	  reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
	  reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
	  reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
	  reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
	  reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
	  reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
	var named = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};
	define(Color, color, {
	  copy(channels) {
	    return Object.assign(new this.constructor(), this, channels);
	  },
	  displayable() {
	    return this.rgb().displayable();
	  },
	  hex: color_formatHex,
	  // Deprecated! Use color.formatHex.
	  formatHex: color_formatHex,
	  formatHex8: color_formatHex8,
	  formatHsl: color_formatHsl,
	  formatRgb: color_formatRgb,
	  toString: color_formatRgb
	});
	function color_formatHex() {
	  return this.rgb().formatHex();
	}
	function color_formatHex8() {
	  return this.rgb().formatHex8();
	}
	function color_formatHsl() {
	  return hslConvert(this).formatHsl();
	}
	function color_formatRgb() {
	  return this.rgb().formatRgb();
	}
	function color(format) {
	  var m, l;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
	  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
	  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
	  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
	  : null // invalid hex
	  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
	  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
	}
	function rgbn(n) {
	  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	}
	function rgba(r, g, b, a) {
	  if (a <= 0) r = g = b = NaN;
	  return new Rgb(r, g, b, a);
	}
	function rgbConvert(o) {
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Rgb();
	  o = o.rgb();
	  return new Rgb(o.r, o.g, o.b, o.opacity);
	}
	function rgb(r, g, b, opacity) {
	  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	}
	function Rgb(r, g, b, opacity) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	define(Rgb, rgb, extend(Color, {
	  brighter(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  darker(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  rgb() {
	    return this;
	  },
	  clamp() {
	    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
	  },
	  displayable() {
	    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	  },
	  hex: rgb_formatHex,
	  // Deprecated! Use color.formatHex.
	  formatHex: rgb_formatHex,
	  formatHex8: rgb_formatHex8,
	  formatRgb: rgb_formatRgb,
	  toString: rgb_formatRgb
	}));
	function rgb_formatHex() {
	  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
	}
	function rgb_formatHex8() {
	  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
	}
	function rgb_formatRgb() {
	  const a = clampa(this.opacity);
	  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
	}
	function clampa(opacity) {
	  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
	}
	function clampi(value) {
	  return Math.max(0, Math.min(255, Math.round(value) || 0));
	}
	function hex(value) {
	  value = clampi(value);
	  return (value < 16 ? "0" : "") + value.toString(16);
	}
	function hsla(h, s, l, a) {
	  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
	  return new Hsl(h, s, l, a);
	}
	function hslConvert(o) {
	  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Hsl();
	  if (o instanceof Hsl) return o;
	  o = o.rgb();
	  var r = o.r / 255,
	    g = o.g / 255,
	    b = o.b / 255,
	    min = Math.min(r, g, b),
	    max = Math.max(r, g, b),
	    h = NaN,
	    s = max - min,
	    l = (max + min) / 2;
	  if (s) {
	    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
	    s /= l < 0.5 ? max + min : 2 - max - min;
	    h *= 60;
	  } else {
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new Hsl(h, s, l, o.opacity);
	}
	function hsl(h, s, l, opacity) {
	  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	}
	function Hsl(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	define(Hsl, hsl, extend(Color, {
	  brighter(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb() {
	    var h = this.h % 360 + (this.h < 0) * 360,
	      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	      l = this.l,
	      m2 = l + (l < 0.5 ? l : 1 - l) * s,
	      m1 = 2 * l - m2;
	    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
	  },
	  clamp() {
	    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
	  },
	  displayable() {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	  },
	  formatHsl() {
	    const a = clampa(this.opacity);
	    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
	  }
	}));
	function clamph(value) {
	  value = (value || 0) % 360;
	  return value < 0 ? value + 360 : value;
	}
	function clampt(value) {
	  return Math.max(0, Math.min(1, value || 0));
	}

	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
	}

	const radians = Math.PI / 180;
	const degrees$1 = 180 / Math.PI;

	// https://observablehq.com/@mbostock/lab-and-rgb
	const K$1 = 18,
	  Xn = 0.96422,
	  Yn = 1,
	  Zn = 0.82521,
	  t0$1 = 4 / 29,
	  t1$1 = 6 / 29,
	  t2 = 3 * t1$1 * t1$1,
	  t3 = t1$1 * t1$1 * t1$1;
	function labConvert(o) {
	  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	  if (o instanceof Hcl) return hcl2lab(o);
	  if (!(o instanceof Rgb)) o = rgbConvert(o);
	  var r = rgb2lrgb(o.r),
	    g = rgb2lrgb(o.g),
	    b = rgb2lrgb(o.b),
	    y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
	    x,
	    z;
	  if (r === g && g === b) x = z = y;else {
	    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
	    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
	  }
	  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	}
	function lab(l, a, b, opacity) {
	  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	}
	function Lab(l, a, b, opacity) {
	  this.l = +l;
	  this.a = +a;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	define(Lab, lab, extend(Color, {
	  brighter(k) {
	    return new Lab(this.l + K$1 * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  darker(k) {
	    return new Lab(this.l - K$1 * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  rgb() {
	    var y = (this.l + 16) / 116,
	      x = isNaN(this.a) ? y : y + this.a / 500,
	      z = isNaN(this.b) ? y : y - this.b / 200;
	    x = Xn * lab2xyz(x);
	    y = Yn * lab2xyz(y);
	    z = Zn * lab2xyz(z);
	    return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
	  }
	}));
	function xyz2lab(t) {
	  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0$1;
	}
	function lab2xyz(t) {
	  return t > t1$1 ? t * t * t : t2 * (t - t0$1);
	}
	function lrgb2rgb(x) {
	  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	}
	function rgb2lrgb(x) {
	  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	}
	function hclConvert(o) {
	  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	  if (!(o instanceof Lab)) o = labConvert(o);
	  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
	  var h = Math.atan2(o.b, o.a) * degrees$1;
	  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	}
	function hcl(h, c, l, opacity) {
	  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	}
	function Hcl(h, c, l, opacity) {
	  this.h = +h;
	  this.c = +c;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	function hcl2lab(o) {
	  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
	  var h = o.h * radians;
	  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	}
	define(Hcl, hcl, extend(Color, {
	  brighter(k) {
	    return new Hcl(this.h, this.c, this.l + K$1 * (k == null ? 1 : k), this.opacity);
	  },
	  darker(k) {
	    return new Hcl(this.h, this.c, this.l - K$1 * (k == null ? 1 : k), this.opacity);
	  },
	  rgb() {
	    return hcl2lab(this).rgb();
	  }
	}));

	var A$2 = -0.14861,
	  B$1 = +1.78277,
	  C$1 = -0.29227,
	  D$1 = -0.90649,
	  E$1 = +1.97294,
	  ED = E$1 * D$1,
	  EB = E$1 * B$1,
	  BC_DA = B$1 * C$1 - D$1 * A$2;
	function cubehelixConvert(o) {
	  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Rgb)) o = rgbConvert(o);
	  var r = o.r / 255,
	    g = o.g / 255,
	    b = o.b / 255,
	    l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	    bl = b - l,
	    k = (E$1 * (g - l) - C$1 * bl) / D$1,
	    s = Math.sqrt(k * k + bl * bl) / (E$1 * l * (1 - l)),
	    // NaN if l=0 or l=1
	    h = s ? Math.atan2(k, bl) * degrees$1 - 120 : NaN;
	  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	}
	function cubehelix$1(h, s, l, opacity) {
	  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	}
	function Cubehelix(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	define(Cubehelix, cubehelix$1, extend(Color, {
	  brighter(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb() {
	    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians,
	      l = +this.l,
	      a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	      cosh = Math.cos(h),
	      sinh = Math.sin(h);
	    return new Rgb(255 * (l + a * (A$2 * cosh + B$1 * sinh)), 255 * (l + a * (C$1 * cosh + D$1 * sinh)), 255 * (l + a * (E$1 * cosh)), this.opacity);
	  }
	}));

	function ascending$3(a, b) {
	  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function descending(a, b) {
	  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	}

	function bisector$1(f) {
	  let compare1, compare2, delta;

	  // If an accessor is specified, promote it to a comparator. In this case we
	  // can test whether the search value is (self-) comparable. We can’t do this
	  // for a comparator (except for specific, known comparators) because we can’t
	  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
	  // used to test whether a single value is comparable.
	  if (f.length !== 2) {
	    compare1 = ascending$3;
	    compare2 = (d, x) => ascending$3(f(d), x);
	    delta = (d, x) => f(d) - x;
	  } else {
	    compare1 = f === ascending$3 || f === descending ? f : zero$1;
	    compare2 = f;
	    delta = f;
	  }
	  function left(a, x, lo = 0, hi = a.length) {
	    if (lo < hi) {
	      if (compare1(x, x) !== 0) return hi;
	      do {
	        const mid = lo + hi >>> 1;
	        if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
	      } while (lo < hi);
	    }
	    return lo;
	  }
	  function right(a, x, lo = 0, hi = a.length) {
	    if (lo < hi) {
	      if (compare1(x, x) !== 0) return hi;
	      do {
	        const mid = lo + hi >>> 1;
	        if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
	      } while (lo < hi);
	    }
	    return lo;
	  }
	  function center(a, x, lo = 0, hi = a.length) {
	    const i = left(a, x, lo, hi - 1);
	    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
	  }
	  return {
	    left,
	    center,
	    right
	  };
	}
	function zero$1() {
	  return 0;
	}

	function number$1(x) {
	  return x === null ? NaN : +x;
	}

	bisector$1(ascending$3);
	bisector$1(number$1).center;

	var noop$2 = {
	  value: () => {}
	};
	function dispatch() {
	  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
	    _[t] = [];
	  }
	  return new Dispatch(_);
	}
	function Dispatch(_) {
	  this._ = _;
	}
	function parseTypenames$2(typenames, types) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	      i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	    return {
	      type: t,
	      name: name
	    };
	  });
	}
	Dispatch.prototype = dispatch.prototype = {
	  constructor: Dispatch,
	  on: function (typename, callback) {
	    var _ = this._,
	      T = parseTypenames$2(typename + "", _),
	      t,
	      i = -1,
	      n = T.length;

	    // If no callback was specified, return the callback of the given type and name.
	    if (arguments.length < 2) {
	      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$2(_[t], typename.name))) return t;
	      return;
	    }

	    // If a type was specified, set the callback for the given type and name.
	    // Otherwise, if a null callback was specified, remove callbacks of the given name.
	    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    while (++i < n) {
	      if (t = (typename = T[i]).type) _[t] = set$2(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$2(_[t], typename.name, null);
	    }
	    return this;
	  },
	  copy: function () {
	    var copy = {},
	      _ = this._;
	    for (var t in _) copy[t] = _[t].slice();
	    return new Dispatch(copy);
	  },
	  call: function (type, that) {
	    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  },
	  apply: function (type, that, args) {
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  }
	};
	function get$2(type, name) {
	  for (var i = 0, n = type.length, c; i < n; ++i) {
	    if ((c = type[i]).name === name) {
	      return c.value;
	    }
	  }
	}
	function set$2(type, name, callback) {
	  for (var i = 0, n = type.length; i < n; ++i) {
	    if (type[i].name === name) {
	      type[i] = noop$2, type = type.slice(0, i).concat(type.slice(i + 1));
	      break;
	    }
	  }
	  if (callback != null) type.push({
	    name: name,
	    value: callback
	  });
	  return type;
	}

	var xhtml$1 = "http://www.w3.org/1999/xhtml";
	var namespaces$1 = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml$1,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	function namespace$1 (name) {
	  var prefix = name += "",
	    i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces$1.hasOwnProperty(prefix) ? {
	    space: namespaces$1[prefix],
	    local: name
	  } : name; // eslint-disable-line no-prototype-builtins
	}

	function creatorInherit$1(name) {
	  return function () {
	    var document = this.ownerDocument,
	      uri = this.namespaceURI;
	    return uri === xhtml$1 && document.documentElement.namespaceURI === xhtml$1 ? document.createElement(name) : document.createElementNS(uri, name);
	  };
	}
	function creatorFixed$1(fullname) {
	  return function () {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}
	function creator$1 (name) {
	  var fullname = namespace$1(name);
	  return (fullname.local ? creatorFixed$1 : creatorInherit$1)(fullname);
	}

	function none$1() {}
	function selector$1 (selector) {
	  return selector == null ? none$1 : function () {
	    return this.querySelector(selector);
	  };
	}

	function selection_select$1 (select) {
	  if (typeof select !== "function") select = selector$1(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }
	  return new Selection$3(subgroups, this._parents);
	}

	// Given something array like (or null), returns something that is strictly an
	// array. This is used to ensure that array-like objects passed to d3.selectAll
	// or selection.selectAll are converted into proper arrays when creating a
	// selection; we don’t ever want to create a selection backed by a live
	// HTMLCollection or NodeList. However, note that selection.selectAll will use a
	// static NodeList as a group, since it safely derived from querySelectorAll.
	function array$2(x) {
	  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
	}

	function empty$1() {
	  return [];
	}
	function selectorAll$1 (selector) {
	  return selector == null ? empty$1 : function () {
	    return this.querySelectorAll(selector);
	  };
	}

	function arrayAll$1(select) {
	  return function () {
	    return array$2(select.apply(this, arguments));
	  };
	}
	function selection_selectAll$1 (select) {
	  if (typeof select === "function") select = arrayAll$1(select);else select = selectorAll$1(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }
	  return new Selection$3(subgroups, parents);
	}

	function matcher$1 (selector) {
	  return function () {
	    return this.matches(selector);
	  };
	}
	function childMatcher$1(selector) {
	  return function (node) {
	    return node.matches(selector);
	  };
	}

	var find$1 = Array.prototype.find;
	function childFind$1(match) {
	  return function () {
	    return find$1.call(this.children, match);
	  };
	}
	function childFirst$1() {
	  return this.firstElementChild;
	}
	function selection_selectChild$1 (match) {
	  return this.select(match == null ? childFirst$1 : childFind$1(typeof match === "function" ? match : childMatcher$1(match)));
	}

	var filter$1 = Array.prototype.filter;
	function children$1() {
	  return Array.from(this.children);
	}
	function childrenFilter$1(match) {
	  return function () {
	    return filter$1.call(this.children, match);
	  };
	}
	function selection_selectChildren$1 (match) {
	  return this.selectAll(match == null ? children$1 : childrenFilter$1(typeof match === "function" ? match : childMatcher$1(match)));
	}

	function selection_filter$1 (match) {
	  if (typeof match !== "function") match = matcher$1(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Selection$3(subgroups, this._parents);
	}

	function sparse$1 (update) {
	  return new Array(update.length);
	}

	function selection_enter$1 () {
	  return new Selection$3(this._enter || this._groups.map(sparse$1), this._parents);
	}
	function EnterNode$1(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}
	EnterNode$1.prototype = {
	  constructor: EnterNode$1,
	  appendChild: function (child) {
	    return this._parent.insertBefore(child, this._next);
	  },
	  insertBefore: function (child, next) {
	    return this._parent.insertBefore(child, next);
	  },
	  querySelector: function (selector) {
	    return this._parent.querySelector(selector);
	  },
	  querySelectorAll: function (selector) {
	    return this._parent.querySelectorAll(selector);
	  }
	};

	function constant$3 (x) {
	  return function () {
	    return x;
	  };
	}

	function bindIndex$1(parent, group, enter, update, exit, data) {
	  var i = 0,
	    node,
	    groupLength = group.length,
	    dataLength = data.length;

	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode$1(parent, data[i]);
	    }
	  }

	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}
	function bindKey$1(parent, group, enter, update, exit, data, key) {
	  var i,
	    node,
	    nodeByKeyValue = new Map(),
	    groupLength = group.length,
	    dataLength = data.length,
	    keyValues = new Array(groupLength),
	    keyValue;

	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
	      if (nodeByKeyValue.has(keyValue)) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue.set(keyValue, node);
	      }
	    }
	  }

	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = key.call(parent, data[i], i, data) + "";
	    if (node = nodeByKeyValue.get(keyValue)) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue.delete(keyValue);
	    } else {
	      enter[i] = new EnterNode$1(parent, data[i]);
	    }
	  }

	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
	      exit[i] = node;
	    }
	  }
	}
	function datum$1(node) {
	  return node.__data__;
	}
	function selection_data$1 (value, key) {
	  if (!arguments.length) return Array.from(this, datum$1);
	  var bind = key ? bindKey$1 : bindIndex$1,
	    parents = this._parents,
	    groups = this._groups;
	  if (typeof value !== "function") value = constant$3(value);
	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	      group = groups[j],
	      groupLength = group.length,
	      data = arraylike$1(value.call(parent, parent && parent.__data__, j, parents)),
	      dataLength = data.length,
	      enterGroup = enter[j] = new Array(dataLength),
	      updateGroup = update[j] = new Array(dataLength),
	      exitGroup = exit[j] = new Array(groupLength);
	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }
	  update = new Selection$3(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	}

	// Given some data, this returns an array-like view of it: an object that
	// exposes a length property and allows numeric indexing. Note that unlike
	// selectAll, this isn’t worried about “live” collections because the resulting
	// array will only be used briefly while data is being bound. (It is possible to
	// cause the data to change while iterating by using a key function, but please
	// don’t; we’d rather avoid a gratuitous copy.)
	function arraylike$1(data) {
	  return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
	  : Array.from(data); // Map, Set, iterable, string, or anything else
	}

	function selection_exit$1 () {
	  return new Selection$3(this._exit || this._groups.map(sparse$1), this._parents);
	}

	function selection_join$1 (onenter, onupdate, onexit) {
	  var enter = this.enter(),
	    update = this,
	    exit = this.exit();
	  if (typeof onenter === "function") {
	    enter = onenter(enter);
	    if (enter) enter = enter.selection();
	  } else {
	    enter = enter.append(onenter + "");
	  }
	  if (onupdate != null) {
	    update = onupdate(update);
	    if (update) update = update.selection();
	  }
	  if (onexit == null) exit.remove();else onexit(exit);
	  return enter && update ? enter.merge(update).order() : update;
	}

	function selection_merge$1 (context) {
	  var selection = context.selection ? context.selection() : context;
	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Selection$3(merges, this._parents);
	}

	function selection_order$1 () {
	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	  return this;
	}

	function selection_sort$1 (compare) {
	  if (!compare) compare = ascending$2;
	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }
	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }
	  return new Selection$3(sortgroups, this._parents).order();
	}
	function ascending$2(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function selection_call$1 () {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	}

	function selection_nodes$1 () {
	  return Array.from(this);
	}

	function selection_node$1 () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }
	  return null;
	}

	function selection_size$1 () {
	  let size = 0;
	  for (const node of this) ++size; // eslint-disable-line no-unused-vars
	  return size;
	}

	function selection_empty$1 () {
	  return !this.node();
	}

	function selection_each$1 (callback) {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }
	  return this;
	}

	function attrRemove$3(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS$3(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant$3(name, value) {
	  return function () {
	    this.setAttribute(name, value);
	  };
	}
	function attrConstantNS$3(fullname, value) {
	  return function () {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}
	function attrFunction$3(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
	  };
	}
	function attrFunctionNS$3(fullname, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}
	function selection_attr$1 (name, value) {
	  var fullname = namespace$1(name);
	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	  }
	  return this.each((value == null ? fullname.local ? attrRemoveNS$3 : attrRemove$3 : typeof value === "function" ? fullname.local ? attrFunctionNS$3 : attrFunction$3 : fullname.local ? attrConstantNS$3 : attrConstant$3)(fullname, value));
	}

	function defaultView$1 (node) {
	  return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
	  || node.document && node // node is a Window
	  || node.defaultView; // node is a Document
	}

	function styleRemove$3(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant$3(name, value, priority) {
	  return function () {
	    this.style.setProperty(name, value, priority);
	  };
	}
	function styleFunction$3(name, value, priority) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
	  };
	}
	function selection_style$1 (name, value, priority) {
	  return arguments.length > 1 ? this.each((value == null ? styleRemove$3 : typeof value === "function" ? styleFunction$3 : styleConstant$3)(name, value, priority == null ? "" : priority)) : styleValue$1(this.node(), name);
	}
	function styleValue$1(node, name) {
	  return node.style.getPropertyValue(name) || defaultView$1(node).getComputedStyle(node, null).getPropertyValue(name);
	}

	function propertyRemove$1(name) {
	  return function () {
	    delete this[name];
	  };
	}
	function propertyConstant$1(name, value) {
	  return function () {
	    this[name] = value;
	  };
	}
	function propertyFunction$1(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];else this[name] = v;
	  };
	}
	function selection_property$1 (name, value) {
	  return arguments.length > 1 ? this.each((value == null ? propertyRemove$1 : typeof value === "function" ? propertyFunction$1 : propertyConstant$1)(name, value)) : this.node()[name];
	}

	function classArray$1(string) {
	  return string.trim().split(/^|\s+/);
	}
	function classList$1(node) {
	  return node.classList || new ClassList$1(node);
	}
	function ClassList$1(node) {
	  this._node = node;
	  this._names = classArray$1(node.getAttribute("class") || "");
	}
	ClassList$1.prototype = {
	  add: function (name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function (name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function (name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};
	function classedAdd$1(node, names) {
	  var list = classList$1(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.add(names[i]);
	}
	function classedRemove$1(node, names) {
	  var list = classList$1(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.remove(names[i]);
	}
	function classedTrue$1(names) {
	  return function () {
	    classedAdd$1(this, names);
	  };
	}
	function classedFalse$1(names) {
	  return function () {
	    classedRemove$1(this, names);
	  };
	}
	function classedFunction$1(names, value) {
	  return function () {
	    (value.apply(this, arguments) ? classedAdd$1 : classedRemove$1)(this, names);
	  };
	}
	function selection_classed$1 (name, value) {
	  var names = classArray$1(name + "");
	  if (arguments.length < 2) {
	    var list = classList$1(this.node()),
	      i = -1,
	      n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }
	  return this.each((typeof value === "function" ? classedFunction$1 : value ? classedTrue$1 : classedFalse$1)(names, value));
	}

	function textRemove$1() {
	  this.textContent = "";
	}
	function textConstant$3(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction$3(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}
	function selection_text$1 (value) {
	  return arguments.length ? this.each(value == null ? textRemove$1 : (typeof value === "function" ? textFunction$3 : textConstant$3)(value)) : this.node().textContent;
	}

	function htmlRemove$1() {
	  this.innerHTML = "";
	}
	function htmlConstant$1(value) {
	  return function () {
	    this.innerHTML = value;
	  };
	}
	function htmlFunction$1(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}
	function selection_html$1 (value) {
	  return arguments.length ? this.each(value == null ? htmlRemove$1 : (typeof value === "function" ? htmlFunction$1 : htmlConstant$1)(value)) : this.node().innerHTML;
	}

	function raise$1() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}
	function selection_raise$1 () {
	  return this.each(raise$1);
	}

	function lower$1() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}
	function selection_lower$1 () {
	  return this.each(lower$1);
	}

	function selection_append$1 (name) {
	  var create = typeof name === "function" ? name : creator$1(name);
	  return this.select(function () {
	    return this.appendChild(create.apply(this, arguments));
	  });
	}

	function constantNull$1() {
	  return null;
	}
	function selection_insert$1 (name, before) {
	  var create = typeof name === "function" ? name : creator$1(name),
	    select = before == null ? constantNull$1 : typeof before === "function" ? before : selector$1(before);
	  return this.select(function () {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	}

	function remove$1() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}
	function selection_remove$1 () {
	  return this.each(remove$1);
	}

	function selection_cloneShallow$1() {
	  var clone = this.cloneNode(false),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_cloneDeep$1() {
	  var clone = this.cloneNode(true),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_clone$1 (deep) {
	  return this.select(deep ? selection_cloneDeep$1 : selection_cloneShallow$1);
	}

	function selection_datum$1 (value) {
	  return arguments.length ? this.property("__data__", value) : this.node().__data__;
	}

	function contextListener$1(listener) {
	  return function (event) {
	    listener.call(this, event, this.__data__);
	  };
	}
	function parseTypenames$1(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	      i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {
	      type: t,
	      name: name
	    };
	  });
	}
	function onRemove$1(typename) {
	  return function () {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;else delete this.__on;
	  };
	}
	function onAdd$1(typename, value, options) {
	  return function () {
	    var on = this.__on,
	      o,
	      listener = contextListener$1(value);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	        this.addEventListener(o.type, o.listener = listener, o.options = options);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, options);
	    o = {
	      type: typename.type,
	      name: typename.name,
	      value: value,
	      listener: listener,
	      options: options
	    };
	    if (!on) this.__on = [o];else on.push(o);
	  };
	}
	function selection_on$1 (typename, value, options) {
	  var typenames = parseTypenames$1(typename + ""),
	    i,
	    n = typenames.length,
	    t;
	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }
	  on = value ? onAdd$1 : onRemove$1;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	  return this;
	}

	function dispatchEvent$1(node, type, params) {
	  var window = defaultView$1(node),
	    event = window.CustomEvent;
	  if (typeof event === "function") {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
	  }
	  node.dispatchEvent(event);
	}
	function dispatchConstant$1(type, params) {
	  return function () {
	    return dispatchEvent$1(this, type, params);
	  };
	}
	function dispatchFunction$1(type, params) {
	  return function () {
	    return dispatchEvent$1(this, type, params.apply(this, arguments));
	  };
	}
	function selection_dispatch$1 (type, params) {
	  return this.each((typeof params === "function" ? dispatchFunction$1 : dispatchConstant$1)(type, params));
	}

	function* selection_iterator$1 () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) yield node;
	    }
	  }
	}

	var root$2 = [null];
	function Selection$3(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}
	function selection$1() {
	  return new Selection$3([[document.documentElement]], root$2);
	}
	function selection_selection$1() {
	  return this;
	}
	Selection$3.prototype = selection$1.prototype = {
	  constructor: Selection$3,
	  select: selection_select$1,
	  selectAll: selection_selectAll$1,
	  selectChild: selection_selectChild$1,
	  selectChildren: selection_selectChildren$1,
	  filter: selection_filter$1,
	  data: selection_data$1,
	  enter: selection_enter$1,
	  exit: selection_exit$1,
	  join: selection_join$1,
	  merge: selection_merge$1,
	  selection: selection_selection$1,
	  order: selection_order$1,
	  sort: selection_sort$1,
	  call: selection_call$1,
	  nodes: selection_nodes$1,
	  node: selection_node$1,
	  size: selection_size$1,
	  empty: selection_empty$1,
	  each: selection_each$1,
	  attr: selection_attr$1,
	  style: selection_style$1,
	  property: selection_property$1,
	  classed: selection_classed$1,
	  text: selection_text$1,
	  html: selection_html$1,
	  raise: selection_raise$1,
	  lower: selection_lower$1,
	  append: selection_append$1,
	  insert: selection_insert$1,
	  remove: selection_remove$1,
	  clone: selection_clone$1,
	  datum: selection_datum$1,
	  on: selection_on$1,
	  dispatch: selection_dispatch$1,
	  [Symbol.iterator]: selection_iterator$1
	};

	function select (selector) {
	  return typeof selector === "string" ? new Selection$3([[document.querySelector(selector)]], [document.documentElement]) : new Selection$3([[selector]], root$2);
	}

	var nextId$1 = 0;
	function Local$1() {
	  this._ = "@" + (++nextId$1).toString(36);
	}
	Local$1.prototype = {
	  constructor: Local$1,
	  get: function (node) {
	    var id = this._;
	    while (!(id in node)) if (!(node = node.parentNode)) return;
	    return node[id];
	  },
	  set: function (node, value) {
	    return node[this._] = value;
	  },
	  remove: function (node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function () {
	    return this._;
	  }
	};

	var EOL = {},
	  EOF = {},
	  QUOTE = 34,
	  NEWLINE = 10,
	  RETURN = 13;
	function objectConverter(columns) {
	  return new Function("d", "return {" + columns.map(function (name, i) {
	    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
	  }).join(",") + "}");
	}
	function customConverter(columns, f) {
	  var object = objectConverter(columns);
	  return function (row, i) {
	    return f(object(row), i, columns);
	  };
	}

	// Compute unique columns in order of discovery.
	function inferColumns(rows) {
	  var columnSet = Object.create(null),
	    columns = [];
	  rows.forEach(function (row) {
	    for (var column in row) {
	      if (!(column in columnSet)) {
	        columns.push(columnSet[column] = column);
	      }
	    }
	  });
	  return columns;
	}
	function pad$1(value, width) {
	  var s = value + "",
	    length = s.length;
	  return length < width ? new Array(width - length + 1).join(0) + s : s;
	}
	function formatYear$1(year) {
	  return year < 0 ? "-" + pad$1(-year, 6) : year > 9999 ? "+" + pad$1(year, 6) : pad$1(year, 4);
	}
	function formatDate(date) {
	  var hours = date.getUTCHours(),
	    minutes = date.getUTCMinutes(),
	    seconds = date.getUTCSeconds(),
	    milliseconds = date.getUTCMilliseconds();
	  return isNaN(date) ? "Invalid Date" : formatYear$1(date.getUTCFullYear()) + "-" + pad$1(date.getUTCMonth() + 1, 2) + "-" + pad$1(date.getUTCDate(), 2) + (milliseconds ? "T" + pad$1(hours, 2) + ":" + pad$1(minutes, 2) + ":" + pad$1(seconds, 2) + "." + pad$1(milliseconds, 3) + "Z" : seconds ? "T" + pad$1(hours, 2) + ":" + pad$1(minutes, 2) + ":" + pad$1(seconds, 2) + "Z" : minutes || hours ? "T" + pad$1(hours, 2) + ":" + pad$1(minutes, 2) + "Z" : "");
	}
	function dsvFormat (delimiter) {
	  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
	    DELIMITER = delimiter.charCodeAt(0);
	  function parse(text, f) {
	    var convert,
	      columns,
	      rows = parseRows(text, function (row, i) {
	        if (convert) return convert(row, i - 1);
	        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
	      });
	    rows.columns = columns || [];
	    return rows;
	  }
	  function parseRows(text, f) {
	    var rows = [],
	      // output rows
	      N = text.length,
	      I = 0,
	      // current character index
	      n = 0,
	      // current line number
	      t,
	      // current token
	      eof = N <= 0,
	      // current token followed by EOF?
	      eol = false; // current token followed by EOL?

	    // Strip the trailing newline.
	    if (text.charCodeAt(N - 1) === NEWLINE) --N;
	    if (text.charCodeAt(N - 1) === RETURN) --N;
	    function token() {
	      if (eof) return EOF;
	      if (eol) return eol = false, EOL;

	      // Unescape quotes.
	      var i,
	        j = I,
	        c;
	      if (text.charCodeAt(j) === QUOTE) {
	        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
	        if ((i = I) >= N) eof = true;else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;else if (c === RETURN) {
	          eol = true;
	          if (text.charCodeAt(I) === NEWLINE) ++I;
	        }
	        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
	      }

	      // Find next delimiter or newline.
	      while (I < N) {
	        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;else if (c === RETURN) {
	          eol = true;
	          if (text.charCodeAt(I) === NEWLINE) ++I;
	        } else if (c !== DELIMITER) continue;
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
	  function preformatBody(rows, columns) {
	    return rows.map(function (row) {
	      return columns.map(function (column) {
	        return formatValue(row[column]);
	      }).join(delimiter);
	    });
	  }
	  function format(rows, columns) {
	    if (columns == null) columns = inferColumns(rows);
	    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
	  }
	  function formatBody(rows, columns) {
	    if (columns == null) columns = inferColumns(rows);
	    return preformatBody(rows, columns).join("\n");
	  }
	  function formatRows(rows) {
	    return rows.map(formatRow).join("\n");
	  }
	  function formatRow(row) {
	    return row.map(formatValue).join(delimiter);
	  }
	  function formatValue(value) {
	    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\"" : value;
	  }
	  return {
	    parse: parse,
	    parseRows: parseRows,
	    format: format,
	    formatBody: formatBody,
	    formatRows: formatRows,
	    formatRow: formatRow,
	    formatValue: formatValue
	  };
	}

	dsvFormat(",");

	dsvFormat("\t");

	// https://github.com/d3/d3-dsv/issues/45
	new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

	function tree_add (d) {
	  const x = +this._x.call(null, d),
	    y = +this._y.call(null, d);
	  return add(this.cover(x, y), x, y, d);
	}
	function add(tree, x, y, d) {
	  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

	  var parent,
	    node = tree._root,
	    leaf = {
	      data: d
	    },
	    x0 = tree._x0,
	    y0 = tree._y0,
	    x1 = tree._x1,
	    y1 = tree._y1,
	    xm,
	    ym,
	    xp,
	    yp,
	    right,
	    bottom,
	    i,
	    j;

	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return tree._root = leaf, tree;

	  // Find the existing leaf for the new point, or add it.
	  while (node.length) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	  }

	  // Is the new point is exactly coincident with the existing point?
	  xp = +tree._x.call(null, node.data);
	  yp = +tree._y.call(null, node.data);
	  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

	  // Otherwise, split the leaf node until the old and new point are separated.
	  do {
	    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
	  return parent[j] = node, parent[i] = leaf, tree;
	}
	function addAll(data) {
	  var d,
	    i,
	    n = data.length,
	    x,
	    y,
	    xz = new Array(n),
	    yz = new Array(n),
	    x0 = Infinity,
	    y0 = Infinity,
	    x1 = -Infinity,
	    y1 = -Infinity;

	  // Compute the points and their extent.
	  for (i = 0; i < n; ++i) {
	    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	    xz[i] = x;
	    yz[i] = y;
	    if (x < x0) x0 = x;
	    if (x > x1) x1 = x;
	    if (y < y0) y0 = y;
	    if (y > y1) y1 = y;
	  }

	  // If there were no (valid) points, abort.
	  if (x0 > x1 || y0 > y1) return this;

	  // Expand the tree to cover the new points.
	  this.cover(x0, y0).cover(x1, y1);

	  // Add the new points.
	  for (i = 0; i < n; ++i) {
	    add(this, xz[i], yz[i], data[i]);
	  }
	  return this;
	}

	function tree_cover (x, y) {
	  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

	  var x0 = this._x0,
	    y0 = this._y0,
	    x1 = this._x1,
	    y1 = this._y1;

	  // If the quadtree has no extent, initialize them.
	  // Integer extent are necessary so that if we later double the extent,
	  // the existing quadrant boundaries don’t change due to floating point error!
	  if (isNaN(x0)) {
	    x1 = (x0 = Math.floor(x)) + 1;
	    y1 = (y0 = Math.floor(y)) + 1;
	  }

	  // Otherwise, double repeatedly to cover.
	  else {
	    var z = x1 - x0 || 1,
	      node = this._root,
	      parent,
	      i;
	    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
	      i = (y < y0) << 1 | x < x0;
	      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
	      switch (i) {
	        case 0:
	          x1 = x0 + z, y1 = y0 + z;
	          break;
	        case 1:
	          x0 = x1 - z, y1 = y0 + z;
	          break;
	        case 2:
	          x1 = x0 + z, y0 = y1 - z;
	          break;
	        case 3:
	          x0 = x1 - z, y0 = y1 - z;
	          break;
	      }
	    }
	    if (this._root && this._root.length) this._root = node;
	  }
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  return this;
	}

	function tree_data () {
	  var data = [];
	  this.visit(function (node) {
	    if (!node.length) do data.push(node.data); while (node = node.next);
	  });
	  return data;
	}

	function tree_extent (_) {
	  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	}

	function Quad (node, x0, y0, x1, y1) {
	  this.node = node;
	  this.x0 = x0;
	  this.y0 = y0;
	  this.x1 = x1;
	  this.y1 = y1;
	}

	function tree_find (x, y, radius) {
	  var data,
	    x0 = this._x0,
	    y0 = this._y0,
	    x1,
	    y1,
	    x2,
	    y2,
	    x3 = this._x1,
	    y3 = this._y1,
	    quads = [],
	    node = this._root,
	    q,
	    i;
	  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	  if (radius == null) radius = Infinity;else {
	    x0 = x - radius, y0 = y - radius;
	    x3 = x + radius, y3 = y + radius;
	    radius *= radius;
	  }
	  while (q = quads.pop()) {
	    // Stop searching if this quadrant can’t contain a closer node.
	    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;

	    // Bisect the current quadrant.
	    if (node.length) {
	      var xm = (x1 + x2) / 2,
	        ym = (y1 + y2) / 2;
	      quads.push(new Quad(node[3], xm, ym, x2, y2), new Quad(node[2], x1, ym, xm, y2), new Quad(node[1], xm, y1, x2, ym), new Quad(node[0], x1, y1, xm, ym));

	      // Visit the closest quadrant first.
	      if (i = (y >= ym) << 1 | x >= xm) {
	        q = quads[quads.length - 1];
	        quads[quads.length - 1] = quads[quads.length - 1 - i];
	        quads[quads.length - 1 - i] = q;
	      }
	    }

	    // Visit this point. (Visiting coincident points isn’t necessary!)
	    else {
	      var dx = x - +this._x.call(null, node.data),
	        dy = y - +this._y.call(null, node.data),
	        d2 = dx * dx + dy * dy;
	      if (d2 < radius) {
	        var d = Math.sqrt(radius = d2);
	        x0 = x - d, y0 = y - d;
	        x3 = x + d, y3 = y + d;
	        data = node.data;
	      }
	    }
	  }
	  return data;
	}

	function tree_remove (d) {
	  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

	  var parent,
	    node = this._root,
	    retainer,
	    previous,
	    next,
	    x0 = this._x0,
	    y0 = this._y0,
	    x1 = this._x1,
	    y1 = this._y1,
	    x,
	    y,
	    xm,
	    ym,
	    right,
	    bottom,
	    i,
	    j;

	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return this;

	  // Find the leaf node for the point.
	  // While descending, also retain the deepest parent with a non-removed sibling.
	  if (node.length) while (true) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	    if (!node.length) break;
	    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
	  }

	  // Find the point to remove.
	  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	  if (next = node.next) delete node.next;

	  // If there are multiple coincident points, remove just the point.
	  if (previous) return next ? previous.next = next : delete previous.next, this;

	  // If this is the root point, remove it.
	  if (!parent) return this._root = next, this;

	  // Remove this leaf.
	  next ? parent[i] = next : delete parent[i];

	  // If the parent now contains exactly one leaf, collapse superfluous parents.
	  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
	    if (retainer) retainer[j] = node;else this._root = node;
	  }
	  return this;
	}
	function removeAll(data) {
	  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	  return this;
	}

	function tree_root () {
	  return this._root;
	}

	function tree_size () {
	  var size = 0;
	  this.visit(function (node) {
	    if (!node.length) do ++size; while (node = node.next);
	  });
	  return size;
	}

	function tree_visit (callback) {
	  var quads = [],
	    q,
	    node = this._root,
	    child,
	    x0,
	    y0,
	    x1,
	    y1;
	  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	      var xm = (x0 + x1) / 2,
	        ym = (y0 + y1) / 2;
	      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	    }
	  }
	  return this;
	}

	function tree_visitAfter (callback) {
	  var quads = [],
	    next = [],
	    q;
	  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    var node = q.node;
	    if (node.length) {
	      var child,
	        x0 = q.x0,
	        y0 = q.y0,
	        x1 = q.x1,
	        y1 = q.y1,
	        xm = (x0 + x1) / 2,
	        ym = (y0 + y1) / 2;
	      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	    }
	    next.push(q);
	  }
	  while (q = next.pop()) {
	    callback(q.node, q.x0, q.y0, q.x1, q.y1);
	  }
	  return this;
	}

	function tree_x (_) {
	  return arguments.length ? (this._x = _, this) : this._x;
	}

	function tree_y (_) {
	  return arguments.length ? (this._y = _, this) : this._y;
	}

	function Quadtree(x, y, x0, y0, x1, y1) {
	  this._x = x;
	  this._y = y;
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  this._root = undefined;
	}
	function leaf_copy(leaf) {
	  var copy = {
	      data: leaf.data
	    },
	    next = copy;
	  while (leaf = leaf.next) next = next.next = {
	    data: leaf.data
	  };
	  return copy;
	}
	var treeProto = Quadtree.prototype;
	treeProto.copy = function () {
	  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	    node = this._root,
	    nodes,
	    child;
	  if (!node) return copy;
	  if (!node.length) return copy._root = leaf_copy(node), copy;
	  nodes = [{
	    source: node,
	    target: copy._root = new Array(4)
	  }];
	  while (node = nodes.pop()) {
	    for (var i = 0; i < 4; ++i) {
	      if (child = node.source[i]) {
	        if (child.length) nodes.push({
	          source: child,
	          target: node.target[i] = new Array(4)
	        });else node.target[i] = leaf_copy(child);
	      }
	    }
	  }
	  return copy;
	};
	treeProto.add = tree_add;
	treeProto.addAll = addAll;
	treeProto.cover = tree_cover;
	treeProto.data = tree_data;
	treeProto.extent = tree_extent;
	treeProto.find = tree_find;
	treeProto.remove = tree_remove;
	treeProto.removeAll = removeAll;
	treeProto.root = tree_root;
	treeProto.size = tree_size;
	treeProto.visit = tree_visit;
	treeProto.visitAfter = tree_visitAfter;
	treeProto.x = tree_x;
	treeProto.y = tree_y;

	function formatDecimal (x) {
	  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
	}

	// Computes the decimal coefficient and exponent of the specified number x with
	// significant digits p, where x is positive and p is in [1, 21] or undefined.
	// For example, formatDecimalParts(1.23) returns ["123", 0].
	function formatDecimalParts(x, p) {
	  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	  var i,
	    coefficient = x.slice(0, i);

	  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
	}

	function exponent (x) {
	  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
	}

	function formatGroup (grouping, thousands) {
	  return function (value, width) {
	    var i = value.length,
	      t = [],
	      j = 0,
	      g = grouping[0],
	      length = 0;
	    while (i > 0 && g > 0) {
	      if (length + g + 1 > width) g = Math.max(1, width - length);
	      t.push(value.substring(i -= g, i + g));
	      if ((length += g + 1) > width) break;
	      g = grouping[j = (j + 1) % grouping.length];
	    }
	    return t.reverse().join(thousands);
	  };
	}

	function formatNumerals (numerals) {
	  return function (value) {
	    return value.replace(/[0-9]/g, function (i) {
	      return numerals[+i];
	    });
	  };
	}

	// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
	var re$1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
	function formatSpecifier(specifier) {
	  if (!(match = re$1.exec(specifier))) throw new Error("invalid format: " + specifier);
	  var match;
	  return new FormatSpecifier({
	    fill: match[1],
	    align: match[2],
	    sign: match[3],
	    symbol: match[4],
	    zero: match[5],
	    width: match[6],
	    comma: match[7],
	    precision: match[8] && match[8].slice(1),
	    trim: match[9],
	    type: match[10]
	  });
	}
	formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

	function FormatSpecifier(specifier) {
	  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
	  this.align = specifier.align === undefined ? ">" : specifier.align + "";
	  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
	  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
	  this.zero = !!specifier.zero;
	  this.width = specifier.width === undefined ? undefined : +specifier.width;
	  this.comma = !!specifier.comma;
	  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
	  this.trim = !!specifier.trim;
	  this.type = specifier.type === undefined ? "" : specifier.type + "";
	}
	FormatSpecifier.prototype.toString = function () {
	  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
	};

	// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
	function formatTrim (s) {
	  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
	    switch (s[i]) {
	      case ".":
	        i0 = i1 = i;
	        break;
	      case "0":
	        if (i0 === 0) i0 = i;
	        i1 = i;
	        break;
	      default:
	        if (!+s[i]) break out;
	        if (i0 > 0) i0 = 0;
	        break;
	    }
	  }
	  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
	}

	var prefixExponent;
	function formatPrefixAuto (x, p) {
	  var d = formatDecimalParts(x, p);
	  if (!d) return x + "";
	  var coefficient = d[0],
	    exponent = d[1],
	    i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	    n = coefficient.length;
	  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	}

	function formatRounded (x, p) {
	  var d = formatDecimalParts(x, p);
	  if (!d) return x + "";
	  var coefficient = d[0],
	    exponent = d[1];
	  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	}

	var formatTypes = {
	  "%": (x, p) => (x * 100).toFixed(p),
	  "b": x => Math.round(x).toString(2),
	  "c": x => x + "",
	  "d": formatDecimal,
	  "e": (x, p) => x.toExponential(p),
	  "f": (x, p) => x.toFixed(p),
	  "g": (x, p) => x.toPrecision(p),
	  "o": x => Math.round(x).toString(8),
	  "p": (x, p) => formatRounded(x * 100, p),
	  "r": formatRounded,
	  "s": formatPrefixAuto,
	  "X": x => Math.round(x).toString(16).toUpperCase(),
	  "x": x => Math.round(x).toString(16)
	};

	function identity$1 (x) {
	  return x;
	}

	var map = Array.prototype.map,
	  prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
	function formatLocale$1 (locale) {
	  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
	    currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
	    currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
	    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
	    numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
	    percent = locale.percent === undefined ? "%" : locale.percent + "",
	    minus = locale.minus === undefined ? "−" : locale.minus + "",
	    nan = locale.nan === undefined ? "NaN" : locale.nan + "";
	  function newFormat(specifier) {
	    specifier = formatSpecifier(specifier);
	    var fill = specifier.fill,
	      align = specifier.align,
	      sign = specifier.sign,
	      symbol = specifier.symbol,
	      zero = specifier.zero,
	      width = specifier.width,
	      comma = specifier.comma,
	      precision = specifier.precision,
	      trim = specifier.trim,
	      type = specifier.type;

	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";

	    // The "" type, and any invalid type, is an alias for ".12~g".
	    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

	    // Compute the prefix and suffix.
	    // For SI-prefix, the suffix is lazily computed.
	    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	      suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

	    // What format function should we use?
	    // Is this an integer type?
	    // Can this type generate exponential notation?
	    var formatType = formatTypes[type],
	      maybeSuffix = /[defgprs%]/.test(type);

	    // Set the default precision if not specified,
	    // or clamp the specified precision to the supported range.
	    // For significant precision, it must be in [1, 21].
	    // For fixed precision, it must be in [0, 20].
	    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
	    function format(value) {
	      var valuePrefix = prefix,
	        valueSuffix = suffix,
	        i,
	        n,
	        c;
	      if (type === "c") {
	        valueSuffix = formatType(value) + valueSuffix;
	        value = "";
	      } else {
	        value = +value;

	        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
	        var valueNegative = value < 0 || 1 / value < 0;

	        // Perform the initial formatting.
	        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

	        // Trim insignificant zeros.
	        if (trim) value = formatTrim(value);

	        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
	        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

	        // Compute the prefix and suffix.
	        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

	        // Break the formatted value into the integer “value” part that can be
	        // grouped, and fractional or exponential “suffix” part that is not.
	        if (maybeSuffix) {
	          i = -1, n = value.length;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 > c || c > 57) {
	              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	              value = value.slice(0, i);
	              break;
	            }
	          }
	        }
	      }

	      // If the fill character is not "0", grouping is applied before padding.
	      if (comma && !zero) value = group(value, Infinity);

	      // Compute the padding.
	      var length = valuePrefix.length + value.length + valueSuffix.length,
	        padding = length < width ? new Array(width - length + 1).join(fill) : "";

	      // If the fill character is "0", grouping is applied after padding.
	      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

	      // Reconstruct the final output based on the desired alignment.
	      switch (align) {
	        case "<":
	          value = valuePrefix + value + valueSuffix + padding;
	          break;
	        case "=":
	          value = valuePrefix + padding + value + valueSuffix;
	          break;
	        case "^":
	          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	          break;
	        default:
	          value = padding + valuePrefix + value + valueSuffix;
	          break;
	      }
	      return numerals(value);
	    }
	    format.toString = function () {
	      return specifier + "";
	    };
	    return format;
	  }
	  function formatPrefix(specifier, value) {
	    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	      e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
	      k = Math.pow(10, -e),
	      prefix = prefixes[8 + e / 3];
	    return function (value) {
	      return f(k * value) + prefix;
	    };
	  }
	  return {
	    format: newFormat,
	    formatPrefix: formatPrefix
	  };
	}

	var locale$1;
	defaultLocale$1({
	  thousands: ",",
	  grouping: [3],
	  currency: ["$", ""]
	});
	function defaultLocale$1(definition) {
	  locale$1 = formatLocale$1(definition);
	  locale$1.format;
	  locale$1.formatPrefix;
	  return locale$1;
	}

	function ascending$1 (a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function bisector (f) {
	  let delta = f;
	  let compare = f;
	  if (f.length === 1) {
	    delta = (d, x) => f(d) - x;
	    compare = ascendingComparator(f);
	  }
	  function left(a, x, lo, hi) {
	    if (lo == null) lo = 0;
	    if (hi == null) hi = a.length;
	    while (lo < hi) {
	      const mid = lo + hi >>> 1;
	      if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
	    }
	    return lo;
	  }
	  function right(a, x, lo, hi) {
	    if (lo == null) lo = 0;
	    if (hi == null) hi = a.length;
	    while (lo < hi) {
	      const mid = lo + hi >>> 1;
	      if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
	    }
	    return lo;
	  }
	  function center(a, x, lo, hi) {
	    if (lo == null) lo = 0;
	    if (hi == null) hi = a.length;
	    const i = left(a, x, lo, hi - 1);
	    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
	  }
	  return {
	    left,
	    center,
	    right
	  };
	}
	function ascendingComparator(f) {
	  return (d, x) => ascending$1(f(d), x);
	}

	function number (x) {
	  return x === null ? NaN : +x;
	}

	bisector(ascending$1);
	bisector(number).center;

	var pi = Math.PI;
	var tau = pi * 2;
	var abs = Math.abs;

	function rotationIdentity(lambda, phi) {
	  if (abs(lambda) > pi) lambda -= Math.round(lambda / tau) * tau;
	  return [lambda, phi];
	}
	rotationIdentity.invert = rotationIdentity;

	function TransformStream() {}
	TransformStream.prototype = {
	  constructor: TransformStream,
	  point: function (x, y) {
	    this.stream.point(x, y);
	  },
	  sphere: function () {
	    this.stream.sphere();
	  },
	  lineStart: function () {
	    this.stream.lineStart();
	  },
	  lineEnd: function () {
	    this.stream.lineEnd();
	  },
	  polygonStart: function () {
	    this.stream.polygonStart();
	  },
	  polygonEnd: function () {
	    this.stream.polygonEnd();
	  }
	};

	function equirectangularRaw(lambda, phi) {
	  return [lambda, phi];
	}
	equirectangularRaw.invert = equirectangularRaw;

	function count(node) {
	  var sum = 0,
	    children = node.children,
	    i = children && children.length;
	  if (!i) sum = 1;else while (--i >= 0) sum += children[i].value;
	  node.value = sum;
	}
	function node_count () {
	  return this.eachAfter(count);
	}

	function node_each (callback, that) {
	  let index = -1;
	  for (const node of this) {
	    callback.call(that, node, ++index, this);
	  }
	  return this;
	}

	function node_eachBefore (callback, that) {
	  var node = this,
	    nodes = [node],
	    children,
	    i,
	    index = -1;
	  while (node = nodes.pop()) {
	    callback.call(that, node, ++index, this);
	    if (children = node.children) {
	      for (i = children.length - 1; i >= 0; --i) {
	        nodes.push(children[i]);
	      }
	    }
	  }
	  return this;
	}

	function node_eachAfter (callback, that) {
	  var node = this,
	    nodes = [node],
	    next = [],
	    children,
	    i,
	    n,
	    index = -1;
	  while (node = nodes.pop()) {
	    next.push(node);
	    if (children = node.children) {
	      for (i = 0, n = children.length; i < n; ++i) {
	        nodes.push(children[i]);
	      }
	    }
	  }
	  while (node = next.pop()) {
	    callback.call(that, node, ++index, this);
	  }
	  return this;
	}

	function node_find (callback, that) {
	  let index = -1;
	  for (const node of this) {
	    if (callback.call(that, node, ++index, this)) {
	      return node;
	    }
	  }
	}

	function node_sum (value) {
	  return this.eachAfter(function (node) {
	    var sum = +value(node.data) || 0,
	      children = node.children,
	      i = children && children.length;
	    while (--i >= 0) sum += children[i].value;
	    node.value = sum;
	  });
	}

	function node_sort (compare) {
	  return this.eachBefore(function (node) {
	    if (node.children) {
	      node.children.sort(compare);
	    }
	  });
	}

	function node_path (end) {
	  var start = this,
	    ancestor = leastCommonAncestor(start, end),
	    nodes = [start];
	  while (start !== ancestor) {
	    start = start.parent;
	    nodes.push(start);
	  }
	  var k = nodes.length;
	  while (end !== ancestor) {
	    nodes.splice(k, 0, end);
	    end = end.parent;
	  }
	  return nodes;
	}
	function leastCommonAncestor(a, b) {
	  if (a === b) return a;
	  var aNodes = a.ancestors(),
	    bNodes = b.ancestors(),
	    c = null;
	  a = aNodes.pop();
	  b = bNodes.pop();
	  while (a === b) {
	    c = a;
	    a = aNodes.pop();
	    b = bNodes.pop();
	  }
	  return c;
	}

	function node_ancestors () {
	  var node = this,
	    nodes = [node];
	  while (node = node.parent) {
	    nodes.push(node);
	  }
	  return nodes;
	}

	function node_descendants () {
	  return Array.from(this);
	}

	function node_leaves () {
	  var leaves = [];
	  this.eachBefore(function (node) {
	    if (!node.children) {
	      leaves.push(node);
	    }
	  });
	  return leaves;
	}

	function node_links () {
	  var root = this,
	    links = [];
	  root.each(function (node) {
	    if (node !== root) {
	      // Don’t include the root’s parent, if any.
	      links.push({
	        source: node.parent,
	        target: node
	      });
	    }
	  });
	  return links;
	}

	function* node_iterator () {
	  var node = this,
	    current,
	    next = [node],
	    children,
	    i,
	    n;
	  do {
	    current = next.reverse(), next = [];
	    while (node = current.pop()) {
	      yield node;
	      if (children = node.children) {
	        for (i = 0, n = children.length; i < n; ++i) {
	          next.push(children[i]);
	        }
	      }
	    }
	  } while (next.length);
	}

	function hierarchy(data, children) {
	  if (data instanceof Map) {
	    data = [undefined, data];
	    if (children === undefined) children = mapChildren;
	  } else if (children === undefined) {
	    children = objectChildren;
	  }
	  var root = new Node(data),
	    node,
	    nodes = [root],
	    child,
	    childs,
	    i,
	    n;
	  while (node = nodes.pop()) {
	    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
	      node.children = childs;
	      for (i = n - 1; i >= 0; --i) {
	        nodes.push(child = childs[i] = new Node(childs[i]));
	        child.parent = node;
	        child.depth = node.depth + 1;
	      }
	    }
	  }
	  return root.eachBefore(computeHeight);
	}
	function node_copy() {
	  return hierarchy(this).eachBefore(copyData);
	}
	function objectChildren(d) {
	  return d.children;
	}
	function mapChildren(d) {
	  return Array.isArray(d) ? d[1] : null;
	}
	function copyData(node) {
	  if (node.data.value !== undefined) node.value = node.data.value;
	  node.data = node.data.data;
	}
	function computeHeight(node) {
	  var height = 0;
	  do node.height = height; while ((node = node.parent) && node.height < ++height);
	}
	function Node(data) {
	  this.data = data;
	  this.depth = this.height = 0;
	  this.parent = null;
	}
	Node.prototype = hierarchy.prototype = {
	  constructor: Node,
	  count: node_count,
	  each: node_each,
	  eachAfter: node_eachAfter,
	  eachBefore: node_eachBefore,
	  find: node_find,
	  sum: node_sum,
	  sort: node_sort,
	  path: node_path,
	  ancestors: node_ancestors,
	  descendants: node_descendants,
	  leaves: node_leaves,
	  links: node_links,
	  copy: node_copy,
	  [Symbol.iterator]: node_iterator
	};

	function treemapDice (parent, x0, y0, x1, y1) {
	  var nodes = parent.children,
	    node,
	    i = -1,
	    n = nodes.length,
	    k = parent.value && (x1 - x0) / parent.value;
	  while (++i < n) {
	    node = nodes[i], node.y0 = y0, node.y1 = y1;
	    node.x0 = x0, node.x1 = x0 += node.value * k;
	  }
	}

	Object.create(Node.prototype);

	function treemapSlice (parent, x0, y0, x1, y1) {
	  var nodes = parent.children,
	    node,
	    i = -1,
	    n = nodes.length,
	    k = parent.value && (y1 - y0) / parent.value;
	  while (++i < n) {
	    node = nodes[i], node.x0 = x0, node.x1 = x1;
	    node.y0 = y0, node.y1 = y0 += node.value * k;
	  }
	}

	var phi = (1 + Math.sqrt(5)) / 2;
	function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
	  var rows = [],
	    nodes = parent.children,
	    row,
	    nodeValue,
	    i0 = 0,
	    i1 = 0,
	    n = nodes.length,
	    dx,
	    dy,
	    value = parent.value,
	    sumValue,
	    minValue,
	    maxValue,
	    newRatio,
	    minRatio,
	    alpha,
	    beta;
	  while (i0 < n) {
	    dx = x1 - x0, dy = y1 - y0;

	    // Find the next non-empty node.
	    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
	    minValue = maxValue = sumValue;
	    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
	    beta = sumValue * sumValue * alpha;
	    minRatio = Math.max(maxValue / beta, beta / minValue);

	    // Keep adding nodes while the aspect ratio maintains or improves.
	    for (; i1 < n; ++i1) {
	      sumValue += nodeValue = nodes[i1].value;
	      if (nodeValue < minValue) minValue = nodeValue;
	      if (nodeValue > maxValue) maxValue = nodeValue;
	      beta = sumValue * sumValue * alpha;
	      newRatio = Math.max(maxValue / beta, beta / minValue);
	      if (newRatio > minRatio) {
	        sumValue -= nodeValue;
	        break;
	      }
	      minRatio = newRatio;
	    }

	    // Position and record the row orientation.
	    rows.push(row = {
	      value: sumValue,
	      dice: dx < dy,
	      children: nodes.slice(i0, i1)
	    });
	    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
	    value -= sumValue, i0 = i1;
	  }
	  return rows;
	}
	((function custom(ratio) {
	  function squarify(parent, x0, y0, x1, y1) {
	    squarifyRatio(ratio, parent, x0, y0, x1, y1);
	  }
	  squarify.ratio = function (x) {
	    return custom((x = +x) > 1 ? x : 1);
	  };
	  return squarify;
	}))(phi);

	((function custom(ratio) {
	  function resquarify(parent, x0, y0, x1, y1) {
	    if ((rows = parent._squarify) && rows.ratio === ratio) {
	      var rows,
	        row,
	        nodes,
	        i,
	        j = -1,
	        n,
	        m = rows.length,
	        value = parent.value;
	      while (++j < m) {
	        row = rows[j], nodes = row.children;
	        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
	        if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);else treemapSlice(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
	        value -= row.value;
	      }
	    } else {
	      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
	      rows.ratio = ratio;
	    }
	  }
	  resquarify.ratio = function (x) {
	    return custom((x = +x) > 1 ? x : 1);
	  };
	  return resquarify;
	}))(phi);

	var constant$2 = (x => () => x);

	function linear(a, d) {
	  return function (t) {
	    return a + t * d;
	  };
	}
	function exponential(a, b, y) {
	  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
	    return Math.pow(a + t * b, y);
	  };
	}
	function hue(a, b) {
	  var d = b - a;
	  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$2(isNaN(a) ? b : a);
	}
	function gamma$1(y) {
	  return (y = +y) === 1 ? nogamma : function (a, b) {
	    return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
	  };
	}
	function nogamma(a, b) {
	  var d = b - a;
	  return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
	}

	var interpolateRgb = (function rgbGamma(y) {
	  var color = gamma$1(y);
	  function rgb$1(start, end) {
	    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
	      g = color(start.g, end.g),
	      b = color(start.b, end.b),
	      opacity = nogamma(start.opacity, end.opacity);
	    return function (t) {
	      start.r = r(t);
	      start.g = g(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	  rgb$1.gamma = rgbGamma;
	  return rgb$1;
	})(1);

	function interpolateNumber (a, b) {
	  return a = +a, b = +b, function (t) {
	    return a * (1 - t) + b * t;
	  };
	}

	var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	  reB = new RegExp(reA.source, "g");
	function zero(b) {
	  return function () {
	    return b;
	  };
	}
	function one(b) {
	  return function (t) {
	    return b(t) + "";
	  };
	}
	function interpolateString (a, b) {
	  var bi = reA.lastIndex = reB.lastIndex = 0,
	    // scan index for next number in b
	    am,
	    // current match in a
	    bm,
	    // current match in b
	    bs,
	    // string preceding current number in b, if any
	    i = -1,
	    // index in s
	    s = [],
	    // string constants and placeholders
	    q = []; // number interpolators

	  // Coerce inputs to strings.
	  a = a + "", b = b + "";

	  // Interpolate pairs of numbers in a & b.
	  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
	    if ((bs = bm.index) > bi) {
	      // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) {
	      // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else {
	      // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({
	        i: i,
	        x: interpolateNumber(am, bm)
	      });
	    }
	    bi = reB.lastIndex;
	  }

	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }

	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
	    for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	    return s.join("");
	  });
	}

	var degrees = 180 / Math.PI;
	var identity = {
	  translateX: 0,
	  translateY: 0,
	  rotate: 0,
	  skewX: 0,
	  scaleX: 1,
	  scaleY: 1
	};
	function decompose (a, b, c, d, e, f) {
	  var scaleX, scaleY, skewX;
	  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	  return {
	    translateX: e,
	    translateY: f,
	    rotate: Math.atan2(b, a) * degrees,
	    skewX: Math.atan(skewX) * degrees,
	    scaleX: scaleX,
	    scaleY: scaleY
	  };
	}

	var svgNode;

	/* eslint-disable no-undef */
	function parseCss(value) {
	  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
	  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
	}
	function parseSvg(value) {
	  if (value == null) return identity;
	  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	  svgNode.setAttribute("transform", value);
	  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
	  value = value.matrix;
	  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	}

	function interpolateTransform(parse, pxComma, pxParen, degParen) {
	  function pop(s) {
	    return s.length ? s.pop() + " " : "";
	  }
	  function translate(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push("translate(", null, pxComma, null, pxParen);
	      q.push({
	        i: i - 4,
	        x: interpolateNumber(xa, xb)
	      }, {
	        i: i - 2,
	        x: interpolateNumber(ya, yb)
	      });
	    } else if (xb || yb) {
	      s.push("translate(" + xb + pxComma + yb + pxParen);
	    }
	  }
	  function rotate(a, b, s, q) {
	    if (a !== b) {
	      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
	      q.push({
	        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
	        x: interpolateNumber(a, b)
	      });
	    } else if (b) {
	      s.push(pop(s) + "rotate(" + b + degParen);
	    }
	  }
	  function skewX(a, b, s, q) {
	    if (a !== b) {
	      q.push({
	        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
	        x: interpolateNumber(a, b)
	      });
	    } else if (b) {
	      s.push(pop(s) + "skewX(" + b + degParen);
	    }
	  }
	  function scale(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: interpolateNumber(xa, xb)
	      }, {
	        i: i - 2,
	        x: interpolateNumber(ya, yb)
	      });
	    } else if (xb !== 1 || yb !== 1) {
	      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	    }
	  }
	  return function (a, b) {
	    var s = [],
	      // string constants and placeholders
	      q = []; // number interpolators
	    a = parse(a), b = parse(b);
	    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skewX(a.skewX, b.skewX, s, q);
	    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	    a = b = null; // gc
	    return function (t) {
	      var i = -1,
	        n = q.length,
	        o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  };
	}
	var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

	var epsilon2 = 1e-12;
	function cosh(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}
	function sinh(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}
	function tanh(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}
	((function zoomRho(rho, rho2, rho4) {
	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0],
	      uy0 = p0[1],
	      w0 = p0[2],
	      ux1 = p1[0],
	      uy1 = p1[1],
	      w1 = p1[2],
	      dx = ux1 - ux0,
	      dy = uy1 - uy0,
	      d2 = dx * dx + dy * dy,
	      i,
	      S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function (t) {
	        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
	      };
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function (t) {
	        var s = t * S,
	          coshr0 = cosh(r0),
	          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
	      };
	    }
	    i.duration = S * 1000 * rho / Math.SQRT2;
	    return i;
	  }
	  zoom.rho = function (_) {
	    var _1 = Math.max(1e-3, +_),
	      _2 = _1 * _1,
	      _4 = _2 * _2;
	    return zoomRho(_1, _2, _4);
	  };
	  return zoom;
	}))(Math.SQRT2, 2, 4);

	function cubehelix(hue) {
	  return function cubehelixGamma(y) {
	    y = +y;
	    function cubehelix(start, end) {
	      var h = hue((start = cubehelix$1(start)).h, (end = cubehelix$1(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	      return function (t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	    cubehelix.gamma = cubehelixGamma;
	    return cubehelix;
	  }(1);
	}
	cubehelix(hue);
	cubehelix(nogamma);

	var defaultSource = Math.random;

	((function sourceRandomUniform(source) {
	  function randomUniform(min, max) {
	    min = min == null ? 0 : +min;
	    max = max == null ? 1 : +max;
	    if (arguments.length === 1) max = min, min = 0;else max -= min;
	    return function () {
	      return source() * max + min;
	    };
	  }
	  randomUniform.source = sourceRandomUniform;
	  return randomUniform;
	}))(defaultSource);

	((function sourceRandomInt(source) {
	  function randomInt(min, max) {
	    if (arguments.length < 2) max = min, min = 0;
	    min = Math.floor(min);
	    max = Math.floor(max) - min;
	    return function () {
	      return Math.floor(source() * max + min);
	    };
	  }
	  randomInt.source = sourceRandomInt;
	  return randomInt;
	}))(defaultSource);

	var normal = (function sourceRandomNormal(source) {
	  function randomNormal(mu, sigma) {
	    var x, r;
	    mu = mu == null ? 0 : +mu;
	    sigma = sigma == null ? 1 : +sigma;
	    return function () {
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
	})(defaultSource);

	((function sourceRandomLogNormal(source) {
	  var N = normal.source(source);
	  function randomLogNormal() {
	    var randomNormal = N.apply(this, arguments);
	    return function () {
	      return Math.exp(randomNormal());
	    };
	  }
	  randomLogNormal.source = sourceRandomLogNormal;
	  return randomLogNormal;
	}))(defaultSource);

	var irwinHall = (function sourceRandomIrwinHall(source) {
	  function randomIrwinHall(n) {
	    if ((n = +n) <= 0) return () => 0;
	    return function () {
	      for (var sum = 0, i = n; i > 1; --i) sum += source();
	      return sum + i * source();
	    };
	  }
	  randomIrwinHall.source = sourceRandomIrwinHall;
	  return randomIrwinHall;
	})(defaultSource);

	((function sourceRandomBates(source) {
	  var I = irwinHall.source(source);
	  function randomBates(n) {
	    // use limiting distribution at n === 0
	    if ((n = +n) === 0) return source;
	    var randomIrwinHall = I(n);
	    return function () {
	      return randomIrwinHall() / n;
	    };
	  }
	  randomBates.source = sourceRandomBates;
	  return randomBates;
	}))(defaultSource);

	((function sourceRandomExponential(source) {
	  function randomExponential(lambda) {
	    return function () {
	      return -Math.log1p(-source()) / lambda;
	    };
	  }
	  randomExponential.source = sourceRandomExponential;
	  return randomExponential;
	}))(defaultSource);

	((function sourceRandomPareto(source) {
	  function randomPareto(alpha) {
	    if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
	    alpha = 1 / -alpha;
	    return function () {
	      return Math.pow(1 - source(), alpha);
	    };
	  }
	  randomPareto.source = sourceRandomPareto;
	  return randomPareto;
	}))(defaultSource);

	((function sourceRandomBernoulli(source) {
	  function randomBernoulli(p) {
	    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
	    return function () {
	      return Math.floor(source() + p);
	    };
	  }
	  randomBernoulli.source = sourceRandomBernoulli;
	  return randomBernoulli;
	}))(defaultSource);

	var geometric = (function sourceRandomGeometric(source) {
	  function randomGeometric(p) {
	    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
	    if (p === 0) return () => Infinity;
	    if (p === 1) return () => 1;
	    p = Math.log1p(-p);
	    return function () {
	      return 1 + Math.floor(Math.log1p(-source()) / p);
	    };
	  }
	  randomGeometric.source = sourceRandomGeometric;
	  return randomGeometric;
	})(defaultSource);

	var gamma = (function sourceRandomGamma(source) {
	  var randomNormal = normal.source(source)();
	  function randomGamma(k, theta) {
	    if ((k = +k) < 0) throw new RangeError("invalid k");
	    // degenerate distribution if k === 0
	    if (k === 0) return () => 0;
	    theta = theta == null ? 1 : +theta;
	    // exponential distribution if k === 1
	    if (k === 1) return () => -Math.log1p(-source()) * theta;
	    var d = (k < 1 ? k + 1 : k) - 1 / 3,
	      c = 1 / (3 * Math.sqrt(d)),
	      multiplier = k < 1 ? () => Math.pow(source(), 1 / k) : () => 1;
	    return function () {
	      do {
	        do {
	          var x = randomNormal(),
	            v = 1 + c * x;
	        } while (v <= 0);
	        v *= v * v;
	        var u = 1 - source();
	      } while (u >= 1 - 0.0331 * x * x * x * x && Math.log(u) >= 0.5 * x * x + d * (1 - v + Math.log(v)));
	      return d * v * multiplier() * theta;
	    };
	  }
	  randomGamma.source = sourceRandomGamma;
	  return randomGamma;
	})(defaultSource);

	var beta = (function sourceRandomBeta(source) {
	  var G = gamma.source(source);
	  function randomBeta(alpha, beta) {
	    var X = G(alpha),
	      Y = G(beta);
	    return function () {
	      var x = X();
	      return x === 0 ? 0 : x / (x + Y());
	    };
	  }
	  randomBeta.source = sourceRandomBeta;
	  return randomBeta;
	})(defaultSource);

	var binomial = (function sourceRandomBinomial(source) {
	  var G = geometric.source(source),
	    B = beta.source(source);
	  function randomBinomial(n, p) {
	    n = +n;
	    if ((p = +p) >= 1) return () => n;
	    if (p <= 0) return () => 0;
	    return function () {
	      var acc = 0,
	        nn = n,
	        pp = p;
	      while (nn * pp > 16 && nn * (1 - pp) > 16) {
	        var i = Math.floor((nn + 1) * pp),
	          y = B(i, nn - i + 1)();
	        if (y <= pp) {
	          acc += i;
	          nn -= i;
	          pp = (pp - y) / (1 - y);
	        } else {
	          nn = i - 1;
	          pp /= y;
	        }
	      }
	      var sign = pp < 0.5,
	        pFinal = sign ? pp : 1 - pp,
	        g = G(pFinal);
	      for (var s = g(), k = 0; s <= nn; ++k) s += g();
	      return acc + (sign ? k : nn - k);
	    };
	  }
	  randomBinomial.source = sourceRandomBinomial;
	  return randomBinomial;
	})(defaultSource);

	((function sourceRandomWeibull(source) {
	  function randomWeibull(k, a, b) {
	    var outerFunc;
	    if ((k = +k) === 0) {
	      outerFunc = x => -Math.log(x);
	    } else {
	      k = 1 / k;
	      outerFunc = x => Math.pow(x, k);
	    }
	    a = a == null ? 0 : +a;
	    b = b == null ? 1 : +b;
	    return function () {
	      return a + b * outerFunc(-Math.log1p(-source()));
	    };
	  }
	  randomWeibull.source = sourceRandomWeibull;
	  return randomWeibull;
	}))(defaultSource);

	((function sourceRandomCauchy(source) {
	  function randomCauchy(a, b) {
	    a = a == null ? 0 : +a;
	    b = b == null ? 1 : +b;
	    return function () {
	      return a + b * Math.tan(Math.PI * source());
	    };
	  }
	  randomCauchy.source = sourceRandomCauchy;
	  return randomCauchy;
	}))(defaultSource);

	((function sourceRandomLogistic(source) {
	  function randomLogistic(a, b) {
	    a = a == null ? 0 : +a;
	    b = b == null ? 1 : +b;
	    return function () {
	      var u = source();
	      return a + b * Math.log(u / (1 - u));
	    };
	  }
	  randomLogistic.source = sourceRandomLogistic;
	  return randomLogistic;
	}))(defaultSource);

	((function sourceRandomPoisson(source) {
	  var G = gamma.source(source),
	    B = binomial.source(source);
	  function randomPoisson(lambda) {
	    return function () {
	      var acc = 0,
	        l = lambda;
	      while (l > 16) {
	        var n = Math.floor(0.875 * l),
	          t = G(n)();
	        if (t > l) return acc + B(n - 1, l / t)();
	        acc += n;
	        l -= t;
	      }
	      for (var s = -Math.log1p(-source()), k = 0; s <= l; ++k) s -= Math.log1p(-source());
	      return acc + k;
	    };
	  }
	  randomPoisson.source = sourceRandomPoisson;
	  return randomPoisson;
	}))(defaultSource);

	const t0 = new Date(),
	  t1 = new Date();
	function timeInterval(floori, offseti, count, field) {
	  function interval(date) {
	    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
	  }
	  interval.floor = date => {
	    return floori(date = new Date(+date)), date;
	  };
	  interval.ceil = date => {
	    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	  };
	  interval.round = date => {
	    const d0 = interval(date),
	      d1 = interval.ceil(date);
	    return date - d0 < d1 - date ? d0 : d1;
	  };
	  interval.offset = (date, step) => {
	    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	  };
	  interval.range = (start, stop, step) => {
	    const range = [];
	    start = interval.ceil(start);
	    step = step == null ? 1 : Math.floor(step);
	    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	    let previous;
	    do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
	    return range;
	  };
	  interval.filter = test => {
	    return timeInterval(date => {
	      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
	    }, (date, step) => {
	      if (date >= date) {
	        if (step < 0) while (++step <= 0) {
	          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
	        } else while (--step >= 0) {
	          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
	        }
	      }
	    });
	  };

	  if (count) {
	    interval.count = (start, end) => {
	      t0.setTime(+start), t1.setTime(+end);
	      floori(t0), floori(t1);
	      return Math.floor(count(t0, t1));
	    };
	    interval.every = step => {
	      step = Math.floor(step);
	      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? d => field(d) % step === 0 : d => interval.count(0, d) % step === 0);
	    };
	  }
	  return interval;
	}

	const millisecond = timeInterval(() => {
	  // noop
	}, (date, step) => {
	  date.setTime(+date + step);
	}, (start, end) => {
	  return end - start;
	});

	// An optimized implementation for this simple case.
	millisecond.every = k => {
	  k = Math.floor(k);
	  if (!isFinite(k) || !(k > 0)) return null;
	  if (!(k > 1)) return millisecond;
	  return timeInterval(date => {
	    date.setTime(Math.floor(date / k) * k);
	  }, (date, step) => {
	    date.setTime(+date + step * k);
	  }, (start, end) => {
	    return (end - start) / k;
	  });
	};
	millisecond.range;

	const durationSecond = 1000;
	const durationMinute = durationSecond * 60;
	const durationHour = durationMinute * 60;
	const durationDay = durationHour * 24;
	const durationWeek = durationDay * 7;

	const second = timeInterval(date => {
	  date.setTime(date - date.getMilliseconds());
	}, (date, step) => {
	  date.setTime(+date + step * durationSecond);
	}, (start, end) => {
	  return (end - start) / durationSecond;
	}, date => {
	  return date.getUTCSeconds();
	});
	second.range;

	const timeMinute = timeInterval(date => {
	  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
	}, (date, step) => {
	  date.setTime(+date + step * durationMinute);
	}, (start, end) => {
	  return (end - start) / durationMinute;
	}, date => {
	  return date.getMinutes();
	});
	timeMinute.range;
	const utcMinute = timeInterval(date => {
	  date.setUTCSeconds(0, 0);
	}, (date, step) => {
	  date.setTime(+date + step * durationMinute);
	}, (start, end) => {
	  return (end - start) / durationMinute;
	}, date => {
	  return date.getUTCMinutes();
	});
	utcMinute.range;

	const timeHour = timeInterval(date => {
	  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
	}, (date, step) => {
	  date.setTime(+date + step * durationHour);
	}, (start, end) => {
	  return (end - start) / durationHour;
	}, date => {
	  return date.getHours();
	});
	timeHour.range;
	const utcHour = timeInterval(date => {
	  date.setUTCMinutes(0, 0, 0);
	}, (date, step) => {
	  date.setTime(+date + step * durationHour);
	}, (start, end) => {
	  return (end - start) / durationHour;
	}, date => {
	  return date.getUTCHours();
	});
	utcHour.range;

	const timeDay = timeInterval(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay, date => date.getDate() - 1);
	timeDay.range;
	const utcDay = timeInterval(date => {
	  date.setUTCHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setUTCDate(date.getUTCDate() + step);
	}, (start, end) => {
	  return (end - start) / durationDay;
	}, date => {
	  return date.getUTCDate() - 1;
	});
	utcDay.range;
	const unixDay = timeInterval(date => {
	  date.setUTCHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setUTCDate(date.getUTCDate() + step);
	}, (start, end) => {
	  return (end - start) / durationDay;
	}, date => {
	  return Math.floor(date / durationDay);
	});
	unixDay.range;

	function timeWeekday(i) {
	  return timeInterval(date => {
	    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    date.setHours(0, 0, 0, 0);
	  }, (date, step) => {
	    date.setDate(date.getDate() + step * 7);
	  }, (start, end) => {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
	  });
	}
	const timeSunday = timeWeekday(0);
	const timeMonday = timeWeekday(1);
	const timeTuesday = timeWeekday(2);
	const timeWednesday = timeWeekday(3);
	const timeThursday = timeWeekday(4);
	const timeFriday = timeWeekday(5);
	const timeSaturday = timeWeekday(6);
	timeSunday.range;
	timeMonday.range;
	timeTuesday.range;
	timeWednesday.range;
	timeThursday.range;
	timeFriday.range;
	timeSaturday.range;
	function utcWeekday(i) {
	  return timeInterval(date => {
	    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    date.setUTCHours(0, 0, 0, 0);
	  }, (date, step) => {
	    date.setUTCDate(date.getUTCDate() + step * 7);
	  }, (start, end) => {
	    return (end - start) / durationWeek;
	  });
	}
	const utcSunday = utcWeekday(0);
	const utcMonday = utcWeekday(1);
	const utcTuesday = utcWeekday(2);
	const utcWednesday = utcWeekday(3);
	const utcThursday = utcWeekday(4);
	const utcFriday = utcWeekday(5);
	const utcSaturday = utcWeekday(6);
	utcSunday.range;
	utcMonday.range;
	utcTuesday.range;
	utcWednesday.range;
	utcThursday.range;
	utcFriday.range;
	utcSaturday.range;

	const timeMonth = timeInterval(date => {
	  date.setDate(1);
	  date.setHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setMonth(date.getMonth() + step);
	}, (start, end) => {
	  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	}, date => {
	  return date.getMonth();
	});
	timeMonth.range;
	const utcMonth = timeInterval(date => {
	  date.setUTCDate(1);
	  date.setUTCHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setUTCMonth(date.getUTCMonth() + step);
	}, (start, end) => {
	  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	}, date => {
	  return date.getUTCMonth();
	});
	utcMonth.range;

	const timeYear = timeInterval(date => {
	  date.setMonth(0, 1);
	  date.setHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setFullYear(date.getFullYear() + step);
	}, (start, end) => {
	  return end.getFullYear() - start.getFullYear();
	}, date => {
	  return date.getFullYear();
	});

	// An optimized implementation for this simple case.
	timeYear.every = k => {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
	    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, (date, step) => {
	    date.setFullYear(date.getFullYear() + step * k);
	  });
	};
	timeYear.range;
	const utcYear = timeInterval(date => {
	  date.setUTCMonth(0, 1);
	  date.setUTCHours(0, 0, 0, 0);
	}, (date, step) => {
	  date.setUTCFullYear(date.getUTCFullYear() + step);
	}, (start, end) => {
	  return end.getUTCFullYear() - start.getUTCFullYear();
	}, date => {
	  return date.getUTCFullYear();
	});

	// An optimized implementation for this simple case.
	utcYear.every = k => {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
	    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, (date, step) => {
	    date.setUTCFullYear(date.getUTCFullYear() + step * k);
	  });
	};
	utcYear.range;

	function localDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	    date.setFullYear(d.y);
	    return date;
	  }
	  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	}
	function utcDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	    date.setUTCFullYear(d.y);
	    return date;
	  }
	  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	}
	function newDate(y, m, d) {
	  return {
	    y: y,
	    m: m,
	    d: d,
	    H: 0,
	    M: 0,
	    S: 0,
	    L: 0
	  };
	}
	function formatLocale(locale) {
	  var locale_dateTime = locale.dateTime,
	    locale_date = locale.date,
	    locale_time = locale.time,
	    locale_periods = locale.periods,
	    locale_weekdays = locale.days,
	    locale_shortWeekdays = locale.shortDays,
	    locale_months = locale.months,
	    locale_shortMonths = locale.shortMonths;
	  var periodRe = formatRe(locale_periods),
	    periodLookup = formatLookup(locale_periods),
	    weekdayRe = formatRe(locale_weekdays),
	    weekdayLookup = formatLookup(locale_weekdays),
	    shortWeekdayRe = formatRe(locale_shortWeekdays),
	    shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	    monthRe = formatRe(locale_months),
	    monthLookup = formatLookup(locale_months),
	    shortMonthRe = formatRe(locale_shortMonths),
	    shortMonthLookup = formatLookup(locale_shortMonths);
	  var formats = {
	    "a": formatShortWeekday,
	    "A": formatWeekday,
	    "b": formatShortMonth,
	    "B": formatMonth,
	    "c": null,
	    "d": formatDayOfMonth,
	    "e": formatDayOfMonth,
	    "f": formatMicroseconds,
	    "g": formatYearISO,
	    "G": formatFullYearISO,
	    "H": formatHour24,
	    "I": formatHour12,
	    "j": formatDayOfYear,
	    "L": formatMilliseconds,
	    "m": formatMonthNumber,
	    "M": formatMinutes,
	    "p": formatPeriod,
	    "q": formatQuarter,
	    "Q": formatUnixTimestamp,
	    "s": formatUnixTimestampSeconds,
	    "S": formatSeconds,
	    "u": formatWeekdayNumberMonday,
	    "U": formatWeekNumberSunday,
	    "V": formatWeekNumberISO,
	    "w": formatWeekdayNumberSunday,
	    "W": formatWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatYear,
	    "Y": formatFullYear,
	    "Z": formatZone,
	    "%": formatLiteralPercent
	  };
	  var utcFormats = {
	    "a": formatUTCShortWeekday,
	    "A": formatUTCWeekday,
	    "b": formatUTCShortMonth,
	    "B": formatUTCMonth,
	    "c": null,
	    "d": formatUTCDayOfMonth,
	    "e": formatUTCDayOfMonth,
	    "f": formatUTCMicroseconds,
	    "g": formatUTCYearISO,
	    "G": formatUTCFullYearISO,
	    "H": formatUTCHour24,
	    "I": formatUTCHour12,
	    "j": formatUTCDayOfYear,
	    "L": formatUTCMilliseconds,
	    "m": formatUTCMonthNumber,
	    "M": formatUTCMinutes,
	    "p": formatUTCPeriod,
	    "q": formatUTCQuarter,
	    "Q": formatUnixTimestamp,
	    "s": formatUnixTimestampSeconds,
	    "S": formatUTCSeconds,
	    "u": formatUTCWeekdayNumberMonday,
	    "U": formatUTCWeekNumberSunday,
	    "V": formatUTCWeekNumberISO,
	    "w": formatUTCWeekdayNumberSunday,
	    "W": formatUTCWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatUTCYear,
	    "Y": formatUTCFullYear,
	    "Z": formatUTCZone,
	    "%": formatLiteralPercent
	  };
	  var parses = {
	    "a": parseShortWeekday,
	    "A": parseWeekday,
	    "b": parseShortMonth,
	    "B": parseMonth,
	    "c": parseLocaleDateTime,
	    "d": parseDayOfMonth,
	    "e": parseDayOfMonth,
	    "f": parseMicroseconds,
	    "g": parseYear,
	    "G": parseFullYear,
	    "H": parseHour24,
	    "I": parseHour24,
	    "j": parseDayOfYear,
	    "L": parseMilliseconds,
	    "m": parseMonthNumber,
	    "M": parseMinutes,
	    "p": parsePeriod,
	    "q": parseQuarter,
	    "Q": parseUnixTimestamp,
	    "s": parseUnixTimestampSeconds,
	    "S": parseSeconds,
	    "u": parseWeekdayNumberMonday,
	    "U": parseWeekNumberSunday,
	    "V": parseWeekNumberISO,
	    "w": parseWeekdayNumberSunday,
	    "W": parseWeekNumberMonday,
	    "x": parseLocaleDate,
	    "X": parseLocaleTime,
	    "y": parseYear,
	    "Y": parseFullYear,
	    "Z": parseZone,
	    "%": parseLiteralPercent
	  };

	  // These recursive directive definitions must be deferred.
	  formats.x = newFormat(locale_date, formats);
	  formats.X = newFormat(locale_time, formats);
	  formats.c = newFormat(locale_dateTime, formats);
	  utcFormats.x = newFormat(locale_date, utcFormats);
	  utcFormats.X = newFormat(locale_time, utcFormats);
	  utcFormats.c = newFormat(locale_dateTime, utcFormats);
	  function newFormat(specifier, formats) {
	    return function (date) {
	      var string = [],
	        i = -1,
	        j = 0,
	        n = specifier.length,
	        c,
	        pad,
	        format;
	      if (!(date instanceof Date)) date = new Date(+date);
	      while (++i < n) {
	        if (specifier.charCodeAt(i) === 37) {
	          string.push(specifier.slice(j, i));
	          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
	          if (format = formats[c]) c = format(date, pad);
	          string.push(c);
	          j = i + 1;
	        }
	      }
	      string.push(specifier.slice(j, i));
	      return string.join("");
	    };
	  }
	  function newParse(specifier, Z) {
	    return function (string) {
	      var d = newDate(1900, undefined, 1),
	        i = parseSpecifier(d, specifier, string += "", 0),
	        week,
	        day;
	      if (i != string.length) return null;

	      // If a UNIX timestamp is specified, return it.
	      if ("Q" in d) return new Date(d.Q);
	      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

	      // If this is utcParse, never use the local timezone.
	      if (Z && !("Z" in d)) d.Z = 0;

	      // The am-pm flag is 0 for AM, and 1 for PM.
	      if ("p" in d) d.H = d.H % 12 + d.p * 12;

	      // If the month was not specified, inherit from the quarter.
	      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

	      // Convert day-of-week and week-of-year to day-of-year.
	      if ("V" in d) {
	        if (d.V < 1 || d.V > 53) return null;
	        if (!("w" in d)) d.w = 1;
	        if ("Z" in d) {
	          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
	          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
	          week = utcDay.offset(week, (d.V - 1) * 7);
	          d.y = week.getUTCFullYear();
	          d.m = week.getUTCMonth();
	          d.d = week.getUTCDate() + (d.w + 6) % 7;
	        } else {
	          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
	          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
	          week = timeDay.offset(week, (d.V - 1) * 7);
	          d.y = week.getFullYear();
	          d.m = week.getMonth();
	          d.d = week.getDate() + (d.w + 6) % 7;
	        }
	      } else if ("W" in d || "U" in d) {
	        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
	        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
	        d.m = 0;
	        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	      }

	      // If a time zone is specified, all fields are interpreted as UTC and then
	      // offset according to the specified time zone.
	      if ("Z" in d) {
	        d.H += d.Z / 100 | 0;
	        d.M += d.Z % 100;
	        return utcDate(d);
	      }

	      // Otherwise, all fields are in local time.
	      return localDate(d);
	    };
	  }
	  function parseSpecifier(d, specifier, string, j) {
	    var i = 0,
	      n = specifier.length,
	      m = string.length,
	      c,
	      parse;
	    while (i < n) {
	      if (j >= m) return -1;
	      c = specifier.charCodeAt(i++);
	      if (c === 37) {
	        c = specifier.charAt(i++);
	        parse = parses[c in pads ? specifier.charAt(i++) : c];
	        if (!parse || (j = parse(d, string, j)) < 0) return -1;
	      } else if (c != string.charCodeAt(j++)) {
	        return -1;
	      }
	    }
	    return j;
	  }
	  function parsePeriod(d, string, i) {
	    var n = periodRe.exec(string.slice(i));
	    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	  }
	  function parseShortWeekday(d, string, i) {
	    var n = shortWeekdayRe.exec(string.slice(i));
	    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	  }
	  function parseWeekday(d, string, i) {
	    var n = weekdayRe.exec(string.slice(i));
	    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	  }
	  function parseShortMonth(d, string, i) {
	    var n = shortMonthRe.exec(string.slice(i));
	    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	  }
	  function parseMonth(d, string, i) {
	    var n = monthRe.exec(string.slice(i));
	    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	  }
	  function parseLocaleDateTime(d, string, i) {
	    return parseSpecifier(d, locale_dateTime, string, i);
	  }
	  function parseLocaleDate(d, string, i) {
	    return parseSpecifier(d, locale_date, string, i);
	  }
	  function parseLocaleTime(d, string, i) {
	    return parseSpecifier(d, locale_time, string, i);
	  }
	  function formatShortWeekday(d) {
	    return locale_shortWeekdays[d.getDay()];
	  }
	  function formatWeekday(d) {
	    return locale_weekdays[d.getDay()];
	  }
	  function formatShortMonth(d) {
	    return locale_shortMonths[d.getMonth()];
	  }
	  function formatMonth(d) {
	    return locale_months[d.getMonth()];
	  }
	  function formatPeriod(d) {
	    return locale_periods[+(d.getHours() >= 12)];
	  }
	  function formatQuarter(d) {
	    return 1 + ~~(d.getMonth() / 3);
	  }
	  function formatUTCShortWeekday(d) {
	    return locale_shortWeekdays[d.getUTCDay()];
	  }
	  function formatUTCWeekday(d) {
	    return locale_weekdays[d.getUTCDay()];
	  }
	  function formatUTCShortMonth(d) {
	    return locale_shortMonths[d.getUTCMonth()];
	  }
	  function formatUTCMonth(d) {
	    return locale_months[d.getUTCMonth()];
	  }
	  function formatUTCPeriod(d) {
	    return locale_periods[+(d.getUTCHours() >= 12)];
	  }
	  function formatUTCQuarter(d) {
	    return 1 + ~~(d.getUTCMonth() / 3);
	  }
	  return {
	    format: function (specifier) {
	      var f = newFormat(specifier += "", formats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    parse: function (specifier) {
	      var p = newParse(specifier += "", false);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    },
	    utcFormat: function (specifier) {
	      var f = newFormat(specifier += "", utcFormats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    utcParse: function (specifier) {
	      var p = newParse(specifier += "", true);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    }
	  };
	}
	var pads = {
	    "-": "",
	    "_": " ",
	    "0": "0"
	  },
	  numberRe = /^\s*\d+/,
	  // note: ignores next directive
	  percentRe = /^%/,
	  requoteRe = /[\\^$*+?|[\]().{}]/g;
	function pad(value, fill, width) {
	  var sign = value < 0 ? "-" : "",
	    string = (sign ? -value : value) + "",
	    length = string.length;
	  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	}
	function requote(s) {
	  return s.replace(requoteRe, "\\$&");
	}
	function formatRe(names) {
	  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	}
	function formatLookup(names) {
	  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
	}
	function parseWeekdayNumberSunday(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.w = +n[0], i + n[0].length) : -1;
	}
	function parseWeekdayNumberMonday(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.u = +n[0], i + n[0].length) : -1;
	}
	function parseWeekNumberSunday(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.U = +n[0], i + n[0].length) : -1;
	}
	function parseWeekNumberISO(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.V = +n[0], i + n[0].length) : -1;
	}
	function parseWeekNumberMonday(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.W = +n[0], i + n[0].length) : -1;
	}
	function parseFullYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 4));
	  return n ? (d.y = +n[0], i + n[0].length) : -1;
	}
	function parseYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	}
	function parseZone(d, string, i) {
	  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
	  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	}
	function parseQuarter(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
	}
	function parseMonthNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	}
	function parseDayOfMonth(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.d = +n[0], i + n[0].length) : -1;
	}
	function parseDayOfYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	}
	function parseHour24(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.H = +n[0], i + n[0].length) : -1;
	}
	function parseMinutes(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.M = +n[0], i + n[0].length) : -1;
	}
	function parseSeconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.S = +n[0], i + n[0].length) : -1;
	}
	function parseMilliseconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.L = +n[0], i + n[0].length) : -1;
	}
	function parseMicroseconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 6));
	  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
	}
	function parseLiteralPercent(d, string, i) {
	  var n = percentRe.exec(string.slice(i, i + 1));
	  return n ? i + n[0].length : -1;
	}
	function parseUnixTimestamp(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.Q = +n[0], i + n[0].length) : -1;
	}
	function parseUnixTimestampSeconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.s = +n[0], i + n[0].length) : -1;
	}
	function formatDayOfMonth(d, p) {
	  return pad(d.getDate(), p, 2);
	}
	function formatHour24(d, p) {
	  return pad(d.getHours(), p, 2);
	}
	function formatHour12(d, p) {
	  return pad(d.getHours() % 12 || 12, p, 2);
	}
	function formatDayOfYear(d, p) {
	  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
	}
	function formatMilliseconds(d, p) {
	  return pad(d.getMilliseconds(), p, 3);
	}
	function formatMicroseconds(d, p) {
	  return formatMilliseconds(d, p) + "000";
	}
	function formatMonthNumber(d, p) {
	  return pad(d.getMonth() + 1, p, 2);
	}
	function formatMinutes(d, p) {
	  return pad(d.getMinutes(), p, 2);
	}
	function formatSeconds(d, p) {
	  return pad(d.getSeconds(), p, 2);
	}
	function formatWeekdayNumberMonday(d) {
	  var day = d.getDay();
	  return day === 0 ? 7 : day;
	}
	function formatWeekNumberSunday(d, p) {
	  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
	}
	function dISO(d) {
	  var day = d.getDay();
	  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
	}
	function formatWeekNumberISO(d, p) {
	  d = dISO(d);
	  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
	}
	function formatWeekdayNumberSunday(d) {
	  return d.getDay();
	}
	function formatWeekNumberMonday(d, p) {
	  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
	}
	function formatYear(d, p) {
	  return pad(d.getFullYear() % 100, p, 2);
	}
	function formatYearISO(d, p) {
	  d = dISO(d);
	  return pad(d.getFullYear() % 100, p, 2);
	}
	function formatFullYear(d, p) {
	  return pad(d.getFullYear() % 10000, p, 4);
	}
	function formatFullYearISO(d, p) {
	  var day = d.getDay();
	  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
	  return pad(d.getFullYear() % 10000, p, 4);
	}
	function formatZone(d) {
	  var z = d.getTimezoneOffset();
	  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
	}
	function formatUTCDayOfMonth(d, p) {
	  return pad(d.getUTCDate(), p, 2);
	}
	function formatUTCHour24(d, p) {
	  return pad(d.getUTCHours(), p, 2);
	}
	function formatUTCHour12(d, p) {
	  return pad(d.getUTCHours() % 12 || 12, p, 2);
	}
	function formatUTCDayOfYear(d, p) {
	  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
	}
	function formatUTCMilliseconds(d, p) {
	  return pad(d.getUTCMilliseconds(), p, 3);
	}
	function formatUTCMicroseconds(d, p) {
	  return formatUTCMilliseconds(d, p) + "000";
	}
	function formatUTCMonthNumber(d, p) {
	  return pad(d.getUTCMonth() + 1, p, 2);
	}
	function formatUTCMinutes(d, p) {
	  return pad(d.getUTCMinutes(), p, 2);
	}
	function formatUTCSeconds(d, p) {
	  return pad(d.getUTCSeconds(), p, 2);
	}
	function formatUTCWeekdayNumberMonday(d) {
	  var dow = d.getUTCDay();
	  return dow === 0 ? 7 : dow;
	}
	function formatUTCWeekNumberSunday(d, p) {
	  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
	}
	function UTCdISO(d) {
	  var day = d.getUTCDay();
	  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
	}
	function formatUTCWeekNumberISO(d, p) {
	  d = UTCdISO(d);
	  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
	}
	function formatUTCWeekdayNumberSunday(d) {
	  return d.getUTCDay();
	}
	function formatUTCWeekNumberMonday(d, p) {
	  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
	}
	function formatUTCYear(d, p) {
	  return pad(d.getUTCFullYear() % 100, p, 2);
	}
	function formatUTCYearISO(d, p) {
	  d = UTCdISO(d);
	  return pad(d.getUTCFullYear() % 100, p, 2);
	}
	function formatUTCFullYear(d, p) {
	  return pad(d.getUTCFullYear() % 10000, p, 4);
	}
	function formatUTCFullYearISO(d, p) {
	  var day = d.getUTCDay();
	  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
	  return pad(d.getUTCFullYear() % 10000, p, 4);
	}
	function formatUTCZone() {
	  return "+0000";
	}
	function formatLiteralPercent() {
	  return "%";
	}
	function formatUnixTimestamp(d) {
	  return +d;
	}
	function formatUnixTimestampSeconds(d) {
	  return Math.floor(+d / 1000);
	}

	var locale;
	var utcFormat;
	var utcParse;
	defaultLocale({
	  dateTime: "%x, %X",
	  date: "%-m/%-d/%Y",
	  time: "%-I:%M:%S %p",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	function defaultLocale(definition) {
	  locale = formatLocale(definition);
	  locale.format;
	  locale.parse;
	  utcFormat = locale.utcFormat;
	  utcParse = locale.utcParse;
	  return locale;
	}

	var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
	function formatIsoNative(date) {
	  return date.toISOString();
	}
	Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

	function parseIsoNative(string) {
	  var date = new Date(string);
	  return isNaN(date) ? null : date;
	}
	+new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

	function colors$1 (specifier) {
	  var n = specifier.length / 6 | 0,
	    colors = new Array(n),
	    i = 0;
	  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
	  return colors;
	}

	colors$1("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

	colors$1("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

	colors$1("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

	colors$1("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

	colors$1("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

	colors$1("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

	colors$1("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

	colors$1("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

	colors$1("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

	colors$1("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

	var ramp$1 = (scheme => rgbBasis(scheme[scheme.length - 1]));

	var scheme$q = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors$1);
	ramp$1(scheme$q);

	var scheme$p = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors$1);
	ramp$1(scheme$p);

	var scheme$o = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors$1);
	ramp$1(scheme$o);

	var scheme$n = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors$1);
	ramp$1(scheme$n);

	var scheme$m = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors$1);
	ramp$1(scheme$m);

	var scheme$l = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors$1);
	ramp$1(scheme$l);

	var scheme$k = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors$1);
	ramp$1(scheme$k);

	var scheme$j = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors$1);
	ramp$1(scheme$j);

	var scheme$i = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors$1);
	ramp$1(scheme$i);

	var scheme$h = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors$1);
	ramp$1(scheme$h);

	var scheme$g = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors$1);
	ramp$1(scheme$g);

	var scheme$f = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors$1);
	ramp$1(scheme$f);

	var scheme$e = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors$1);
	ramp$1(scheme$e);

	var scheme$d = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors$1);
	ramp$1(scheme$d);

	var scheme$c = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors$1);
	ramp$1(scheme$c);

	var scheme$b = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors$1);
	ramp$1(scheme$b);

	var scheme$a = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors$1);
	ramp$1(scheme$a);

	var scheme$9 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors$1);
	ramp$1(scheme$9);

	var scheme$8 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors$1);
	ramp$1(scheme$8);

	var scheme$7 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors$1);
	ramp$1(scheme$7);

	var scheme$6 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors$1);
	ramp$1(scheme$6);

	var scheme$5 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors$1);
	ramp$1(scheme$5);

	var scheme$4 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors$1);
	ramp$1(scheme$4);

	var scheme$3 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors$1);
	ramp$1(scheme$3);

	var scheme$2 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors$1);
	ramp$1(scheme$2);

	var scheme$1 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors$1);
	ramp$1(scheme$1);

	var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors$1);
	ramp$1(scheme);

	cubehelixLong(cubehelix$3(300, 0.5, 0.0), cubehelix$3(-240, 0.5, 1.0));

	cubehelixLong(cubehelix$3(-100, 0.75, 0.35), cubehelix$3(80, 1.50, 0.8));
	cubehelixLong(cubehelix$3(260, 0.75, 0.35), cubehelix$3(80, 1.50, 0.8));
	cubehelix$3();

	rgb$1();

	function ramp(range) {
	  var n = range.length;
	  return function (t) {
	    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	  };
	}
	ramp(colors$1("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
	ramp(colors$1("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
	ramp(colors$1("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
	ramp(colors$1("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

	function constant$1 (x) {
	  return function constant() {
	    return x;
	  };
	}

	const epsilon = 1e-12;

	function withPath(shape) {
	  let digits = 3;
	  shape.digits = function (_) {
	    if (!arguments.length) return digits;
	    if (_ == null) {
	      digits = null;
	    } else {
	      const d = Math.floor(_);
	      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
	      digits = d;
	    }
	    return shape;
	  };
	  return () => new Path(digits);
	}

	function array$1 (x) {
	  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
	  : Array.from(x); // Map, Set, iterable, string, or anything else
	}

	function Linear(context) {
	  this._context = context;
	}
	Linear.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._point = 0;
	  },
	  lineEnd: function () {
	    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
	        break;
	      case 1:
	        this._point = 2;
	      // falls through
	      default:
	        this._context.lineTo(x, y);
	        break;
	    }
	  }
	};
	function curveLinear (context) {
	  return new Linear(context);
	}

	function x$2(p) {
	  return p[0];
	}
	function y$2(p) {
	  return p[1];
	}

	function line (x, y) {
	  var defined = constant$1(true),
	    context = null,
	    curve = curveLinear,
	    output = null,
	    path = withPath(line);
	  x = typeof x === "function" ? x : x === undefined ? x$2 : constant$1(x);
	  y = typeof y === "function" ? y : y === undefined ? y$2 : constant$1(y);
	  function line(data) {
	    var i,
	      n = (data = array$1(data)).length,
	      d,
	      defined0 = false,
	      buffer;
	    if (context == null) output = curve(buffer = path());
	    for (i = 0; i <= n; ++i) {
	      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	        if (defined0 = !defined0) output.lineStart();else output.lineEnd();
	      }
	      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
	    }
	    if (buffer) return output = null, buffer + "" || null;
	  }
	  line.x = function (_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : constant$1(+_), line) : x;
	  };
	  line.y = function (_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : constant$1(+_), line) : y;
	  };
	  line.defined = function (_) {
	    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
	  };
	  line.curve = function (_) {
	    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	  };
	  line.context = function (_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	  };
	  return line;
	}

	function noop$1 () {}

	function point$3(that, x, y) {
	  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
	}
	function Basis(context) {
	  this._context = context;
	}
	Basis.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 3:
	        point$3(this, this._x1, this._y1);
	      // falls through
	      case 2:
	        this._context.lineTo(this._x1, this._y1);
	        break;
	    }
	    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
	        break;
	      case 1:
	        this._point = 2;
	        break;
	      case 2:
	        this._point = 3;
	        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
	      // falls through
	      default:
	        point$3(this, x, y);
	        break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};

	function Bundle(context, beta) {
	  this._basis = new Basis(context);
	  this._beta = beta;
	}
	Bundle.prototype = {
	  lineStart: function () {
	    this._x = [];
	    this._y = [];
	    this._basis.lineStart();
	  },
	  lineEnd: function () {
	    var x = this._x,
	      y = this._y,
	      j = x.length - 1;
	    if (j > 0) {
	      var x0 = x[0],
	        y0 = y[0],
	        dx = x[j] - x0,
	        dy = y[j] - y0,
	        i = -1,
	        t;
	      while (++i <= j) {
	        t = i / j;
	        this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
	      }
	    }
	    this._x = this._y = null;
	    this._basis.lineEnd();
	  },
	  point: function (x, y) {
	    this._x.push(+x);
	    this._y.push(+y);
	  }
	};
	((function custom(beta) {
	  function bundle(context) {
	    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	  }
	  bundle.beta = function (beta) {
	    return custom(+beta);
	  };
	  return bundle;
	}))(0.85);

	function point$2(that, x, y) {
	  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
	}
	function Cardinal(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	Cardinal.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 2:
	        this._context.lineTo(this._x2, this._y2);
	        break;
	      case 3:
	        point$2(this, this._x1, this._y1);
	        break;
	    }
	    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
	        break;
	      case 1:
	        this._point = 2;
	        this._x1 = x, this._y1 = y;
	        break;
	      case 2:
	        this._point = 3;
	      // falls through
	      default:
	        point$2(this, x, y);
	        break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(tension) {
	  function cardinal(context) {
	    return new Cardinal(context, tension);
	  }
	  cardinal.tension = function (tension) {
	    return custom(+tension);
	  };
	  return cardinal;
	}))(0);

	function CardinalClosed(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	CardinalClosed.prototype = {
	  areaStart: noop$1,
	  areaEnd: noop$1,
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 1:
	        {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	      case 2:
	        {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	      case 3:
	        {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	    }
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._x3 = x, this._y3 = y;
	        break;
	      case 1:
	        this._point = 2;
	        this._context.moveTo(this._x4 = x, this._y4 = y);
	        break;
	      case 2:
	        this._point = 3;
	        this._x5 = x, this._y5 = y;
	        break;
	      default:
	        point$2(this, x, y);
	        break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(tension) {
	  function cardinal(context) {
	    return new CardinalClosed(context, tension);
	  }
	  cardinal.tension = function (tension) {
	    return custom(+tension);
	  };
	  return cardinal;
	}))(0);

	function CardinalOpen(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	CardinalOpen.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function () {
	    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        break;
	      case 1:
	        this._point = 2;
	        break;
	      case 2:
	        this._point = 3;
	        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
	        break;
	      case 3:
	        this._point = 4;
	      // falls through
	      default:
	        point$2(this, x, y);
	        break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(tension) {
	  function cardinal(context) {
	    return new CardinalOpen(context, tension);
	  }
	  cardinal.tension = function (tension) {
	    return custom(+tension);
	  };
	  return cardinal;
	}))(0);

	function point$1(that, x, y) {
	  var x1 = that._x1,
	    y1 = that._y1,
	    x2 = that._x2,
	    y2 = that._y2;
	  if (that._l01_a > epsilon) {
	    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	      n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	  }
	  if (that._l23_a > epsilon) {
	    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	      m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	  }
	  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	}
	function CatmullRom(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	CatmullRom.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 2:
	        this._context.lineTo(this._x2, this._y2);
	        break;
	      case 3:
	        this.point(this._x2, this._y2);
	        break;
	    }
	    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    if (this._point) {
	      var x23 = this._x2 - x,
	        y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
	        break;
	      case 1:
	        this._point = 2;
	        break;
	      case 2:
	        this._point = 3;
	      // falls through
	      default:
	        point$1(this, x, y);
	        break;
	    }
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(alpha) {
	  function catmullRom(context) {
	    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	  }
	  catmullRom.alpha = function (alpha) {
	    return custom(+alpha);
	  };
	  return catmullRom;
	}))(0.5);

	function CatmullRomClosed(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	CatmullRomClosed.prototype = {
	  areaStart: noop$1,
	  areaEnd: noop$1,
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 1:
	        {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	      case 2:
	        {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	      case 3:
	        {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	    }
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    if (this._point) {
	      var x23 = this._x2 - x,
	        y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._x3 = x, this._y3 = y;
	        break;
	      case 1:
	        this._point = 2;
	        this._context.moveTo(this._x4 = x, this._y4 = y);
	        break;
	      case 2:
	        this._point = 3;
	        this._x5 = x, this._y5 = y;
	        break;
	      default:
	        point$1(this, x, y);
	        break;
	    }
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(alpha) {
	  function catmullRom(context) {
	    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	  }
	  catmullRom.alpha = function (alpha) {
	    return custom(+alpha);
	  };
	  return catmullRom;
	}))(0.5);

	function CatmullRomOpen(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	CatmullRomOpen.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	  },
	  lineEnd: function () {
	    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    x = +x, y = +y;
	    if (this._point) {
	      var x23 = this._x2 - x,
	        y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        break;
	      case 1:
	        this._point = 2;
	        break;
	      case 2:
	        this._point = 3;
	        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
	        break;
	      case 3:
	        this._point = 4;
	      // falls through
	      default:
	        point$1(this, x, y);
	        break;
	    }
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	((function custom(alpha) {
	  function catmullRom(context) {
	    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	  }
	  catmullRom.alpha = function (alpha) {
	    return custom(+alpha);
	  };
	  return catmullRom;
	}))(0.5);

	function sign(x) {
	  return x < 0 ? -1 : 1;
	}

	// Calculate the slopes of the tangents (Hermite-type interpolation) based on
	// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	// NOV(II), P. 443, 1990.
	function slope3(that, x2, y2) {
	  var h0 = that._x1 - that._x0,
	    h1 = x2 - that._x1,
	    s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	    s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	    p = (s0 * h1 + s1 * h0) / (h0 + h1);
	  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	}

	// Calculate a one-sided slope.
	function slope2(that, t) {
	  var h = that._x1 - that._x0;
	  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	}

	// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	function point(that, t0, t1) {
	  var x0 = that._x0,
	    y0 = that._y0,
	    x1 = that._x1,
	    y1 = that._y1,
	    dx = (x1 - x0) / 3;
	  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	}
	function MonotoneX(context) {
	  this._context = context;
	}
	MonotoneX.prototype = {
	  areaStart: function () {
	    this._line = 0;
	  },
	  areaEnd: function () {
	    this._line = NaN;
	  },
	  lineStart: function () {
	    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function () {
	    switch (this._point) {
	      case 2:
	        this._context.lineTo(this._x1, this._y1);
	        break;
	      case 3:
	        point(this, this._t0, slope2(this, this._t0));
	        break;
	    }
	    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function (x, y) {
	    var t1 = NaN;
	    x = +x, y = +y;
	    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	    switch (this._point) {
	      case 0:
	        this._point = 1;
	        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
	        break;
	      case 1:
	        this._point = 2;
	        break;
	      case 2:
	        this._point = 3;
	        point(this, slope2(this, t1 = slope3(this, x, y)), t1);
	        break;
	      default:
	        point(this, this._t0, t1 = slope3(this, x, y));
	        break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	    this._t0 = t1;
	  }
	};
	(Object.create(MonotoneX.prototype)).point = function (x, y) {
	  MonotoneX.prototype.point.call(this, y, x);
	};

	var emptyOn$1 = dispatch("start", "end", "cancel", "interrupt");
	var emptyTween$1 = [];
	var CREATED$1 = 0;
	var SCHEDULED$1 = 1;
	var STARTING$1 = 2;
	var STARTED$1 = 3;
	var RUNNING$1 = 4;
	var ENDING$1 = 5;
	var ENDED$1 = 6;
	function schedule$1 (node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};else if (id in schedules) return;
	  create$1(node, id, {
	    name: name,
	    index: index,
	    // For context during callback.
	    group: group,
	    // For context during callback.
	    on: emptyOn$1,
	    tween: emptyTween$1,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED$1
	  });
	}
	function init$1(node, id) {
	  var schedule = get$1(node, id);
	  if (schedule.state > CREATED$1) throw new Error("too late; already scheduled");
	  return schedule;
	}
	function set$1(node, id) {
	  var schedule = get$1(node, id);
	  if (schedule.state > STARTED$1) throw new Error("too late; already running");
	  return schedule;
	}
	function get$1(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	  return schedule;
	}
	function create$1(node, id, self) {
	  var schedules = node.__transition,
	    tween;

	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = timer(schedule, 0, self.time);
	  function schedule(elapsed) {
	    self.state = SCHEDULED$1;
	    self.timer.restart(start, self.delay, self.time);

	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }
	  function start(elapsed) {
	    var i, j, n, o;

	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED$1) return stop();
	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;

	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED$1) return timeout(start);

	      // Interrupt the active transition, if any.
	      if (o.state === RUNNING$1) {
	        o.state = ENDED$1;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }

	      // Cancel any pre-empted transitions.
	      else if (+i < id) {
	        o.state = ENDED$1;
	        o.timer.stop();
	        o.on.call("cancel", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	    }

	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    timeout(function () {
	      if (self.state === STARTED$1) {
	        self.state = RUNNING$1;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });

	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING$1;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING$1) return; // interrupted
	    self.state = STARTED$1;

	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }
	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING$1, 1),
	      i = -1,
	      n = tween.length;
	    while (++i < n) {
	      tween[i].call(node, t);
	    }

	    // Dispatch the end event.
	    if (self.state === ENDING$1) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }
	  function stop() {
	    self.state = ENDED$1;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) return; // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}

	function interrupt$1 (node, name) {
	  var schedules = node.__transition,
	    schedule,
	    active,
	    empty = true,
	    i;
	  if (!schedules) return;
	  name = name == null ? null : name + "";
	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) {
	      empty = false;
	      continue;
	    }
	    active = schedule.state > STARTING$1 && schedule.state < ENDING$1;
	    schedule.state = ENDED$1;
	    schedule.timer.stop();
	    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }
	  if (empty) delete node.__transition;
	}

	function selection_interrupt$1 (name) {
	  return this.each(function () {
	    interrupt$1(this, name);
	  });
	}

	function tweenRemove$1(id, name) {
	  var tween0, tween1;
	  return function () {
	    var schedule = set$1(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }
	    schedule.tween = tween1;
	  };
	}
	function tweenFunction$1(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    var schedule = set$1(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = {
	          name: name,
	          value: value
	        }, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }
	    schedule.tween = tween1;
	  };
	}
	function transition_tween$1 (name, value) {
	  var id = this._id;
	  name += "";
	  if (arguments.length < 2) {
	    var tween = get$1(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }
	  return this.each((value == null ? tweenRemove$1 : tweenFunction$1)(id, name, value));
	}
	function tweenValue$1(transition, name, value) {
	  var id = transition._id;
	  transition.each(function () {
	    var schedule = set$1(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });
	  return function (node) {
	    return get$1(node, id).value[name];
	  };
	}

	function interpolate$1 (a, b) {
	  var c;
	  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
	}

	function attrRemove$2(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS$2(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant$2(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttribute(name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrConstantNS$2(fullname, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttributeNS(fullname.space, fullname.local);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrFunction$2(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttribute(name);
	    string0 = this.getAttribute(name);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function attrFunctionNS$2(fullname, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    string0 = this.getAttributeNS(fullname.space, fullname.local);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function transition_attr$1 (name, value) {
	  var fullname = namespace$1(name),
	    i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
	  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$2 : attrFunction$2)(fullname, i, tweenValue$1(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$2 : attrRemove$2)(fullname) : (fullname.local ? attrConstantNS$2 : attrConstant$2)(fullname, i, value));
	}

	function attrInterpolate$1(name, i) {
	  return function (t) {
	    this.setAttribute(name, i.call(this, t));
	  };
	}
	function attrInterpolateNS$1(fullname, i) {
	  return function (t) {
	    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	  };
	}
	function attrTweenNS$1(fullname, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS$1(fullname, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function attrTween$1(name, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolate$1(name, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_attrTween$1 (name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  var fullname = namespace$1(name);
	  return this.tween(key, (fullname.local ? attrTweenNS$1 : attrTween$1)(fullname, value));
	}

	function delayFunction$1(id, value) {
	  return function () {
	    init$1(this, id).delay = +value.apply(this, arguments);
	  };
	}
	function delayConstant$1(id, value) {
	  return value = +value, function () {
	    init$1(this, id).delay = value;
	  };
	}
	function transition_delay$1 (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? delayFunction$1 : delayConstant$1)(id, value)) : get$1(this.node(), id).delay;
	}

	function durationFunction$1(id, value) {
	  return function () {
	    set$1(this, id).duration = +value.apply(this, arguments);
	  };
	}
	function durationConstant$1(id, value) {
	  return value = +value, function () {
	    set$1(this, id).duration = value;
	  };
	}
	function transition_duration$1 (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? durationFunction$1 : durationConstant$1)(id, value)) : get$1(this.node(), id).duration;
	}

	function easeConstant$1(id, value) {
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    set$1(this, id).ease = value;
	  };
	}
	function transition_ease$1 (value) {
	  var id = this._id;
	  return arguments.length ? this.each(easeConstant$1(id, value)) : get$1(this.node(), id).ease;
	}

	function easeVarying$1(id, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (typeof v !== "function") throw new Error();
	    set$1(this, id).ease = v;
	  };
	}
	function transition_easeVarying$1 (value) {
	  if (typeof value !== "function") throw new Error();
	  return this.each(easeVarying$1(this._id, value));
	}

	function transition_filter$1 (match) {
	  if (typeof match !== "function") match = matcher$1(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Transition$1(subgroups, this._parents, this._name, this._id);
	}

	function transition_merge$1 (transition) {
	  if (transition._id !== this._id) throw new Error();
	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Transition$1(merges, this._parents, this._name, this._id);
	}

	function start$1(name) {
	  return (name + "").trim().split(/^|\s+/).every(function (t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}
	function onFunction$1(id, name, listener) {
	  var on0,
	    on1,
	    sit = start$1(name) ? init$1 : set$1;
	  return function () {
	    var schedule = sit(this, id),
	      on = schedule.on;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	    schedule.on = on1;
	  };
	}
	function transition_on$1 (name, listener) {
	  var id = this._id;
	  return arguments.length < 2 ? get$1(this.node(), id).on.on(name) : this.each(onFunction$1(id, name, listener));
	}

	function removeFunction$1(id) {
	  return function () {
	    var parent = this.parentNode;
	    for (var i in this.__transition) if (+i !== id) return;
	    if (parent) parent.removeChild(this);
	  };
	}
	function transition_remove$1 () {
	  return this.on("end.remove", removeFunction$1(this._id));
	}

	function transition_select$1 (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selector$1(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        schedule$1(subgroup[i], name, id, i, subgroup, get$1(node, id));
	      }
	    }
	  }
	  return new Transition$1(subgroups, this._parents, name, id);
	}

	function transition_selectAll$1 (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selectorAll$1(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            schedule$1(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }
	  return new Transition$1(subgroups, parents, name, id);
	}

	var Selection$2 = selection$1.prototype.constructor;
	function transition_selection$1 () {
	  return new Selection$2(this._groups, this._parents);
	}

	function styleNull$1(name, interpolate) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue$1(this, name),
	      string1 = (this.style.removeProperty(name), styleValue$1(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	  };
	}
	function styleRemove$2(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant$2(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = styleValue$1(this, name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function styleFunction$2(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue$1(this, name),
	      value1 = value(this),
	      string1 = value1 + "";
	    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue$1(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function styleMaybeRemove$1(id, name) {
	  var on0,
	    on1,
	    listener0,
	    key = "style." + name,
	    event = "end." + key,
	    remove;
	  return function () {
	    var schedule = set$1(this, id),
	      on = schedule.on,
	      listener = schedule.value[key] == null ? remove || (remove = styleRemove$2(name)) : undefined;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
	    schedule.on = on1;
	  };
	}
	function transition_style$1 (name, value, priority) {
	  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
	  return value == null ? this.styleTween(name, styleNull$1(name, i)).on("end.style." + name, styleRemove$2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction$2(name, i, tweenValue$1(this, "style." + name, value))).each(styleMaybeRemove$1(this._id, name)) : this.styleTween(name, styleConstant$2(name, i, value), priority).on("end.style." + name, null);
	}

	function styleInterpolate$1(name, i, priority) {
	  return function (t) {
	    this.style.setProperty(name, i.call(this, t), priority);
	  };
	}
	function styleTween$1(name, value, priority) {
	  var t, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t = (i0 = i) && styleInterpolate$1(name, i, priority);
	    return t;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_styleTween$1 (name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, styleTween$1(name, value, priority == null ? "" : priority));
	}

	function textConstant$2(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction$2(value) {
	  return function () {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}
	function transition_text$1 (value) {
	  return this.tween("text", typeof value === "function" ? textFunction$2(tweenValue$1(this, "text", value)) : textConstant$2(value == null ? "" : value + ""));
	}

	function textInterpolate$1(i) {
	  return function (t) {
	    this.textContent = i.call(this, t);
	  };
	}
	function textTween$1(value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && textInterpolate$1(i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_textTween$1 (value) {
	  var key = "text";
	  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, textTween$1(value));
	}

	function transition_transition$1 () {
	  var name = this._name,
	    id0 = this._id,
	    id1 = newId$1();
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = get$1(node, id0);
	        schedule$1(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }
	  return new Transition$1(groups, this._parents, name, id1);
	}

	function transition_end$1 () {
	  var on0,
	    on1,
	    that = this,
	    id = that._id,
	    size = that.size();
	  return new Promise(function (resolve, reject) {
	    var cancel = {
	        value: reject
	      },
	      end = {
	        value: function () {
	          if (--size === 0) resolve();
	        }
	      };
	    that.each(function () {
	      var schedule = set$1(this, id),
	        on = schedule.on;

	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) {
	        on1 = (on0 = on).copy();
	        on1._.cancel.push(cancel);
	        on1._.interrupt.push(cancel);
	        on1._.end.push(end);
	      }
	      schedule.on = on1;
	    });

	    // The selection was empty, resolve end immediately
	    if (size === 0) resolve();
	  });
	}

	var id$1 = 0;
	function Transition$1(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}
	function newId$1() {
	  return ++id$1;
	}
	var selection_prototype$1 = selection$1.prototype;
	Transition$1.prototype = {
	  constructor: Transition$1,
	  select: transition_select$1,
	  selectAll: transition_selectAll$1,
	  selectChild: selection_prototype$1.selectChild,
	  selectChildren: selection_prototype$1.selectChildren,
	  filter: transition_filter$1,
	  merge: transition_merge$1,
	  selection: transition_selection$1,
	  transition: transition_transition$1,
	  call: selection_prototype$1.call,
	  nodes: selection_prototype$1.nodes,
	  node: selection_prototype$1.node,
	  size: selection_prototype$1.size,
	  empty: selection_prototype$1.empty,
	  each: selection_prototype$1.each,
	  on: transition_on$1,
	  attr: transition_attr$1,
	  attrTween: transition_attrTween$1,
	  style: transition_style$1,
	  styleTween: transition_styleTween$1,
	  text: transition_text$1,
	  textTween: transition_textTween$1,
	  remove: transition_remove$1,
	  tween: transition_tween$1,
	  delay: transition_delay$1,
	  duration: transition_duration$1,
	  ease: transition_ease$1,
	  easeVarying: transition_easeVarying$1,
	  end: transition_end$1,
	  [Symbol.iterator]: selection_prototype$1[Symbol.iterator]
	};

	var defaultTiming$1 = {
	  time: null,
	  // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: cubicInOut
	};
	function inherit$1(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      throw new Error(`transition ${id} not found`);
	    }
	  }
	  return timing;
	}
	function selection_transition$1 (name) {
	  var id, timing;
	  if (name instanceof Transition$1) {
	    id = name._id, name = name._name;
	  } else {
	    id = newId$1(), (timing = defaultTiming$1).time = now(), name = name == null ? null : name + "";
	  }
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        schedule$1(node, name, id, i, group, timing || inherit$1(node, id));
	      }
	    }
	  }
	  return new Transition$1(groups, this._parents, name, id);
	}

	selection$1.prototype.interrupt = selection_interrupt$1;
	selection$1.prototype.transition = selection_transition$1;

	var xhtml = "http://www.w3.org/1999/xhtml";
	var namespaces = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	function namespace (name) {
	  var prefix = name += "",
	    i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces.hasOwnProperty(prefix) ? {
	    space: namespaces[prefix],
	    local: name
	  } : name; // eslint-disable-line no-prototype-builtins
	}

	function creatorInherit(name) {
	  return function () {
	    var document = this.ownerDocument,
	      uri = this.namespaceURI;
	    return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
	  };
	}
	function creatorFixed(fullname) {
	  return function () {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}
	function creator (name) {
	  var fullname = namespace(name);
	  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
	}

	function none() {}
	function selector (selector) {
	  return selector == null ? none : function () {
	    return this.querySelector(selector);
	  };
	}

	function selection_select (select) {
	  if (typeof select !== "function") select = selector(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }
	  return new Selection$1(subgroups, this._parents);
	}

	// Given something array like (or null), returns something that is strictly an
	// array. This is used to ensure that array-like objects passed to d3.selectAll
	// or selection.selectAll are converted into proper arrays when creating a
	// selection; we don’t ever want to create a selection backed by a live
	// HTMLCollection or NodeList. However, note that selection.selectAll will use a
	// static NodeList as a group, since it safely derived from querySelectorAll.
	function array(x) {
	  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
	}

	function empty() {
	  return [];
	}
	function selectorAll (selector) {
	  return selector == null ? empty : function () {
	    return this.querySelectorAll(selector);
	  };
	}

	function arrayAll(select) {
	  return function () {
	    return array(select.apply(this, arguments));
	  };
	}
	function selection_selectAll (select) {
	  if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }
	  return new Selection$1(subgroups, parents);
	}

	function matcher (selector) {
	  return function () {
	    return this.matches(selector);
	  };
	}
	function childMatcher(selector) {
	  return function (node) {
	    return node.matches(selector);
	  };
	}

	var find = Array.prototype.find;
	function childFind(match) {
	  return function () {
	    return find.call(this.children, match);
	  };
	}
	function childFirst() {
	  return this.firstElementChild;
	}
	function selection_selectChild (match) {
	  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
	}

	var filter = Array.prototype.filter;
	function children() {
	  return Array.from(this.children);
	}
	function childrenFilter(match) {
	  return function () {
	    return filter.call(this.children, match);
	  };
	}
	function selection_selectChildren (match) {
	  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
	}

	function selection_filter (match) {
	  if (typeof match !== "function") match = matcher(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Selection$1(subgroups, this._parents);
	}

	function sparse (update) {
	  return new Array(update.length);
	}

	function selection_enter () {
	  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
	}
	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}
	EnterNode.prototype = {
	  constructor: EnterNode,
	  appendChild: function (child) {
	    return this._parent.insertBefore(child, this._next);
	  },
	  insertBefore: function (child, next) {
	    return this._parent.insertBefore(child, next);
	  },
	  querySelector: function (selector) {
	    return this._parent.querySelector(selector);
	  },
	  querySelectorAll: function (selector) {
	    return this._parent.querySelectorAll(selector);
	  }
	};

	function constant (x) {
	  return function () {
	    return x;
	  };
	}

	function bindIndex(parent, group, enter, update, exit, data) {
	  var i = 0,
	    node,
	    groupLength = group.length,
	    dataLength = data.length;

	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}
	function bindKey(parent, group, enter, update, exit, data, key) {
	  var i,
	    node,
	    nodeByKeyValue = new Map(),
	    groupLength = group.length,
	    dataLength = data.length,
	    keyValues = new Array(groupLength),
	    keyValue;

	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
	      if (nodeByKeyValue.has(keyValue)) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue.set(keyValue, node);
	      }
	    }
	  }

	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = key.call(parent, data[i], i, data) + "";
	    if (node = nodeByKeyValue.get(keyValue)) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue.delete(keyValue);
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
	      exit[i] = node;
	    }
	  }
	}
	function datum(node) {
	  return node.__data__;
	}
	function selection_data (value, key) {
	  if (!arguments.length) return Array.from(this, datum);
	  var bind = key ? bindKey : bindIndex,
	    parents = this._parents,
	    groups = this._groups;
	  if (typeof value !== "function") value = constant(value);
	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	      group = groups[j],
	      groupLength = group.length,
	      data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
	      dataLength = data.length,
	      enterGroup = enter[j] = new Array(dataLength),
	      updateGroup = update[j] = new Array(dataLength),
	      exitGroup = exit[j] = new Array(groupLength);
	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }
	  update = new Selection$1(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	}

	// Given some data, this returns an array-like view of it: an object that
	// exposes a length property and allows numeric indexing. Note that unlike
	// selectAll, this isn’t worried about “live” collections because the resulting
	// array will only be used briefly while data is being bound. (It is possible to
	// cause the data to change while iterating by using a key function, but please
	// don’t; we’d rather avoid a gratuitous copy.)
	function arraylike(data) {
	  return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
	  : Array.from(data); // Map, Set, iterable, string, or anything else
	}

	function selection_exit () {
	  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
	}

	function selection_join (onenter, onupdate, onexit) {
	  var enter = this.enter(),
	    update = this,
	    exit = this.exit();
	  if (typeof onenter === "function") {
	    enter = onenter(enter);
	    if (enter) enter = enter.selection();
	  } else {
	    enter = enter.append(onenter + "");
	  }
	  if (onupdate != null) {
	    update = onupdate(update);
	    if (update) update = update.selection();
	  }
	  if (onexit == null) exit.remove();else onexit(exit);
	  return enter && update ? enter.merge(update).order() : update;
	}

	function selection_merge (context) {
	  var selection = context.selection ? context.selection() : context;
	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Selection$1(merges, this._parents);
	}

	function selection_order () {
	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	  return this;
	}

	function selection_sort (compare) {
	  if (!compare) compare = ascending;
	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }
	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }
	  return new Selection$1(sortgroups, this._parents).order();
	}
	function ascending(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function selection_call () {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	}

	function selection_nodes () {
	  return Array.from(this);
	}

	function selection_node () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }
	  return null;
	}

	function selection_size () {
	  let size = 0;
	  for (const node of this) ++size; // eslint-disable-line no-unused-vars
	  return size;
	}

	function selection_empty () {
	  return !this.node();
	}

	function selection_each (callback) {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }
	  return this;
	}

	function attrRemove$1(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS$1(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant$1(name, value) {
	  return function () {
	    this.setAttribute(name, value);
	  };
	}
	function attrConstantNS$1(fullname, value) {
	  return function () {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}
	function attrFunction$1(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
	  };
	}
	function attrFunctionNS$1(fullname, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}
	function selection_attr (name, value) {
	  var fullname = namespace(name);
	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	  }
	  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
	}

	function defaultView (node) {
	  return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
	  || node.document && node // node is a Window
	  || node.defaultView; // node is a Document
	}

	function styleRemove$1(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant$1(name, value, priority) {
	  return function () {
	    this.style.setProperty(name, value, priority);
	  };
	}
	function styleFunction$1(name, value, priority) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
	  };
	}
	function selection_style (name, value, priority) {
	  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
	}
	function styleValue(node, name) {
	  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
	}

	function propertyRemove(name) {
	  return function () {
	    delete this[name];
	  };
	}
	function propertyConstant(name, value) {
	  return function () {
	    this[name] = value;
	  };
	}
	function propertyFunction(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];else this[name] = v;
	  };
	}
	function selection_property (name, value) {
	  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
	}

	function classArray(string) {
	  return string.trim().split(/^|\s+/);
	}
	function classList(node) {
	  return node.classList || new ClassList(node);
	}
	function ClassList(node) {
	  this._node = node;
	  this._names = classArray(node.getAttribute("class") || "");
	}
	ClassList.prototype = {
	  add: function (name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function (name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function (name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};
	function classedAdd(node, names) {
	  var list = classList(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.add(names[i]);
	}
	function classedRemove(node, names) {
	  var list = classList(node),
	    i = -1,
	    n = names.length;
	  while (++i < n) list.remove(names[i]);
	}
	function classedTrue(names) {
	  return function () {
	    classedAdd(this, names);
	  };
	}
	function classedFalse(names) {
	  return function () {
	    classedRemove(this, names);
	  };
	}
	function classedFunction(names, value) {
	  return function () {
	    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	  };
	}
	function selection_classed (name, value) {
	  var names = classArray(name + "");
	  if (arguments.length < 2) {
	    var list = classList(this.node()),
	      i = -1,
	      n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }
	  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
	}

	function textRemove() {
	  this.textContent = "";
	}
	function textConstant$1(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction$1(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}
	function selection_text (value) {
	  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
	}

	function htmlRemove() {
	  this.innerHTML = "";
	}
	function htmlConstant(value) {
	  return function () {
	    this.innerHTML = value;
	  };
	}
	function htmlFunction(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}
	function selection_html (value) {
	  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
	}

	function raise() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}
	function selection_raise () {
	  return this.each(raise);
	}

	function lower() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}
	function selection_lower () {
	  return this.each(lower);
	}

	function selection_append (name) {
	  var create = typeof name === "function" ? name : creator(name);
	  return this.select(function () {
	    return this.appendChild(create.apply(this, arguments));
	  });
	}

	function constantNull() {
	  return null;
	}
	function selection_insert (name, before) {
	  var create = typeof name === "function" ? name : creator(name),
	    select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	  return this.select(function () {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	}

	function remove() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}
	function selection_remove () {
	  return this.each(remove);
	}

	function selection_cloneShallow() {
	  var clone = this.cloneNode(false),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_cloneDeep() {
	  var clone = this.cloneNode(true),
	    parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}
	function selection_clone (deep) {
	  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
	}

	function selection_datum (value) {
	  return arguments.length ? this.property("__data__", value) : this.node().__data__;
	}

	function contextListener(listener) {
	  return function (event) {
	    listener.call(this, event, this.__data__);
	  };
	}
	function parseTypenames(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	      i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {
	      type: t,
	      name: name
	    };
	  });
	}
	function onRemove(typename) {
	  return function () {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;else delete this.__on;
	  };
	}
	function onAdd(typename, value, options) {
	  return function () {
	    var on = this.__on,
	      o,
	      listener = contextListener(value);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	        this.addEventListener(o.type, o.listener = listener, o.options = options);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, options);
	    o = {
	      type: typename.type,
	      name: typename.name,
	      value: value,
	      listener: listener,
	      options: options
	    };
	    if (!on) this.__on = [o];else on.push(o);
	  };
	}
	function selection_on (typename, value, options) {
	  var typenames = parseTypenames(typename + ""),
	    i,
	    n = typenames.length,
	    t;
	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }
	  on = value ? onAdd : onRemove;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	  return this;
	}

	function dispatchEvent(node, type, params) {
	  var window = defaultView(node),
	    event = window.CustomEvent;
	  if (typeof event === "function") {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
	  }
	  node.dispatchEvent(event);
	}
	function dispatchConstant(type, params) {
	  return function () {
	    return dispatchEvent(this, type, params);
	  };
	}
	function dispatchFunction(type, params) {
	  return function () {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  };
	}
	function selection_dispatch (type, params) {
	  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
	}

	function* selection_iterator () {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) yield node;
	    }
	  }
	}

	var root$1 = [null];
	function Selection$1(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}
	function selection() {
	  return new Selection$1([[document.documentElement]], root$1);
	}
	function selection_selection() {
	  return this;
	}
	Selection$1.prototype = selection.prototype = {
	  constructor: Selection$1,
	  select: selection_select,
	  selectAll: selection_selectAll,
	  selectChild: selection_selectChild,
	  selectChildren: selection_selectChildren,
	  filter: selection_filter,
	  data: selection_data,
	  enter: selection_enter,
	  exit: selection_exit,
	  join: selection_join,
	  merge: selection_merge,
	  selection: selection_selection,
	  order: selection_order,
	  sort: selection_sort,
	  call: selection_call,
	  nodes: selection_nodes,
	  node: selection_node,
	  size: selection_size,
	  empty: selection_empty,
	  each: selection_each,
	  attr: selection_attr,
	  style: selection_style,
	  property: selection_property,
	  classed: selection_classed,
	  text: selection_text,
	  html: selection_html,
	  raise: selection_raise,
	  lower: selection_lower,
	  append: selection_append,
	  insert: selection_insert,
	  remove: selection_remove,
	  clone: selection_clone,
	  datum: selection_datum,
	  on: selection_on,
	  dispatch: selection_dispatch,
	  [Symbol.iterator]: selection_iterator
	};

	var nextId = 0;
	function Local() {
	  this._ = "@" + (++nextId).toString(36);
	}
	Local.prototype = {
	  constructor: Local,
	  get: function (node) {
	    var id = this._;
	    while (!(id in node)) if (!(node = node.parentNode)) return;
	    return node[id];
	  },
	  set: function (node, value) {
	    return node[this._] = value;
	  },
	  remove: function (node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function () {
	    return this._;
	  }
	};

	var emptyOn = dispatch$1("start", "end", "cancel", "interrupt");
	var emptyTween = [];
	var CREATED = 0;
	var SCHEDULED = 1;
	var STARTING = 2;
	var STARTED = 3;
	var RUNNING = 4;
	var ENDING = 5;
	var ENDED = 6;
	function schedule (node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};else if (id in schedules) return;
	  create(node, id, {
	    name: name,
	    index: index,
	    // For context during callback.
	    group: group,
	    // For context during callback.
	    on: emptyOn,
	    tween: emptyTween,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED
	  });
	}
	function init(node, id) {
	  var schedule = get(node, id);
	  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
	  return schedule;
	}
	function set(node, id) {
	  var schedule = get(node, id);
	  if (schedule.state > STARTED) throw new Error("too late; already running");
	  return schedule;
	}
	function get(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	  return schedule;
	}
	function create(node, id, self) {
	  var schedules = node.__transition,
	    tween;

	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = timer(schedule, 0, self.time);
	  function schedule(elapsed) {
	    self.state = SCHEDULED;
	    self.timer.restart(start, self.delay, self.time);

	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }
	  function start(elapsed) {
	    var i, j, n, o;

	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED) return stop();
	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;

	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED) return timeout(start);

	      // Interrupt the active transition, if any.
	      if (o.state === RUNNING) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }

	      // Cancel any pre-empted transitions.
	      else if (+i < id) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("cancel", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	    }

	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    timeout(function () {
	      if (self.state === STARTED) {
	        self.state = RUNNING;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });

	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING) return; // interrupted
	    self.state = STARTED;

	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }
	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
	      i = -1,
	      n = tween.length;
	    while (++i < n) {
	      tween[i].call(node, t);
	    }

	    // Dispatch the end event.
	    if (self.state === ENDING) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }
	  function stop() {
	    self.state = ENDED;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) return; // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}

	function interrupt (node, name) {
	  var schedules = node.__transition,
	    schedule,
	    active,
	    empty = true,
	    i;
	  if (!schedules) return;
	  name = name == null ? null : name + "";
	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) {
	      empty = false;
	      continue;
	    }
	    active = schedule.state > STARTING && schedule.state < ENDING;
	    schedule.state = ENDED;
	    schedule.timer.stop();
	    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }
	  if (empty) delete node.__transition;
	}

	function selection_interrupt (name) {
	  return this.each(function () {
	    interrupt(this, name);
	  });
	}

	function tweenRemove(id, name) {
	  var tween0, tween1;
	  return function () {
	    var schedule = set(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }
	    schedule.tween = tween1;
	  };
	}
	function tweenFunction(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    var schedule = set(this, id),
	      tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = {
	          name: name,
	          value: value
	        }, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }
	    schedule.tween = tween1;
	  };
	}
	function transition_tween (name, value) {
	  var id = this._id;
	  name += "";
	  if (arguments.length < 2) {
	    var tween = get(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }
	  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	}
	function tweenValue(transition, name, value) {
	  var id = transition._id;
	  transition.each(function () {
	    var schedule = set(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });
	  return function (node) {
	    return get(node, id).value[name];
	  };
	}

	function interpolate (a, b) {
	  var c;
	  return (typeof b === "number" ? interpolateNumber$1 : b instanceof color$1 ? interpolateRgb$1 : (c = color$1(b)) ? (b = c, interpolateRgb$1) : interpolateString$1)(a, b);
	}

	function attrRemove(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	function attrRemoveNS(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	function attrConstant(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttribute(name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrConstantNS(fullname, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = this.getAttributeNS(fullname.space, fullname.local);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function attrFunction(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttribute(name);
	    string0 = this.getAttribute(name);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function attrFunctionNS(fullname, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0,
	      value1 = value(this),
	      string1;
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    string0 = this.getAttributeNS(fullname.space, fullname.local);
	    string1 = value1 + "";
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function transition_attr (name, value) {
	  var fullname = namespace(name),
	    i = fullname === "transform" ? interpolateTransformSvg$1 : interpolate;
	  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
	}

	function attrInterpolate(name, i) {
	  return function (t) {
	    this.setAttribute(name, i.call(this, t));
	  };
	}
	function attrInterpolateNS(fullname, i) {
	  return function (t) {
	    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	  };
	}
	function attrTweenNS(fullname, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function attrTween(name, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_attrTween (name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  var fullname = namespace(name);
	  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	}

	function delayFunction(id, value) {
	  return function () {
	    init(this, id).delay = +value.apply(this, arguments);
	  };
	}
	function delayConstant(id, value) {
	  return value = +value, function () {
	    init(this, id).delay = value;
	  };
	}
	function transition_delay (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
	}

	function durationFunction(id, value) {
	  return function () {
	    set(this, id).duration = +value.apply(this, arguments);
	  };
	}
	function durationConstant(id, value) {
	  return value = +value, function () {
	    set(this, id).duration = value;
	  };
	}
	function transition_duration (value) {
	  var id = this._id;
	  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
	}

	function easeConstant(id, value) {
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    set(this, id).ease = value;
	  };
	}
	function transition_ease (value) {
	  var id = this._id;
	  return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
	}

	function easeVarying(id, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (typeof v !== "function") throw new Error();
	    set(this, id).ease = v;
	  };
	}
	function transition_easeVarying (value) {
	  if (typeof value !== "function") throw new Error();
	  return this.each(easeVarying(this._id, value));
	}

	function transition_filter (match) {
	  if (typeof match !== "function") match = matcher(match);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	  return new Transition(subgroups, this._parents, this._name, this._id);
	}

	function transition_merge (transition) {
	  if (transition._id !== this._id) throw new Error();
	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	  return new Transition(merges, this._parents, this._name, this._id);
	}

	function start(name) {
	  return (name + "").trim().split(/^|\s+/).every(function (t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}
	function onFunction(id, name, listener) {
	  var on0,
	    on1,
	    sit = start(name) ? init : set;
	  return function () {
	    var schedule = sit(this, id),
	      on = schedule.on;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	    schedule.on = on1;
	  };
	}
	function transition_on (name, listener) {
	  var id = this._id;
	  return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
	}

	function removeFunction(id) {
	  return function () {
	    var parent = this.parentNode;
	    for (var i in this.__transition) if (+i !== id) return;
	    if (parent) parent.removeChild(this);
	  };
	}
	function transition_remove () {
	  return this.on("end.remove", removeFunction(this._id));
	}

	function transition_select (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selector(select);
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
	      }
	    }
	  }
	  return new Transition(subgroups, this._parents, name, id);
	}

	function transition_selectAll (select) {
	  var name = this._name,
	    id = this._id;
	  if (typeof select !== "function") select = selectorAll(select);
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            schedule(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }
	  return new Transition(subgroups, parents, name, id);
	}

	var Selection = selection.prototype.constructor;
	function transition_selection () {
	  return new Selection(this._groups, this._parents);
	}

	function styleNull(name, interpolate) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue(this, name),
	      string1 = (this.style.removeProperty(name), styleValue(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	  };
	}
	function styleRemove(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	function styleConstant(name, interpolate, value1) {
	  var string00,
	    string1 = value1 + "",
	    interpolate0;
	  return function () {
	    var string0 = styleValue(this, name);
	    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}
	function styleFunction(name, interpolate, value) {
	  var string00, string10, interpolate0;
	  return function () {
	    var string0 = styleValue(this, name),
	      value1 = value(this),
	      string1 = value1 + "";
	    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
	    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}
	function styleMaybeRemove(id, name) {
	  var on0,
	    on1,
	    listener0,
	    key = "style." + name,
	    event = "end." + key,
	    remove;
	  return function () {
	    var schedule = set(this, id),
	      on = schedule.on,
	      listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
	    schedule.on = on1;
	  };
	}
	function transition_style (name, value, priority) {
	  var i = (name += "") === "transform" ? interpolateTransformCss$1 : interpolate;
	  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
	}

	function styleInterpolate(name, i, priority) {
	  return function (t) {
	    this.style.setProperty(name, i.call(this, t), priority);
	  };
	}
	function styleTween(name, value, priority) {
	  var t, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
	    return t;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_styleTween (name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	}

	function textConstant(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	function textFunction(value) {
	  return function () {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}
	function transition_text (value) {
	  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
	}

	function textInterpolate(i) {
	  return function (t) {
	    this.textContent = i.call(this, t);
	  };
	}
	function textTween(value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}
	function transition_textTween (value) {
	  var key = "text";
	  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, textTween(value));
	}

	function transition_transition () {
	  var name = this._name,
	    id0 = this._id,
	    id1 = newId();
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = get(node, id0);
	        schedule(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }
	  return new Transition(groups, this._parents, name, id1);
	}

	function transition_end () {
	  var on0,
	    on1,
	    that = this,
	    id = that._id,
	    size = that.size();
	  return new Promise(function (resolve, reject) {
	    var cancel = {
	        value: reject
	      },
	      end = {
	        value: function () {
	          if (--size === 0) resolve();
	        }
	      };
	    that.each(function () {
	      var schedule = set(this, id),
	        on = schedule.on;

	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) {
	        on1 = (on0 = on).copy();
	        on1._.cancel.push(cancel);
	        on1._.interrupt.push(cancel);
	        on1._.end.push(end);
	      }
	      schedule.on = on1;
	    });

	    // The selection was empty, resolve end immediately
	    if (size === 0) resolve();
	  });
	}

	var id = 0;
	function Transition(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}
	function newId() {
	  return ++id;
	}
	var selection_prototype = selection.prototype;
	Transition.prototype = {
	  constructor: Transition,
	  select: transition_select,
	  selectAll: transition_selectAll,
	  selectChild: selection_prototype.selectChild,
	  selectChildren: selection_prototype.selectChildren,
	  filter: transition_filter,
	  merge: transition_merge,
	  selection: transition_selection,
	  transition: transition_transition,
	  call: selection_prototype.call,
	  nodes: selection_prototype.nodes,
	  node: selection_prototype.node,
	  size: selection_prototype.size,
	  empty: selection_prototype.empty,
	  each: selection_prototype.each,
	  on: transition_on,
	  attr: transition_attr,
	  attrTween: transition_attrTween,
	  style: transition_style,
	  styleTween: transition_styleTween,
	  text: transition_text,
	  textTween: transition_textTween,
	  remove: transition_remove,
	  tween: transition_tween,
	  delay: transition_delay,
	  duration: transition_duration,
	  ease: transition_ease,
	  easeVarying: transition_easeVarying,
	  end: transition_end,
	  [Symbol.iterator]: selection_prototype[Symbol.iterator]
	};

	var defaultTiming = {
	  time: null,
	  // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: cubicInOut
	};
	function inherit(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      throw new Error(`transition ${id} not found`);
	    }
	  }
	  return timing;
	}
	function selection_transition (name) {
	  var id, timing;
	  if (name instanceof Transition) {
	    id = name._id, name = name._name;
	  } else {
	    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	  }
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        schedule(node, name, id, i, group, timing || inherit(node, id));
	      }
	    }
	  }
	  return new Transition(groups, this._parents, name, id);
	}

	selection.prototype.interrupt = selection_interrupt;
	selection.prototype.transition = selection_transition;

	function Transform(k, x, y) {
	  this.k = k;
	  this.x = x;
	  this.y = y;
	}
	Transform.prototype = {
	  constructor: Transform,
	  scale: function (k) {
	    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	  },
	  translate: function (x, y) {
	    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	  },
	  apply: function (point) {
	    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	  },
	  applyX: function (x) {
	    return x * this.k + this.x;
	  },
	  applyY: function (y) {
	    return y * this.k + this.y;
	  },
	  invert: function (location) {
	    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	  },
	  invertX: function (x) {
	    return (x - this.x) / this.k;
	  },
	  invertY: function (y) {
	    return (y - this.y) / this.k;
	  },
	  rescaleX: function (x) {
	    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	  },
	  rescaleY: function (y) {
	    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	  },
	  toString: function () {
	    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	  }
	};
	new Transform(1, 0, 0);
	Transform.prototype;

	function getTextWidth(text, font) {
	  var canvas = document.createElement("canvas");
	  var context = canvas.getContext("2d");
	  context.font = font;
	  var metrics = context.measureText(text);
	  return metrics.width;
	}
	function LinearLayer(props) {
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill,
	    text = props.text,
	    textProps = props.textProps,
	    rx = props.rx,
	    ry = props.ry,
	    wrapText = props.wrapText,
	    showText = props.showText,
	    isBlurred = props.isBlurred,
	    transform = props.transform,
	    annotation = props.annotation,
	    showAnnotation = props.showAnnotation,
	    _onClick = props.onClick;
	  var words = text.split(" ");
	  var lines = [];
	  var fSize = textProps.fontSize;
	  var line = "";
	  words.forEach(function (word, i) {
	    var testLine = "".concat(line, " ").concat(word);
	    var testWidth = getTextWidth(testLine, fSize);
	    if (testWidth > width) {
	      lines.push(line);
	      line = word;
	    } else {
	      line = testLine;
	    }
	    if (i === words.length - 1) {
	      lines.push(line);
	    }
	  });
	  if (lines[0] === "") lines.shift();
	  return /*#__PURE__*/react.createElement("g", {
	    id: id,
	    onClick: function onClick() {
	      return _onClick();
	    }
	  }, /*#__PURE__*/react.createElement("rect", {
	    width: width,
	    height: height,
	    x: x - width / 2,
	    y: y - height / 2,
	    fill: fill,
	    rx: rx,
	    ry: ry,
	    style: {
	      opacity: isBlurred ? 0.5 : 1,
	      filter: isBlurred ? "blur(5px)" : "none"
	    }
	  }), showText && /*#__PURE__*/react.createElement("g", null, wrapText ? /*#__PURE__*/react.createElement("text", {
	    width: width,
	    height: height,
	    x: x,
	    y: y,
	    transform: transform,
	    style: _objectSpread2$1({}, textProps)
	  }, lines.map(function (line, i) {
	    return /*#__PURE__*/react.createElement("tspan", {
	      x: x,
	      y: y + 1 + (i - (lines.length - 1) / 2) * 3,
	      key: i
	    }, line);
	  })) : /*#__PURE__*/react.createElement("text", {
	    width: width,
	    height: height,
	    x: x,
	    y: y,
	    transform: transform,
	    style: _objectSpread2$1({}, textProps)
	  }, text)), showAnnotation && annotation);
	}

	function Minimize(props) {
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill,
	    onClick = props.onClick;
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    onClick: onClick,
	    x: x,
	    y: y,
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/react.createElement("rect", {
	    width: width,
	    height: height,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.2 0.2)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M12.9999 21.9994C17.055 21.9921 19.1784 21.8926 20.5354 20.5355C21.9999 19.0711 21.9999 16.714 21.9999 12C21.9999 7.28595 21.9999 4.92893 20.5354 3.46447C19.071 2 16.714 2 11.9999 2C7.28587 2 4.92884 2 3.46438 3.46447C2.10734 4.8215 2.00779 6.94493 2.00049 11",
	    stroke: "#ffffff",
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M17 7L12 12M12 12H15.75M12 12V8.25",
	    stroke: "#ffffff",
	    strokeWidth: "1.5",
	    strokeLinecap: "round",
	    strokeLinejoin: "round"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14C7.88562 14 8.82843 14 9.41421 14.5858C10 15.1716 10 16.1144 10 18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18Z",
	    stroke: "#ffffff",
	    strokeWidth: "1.5"
	  })));
	}

	function Arrow(_ref) {
	  var id = _ref.id,
	    points = _ref.points;
	  var ref = react_31();
	  react_24(function () {
	    var svg = select(ref.current);
	    var defs = svg.append("defs");
	    defs.append("marker").attr("id", "arrowhead-".concat(id)).attr("viewBox", "-0 -5 10 10").attr("refX", 9.5).attr("refY", 0).attr("orient", "auto").attr("markerWidth", 4).attr("markerHeight", 3).attr("xoverflow", "visible").append("svg:path").attr("d", "M 0,-5 L 10 ,0 L 0,5").attr("fill", "#aaa").style("stroke", "none");
	    var lineGenerator = line();
	    var path = svg.append("path").attr("d", lineGenerator(points)).attr("marker-end", "url(#arrowhead-".concat(id, ")")).style("fill", "none").style("stroke", "#aaa").style("stroke-width", 0.8);

	    // Cleanup function
	    return function () {
	      path.remove();
	      defs.remove();
	    };
	  }, [id, points]);
	  return /*#__PURE__*/react.createElement("svg", {
	    ref: ref
	  });
	}

	// Baseline
	var baseline_x$4 = 50;

	// Width Definitions
	var LN1_width$2 = 10;
	var LN2_width$1 = 10;
	var MSA_width$1 = 10;
	var ff_width$1 = 10;
	var add_width$1 = 3;
	var x_gap$4 = (baseline_x$4 - MSA_width$1 - LN1_width$2 - add_width$1) * 2 / 7;

	// Height Definitions
	var LN1_height$2 = 80;
	var MSA_height$1 = 80;
	var ff_height$1 = 80;
	var LN2_height$1 = 80;

	// Add 1 Info
	var add1_x$1 = baseline_x$4 - x_gap$4 / 2 - add_width$1 / 2;
	var LN1_x$2 = add1_x$1 - x_gap$4 - 3 / 2 - LN1_width$2 / 2;
	var MSA_x$1 = LN1_x$2 - x_gap$4 - MSA_width$1 / 2 - LN1_width$2 / 2;
	var ff_x$1 = baseline_x$4 + x_gap$4 / 2 + add_width$1 / 2 + ff_width$1 / 2;
	var LN2_x$1 = ff_x$1 + x_gap$4 + ff_width$1 / 2 + LN2_width$1 / 2;
	var add2_x$1 = LN2_x$1 + x_gap$4 + LN2_width$1 / 2 + add_width$1 / 2;
	function Encoder(props) {
	  var ref = react_31();
	  var _React$useState = react.useState(null),
	    _React$useState2 = _slicedToArray$1(_React$useState, 2),
	    activeComp = _React$useState2[0],
	    setActiveComp = _React$useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill;
	    props.rx;
	    props.ry;
	    var onClick = props.onClick,
	    isBlurred = props.isBlurred,
	    active = props.active;
	  var MSAProps = null;
	  var LN1Props = null;
	  var ffProps = null;
	  var LN2Props = null;
	  var arrowPoints = {};
	  var leftDatum = x - width / 2;
	  var rightDatum = x + width / 2;
	  var topDatum = y - height / 2;
	  var bottomDatum = y + height / 2;
	  var thisProps = _objectSpread2$1({}, props);
	  thisProps.text = "Encoder-".concat(id - 1);
	  thisProps.wrapText = false;
	  thisProps.showText = !active;
	  thisProps.onClick = active ? function () {} : onClick;
	  thisProps.textProps = {
	    "textAnchor": "middle",
	    "alignmentBaseline": "middle",
	    "fontSize": "3px",
	    "fill": "white",
	    "opacity": isBlurred ? 0.2 : 1,
	    "filter": isBlurred ? "blur(5px)" : "none"
	  };
	  function setComps(id) {
	    if (activeComp === id) {
	      setActiveComp(null); // hide annotation if the same component is clicked
	    } else {
	      setActiveComp(id); // show annotation if another component is clicked
	    }
	  }

	  function closeComps() {
	    setActiveComp(null);
	    onClick();
	  }
	  if (active) {
	    MSAProps = {
	      id: "".concat(id, "-1"),
	      width: MSA_width$1 * width / 100,
	      height: MSA_height$1 * height / 100,
	      x: leftDatum + MSA_x$1 * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Multi-Headed Self-Attention',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      transform: "rotate(90, ".concat(leftDatum + MSA_x$1 * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/multi_headed_attention.jpg",
	        x: id !== 4 ? rightDatum + 10 : leftDatum - 145,
	        y: 0,
	        width: "135",
	        height: "135"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-1"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-1"));
	      },
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN1Props = {
	      id: "".concat(id, "-2"),
	      width: LN1_width$2 * width / 100,
	      height: LN1_height$2 * height / 100,
	      x: leftDatum + LN1_x$2 * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Layer Normalization',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-2"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN1_x$2 * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/layer_normalization.jpg",
	        x: id !== 4 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-2"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    ffProps = {
	      id: "".concat(id, "-4"),
	      width: ff_width$1 * width / 100,
	      height: ff_height$1 * height / 100,
	      x: leftDatum + ff_x$1 * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Feed-Forward Network',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-4"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + ff_x$1 * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/feedforward.jpg",
	        x: id !== 4 ? rightDatum + 10 : leftDatum - 135,
	        y: 0,
	        width: "135",
	        height: "135"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-4"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "transform": "rotate(-90, ".concat(leftDatum + MSA_width$1 * width / 200, ", ").concat(topDatum + MSA_height$1 * height / 200, ")"),
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN2Props = {
	      id: "".concat(id, "-5"),
	      width: LN2_width$1 * width / 100,
	      height: LN2_height$1 * height / 100,
	      x: leftDatum + LN2_x$1 * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Layer Normalization',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-5"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN2_x$1 * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/layer_normalization.jpg",
	        x: id !== 4 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-5"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    arrowPoints['IN-MSA'] = [[leftDatum - x_gap$4 / 2, y], [MSAProps.x - MSAProps.width / 2, y]];
	    arrowPoints['IN-ADD1'] = [[leftDatum + x_gap$4 / 4, y], [leftDatum + x_gap$4 / 4, bottomDatum - 2], [leftDatum + add1_x$1 * width / 100, bottomDatum - 2], [leftDatum + add1_x$1 * width / 100, y + add_width$1]];
	    arrowPoints['MSA-LN1'] = [[MSAProps.x + MSAProps.width / 2, y], [LN1Props.x - LN1Props.width / 2, LN1Props.y]];
	    arrowPoints['LN1-ADD1'] = [[LN1Props.x + LN1Props.width / 2, LN1Props.y], [leftDatum + add1_x$1 * width / 100 - add_width$1, LN1Props.y]];
	    arrowPoints['ADD1-FF'] = [[leftDatum + add1_x$1 * width / 100 + add_width$1, LN1Props.y], [ffProps.x - ffProps.width / 2, ffProps.y]];
	    arrowPoints['ADD1-ADD2'] = [[leftDatum + (add1_x$1 + x_gap$4 / 4) * width / 100 + 3, y], [leftDatum + (add1_x$1 + x_gap$4 / 4) * width / 100 + 3, bottomDatum - 2], [leftDatum + add2_x$1 * width / 100, bottomDatum - 2], [leftDatum + add2_x$1 * width / 100, y + add_width$1]];
	    arrowPoints['FF-LN2'] = [[ffProps.x + ffProps.width / 2, ffProps.y], [LN2Props.x - LN2Props.width / 2, LN2Props.y]];
	    arrowPoints['LN2-ADD2'] = [[LN2Props.x + LN2Props.width / 2, LN2Props.y], [leftDatum + add2_x$1 * width / 100 - add_width$1, LN2Props.y]];
	    arrowPoints['ADD2-OUT'] = [[leftDatum + add2_x$1 * width / 100 + add_width$1, LN2Props.y], [rightDatum + x_gap$4 / 2, LN2Props.y]];
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement(LinearLayer, thisProps), active && /*#__PURE__*/react.createElement(LinearLayer, MSAProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN1Props), active && /*#__PURE__*/react.createElement(LinearLayer, ffProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN2Props), active && /*#__PURE__*/react.createElement("svg", {
	    id: "".concat(id, "-3"),
	    x: leftDatum + add1_x$1 * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-3"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), active && /*#__PURE__*/react.createElement("svg", {
	    id: "".concat(id, "-6"),
	    x: leftDatum + add2_x$1 * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-6"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), (activeComp === "".concat(id, "-3") || activeComp === "".concat(id, "-6")) && /*#__PURE__*/react.createElement("image", {
	    href: "./assets/residual_connection.jpg",
	    x: rightDatum + 10,
	    y: 0,
	    width: "75",
	    height: "75"
	  }), active && /*#__PURE__*/react.createElement(Minimize, {
	    width: 4.5,
	    height: 4.5,
	    x: rightDatum - 7,
	    y: topDatum + 2,
	    onClick: closeComps,
	    fill: fill
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'IN-MSA',
	    points: arrowPoints['IN-MSA']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'IN-ADD1',
	    points: arrowPoints['IN-ADD1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'MSA-LN1',
	    points: arrowPoints['MSA-LN1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN1-ADD1',
	    points: arrowPoints['LN1-ADD1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD1-FF',
	    points: arrowPoints['ADD1-FF']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'FF-LN2',
	    points: arrowPoints['FF-LN2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD1-ADD2',
	    points: arrowPoints['ADD1-ADD2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN2-ADD2',
	    points: arrowPoints['LN2-ADD2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD2-OUT',
	    points: arrowPoints['ADD2-OUT']
	  }));
	}

	var x_gap$3 = 20;

	// Baseline
	var baseline_x$3 = 50;

	// Text Embedding Info
	var text_width$1 = 17;
	var text_height$1 = 40;

	// Token Info
	var token_width$1 = 13;
	var token_height$1 = 85;

	// Position info
	var position_width$1 = 17;
	var position_height$1 = 40;

	// Element Addition Infor
	var add_x$1 = baseline_x$3 + text_width$1 / 2 + x_gap$3;
	function InputEmbedding(props) {
	  var ref = react_31();
	  var _React$useState = react.useState(null),
	    _React$useState2 = _slicedToArray$1(_React$useState, 2),
	    activeComp = _React$useState2[0],
	    setActiveComp = _React$useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill;
	    props.rx;
	    props.ry;
	    var onClick = props.onClick,
	    isBlurred = props.isBlurred,
	    active = props.active;
	  var tokenizerProps = null;
	  var embeddingProps = null;
	  var positionProps = null;
	  var arrowPoints = {};
	  var leftDatum = x - width / 2;
	  var rightbase = x + width / 2;
	  var topbase = y - height / 2;
	  var thisProps = _objectSpread2$1({}, props);
	  thisProps.text = "Input Embedding";
	  thisProps.wrapText = false;
	  thisProps.showText = !active;
	  thisProps.onClick = active ? function () {} : onClick;
	  thisProps.transform = "rotate(90, ".concat(x, ", ").concat(y, ")");
	  thisProps.textProps = {
	    "textAnchor": "middle",
	    "alignmentBaseline": "middle",
	    "fontSize": "3px",
	    "fill": "white",
	    "opacity": isBlurred ? 0.2 : 1,
	    "filter": isBlurred ? "blur(5px)" : "none"
	  };
	  function setComps(id) {
	    if (activeComp === id) {
	      setActiveComp(null); // hide annotation if the same component is clicked
	    } else {
	      setActiveComp(id); // show annotation if another component is clicked
	    }
	  }

	  function closeComps() {
	    setActiveComp(null);
	    onClick();
	  }
	  if (active) {
	    tokenizerProps = {
	      id: "".concat(id, "-1"),
	      width: token_width$1 * width / 100,
	      height: token_height$1 * height / 100,
	      x: leftDatum + (token_width$1 + x_gap$3) * width / 200,
	      y: y,
	      fill: 'white',
	      text: 'Source Tokenizer',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: false,
	      showText: true,
	      transform: "rotate(90, ".concat(leftDatum + (token_width$1 + x_gap$3) * width / 200, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/source_tokenizer.png",
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-1"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-1"));
	      },
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    embeddingProps = {
	      id: "".concat(id, "-2"),
	      width: text_width$1 * width / 100,
	      height: text_height$1 * height / 100,
	      x: x,
	      y: y - height / 4,
	      fill: 'white',
	      text: 'Text Embedding',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-2"));
	      },
	      transform: "rotate(90, ".concat(x, ", ").concat(y - height / 4, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/text_embedding.jpg",
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-2"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    positionProps = {
	      id: "".concat(id, "-3"),
	      width: position_width$1 * width / 100,
	      height: position_height$1 * height / 100,
	      x: x,
	      y: y + height / 4,
	      fill: 'white',
	      text: 'Position Embedding',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      transform: "rotate(90, ".concat(x, ", ").concat(y + height / 4, ")"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-3"));
	      },
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/position_embedding.jpg",
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-3"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "transform": "rotate(-90, ".concat(leftDatum + token_width$1 * width / 200, ", ").concat(topbase + token_height$1 * height / 200, ")"),
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    arrowPoints['in-token'] = [[leftDatum - x_gap$3 / 4, y], [tokenizerProps.x - tokenizerProps.width / 2, y]];
	    arrowPoints['token-text'] = [[tokenizerProps.x + tokenizerProps.width / 2, y], [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4 - tokenizerProps.width / 4), y], [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4 - tokenizerProps.width / 4), embeddingProps.y], [embeddingProps.x - embeddingProps.width / 2, embeddingProps.y]];
	    arrowPoints['token-position'] = [[tokenizerProps.x + tokenizerProps.width / 2, y], [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4 - tokenizerProps.width / 4), y], [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4 - tokenizerProps.width / 4), positionProps.y], [positionProps.x - positionProps.width / 2, positionProps.y]];
	    arrowPoints['text-add'] = [[embeddingProps.x + embeddingProps.width / 2, embeddingProps.y], [leftDatum + add_x$1 * width / 100, embeddingProps.y], [leftDatum + add_x$1 * width / 100, y - 3]];
	    arrowPoints['position-add'] = [[positionProps.x + positionProps.width / 2, positionProps.y], [leftDatum + add_x$1 * width / 100, positionProps.y], [leftDatum + add_x$1 * width / 100, y + 3]];
	    arrowPoints['addOut'] = [[leftDatum + add_x$1 * width / 100 + 3, y], [rightbase + x_gap$3 / 4, y]];
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement(LinearLayer, thisProps), active && /*#__PURE__*/react.createElement(LinearLayer, tokenizerProps), active && /*#__PURE__*/react.createElement(LinearLayer, embeddingProps), active && /*#__PURE__*/react.createElement(LinearLayer, positionProps), active && /*#__PURE__*/react.createElement("svg", {
	    id: "1-4",
	    x: leftDatum + add_x$1 * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-4"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), activeComp === "".concat(id, "-4") && /*#__PURE__*/react.createElement("image", {
	    href: "./assets/element_wise_add_input_embed.jpg",
	    x: rightbase + 10,
	    y: 0,
	    width: "75",
	    height: "50"
	  }), active && /*#__PURE__*/react.createElement(Minimize, {
	    width: 4.5,
	    height: 4.5,
	    x: rightbase - 7,
	    y: topbase + 2,
	    onClick: closeComps,
	    fill: fill
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'in-token',
	    points: arrowPoints['in-token']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'token-text',
	    points: arrowPoints['token-text']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'token-position',
	    points: arrowPoints['token-position']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'text-add',
	    points: arrowPoints['text-add']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'position-add',
	    points: arrowPoints['position-add']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'addOut',
	    points: arrowPoints['addOut']
	  }));
	}

	// Baseline
	var baseline_x$2 = 50;

	// Width Definitions
	var LN1_width$1 = 20;
	var MSA_width = 20;
	var x_gap$2 = (100 - MSA_width - LN1_width$1) / 3;

	// Height Definitions
	var LN1_height$1 = 75;
	var MSA_height = 75;

	// Add 1 Info
	var LN1_x$1 = baseline_x$2 + x_gap$2 / 2 + LN1_width$1 / 2;
	var MSA_x = LN1_x$1 - x_gap$2 - MSA_width / 2 - LN1_width$1 / 2;
	function OutputLayer(props) {
	  react_31();
	  var _React$useState = react.useState(null),
	    _React$useState2 = _slicedToArray$1(_React$useState, 2),
	    activeComp = _React$useState2[0],
	    setActiveComp = _React$useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill;
	    props.rx;
	    props.ry;
	    var onClick = props.onClick,
	    isBlurred = props.isBlurred,
	    active = props.active;
	  var MSAProps = null;
	  var LN1Props = null;
	  var arrowPoints = {};
	  var leftDatum = x - width / 2;
	  var rightDatum = x + width / 2;
	  var topDatum = y - height / 2;
	  var thisProps = _objectSpread2$1({}, props);
	  thisProps.text = "Output Layer";
	  thisProps.wrapText = false;
	  thisProps.showText = !active;
	  thisProps.onClick = active ? function () {} : onClick;
	  thisProps.transform = "rotate(90, ".concat(x, ", ").concat(y, ")");
	  thisProps.textProps = {
	    "textAnchor": "middle",
	    "alignmentBaseline": "middle",
	    "fontSize": "3px",
	    "fill": "white",
	    "opacity": isBlurred ? 0.2 : 1,
	    "filter": isBlurred ? "blur(5px)" : "none"
	  };
	  function setComps(id) {
	    if (activeComp === id) {
	      setActiveComp(null); // hide annotation if the same component is clicked
	    } else {
	      setActiveComp(id); // show annotation if another component is clicked
	    }
	  }

	  function closeComps() {
	    setActiveComp(null);
	    onClick();
	  }
	  if (active) {
	    MSAProps = {
	      id: "".concat(id, "-1"),
	      width: MSA_width * width / 100,
	      height: MSA_height * height / 100,
	      x: leftDatum + MSA_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Linear Layer',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: false,
	      showText: true,
	      transform: "rotate(90, ".concat(leftDatum + MSA_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/source_tokenizer.png",
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-1"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-1"));
	      },
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN1Props = {
	      id: "".concat(id, "-2"),
	      width: LN1_width$1 * width / 100,
	      height: LN1_height$1 * height / 100,
	      x: leftDatum + LN1_x$1 * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Softmax Layer',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: false,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-2"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN1_x$1 * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/text_embedding.jpg",
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-2"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    arrowPoints['IN-MSA'] = [[leftDatum - x_gap$2 / 4, y], [MSAProps.x - MSAProps.width / 2, y]];
	    arrowPoints['MSA-LN1'] = [[MSAProps.x + MSAProps.width / 2, y], [LN1Props.x - LN1Props.width / 2, LN1Props.y]];
	    arrowPoints['LN1-OUT'] = [[LN1Props.x + LN1Props.width / 2, LN1Props.y], [rightDatum + x_gap$2 / 4, y]];
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement(LinearLayer, thisProps), active && /*#__PURE__*/react.createElement(LinearLayer, MSAProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN1Props), active && /*#__PURE__*/react.createElement(Minimize, {
	    width: 4.5,
	    height: 4.5,
	    x: rightDatum - 7,
	    y: topDatum + 2,
	    onClick: closeComps,
	    fill: fill
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'IN-MSA',
	    points: arrowPoints['IN-MSA']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'MSA-LN1',
	    points: arrowPoints['MSA-LN1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN1-OUT',
	    points: arrowPoints['LN1-OUT']
	  }));
	}

	// Baseline
	var baseline_x$1 = 35;

	// Width Definitions
	var LN1_width = 7;
	var LN2_width = 7;
	var LN3_width = 7;
	var MMSA_width = 10;
	var CSA_width = 7;
	var ff_width = 7;
	var add_width = 3;
	var x_gap$1 = (baseline_x$1 - MMSA_width - LN1_width - add_width) * 2 / 7;

	// Height Definitions
	var LN1_height = 80;
	var MMSA_height = 80;
	var CSA_height = 80;
	var LN2_height = 80;
	var LN3_height = 80;
	var ff_height = 80;

	// Add 1 Info
	var add1_x = baseline_x$1 - x_gap$1 / 2 - add_width / 2;
	var LN1_x = add1_x - x_gap$1 - 3 / 2 - LN1_width / 2;
	var MMSA_x = LN1_x - x_gap$1 - MMSA_width / 2 - LN1_width / 2;
	var CSA_x = baseline_x$1 + x_gap$1 / 2 + add_width / 2 + CSA_width / 2;
	var LN2_x = CSA_x + x_gap$1 + CSA_width / 2 + LN2_width / 2;
	var add2_x = LN2_x + x_gap$1 + LN2_width / 2 + add_width / 2;
	var ff_x = add2_x + x_gap$1 + add_width / 2 + ff_width / 2;
	var LN3_x = ff_x + x_gap$1 + ff_width / 2 + LN3_width / 2;
	var add3_x = LN3_x + x_gap$1 + LN2_width / 2 + add_width / 2;
	function Decoder(props) {
	  var ref = react_31();
	  var _React$useState = react.useState(null),
	    _React$useState2 = _slicedToArray$1(_React$useState, 2),
	    activeComp = _React$useState2[0],
	    setActiveComp = _React$useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill;
	    props.rx;
	    props.ry;
	    var onClick = props.onClick,
	    isBlurred = props.isBlurred,
	    active = props.active;
	  var MMSAProps = null;
	  var LN1Props = null;
	  var CSAProps = null;
	  var LN2Props = null;
	  var ffProps = null;
	  var LN3Props = null;
	  var arrowPoints = {};
	  var leftDatum = x - width / 2;
	  var rightDatum = x + width / 2;
	  var topDatum = y - height / 2;
	  var bottomDatum = y + height / 2;
	  var thisProps = _objectSpread2$1({}, props);
	  thisProps.text = "Decoder-".concat(id - 5);
	  thisProps.wrapText = false;
	  thisProps.showText = !active;
	  thisProps.onClick = active ? function () {} : onClick;
	  thisProps.textProps = {
	    "textAnchor": "middle",
	    "alignmentBaseline": "middle",
	    "fontSize": "3px",
	    "fill": "white",
	    "opacity": isBlurred ? 0.2 : 1,
	    "filter": isBlurred ? "blur(5px)" : "none"
	  };
	  function setComps(id) {
	    if (activeComp === id) {
	      setActiveComp(null); // hide annotation if the same component is clicked
	    } else {
	      setActiveComp(id); // show annotation if another component is clicked
	    }
	  }

	  function closeComps() {
	    setActiveComp(null);
	    onClick();
	  }
	  if (active) {
	    MMSAProps = {
	      id: "".concat(id, "-1"),
	      width: MMSA_width * width / 100,
	      height: MMSA_height * height / 100,
	      x: leftDatum + MMSA_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Masked Multi-Headed Self-Attention',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      transform: "rotate(90, ".concat(leftDatum + MMSA_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/masked_multi_headed_attention.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 135,
	        y: 0,
	        width: "125",
	        height: "125"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-1"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-1"));
	      },
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN1Props = {
	      id: "".concat(id, "-2"),
	      width: LN1_width * width / 100,
	      height: LN1_height * height / 100,
	      x: leftDatum + LN1_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Layer Normalization',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-2"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN1_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/layer_normalization.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-2"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    CSAProps = {
	      id: "".concat(id, "-4"),
	      width: CSA_width * width / 100,
	      height: CSA_height * height / 100,
	      x: leftDatum + CSA_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Multi-Headed Cross-Attention',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-4"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + CSA_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/multi_headed_cross_attention.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-4"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "transform": "rotate(-90, ".concat(leftDatum + MMSA_width * width / 200, ", ").concat(topDatum + MMSA_height * height / 200, ")"),
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN2Props = {
	      id: "".concat(id, "-5"),
	      width: LN2_width * width / 100,
	      height: LN2_height * height / 100,
	      x: leftDatum + LN2_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Layer Normalization',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-5"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN2_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("image", {
	        href: "./assets/layer_normalization.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-5"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    ffProps = {
	      id: "".concat(id, "-7"),
	      width: ff_width * width / 100,
	      height: ff_height * height / 100,
	      x: leftDatum + ff_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Feed-Forward Network',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-7"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + ff_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/feedforward.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 135,
	        y: 0,
	        width: "125",
	        height: "125"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-7"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    LN3Props = {
	      id: "".concat(id, "-8"),
	      width: LN3_width * width / 100,
	      height: LN3_height * height / 100,
	      x: leftDatum + LN3_x * width / 100,
	      y: y,
	      fill: 'white',
	      text: 'Layer Normalization',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-8"));
	      },
	      transform: "rotate(90, ".concat(leftDatum + LN3_x * width / 100, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightDatum + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/layer_normalization.jpg",
	        x: id !== 8 ? rightDatum + 10 : leftDatum - 110,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-8"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    arrowPoints['IN-MMSA'] = [[leftDatum - x_gap$1 / 2, y], [MMSAProps.x - MMSAProps.width / 2, y]];
	    arrowPoints['IN-ADD1'] = [[leftDatum + x_gap$1 / 4, y], [leftDatum + x_gap$1 / 4, bottomDatum - 2], [leftDatum + add1_x * width / 100, bottomDatum - 2], [leftDatum + add1_x * width / 100, y + add_width]];
	    arrowPoints['MMSA-LN1'] = [[MMSAProps.x + MMSAProps.width / 2, y], [LN1Props.x - LN1Props.width / 2, LN1Props.y]];
	    arrowPoints['LN1-ADD1'] = [[LN1Props.x + LN1Props.width / 2, LN1Props.y], [leftDatum + add1_x * width / 100 - add_width, LN1Props.y]];
	    arrowPoints['ADD1-CSA'] = [[leftDatum + add1_x * width / 100 + add_width, LN1Props.y], [CSAProps.x - CSAProps.width / 2, CSAProps.y]];
	    arrowPoints['ADD1-ADD2'] = [[leftDatum + (add1_x + x_gap$1 / 4) * width / 100 + 3, y], [leftDatum + (add1_x + x_gap$1 / 4) * width / 100 + 3, bottomDatum - 2], [leftDatum + add2_x * width / 100, bottomDatum - 2], [leftDatum + add2_x * width / 100, y + add_width]];
	    arrowPoints['CSA-LN2'] = [[CSAProps.x + CSAProps.width / 2, CSAProps.y], [LN2Props.x - LN2Props.width / 2, LN2Props.y]];
	    arrowPoints['LN2-ADD2'] = [[LN2Props.x + LN2Props.width / 2, LN2Props.y], [leftDatum + add2_x * width / 100 - add_width, LN2Props.y]];
	    arrowPoints['ADD2-FF'] = [[leftDatum + add2_x * width / 100 + add_width, LN2Props.y], [ffProps.x - ffProps.width / 2, ffProps.y]];
	    arrowPoints['FF-LN3'] = [[ffProps.x + ffProps.width / 2, ffProps.y], [LN3Props.x - LN3Props.width / 2, LN3Props.y]];
	    arrowPoints['LN3-ADD3'] = [[LN3Props.x + LN3Props.width / 2, LN3Props.y], [leftDatum + add3_x * width / 100 - add_width, LN3Props.y]];
	    arrowPoints['ADD2-ADD3'] = [[leftDatum + (add2_x + x_gap$1 / 4) * width / 100 + 3, y], [leftDatum + (add2_x + x_gap$1 / 4) * width / 100 + 3, bottomDatum - 2], [leftDatum + add3_x * width / 100, bottomDatum - 2], [leftDatum + add3_x * width / 100, y + add_width]];
	    arrowPoints['ADD3-OUT'] = [[leftDatum + add3_x * width / 100 + add_width, LN3Props.y], [rightDatum + x_gap$1 / 2, LN3Props.y]];
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement(LinearLayer, thisProps), active && /*#__PURE__*/react.createElement(LinearLayer, MMSAProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN1Props), active && /*#__PURE__*/react.createElement(LinearLayer, CSAProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN2Props), active && /*#__PURE__*/react.createElement(LinearLayer, ffProps), active && /*#__PURE__*/react.createElement(LinearLayer, LN3Props), active && /*#__PURE__*/react.createElement("svg", {
	    id: "".concat(id, "-3"),
	    x: leftDatum + add1_x * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-3"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), active && /*#__PURE__*/react.createElement("svg", {
	    id: "".concat(id, "-6"),
	    x: leftDatum + add2_x * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-6"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), active && /*#__PURE__*/react.createElement("svg", {
	    id: "".concat(id, "-9"),
	    x: leftDatum + add3_x * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-9"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), (activeComp === "".concat(id, "-3") || activeComp === "".concat(id, "-6") || activeComp === "".concat(id, "-9")) && /*#__PURE__*/react.createElement("image", {
	    href: "./assets/residual_connection.jpg",
	    x: id !== 8 ? rightDatum + 10 : leftDatum - 85,
	    y: 0,
	    width: "75",
	    height: "75"
	  }), active && /*#__PURE__*/react.createElement(Minimize, {
	    width: 4.5,
	    height: 4.5,
	    x: rightDatum - 7,
	    y: topDatum + 2,
	    onClick: closeComps,
	    fill: fill
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'IN-MMSA',
	    points: arrowPoints['IN-MMSA']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'IN-ADD1',
	    points: arrowPoints['IN-ADD1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'MMSA-LN1',
	    points: arrowPoints['MMSA-LN1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN1-ADD1',
	    points: arrowPoints['LN1-ADD1']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD1-CSA',
	    points: arrowPoints['ADD1-CSA']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'CSA-LN2',
	    points: arrowPoints['CSA-LN2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD1-ADD2',
	    points: arrowPoints['ADD1-ADD2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN2-ADD2',
	    points: arrowPoints['LN2-ADD2']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD2-FF',
	    points: arrowPoints['ADD2-FF']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'FF-LN3',
	    points: arrowPoints['FF-LN3']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'LN3-ADD3',
	    points: arrowPoints['LN3-ADD3']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD2-ADD3',
	    points: arrowPoints['ADD2-ADD3']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'ADD3-OUT',
	    points: arrowPoints['ADD3-OUT']
	  }));
	}

	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}

	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
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
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
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

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */

	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}
	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);
	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }
	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}
	var StyleSheet = /*#__PURE__*/function () {
	  // Using Node instead of HTMLElement since container may be a ShadowRoot
	  function StyleSheet(options) {
	    var _this = this;
	    this._insertTag = function (tag) {
	      var before;
	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }
	      _this.container.insertBefore(tag, before);
	      _this.tags.push(tag);
	    };
	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }
	  var _proto = StyleSheet.prototype;
	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };
	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }
	    var tag = this.tags[this.tags.length - 1];
	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);
	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }
	    this.ctr++;
	  };
	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode && tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };
	  return StyleSheet;
	}();

	var e$1="-ms-";var r$1="-moz-";var a="-webkit-";var n$1="comm";var c$1="rule";var s="decl";var i$1="@import";var h$1="@keyframes";var $="@layer";var g$1=Math.abs;var k$1=String.fromCharCode;var m$1=Object.assign;function x$1(e,r){return O(e,0)^45?(((r<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}function y$1(e){return e.trim()}function j$1(e,r){return (e=r.exec(e))?e[0]:e}function z$1(e,r,a){return e.replace(r,a)}function C(e,r){return e.indexOf(r)}function O(e,r){return e.charCodeAt(r)|0}function A$1(e,r,a){return e.slice(r,a)}function M(e){return e.length}function S(e){return e.length}function q$1(e,r){return r.push(e),e}function B(e,r){return e.map(r).join("")}var D=1;var E=1;var F=0;var G=0;var H=0;var I="";function J(e,r,a,n,c,s,t){return {value:e,root:r,parent:a,type:n,props:c,children:s,line:D,column:E,length:t,return:""}}function K(e,r){return m$1(J("",null,null,"",null,null,0),e,{length:-e.length},r)}function L(){return H}function N(){H=G>0?O(I,--G):0;if(E--,H===10)E=1,D--;return H}function P(){H=G<F?O(I,G++):0;if(E++,H===10)E=1,D++;return H}function Q(){return O(I,G)}function R(){return G}function T(e,r){return A$1(I,e,r)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return D=E=1,F=M(I=e),G=0,[]}function W(e){return I="",e}function X(e){return y$1(T(G-1,re(e===91?e+2:e===40?e+1:e)))}function Z(e){while(H=Q())if(H<33)P();else break;return U(e)>2||U(H)>3?"":" "}function ee(e,r){while(--r&&P())if(H<48||H>102||H>57&&H<65||H>70&&H<97)break;return T(e,R()+(r<6&&Q()==32&&P()==32))}function re(e){while(P())switch(H){case e:return G;case 34:case 39:if(e!==34&&e!==39)re(H);break;case 40:if(e===41)re(e);break;case 92:P();break}return G}function ae(e,r){while(P())if(e+H===47+10)break;else if(e+H===42+42&&Q()===47)break;return "/*"+T(r,G-1)+"*"+k$1(e===47?e:P())}function ne(e){while(!U(Q()))P();return T(e,G)}function ce(e){return W(se("",null,null,null,[""],e=V(e),0,[0],e))}function se(e,r,a,n,c,s,t,u,i){var f=0;var o=0;var l=t;var v=0;var p=0;var h=0;var b=1;var w=1;var d=1;var $=0;var g="";var m=c;var x=s;var y=n;var j=g;while(w)switch(h=$,$=P()){case 40:if(h!=108&&O(j,l-1)==58){if(C(j+=z$1(X($),"&","&\f"),"&\f")!=-1)d=-1;break}case 34:case 39:case 91:j+=X($);break;case 9:case 10:case 13:case 32:j+=Z(h);break;case 92:j+=ee(R()-1,7);continue;case 47:switch(Q()){case 42:case 47:q$1(ue(ae(P(),R()),r,a),i);break;default:j+="/";}break;case 123*b:u[f++]=M(j)*d;case 125*b:case 59:case 0:switch($){case 0:case 125:w=0;case 59+o:if(d==-1)j=z$1(j,/\f/g,"");if(p>0&&M(j)-l)q$1(p>32?ie(j+";",n,a,l-1):ie(z$1(j," ","")+";",n,a,l-2),i);break;case 59:j+=";";default:q$1(y=te(j,r,a,f,o,c,u,g,m=[],x=[],l),s);if($===123)if(o===0)se(j,r,y,y,m,s,l,u,x);else switch(v===99&&O(j,3)===110?100:v){case 100:case 108:case 109:case 115:se(e,y,y,n&&q$1(te(e,y,y,0,0,c,u,g,c,m=[],l),x),c,x,l,u,n?m:x);break;default:se(j,y,y,y,[""],x,0,u,x);}}f=o=p=0,b=d=1,g=j="",l=t;break;case 58:l=1+M(j),p=h;default:if(b<1)if($==123)--b;else if($==125&&b++==0&&N()==125)continue;switch(j+=k$1($),$*b){case 38:d=o>0?1:(j+="\f",-1);break;case 44:u[f++]=(M(j)-1)*d,d=1;break;case 64:if(Q()===45)j+=X(P());v=Q(),o=l=M(g=j+=ne(R())),$++;break;case 45:if(h===45&&M(j)==2)b=0;}}return s}function te(e,r,a,n,s,t,u,i,f,o,l){var v=s-1;var p=s===0?t:[""];var h=S(p);for(var b=0,w=0,d=0;b<n;++b)for(var $=0,k=A$1(e,v+1,v=g$1(w=u[b])),m=e;$<h;++$)if(m=y$1(w>0?p[$]+" "+k:z$1(k,/&\f/g,p[$])))f[d++]=m;return J(e,r,a,s===0?c$1:i,f,o,l)}function ue(e,r,a){return J(e,r,a,n$1,k$1(L()),A$1(e,2,-2),0)}function ie(e,r,a,n){return J(e,r,a,s,A$1(e,0,n),A$1(e,n+1,-1),n)}function oe(e,r){var a="";var n=S(e);for(var c=0;c<n;c++)a+=r(e[c],c,e,r)||"";return a}function le(e,r,a,t){switch(e.type){case $:if(e.children.length)break;case i$1:case s:return e.return=e.return||e.value;case n$1:return "";case h$1:return e.return=e.value+"{"+oe(e.children,t)+"}";case c$1:e.value=e.props.join(",");}return M(a=oe(e.children,t))?e.return=e.value+"{"+a+"}":""}function ve(e){var r=S(e);return function(a,n,c,s){var t="";for(var u=0;u<r;u++)t+=e[u](a,n,c,s)||"";return t}}function pe(e){return function(r){if(!r.root)if(r=r.return)e(r);}}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }
	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	function memoize(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;
	  while (true) {
	    previous = character;
	    character = Q(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }
	    if (U(character)) {
	      break;
	    }
	    P();
	  }
	  return T(begin, G);
	};
	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;
	  do {
	    switch (U(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && Q() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }
	        parsed[index] += identifierWithPointTracking(G - 1, points, index);
	        break;
	      case 2:
	        parsed[index] += X(character);
	        break;
	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = Q() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += k$1(character);
	    }
	  } while (character = P());
	  return parsed;
	};
	var getRules = function getRules(value, points) {
	  return W(toRules(V(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

	var fixedElements = /* #__PURE__ */new WeakMap();
	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent ||
	  // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }
	  var value = element.value,
	    parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;
	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case

	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */ && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

	  if (isImplicitRule) {
	    return;
	  }
	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;
	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};
	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;
	    if (
	    // charcode for l
	    value.charCodeAt(0) === 108 &&
	    // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	/* eslint-disable no-fallthrough */

	function prefix(value, length) {
	  switch (x$1(value, length)) {
	    // color-adjust
	    case 5103:
	      return a + 'print-' + value + value;
	    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return a + value + value;
	    // appearance, user-select, transform, hyphens, text-size-adjust

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return a + value + r$1 + value + e$1 + value + value;
	    // flex, flex-direction

	    case 6828:
	    case 4268:
	      return a + value + e$1 + value + value;
	    // order

	    case 6165:
	      return a + value + e$1 + 'flex-' + value + value;
	    // align-items

	    case 5187:
	      return a + value + z$1(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e$1 + 'flex-$1$2') + value;
	    // align-self

	    case 5443:
	      return a + value + e$1 + 'flex-item-' + z$1(value, /flex-|-self/, '') + value;
	    // align-content

	    case 4675:
	      return a + value + e$1 + 'flex-line-pack' + z$1(value, /align-content|flex-|-self/, '') + value;
	    // flex-shrink

	    case 5548:
	      return a + value + e$1 + z$1(value, 'shrink', 'negative') + value;
	    // flex-basis

	    case 5292:
	      return a + value + e$1 + z$1(value, 'basis', 'preferred-size') + value;
	    // flex-grow

	    case 6060:
	      return a + 'box-' + z$1(value, '-grow', '') + a + value + e$1 + z$1(value, 'grow', 'positive') + value;
	    // transition

	    case 4554:
	      return a + z$1(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
	    // cursor

	    case 6187:
	      return z$1(z$1(z$1(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
	    // background, background-image

	    case 5495:
	    case 3959:
	      return z$1(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
	    // justify-content

	    case 4968:
	      return z$1(z$1(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e$1 + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
	    // (margin|padding)-inline-(start|end)

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return z$1(value, /(.+)-inline(.+)/, a + '$1$2') + value;
	    // (min|max)?(width|height|inline-size|block-size)

	    case 8116:
	    case 7059:
	    case 5753:
	    case 5535:
	    case 5445:
	    case 5701:
	    case 4933:
	    case 4677:
	    case 5533:
	    case 5789:
	    case 5021:
	    case 4765:
	      // stretch, max-content, min-content, fill-available
	      if (M(value) - 1 - length > 6) switch (O(value, length + 1)) {
	        // (m)ax-content, (m)in-content
	        case 109:
	          // -
	          if (O(value, length + 4) !== 45) break;
	        // (f)ill-available, (f)it-content

	        case 102:
	          return z$1(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r$1 + (O(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
	        // (s)tretch

	        case 115:
	          return ~C(value, 'stretch') ? prefix(z$1(value, 'stretch', 'fill-available'), length) + value : value;
	      }
	      break;
	    // position: sticky

	    case 4949:
	      // (s)ticky?
	      if (O(value, length + 1) !== 115) break;
	    // display: (flex|inline-flex)

	    case 6444:
	      switch (O(value, M(value) - 3 - (~C(value, '!important') && 10))) {
	        // stic(k)y
	        case 107:
	          return z$1(value, ':', ':' + a) + value;
	        // (inline-)?fl(e)x

	        case 101:
	          return z$1(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (O(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e$1 + '$2box$3') + value;
	      }
	      break;
	    // writing-mode

	    case 5936:
	      switch (O(value, length + 11)) {
	        // vertical-l(r)
	        case 114:
	          return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
	        // vertical-r(l)

	        case 108:
	          return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
	        // horizontal(-)tb

	        case 45:
	          return a + value + e$1 + z$1(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
	      }
	      return a + value + e$1 + value + value;
	  }
	  return value;
	}
	var prefixer = function prefixer(element, index, children, callback) {
	  if (element.length > -1) if (!element["return"]) switch (element.type) {
	    case s:
	      element["return"] = prefix(element.value, element.length);
	      break;
	    case h$1:
	      return oe([K(element, {
	        value: z$1(element.value, '@', '@' + a)
	      })], callback);
	    case c$1:
	      if (element.length) return B(element.props, function (value) {
	        switch (j$1(value, /(::plac\w+|:read-\w+)/)) {
	          // :read-(only|write)
	          case ':read-only':
	          case ':read-write':
	            return oe([K(element, {
	              props: [z$1(value, /:(read-\w+)/, ':' + r$1 + '$1')]
	            })], callback);
	          // :placeholder

	          case '::placeholder':
	            return oe([K(element, {
	              props: [z$1(value, /:(plac\w+)/, ':' + a + 'input-$1')]
	            }), K(element, {
	              props: [z$1(value, /:(plac\w+)/, ':' + r$1 + '$1')]
	            }), K(element, {
	              props: [z$1(value, /:(plac\w+)/, e$1 + 'input-$1')]
	            })], callback);
	        }
	        return '';
	      });
	  }
	};
	var isBrowser$3 = typeof document !== 'undefined';
	var getServerStylisCache = isBrowser$3 ? undefined : weakMemoize(function () {
	  return memoize(function () {
	    var cache = {};
	    return function (name) {
	      return cache[name];
	    };
	  });
	});
	var defaultStylisPlugins = [prefixer];
	var createCache = function createCache(options) {
	  var key = options.key;
	  if (isBrowser$3 && key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');
	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }
	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }
	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	  var inserted = {};
	  var container;
	  var nodesToHydrate = [];
	  if (isBrowser$3) {
	    container = options.container || document.head;
	    Array.prototype.forEach.call(
	    // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }
	      nodesToHydrate.push(node);
	    });
	  }
	  var _insert;
	  var omnipresentPlugins = [compat, removeLabel];
	  if (isBrowser$3) {
	    var currentSheet;
	    var finalizingPlugins = [le, pe(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = ve(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	    var stylis = function stylis(styles) {
	      return oe(ce(styles), serializer);
	    };
	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;
	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  } else {
	    var _finalizingPlugins = [le];
	    var _serializer = ve(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
	    var _stylis = function _stylis(styles) {
	      return oe(ce(styles), _serializer);
	    }; // $FlowFixMe

	    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;
	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      }
	      return serverStylisCache[name];
	    };
	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);
	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }
	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }
	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b = "function" === typeof Symbol && Symbol.for,
	  c = b ? Symbol.for("react.element") : 60103,
	  d = b ? Symbol.for("react.portal") : 60106,
	  e = b ? Symbol.for("react.fragment") : 60107,
	  f = b ? Symbol.for("react.strict_mode") : 60108,
	  g = b ? Symbol.for("react.profiler") : 60114,
	  h = b ? Symbol.for("react.provider") : 60109,
	  k = b ? Symbol.for("react.context") : 60110,
	  l = b ? Symbol.for("react.async_mode") : 60111,
	  m = b ? Symbol.for("react.concurrent_mode") : 60111,
	  n = b ? Symbol.for("react.forward_ref") : 60112,
	  p = b ? Symbol.for("react.suspense") : 60113,
	  q = b ? Symbol.for("react.suspense_list") : 60120,
	  r = b ? Symbol.for("react.memo") : 60115,
	  t = b ? Symbol.for("react.lazy") : 60116,
	  v = b ? Symbol.for("react.block") : 60121,
	  w$1 = b ? Symbol.for("react.fundamental") : 60117,
	  x = b ? Symbol.for("react.responder") : 60118,
	  y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;
	    switch (u) {
	      case c:
	        switch (a = a.type, a) {
	          case l:
	          case m:
	          case e:
	          case g:
	          case f:
	          case p:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k:
	              case n:
	              case t:
	              case r:
	              case h:
	                return a;
	              default:
	                return u;
	            }
	        }
	      case d:
	        return u;
	    }
	  }
	}
	function A(a) {
	  return z(a) === m;
	}
	var AsyncMode = l;
	var ConcurrentMode = m;
	var ContextConsumer = k;
	var ContextProvider = h;
	var Element$1 = c;
	var ForwardRef = n;
	var Fragment = e;
	var Lazy = t;
	var Memo = r;
	var Portal = d;
	var Profiler = g;
	var StrictMode = f;
	var Suspense = p;
	var isAsyncMode = function (a) {
	  return A(a) || z(a) === l;
	};
	var isConcurrentMode = A;
	var isContextConsumer = function (a) {
	  return z(a) === k;
	};
	var isContextProvider = function (a) {
	  return z(a) === h;
	};
	var isElement$1 = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	var isForwardRef = function (a) {
	  return z(a) === n;
	};
	var isFragment = function (a) {
	  return z(a) === e;
	};
	var isLazy = function (a) {
	  return z(a) === t;
	};
	var isMemo = function (a) {
	  return z(a) === r;
	};
	var isPortal = function (a) {
	  return z(a) === d;
	};
	var isProfiler = function (a) {
	  return z(a) === g;
	};
	var isStrictMode = function (a) {
	  return z(a) === f;
	};
	var isSuspense = function (a) {
	  return z(a) === p;
	};
	var isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w$1 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	var typeOf = z;
	var reactIs_production_min = {
	  AsyncMode: AsyncMode,
	  ConcurrentMode: ConcurrentMode,
	  ContextConsumer: ContextConsumer,
	  ContextProvider: ContextProvider,
	  Element: Element$1,
	  ForwardRef: ForwardRef,
	  Fragment: Fragment,
	  Lazy: Lazy,
	  Memo: Memo,
	  Portal: Portal,
	  Profiler: Profiler,
	  StrictMode: StrictMode,
	  Suspense: Suspense,
	  isAsyncMode: isAsyncMode,
	  isConcurrentMode: isConcurrentMode,
	  isContextConsumer: isContextConsumer,
	  isContextProvider: isContextProvider,
	  isElement: isElement$1,
	  isForwardRef: isForwardRef,
	  isFragment: isFragment,
	  isLazy: isLazy,
	  isMemo: isMemo,
	  isPortal: isPortal,
	  isProfiler: isProfiler,
	  isStrictMode: isStrictMode,
	  isSuspense: isSuspense,
	  isValidElementType: isValidElementType,
	  typeOf: typeOf
	};

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});
	reactIs_development.AsyncMode;
	reactIs_development.ConcurrentMode;
	reactIs_development.ContextConsumer;
	reactIs_development.ContextProvider;
	reactIs_development.Element;
	reactIs_development.ForwardRef;
	reactIs_development.Fragment;
	reactIs_development.Lazy;
	reactIs_development.Memo;
	reactIs_development.Portal;
	reactIs_development.Profiler;
	reactIs_development.StrictMode;
	reactIs_development.Suspense;
	reactIs_development.isAsyncMode;
	reactIs_development.isConcurrentMode;
	reactIs_development.isContextConsumer;
	reactIs_development.isContextProvider;
	reactIs_development.isElement;
	reactIs_development.isForwardRef;
	reactIs_development.isFragment;
	reactIs_development.isLazy;
	reactIs_development.isMemo;
	reactIs_development.isPortal;
	reactIs_development.isProfiler;
	reactIs_development.isStrictMode;
	reactIs_development.isSuspense;
	reactIs_development.isValidElementType;
	reactIs_development.typeOf;

	var reactIs = createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min;
	  }
	});

	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	var isBrowser$2 = typeof document !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;
	  if (
	  // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false ||
	  // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }
	};
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  registerStyles(cache, serialized, isStringTag);
	  var className = cache.key + "-" + serialized.name;
	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;
	    do {
	      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
	      if (!isBrowser$2 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }
	      current = current.next;
	    } while (current !== undefined);
	    if (!isBrowser$2 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	    i = 0,
	    len = str.length;
	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k = /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^= /* k >>> r: */
	    k >>> 24;
	    h = /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array

	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.

	  h ^= h >>> 13;
	  h = /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  aspectRatio: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};
	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};
	var processStyleName = /* #__PURE__ */memoize(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }
	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }
	  return value;
	};
	var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }
	  if (interpolation.__emotion_styles !== undefined) {
	    return interpolation;
	  }
	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }
	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }
	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;
	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }
	          var styles = interpolation.styles + ";";
	          return styles;
	        }
	        return createStringFromObject(mergedProps, registered, interpolation);
	      }
	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }
	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)

	  if (registered == null) {
	    return interpolation;
	  }
	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}
	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';
	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];
	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error(noComponentSelectorMessage);
	        }
	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);
	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }
	            default:
	              {
	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }
	  return string;
	}
	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list

	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }
	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];
	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {
	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg

	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);
	    if (stringMode) {
	      styles += strings[i];
	    }
	  }

	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' +
	    // $FlowFixMe we know it's not null
	    match[1];
	  }
	  var name = murmur2(styles) + identifierName;
	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var isBrowser$1 = typeof document !== 'undefined';
	var syncFallback = function syncFallback(create) {
	  return create();
	};
	var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
	var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$1 ? syncFallback : useInsertionEffect || syncFallback;

	var isBrowser = typeof document !== 'undefined';
	var hasOwnProperty = {}.hasOwnProperty;
	var EmotionCacheContext = /* #__PURE__ */react_10(
	// we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);
	EmotionCacheContext.Provider;
	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/react_14(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react_21(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};
	if (!isBrowser) {
	  withEmotionCache = function withEmotionCache(func) {
	    return function (props) {
	      var cache = react_21(EmotionCacheContext);
	      if (cache === null) {
	        // yes, we're potentially creating this on every render
	        // it doesn't actually matter though since it's only on the server
	        // so there will only every be a single render
	        // that could change in the future because of suspense and etc. but for now,
	        // this works and i don't want to optimise for a future thing that we aren't sure about
	        cache = createCache({
	          key: 'css'
	        });
	        return /*#__PURE__*/react_11(EmotionCacheContext.Provider, {
	          value: cache
	        }, func(props, cache));
	      } else {
	        return func(props, cache);
	      }
	    };
	  };
	}
	var ThemeContext = /* #__PURE__ */react_10({});
	var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
	var createEmotionProps = function createEmotionProps(type, props) {
	  var newProps = {};
	  for (var key in props) {
	    if (hasOwnProperty.call(props, key)) {
	      newProps[key] = props[key];
	    }
	  }
	  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
	  return newProps;
	};
	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	    serialized = _ref.serialized,
	    isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
	    return insertStyles(cache, serialized, isStringTag);
	  });
	  if (!isBrowser && rules !== undefined) {
	    var _ref2;
	    var serializedNames = serialized.name;
	    var next = serialized.next;
	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      next = next.next;
	    }
	    return /*#__PURE__*/react_11("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref2.nonce = cache.sheet.nonce, _ref2));
	  }
	  return null;
	};
	var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
	  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
	  // not passing the registered cache to serializeStyles because it would
	  // make certain babel optimisations not possible

	  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
	    cssProp = cache.registered[cssProp];
	  }
	  var WrappedComponent = props[typePropName];
	  var registeredStyles = [cssProp];
	  var className = '';
	  if (typeof props.className === 'string') {
	    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
	  } else if (props.className != null) {
	    className = props.className + " ";
	  }
	  var serialized = serializeStyles(registeredStyles, undefined, react_21(ThemeContext));
	  className += cache.key + "-" + serialized.name;
	  var newProps = {};
	  for (var key in props) {
	    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' )) {
	      newProps[key] = props[key];
	    }
	  }
	  newProps.ref = ref;
	  newProps.className = className;
	  return /*#__PURE__*/react_11(react_3, null, /*#__PURE__*/react_11(Insertion, {
	    cache: cache,
	    serialized: serialized,
	    isStringTag: typeof WrappedComponent === 'string'
	  }), /*#__PURE__*/react_11(WrappedComponent, newProps));
	});
	var Emotion$1 = Emotion;

	var _extends_1 = createCommonjsModule(function (module) {
	  function _extends() {
	    module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];
	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }
	      return target;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _extends.apply(this, arguments);
	  }
	  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(_extends_1);

	var jsx = function jsx(type, props) {
	  var args = arguments;
	  if (props == null || !hasOwnProperty.call(props, 'css')) {
	    // $FlowFixMe
	    return react_11.apply(undefined, args);
	  }
	  var argsLength = args.length;
	  var createElementArgArray = new Array(argsLength);
	  createElementArgArray[0] = Emotion$1;
	  createElementArgArray[1] = createEmotionProps(type, props);
	  for (var i = 2; i < argsLength; i++) {
	    createElementArgArray[i] = args[i];
	  } // $FlowFixMe

	  return react_11.apply(null, createElementArgArray);
	};
	function css$2() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return serializeStyles(args);
	}
	var keyframes = function keyframes() {
	  var insertable = css$2.apply(void 0, arguments);
	  var name = "animation-" + insertable.name; // $FlowFixMe

	  return {
	    name: name,
	    styles: "@keyframes " + name + "{" + insertable.styles + "}",
	    anim: 1,
	    toString: function toString() {
	      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
	    }
	  };
	};

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
	  }
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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

	function _taggedTemplateLiteral(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }
	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	}

	function rectToClientRect(rect) {
	  return {
	    ...rect,
	    top: rect.y,
	    left: rect.x,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  };
	}

	function getWindow(node) {
	  var _node$ownerDocument;
	  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
	}
	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}
	function isNode(value) {
	  return value instanceof getWindow(value).Node;
	}
	function getNodeName(node) {
	  if (isNode(node)) {
	    return (node.nodeName || '').toLowerCase();
	  }
	  // Mocked nodes in testing environments may not be instances of Node. By
	  // returning `#document` an infinite loop won't occur.
	  // https://github.com/floating-ui/floating-ui/issues/2317
	  return '#document';
	}
	function isHTMLElement(value) {
	  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
	}
	function isShadowRoot(node) {
	  // Browsers without `ShadowRoot` support.
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }
	  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
	}
	function isOverflowElement(element) {
	  const {
	    overflow,
	    overflowX,
	    overflowY,
	    display
	  } = getComputedStyle$1(element);
	  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
	}
	function isSafari() {
	  if (typeof CSS === 'undefined' || !CSS.supports) return false;
	  return CSS.supports('-webkit-backdrop-filter', 'none');
	}
	function isLastTraversableNode(node) {
	  return ['html', 'body', '#document'].includes(getNodeName(node));
	}
	const min = Math.min;
	const max = Math.max;
	const round = Math.round;
	const floor = Math.floor;
	const createCoords = v => ({
	  x: v,
	  y: v
	});
	function getCssDimensions(element) {
	  const css = getComputedStyle$1(element);
	  // In testing environments, the `width` and `height` properties are empty
	  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
	  let width = parseFloat(css.width) || 0;
	  let height = parseFloat(css.height) || 0;
	  const hasOffset = isHTMLElement(element);
	  const offsetWidth = hasOffset ? element.offsetWidth : width;
	  const offsetHeight = hasOffset ? element.offsetHeight : height;
	  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	  if (shouldFallback) {
	    width = offsetWidth;
	    height = offsetHeight;
	  }
	  return {
	    width,
	    height,
	    $: shouldFallback
	  };
	}
	function isElement(value) {
	  return value instanceof Element || value instanceof getWindow(value).Element;
	}
	function unwrapElement(element) {
	  return !isElement(element) ? element.contextElement : element;
	}
	function getScale(element) {
	  const domElement = unwrapElement(element);
	  if (!isHTMLElement(domElement)) {
	    return createCoords(1);
	  }
	  const rect = domElement.getBoundingClientRect();
	  const {
	    width,
	    height,
	    $
	  } = getCssDimensions(domElement);
	  let x = ($ ? round(rect.width) : rect.width) / width;
	  let y = ($ ? round(rect.height) : rect.height) / height;

	  // 0, NaN, or Infinity should always fallback to 1.

	  if (!x || !Number.isFinite(x)) {
	    x = 1;
	  }
	  if (!y || !Number.isFinite(y)) {
	    y = 1;
	  }
	  return {
	    x,
	    y
	  };
	}
	const noOffsets = /*#__PURE__*/createCoords(0);
	function getVisualOffsets(element) {
	  const win = getWindow(element);
	  if (!isSafari() || !win.visualViewport) {
	    return noOffsets;
	  }
	  return {
	    x: win.visualViewport.offsetLeft,
	    y: win.visualViewport.offsetTop
	  };
	}
	function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }
	  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
	    return false;
	  }
	  return isFixed;
	}
	function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }
	  if (isFixedStrategy === void 0) {
	    isFixedStrategy = false;
	  }
	  const clientRect = element.getBoundingClientRect();
	  const domElement = unwrapElement(element);
	  let scale = createCoords(1);
	  if (includeScale) {
	    if (offsetParent) {
	      if (isElement(offsetParent)) {
	        scale = getScale(offsetParent);
	      }
	    } else {
	      scale = getScale(element);
	    }
	  }
	  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	  let x = (clientRect.left + visualOffsets.x) / scale.x;
	  let y = (clientRect.top + visualOffsets.y) / scale.y;
	  let width = clientRect.width / scale.x;
	  let height = clientRect.height / scale.y;
	  if (domElement) {
	    const win = getWindow(domElement);
	    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
	    let currentIFrame = win.frameElement;
	    while (currentIFrame && offsetParent && offsetWin !== win) {
	      const iframeScale = getScale(currentIFrame);
	      const iframeRect = currentIFrame.getBoundingClientRect();
	      const css = getComputedStyle(currentIFrame);
	      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
	      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
	      x *= iframeScale.x;
	      y *= iframeScale.y;
	      width *= iframeScale.x;
	      height *= iframeScale.y;
	      x += left;
	      y += top;
	      currentIFrame = getWindow(currentIFrame).frameElement;
	    }
	  }
	  return rectToClientRect({
	    width,
	    height,
	    x,
	    y
	  });
	}
	function getDocumentElement(node) {
	  var _ref;
	  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
	}
	function getParentNode(node) {
	  if (getNodeName(node) === 'html') {
	    return node;
	  }
	  const result =
	  // Step into the shadow DOM of the parent of a slotted node.
	  node.assignedSlot ||
	  // DOM Element detected.
	  node.parentNode ||
	  // ShadowRoot detected.
	  isShadowRoot(node) && node.host ||
	  // Fallback.
	  getDocumentElement(node);
	  return isShadowRoot(result) ? result.host : result;
	}
	function getNearestOverflowAncestor(node) {
	  const parentNode = getParentNode(node);
	  if (isLastTraversableNode(parentNode)) {
	    return node.ownerDocument ? node.ownerDocument.body : node.body;
	  }
	  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
	    return parentNode;
	  }
	  return getNearestOverflowAncestor(parentNode);
	}
	function getOverflowAncestors(node, list) {
	  var _node$ownerDocument;
	  if (list === void 0) {
	    list = [];
	  }
	  const scrollableAncestor = getNearestOverflowAncestor(node);
	  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
	  const win = getWindow(scrollableAncestor);
	  if (isBody) {
	    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
	  }
	  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
	}

	// https://samthor.au/2021/observing-dom/
	function observeMove(element, onMove) {
	  let io = null;
	  let timeoutId;
	  const root = getDocumentElement(element);
	  function cleanup() {
	    clearTimeout(timeoutId);
	    io && io.disconnect();
	    io = null;
	  }
	  function refresh(skip, threshold) {
	    if (skip === void 0) {
	      skip = false;
	    }
	    if (threshold === void 0) {
	      threshold = 1;
	    }
	    cleanup();
	    const {
	      left,
	      top,
	      width,
	      height
	    } = element.getBoundingClientRect();
	    if (!skip) {
	      onMove();
	    }
	    if (!width || !height) {
	      return;
	    }
	    const insetTop = floor(top);
	    const insetRight = floor(root.clientWidth - (left + width));
	    const insetBottom = floor(root.clientHeight - (top + height));
	    const insetLeft = floor(left);
	    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
	    const options = {
	      rootMargin,
	      threshold: max(0, min(1, threshold)) || 1
	    };
	    let isFirstUpdate = true;
	    function handleObserve(entries) {
	      const ratio = entries[0].intersectionRatio;
	      if (ratio !== threshold) {
	        if (!isFirstUpdate) {
	          return refresh();
	        }
	        if (!ratio) {
	          timeoutId = setTimeout(() => {
	            refresh(false, 1e-7);
	          }, 100);
	        } else {
	          refresh(false, ratio);
	        }
	      }
	      isFirstUpdate = false;
	    }

	    // Older browsers don't support a `document` as the root and will throw an
	    // error.
	    try {
	      io = new IntersectionObserver(handleObserve, {
	        ...options,
	        // Handle <iframe>s
	        root: root.ownerDocument
	      });
	    } catch (e) {
	      io = new IntersectionObserver(handleObserve, options);
	    }
	    io.observe(element);
	  }
	  refresh(true);
	  return cleanup;
	}

	/**
	 * Automatically updates the position of the floating element when necessary.
	 * Should only be called when the floating element is mounted on the DOM or
	 * visible on the screen.
	 * @returns cleanup function that should be invoked when the floating element is
	 * removed from the DOM or hidden from the screen.
	 * @see https://floating-ui.com/docs/autoUpdate
	 */
	function autoUpdate(reference, floating, update, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  const {
	    ancestorScroll = true,
	    ancestorResize = true,
	    elementResize = typeof ResizeObserver === 'function',
	    layoutShift = typeof IntersectionObserver === 'function',
	    animationFrame = false
	  } = options;
	  const referenceEl = unwrapElement(reference);
	  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
	  ancestors.forEach(ancestor => {
	    ancestorScroll && ancestor.addEventListener('scroll', update, {
	      passive: true
	    });
	    ancestorResize && ancestor.addEventListener('resize', update);
	  });
	  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	  let reobserveFrame = -1;
	  let resizeObserver = null;
	  if (elementResize) {
	    resizeObserver = new ResizeObserver(_ref => {
	      let [firstEntry] = _ref;
	      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
	        // Prevent update loops when using the `size` middleware.
	        // https://github.com/floating-ui/floating-ui/issues/1740
	        resizeObserver.unobserve(floating);
	        cancelAnimationFrame(reobserveFrame);
	        reobserveFrame = requestAnimationFrame(() => {
	          resizeObserver && resizeObserver.observe(floating);
	        });
	      }
	      update();
	    });
	    if (referenceEl && !animationFrame) {
	      resizeObserver.observe(referenceEl);
	    }
	    resizeObserver.observe(floating);
	  }
	  let frameId;
	  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	  if (animationFrame) {
	    frameLoop();
	  }
	  function frameLoop() {
	    const nextRefRect = getBoundingClientRect(reference);
	    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
	      update();
	    }
	    prevRefRect = nextRefRect;
	    frameId = requestAnimationFrame(frameLoop);
	  }
	  update();
	  return () => {
	    ancestors.forEach(ancestor => {
	      ancestorScroll && ancestor.removeEventListener('scroll', update);
	      ancestorResize && ancestor.removeEventListener('resize', update);
	    });
	    cleanupIo && cleanupIo();
	    resizeObserver && resizeObserver.disconnect();
	    resizeObserver = null;
	    if (animationFrame) {
	      cancelAnimationFrame(frameId);
	    }
	  };
	}

	var index = typeof document !== 'undefined' ? react_28 : react_24;

	var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
	// ==============================
	// NO OP
	// ==============================

	var noop = function noop() {};

	// ==============================
	// Class Name Prefixer
	// ==============================

	/**
	 String representation of component state for styling with class names.

	 Expects an array of strings OR a string/object pair:
	 - className(['comp', 'comp-arg', 'comp-arg-2'])
	   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
	 - className('comp', { some: true, state: false })
	   @returns 'react-select__comp react-select__comp--some'
	*/
	function applyPrefixToName(prefix, name) {
	  if (!name) {
	    return prefix;
	  } else if (name[0] === '-') {
	    return prefix + name;
	  } else {
	    return prefix + '__' + name;
	  }
	}
	function classNames(prefix, state) {
	  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    classNameList[_key - 2] = arguments[_key];
	  }
	  var arr = [].concat(classNameList);
	  if (state && prefix) {
	    for (var key in state) {
	      if (state.hasOwnProperty(key) && state[key]) {
	        arr.push("".concat(applyPrefixToName(prefix, key)));
	      }
	    }
	  }
	  return arr.filter(function (i) {
	    return i;
	  }).map(function (i) {
	    return String(i).trim();
	  }).join(' ');
	}
	// ==============================
	// Clean Value
	// ==============================

	var cleanValue = function cleanValue(value) {
	  if (isArray(value)) return value.filter(Boolean);
	  if (_typeof(value) === 'object' && value !== null) return [value];
	  return [];
	};

	// ==============================
	// Clean Common Props
	// ==============================

	var cleanCommonProps = function cleanCommonProps(props) {
	  //className
	  props.className;
	  props.clearValue;
	  props.cx;
	  props.getStyles;
	  props.getClassNames;
	  props.getValue;
	  props.hasValue;
	  props.isMulti;
	  props.isRtl;
	  props.options;
	  props.selectOption;
	  props.selectProps;
	  props.setValue;
	  props.theme;
	  var innerProps = _objectWithoutProperties(props, _excluded$4);
	  return _objectSpread2({}, innerProps);
	};

	// ==============================
	// Get Style Props
	// ==============================

	var getStyleProps = function getStyleProps(props, name, classNamesState) {
	  var cx = props.cx,
	    getStyles = props.getStyles,
	    getClassNames = props.getClassNames,
	    className = props.className;
	  return {
	    css: getStyles(name, props),
	    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
	  };
	};

	// ==============================
	// Scroll Helpers
	// ==============================

	function isDocumentElement(el) {
	  return [document.documentElement, document.body, window].indexOf(el) > -1;
	}

	// Normalized Scroll Top
	// ------------------------------

	function normalizedHeight(el) {
	  if (isDocumentElement(el)) {
	    return window.innerHeight;
	  }
	  return el.clientHeight;
	}

	// Normalized scrollTo & scrollTop
	// ------------------------------

	function getScrollTop(el) {
	  if (isDocumentElement(el)) {
	    return window.pageYOffset;
	  }
	  return el.scrollTop;
	}
	function scrollTo(el, top) {
	  // with a scroll distance, we perform scroll on the element
	  if (isDocumentElement(el)) {
	    window.scrollTo(0, top);
	    return;
	  }
	  el.scrollTop = top;
	}

	// Get Scroll Parent
	// ------------------------------

	function getScrollParent(element) {
	  var style = getComputedStyle(element);
	  var excludeStaticParent = style.position === 'absolute';
	  var overflowRx = /(auto|scroll)/;
	  if (style.position === 'fixed') return document.documentElement;
	  for (var parent = element; parent = parent.parentElement;) {
	    style = getComputedStyle(parent);
	    if (excludeStaticParent && style.position === 'static') {
	      continue;
	    }
	    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
	      return parent;
	    }
	  }
	  return document.documentElement;
	}

	// Animated Scroll To
	// ------------------------------

	/**
	  @param t: time (elapsed)
	  @param b: initial value
	  @param c: amount of change
	  @param d: duration
	*/
	function easeOutCubic(t, b, c, d) {
	  return c * ((t = t / d - 1) * t * t + 1) + b;
	}
	function animatedScrollTo(element, to) {
	  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
	  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
	  var start = getScrollTop(element);
	  var change = to - start;
	  var increment = 10;
	  var currentTime = 0;
	  function animateScroll() {
	    currentTime += increment;
	    var val = easeOutCubic(currentTime, start, change, duration);
	    scrollTo(element, val);
	    if (currentTime < duration) {
	      window.requestAnimationFrame(animateScroll);
	    } else {
	      callback(element);
	    }
	  }
	  animateScroll();
	}

	// Scroll Into View
	// ------------------------------

	function scrollIntoView(menuEl, focusedEl) {
	  var menuRect = menuEl.getBoundingClientRect();
	  var focusedRect = focusedEl.getBoundingClientRect();
	  var overScroll = focusedEl.offsetHeight / 3;
	  if (focusedRect.bottom + overScroll > menuRect.bottom) {
	    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
	  } else if (focusedRect.top - overScroll < menuRect.top) {
	    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
	  }
	}

	// ==============================
	// Get bounding client object
	// ==============================

	// cannot get keys using array notation with DOMRect
	function getBoundingClientObj(element) {
	  var rect = element.getBoundingClientRect();
	  return {
	    bottom: rect.bottom,
	    height: rect.height,
	    left: rect.left,
	    right: rect.right,
	    top: rect.top,
	    width: rect.width
	  };
	}

	// ==============================
	// Touch Capability Detector
	// ==============================

	function isTouchCapable() {
	  try {
	    document.createEvent('TouchEvent');
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	// ==============================
	// Mobile Device Detector
	// ==============================

	function isMobileDevice() {
	  try {
	    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  } catch (e) {
	    return false;
	  }
	}

	// ==============================
	// Passive Event Detector
	// ==============================

	// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
	var passiveOptionAccessed = false;
	var options = {
	  get passive() {
	    return passiveOptionAccessed = true;
	  }
	};
	// check for SSR
	var w = typeof window !== 'undefined' ? window : {};
	if (w.addEventListener && w.removeEventListener) {
	  w.addEventListener('p', noop, options);
	  w.removeEventListener('p', noop, false);
	}
	var supportsPassiveEvents = passiveOptionAccessed;
	function notNullish(item) {
	  return item != null;
	}
	function isArray(arg) {
	  return Array.isArray(arg);
	}
	function valueTernary(isMulti, multiValue, singleValue) {
	  return isMulti ? multiValue : singleValue;
	}
	function singleValueAsValue(singleValue) {
	  return singleValue;
	}
	function multiValueAsValue(multiValue) {
	  return multiValue;
	}
	var removeProps = function removeProps(propsObj) {
	  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    properties[_key2 - 1] = arguments[_key2];
	  }
	  var propsMap = Object.entries(propsObj).filter(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 1),
	      key = _ref2[0];
	    return !properties.includes(key);
	  });
	  return propsMap.reduce(function (newProps, _ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	      key = _ref4[0],
	      val = _ref4[1];
	    newProps[key] = val;
	    return newProps;
	  }, {});
	};
	var _excluded$3 = ["children", "innerProps"],
	  _excluded2$1 = ["children", "innerProps"];
	function getMenuPlacement(_ref) {
	  var preferredMaxHeight = _ref.maxHeight,
	    menuEl = _ref.menuEl,
	    minHeight = _ref.minHeight,
	    preferredPlacement = _ref.placement,
	    shouldScroll = _ref.shouldScroll,
	    isFixedPosition = _ref.isFixedPosition,
	    controlHeight = _ref.controlHeight;
	  var scrollParent = getScrollParent(menuEl);
	  var defaultState = {
	    placement: 'bottom',
	    maxHeight: preferredMaxHeight
	  };

	  // something went wrong, return default state
	  if (!menuEl || !menuEl.offsetParent) return defaultState;

	  // we can't trust `scrollParent.scrollHeight` --> it may increase when
	  // the menu is rendered
	  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
	    scrollHeight = _scrollParent$getBoun.height;
	  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
	    menuBottom = _menuEl$getBoundingCl.bottom,
	    menuHeight = _menuEl$getBoundingCl.height,
	    menuTop = _menuEl$getBoundingCl.top;
	  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
	    containerTop = _menuEl$offsetParent$.top;
	  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
	  var scrollTop = getScrollTop(scrollParent);
	  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
	  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
	  var viewSpaceAbove = containerTop - marginTop;
	  var viewSpaceBelow = viewHeight - menuTop;
	  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
	  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
	  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
	  var scrollUp = scrollTop + menuTop - marginTop;
	  var scrollDuration = 160;
	  switch (preferredPlacement) {
	    case 'auto':
	    case 'bottom':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceBelow >= menuHeight) {
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 2: the menu will fit, if scrolled
	      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 3: the menu will fit, if constrained
	      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }

	        // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.
	        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
	        return {
	          placement: 'bottom',
	          maxHeight: constrainedHeight
	        };
	      }

	      // 4. Forked beviour when there isn't enough space below

	      // AUTO: flip the menu, render above
	      if (preferredPlacement === 'auto' || isFixedPosition) {
	        // may need to be constrained after flipping
	        var _constrainedHeight = preferredMaxHeight;
	        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
	        if (spaceAbove >= minHeight) {
	          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
	        }
	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight
	        };
	      }

	      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
	      if (preferredPlacement === 'bottom') {
	        if (shouldScroll) {
	          scrollTo(scrollParent, scrollDown);
	        }
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }
	      break;
	    case 'top':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceAbove >= menuHeight) {
	        return {
	          placement: 'top',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 2: the menu will fit, if scrolled
	      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }
	        return {
	          placement: 'top',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 3: the menu will fit, if constrained
	      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	        var _constrainedHeight2 = preferredMaxHeight;

	        // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.
	        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
	        }
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }
	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight2
	        };
	      }

	      // 4. not enough space, the browser WILL NOT increase scrollable area when
	      // absolutely positioned element rendered above the viewport (only below).
	      // Flip the menu, render below
	      return {
	        placement: 'bottom',
	        maxHeight: preferredMaxHeight
	      };
	    default:
	      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
	  }
	  return defaultState;
	}

	// Menu Component
	// ------------------------------

	function alignToControl(placement) {
	  var placementToCSSProp = {
	    bottom: 'top',
	    top: 'bottom'
	  };
	  return placement ? placementToCSSProp[placement] : 'bottom';
	}
	var coercePlacement = function coercePlacement(p) {
	  return p === 'auto' ? 'bottom' : p;
	};
	var menuCSS = function menuCSS(_ref2, unstyled) {
	  var _objectSpread2$1;
	  var placement = _ref2.placement,
	    _ref2$theme = _ref2.theme,
	    borderRadius = _ref2$theme.borderRadius,
	    spacing = _ref2$theme.spacing,
	    colors = _ref2$theme.colors;
	  return _objectSpread2((_objectSpread2$1 = {
	    label: 'menu'
	  }, _defineProperty(_objectSpread2$1, alignToControl(placement), '100%'), _defineProperty(_objectSpread2$1, "position", 'absolute'), _defineProperty(_objectSpread2$1, "width", '100%'), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
	    backgroundColor: colors.neutral0,
	    borderRadius: borderRadius,
	    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
	    marginBottom: spacing.menuGutter,
	    marginTop: spacing.menuGutter
	  });
	};
	var PortalPlacementContext = /*#__PURE__*/react_10(null);

	// NOTE: internal only
	var MenuPlacer = function MenuPlacer(props) {
	  var children = props.children,
	    minMenuHeight = props.minMenuHeight,
	    maxMenuHeight = props.maxMenuHeight,
	    menuPlacement = props.menuPlacement,
	    menuPosition = props.menuPosition,
	    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
	    theme = props.theme;
	  var _ref3 = react_21(PortalPlacementContext) || {},
	    setPortalPlacement = _ref3.setPortalPlacement;
	  var ref = react_31(null);
	  var _useState = react_32(maxMenuHeight),
	    _useState2 = _slicedToArray(_useState, 2),
	    maxHeight = _useState2[0],
	    setMaxHeight = _useState2[1];
	  var _useState3 = react_32(null),
	    _useState4 = _slicedToArray(_useState3, 2),
	    placement = _useState4[0],
	    setPlacement = _useState4[1];
	  var controlHeight = theme.spacing.controlHeight;
	  index(function () {
	    var menuEl = ref.current;
	    if (!menuEl) return;

	    // DO NOT scroll if position is fixed
	    var isFixedPosition = menuPosition === 'fixed';
	    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
	    var state = getMenuPlacement({
	      maxHeight: maxMenuHeight,
	      menuEl: menuEl,
	      minHeight: minMenuHeight,
	      placement: menuPlacement,
	      shouldScroll: shouldScroll,
	      isFixedPosition: isFixedPosition,
	      controlHeight: controlHeight
	    });
	    setMaxHeight(state.maxHeight);
	    setPlacement(state.placement);
	    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
	  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
	  return children({
	    ref: ref,
	    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
	      placement: placement || coercePlacement(menuPlacement),
	      maxHeight: maxHeight
	    })
	  });
	};
	var Menu = function Menu(props) {
	  var children = props.children,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'menu', {
	    menu: true
	  }), {
	    ref: innerRef
	  }, innerProps), children);
	};
	var Menu$1 = Menu;

	// ==============================
	// Menu List
	// ==============================

	var menuListCSS = function menuListCSS(_ref4, unstyled) {
	  var maxHeight = _ref4.maxHeight,
	    baseUnit = _ref4.theme.spacing.baseUnit;
	  return _objectSpread2({
	    maxHeight: maxHeight,
	    overflowY: 'auto',
	    position: 'relative',
	    // required for offset[Height, Top] > keyboard scroll
	    WebkitOverflowScrolling: 'touch'
	  }, unstyled ? {} : {
	    paddingBottom: baseUnit,
	    paddingTop: baseUnit
	  });
	};
	var MenuList = function MenuList(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    innerRef = props.innerRef,
	    isMulti = props.isMulti;
	  return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
	    'menu-list': true,
	    'menu-list--is-multi': isMulti
	  }), {
	    ref: innerRef
	  }, innerProps), children);
	};

	// ==============================
	// Menu Notices
	// ==============================

	var noticeCSS = function noticeCSS(_ref5, unstyled) {
	  var _ref5$theme = _ref5.theme,
	    baseUnit = _ref5$theme.spacing.baseUnit,
	    colors = _ref5$theme.colors;
	  return _objectSpread2({
	    textAlign: 'center'
	  }, unstyled ? {} : {
	    color: colors.neutral40,
	    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
	  });
	};
	var noOptionsMessageCSS = noticeCSS;
	var loadingMessageCSS = noticeCSS;
	var NoOptionsMessage = function NoOptionsMessage(_ref6) {
	  var _ref6$children = _ref6.children,
	    children = _ref6$children === void 0 ? 'No options' : _ref6$children,
	    innerProps = _ref6.innerProps,
	    restProps = _objectWithoutProperties(_ref6, _excluded$3);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
	    children: children,
	    innerProps: innerProps
	  }), 'noOptionsMessage', {
	    'menu-notice': true,
	    'menu-notice--no-options': true
	  }), innerProps), children);
	};
	var LoadingMessage = function LoadingMessage(_ref7) {
	  var _ref7$children = _ref7.children,
	    children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
	    innerProps = _ref7.innerProps,
	    restProps = _objectWithoutProperties(_ref7, _excluded2$1);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
	    children: children,
	    innerProps: innerProps
	  }), 'loadingMessage', {
	    'menu-notice': true,
	    'menu-notice--loading': true
	  }), innerProps), children);
	};

	// ==============================
	// Menu Portal
	// ==============================

	var menuPortalCSS = function menuPortalCSS(_ref8) {
	  var rect = _ref8.rect,
	    offset = _ref8.offset,
	    position = _ref8.position;
	  return {
	    left: rect.left,
	    position: position,
	    top: offset,
	    width: rect.width,
	    zIndex: 1
	  };
	};
	var MenuPortal = function MenuPortal(props) {
	  var appendTo = props.appendTo,
	    children = props.children,
	    controlElement = props.controlElement,
	    innerProps = props.innerProps,
	    menuPlacement = props.menuPlacement,
	    menuPosition = props.menuPosition;
	  var menuPortalRef = react_31(null);
	  var cleanupRef = react_31(null);
	  var _useState5 = react_32(coercePlacement(menuPlacement)),
	    _useState6 = _slicedToArray(_useState5, 2),
	    placement = _useState6[0],
	    setPortalPlacement = _useState6[1];
	  var portalPlacementContext = react_29(function () {
	    return {
	      setPortalPlacement: setPortalPlacement
	    };
	  }, []);
	  var _useState7 = react_32(null),
	    _useState8 = _slicedToArray(_useState7, 2),
	    computedPosition = _useState8[0],
	    setComputedPosition = _useState8[1];
	  var updateComputedPosition = react_20(function () {
	    if (!controlElement) return;
	    var rect = getBoundingClientObj(controlElement);
	    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
	    var offset = rect[placement] + scrollDistance;
	    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
	      setComputedPosition({
	        offset: offset,
	        rect: rect
	      });
	    }
	  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
	  index(function () {
	    updateComputedPosition();
	  }, [updateComputedPosition]);
	  var runAutoUpdate = react_20(function () {
	    if (typeof cleanupRef.current === 'function') {
	      cleanupRef.current();
	      cleanupRef.current = null;
	    }
	    if (controlElement && menuPortalRef.current) {
	      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
	        elementResize: 'ResizeObserver' in window
	      });
	    }
	  }, [controlElement, updateComputedPosition]);
	  index(function () {
	    runAutoUpdate();
	  }, [runAutoUpdate]);
	  var setMenuPortalElement = react_20(function (menuPortalElement) {
	    menuPortalRef.current = menuPortalElement;
	    runAutoUpdate();
	  }, [runAutoUpdate]);

	  // bail early if required elements aren't present
	  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

	  // same wrapper element whether fixed or portalled
	  var menuWrapper = jsx("div", _extends({
	    ref: setMenuPortalElement
	  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
	    offset: computedPosition.offset,
	    position: menuPosition,
	    rect: computedPosition.rect
	  }), 'menuPortal', {
	    'menu-portal': true
	  }), innerProps), children);
	  return jsx(PortalPlacementContext.Provider, {
	    value: portalPlacementContext
	  }, appendTo ? /*#__PURE__*/reactDom_2(menuWrapper, appendTo) : menuWrapper);
	};

	// ==============================
	// Root Container
	// ==============================

	var containerCSS = function containerCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	    isRtl = _ref.isRtl;
	  return {
	    label: 'container',
	    direction: isRtl ? 'rtl' : undefined,
	    pointerEvents: isDisabled ? 'none' : undefined,
	    // cancel mouse events when disabled
	    position: 'relative'
	  };
	};
	var SelectContainer = function SelectContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    isDisabled = props.isDisabled,
	    isRtl = props.isRtl;
	  return jsx("div", _extends({}, getStyleProps(props, 'container', {
	    '--is-disabled': isDisabled,
	    '--is-rtl': isRtl
	  }), innerProps), children);
	};

	// ==============================
	// Value Container
	// ==============================

	var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
	  var spacing = _ref2.theme.spacing,
	    isMulti = _ref2.isMulti,
	    hasValue = _ref2.hasValue,
	    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
	  return _objectSpread2({
	    alignItems: 'center',
	    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
	    flex: 1,
	    flexWrap: 'wrap',
	    WebkitOverflowScrolling: 'touch',
	    position: 'relative',
	    overflow: 'hidden'
	  }, unstyled ? {} : {
	    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
	  });
	};
	var ValueContainer = function ValueContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    isMulti = props.isMulti,
	    hasValue = props.hasValue;
	  return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
	    'value-container': true,
	    'value-container--is-multi': isMulti,
	    'value-container--has-value': hasValue
	  }), innerProps), children);
	};

	// ==============================
	// Indicator Container
	// ==============================

	var indicatorsContainerCSS = function indicatorsContainerCSS() {
	  return {
	    alignItems: 'center',
	    alignSelf: 'stretch',
	    display: 'flex',
	    flexShrink: 0
	  };
	};
	var IndicatorsContainer = function IndicatorsContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
	    indicators: true
	  }), innerProps), children);
	};
	var _templateObject;
	var _excluded$2$1 = ["size"],
	  _excluded2 = ["innerProps", "isRtl", "size"];

	// ==============================
	// Dropdown & Clear Icons
	// ==============================
	var _ref2$2 = {
	  name: "8mmkcg",
	  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
	} ;
	var Svg = function Svg(_ref) {
	  var size = _ref.size,
	    props = _objectWithoutProperties(_ref, _excluded$2$1);
	  return jsx("svg", _extends({
	    height: size,
	    width: size,
	    viewBox: "0 0 20 20",
	    "aria-hidden": "true",
	    focusable: "false",
	    css: _ref2$2
	  }, props));
	};
	var CrossIcon = function CrossIcon(props) {
	  return jsx(Svg, _extends({
	    size: 20
	  }, props), jsx("path", {
	    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
	  }));
	};
	var DownChevron = function DownChevron(props) {
	  return jsx(Svg, _extends({
	    size: 20
	  }, props), jsx("path", {
	    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
	  }));
	};

	// ==============================
	// Dropdown & Clear Buttons
	// ==============================

	var baseCSS = function baseCSS(_ref3, unstyled) {
	  var isFocused = _ref3.isFocused,
	    _ref3$theme = _ref3.theme,
	    baseUnit = _ref3$theme.spacing.baseUnit,
	    colors = _ref3$theme.colors;
	  return _objectSpread2({
	    label: 'indicatorContainer',
	    display: 'flex',
	    transition: 'color 150ms'
	  }, unstyled ? {} : {
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    padding: baseUnit * 2,
	    ':hover': {
	      color: isFocused ? colors.neutral80 : colors.neutral40
	    }
	  });
	};
	var dropdownIndicatorCSS = baseCSS;
	var DropdownIndicator = function DropdownIndicator(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
	    indicator: true,
	    'dropdown-indicator': true
	  }), innerProps), children || jsx(DownChevron, null));
	};
	var clearIndicatorCSS = baseCSS;
	var ClearIndicator = function ClearIndicator(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
	    indicator: true,
	    'clear-indicator': true
	  }), innerProps), children || jsx(CrossIcon, null));
	};

	// ==============================
	// Separator
	// ==============================

	var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
	  var isDisabled = _ref4.isDisabled,
	    _ref4$theme = _ref4.theme,
	    baseUnit = _ref4$theme.spacing.baseUnit,
	    colors = _ref4$theme.colors;
	  return _objectSpread2({
	    label: 'indicatorSeparator',
	    alignSelf: 'stretch',
	    width: 1
	  }, unstyled ? {} : {
	    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
	    marginBottom: baseUnit * 2,
	    marginTop: baseUnit * 2
	  });
	};
	var IndicatorSeparator = function IndicatorSeparator(props) {
	  var innerProps = props.innerProps;
	  return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
	    'indicator-separator': true
	  })));
	};

	// ==============================
	// Loading
	// ==============================

	var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
	var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
	  var isFocused = _ref5.isFocused,
	    size = _ref5.size,
	    _ref5$theme = _ref5.theme,
	    colors = _ref5$theme.colors,
	    baseUnit = _ref5$theme.spacing.baseUnit;
	  return _objectSpread2({
	    label: 'loadingIndicator',
	    display: 'flex',
	    transition: 'color 150ms',
	    alignSelf: 'center',
	    fontSize: size,
	    lineHeight: 1,
	    marginRight: size,
	    textAlign: 'center',
	    verticalAlign: 'middle'
	  }, unstyled ? {} : {
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    padding: baseUnit * 2
	  });
	};
	var LoadingDot = function LoadingDot(_ref6) {
	  var delay = _ref6.delay,
	    offset = _ref6.offset;
	  return jsx("span", {
	    css: /*#__PURE__*/css$2({
	      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
	      backgroundColor: 'currentColor',
	      borderRadius: '1em',
	      display: 'inline-block',
	      marginLeft: offset ? '1em' : undefined,
	      height: '1em',
	      verticalAlign: 'top',
	      width: '1em'
	    }, "" , "" )
	  });
	};
	var LoadingIndicator = function LoadingIndicator(_ref7) {
	  var innerProps = _ref7.innerProps,
	    isRtl = _ref7.isRtl,
	    _ref7$size = _ref7.size,
	    size = _ref7$size === void 0 ? 4 : _ref7$size,
	    restProps = _objectWithoutProperties(_ref7, _excluded2);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
	    innerProps: innerProps,
	    isRtl: isRtl,
	    size: size
	  }), 'loadingIndicator', {
	    indicator: true,
	    'loading-indicator': true
	  }), innerProps), jsx(LoadingDot, {
	    delay: 0,
	    offset: isRtl
	  }), jsx(LoadingDot, {
	    delay: 160,
	    offset: true
	  }), jsx(LoadingDot, {
	    delay: 320,
	    offset: !isRtl
	  }));
	};
	var css$1 = function css(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    isFocused = _ref.isFocused,
	    _ref$theme = _ref.theme,
	    colors = _ref$theme.colors,
	    borderRadius = _ref$theme.borderRadius,
	    spacing = _ref$theme.spacing;
	  return _objectSpread2({
	    label: 'control',
	    alignItems: 'center',
	    cursor: 'default',
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-between',
	    minHeight: spacing.controlHeight,
	    outline: '0 !important',
	    position: 'relative',
	    transition: 'all 100ms'
	  }, unstyled ? {} : {
	    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
	    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
	    borderRadius: borderRadius,
	    borderStyle: 'solid',
	    borderWidth: 1,
	    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
	    '&:hover': {
	      borderColor: isFocused ? colors.primary : colors.neutral30
	    }
	  });
	};
	var Control = function Control(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    isFocused = props.isFocused,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps,
	    menuIsOpen = props.menuIsOpen;
	  return jsx("div", _extends({
	    ref: innerRef
	  }, getStyleProps(props, 'control', {
	    control: true,
	    'control--is-disabled': isDisabled,
	    'control--is-focused': isFocused,
	    'control--menu-is-open': menuIsOpen
	  }), innerProps), children);
	};
	var Control$1 = Control;
	var _excluded$1$1 = ["data"];
	var groupCSS = function groupCSS(_ref, unstyled) {
	  var spacing = _ref.theme.spacing;
	  return unstyled ? {} : {
	    paddingBottom: spacing.baseUnit * 2,
	    paddingTop: spacing.baseUnit * 2
	  };
	};
	var Group = function Group(props) {
	  var children = props.children,
	    cx = props.cx,
	    getStyles = props.getStyles,
	    getClassNames = props.getClassNames,
	    Heading = props.Heading,
	    headingProps = props.headingProps,
	    innerProps = props.innerProps,
	    label = props.label,
	    theme = props.theme,
	    selectProps = props.selectProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'group', {
	    group: true
	  }), innerProps), jsx(Heading, _extends({}, headingProps, {
	    selectProps: selectProps,
	    theme: theme,
	    getStyles: getStyles,
	    getClassNames: getClassNames,
	    cx: cx
	  }), label), jsx("div", null, children));
	};
	var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
	  var _ref2$theme = _ref2.theme,
	    colors = _ref2$theme.colors,
	    spacing = _ref2$theme.spacing;
	  return _objectSpread2({
	    label: 'group',
	    cursor: 'default',
	    display: 'block'
	  }, unstyled ? {} : {
	    color: colors.neutral40,
	    fontSize: '75%',
	    fontWeight: 500,
	    marginBottom: '0.25em',
	    paddingLeft: spacing.baseUnit * 3,
	    paddingRight: spacing.baseUnit * 3,
	    textTransform: 'uppercase'
	  });
	};
	var GroupHeading = function GroupHeading(props) {
	  var _cleanCommonProps = cleanCommonProps(props);
	  _cleanCommonProps.data;
	  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1$1);
	  return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
	    'group-heading': true
	  }), innerProps));
	};
	var Group$1 = Group;
	var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
	var inputCSS = function inputCSS(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    value = _ref.value,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2(_objectSpread2({
	    visibility: isDisabled ? 'hidden' : 'visible',
	    // force css to recompute when value change due to @emotion bug.
	    // We can remove it whenever the bug is fixed.
	    transform: value ? 'translateZ(0)' : ''
	  }, containerStyle), unstyled ? {} : {
	    margin: spacing.baseUnit / 2,
	    paddingBottom: spacing.baseUnit / 2,
	    paddingTop: spacing.baseUnit / 2,
	    color: colors.neutral80
	  });
	};
	var spacingStyle = {
	  gridArea: '1 / 2',
	  font: 'inherit',
	  minWidth: '2px',
	  border: 0,
	  margin: 0,
	  outline: 0,
	  padding: 0
	};
	var containerStyle = {
	  flex: '1 1 auto',
	  display: 'inline-grid',
	  gridArea: '1 / 1 / 2 / 3',
	  gridTemplateColumns: '0 min-content',
	  '&:after': _objectSpread2({
	    content: 'attr(data-value) " "',
	    visibility: 'hidden',
	    whiteSpace: 'pre'
	  }, spacingStyle)
	};
	var inputStyle = function inputStyle(isHidden) {
	  return _objectSpread2({
	    label: 'input',
	    color: 'inherit',
	    background: 0,
	    opacity: isHidden ? 0 : 1,
	    width: '100%'
	  }, spacingStyle);
	};
	var Input$1 = function Input(props) {
	  var cx = props.cx,
	    value = props.value;
	  var _cleanCommonProps = cleanCommonProps(props),
	    innerRef = _cleanCommonProps.innerRef,
	    isDisabled = _cleanCommonProps.isDisabled,
	    isHidden = _cleanCommonProps.isHidden,
	    inputClassName = _cleanCommonProps.inputClassName,
	    innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
	  return jsx("div", _extends({}, getStyleProps(props, 'input', {
	    'input-container': true
	  }), {
	    "data-value": value || ''
	  }), jsx("input", _extends({
	    className: cx({
	      input: true
	    }, inputClassName),
	    ref: innerRef,
	    style: inputStyle(isHidden),
	    disabled: isDisabled
	  }, innerProps)));
	};
	var Input$1$1 = Input$1;
	var multiValueCSS = function multiValueCSS(_ref, unstyled) {
	  var _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    borderRadius = _ref$theme.borderRadius,
	    colors = _ref$theme.colors;
	  return _objectSpread2({
	    label: 'multiValue',
	    display: 'flex',
	    minWidth: 0
	  }, unstyled ? {} : {
	    backgroundColor: colors.neutral10,
	    borderRadius: borderRadius / 2,
	    margin: spacing.baseUnit / 2
	  });
	};
	var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
	  var _ref2$theme = _ref2.theme,
	    borderRadius = _ref2$theme.borderRadius,
	    colors = _ref2$theme.colors,
	    cropWithEllipsis = _ref2.cropWithEllipsis;
	  return _objectSpread2({
	    overflow: 'hidden',
	    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
	    whiteSpace: 'nowrap'
	  }, unstyled ? {} : {
	    borderRadius: borderRadius / 2,
	    color: colors.neutral80,
	    fontSize: '85%',
	    padding: 3,
	    paddingLeft: 6
	  });
	};
	var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
	  var _ref3$theme = _ref3.theme,
	    spacing = _ref3$theme.spacing,
	    borderRadius = _ref3$theme.borderRadius,
	    colors = _ref3$theme.colors,
	    isFocused = _ref3.isFocused;
	  return _objectSpread2({
	    alignItems: 'center',
	    display: 'flex'
	  }, unstyled ? {} : {
	    borderRadius: borderRadius / 2,
	    backgroundColor: isFocused ? colors.dangerLight : undefined,
	    paddingLeft: spacing.baseUnit,
	    paddingRight: spacing.baseUnit,
	    ':hover': {
	      backgroundColor: colors.dangerLight,
	      color: colors.danger
	    }
	  });
	};
	var MultiValueGeneric = function MultiValueGeneric(_ref4) {
	  var children = _ref4.children,
	    innerProps = _ref4.innerProps;
	  return jsx("div", innerProps, children);
	};
	var MultiValueContainer = MultiValueGeneric;
	var MultiValueLabel = MultiValueGeneric;
	function MultiValueRemove(_ref5) {
	  var children = _ref5.children,
	    innerProps = _ref5.innerProps;
	  return jsx("div", _extends({
	    role: "button"
	  }, innerProps), children || jsx(CrossIcon, {
	    size: 14
	  }));
	}
	var MultiValue = function MultiValue(props) {
	  var children = props.children,
	    components = props.components,
	    data = props.data,
	    innerProps = props.innerProps,
	    isDisabled = props.isDisabled,
	    removeProps = props.removeProps,
	    selectProps = props.selectProps;
	  var Container = components.Container,
	    Label = components.Label,
	    Remove = components.Remove;
	  return jsx(Container, {
	    data: data,
	    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
	      'multi-value': true,
	      'multi-value--is-disabled': isDisabled
	    })), innerProps),
	    selectProps: selectProps
	  }, jsx(Label, {
	    data: data,
	    innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
	      'multi-value__label': true
	    })),
	    selectProps: selectProps
	  }, children), jsx(Remove, {
	    data: data,
	    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
	      'multi-value__remove': true
	    })), {}, {
	      'aria-label': "Remove ".concat(children || 'option')
	    }, removeProps),
	    selectProps: selectProps
	  }));
	};
	var MultiValue$1 = MultiValue;
	var optionCSS = function optionCSS(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    isFocused = _ref.isFocused,
	    isSelected = _ref.isSelected,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2({
	    label: 'option',
	    cursor: 'default',
	    display: 'block',
	    fontSize: 'inherit',
	    width: '100%',
	    userSelect: 'none',
	    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
	  }, unstyled ? {} : {
	    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
	    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
	    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
	    // provide some affordance on touch devices
	    ':active': {
	      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
	    }
	  });
	};
	var Option = function Option(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    isFocused = props.isFocused,
	    isSelected = props.isSelected,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'option', {
	    option: true,
	    'option--is-disabled': isDisabled,
	    'option--is-focused': isFocused,
	    'option--is-selected': isSelected
	  }), {
	    ref: innerRef,
	    "aria-disabled": isDisabled
	  }, innerProps), children);
	};
	var Option$1 = Option;
	var placeholderCSS = function placeholderCSS(_ref, unstyled) {
	  var _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2({
	    label: 'placeholder',
	    gridArea: '1 / 1 / 2 / 3'
	  }, unstyled ? {} : {
	    color: colors.neutral50,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2
	  });
	};
	var Placeholder = function Placeholder(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
	    placeholder: true
	  }), innerProps), children);
	};
	var Placeholder$1 = Placeholder;
	var css = function css(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2({
	    label: 'singleValue',
	    gridArea: '1 / 1 / 2 / 3',
	    maxWidth: '100%',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap'
	  }, unstyled ? {} : {
	    color: isDisabled ? colors.neutral40 : colors.neutral80,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2
	  });
	};
	var SingleValue = function SingleValue(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
	    'single-value': true,
	    'single-value--is-disabled': isDisabled
	  }), innerProps), children);
	};
	var SingleValue$1 = SingleValue;
	var components = {
	  ClearIndicator: ClearIndicator,
	  Control: Control$1,
	  DropdownIndicator: DropdownIndicator,
	  DownChevron: DownChevron,
	  CrossIcon: CrossIcon,
	  Group: Group$1,
	  GroupHeading: GroupHeading,
	  IndicatorsContainer: IndicatorsContainer,
	  IndicatorSeparator: IndicatorSeparator,
	  Input: Input$1$1,
	  LoadingIndicator: LoadingIndicator,
	  Menu: Menu$1,
	  MenuList: MenuList,
	  MenuPortal: MenuPortal,
	  LoadingMessage: LoadingMessage,
	  NoOptionsMessage: NoOptionsMessage,
	  MultiValue: MultiValue$1,
	  MultiValueContainer: MultiValueContainer,
	  MultiValueLabel: MultiValueLabel,
	  MultiValueRemove: MultiValueRemove,
	  Option: Option$1,
	  Placeholder: Placeholder$1,
	  SelectContainer: SelectContainer,
	  SingleValue: SingleValue$1,
	  ValueContainer: ValueContainer
	};
	var defaultComponents = function defaultComponents(props) {
	  return _objectSpread2(_objectSpread2({}, components), props.components);
	};

	var safeIsNaN = Number.isNaN || function ponyfill(value) {
	  return typeof value === 'number' && value !== value;
	};
	function isEqual(first, second) {
	  if (first === second) {
	    return true;
	  }
	  if (safeIsNaN(first) && safeIsNaN(second)) {
	    return true;
	  }
	  return false;
	}
	function areInputsEqual(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }
	  for (var i = 0; i < newInputs.length; i++) {
	    if (!isEqual(newInputs[i], lastInputs[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	function memoizeOne(resultFn, isEqual) {
	  if (isEqual === void 0) {
	    isEqual = areInputsEqual;
	  }
	  var cache = null;
	  function memoized() {
	    var newArgs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	      newArgs[_i] = arguments[_i];
	    }
	    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
	      return cache.lastResult;
	    }
	    var lastResult = resultFn.apply(this, newArgs);
	    cache = {
	      lastResult: lastResult,
	      lastArgs: newArgs,
	      lastThis: this
	    };
	    return lastResult;
	  }
	  memoized.clear = function clear() {
	    cache = null;
	  };
	  return memoized;
	}

	// Assistive text to describe visual elements. Hidden for sighted users.
	var _ref = {
	  name: "7pg0cj-a11yText",
	  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
	} ;
	var A11yText = function A11yText(props) {
	  return jsx("span", _extends({
	    css: _ref
	  }, props));
	};
	var A11yText$1 = A11yText;
	var defaultAriaLiveMessages = {
	  guidance: function guidance(props) {
	    var isSearchable = props.isSearchable,
	      isMulti = props.isMulti,
	      isDisabled = props.isDisabled,
	      tabSelectsValue = props.tabSelectsValue,
	      context = props.context;
	    switch (context) {
	      case 'menu':
	        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
	      case 'input':
	        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
	      case 'value':
	        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
	      default:
	        return '';
	    }
	  },
	  onChange: function onChange(props) {
	    var action = props.action,
	      _props$label = props.label,
	      label = _props$label === void 0 ? '' : _props$label,
	      labels = props.labels,
	      isDisabled = props.isDisabled;
	    switch (action) {
	      case 'deselect-option':
	      case 'pop-value':
	      case 'remove-value':
	        return "option ".concat(label, ", deselected.");
	      case 'clear':
	        return 'All selected options have been cleared.';
	      case 'initial-input-focus':
	        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
	      case 'select-option':
	        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
	      default:
	        return '';
	    }
	  },
	  onFocus: function onFocus(props) {
	    var context = props.context,
	      focused = props.focused,
	      options = props.options,
	      _props$label2 = props.label,
	      label = _props$label2 === void 0 ? '' : _props$label2,
	      selectValue = props.selectValue,
	      isDisabled = props.isDisabled,
	      isSelected = props.isSelected;
	    var getArrayIndex = function getArrayIndex(arr, item) {
	      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
	    };
	    if (context === 'value' && selectValue) {
	      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
	    }
	    if (context === 'menu') {
	      var disabled = isDisabled ? ' disabled' : '';
	      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
	      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
	    }
	    return '';
	  },
	  onFilter: function onFilter(props) {
	    var inputValue = props.inputValue,
	      resultsMessage = props.resultsMessage;
	    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
	  }
	};
	var LiveRegion = function LiveRegion(props) {
	  var ariaSelection = props.ariaSelection,
	    focusedOption = props.focusedOption,
	    focusedValue = props.focusedValue,
	    focusableOptions = props.focusableOptions,
	    isFocused = props.isFocused,
	    selectValue = props.selectValue,
	    selectProps = props.selectProps,
	    id = props.id;
	  var ariaLiveMessages = selectProps.ariaLiveMessages,
	    getOptionLabel = selectProps.getOptionLabel,
	    inputValue = selectProps.inputValue,
	    isMulti = selectProps.isMulti,
	    isOptionDisabled = selectProps.isOptionDisabled,
	    isSearchable = selectProps.isSearchable,
	    menuIsOpen = selectProps.menuIsOpen,
	    options = selectProps.options,
	    screenReaderStatus = selectProps.screenReaderStatus,
	    tabSelectsValue = selectProps.tabSelectsValue;
	  var ariaLabel = selectProps['aria-label'];
	  var ariaLive = selectProps['aria-live'];

	  // Update aria live message configuration when prop changes
	  var messages = react_29(function () {
	    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
	  }, [ariaLiveMessages]);

	  // Update aria live selected option when prop changes
	  var ariaSelected = react_29(function () {
	    var message = '';
	    if (ariaSelection && messages.onChange) {
	      var option = ariaSelection.option,
	        selectedOptions = ariaSelection.options,
	        removedValue = ariaSelection.removedValue,
	        removedValues = ariaSelection.removedValues,
	        value = ariaSelection.value;
	      // select-option when !isMulti does not return option so we assume selected option is value
	      var asOption = function asOption(val) {
	        return !Array.isArray(val) ? val : null;
	      };

	      // If there is just one item from the action then get its label
	      var selected = removedValue || option || asOption(value);
	      var label = selected ? getOptionLabel(selected) : '';

	      // If there are multiple items from the action then return an array of labels
	      var multiSelected = selectedOptions || removedValues || undefined;
	      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
	      var onChangeProps = _objectSpread2({
	        // multiSelected items are usually items that have already been selected
	        // or set by the user as a default value so we assume they are not disabled
	        isDisabled: selected && isOptionDisabled(selected, selectValue),
	        label: label,
	        labels: labels
	      }, ariaSelection);
	      message = messages.onChange(onChangeProps);
	    }
	    return message;
	  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
	  var ariaFocused = react_29(function () {
	    var focusMsg = '';
	    var focused = focusedOption || focusedValue;
	    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
	    if (focused && messages.onFocus) {
	      var onFocusProps = {
	        focused: focused,
	        label: getOptionLabel(focused),
	        isDisabled: isOptionDisabled(focused, selectValue),
	        isSelected: isSelected,
	        options: focusableOptions,
	        context: focused === focusedOption ? 'menu' : 'value',
	        selectValue: selectValue
	      };
	      focusMsg = messages.onFocus(onFocusProps);
	    }
	    return focusMsg;
	  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
	  var ariaResults = react_29(function () {
	    var resultsMsg = '';
	    if (menuIsOpen && options.length && messages.onFilter) {
	      var resultsMessage = screenReaderStatus({
	        count: focusableOptions.length
	      });
	      resultsMsg = messages.onFilter({
	        inputValue: inputValue,
	        resultsMessage: resultsMessage
	      });
	    }
	    return resultsMsg;
	  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
	  var ariaGuidance = react_29(function () {
	    var guidanceMsg = '';
	    if (messages.guidance) {
	      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
	      guidanceMsg = messages.guidance({
	        'aria-label': ariaLabel,
	        context: context,
	        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
	        isMulti: isMulti,
	        isSearchable: isSearchable,
	        tabSelectsValue: tabSelectsValue
	      });
	    }
	    return guidanceMsg;
	  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
	  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
	  var ScreenReaderText = jsx(react_3, null, jsx("span", {
	    id: "aria-selection"
	  }, ariaSelected), jsx("span", {
	    id: "aria-context"
	  }, ariaContext));
	  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
	  return jsx(react_3, null, jsx(A11yText$1, {
	    id: id
	  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
	    "aria-live": ariaLive,
	    "aria-atomic": "false",
	    "aria-relevant": "additions text"
	  }, isFocused && !isInitialFocus && ScreenReaderText));
	};
	var LiveRegion$1 = LiveRegion;
	var diacritics = [{
	  base: 'A',
	  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
	}, {
	  base: 'AA',
	  letters: "\uA732"
	}, {
	  base: 'AE',
	  letters: "\xC6\u01FC\u01E2"
	}, {
	  base: 'AO',
	  letters: "\uA734"
	}, {
	  base: 'AU',
	  letters: "\uA736"
	}, {
	  base: 'AV',
	  letters: "\uA738\uA73A"
	}, {
	  base: 'AY',
	  letters: "\uA73C"
	}, {
	  base: 'B',
	  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
	}, {
	  base: 'C',
	  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
	}, {
	  base: 'D',
	  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
	}, {
	  base: 'DZ',
	  letters: "\u01F1\u01C4"
	}, {
	  base: 'Dz',
	  letters: "\u01F2\u01C5"
	}, {
	  base: 'E',
	  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
	}, {
	  base: 'F',
	  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
	}, {
	  base: 'G',
	  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
	}, {
	  base: 'H',
	  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
	}, {
	  base: 'I',
	  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
	}, {
	  base: 'J',
	  letters: "J\u24BF\uFF2A\u0134\u0248"
	}, {
	  base: 'K',
	  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
	}, {
	  base: 'L',
	  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
	}, {
	  base: 'LJ',
	  letters: "\u01C7"
	}, {
	  base: 'Lj',
	  letters: "\u01C8"
	}, {
	  base: 'M',
	  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
	}, {
	  base: 'N',
	  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
	}, {
	  base: 'NJ',
	  letters: "\u01CA"
	}, {
	  base: 'Nj',
	  letters: "\u01CB"
	}, {
	  base: 'O',
	  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
	}, {
	  base: 'OI',
	  letters: "\u01A2"
	}, {
	  base: 'OO',
	  letters: "\uA74E"
	}, {
	  base: 'OU',
	  letters: "\u0222"
	}, {
	  base: 'P',
	  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
	}, {
	  base: 'Q',
	  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
	}, {
	  base: 'R',
	  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
	}, {
	  base: 'S',
	  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
	}, {
	  base: 'T',
	  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
	}, {
	  base: 'TZ',
	  letters: "\uA728"
	}, {
	  base: 'U',
	  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
	}, {
	  base: 'V',
	  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
	}, {
	  base: 'VY',
	  letters: "\uA760"
	}, {
	  base: 'W',
	  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
	}, {
	  base: 'X',
	  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
	}, {
	  base: 'Y',
	  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
	}, {
	  base: 'Z',
	  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
	}, {
	  base: 'a',
	  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
	}, {
	  base: 'aa',
	  letters: "\uA733"
	}, {
	  base: 'ae',
	  letters: "\xE6\u01FD\u01E3"
	}, {
	  base: 'ao',
	  letters: "\uA735"
	}, {
	  base: 'au',
	  letters: "\uA737"
	}, {
	  base: 'av',
	  letters: "\uA739\uA73B"
	}, {
	  base: 'ay',
	  letters: "\uA73D"
	}, {
	  base: 'b',
	  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
	}, {
	  base: 'c',
	  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
	}, {
	  base: 'd',
	  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
	}, {
	  base: 'dz',
	  letters: "\u01F3\u01C6"
	}, {
	  base: 'e',
	  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
	}, {
	  base: 'f',
	  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
	}, {
	  base: 'g',
	  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
	}, {
	  base: 'h',
	  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
	}, {
	  base: 'hv',
	  letters: "\u0195"
	}, {
	  base: 'i',
	  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
	}, {
	  base: 'j',
	  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
	}, {
	  base: 'k',
	  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
	}, {
	  base: 'l',
	  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
	}, {
	  base: 'lj',
	  letters: "\u01C9"
	}, {
	  base: 'm',
	  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
	}, {
	  base: 'n',
	  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
	}, {
	  base: 'nj',
	  letters: "\u01CC"
	}, {
	  base: 'o',
	  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
	}, {
	  base: 'oi',
	  letters: "\u01A3"
	}, {
	  base: 'ou',
	  letters: "\u0223"
	}, {
	  base: 'oo',
	  letters: "\uA74F"
	}, {
	  base: 'p',
	  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
	}, {
	  base: 'q',
	  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
	}, {
	  base: 'r',
	  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
	}, {
	  base: 's',
	  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
	}, {
	  base: 't',
	  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
	}, {
	  base: 'tz',
	  letters: "\uA729"
	}, {
	  base: 'u',
	  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
	}, {
	  base: 'v',
	  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
	}, {
	  base: 'vy',
	  letters: "\uA761"
	}, {
	  base: 'w',
	  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
	}, {
	  base: 'x',
	  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
	}, {
	  base: 'y',
	  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
	}, {
	  base: 'z',
	  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
	}];
	var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
	  return d.letters;
	}).join('') + ']', 'g');
	var diacriticToBase = {};
	for (var i = 0; i < diacritics.length; i++) {
	  var diacritic = diacritics[i];
	  for (var j = 0; j < diacritic.letters.length; j++) {
	    diacriticToBase[diacritic.letters[j]] = diacritic.base;
	  }
	}
	var stripDiacritics = function stripDiacritics(str) {
	  return str.replace(anyDiacritic, function (match) {
	    return diacriticToBase[match];
	  });
	};
	var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
	var trimString = function trimString(str) {
	  return str.replace(/^\s+|\s+$/g, '');
	};
	var defaultStringify = function defaultStringify(option) {
	  return "".concat(option.label, " ").concat(option.value);
	};
	var createFilter = function createFilter(config) {
	  return function (option, rawInput) {
	    // eslint-disable-next-line no-underscore-dangle
	    if (option.data.__isNew__) return true;
	    var _ignoreCase$ignoreAcc = _objectSpread2({
	        ignoreCase: true,
	        ignoreAccents: true,
	        stringify: defaultStringify,
	        trim: true,
	        matchFrom: 'any'
	      }, config),
	      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
	      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
	      stringify = _ignoreCase$ignoreAcc.stringify,
	      trim = _ignoreCase$ignoreAcc.trim,
	      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
	    var input = trim ? trimString(rawInput) : rawInput;
	    var candidate = trim ? trimString(stringify(option)) : stringify(option);
	    if (ignoreCase) {
	      input = input.toLowerCase();
	      candidate = candidate.toLowerCase();
	    }
	    if (ignoreAccents) {
	      input = memoizedStripDiacriticsForInput(input);
	      candidate = stripDiacritics(candidate);
	    }
	    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
	  };
	};
	var _excluded$2 = ["innerRef"];
	function DummyInput(_ref) {
	  var innerRef = _ref.innerRef,
	    props = _objectWithoutProperties(_ref, _excluded$2);
	  // Remove animation props not meant for HTML elements
	  var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
	  return jsx("input", _extends({
	    ref: innerRef
	  }, filteredProps, {
	    css: /*#__PURE__*/css$2({
	      label: 'dummyInput',
	      // get rid of any default styles
	      background: 0,
	      border: 0,
	      // important! this hides the flashing cursor
	      caretColor: 'transparent',
	      fontSize: 'inherit',
	      gridArea: '1 / 1 / 2 / 3',
	      outline: 0,
	      padding: 0,
	      // important! without `width` browsers won't allow focus
	      width: 1,
	      // remove cursor on desktop
	      color: 'transparent',
	      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
	      left: -100,
	      opacity: 0,
	      position: 'relative',
	      transform: 'scale(.01)'
	    }, "" , "" )
	  }));
	}
	var cancelScroll = function cancelScroll(event) {
	  event.preventDefault();
	  event.stopPropagation();
	};
	function useScrollCapture(_ref) {
	  var isEnabled = _ref.isEnabled,
	    onBottomArrive = _ref.onBottomArrive,
	    onBottomLeave = _ref.onBottomLeave,
	    onTopArrive = _ref.onTopArrive,
	    onTopLeave = _ref.onTopLeave;
	  var isBottom = react_31(false);
	  var isTop = react_31(false);
	  var touchStart = react_31(0);
	  var scrollTarget = react_31(null);
	  var handleEventDelta = react_20(function (event, delta) {
	    if (scrollTarget.current === null) return;
	    var _scrollTarget$current = scrollTarget.current,
	      scrollTop = _scrollTarget$current.scrollTop,
	      scrollHeight = _scrollTarget$current.scrollHeight,
	      clientHeight = _scrollTarget$current.clientHeight;
	    var target = scrollTarget.current;
	    var isDeltaPositive = delta > 0;
	    var availableScroll = scrollHeight - clientHeight - scrollTop;
	    var shouldCancelScroll = false;

	    // reset bottom/top flags
	    if (availableScroll > delta && isBottom.current) {
	      if (onBottomLeave) onBottomLeave(event);
	      isBottom.current = false;
	    }
	    if (isDeltaPositive && isTop.current) {
	      if (onTopLeave) onTopLeave(event);
	      isTop.current = false;
	    }

	    // bottom limit
	    if (isDeltaPositive && delta > availableScroll) {
	      if (onBottomArrive && !isBottom.current) {
	        onBottomArrive(event);
	      }
	      target.scrollTop = scrollHeight;
	      shouldCancelScroll = true;
	      isBottom.current = true;

	      // top limit
	    } else if (!isDeltaPositive && -delta > scrollTop) {
	      if (onTopArrive && !isTop.current) {
	        onTopArrive(event);
	      }
	      target.scrollTop = 0;
	      shouldCancelScroll = true;
	      isTop.current = true;
	    }

	    // cancel scroll
	    if (shouldCancelScroll) {
	      cancelScroll(event);
	    }
	  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
	  var onWheel = react_20(function (event) {
	    handleEventDelta(event, event.deltaY);
	  }, [handleEventDelta]);
	  var onTouchStart = react_20(function (event) {
	    // set touch start so we can calculate touchmove delta
	    touchStart.current = event.changedTouches[0].clientY;
	  }, []);
	  var onTouchMove = react_20(function (event) {
	    var deltaY = touchStart.current - event.changedTouches[0].clientY;
	    handleEventDelta(event, deltaY);
	  }, [handleEventDelta]);
	  var startListening = react_20(function (el) {
	    // bail early if no element is available to attach to
	    if (!el) return;
	    var notPassive = supportsPassiveEvents ? {
	      passive: false
	    } : false;
	    el.addEventListener('wheel', onWheel, notPassive);
	    el.addEventListener('touchstart', onTouchStart, notPassive);
	    el.addEventListener('touchmove', onTouchMove, notPassive);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  var stopListening = react_20(function (el) {
	    // bail early if no element is available to detach from
	    if (!el) return;
	    el.removeEventListener('wheel', onWheel, false);
	    el.removeEventListener('touchstart', onTouchStart, false);
	    el.removeEventListener('touchmove', onTouchMove, false);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  react_24(function () {
	    if (!isEnabled) return;
	    var element = scrollTarget.current;
	    startListening(element);
	    return function () {
	      stopListening(element);
	    };
	  }, [isEnabled, startListening, stopListening]);
	  return function (element) {
	    scrollTarget.current = element;
	  };
	}
	var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
	var LOCK_STYLES = {
	  boxSizing: 'border-box',
	  // account for possible declaration `width: 100%;` on body
	  overflow: 'hidden',
	  position: 'relative',
	  height: '100%'
	};
	function preventTouchMove(e) {
	  e.preventDefault();
	}
	function allowTouchMove(e) {
	  e.stopPropagation();
	}
	function preventInertiaScroll() {
	  var top = this.scrollTop;
	  var totalScroll = this.scrollHeight;
	  var currentScroll = top + this.offsetHeight;
	  if (top === 0) {
	    this.scrollTop = 1;
	  } else if (currentScroll === totalScroll) {
	    this.scrollTop = top - 1;
	  }
	}

	// `ontouchstart` check works on most browsers
	// `maxTouchPoints` works on IE10/11 and Surface
	function isTouchDevice() {
	  return 'ontouchstart' in window || navigator.maxTouchPoints;
	}
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	var activeScrollLocks = 0;
	var listenerOptions = {
	  capture: false,
	  passive: false
	};
	function useScrollLock(_ref) {
	  var isEnabled = _ref.isEnabled,
	    _ref$accountForScroll = _ref.accountForScrollbars,
	    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
	  var originalStyles = react_31({});
	  var scrollTarget = react_31(null);
	  var addScrollLock = react_20(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style;
	    if (accountForScrollbars) {
	      // store any styles already applied to the body
	      STYLE_KEYS.forEach(function (key) {
	        var val = targetStyle && targetStyle[key];
	        originalStyles.current[key] = val;
	      });
	    }

	    // apply the lock styles and padding if this is the first scroll lock
	    if (accountForScrollbars && activeScrollLocks < 1) {
	      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
	      var clientWidth = document.body ? document.body.clientWidth : 0;
	      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
	      Object.keys(LOCK_STYLES).forEach(function (key) {
	        var val = LOCK_STYLES[key];
	        if (targetStyle) {
	          targetStyle[key] = val;
	        }
	      });
	      if (targetStyle) {
	        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
	      }
	    }

	    // account for touch devices
	    if (target && isTouchDevice()) {
	      // Mobile Safari ignores { overflow: hidden } declaration on the body.
	      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

	      // Allow scroll on provided target
	      if (touchScrollTarget) {
	        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    }

	    // increment active scroll locks
	    activeScrollLocks += 1;
	  }, [accountForScrollbars]);
	  var removeScrollLock = react_20(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style;

	    // safely decrement active scroll locks
	    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

	    // reapply original body styles, if any
	    if (accountForScrollbars && activeScrollLocks < 1) {
	      STYLE_KEYS.forEach(function (key) {
	        var val = originalStyles.current[key];
	        if (targetStyle) {
	          targetStyle[key] = val;
	        }
	      });
	    }

	    // remove touch listeners
	    if (target && isTouchDevice()) {
	      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
	      if (touchScrollTarget) {
	        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    }
	  }, [accountForScrollbars]);
	  react_24(function () {
	    if (!isEnabled) return;
	    var element = scrollTarget.current;
	    addScrollLock(element);
	    return function () {
	      removeScrollLock(element);
	    };
	  }, [isEnabled, addScrollLock, removeScrollLock]);
	  return function (element) {
	    scrollTarget.current = element;
	  };
	}
	var blurSelectInput = function blurSelectInput() {
	  return document.activeElement && document.activeElement.blur();
	};
	var _ref2$1 = {
	  name: "1kfdb0e",
	  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
	} ;
	function ScrollManager(_ref) {
	  var children = _ref.children,
	    lockEnabled = _ref.lockEnabled,
	    _ref$captureEnabled = _ref.captureEnabled,
	    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
	    onBottomArrive = _ref.onBottomArrive,
	    onBottomLeave = _ref.onBottomLeave,
	    onTopArrive = _ref.onTopArrive,
	    onTopLeave = _ref.onTopLeave;
	  var setScrollCaptureTarget = useScrollCapture({
	    isEnabled: captureEnabled,
	    onBottomArrive: onBottomArrive,
	    onBottomLeave: onBottomLeave,
	    onTopArrive: onTopArrive,
	    onTopLeave: onTopLeave
	  });
	  var setScrollLockTarget = useScrollLock({
	    isEnabled: lockEnabled
	  });
	  var targetRef = function targetRef(element) {
	    setScrollCaptureTarget(element);
	    setScrollLockTarget(element);
	  };
	  return jsx(react_3, null, lockEnabled && jsx("div", {
	    onClick: blurSelectInput,
	    css: _ref2$1
	  }), children(targetRef));
	}
	var _ref2 = {
	  name: "1a0ro4n-requiredInput",
	  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
	} ;
	var RequiredInput = function RequiredInput(_ref) {
	  var name = _ref.name,
	    onFocus = _ref.onFocus;
	  return jsx("input", {
	    required: true,
	    name: name,
	    tabIndex: -1,
	    "aria-hidden": "true",
	    onFocus: onFocus,
	    css: _ref2
	    // Prevent `Switching from uncontrolled to controlled` error
	    ,

	    value: "",
	    onChange: function onChange() {}
	  });
	};
	var RequiredInput$1 = RequiredInput;
	var formatGroupLabel = function formatGroupLabel(group) {
	  return group.label;
	};
	var getOptionLabel$1 = function getOptionLabel(option) {
	  return option.label;
	};
	var getOptionValue$1 = function getOptionValue(option) {
	  return option.value;
	};
	var isOptionDisabled = function isOptionDisabled(option) {
	  return !!option.isDisabled;
	};
	var defaultStyles = {
	  clearIndicator: clearIndicatorCSS,
	  container: containerCSS,
	  control: css$1,
	  dropdownIndicator: dropdownIndicatorCSS,
	  group: groupCSS,
	  groupHeading: groupHeadingCSS,
	  indicatorsContainer: indicatorsContainerCSS,
	  indicatorSeparator: indicatorSeparatorCSS,
	  input: inputCSS,
	  loadingIndicator: loadingIndicatorCSS,
	  loadingMessage: loadingMessageCSS,
	  menu: menuCSS,
	  menuList: menuListCSS,
	  menuPortal: menuPortalCSS,
	  multiValue: multiValueCSS,
	  multiValueLabel: multiValueLabelCSS,
	  multiValueRemove: multiValueRemoveCSS,
	  noOptionsMessage: noOptionsMessageCSS,
	  option: optionCSS,
	  placeholder: placeholderCSS,
	  singleValue: css,
	  valueContainer: valueContainerCSS
	};
	var colors = {
	  primary: '#2684FF',
	  primary75: '#4C9AFF',
	  primary50: '#B2D4FF',
	  primary25: '#DEEBFF',
	  danger: '#DE350B',
	  dangerLight: '#FFBDAD',
	  neutral0: 'hsl(0, 0%, 100%)',
	  neutral5: 'hsl(0, 0%, 95%)',
	  neutral10: 'hsl(0, 0%, 90%)',
	  neutral20: 'hsl(0, 0%, 80%)',
	  neutral30: 'hsl(0, 0%, 70%)',
	  neutral40: 'hsl(0, 0%, 60%)',
	  neutral50: 'hsl(0, 0%, 50%)',
	  neutral60: 'hsl(0, 0%, 40%)',
	  neutral70: 'hsl(0, 0%, 30%)',
	  neutral80: 'hsl(0, 0%, 20%)',
	  neutral90: 'hsl(0, 0%, 10%)'
	};
	var borderRadius = 4;
	// Used to calculate consistent margin/padding on elements
	var baseUnit = 4;
	// The minimum height of the control
	var controlHeight = 38;
	// The amount of space between the control and menu */
	var menuGutter = baseUnit * 2;
	var spacing = {
	  baseUnit: baseUnit,
	  controlHeight: controlHeight,
	  menuGutter: menuGutter
	};
	var defaultTheme = {
	  borderRadius: borderRadius,
	  colors: colors,
	  spacing: spacing
	};
	var defaultProps = {
	  'aria-live': 'polite',
	  backspaceRemovesValue: true,
	  blurInputOnSelect: isTouchCapable(),
	  captureMenuScroll: !isTouchCapable(),
	  classNames: {},
	  closeMenuOnSelect: true,
	  closeMenuOnScroll: false,
	  components: {},
	  controlShouldRenderValue: true,
	  escapeClearsValue: false,
	  filterOption: createFilter(),
	  formatGroupLabel: formatGroupLabel,
	  getOptionLabel: getOptionLabel$1,
	  getOptionValue: getOptionValue$1,
	  isDisabled: false,
	  isLoading: false,
	  isMulti: false,
	  isRtl: false,
	  isSearchable: true,
	  isOptionDisabled: isOptionDisabled,
	  loadingMessage: function loadingMessage() {
	    return 'Loading...';
	  },
	  maxMenuHeight: 300,
	  minMenuHeight: 140,
	  menuIsOpen: false,
	  menuPlacement: 'bottom',
	  menuPosition: 'absolute',
	  menuShouldBlockScroll: false,
	  menuShouldScrollIntoView: !isMobileDevice(),
	  noOptionsMessage: function noOptionsMessage() {
	    return 'No options';
	  },
	  openMenuOnFocus: false,
	  openMenuOnClick: true,
	  options: [],
	  pageSize: 5,
	  placeholder: 'Select...',
	  screenReaderStatus: function screenReaderStatus(_ref) {
	    var count = _ref.count;
	    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
	  },
	  styles: {},
	  tabIndex: 0,
	  tabSelectsValue: true,
	  unstyled: false
	};
	function toCategorizedOption(props, option, selectValue, index) {
	  var isDisabled = _isOptionDisabled(props, option, selectValue);
	  var isSelected = _isOptionSelected(props, option, selectValue);
	  var label = getOptionLabel(props, option);
	  var value = getOptionValue(props, option);
	  return {
	    type: 'option',
	    data: option,
	    isDisabled: isDisabled,
	    isSelected: isSelected,
	    label: label,
	    value: value,
	    index: index
	  };
	}
	function buildCategorizedOptions(props, selectValue) {
	  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
	    if ('options' in groupOrOption) {
	      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
	        return toCategorizedOption(props, option, selectValue, optionIndex);
	      }).filter(function (categorizedOption) {
	        return isFocusable(props, categorizedOption);
	      });
	      return categorizedOptions.length > 0 ? {
	        type: 'group',
	        data: groupOrOption,
	        options: categorizedOptions,
	        index: groupOrOptionIndex
	      } : undefined;
	    }
	    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
	    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
	  }).filter(notNullish);
	}
	function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
	  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
	    if (categorizedOption.type === 'group') {
	      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
	        return option.data;
	      })));
	    } else {
	      optionsAccumulator.push(categorizedOption.data);
	    }
	    return optionsAccumulator;
	  }, []);
	}
	function buildFocusableOptions(props, selectValue) {
	  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
	}
	function isFocusable(props, categorizedOption) {
	  var _props$inputValue = props.inputValue,
	    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
	  var data = categorizedOption.data,
	    isSelected = categorizedOption.isSelected,
	    label = categorizedOption.label,
	    value = categorizedOption.value;
	  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
	    label: label,
	    value: value,
	    data: data
	  }, inputValue);
	}
	function getNextFocusedValue(state, nextSelectValue) {
	  var focusedValue = state.focusedValue,
	    lastSelectValue = state.selectValue;
	  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
	  if (lastFocusedIndex > -1) {
	    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
	    if (nextFocusedIndex > -1) {
	      // the focused value is still in the selectValue, return it
	      return focusedValue;
	    } else if (lastFocusedIndex < nextSelectValue.length) {
	      // the focusedValue is not present in the next selectValue array by
	      // reference, so return the new value at the same index
	      return nextSelectValue[lastFocusedIndex];
	    }
	  }
	  return null;
	}
	function getNextFocusedOption(state, options) {
	  var lastFocusedOption = state.focusedOption;
	  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
	}
	var getOptionLabel = function getOptionLabel(props, data) {
	  return props.getOptionLabel(data);
	};
	var getOptionValue = function getOptionValue(props, data) {
	  return props.getOptionValue(data);
	};
	function _isOptionDisabled(props, option, selectValue) {
	  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
	}
	function _isOptionSelected(props, option, selectValue) {
	  if (selectValue.indexOf(option) > -1) return true;
	  if (typeof props.isOptionSelected === 'function') {
	    return props.isOptionSelected(option, selectValue);
	  }
	  var candidate = getOptionValue(props, option);
	  return selectValue.some(function (i) {
	    return getOptionValue(props, i) === candidate;
	  });
	}
	function _filterOption(props, option, inputValue) {
	  return props.filterOption ? props.filterOption(option, inputValue) : true;
	}
	var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
	  var hideSelectedOptions = props.hideSelectedOptions,
	    isMulti = props.isMulti;
	  if (hideSelectedOptions === undefined) return isMulti;
	  return hideSelectedOptions;
	};
	var instanceId = 1;
	var Select = /*#__PURE__*/function (_Component) {
	  _inherits(Select, _Component);
	  var _super = _createSuper(Select);
	  // Misc. Instance Properties
	  // ------------------------------

	  // TODO

	  // Refs
	  // ------------------------------

	  // Lifecycle
	  // ------------------------------

	  function Select(_props) {
	    var _this;
	    _classCallCheck(this, Select);
	    _this = _super.call(this, _props);
	    _this.state = {
	      ariaSelection: null,
	      focusedOption: null,
	      focusedValue: null,
	      inputIsHidden: false,
	      isFocused: false,
	      selectValue: [],
	      clearFocusValueOnUpdate: false,
	      prevWasFocused: false,
	      inputIsHiddenAfterUpdate: undefined,
	      prevProps: undefined
	    };
	    _this.blockOptionHover = false;
	    _this.isComposing = false;
	    _this.commonProps = void 0;
	    _this.initialTouchX = 0;
	    _this.initialTouchY = 0;
	    _this.instancePrefix = '';
	    _this.openAfterFocus = false;
	    _this.scrollToFocusedOptionOnUpdate = false;
	    _this.userIsDragging = void 0;
	    _this.controlRef = null;
	    _this.getControlRef = function (ref) {
	      _this.controlRef = ref;
	    };
	    _this.focusedOptionRef = null;
	    _this.getFocusedOptionRef = function (ref) {
	      _this.focusedOptionRef = ref;
	    };
	    _this.menuListRef = null;
	    _this.getMenuListRef = function (ref) {
	      _this.menuListRef = ref;
	    };
	    _this.inputRef = null;
	    _this.getInputRef = function (ref) {
	      _this.inputRef = ref;
	    };
	    _this.focus = _this.focusInput;
	    _this.blur = _this.blurInput;
	    _this.onChange = function (newValue, actionMeta) {
	      var _this$props = _this.props,
	        onChange = _this$props.onChange,
	        name = _this$props.name;
	      actionMeta.name = name;
	      _this.ariaOnChange(newValue, actionMeta);
	      onChange(newValue, actionMeta);
	    };
	    _this.setValue = function (newValue, action, option) {
	      var _this$props2 = _this.props,
	        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
	        isMulti = _this$props2.isMulti,
	        inputValue = _this$props2.inputValue;
	      _this.onInputChange('', {
	        action: 'set-value',
	        prevInputValue: inputValue
	      });
	      if (closeMenuOnSelect) {
	        _this.setState({
	          inputIsHiddenAfterUpdate: !isMulti
	        });
	        _this.onMenuClose();
	      }
	      // when the select value should change, we should reset focusedValue
	      _this.setState({
	        clearFocusValueOnUpdate: true
	      });
	      _this.onChange(newValue, {
	        action: action,
	        option: option
	      });
	    };
	    _this.selectOption = function (newValue) {
	      var _this$props3 = _this.props,
	        blurInputOnSelect = _this$props3.blurInputOnSelect,
	        isMulti = _this$props3.isMulti,
	        name = _this$props3.name;
	      var selectValue = _this.state.selectValue;
	      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
	      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
	      if (deselected) {
	        var candidate = _this.getOptionValue(newValue);
	        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
	          return _this.getOptionValue(i) !== candidate;
	        })), 'deselect-option', newValue);
	      } else if (!isDisabled) {
	        // Select option if option is not disabled
	        if (isMulti) {
	          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
	        } else {
	          _this.setValue(singleValueAsValue(newValue), 'select-option');
	        }
	      } else {
	        _this.ariaOnChange(singleValueAsValue(newValue), {
	          action: 'select-option',
	          option: newValue,
	          name: name
	        });
	        return;
	      }
	      if (blurInputOnSelect) {
	        _this.blurInput();
	      }
	    };
	    _this.removeValue = function (removedValue) {
	      var isMulti = _this.props.isMulti;
	      var selectValue = _this.state.selectValue;
	      var candidate = _this.getOptionValue(removedValue);
	      var newValueArray = selectValue.filter(function (i) {
	        return _this.getOptionValue(i) !== candidate;
	      });
	      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
	      _this.onChange(newValue, {
	        action: 'remove-value',
	        removedValue: removedValue
	      });
	      _this.focusInput();
	    };
	    _this.clearValue = function () {
	      var selectValue = _this.state.selectValue;
	      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
	        action: 'clear',
	        removedValues: selectValue
	      });
	    };
	    _this.popValue = function () {
	      var isMulti = _this.props.isMulti;
	      var selectValue = _this.state.selectValue;
	      var lastSelectedValue = selectValue[selectValue.length - 1];
	      var newValueArray = selectValue.slice(0, selectValue.length - 1);
	      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
	      _this.onChange(newValue, {
	        action: 'pop-value',
	        removedValue: lastSelectedValue
	      });
	    };
	    _this.getValue = function () {
	      return _this.state.selectValue;
	    };
	    _this.cx = function () {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
	    };
	    _this.getOptionLabel = function (data) {
	      return getOptionLabel(_this.props, data);
	    };
	    _this.getOptionValue = function (data) {
	      return getOptionValue(_this.props, data);
	    };
	    _this.getStyles = function (key, props) {
	      var unstyled = _this.props.unstyled;
	      var base = defaultStyles[key](props, unstyled);
	      base.boxSizing = 'border-box';
	      var custom = _this.props.styles[key];
	      return custom ? custom(base, props) : base;
	    };
	    _this.getClassNames = function (key, props) {
	      var _this$props$className, _this$props$className2;
	      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
	    };
	    _this.getElementId = function (element) {
	      return "".concat(_this.instancePrefix, "-").concat(element);
	    };
	    _this.getComponents = function () {
	      return defaultComponents(_this.props);
	    };
	    _this.buildCategorizedOptions = function () {
	      return buildCategorizedOptions(_this.props, _this.state.selectValue);
	    };
	    _this.getCategorizedOptions = function () {
	      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
	    };
	    _this.buildFocusableOptions = function () {
	      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
	    };
	    _this.getFocusableOptions = function () {
	      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
	    };
	    _this.ariaOnChange = function (value, actionMeta) {
	      _this.setState({
	        ariaSelection: _objectSpread2({
	          value: value
	        }, actionMeta)
	      });
	    };
	    _this.onMenuMouseDown = function (event) {
	      if (event.button !== 0) {
	        return;
	      }
	      event.stopPropagation();
	      event.preventDefault();
	      _this.focusInput();
	    };
	    _this.onMenuMouseMove = function (event) {
	      _this.blockOptionHover = false;
	    };
	    _this.onControlMouseDown = function (event) {
	      // Event captured by dropdown indicator
	      if (event.defaultPrevented) {
	        return;
	      }
	      var openMenuOnClick = _this.props.openMenuOnClick;
	      if (!_this.state.isFocused) {
	        if (openMenuOnClick) {
	          _this.openAfterFocus = true;
	        }
	        _this.focusInput();
	      } else if (!_this.props.menuIsOpen) {
	        if (openMenuOnClick) {
	          _this.openMenu('first');
	        }
	      } else {
	        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
	          _this.onMenuClose();
	        }
	      }
	      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
	        event.preventDefault();
	      }
	    };
	    _this.onDropdownIndicatorMouseDown = function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }
	      if (_this.props.isDisabled) return;
	      var _this$props4 = _this.props,
	        isMulti = _this$props4.isMulti,
	        menuIsOpen = _this$props4.menuIsOpen;
	      _this.focusInput();
	      if (menuIsOpen) {
	        _this.setState({
	          inputIsHiddenAfterUpdate: !isMulti
	        });
	        _this.onMenuClose();
	      } else {
	        _this.openMenu('first');
	      }
	      event.preventDefault();
	    };
	    _this.onClearIndicatorMouseDown = function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }
	      _this.clearValue();
	      event.preventDefault();
	      _this.openAfterFocus = false;
	      if (event.type === 'touchend') {
	        _this.focusInput();
	      } else {
	        setTimeout(function () {
	          return _this.focusInput();
	        });
	      }
	    };
	    _this.onScroll = function (event) {
	      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
	        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
	          _this.props.onMenuClose();
	        }
	      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
	        if (_this.props.closeMenuOnScroll(event)) {
	          _this.props.onMenuClose();
	        }
	      }
	    };
	    _this.onCompositionStart = function () {
	      _this.isComposing = true;
	    };
	    _this.onCompositionEnd = function () {
	      _this.isComposing = false;
	    };
	    _this.onTouchStart = function (_ref2) {
	      var touches = _ref2.touches;
	      var touch = touches && touches.item(0);
	      if (!touch) {
	        return;
	      }
	      _this.initialTouchX = touch.clientX;
	      _this.initialTouchY = touch.clientY;
	      _this.userIsDragging = false;
	    };
	    _this.onTouchMove = function (_ref3) {
	      var touches = _ref3.touches;
	      var touch = touches && touches.item(0);
	      if (!touch) {
	        return;
	      }
	      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
	      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
	      var moveThreshold = 5;
	      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
	    };
	    _this.onTouchEnd = function (event) {
	      if (_this.userIsDragging) return;

	      // close the menu if the user taps outside
	      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
	      // on events on child elements, not the document (which we've attached this handler to).
	      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
	        _this.blurInput();
	      }

	      // reset move vars
	      _this.initialTouchX = 0;
	      _this.initialTouchY = 0;
	    };
	    _this.onControlTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onControlMouseDown(event);
	    };
	    _this.onClearIndicatorTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onClearIndicatorMouseDown(event);
	    };
	    _this.onDropdownIndicatorTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onDropdownIndicatorMouseDown(event);
	    };
	    _this.handleInputChange = function (event) {
	      var prevInputValue = _this.props.inputValue;
	      var inputValue = event.currentTarget.value;
	      _this.setState({
	        inputIsHiddenAfterUpdate: false
	      });
	      _this.onInputChange(inputValue, {
	        action: 'input-change',
	        prevInputValue: prevInputValue
	      });
	      if (!_this.props.menuIsOpen) {
	        _this.onMenuOpen();
	      }
	    };
	    _this.onInputFocus = function (event) {
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	      _this.setState({
	        inputIsHiddenAfterUpdate: false,
	        isFocused: true
	      });
	      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
	        _this.openMenu('first');
	      }
	      _this.openAfterFocus = false;
	    };
	    _this.onInputBlur = function (event) {
	      var prevInputValue = _this.props.inputValue;
	      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
	        _this.inputRef.focus();
	        return;
	      }
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	      _this.onInputChange('', {
	        action: 'input-blur',
	        prevInputValue: prevInputValue
	      });
	      _this.onMenuClose();
	      _this.setState({
	        focusedValue: null,
	        isFocused: false
	      });
	    };
	    _this.onOptionHover = function (focusedOption) {
	      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
	        return;
	      }
	      _this.setState({
	        focusedOption: focusedOption
	      });
	    };
	    _this.shouldHideSelectedOptions = function () {
	      return shouldHideSelectedOptions(_this.props);
	    };
	    _this.onValueInputFocus = function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	      _this.focus();
	    };
	    _this.onKeyDown = function (event) {
	      var _this$props5 = _this.props,
	        isMulti = _this$props5.isMulti,
	        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
	        escapeClearsValue = _this$props5.escapeClearsValue,
	        inputValue = _this$props5.inputValue,
	        isClearable = _this$props5.isClearable,
	        isDisabled = _this$props5.isDisabled,
	        menuIsOpen = _this$props5.menuIsOpen,
	        onKeyDown = _this$props5.onKeyDown,
	        tabSelectsValue = _this$props5.tabSelectsValue,
	        openMenuOnFocus = _this$props5.openMenuOnFocus;
	      var _this$state = _this.state,
	        focusedOption = _this$state.focusedOption,
	        focusedValue = _this$state.focusedValue,
	        selectValue = _this$state.selectValue;
	      if (isDisabled) return;
	      if (typeof onKeyDown === 'function') {
	        onKeyDown(event);
	        if (event.defaultPrevented) {
	          return;
	        }
	      }

	      // Block option hover events when the user has just pressed a key
	      _this.blockOptionHover = true;
	      switch (event.key) {
	        case 'ArrowLeft':
	          if (!isMulti || inputValue) return;
	          _this.focusValue('previous');
	          break;
	        case 'ArrowRight':
	          if (!isMulti || inputValue) return;
	          _this.focusValue('next');
	          break;
	        case 'Delete':
	        case 'Backspace':
	          if (inputValue) return;
	          if (focusedValue) {
	            _this.removeValue(focusedValue);
	          } else {
	            if (!backspaceRemovesValue) return;
	            if (isMulti) {
	              _this.popValue();
	            } else if (isClearable) {
	              _this.clearValue();
	            }
	          }
	          break;
	        case 'Tab':
	          if (_this.isComposing) return;
	          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
	          // don't capture the event if the menu opens on focus and the focused
	          // option is already selected; it breaks the flow of navigation
	          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
	            return;
	          }
	          _this.selectOption(focusedOption);
	          break;
	        case 'Enter':
	          if (event.keyCode === 229) {
	            // ignore the keydown event from an Input Method Editor(IME)
	            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
	            break;
	          }
	          if (menuIsOpen) {
	            if (!focusedOption) return;
	            if (_this.isComposing) return;
	            _this.selectOption(focusedOption);
	            break;
	          }
	          return;
	        case 'Escape':
	          if (menuIsOpen) {
	            _this.setState({
	              inputIsHiddenAfterUpdate: false
	            });
	            _this.onInputChange('', {
	              action: 'menu-close',
	              prevInputValue: inputValue
	            });
	            _this.onMenuClose();
	          } else if (isClearable && escapeClearsValue) {
	            _this.clearValue();
	          }
	          break;
	        case ' ':
	          // space
	          if (inputValue) {
	            return;
	          }
	          if (!menuIsOpen) {
	            _this.openMenu('first');
	            break;
	          }
	          if (!focusedOption) return;
	          _this.selectOption(focusedOption);
	          break;
	        case 'ArrowUp':
	          if (menuIsOpen) {
	            _this.focusOption('up');
	          } else {
	            _this.openMenu('last');
	          }
	          break;
	        case 'ArrowDown':
	          if (menuIsOpen) {
	            _this.focusOption('down');
	          } else {
	            _this.openMenu('first');
	          }
	          break;
	        case 'PageUp':
	          if (!menuIsOpen) return;
	          _this.focusOption('pageup');
	          break;
	        case 'PageDown':
	          if (!menuIsOpen) return;
	          _this.focusOption('pagedown');
	          break;
	        case 'Home':
	          if (!menuIsOpen) return;
	          _this.focusOption('first');
	          break;
	        case 'End':
	          if (!menuIsOpen) return;
	          _this.focusOption('last');
	          break;
	        default:
	          return;
	      }
	      event.preventDefault();
	    };
	    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
	    _this.state.selectValue = cleanValue(_props.value);

	    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
	    if (_props.menuIsOpen && _this.state.selectValue.length) {
	      var focusableOptions = _this.buildFocusableOptions();
	      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
	      _this.state.focusedOption = focusableOptions[optionIndex];
	    }
	    return _this;
	  }
	  _createClass(Select, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.startListeningComposition();
	      this.startListeningToTouch();
	      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
	        // Listen to all scroll events, and filter them out inside of 'onScroll'
	        document.addEventListener('scroll', this.onScroll, true);
	      }
	      if (this.props.autoFocus) {
	        this.focusInput();
	      }

	      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
	      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
	        scrollIntoView(this.menuListRef, this.focusedOptionRef);
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this$props6 = this.props,
	        isDisabled = _this$props6.isDisabled,
	        menuIsOpen = _this$props6.menuIsOpen;
	      var isFocused = this.state.isFocused;
	      if (
	      // ensure focus is restored correctly when the control becomes enabled
	      isFocused && !isDisabled && prevProps.isDisabled ||
	      // ensure focus is on the Input when the menu opens
	      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
	        this.focusInput();
	      }
	      if (isFocused && isDisabled && !prevProps.isDisabled) {
	        // ensure select state gets blurred in case Select is programmatically disabled while focused
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          isFocused: false
	        }, this.onMenuClose);
	      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
	        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          isFocused: true
	        });
	      }

	      // scroll the focused option into view if necessary
	      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
	        scrollIntoView(this.menuListRef, this.focusedOptionRef);
	        this.scrollToFocusedOptionOnUpdate = false;
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.stopListeningComposition();
	      this.stopListeningToTouch();
	      document.removeEventListener('scroll', this.onScroll, true);
	    }

	    // ==============================
	    // Consumer Handlers
	    // ==============================
	  }, {
	    key: "onMenuOpen",
	    value: function onMenuOpen() {
	      this.props.onMenuOpen();
	    }
	  }, {
	    key: "onMenuClose",
	    value: function onMenuClose() {
	      this.onInputChange('', {
	        action: 'menu-close',
	        prevInputValue: this.props.inputValue
	      });
	      this.props.onMenuClose();
	    }
	  }, {
	    key: "onInputChange",
	    value: function onInputChange(newValue, actionMeta) {
	      this.props.onInputChange(newValue, actionMeta);
	    }

	    // ==============================
	    // Methods
	    // ==============================
	  }, {
	    key: "focusInput",
	    value: function focusInput() {
	      if (!this.inputRef) return;
	      this.inputRef.focus();
	    }
	  }, {
	    key: "blurInput",
	    value: function blurInput() {
	      if (!this.inputRef) return;
	      this.inputRef.blur();
	    }

	    // aliased for consumers
	  }, {
	    key: "openMenu",
	    value: function openMenu(focusOption) {
	      var _this2 = this;
	      var _this$state2 = this.state,
	        selectValue = _this$state2.selectValue,
	        isFocused = _this$state2.isFocused;
	      var focusableOptions = this.buildFocusableOptions();
	      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
	      if (!this.props.isMulti) {
	        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
	        if (selectedIndex > -1) {
	          openAtIndex = selectedIndex;
	        }
	      }

	      // only scroll if the menu isn't already open
	      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
	      this.setState({
	        inputIsHiddenAfterUpdate: false,
	        focusedValue: null,
	        focusedOption: focusableOptions[openAtIndex]
	      }, function () {
	        return _this2.onMenuOpen();
	      });
	    }
	  }, {
	    key: "focusValue",
	    value: function focusValue(direction) {
	      var _this$state3 = this.state,
	        selectValue = _this$state3.selectValue,
	        focusedValue = _this$state3.focusedValue;

	      // Only multiselects support value focusing
	      if (!this.props.isMulti) return;
	      this.setState({
	        focusedOption: null
	      });
	      var focusedIndex = selectValue.indexOf(focusedValue);
	      if (!focusedValue) {
	        focusedIndex = -1;
	      }
	      var lastIndex = selectValue.length - 1;
	      var nextFocus = -1;
	      if (!selectValue.length) return;
	      switch (direction) {
	        case 'previous':
	          if (focusedIndex === 0) {
	            // don't cycle from the start to the end
	            nextFocus = 0;
	          } else if (focusedIndex === -1) {
	            // if nothing is focused, focus the last value first
	            nextFocus = lastIndex;
	          } else {
	            nextFocus = focusedIndex - 1;
	          }
	          break;
	        case 'next':
	          if (focusedIndex > -1 && focusedIndex < lastIndex) {
	            nextFocus = focusedIndex + 1;
	          }
	          break;
	      }
	      this.setState({
	        inputIsHidden: nextFocus !== -1,
	        focusedValue: selectValue[nextFocus]
	      });
	    }
	  }, {
	    key: "focusOption",
	    value: function focusOption() {
	      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
	      var pageSize = this.props.pageSize;
	      var focusedOption = this.state.focusedOption;
	      var options = this.getFocusableOptions();
	      if (!options.length) return;
	      var nextFocus = 0; // handles 'first'
	      var focusedIndex = options.indexOf(focusedOption);
	      if (!focusedOption) {
	        focusedIndex = -1;
	      }
	      if (direction === 'up') {
	        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
	      } else if (direction === 'down') {
	        nextFocus = (focusedIndex + 1) % options.length;
	      } else if (direction === 'pageup') {
	        nextFocus = focusedIndex - pageSize;
	        if (nextFocus < 0) nextFocus = 0;
	      } else if (direction === 'pagedown') {
	        nextFocus = focusedIndex + pageSize;
	        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
	      } else if (direction === 'last') {
	        nextFocus = options.length - 1;
	      }
	      this.scrollToFocusedOptionOnUpdate = true;
	      this.setState({
	        focusedOption: options[nextFocus],
	        focusedValue: null
	      });
	    }
	  }, {
	    key: "getTheme",
	    value:
	    // ==============================
	    // Getters
	    // ==============================

	    function getTheme() {
	      // Use the default theme if there are no customisations.
	      if (!this.props.theme) {
	        return defaultTheme;
	      }
	      // If the theme prop is a function, assume the function
	      // knows how to merge the passed-in default theme with
	      // its own modifications.
	      if (typeof this.props.theme === 'function') {
	        return this.props.theme(defaultTheme);
	      }
	      // Otherwise, if a plain theme object was passed in,
	      // overlay it with the default theme.
	      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
	    }
	  }, {
	    key: "getCommonProps",
	    value: function getCommonProps() {
	      var clearValue = this.clearValue,
	        cx = this.cx,
	        getStyles = this.getStyles,
	        getClassNames = this.getClassNames,
	        getValue = this.getValue,
	        selectOption = this.selectOption,
	        setValue = this.setValue,
	        props = this.props;
	      var isMulti = props.isMulti,
	        isRtl = props.isRtl,
	        options = props.options;
	      var hasValue = this.hasValue();
	      return {
	        clearValue: clearValue,
	        cx: cx,
	        getStyles: getStyles,
	        getClassNames: getClassNames,
	        getValue: getValue,
	        hasValue: hasValue,
	        isMulti: isMulti,
	        isRtl: isRtl,
	        options: options,
	        selectOption: selectOption,
	        selectProps: props,
	        setValue: setValue,
	        theme: this.getTheme()
	      };
	    }
	  }, {
	    key: "hasValue",
	    value: function hasValue() {
	      var selectValue = this.state.selectValue;
	      return selectValue.length > 0;
	    }
	  }, {
	    key: "hasOptions",
	    value: function hasOptions() {
	      return !!this.getFocusableOptions().length;
	    }
	  }, {
	    key: "isClearable",
	    value: function isClearable() {
	      var _this$props7 = this.props,
	        isClearable = _this$props7.isClearable,
	        isMulti = _this$props7.isMulti;

	      // single select, by default, IS NOT clearable
	      // multi select, by default, IS clearable
	      if (isClearable === undefined) return isMulti;
	      return isClearable;
	    }
	  }, {
	    key: "isOptionDisabled",
	    value: function isOptionDisabled(option, selectValue) {
	      return _isOptionDisabled(this.props, option, selectValue);
	    }
	  }, {
	    key: "isOptionSelected",
	    value: function isOptionSelected(option, selectValue) {
	      return _isOptionSelected(this.props, option, selectValue);
	    }
	  }, {
	    key: "filterOption",
	    value: function filterOption(option, inputValue) {
	      return _filterOption(this.props, option, inputValue);
	    }
	  }, {
	    key: "formatOptionLabel",
	    value: function formatOptionLabel(data, context) {
	      if (typeof this.props.formatOptionLabel === 'function') {
	        var _inputValue = this.props.inputValue;
	        var _selectValue = this.state.selectValue;
	        return this.props.formatOptionLabel(data, {
	          context: context,
	          inputValue: _inputValue,
	          selectValue: _selectValue
	        });
	      } else {
	        return this.getOptionLabel(data);
	      }
	    }
	  }, {
	    key: "formatGroupLabel",
	    value: function formatGroupLabel(data) {
	      return this.props.formatGroupLabel(data);
	    }

	    // ==============================
	    // Mouse Handlers
	    // ==============================
	  }, {
	    key: "startListeningComposition",
	    value:
	    // ==============================
	    // Composition Handlers
	    // ==============================

	    function startListeningComposition() {
	      if (document && document.addEventListener) {
	        document.addEventListener('compositionstart', this.onCompositionStart, false);
	        document.addEventListener('compositionend', this.onCompositionEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningComposition",
	    value: function stopListeningComposition() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('compositionstart', this.onCompositionStart);
	        document.removeEventListener('compositionend', this.onCompositionEnd);
	      }
	    }
	  }, {
	    key: "startListeningToTouch",
	    value:
	    // ==============================
	    // Touch Handlers
	    // ==============================

	    function startListeningToTouch() {
	      if (document && document.addEventListener) {
	        document.addEventListener('touchstart', this.onTouchStart, false);
	        document.addEventListener('touchmove', this.onTouchMove, false);
	        document.addEventListener('touchend', this.onTouchEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningToTouch",
	    value: function stopListeningToTouch() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('touchstart', this.onTouchStart);
	        document.removeEventListener('touchmove', this.onTouchMove);
	        document.removeEventListener('touchend', this.onTouchEnd);
	      }
	    }
	  }, {
	    key: "renderInput",
	    value:
	    // ==============================
	    // Renderers
	    // ==============================
	    function renderInput() {
	      var _this$props8 = this.props,
	        isDisabled = _this$props8.isDisabled,
	        isSearchable = _this$props8.isSearchable,
	        inputId = _this$props8.inputId,
	        inputValue = _this$props8.inputValue,
	        tabIndex = _this$props8.tabIndex,
	        form = _this$props8.form,
	        menuIsOpen = _this$props8.menuIsOpen,
	        required = _this$props8.required;
	      var _this$getComponents = this.getComponents(),
	        Input = _this$getComponents.Input;
	      var _this$state4 = this.state,
	        inputIsHidden = _this$state4.inputIsHidden,
	        ariaSelection = _this$state4.ariaSelection;
	      var commonProps = this.commonProps;
	      var id = inputId || this.getElementId('input');

	      // aria attributes makes the JSX "noisy", separated for clarity
	      var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
	        'aria-autocomplete': 'list',
	        'aria-expanded': menuIsOpen,
	        'aria-haspopup': true,
	        'aria-errormessage': this.props['aria-errormessage'],
	        'aria-invalid': this.props['aria-invalid'],
	        'aria-label': this.props['aria-label'],
	        'aria-labelledby': this.props['aria-labelledby'],
	        'aria-required': required,
	        role: 'combobox'
	      }, menuIsOpen && {
	        'aria-controls': this.getElementId('listbox'),
	        'aria-owns': this.getElementId('listbox')
	      }), !isSearchable && {
	        'aria-readonly': true
	      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
	        'aria-describedby': this.getElementId('live-region')
	      } : {
	        'aria-describedby': this.getElementId('placeholder')
	      });
	      if (!isSearchable) {
	        // use a dummy input to maintain focus/blur functionality
	        return /*#__PURE__*/react_11(DummyInput, _extends({
	          id: id,
	          innerRef: this.getInputRef,
	          onBlur: this.onInputBlur,
	          onChange: noop,
	          onFocus: this.onInputFocus,
	          disabled: isDisabled,
	          tabIndex: tabIndex,
	          inputMode: "none",
	          form: form,
	          value: ""
	        }, ariaAttributes));
	      }
	      return /*#__PURE__*/react_11(Input, _extends({}, commonProps, {
	        autoCapitalize: "none",
	        autoComplete: "off",
	        autoCorrect: "off",
	        id: id,
	        innerRef: this.getInputRef,
	        isDisabled: isDisabled,
	        isHidden: inputIsHidden,
	        onBlur: this.onInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.onInputFocus,
	        spellCheck: "false",
	        tabIndex: tabIndex,
	        form: form,
	        type: "text",
	        value: inputValue
	      }, ariaAttributes));
	    }
	  }, {
	    key: "renderPlaceholderOrValue",
	    value: function renderPlaceholderOrValue() {
	      var _this3 = this;
	      var _this$getComponents2 = this.getComponents(),
	        MultiValue = _this$getComponents2.MultiValue,
	        MultiValueContainer = _this$getComponents2.MultiValueContainer,
	        MultiValueLabel = _this$getComponents2.MultiValueLabel,
	        MultiValueRemove = _this$getComponents2.MultiValueRemove,
	        SingleValue = _this$getComponents2.SingleValue,
	        Placeholder = _this$getComponents2.Placeholder;
	      var commonProps = this.commonProps;
	      var _this$props9 = this.props,
	        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
	        isDisabled = _this$props9.isDisabled,
	        isMulti = _this$props9.isMulti,
	        inputValue = _this$props9.inputValue,
	        placeholder = _this$props9.placeholder;
	      var _this$state5 = this.state,
	        selectValue = _this$state5.selectValue,
	        focusedValue = _this$state5.focusedValue,
	        isFocused = _this$state5.isFocused;
	      if (!this.hasValue() || !controlShouldRenderValue) {
	        return inputValue ? null : /*#__PURE__*/react_11(Placeholder, _extends({}, commonProps, {
	          key: "placeholder",
	          isDisabled: isDisabled,
	          isFocused: isFocused,
	          innerProps: {
	            id: this.getElementId('placeholder')
	          }
	        }), placeholder);
	      }
	      if (isMulti) {
	        return selectValue.map(function (opt, index) {
	          var isOptionFocused = opt === focusedValue;
	          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
	          return /*#__PURE__*/react_11(MultiValue, _extends({}, commonProps, {
	            components: {
	              Container: MultiValueContainer,
	              Label: MultiValueLabel,
	              Remove: MultiValueRemove
	            },
	            isFocused: isOptionFocused,
	            isDisabled: isDisabled,
	            key: key,
	            index: index,
	            removeProps: {
	              onClick: function onClick() {
	                return _this3.removeValue(opt);
	              },
	              onTouchEnd: function onTouchEnd() {
	                return _this3.removeValue(opt);
	              },
	              onMouseDown: function onMouseDown(e) {
	                e.preventDefault();
	              }
	            },
	            data: opt
	          }), _this3.formatOptionLabel(opt, 'value'));
	        });
	      }
	      if (inputValue) {
	        return null;
	      }
	      var singleValue = selectValue[0];
	      return /*#__PURE__*/react_11(SingleValue, _extends({}, commonProps, {
	        data: singleValue,
	        isDisabled: isDisabled
	      }), this.formatOptionLabel(singleValue, 'value'));
	    }
	  }, {
	    key: "renderClearIndicator",
	    value: function renderClearIndicator() {
	      var _this$getComponents3 = this.getComponents(),
	        ClearIndicator = _this$getComponents3.ClearIndicator;
	      var commonProps = this.commonProps;
	      var _this$props10 = this.props,
	        isDisabled = _this$props10.isDisabled,
	        isLoading = _this$props10.isLoading;
	      var isFocused = this.state.isFocused;
	      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
	        return null;
	      }
	      var innerProps = {
	        onMouseDown: this.onClearIndicatorMouseDown,
	        onTouchEnd: this.onClearIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/react_11(ClearIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderLoadingIndicator",
	    value: function renderLoadingIndicator() {
	      var _this$getComponents4 = this.getComponents(),
	        LoadingIndicator = _this$getComponents4.LoadingIndicator;
	      var commonProps = this.commonProps;
	      var _this$props11 = this.props,
	        isDisabled = _this$props11.isDisabled,
	        isLoading = _this$props11.isLoading;
	      var isFocused = this.state.isFocused;
	      if (!LoadingIndicator || !isLoading) return null;
	      var innerProps = {
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/react_11(LoadingIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderIndicatorSeparator",
	    value: function renderIndicatorSeparator() {
	      var _this$getComponents5 = this.getComponents(),
	        DropdownIndicator = _this$getComponents5.DropdownIndicator,
	        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

	      // separator doesn't make sense without the dropdown indicator
	      if (!DropdownIndicator || !IndicatorSeparator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      return /*#__PURE__*/react_11(IndicatorSeparator, _extends({}, commonProps, {
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderDropdownIndicator",
	    value: function renderDropdownIndicator() {
	      var _this$getComponents6 = this.getComponents(),
	        DropdownIndicator = _this$getComponents6.DropdownIndicator;
	      if (!DropdownIndicator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      var innerProps = {
	        onMouseDown: this.onDropdownIndicatorMouseDown,
	        onTouchEnd: this.onDropdownIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/react_11(DropdownIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderMenu",
	    value: function renderMenu() {
	      var _this4 = this;
	      var _this$getComponents7 = this.getComponents(),
	        Group = _this$getComponents7.Group,
	        GroupHeading = _this$getComponents7.GroupHeading,
	        Menu = _this$getComponents7.Menu,
	        MenuList = _this$getComponents7.MenuList,
	        MenuPortal = _this$getComponents7.MenuPortal,
	        LoadingMessage = _this$getComponents7.LoadingMessage,
	        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
	        Option = _this$getComponents7.Option;
	      var commonProps = this.commonProps;
	      var focusedOption = this.state.focusedOption;
	      var _this$props12 = this.props,
	        captureMenuScroll = _this$props12.captureMenuScroll,
	        inputValue = _this$props12.inputValue,
	        isLoading = _this$props12.isLoading,
	        loadingMessage = _this$props12.loadingMessage,
	        minMenuHeight = _this$props12.minMenuHeight,
	        maxMenuHeight = _this$props12.maxMenuHeight,
	        menuIsOpen = _this$props12.menuIsOpen,
	        menuPlacement = _this$props12.menuPlacement,
	        menuPosition = _this$props12.menuPosition,
	        menuPortalTarget = _this$props12.menuPortalTarget,
	        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
	        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
	        noOptionsMessage = _this$props12.noOptionsMessage,
	        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
	        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
	      if (!menuIsOpen) return null;

	      // TODO: Internal Option Type here
	      var render = function render(props, id) {
	        var type = props.type,
	          data = props.data,
	          isDisabled = props.isDisabled,
	          isSelected = props.isSelected,
	          label = props.label,
	          value = props.value;
	        var isFocused = focusedOption === data;
	        var onHover = isDisabled ? undefined : function () {
	          return _this4.onOptionHover(data);
	        };
	        var onSelect = isDisabled ? undefined : function () {
	          return _this4.selectOption(data);
	        };
	        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
	        var innerProps = {
	          id: optionId,
	          onClick: onSelect,
	          onMouseMove: onHover,
	          onMouseOver: onHover,
	          tabIndex: -1
	        };
	        return /*#__PURE__*/react_11(Option, _extends({}, commonProps, {
	          innerProps: innerProps,
	          data: data,
	          isDisabled: isDisabled,
	          isSelected: isSelected,
	          key: optionId,
	          label: label,
	          type: type,
	          value: value,
	          isFocused: isFocused,
	          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
	        }), _this4.formatOptionLabel(props.data, 'menu'));
	      };
	      var menuUI;
	      if (this.hasOptions()) {
	        menuUI = this.getCategorizedOptions().map(function (item) {
	          if (item.type === 'group') {
	            var _data = item.data,
	              options = item.options,
	              groupIndex = item.index;
	            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
	            var headingId = "".concat(groupId, "-heading");
	            return /*#__PURE__*/react_11(Group, _extends({}, commonProps, {
	              key: groupId,
	              data: _data,
	              options: options,
	              Heading: GroupHeading,
	              headingProps: {
	                id: headingId,
	                data: item.data
	              },
	              label: _this4.formatGroupLabel(item.data)
	            }), item.options.map(function (option) {
	              return render(option, "".concat(groupIndex, "-").concat(option.index));
	            }));
	          } else if (item.type === 'option') {
	            return render(item, "".concat(item.index));
	          }
	        });
	      } else if (isLoading) {
	        var message = loadingMessage({
	          inputValue: inputValue
	        });
	        if (message === null) return null;
	        menuUI = /*#__PURE__*/react_11(LoadingMessage, commonProps, message);
	      } else {
	        var _message = noOptionsMessage({
	          inputValue: inputValue
	        });
	        if (_message === null) return null;
	        menuUI = /*#__PURE__*/react_11(NoOptionsMessage, commonProps, _message);
	      }
	      var menuPlacementProps = {
	        minMenuHeight: minMenuHeight,
	        maxMenuHeight: maxMenuHeight,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition,
	        menuShouldScrollIntoView: menuShouldScrollIntoView
	      };
	      var menuElement = /*#__PURE__*/react_11(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
	        var ref = _ref4.ref,
	          _ref4$placerProps = _ref4.placerProps,
	          placement = _ref4$placerProps.placement,
	          maxHeight = _ref4$placerProps.maxHeight;
	        return /*#__PURE__*/react_11(Menu, _extends({}, commonProps, menuPlacementProps, {
	          innerRef: ref,
	          innerProps: {
	            onMouseDown: _this4.onMenuMouseDown,
	            onMouseMove: _this4.onMenuMouseMove,
	            id: _this4.getElementId('listbox')
	          },
	          isLoading: isLoading,
	          placement: placement
	        }), /*#__PURE__*/react_11(ScrollManager, {
	          captureEnabled: captureMenuScroll,
	          onTopArrive: onMenuScrollToTop,
	          onBottomArrive: onMenuScrollToBottom,
	          lockEnabled: menuShouldBlockScroll
	        }, function (scrollTargetRef) {
	          return /*#__PURE__*/react_11(MenuList, _extends({}, commonProps, {
	            innerRef: function innerRef(instance) {
	              _this4.getMenuListRef(instance);
	              scrollTargetRef(instance);
	            },
	            isLoading: isLoading,
	            maxHeight: maxHeight,
	            focusedOption: focusedOption
	          }), menuUI);
	        }));
	      });

	      // positioning behaviour is almost identical for portalled and fixed,
	      // so we use the same component. the actual portalling logic is forked
	      // within the component based on `menuPosition`
	      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react_11(MenuPortal, _extends({}, commonProps, {
	        appendTo: menuPortalTarget,
	        controlElement: this.controlRef,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition
	      }), menuElement) : menuElement;
	    }
	  }, {
	    key: "renderFormField",
	    value: function renderFormField() {
	      var _this5 = this;
	      var _this$props13 = this.props,
	        delimiter = _this$props13.delimiter,
	        isDisabled = _this$props13.isDisabled,
	        isMulti = _this$props13.isMulti,
	        name = _this$props13.name,
	        required = _this$props13.required;
	      var selectValue = this.state.selectValue;
	      if (required && !this.hasValue() && !isDisabled) {
	        return /*#__PURE__*/react_11(RequiredInput$1, {
	          name: name,
	          onFocus: this.onValueInputFocus
	        });
	      }
	      if (!name || isDisabled) return;
	      if (isMulti) {
	        if (delimiter) {
	          var value = selectValue.map(function (opt) {
	            return _this5.getOptionValue(opt);
	          }).join(delimiter);
	          return /*#__PURE__*/react_11("input", {
	            name: name,
	            type: "hidden",
	            value: value
	          });
	        } else {
	          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
	            return /*#__PURE__*/react_11("input", {
	              key: "i-".concat(i),
	              name: name,
	              type: "hidden",
	              value: _this5.getOptionValue(opt)
	            });
	          }) : /*#__PURE__*/react_11("input", {
	            name: name,
	            type: "hidden",
	            value: ""
	          });
	          return /*#__PURE__*/react_11("div", null, input);
	        }
	      } else {
	        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
	        return /*#__PURE__*/react_11("input", {
	          name: name,
	          type: "hidden",
	          value: _value
	        });
	      }
	    }
	  }, {
	    key: "renderLiveRegion",
	    value: function renderLiveRegion() {
	      var commonProps = this.commonProps;
	      var _this$state6 = this.state,
	        ariaSelection = _this$state6.ariaSelection,
	        focusedOption = _this$state6.focusedOption,
	        focusedValue = _this$state6.focusedValue,
	        isFocused = _this$state6.isFocused,
	        selectValue = _this$state6.selectValue;
	      var focusableOptions = this.getFocusableOptions();
	      return /*#__PURE__*/react_11(LiveRegion$1, _extends({}, commonProps, {
	        id: this.getElementId('live-region'),
	        ariaSelection: ariaSelection,
	        focusedOption: focusedOption,
	        focusedValue: focusedValue,
	        isFocused: isFocused,
	        selectValue: selectValue,
	        focusableOptions: focusableOptions
	      }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$getComponents8 = this.getComponents(),
	        Control = _this$getComponents8.Control,
	        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
	        SelectContainer = _this$getComponents8.SelectContainer,
	        ValueContainer = _this$getComponents8.ValueContainer;
	      var _this$props14 = this.props,
	        className = _this$props14.className,
	        id = _this$props14.id,
	        isDisabled = _this$props14.isDisabled,
	        menuIsOpen = _this$props14.menuIsOpen;
	      var isFocused = this.state.isFocused;
	      var commonProps = this.commonProps = this.getCommonProps();
	      return /*#__PURE__*/react_11(SelectContainer, _extends({}, commonProps, {
	        className: className,
	        innerProps: {
	          id: id,
	          onKeyDown: this.onKeyDown
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }), this.renderLiveRegion(), /*#__PURE__*/react_11(Control, _extends({}, commonProps, {
	        innerRef: this.getControlRef,
	        innerProps: {
	          onMouseDown: this.onControlMouseDown,
	          onTouchEnd: this.onControlTouchEnd
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused,
	        menuIsOpen: menuIsOpen
	      }), /*#__PURE__*/react_11(ValueContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react_11(IndicatorsContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(props, state) {
	      var prevProps = state.prevProps,
	        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
	        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
	        ariaSelection = state.ariaSelection,
	        isFocused = state.isFocused,
	        prevWasFocused = state.prevWasFocused;
	      var options = props.options,
	        value = props.value,
	        menuIsOpen = props.menuIsOpen,
	        inputValue = props.inputValue,
	        isMulti = props.isMulti;
	      var selectValue = cleanValue(value);
	      var newMenuOptionsState = {};
	      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
	        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
	        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
	        var focusedOption = getNextFocusedOption(state, focusableOptions);
	        newMenuOptionsState = {
	          selectValue: selectValue,
	          focusedOption: focusedOption,
	          focusedValue: focusedValue,
	          clearFocusValueOnUpdate: false
	        };
	      }
	      // some updates should toggle the state of the input visibility
	      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
	        inputIsHidden: inputIsHiddenAfterUpdate,
	        inputIsHiddenAfterUpdate: undefined
	      } : {};
	      var newAriaSelection = ariaSelection;
	      var hasKeptFocus = isFocused && prevWasFocused;
	      if (isFocused && !hasKeptFocus) {
	        // If `value` or `defaultValue` props are not empty then announce them
	        // when the Select is initially focused
	        newAriaSelection = {
	          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
	          options: selectValue,
	          action: 'initial-input-focus'
	        };
	        hasKeptFocus = !prevWasFocused;
	      }

	      // If the 'initial-input-focus' action has been set already
	      // then reset the ariaSelection to null
	      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
	        newAriaSelection = null;
	      }
	      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
	        prevProps: props,
	        ariaSelection: newAriaSelection,
	        prevWasFocused: hasKeptFocus
	      });
	    }
	  }]);
	  return Select;
	}(react_2);
	Select.defaultProps = defaultProps;

	var _excluded$1 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
	function useStateManager(_ref) {
	  var _ref$defaultInputValu = _ref.defaultInputValue,
	    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
	    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
	    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
	    _ref$defaultValue = _ref.defaultValue,
	    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
	    propsInputValue = _ref.inputValue,
	    propsMenuIsOpen = _ref.menuIsOpen,
	    propsOnChange = _ref.onChange,
	    propsOnInputChange = _ref.onInputChange,
	    propsOnMenuClose = _ref.onMenuClose,
	    propsOnMenuOpen = _ref.onMenuOpen,
	    propsValue = _ref.value,
	    restSelectProps = _objectWithoutProperties(_ref, _excluded$1);
	  var _useState = react_32(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
	    _useState2 = _slicedToArray(_useState, 2),
	    stateInputValue = _useState2[0],
	    setStateInputValue = _useState2[1];
	  var _useState3 = react_32(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
	    _useState4 = _slicedToArray(_useState3, 2),
	    stateMenuIsOpen = _useState4[0],
	    setStateMenuIsOpen = _useState4[1];
	  var _useState5 = react_32(propsValue !== undefined ? propsValue : defaultValue),
	    _useState6 = _slicedToArray(_useState5, 2),
	    stateValue = _useState6[0],
	    setStateValue = _useState6[1];
	  var onChange = react_20(function (value, actionMeta) {
	    if (typeof propsOnChange === 'function') {
	      propsOnChange(value, actionMeta);
	    }
	    setStateValue(value);
	  }, [propsOnChange]);
	  var onInputChange = react_20(function (value, actionMeta) {
	    var newValue;
	    if (typeof propsOnInputChange === 'function') {
	      newValue = propsOnInputChange(value, actionMeta);
	    }
	    setStateInputValue(newValue !== undefined ? newValue : value);
	  }, [propsOnInputChange]);
	  var onMenuOpen = react_20(function () {
	    if (typeof propsOnMenuOpen === 'function') {
	      propsOnMenuOpen();
	    }
	    setStateMenuIsOpen(true);
	  }, [propsOnMenuOpen]);
	  var onMenuClose = react_20(function () {
	    if (typeof propsOnMenuClose === 'function') {
	      propsOnMenuClose();
	    }
	    setStateMenuIsOpen(false);
	  }, [propsOnMenuClose]);
	  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
	  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
	  var value = propsValue !== undefined ? propsValue : stateValue;
	  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
	    inputValue: inputValue,
	    menuIsOpen: menuIsOpen,
	    onChange: onChange,
	    onInputChange: onInputChange,
	    onMenuClose: onMenuClose,
	    onMenuOpen: onMenuOpen,
	    value: value
	  });
	}

	var _excluded = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"];
	var compareOption = function compareOption() {
	  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var option = arguments.length > 1 ? arguments[1] : undefined;
	  var accessors = arguments.length > 2 ? arguments[2] : undefined;
	  var candidate = String(inputValue).toLowerCase();
	  var optionValue = String(accessors.getOptionValue(option)).toLowerCase();
	  var optionLabel = String(accessors.getOptionLabel(option)).toLowerCase();
	  return optionValue === candidate || optionLabel === candidate;
	};
	var builtins = {
	  formatCreateLabel: function formatCreateLabel(inputValue) {
	    return "Create \"".concat(inputValue, "\"");
	  },
	  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions, accessors) {
	    return !(!inputValue || selectValue.some(function (option) {
	      return compareOption(inputValue, option, accessors);
	    }) || selectOptions.some(function (option) {
	      return compareOption(inputValue, option, accessors);
	    }));
	  },
	  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
	    return {
	      label: optionLabel,
	      value: inputValue,
	      __isNew__: true
	    };
	  }
	};
	function useCreatable(_ref) {
	  var _ref$allowCreateWhile = _ref.allowCreateWhileLoading,
	    allowCreateWhileLoading = _ref$allowCreateWhile === void 0 ? false : _ref$allowCreateWhile,
	    _ref$createOptionPosi = _ref.createOptionPosition,
	    createOptionPosition = _ref$createOptionPosi === void 0 ? 'last' : _ref$createOptionPosi,
	    _ref$formatCreateLabe = _ref.formatCreateLabel,
	    formatCreateLabel = _ref$formatCreateLabe === void 0 ? builtins.formatCreateLabel : _ref$formatCreateLabe,
	    _ref$isValidNewOption = _ref.isValidNewOption,
	    isValidNewOption = _ref$isValidNewOption === void 0 ? builtins.isValidNewOption : _ref$isValidNewOption,
	    _ref$getNewOptionData = _ref.getNewOptionData,
	    getNewOptionData = _ref$getNewOptionData === void 0 ? builtins.getNewOptionData : _ref$getNewOptionData,
	    onCreateOption = _ref.onCreateOption,
	    _ref$options = _ref.options,
	    propsOptions = _ref$options === void 0 ? [] : _ref$options,
	    propsOnChange = _ref.onChange,
	    restSelectProps = _objectWithoutProperties(_ref, _excluded);
	  var _restSelectProps$getO = restSelectProps.getOptionValue,
	    getOptionValue$1$1 = _restSelectProps$getO === void 0 ? getOptionValue$1 : _restSelectProps$getO,
	    _restSelectProps$getO2 = restSelectProps.getOptionLabel,
	    getOptionLabel$1$1 = _restSelectProps$getO2 === void 0 ? getOptionLabel$1 : _restSelectProps$getO2,
	    inputValue = restSelectProps.inputValue,
	    isLoading = restSelectProps.isLoading,
	    isMulti = restSelectProps.isMulti,
	    value = restSelectProps.value,
	    name = restSelectProps.name;
	  var newOption = react_29(function () {
	    return isValidNewOption(inputValue, cleanValue(value), propsOptions, {
	      getOptionValue: getOptionValue$1$1,
	      getOptionLabel: getOptionLabel$1$1
	    }) ? getNewOptionData(inputValue, formatCreateLabel(inputValue)) : undefined;
	  }, [formatCreateLabel, getNewOptionData, getOptionLabel$1$1, getOptionValue$1$1, inputValue, isValidNewOption, propsOptions, value]);
	  var options = react_29(function () {
	    return (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(propsOptions)) : [].concat(_toConsumableArray(propsOptions), [newOption]) : propsOptions;
	  }, [allowCreateWhileLoading, createOptionPosition, isLoading, newOption, propsOptions]);
	  var onChange = react_20(function (newValue, actionMeta) {
	    if (actionMeta.action !== 'select-option') {
	      return propsOnChange(newValue, actionMeta);
	    }
	    var valueArray = Array.isArray(newValue) ? newValue : [newValue];
	    if (valueArray[valueArray.length - 1] === newOption) {
	      if (onCreateOption) onCreateOption(inputValue);else {
	        var newOptionData = getNewOptionData(inputValue, inputValue);
	        var newActionMeta = {
	          action: 'create-option',
	          name: name,
	          option: newOptionData
	        };
	        propsOnChange(valueTernary(isMulti, [].concat(_toConsumableArray(cleanValue(value)), [newOptionData]), newOptionData), newActionMeta);
	      }
	      return;
	    }
	    propsOnChange(newValue, actionMeta);
	  }, [getNewOptionData, inputValue, isMulti, name, newOption, onCreateOption, propsOnChange, value]);
	  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
	    options: options,
	    onChange: onChange
	  });
	}

	var _typeof_1 = createCommonjsModule(function (module) {
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	      return typeof obj;
	    } : function (obj) {
	      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	  }
	  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(_typeof_1);

	var toPrimitive = createCommonjsModule(function (module) {
	  var _typeof = _typeof_1["default"];
	  function _toPrimitive(input, hint) {
	    if (_typeof(input) !== "object" || input === null) return input;
	    var prim = input[Symbol.toPrimitive];
	    if (prim !== undefined) {
	      var res = prim.call(input, hint || "default");
	      if (_typeof(res) !== "object") return res;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }
	    return (hint === "string" ? String : Number)(input);
	  }
	  module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(toPrimitive);

	var toPropertyKey = createCommonjsModule(function (module) {
	  var _typeof = _typeof_1["default"];
	  function _toPropertyKey(arg) {
	    var key = toPrimitive(arg, "string");
	    return _typeof(key) === "symbol" ? key : String(key);
	  }
	  module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(toPropertyKey);

	var defineProperty = createCommonjsModule(function (module) {
	  function _defineProperty(obj, key, value) {
	    key = toPropertyKey(key);
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
	  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(defineProperty);

	var objectSpread2 = createCommonjsModule(function (module) {
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
	        defineProperty(target, key, source[key]);
	      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	    return target;
	  }
	  module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(objectSpread2);

	var classCallCheck = createCommonjsModule(function (module) {
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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
	  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(createClass);

	var setPrototypeOf = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _setPrototypeOf(o, p);
	  }
	  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    Object.defineProperty(subClass, "prototype", {
	      writable: false
	    });
	    if (superClass) setPrototypeOf(subClass, superClass);
	  }
	  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(inherits);

	var getPrototypeOf = createCommonjsModule(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _getPrototypeOf(o);
	  }
	  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(getPrototypeOf);

	var isNativeReflectConstruct = createCommonjsModule(function (module) {
	  function _isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(isNativeReflectConstruct);

	var assertThisInitialized = createCommonjsModule(function (module) {
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	  }
	  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	  var _typeof = _typeof_1["default"];
	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    } else if (call !== void 0) {
	      throw new TypeError("Derived constructors may only return object or undefined");
	    }
	    return assertThisInitialized(self);
	  }
	  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(possibleConstructorReturn);

	var createSuper = createCommonjsModule(function (module) {
	  function _createSuper(Derived) {
	    var hasNativeReflectConstruct = isNativeReflectConstruct();
	    return function _createSuperInternal() {
	      var Super = getPrototypeOf(Derived),
	        result;
	      if (hasNativeReflectConstruct) {
	        var NewTarget = getPrototypeOf(this).constructor;
	        result = Reflect.construct(Super, arguments, NewTarget);
	      } else {
	        result = Super.apply(this, arguments);
	      }
	      return possibleConstructorReturn(this, result);
	    };
	  }
	  module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(createSuper);

	var arrayLikeToArray = createCommonjsModule(function (module) {
	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;
	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	    return arr2;
	  }
	  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return arrayLikeToArray(arr);
	  }
	  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	  }
	  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return arrayLikeToArray(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	  }
	  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	  function _toConsumableArray(arr) {
	    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	  }
	  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(toConsumableArray);

	var arrayWithHoles = createCommonjsModule(function (module) {
	  function _arrayWithHoles(arr) {
	    if (Array.isArray(arr)) return arr;
	  }
	  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(arrayWithHoles);

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	  function _iterableToArrayLimit(arr, i) {
	    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	    if (null != _i) {
	      var _s,
	        _e,
	        _x,
	        _r,
	        _arr = [],
	        _n = !0,
	        _d = !1;
	      try {
	        if (_x = (_i = _i.call(arr)).next, 0 === i) {
	          if (Object(_i) !== _i) return;
	          _n = !1;
	        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	      } catch (err) {
	        _d = !0, _e = err;
	      } finally {
	        try {
	          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
	        } finally {
	          if (_d) throw _e;
	        }
	      }
	      return _arr;
	    }
	  }
	  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(iterableToArrayLimit);

	var nonIterableRest = createCommonjsModule(function (module) {
	  function _nonIterableRest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(nonIterableRest);

	var slicedToArray = createCommonjsModule(function (module) {
	  function _slicedToArray(arr, i) {
	    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	  }
	  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(slicedToArray);

	var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
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
	  module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(objectWithoutPropertiesLoose);

	var objectWithoutProperties = createCommonjsModule(function (module) {
	  function _objectWithoutProperties(source, excluded) {
	    if (source == null) return {};
	    var target = objectWithoutPropertiesLoose(source, excluded);
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
	  module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(objectWithoutProperties);

	var taggedTemplateLiteral = createCommonjsModule(function (module) {
	  function _taggedTemplateLiteral(strings, raw) {
	    if (!raw) {
	      raw = strings.slice(0);
	    }
	    return Object.freeze(Object.defineProperties(strings, {
	      raw: {
	        value: Object.freeze(raw)
	      }
	    }));
	  }
	  module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(taggedTemplateLiteral);

	var CreatableSelect = /*#__PURE__*/react_14(function (props, ref) {
	  var creatableProps = useStateManager(props);
	  var selectProps = useCreatable(creatableProps);
	  return /*#__PURE__*/react_11(Select, _extends({
	    ref: ref
	  }, selectProps));
	});
	var CreatableSelect$1 = CreatableSelect;

	var members = ["A man is walking in the street.", "The dog is running in the park.", "The cat is sitting on the table.", "The computer is sitting on the table.", "The woman is brushing her teeth.", "A man is smiling at a stuffed lion.", "A man in a blue shirt is standing on a ladder cleaning a window.", "A little girl climbing into a wooden playhouse.", "Boys dancing on poles in the middle of the night.", "A man in a neon green and orange uniform is driving on a green tractor.", "We had a delicious dinner at the new restaurant.", "He enjoys playing soccer in his free time.", "My daughter is sleeping in her room."];
	function Input(props) {
	  react_31();
	  props.id;
	    var width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y;
	    props.fill;
	    props.rx;
	    props.ry;
	    var isBlurred = props.isBlurred,
	    selectionCallback = props.selectionCallback;
	  var _useState = react_32(members[0]),
	    _useState2 = _slicedToArray$1(_useState, 2);
	    _useState2[0];
	    var setSelectedOption = _useState2[1];
	  var handleChange = function handleChange(selected) {
	    setSelectedOption(selected);
	    selectionCallback(selected);
	  };
	  var options = members.map(function (member) {
	    return {
	      value: member,
	      label: member
	    };
	  });
	  var styles = {
	    container: function container() {
	      return {
	        position: "absolute",
	        width: "".concat(width, "%"),
	        height: "".concat(height, "%"),
	        left: "".concat(x - width / 2, "%"),
	        top: "".concat(y - height / 4, "%"),
	        boxSizing: "border-box",
	        fontSize: "14px",
	        filter: isBlurred ? "blur(5px)" : "none",
	        zIndex: 0
	      };
	    },
	    menu: function menu() {
	      return {
	        position: "relative",
	        maxHeight: "".concat(height, "%"),
	        backgroundColor: "white"
	      };
	    }
	  };
	  return /*#__PURE__*/react.createElement(CreatableSelect$1, {
	    styles: styles,
	    isDisabled: isBlurred,
	    options: options,
	    onChange: handleChange,
	    menuPortalTarget: document.body,
	    menuPosition: 'fixed',
	    formatOptionLabel: function formatOptionLabel(option) {
	      return /*#__PURE__*/react.createElement("div", {
	        style: {
	          whiteSpace: 'normal'
	        }
	      }, option.label);
	    },
	    placeholder: "Type or select a sentence"
	  });
	}

	var x_gap = 20;

	// Baseline
	var baseline_x = 50;

	// Text Embedding Info
	var text_width = 17;
	var text_height = 40;

	// Token Info
	var token_width = 13;
	var token_height = 85;

	// Position info
	var position_width = 17;
	var position_height = 40;

	// Element Addition Infor
	var add_x = baseline_x + text_width / 2 + x_gap;
	function OutputEmbedding(props) {
	  var ref = react_31();
	  var _React$useState = react.useState(null),
	    _React$useState2 = _slicedToArray$1(_React$useState, 2),
	    activeComp = _React$useState2[0],
	    setActiveComp = _React$useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill;
	    props.rx;
	    props.ry;
	    var onClick = props.onClick,
	    isBlurred = props.isBlurred,
	    active = props.active;
	  var tokenizerProps = null;
	  var embeddingProps = null;
	  var positionProps = null;
	  var arrowPoints = {};
	  var leftDatum = x - width / 2;
	  var rightbase = x + width / 2;
	  var topbase = y - height / 2;
	  var thisProps = _objectSpread2$1({}, props);
	  thisProps.text = "Output Embedding";
	  thisProps.wrapText = false;
	  thisProps.showText = !active;
	  thisProps.onClick = active ? function () {} : onClick;
	  thisProps.transform = "rotate(90, ".concat(x, ", ").concat(y, ")");
	  thisProps.textProps = {
	    "textAnchor": "middle",
	    "alignmentBaseline": "middle",
	    "fontSize": "3px",
	    "fill": "white",
	    "opacity": isBlurred ? 0.2 : 1,
	    "filter": isBlurred ? "blur(5px)" : "none"
	  };
	  function setComps(id) {
	    if (activeComp === id) {
	      setActiveComp(null); // hide annotation if the same component is clicked
	    } else {
	      setActiveComp(id); // show annotation if another component is clicked
	    }
	  }

	  function closeComps() {
	    setActiveComp(null);
	    onClick();
	  }
	  if (active) {
	    tokenizerProps = {
	      id: "".concat(id, "-1"),
	      width: token_width * width / 100,
	      height: token_height * height / 100,
	      x: leftDatum + (token_width + x_gap) * width / 200,
	      y: y,
	      fill: 'white',
	      text: 'Target Tokenizer',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: false,
	      showText: true,
	      transform: "rotate(90, ".concat(leftDatum + (token_width + x_gap) * width / 200, ", ").concat(y, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/target_tokenizer.jpg",
	        x: rightbase + 10,
	        y: 0,
	        width: "75",
	        height: "75"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-1"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-1"));
	      },
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    embeddingProps = {
	      id: "".concat(id, "-2"),
	      width: text_width * width / 100,
	      height: text_height * height / 100,
	      x: x,
	      y: y - height / 4,
	      fill: 'white',
	      text: 'Text Embedding',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      onClick: function onClick() {
	        setComps("".concat(id, "-2"));
	      },
	      transform: "rotate(90, ".concat(x, ", ").concat(y - height / 4, ")"),
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/target_text_embedding.jpg",
	        x: rightbase + 10,
	        y: 0,
	        width: "75",
	        height: "75"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-2"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    positionProps = {
	      id: "".concat(id, "-3"),
	      width: position_width * width / 100,
	      height: position_height * height / 100,
	      x: x,
	      y: y + height / 4,
	      fill: 'white',
	      text: 'Position Embedding',
	      rx: props.rx,
	      ry: props.ry,
	      wrapText: true,
	      showText: true,
	      transform: "rotate(90, ".concat(x, ", ").concat(y + height / 4, ")"),
	      onClick: function onClick() {
	        setComps("".concat(id, "-3"));
	      },
	      annotation: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
	        x: rightbase + 10,
	        y: 0,
	        width: "125",
	        height: "100",
	        fill: "white"
	      }), /*#__PURE__*/react.createElement("image", {
	        href: "./assets/target_position_embedding.jpg",
	        x: rightbase + 10,
	        y: 0,
	        width: "100",
	        height: "100"
	      })),
	      showAnnotation: activeComp === "".concat(id, "-3"),
	      textProps: {
	        "textAnchor": "middle",
	        "alignmentBaseline": "middle",
	        "fontSize": "3px",
	        "fill": fill,
	        "transform": "rotate(-90, ".concat(leftDatum + token_width * width / 200, ", ").concat(topbase + token_height * height / 200, ")"),
	        "opacity": isBlurred ? 0.2 : 1,
	        "filter": isBlurred ? "blur(5px)" : "none"
	      }
	    };
	    arrowPoints['in-token'] = [[leftDatum - x_gap / 4, y], [tokenizerProps.x - tokenizerProps.width / 2, y]];
	    arrowPoints['token-text'] = [[tokenizerProps.x + tokenizerProps.width / 2, y], [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4 - tokenizerProps.width / 4), y], [embeddingProps.x / 2 + tokenizerProps.x / 2 - (embeddingProps.width / 4 - tokenizerProps.width / 4), embeddingProps.y], [embeddingProps.x - embeddingProps.width / 2, embeddingProps.y]];
	    arrowPoints['token-position'] = [[tokenizerProps.x + tokenizerProps.width / 2, y], [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4 - tokenizerProps.width / 4), y], [positionProps.x / 2 + tokenizerProps.x / 2 - (positionProps.width / 4 - tokenizerProps.width / 4), positionProps.y], [positionProps.x - positionProps.width / 2, positionProps.y]];
	    arrowPoints['text-add'] = [[embeddingProps.x + embeddingProps.width / 2, embeddingProps.y], [leftDatum + add_x * width / 100, embeddingProps.y], [leftDatum + add_x * width / 100, y - 3]];
	    arrowPoints['position-add'] = [[positionProps.x + positionProps.width / 2, positionProps.y], [leftDatum + add_x * width / 100, positionProps.y], [leftDatum + add_x * width / 100, y + 3]];
	    arrowPoints['addOut'] = [[leftDatum + add_x * width / 100 + 3, y], [rightbase + x_gap / 4, y]];
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    id: id,
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement(LinearLayer, thisProps), active && /*#__PURE__*/react.createElement(LinearLayer, tokenizerProps), active && /*#__PURE__*/react.createElement(LinearLayer, embeddingProps), active && /*#__PURE__*/react.createElement(LinearLayer, positionProps), active && /*#__PURE__*/react.createElement("svg", {
	    id: "1-4",
	    x: leftDatum + add_x * width / 100 - 3,
	    y: y - 3,
	    onClick: function onClick() {
	      return setComps("".concat(id, "-4"));
	    },
	    ref: ref,
	    fill: "#ffffff",
	    version: "1.1"
	  }, /*#__PURE__*/react.createElement("circle", {
	    cx: 3,
	    cy: 3,
	    r: 3,
	    fill: fill
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "scale(0.012 0.012)"
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z",
	    stroke: "#ffffff"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z",
	    stroke: "#ffffff"
	  }))), activeComp === "".concat(id, "-4") && /*#__PURE__*/react.createElement("image", {
	    href: "./assets/element_wise_add_input_embed.jpg",
	    x: rightbase + 10,
	    y: 0,
	    width: "75",
	    height: "50"
	  }), active && /*#__PURE__*/react.createElement(Minimize, {
	    width: 4.5,
	    height: 4.5,
	    x: rightbase - 7,
	    y: topbase + 2,
	    onClick: closeComps,
	    fill: fill
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'in-token',
	    points: arrowPoints['in-token']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'token-text',
	    points: arrowPoints['token-text']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'token-position',
	    points: arrowPoints['token-position']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'text-add',
	    points: arrowPoints['text-add']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'position-add',
	    points: arrowPoints['position-add']
	  }), active && /*#__PURE__*/react.createElement(Arrow, {
	    id: 'addOut',
	    points: arrowPoints['addOut']
	  }));
	}

	function Output(props) {
	  var ref = react_31();
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill,
	    rx = props.rx,
	    ry = props.ry;
	    props.onClick;
	    var isBlurred = props.isBlurred,
	    text = props.text;
	  react_24(function () {
	    var div = ref.current;
	    var outputText = text === null ? " " : text.join(" ");
	    div.style.width = "".concat(width, "%");
	    div.style.height = "".concat(height, "%");
	    div.style.left = "".concat(x - width / 2, "%");
	    div.style.top = "".concat(y - height / 2, "%");
	    div.style.backgroundColor = fill;
	    div.style.borderRadius = "20px";
	    div.style.opacity = isBlurred ? 0.5 : 1;
	    div.style.filter = isBlurred ? "blur(5px)" : "none";
	    div.textContent = outputText;
	  }, [id, width, height, x, y, fill, rx, ry, isBlurred, text]);
	  return /*#__PURE__*/react.createElement("div", {
	    ref: ref,
	    id: id,
	    style: {
	      cursor: 'pointer',
	      position: 'absolute',
	      color: 'white',
	      fontSize: '14px',
	      display: 'flex',
	      lineHeight: '1.5',
	      fontFamily: 'Verdana, Geneva, sans-serif',
	      justifyContent: 'center',
	      alignItems: 'center',
	      padding: '20px'
	    }
	  });
	}

	function TargetInput(props) {
	  var ref = react_31();
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    y = props.y,
	    fill = props.fill,
	    rx = props.rx,
	    ry = props.ry;
	    props.onClick;
	    var isBlurred = props.isBlurred,
	    text = props.text;
	  react_24(function () {
	    var div = ref.current;
	    var trgText = text === null ? " " : text.join(" ");
	    div.style.width = "".concat(width, "%");
	    // div.style.height = `${height}%`;
	    div.style.left = "".concat(x - width / 2, "%");
	    div.style.top = "".concat(y - height / 2, "%");
	    div.style.backgroundColor = fill;
	    div.style.borderRadius = "20px";
	    div.style.opacity = isBlurred ? 0.5 : 1;
	    div.style.filter = isBlurred ? "blur(5px)" : "none";
	    div.textContent = trgText;
	  }, [id, width, height, x, y, fill, rx, ry, isBlurred, text]);
	  return /*#__PURE__*/react.createElement("div", {
	    ref: ref,
	    id: id,
	    style: {
	      cursor: 'pointer',
	      position: 'absolute',
	      color: 'white',
	      fontSize: '14px',
	      display: 'flex',
	      lineHeight: '1.5',
	      fontFamily: 'Verdana, Geneva, sans-serif',
	      justifyContent: 'center',
	      alignItems: 'center',
	      padding: '10px'
	    }
	  });
	}

	function Controller(props) {
	  var _useState = react_32(0),
	    _useState2 = _slicedToArray$1(_useState, 2),
	    counter = _useState2[0],
	    setCounter = _useState2[1];
	  var id = props.id,
	    width = props.width,
	    height = props.height,
	    x = props.x,
	    fill = props.fill,
	    isBlurred = props.isBlurred,
	    text = props.text,
	    counterCallBack = props.counterCallBack;
	  var ref = react_31();
	  select(ref.current);
	  var x_rewind = x - width / 2;
	  var x_forward = x_rewind + width / 3;
	  var x_reset = x_forward + width / 3;
	  var targetLength = typeof text === 'undefined' ? 0 : text.length;
	  react_24(function () {
	    targetLength = typeof text === 'undefined' ? 0 : text.length;
	  }, [text]);
	  function updateCounter(counter) {
	    if (isBlurred) return;
	    setCounter(counter);
	    counterCallBack(counter);
	  }
	  return /*#__PURE__*/react.createElement("svg", {
	    ref: ref,
	    id: id,
	    style: {
	      "filter": isBlurred ? "blur(5px)" : "none"
	    }
	  }, /*#__PURE__*/react.createElement("svg", {
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg",
	    onClick: function onClick() {
	      return updateCounter(Math.max(counter - 1, 1));
	    },
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement("g", {
	    transform: "translate(".concat(x_rewind, ", ", 10, ") scale(0.33 0.33)")
	  }, /*#__PURE__*/react.createElement("rect", {
	    width: width,
	    height: 3 * height,
	    fill: "transparent"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M11 8.07141L7.77844 10.3725C6.66174 11.1702 6.66174 12.8298 7.77844 13.6274L11 15.9286M16.5 15.0568V8.94317C16.5 8.1298 15.5806 7.65667 14.9188 8.12944L10.6392 11.1862C10.0809 11.5851 10.0809 12.4149 10.6392 12.8137L14.9188 15.8705C15.5806 16.3433 16.5 15.8702 16.5 15.0568Z",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }))), /*#__PURE__*/react.createElement("svg", {
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg",
	    onClick: function onClick() {
	      return updateCounter(Math.min(counter + 1, targetLength));
	    },
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement("g", {
	    transform: "translate(".concat(x_forward, ", ", 10, ") scale(0.33 0.33)")
	  }, /*#__PURE__*/react.createElement("rect", {
	    width: width,
	    height: 3 * height,
	    fill: "transparent"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M13 8.07141L16.2215 10.3725C17.3382 11.1702 17.3382 12.8298 16.2215 13.6274L13 15.9286M7.5 15.0568V8.94317C7.5 8.1298 8.41937 7.65667 9.08124 8.12944L13.3608 11.1862C13.9191 11.5851 13.9191 12.4149 13.3608 12.8137L9.08124 15.8705C8.41937 16.3433 7.5 15.8702 7.5 15.0568Z",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/react.createElement("path", {
	    d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }))), /*#__PURE__*/react.createElement("svg", {
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg",
	    onClick: function onClick() {
	      return updateCounter(1);
	    },
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/react.createElement("g", {
	    transform: "translate(".concat(x_reset, ", ", 10, ") scale(0.33 0.33)")
	  }, /*#__PURE__*/react.createElement("rect", {
	    width: width,
	    height: 3 * height,
	    fill: "transparent"
	  }), /*#__PURE__*/react.createElement("g", {
	    transform: "translate(".concat(4.5, ", ", 4.5, ") scale(0.6 0.6)")
	  }, /*#__PURE__*/react.createElement("path", {
	    d: "M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  })), /*#__PURE__*/react.createElement("path", {
	    d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7",
	    stroke: fill,
	    strokeWidth: "1.5",
	    strokeLinecap: "round"
	  }))));
	}

	var baseLayerHeight = 30;
	var baseLayerWidth = 2;
	var baseCoderHeight = 7;
	var baseCoderWidth = 4;
	var baseInputHeight = 15;
	var baseInputWidth = 15;
	var baseTrgInputHeight = 4;
	var baseTrgInputWidth = 15;
	var baseOutputHeight = 10;
	var baseOutputWidth = 12;
	var controllerWidth = 6;
	var controllerHeight = 10;
	var y_gap = 5;
	var coder_x_gap = 5;
	var emb_x_gap = 2;
	var out_x_gap = 2;
	var widthExpansion = [0, 10, 15, 15, 15, 10, 22.5, 22.5, 22.5, 7, 0, 0, 0];
	var heightExpansion = [0, 15, 30, 30, 30, 15, 30, 30, 30, 15, 0, 0, 0];
	var targetPlaceHolderText = ["Target", "sentence", "will", "appear", "here", "..."];
	var translationPlaceHolderText = ["Translation", "will", "appear", "here", "..."];
	var outputPlaceHolderText = ["Translation", "will", "appear", "here", "..."];
	var api_url = "http://35.183.0.159:8080/one-predict";
	var api_options = {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: null
	};
	var first_run = true;
	var Architecture = /*#__PURE__*/function (_React$Component) {
	  _inherits$1(Architecture, _React$Component);
	  var _super = _createSuper$1(Architecture);
	  function Architecture(props) {
	    var _this;
	    _classCallCheck$1(this, Architecture);
	    _this = _super.call(this, props);
	    _this.state = {
	      vBoxSize: ['400', '120'],
	      first_run: true,
	      activeElement: -1,
	      widths: [baseInputWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseOutputWidth, baseTrgInputWidth, controllerWidth],
	      heights: [baseInputHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseOutputHeight, baseTrgInputHeight, controllerHeight],
	      coords: [new Array(12).fill(0), new Array(12).fill(0)],
	      views: new Array(12).fill(0),
	      baseline: [50, 50],
	      points: null,
	      selectedText: null,
	      targetText: targetPlaceHolderText,
	      outputText: translationPlaceHolderText,
	      translation: outputPlaceHolderText,
	      counter: 0
	    };
	    _this.fixedProps = {
	      color: '#053061',
	      y_gap: 18,
	      coder_x_gap: 5,
	      r: ['3px', '3px'],
	      out_x_gap: 2,
	      emb_x_gap: 2,
	      headSize: 3
	    };
	    _this.expandView = _this.expandView.bind(_assertThisInitialized$1(_this));
	    _this.resetState = _this.resetState.bind(_assertThisInitialized$1(_this));
	    _this.computeCoords = _this.computeCoords.bind(_assertThisInitialized$1(_this));
	    _this.computeArchDims = _this.computeArchDims.bind(_assertThisInitialized$1(_this));
	    _this.computeArrpoints = _this.computeArrpoints.bind(_assertThisInitialized$1(_this));
	    _this.computeProps = _this.computeProps.bind(_assertThisInitialized$1(_this));
	    _this.renderArrow = _this.renderArrow.bind(_assertThisInitialized$1(_this));
	    _this.setInput = _this.setInput.bind(_assertThisInitialized$1(_this));
	    _this.setCounter = _this.setCounter.bind(_assertThisInitialized$1(_this));
	    return _this;
	  }
	  _createClass$1(Architecture, [{
	    key: "setCounter",
	    value: function setCounter(counter) {
	      this.setState(function (prevState) {
	        if (prevState.selectedText === null) {
	          return prevState;
	        }
	        var newState = _objectSpread2$1({}, prevState);
	        newState.counter = counter;
	        newState.outputText = prevState.translation.slice(0, counter + 1);
	        newState.targetText = prevState.translation.slice(0, counter);
	        return newState;
	      });
	    }
	  }, {
	    key: "setInput",
	    value: function setInput(input) {
	      var _this2 = this;
	      api_options.body = JSON.stringify({
	        sentence: input.label
	      });
	      fetch(api_url, api_options).then(function (response) {
	        if (!response.ok) {
	          throw new Error("HTTP error! status: ".concat(response.status));
	        }
	        return response.json(); // This returns a promise
	      }).then(function (data) {
	        _this2.setState(function (prevState) {
	          var newState = _objectSpread2$1({}, prevState);
	          newState.translation = ["<sos>"].concat(_toConsumableArray$1(data.translation)); // set data from API to state
	          newState.selectedText = input.label;
	          return newState;
	        });
	      })["catch"](function (error) {
	        console.error('There has been a problem with your fetch operation:', error);
	      });
	    }
	  }, {
	    key: "resetState",
	    value: function resetState(state) {
	      state.views = new Array(11).fill(0);
	      state.embeddingViews = 0;
	      state.outputView = 0;
	      state.activeElement = -1;
	      state.widths = [baseInputWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseCoderWidth, baseCoderWidth, baseCoderWidth, baseLayerWidth, baseOutputWidth, baseTrgInputWidth, controllerWidth];
	      state.heights = [baseInputHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseCoderHeight, baseCoderHeight, baseCoderHeight, baseLayerHeight, baseOutputHeight, baseTrgInputHeight, controllerHeight];
	      state.baseline = [50, 50];
	    }
	  }, {
	    key: "computeProps",
	    value: function computeProps(index) {
	      var _this3 = this;
	      var props = {
	        'id': index,
	        'width': this.state.widths[index],
	        'height': this.state.heights[index],
	        'x': this.state.coords[0][index],
	        'y': this.state.coords[1][index],
	        'fill': this.fixedProps.color,
	        'rx': this.fixedProps.r[0],
	        'ry': this.fixedProps.r[1],
	        'isBlurred': this.state.activeElement !== -1 && this.state.activeElement !== index,
	        'active': this.state.activeElement === index
	      };
	      if (index === 0) {
	        props.selectionCallback = this.setInput;
	      }
	      if (index !== 0 && index !== 10 && index !== 11) {
	        props.width = props.width * this.state.vBoxSize[0] / 100;
	        props.height = props.height * this.state.vBoxSize[1] / 100;
	        props.x = props.x * this.state.vBoxSize[0] / 100;
	        props.y = props.y * this.state.vBoxSize[1] / 100;
	        props.onClick = function () {
	          return _this3.expandView(index);
	        };
	      }
	      if (index === 10) {
	        props.text = this.state.outputText;
	      }
	      if (index === 11) {
	        props.text = this.state.targetText;
	      }
	      if (index === 12) {
	        var _this$state$translati = _toArray(this.state.translation);
	          _this$state$translati[0];
	          var rest = _this$state$translati.slice(1);
	        props.text = rest;
	        props.counterCallBack = this.setCounter;
	      }
	      return props;
	    }
	  }, {
	    key: "computeArchDims",
	    value: function computeArchDims() {
	      var encoderHeightMax = Math.max.apply(Math, _toConsumableArray$1(this.state.coderHeights.slice(0, 3)));
	      var decoderHeightMax = Math.max.apply(Math, _toConsumableArray$1(this.state.coderHeights.slice(3, 6)));
	      var overallHeight = Math.max(encoderHeightMax, this.state.layerHeights[0]) / 2 + this.fixedProps.y_gap;
	      overallHeight += Math.max(decoderHeightMax, this.state.layerHeights[1]) / 2 + this.fixedProps.y_gap;
	      var encoderWidth = this.state.coderWidths.slice(0, 3).reduce(function (a, b) {
	        return a + b;
	      }, 0) + 2 * this.fixedProps.coder_x_gap;
	      var decoderWidth = this.state.coderWidths.slice(3, 6).reduce(function (a, b) {
	        return a + b;
	      }, 0) + 2 * this.fixedProps.coder_x_gap;
	      var layerWidth = this.state.layerWidths.reduce(function (a, b) {
	        return a + b;
	      }, 0) + this.fixedProps.emb_x_gap + this.fixedProps.out_x_gap;
	      var overallWidth = Math.max(encoderWidth, decoderWidth) + layerWidth;
	      return {
	        'width': overallWidth,
	        'height': overallHeight
	      };
	    }
	  }, {
	    key: "computeCoords",
	    value: function computeCoords(state) {
	      var _state$baseline = _slicedToArray$1(state.baseline, 2),
	        baselinex = _state$baseline[0],
	        baseliney = _state$baseline[1];
	      var base_top = Math.max.apply(Math, _toConsumableArray$1(state.heights.slice(0, 5)));
	      var base_bottom = Math.max.apply(Math, _toConsumableArray$1(state.heights.slice(6, 11)));
	      if (state.activeElement !== -1) {
	        //   If the element active element index is 0, 1, 2, 3, 4 => y offset is positive
	        if (state.activeElement < 5) {
	          baseliney += heightExpansion[state.activeElement] / 2;
	          // if active element index is 0, 1, 2 => x offset is positive by half of the elements width expansion
	          if (state.activeElement < 3) {
	            baselinex += widthExpansion[state.activeElement] / 2;
	          }
	          // if active element index is 4 => x offset is negative
	          else if (state.activeElement === 4) {
	            baselinex -= widthExpansion[state.activeElement] / 2;
	          }
	        } else {
	          // If the element active element index is 5, 6, 7, 8, 9 => y offset is negative
	          baseliney -= heightExpansion[state.activeElement] / 2;
	          // if active element index is 5, 6 => x offset is positive
	          if (state.activeElement < 7) {
	            baselinex += widthExpansion[state.activeElement] / 2;
	          }
	          // if active element index is 8, 9, 10 => x offset is negative
	          else if (state.activeElement > 7) {
	            baselinex -= widthExpansion[state.activeElement] / 2;
	          }
	        }
	      }

	      // Compute all the coordinates
	      // Encoder 1 Coordinates - set as the baseline
	      var x3 = baselinex;
	      var y3 = baseliney - base_top / 2 - y_gap / 2;

	      // Encoder 2 Coordinates
	      var x4 = x3 + state.widths[4] / 2 + state.widths[3] / 2 + coder_x_gap;
	      var y4 = y3;

	      // Encoder 0 Coordinates
	      var x2 = x3 - state.widths[2] / 2 - state.widths[3] / 2 - coder_x_gap;
	      var y2 = y3;

	      // Input Embedding Coordinates
	      var x1 = x2 - state.widths[1] / 2 - state.widths[2] / 2 - emb_x_gap;
	      var y1 = y2;

	      // Input Coordinates
	      var x0 = x1 - state.widths[0] / 2 - state.widths[1] / 2 - coder_x_gap;
	      var y0 = y1;

	      // Decoder 1 Coordinates
	      var x7 = x3;
	      var y7 = y3 + (base_top + base_bottom) / 2 + y_gap;

	      // Decoder 2 Coordinates
	      var x8 = x7 + state.widths[7] / 2 + state.widths[8] / 2 + coder_x_gap;
	      var y8 = y7;

	      // Decoder 0 Coordinates
	      var x6 = x7 - state.widths[6] / 2 - state.widths[7] / 2 - coder_x_gap;
	      var y6 = y7;

	      // Output Embedding Coordinates
	      var x5 = x6 - state.widths[5] / 2 - state.widths[6] / 2 - emb_x_gap;
	      var y5 = y6;

	      // Target Input Coordinates
	      var x11 = x5 - state.widths[11] / 2 - state.widths[5] / 2 - coder_x_gap;
	      var y11 = y5;

	      // Output Layer Coordinates
	      var x9 = x8 + state.widths[8] / 2 + state.widths[9] / 2 + emb_x_gap;
	      var y9 = y8;

	      // Output Coordinates
	      var x10 = x9 + state.widths[9] / 2 + state.widths[10] / 2 + out_x_gap;
	      var y10 = y9;

	      // Controller Coordinates
	      var x12 = 100 - state.widths[12] / 2 - 20;
	      var y12 = 0;
	      // Update coords
	      state.coords = [[x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12], [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9, y9, y10, y11, y12]];

	      // return {'x' : [x2, x3, x4], 'y' : [y0, y1], 'layer_x' : [layer_x0, layer_x1]}
	    }
	  }, {
	    key: "computeArrpoints",
	    value: function computeArrpoints(state) {
	      var _this4 = this;
	      if (state.points === null) {
	        state.points = {};
	      }
	      var _state$coords$0$map = state.coords[0].map(function (x) {
	          return x * _this4.state.vBoxSize[0] / 100;
	        }),
	        _state$coords$0$map2 = _slicedToArray$1(_state$coords$0$map, 13),
	        x0 = _state$coords$0$map2[0],
	        x1 = _state$coords$0$map2[1],
	        x2 = _state$coords$0$map2[2],
	        x3 = _state$coords$0$map2[3],
	        x4 = _state$coords$0$map2[4],
	        x5 = _state$coords$0$map2[5],
	        x6 = _state$coords$0$map2[6],
	        x7 = _state$coords$0$map2[7],
	        x8 = _state$coords$0$map2[8],
	        x9 = _state$coords$0$map2[9],
	        x10 = _state$coords$0$map2[10],
	        x11 = _state$coords$0$map2[11];
	        _state$coords$0$map2[12];
	      var _state$coords$1$map = state.coords[1].map(function (x) {
	          return x * _this4.state.vBoxSize[1] / 100;
	        }),
	        _state$coords$1$map2 = _slicedToArray$1(_state$coords$1$map, 13),
	        y0 = _state$coords$1$map2[0],
	        y1 = _state$coords$1$map2[1],
	        y2 = _state$coords$1$map2[2],
	        y3 = _state$coords$1$map2[3],
	        y4 = _state$coords$1$map2[4],
	        y5 = _state$coords$1$map2[5],
	        y6 = _state$coords$1$map2[6],
	        y7 = _state$coords$1$map2[7],
	        y8 = _state$coords$1$map2[8],
	        y9 = _state$coords$1$map2[9];
	        _state$coords$1$map2[10];
	        var y11 = _state$coords$1$map2[11];
	        _state$coords$1$map2[12];
	      var _state$widths$map = state.widths.map(function (x) {
	          return x * _this4.state.vBoxSize[0] / 100;
	        }),
	        _state$widths$map2 = _slicedToArray$1(_state$widths$map, 13),
	        w0 = _state$widths$map2[0],
	        w1 = _state$widths$map2[1],
	        w2 = _state$widths$map2[2],
	        w3 = _state$widths$map2[3],
	        w4 = _state$widths$map2[4],
	        w5 = _state$widths$map2[5],
	        w6 = _state$widths$map2[6],
	        w7 = _state$widths$map2[7],
	        w8 = _state$widths$map2[8],
	        w9 = _state$widths$map2[9],
	        w10 = _state$widths$map2[10],
	        w11 = _state$widths$map2[11];
	        _state$widths$map2[12];
	      var _state$heights$map = state.heights.map(function (x) {
	          return x * _this4.state.vBoxSize[1] / 100;
	        }),
	        _state$heights$map2 = _slicedToArray$1(_state$heights$map, 13);
	        _state$heights$map2[0];
	        _state$heights$map2[1];
	        _state$heights$map2[2];
	        _state$heights$map2[3];
	        _state$heights$map2[4];
	        _state$heights$map2[5];
	        var h6 = _state$heights$map2[6],
	        h7 = _state$heights$map2[7],
	        h8 = _state$heights$map2[8];
	        _state$heights$map2[9];
	        _state$heights$map2[10];
	        _state$heights$map2[11];
	        _state$heights$map2[12];
	      var og = out_x_gap * this.state.vBoxSize[0] / 100;
	      var lo_line = Math.max.apply(Math, _toConsumableArray$1(state.heights.slice(6, 10))) * this.state.vBoxSize[1] / 100;

	      // Input to input embedding (0 -> 1)
	      state.points['0-1'] = [[x0 + w0 / 2, y0], [x1 - w1 / 2, y1]];

	      // Input embedding to encoder 0 (1 -> 2)
	      state.points['1-2'] = [[x1 + w1 / 2, y1], [x2 - w2 / 2, y2]];

	      // Encoder 0 to encoder 1 (2 -> 3)
	      state.points['2-3'] = [[x2 + w2 / 2, y2], [x3 - w3 / 2, y3]];

	      // Encoder 1 to encoder 2 (3 -> 4)
	      state.points['3-4'] = [[x3 + w3 / 2, y3], [x4 - w4 / 2, y4]];

	      // Encoder 2 to decoder 0 (4 -> 6)
	      state.points['4-6'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y6) / 2], [x6, (y4 + y6) / 2], [x6, y6 - h6 / 2]];

	      // Encoder 2 to decoder 1 (4 -> 7)
	      state.points['4-7'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y7) / 2], [x7, (y4 + y7) / 2], [x7, y7 - h7 / 2]];

	      // Encoder 2 to decoder 2 (4 -> 8)

	      state.points['4-8'] = [[x4 + w4 / 2, y4], [x4 + w4 / 2 + 3, y4], [x4 + w4 / 2 + 3, (y4 + y8) / 2], [x8, (y4 + y8) / 2], [x8, y8 - h8 / 2]];

	      // Output embedding to decoder 0 (5 -> 6)
	      state.points['5-6'] = [[x5 + w5 / 2, y5], [x6 - w6 / 2, y6]];

	      // Decoder 0 to decoder 1 (6 -> 7)
	      state.points['6-7'] = [[x6 + w6 / 2, y6], [x7 - w7 / 2, y7]];

	      // Decoder 1 to decoder 2 (7 -> 8)
	      state.points['7-8'] = [[x7 + w7 / 2, y7], [x8 - w8 / 2, y8]];

	      // Decoder 2 to output layer (8 -> 9)
	      state.points['8-9'] = [[x8 + w8 / 2, y8], [x9 - w9 / 2, y9]];

	      // Output layer to output (9 -> 10)
	      state.points['9-10'] = [[x9 + w9 / 2, y9], [x10 - w10 / 2, y9]];

	      // Middle of output layer - output to output embedding
	      state.points['9-5'] = [[x9 + w9 / 2 + og / 2, y9], [x9 + w9 / 2 + og / 2, y9 + lo_line / 2 + 5], [x5 - w5 / 2 - 5, y9 + lo_line / 2 + 5], [x5 - w5 / 2 - 5, y9], [x5 - w5 / 2, y9]];
	      state.points['11-5'] = [[x11 + w11 / 2, y11], [x5 - w5 / 2, y11]];
	    }
	  }, {
	    key: "expandView",
	    value: function expandView(index) {
	      var _this5 = this;
	      // console.log(index)
	      this.setState(function (prevState) {
	        var newState = _objectSpread2$1({}, prevState);
	        _this5.resetState(newState);
	        if (prevState.views[index] === 0) {
	          newState.widths[index] = newState.widths[index] + widthExpansion[index];
	          newState.heights[index] = newState.heights[index] + heightExpansion[index];
	          newState.views[index] = 1;
	          newState.activeElement = index;
	        }
	        _this5.computeCoords(newState);
	        _this5.computeArrpoints(newState);
	        return newState;
	      });
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this6 = this;
	      if (first_run) {
	        this.setState(function (prevState) {
	          var newState = _objectSpread2$1({}, prevState);
	          _this6.computeCoords(newState);
	          _this6.computeArrpoints(newState);
	          return newState;
	        });
	      }
	      first_run = false;
	    }
	  }, {
	    key: "renderArrow",
	    value: function renderArrow(key) {
	      return this.state.activeElement === -1 && /*#__PURE__*/react.createElement(Arrow, {
	        id: key,
	        points: this.state.points[key]
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var render_arrows = this.state.points !== null;
	      // console.log(this.state.activeElement)
	      return /*#__PURE__*/react.createElement("div", {
	        className: "d3-component",
	        style: {
	          position: 'relative',
	          display: 'flex',
	          justifyContent: 'space-evenly',
	          width: '100%'
	        }
	      }, /*#__PURE__*/react.createElement("svg", {
	        viewBox: "0 0 " + this.state.vBoxSize[0] + " " + this.state.vBoxSize[1],
	        width: "100%",
	        style: {
	          filter: this.state.activeElement !== -1 ? "url(#blurMe)" : "none"
	        }
	      }, /*#__PURE__*/react.createElement(InputEmbedding, this.computeProps(1)), /*#__PURE__*/react.createElement(Encoder, this.computeProps(2)), /*#__PURE__*/react.createElement(Encoder, this.computeProps(3)), /*#__PURE__*/react.createElement(Encoder, this.computeProps(4)), /*#__PURE__*/react.createElement(OutputEmbedding, this.computeProps(5)), /*#__PURE__*/react.createElement(Decoder, this.computeProps(6)), /*#__PURE__*/react.createElement(Decoder, this.computeProps(7)), /*#__PURE__*/react.createElement(Decoder, this.computeProps(8)), /*#__PURE__*/react.createElement(OutputLayer, this.computeProps(9)), /*#__PURE__*/react.createElement(Controller, this.computeProps(12)), "// Define Arrows if points are not null", render_arrows && this.renderArrow('0-1'), render_arrows && this.renderArrow('1-2'), render_arrows && this.renderArrow('2-3'), render_arrows && this.renderArrow('3-4'), render_arrows && this.renderArrow('4-6'), render_arrows && this.renderArrow('4-7'), render_arrows && this.renderArrow('4-8'), render_arrows && this.renderArrow('5-6'), render_arrows && this.renderArrow('6-7'), render_arrows && this.renderArrow('7-8'), render_arrows && this.renderArrow('8-9'), render_arrows && this.renderArrow('9-10'), render_arrows && this.renderArrow('11-5')), this.state.activeElement === -1 && /*#__PURE__*/react.createElement(Input, this.computeProps(0)), /*#__PURE__*/react.createElement(Output, this.computeProps(10)), /*#__PURE__*/react.createElement(TargetInput, this.computeProps(11)));
	    }
	  }]);
	  return Architecture;
	}(react.Component);

	var root = client.createRoot(document.getElementById('arch'));
	root.render( /*#__PURE__*/react.createElement(Architecture, {
	  renderElem: "root"
	}) // Arrow Properties
	);

})();
