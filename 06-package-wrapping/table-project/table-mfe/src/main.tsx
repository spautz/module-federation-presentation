import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Table from './Table.tsx';

function renderV1(rootElement: HTMLElement) {
  console.log('Rendering table-mfe: ', rootElement);

  createRoot(rootElement).render(
    <StrictMode>
      <Table />
    </StrictMode>,
  );
}

console.log('This is main.js in table-mfe');

export { renderV1 };
export default renderV1;
