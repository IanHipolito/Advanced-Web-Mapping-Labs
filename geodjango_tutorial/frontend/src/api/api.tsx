// src/api/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8001', // Django backend URL
  withCredentials: true, // Include cookies for session handling
});

export default API;
