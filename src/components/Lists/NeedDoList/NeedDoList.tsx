import React from 'react';
import { useTranslation } from 'react-i18next';
import { fetchApiChangeStatus } from '@/services/fetchApi';
import sprite from '../../../assets/sprite.svg';
import { List } from '@/types/api/list';
import './NeedDoList.scss';

interface NeedDoListProps {
  list: List[];
}

export const NeedDoList: React.FC<NeedDoListProps> = ({ list }) => {
  const { t } = useTranslation();
  const changeStatus = (item: List, newStatus: string) => {
    fetchApiChangeStatus('/list', item, newStatus);
  };

  return (
    <div>
      <div className="title">{t('list')}</div>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <label>
              <input type="checkbox" onChange={changeStatus(item, 'done')} />
              <span> {item.title} </span>
            </label>
            <button className="btn btn-icon btn-cross">
              <svg>
                <use href={`${sprite}#cross`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
