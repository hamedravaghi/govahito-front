"use client";
import "react-toastify/dist/ReactToastify.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";

const ToastWrapper = () => {
  return (
    <>
      <ProgressBar
        height="2px"
        color="#F4AB76"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <ToastContainer />
    </>
  );
};

export default ToastWrapper;
