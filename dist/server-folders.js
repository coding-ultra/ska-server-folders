var T0 = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function eh() {
  if (Im) return an;
  Im = 1;
  var O = Symbol.for("react.transitional.element"), gl = Symbol.for("react.fragment");
  function V(g, fl, El) {
    var jl = null;
    if (El !== void 0 && (jl = "" + El), fl.key !== void 0 && (jl = "" + fl.key), "key" in fl) {
      El = {};
      for (var Il in fl)
        Il !== "key" && (El[Il] = fl[Il]);
    } else El = fl;
    return fl = El.ref, {
      $$typeof: O,
      type: g,
      key: jl,
      ref: fl !== void 0 ? fl : null,
      props: El
    };
  }
  return an.Fragment = gl, an.jsx = V, an.jsxs = V, an;
}
var km;
function nh() {
  return km || (km = 1, T0.exports = eh()), T0.exports;
}
var at = nh(), E0 = { exports: {} }, en = {}, z0 = { exports: {} }, b0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pm;
function fh() {
  return Pm || (Pm = 1, (function(O) {
    function gl(_, B) {
      var G = _.length;
      _.push(B);
      l: for (; 0 < G; ) {
        var yl = G - 1 >>> 1, el = _[yl];
        if (0 < fl(el, B))
          _[yl] = B, _[G] = el, G = yl;
        else break l;
      }
    }
    function V(_) {
      return _.length === 0 ? null : _[0];
    }
    function g(_) {
      if (_.length === 0) return null;
      var B = _[0], G = _.pop();
      if (G !== B) {
        _[0] = G;
        l: for (var yl = 0, el = _.length, Yt = el >>> 1; yl < Yt; ) {
          var Pt = 2 * (yl + 1) - 1, wu = _[Pt], o = Pt + 1, z = _[o];
          if (0 > fl(wu, G))
            o < el && 0 > fl(z, wu) ? (_[yl] = z, _[o] = G, yl = o) : (_[yl] = wu, _[Pt] = G, yl = Pt);
          else if (o < el && 0 > fl(z, G))
            _[yl] = z, _[o] = G, yl = o;
          else break l;
        }
      }
      return B;
    }
    function fl(_, B) {
      var G = _.sortIndex - B.sortIndex;
      return G !== 0 ? G : _.id - B.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var El = performance;
      O.unstable_now = function() {
        return El.now();
      };
    } else {
      var jl = Date, Il = jl.now();
      O.unstable_now = function() {
        return jl.now() - Il;
      };
    }
    var rl = [], Cl = [], H = 1, S = null, Y = 3, Ol = !1, kl = !1, Xl = !1, M = !1, ul = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, et = typeof setImmediate < "u" ? setImmediate : null;
    function zl(_) {
      for (var B = V(Cl); B !== null; ) {
        if (B.callback === null) g(Cl);
        else if (B.startTime <= _)
          g(Cl), B.sortIndex = B.expirationTime, gl(rl, B);
        else break;
        B = V(Cl);
      }
    }
    function Ql(_) {
      if (Xl = !1, zl(_), !kl)
        if (V(rl) !== null)
          kl = !0, $l || ($l = !0, mt());
        else {
          var B = V(Cl);
          B !== null && Hl(Ql, B.startTime - _);
        }
    }
    var $l = !1, Z = -1, I = 5, yt = -1;
    function al() {
      return M ? !0 : !(O.unstable_now() - yt < I);
    }
    function Wl() {
      if (M = !1, $l) {
        var _ = O.unstable_now();
        yt = _;
        var B = !0;
        try {
          l: {
            kl = !1, Xl && (Xl = !1, F(Z), Z = -1), Ol = !0;
            var G = Y;
            try {
              t: {
                for (zl(_), S = V(rl); S !== null && !(S.expirationTime > _ && al()); ) {
                  var yl = S.callback;
                  if (typeof yl == "function") {
                    S.callback = null, Y = S.priorityLevel;
                    var el = yl(
                      S.expirationTime <= _
                    );
                    if (_ = O.unstable_now(), typeof el == "function") {
                      S.callback = el, zl(_), B = !0;
                      break t;
                    }
                    S === V(rl) && g(rl), zl(_);
                  } else g(rl);
                  S = V(rl);
                }
                if (S !== null) B = !0;
                else {
                  var Yt = V(Cl);
                  Yt !== null && Hl(
                    Ql,
                    Yt.startTime - _
                  ), B = !1;
                }
              }
              break l;
            } finally {
              S = null, Y = G, Ol = !1;
            }
            B = void 0;
          }
        } finally {
          B ? mt() : $l = !1;
        }
      }
    }
    var mt;
    if (typeof et == "function")
      mt = function() {
        et(Wl);
      };
    else if (typeof MessageChannel < "u") {
      var gu = new MessageChannel(), Ju = gu.port2;
      gu.port1.onmessage = Wl, mt = function() {
        Ju.postMessage(null);
      };
    } else
      mt = function() {
        ul(Wl, 0);
      };
    function Hl(_, B) {
      Z = ul(function() {
        _(O.unstable_now());
      }, B);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, O.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, O.unstable_next = function(_) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = Y;
      }
      var G = Y;
      Y = B;
      try {
        return _();
      } finally {
        Y = G;
      }
    }, O.unstable_requestPaint = function() {
      M = !0;
    }, O.unstable_runWithPriority = function(_, B) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var G = Y;
      Y = _;
      try {
        return B();
      } finally {
        Y = G;
      }
    }, O.unstable_scheduleCallback = function(_, B, G) {
      var yl = O.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? yl + G : yl) : G = yl, _) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = G + el, _ = {
        id: H++,
        callback: B,
        priorityLevel: _,
        startTime: G,
        expirationTime: el,
        sortIndex: -1
      }, G > yl ? (_.sortIndex = G, gl(Cl, _), V(rl) === null && _ === V(Cl) && (Xl ? (F(Z), Z = -1) : Xl = !0, Hl(Ql, G - yl))) : (_.sortIndex = el, gl(rl, _), kl || Ol || (kl = !0, $l || ($l = !0, mt()))), _;
    }, O.unstable_shouldYield = al, O.unstable_wrapCallback = function(_) {
      var B = Y;
      return function() {
        var G = Y;
        Y = B;
        try {
          return _.apply(this, arguments);
        } finally {
          Y = G;
        }
      };
    };
  })(b0)), b0;
}
var ld;
function ih() {
  return ld || (ld = 1, z0.exports = fh()), z0.exports;
}
var _0 = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function ch() {
  if (td) return X;
  td = 1;
  var O = Symbol.for("react.transitional.element"), gl = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), El = Symbol.for("react.consumer"), jl = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), rl = Symbol.for("react.suspense"), Cl = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), Y = Symbol.for("react.view_transition"), Ol = Symbol.iterator;
  function kl(o) {
    return o === null || typeof o != "object" ? null : (o = Ol && o[Ol] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var Xl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, M = Object.assign, ul = {};
  function F(o, z, C) {
    this.props = o, this.context = z, this.refs = ul, this.updater = C || Xl;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(o, z) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, z, "setState");
  }, F.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function et() {
  }
  et.prototype = F.prototype;
  function zl(o, z, C) {
    this.props = o, this.context = z, this.refs = ul, this.updater = C || Xl;
  }
  var Ql = zl.prototype = new et();
  Ql.constructor = zl, M(Ql, F.prototype), Ql.isPureReactComponent = !0;
  var $l = Array.isArray;
  function Z() {
  }
  var I = { H: null, A: null, T: null, S: null }, yt = Object.prototype.hasOwnProperty;
  function al(o, z, C) {
    var R = C.ref;
    return {
      $$typeof: O,
      type: o,
      key: z,
      ref: R !== void 0 ? R : null,
      props: C
    };
  }
  function Wl(o, z) {
    return al(o.type, z, o.props);
  }
  function mt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === O;
  }
  function gu(o) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(C) {
      return z[C];
    });
  }
  var Ju = /\/+/g;
  function Hl(o, z) {
    return typeof o == "object" && o !== null && o.key != null ? gu("" + o.key) : z.toString(36);
  }
  function _(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Z, Z) : (o.status = "pending", o.then(
          function(z) {
            o.status === "pending" && (o.status = "fulfilled", o.value = z);
          },
          function(z) {
            o.status === "pending" && (o.status = "rejected", o.reason = z);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function B(o, z, C, R, W) {
    var k = typeof o;
    (k === "undefined" || k === "boolean") && (o = null);
    var ll = !1;
    if (o === null) ll = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case O:
            case gl:
              ll = !0;
              break;
            case H:
              return ll = o._init, B(
                ll(o._payload),
                z,
                C,
                R,
                W
              );
          }
      }
    if (ll)
      return W = W(o), ll = R === "" ? "." + Hl(o, 0) : R, $l(W) ? (C = "", ll != null && (C = ll.replace(Ju, "$&/") + "/"), B(W, z, C, "", function(lu) {
        return lu;
      })) : W != null && (mt(W) && (W = Wl(
        W,
        C + (W.key == null || o && o.key === W.key ? "" : ("" + W.key).replace(
          Ju,
          "$&/"
        ) + "/") + ll
      )), z.push(W)), 1;
    ll = 0;
    var D = R === "" ? "." : R + ":";
    if ($l(o))
      for (var j = 0; j < o.length; j++)
        R = o[j], k = D + Hl(R, j), ll += B(
          R,
          z,
          C,
          k,
          W
        );
    else if (j = kl(o), typeof j == "function")
      for (o = j.call(o), j = 0; !(R = o.next()).done; )
        R = R.value, k = D + Hl(R, j++), ll += B(
          R,
          z,
          C,
          k,
          W
        );
    else if (k === "object") {
      if (typeof o.then == "function")
        return B(
          _(o),
          z,
          C,
          R,
          W
        );
      throw z = String(o), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ll;
  }
  function G(o, z, C) {
    if (o == null) return o;
    var R = [], W = 0;
    return B(o, R, "", "", function(k) {
      return z.call(C, k, W++);
    }), R;
  }
  function yl(o) {
    if (o._status === -1) {
      var z = o._result, C = z();
      C.then(
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = R, C.status === void 0 && (C.status = "fulfilled", C.value = R));
        },
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = R, C.status === void 0 && (C.status = "rejected", C.reason = R));
        }
      ), o._status === -1 && (o._status = 0, o._result = C);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var el = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  };
  function Yt(o) {
    var z = I.T, C = {};
    C.types = z !== null ? z.types : null, I.T = C;
    try {
      var R = o(), W = I.S;
      W !== null && W(C, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Z, el);
    } catch (k) {
      el(k);
    } finally {
      z !== null && C.types !== null && (z.types = C.types), I.T = z;
    }
  }
  function Pt(o) {
    var z = I.T;
    if (z !== null) {
      var C = z.types;
      C === null ? z.types = [o] : C.indexOf(o) === -1 && C.push(o);
    } else Yt(Pt.bind(null, o));
  }
  var wu = {
    map: G,
    forEach: function(o, z, C) {
      G(
        o,
        function() {
          z.apply(this, arguments);
        },
        C
      );
    },
    count: function(o) {
      var z = 0;
      return G(o, function() {
        z++;
      }), z;
    },
    toArray: function(o) {
      return G(o, function(z) {
        return z;
      }) || [];
    },
    only: function(o) {
      if (!mt(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return X.Activity = S, X.Children = wu, X.Component = F, X.Fragment = V, X.Profiler = fl, X.PureComponent = zl, X.StrictMode = g, X.Suspense = rl, X.ViewTransition = Y, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return I.H.useMemoCache(o);
    }
  }, X.addTransitionType = Pt, X.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, X.cacheSignal = function() {
    return null;
  }, X.cloneElement = function(o, z, C) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var R = M({}, o.props), W = o.key;
    if (z != null)
      for (k in z.key !== void 0 && (W = "" + z.key), z)
        !yt.call(z, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && z.ref === void 0 || (R[k] = z[k]);
    var k = arguments.length - 2;
    if (k === 1) R.children = C;
    else if (1 < k) {
      for (var ll = Array(k), D = 0; D < k; D++)
        ll[D] = arguments[D + 2];
      R.children = ll;
    }
    return al(o.type, W, R);
  }, X.createContext = function(o) {
    return o = {
      $$typeof: jl,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: El,
      _context: o
    }, o;
  }, X.createElement = function(o, z, C) {
    var R, W = {}, k = null;
    if (z != null)
      for (R in z.key !== void 0 && (k = "" + z.key), z)
        yt.call(z, R) && R !== "key" && R !== "__self" && R !== "__source" && (W[R] = z[R]);
    var ll = arguments.length - 2;
    if (ll === 1) W.children = C;
    else if (1 < ll) {
      for (var D = Array(ll), j = 0; j < ll; j++)
        D[j] = arguments[j + 2];
      W.children = D;
    }
    if (o && o.defaultProps)
      for (R in ll = o.defaultProps, ll)
        W[R] === void 0 && (W[R] = ll[R]);
    return al(o, k, W);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(o) {
    return { $$typeof: Il, render: o };
  }, X.isValidElement = mt, X.lazy = function(o) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: o },
      _init: yl
    };
  }, X.memo = function(o, z) {
    return {
      $$typeof: Cl,
      type: o,
      compare: z === void 0 ? null : z
    };
  }, X.startTransition = Yt, X.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, X.use = function(o) {
    return I.H.use(o);
  }, X.useActionState = function(o, z, C) {
    return I.H.useActionState(o, z, C);
  }, X.useCallback = function(o, z) {
    return I.H.useCallback(o, z);
  }, X.useContext = function(o) {
    return I.H.useContext(o);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(o, z) {
    return I.H.useDeferredValue(o, z);
  }, X.useEffect = function(o, z) {
    return I.H.useEffect(o, z);
  }, X.useEffectEvent = function(o) {
    return I.H.useEffectEvent(o);
  }, X.useId = function() {
    return I.H.useId();
  }, X.useImperativeHandle = function(o, z, C) {
    return I.H.useImperativeHandle(o, z, C);
  }, X.useInsertionEffect = function(o, z) {
    return I.H.useInsertionEffect(o, z);
  }, X.useLayoutEffect = function(o, z) {
    return I.H.useLayoutEffect(o, z);
  }, X.useMemo = function(o, z) {
    return I.H.useMemo(o, z);
  }, X.useOptimistic = function(o, z) {
    return I.H.useOptimistic(o, z);
  }, X.useReducer = function(o, z, C) {
    return I.H.useReducer(o, z, C);
  }, X.useRef = function(o) {
    return I.H.useRef(o);
  }, X.useState = function(o) {
    return I.H.useState(o);
  }, X.useSyncExternalStore = function(o, z, C) {
    return I.H.useSyncExternalStore(
      o,
      z,
      C
    );
  }, X.useTransition = function() {
    return I.H.useTransition();
  }, X.version = "19.3.1", X;
}
var ud;
function A0() {
  return ud || (ud = 1, _0.exports = ch()), _0.exports;
}
var O0 = { exports: {} }, wl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function vh() {
  if (ad) return wl;
  ad = 1;
  var O = A0();
  function gl(H) {
    var S = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        S += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + H + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V() {
  }
  var g = {
    d: {
      f: V,
      r: function() {
        throw Error(gl(522));
      },
      D: V,
      C: V,
      L: V,
      m: V,
      X: V,
      S: V,
      M: V
    },
    p: 0,
    findDOMNode: null
  }, fl = Symbol.for("react.portal"), El = Symbol.for("react.recoverable"), jl = Symbol.for("react.optimistic_key");
  function Il(H, S, Y) {
    var Ol = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fl,
      key: Ol == null ? null : Ol === jl ? jl : "" + Ol,
      children: H,
      containerInfo: S,
      implementation: Y
    };
  }
  var rl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Cl(H, S) {
    if (H === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g, wl.browser = function(H) {
    return { $$typeof: El, _reason: H };
  }, wl.createPortal = function(H, S) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(gl(299));
    return Il(H, S, null, Y);
  }, wl.flushSync = function(H) {
    var S = rl.T, Y = g.p;
    try {
      if (rl.T = null, g.p = 2, H) return H();
    } finally {
      rl.T = S, g.p = Y, g.d.f();
    }
  }, wl.preconnect = function(H, S) {
    typeof H == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, g.d.C(H, S));
  }, wl.prefetchDNS = function(H) {
    typeof H == "string" && g.d.D(H);
  }, wl.preinit = function(H, S) {
    if (typeof H == "string" && S && typeof S.as == "string") {
      var Y = S.as, Ol = Cl(Y, S.crossOrigin), kl = typeof S.integrity == "string" ? S.integrity : void 0, Xl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      Y === "style" ? g.d.S(
        H,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: Ol,
          integrity: kl,
          fetchPriority: Xl
        }
      ) : Y === "script" && g.d.X(H, {
        crossOrigin: Ol,
        integrity: kl,
        fetchPriority: Xl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, wl.preinitModule = function(H, S) {
    if (typeof H == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var Y = Cl(
            S.as,
            S.crossOrigin
          );
          g.d.M(H, {
            crossOrigin: Y,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
          });
        }
      } else S == null && g.d.M(H);
  }, wl.preload = function(H, S) {
    if (typeof H == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var Y = S.as, Ol = Cl(Y, S.crossOrigin);
      g.d.L(H, Y, {
        crossOrigin: Ol,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, wl.preloadModule = function(H, S) {
    if (typeof H == "string")
      if (S) {
        var Y = Cl(S.as, S.crossOrigin);
        g.d.m(H, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: Y,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
        });
      } else g.d.m(H);
  }, wl.requestFormReset = function(H) {
    g.d.r(H);
  }, wl.unstable_batchedUpdates = function(H, S) {
    return H(S);
  }, wl.useFormState = function(H, S, Y) {
    return rl.H.useFormState(H, S, Y);
  }, wl.useFormStatus = function() {
    return rl.H.useHostTransitionStatus();
  }, wl.version = "19.3.1", wl;
}
var ed;
function oh() {
  if (ed) return O0.exports;
  ed = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (gl) {
        console.error(gl);
      }
  }
  return O(), O0.exports = vh(), O0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function yh() {
  if (nd) return en;
  nd = 1;
  var O = ih(), gl = A0(), V = oh();
  function g(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function fl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function El(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function jl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Il(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rl(l) {
    if (El(l) !== l)
      throw Error(g(188));
  }
  function Cl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = El(l), t === null) throw Error(g(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return rl(e), l;
          if (n === a) return rl(e), t;
          n = n.sibling;
        }
        throw Error(g(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(g(189));
        }
      }
      if (u.alternate !== a) throw Error(g(190));
    }
    if (u.tag !== 3) throw Error(g(188));
    return u.stateNode.current === u ? l : t;
  }
  function H(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = H(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function S(l, t, u, a, e, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && S(
        l.child,
        t,
        u,
        a,
        e,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function Y(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Ol(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function kl(l) {
    var t = [null, null], u = Y(l);
    return u === null || Xl(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function Xl(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Xl(
        l,
        t,
        u.child,
        a
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function M(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(g(559));
    }
  }
  var ul = null, F = null;
  function et(l, t, u) {
    return l === u ? !0 : l === t ? (ul = l, !0) : !1;
  }
  function zl(l, t, u) {
    return l === u ? (F = l, !1) : l === t ? (F !== null && (ul = l), !0) : !1;
  }
  function Ql(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function $l(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e; ) l = u(l), a--;
    for (; 0 < e - a; ) t = u(t), e--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var Z = Object.assign, I = Symbol.for("react.element"), yt = Symbol.for("react.transitional.element"), al = Symbol.for("react.portal"), Wl = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), gu = Symbol.for("react.profiler"), Ju = Symbol.for("react.consumer"), Hl = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), el = Symbol.for("react.lazy"), Yt = Symbol.for("react.activity"), Pt = Symbol.for("react.legacy_hidden"), wu = Symbol.for("react.memo_cache_sentinel"), o = Symbol.for("react.view_transition"), z = Symbol.for("react.recoverable"), C = Symbol.iterator;
  function R(l) {
    return l === null || typeof l != "object" ? null : (l = C && l[C] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var W = Symbol.for("react.client.reference");
  function k(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === W ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Wl:
        return "Fragment";
      case gu:
        return "Profiler";
      case mt:
        return "StrictMode";
      case B:
        return "Suspense";
      case G:
        return "SuspenseList";
      case Yt:
        return "Activity";
      case o:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case al:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Ju:
          return (l._context.displayName || "Context") + ".Consumer";
        case _:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case yl:
          return t = l.displayName || null, t !== null ? t : k(l.type) || "Memo";
        case el:
          t = l._payload, l = l._init;
          try {
            return k(l(t));
          } catch {
          }
      }
    return null;
  }
  var ll = Array.isArray, D = gl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Xf = [], Sa = -1;
  function pt(l) {
    return { current: l };
  }
  function pl(l) {
    0 > Sa || (l.current = Xf[Sa], Xf[Sa] = null, Sa--);
  }
  function dl(l, t) {
    Sa++, Xf[Sa] = l.current, l.current = t;
  }
  var Zt = pt(null), ve = pt(null), ru = pt(null), nn = pt(null);
  function fn(l, t) {
    switch (dl(ru, t), dl(ve, l), dl(Zt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? fm(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = fm(t), l = im(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    pl(Zt), dl(Zt, l);
  }
  function Ta() {
    pl(Zt), pl(ve), pl(ru);
  }
  function Qf(l) {
    var t = l.memoizedState;
    t !== null && (fe._currentValue = t.memoizedState, dl(nn, l)), t = Zt.current;
    var u = im(t, l.type);
    t !== u && (dl(ve, l), dl(Zt, u));
  }
  function cn(l) {
    ve.current === l && (pl(Zt), pl(ve)), nn.current === l && (pl(nn), fe._currentValue = lu);
  }
  var pf, N0;
  function Su(l) {
    if (pf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        pf = t && t[1] || "", N0 = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + pf + l + N0;
  }
  var Zf = !1;
  function xf(l, t) {
    if (!l || Zf) return "";
    Zf = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (b) {
                  var y = b;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (b) {
                  y = b;
                }
                E = !1;
                try {
                  var h = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), E = !0, new l();
                } finally {
                  E && (h !== void 0 ? Object.defineProperty(l.prototype, "props", h) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                y = b;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (b) {
            if (b && y && typeof b.stack == "string")
              return [b.stack, y.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), d = i.split(`
`);
        for (e = a = 0; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === c.length || e === d.length)
          for (a = c.length - 1, e = d.length - 1; 1 <= a && 0 <= e && c[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || c[a] !== d[e]) {
                  var r = `
` + c[a].replace(" at new ", " at ");
                  return l.displayName && r.includes("<anonymous>") && (r = r.replace("<anonymous>", l.displayName)), r;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Zf = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Su(u) : "";
  }
  function cd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Su(l.type);
      case 16:
        return Su("Lazy");
      case 13:
        return l.child !== t && t !== null ? Su("Suspense Fallback") : Su("Suspense");
      case 19:
        return Su("SuspenseList");
      case 0:
      case 15:
        return xf(l.type, !1);
      case 11:
        return xf(l.type.render, !1);
      case 1:
        return xf(l.type, !0);
      case 31:
        return Su("Activity");
      case 30:
        return Su("ViewTransition");
      default:
        return "";
    }
  }
  function D0(l) {
    try {
      var t = "", u = null;
      do
        t += cd(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Vf = Object.prototype.hasOwnProperty, Lf = O.unstable_scheduleCallback, Kf = O.unstable_cancelCallback, vd = O.unstable_shouldYield, od = O.unstable_requestPaint, dt = O.unstable_now, yd = O.unstable_getCurrentPriorityLevel, M0 = O.unstable_ImmediatePriority, U0 = O.unstable_UserBlockingPriority, vn = O.unstable_NormalPriority, md = O.unstable_LowPriority, C0 = O.unstable_IdlePriority, dd = O.log, sd = O.unstable_setDisableYieldValue, oe = null, st = null;
  function Tu(l) {
    if (typeof dd == "function" && sd(l), st && typeof st.setStrictMode == "function")
      try {
        st.setStrictMode(oe, l);
      } catch {
      }
  }
  var ht = Math.clz32 ? Math.clz32 : rd, hd = Math.log, gd = Math.LN2;
  function rd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (hd(l) / gd | 0) | 0;
  }
  var on = 256, yn = 262144, mn = 4194304;
  function $u(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function dn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = $u(a) : (f &= i, f !== 0 ? e = $u(f) : u || (u = i & ~l, u !== 0 && (e = $u(u))))) : (i = a & ~n, i !== 0 ? e = $u(i) : f !== 0 ? e = $u(f) : u || (u = a & ~l, u !== 0 && (e = $u(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function ye(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function R0(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - ht(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function Sd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function H0() {
    var l = mn;
    return mn <<= 1, (mn & 62914560) === 0 && (mn = 4194304), l;
  }
  function Jf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function me(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Td(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var r = 31 - ht(u), E = 1 << r;
      i[r] = 0, c[r] = -1;
      var y = d[r];
      if (y !== null)
        for (d[r] = null, r = 0; r < y.length; r++) {
          var h = y[r];
          h !== null && (h.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && Y0(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Y0(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ht(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function q0(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ht(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function B0(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : wf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function wf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $f(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function G0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Lm(l.type));
  }
  function j0(l, t) {
    var u = j.p;
    try {
      return j.p = l, t();
    } finally {
      j.p = u;
    }
  }
  var tu = Math.random().toString(36).slice(2), Zl = "__reactFiber$" + tu, nt = "__reactProps$" + tu, Ea = "__reactContainer$" + tu, X0 = "__reactEvents$" + tu, Ed = "__reactListeners$" + tu, zd = "__reactHandles$" + tu, Q0 = "__reactResources$" + tu, de = "__reactMarker$" + tu, sn = "__reactLoad$" + tu;
  function hn(l) {
    delete l[Zl], delete l[nt], delete l[Ed], delete l[zd];
  }
  function Wu(l) {
    var t;
    if (t = l[Zl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ea] || u[Zl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Om(l); l !== null; ) {
            if (u = l[Zl]) return u;
            l = Om(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function za(l) {
    if (l = l[Zl] || l[Ea]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function se(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(g(33));
  }
  function ba(l) {
    var t = l[Q0];
    return t || (t = l[Q0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Yl(l) {
    l[de] = !0;
  }
  function p0(l) {
    l[sn] = void 0;
  }
  var Z0 = /* @__PURE__ */ new Set(), x0 = {};
  function Fu(l, t) {
    _a(l, t), _a(l + "Capture", t);
  }
  function _a(l, t) {
    for (x0[l] = t, l = 0; l < t.length; l++)
      Z0.add(t[l]);
  }
  var bd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), V0 = {}, L0 = {};
  function _d(l) {
    return Vf.call(L0, l) ? !0 : Vf.call(V0, l) ? !1 : bd.test(l) ? L0[l] = !0 : (V0[l] = !0, !1);
  }
  var P = !1;
  function K0() {
    var l = P;
    return P = !1, l;
  }
  function gn(l, t, u) {
    if (_d(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function rn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function uu(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function gt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function J0(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Od(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Wf(l) {
    if (!l._valueTracker) {
      var t = J0(l) ? "checked" : "value";
      l._valueTracker = Od(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function w0(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = J0(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Ad = /[\n"\\]/g;
  function Ot(l) {
    return l.replace(
      Ad,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ff(l, t, u, a, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + gt(t)) : l.value !== "" + gt(t) && (l.value = "" + gt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? If(l, gt(l.value)) : If(l, gt(t)) : u != null ? If(l, gt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + gt(i) : l.removeAttribute("name");
  }
  function $0(l, t, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Wf(l);
        return;
      }
      u = u != null ? "" + gt(u) : "", t = t != null ? "" + gt(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Wf(l);
  }
  function If(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Oa(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + gt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function W0(l, t, u) {
    if (t != null && (t = "" + gt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + gt(u) : "";
  }
  function F0(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(g(92));
        if (ll(a)) {
          if (1 < a.length) throw Error(g(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = gt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Wf(l);
  }
  function Aa(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Nd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function I0(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Nd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function k0(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(g(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", P = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (I0(l, e, a), P = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && I0(l, n, t[n]);
  }
  function kf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Dd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Md = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sn(l) {
    return Md.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function xt() {
  }
  var Pf = null;
  function li(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Na = null, Da = null;
  function P0(l) {
    var t = za(l);
    if (t && (l = t.stateNode)) {
      var u = l[nt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Ff(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[nt] || null;
                if (!e) throw Error(g(90));
                Ff(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && w0(a);
          }
          break l;
        case "textarea":
          W0(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Oa(l, !!u.multiple, t, !1);
      }
    }
  }
  var ti = !1;
  function lv(l, t, u) {
    if (ti) return l(t, u);
    ti = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ti = !1, (Na !== null || Da !== null) && (Tf(), Na && (t = Na, l = Da, Da = Na = null, P0(t), l)))
        for (t = 0; t < l.length; t++) P0(l[t]);
    }
  }
  function he(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[nt] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        g(231, t, typeof u)
      );
    return u;
  }
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (au)
    try {
      var ge = {};
      Object.defineProperty(ge, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, ge);
    } catch {
      ui = !1;
    }
  var Eu = null, ai = null, Tn = null;
  function tv() {
    if (Tn) return Tn;
    var l, t = ai, u = t.length, a, e = "value" in Eu ? Eu.value : Eu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Tn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function En(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function zn() {
    return !0;
  }
  function uv() {
    return !1;
  }
  function Pl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? zn : uv, this.isPropagationStopped = uv, this;
    }
    return Z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = zn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = zn);
      },
      persist: function() {
      },
      isPersistent: zn
    }), t;
  }
  var zu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bn = Pl(zu), re = Z({}, zu, { view: 0, detail: 0 }), Ud = Pl(re), ei, ni, Se, _n = Z({}, re, {
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
    getModifierState: ii,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Se && (Se && l.type === "mousemove" ? (ei = l.screenX - Se.screenX, ni = l.screenY - Se.screenY) : ni = ei = 0, Se = l), ei);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ni;
    }
  }), av = Pl(_n), Cd = Z({}, _n, { dataTransfer: 0 }), Rd = Pl(Cd), Hd = Z({}, re, { relatedTarget: 0 }), fi = Pl(Hd), Yd = Z({}, zu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qd = Pl(Yd), Bd = Z({}, zu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Gd = Pl(Bd), jd = Z({}, zu, { data: 0 }), ev = Pl(jd), Xd = {
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
  }, Qd = {
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
  }, pd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Zd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = pd[l]) ? !!t[l] : !1;
  }
  function ii() {
    return Zd;
  }
  var xd = Z({}, re, {
    key: function(l) {
      if (l.key) {
        var t = Xd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = En(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Qd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ii,
    charCode: function(l) {
      return l.type === "keypress" ? En(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? En(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Vd = Pl(xd), Ld = Z({}, _n, {
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
  }), nv = Pl(Ld), Kd = Z({}, zu, { submitter: 0 }), Jd = Pl(Kd), wd = Z({}, re, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ii
  }), $d = Pl(wd), Wd = Z({}, zu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fd = Pl(Wd), Id = Z({}, _n, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kd = Pl(Id), Pd = Z({}, zu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), ls = Pl(Pd), ts = [9, 13, 27, 32], ci = au && "CompositionEvent" in window, Te = null;
  au && "documentMode" in document && (Te = document.documentMode);
  var us = au && "TextEvent" in window && !Te, fv = au && (!ci || Te && 8 < Te && 11 >= Te), iv = " ", cv = !1;
  function vv(l, t) {
    switch (l) {
      case "keyup":
        return ts.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ma = !1;
  function as(l, t) {
    switch (l) {
      case "compositionend":
        return ov(t);
      case "keypress":
        return t.which !== 32 ? null : (cv = !0, iv);
      case "textInput":
        return l = t.data, l === iv && cv ? null : l;
      default:
        return null;
    }
  }
  function es(l, t) {
    if (Ma)
      return l === "compositionend" || !ci && vv(l, t) ? (l = tv(), Tn = ai = Eu = null, Ma = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ns = {
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
  function yv(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ns[l.type] : t === "textarea";
  }
  function mv(l, t, u, a) {
    Na ? Da ? Da.push(a) : Da = [a] : Na = a, t = Af(t, "onChange"), 0 < t.length && (u = new bn(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ee = null, ze = null;
  function fs(l) {
    lm(l, 0);
  }
  function On(l) {
    var t = se(l);
    if (w0(t)) return l;
  }
  function dv(l, t) {
    if (l === "change") return t;
  }
  var sv = !1;
  if (au) {
    var vi;
    if (au) {
      var oi = "oninput" in document;
      if (!oi) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), oi = typeof hv.oninput == "function";
      }
      vi = oi;
    } else vi = !1;
    sv = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function gv() {
    Ee && (Ee.detachEvent("onpropertychange", rv), ze = Ee = null);
  }
  function rv(l) {
    if (l.propertyName === "value" && On(ze)) {
      var t = [];
      mv(
        t,
        ze,
        l,
        li(l)
      ), lv(fs, t);
    }
  }
  function is(l, t, u) {
    l === "focusin" ? (gv(), Ee = t, ze = u, Ee.attachEvent("onpropertychange", rv)) : l === "focusout" && gv();
  }
  function cs(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return On(ze);
  }
  function vs(l, t) {
    if (l === "click") return On(t);
  }
  function os(l, t) {
    if (l === "input" || l === "change")
      return On(t);
  }
  function ys(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var rt = typeof Object.is == "function" ? Object.is : ys;
  function be(l, t) {
    if (rt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Vf.call(t, e) || !rt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function yi(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function Sv(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Tv(l, t) {
    var u = Sv(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Sv(u);
    }
  }
  function Ev(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ev(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zv(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = yi(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = yi(l.document);
    }
    return t;
  }
  function mi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var ms = au && "documentMode" in document && 11 >= document.documentMode, Ua = null, di = null, _e = null, si = !1;
  function bv(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    si || Ua == null || Ua !== yi(a) || (a = Ua, "selectionStart" in a && mi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), _e && be(_e, a) || (_e = a, a = Af(di, "onSelect"), 0 < a.length && (t = new bn(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ua)));
  }
  function Iu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ca = {
    animationend: Iu("Animation", "AnimationEnd"),
    animationiteration: Iu("Animation", "AnimationIteration"),
    animationstart: Iu("Animation", "AnimationStart"),
    transitionrun: Iu("Transition", "TransitionRun"),
    transitionstart: Iu("Transition", "TransitionStart"),
    transitioncancel: Iu("Transition", "TransitionCancel"),
    transitionend: Iu("Transition", "TransitionEnd")
  }, hi = {}, _v = {};
  au && (_v = document.createElement("div").style, "AnimationEvent" in window || (delete Ca.animationend.animation, delete Ca.animationiteration.animation, delete Ca.animationstart.animation), "TransitionEvent" in window || delete Ca.transitionend.transition);
  function ku(l) {
    if (hi[l]) return hi[l];
    if (!Ca[l]) return l;
    var t = Ca[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in _v)
        return hi[l] = t[u];
    return l;
  }
  var Ov = ku("animationend"), Av = ku("animationiteration"), Nv = ku("animationstart"), ds = ku("transitionrun"), ss = ku("transitionstart"), hs = ku("transitioncancel"), Dv = ku("transitionend"), Mv = /* @__PURE__ */ new Map(), gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gi.push("scrollEnd");
  function qt(l, t) {
    Mv.set(l, t), Fu(t, [l]);
  }
  var gs = 0;
  function eu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Xt.identifierPrefix;
    var u = gs++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Uv(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = Fa;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = l[u[a]];
        if (e != null) {
          if (e === "none") return "none";
          t = t == null ? e : t + (" " + e);
        }
      }
    return t ?? l.default;
  }
  function nu(l, t) {
    return l = Uv(l), t = Uv(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var An = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, At = [], Ra = 0, ri = 0;
  function Nn() {
    for (var l = Ra, t = ri = Ra = 0; t < l; ) {
      var u = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var e = At[t];
      At[t++] = null;
      var n = At[t];
      if (At[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && Cv(u, e, n);
    }
  }
  function Dn(l, t, u, a) {
    At[Ra++] = l, At[Ra++] = t, At[Ra++] = u, At[Ra++] = a, ri |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Si(l, t, u, a) {
    return Dn(l, t, u, a), Mn(l);
  }
  function Pu(l, t) {
    return Dn(l, null, null, t), Mn(l);
  }
  function Cv(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ht(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Mn(l) {
    if (50 < Ke)
      throw Ke = 0, Sf = null, Error(g(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function rs(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ft(l, t, u, a) {
    return new rs(l, t, u, a);
  }
  function Ti(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function fu(l, t) {
    var u = l.alternate;
    return u === null ? (u = ft(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Rv(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Un(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") Ti(a) && (f = 1);
    else if (typeof a == "string")
      f = K1(
        l,
        u,
        Zt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case Yt:
          return l = ft(31, u, t, e), l.elementType = Yt, l.lanes = n, l;
        case Wl:
          return la(u.children, e, n, t);
        case mt:
          f = 8, e |= 24;
          break;
        case gu:
          return l = ft(12, u, t, e | 2), l.elementType = gu, l.lanes = n, l;
        case B:
          return l = ft(13, u, t, e), l.elementType = B, l.lanes = n, l;
        case G:
          return l = ft(19, u, t, e), l.elementType = G, l.lanes = n, l;
        case Pt:
        case o:
          return l = e | 32, l = ft(30, u, t, l), l.elementType = o, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Hl:
                f = 10;
                break l;
              case Ju:
                f = 9;
                break l;
              case _:
                f = 11;
                break l;
              case yl:
                f = 14;
                break l;
              case el:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            g(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ft(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function la(l, t, u, a) {
    return l = ft(7, l, a, t), l.lanes = u, l;
  }
  function Ei(l, t, u) {
    return l = ft(6, l, null, t), l.lanes = u, l;
  }
  function Hv(l) {
    var t = ft(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zi(l, t, u) {
    return t = ft(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Yv = /* @__PURE__ */ new WeakMap();
  function Nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Yv.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: D0(t)
      }, Yv.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: D0(t)
    };
  }
  var Ya = [], qa = 0, Cn = null, Oe = 0, Dt = [], Mt = 0, bu = null, Vt = 1, Lt = "";
  function iu(l, t) {
    Ya[qa++] = Oe, Ya[qa++] = Cn, Cn = l, Oe = t;
  }
  function qv(l, t, u) {
    Dt[Mt++] = Vt, Dt[Mt++] = Lt, Dt[Mt++] = bu, bu = l;
    var a = Vt;
    l = Lt;
    var e = 32 - ht(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ht(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Vt = 1 << 32 - ht(t) + e | u << e | a, Lt = n + l;
    } else
      Vt = 1 << n | u << e | a, Lt = l;
  }
  function Rn(l) {
    l.return !== null && (iu(l, 1), qv(l, 1, 0));
  }
  function bi(l) {
    for (; l === Cn; )
      Cn = Ya[--qa], Ya[qa] = null, Oe = Ya[--qa], Ya[qa] = null;
    for (; l === bu; )
      bu = Dt[--Mt], Dt[Mt] = null, Lt = Dt[--Mt], Dt[Mt] = null, Vt = Dt[--Mt], Dt[Mt] = null;
  }
  function Bv(l, t) {
    Dt[Mt++] = Vt, Dt[Mt++] = Lt, Dt[Mt++] = bu, Vt = t.id, Lt = t.overflow, bu = l;
  }
  var ql = null, sl = null, x = !1, _u = null, Ut = !1, _i = Error(g(519));
  function Ou(l) {
    var t = Error(
      g(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ae(Nt(t, l)), _i;
  }
  function Gv(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Zl] = l, t[nt] = a, u) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < we.length; u++)
          K(we[u], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), $0(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), F0(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || em(t.textContent, u) ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)), a.onScroll != null && K("scroll", t), a.onScrollEnd != null && K("scrollend", t), a.onClick != null && (t.onclick = xt), t = !0) : t = !1, t || Ou(l, !0);
  }
  function Hn(l) {
    for (ql = l.return; ql; )
      switch (ql.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          ql = ql.return;
      }
  }
  function Ba(l) {
    if (l !== ql) return !1;
    if (!x) return Hn(l), x = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Pc(l.type, l.memoizedProps)), u = !u), u && sl && Ou(l), Hn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(g(317));
      sl = _m(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(g(317));
      sl = _m(l);
    } else
      t === 27 ? (t = sl, pu(l.type) ? (l = c0, c0 = null, sl = l) : sl = t) : sl = ql ? Rt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ta() {
    sl = ql = null, x = !1;
  }
  function Oi() {
    var l = _u;
    return l !== null && (vt === null ? vt = l : vt.push.apply(
      vt,
      l
    ), _u = null), l;
  }
  function Ae(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var Ai = pt(null), ua = null, cu = null;
  function Au(l, t, u) {
    dl(Ai, t._currentValue), t._currentValue = u;
  }
  function vu(l) {
    l._currentValue = Ai.current, pl(Ai);
  }
  function Yn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Ni(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), Yn(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(g(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Yn(f, u, l), f = null;
      } else
        e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), Yn(
          e.return,
          u,
          l
        ), f = e.child, f = f !== null ? f.sibling : null) : f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function aa(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(g(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          rt(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === nn.current) {
        if (f = e.alternate, f === null) throw Error(g(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(fe) : l = [fe]);
      }
      e = e.return;
    }
    return l !== null && Ni(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function qn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!rt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ea(l) {
    ua = l, cu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function xl(l) {
    return jv(ua, l);
  }
  function Bn(l, t) {
    return ua === null && ea(l), jv(l, t);
  }
  function jv(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, cu === null) {
      if (l === null) throw Error(g(308));
      cu = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else cu = cu.next = t;
    return u;
  }
  var Ss = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Ts = O.unstable_scheduleCallback, Es = O.unstable_NormalPriority, Nl = {
    $$typeof: Hl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Di() {
    return {
      controller: new Ss(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ne(l) {
    l.refCount--, l.refCount === 0 && Ts(Es, function() {
      l.controller.abort();
    });
  }
  function Xv(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var De = null;
  function zs(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Me = null, Mi = 0, na = 0, Ga = null;
  function bs(l, t) {
    if (Me === null) {
      var u = Me = [];
      Mi = 0, na = Lc(), Ga = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Mi++, t.then(Qv, Qv), t;
  }
  function Qv() {
    if (--Mi === 0 && (De = null, Me !== null)) {
      Ga !== null && (Ga.status = "fulfilled");
      var l = Me;
      Me = null, na = 0, Ga = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function _s(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var pv = D.S;
  D.S = function(l, t) {
    if (Yy = dt(), typeof t == "object" && t !== null && typeof t.then == "function" && bs(l, t), De !== null)
      for (var u = le; u !== null; )
        Xv(u, De), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = le; a !== null; )
        Xv(a, u), a = a.next;
      if (na !== 0) {
        a = De, a === null && (a = De = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    pv !== null && pv(l, t);
  };
  var fa = pt(null);
  function Ui() {
    var l = fa.current;
    return l !== null ? l : ml.pooledCache;
  }
  function Gn(l, t) {
    t === null ? dl(fa, fa.current) : dl(fa, t.pool);
  }
  function Zv() {
    var l = Ui();
    return l === null ? null : { parent: Nl._currentValue, pool: l };
  }
  var ja = Error(g(460)), Ci = Error(g(474)), jn = Error(g(542)), Xn = { then: function() {
  } };
  function xv(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Vv(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(xt, xt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Kv(l), l === void 0 && !("reason" in t) ? Error(g(600)) : l;
      default:
        if (typeof t.status == "string") t.then(xt, xt);
        else {
          if (l = ml, l !== null && 100 < l.shellSuspendCounter)
            throw Error(g(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Kv(l), l;
        }
        throw ca = t, ja;
    }
  }
  function ia(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ca = u, ja) : u;
    }
  }
  var ca = null;
  function Lv() {
    if (ca === null) throw Error(g(459));
    var l = ca;
    return ca = null, l;
  }
  function Kv(l) {
    if (l === ja || l === jn)
      throw Error(g(483));
  }
  var Xa = null, Ue = 0;
  function Qn(l) {
    var t = Ue;
    return Ue += 1, Xa === null && (Xa = []), Vv(Xa, l, t);
  }
  function Nu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function pn(l, t) {
    throw t.$$typeof === I ? Error(g(525)) : (l = Object.prototype.toString.call(t), Error(
      g(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Jv(l) {
    function t(m, v) {
      if (l) {
        var s = m.deletions;
        s === null ? (m.deletions = [v], m.flags |= 16) : s.push(v);
      }
    }
    function u(m, v) {
      if (!l) return null;
      for (; v !== null; )
        t(m, v), v = v.sibling;
      return null;
    }
    function a(m) {
      for (var v = /* @__PURE__ */ new Map(); m !== null; )
        m.key === null ? v.set(m.index, m) : v.set(m.key, m), m = m.sibling;
      return v;
    }
    function e(m, v) {
      return m = fu(m, v), m.index = 0, m.sibling = null, m;
    }
    function n(m, v, s) {
      return m.index = s, l ? (s = m.alternate, s !== null ? (s = s.index, s < v ? (m.flags |= 2, v) : s) : (m.flags |= 134217730, v)) : (m.flags |= 1048576, v);
    }
    function f(m) {
      return l && m.alternate === null && (m.flags |= 134217730), m;
    }
    function i(m, v, s, T) {
      return v === null || v.tag !== 6 ? (v = Ei(s, m.mode, T), v.return = m, v) : (v = e(v, s), v.return = m, v);
    }
    function c(m, v, s, T) {
      var A = s.type;
      return A === Wl ? (m = r(
        m,
        v,
        s.props.children,
        T,
        s.key
      ), Nu(m, s), m) : v !== null && (v.elementType === A || typeof A == "object" && A !== null && A.$$typeof === el && ia(A) === v.type) ? (v = e(v, s.props), Nu(v, s), v.return = m, v) : (v = Un(
        s.type,
        s.key,
        s.props,
        null,
        m.mode,
        T
      ), Nu(v, s), v.return = m, v);
    }
    function d(m, v, s, T) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== s.containerInfo || v.stateNode.implementation !== s.implementation ? (v = zi(s, m.mode, T), v.return = m, v) : (v = e(v, s.children || []), v.return = m, v);
    }
    function r(m, v, s, T, A) {
      return v === null || v.tag !== 7 ? (v = la(
        s,
        m.mode,
        T,
        A
      ), v.return = m, v) : (v = e(v, s), v.return = m, v);
    }
    function E(m, v, s) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Ei(
          "" + v,
          m.mode,
          s
        ), v.return = m, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case yt:
            return s = Un(
              v.type,
              v.key,
              v.props,
              null,
              m.mode,
              s
            ), Nu(s, v), s.return = m, s;
          case al:
            return v = zi(
              v,
              m.mode,
              s
            ), v.return = m, v;
          case el:
            return v = ia(v), E(m, v, s);
        }
        if (ll(v) || R(v))
          return v = la(
            v,
            m.mode,
            s,
            null
          ), v.return = m, v;
        if (typeof v.then == "function")
          return E(m, Qn(v), s);
        if (v.$$typeof === Hl)
          return E(
            m,
            Bn(m, v),
            s
          );
        pn(m, v);
      }
      return null;
    }
    function y(m, v, s, T) {
      var A = v !== null ? v.key : null;
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return A !== null ? null : i(m, v, "" + s, T);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case yt:
            return s.key === A ? c(m, v, s, T) : null;
          case al:
            return s.key === A ? d(m, v, s, T) : null;
          case el:
            return s = ia(s), y(m, v, s, T);
        }
        if (ll(s) || R(s))
          return A !== null ? null : r(m, v, s, T, null);
        if (typeof s.then == "function")
          return y(
            m,
            v,
            Qn(s),
            T
          );
        if (s.$$typeof === Hl)
          return y(
            m,
            v,
            Bn(m, s),
            T
          );
        pn(m, s);
      }
      return null;
    }
    function h(m, v, s, T, A) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return m = m.get(s) || null, i(v, m, "" + T, A);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case yt:
            return m = m.get(
              T.key === null ? s : T.key
            ) || null, c(v, m, T, A);
          case al:
            return m = m.get(
              T.key === null ? s : T.key
            ) || null, d(v, m, T, A);
          case el:
            return T = ia(T), h(
              m,
              v,
              s,
              T,
              A
            );
        }
        if (ll(T) || R(T))
          return m = m.get(s) || null, r(v, m, T, A, null);
        if (typeof T.then == "function")
          return h(
            m,
            v,
            s,
            Qn(T),
            A
          );
        if (T.$$typeof === Hl)
          return h(
            m,
            v,
            s,
            Bn(v, T),
            A
          );
        pn(v, T);
      }
      return null;
    }
    function b(m, v, s, T) {
      for (var A = null, w = null, U = v, q = v = 0, Ul = null; U !== null && q < s.length; q++) {
        U.index > q ? (Ul = U, U = null) : Ul = U.sibling;
        var $ = y(
          m,
          U,
          s[q],
          T
        );
        if ($ === null) {
          U === null && (U = Ul);
          break;
        }
        l && U && $.alternate === null && t(m, U), v = n($, v, q), w === null ? A = $ : w.sibling = $, w = $, U = Ul;
      }
      if (q === s.length)
        return u(m, U), x && iu(m, q), A;
      if (U === null) {
        for (; q < s.length; q++)
          U = E(m, s[q], T), U !== null && (v = n(
            U,
            v,
            q
          ), w === null ? A = U : w.sibling = U, w = U);
        return x && iu(m, q), A;
      }
      for (U = a(U); q < s.length; q++)
        Ul = h(
          U,
          m,
          q,
          s[q],
          T
        ), Ul !== null && (l && ($ = Ul.alternate, $ !== null && U.delete($.key === null ? q : $.key)), v = n(
          Ul,
          v,
          q
        ), w === null ? A = Ul : w.sibling = Ul, w = Ul);
      return l && U.forEach(function(Ku) {
        return t(m, Ku);
      }), x && iu(m, q), A;
    }
    function N(m, v, s, T) {
      if (s == null) throw Error(g(151));
      for (var A = null, w = null, U = v, q = v = 0, Ul = null, $ = s.next(); U !== null && !$.done; q++, $ = s.next()) {
        U.index > q ? (Ul = U, U = null) : Ul = U.sibling;
        var Ku = y(m, U, $.value, T);
        if (Ku === null) {
          U === null && (U = Ul);
          break;
        }
        l && U && Ku.alternate === null && t(m, U), v = n(Ku, v, q), w === null ? A = Ku : w.sibling = Ku, w = Ku, U = Ul;
      }
      if ($.done)
        return u(m, U), x && iu(m, q), A;
      if (U === null) {
        for (; !$.done; q++, $ = s.next())
          $ = E(m, $.value, T), $ !== null && (v = n($, v, q), w === null ? A = $ : w.sibling = $, w = $);
        return x && iu(m, q), A;
      }
      for (U = a(U); !$.done; q++, $ = s.next())
        $ = h(U, m, q, $.value, T), $ !== null && (l && (Ul = $.alternate, Ul !== null && U.delete(
          Ul.key === null ? q : Ul.key
        )), v = n($, v, q), w === null ? A = $ : w.sibling = $, w = $);
      return l && U.forEach(function(ah) {
        return t(m, ah);
      }), x && iu(m, q), A;
    }
    function p(m, v, s, T) {
      if (typeof s == "object" && s !== null && s.type === Wl && s.key === null && s.props.ref === void 0 && (s = s.props.children), typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case yt:
            l: {
              for (var A = s.key; v !== null; ) {
                if (v.key === A) {
                  if (A = s.type, A === Wl) {
                    if (v.tag === 7) {
                      u(
                        m,
                        v.sibling
                      ), T = e(
                        v,
                        s.props.children
                      ), Nu(T, s), T.return = m, m = T;
                      break l;
                    }
                  } else if (v.elementType === A || typeof A == "object" && A !== null && A.$$typeof === el && ia(A) === v.type) {
                    u(
                      m,
                      v.sibling
                    ), T = e(v, s.props), Nu(T, s), T.return = m, m = T;
                    break l;
                  }
                  u(m, v);
                  break;
                } else t(m, v);
                v = v.sibling;
              }
              s.type === Wl ? (T = la(
                s.props.children,
                m.mode,
                T,
                s.key
              ), Nu(T, s), T.return = m, m = T) : (T = Un(
                s.type,
                s.key,
                s.props,
                null,
                m.mode,
                T
              ), Nu(T, s), T.return = m, m = T);
            }
            return f(m);
          case al:
            l: {
              for (A = s.key; v !== null; ) {
                if (v.key === A)
                  if (v.tag === 4 && v.stateNode.containerInfo === s.containerInfo && v.stateNode.implementation === s.implementation) {
                    u(
                      m,
                      v.sibling
                    ), T = e(v, s.children || []), T.return = m, m = T;
                    break l;
                  } else {
                    u(m, v);
                    break;
                  }
                else t(m, v);
                v = v.sibling;
              }
              T = zi(s, m.mode, T), T.return = m, m = T;
            }
            return f(m);
          case el:
            return s = ia(s), p(
              m,
              v,
              s,
              T
            );
        }
        if (ll(s))
          return b(
            m,
            v,
            s,
            T
          );
        if (R(s)) {
          if (A = R(s), typeof A != "function") throw Error(g(150));
          return s = A.call(s), N(
            m,
            v,
            s,
            T
          );
        }
        if (typeof s.then == "function")
          return p(
            m,
            v,
            Qn(s),
            T
          );
        if (s.$$typeof === Hl)
          return p(
            m,
            v,
            Bn(m, s),
            T
          );
        pn(m, s);
      }
      return typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint" ? (s = "" + s, v !== null && v.tag === 6 ? (u(m, v.sibling), T = e(v, s), T.return = m, m = T) : (u(m, v), T = Ei(s, m.mode, T), T.return = m, m = T), f(m)) : u(m, v);
    }
    return function(m, v, s, T) {
      try {
        Ue = 0;
        var A = p(
          m,
          v,
          s,
          T
        );
        return Xa = null, A;
      } catch (U) {
        if (U === ja || U === jn) throw U;
        var w = ft(29, U, null, m.mode);
        return w.lanes = T, w.return = m, w;
      } finally {
      }
    };
  }
  var va = Jv(!0), wv = Jv(!1), Du = !1;
  function Ri(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Mu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Uu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (tl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Mn(l), Cv(l, null, u), t;
    }
    return Dn(l, a, t, u), Mn(l);
  }
  function Ce(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, q0(l, u);
    }
  }
  function Yi(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var qi = !1;
  function Re() {
    if (qi) {
      var l = Ga;
      if (l !== null) throw l;
    }
  }
  function He(l, t, u, a) {
    qi = !1;
    var e = l.updateQueue;
    Du = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, d = c.next;
      c.next = null, f === null ? n = d : f.next = d, f = c;
      var r = l.alternate;
      r !== null && (r = r.updateQueue, i = r.lastBaseUpdate, i !== f && (i === null ? r.firstBaseUpdate = d : i.next = d, r.lastBaseUpdate = c));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, r = d = c = null, i = n;
      do {
        var y = i.lane & -536870913, h = y !== i.lane;
        if (h ? (J & y) === y : (a & y) === y) {
          y !== 0 && y === na && (qi = !0), r !== null && (r = r.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var b = l, N = i;
            y = t;
            var p = u;
            switch (N.tag) {
              case 1:
                if (b = N.payload, typeof b == "function") {
                  E = b.call(p, E, y);
                  break l;
                }
                E = b;
                break l;
              case 3:
                b.flags = b.flags & -65537 | 128;
              case 0:
                if (b = N.payload, y = typeof b == "function" ? b.call(p, E, y) : b, y == null) break l;
                E = Z({}, E, y);
                break l;
              case 2:
                Du = !0;
            }
          }
          y = i.callback, y !== null && (l.flags |= 64, h && (l.flags |= 8192), h = e.callbacks, h === null ? e.callbacks = [y] : h.push(y));
        } else
          h = {
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, r === null ? (d = r = h, c = E) : r = r.next = h, f |= y;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          h = i, i = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        }
      } while (!0);
      r === null && (c = E), e.baseState = c, e.firstBaseUpdate = d, e.lastBaseUpdate = r, n === null && (e.shared.lanes = 0), Gu |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function $v(l, t) {
    if (typeof l != "function")
      throw Error(g(191, l));
    l.call(t);
  }
  function Wv(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        $v(u[l], t);
  }
  var Cu = pt(null), Zn = pt(0);
  function Fv(l, t) {
    l = su, dl(Zn, l), dl(Cu, t), su = l | t.baseLanes;
  }
  function Bi() {
    dl(Zn, su), dl(Cu, Cu.current);
  }
  function Gi() {
    su = Zn.current, pl(Cu), pl(Zn);
  }
  var Vl = pt(null), Fl = null;
  function Ru(l) {
    var t = l.alternate;
    dl(Ll, Ll.current & 1), dl(Vl, l), Fl === null && (t === null || Cu.current !== null || t.memoizedState !== null) && (Fl = l);
  }
  function ji(l) {
    dl(Ll, Ll.current), dl(Vl, l), Fl === null && (Fl = l);
  }
  function Iv(l) {
    l.tag === 22 ? (dl(Ll, Ll.current), dl(Vl, l), Fl === null && (Fl = l)) : Hu();
  }
  function Hu() {
    dl(Ll, Ll.current), dl(Vl, Vl.current);
  }
  function St(l) {
    pl(Vl), Fl === l && (Fl = null), pl(Ll);
  }
  var Ll = pt(0);
  function Ye(l, t) {
    dl(Vl, Vl.current), dl(Ll, t);
  }
  function Xi(l) {
    pl(Ll), pl(Vl), Fl === l && (Fl = null);
  }
  function xn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || f0(u) || i0(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ou = 0, Q = null, ol = null, Dl = null, Vn = !1, Qa = !1, oa = !1, Ln = 0, qe = 0, pa = null, Os = 0;
  function bl() {
    throw Error(g(321));
  }
  function Qi(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!rt(l[u], t[u])) return !1;
    return !0;
  }
  function pi(l, t, u, a, e, n) {
    return ou = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = l === null || l.memoizedState === null ? Bo : Go, oa = !1, n = u(a, e), oa = !1, Qa && (n = Pv(
      t,
      u,
      a,
      e
    )), kv(l), n;
  }
  function kv(l) {
    D.H = In;
    var t = ol !== null && ol.next !== null;
    if (ou = 0, Dl = ol = Q = null, Vn = !1, qe = 0, pa = null, t) throw Error(g(300));
    l === null || Ml || (l = l.dependencies, l !== null && qn(l) && (Ml = !0));
  }
  function Pv(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (Qa && (pa = null), qe = 0, Qa = !1, 25 <= e) throw Error(g(301));
      if (e += 1, Dl = ol = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      D.H = Hs, n = t(u, a);
    } while (Qa);
    return n;
  }
  function As() {
    var l = D.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Be(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Zi() {
    var l = Ln !== 0;
    return Ln = 0, l;
  }
  function xi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Vi(l) {
    if (Vn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Vn = !1;
    }
    ou = 0, Dl = ol = Q = null, Qa = !1, qe = Ln = 0, pa = null;
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dl === null ? Q.memoizedState = Dl = l : Dl = Dl.next = l, Dl;
  }
  function Al() {
    if (ol === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var t = Dl === null ? Q.memoizedState : Dl.next;
    if (t !== null)
      Dl = t, ol = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(g(467)) : Error(g(310));
      ol = l, l = {
        memoizedState: ol.memoizedState,
        baseState: ol.baseState,
        baseQueue: ol.baseQueue,
        queue: ol.queue,
        next: null
      }, Dl === null ? Q.memoizedState = Dl = l : Dl = Dl.next = l;
    }
    return Dl;
  }
  function Kn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Be(l) {
    var t = qe;
    return qe += 1, pa === null && (pa = []), l = Vv(pa, l, t), t = Q, (Dl === null ? t.memoizedState : Dl.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Bo : Go), l;
  }
  function Jn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Be(l);
      if (l.$$typeof === z) return;
      if (l.$$typeof === Hl) return xl(l);
    }
    throw Error(g(438, String(l)));
  }
  function Li(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Kn(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = wu;
    return t.index++, u;
  }
  function yu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function wn(l) {
    var t = Al();
    return Ki(t, ol, l);
  }
  function Ki(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(g(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, d = t, r = !1;
      do {
        var E = d.lane & -536870913;
        if (E !== d.lane ? (J & E) === E : (ou & E) === E) {
          var y = d.revertLane;
          if (y === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), E === na && (r = !0);
          else if ((ou & y) === y) {
            d = d.next, y === na && (r = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, c === null ? (i = c = E, f = n) : c = c.next = E, Q.lanes |= y, Gu |= y;
          E = d.action, oa && u(n, E), n = d.hasEagerState ? d.eagerState : u(n, E);
        } else
          y = {
            lane: E,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, c === null ? (i = c = y, f = n) : c = c.next = y, Q.lanes |= E, Gu |= E;
        d = d.next;
      } while (d !== null && d !== t);
      if (c === null ? f = n : c.next = i, !rt(n, l.memoizedState) && (Ml = !0, r && (u = Ga, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ji(l) {
    var t = Al(), u = t.queue;
    if (u === null) throw Error(g(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      rt(n, t.memoizedState) || (Ml = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function lo(l, t, u) {
    var a = Q, e = Al(), n = x;
    if (n) {
      if (u === void 0) throw Error(g(407));
      u = u();
    } else u = t();
    var f = !rt(
      (ol || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Ml = !0), e = e.queue, Wi(ao.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Dl !== null && (Dl.memoizedState.tag & 1) !== 0, Za(
      l ? 9 : 8,
      { destroy: void 0 },
      uo.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, ml === null) throw Error(g(349));
      n || (ou & 127) !== 0 || to(a, t, u);
    }
    return u;
  }
  function to(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = Kn(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function uo(l, t, u, a) {
    t.value = u, t.getSnapshot = a, eo(t) && no(l);
  }
  function ao(l, t, u) {
    return u(function() {
      eo(t) && no(l);
    });
  }
  function eo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !rt(l, u);
    } catch {
      return !0;
    }
  }
  function no(l) {
    var t = Pu(l, 2);
    t !== null && ot(t, l, 2);
  }
  function wi(l) {
    var t = lt();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), oa) {
        Tu(!0);
        try {
          u();
        } finally {
          Tu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yu,
      lastRenderedState: l
    }, t;
  }
  function fo(l, t, u, a) {
    return l.baseState = u, Ki(
      l,
      ol,
      typeof a == "function" ? a : yu
    );
  }
  function Ns(l, t, u, a, e) {
    if (Fn(l)) throw Error(g(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      D.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, io(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function io(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = D.T, f = {};
      f.types = n !== null ? n.types : null, D.T = f;
      try {
        var i = u(e, a), c = D.S;
        c !== null && c(f, i), co(l, t, i);
      } catch (d) {
        $i(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), D.T = n;
      }
    } else
      try {
        n = u(e, a), co(l, t, n);
      } catch (d) {
        $i(l, t, d);
      }
  }
  function co(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        vo(l, t, a);
      },
      function(a) {
        return $i(l, t, a);
      }
    ) : vo(l, t, u);
  }
  function vo(l, t, u) {
    t.status = "fulfilled", t.value = u, oo(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, io(l, u)));
  }
  function $i(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, oo(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function oo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function yo(l, t) {
    return t;
  }
  function mo(l, t) {
    if (x) {
      var u = ml.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (x) {
            if (sl) {
              t: {
                for (var e = sl, n = Ut; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Rt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                sl = Rt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = lt(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yo,
      lastRenderedState: t
    }, u.queue = a, u = Ho.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = wi(!1), n = lc.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = lt(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Ns.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function so(l) {
    var t = Al();
    return ho(t, ol, l);
  }
  function ho(l, t, u) {
    if (t = Ki(
      l,
      t,
      yo
    )[0], l = wn(yu)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Be(t);
      } catch (f) {
        throw f === ja ? jn : f;
      }
    else a = t;
    t = Al();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, Za(
      9,
      { destroy: void 0 },
      Ds.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Ds(l, t) {
    l.action = t;
  }
  function go(l) {
    var t = Al(), u = ol;
    if (u !== null)
      return ho(t, u, l);
    Al(), t = t.memoizedState, u = Al();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Za(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Kn(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ro() {
    return Al().memoizedState;
  }
  function $n(l, t, u, a) {
    var e = lt();
    Q.flags |= l, e.memoizedState = Za(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function Wn(l, t, u, a) {
    var e = Al();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ol !== null && a !== null && Qi(a, ol.memoizedState.deps) ? e.memoizedState = Za(t, n, u, a) : (Q.flags |= l, e.memoizedState = Za(
      1 | t,
      n,
      u,
      a
    ));
  }
  function So(l, t) {
    $n(8390656, 8, l, t);
  }
  function Wi(l, t) {
    Wn(2048, 8, l, t);
  }
  function Ms(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null)
      t = Kn(), Q.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function To(l) {
    var t = Al().memoizedState;
    return Ms({ ref: t, nextImpl: l }), function() {
      if ((tl & 2) !== 0) throw Error(g(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Eo(l, t) {
    return Wn(4, 2, l, t);
  }
  function zo(l, t) {
    return Wn(4, 4, l, t);
  }
  function bo(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function _o(l, t, u) {
    u = u != null ? u.concat([l]) : null, Wn(4, 4, bo.bind(null, t, l), u);
  }
  function Fi() {
  }
  function Oo(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Qi(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Ao(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Qi(t, a[1]))
      return a[0];
    if (a = l(), oa) {
      Tu(!0);
      try {
        l();
      } finally {
        Tu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Ii(l, t, u) {
    return u === void 0 || (ou & 1073741824) !== 0 && (J & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = By(), Q.lanes |= l, Gu |= l, u);
  }
  function No(l, t, u, a) {
    return rt(u, t) ? u : Cu.current !== null ? (l = Ii(l, u, a), rt(l, t) || (Ml = !0), l) : (ou & 106) === 0 || (ou & 1073741824) !== 0 && (J & 261930) === 0 ? (Ml = !0, l.memoizedState = u) : (l = By(), Q.lanes |= l, Gu |= l, t);
  }
  function Do(l, t, u, a, e) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var f = D.T, i = {};
    i.types = f !== null ? f.types : null, D.T = i, lc(l, !1, t, u);
    try {
      var c = e(), d = D.S;
      if (d !== null && d(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var r = _s(
          c,
          a
        );
        Ge(
          l,
          t,
          r,
          bt(l)
        );
      } else
        Ge(
          l,
          t,
          a,
          bt(l)
        );
    } catch (E) {
      Ge(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        bt()
      );
    } finally {
      j.p = n, f !== null && i.types !== null && (f.types = i.types), D.T = f;
    }
  }
  function Us() {
  }
  function ki(l, t, u, a) {
    if (l.tag !== 5) throw Error(g(476));
    var e = Mo(l).queue;
    Do(
      l,
      e,
      t,
      lu,
      u === null ? Us : function() {
        return Uo(l), u(a);
      }
    );
  }
  function Mo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: lu,
      baseState: lu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yu,
        lastRenderedState: lu
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Uo(l) {
    var t = Mo(l);
    t.next === null && (t = l.alternate.memoizedState), Ge(
      l,
      t.next.queue,
      {},
      bt()
    );
  }
  function Pi() {
    return xl(fe);
  }
  function Co() {
    return Al().memoizedState;
  }
  function Ro() {
    return Al().memoizedState;
  }
  function Cs(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = bt();
          l = Mu(u);
          var a = Uu(t, l, u);
          a !== null && (ot(a, t, u), Ce(a, t, u)), t = { cache: Di() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Rs(l, t, u) {
    var a = bt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fn(l) ? Yo(t, u) : (u = Si(l, t, u, a), u !== null && (ot(u, l, a), qo(u, t, a)));
  }
  function Ho(l, t, u) {
    var a = bt();
    Ge(l, t, u, a);
  }
  function Ge(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fn(l)) Yo(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, rt(i, f))
            return Dn(l, t, e, 0), ml === null && Nn(), !1;
        } catch {
        } finally {
        }
      if (u = Si(l, t, e, a), u !== null)
        return ot(u, l, a), qo(u, t, a), !0;
    }
    return !1;
  }
  function lc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Lc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fn(l)) {
      if (t) throw Error(g(479));
    } else
      t = Si(
        l,
        u,
        a,
        2
      ), t !== null && ot(t, l, 2);
  }
  function Fn(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function Yo(l, t) {
    Qa = Vn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function qo(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, q0(l, u);
    }
  }
  var In = {
    readContext: xl,
    use: Jn,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl,
    useEffectEvent: bl
  }, Bo = {
    readContext: xl,
    use: Jn,
    useCallback: function(l, t) {
      return lt().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: xl,
    useEffect: So,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, $n(
        4194308,
        4,
        bo.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return $n(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      $n(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = lt();
      t = t === void 0 ? null : t;
      var a = l();
      if (oa) {
        Tu(!0);
        try {
          l();
        } finally {
          Tu(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = lt();
      if (u !== void 0) {
        var e = u(t);
        if (oa) {
          Tu(!0);
          try {
            u(t);
          } finally {
            Tu(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Rs.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = lt();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = wi(l);
      var t = l.queue, u = Ho.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var u = lt();
      return Ii(u, l, t);
    },
    useTransition: function() {
      var l = wi(!1);
      return l = Do.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), lt().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = lt();
      if (x) {
        if (u === void 0)
          throw Error(g(407));
        u = u();
      } else {
        if (u = t(), ml === null)
          throw Error(g(349));
        (J & 127) !== 0 || to(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, So(ao.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Za(
        9,
        { destroy: void 0 },
        uo.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = lt(), t = ml.identifierPrefix;
      if (x) {
        var u = Lt, a = Vt;
        u = (a & ~(1 << 32 - ht(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Ln++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Os++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Pi,
    useFormState: mo,
    useActionState: mo,
    useOptimistic: function(l) {
      var t = lt();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = lc.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Li,
    useCacheRefresh: function() {
      return lt().memoizedState = Cs.bind(
        null,
        Q
      );
    },
    useEffectEvent: function(l) {
      var t = lt(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((tl & 2) !== 0)
          throw Error(g(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Go = {
    readContext: xl,
    use: Jn,
    useCallback: Oo,
    useContext: xl,
    useEffect: Wi,
    useImperativeHandle: _o,
    useInsertionEffect: Eo,
    useLayoutEffect: zo,
    useMemo: Ao,
    useReducer: wn,
    useRef: ro,
    useState: function() {
      return wn(yu);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var u = Al();
      return No(
        u,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = wn(yu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : Be(l),
        t
      ];
    },
    useSyncExternalStore: lo,
    useId: Co,
    useHostTransitionStatus: Pi,
    useFormState: so,
    useActionState: so,
    useOptimistic: function(l, t) {
      var u = Al();
      return fo(u, ol, l, t);
    },
    useMemoCache: Li,
    useCacheRefresh: Ro,
    useEffectEvent: To
  }, Hs = {
    readContext: xl,
    use: Jn,
    useCallback: Oo,
    useContext: xl,
    useEffect: Wi,
    useImperativeHandle: _o,
    useInsertionEffect: Eo,
    useLayoutEffect: zo,
    useMemo: Ao,
    useReducer: Ji,
    useRef: ro,
    useState: function() {
      return Ji(yu);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var u = Al();
      return ol === null ? Ii(u, l, t) : No(
        u,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ji(yu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : Be(l),
        t
      ];
    },
    useSyncExternalStore: lo,
    useId: Co,
    useHostTransitionStatus: Pi,
    useFormState: go,
    useActionState: go,
    useOptimistic: function(l, t) {
      var u = Al();
      return ol !== null ? fo(u, ol, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Li,
    useCacheRefresh: Ro,
    useEffectEvent: To
  };
  function tc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : Z({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var uc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = bt(), e = Mu(a);
      e.payload = t, u != null && (e.callback = u), t = Uu(l, e, a), t !== null && (ot(t, l, a), Ce(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = bt(), e = Mu(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Uu(l, e, a), t !== null && (ot(t, l, a), Ce(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = bt(), a = Mu(u);
      a.tag = 2, t != null && (a.callback = t), t = Uu(l, a, u), t !== null && (ot(t, l, u), Ce(t, l, u));
    }
  };
  function jo(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !be(u, a) || !be(e, n) : !0;
  }
  function Xo(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && uc.enqueueReplaceState(t, t.state, null);
  }
  function ya(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = Z({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Qo(l) {
    An(l);
  }
  function po(l) {
    console.error(l);
  }
  function Zo(l) {
    An(l);
  }
  function kn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function xo(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ac(l, t, u) {
    return u = Mu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      kn(l, t);
    }, u;
  }
  function Vo(l) {
    return l = Mu(l), l.tag = 3, l;
  }
  function Lo(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        xo(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      xo(t, u, a), typeof e != "function" && (ju === null ? ju = /* @__PURE__ */ new Set([this]) : ju.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Ys(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && aa(
        t,
        u,
        e,
        !0
      ), u = Vl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Fl === null ? Ef() : u.alternate === null && _l === 0 && (_l = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Xn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Zc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Xn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Zc(l, a, e)), !1;
        }
        throw Error(g(435, u.tag));
      }
      return Zc(l, a, e), Ef(), !1;
    }
    if (x)
      return t = Vl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== _i && (l = Error(g(422), { cause: a }), Ae(Nt(l, u)))) : (a !== _i && (t = Error(g(423), {
        cause: a
      }), Ae(
        Nt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = Nt(a, u), e = ac(
        l.stateNode,
        a,
        e
      ), Yi(l, e), _l !== 4 && (_l = 2)), !1;
    var n = Error(g(520), { cause: a });
    if (n = Nt(n, u), Le === null ? Le = [n] : Le.push(n), _l !== 4 && (_l = 2), t === null) return !0;
    a = Nt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ac(u.stateNode, a, l), Yi(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ju === null || !ju.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Vo(e), Lo(
              e,
              l,
              u,
              a
            ), Yi(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ec = Error(g(461)), Ml = !1;
  function Rl(l, t, u, a) {
    t.child = l === null ? wv(t, null, u, a) : va(
      t,
      l.child,
      u,
      a
    );
  }
  function Ko(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return ea(t), a = pi(
      l,
      t,
      u,
      f,
      n,
      e
    ), i = Zi(), l !== null && !Ml ? (xi(l, t, e), mu(l, t, e)) : (x && i && Rn(t), t.flags |= 1, Rl(l, t, a, e), t.child);
  }
  function Jo(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ti(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, wo(
        l,
        t,
        n,
        a,
        e
      )) : (l = Un(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !mc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : be, u(f, a) && l.ref === t.ref)
        return mu(l, t, e);
    }
    return t.flags |= 1, l = fu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function wo(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (be(n, a) && l.ref === t.ref)
        if (Ml = !1, t.pendingProps = a = n, mc(l, e))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return t.lanes = l.lanes, mu(l, t, e);
    }
    return nc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function $o(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Wo(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Gn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Fv(t, n) : Bi(), Iv(t);
      else
        return a = t.lanes = 536870912, Wo(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Gn(t, n.cachePool), Fv(t, n), Hu(), t.memoizedState = null) : (l !== null && Gn(t, null), Bi(), Hu());
    return Rl(l, t, e, u), t.child;
  }
  function je(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Wo(l, t, u, a, e) {
    var n = Ui();
    return n = n === null ? null : { parent: Nl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Gn(t, null), Bi(), Iv(t), l !== null && aa(l, t, a, !0), t.childLanes = e, null;
  }
  function Pn(l, t) {
    return t = lf(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Fo(l, t, u) {
    return va(t, l.child, null, u), l = Pn(t, t.pendingProps), l.flags |= 2, St(t), t.memoizedState = null, l;
  }
  function qs(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (x) {
        if (a.mode === "hidden")
          return l = Pn(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, je(null, l);
        if (ji(t), (l = sl) ? (l = bm(
          l,
          Ut
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: bu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Hv(l), u.return = t, t.child = u, ql = t, sl = null)) : l = null, l === null) throw Ou(t);
        return t.lanes = 536870912, null;
      }
      return Pn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (ji(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Fo(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(g(558));
      else if (Ml || aa(l, t, u, !1), e = (u & l.childLanes) !== 0, Ml || e) {
        if (Cu.current === null) {
          if (a = ml, a !== null && (f = B0(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, Pu(l, f), ot(a, l, f), ec;
          Ef();
        }
        t = Fo(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, sl = Rt(f.nextSibling), ql = t, x = !0, _u = null, Ut = !1, l !== null && Bv(t, l), t = Pn(t, a), t.flags |= 134221824;
      return t;
    }
    return l = fu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function xa(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(g(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function nc(l, t, u, a, e) {
    return ea(t), u = pi(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Zi(), l !== null && !Ml ? (xi(l, t, e), mu(l, t, e)) : (x && a && Rn(t), t.flags |= 1, Rl(l, t, u, e), t.child);
  }
  function Io(l, t, u, a, e, n) {
    return ea(t), t.updateQueue = null, u = Pv(
      t,
      a,
      u,
      e
    ), kv(l), a = Zi(), l !== null && !Ml ? (xi(l, t, n), mu(l, t, n)) : (x && a && Rn(t), t.flags |= 1, Rl(l, t, u, n), t.child);
  }
  function ko(l, t, u, a, e) {
    if (ea(t), t.stateNode === null) {
      var n = Ha, f = u.contextType;
      typeof f == "object" && f !== null && (n = xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = uc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Ri(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? xl(f) : Ha, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (tc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && uc.enqueueReplaceState(n, n.state, null), He(t, a, n, e), Re(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = ya(u, i);
      n.props = c;
      var d = n.context, r = u.contextType;
      f = Ha, typeof r == "object" && r !== null && (f = xl(r));
      var E = u.getDerivedStateFromProps;
      r = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, r || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || d !== f) && Xo(
        t,
        n,
        a,
        f
      ), Du = !1;
      var y = t.memoizedState;
      n.state = y, He(t, a, n, e), Re(), d = t.memoizedState, i || y !== d || Du ? (typeof E == "function" && (tc(
        t,
        u,
        E,
        a
      ), d = t.memoizedState), (c = Du || jo(
        t,
        u,
        c,
        a,
        y,
        d,
        f
      )) ? (r || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Hi(l, t), f = t.memoizedProps, r = ya(u, f), n.props = r, E = t.pendingProps, y = n.context, d = u.contextType, c = Ha, typeof d == "object" && d !== null && (c = xl(d)), i = u.getDerivedStateFromProps, (d = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || y !== c) && Xo(
        t,
        n,
        a,
        c
      ), Du = !1, y = t.memoizedState, n.state = y, He(t, a, n, e), Re();
      var h = t.memoizedState;
      f !== E || y !== h || Du || l !== null && l.dependencies !== null && qn(l.dependencies) ? (typeof i == "function" && (tc(
        t,
        u,
        i,
        a
      ), h = t.memoizedState), (r = Du || jo(
        t,
        u,
        r,
        a,
        y,
        h,
        c
      ) || l !== null && l.dependencies !== null && qn(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, h, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        h,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = c, a = r) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, xa(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = va(
      t,
      l.child,
      null,
      e
    ), t.child = va(
      t,
      null,
      u,
      e
    )) : Rl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = mu(
      l,
      t,
      e
    ), l;
  }
  function Po(l, t, u, a) {
    return ta(), t.flags |= 256, Rl(l, t, u, a), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ic(l) {
    return { baseLanes: l, cachePool: Zv() };
  }
  function cc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= zt), l;
  }
  function ly(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ll.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (x) {
        if (e ? Ru(t) : Hu(), (l = sl) ? (l = bm(
          l,
          Ut
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: bu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Hv(l), u.return = t, t.child = u, ql = t, sl = null)) : l = null, l === null) throw Ou(t);
        return i0(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (Hu(), e = t.mode, n = lf(
        { mode: "hidden", children: n },
        e
      ), a = la(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = ic(u), a.childLanes = cc(
        l,
        f,
        u
      ), t.memoizedState = fc, je(null, a)) : (Ru(t), vc(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (c !== null)
        return Bs(
          l,
          t,
          n,
          f,
          a,
          c,
          i,
          u
        );
    }
    return e ? (Hu(), e = a.fallback, n = t.mode, i = l.child, c = i.sibling, a = fu(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? e = fu(c, e) : (e = la(
      e,
      n,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, je(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = ic(u) : (n = e.cachePool, n !== null ? (i = Nl._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Zv(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = cc(
      l,
      f,
      u
    ), t.memoizedState = fc, je(l.child, a)) : (Ru(t), u = l.child, l = u.sibling, u = fu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function vc(l, t) {
    return t = lf(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function lf(l, t) {
    return l = ft(22, l, null, t), l.lanes = 0, l;
  }
  function tf(l, t, u) {
    return va(t, l.child, null, u), l = vc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bs(l, t, u, a, e, n, f, i) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, tf(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Hu(), t.child = l.child, t.flags |= 128, null) : (Hu(), n = e.fallback, f = t.mode, e = lf(
        { mode: "visible", children: e.children },
        f
      ), n = la(
        n,
        f,
        i,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, va(t, l.child, null, i), e = t.child, e.memoizedState = ic(i), e.childLanes = cc(
        l,
        a,
        i
      ), t.memoizedState = fc, je(null, e));
    if (Ru(t), i0(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var c = a.dgst;
      return a = c, a !== "" && (e = Error(g(419)), e.stack = "", e.digest = a, Ae({ value: e, source: null, stack: null })), tf(
        l,
        t,
        i
      );
    }
    if (Ml || aa(l, t, i, !1), a = (i & l.childLanes) !== 0, Ml || a) {
      if (Cu.current !== null)
        return tf(
          l,
          t,
          i
        );
      if (a = ml, a !== null && (e = B0(
        a,
        i
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, Pu(l, e), ot(a, l, e), ec;
      return f0(n) || Ef(), tf(
        l,
        t,
        i
      );
    }
    return f0(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, sl = Rt(n.nextSibling), ql = t, x = !0, _u = null, Ut = !1, l !== null && Bv(t, l), t = vc(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function ty(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Yn(l.return, t, u);
  }
  function uy(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && xn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function uf(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function oc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function yc(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Ll.current;
    if (t.flags & 128)
      return Ye(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Ye(t, f), e === "backwards" && l !== null ? (oc(l), Rl(l, t, a, u), oc(l)) : Rl(l, t, a, u), a = x ? Oe : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ty(l, u, t);
        else if (l.tag === 19)
          ty(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "backwards":
        u = uy(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, oc(t)), uf(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && xn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        uf(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        uf(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = uy(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), uf(
          t,
          !1,
          e,
          u,
          n,
          a
        );
    }
    return t.child;
  }
  function ay(l, t, u) {
    var a = t.pendingProps;
    return Au(t, t.type, a.value), Rl(l, t, a.children, u), t.child;
  }
  function mu(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Gu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (aa(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(g(153));
    if (t.child !== null) {
      for (l = t.child, u = fu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = fu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function mc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && qn(l)));
  }
  function Gs(l, t, u) {
    switch (t.tag) {
      case 3:
        fn(t, t.stateNode.containerInfo), Au(t, Nl, l.memoizedState.cache), ta();
        break;
      case 27:
      case 5:
        Qf(t);
        break;
      case 4:
        fn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Au(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ji(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ru(t), t.flags |= 128, null;
          a = aa(
            l,
            t,
            u,
            !1
          );
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? ly(l, t, u) : (Ru(t), l = mu(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return yc(
            l,
            t,
            u
          );
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (aa(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return yc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), Ye(t, Ll.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, $o(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Au(t, Nl, l.memoizedState.cache);
    }
    return mu(l, t, u);
  }
  function ey(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ml = !0;
      else {
        if (!mc(l, u) && (t.flags & 128) === 0)
          return Ml = !1, Gs(
            l,
            t,
            u
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, x && (t.flags & 1048576) !== 0 && qv(t, Oe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ia(t.elementType), t.type = l, typeof l == "function")
            Ti(l) ? (a = ya(l, a), t.tag = 1, t = ko(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = nc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === _) {
                t.tag = 11, t = Ko(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === yl) {
                t.tag = 14, t = Jo(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === Hl) {
                t.tag = 10, t.type = l, t = ay(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = k(l) || l, Error(g(306, t, ""));
          }
        }
        return t;
      case 0:
        return nc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = ya(
          a,
          t.pendingProps
        ), ko(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (fn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(g(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Hi(l, t), He(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Au(t, Nl, a), a !== n.cache && Ni(
            t,
            [Nl],
            u,
            !0
          ), Re(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Po(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = Nt(
                Error(g(424)),
                t
              ), Ae(e), t = Po(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (sl = Rt(l.firstChild), ql = t, x = !0, _u = null, Ut = !0, u = wv(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
            }
          else {
            if (ta(), a === e) {
              t = mu(
                l,
                t,
                u
              );
              break l;
            }
            Rl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return xa(l, t), l === null ? (u = Um(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : x || (t.stateNode = cm(
          t.type,
          t.pendingProps,
          ru.current,
          t
        )) : t.memoizedState = Um(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Qf(t), l === null && x && (a = t.stateNode = Am(
          t.type,
          t.pendingProps,
          ru.current
        ), ql = t, Ut = !0, e = sl, pu(t.type) ? (c0 = e, sl = Rt(a.firstChild)) : sl = e), Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), xa(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && x && ((e = a = sl) && (a = C1(
          a,
          t.type,
          t.pendingProps,
          Ut
        ), a !== null ? (t.stateNode = a, ql = t, sl = Rt(a.firstChild), Ut = !1, e = !0) : e = !1), e || Ou(t)), Qf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Pc(e, n) ? a = null : f !== null && Pc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = pi(
          l,
          t,
          As,
          null,
          null,
          u
        ), fe._currentValue = e), xa(l, t), Rl(l, t, a, u), t.child;
      case 6:
        return l === null && x && ((l = u = sl) && (u = R1(
          u,
          t.pendingProps,
          Ut
        ), u !== null ? (t.stateNode = u, ql = t, sl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return ly(l, t, u);
      case 4:
        return fn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = va(
          t,
          null,
          a,
          u
        ) : Rl(l, t, a, u), t.child;
      case 11:
        return Ko(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, xa(l, t), Rl(l, t, a, u), t.child;
      case 8:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return ay(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, ea(t), e = xl(e), a = a(e), t.flags |= 1, Rl(l, t, a, u), t.child;
      case 14:
        return Jo(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return wo(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return yc(l, t, u);
      case 31:
        return qs(l, t, u);
      case 22:
        return $o(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return ea(t), a = xl(Nl), l === null ? (e = Ui(), e === null && (e = ml, n = Di(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Ri(t), Au(t, Nl, e)) : ((l.lanes & u) !== 0 && (Hi(l, t), He(t, null, null, u), Re()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Au(t, Nl, a)) : (a = n.cache, Au(t, Nl, a), a !== e.cache && Ni(
          t,
          [Nl],
          u,
          !0
        ))), Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : x && Rn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : xa(l, t), Rl(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(g(156, t.tag));
  }
  function du(l) {
    l.flags |= 4;
  }
  function dc(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Ym(t, a) : Ym(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Qy()) l.flags |= 8192;
        else
          throw ca = Xn, Ci;
    } else l.flags &= -16777217;
  }
  function ny(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !qm(t))
      if (Qy()) l.flags |= 8192;
      else
        throw ca = Xn, Ci;
  }
  function af(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? H0() : 536870912, l.lanes |= t, wa |= t);
  }
  function Xe(l, t) {
    if (!x)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function hl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function js(l, t, u) {
    var a = t.pendingProps;
    switch (bi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hl(t), null;
      case 1:
        return hl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vu(Nl), Ta(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? du(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oi())), hl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (du(t), n !== null ? (hl(t), ny(t, n)) : (hl(t), dc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (du(t), hl(t), ny(t, n)) : (hl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && du(t), hl(t), dc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (cn(t), u = ru.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && du(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(g(166));
            return hl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Zt.current, Ba(t) ? Gv(t) : (l = Am(e, a, u), t.stateNode = l, du(t));
        }
        return hl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (cn(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && du(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(g(166));
            return hl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Zt.current, Ba(t))
            Gv(t);
          else {
            var f = We(
              ru.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Zl] = t, n[nt] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Jl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && du(t);
          }
        }
        return hl(t), t.subtreeFlags &= -33554433, dc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && du(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(g(166));
          if (l = ru.current, Ba(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = ql, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Zl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || em(l.nodeValue, u)), l || Ou(t, !0);
          } else
            l = We(l).createTextNode(
              a
            ), l[Zl] = t, t.stateNode = l;
        }
        return hl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ba(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(g(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(g(557));
              l[Zl] = t;
            } else
              ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            hl(t), l = !1;
          } else
            u = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (St(t), t) : (St(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(g(558));
        }
        return hl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(g(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
              e[Zl] = t;
            } else
              ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            hl(t), e = !1;
          } else
            e = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (St(t), t) : (St(t), null);
        }
        return St(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), af(t, t.updateQueue), hl(t), null);
      case 4:
        return Ta(), l === null && $c(t.stateNode.containerInfo), t.flags |= 67108864, hl(t), null;
      case 10:
        return vu(t.type), hl(t), null;
      case 19:
        if (Xi(t), a = t.memoizedState, a === null) return hl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) Xe(a, !1);
          else {
            if (_l !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = xn(l), n !== null) {
                  for (t.flags |= 128, Xe(a, !1), l = n.updateQueue, t.updateQueue = l, af(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Rv(u, l), u = u.sibling;
                  return Ye(
                    t,
                    Ll.current & 1 | 2
                  ), x && iu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && dt() > gf && (t.flags |= 128, e = !0, Xe(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = xn(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, af(t, l), Xe(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !x)
                return hl(t), null;
            } else
              2 * dt() - a.renderingStartTime > gf && u !== 536870912 && (t.flags |= 128, e = !0, Xe(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = dt(), l.sibling = null, n = Ll.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || x ? Ye(t, n) : (u = n, dl(Vl, t), dl(Ll, u), Fl === null && (Fl = t)), x && iu(t, a.treeForkCount), l;
        }
        return hl(t), null;
      case 22:
      case 23:
        return St(t), Gi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), u = t.updateQueue, u !== null && af(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && pl(fa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), vu(Nl), hl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, hl(t), null;
    }
    throw Error(g(156, t.tag));
  }
  function Xs(l, t) {
    switch (bi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return vu(Nl), Ta(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return cn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (St(t), t.alternate === null)
            throw Error(g(340));
          ta();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (St(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(g(340));
          ta();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Xi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ta(), null;
      case 10:
        return vu(t.type), null;
      case 22:
      case 23:
        return St(t), Gi(), l !== null && pl(fa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return vu(Nl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fy(l, t) {
    switch (bi(t), t.tag) {
      case 3:
        vu(Nl), Ta();
        break;
      case 26:
      case 27:
      case 5:
        cn(t);
        break;
      case 4:
        Ta();
        break;
      case 31:
        t.memoizedState !== null && St(t);
        break;
      case 13:
        St(t);
        break;
      case 19:
        Xi(t);
        break;
      case 10:
        vu(t.type);
        break;
      case 22:
      case 23:
        St(t), Gi(), l !== null && pl(fa);
        break;
      case 24:
        vu(Nl);
    }
  }
  function Qe(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (i) {
      cl(t, t.return, i);
    }
  }
  function Yu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = u, d = i;
              try {
                d();
              } catch (r) {
                cl(
                  e,
                  c,
                  r
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (r) {
      cl(t, t.return, r);
    }
  }
  function iy(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Wv(t, u);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function cy(l, t, u) {
    u.props = ya(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      cl(l, t, a);
    }
  }
  function Kt(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode, n = eu(l.memoizedProps, e);
            (e.ref === null || e.ref.name !== n) && (e.ref = hm(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new _t(l);
              S(
                l.child,
                !1,
                M1,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (i) {
      cl(l, t, i);
    }
  }
  function Kl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          cl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          cl(l, t, e);
        }
      else u.current = null;
  }
  function ef(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        zm(
          l.stateNode,
          t[u]
        );
  }
  function vy(l) {
    for (var t = l.return; t !== null && (hc(t) && zm(l.stateNode, t.stateNode), !sc(t)); )
      t = t.return;
  }
  function pe(l) {
    for (var t = l.return; t !== null && (hc(t) && U1(l.stateNode, t.stateNode), !sc(t)); )
      t = t.return;
  }
  function sc(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function hc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function gc(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function rc(l, t, u) {
    try {
      var a = l.stateNode;
      o1(a, l.type, u, t), a[nt] = t;
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function oy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && pu(l.type) || l.tag === 4;
  }
  function Sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || oy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && pu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = xt)), ef(l, a), P = !0;
    else if (e !== 4 && (e === 27 && (ef(l, a), a = null, pu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (Tc(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Tc(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function nf(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), ef(l, a), P = !0;
    else if (e !== 4 && (e === 27 && (ef(l, a), a = null, pu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (nf(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        nf(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function yy(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Jl(t, a, u), t[Zl] = l, t[nt] = u;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var ff = !1, Tt = null;
  function my(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (ff = !0);
  }
  var Jt = null;
  function dy() {
    var l = Jt;
    return Jt = null, l;
  }
  var it = 0;
  function Va(l, t, u, a, e) {
    return it = 0, sy(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function sy(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var i = u0(f);
          a.push(i), i.view && (n = !0);
        } else
          n || u0(f).view && (n = !0);
        ff = !0, dm(
          f,
          it === 0 ? t : t + "_" + it,
          u
        ), it++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || sy(
        l.child,
        t,
        u,
        a,
        e
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function wt(l, t) {
    for (; l !== null; )
      l.tag === 5 ? sm(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function cf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (cf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(g(544));
          var u = t.name;
          t = nu(t.default, t.share), t !== "none" && (Va(
            l,
            u,
            t,
            null,
            !1
          ) || wt(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function Ec(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = eu(a, u), n = nu(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? Va(l, e, n, null, !1) ? (cf(l), u.paired || t || Ia(l, a.onEnter)) : wt(l.child, !1) : cf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Ec(l, t), l = l.sibling;
    else cf(l);
  }
  function zc(l) {
    if (Tt !== null && Tt.size !== 0) {
      var t = Tt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, a = u.name;
              if (a != null && a !== "auto") {
                var e = t.get(a);
                if (e !== void 0) {
                  var n = nu(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (Va(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, Ia(l, u.onShare)) : wt(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            zc(l);
          }
          l = l.sibling;
        }
    }
  }
  function bc(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = eu(t, l.stateNode), a = Tt !== null ? Tt.get(u) : void 0, e = nu(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (Va(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, Tt.delete(u), Ia(l, t.onShare)) : Ia(l, t.onExit) : wt(l.child, !1)), Tt !== null && zc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        bc(l), l = l.sibling;
    else
      Tt !== null && zc(l);
  }
  function hy(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = eu(t, l.stateNode);
        t = nu(t.default, t.update), l.flags &= -5, t !== "none" && Va(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && hy(l);
      l = l.sibling;
    }
  }
  function _c(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          _c(l);
        }
        l = l.sibling;
      }
  }
  function vf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), _c(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        vf(l), l = l.sibling;
    else _c(l);
  }
  function gy(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && gy(l), l = l.sibling;
  }
  function Oc(l, t, u, a, e, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && it < n.length) {
          var d = n[it], r = u0(c);
          (d.view || r.view) && (i = !0);
          var E;
          if (E = (l.flags & 4) === 0)
            if (r.clip) E = !0;
            else {
              E = d.rect;
              var y = r.rect;
              E = E.y !== y.y || E.x !== y.x || E.height !== y.height || E.width !== y.width;
            }
          E && (l.flags |= 4), r.abs ? r = !d.abs : (d = d.rect, r = r.rect, r = d.height !== r.height || d.width !== r.width), r && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && dm(
          c,
          it === 0 ? u : u + "_" + it,
          e
        ), i && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          c,
          it === 0 ? a : a + "_" + it,
          t.memoizedProps
        )), it++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Oc(
        l,
        t.child,
        u,
        a,
        e,
        n,
        f
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function ry(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = eu(u, a), n = nu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var i = l.child;
        it = 0, e = Oc(
          a,
          i,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && Ia(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && ry(l);
      l = l.sibling;
    }
  }
  var Bl = !1, nl = !1, $t = !1, Ac = !1, Sy = typeof WeakSet == "function" ? WeakSet : Set, Gl = null, Wt = !1, Ze = !1, of = !1, Nc = !1;
  function Qs(l, t, u) {
    if (l = l.containerInfo, Ic = ie, l = zv(l), mi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset, f = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, d = -1, r = 0, E = 0, y = l, h = null;
            t: for (; ; ) {
              for (var b; y !== a || n !== 0 && y.nodeType !== 3 || (c = i + n), y !== f || e !== 0 && y.nodeType !== 3 || (d = i + e), y.nodeType === 3 && (i += y.nodeValue.length), (b = y.firstChild) !== null; )
                h = y, y = b;
              for (; ; ) {
                if (y === l) break t;
                if (h === a && ++r === n && (c = i), h === f && ++E === e && (d = i), (b = y.nextSibling) !== null) break;
                y = h, h = y.parentNode;
              }
              y = b;
            }
            a = c === -1 || d === -1 ? null : { start: c, end: d };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kc = { focusedElem: l, selectionRange: a }, ie = !1, u = (u & 335544064) === u, Gl = t, t = u ? 9270 : 1024; Gl !== null; ) {
      if (l = Gl, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && bc(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && my(l), yf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && bc(a), yf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && my(l), yf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Gl = a) : (u && hy(l), yf(u));
      }
    }
    Tt = null;
  }
  function yf(l) {
    for (; Gl !== null; ) {
      var t = Gl, u = l, a = t.alternate, e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            u = void 0, e = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = ya(
                t.type,
                e
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (i) {
              cl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              n0(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  n0(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && a !== null && (u = eu(
            a.memoizedProps,
            a.stateNode
          ), e = t.memoizedProps, e = nu(e.default, e.update), e !== "none" && Va(
            a,
            u,
            e,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(g(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, Gl = a;
        break;
      }
      Gl = t.return;
    }
  }
  function Ty(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ft(l, u), a & 4 && Qe(5, u);
        break;
      case 1:
        if (Ft(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              cl(u, u.return, f);
            }
          else {
            var e = ya(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              cl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && iy(u), a & 512 && Kt(u, u.return);
        break;
      case 3:
        if (Ft(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Wv(l, t);
          } catch (f) {
            cl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && yy(u);
      case 26:
      case 5:
        Ft(l, u), t === null && a & 4 && gc(u), a & 512 && Kt(u, u.return);
        break;
      case 12:
        Ft(l, u);
        break;
      case 31:
        Ft(l, u), a & 4 && _y(l, u);
        break;
      case 13:
        Ft(l, u), a & 4 && Oy(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Is.bind(
          null,
          u
        ), H1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Bl, !a) {
          var n = t !== null && t.memoizedState !== null || nl;
          t = Bl, e = nl, Bl = a, (nl = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), jt(
            l,
            u,
            a
          )) : Ft(l, u), Bl = t, nl = e;
        }
        break;
      case 30:
        Ft(l, u), a & 512 && Kt(u, u.return);
        break;
      case 7:
        a & 512 && Kt(u, u.return);
      default:
        Ft(l, u);
    }
  }
  function Dc(l, t) {
    for (l = l.child; l !== null; )
      Ey(l, t), l = l.sibling;
  }
  function Ey(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (c) {
          cl(l, l.return, c);
        }
        Mc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, P = !0;
        } catch (c) {
          cl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? mm(i, !0) : mm(l.stateNode, !1);
        } catch (c) {
          cl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Dc(l, t);
        break;
      default:
        Dc(l, t);
    }
  }
  function Mc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              Ey(u, a);
              break l;
            case 22:
              u.memoizedState === null && Mc(u, a);
              break l;
            default:
              Mc(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function zy(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, zy(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && hn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Sl = null, ct = !1;
  function Bt(l, t, u) {
    for (u = u.child; u !== null; )
      by(l, t, u), u = u.sibling;
  }
  function by(l, t, u) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(oe, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        nl || Kl(u, t), Bt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !nl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        nl || Kl(u, t), pe(u);
        var a = Sl, e = ct;
        pu(u.type) && (Sl = u.stateNode, ct = !1), Bt(
          l,
          t,
          u
        ), Nm(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), Sl = a, ct = e;
        break;
      case 5:
        nl || Kl(u, t), pe(u);
      case 6:
        if (u.tag === 6 && pe(u), a = Sl, e = ct, Sl = null, Bt(
          l,
          t,
          u
        ), Sl = a, ct = e, Sl !== null)
          if (ct)
            try {
              (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(u.stateNode), P = !0;
            } catch (n) {
              cl(
                u,
                t,
                n
              );
            }
          else
            try {
              Sl.removeChild(u.stateNode), P = !0;
            } catch (n) {
              cl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        Sl !== null && (ct ? (l = Sl, ym(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ce(l)) : ym(Sl, u.stateNode));
        break;
      case 4:
        a = Sl, e = ct, Sl = u.stateNode.containerInfo, ct = !0, Bt(
          l,
          t,
          u
        ), Sl = a, ct = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yu(2, u, t), nl || Yu(4, u, t), Bt(
          l,
          t,
          u
        );
        break;
      case 1:
        nl || (Kl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && cy(
          u,
          t,
          a
        )), Bt(
          l,
          t,
          u
        );
        break;
      case 21:
        Bt(
          l,
          t,
          u
        );
        break;
      case 22:
        nl = (a = nl) || u.memoizedState !== null, Bt(
          l,
          t,
          u
        ), nl = a;
        break;
      case 30:
        Kl(u, t), Bt(
          l,
          t,
          u
        );
        break;
      case 7:
        nl || Kl(u, t), Bt(
          l,
          t,
          u
        );
        break;
      default:
        Bt(
          l,
          t,
          u
        );
    }
  }
  function _y(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ce(l);
      } catch (u) {
        cl(t, t.return, u);
      }
    }
  }
  function Oy(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ce(l);
      } catch (u) {
        cl(t, t.return, u);
      }
  }
  function ps(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Sy()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Sy()), t;
      default:
        throw Error(g(435, l.tag));
    }
  }
  function mf(l, t) {
    var u = ps(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = ks.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function tt(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (pu(c.type)) {
                Sl = c.stateNode, ct = !1;
                break l;
              }
              break;
            case 5:
              Sl = c.stateNode, ct = !1;
              break l;
            case 3:
            case 4:
              Sl = c.stateNode.containerInfo, ct = !0;
              break l;
          }
          c = c.return;
        }
        if (Sl === null) throw Error(g(160));
        by(f, i, n), Sl = null, ct = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ay(t, l, u), t = t.sibling;
  }
  var Gt = null;
  function Ay(l, t, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var f = a[n];
            f.ref.impl = f.nextImpl;
          }
        tt(t, l, u), ut(l), e & 4 && (Yu(3, l, l.return), Qe(3, l), Yu(5, l, l.return));
        break;
      case 1:
        tt(t, l, u), ut(l), e & 512 && (nl || a === null || Kl(a, a.return)), e & 64 && Bl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = Gt, tt(t, l, u), ut(l), e & 512 && (nl || a === null || Kl(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (Bl)
                  l.stateNode = cm(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, e = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        a = e.getElementsByTagName("title")[0], (!a || a[de] || a[Zl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(
                          a,
                          e.querySelector("head > title")
                        )), Jl(a, t, u), a[Zl] = l, Yl(a), t = a;
                        break l;
                      case "link":
                        if (n = Hm(
                          "link",
                          "href",
                          e
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Jl(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = Hm(
                          "meta",
                          "content",
                          e
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Jl(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(g(468, t));
                    }
                    a[Zl] = l, Yl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                Bl || m0(n, l.type, l.stateNode);
            else
              l.stateNode = Rm(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || nl || t.parentNode.removeChild(t)) : e.count--, u === null ? Bl || m0(n, l.type, l.stateNode) : Rm(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && rc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        tt(t, l, u), ut(l), e & 512 && (nl || a === null || Kl(a, a.return)), a !== null && e & 4 && rc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = $t, $t = !1, tt(t, l, u), $t = n, ut(l), e & 512 && (nl || a === null || Kl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Aa(t, ""), P = !0;
          } catch (r) {
            cl(l, l.return, r);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, rc(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (Ac = !0);
        break;
      case 6:
        if (tt(t, l, u), ut(l), e & 4) {
          if (l.stateNode === null)
            throw Error(g(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, P = !0;
          } catch (r) {
            cl(l, l.return, r);
          }
        }
        break;
      case 3:
        if (P = !1, Df = null, n = Gt, Gt = Fe(t.containerInfo), tt(t, l, u), Gt = n, ut(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ce(t.containerInfo);
          } catch (r) {
            cl(l, l.return, r);
          }
        Ac && (Ac = !1, Ny(l)), P = !1;
        break;
      case 4:
        e = $t, $t = Bl, a = K0(), n = Gt, Gt = Fe(
          l.stateNode.containerInfo
        ), tt(t, l, u), ut(l), Gt = n, P && Ze && (of = !0), P = a, $t = e;
        break;
      case 12:
        tt(t, l, u), ut(l);
        break;
      case 31:
        tt(t, l, u), ut(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 13:
        tt(t, l, u), ut(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hf = dt()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var i = Bl, c = nl, d = $t;
        Bl = i || n, $t = d || n, nl = c || f, tt(t, l, u), nl = c, $t = d, Bl = i, ut(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || Bl || nl || (t = f || nl, u = Bl, a = nl, Bl = n || Bl, nl = t, qu(l, 2), Bl = u, nl = a), !n && $t || Dc(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, mf(l, u))));
        break;
      case 19:
        tt(t, l, u), ut(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 30:
        e & 512 && (nl || a === null || Kl(a, a.return)), e = K0(), n = Ze, f = (u & 335544064) === u, i = l.memoizedProps, Ze = f && nu(
          i.default,
          i.update
        ) !== "none", tt(t, l, u), ut(l), f && a !== null && P && (l.flags |= 4), Ze = n, P = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (nl || a === null || Kl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        tt(t, l, u), ut(l);
    }
  }
  function ut(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (oy(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (hc(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (sc(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(g(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = Sc(l);
            nf(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (Aa(d, ""), u.flags &= -33);
            var r = Sc(l);
            nf(
              l,
              r,
              d,
              f
            );
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, y = Sc(l);
            Tc(
              l,
              y,
              E,
              f
            );
            break;
          default:
            throw Error(g(161));
        }
      } catch (h) {
        cl(l, l.return, h);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ny(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ny(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, ie = !0, t.reset(), ie = !1), l = l.sibling;
      }
  }
  function La(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Dy(t, l), t = t.sibling;
    else ry(t);
  }
  function Dy(l, t) {
    var u = l.alternate;
    if (u === null) Ec(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Nc = Wt = !1, dy(), La(t, l), !Wt && !of) {
            if (l = Jt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                sm(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + e + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Nc = !0;
          }
          Jt = null;
          break;
        case 5:
          La(t, l);
          break;
        case 4:
          a = Wt, Wt = !1, La(t, l), Wt && (of = !0), Wt = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Ec(l, !1) : La(t, l));
          break;
        case 30:
          a = Wt, e = dy(), Wt = !1, La(t, l), Wt && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = eu(n, f), f = eu(u.memoizedProps, f);
          var i = nu(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, it = 0, t = Oc(
            l,
            u,
            t,
            f,
            i,
            n,
            !0
          ), it !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Ia(
            l,
            l.memoizedProps.onUpdate
          ), Jt = e) : e !== null && (e.push.apply(e, Jt), Jt = e), Wt = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          La(t, l);
      }
  }
  function Ft(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ty(l, t.alternate, t), t = t.sibling;
  }
  function qu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yu(4, u, u.return), qu(
            u,
            a
          );
          break;
        case 1:
          Kl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && cy(
            u,
            u.return,
            e
          ), qu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Nm(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Kl(u, u.return), u.tag !== 5 && u.tag !== 27 || pe(u), qu(
            u,
            a
          );
          break;
        case 6:
          pe(u);
          break;
        case 26:
          Kl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || nl || e.parentNode.removeChild(e), qu(
            u,
            a
          );
          break;
        case 22:
          u.memoizedState === null && qu(
            u,
            a
          );
          break;
        case 30:
          Kl(u, u.return), qu(
            u,
            a
          );
          break;
        case 7:
          Kl(u, u.return);
        default:
          qu(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function jt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, i = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          jt(
            e,
            n,
            u
          ), Qe(4, n);
          break;
        case 1:
          if (jt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (r) {
              cl(a, a.return, r);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var d = e.shared.hiddenCallbacks;
              if (d !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < d.length; e++)
                  $v(d[e], c);
            } catch (r) {
              cl(a, a.return, r);
            }
          }
          i && f & 64 && iy(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && yy(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || vy(n), jt(
            e,
            n,
            u
          ), i && a === null && f & 4 && gc(n), Kt(n, n.return);
          break;
        case 6:
          vy(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Bl || m0(
            Fe(c.ownerDocument),
            n.type,
            c
          ), jt(
            e,
            n,
            u
          ), i && a === null && f & 4 && gc(n), Kt(n, n.return);
          break;
        case 12:
          jt(
            e,
            n,
            u
          );
          break;
        case 31:
          jt(
            e,
            n,
            u
          ), i && f & 4 && _y(e, n);
          break;
        case 13:
          jt(
            e,
            n,
            u
          ), i && f & 4 && Oy(e, n);
          break;
        case 22:
          n.memoizedState === null && jt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 30:
          jt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 7:
          Kt(n, n.return);
        default:
          jt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Uc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ne(u));
  }
  function Cc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ne(l));
  }
  function Ct(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        My(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && gy(t);
  }
  function My(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && vf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ct(
          l,
          t,
          u,
          a
        ), n & 2048 && Qe(9, t);
        break;
      case 1:
        Ct(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Ct(
          l,
          t,
          u,
          a
        ), e && Nc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Ne(n)));
        break;
      case 12:
        if (n & 2048) {
          Ct(
            l,
            t,
            u,
            a
          ), n = t.stateNode;
          try {
            var f = t.memoizedProps, i = f.id, c = f.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (d) {
            cl(t, t.return, d);
          }
        } else
          Ct(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Ct(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Ct(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (e && i !== null && i.memoizedState === null && vf(i), f._visibility & 2 ? Ct(
          l,
          t,
          u,
          a
        ) : xe(
          l,
          t
        )) : (e && i !== null && i.memoizedState !== null && vf(t), f._visibility & 2 ? Ct(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, Ka(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Uc(i, t);
        break;
      case 24:
        Ct(
          l,
          t,
          u,
          a
        ), n & 2048 && Cc(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (wt(n.child, !0), wt(t.child, !0))), Ct(
          l,
          t,
          u,
          a
        );
        break;
      default:
        Ct(
          l,
          t,
          u,
          a
        );
    }
  }
  function Ka(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            n,
            f,
            i,
            c,
            e
          ), Qe(8, f);
          break;
        case 23:
          break;
        case 22:
          var r = f.stateNode;
          f.memoizedState !== null ? r._visibility & 2 ? Ka(
            n,
            f,
            i,
            c,
            e
          ) : xe(
            n,
            f
          ) : (r._visibility |= 2, Ka(
            n,
            f,
            i,
            c,
            e
          )), e && d & 2048 && Uc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ka(
            n,
            f,
            i,
            c,
            e
          ), e && d & 2048 && Cc(f.alternate, f);
          break;
        default:
          Ka(
            n,
            f,
            i,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function xe(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            xe(u, a), e & 2048 && Uc(
              a.alternate,
              a
            );
            break;
          case 24:
            xe(u, a), e & 2048 && Cc(a.alternate, a);
            break;
          default:
            xe(u, a);
        }
        t = t.sibling;
      }
  }
  var ma = 8192;
  function da(l, t, u) {
    if (l.subtreeFlags & ma)
      for (l = l.child; l !== null; )
        Uy(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function Uy(l, t, u) {
    switch (l.tag) {
      case 26:
        da(
          l,
          t,
          u
        ), l.flags & ma && (l.memoizedState !== null ? J1(
          u,
          Gt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Gm(u, l)));
        break;
      case 5:
        da(
          l,
          t,
          u
        ), l.flags & ma && (l = l.stateNode, (t & 335544128) === t && Gm(u, l));
        break;
      case 3:
      case 4:
        var a = Gt;
        Gt = Fe(l.stateNode.containerInfo), da(
          l,
          t,
          u
        ), Gt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ma, ma = 16777216, da(
          l,
          t,
          u
        ), ma = a) : da(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & ma) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, Tt === null && (Tt = /* @__PURE__ */ new Map()), Tt.set(a, e);
        }
        da(
          l,
          t,
          u
        );
        break;
      default:
        da(
          l,
          t,
          u
        );
    }
  }
  function Cy(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Ve(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Gl = a, Hy(
            a,
            l
          );
        }
      Cy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ry(l), l = l.sibling;
  }
  function Ry(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ve(l), l.flags & 2048 && Yu(9, l, l.return);
        break;
      case 3:
        Ve(l);
        break;
      case 12:
        Ve(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, df(l)) : Ve(l);
        break;
      default:
        Ve(l);
    }
  }
  function df(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Gl = a, Hy(
            a,
            l
          );
        }
      Cy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Yu(8, t, t.return), df(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, df(t));
          break;
        default:
          df(t);
      }
      l = l.sibling;
    }
  }
  function Hy(l, t) {
    for (; Gl !== null; ) {
      var u = Gl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Yu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ne(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Gl = a;
      else
        l: for (u = l; Gl !== null; ) {
          a = Gl;
          var e = a.sibling, n = a.return;
          if (zy(a), a === u) {
            Gl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Gl = e;
            break l;
          }
          Gl = n;
        }
    }
  }
  var Zs = {
    getCacheForType: function(l) {
      var t = xl(Nl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return xl(Nl).controller.signal;
    }
  }, xs = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, ml = null, L = null, J = 0, il = 0, Et = null, Bu = !1, Ja = !1, Rc = !1, su = 0, _l = 0, Gu = 0, sa = 0, sf = 0, zt = 0, wa = 0, Le = null, vt = null, Hc = !1, hf = 0, Yy = 0, gf = 1 / 0, rf = null, ju = null, Tl = 0, Xt = null, ha = null, It = 0, Yc = 0, qc = null, qy = null, $a = null, Wa = null, Fa = null, Ke = 0, Sf = null;
  function bt() {
    return (tl & 2) !== 0 && J !== 0 ? J & -J : D.T !== null ? Lc() : G0();
  }
  function By() {
    if (zt === 0)
      if ((J & 536870912) === 0 || x) {
        var l = yn;
        yn <<= 1, (yn & 3932160) === 0 && (yn = 262144), zt = l;
      } else zt = 536870912;
    return l = Vl.current, l !== null && (l.flags |= 32), zt;
  }
  function Ia(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = hm(
        eu(l.memoizedProps, u)
      )), Wa === null && (Wa = []), Wa.push(t.bind(null, a));
    }
  }
  function ot(l, t, u) {
    (l === ml && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (ka(l, 0), Xu(
      l,
      J,
      zt,
      !1
    )), me(l, u), ((tl & 2) === 0 || l !== ml) && (l === ml && ((tl & 2) === 0 && (sa |= u), _l === 4 && Xu(
      l,
      J,
      zt,
      !1
    )), kt(l));
  }
  function Gy(l, t, u) {
    if ((tl & 6) !== 0) throw Error(g(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ye(l, t), e = a ? Ks(l, t) : Gc(l, t, !0), n = a;
    do {
      if (e === 0) {
        Ja && !a && Xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Vs(u)) {
          e = Gc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              e = Le;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (ka(i, f).flags |= 256), f = Gc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Rc && !c) {
                  i.errorRecoveryDisabledLanes |= n, sa |= n, e = 4;
                  break l;
                }
                n = vt, vt = e, n !== null && (vt === null ? vt = n : vt.push.apply(
                  vt,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ka(l, 0), Xu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(g(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Xu(
                a,
                t,
                zt,
                !Bu
              );
              break l;
            case 2:
              vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(g(329));
          }
          if ((t & 62914560) === t && (e = hf + 300 - dt(), 10 < e)) {
            if (Xu(
              a,
              t,
              zt,
              !Bu
            ), dn(a, 0, !0) !== 0) break l;
            It = t, a.timeoutHandle = t0(
              jy.bind(
                null,
                a,
                u,
                vt,
                rf,
                Hc,
                t,
                zt,
                sa,
                wa,
                Bu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          jy(
            a,
            u,
            vt,
            rf,
            Hc,
            t,
            zt,
            sa,
            wa,
            Bu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kt(l);
  }
  function jy(l, t, u, a, e, n, f, i, c, d, r, E, y, h) {
    l.timeoutHandle = -1;
    var b = t.subtreeFlags, N = (n & 335544064) === n;
    if (E = null, (N || b & 8192 || (b & 16785408) === 16785408) && (E = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: xt
    }, Tt = null, Uy(
      t,
      n,
      E
    ), N && (b = E, N = l.containerInfo, N = (N.nodeType === 9 ? N : N.ownerDocument).__reactViewTransition, N != null && (b.count++, b.waitingForViewTransition = !0, b = Pe.bind(b), N.finished.then(b, b))), b = (n & 62914560) === n ? hf - dt() : (n & 4194048) === n ? Yy - dt() : 0, b = w1(
      E,
      b
    ), b !== null)) {
      It = n, l.cancelPendingCommit = b(
        Ky.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          i,
          c,
          d,
          r,
          E,
          null,
          y,
          h
        )
      ), Xu(l, n, f, !d);
      return;
    }
    Ky(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      i,
      c,
      d,
      r,
      E
    );
  }
  function Vs(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!rt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Xu(l, t, u, a) {
    t = R0(l, t), t &= ~sf, t &= ~sa, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ht(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Y0(l, u, t);
  }
  function Tf() {
    return (tl & 6) === 0 ? (Je(0), !1) : !0;
  }
  function Bc() {
    if (L !== null) {
      if (il === 0)
        var l = L.return;
      else
        l = L, cu = ua = null, Vi(l), Xa = null, Ue = 0, l = L;
      for (; l !== null; )
        fy(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function ka(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, d1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), It = 0, Bc(), ml = l, L = u = fu(l.current, null), J = t, il = 0, Et = null, Bu = !1, Ja = ye(l, t), Rc = !1, wa = zt = sf = sa = Gu = _l = 0, vt = Le = null, Hc = !1, su = R0(l, t), Nn(), u;
  }
  function Xy(l, t) {
    Q = null, D.H = In, t === ja || t === jn ? (t = Lv(), il = 3) : t === Ci ? (t = Lv(), il = 4) : il = t === ec ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, L === null && (_l = 1, kn(
      l,
      Nt(t, l.current)
    ));
  }
  function Qy() {
    var l = Vl.current;
    return l === null ? !0 : (J & 4194048) === J ? Fl === null : (J & 62914560) === J || (J & 536870912) !== 0 ? l === Fl : !1;
  }
  function py() {
    var l = D.H;
    return D.H = In, l === null ? In : l;
  }
  function Zy() {
    var l = D.A;
    return D.A = Zs, l;
  }
  function Ef() {
    _l = 4, Bu || (J & 4194048) !== J && Vl.current !== null || (Ja = !0), (Gu & 134217727) === 0 && (sa & 134217727) === 0 || ml === null || Xu(
      ml,
      J,
      zt,
      !1
    );
  }
  function Gc(l, t, u) {
    var a = tl;
    tl |= 2;
    var e = py(), n = Zy();
    (ml !== l || J !== t) && (rf = null, ka(l, t)), t = !1;
    var f = _l;
    l: do
      try {
        if (il !== 0 && L !== null) {
          var i = L, c = Et;
          switch (il) {
            case 8:
              Bc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Vl.current === null && (t = !0);
              var d = il;
              if (il = 0, Et = null, Pa(l, i, c, d), u && Ja) {
                f = 0;
                break l;
              }
              break;
            default:
              d = il, il = 0, Et = null, Pa(l, i, c, d);
          }
        }
        Ls(), f = _l;
        break;
      } catch (r) {
        Xy(l, r);
      }
    while (!0);
    return t && l.shellSuspendCounter++, cu = ua = null, tl = a, D.H = e, D.A = n, L === null && (ml = null, J = 0, Nn()), f;
  }
  function Ls() {
    for (; L !== null; ) xy(L);
  }
  function Ks(l, t) {
    var u = tl;
    tl |= 2;
    var a = py(), e = Zy();
    ml !== l || J !== t ? (rf = null, gf = dt() + 500, ka(l, t)) : Ja = ye(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && L !== null) {
          t = L;
          var n = Et;
          t: switch (il) {
            case 1:
              il = 0, Et = null, Pa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (xv(n)) {
                il = 0, Et = null, Vy(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || ml !== l || (il = 7), kt(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              xv(n) ? (il = 0, Et = null, Vy(t)) : (il = 0, Et = null, Pa(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var i = L;
                  if (f ? qm(f) : i.stateNode.complete) {
                    il = 0, Et = null;
                    var c = i.sibling;
                    if (c !== null) L = c;
                    else {
                      var d = i.return;
                      d !== null ? (L = d, zf(d)) : L = null;
                    }
                    break t;
                  }
              }
              il = 0, Et = null, Pa(l, t, n, 5);
              break;
            case 6:
              il = 0, Et = null, Pa(l, t, n, 6);
              break;
            case 8:
              Bc(), _l = 6;
              break l;
            default:
              throw Error(g(462));
          }
        }
        Js();
        break;
      } catch (r) {
        Xy(l, r);
      }
    while (!0);
    return cu = ua = null, D.H = a, D.A = e, tl = u, L !== null ? 0 : (ml = null, J = 0, Nn(), _l);
  }
  function Js() {
    for (; L !== null && !vd(); )
      xy(L);
  }
  function xy(l) {
    var t = ey(l.alternate, l, su);
    l.memoizedProps = l.pendingProps, t === null ? zf(l) : L = t;
  }
  function Vy(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Io(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          J
        );
        break;
      case 11:
        t = Io(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          J
        );
        break;
      case 5:
        Vi(t);
        var a = t;
        a === ql && (x ? (Hn(a), a.tag === 5 && a.stateNode != null && (sl = a.stateNode)) : (Hn(a), x = !0));
      default:
        fy(u, t), t = L = Rv(t, su), t = ey(u, t, su);
    }
    l.memoizedProps = l.pendingProps, t === null ? zf(l) : L = t;
  }
  function Pa(l, t, u, a) {
    cu = ua = null, Vi(t), Xa = null, Ue = 0;
    var e = t.return;
    try {
      if (Ys(
        l,
        e,
        t,
        u,
        J
      )) {
        _l = 1, kn(
          l,
          Nt(u, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      _l = 1, kn(
        l,
        Nt(u, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (x || a === 1 ? l = !0 : Ja || (J & 536870912) !== 0 ? l = !1 : (Bu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Vl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ly(t, l)) : zf(t);
  }
  function zf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ly(
          t,
          Bu
        );
        return;
      }
      l = t.return;
      var u = js(
        t.alternate,
        t,
        su
      );
      if (u !== null) {
        L = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    _l === 0 && (_l = 5);
  }
  function Ly(l, t) {
    do {
      var u = Xs(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, L = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        L = l;
        return;
      }
      L = l = u;
    } while (l !== null);
    _l = 6, L = null;
  }
  function Ky(l, t, u, a, e, n, f, i, c, d, r, E) {
    l.cancelPendingCommit = null;
    do
      bf();
    while (Tl !== 0);
    if ((tl & 6) !== 0) throw Error(g(327));
    if (t !== null) {
      if (t === l.current) throw Error(g(177));
      l === ml && (L = ml = null, J = 0), ha = t, Xt = l, It = u, qc = e, qy = a, ws(
        l,
        t,
        u,
        f,
        i,
        c,
        E
      );
    }
  }
  function ws(l, t, u, a, e, n, f) {
    var i = t.lanes | t.childLanes;
    if (Yc = i, i |= ri, Td(
      l,
      u,
      i,
      a,
      e,
      n
    ), Wa = null, (u & 335544064) === u ? (Fa = zs(l), a = 10262) : (Fa = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ps(vn, function() {
      return pc(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), ff = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = D.T, D.T = null, e = j.p, j.p = 2, n = tl, tl |= 4;
      try {
        Qs(l, t, u);
      } finally {
        tl = n, j.p = e, D.T = a;
      }
    }
    Tl = 1, ff ? $a = T1(
      f,
      l.containerInfo,
      Fa,
      jc,
      Xc,
      Ws,
      Qc,
      pc,
      $s
    ) : (jc(), Xc(), Qc());
  }
  function $s(l) {
    if (Tl !== 0) {
      var t = Xt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Ws() {
    Tl === 3 && (Tl = 0, Dy(ha, Xt), Tl = 4);
  }
  function jc() {
    if (Tl === 1) {
      Tl = 0;
      var l = Xt, t = ha, u = It, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null;
        var e = j.p;
        j.p = 2;
        var n = tl;
        tl |= 4;
        try {
          Ze = of = !1, Ay(t, l, u), u = kc;
          var f = zv(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && Ev(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && mi(i)) {
              var d = c.start, r = c.end;
              if (r === void 0 && (r = d), "selectionStart" in i)
                i.selectionStart = d, i.selectionEnd = Math.min(
                  r,
                  i.value.length
                );
              else {
                var E = i.ownerDocument || document, y = E && E.defaultView || window;
                if (y.getSelection) {
                  var h = y.getSelection(), b = i.textContent.length, N = Math.min(c.start, b), p = c.end === void 0 ? N : Math.min(c.end, b);
                  !h.extend && N > p && (f = p, p = N, N = f);
                  var m = Tv(
                    i,
                    N
                  ), v = Tv(
                    i,
                    p
                  );
                  if (m && v && (h.rangeCount !== 1 || h.anchorNode !== m.node || h.anchorOffset !== m.offset || h.focusNode !== v.node || h.focusOffset !== v.offset)) {
                    var s = E.createRange();
                    s.setStart(m.node, m.offset), h.removeAllRanges(), N > p ? (h.addRange(s), h.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset), h.addRange(s));
                  }
                }
              }
            }
            for (E = [], h = i; h = h.parentNode; )
              h.nodeType === 1 && E.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var T = E[i];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          ie = !!Ic, kc = Ic = null;
        } finally {
          tl = n, j.p = e, D.T = a;
        }
      }
      l.current = t, Tl = 2;
    }
  }
  function Xc() {
    if (Tl === 2) {
      Tl = 0;
      var l = Xt, t = ha, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = D.T, D.T = null;
        var a = j.p;
        j.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Ty(l, t.alternate, t);
        } finally {
          tl = e, j.p = a, D.T = u;
        }
      }
      Tl = 3;
    }
  }
  function Qc() {
    if (Tl === 4 || Tl === 3) {
      Tl = 0;
      var l = $a;
      $a = null, od();
      var t = Xt, u = ha, a = It, e = qy, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? Tl = 5 : (Tl = 0, ha = Xt = null, Jy(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (ju = null), $f(a), u = u.stateNode, st && typeof st.onCommitFiberRoot == "function")
        try {
          st.onCommitFiberRoot(
            oe,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = D.T, n = j.p, j.p = 2, D.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          D.T = u, j.p = n;
        }
      }
      if (e = Wa, f = Fa, Fa = null, e !== null && (Wa = null, f === null && (f = []), l !== null))
        for (c = 0; c < e.length; c++)
          u = (0, e[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (It & 3) !== 0 && bf(), kt(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Sf ? Ke++ : (Ke = 0, Sf = t) : (Ke = 0, Sf = null), Je(0);
    }
  }
  function Jy(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ne(t)));
  }
  function bf() {
    return $a !== null && ($a.skipTransition(), $a = null), jc(), Xc(), Qc(), pc();
  }
  function pc() {
    if (Tl !== 5) return !1;
    var l = Xt, t = Yc;
    Yc = 0;
    var u = $f(It), a = D.T, e = j.p;
    try {
      j.p = 32 > u ? 32 : u, D.T = null, u = qc, qc = null;
      var n = Xt, f = It;
      if (Tl = 0, ha = Xt = null, It = 0, (tl & 6) !== 0) throw Error(g(331));
      var i = tl;
      if (tl |= 4, Ry(n.current), My(
        n,
        n.current,
        f,
        u
      ), tl = i, Je(0, !1), st && typeof st.onPostCommitFiberRoot == "function")
        try {
          st.onPostCommitFiberRoot(oe, n);
        } catch {
        }
      return !0;
    } finally {
      j.p = e, D.T = a, Jy(l, t);
    }
  }
  function wy(l, t, u) {
    t = Nt(u, t), t = ac(l.stateNode, t, 2), l = Uu(l, t, 2), l !== null && (me(l, 2), kt(l));
  }
  function cl(l, t, u) {
    if (l.tag === 3)
      wy(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wy(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ju === null || !ju.has(a))) {
            l = Nt(u, l), u = Vo(2), a = Uu(t, u, 2), a !== null && (Lo(
              u,
              a,
              t,
              l
            ), me(a, 2), kt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new xs();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Rc = !0, e.add(u), l = Fs.bind(null, l, t, u), t.then(l, l));
  }
  function Fs(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ml === l && (J & u) === u && ((_l === 4 || _l === 3 && (J & 62914560) === J && 300 > dt() - hf) && (tl & 2) === 0 ? ka(l, 0) : sf |= u, wa === J && (wa = 0)), kt(l);
  }
  function $y(l, t) {
    t === 0 && (t = H0()), l = Pu(l, t), l !== null && (me(l, t), kt(l));
  }
  function Is(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), $y(l, u);
  }
  function ks(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(g(314));
    }
    a !== null && a.delete(t), $y(l, u);
  }
  function Ps(l, t) {
    return Lf(l, t);
  }
  var le = null, te = null, xc = !1, _f = !1, Vc = !1, Qu = 0;
  function kt(l) {
    l !== te && l.next === null && (te === null ? le = te = l : te = te.next = l), _f = !0, xc || (xc = !0, t1());
  }
  function Je(l, t) {
    if (!Vc && _f) {
      Vc = !0;
      do
        for (var u = !1, a = le; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - ht(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ky(a, n));
          } else
            n = J, n = dn(
              a,
              a === ml ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || ye(a, n) || (u = !0, ky(a, n));
          a = a.next;
        }
      while (u);
      Vc = !1;
    }
  }
  function l1() {
    Wy();
  }
  function Wy() {
    _f = xc = !1;
    var l = 0;
    Qu !== 0 && m1() && (l = Qu);
    for (var t = dt(), u = null, a = le; a !== null; ) {
      var e = a.next, n = Fy(a, t);
      n === 0 ? (a.next = null, u === null ? le = e : u.next = e, e === null && (te = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (_f = !0)), a = e;
    }
    Tl !== 0 && Tl !== 5 || Je(l), Qu !== 0 && (Qu = 0);
  }
  function Fy(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ht(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = Sd(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = ml, u = J, u = dn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Kf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ye(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Kf(a), $f(u)) {
        case 2:
        case 8:
          u = U0;
          break;
        case 32:
          u = vn;
          break;
        case 268435456:
          u = C0;
          break;
        default:
          u = vn;
      }
      return a = Iy.bind(null, l), u = Lf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Kf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Iy(l, t) {
    if (Tl !== 0 && Tl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (bf() && l.callbackNode !== u)
      return null;
    var a = J;
    return a = dn(
      l,
      l === ml ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Gy(l, a, t), Fy(l, dt()), l.callbackNode != null && l.callbackNode === u ? Iy.bind(null, l) : null);
  }
  function ky(l, t) {
    if (bf()) return null;
    Gy(l, t, !0);
  }
  function t1() {
    s1(function() {
      (tl & 6) !== 0 ? Lf(
        M0,
        l1
      ) : Wy();
    });
  }
  function Lc() {
    if (Qu === 0) {
      var l = na;
      l === 0 && (l = on, on <<= 1, (on & 261888) === 0 && (on = 256)), Qu = l;
    }
    return Qu;
  }
  function Py(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Sn(l);
  }
  function u1(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Py(
        (e[nt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[nt] || null) ? Py(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new bn(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Qu !== 0) {
                  var c = new FormData(e, f);
                  ki(
                    u,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = new FormData(e, f), ki(
                  u,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Kc = 0; Kc < gi.length; Kc++) {
    var Jc = gi[Kc], a1 = Jc.toLowerCase(), e1 = Jc[0].toUpperCase() + Jc.slice(1);
    qt(
      a1,
      "on" + e1
    );
  }
  qt(Ov, "onAnimationEnd"), qt(Av, "onAnimationIteration"), qt(Nv, "onAnimationStart"), qt("dblclick", "onDoubleClick"), qt("focusin", "onFocus"), qt("focusout", "onBlur"), qt(ds, "onTransitionRun"), qt(ss, "onTransitionStart"), qt(hs, "onTransitionCancel"), qt(Dv, "onTransitionEnd"), _a("onMouseEnter", ["mouseout", "mouseover"]), _a("onMouseLeave", ["mouseout", "mouseover"]), _a("onPointerEnter", ["pointerout", "pointerover"]), _a("onPointerLeave", ["pointerout", "pointerover"]), Fu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var we = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), n1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(we)
  );
  function lm(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], c = i.instance, d = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = d;
            try {
              n(e);
            } catch (r) {
              An(r);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], c = i.instance, d = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = d;
            try {
              n(e);
            } catch (r) {
              An(r);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function K(l, t) {
    var u = t[X0];
    u === void 0 && (u = t[X0] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (tm(t, l, 2, !1), u.add(a));
  }
  function wc(l, t, u) {
    var a = 0;
    t && (a |= 4), tm(
      u,
      l,
      a,
      t
    );
  }
  var Of = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(l) {
    if (!l[Of]) {
      l[Of] = !0, Z0.forEach(function(u) {
        u !== "selectionchange" && (n1.has(u) || wc(u, !1, l), wc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Of] || (t[Of] = !0, wc("selectionchange", !1, t));
    }
  }
  function tm(l, t, u, a) {
    switch (Lm(t)) {
      case 2:
        var e = I1;
        break;
      case 8:
        e = k1;
        break;
      default:
        e = s0;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Wc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var i = a.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Wu(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              a = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    lv(function() {
      var d = n, r = li(u), E = [];
      l: {
        var y = Mv.get(l);
        if (y !== void 0) {
          var h = bn, b = l;
          switch (l) {
            case "keypress":
              if (En(u) === 0) break l;
            case "keydown":
            case "keyup":
              h = Vd;
              break;
            case "focusin":
              b = "focus", h = fi;
              break;
            case "focusout":
              b = "blur", h = fi;
              break;
            case "beforeblur":
            case "afterblur":
              h = fi;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = av;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Rd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = $d;
              break;
            case Ov:
            case Av:
            case Nv:
              h = qd;
              break;
            case Dv:
              h = Fd;
              break;
            case "scroll":
            case "scrollend":
              h = Ud;
              break;
            case "wheel":
              h = kd;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Gd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = nv;
              break;
            case "submit":
              h = Jd;
              break;
            case "toggle":
            case "beforetoggle":
              h = ls;
          }
          var N = (t & 4) !== 0, p = !N && (l === "scroll" || l === "scrollend"), m = N ? y !== null ? y + "Capture" : null : y;
          N = [];
          for (var v = d, s; v !== null; ) {
            var T = v;
            if (s = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || s === null || m === null || (T = he(v, m), T != null && N.push(
              $e(v, T, s)
            )), p) break;
            v = v.return;
          }
          0 < N.length && (y = new h(
            y,
            b,
            null,
            u,
            r
          ), E.push({ event: y, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", y = l === "mouseout" || l === "pointerout", h && u !== Pf && (b = u.relatedTarget || u.fromElement) && (Wu(b) || b[Ea]))
            break l;
          (y || h) && (b = r.window === r ? r : (h = r.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (h = u.relatedTarget || u.toElement, y = d, h = h ? Wu(h) : null, h !== null && (p = El(h), N = h.tag, h !== p || N !== 5 && N !== 27 && N !== 6) && (h = null)) : (y = null, h = d), y !== h && (N = av, T = "onMouseLeave", m = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (N = nv, T = "onPointerLeave", m = "onPointerEnter", v = "pointer"), p = y == null ? b : se(y), s = h == null ? b : se(h), b = new N(
            T,
            v + "leave",
            y,
            u,
            r
          ), b.target = p, b.relatedTarget = s, T = null, Wu(r) === d && (N = new N(
            m,
            v + "enter",
            h,
            u,
            r
          ), N.target = s, N.relatedTarget = p, T = N), p = T, N = y && h ? $l(
            y,
            h,
            f1
          ) : null, y !== null && um(
            E,
            b,
            y,
            N,
            !1
          ), h !== null && p !== null && um(
            E,
            p,
            h,
            N,
            !0
          )));
        }
        l: {
          if (y = d ? se(d) : window, h = y.nodeName && y.nodeName.toLowerCase(), h === "select" || h === "input" && y.type === "file")
            var A = dv;
          else if (yv(y))
            if (sv)
              A = os;
            else {
              A = cs;
              var w = is;
            }
          else
            h = y.nodeName, !h || h.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? d && kf(d.elementType) && (A = dv) : A = vs;
          if (A && (A = A(l, d))) {
            mv(
              E,
              A,
              u,
              r
            );
            break l;
          }
          w && w(l, y, d);
        }
        switch (w = d ? se(d) : window, l) {
          case "focusin":
            (yv(w) || w.contentEditable === "true") && (Ua = w, di = d, _e = null);
            break;
          case "focusout":
            _e = di = Ua = null;
            break;
          case "mousedown":
            si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            si = !1, bv(E, u, r);
            break;
          case "selectionchange":
            if (ms) break;
          case "keydown":
          case "keyup":
            bv(E, u, r);
        }
        var U;
        if (ci)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Ma ? vv(l, u) && (q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (q = "onCompositionStart");
        q && (fv && u.locale !== "ko" && (Ma || q !== "onCompositionStart" ? q === "onCompositionEnd" && Ma && (U = tv()) : (Eu = r, ai = "value" in Eu ? Eu.value : Eu.textContent, Ma = !0)), w = Af(d, q), 0 < w.length && (q = new ev(
          q,
          l,
          null,
          u,
          r
        ), E.push({ event: q, listeners: w }), U ? q.data = U : (U = ov(u), U !== null && (q.data = U)))), (U = us ? as(l, u) : es(l, u)) && (q = Af(d, "onBeforeInput"), 0 < q.length && (w = new ev(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          r
        ), E.push({
          event: w,
          listeners: q
        }), w.data = U)), u1(
          E,
          l,
          d,
          u,
          r
        );
      }
      lm(E, t);
    });
  }
  function $e(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Af(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = he(l, u), e != null && a.unshift(
        $e(l, e, n)
      ), e = he(l, t), e != null && a.push(
        $e(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function f1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function um(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var i = u, c = i.alternate, d = i.stateNode;
      if (i = i.tag, c !== null && c === a) break;
      i !== 5 && i !== 26 && i !== 27 || d === null || (c = d, e ? (d = he(u, n), d != null && f.unshift(
        $e(u, d, c)
      )) : e || (d = he(u, n), d != null && f.push(
        $e(u, d, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var i1 = /\r\n?/g, c1 = /\u0000|\uFFFD/g;
  function am(l) {
    return (typeof l == "string" ? l : "" + l).replace(i1, `
`).replace(c1, "");
  }
  function em(l, t) {
    return t = am(t), am(l) === t;
  }
  function vl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Aa(l, "" + a);
        else return;
        break;
      case "className":
        rn(l, "class", a);
        break;
      case "tabIndex":
        rn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rn(l, u, a);
        break;
      case "style":
        k0(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          rn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Sn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && vl(l, t, "name", e.name, e, null), vl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), vl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), vl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (vl(l, t, "encType", e.encType, e, null), vl(l, t, "method", e.method, e, null), vl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Sn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = xt);
        return;
      case "onScroll":
        a != null && K("scroll", l);
        return;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(g(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(g(60));
            (n != null ? n.__html : void 0) !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Sn(a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), gn(l, "popover", a);
        break;
      case "xlinkActuate":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        gn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Dd.get(u) || u, gn(l, u, a);
        else return;
    }
    P = !0;
  }
  function Fc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        k0(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(g(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(g(60));
            (n != null ? n.__html : void 0) !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Aa(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && K("scroll", l);
        return;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = xt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!x0.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[nt] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            P = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : gn(l, u, a);
          }
        return;
    }
    P = !0;
  }
  function Jl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(g(137, t));
                default:
                  vl(l, t, n, f, u, null);
              }
          }
        e && vl(l, t, "srcSet", u.srcSet, u, null), a && vl(l, t, "src", u.src, u, null);
        return;
      case "input":
        K("invalid", l);
        var i = n = f = e = null, c = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var r = u[a];
            if (r != null)
              switch (a) {
                case "name":
                  e = r;
                  break;
                case "type":
                  f = r;
                  break;
                case "checked":
                  c = r;
                  break;
                case "defaultChecked":
                  d = r;
                  break;
                case "value":
                  n = r;
                  break;
                case "defaultValue":
                  i = r;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (r != null)
                    throw Error(g(137, t));
                  break;
                default:
                  vl(l, t, a, r, u, null);
              }
          }
        $0(
          l,
          n,
          i,
          c,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        K("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (i = u[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                a = i;
              default:
                vl(l, t, e, i, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Oa(l, !!a, t, !1) : u != null && Oa(l, !!a, u, !0);
        return;
      case "textarea":
        K("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(g(91));
                break;
              default:
                vl(l, t, f, i, u, null);
            }
        F0(l, a, e, n);
        return;
      case "option":
        for (c in u)
          if (u.hasOwnProperty(c) && (a = u[c], a != null))
            switch (c) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                vl(l, t, c, a, u, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < we.length; a++)
          K(we[a], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(137, t));
              default:
                vl(l, t, d, a, u, null);
            }
        return;
      default:
        if (kf(t)) {
          for (r in u)
            u.hasOwnProperty(r) && (a = u[r], a !== void 0 && Fc(
              l,
              t,
              r,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (a = u[i], a != null && vl(l, t, i, a, u, null));
  }
  var v1 = {};
  function o1(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, i = null, c = null, d = null, r = null;
        for (h in u) {
          var E = u[h];
          if (u.hasOwnProperty(h) && E != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = E;
              default:
                a.hasOwnProperty(h) || vl(l, t, h, null, a, E);
            }
        }
        for (var y in a) {
          var h = a[y];
          if (E = u[y], a.hasOwnProperty(y) && (h != null || E != null))
            switch (y) {
              case "type":
                h !== E && (P = !0), n = h;
                break;
              case "name":
                h !== E && (P = !0), e = h;
                break;
              case "checked":
                h !== E && (P = !0), d = h;
                break;
              case "defaultChecked":
                h !== E && (P = !0), r = h;
                break;
              case "value":
                h !== E && (P = !0), f = h;
                break;
              case "defaultValue":
                h !== E && (P = !0), i = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(g(137, t));
                break;
              default:
                h !== E && vl(
                  l,
                  t,
                  y,
                  h,
                  a,
                  E
                );
            }
        }
        Ff(
          l,
          f,
          i,
          c,
          d,
          r,
          n,
          e
        );
        return;
      case "select":
        h = f = i = y = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = c;
              default:
                a.hasOwnProperty(n) || vl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  c
                );
            }
        for (e in a)
          if (n = a[e], c = u[e], a.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                n !== c && (P = !0), y = n;
                break;
              case "defaultValue":
                n !== c && (P = !0), i = n;
                break;
              case "multiple":
                n !== c && (P = !0), f = n;
              default:
                n !== c && vl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  c
                );
            }
        t = i, u = f, a = h, y != null ? Oa(l, !!u, y, !1) : !!a != !!u && (t != null ? Oa(l, !!u, t, !0) : Oa(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        h = y = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                vl(l, t, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                e !== n && (P = !0), y = e;
                break;
              case "defaultValue":
                e !== n && (P = !0), h = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(g(91));
                break;
              default:
                e !== n && vl(l, t, f, e, a, n);
            }
        W0(l, y, h);
        return;
      case "option":
        for (var b in u)
          if (y = u[b], u.hasOwnProperty(b) && y != null && !a.hasOwnProperty(b))
            switch (b) {
              case "selected":
                l.selected = !1;
                break;
              default:
                vl(
                  l,
                  t,
                  b,
                  null,
                  a,
                  y
                );
            }
        for (c in a)
          if (y = a[c], h = u[c], a.hasOwnProperty(c) && y !== h && (y != null || h != null))
            switch (c) {
              case "selected":
                y !== h && (P = !0), l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                vl(
                  l,
                  t,
                  c,
                  y,
                  a,
                  h
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in u)
          y = u[N], u.hasOwnProperty(N) && y != null && !a.hasOwnProperty(N) && vl(l, t, N, null, a, y);
        for (d in a)
          if (y = a[d], h = u[d], a.hasOwnProperty(d) && y !== h && (y != null || h != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(g(137, t));
                break;
              default:
                vl(
                  l,
                  t,
                  d,
                  y,
                  a,
                  h
                );
            }
        return;
      default:
        if (kf(t)) {
          for (var p in u)
            y = u[p], u.hasOwnProperty(p) && y !== void 0 && !a.hasOwnProperty(p) && Fc(
              l,
              t,
              p,
              void 0,
              a,
              y
            );
          for (r in a)
            y = a[r], h = u[r], !a.hasOwnProperty(r) || y === h || y === void 0 && h === void 0 || Fc(
              l,
              t,
              r,
              y,
              a,
              h
            );
          return;
        }
    }
    for (var m in u)
      y = u[m], u.hasOwnProperty(m) && y != null && !a.hasOwnProperty(m) && vl(l, t, m, null, a, y);
    for (E in a)
      y = a[E], h = u[E], !a.hasOwnProperty(E) || y === h || y == null && h == null || vl(l, t, E, y, a, h);
  }
  function nm(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function y1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && nm(f)) {
          for (f = 0, i = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a], d = c.startTime;
            if (d > i) break;
            var r = c.transferSize, E = c.initiatorType;
            r && nm(E) && (c = c.responseEnd, f += r * (c < i ? 1 : (i - d) / (c - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ic = null, kc = null;
  function We(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function fm(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function im(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function cm(l, t, u, a) {
    return u = We(
      u
    ).createElement(l), u[Zl] = a, u[nt] = t, Jl(u, l, t), Yl(u), u;
  }
  function Pc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var l0 = null;
  function m1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === l0 ? !1 : (l0 = l, !0) : (l0 = null, !1);
  }
  var t0 = typeof setTimeout == "function" ? setTimeout : void 0, d1 = typeof clearTimeout == "function" ? clearTimeout : void 0, vm = typeof Promise == "function" ? Promise : void 0, om = typeof requestAnimationFrame == "function" ? requestAnimationFrame : t0, s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof vm < "u" ? function(l) {
    return vm.resolve(null).then(l).catch(h1);
  } : t0;
  function h1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function pu(l) {
    return l === "head";
  }
  function ym(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), ce(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          v0(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, v0(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[de] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && v0(l.ownerDocument.body);
      u = e;
    } while (u);
    ce(t);
  }
  function mm(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function dm(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var e = a = 0; e < t.length; e++) {
          var n = t[e];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function sm(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function g1(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function u0(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return g1(t, u, l);
  }
  function r1(l) {
    return l.documentElement.clientHeight;
  }
  function S1(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function T1(l, t, u, a, e, n, f, i, c) {
    var d = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var r = d.startViewTransition({
        update: function() {
          var y = d.defaultView, h = y.navigation && y.navigation.transition, b = d.fonts.status;
          a();
          var N = [];
          if (b === "loaded" && (r1(d), d.fonts.status === "loading" && N.push(d.fonts.ready)), b = N.length, l !== null)
            for (var p = l.suspenseyImages, m = 0, v = 0; v < p.length; v++) {
              var s = p[v];
              if (!s.complete) {
                var T = s.getBoundingClientRect();
                if (0 < T.bottom && 0 < T.right && T.top < y.innerHeight && T.left < y.innerWidth) {
                  if (m += Bm(s), m > Mf) {
                    N.length = b;
                    break;
                  }
                  s = new Promise(
                    S1.bind(s)
                  ), N.push(s);
                }
              }
            }
          if (0 < N.length)
            return y = Promise.race([
              Promise.all(N),
              new Promise(function(A) {
                return setTimeout(A, 500);
              })
            ]).then(e, e), (h ? Promise.allSettled([h.finished, y]) : y).then(n, n);
          if (e(), h)
            return h.finished.then(
              n,
              n
            );
          n();
        },
        types: u
      });
      d.__reactViewTransition = r;
      var E = [];
      return r.ready.then(
        function() {
          for (var y = d.documentElement.getAnimations({
            subtree: !0
          }), h = 0; h < y.length; h++) {
            var b = y[h], N = b.effect, p = N.pseudoElement;
            if (p != null && p.startsWith("::view-transition")) {
              E.push(b), b = N.getKeyframes();
              for (var m = p = void 0, v = !0, s = 0; s < b.length; s++) {
                var T = b[s], A = T.width;
                if (p === void 0) p = A;
                else if (p !== A) {
                  v = !1;
                  break;
                }
                if (A = T.height, m === void 0) m = A;
                else if (m !== A) {
                  v = !1;
                  break;
                }
                delete T.width, delete T.height, T.transform === "none" && delete T.transform;
              }
              v && p !== void 0 && m !== void 0 && (N.setKeyframes(b), v = getComputedStyle(
                N.target,
                N.pseudoElement
              ), v.width !== p || v.height !== m) && (v = b[0], v.width = p, v.height = m, v = b[b.length - 1], v.width = p, v.height = m, N.setKeyframes(b));
            }
          }
          f();
        },
        function(y) {
          d.__reactViewTransition === r && (d.__reactViewTransition = null);
          try {
            if (typeof y == "object" && y !== null)
              switch (y.name) {
                case "InvalidStateError":
                  (y.message === "View transition was skipped because document visibility state is hidden." || y.message === "Skipping view transition because document visibility state has become hidden." || y.message === "Skipping view transition because viewport size changed." || y.message === "Transition was aborted because of invalid state") && (y = null);
              }
            y !== null && c(y);
          } finally {
            a(), e(), f();
          }
        }
      ), r.finished.finally(function() {
        for (var y = 0; y < E.length; y++)
          E[y].cancel();
        d.__reactViewTransition === r && (d.__reactViewTransition = null), i();
      }), r;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function ga(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  ga.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : Z({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, ga.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, ga.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function hm(l) {
    return {
      name: l,
      group: new ga("group", l),
      imagePair: new ga("image-pair", l),
      old: new ga("old", l),
      new: new ga("new", l)
    };
  }
  function _t(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  _t.prototype.addEventListener = function(l, t, u) {
    var a = null, e = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (rm(n, l, t, u) === -1) {
        var f = this, i = t;
        u != null && typeof u != "boolean" && u.once === !0 && (i = function(c) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, c) : t.handleEvent(c);
        }), a !== null && (e = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), a.addEventListener("abort", e, { once: !0 }), e = a.removeEventListener.bind(a, "abort", e)), a = ue(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: i,
          cleanup: e
        }), S(
          this._fragmentFiber.child,
          !1,
          E1,
          l,
          i,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function E1(l, t, u, a) {
    return M(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  _t.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = rm(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = ue(e.optionsOrUseCapture), S(
        this._fragmentFiber.child,
        !1,
        z1,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function z1(l, t, u, a) {
    return M(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function ue(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function gm(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function rm(l, t, u, a) {
    if (l.length === 0) return -1;
    a = gm(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && gm(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  _t.prototype.dispatchEvent = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = M(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (e = 0; e < u.length; e++)
          n = u[e], a.removeEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, _t.prototype.focus = function(l) {
    S(
      this._fragmentFiber.child,
      !0,
      Sm,
      l,
      void 0,
      void 0
    );
  };
  function Sm(l, t) {
    return l.tag === 6 ? !1 : (l = M(l), Y1(l, t));
  }
  _t.prototype.focusLast = function(l) {
    var t = [];
    S(
      this._fragmentFiber.child,
      !0,
      a0,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Sm(t[u], l); u--) ;
  };
  function a0(l, t) {
    return t.push(l), !1;
  }
  _t.prototype.blur = function() {
    var l = Y(
      this._fragmentFiber
    );
    l !== null && (l = M(l), l = We(l).activeElement, l !== null && S(
      this._fragmentFiber.child,
      !1,
      b1,
      l,
      void 0,
      void 0
    ));
  };
  function b1(l, t) {
    return l.tag === 6 ? !1 : (l = M(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  _t.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), S(
      this._fragmentFiber.child,
      !1,
      _1,
      l,
      void 0,
      void 0
    );
  };
  function _1(l, t) {
    return l.tag === 6 || (l = M(l), t.observe(l)), !1;
  }
  _t.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), S(
        this._fragmentFiber.child,
        !1,
        O1,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < Qt.length; u++) {
        var a = Qt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : Qt[t++] = a;
      }
      Qt.length = t;
    }
  };
  function O1(l, t) {
    return l.tag === 6 || (l = M(l), t.unobserve(l)), !1;
  }
  var Qt = [], e0 = !1;
  function A1(l, t, u) {
    Qt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), e0 || (e0 = !0, q1(function() {
      e0 = !1;
      var a = Qt;
      Qt = [];
      for (var e = 0; e < a.length; e++) {
        var n = a[e];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  _t.prototype.getClientRects = function() {
    var l = [];
    return S(
      this._fragmentFiber.child,
      !1,
      N1,
      l,
      void 0,
      void 0
    ), l;
  };
  function N1(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = M(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  _t.prototype.getRootNode = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    return t === null ? this : M(t).getRootNode(l);
  }, _t.prototype.compareDocumentPosition = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    S(
      this._fragmentFiber.child,
      !1,
      a0,
      u,
      void 0,
      void 0
    );
    var a = M(t);
    if (u.length === 0) {
      if (u = a, Ol(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var e = a = u.compareDocumentPosition(l);
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = kl(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = M(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = M(u[0]), e = M(u[u.length - 1]);
    var n = Ol(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), i = e.compareDocumentPosition(l), c = f & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || c || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || D1(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function D1(l, t, u, a, e) {
    var n = Wu(e);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              u = !0;
              break l;
            }
            n = n.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
      l: {
        for (n = t, t = Y(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = $l(
      u,
      n,
      Ql
    ), t === null ? t = !1 : (S(
      t,
      !0,
      et,
      n,
      u
    ), n = ul, ul = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = $l(
      a,
      n,
      Ql
    ), t === null ? t = !1 : (S(
      t,
      !0,
      zl,
      n,
      a
    ), n = ul, F = ul = null, t = n !== null)), t) : !1;
  }
  function Tm(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  _t.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(g(566));
    var t = [];
    S(
      this._fragmentFiber.child,
      !1,
      a0,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = kl(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || Y(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = M(a), Tm(l, u);
        return;
      }
      if (a = M(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = M(e), Tm(e, u)) : M(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function M1(l, t) {
    return l = M(l), Em(l, t), !1;
  }
  function Em(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function zm(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, i = 0; i < Qt.length; i++) {
        var c = Qt[i];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (Qt[f++] = c);
      }
      Qt.length = f, n.observe(l);
    }), Em(l, t));
  }
  function U1(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? A1(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function n0(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          n0(u), hn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function C1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[de])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Rt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function R1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function bm(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function f0(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function i0(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function H1(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Rt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var c0 = null;
  function _m(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Rt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Om(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Y1(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function q1(l) {
    om(function() {
      om(function(t) {
        return l(t);
      });
    });
  }
  function Am(l, t, u) {
    switch (t = We(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(g(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(g(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(g(454));
        return l;
      default:
        throw Error(g(451));
    }
  }
  function Nm(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && vl(l, t, a, null, v1, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === xt && (l.onclick = null), hn(l);
  }
  function v0(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    hn(l);
  }
  var Ht = /* @__PURE__ */ new Map(), Dm = /* @__PURE__ */ new Set();
  function Fe(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var hu = j.d;
  j.d = {
    f: B1,
    r: G1,
    D: j1,
    C: X1,
    L: Q1,
    m: p1,
    X: x1,
    S: Z1,
    M: V1
  };
  function B1() {
    var l = hu.f(), t = Tf();
    return l || t;
  }
  function G1(l) {
    var t = za(l);
    t !== null && t.tag === 5 && t.type === "form" ? Uo(t) : hu.r(l);
  }
  var ae = typeof document > "u" ? null : document;
  function Mm(l, t, u) {
    var a = ae;
    if (a && typeof t == "string" && t) {
      var e = Ot(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Dm.has(e) || (Dm.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Jl(t, "link", l), Yl(t), a.head.appendChild(t)));
    }
  }
  function j1(l) {
    hu.D(l), Mm("dns-prefetch", l, null);
  }
  function X1(l, t) {
    hu.C(l, t), Mm("preconnect", l, t);
  }
  function Q1(l, t, u) {
    hu.L(l, t, u);
    var a = ae;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + Ot(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + Ot(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + Ot(
        u.imageSizes
      ) + '"]')) : e += '[href="' + Ot(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ee(l);
          break;
        case "script":
          n = ne(l);
      }
      if (!(Ht.has(n) || (l = Z(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ht.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Ie(n)) || t === "script" && a.querySelector(ke(n))))) {
        var f = a.createElement("link");
        Jl(f, "link", l), t === "style" && (f[sn] = !0, f.onload = f.onerror = function() {
          p0(f);
        }), Yl(f), a.head.appendChild(f);
      }
    }
  }
  function p1(l, t) {
    hu.m(l, t);
    var u = ae;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + Ot(a) + '"][href="' + Ot(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ne(l);
      }
      if (!Ht.has(n) && (l = Z({ rel: "modulepreload", href: l }, t), Ht.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ke(n)))
              return;
        }
        a = u.createElement("link"), Jl(a, "link", l), Yl(a), u.head.appendChild(a);
      }
    }
  }
  function Z1(l, t, u) {
    hu.S(l, t, u);
    var a = ae;
    if (a && l) {
      var e = ba(a).hoistableStyles, n = ee(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          Ie(n)
        ))
          i.loading = 5;
        else {
          l = Z(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ht.get(n)) && o0(l, u);
          var c = f = a.createElement("link");
          Yl(c), Jl(c, "link", l), c._p = new Promise(function(d, r) {
            c.onload = d, c.onerror = r;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Nf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function x1(l, t) {
    hu.X(l, t);
    var u = ae;
    if (u && l) {
      var a = ba(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(ke(e)), n || (l = Z({ src: l, async: !0 }, t), (t = Ht.get(e)) && y0(l, t), n = u.createElement("script"), Yl(n), Jl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function V1(l, t) {
    hu.M(l, t);
    var u = ae;
    if (u && l) {
      var a = ba(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(ke(e)), n || (l = Z({ src: l, async: !0, type: "module" }, t), (t = Ht.get(e)) && y0(l, t), n = u.createElement("script"), Yl(n), Jl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Um(l, t, u, a) {
    var e = (e = ru.current) ? Fe(e) : null;
    if (!e) throw Error(g(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = ee(u.href), t = ba(
          e
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ee(u.href);
          var n = ba(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            Ie(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Ht.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ht.set(l, n)), L1(
            e,
            l,
            n,
            f.state
          ))), t && a === null)
            throw Error(g(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(g(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ne(u), t = ba(
          e
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(g(444, l));
    }
  }
  function ee(l) {
    return 'href="' + Ot(l) + '"';
  }
  function Ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Cm(l) {
    return Z({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function L1(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[sn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[sn] = !0, t.onload = t.onerror = p0.bind(null, t), Jl(t, "link", u), Yl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function ne(l) {
    return '[src="' + Ot(l) + '"]';
  }
  function ke(l) {
    return "script[async]" + l;
  }
  function Rm(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Ot(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Yl(a), a;
          var e = Z({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Yl(a), Jl(a, "style", e), Nf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ee(u.href);
          var n = l.querySelector(
            Ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Yl(n), n;
          a = Cm(u), (e = Ht.get(e)) && o0(a, e), n = (l.ownerDocument || l).createElement("link"), Yl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Jl(n, "link", a), t.state.loading |= 4, Nf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ne(u.src), (e = l.querySelector(
            ke(n)
          )) ? (t.instance = e, Yl(e), e) : (a = u, (e = Ht.get(n)) && (a = Z({}, u), y0(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Yl(e), Jl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(g(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Nf(a, u.precedence, l));
    return t.instance;
  }
  function Nf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function o0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function y0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Df = null;
  function Hm(l, t, u) {
    if (Df === null) {
      var a = /* @__PURE__ */ new Map(), e = Df = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Df, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[de] || n[Zl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function m0(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function K1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ym(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function qm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Bm(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Gm(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Bm(t), l.suspenseyImages.push(t)), l = $1.bind(l), t.decode().then(l, l));
  }
  function J1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = ee(a.href), n = t.querySelector(
          Ie(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Pe.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Yl(n);
          return;
        }
        n = t.ownerDocument || t, a = Cm(a), (e = Ht.get(e)) && o0(a, e), n = n.createElement("link"), Yl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Jl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Pe.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Mf = 0;
  function w1(l, t) {
    return l.stylesheets && l.count === 0 && Cf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Cf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Mf === 0 && (Mf = 62500 * y1());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Cf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Mf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function jm(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Cf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function Pe() {
    this.count--, jm(this);
  }
  function $1() {
    this.imgCount--, jm(this);
  }
  var Uf = null;
  function Cf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Uf = /* @__PURE__ */ new Map(), t.forEach(W1, l), Uf = null, Pe.call(l));
  }
  function W1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Uf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Uf.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Pe.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var fe = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: lu,
    _currentValue2: lu,
    _threadCount: 0
  };
  function F1(l, t, u, a, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jf(0), this.hiddenUpdates = Jf(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xm(l, t, u, a, e, n, f, i, c, d, r, E) {
    return l = new F1(
      l,
      t,
      u,
      f,
      c,
      d,
      r,
      E,
      i
    ), t = 1, n === !0 && (t |= 24), n = ft(3, null, null, t), l.current = n, n.stateNode = l, t = Di(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Ri(n), l;
  }
  function Qm(l) {
    return l ? (l = Ha, l) : Ha;
  }
  function pm(l, t, u, a, e, n) {
    e = Qm(e), a.context === null ? a.context = e : a.pendingContext = e, a = Mu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Uu(l, a, t), u !== null && (ot(u, l, t), Ce(u, l, t));
  }
  function Zm(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function d0(l, t) {
    Zm(l, t), (l = l.alternate) && Zm(l, t);
  }
  function xm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Pu(l, 67108864);
      t !== null && ot(t, l, 67108864), d0(l, 67108864);
    }
  }
  function Vm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = bt();
      t = wf(t);
      var u = Pu(l, t);
      u !== null && ot(u, l, t), d0(l, t);
    }
  }
  var ie = !0;
  function I1(l, t, u, a) {
    var e = D.T;
    D.T = null;
    var n = j.p;
    try {
      j.p = 2, s0(l, t, u, a);
    } finally {
      j.p = n, D.T = e;
    }
  }
  function k1(l, t, u, a) {
    var e = D.T;
    D.T = null;
    var n = j.p;
    try {
      j.p = 8, s0(l, t, u, a);
    } finally {
      j.p = n, D.T = e;
    }
  }
  function s0(l, t, u, a) {
    if (ie) {
      var e = h0(a);
      if (e === null)
        Wc(
          l,
          t,
          a,
          Rf,
          u
        ), Km(l, a);
      else if (lh(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Km(l, a), t & 4 && -1 < P1.indexOf(l)) {
        for (; e !== null; ) {
          var n = za(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = $u(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - ht(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    kt(n), (tl & 6) === 0 && (gf = dt() + 500, Je(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Pu(n, 2), i !== null && ot(i, n, 2), Tf(), d0(n, 2);
            }
          if (n = h0(a), n === null && Wc(
            l,
            t,
            a,
            Rf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Wc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function h0(l) {
    return l = li(l), g0(l);
  }
  var Rf = null;
  function g0(l) {
    if (Rf = null, l = Wu(l), l !== null) {
      var t = El(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = jl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Il(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rf = l, null;
  }
  function Lm(l) {
    switch (l) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yd()) {
          case M0:
            return 2;
          case U0:
            return 8;
          case vn:
          case md:
            return 32;
          case C0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var r0 = !1, Zu = null, xu = null, Vu = null, ln = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map(), Lu = [], P1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Km(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Zu = null;
        break;
      case "dragenter":
      case "dragleave":
        xu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        ln.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tn.delete(t.pointerId);
    }
  }
  function un(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = za(t), t !== null && xm(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function lh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Zu = un(
          Zu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return xu = un(
          xu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Vu = un(
          Vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ln.set(
          n,
          un(
            ln.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, tn.set(
          n,
          un(
            tn.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Jm(l) {
    var t = Wu(l.target);
    if (t !== null) {
      var u = El(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = jl(u), t !== null) {
            l.blockedOn = t, j0(l.priority, function() {
              Vm(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Il(u), t !== null) {
            l.blockedOn = t, j0(l.priority, function() {
              Vm(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Hf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = h0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        Pf = a, u.target.dispatchEvent(a), Pf = null;
      } else
        return t = za(u), t !== null && xm(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function wm(l, t, u) {
    Hf(l) && u.delete(t);
  }
  function th() {
    r0 = !1, Zu !== null && Hf(Zu) && (Zu = null), xu !== null && Hf(xu) && (xu = null), Vu !== null && Hf(Vu) && (Vu = null), ln.forEach(wm), tn.forEach(wm);
  }
  function Yf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, r0 || (r0 = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      th
    )));
  }
  var qf = null;
  function $m(l) {
    qf !== l && (qf = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        qf === l && (qf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (g0(a || u) === null)
              continue;
            break;
          }
          var n = za(u);
          n !== null && (l.splice(t, 3), t -= 3, ki(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function ce(l) {
    function t(c) {
      return Yf(c, l);
    }
    Zu !== null && Yf(Zu, l), xu !== null && Yf(xu, l), Vu !== null && Yf(Vu, l), ln.forEach(t), tn.forEach(t);
    for (var u = 0; u < Lu.length; u++) {
      var a = Lu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Lu.length && (u = Lu[0], u.blockedOn === null); )
      Jm(u), u.blockedOn === null && Lu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[nt] || null;
        if (typeof n == "function")
          f || $m(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[nt] || null)
              i = f.formAction;
            else if (g0(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), $m(u);
        }
      }
  }
  function Wm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function S0(l) {
    this._internalRoot = l;
  }
  Bf.prototype.render = S0.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(g(409));
    var u = t.current, a = bt();
    pm(u, a, l, t, null, null);
  }, Bf.prototype.unmount = S0.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      pm(l.current, 2, null, l, null, null), Tf(), t[Ea] = null;
    }
  };
  function Bf(l) {
    this._internalRoot = l;
  }
  Bf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = G0();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Lu.length && t !== 0 && t < Lu[u].priority; u++) ;
      Lu.splice(u, 0, l), u === 0 && Jm(l);
    }
  };
  var Fm = gl.version;
  if (Fm !== "19.3.1")
    throw Error(
      g(
        527,
        Fm,
        "19.3.1"
      )
    );
  j.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(g(188)) : (l = Object.keys(l).join(","), Error(g(268, l)));
    return l = Cl(t), l = l !== null ? H(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var uh = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gf.isDisabled && Gf.supportsFiber)
      try {
        oe = Gf.inject(
          uh
        ), st = Gf;
      } catch {
      }
  }
  return en.createRoot = function(l, t) {
    if (!fl(l)) throw Error(g(299));
    var u = !1, a = "", e = Qo, n = po, f = Zo;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Xm(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      Wm
    ), l[Ea] = t.current, $c(l), new S0(t);
  }, en.hydrateRoot = function(l, t, u) {
    if (!fl(l)) throw Error(g(299));
    var a = !1, e = "", n = Qo, f = po, i = Zo, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = Xm(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      c,
      n,
      f,
      i,
      Wm
    ), t.context = Qm(null), u = t.current, a = bt(), a = wf(a), e = Mu(a), e.callback = null, Uu(u, e, a), u = a, t.current.lanes = u, me(t, u), kt(t), l[Ea] = t.current, $c(l), new Bf(t);
  }, en.version = "19.3.1", en;
}
var fd;
function mh() {
  if (fd) return E0.exports;
  fd = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (gl) {
        console.error(gl);
      }
  }
  return O(), E0.exports = yh(), E0.exports;
}
var dh = mh(), ra = A0();
const sh = () => decodeURIComponent((document.cookie.match(/XSRF-TOKEN=([^;]+)/) || [])[1] || "");
async function jf(O, gl = "GET", V) {
  const g = await fetch(`/api/client/folders${O}`, {
    method: gl,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": sh()
    },
    body: V ? JSON.stringify(V) : void 0
  });
  if (!g.ok) {
    const fl = await g.json().catch(() => ({}));
    throw new Error(fl.message || `Request failed (${g.status})`);
  }
  return g.status === 204 ? null : g.json();
}
function hh(O, gl) {
  const V = new Map(gl.map((g) => [g.server_identifier, g]));
  return O.map(
    (g, fl) => V.get(g.identifier) ?? {
      server_identifier: g.identifier,
      folder_id: null,
      position: 1e5 + fl
    }
  );
}
function id({ servers: O }) {
  const [gl, V] = ra.useState([]), [g, fl] = ra.useState([]), [El, jl] = ra.useState(""), [Il, rl] = ra.useState(null), Cl = ra.useMemo(
    () => Object.fromEntries(O.map((M) => [M.identifier, M])),
    [O]
  ), H = ra.useCallback(async () => {
    const M = await jf("");
    V(M.folders), fl(hh(O, M.items));
  }, [O]);
  ra.useEffect(() => {
    H().catch((M) => rl(M.message));
  }, [H]);
  async function S(M) {
    M.preventDefault();
    const ul = El.trim();
    if (ul)
      try {
        const F = await jf("", "POST", { name: ul });
        V((et) => [...et, F]), jl("");
      } catch (F) {
        rl(F.message);
      }
  }
  async function Y(M) {
    try {
      await jf(`/${M}`, "DELETE"), await H();
    } catch (ul) {
      rl(ul.message);
    }
  }
  async function Ol(M, ul, F = null) {
    if (!M || M === F) return;
    const et = g, zl = g.filter((al) => al.server_identifier !== M), Ql = zl.filter((al) => al.folder_id === ul).sort((al, Wl) => al.position - Wl.position), $l = F ? Ql.findIndex((al) => al.server_identifier === F) : -1;
    Ql.splice($l === -1 ? Ql.length : $l, 0, {
      server_identifier: M,
      folder_id: ul,
      position: 0
    });
    const Z = Ql.map((al, Wl) => ({ ...al, position: Wl })), yt = [...zl.filter((al) => al.folder_id !== ul), ...Z];
    fl(yt);
    try {
      await jf("/reorder", "POST", {
        items: yt.map((al) => ({
          server_identifier: al.server_identifier,
          folder_id: al.folder_id,
          position: al.position
        }))
      });
    } catch (al) {
      fl(et), rl(al.message);
    }
  }
  function kl(M) {
    const ul = Cl[M.server_identifier];
    return ul ? /* @__PURE__ */ at.jsxs(
      "div",
      {
        draggable: !0,
        onDragStart: (F) => F.dataTransfer.setData("text/plain", M.server_identifier),
        onDragOver: (F) => F.preventDefault(),
        onDrop: (F) => {
          F.preventDefault(), F.stopPropagation(), Ol(F.dataTransfer.getData("text/plain"), M.folder_id, M.server_identifier);
        },
        style: { border: "1px solid #444", borderRadius: 8, padding: 12, cursor: "grab" },
        children: [
          /* @__PURE__ */ at.jsx("strong", { children: ul.name }),
          ul.status && /* @__PURE__ */ at.jsx("div", { style: { fontSize: 12, opacity: 0.7 }, children: ul.status })
        ]
      },
      M.server_identifier
    ) : null;
  }
  function Xl(M, ul, F) {
    const et = g.filter((zl) => zl.folder_id === ul).sort((zl, Ql) => zl.position - Ql.position);
    return /* @__PURE__ */ at.jsxs(
      "section",
      {
        onDragOver: (zl) => zl.preventDefault(),
        onDrop: (zl) => {
          zl.preventDefault(), Ol(zl.dataTransfer.getData("text/plain"), ul);
        },
        style: { marginTop: 16, padding: 12, border: "1px dashed #555", borderRadius: 12 },
        children: [
          /* @__PURE__ */ at.jsxs("header", { style: { display: "flex", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ at.jsx("h3", { children: M }),
            F && /* @__PURE__ */ at.jsx("button", { onClick: F, children: "Delete folder" })
          ] }),
          /* @__PURE__ */ at.jsx("div", { style: { display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }, children: et.length === 0 ? /* @__PURE__ */ at.jsx("em", { children: "Drop servers here" }) : et.map(kl) })
        ]
      },
      ul ?? "ungrouped"
    );
  }
  return /* @__PURE__ */ at.jsxs("div", { children: [
    Il && /* @__PURE__ */ at.jsx("p", { role: "alert", style: { color: "salmon" }, children: Il }),
    /* @__PURE__ */ at.jsxs("form", { onSubmit: S, style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ at.jsx(
        "input",
        {
          value: El,
          onChange: (M) => jl(M.target.value),
          maxLength: 64,
          placeholder: "New folder name"
        }
      ),
      /* @__PURE__ */ at.jsx("button", { type: "submit", children: "Create Folder" })
    ] }),
    Xl("Ungrouped", null),
    gl.map((M) => Xl(M.name, M.id, () => Y(M.id)))
  ] });
}
function gh(O, gl) {
  const V = dh.createRoot(O);
  return V.render(/* @__PURE__ */ at.jsx(id, { ...gl })), () => V.unmount();
}
const rh = {
  id: "ska-server-folders",
  component: id,
  mount: gh
};
export {
  id as ServerFolders,
  id as default,
  rh as extension,
  gh as mount
};
