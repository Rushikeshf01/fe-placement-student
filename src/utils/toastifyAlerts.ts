import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccessMessage = (msg: string) => {
  toast.success(msg);
};

export const ToastDefaultMessage = (msg: string) => {
  toast(msg);
};

export const ToastInfoMessage = (msg: string) => {
  toast.info(msg);
};

export const ToastErrorMessage = (msg: string) => {
  toast.error(msg);
};

export const ToastWarningMessage = (msg: string) => {
  toast.warn(msg);
};
