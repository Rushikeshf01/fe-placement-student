import axios from 'axios';

const authClient = axios.create({
  baseURL: 'https://auth.example.com', // Set your auth server base URL here
  timeout: 10000,
  // You can add other default headers or interceptors here for authentication
});

export default authClient;