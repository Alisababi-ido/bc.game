import { S as s } from "./isObject-909534d5.js";
import { i as p } from "./_Uint8Array-7783c8b7.js";
import { i as g } from "./toNumber-e58af95e.js";
function l(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, i = Array(o); ++n < o; )
    i[n] = t(r[n], n, r);
  return i;
}
var u = 1 / 0,
  e = s ? s.prototype : void 0,
  f = e ? e.toString : void 0;
function m(r) {
  if (typeof r == "string") return r;
  if (p(r)) return l(r, m) + "";
  if (g(r)) return f ? f.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -u ? "-0" : t;
}
function d(r) {
  return r == null ? "" : m(r);
}
export { l as a, d as t };
