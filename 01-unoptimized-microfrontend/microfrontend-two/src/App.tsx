import { useState } from 'react';

import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>This is a header from Microfrontend-two</h2>
      <table className={classes.dataTable}>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Carol</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </p>
    </>
  );
}

export default App;
