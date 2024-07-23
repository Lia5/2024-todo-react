export function fetchApi<T>(path: string): Promise<T> {
  return fetch(`/api/${path}`).then((response) => response.json());
}
