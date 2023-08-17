import axios from "axios"
import { ApiConstant,ApplicationConstant } from "@/constant/applicationConstant";

const authClient = axios.create({
  baseURL: ApiConstant.API_PATH, // Set your auth server base URL here
  timeout: 10000,
  // You can add other default headers or interceptors here for authentication
});

export default authClient;