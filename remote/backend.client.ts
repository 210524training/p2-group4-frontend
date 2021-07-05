import axios from 'axios';

const backendClient = axios.create({
  baseURL: 'http://someAddress',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default backendClient;
