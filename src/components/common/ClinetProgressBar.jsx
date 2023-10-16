"use client";
import 'react-toastify/dist/ReactToastify.css';
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";

const ClinetProgressBar = () => {
  return (
    <>
      <ToastContainer />
      <ProgressBar
        options={{ showSpinner: false }}
        shallowRouting
        color="#F4AB76"
      />
    </>
  );
};

export default ClinetProgressBar;
