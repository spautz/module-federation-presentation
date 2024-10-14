import { r as reactExports } from './__federation_shared_react-DYlhdcjt.js';

var jsxRuntime = {exports: {}};

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
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const header = "_header_1wrxw_1";
const classes = {
	header: header
};

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: classes.header, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "This is a header from Microfrontend-one" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: "Here's some text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: "More text" })
  ] });
}

export { App as default, jsxRuntimeExports as j };
//# sourceMappingURL=__federation_expose_App-DKWVZUXq.js.map
