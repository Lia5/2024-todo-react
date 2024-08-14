import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useTranslation } from 'react-i18next';
import sprite from '../../../assets/sprite.svg';
import { changeListItemStatus, ListItemDelete } from '@/api/list';
import { List } from '@/types/api/list';
import './NeedDoList.scss';

interface NeedDoListProps {
  list: List[];
}

export const NeedDoList: React.FC<NeedDoListProps> = ({ list }) => {
  const { t } = useTranslation();

  const deleteItem = (id: string) => {
    withReactContent(Swal)
      .fire({
        title: t('areYouShure'),
        showCancelButton: true,
        confirmButtonText: t('yes'),
        cancelButtonText: t('no'),
      })
      .then((result) => {
        if (result.isConfirmed) {
          ListItemDelete(id);
          Swal.fire(t('itemDeleted'), '', 'success');
        }
      });
  };

  return (
    <div>
      <div className="title">{t('list')}</div>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  changeListItemStatus(item, 'done');
                }}
              />
              <span> {item.title} </span>
            </label>
            <button className="btn btn-icon btn-cross" onClick={() => deleteItem(item.id)}>
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
