// api.js
import axios from "axios";

export const getUsers = () =>
  axios.get(`${import.meta.env.VITE_API_URL}/users`);

export const getUser = (createdAt) =>
  axios.get(`${import.meta.env.VITE_API_URL}/users/${createdAt}`);
