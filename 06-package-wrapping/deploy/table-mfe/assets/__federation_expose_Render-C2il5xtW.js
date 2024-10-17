import { importShared } from './__federation_fn_import-D86225AB.js';
import Table, { j as jsxRuntimeExports } from './__federation_expose_Table-BKa7_reh.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {StrictMode} = await importShared('react');
function renderV1(rootElement) {
  console.log("Rendering table-mfe: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, {}) })
  );
}
console.log("This is main.js in table-mfe");

export { renderV1 as default, renderV1 };
//# sourceMappingURL=__federation_expose_Render-C2il5xtW.js.map
