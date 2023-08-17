import { ApiConstant } from '@/constant/applicationConstant';
import axios from 'axios';

const appClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 10000, 
});

export default appClient;