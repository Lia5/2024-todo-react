import { fetchApiChangeStatus, fetchApiDelete } from '@/services/fetchApi';
import { List, ListStatus } from '@/types/api/list';

export const changeListItemStatus = (item: List, newStatus: ListStatus) => {
  fetchApiChangeStatus('list', item, newStatus);
};

export const ListItemDelete = (id: string) => {
  fetchApiDelete('list', id);
};
