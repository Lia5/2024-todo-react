import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { fetchApi } from '@/services/fetchApi';
import { Layout } from '@/components/Layout';
import { AddingBox } from '@/components/AddingBox';
import { NeedDoList } from '@/components/Lists/NeedDoList';
import { CompleteList } from '@/components/Lists/CompleteList';
import './App.scss';
import { Post } from '@/types/api/posts';

export function App() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    console.log('123');
    fetchApi<Post[]>('/posts').then((res) => {
      console.log(res);
    });
    // fetch('/api/posts')
    //   .then((response) => response.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, []);

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
