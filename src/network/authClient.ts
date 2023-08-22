import axios from "axios";
import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import { store } from "@/store/store";
import { initialLoginState, initialState } from "@/store/slice/loginSlice";

const authClient = axios.create({
  baseURL: ApiConstant.BASE_URL,
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
          // ToastWarnMessage(error.response.data.msg);
          break;
        case 401:
          // handle unauthorized error
          break;
        case 404:
          // handle not found error
          break;
        case 500:
          // handle internal server error
          break;
        default:
          // handle other errors
          break;
      }
    } else {
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
        ...response.data,
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
