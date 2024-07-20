// import { useState } from 'react';

import { Layout } from './components/Layout';
import { AddingBox } from './components/AddingBox';
import { NeedDoList } from './components/Lists/NeedDoList';
import { CompleteList } from './components/Lists/CompleteList';
import './App.scss';

export function App() {
  return (
    <Layout>
      <div className="main">
        <div className="container">
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
