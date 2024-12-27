import { Suspense, /* lazy, */ useState } from 'react';

import { HeaderWrapper } from './HeaderMicrofrontend.js';
// const { HeaderWrapper } = lazy(() => import('./HeaderMicrofrontend.js'));
import { TableWrapper } from './TableMicrofrontend.js';
// const { TableWrapper } = lazy(() => import('./TableMicrofrontend.js'));

import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  console.log('host app is rendering App: ', {
    HeaderWrapper,
    TableWrapper,
  });

  return (
    <>
      <div className={classes.header}>
        <HeaderWrapper />
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
          <TableWrapper />
        </Suspense>
      </div>
    </>
  );
}

export default App;
