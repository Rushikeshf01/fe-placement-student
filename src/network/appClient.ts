import { ApiConstant } from "@/constant/applicationConstant";
import axios from "axios";

const appClient = axios.create({
  baseURL: ApiConstant.BASE_URL,
});

export default appClient;
