import { i as index_cjs, r as remote__mf_v__runtimeInit__mf_v__ } from "./assets/remote__mf_v__runtimeInit__mf_v__-CpIUrjKp.js";
import { _ as __vitePreload, e as exposesMap } from "./assets/virtual_mf-exposes-B4J2JYsc.js";
const importMap = {
  "react": async () => {
    let pkg = await __vitePreload(() => import("./assets/index-DGTCVKxC.js").then((n) => n.i), true ? [] : void 0);
    return pkg;
  },
  "react-dom": async () => {
    let pkg = await __vitePreload(() => import("./assets/index-edaE3sar.js").then((n) => n.i), true ? [] : void 0);
    return pkg;
  }
};
const usedShared = {
  "react": {
    name: "react",
    version: "18.3.1",
    scope: ["default"],
    loaded: false,
    from: "remote",
    async get() {
      usedShared["react"].loaded = true;
      const { "react": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^18.3.1"
    }
  },
  "react-dom": {
    name: "react-dom",
    version: "18.3.1",
    scope: ["default"],
    loaded: false,
    from: "remote",
    async get() {
      usedShared["react-dom"].loaded = true;
      const { "react-dom": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^18.3.1"
    }
  }
};
const usedRemotes = [];
async function init(shared = {}) {
  const initRes = index_cjs.init({
    name: "remote",
    remotes: usedRemotes,
    shared: usedShared,
    plugins: [],
    shareStrategy: "version-first"
  });
  initRes.initShareScopeMap("default", shared);
  try {
    await Promise.all(await initRes.initializeSharing("default", { strategy: "version-first" }));
  } catch (e) {
    console.error(e);
  }
  remote__mf_v__runtimeInit__mf_v__.initResolve(initRes);
  return initRes;
}
function getExposes(moduleName) {
  if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`);
  return exposesMap[moduleName]().then((res) => () => res);
}
export {
  getExposes as get,
  init
};
//# sourceMappingURL=remoteEntry-header.js.map
