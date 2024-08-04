import React from 'react';
import { useTranslation } from 'react-i18next';
import sprite from '../../../assets/sprite.svg';
import './NeedDoList.scss';
import { List } from '@/types/api/list';

interface NeedDoListProps {
  list: List[];
}

export const NeedDoList: React.FC<NeedDoListProps> = ({ list }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="title">{t('list')}</div>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <label>
              <input type="checkbox" />
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
