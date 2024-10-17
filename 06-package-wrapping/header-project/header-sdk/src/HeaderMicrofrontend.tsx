import { memo, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

import { prefetchHeaderModule } from './internalHeaderModule.js';
import { renderHeader } from './renderHeader.js';

// ============================================================================

interface Internal_HeaderPlaceholderProps {
  children?: ReactNode;
  height?: number | string;
}

const Internal_HeaderPlaceholder = (props: Internal_HeaderPlaceholderProps) => {
  const { children = '(Loading)', height = '5em' } = props;
  return (
    <header aria-busy style={{ height }}>
      {children}
    </header>
  );
};

// ============================================================================

interface Internal_HeaderWrapperProps {
  baseUrl: string;
  children?: ReactNode;
}

const Internal_HeaderWrapper = memo(
  (props: Internal_HeaderWrapperProps) => {
    const { baseUrl, children } = props;

    prefetchHeaderModule(baseUrl);

    const placeholderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      renderHeader(baseUrl, placeholderRef.current!);
    }, []);

    return <div ref={placeholderRef}>{children}</div>;
  },
  () => {
    // Never ever rerender
    return false;
  },
);

// ============================================================================

interface HeaderWrapperProps {
  baseUrl: string;
}

const HeaderMicrofrontend = (props: HeaderWrapperProps) => {
  const { baseUrl } = props;
  return (
    <Internal_HeaderWrapper baseUrl={baseUrl}>
      <Internal_HeaderPlaceholder />
    </Internal_HeaderWrapper>
  );
};

// ============================================================================

export { Internal_HeaderPlaceholder, Internal_HeaderWrapper, HeaderMicrofrontend };
