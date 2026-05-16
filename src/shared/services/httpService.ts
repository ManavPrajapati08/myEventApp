const BASE_URL = 'https://techeruditestaging.com/projects/plie-api/public/api';

interface RequestHeaders {
  [key: string]: string;
}

export const httpService = {
  post: async <T>(
    url: string,
    data?: Record<string, string>,
    headers?: RequestHeaders
  ): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    return result;
  },

  get: async <T>(url: string, headers?: RequestHeaders): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        ...headers,
      },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    return result;
  },
};
