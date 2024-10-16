import React, { ReactNode } from 'react';

export interface TodoComponentProps {
  children?: ReactNode;
}

const TodoComponent: React.FC<TodoComponentProps> = (props) => {
  const { children = 'Hello World' } = props;
  return <React.Fragment>TodoComponent: {children}</React.Fragment>;
};

export { TodoComponent };
