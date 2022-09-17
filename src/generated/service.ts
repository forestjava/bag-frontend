const endpoint: string = import.meta.env.VITE_API_ENDPOINT;

const requestInit: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization':
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6Im5ld1VzZXIiLCJwYXNzd29yZCI6IjE0YTg4YjlkMmY1MmM1NWI1ZmJjZjljNWQ5YzExODc1IiwiZW1haWwiOm51bGwsImlhdCI6MTY2MjQ1ODg0OX0.OwDK5zet4nYnokVo_BVriBPJVybzlQ06MOp-6oigDa8',
  },
};

export function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    // TODO common 200 `errors` handler here -->>
    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
