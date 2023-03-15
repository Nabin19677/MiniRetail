import axios from 'axios';
import { API_URL } from '../constants';
import history from './history';

export const httpBase = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  });

  api.interceptors.response.use(
    (response) => {
    
      return response;
    },
    (error) => {
      if (401 === error.response.status) {
    

        history.push('/');
      }
      if (404 === error.response.status) {
        history.push('/404');
      }
      if (500 === error.response.status) {
        history.push('/500');
      }
      return Promise.reject(error);
    }
  );

  return api;
};
