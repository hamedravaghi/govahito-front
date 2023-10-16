"use client"
import { useFormik } from 'formik'
import { useContext, useEffect, useState } from 'react'


import { phoneNumberValidation } from '../lib/yup/phoneNumber';
import { userValidation } from '../lib/yup/registerUser';
import { handleCheckUser, handleLogin,resendCode } from '../services/endPoints';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';





const useRegister = () => {
     const router = useRouter()
     const { handleSetTokenAndUser } = useContext(authContext)

     useEffect(() => { resetForm }, [])





     //* states

     const [step, setStep] = useState("otp")
     const [loading, setLoading] = useState(false)
     const [resendLoading, setResendLoading] = useState(false)
     const [phoneNumber, setPhoneNumber] = useState("")
     // const [timer, setTimer] = useState("stop")
     //* raw verify
     const [registerType, setRegisterType] = useState("raw")


     const [haveTime, setHaveTime] = useState(true)



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


     const verifyForm = useFormik({
          initialValues: { firstName: "", lastName: "", code: "", registerType: "" },
          validationSchema: userValidation,
          onSubmit: async (values) => {
               if (!phoneNumber) {
                    setStep("otp")
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
                              router.replace("/")
                         } else {
                              setLoading(false);
                              toast.error(result.message);
                         }
                    }
               }
          },
     });




     useEffect(() => {
          if (registerType) {
               verifyForm.setFieldValue("registerType", registerType)
          }
     }, [registerType])


















     const handleResendCode = async () => {
          if (haveTime) {
               toast.info("لطفا تا پایان زمان ارسال کد صبر کنید");
          } else {
               if (!phoneNumber) {
                    setStep("otp");
               } else {
                    setResendLoading(true);
                    const response = await resendCode({phoneNumber});
                    const result = await response.json();

                    setResendLoading(false);
                    toast.success(result.message);
                    setHaveTime(true);
               }
          }

          //*resend code handler
          // set counter run
     }


     const resetForm = () => {
          otpForm.resetForm()
          verifyForm.resetForm()
          setStep("otp")
          setLoading(false)
          setPhoneNumber("")
          setRegisterType(null)

     }


     const editNumber = () => {
          setStep("otp")
          setLoading(false)
          setRegisterType(null)
          verifyForm.resetForm()
     }






     return {
          otpActions: {
               step,
               handleResendCode, editNumber, loading,
               setLoading, setPhoneNumber, setRegisterType,
               haveTime, setHaveTime, resendLoading
          },
          otpForm: {
               values: otpForm.values,
               errors: otpForm.errors,
               touched: otpForm.touched,
               handleChange: otpForm.handleChange,
               handleSubmit: otpForm.handleSubmit,

          },
          verifyForm: {
               values: verifyForm.values,
               errors: verifyForm.errors,
               touched: verifyForm.touched,
               handleChange: verifyForm.handleChange,
               handleSubmit: verifyForm.handleSubmit
          }
     }

}



export { useRegister }