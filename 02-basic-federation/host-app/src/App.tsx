import { useEffect, useState } from 'react';

import { loadMicrofrontendOne, loadMicrofrontendTwo } from './loadMicrofrontends.js';

import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  // Load and immediately render microfrontend-one
  useEffect(() => {
    const placeholderEl = document.getElementById('placeholder-one')!;
    loadMicrofrontendOne(placeholderEl);
  }, []);

  return (
    <>
      <div className={classes.header}>
        <div id="placeholder-one" />
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
              const placeholderEl = document.getElementById('placeholder-two')!;
              loadMicrofrontendTwo(placeholderEl);
              e.preventDefault();
            }}
          >
            Load Microfrontend-two
          </button>
        </p>
      </main>

      <div className={classes.body}>
        <div id="placeholder-two">
          <h2>Placeholder</h2>
          <p>The host app rendered this. It will be replaced once Microfrontend-two loads.</p>
        </div>
      </div>
    </>
  );
}

export default App;
