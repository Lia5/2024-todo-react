import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { fetchApiPush } from '@/services/fetchApi';
import { List } from '@/types/api/list';
import sprite from '../../assets/sprite.svg';
import './AddingBox.scss';

interface ListProps {
  list: List[];
  setList: React.FC;
}

export const AddingBox: React.FC<ListProps> = ({ list, setList }) => {
  const { t } = useTranslation();

  const [addBox, setAddBox] = useState<boolean>();
  const [input, setInput] = useState<string>('');
  const showAddingBox = () => {
    setAddBox(true);
  };
  const hideAddingBox = () => {
    setAddBox(false);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  // const getCurrentDate = () => {
  //   const date = new Date();
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };
  const newTask = {
    id: uuidv4(),
    title: input,
    date: new Date(),
    status: 'need',
  };
  const addTask = () => {
    console.log('add task1', list);
    setList([...list, newTask]);
    fetchApiPush('/list', newTask);
    console.log('add task2', list);
  };

  return (
    <div>
      <div className="main-title">{t('title', { appName: 'TODO' })}</div>
      <div className={`adding-box ${addBox ? 'show' : ''}`}>
        <input id="todo-field" type="text" placeholder="Введіть текст" onChange={inputHandler} />
        <div className="error">error_text</div>
        <div className="btns">
          <button className="btn btn-primary" onClick={addTask}>
            {t('save')}
          </button>
          <button className="btn btn-danger" onClick={hideAddingBox}>
            {t('cancel')}
          </button>
        </div>
      </div>
      {!addBox && (
        <button className="btn btn-icon btn-icon--circle" onClick={showAddingBox}>
          <svg>
            <use href={`${sprite}#plus`} />
          </svg>
        </button>
      )}
    </div>
  );
};
