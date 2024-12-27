import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1>This is the Header microfrontend</h1>
      <nav>Here's some text</nav>
      <nav>More text</nav>
    </header>
  );
}

export { Header };
