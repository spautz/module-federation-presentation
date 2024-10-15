import { a as require$$0 } from "./remote__loadShare__react__loadShare__-CcMP8jUA.js";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
const header = "_header_1wrxw_1";
const classes = {
  header
};
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: classes.header, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "This is the Header microfrontend" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: "Here's some text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: "More text" })
  ] });
}
const Header$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Header
}, Symbol.toStringTag, { value: "Module" }));
export {
  Header as H,
  Header$1 as a,
  jsxRuntimeExports as j
};
//# sourceMappingURL=Header-B8mXgM7P.js.map
