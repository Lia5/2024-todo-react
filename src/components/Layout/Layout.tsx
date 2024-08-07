import { FC } from 'react';
import { AppBar } from '@/components/AppBar';

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <AppBar />
      {props.children}
    </>
  );
};
