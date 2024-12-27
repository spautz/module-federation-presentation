import "./virtual_mf-exposes-BCSnz46C.js";
import "./hostInit-BDbC3ZIC.js";
import { i as index_cjs, t as table_microfrontend__mf_v__runtimeInit__mf_v__ } from "./virtual_mf-REMOTE_ENTRY_ID-87HXnLMv.js";
import { r as require$$0$1, t as table_microfrontend__loadShare__react__loadShare__ } from "./table_microfrontend__loadShare__react__loadShare__-D5uhruaH.js";
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
const { initPromise } = table_microfrontend__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((_) => loadShare("react-dom", {
  customShareInfo: { shareConfig: {
    singleton: false,
    strictVersion: false,
    requiredVersion: "^18.3.1"
  } }
}));
const exportModule = await res.then((factory) => factory());
var table_microfrontend__loadShare__react_mf_2_dom__loadShare__$1 = exportModule;
const table_microfrontend__loadShare__react_mf_2_dom__loadShare__$2 = /* @__PURE__ */ getDefaultExportFromCjs(table_microfrontend__loadShare__react_mf_2_dom__loadShare__$1);
const table_microfrontend__loadShare__react_mf_2_dom__loadShare__ = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: table_microfrontend__loadShare__react_mf_2_dom__loadShare__$2
}, [table_microfrontend__loadShare__react_mf_2_dom__loadShare__$1]);
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(table_microfrontend__loadShare__react_mf_2_dom__loadShare__);
var createRoot;
var m = require$$0;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const dataTable = "_dataTable_nelb0_1";
const classes = {
  dataTable
};
function Table() {
  console.log("Table()", table_microfrontend__loadShare__react__loadShare__.useState);
  const [count, setCount] = table_microfrontend__loadShare__react__loadShare__.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "This is the Table microfrontend" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: classes.dataTable, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Alice" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bob" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Carol" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
      "count is ",
      count
    ] }) })
  ] });
}
function render(rootElement) {
  console.log("Rendering Table microfrontend: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(table_microfrontend__loadShare__react__loadShare__.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, {}) })
  );
}
console.log("This is main.js in table-mfe");
export {
  render
};
//# sourceMappingURL=main-uFREZsJS.js.map
