"use client";
import Button from "@/src/components/Button";
import TextField from "@/src/components/TextField";
import useAutoFocus from "@/src/hooks/useAutoFocus";
import { useContext } from "react";
import { phoneNumberValidation } from "@/src/lib/yup/phoneNumber";
import { RegisterContext } from "@/src/provider/RegisterProvider";
import { handleCheckUser } from "@/src/services/endPoints";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const Otp = () => {
  const {
    loading,
    setLoading,
    setPhoneNumber,
    setRegisterType,
    setStep,
    step,
  } = useContext(RegisterContext);

  const phoneInput = useAutoFocus();

  const otpForm = useFormik({
    initialValues: { phoneNumber: "", acceptRole: true },
    validationSchema: phoneNumberValidation,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await handleCheckUser({
        phoneNumber: values.phoneNumber,
      });
      const result = await response.json();
      if (response.ok) {
        const { message, registerType } = result;
        setPhoneNumber(values.phoneNumber);
        setRegisterType(registerType);
        setLoading(false);
        toast.success(message);
        setStep("verify");
      } else {
        setLoading(false);
        toast.error(result.message);
      }
    },
  });
  if (step !== "otp") return null;

  return (
    <form
      onSubmit={otpForm.handleSubmit}
      className="w-full h-full md:h-auto flex flex-col items-center "
    >
      <div className=" w-full md:w-[368px] h-auto md:h-[536px]  gap-12 p-3 md:px-10 pt-6 border border-primary-main bg-white rounded-2xl flex flex-col items-center">
        <p className="font-bold">ورود / ثبت نام </p>
        <TextField
          style={{ direction: "ltr" }}
          name={"phoneNumber"}
          onChange={otpForm.handleChange}
          placeholder={"شماره تماس خود را وارد کنید"}
          autoComplete="off"
          type="tel"
          error={otpForm.errors.phoneNumber}
          touched={otpForm.touched.phoneNumber}
          className={"text-center"}
          refrence={phoneInput}
          value={otpForm.values.phoneNumber}
        />

        <div className="w-full">
          <label className="inline-flex items-center gap-2 w-full mt-6">
            <input
              type="checkbox"
              className="accent-primary-main w-4 h-4 border-border "
              name="acceptRole"
              checked={otpForm.values.acceptRole}
              onChange={otpForm.handleChange}
            />
            <button className="text-primary-main text-sm active:text-sky-400">
              قوانین و مقررات{" "}
            </button>
            <span className="ml-2 text-sm ">گواهیتو را می پذیرم.</span>
          </label>
          <div className="flex flex-1">
            {otpForm.touched.acceptRole &&
            Boolean(otpForm.errors.acceptRole) ? (
              <span className="text-xs font-normal text-red-800">
                {otpForm.errors.acceptRole}
              </span>
            ) : null}
            {otpForm.touched.acceptRole &&
            Boolean(otpForm.errors.acceptRole) ? (
              <span className="text-xs text-red-800 font-normal">
                {otpForm.touched.acceptRole}
              </span>
            ) : null}
          </div>
        </div>

        <Button
          text={"ثبت و ادامه"}
          loading={loading}
          type={"submit"}
          fullWidth
        />
      </div>
    </form>
  );
};

export default Otp;

// import { useCountdown } from "@/src/hooks/useContDown";
// import CustomPadding from "../common/CustomPadding";

// const Otp = () => {

//   return (
//     <CustomPadding className="flex  flex-col items-center">
//       <div className="w-full h-auto max-w-lg bg-white shadow-base md:mt-6 rounded-2xl p-4 md:p-12 gap-4 flex flex-col">
//         <p className="font-bold  text-primary-main">ورود / ثبت نام</p>
//         <p className="text-sm">
//           کد ارسال شده به شماره همراه <span>09333595018</span> را وارد کنید
//         </p>
//         <div className="w-full">
//           <input
//             type="tel"
//             className="text-sm text-center w-full h-12 rounded-xl p-2 border border-border-main
//           focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block

//           "
//             placeholder="کد دریافت شده"
//           />
//           <p className="mt-2 text-xs text-red-600 dark:text-red-500 h-5">
//             <span className="font-medium">Oh, snapp!</span> Some error message.
//           </p>
//         </div>

//         <div className="w-full flex justify-between items-center">
//           <button className="text-xs p-2  rounded-xl text-gray-300 ">
//             ارسال مجدد کد
//           </button>
//           <p className="text-sm">1:48</p>
//         </div>

//         <button className="w-full h-12 bg-primary-main flex items-center justify-center text-white shadow-base rounded-2xl">
//           تایید
//         </button>
//         <div className="w-full items-center flex justify-center">
//           <button className="flex items-center justify-center text-sm  rounded-2xl">
//             بازگشت
//           </button>
//         </div>
//       </div>
//     </CustomPadding>
//   );
// };

// export default Otp;
