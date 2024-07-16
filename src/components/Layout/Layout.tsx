import { PropsWithChildren } from 'react';
import { AppBar } from './../AppBar';

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <AppBar />
      {props.children}
    </>
  );
};
