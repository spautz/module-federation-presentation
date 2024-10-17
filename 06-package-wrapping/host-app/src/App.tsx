import { Suspense, useState } from 'react';

import { HeaderMicrofrontend } from '@spautz/module-federation-presentation--header-sdk';
// @ts-ignore
// const Table = lazy(() => import('table-mfe/Table'));

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
      </main>

      <div className={classes.body}>
        <Suspense
          fallback={
            <>
              <h2>Placeholder</h2>
              <p>The host app rendered this. It will be replaced once Microfrontend-two loads.</p>
            </>
          }
        >
          {/*<Table />*/}
        </Suspense>
      </div>
    </>
  );
}

export default App;
