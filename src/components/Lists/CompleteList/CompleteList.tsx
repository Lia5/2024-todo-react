import React from 'react';
import { List } from '@/types/api/list';
interface DoneDoListProps {
  list: List[];
}

export const CompleteList: React.FC<DoneDoListProps> = ({ list }) => {
  return (
    <div>
      <div className="acc">
        <div className="acc__title open"> completeList.length this.$tc(count_done, completeList.length) </div>
        <ul className="acc__content">
          {list.map((item) => (
            <li key={item.id} className="done-item">
              {' '}
              {item.title}{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
