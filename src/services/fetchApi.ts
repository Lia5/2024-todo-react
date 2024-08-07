export function fetchApi<T>(path: string): Promise<T> {
  return fetch(`/api/${path}`).then((response) => response.json());
}

export function fetchApiPush<T>(path: string, item: T): Promise<T> {
  return fetch(`/api/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then((response) => response.json());
}

export function fetchApiChangeStatus<T extends { status: string }>(
  path: string,
  item: T,
  newStatus: string,
): Promise<T> {
  const updatedItem = { ...item, status: newStatus };
  return fetch(`/api/${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedItem),
  }).then((response) => response.json());
}
