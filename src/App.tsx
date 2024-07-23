import { useTranslation } from 'react-i18next';
import { Layout } from './components/Layout';
import { AddingBox } from './components/AddingBox';
import { NeedDoList } from './components/Lists/NeedDoList';
import { CompleteList } from './components/Lists/CompleteList';
import './App.scss';

export function App() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Layout>
      <div className="main">
        <div className="container">
          <h1>{t('title', { appName: 'TODO' })}</h1>
          <h3>Current Language: {language}</h3>
          <AddingBox />
          <div className="lists show">
            <NeedDoList />
            <CompleteList />
          </div>
        </div>
      </div>
    </Layout>
  );
}
