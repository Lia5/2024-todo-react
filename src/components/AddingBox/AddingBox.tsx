import React, { useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { fetchApiPush } from '@/services/fetchApi';
import { List } from '@/types/api/list';
import sprite from '../../assets/sprite.svg';
import './AddingBox.scss';

interface ListProps {
  list: List[];
  setList: Dispatch<SetStateAction<List[]>>;
}

export const AddingBox: React.FC<ListProps> = ({ list, setList }) => {
  const { t } = useTranslation();

  const [addBox, setAddBox] = useState<boolean>();
  const [input, setInput] = useState<string>('');
  const toggleAddingBox = () => {
    setAddBox((prev) => !prev);
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
    setList([...list, newTask]);
    fetchApiPush('/list', newTask);
  };

  return (
    <div>
      <div className="main-title">{t('title', { appName: 'TODO' })}</div>
      {/* {addBox && ( */}
      <div className={`adding-box ${addBox ? 'show' : ''}`}>
        <input id="todo-field" type="text" placeholder="Введіть текст" onChange={inputHandler} />
        <div className="error">error_text</div>
        <div className="btns">
          <button className="btn btn-primary" onClick={addTask}>
            {t('save')}
          </button>
          <button className="btn btn-danger" onClick={toggleAddingBox}>
            {t('cancel')}
          </button>
        </div>
      </div>
      {/* )} */}
      {!addBox && (
        <button className="btn btn-icon btn-icon--circle" onClick={toggleAddingBox}>
          <svg>
            <use href={`${sprite}#plus`} />
          </svg>
        </button>
      )}
    </div>
  );
};
