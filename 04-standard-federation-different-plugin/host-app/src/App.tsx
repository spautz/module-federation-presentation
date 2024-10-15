import { Suspense, lazy, useState } from 'react';

// @ts-ignore
// import HeaderMFE from 'header-mfe/Header';
// @ts-ignore
import { HeaderMFE } from 'header-mfe';
// @ts-ignore
const HeaderMFE = lazy(() => import('remote'));
// @ts-ignore
const TableMFE = lazy(() => import('table-mfe/Table'));

import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.header}>
        <HeaderMFE />
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
          <TableMFE />
        </Suspense>
      </div>
    </>
  );
}

export default App;
