import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CUmg6egw.js";
import { a as index_cjs, h as host_mf_2_app__mf_v__runtimeInit__mf_v__ } from "./virtual_mf-REMOTE_ENTRY_ID-Bnsp9Y7B.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
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
const { loadRemote } = index_cjs;
const { initPromise } = host_mf_2_app__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((_) => loadRemote("header-mfe/Header"));
const exportModule = await initPromise.then((_) => res);
var host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__ = exportModule;
const host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__$1 = /* @__PURE__ */ getDefaultExportFromCjs(host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__);
const host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__$1
}, [host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__]);
export {
  host_mf_2_app__loadRemote__header_mf_2_mfe_mf_1_Header__loadRemote__$2 as h
};
