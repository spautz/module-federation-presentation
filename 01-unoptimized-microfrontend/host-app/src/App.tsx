import classes from './App.module.css';

function App() {
  return (
    <>
      <div className={classes.header}>
        <div id="microfrontend-one-placeholder">
          <header>
            <h1>This is a header from Microfrontend-One</h1>
            <nav>Here's some text</nav>
            <nav>More text</nav>
          </header>
        </div>
      </div>

      <main className={classes.body}>
        <h2>This is the host app</h2>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <p>Here's some generic content.</p>
        <form>
          <button
            onClick={(e) => {
              console.log('onClick()', e);
              e.preventDefault();
            }}
          >
            Load Microfrontend-Two
          </button>
        </form>
      </main>

      <div className={classes.body}>
        <h2>Placeholder</h2>
        <p>The host app rendered this. It will be replaced once Microfrontend-Two loads.</p>
      </div>
    </>
  );
}

export default App;
