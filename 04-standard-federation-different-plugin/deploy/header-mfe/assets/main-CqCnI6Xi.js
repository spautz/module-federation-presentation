import "./virtual_mf-exposes-B3VJjEIR.js";
import "./hostInit-BuKnt2YV.js";
import { i as index_cjs, h as header_microfrontend__mf_v__runtimeInit__mf_v__ } from "./virtual_mf-REMOTE_ENTRY_ID-D1JOLiNh.js";
import { r as require$$0$1, h as header_microfrontend__loadShare__react__loadShare__ } from "./header_microfrontend__loadShare__react__loadShare__-Bse6SsZE.js";
import { g as getDefaultExportFromCjs, a as getAugmentedNamespace } from "./_commonjsHelpers-BvryMGaU.js";
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
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
var f = require$$0$1, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
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
const { loadShare } = index_cjs;
const { initPromise } = header_microfrontend__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((_) => loadShare("react-dom", {
  customShareInfo: { shareConfig: {
    singleton: false,
    strictVersion: false,
    requiredVersion: "^18.3.1"
  } }
}));
const exportModule = await res.then((factory) => factory());
var header_microfrontend__loadShare__react_mf_2_dom__loadShare__$1 = exportModule;
const header_microfrontend__loadShare__react_mf_2_dom__loadShare__$2 = /* @__PURE__ */ getDefaultExportFromCjs(header_microfrontend__loadShare__react_mf_2_dom__loadShare__$1);
const header_microfrontend__loadShare__react_mf_2_dom__loadShare__ = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: header_microfrontend__loadShare__react_mf_2_dom__loadShare__$2
}, [header_microfrontend__loadShare__react_mf_2_dom__loadShare__$1]);
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(header_microfrontend__loadShare__react_mf_2_dom__loadShare__);
var createRoot;
var m = require$$0;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
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
function render(rootElement) {
  console.log("Rendering Header microfrontend: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(header_microfrontend__loadShare__react__loadShare__.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}) })
  );
}
function HeaderWrapper(props) {
  const { children } = props;
  const placeholderRef = header_microfrontend__loadShare__react__loadShare__.useRef(null);
  header_microfrontend__loadShare__react__loadShare__.useEffect(() => {
    render(placeholderRef.current);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: placeholderRef, children });
}
console.log("This is main.js in header-mfe");
export {
  HeaderWrapper,
  render
};
//# sourceMappingURL=main-CqCnI6Xi.js.map
