import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response error logging
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  },
);
