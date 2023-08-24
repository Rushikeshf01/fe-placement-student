import { ApiConstant } from "@/constant/applicationConstant";
import { store } from "@/store/store";
import { ToastErrorMessage, ToastWarningMessage } from "@/utils/toastifyAlerts";
import axios from "axios";

const appClient = axios.create({
  baseURL: ApiConstant.BASE_URL,
  timeout: 5000,
});

appClient.interceptors.request.use(
  (config) => {
    const authStore = store.getState().auth;
    config.headers["Authorization"] = `Bearer ${authStore.access}`;
    return config;
  },
  (error) => Promise.reject(error)
);

appClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          // handle bad request
          if (error.response.data.detail) {
            ToastErrorMessage(error.response.data.detail[0]);
          } else {
            ToastWarningMessage("400 - Bad request");
          }
          break;
        case 401:
          // handle unauthorized error
          if (error.response.data.detail) {
            ToastErrorMessage(error.response.data.detail[0]);
          } else {
            ToastWarningMessage("401 - Unauthorized action");
          }
          break;
        case 404:
          // handle not found error
          ToastWarningMessage("404 - Requested resource not found");
          break;
        case 500:
          // handle internal server error
          ToastWarningMessage("500 - Internal server error");
          break;
        default:
          // handle other errors
          ToastWarningMessage(
            "Unexcepted error occured, Please try again after some time."
          );
          break;
      }
    } else {
      ToastWarningMessage(
        "Unexcepted error occured, Please try again after some time."
      );
    }

    return Promise.reject(error);
  }
);

export default appClient;
