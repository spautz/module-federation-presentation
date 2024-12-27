import { ReactNode, useEffect, useRef } from 'react';

// @ts-ignore
import { render } from 'table-mfe';

interface TableWrapperProps {
  children?: ReactNode;
}

function TableWrapper(props: TableWrapperProps) {
  const { children } = props;

  const placeholderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    render(placeholderRef.current!);
  }, []);
  return <div ref={placeholderRef}>{children}</div>;
}

export { TableWrapper };
