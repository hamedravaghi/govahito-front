"use client";
import { CartContext } from "@/src/provider/CartProvider";
import { seperateNumber } from "@/src/services/numberAction";
import { useContext } from "react";
import Loader from "../Loader";
const PayCard = () => {
  const { paymentDetail, handlePay, openCart, loading } =
    useContext(CartContext);

  return (
    <>
      <div className="w-full px-4 lg:px-6 py-6 rounded-2xl border bg-white flex flex-col gap-5 lg:gap-6 relative">
        {/* main price */}
        {paymentDetail?.total && (
          <div className="w-full flex items-center justify-between text-sm lg:text-base">
            <p className="text-sm text-text-third">مبلغ کل</p>{" "}
            <p className="font-bold">
              {seperateNumber(paymentDetail.total)} تومان
            </p>
          </div>
        )}
        {/* discount code area */}
        <div className="w-full flex items-center justify-between text-sm lg:text-base">
          <p className="text-sm text-text-third">کد تخفیف</p>
        </div>

        {/* discount area*/}
        {paymentDetail?.perfit && paymentDetail.perfit !== 0 ? (
          <div className="w-full flex items-center justify-between text-sm lg:text-base">
            <p className="text-sm text-text-third">سود شما از این خرید</p>
            <p className="font-bold">
              {seperateNumber(paymentDetail.perfit)} تومان
            </p>
          </div>
        ) : null}
        {/* final price */}
        {paymentDetail?.payable && (
          <div className="w-full flex items-center justify-between text-sm lg:text-base">
            <p className="text-sm text-text-third">مبلغ قابل پرداخت</p>{" "}
            <p className="font-bold text-2xl">
              {seperateNumber(paymentDetail.payable)} تومان
            </p>
          </div>
        )}
        {/* button  price */}
        <div className="w-full mt-4 hidden md:flex">
          <button
            disabled={loading}
            onClick={() => handlePay(openCart._id)}
            className="w-full h-[46px] rounded-2xl bg-secondary-main flex items-center justify-center font-bold shadow-base hover:shadow-lg "
          >
            {loading ? <Loader size="sm" /> : "پرداخت"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PayCard;
