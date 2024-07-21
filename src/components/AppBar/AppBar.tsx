import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AppBar.scss';

interface AppBarProps {
  handleChangeLanguage: () => void;
  handleChooseLanguage: (language: string) => void;
}

export const AppBar: React.FC<AppBarProps> = ({ handleChangeLanguage, handleChooseLanguage }) => {
  const langs = ['ua', 'en'];

  return (
    <div className="container">
      <nav className="lang">
        {langs.map((item) => (
          <label key={uuidv4()}>
            <input type="radio" name="lang" className="lang__item" onClick={() => handleChooseLanguage(item)} />
            <span> {item} </span>
          </label>
        ))}
      </nav>

      <button type="button" onClick={handleChangeLanguage}>
        Change Language
      </button>
    </div>
  );
};
