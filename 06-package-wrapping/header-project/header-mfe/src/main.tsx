import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './Header.tsx';

function renderV1(rootElement: HTMLElement) {
  console.log('Rendering Header microfrontend: ', rootElement);

  createRoot(rootElement).render(
    <StrictMode>
      <Header />
    </StrictMode>,
  );
}

console.log('This is main.js in header-mfe');

export { renderV1 };
