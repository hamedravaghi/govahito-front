"use client"
import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify';

export const RegisterContext = createContext({
     step: "",
     setStep: () => { },
     phoneNumber: "",
     handleResendCode: () => { },
     editNumber: () => { },
     loading: Boolean,
     setLoading: () => { },
     setPhoneNumber: () => { },
     setRegisterType: () => { },
     registerType: "raw",
     haveTime: Boolean,
     setHaveTime: () => { },
     resendLoading: Boolean

})



const RegisterProvider = ({ children }) => {


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


     const handleResendCode = async () => {
          if (haveTime) {
               toast.info("لطفا تا پایان زمان ارسال کد صبر کنید");
          } else {
               if (!phoneNumber) {
                    setStep("otp");
               } else {
                    setResendLoading(true);
                    const response = await resendCode({ phoneNumber });
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
          setPhoneNumber("")
          setStep("otp")
          setLoading(false)
          setPhoneNumber("")
          setRegisterType(null)

     }


     const editNumber = () => {
          setStep("otp")
          setLoading(false)
          setRegisterType(null)
          setPhoneNumber("")
     }



     return (<RegisterContext.Provider
          value={{
               step, setStep,
               handleResendCode, editNumber, loading,
               setLoading, setPhoneNumber, phoneNumber, setRegisterType, registerType,
               haveTime, setHaveTime, resendLoading
          }}
     >
          {children}
     </RegisterContext.Provider>)
}



export default RegisterProvider