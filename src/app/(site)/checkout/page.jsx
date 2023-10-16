"use client";
import { useContext } from "react";
import CustomPadding from "@/src/components/common/CustomPadding";
import { CartContext } from "@/src/provider/CartProvider";
import ProductCard from "@/src/components/cards/ProductCard";
import PayCard from "@/src/components/cards/PayCard";
import { Surprise } from "@/src/lib/svg";
import { seperateNumber } from "@/src/services/numberAction";

const Checkout = () => {
  const { paymentDetail, openCart,handlePay } = useContext(CartContext);
  return (
    <CustomPadding className={"mt-5"}>
      {openCart && openCart.products.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="basis-full md:basis-8/12 flex flex-col gap-3">
            {openCart.products.map((item, index) => (
              <ProductCard
                product={item}
                key={index.toString()}
                number={index + 1}
              />
            ))}
          </div>
          <div className=" basis-full md:basis-4/12">
            {" "}
            <PayCard />{" "}
          </div>
          <div className="w-full mt-4 flex md:hidden sticky bottom-3">
            {paymentDetail && (
              <button
                onClick={() => handlePay(openCart._id)}
                className="w-full h-[46px] rounded-2xl bg-secondary-main flex items-center justify-center font-bold shadow-base hover:shadow-lg "
              >
                پرداخت | {seperateNumber(paymentDetail.payable)}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[328px] h-[332px]  flex flex-col justify-evenly pt-12 gap-10 items-center bg-white border rounded-2xl">
            <Surprise />
            <div className="w-full flex flex-col items-center gap-5 ">
              <p>دوست خوبم ! </p>
              <p>هنوز خرید نکردی و سبد خریدت خالیه</p>
            </div>
          </div>
        </div>
      )}
    </CustomPadding>
  );
};

export default Checkout;
