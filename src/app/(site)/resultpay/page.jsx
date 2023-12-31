"use client";
import Loader from "@/src/components/Loader";
import ProductCard from "@/src/components/cards/ProductCard";
import CustomPadding from "@/src/components/common/CustomPadding";
import { authContext } from "@/src/provider/AuthProvider";
import { CartContext } from "@/src/provider/CartProvider";
import { checkPay } from "@/src/services/endPoints";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ResultPay = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, handleGetUserPurchases } = useContext(authContext);
  const { handleGetOpenCart } = useContext(CartContext);

  //* cart payment actions state
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user && !status) {
      handleResponse(user);
    }
    if (user && user.userId && status === "OK") {
      handleGetUserPurchases(user.userId);
      handleGetOpenCart(user.userId);
    }
  }, [user, status]);

  const handleResponse = async (user) => {
    handleGetOpenCart(user.userId);
    const Authority = searchParams.get("Authority");
    const Status = searchParams.get("Status");
    const result = await checkPay(Authority);
    const response = await result.json();

    if (Status === "OK") {
      switch (result.status) {
        case 200:
          setLoading(false);
          setStatus("OK");
          toast.success(response.message);
          setData(response.data);
          break;
        case 201:
          setLoading(false);
          setStatus("BOK");
          toast.info(response.message);
          setData(response.data);
          break;
        default:
          setLoading(false);
          setStatus("NOTFOUND");
          toast.error(response?.message);
          setData(null);
          break;
      }
    } else {
      setLoading(false);
      toast.error("خرید موفقیت آمیز نبود");
      setStatus("NOK");
      setData(null);
    }
  };

  if (loading)
    return (
      <div className="w-full h-full min-h-full mt-5   flex items-center justify-center flex-col">
        <div className="w-full max-w-[300px] min-h-[300px] flex flex-col justify-center items-center gap-3 bg-white rounded-2xl shadow-base border">
          <p className="font-bold text-center">
            در انتظار دریافت اطلاعات خرید ...
          </p>
          <Loader />
        </div>
      </div>
    );

  return (
    <CustomPadding className={"mt-5"}>
      {status === "NOK" && (
        <div className="w-full flex flex-col gap-2">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl "
            role="alert"
          >
            <strong className="font-bold">پرداخت موفقیت آمیز نبود</strong>
          </div>
          <div className="w-full flex justify-end ">
            <button
              onClick={() => router.replace("/checkout")}
              className={
                "bg-secondary-main  min-h-[40px] px-6 w-full md:w-auto rounded-2xl font-bold shadow-base text-text-third hover:shadow-lg"
              }
            >
              تکرار خرید
            </button>
          </div>
        </div>
      )}
      {status === "NOTFOUND" && (
        <div className="w-full flex flex-col gap-2">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl "
            role="alert"
          >
            <strong className="font-bold">جزییات خرید یافت نشد</strong>
          </div>
        </div>
      )}
      {status === "BOK" && (
        <div className="w-full flex flex-col gap-2">
          <div
            className="bg-secondary-main text-white border   px-4 py-3 rounded-2xl "
            role="alert"
          >
            <strong className="font-bold">
              خرید قبلا با موفقیت ثبت شده است
            </strong>
          </div>

          {data.map((item, index) => (
            <ProductCard
              product={item}
              key={index.toString()}
              number={index + 1}
              simple={true}
            />
          ))}
        </div>
      )}
      {status === "OK" && (
        <div className="w-full flex flex-col gap-2">
          <div
            className="bg-secondary-main text-white border   px-4 py-3 rounded-2xl "
            role="alert"
          >
            <strong className="font-bold">پرداخت با موفقیت انجام شد</strong>
          </div>

          {data.map((item, index) => (
            <ProductCard
              product={item}
              key={index.toString()}
              number={index + 1}
              simple={true}
            />
          ))}
        </div>
      )}
    </CustomPadding>
  );
};

export default ResultPay;
