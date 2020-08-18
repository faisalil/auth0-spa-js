!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).createAuth0Client = t());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var e = function (
    t,
    n
  ) {
    return (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(t, n);
  };
  function t(t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
  }
  var n = function () {
    return (n =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function r(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  }
  function o(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          s(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        try {
          s(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        e.done
          ? o(e.value)
          : new n(function (t) {
              t(e.value);
            }).then(a, c);
      }
      s((r = r.apply(e, t || [])).next());
    });
  }
  function i(e, t) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
    return (
      (i = { next: c(0), throw: c(1), return: c(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function c(i) {
      return function (c) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, c]);
      };
    }
  }
  var a =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function c(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function s(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var u = function (e) {
      return e && e.Math == Math && e;
    },
    l =
      u('object' == typeof globalThis && globalThis) ||
      u('object' == typeof window && window) ||
      u('object' == typeof self && self) ||
      u('object' == typeof a && a) ||
      Function('return this')(),
    f = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    d = !f(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1]
      );
    }),
    p = {}.propertyIsEnumerable,
    h = Object.getOwnPropertyDescriptor,
    y = {
      f:
        h && !p.call({ 1: 2 }, 1)
          ? function (e) {
              var t = h(this, e);
              return !!t && t.enumerable;
            }
          : p
    },
    v = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    m = {}.toString,
    b = function (e) {
      return m.call(e).slice(8, -1);
    },
    g = ''.split,
    w = f(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (e) {
          return 'String' == b(e) ? g.call(e, '') : Object(e);
        }
      : Object,
    S = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    _ = function (e) {
      return w(S(e));
    },
    k = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    },
    I = function (e, t) {
      if (!k(e)) return e;
      var n, r;
      if (t && 'function' == typeof (n = e.toString) && !k((r = n.call(e))))
        return r;
      if ('function' == typeof (n = e.valueOf) && !k((r = n.call(e)))) return r;
      if (!t && 'function' == typeof (n = e.toString) && !k((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    T = {}.hasOwnProperty,
    x = function (e, t) {
      return T.call(e, t);
    },
    O = l.document,
    L = k(O) && k(O.createElement),
    j = function (e) {
      return L ? O.createElement(e) : {};
    },
    E =
      !d &&
      !f(function () {
        return (
          7 !=
          Object.defineProperty(j('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    C = Object.getOwnPropertyDescriptor,
    A = {
      f: d
        ? C
        : function (e, t) {
            if (((e = _(e)), (t = I(t, !0)), E))
              try {
                return C(e, t);
              } catch (e) {}
            if (x(e, t)) return v(!y.f.call(e, t), e[t]);
          }
    },
    K = function (e) {
      if (!k(e)) throw TypeError(String(e) + ' is not an object');
      return e;
    },
    R = Object.defineProperty,
    W = {
      f: d
        ? R
        : function (e, t, n) {
            if ((K(e), (t = I(t, !0)), K(n), E))
              try {
                return R(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported');
            return 'value' in n && (e[t] = n.value), e;
          }
    },
    P = d
      ? function (e, t, n) {
          return W.f(e, t, v(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    Z = function (e, t) {
      try {
        P(l, e, t);
      } catch (n) {
        l[e] = t;
      }
      return t;
    },
    X = l['__core-js_shared__'] || Z('__core-js_shared__', {}),
    G = Function.toString;
  'function' != typeof X.inspectSource &&
    (X.inspectSource = function (e) {
      return G.call(e);
    });
  var V,
    U,
    F,
    z = X.inspectSource,
    Y = l.WeakMap,
    B = 'function' == typeof Y && /native code/.test(z(Y)),
    N = s(function (e) {
      (e.exports = function (e, t) {
        return X[e] || (X[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: '3.6.4',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      });
    }),
    D = 0,
    J = Math.random(),
    M = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++D + J).toString(36)
      );
    },
    H = N('keys'),
    q = function (e) {
      return H[e] || (H[e] = M(e));
    },
    Q = {},
    $ = l.WeakMap;
  if (B) {
    var ee = new $(),
      te = ee.get,
      ne = ee.has,
      re = ee.set;
    (V = function (e, t) {
      return re.call(ee, e, t), t;
    }),
      (U = function (e) {
        return te.call(ee, e) || {};
      }),
      (F = function (e) {
        return ne.call(ee, e);
      });
  } else {
    var oe = q('state');
    (Q[oe] = !0),
      (V = function (e, t) {
        return P(e, oe, t), t;
      }),
      (U = function (e) {
        return x(e, oe) ? e[oe] : {};
      }),
      (F = function (e) {
        return x(e, oe);
      });
  }
  var ie,
    ae = {
      set: V,
      get: U,
      has: F,
      enforce: function (e) {
        return F(e) ? U(e) : V(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!k(t) || (n = U(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required');
          return n;
        };
      }
    },
    ce = s(function (e) {
      var t = ae.get,
        n = ae.enforce,
        r = String(String).split('String');
      (e.exports = function (e, t, o, i) {
        var a = !!i && !!i.unsafe,
          c = !!i && !!i.enumerable,
          s = !!i && !!i.noTargetGet;
        'function' == typeof o &&
          ('string' != typeof t || x(o, 'name') || P(o, 'name', t),
          (n(o).source = r.join('string' == typeof t ? t : ''))),
          e !== l
            ? (a ? !s && e[t] && (c = !0) : delete e[t],
              c ? (e[t] = o) : P(e, t, o))
            : c
            ? (e[t] = o)
            : Z(t, o);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || z(this);
      });
    }),
    se = l,
    ue = function (e) {
      return 'function' == typeof e ? e : void 0;
    },
    le = function (e, t) {
      return arguments.length < 2
        ? ue(se[e]) || ue(l[e])
        : (se[e] && se[e][t]) || (l[e] && l[e][t]);
    },
    fe = Math.ceil,
    de = Math.floor,
    pe = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? de : fe)(e);
    },
    he = Math.min,
    ye = function (e) {
      return e > 0 ? he(pe(e), 9007199254740991) : 0;
    },
    ve = Math.max,
    me = Math.min,
    be = function (e) {
      return function (t, n, r) {
        var o,
          i = _(t),
          a = ye(i.length),
          c = (function (e, t) {
            var n = pe(e);
            return n < 0 ? ve(n + t, 0) : me(n, t);
          })(r, a);
        if (e && n != n) {
          for (; a > c; ) if ((o = i[c++]) != o) return !0;
        } else
          for (; a > c; c++)
            if ((e || c in i) && i[c] === n) return e || c || 0;
        return !e && -1;
      };
    },
    ge = { includes: be(!0), indexOf: be(!1) },
    we = ge.indexOf,
    Se = function (e, t) {
      var n,
        r = _(e),
        o = 0,
        i = [];
      for (n in r) !x(Q, n) && x(r, n) && i.push(n);
      for (; t.length > o; ) x(r, (n = t[o++])) && (~we(i, n) || i.push(n));
      return i;
    },
    _e = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    ke = _e.concat('length', 'prototype'),
    Ie = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return Se(e, ke);
        }
    },
    Te = { f: Object.getOwnPropertySymbols },
    xe =
      le('Reflect', 'ownKeys') ||
      function (e) {
        var t = Ie.f(K(e)),
          n = Te.f;
        return n ? t.concat(n(e)) : t;
      },
    Oe = function (e, t) {
      for (var n = xe(t), r = W.f, o = A.f, i = 0; i < n.length; i++) {
        var a = n[i];
        x(e, a) || r(e, a, o(t, a));
      }
    },
    Le = /#|\.prototype\./,
    je = function (e, t) {
      var n = Ce[Ee(e)];
      return n == Ke || (n != Ae && ('function' == typeof t ? f(t) : !!t));
    },
    Ee = (je.normalize = function (e) {
      return String(e).replace(Le, '.').toLowerCase();
    }),
    Ce = (je.data = {}),
    Ae = (je.NATIVE = 'N'),
    Ke = (je.POLYFILL = 'P'),
    Re = je,
    We = A.f,
    Pe = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        c = e.target,
        s = e.global,
        u = e.stat;
      if ((n = s ? l : u ? l[c] || Z(c, {}) : (l[c] || {}).prototype))
        for (r in t) {
          if (
            ((i = t[r]),
            (o = e.noTargetGet ? (a = We(n, r)) && a.value : n[r]),
            !Re(s ? r : c + (u ? '.' : '#') + r, e.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue;
            Oe(i, o);
          }
          (e.sham || (o && o.sham)) && P(i, 'sham', !0), ce(n, r, i, e);
        }
    },
    Ze =
      !!Object.getOwnPropertySymbols &&
      !f(function () {
        return !String(Symbol());
      }),
    Xe = Ze && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Ge = N('wks'),
    Ve = l.Symbol,
    Ue = Xe ? Ve : (Ve && Ve.withoutSetter) || M,
    Fe = function (e) {
      return (
        x(Ge, e) ||
          (Ze && x(Ve, e) ? (Ge[e] = Ve[e]) : (Ge[e] = Ue('Symbol.' + e))),
        Ge[e]
      );
    },
    ze = Fe('match'),
    Ye = function (e) {
      if (
        (function (e) {
          var t;
          return k(e) && (void 0 !== (t = e[ze]) ? !!t : 'RegExp' == b(e));
        })(e)
      )
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    },
    Be = Fe('match'),
    Ne = function (e) {
      var t = /./;
      try {
        '/./'[e](t);
      } catch (n) {
        try {
          return (t[Be] = !1), '/./'[e](t);
        } catch (e) {}
      }
      return !1;
    },
    De = A.f,
    Je = ''.startsWith,
    Me = Math.min,
    He = Ne('startsWith'),
    qe = !(
      He || ((ie = De(String.prototype, 'startsWith')), !ie || ie.writable)
    );
  Pe(
    { target: 'String', proto: !0, forced: !qe && !He },
    {
      startsWith: function (e) {
        var t = String(S(this));
        Ye(e);
        var n = ye(Me(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          r = String(e);
        return Je ? Je.call(t, r, n) : t.slice(n, n + r.length) === r;
      }
    }
  );
  var Qe,
    $e,
    et,
    tt = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function');
      return e;
    },
    nt = function (e, t, n) {
      if ((tt(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    rt = Function.call,
    ot = function (e, t, n) {
      return nt(rt, l[e].prototype[t], n);
    },
    it =
      (ot('String', 'startsWith'),
      function (e) {
        return function (t, n) {
          var r,
            o,
            i = String(S(t)),
            a = pe(n),
            c = i.length;
          return a < 0 || a >= c
            ? e
              ? ''
              : void 0
            : (r = i.charCodeAt(a)) < 55296 ||
              r > 56319 ||
              a + 1 === c ||
              (o = i.charCodeAt(a + 1)) < 56320 ||
              o > 57343
            ? e
              ? i.charAt(a)
              : r
            : e
            ? i.slice(a, a + 2)
            : o - 56320 + ((r - 55296) << 10) + 65536;
        };
      }),
    at = { codeAt: it(!1), charAt: it(!0) },
    ct = function (e) {
      return Object(S(e));
    },
    st = !f(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    ut = q('IE_PROTO'),
    lt = Object.prototype,
    ft = st
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = ct(e)),
            x(e, ut)
              ? e[ut]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? lt
              : null
          );
        },
    dt = Fe('iterator'),
    pt = !1;
  [].keys &&
    ('next' in (et = [].keys())
      ? ($e = ft(ft(et))) !== Object.prototype && (Qe = $e)
      : (pt = !0)),
    null == Qe && (Qe = {}),
    x(Qe, dt) ||
      P(Qe, dt, function () {
        return this;
      });
  var ht,
    yt = { IteratorPrototype: Qe, BUGGY_SAFARI_ITERATORS: pt },
    vt =
      Object.keys ||
      function (e) {
        return Se(e, _e);
      },
    mt = d
      ? Object.defineProperties
      : function (e, t) {
          K(e);
          for (var n, r = vt(t), o = r.length, i = 0; o > i; )
            W.f(e, (n = r[i++]), t[n]);
          return e;
        },
    bt = le('document', 'documentElement'),
    gt = q('IE_PROTO'),
    wt = function () {},
    St = function (e) {
      return '<script>' + e + '</script>';
    },
    _t = function () {
      try {
        ht = document.domain && new ActiveXObject('htmlfile');
      } catch (e) {}
      var e, t;
      _t = ht
        ? (function (e) {
            e.write(St('')), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(ht)
        : (((t = j('iframe')).style.display = 'none'),
          bt.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(St('document.F=Object')),
          e.close(),
          e.F);
      for (var n = _e.length; n--; ) delete _t.prototype[_e[n]];
      return _t();
    };
  Q[gt] = !0;
  var kt =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((wt.prototype = K(e)),
              (n = new wt()),
              (wt.prototype = null),
              (n[gt] = e))
            : (n = _t()),
          void 0 === t ? n : mt(n, t)
        );
      },
    It = W.f,
    Tt = Fe('toStringTag'),
    xt = function (e, t, n) {
      e &&
        !x((e = n ? e : e.prototype), Tt) &&
        It(e, Tt, { configurable: !0, value: t });
    },
    Ot = {},
    Lt = yt.IteratorPrototype,
    jt = function () {
      return this;
    },
    Et =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return (
                K(n),
                (function (e) {
                  if (!k(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + ' as a prototype'
                    );
                })(r),
                t ? e.call(n, r) : (n.__proto__ = r),
                n
              );
            };
          })()
        : void 0),
    Ct = yt.IteratorPrototype,
    At = yt.BUGGY_SAFARI_ITERATORS,
    Kt = Fe('iterator'),
    Rt = function () {
      return this;
    },
    Wt = function (e, t, n, r, o, i, a) {
      !(function (e, t, n) {
        var r = t + ' Iterator';
        (e.prototype = kt(Lt, { next: v(1, n) })), xt(e, r, !1), (Ot[r] = jt);
      })(n, t, r);
      var c,
        s,
        u,
        l = function (e) {
          if (e === o && y) return y;
          if (!At && e in p) return p[e];
          switch (e) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        f = t + ' Iterator',
        d = !1,
        p = e.prototype,
        h = p[Kt] || p['@@iterator'] || (o && p[o]),
        y = (!At && h) || l(o),
        m = ('Array' == t && p.entries) || h;
      if (
        (m &&
          ((c = ft(m.call(new e()))),
          Ct !== Object.prototype &&
            c.next &&
            (ft(c) !== Ct &&
              (Et ? Et(c, Ct) : 'function' != typeof c[Kt] && P(c, Kt, Rt)),
            xt(c, f, !0))),
        'values' == o &&
          h &&
          'values' !== h.name &&
          ((d = !0),
          (y = function () {
            return h.call(this);
          })),
        p[Kt] !== y && P(p, Kt, y),
        (Ot[t] = y),
        o)
      )
        if (
          ((s = {
            values: l('values'),
            keys: i ? y : l('keys'),
            entries: l('entries')
          }),
          a)
        )
          for (u in s) (At || d || !(u in p)) && ce(p, u, s[u]);
        else Pe({ target: t, proto: !0, forced: At || d }, s);
      return s;
    },
    Pt = at.charAt,
    Zt = ae.set,
    Xt = ae.getterFor('String Iterator');
  Wt(
    String,
    'String',
    function (e) {
      Zt(this, { type: 'String Iterator', string: String(e), index: 0 });
    },
    function () {
      var e,
        t = Xt(this),
        n = t.string,
        r = t.index;
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Pt(n, r)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var Gt = function (e, t, n, r) {
      try {
        return r ? t(K(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && K(o.call(e)), t);
      }
    },
    Vt = Fe('iterator'),
    Ut = Array.prototype,
    Ft = function (e) {
      return void 0 !== e && (Ot.Array === e || Ut[Vt] === e);
    },
    zt = function (e, t, n) {
      var r = I(t);
      r in e ? W.f(e, r, v(0, n)) : (e[r] = n);
    },
    Yt = {};
  Yt[Fe('toStringTag')] = 'z';
  var Bt = '[object z]' === String(Yt),
    Nt = Fe('toStringTag'),
    Dt =
      'Arguments' ==
      b(
        (function () {
          return arguments;
        })()
      ),
    Jt = Bt
      ? b
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Nt))
            ? n
            : Dt
            ? b(t)
            : 'Object' == (r = b(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r;
        },
    Mt = Fe('iterator'),
    Ht = function (e) {
      if (null != e) return e[Mt] || e['@@iterator'] || Ot[Jt(e)];
    },
    qt = Fe('iterator'),
    Qt = !1;
  try {
    var $t = 0,
      en = {
        next: function () {
          return { done: !!$t++ };
        },
        return: function () {
          Qt = !0;
        }
      };
    (en[qt] = function () {
      return this;
    }),
      Array.from(en, function () {
        throw 2;
      });
  } catch (e) {}
  var tn = function (e, t) {
      if (!t && !Qt) return !1;
      var n = !1;
      try {
        var r = {};
        (r[qt] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            }
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    },
    nn = !tn(function (e) {
      Array.from(e);
    });
  Pe(
    { target: 'Array', stat: !0, forced: nn },
    {
      from: function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          c = ct(e),
          s = 'function' == typeof this ? this : Array,
          u = arguments.length,
          l = u > 1 ? arguments[1] : void 0,
          f = void 0 !== l,
          d = Ht(c),
          p = 0;
        if (
          (f && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)),
          null == d || (s == Array && Ft(d)))
        )
          for (n = new s((t = ye(c.length))); t > p; p++)
            (a = f ? l(c[p], p) : c[p]), zt(n, p, a);
        else
          for (
            i = (o = d.call(c)).next, n = new s();
            !(r = i.call(o)).done;
            p++
          )
            (a = f ? Gt(o, l, [r.value, p], !0) : r.value), zt(n, p, a);
        return (n.length = p), n;
      }
    }
  );
  se.Array.from;
  var rn,
    on = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
    an = W.f,
    cn = l.Int8Array,
    sn = cn && cn.prototype,
    un = l.Uint8ClampedArray,
    ln = un && un.prototype,
    fn = cn && ft(cn),
    dn = sn && ft(sn),
    pn = Object.prototype,
    hn = pn.isPrototypeOf,
    yn = Fe('toStringTag'),
    vn = M('TYPED_ARRAY_TAG'),
    mn = on && !!Et && 'Opera' !== Jt(l.opera),
    bn = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    gn = function (e) {
      return k(e) && x(bn, Jt(e));
    };
  for (rn in bn) l[rn] || (mn = !1);
  if (
    (!mn || 'function' != typeof fn || fn === Function.prototype) &&
    ((fn = function () {
      throw TypeError('Incorrect invocation');
    }),
    mn)
  )
    for (rn in bn) l[rn] && Et(l[rn], fn);
  if ((!mn || !dn || dn === pn) && ((dn = fn.prototype), mn))
    for (rn in bn) l[rn] && Et(l[rn].prototype, dn);
  if ((mn && ft(ln) !== dn && Et(ln, dn), d && !x(dn, yn)))
    for (rn in (!0,
    an(dn, yn, {
      get: function () {
        return k(this) ? this[vn] : void 0;
      }
    }),
    bn))
      l[rn] && P(l[rn], vn, rn);
  var wn = function (e) {
      if (gn(e)) return e;
      throw TypeError('Target is not a typed array');
    },
    Sn = function (e) {
      if (Et) {
        if (hn.call(fn, e)) return e;
      } else
        for (var t in bn)
          if (x(bn, rn)) {
            var n = l[t];
            if (n && (e === n || hn.call(n, e))) return e;
          }
      throw TypeError('Target is not a typed array constructor');
    },
    _n = function (e, t, n) {
      if (d) {
        if (n)
          for (var r in bn) {
            var o = l[r];
            o && x(o.prototype, e) && delete o.prototype[e];
          }
        (dn[e] && !n) || ce(dn, e, n ? t : (mn && sn[e]) || t);
      }
    },
    kn = Fe('species'),
    In = wn,
    Tn = Sn,
    xn = [].slice;
  _n(
    'slice',
    function (e, t) {
      for (
        var n = xn.call(In(this), e, t),
          r = (function (e, t) {
            var n,
              r = K(e).constructor;
            return void 0 === r || null == (n = K(r)[kn]) ? t : tt(n);
          })(this, this.constructor),
          o = 0,
          i = n.length,
          a = new (Tn(r))(i);
        i > o;

      )
        a[o] = n[o++];
      return a;
    },
    f(function () {
      new Int8Array(1).slice();
    })
  );
  var On = Fe('unscopables'),
    Ln = Array.prototype;
  null == Ln[On] && W.f(Ln, On, { configurable: !0, value: kt(null) });
  var jn = function (e) {
      Ln[On][e] = !0;
    },
    En = Object.defineProperty,
    Cn = {},
    An = function (e) {
      throw e;
    },
    Kn = ge.includes,
    Rn = (function (e, t) {
      if (x(Cn, e)) return Cn[e];
      t || (t = {});
      var n = [][e],
        r = !!x(t, 'ACCESSORS') && t.ACCESSORS,
        o = x(t, 0) ? t[0] : An,
        i = x(t, 1) ? t[1] : void 0;
      return (Cn[e] =
        !!n &&
        !f(function () {
          if (r && !d) return !0;
          var e = { length: -1 };
          r ? En(e, 1, { enumerable: !0, get: An }) : (e[1] = 1),
            n.call(e, o, i);
        }));
    })('indexOf', { ACCESSORS: !0, 1: 0 });
  Pe(
    { target: 'Array', proto: !0, forced: !Rn },
    {
      includes: function (e) {
        return Kn(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    jn('includes');
  ot('Array', 'includes');
  Pe(
    { target: 'String', proto: !0, forced: !Ne('includes') },
    {
      includes: function (e) {
        return !!~String(S(this)).indexOf(
          Ye(e),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    }
  );
  ot('String', 'includes');
  var Wn = !f(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Pn = s(function (e) {
      var t = W.f,
        n = M('meta'),
        r = 0,
        o =
          Object.isExtensible ||
          function () {
            return !0;
          },
        i = function (e) {
          t(e, n, { value: { objectID: 'O' + ++r, weakData: {} } });
        },
        a = (e.exports = {
          REQUIRED: !1,
          fastKey: function (e, t) {
            if (!k(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!x(e, n)) {
              if (!o(e)) return 'F';
              if (!t) return 'E';
              i(e);
            }
            return e[n].objectID;
          },
          getWeakData: function (e, t) {
            if (!x(e, n)) {
              if (!o(e)) return !0;
              if (!t) return !1;
              i(e);
            }
            return e[n].weakData;
          },
          onFreeze: function (e) {
            return Wn && a.REQUIRED && o(e) && !x(e, n) && i(e), e;
          }
        });
      Q[n] = !0;
    }),
    Zn =
      (Pn.REQUIRED,
      Pn.fastKey,
      Pn.getWeakData,
      Pn.onFreeze,
      s(function (e) {
        var t = function (e, t) {
          (this.stopped = e), (this.result = t);
        };
        (e.exports = function (e, n, r, o, i) {
          var a,
            c,
            s,
            u,
            l,
            f,
            d,
            p = nt(n, r, o ? 2 : 1);
          if (i) a = e;
          else {
            if ('function' != typeof (c = Ht(e)))
              throw TypeError('Target is not iterable');
            if (Ft(c)) {
              for (s = 0, u = ye(e.length); u > s; s++)
                if (
                  (l = o ? p(K((d = e[s]))[0], d[1]) : p(e[s])) &&
                  l instanceof t
                )
                  return l;
              return new t(!1);
            }
            a = c.call(e);
          }
          for (f = a.next; !(d = f.call(a)).done; )
            if (
              'object' == typeof (l = Gt(a, p, d.value, o)) &&
              l &&
              l instanceof t
            )
              return l;
          return new t(!1);
        }).stop = function (e) {
          return new t(!0, e);
        };
      })),
    Xn = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
      return e;
    },
    Gn = function (e, t, n) {
      for (var r in t) ce(e, r, t[r], n);
      return e;
    },
    Vn = Fe('species'),
    Un = W.f,
    Fn = Pn.fastKey,
    zn = ae.set,
    Yn = ae.getterFor,
    Bn =
      ((function (e, t, n) {
        var r = -1 !== e.indexOf('Map'),
          o = -1 !== e.indexOf('Weak'),
          i = r ? 'set' : 'add',
          a = l[e],
          c = a && a.prototype,
          s = a,
          u = {},
          d = function (e) {
            var t = c[e];
            ce(
              c,
              e,
              'add' == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : 'delete' == e
                ? function (e) {
                    return !(o && !k(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return o && !k(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : 'has' == e
                ? function (e) {
                    return !(o && !k(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          Re(
            e,
            'function' != typeof a ||
              !(
                o ||
                (c.forEach &&
                  !f(function () {
                    new a().entries().next();
                  }))
              )
          )
        )
          (s = n.getConstructor(t, e, r, i)), (Pn.REQUIRED = !0);
        else if (Re(e, !0)) {
          var p = new s(),
            h = p[i](o ? {} : -0, 1) != p,
            y = f(function () {
              p.has(1);
            }),
            v = tn(function (e) {
              new a(e);
            }),
            m =
              !o &&
              f(function () {
                for (var e = new a(), t = 5; t--; ) e[i](t, t);
                return !e.has(-0);
              });
          v ||
            (((s = t(function (t, n) {
              Xn(t, s, e);
              var o = (function (e, t, n) {
                var r, o;
                return (
                  Et &&
                    'function' == typeof (r = t.constructor) &&
                    r !== n &&
                    k((o = r.prototype)) &&
                    o !== n.prototype &&
                    Et(e, o),
                  e
                );
              })(new a(), t, s);
              return null != n && Zn(n, o[i], o, r), o;
            })).prototype = c),
            (c.constructor = s)),
            (y || m) && (d('delete'), d('has'), r && d('get')),
            (m || h) && d(i),
            o && c.clear && delete c.clear;
        }
        (u[e] = s),
          Pe({ global: !0, forced: s != a }, u),
          xt(s, e),
          o || n.setStrong(s, e, r);
      })(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (e, t, n, r) {
            var o = e(function (e, i) {
                Xn(e, o, t),
                  zn(e, {
                    type: t,
                    index: kt(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }),
                  d || (e.size = 0),
                  null != i && Zn(i, e[r], e, n);
              }),
              i = Yn(t),
              a = function (e, t, n) {
                var r,
                  o,
                  a = i(e),
                  s = c(e, t);
                return (
                  s
                    ? (s.value = n)
                    : ((a.last = s = {
                        index: (o = Fn(t, !0)),
                        key: t,
                        value: n,
                        previous: (r = a.last),
                        next: void 0,
                        removed: !1
                      }),
                      a.first || (a.first = s),
                      r && (r.next = s),
                      d ? a.size++ : e.size++,
                      'F' !== o && (a.index[o] = s)),
                  e
                );
              },
              c = function (e, t) {
                var n,
                  r = i(e),
                  o = Fn(t);
                if ('F' !== o) return r.index[o];
                for (n = r.first; n; n = n.next) if (n.key == t) return n;
              };
            return (
              Gn(o.prototype, {
                clear: function () {
                  for (var e = i(this), t = e.index, n = e.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete t[n.index],
                      (n = n.next);
                  (e.first = e.last = void 0),
                    d ? (e.size = 0) : (this.size = 0);
                },
                delete: function (e) {
                  var t = i(this),
                    n = c(this, e);
                  if (n) {
                    var r = n.next,
                      o = n.previous;
                    delete t.index[n.index],
                      (n.removed = !0),
                      o && (o.next = r),
                      r && (r.previous = o),
                      t.first == n && (t.first = r),
                      t.last == n && (t.last = o),
                      d ? t.size-- : this.size--;
                  }
                  return !!n;
                },
                forEach: function (e) {
                  for (
                    var t,
                      n = i(this),
                      r = nt(
                        e,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (t = t ? t.next : n.first);

                  )
                    for (r(t.value, t.key, this); t && t.removed; )
                      t = t.previous;
                },
                has: function (e) {
                  return !!c(this, e);
                }
              }),
              Gn(
                o.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = c(this, e);
                        return t && t.value;
                      },
                      set: function (e, t) {
                        return a(this, 0 === e ? 0 : e, t);
                      }
                    }
                  : {
                      add: function (e) {
                        return a(this, (e = 0 === e ? 0 : e), e);
                      }
                    }
              ),
              d &&
                Un(o.prototype, 'size', {
                  get: function () {
                    return i(this).size;
                  }
                }),
              o
            );
          },
          setStrong: function (e, t, n) {
            var r = t + ' Iterator',
              o = Yn(t),
              i = Yn(r);
            Wt(
              e,
              t,
              function (e, t) {
                zn(this, {
                  type: r,
                  target: e,
                  state: o(e),
                  kind: t,
                  last: void 0
                });
              },
              function () {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
                  n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first)
                  ? 'keys' == t
                    ? { value: n.key, done: !1 }
                    : 'values' == t
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 });
              },
              n ? 'entries' : 'values',
              !n,
              !0
            ),
              (function (e) {
                var t = le(e),
                  n = W.f;
                d &&
                  t &&
                  !t[Vn] &&
                  n(t, Vn, {
                    configurable: !0,
                    get: function () {
                      return this;
                    }
                  });
              })(t);
          }
        }
      ),
      Bt
        ? {}.toString
        : function () {
            return '[object ' + Jt(this) + ']';
          });
  Bt || ce(Object.prototype, 'toString', Bn, { unsafe: !0 });
  var Nn = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    Dn = ae.set,
    Jn = ae.getterFor('Array Iterator'),
    Mn = Wt(
      Array,
      'Array',
      function (e, t) {
        Dn(this, { type: 'Array Iterator', target: _(e), index: 0, kind: t });
      },
      function () {
        var e = Jn(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: r, done: !1 }
          : 'values' == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      'values'
    );
  (Ot.Arguments = Ot.Array), jn('keys'), jn('values'), jn('entries');
  var Hn = Fe('iterator'),
    qn = Fe('toStringTag'),
    Qn = Mn.values;
  for (var $n in Nn) {
    var er = l[$n],
      tr = er && er.prototype;
    if (tr) {
      if (tr[Hn] !== Qn)
        try {
          P(tr, Hn, Qn);
        } catch (e) {
          tr[Hn] = Qn;
        }
      if ((tr[qn] || P(tr, qn, $n), Nn[$n]))
        for (var nr in Mn)
          if (tr[nr] !== Mn[nr])
            try {
              P(tr, nr, Mn[nr]);
            } catch (e) {
              tr[nr] = Mn[nr];
            }
    }
  }
  se.Set;
  function rr(e) {
    var t = this.constructor;
    return this.then(
      function (n) {
        return t.resolve(e()).then(function () {
          return n;
        });
      },
      function (n) {
        return t.resolve(e()).then(function () {
          return t.reject(n);
        });
      }
    );
  }
  var or = setTimeout;
  function ir(e) {
    return Boolean(e && void 0 !== e.length);
  }
  function ar() {}
  function cr(e) {
    if (!(this instanceof cr))
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof e) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      pr(e, this);
  }
  function sr(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        cr._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r;
            try {
              r = n(e._value);
            } catch (e) {
              return void lr(t.promise, e);
            }
            ur(t.promise, r);
          } else (1 === e._state ? ur : lr)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function ur(e, t) {
    try {
      if (t === e)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var n = t.then;
        if (t instanceof cr) return (e._state = 3), (e._value = t), void fr(e);
        if ('function' == typeof n)
          return void pr(
            ((r = n),
            (o = t),
            function () {
              r.apply(o, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), fr(e);
    } catch (t) {
      lr(e, t);
    }
    var r, o;
  }
  function lr(e, t) {
    (e._state = 2), (e._value = t), fr(e);
  }
  function fr(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      cr._immediateFn(function () {
        e._handled || cr._unhandledRejectionFn(e._value);
      });
    for (var t = 0, n = e._deferreds.length; t < n; t++) sr(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function dr(e, t, n) {
    (this.onFulfilled = 'function' == typeof e ? e : null),
      (this.onRejected = 'function' == typeof t ? t : null),
      (this.promise = n);
  }
  function pr(e, t) {
    var n = !1;
    try {
      e(
        function (e) {
          n || ((n = !0), ur(t, e));
        },
        function (e) {
          n || ((n = !0), lr(t, e));
        }
      );
    } catch (e) {
      if (n) return;
      (n = !0), lr(t, e);
    }
  }
  (cr.prototype.catch = function (e) {
    return this.then(null, e);
  }),
    (cr.prototype.then = function (e, t) {
      var n = new this.constructor(ar);
      return sr(this, new dr(e, t, n)), n;
    }),
    (cr.prototype.finally = rr),
    (cr.all = function (e) {
      return new cr(function (t, n) {
        if (!ir(e)) return n(new TypeError('Promise.all accepts an array'));
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return t([]);
        var o = r.length;
        function i(e, a) {
          try {
            if (a && ('object' == typeof a || 'function' == typeof a)) {
              var c = a.then;
              if ('function' == typeof c)
                return void c.call(
                  a,
                  function (t) {
                    i(e, t);
                  },
                  n
                );
            }
            (r[e] = a), 0 == --o && t(r);
          } catch (e) {
            n(e);
          }
        }
        for (var a = 0; a < r.length; a++) i(a, r[a]);
      });
    }),
    (cr.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === cr
        ? e
        : new cr(function (t) {
            t(e);
          });
    }),
    (cr.reject = function (e) {
      return new cr(function (t, n) {
        n(e);
      });
    }),
    (cr.race = function (e) {
      return new cr(function (t, n) {
        if (!ir(e)) return n(new TypeError('Promise.race accepts an array'));
        for (var r = 0, o = e.length; r < o; r++) cr.resolve(e[r]).then(t, n);
      });
    }),
    (cr._immediateFn =
      ('function' == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        or(e, 0);
      }),
    (cr._unhandledRejectionFn = function (e) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', e);
    });
  var hr = (function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw new Error('unable to locate global object');
  })();
  'Promise' in hr
    ? hr.Promise.prototype.finally || (hr.Promise.prototype.finally = rr)
    : (hr.Promise = cr),
    (function (e) {
      function t() {}
      function n(e, t) {
        if (
          ((e = void 0 === e ? 'utf-8' : e),
          (t = void 0 === t ? { fatal: !1 } : t),
          -1 == r.indexOf(e.toLowerCase()))
        )
          throw new RangeError(
            "Failed to construct 'TextDecoder': The encoding label provided ('" +
              e +
              "') is invalid."
          );
        if (t.fatal)
          throw Error(
            "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
          );
      }
      if (e.TextEncoder && e.TextDecoder) return !1;
      var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
      Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
        (t.prototype.encode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to encode: the 'stream' option is unsupported."
            );
          t = 0;
          for (
            var n = e.length,
              r = 0,
              o = Math.max(32, n + (n >> 1) + 7),
              i = new Uint8Array((o >> 3) << 3);
            t < n;

          ) {
            var a = e.charCodeAt(t++);
            if (55296 <= a && 56319 >= a) {
              if (t < n) {
                var c = e.charCodeAt(t);
                56320 == (64512 & c) &&
                  (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
              }
              if (55296 <= a && 56319 >= a) continue;
            }
            if (
              (r + 4 > i.length &&
                ((o += 8),
                (o = ((o *= 1 + (t / e.length) * 2) >> 3) << 3),
                (c = new Uint8Array(o)).set(i),
                (i = c)),
              0 == (4294967168 & a))
            )
              i[r++] = a;
            else {
              if (0 == (4294965248 & a)) i[r++] = ((a >> 6) & 31) | 192;
              else if (0 == (4294901760 & a))
                (i[r++] = ((a >> 12) & 15) | 224),
                  (i[r++] = ((a >> 6) & 63) | 128);
              else {
                if (0 != (4292870144 & a)) continue;
                (i[r++] = ((a >> 18) & 7) | 240),
                  (i[r++] = ((a >> 12) & 63) | 128),
                  (i[r++] = ((a >> 6) & 63) | 128);
              }
              i[r++] = (63 & a) | 128;
            }
          }
          return i.slice ? i.slice(0, r) : i.subarray(0, r);
        }),
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
        Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
        Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 }),
        (n.prototype.decode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to decode: the 'stream' option is unsupported."
            );
          e.buffer instanceof ArrayBuffer && (e = e.buffer),
            (e = new Uint8Array(e)),
            (t = 0);
          for (var n = [], r = []; ; ) {
            var o = t < e.length;
            if (!o || 65536 & t) {
              if ((r.push(String.fromCharCode.apply(null, n)), !o))
                return r.join('');
              (n = []), (e = e.subarray(t)), (t = 0);
            }
            if (0 === (o = e[t++])) n.push(0);
            else if (0 == (128 & o)) n.push(o);
            else if (192 == (224 & o)) {
              var i = 63 & e[t++];
              n.push(((31 & o) << 6) | i);
            } else if (224 == (240 & o)) {
              i = 63 & e[t++];
              var a = 63 & e[t++];
              n.push(((31 & o) << 12) | (i << 6) | a);
            } else if (240 == (248 & o)) {
              65535 <
                (o =
                  ((7 & o) << 18) |
                  ((i = 63 & e[t++]) << 12) |
                  ((a = 63 & e[t++]) << 6) |
                  (63 & e[t++])) &&
                ((o -= 65536),
                n.push(((o >>> 10) & 1023) | 55296),
                (o = 56320 | (1023 & o))),
                n.push(o);
            }
          }
        }),
        (e.TextEncoder = t),
        (e.TextDecoder = n);
    })('undefined' != typeof window ? window : a),
    (function () {
      function e(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function n(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      }
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function c(e, t, n) {
        return (c =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var o = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = r(e));

                  );
                  return e;
                })(e, t);
                if (o) {
                  var i = Object.getOwnPropertyDescriptor(o, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      var s = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'listeners', {
                value: {},
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'addEventListener',
                value: function (e, t) {
                  e in this.listeners || (this.listeners[e] = []),
                    this.listeners[e].push(t);
                }
              },
              {
                key: 'removeEventListener',
                value: function (e, t) {
                  if (e in this.listeners)
                    for (
                      var n = this.listeners[e], r = 0, o = n.length;
                      r < o;
                      r++
                    )
                      if (n[r] === t) return void n.splice(r, 1);
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  var t = this;
                  if (e.type in this.listeners) {
                    for (
                      var n = function (n) {
                          setTimeout(function () {
                            return n.call(t, e);
                          });
                        },
                        r = this.listeners[e.type],
                        o = 0,
                        i = r.length;
                      o < i;
                      o++
                    )
                      n(r[o]);
                    return !e.defaultPrevented;
                  }
                }
              }
            ]),
            t
          );
        })(),
        u = (function (t) {
          function a() {
            var t;
            return (
              e(this, a),
              (t = (function (e, t) {
                return !t || ('object' != typeof t && 'function' != typeof t)
                  ? i(e)
                  : t;
              })(this, r(a).call(this))).listeners || s.call(i(t)),
              Object.defineProperty(i(t), 'aborted', {
                value: !1,
                writable: !0,
                configurable: !0
              }),
              Object.defineProperty(i(t), 'onabort', {
                value: null,
                writable: !0,
                configurable: !0
              }),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && o(e, t);
            })(a, t),
            n(a, [
              {
                key: 'toString',
                value: function () {
                  return '[object AbortSignal]';
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  'abort' === e.type &&
                    ((this.aborted = !0),
                    'function' == typeof this.onabort &&
                      this.onabort.call(this, e)),
                    c(r(a.prototype), 'dispatchEvent', this).call(this, e);
                }
              }
            ]),
            a
          );
        })(s),
        l = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'signal', {
                value: new u(),
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'abort',
                value: function () {
                  var e;
                  try {
                    e = new Event('abort');
                  } catch (t) {
                    'undefined' != typeof document
                      ? document.createEvent
                        ? (e = document.createEvent('Event')).initEvent(
                            'abort',
                            !1,
                            !1
                          )
                        : ((e = document.createEventObject()).type = 'abort')
                      : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                  }
                  this.signal.dispatchEvent(e);
                }
              },
              {
                key: 'toString',
                value: function () {
                  return '[object AbortController]';
                }
              }
            ]),
            t
          );
        })();
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        ((l.prototype[Symbol.toStringTag] = 'AbortController'),
        (u.prototype[Symbol.toStringTag] = 'AbortSignal')),
        (function (e) {
          (function (e) {
            return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
              ? (console.log(
                  '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
                ),
                !0)
              : ('function' == typeof e.Request &&
                  !e.Request.prototype.hasOwnProperty('signal')) ||
                  !e.AbortController;
          })(e) && ((e.AbortController = l), (e.AbortSignal = u));
        })('undefined' != typeof self ? self : a);
    })();
  var yr = s(function (e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function () {
      function e() {
        var e = this;
        (this.locked = new Map()),
          (this.addToLocked = function (t, n) {
            var r = e.locked.get(t);
            void 0 === r
              ? void 0 === n
                ? e.locked.set(t, [])
                : e.locked.set(t, [n])
              : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
          }),
          (this.isLocked = function (t) {
            return e.locked.has(t);
          }),
          (this.lock = function (t) {
            return new Promise(function (n, r) {
              e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
            });
          }),
          (this.unlock = function (t) {
            var n = e.locked.get(t);
            if (void 0 !== n && 0 !== n.length) {
              var r = n.pop();
              e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
            } else e.locked.delete(t);
          });
      }
      return (
        (e.getInstance = function () {
          return void 0 === e.instance && (e.instance = new e()), e.instance;
        }),
        e
      );
    })();
    t.default = function () {
      return n.getInstance();
    };
  });
  c(yr);
  var vr = c(
    s(function (e, t) {
      var n =
          (a && a.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                e.done
                  ? o(e.value)
                  : new n(function (t) {
                      t(e.value);
                    }).then(a, c);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        r =
          (a && a.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: c(0), throw: c(1), return: c(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function c(i) {
              return function (c) {
                return (function (i) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = a.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, c]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      function o(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }
      function i(e) {
        for (
          var t =
              '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            n = '',
            r = 0;
          r < e;
          r++
        ) {
          n += t[Math.floor(Math.random() * t.length)];
        }
        return n;
      }
      var c = (function () {
        function e() {
          (this.acquiredIatSet = new Set()),
            (this.id = Date.now().toString() + i(15)),
            (this.acquireLock = this.acquireLock.bind(this)),
            (this.releaseLock = this.releaseLock.bind(this)),
            (this.releaseLock__private__ = this.releaseLock__private__.bind(
              this
            )),
            (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
              this
            )),
            (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
              this
            )),
            void 0 === e.waiters && (e.waiters = []);
        }
        return (
          (e.prototype.acquireLock = function (t, a) {
            return (
              void 0 === a && (a = 5e3),
              n(this, void 0, void 0, function () {
                var n, c, s, u, l, f;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (n = Date.now() + i(4)),
                        (c = Date.now() + a),
                        (s = 'browser-tabs-lock-key-' + t),
                        (u = window.localStorage),
                        (r.label = 1);
                    case 1:
                      return Date.now() < c ? [4, o(30)] : [3, 8];
                    case 2:
                      return (
                        r.sent(),
                        null !== u.getItem(s)
                          ? [3, 5]
                          : ((l = this.id + '-' + t + '-' + n),
                            [4, o(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        r.sent(),
                        u.setItem(
                          s,
                          JSON.stringify({
                            id: this.id,
                            iat: n,
                            timeoutKey: l,
                            timeAcquired: Date.now(),
                            timeRefreshed: Date.now()
                          })
                        ),
                        [4, o(30)]
                      );
                    case 4:
                      return (
                        r.sent(),
                        null !== (f = u.getItem(s)) &&
                        (f = JSON.parse(f)).id === this.id &&
                        f.iat === n
                          ? (this.acquiredIatSet.add(n),
                            this.refreshLockWhileAcquired(s, n),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        e.lockCorrector(), [4, this.waitForSomethingToChange(c)]
                      );
                    case 6:
                      r.sent(), (r.label = 7);
                    case 7:
                      return (n = Date.now() + i(4)), [3, 1];
                    case 8:
                      return [2, !1];
                  }
                });
              })
            );
          }),
          (e.prototype.refreshLockWhileAcquired = function (e, t) {
            return n(this, void 0, void 0, function () {
              var o = this;
              return r(this, function (i) {
                return (
                  setTimeout(function () {
                    return n(o, void 0, void 0, function () {
                      var n, o;
                      return r(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return [4, yr.default().lock(t)];
                          case 1:
                            return (
                              r.sent(),
                              this.acquiredIatSet.has(t)
                                ? ((n = window.localStorage),
                                  null === (o = n.getItem(e))
                                    ? (yr.default().unlock(t), [2])
                                    : (((o = JSON.parse(
                                        o
                                      )).timeRefreshed = Date.now()),
                                      n.setItem(e, JSON.stringify(o)),
                                      yr.default().unlock(t),
                                      this.refreshLockWhileAcquired(e, t),
                                      [2]))
                                : (yr.default().unlock(t), [2])
                            );
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          }),
          (e.prototype.waitForSomethingToChange = function (t) {
            return n(this, void 0, void 0, function () {
              return r(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (n) {
                        var r = !1,
                          o = Date.now(),
                          i = !1;
                        function a() {
                          if (
                            (i ||
                              (window.removeEventListener('storage', a),
                              e.removeFromWaiting(a),
                              clearTimeout(c),
                              (i = !0)),
                            !r)
                          ) {
                            r = !0;
                            var t = 50 - (Date.now() - o);
                            t > 0 ? setTimeout(n, t) : n();
                          }
                        }
                        window.addEventListener('storage', a),
                          e.addToWaiting(a);
                        var c = setTimeout(a, Math.max(0, t - Date.now()));
                      })
                    ];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }),
          (e.addToWaiting = function (t) {
            this.removeFromWaiting(t),
              void 0 !== e.waiters && e.waiters.push(t);
          }),
          (e.removeFromWaiting = function (t) {
            void 0 !== e.waiters &&
              (e.waiters = e.waiters.filter(function (e) {
                return e !== t;
              }));
          }),
          (e.notifyWaiters = function () {
            void 0 !== e.waiters &&
              e.waiters.slice().forEach(function (e) {
                return e();
              });
          }),
          (e.prototype.releaseLock = function (e) {
            return n(this, void 0, void 0, function () {
              return r(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.releaseLock__private__(e)];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.releaseLock__private__ = function (t) {
            return n(this, void 0, void 0, function () {
              var n, o, i;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (n = window.localStorage),
                      (o = 'browser-tabs-lock-key-' + t),
                      null === (i = n.getItem(o))
                        ? [2]
                        : (i = JSON.parse(i)).id !== this.id
                        ? [3, 2]
                        : [4, yr.default().lock(i.iat)]
                    );
                  case 1:
                    r.sent(),
                      this.acquiredIatSet.delete(i.iat),
                      n.removeItem(o),
                      yr.default().unlock(i.iat),
                      e.notifyWaiters(),
                      (r.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (e.lockCorrector = function () {
            for (
              var t = Date.now() - 5e3,
                n = window.localStorage,
                r = Object.keys(n),
                o = !1,
                i = 0;
              i < r.length;
              i++
            ) {
              var a = r[i];
              if (a.includes('browser-tabs-lock-key')) {
                var c = n.getItem(a);
                null !== c &&
                  ((void 0 === (c = JSON.parse(c)).timeRefreshed &&
                    c.timeAcquired < t) ||
                    (void 0 !== c.timeRefreshed && c.timeRefreshed < t)) &&
                  (n.removeItem(a), (o = !0));
              }
            }
            o && e.notifyWaiters();
          }),
          (e.waiters = void 0),
          e
        );
      })();
      t.default = c;
    })
  );
  var mr = { timeoutInSeconds: 60 },
    br = [
      'login_required',
      'consent_required',
      'interaction_required',
      'account_selection_required',
      'access_denied'
    ],
    gr = (function (e) {
      function n(t, r) {
        var o = e.call(this, r) || this;
        return (
          (o.error = t),
          (o.error_description = r),
          Object.setPrototypeOf(o, n.prototype),
          o
        );
      }
      return (
        t(n, e),
        (n.fromPayload = function (e) {
          return new n(e.error, e.error_description);
        }),
        n
      );
    })(Error),
    wr = (function (e) {
      function n(t, r, o, i) {
        void 0 === i && (i = null);
        var a = e.call(this, t, r) || this;
        return (
          (a.state = o),
          (a.appState = i),
          Object.setPrototypeOf(a, n.prototype),
          a
        );
      }
      return t(n, e), n;
    })(gr),
    Sr = (function (e) {
      function n() {
        var t = e.call(this, 'timeout', 'Timeout') || this;
        return Object.setPrototypeOf(t, n.prototype), t;
      }
      return t(n, e), n;
    })(gr),
    _r = (function (e) {
      function n(t) {
        var r = e.call(this) || this;
        return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
      }
      return t(n, e), n;
    })(Sr),
    kr = function (e, t, n) {
      return (
        void 0 === n && (n = 60),
        new Promise(function (r, o) {
          var i = window.document.createElement('iframe');
          i.setAttribute('width', '0'),
            i.setAttribute('height', '0'),
            (i.style.display = 'none');
          var a = function () {
              window.document.body.contains(i) &&
                window.document.body.removeChild(i);
            },
            c = setTimeout(function () {
              o(new Sr()), a();
            }, 1e3 * n),
            s = function (e) {
              if (
                e.origin == t &&
                e.data &&
                'authorization_response' === e.data.type
              ) {
                var n = e.source;
                n && n.close(),
                  e.data.response.error
                    ? o(gr.fromPayload(e.data.response))
                    : r(e.data.response),
                  clearTimeout(c),
                  window.removeEventListener('message', s, !1),
                  setTimeout(a, 2e3);
              }
            };
          window.addEventListener('message', s, !1),
            window.document.body.appendChild(i),
            i.setAttribute('src', e);
        })
      );
    },
    Ir = function (e, t) {
      var n,
        r,
        o,
        i = t.popup;
      if (
        (i
          ? (i.location.href = e)
          : ((n = e),
            (r = window.screenX + (window.innerWidth - 400) / 2),
            (o = window.screenY + (window.innerHeight - 600) / 2),
            (i = window.open(
              n,
              'auth0:authorize:popup',
              'left=' +
                r +
                ',top=' +
                o +
                ',width=400,height=600,resizable,scrollbars=yes,status=1'
            ))),
        !i)
      )
        throw new Error('Could not open popup');
      return new Promise(function (e, n) {
        var r = setTimeout(function () {
          n(new _r(i));
        }, 1e3 * (t.timeoutInSeconds || 60));
        window.addEventListener('message', function (t) {
          if (t.data && 'authorization_response' === t.data.type) {
            if ((clearTimeout(r), i.close(), t.data.response.error))
              return n(gr.fromPayload(t.data.response));
            e(t.data.response);
          }
        });
      });
    },
    Tr = function () {
      var e =
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
        t = '';
      return (
        Array.from(Wr().getRandomValues(new Uint8Array(43))).forEach(function (
          n
        ) {
          return (t += e[n % e.length]);
        }),
        t
      );
    },
    xr = function (e) {
      return btoa(e);
    },
    Or = function (e) {
      return Object.keys(e)
        .filter(function (t) {
          return void 0 !== e[t];
        })
        .map(function (t) {
          return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
        })
        .join('&');
    },
    Lr = function (e) {
      return o(void 0, void 0, void 0, function () {
        var t;
        return i(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = Pr().digest(
                  { name: 'SHA-256' },
                  new TextEncoder().encode(e)
                )),
                window.msCrypto
                  ? [
                      2,
                      new Promise(function (e, n) {
                        (t.oncomplete = function (t) {
                          e(t.target.result);
                        }),
                          (t.onerror = function (e) {
                            n(e.error);
                          }),
                          (t.onabort = function () {
                            n('The digest operation was aborted');
                          });
                      })
                    ]
                  : [4, t]
              );
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    jr = function (e) {
      return (function (e) {
        return decodeURIComponent(
          atob(e)
            .split('')
            .map(function (e) {
              return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
      })(e.replace(/_/g, '/').replace(/-/g, '+'));
    },
    Er = function (e) {
      var t = new Uint8Array(e);
      return (function (e) {
        var t = { '+': '-', '/': '_', '=': '' };
        return e.replace(/[\+\/=]/g, function (e) {
          return t[e];
        });
      })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
    },
    Cr = function (e, t, r, a, c, s) {
      return o(void 0, void 0, void 0, function () {
        var o, u;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              return s
                ? (delete a.signal,
                  [
                    2,
                    ((d = n({ url: e, audience: t, scope: r, timeout: c }, a)),
                    (p = s),
                    new Promise(function (e, t) {
                      var n = new MessageChannel();
                      (n.port1.onmessage = function (n) {
                        n.data.error ? t(new Error(n.data.error)) : e(n.data);
                      }),
                        p.postMessage(d, [n.port2]);
                    }))
                  ])
                : [3, 1];
            case 1:
              return [
                4,
                ((l = e),
                (f = a),
                (f = f || {}),
                new Promise(function (e, t) {
                  var n = new XMLHttpRequest(),
                    r = [],
                    o = [],
                    i = {},
                    a = function () {
                      return {
                        ok: 2 == ((n.status / 100) | 0),
                        statusText: n.statusText,
                        status: n.status,
                        url: n.responseURL,
                        text: function () {
                          return Promise.resolve(n.responseText);
                        },
                        json: function () {
                          return Promise.resolve(JSON.parse(n.responseText));
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([n.response]));
                        },
                        clone: a,
                        headers: {
                          keys: function () {
                            return r;
                          },
                          entries: function () {
                            return o;
                          },
                          get: function (e) {
                            return i[e.toLowerCase()];
                          },
                          has: function (e) {
                            return e.toLowerCase() in i;
                          }
                        }
                      };
                    };
                  for (var c in (n.open(f.method || 'get', l, !0),
                  (n.onload = function () {
                    n
                      .getAllResponseHeaders()
                      .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                        e,
                        t,
                        n
                      ) {
                        r.push((t = t.toLowerCase())),
                          o.push([t, n]),
                          (i[t] = i[t] ? i[t] + ',' + n : n);
                      }),
                      e(a());
                  }),
                  (n.onerror = t),
                  (n.withCredentials = 'include' == f.credentials),
                  f.headers))
                    n.setRequestHeader(c, f.headers[c]);
                  n.send(f.body || null);
                }))
              ];
            case 2:
              return (o = i.sent()), (u = { ok: o.ok }), [4, o.json()];
            case 3:
              return [2, ((u.json = i.sent()), u)];
          }
          var l, f, d, p;
        });
      });
    },
    Ar = function (e, t, r, o, i, a) {
      void 0 === a && (a = 1e4);
      var c,
        s = new AbortController(),
        u = s.signal,
        l = n(n({}, o), { signal: u });
      return Promise.race([
        Cr(e, t, r, l, a, i),
        new Promise(function (e, t) {
          c = setTimeout(function () {
            s.abort(), t(new Error("Timeout when executing 'fetch'"));
          }, a);
        })
      ]).finally(function () {
        clearTimeout(c);
      });
    },
    Kr = function (e, t, n, a, c, s) {
      return o(void 0, void 0, void 0, function () {
        var o, u, l, f, d, p, h, y, v, m;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              (l = 0), (i.label = 1);
            case 1:
              if (!(l < 3)) return [3, 6];
              i.label = 2;
            case 2:
              return i.trys.push([2, 4, , 5]), [4, Ar(e, n, a, c, s, t)];
            case 3:
              return (u = i.sent()), (o = null), [3, 6];
            case 4:
              return (f = i.sent()), (o = f), [3, 5];
            case 5:
              return l++, [3, 1];
            case 6:
              if (o) throw ((o.message = o.message || 'Failed to fetch'), o);
              if (
                ((d = u.json),
                (p = d.error),
                (h = d.error_description),
                (y = r(d, ['error', 'error_description'])),
                !u.ok)
              )
                throw (
                  ((v = h || 'HTTP error. Unable to fetch ' + e),
                  ((m = new Error(v)).error = p || 'request_error'),
                  (m.error_description = v),
                  m)
                );
              return [2, y];
          }
        });
      });
    },
    Rr = function (e, t) {
      return o(void 0, void 0, void 0, function () {
        var o,
          a,
          c,
          s = e.baseUrl,
          u = e.timeout,
          l = e.audience,
          f = e.scope,
          d = r(e, ['baseUrl', 'timeout', 'audience', 'scope']);
        return i(this, function (e) {
          switch (e.label) {
            case 0:
              for (c in ((o = n({ redirect_uri: window.location.origin }, d)),
              (a = new FormData()),
              o))
                a.append(c, o[c]);
              return [
                4,
                Kr(
                  s + '/oauth/token',
                  u,
                  l || 'default',
                  f,
                  { method: 'POST', body: a },
                  t
                )
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    },
    Wr = function () {
      return window.crypto || window.msCrypto;
    },
    Pr = function () {
      var e = Wr();
      return e.subtle || e.webkitSubtle;
    },
    Zr = function (e) {
      return Array.from(new Set(e));
    },
    Xr = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Zr(e.join(' ').trim().split(/\s+/)).join(' ');
    },
    Gr = function (e) {
      return (
        '@@auth0spajs@@::' + e.client_id + '::' + e.audience + '::' + e.scope
      );
    },
    Vr = function (e) {
      var t = Math.floor(Date.now() / 1e3) + e.expires_in;
      return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
    },
    Ur = (function () {
      function e() {}
      return (
        (e.prototype.save = function (e) {
          var t = Gr(e),
            n = Vr(e);
          window.localStorage.setItem(t, JSON.stringify(n));
        }),
        (e.prototype.get = function (e, t) {
          void 0 === t && (t = 0);
          var n = Gr(e),
            r = this.readJson(n),
            o = Math.floor(Date.now() / 1e3);
          if (r) {
            if (!(r.expiresAt - t < o)) return r.body;
            if (r.body.refresh_token) {
              var i = this.stripData(r);
              return this.writeJson(n, i), i.body;
            }
            localStorage.removeItem(n);
          }
        }),
        (e.prototype.clear = function () {
          for (var e = localStorage.length - 1; e >= 0; e--)
            localStorage.key(e).startsWith('@@auth0spajs@@') &&
              localStorage.removeItem(localStorage.key(e));
        }),
        (e.prototype.readJson = function (e) {
          var t,
            n = window.localStorage.getItem(e);
          if (n && (t = JSON.parse(n))) return t;
        }),
        (e.prototype.writeJson = function (e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        }),
        (e.prototype.stripData = function (e) {
          return {
            body: { refresh_token: e.body.refresh_token },
            expiresAt: e.expiresAt
          };
        }),
        e
      );
    })(),
    Fr = function () {
      this.enclosedCache = (function () {
        var e = { body: {}, expiresAt: 0 };
        return {
          save: function (t) {
            var n = Gr(t),
              r = Vr(t);
            e[n] = r;
          },
          get: function (t, n) {
            void 0 === n && (n = 0);
            var r = Gr(t),
              o = e[r],
              i = Math.floor(Date.now() / 1e3);
            if (o)
              return o.expiresAt - n < i
                ? o.body.refresh_token
                  ? ((o.body = { refresh_token: o.body.refresh_token }), o.body)
                  : void delete e[r]
                : o.body;
          },
          clear: function () {
            e = { body: {}, expiresAt: 0 };
          }
        };
      })();
    },
    zr = s(function (e, t) {
      var n =
        (a && a.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function r(e, t) {
        if (!t) return '';
        var n = '; ' + e;
        return !0 === t ? n : n + '=' + t;
      }
      function o(e, t, n) {
        return (
          encodeURIComponent(e)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29') +
          '=' +
          encodeURIComponent(t).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          ) +
          (function (e) {
            if ('number' == typeof e.expires) {
              var t = new Date();
              t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                (e.expires = t);
            }
            return (
              r('Expires', e.expires ? e.expires.toUTCString() : '') +
              r('Domain', e.domain) +
              r('Path', e.path) +
              r('Secure', e.secure) +
              r('SameSite', e.sameSite)
            );
          })(n)
        );
      }
      function i(e) {
        for (
          var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
          o < n.length;
          o++
        ) {
          var i = n[o].split('='),
            a = i.slice(1).join('=');
          '"' === a.charAt(0) && (a = a.slice(1, -1));
          try {
            t[i[0].replace(r, decodeURIComponent)] = a.replace(
              r,
              decodeURIComponent
            );
          } catch (e) {}
        }
        return t;
      }
      function c() {
        return i(document.cookie);
      }
      function s(e, t, r) {
        document.cookie = o(e, t, n({ path: '/' }, r));
      }
      (t.__esModule = !0),
        (t.encode = o),
        (t.parse = i),
        (t.getAll = c),
        (t.get = function (e) {
          return c()[e];
        }),
        (t.set = s),
        (t.remove = function (e, t) {
          s(e, '', n(n({}, t), { expires: -1 }));
        });
    });
  c(zr);
  zr.encode, zr.parse;
  var Yr = zr.getAll,
    Br = zr.get,
    Nr = zr.set,
    Dr = zr.remove,
    Jr = function (e) {
      var t = Br(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    Mr = function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol &&
        (r = { secure: !0, sameSite: 'none' }),
        (r.expires = n.daysUntilExpire),
        Nr(e, JSON.stringify(t), r);
    },
    Hr = function (e) {
      Dr(e);
    },
    qr = function (e) {
      return 'a0.spajs.txs.' + e;
    },
    Qr = (function () {
      function e() {
        var e = this;
        (this.transactions = {}),
          'undefined' != typeof window &&
            Object.keys(Yr() || {})
              .filter(function (e) {
                return e.startsWith('a0.spajs.txs.');
              })
              .forEach(function (t) {
                var n = t.replace('a0.spajs.txs.', '');
                e.transactions[n] = Jr(t);
              });
      }
      return (
        (e.prototype.create = function (e, t) {
          (this.transactions[e] = t), Mr(qr(e), t, { daysUntilExpire: 1 });
        }),
        (e.prototype.get = function (e) {
          return this.transactions[e];
        }),
        (e.prototype.remove = function (e) {
          delete this.transactions[e], Hr(qr(e));
        }),
        e
      );
    })(),
    $r = function (e) {
      return 'number' == typeof e;
    },
    eo = [
      'iss',
      'aud',
      'exp',
      'nbf',
      'iat',
      'jti',
      'azp',
      'nonce',
      'auth_time',
      'at_hash',
      'c_hash',
      'acr',
      'amr',
      'sub_jwk',
      'cnf',
      'sip_from_tag',
      'sip_date',
      'sip_callid',
      'sip_cseq_num',
      'sip_via_branch',
      'orig',
      'dest',
      'mky',
      'events',
      'toe',
      'txn',
      'rph',
      'sid',
      'vot',
      'vtm'
    ],
    to = function (e) {
      if (!e.id_token) throw new Error('ID token is required but missing');
      var t = (function (e) {
        var t = e.split('.'),
          n = t[0],
          r = t[1],
          o = t[2];
        if (3 !== t.length || !n || !r || !o)
          throw new Error('ID token could not be decoded');
        var i = JSON.parse(jr(r)),
          a = { __raw: e },
          c = {};
        return (
          Object.keys(i).forEach(function (e) {
            (a[e] = i[e]), eo.includes(e) || (c[e] = i[e]);
          }),
          {
            encoded: { header: n, payload: r, signature: o },
            header: JSON.parse(jr(n)),
            claims: a,
            user: c
          }
        );
      })(e.id_token);
      if (!t.claims.iss)
        throw new Error(
          'Issuer (iss) claim must be a string present in the ID token'
        );
      if (t.claims.iss !== e.iss)
        throw new Error(
          'Issuer (iss) claim mismatch in the ID token; expected "' +
            e.iss +
            '", found "' +
            t.claims.iss +
            '"'
        );
      if (!t.user.sub)
        throw new Error(
          'Subject (sub) claim must be a string present in the ID token'
        );
      if ('RS256' !== t.header.alg)
        throw new Error(
          'Signature algorithm of "' +
            t.header.alg +
            '" is not supported. Expected the ID token to be signed with "RS256".'
        );
      if (
        !t.claims.aud ||
        ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
      )
        throw new Error(
          'Audience (aud) claim must be a string or array of strings present in the ID token'
        );
      if (Array.isArray(t.claims.aud)) {
        if (!t.claims.aud.includes(e.aud))
          throw new Error(
            'Audience (aud) claim mismatch in the ID token; expected "' +
              e.aud +
              '" but was not one of "' +
              t.claims.aud.join(', ') +
              '"'
          );
        if (t.claims.aud.length > 1) {
          if (!t.claims.azp)
            throw new Error(
              'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
            );
          if (t.claims.azp !== e.aud)
            throw new Error(
              'Authorized Party (azp) claim mismatch in the ID token; expected "' +
                e.aud +
                '", found "' +
                t.claims.azp +
                '"'
            );
        }
      } else if (t.claims.aud !== e.aud)
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but found "' +
            t.claims.aud +
            '"'
        );
      if (e.nonce) {
        if (!t.claims.nonce)
          throw new Error(
            'Nonce (nonce) claim must be a string present in the ID token'
          );
        if (t.claims.nonce !== e.nonce)
          throw new Error(
            'Nonce (nonce) claim mismatch in the ID token; expected "' +
              e.nonce +
              '", found "' +
              t.claims.nonce +
              '"'
          );
      }
      if (e.max_age && !$r(t.claims.auth_time))
        throw new Error(
          'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
        );
      if (!$r(t.claims.exp))
        throw new Error(
          'Expiration Time (exp) claim must be a number present in the ID token'
        );
      if (!$r(t.claims.iat))
        throw new Error(
          'Issued At (iat) claim must be a number present in the ID token'
        );
      var n = e.leeway || 60,
        r = new Date(Date.now()),
        o = new Date(0),
        i = new Date(0),
        a = new Date(0);
      if (
        (a.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
        o.setUTCSeconds(t.claims.exp + n),
        i.setUTCSeconds(t.claims.nbf - n),
        r > o)
      )
        throw new Error(
          'Expiration Time (exp) claim error in the ID token; current time (' +
            r +
            ') is after expiration time (' +
            o +
            ')'
        );
      if ($r(t.claims.nbf) && r < i)
        throw new Error(
          "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
            r +
            ') is before ' +
            i
        );
      if ($r(t.claims.auth_time) && r > a)
        throw new Error(
          'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
            r +
            ') is after last auth at ' +
            a
        );
      return t;
    };
  function no(e, t, n) {
    var r = void 0 === t ? null : t,
      o = (function (e, t) {
        var n = atob(e);
        if (t) {
          for (
            var r = new Uint8Array(n.length), o = 0, i = n.length;
            o < i;
            ++o
          )
            r[o] = n.charCodeAt(o);
          return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
        }
        return n;
      })(e, void 0 !== n && n),
      i = o.indexOf('\n', 10) + 1,
      a = o.substring(i) + (r ? '//# sourceMappingURL=' + r : ''),
      c = new Blob([a], { type: 'application/javascript' });
    return URL.createObjectURL(c);
  }
  var ro,
    oo,
    io,
    ao,
    co =
      ((ro =
        'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOyB5b3UgbWF5IG5vdCB1c2UKdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUKTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKClRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkKS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRApXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLApNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULgoKU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zCmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8KdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0PXt9LG49ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZSsifCIrcn07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGMsbCxmLHAsaCx5LGI7cmV0dXJuIHA9dm9pZCAwLGg9dm9pZCAwLGI9ZnVuY3Rpb24oKXt2YXIgcCxoLHksYixkLHYsdyxnO3JldHVybiByKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cz1vLmRhdGEsYT1zLnVybCxpPXMudGltZW91dCx1PXMuYXVkaWVuY2UsYz1zLnNjb3BlLGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH0ocyxbInVybCIsInRpbWVvdXQiLCJhdWRpZW5jZSIsInNjb3BlIl0pLGY9by5wb3J0c1swXSxyLmxhYmVsPTE7Y2FzZSAxOmlmKHIudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKGg9SlNPTi5wYXJzZShsLmJvZHkpKS5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1oLmdyYW50X3R5cGUpe2lmKCEoeT1mdW5jdGlvbihlLHIpe3JldHVybiB0W24oZSxyKV19KHUsYykpKXRocm93IG5ldyBFcnJvcigiVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbiIpO2wuYm9keT1KU09OLnN0cmluZ2lmeShlKGUoe30saCkse3JlZnJlc2hfdG9rZW46eX0pKX1iPW5ldyBBYm9ydENvbnRyb2xsZXIsZD1iLnNpZ25hbCx2PXZvaWQgMCxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByLnRyeXMucHVzaChbMiw0LCw1XSksWzQsUHJvbWlzZS5yYWNlKFsoaz1pLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLGspfSkpKSxmZXRjaChhLGUoZSh7fSxsKSx7c2lnbmFsOmR9KSldKV07Y2FzZSAzOnJldHVybiB2PXIuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooYi5hYm9ydCgpLFsyXSk7Y2FzZSA2OnJldHVybihwPXIuc2VudCgpKS5yZWZyZXNoX3Rva2VuPyhmdW5jdGlvbihlLHIsbyl7dFtuKHIsbyldPWV9KHAucmVmcmVzaF90b2tlbix1LGMpLGRlbGV0ZSBwLnJlZnJlc2hfdG9rZW4pOmZ1bmN0aW9uKGUscil7ZGVsZXRlIHRbbihlLHIpXX0odSxjKSxmLnBvc3RNZXNzYWdlKHtvazp2Lm9rLGpzb246cH0pLFszLDhdO2Nhc2UgNzpyZXR1cm4gZz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcl9kZXNjcmlwdGlvbjpnLm1lc3NhZ2V9fSksWzMsOF07Y2FzZSA4OnJldHVyblsyXX12YXIga30pKX0sbmV3KCh5PXZvaWQgMCl8fCh5PVByb21pc2UpKSgoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KGUpe3RyeXtvKGIubmV4dChlKSl9Y2F0Y2goZSl7cihlKX19ZnVuY3Rpb24gbihlKXt0cnl7byhiLnRocm93KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBvKHIpe3IuZG9uZT9lKHIudmFsdWUpOm5ldyB5KChmdW5jdGlvbihlKXtlKHIudmFsdWUpfSkpLnRoZW4odCxuKX1vKChiPWIuYXBwbHkocCxofHxbXSkpLm5leHQoKSl9KSl9KSk7Cgo='),
      (oo = null),
      (io = !1),
      function (e) {
        return (ao = ao || no(ro, oo, io)), new Worker(ao, e);
      }),
    so = new vr(),
    uo = {
      memory: function () {
        return new Fr().enclosedCache;
      },
      localstorage: function () {
        return new Ur();
      }
    },
    lo = function (e) {
      return uo[e];
    },
    fo = (function () {
      function e(e) {
        var t, n, o, i;
        if (
          ((this.options = e),
          'undefined' != typeof window &&
            (function () {
              if (!Wr())
                throw new Error(
                  'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
                );
              if (void 0 === Pr())
                throw new Error(
                  '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
                );
            })(),
          (this.cacheLocation = e.cacheLocation || 'memory'),
          !lo(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "' + this.cacheLocation + '"'
          );
        (this.cache = lo(this.cacheLocation)()),
          (this.scope = this.options.scope),
          (this.transactionManager = new Qr()),
          (this.domainUrl = 'https://' + this.options.domain),
          (this.tokenIssuer =
            ((o = this.options.issuer),
            (i = this.domainUrl),
            o
              ? o.startsWith('https://')
                ? o
                : 'https://' + o + '/'
              : i + '/')),
          (this.defaultScope = Xr(
            'openid',
            void 0 !==
              (null ===
                (n =
                  null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.advancedOptions) || void 0 === n
                ? void 0
                : n.defaultScope)
              ? this.options.advancedOptions.defaultScope
              : 'openid profile email'
          )),
          this.options.useRefreshTokens &&
            (this.scope = Xr(this.scope, 'offline_access')),
          'undefined' != typeof window &&
            window.Worker &&
            this.options.useRefreshTokens &&
            'memory' === this.cacheLocation &&
            !/Trident.*rv:11\.0/.test(navigator.userAgent) &&
            (this.worker = new co()),
          (this.customOptions = (function (e) {
            e.advancedOptions,
              e.audience,
              e.auth0Client,
              e.authorizeTimeoutInSeconds,
              e.cacheLocation,
              e.client_id,
              e.domain,
              e.issuer,
              e.leeway,
              e.max_age,
              e.redirect_uri,
              e.scope,
              e.useRefreshTokens;
            return r(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'redirect_uri',
              'scope',
              'useRefreshTokens'
            ]);
          })(e));
      }
      return (
        (e.prototype._url = function (e) {
          var t = encodeURIComponent(
            btoa(
              JSON.stringify(
                this.options.auth0Client || {
                  name: 'auth0-spa-js',
                  version: '1.11.0'
                }
              )
            )
          );
          return '' + this.domainUrl + e + '&auth0Client=' + t;
        }),
        (e.prototype._getParams = function (e, t, o, i, a) {
          var c = this.options,
            s =
              (c.domain,
              c.leeway,
              c.useRefreshTokens,
              c.auth0Client,
              c.cacheLocation,
              c.advancedOptions,
              r(c, [
                'domain',
                'leeway',
                'useRefreshTokens',
                'auth0Client',
                'cacheLocation',
                'advancedOptions'
              ]));
          return n(n(n({}, s), e), {
            scope: Xr(this.defaultScope, this.scope, e.scope),
            response_type: 'code',
            response_mode: 'query',
            state: t,
            nonce: o,
            redirect_uri: a || this.options.redirect_uri,
            code_challenge: i,
            code_challenge_method: 'S256'
          });
        }),
        (e.prototype._authorizeUrl = function (e) {
          return this._url('/authorize?' + Or(e));
        }),
        (e.prototype._verifyIdToken = function (e, t) {
          return to({
            iss: this.tokenIssuer,
            aud: this.options.client_id,
            id_token: e,
            nonce: t,
            leeway: this.options.leeway,
            max_age: this._parseNumber(this.options.max_age)
          });
        }),
        (e.prototype._parseNumber = function (e) {
          return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
        }),
        (e.prototype.buildAuthorizeUrl = function (e) {
          return (
            void 0 === e && (e = {}),
            o(this, void 0, void 0, function () {
              var t, n, o, a, c, s, u, l, f, d, p;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = e.redirect_uri),
                      (n = e.appState),
                      (o = r(e, ['redirect_uri', 'appState'])),
                      (a = xr(Tr())),
                      (c = xr(Tr())),
                      (s = Tr()),
                      [4, Lr(s)]
                    );
                  case 1:
                    return (
                      (u = i.sent()),
                      (l = Er(u)),
                      (f = e.fragment ? '#' + e.fragment : ''),
                      (d = this._getParams(o, a, c, l, t)),
                      (p = this._authorizeUrl(d)),
                      this.transactionManager.create(a, {
                        nonce: c,
                        code_verifier: s,
                        appState: n,
                        scope: d.scope,
                        audience: d.audience || 'default',
                        redirect_uri: d.redirect_uri
                      }),
                      [2, p + f]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.loginWithPopup = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            o(this, void 0, void 0, function () {
              var o, a, c, s, u, l, f, d, p, h, y, v;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (o = r(e, [])),
                      (a = xr(Tr())),
                      (c = xr(Tr())),
                      (s = Tr()),
                      [4, Lr(s)]
                    );
                  case 1:
                    return (
                      (u = i.sent()),
                      (l = Er(u)),
                      (f = this._getParams(
                        o,
                        a,
                        c,
                        l,
                        this.options.redirect_uri || window.location.origin
                      )),
                      (d = this._authorizeUrl(
                        n(n({}, f), { response_mode: 'web_message' })
                      )),
                      [
                        4,
                        Ir(
                          d,
                          n(n({}, t), {
                            timeoutInSeconds:
                              t.timeoutInSeconds ||
                              this.options.authorizeTimeoutInSeconds ||
                              60
                          })
                        )
                      ]
                    );
                  case 2:
                    if (((p = i.sent()), a !== p.state))
                      throw new Error('Invalid state');
                    return [
                      4,
                      Rr(
                        {
                          audience: f.audience,
                          scope: f.scope,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: s,
                          code: p.code,
                          grant_type: 'authorization_code',
                          redirect_uri: f.redirect_uri
                        },
                        this.worker
                      )
                    ];
                  case 3:
                    return (
                      (h = i.sent()),
                      (y = this._verifyIdToken(h.id_token, c)),
                      (v = n(n({}, h), {
                        decodedToken: y,
                        scope: f.scope,
                        audience: f.audience || 'default',
                        client_id: this.options.client_id
                      })),
                      this.cache.save(v),
                      Mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.getUser = function (e) {
          return (
            void 0 === e &&
              (e = {
                audience: this.options.audience || 'default',
                scope: this.scope || this.defaultScope
              }),
            o(this, void 0, void 0, function () {
              var t;
              return i(this, function (r) {
                return (
                  (e.scope = Xr(this.defaultScope, e.scope)),
                  [
                    2,
                    (t = this.cache.get(
                      n({ client_id: this.options.client_id }, e)
                    )) &&
                      t.decodedToken &&
                      t.decodedToken.user
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.getIdTokenClaims = function (e) {
          return (
            void 0 === e &&
              (e = {
                audience: this.options.audience || 'default',
                scope: this.scope || this.defaultScope
              }),
            o(this, void 0, void 0, function () {
              var t;
              return i(this, function (r) {
                return (
                  (e.scope = Xr(this.defaultScope, this.scope, e.scope)),
                  [
                    2,
                    (t = this.cache.get(
                      n({ client_id: this.options.client_id }, e)
                    )) &&
                      t.decodedToken &&
                      t.decodedToken.claims
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.loginWithRedirect = function (e) {
          return (
            void 0 === e && (e = {}),
            o(this, void 0, void 0, function () {
              var t;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.buildAuthorizeUrl(e)];
                  case 1:
                    return (t = n.sent()), window.location.assign(t), [2];
                }
              });
            })
          );
        }),
        (e.prototype.handleRedirectCallback = function (e) {
          return (
            void 0 === e && (e = window.location.href),
            o(this, void 0, void 0, function () {
              var t, r, o, a, c, s, u, l, f, d, p;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (0 === (t = e.split('?').slice(1)).length)
                      throw new Error(
                        'There are no query params available for parsing.'
                      );
                    if (
                      ((r = (function (e) {
                        e.indexOf('#') > -1 &&
                          (e = e.substr(0, e.indexOf('#')));
                        var t = e.split('&'),
                          r = {};
                        return (
                          t.forEach(function (e) {
                            var t = e.split('='),
                              n = t[0],
                              o = t[1];
                            r[n] = decodeURIComponent(o);
                          }),
                          n(n({}, r), { expires_in: parseInt(r.expires_in) })
                        );
                      })(t.join(''))),
                      (o = r.state),
                      (a = r.code),
                      (c = r.error),
                      (s = r.error_description),
                      !(u = this.transactionManager.get(o)))
                    )
                      throw new Error('Invalid state');
                    if (c)
                      throw (
                        (this.transactionManager.remove(o),
                        new wr(c, s, o, u.appState))
                      );
                    return (
                      this.transactionManager.remove(o),
                      (l = {
                        audience: u.audience,
                        scope: u.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: u.code_verifier,
                        grant_type: 'authorization_code',
                        code: a
                      }),
                      void 0 !== u.redirect_uri &&
                        (l.redirect_uri = u.redirect_uri),
                      [4, Rr(l, this.worker)]
                    );
                  case 1:
                    return (
                      (f = i.sent()),
                      (d = this._verifyIdToken(f.id_token, u.nonce)),
                      (p = n(n({}, f), {
                        decodedToken: d,
                        audience: u.audience,
                        scope: u.scope,
                        client_id: this.options.client_id
                      })),
                      this.cache.save(p),
                      Mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                      [2, { appState: u.appState }]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.checkSession = function (e) {
          return o(this, void 0, void 0, function () {
            var t;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  if (
                    'memory' === this.cacheLocation &&
                    !Jr('auth0.is.authenticated')
                  )
                    return [2];
                  n.label = 1;
                case 1:
                  return (
                    n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)]
                  );
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  if (((t = n.sent()), !br.includes(t.error))) throw t;
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.getTokenSilently = function (e) {
          return (
            void 0 === e && (e = {}),
            o(this, void 0, void 0, function () {
              var t, o, a, c, s, u;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (t = n(
                      n(
                        { audience: this.options.audience, ignoreCache: !1 },
                        e
                      ),
                      { scope: Xr(this.defaultScope, this.scope, e.scope) }
                    )),
                      (o = t.ignoreCache),
                      (a = r(t, ['ignoreCache'])),
                      (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 9, 10, 12]),
                      [4, so.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                    );
                  case 2:
                    return (
                      i.sent(),
                      o
                        ? [3, 4]
                        : (c = this.cache.get(
                            {
                              scope: a.scope,
                              audience: a.audience || 'default',
                              client_id: this.options.client_id
                            },
                            60
                          )) && c.access_token
                        ? [4, so.releaseLock('auth0.lock.getTokenSilently')]
                        : [3, 4]
                    );
                  case 3:
                    return i.sent(), [2, c.access_token];
                  case 4:
                    return this.options.useRefreshTokens
                      ? [4, this._getTokenUsingRefreshToken(a)]
                      : [3, 6];
                  case 5:
                    return (u = i.sent()), [3, 8];
                  case 6:
                    return [4, this._getTokenFromIFrame(a)];
                  case 7:
                    (u = i.sent()), (i.label = 8);
                  case 8:
                    return (
                      (s = u),
                      this.cache.save(
                        n({ client_id: this.options.client_id }, s)
                      ),
                      Mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                      [2, s.access_token]
                    );
                  case 9:
                    throw i.sent();
                  case 10:
                    return [4, so.releaseLock('auth0.lock.getTokenSilently')];
                  case 11:
                    return i.sent(), [7];
                  case 12:
                    return [2];
                }
              });
            })
          );
        }),
        (e.prototype.getTokenWithPopup = function (e, t) {
          return (
            void 0 === e &&
              (e = {
                audience: this.options.audience,
                scope: this.scope || this.defaultScope
              }),
            void 0 === t && (t = mr),
            o(this, void 0, void 0, function () {
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (e.scope = Xr(this.defaultScope, this.scope, e.scope)),
                      [4, this.loginWithPopup(e, t)]
                    );
                  case 1:
                    return (
                      n.sent(),
                      [
                        2,
                        this.cache.get({
                          scope: e.scope,
                          audience: e.audience || 'default',
                          client_id: this.options.client_id
                        }).access_token
                      ]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.isAuthenticated = function () {
          return o(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.getUser()];
                case 1:
                  return [2, !!e.sent()];
              }
            });
          });
        }),
        (e.prototype.logout = function (e) {
          void 0 === e && (e = {}),
            null !== e.client_id
              ? (e.client_id = e.client_id || this.options.client_id)
              : delete e.client_id;
          var t = e.federated,
            n = e.localOnly,
            o = r(e, ['federated', 'localOnly']);
          if (n && t)
            throw new Error(
              'It is invalid to set both the `federated` and `localOnly` options to `true`'
            );
          if ((this.cache.clear(), Hr('auth0.is.authenticated'), !n)) {
            var i = t ? '&federated' : '',
              a = this._url('/v2/logout?' + Or(o));
            window.location.assign('' + a + i);
          }
        }),
        (e.prototype._getTokenFromIFrame = function (e) {
          return o(this, void 0, void 0, function () {
            var t, o, a, c, s, u, l, f, d, p, h, y, v, m;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (t = xr(Tr())), (o = xr(Tr())), (a = Tr()), [4, Lr(a)];
                case 1:
                  return (
                    (c = i.sent()),
                    (s = Er(c)),
                    (u = this._getParams(
                      e,
                      t,
                      o,
                      s,
                      e.redirect_uri ||
                        this.options.redirect_uri ||
                        window.location.origin
                    )),
                    (l = this._authorizeUrl(
                      n(n({}, u), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    (f =
                      e.timeoutInSeconds ||
                      this.options.authorizeTimeoutInSeconds),
                    [4, kr(l, this.domainUrl, f)]
                  );
                case 2:
                  if (((d = i.sent()), t !== d.state))
                    throw new Error('Invalid state');
                  return (
                    (p = e.scope),
                    (h = e.audience),
                    e.redirect_uri,
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (y = r(e, [
                      'scope',
                      'audience',
                      'redirect_uri',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    [
                      4,
                      Rr(
                        n(n(n({}, this.customOptions), y), {
                          scope: p,
                          audience: h,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: a,
                          code: d.code,
                          grant_type: 'authorization_code',
                          redirect_uri: u.redirect_uri
                        }),
                        this.worker
                      )
                    ]
                  );
                case 3:
                  return (
                    (v = i.sent()),
                    (m = this._verifyIdToken(v.id_token, o)),
                    [
                      2,
                      n(n({}, v), {
                        decodedToken: m,
                        scope: u.scope,
                        audience: u.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype._getTokenUsingRefreshToken = function (e) {
          return o(this, void 0, void 0, function () {
            var t, o, a, c, s, u, l, f;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e.scope = Xr(
                      this.defaultScope,
                      this.options.scope,
                      e.scope
                    )),
                    ((t = this.cache.get({
                      scope: e.scope,
                      audience: e.audience || 'default',
                      client_id: this.options.client_id
                    })) &&
                      t.refresh_token) ||
                    this.worker
                      ? [3, 2]
                      : [4, this._getTokenFromIFrame(e)]
                  );
                case 1:
                  return [2, i.sent()];
                case 2:
                  (o =
                    e.redirect_uri ||
                    this.options.redirect_uri ||
                    window.location.origin),
                    (c = e.scope),
                    (s = e.audience),
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (u = r(e, [
                      'scope',
                      'audience',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    (i.label = 3);
                case 3:
                  return (
                    i.trys.push([3, 5, , 8]),
                    [
                      4,
                      Rr(
                        n(n(n({}, this.customOptions), u), {
                          audience: s,
                          scope: c,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          grant_type: 'refresh_token',
                          refresh_token: t && t.refresh_token,
                          redirect_uri: o
                        }),
                        this.worker
                      )
                    ]
                  );
                case 4:
                  return (a = i.sent()), [3, 8];
                case 5:
                  return 'The web worker is missing the refresh token' !==
                    (l = i.sent()).message
                    ? [3, 7]
                    : [4, this._getTokenFromIFrame(e)];
                case 6:
                  return [2, i.sent()];
                case 7:
                  throw l;
                case 8:
                  return (
                    (f = this._verifyIdToken(a.id_token)),
                    [
                      2,
                      n(n({}, a), {
                        decodedToken: f,
                        scope: e.scope,
                        audience: e.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        e
      );
    })();
  function po(e) {
    return o(this, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, (t = new fo(e)).checkSession()];
          case 1:
            return n.sent(), [2, t];
        }
      });
    });
  }
  var ho = po;
  return (ho.Auth0Client = fo), (ho.createAuth0Client = po), ho;
}),
  'Auth0Client' in this &&
    this.console &&
    this.console.warn &&
    this.console.warn('Auth0Client already declared on the global namespace'),
  this &&
    this.createAuth0Client &&
    (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.production.js.map
