import { useState } from 'react';

import { HeaderMicrofrontend } from '@spautz/module-federation-presentation--header-sdk';
import {
  prefetchTableModule,
  renderTable /* TableMicrofrontend */,
} from '@spautz/module-federation-presentation--table-sdk';

import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.header}>
        <HeaderMicrofrontend baseUrl={window.location.origin} />
      </div>

      <main className={classes.body}>
        <h2>This is the host app</h2>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </p>
        <p>
          <button
            onClick={(e) => {
              prefetchTableModule(window.location.origin);
              e.preventDefault();
            }}
          >
            Preload Table
          </button>
          <button
            onClick={(e) => {
              const placeholderEl = document.getElementById('table-placeholder')!;
              renderTable(window.location.origin, placeholderEl);
              e.preventDefault();
            }}
          >
            Render Table
          </button>
        </p>
      </main>

      <div className={classes.body}>
        <div id="table-placeholder">
          <h2>Placeholder</h2>
          <p>The host app rendered this. It will be replaced once Microfrontend-two loads.</p>
        </div>
      </div>
    </>
  );
}

export default App;
