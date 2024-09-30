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
  listDone: List[];
  setList: any;
}

export const NeedDoList: React.FC<NeedDoListProps> = ({ list, listDone, setList }) => {
  const { t } = useTranslation();

  const onChangeItem = (item: List) => {
    changeListItemStatus(item, 'done').catch(console.log('Error Put'));
    const newList = list.map((listItem) => {
      return listItem.id === item.id ? { ...listItem, status: 'done' } : listItem;
    });
    setList([...newList, ...listDone]);
  };

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
                  onChangeItem(item);
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
