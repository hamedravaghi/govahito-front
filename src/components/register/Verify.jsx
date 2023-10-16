"use client";
import { useContext, useEffect, useMemo } from "react";
import CustomTimer from "@/src/components/CustomTimer";
import TextField from "@/src/components/TextField";

import Button from "@/src/components/Button";
import useAutoFocus from "@/src/hooks/useAutoFocus";
import { RegisterContext } from "@/src/provider/RegisterProvider";
import { useFormik } from "formik";
import { userValidation } from "@/src/lib/yup/registerUser";
import { toast } from "react-toastify";
import { authContext } from "@/src/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/src/services/endPoints";

const Verify = () => {
  const router = useRouter();
  const { handleSetTokenAndUser } = useContext(authContext);
  const {
    loading,
    haveTime,
    setHaveTime,
    resendLoading,
    handleResendCode,
    editNumber,
    phoneNumber,
    setLoading,
    registerType,
    step,
  } = useContext(RegisterContext);

  const firstNameInput = useAutoFocus();

  const TimeComponent = useMemo(() => {
    return <CustomTimer time={240000} onComplete={() => setHaveTime(false)} />;
  }, [haveTime]);

  const verifyForm = useFormik({
    initialValues: { firstName: "", lastName: "", code: "", registerType: "" },
    validationSchema: userValidation,
    onSubmit: async (values) => {
      try {
        if (!phoneNumber) {
          setStep("otp");
        } else {
          setLoading(true);
          if (haveTime) {
            const user = { ...values, phoneNumber };
            const response = await handleLogin(user);
            const result = await response.json();
            if (response.ok) {
              const { accessToken, message } = result;
              handleSetTokenAndUser(accessToken);
              toast.success(message);
              setLoading(false);
              const prevPage = localStorage.getItem("prevUrl");
              if (prevPage) {
                router.replace(prevPage);
              } else {
                router.replace("/");
              }
            } else {
              setLoading(false);
              toast.error(result.message);
            }
          }
        }
      } catch (err) {
        toast.error("خطایی رخ داده است");
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (registerType) {
      verifyForm.setFieldValue("registerType", registerType);
    }
  }, [registerType]);

  if (step !== "verify") return null;
  return (
    <form
      onSubmit={verifyForm.handleSubmit}
      className="w-full md:w-[368px]  h-auto gap-1  md:gap-3 p-3 md:px-10 py-6 border border-primary-main bg-white rounded-2xl flex flex-col items-center "
    >
      <p className="font-bold w-full text-center mb-6">ثبت نام</p>
      <div className="w-full inline-block">
        <p className="text-md">کد تایید به شماره همراهت ارسال شد .</p>
        {verifyForm.values.registerType === "raw" ? (
          <p className="text-xs w-full mt-1">لطفا مشخصات خود را وارد کنید.</p>
        ) : null}
      </div>
      <div className="w-full gap-1 flex flex-col">
        {verifyForm.values.registerType === "raw" ? (
          <>
            <TextField
              name={"firstName"}
              onChange={verifyForm.handleChange}
              error={verifyForm.errors.firstName}
              touched={verifyForm.touched.firstName}
              value={verifyForm.values.firstName}
              placeholder={"نام"}
              // label={"نام"}
              type={"text"}
              // onBlur={() => setFieldTouched("firstName")}
              refrence={firstNameInput}
            />
            <TextField
              name={"lastName"}
              onChange={verifyForm.handleChange}
              error={verifyForm.errors.lastName}
              touched={verifyForm.touched.lastName}
              value={verifyForm.values.lastName}
              placeholder={"نام خانوادگی"}
              // label={"نام خانوادگی"}
              type={"text"}
            />
          </>
        ) : null}

        <TextField
          name={"code"}
          style={{ direction: "ltr" }}
          onChange={verifyForm.handleChange}
          error={verifyForm.errors.code}
          touched={verifyForm.touched.code}
          value={verifyForm.values.code}
          placeholder={"کد یکبار مصرف"}
          // label={"کد یک بار مصرف 5 رقمی"}
          type={"tel"}
          className={"text-center"}
        />
      </div>
      <div className="w-full mt-4 ">
        <div className="w-full flex justify-between">
          <input
            type="button"
            value={"ویرایش شماره همراه"}
            className="text-xs  cursor-pointer hover:opacity-25 active:opacity-60"
            onClick={editNumber}
          />
          {haveTime ? (
            TimeComponent
          ) : (
            <p className="text-xs text-red-800">زمان ها منقضی شد</p>
          )}
        </div>
        <input
          disabled={resendLoading}
          type="button"
          value={"ارسال مجدد کد"}
          onClick={handleResendCode}
          className="text-xs cursor-pointer text-primary-main hover:opacity-25 active:opacity-60"
        />
      </div>
      <Button
        loading={loading}
        disabled={!haveTime}
        text={"ثبت"}
        fullWidth
        className={"mt-6"}
        type={"submit"}
      />
    </form>
  );
};

export default Verify;
