import { i as _, b as d, r as l } from "./isObject-909534d5.js";
var v = "[object AsyncFunction]",
  g = "[object Function]",
  y = "[object GeneratorFunction]",
  b = "[object Proxy]";
function C(t) {
  if (!_(t)) return !1;
  var e = d(t);
  return e == g || e == y || e == v || e == b;
}
var $ = l["__core-js_shared__"];
const u = $;
var p = (function () {
  var t = /[^.]+$/.exec((u && u.keys && u.keys.IE_PROTO) || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function O(t) {
  return !!p && p in t;
}
var P = Function.prototype,
  w = P.toString;
function x(t) {
  if (t != null) {
    try {
      return w.call(t);
    } catch (e) {}
    try {
      return t + "";
    } catch (e) {}
  }
  return "";
}
var j = /[\\^$.*+?()[\]{}|]/g,
  m = /^\[object .+?Constructor\]$/,
  z = Function.prototype,
  S = Object.prototype,
  D = z.toString,
  H = S.hasOwnProperty,
  F = RegExp(
    "^" +
      D.call(H)
        .replace(j, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function I(t) {
  if (!_(t) || O(t)) return !1;
  var e = C(t) ? F : m;
  return e.test(x(t));
}
function T(t, e) {
  return t == null ? void 0 : t[e];
}
function f(t, e) {
  var a = T(t, e);
  return I(a) ? a : void 0;
}
function E(t, e) {
  return t === e || (t !== t && e !== e);
}
var M = f(Object, "create");
const s = M;
function N() {
  (this.__data__ = s ? s(null) : {}), (this.size = 0);
}
function G(t) {
  var e = this.has(t) && delete this.__data__[t];
  return (this.size -= e ? 1 : 0), e;
}
var A = "__lodash_hash_undefined__",
  R = Object.prototype,
  J = R.hasOwnProperty;
function K(t) {
  var e = this.__data__;
  if (s) {
    var a = e[t];
    return a === A ? void 0 : a;
  }
  return J.call(e, t) ? e[t] : void 0;
}
var L = Object.prototype,
  U = L.hasOwnProperty;
function q(t) {
  var e = this.__data__;
  return s ? e[t] !== void 0 : U.call(e, t);
}
var V = "__lodash_hash_undefined__";
function B(t, e) {
  var a = this.__data__;
  return (
    (this.size += this.has(t) ? 0 : 1), (a[t] = s && e === void 0 ? V : e), this
  );
}
function n(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
n.prototype.clear = N;
n.prototype.delete = G;
n.prototype.get = K;
n.prototype.has = q;
n.prototype.set = B;
function Q() {
  (this.__data__ = []), (this.size = 0);
}
function c(t, e) {
  for (var a = t.length; a--; ) if (E(t[a][0], e)) return a;
  return -1;
}
var W = Array.prototype,
  X = W.splice;
function Y(t) {
  var e = this.__data__,
    a = c(e, t);
  if (a < 0) return !1;
  var r = e.length - 1;
  return a == r ? e.pop() : X.call(e, a, 1), --this.size, !0;
}
function Z(t) {
  var e = this.__data__,
    a = c(e, t);
  return a < 0 ? void 0 : e[a][1];
}
function k(t) {
  return c(this.__data__, t) > -1;
}
function tt(t, e) {
  var a = this.__data__,
    r = c(a, t);
  return r < 0 ? (++this.size, a.push([t, e])) : (a[r][1] = e), this;
}
function o(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
o.prototype.clear = Q;
o.prototype.delete = Y;
o.prototype.get = Z;
o.prototype.has = k;
o.prototype.set = tt;
var et = f(l, "Map");
const at = et;
function rt() {
  (this.size = 0),
    (this.__data__ = { hash: new n(), map: new (at || o)(), string: new n() });
}
function nt(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean"
    ? t !== "__proto__"
    : t === null;
}
function h(t, e) {
  var a = t.__data__;
  return nt(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map;
}
function ot(t) {
  var e = h(this, t).delete(t);
  return (this.size -= e ? 1 : 0), e;
}
function st(t) {
  return h(this, t).get(t);
}
function it(t) {
  return h(this, t).has(t);
}
function ct(t, e) {
  var a = h(this, t),
    r = a.size;
  return a.set(t, e), (this.size += a.size == r ? 0 : 1), this;
}
function i(t) {
  var e = -1,
    a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
i.prototype.clear = rt;
i.prototype.delete = ot;
i.prototype.get = st;
i.prototype.has = it;
i.prototype.set = ct;
export { o as L, i as M, at as a, E as e, f as g, C as i, x as t };
