import axios from 'axios';

const appClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, 
});

export default appClient;