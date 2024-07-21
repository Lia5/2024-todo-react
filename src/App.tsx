import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from './components/Layout';
import { AddingBox } from './components/AddingBox';
import { NeedDoList } from './components/Lists/NeedDoList';
import { CompleteList } from './components/Lists/CompleteList';
import './App.scss';

export function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ua' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  const handleChooseLanguage = (clickedLanguage: string) => {
    const newLanguage = clickedLanguage !== currentLanguage ? clickedLanguage : currentLanguage;
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <Layout handleChangeLanguage={handleChangeLanguage} handleChooseLanguage={handleChooseLanguage}>
      <div className="main">
        <div className="container">
          <h1>{t('title', { appName: 'TODO' })}</h1>
          <h3>Current Language: {currentLanguage}</h3>
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
