import axios from "axios"
import { ApiConstant } from "@/constant/applicationConstant";

const authClient = axios.create({
  baseURL: ApiConstant.API_BASE_PATH,
  timeout: 10000,
});

export default authClient;