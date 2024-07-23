import React from 'react';
import './AppBar.scss';
import { LangBar } from './LangBar';

export const AppBar: React.FC = () => {
  return (
    <div className="container">
      <LangBar />
    </div>
  );
};
