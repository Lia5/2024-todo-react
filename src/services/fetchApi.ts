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

export function fetchApiPut<T>(path: string, body: T): Promise<T> {
  console.log('body', body);
  return fetch(`/api${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function fetchApiDelete<T>(path: string): Promise<T> {
  return fetch(`/api${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
    return response.json();
  });
}
