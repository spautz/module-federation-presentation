import { importShared } from './__federation_fn_import-BtR-3Iy5.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-DKWVZUXq.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const {StrictMode} = await importShared('react');
function render(rootElement) {
  console.log("Rendering Microfrontend-one: ", rootElement);
  createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
}
console.log("This is main.js in Microfrontend-one");

export { render as default, render };
//# sourceMappingURL=__federation_expose_Render-CXSDyqLB.js.map
