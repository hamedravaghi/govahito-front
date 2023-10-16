import CustomPadding from "@/src/components/common/CustomPadding";
import Otp from "@/src/components/register/Otp";
import Verify from "@/src/components/register/Verify";
import RegisterProvider from "@/src/provider/RegisterProvider";

const Register = () => {
  return (
    <RegisterProvider>
      <div className="w-full min-h-screen flex  justify-center  bg-[url('/images/pattern.png')] md:pt-4">
        <CustomPadding className="w-full h-full  flex flex-col items-center">
          <Otp />
          <Verify />
        </CustomPadding>
      </div>
    </RegisterProvider>
  );
};

export default Register;
