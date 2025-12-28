import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Remove trailing slash if present to prevent double slashes
const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      // Try to get token from localStorage as fallback
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "Category", "Supplier", "Customer", "Product", "Upload"],
  endpoints: () => ({}),
});
