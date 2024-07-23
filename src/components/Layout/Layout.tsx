import { FC, ReactElement } from 'react';
import { AppBar } from '@/components/AppBar';

interface LayoutProps extends React.PropsWithChildren {
  children: ReactElement;
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <AppBar />
      {props.children}
    </>
  );
};
