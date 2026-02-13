import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
};

export const reservationAPI = {
  create: (data) => api.post('/reservations', data),
};

export const menuAPI = {
  getAll: () => api.get('/menu'),
  getByCategory: (category) => api.get(`/menu/category/${category}`),
};

export default api;