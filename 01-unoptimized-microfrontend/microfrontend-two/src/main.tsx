import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

function render(rootElement: HTMLElement) {
  console.log('Rendering Microfrontend-one: ', rootElement);

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

console.log('This is main.js in Microfrontend-two');

export { render };
