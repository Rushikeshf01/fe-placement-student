"use client";

import { ToastContainer } from "react-toastify";

const ToastifyAlerts = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={false}
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToastifyAlerts;
