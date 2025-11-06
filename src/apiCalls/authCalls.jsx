import axios from "axios";
import { API_BASE_URL } from "./config.js";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw {
      message: error.response?.data?.msg || "Logout failed",
    };
  }
};


