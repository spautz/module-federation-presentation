import { memo, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

import { prefetchTableModule } from './internalTableModule.js';
import { renderTable } from './renderTable.js';

// ============================================================================

interface Internal_TablePlaceholderProps {
  children?: ReactNode;
  height?: number | string;
}

const Internal_TablePlaceholder = (props: Internal_TablePlaceholderProps) => {
  const { children = '(Loading)', height = 184 } = props;
  return (
    <table aria-busy style={{ height }}>
      {children}
    </table>
  );
};

// ============================================================================

interface Internal_TableWrapperProps {
  baseUrl: string;
  children?: ReactNode;
}

const Internal_TableWrapper = memo(
  (props: Internal_TableWrapperProps) => {
    const { baseUrl, children } = props;

    prefetchTableModule(baseUrl);

    const placeholderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      renderTable(baseUrl, placeholderRef.current!);
    }, []);

    return <div ref={placeholderRef}>{children}</div>;
  },
  () => {
    // Never ever rerender
    return false;
  },
);

// ============================================================================

interface TableWrapperProps {
  baseUrl: string;
}

const TableMicrofrontend = (props: TableWrapperProps) => {
  const { baseUrl } = props;
  return (
    <Internal_TableWrapper baseUrl={baseUrl}>
      <Internal_TablePlaceholder />
    </Internal_TableWrapper>
  );
};

// ============================================================================

export { Internal_TablePlaceholder, Internal_TableWrapper, TableMicrofrontend };
