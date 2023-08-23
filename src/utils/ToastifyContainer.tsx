"use client";

import { ToastContainer } from "react-toastify";

const ToastifyAlerts = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
    />
  );
};

export default ToastifyAlerts;
