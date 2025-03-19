import React from 'react';
import { List } from '@/types/api/list';
import { changeListItemStatus } from '@/api/list';
interface DoneDoListProps {
  list: List[];
  listNeed: List[];
  setList: any;
}

export const CompleteList: React.FC<DoneDoListProps> = ({ list, listNeed, setList }) => {
  const onChangeItem = (item: List) => {
    changeListItemStatus(item, 'need').catch(console.log('Error Put'));
    const newList = list.map((listItem) => {
      return listItem.id === item.id ? { ...listItem, status: 'need' } : listItem;
    });
    setList([...newList, ...listNeed]);
  };
  return (
    <div>
      <div className="acc">
        <div className="acc__title open"> completeList.length this.$tc(count_done, completeList.length) </div>
        <ul className="acc__content">
          {list.map((item) => (
            <li key={item.id} className="done-item">
              <button onClick={() => onChangeItem(item)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
