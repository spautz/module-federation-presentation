import { StrictMode, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import type { ReactNode } from 'react';

import { Header } from './Header.tsx';

function render(rootElement: HTMLElement) {
  console.log('Rendering Header microfrontend: ', rootElement);

  createRoot(rootElement).render(
    <StrictMode>
      <Header />
    </StrictMode>,
  );
}

interface HeaderWrapperProps {
  children?: ReactNode;
}

function HeaderWrapper(props: HeaderWrapperProps) {
  const { children } = props;

  const placeholderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    render(placeholderRef.current!);
  }, []);
  return <div ref={placeholderRef}>{children}</div>;
}

console.log('This is main.js in header-mfe');

export { render, HeaderWrapper };
