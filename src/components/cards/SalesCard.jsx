"use client";
import { Discount } from "@/src/lib/svg";

import Image from "next/image";
import { calPerc, seperateNumber } from "@/src/services/numberAction";
import { useContext } from "react";
import { CartContext } from "@/src/provider/CartProvider";
import { usePathname, useRouter } from "next/navigation";
import { authContext } from "@/src/provider/AuthProvider";

const SalesCard = ({ image, price, discountPercent, name, product }) => {
  const pathname = usePathname();
  const { user } = useContext(authContext);

  const router = useRouter();
  const { handleAddProduct } = useContext(CartContext);

  const handleBuyProduct = () => {
    if (user) {
      if (product) {
        handleAddProduct(user.userId, product._id);
      }
    } else {
      localStorage.setItem("prevUrl", pathname);
      router.push("/register");
    }
  };
  return (
    <div
      className="w-full h-auto
      pb-3 md:pb-0
     md:h-[384px]
     rounded-2xl
     shadow-base
   bg-white px-4
     hover:shadow-2xl
     overflow-hidden relative"
    >
      {discountPercent !== "0" ? (
        <div className="absolute w-[60px] h-[60px] rounded-br-2xl  top-0 left-0 flex items-center justify-center gap-1 bg-primary-main">
          <p className="text-sm">{discountPercent}%</p>
          <Discount width={16} height={16} />
        </div>
      ) : null}
      <div className="w-full h-full flex flex-col ">
        <div className="w-full flex flex-1  md:flex-col  items-center   pt-2 md:pt-5">
          <div className="w-[70px] h-[70px] resize  flex items-center">
            <Image
              src={image}
              alt={"آزمون طلایی"}
              width={"0"}
              height={"0"}
              sizes="100vw"
              className="w-[95%] h-auto object-fill "
              priority={true}
            />
          </div>
          <div
            className={`flex flex-1  flex-col px-2 items-start md:items-center gap-3  ${
              discountPercent !== "0" && "pl-12  md:pl-0"
            } `}
          >
            <p className=" text-center md:leading-10">{name}</p>
          </div>
        </div>

        <div className="w-full flex flex-1  flex-row md:flex-col mt-3 md:mt-0">
          <div className="flex flex-1 flex-col items-center justify-center ">
            {discountPercent !== "0" ? (
              <p className="text-text-second line-through">
                {seperateNumber(price)}
              </p>
            ) : null}
            <p className="font-bold text-lg">
              {calPerc(price, discountPercent)} تومان
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <button
              className={
                "w-full rounded-2xl bg-secondary-main text-text-main  hover:bg-opacity-90 cursor-pointer shadow-base h-[46px] font-bold text-base"
              }
              onClick={handleBuyProduct}
            >
              خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
