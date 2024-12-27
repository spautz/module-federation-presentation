import { ReactNode, useEffect, useRef } from 'react';

// @ts-ignore
import { render } from 'header-mfe';

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

export { HeaderWrapper };
