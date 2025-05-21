import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
  },
});

export default apiClient;
