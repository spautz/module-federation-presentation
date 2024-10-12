async function loadMicrofrontend(basePath: string) {
  // @ts-ignore
  const pendingModule = import(`${basePath}/index.js`);

  // Intentional issue: blindly look for a stylesheet, instead of going through the manifest
  const stylesheetEl = document.createElement('link');
  stylesheetEl.rel = 'stylesheet';
  stylesheetEl.type = 'text/css';
  stylesheetEl.href = `${basePath}/style.css`;
  document.getElementsByTagName('head')[0].appendChild(stylesheetEl);

  const microfrontendModule = await pendingModule;
  console.log(`Loaded module "${basePath}": `, microfrontendModule);

  return microfrontendModule;
}

async function loadMicrofrontendOne(rootEl: HTMLElement, options?: any) {
  return loadMicrofrontend('/microfrontend-one').then((microfrontendOne) => {
    microfrontendOne.render(rootEl, options);
  });
}

// Intentional issue: Fetch and render together, no preloading
async function loadMicrofrontendTwo(rootEl: HTMLElement, options?: any) {
  return loadMicrofrontend('/microfrontend-two').then((microfrontendOne) => {
    microfrontendOne.render(rootEl, options);
  });
}

export { loadMicrofrontendOne, loadMicrofrontendTwo };
