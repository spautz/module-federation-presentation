import "./virtual_mf-exposes-B4J2JYsc.js";
import "./hostInit-BmOER4hS.js";
import { i as index_cjs, r as remote__mf_v__runtimeInit__mf_v__ } from "./remote__mf_v__runtimeInit__mf_v__-CpIUrjKp.js";
import { j as jsxRuntimeExports, H as Header } from "./Header-B8mXgM7P.js";
import { r as remote__loadShare__react__loadShare__ } from "./remote__loadShare__react__loadShare__-CcMP8jUA.js";
import { g as getDefaultExportFromCjs, a as getAugmentedNamespace } from "./_commonjsHelpers-BvryMGaU.js";
import "../remoteEntry-header.js";
function _mergeNamespaces(n, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
const { loadShare } = index_cjs;
const { initPromise } = remote__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((_) => loadShare("react-dom", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^18.3.1"
  } }
}));
const exportModule = await res.then((factory) => factory());
var remote__loadShare__react_mf_2_dom__loadShare__$1 = exportModule;
const remote__loadShare__react_mf_2_dom__loadShare__$2 = /* @__PURE__ */ getDefaultExportFromCjs(remote__loadShare__react_mf_2_dom__loadShare__$1);
const remote__loadShare__react_mf_2_dom__loadShare__ = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: remote__loadShare__react_mf_2_dom__loadShare__$2
}, [remote__loadShare__react_mf_2_dom__loadShare__$1]);
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(remote__loadShare__react_mf_2_dom__loadShare__);
var createRoot;
var m = require$$0;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
function render(rootElement) {
  console.log("Rendering Header microfrontend: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(remote__loadShare__react__loadShare__.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}) })
  );
}
console.log("This is main.js in header-mfe");
export {
  render as default,
  render
};
//# sourceMappingURL=main-Bm_vXG3B.js.map
