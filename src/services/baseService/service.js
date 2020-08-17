import axios from 'axios';

const BaseUrl = '';

const API = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

API.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      'success' in response.data &&
      response.data.success === false
    ) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
