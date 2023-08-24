"use client";

import axios from "axios";
import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import { store } from "@/store/store";
import { initialLoginState, initialState } from "@/store/slice/loginSlice";
import { ToastErrorMessage, ToastWarningMessage } from "@/utils/toastifyAlerts";

const authClient = axios.create({
  baseURL: ApiConstant.BASE_URL,
  timeout: 5000,
});

authClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

authClient.interceptors.response.use(
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

export const initializeAuthData = async () => {
  const refreshToken = localStorage.getItem(ApplicationConstant.REFRESH_TOKEN);
  if (!refreshToken) {
    store.dispatch(initialLoginState(initialState));
    return false;
  }
  try {
    const response = await authClient.post(ApiConstant.GET_NEW_ACCESS_TOKEN, {
      refresh: refreshToken,
    });
    store.dispatch(
      initialLoginState({
        access: response.data.access,
        refresh: response.data.refresh,
        user: response.data.user,
        isAuthenticated: true,
      })
    );
    return true;
  } catch {
    localStorage.clear();
    sessionStorage.clear();
    store.dispatch(initialLoginState(initialState));
    return false;
  }
};

export default authClient;
