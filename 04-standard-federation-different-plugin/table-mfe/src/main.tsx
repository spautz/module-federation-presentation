import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Table } from './Table.tsx';

function render(rootElement: HTMLElement) {
  console.log('Rendering Table microfrontend: ', rootElement);

  createRoot(rootElement).render(
    <StrictMode>
      <Table />
    </StrictMode>,
  );
}

console.log('This is main.js in table-mfe');

export { render };
