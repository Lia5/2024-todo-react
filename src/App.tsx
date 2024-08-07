import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { fetchApi } from '@/services/fetchApi';
import { Layout } from '@/components/Layout';
import { AddingBox } from '@/components/AddingBox';
import { NeedDoList } from '@/components/Lists/NeedDoList';
import { CompleteList } from '@/components/Lists/CompleteList';
import './App.scss';
import { List } from '@/types/api/list';

export function App() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [list, setList] = useState<List[]>([]);
  const listNeed = useMemo(() => list.filter((item) => item.status === 'need'), [list]);
  const listDone = useMemo(() => list.filter((item) => item.status === 'done'), [list]);

  useEffect(() => {
    fetchApi<List[]>('/list').then((res) => {
      setList(res);
      console.log(res);
    });
  }, []);

  return (
    <Layout>
      <div className="main">
        <div className="container">
          <h1>{t('title', { appName: 'TODO' })}</h1>
          <h3>Current Language: {language}</h3>
          <AddingBox list={list} setList={setList} />
          <div className="lists show">
            <NeedDoList list={listNeed} />
            <hr />
            <CompleteList list={listDone} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
