import { importShared } from './__federation_fn_import-D86225AB.js';
import Header, { j as jsxRuntimeExports } from './__federation_expose_Header-C2B4mhVI.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {StrictMode} = await importShared('react');
function render(rootElement) {
  console.log("Rendering Header microfrontend: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}) })
  );
}
console.log("This is main.js in header-mfe");

export { render as default, render };
//# sourceMappingURL=__federation_expose_Render-D20YAEW_.js.map
