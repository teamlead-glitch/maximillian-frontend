import { API_CONFIG } from "@/constants/config";

const BASE_URL = `${API_CONFIG.BASE_URL}`

type ApiError = {
  message: string;
  status: number;
  isBusinessError: boolean;
};

async function handleResponse<T>(res: Response): Promise<T> {
  const data = await res.json();

  if (!res.ok || data?.error) {

    const error: ApiError = {
      message: data?.message || "API Error",
      status: res.status,
      isBusinessError: Boolean(data?.error),
    };

    throw new Error(JSON.stringify(error));
  }

  return data as T;
}

export const apiService = {
  get: async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { Accept: "application/json" },
    });

    return handleResponse<T>(res);
  },

  post: async <T, B = unknown>(
    endpoint: string,
    body: B
  ): Promise<T> => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    return handleResponse<T>(res);
  },
};
