import axios from "axios";

export const API_URL = "https://truquito-api.otaviomorais.dev";

export const api = axios.create({
  baseURL: API_URL,
});
