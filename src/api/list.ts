import { fetchApiPut, fetchApiDelete } from '@/services/fetchApi';
import { List, ListStatus } from '@/types/api/list';

export const changeListItemStatus = (item: List, newStatus: ListStatus) => {
  const updatedItem = { ...item, status: newStatus };
  return fetchApiPut(`/list/${item.id}`, updatedItem);
};

export const ListItemDelete = (id: string) => {
  return fetchApiDelete(`/list/${id}`);
};
