import { FC, ReactElement } from 'react';
import { AppBar } from '@/components/AppBar';

interface LayoutProps extends React.PropsWithChildren {
  handleChangeLanguage: () => void;
  handleChooseLanguage: (language: string) => void;
  children: ReactElement;
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <AppBar handleChangeLanguage={props.handleChangeLanguage} handleChooseLanguage={props.handleChooseLanguage} />
      {props.children}
    </>
  );
};
