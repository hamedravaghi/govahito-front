"use client";
import { Trash } from "@/src/lib/svg";
import { CartContext } from "@/src/provider/CartProvider";
import { calPerc, seperateNumber } from "@/src/services/numberAction";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
const Star = ({ content }) => {
  return (
    <div className="flex w-full gap-2 ">
      <div className=" mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M3.54692 1.47214C4.00428 0.0644979 5.99572 0.0644979 6.45308 1.47214C6.65763 2.10165 7.24426 2.52786 7.90617 2.52786C9.38625 2.52786 10.0016 4.42183 8.80422 5.2918C8.26873 5.68086 8.04465 6.37049 8.2492 7C8.70657 8.40764 7.09546 9.57817 5.89806 8.7082C5.36256 8.31914 4.63744 8.31914 4.10194 8.7082C2.90454 9.57817 1.29343 8.40764 1.7508 7C1.95535 6.37049 1.73127 5.68086 1.19577 5.2918C-0.00163364 4.42183 0.613752 2.52786 2.09383 2.52786C2.75574 2.52786 3.34237 2.10165 3.54692 1.47214Z"
            fill="#B5E1E3"
          />
        </svg>
      </div>
      <p className="">{content}</p>
    </div>
  );
};

const ProductCard = ({ product, simple = false }) => {
  const { handleRemoveProduct, loading } = useContext(CartContext);
  return (
    <div className=" bg-white rounded-2xl border w-full h-auto py-4 px-4 lg:px-6 md:py-6 lg:py-12 flex gap-4 flex-col">
      <div className="w-full flex gap-4 ">
        <div className="w-[120px] h-[120px] rounded-2xl border flex flex-col items-center justify-evenly">
          <Image
            width={60}
            height={60}
            src={product.certificate.image}
            alt={product.certificate.title}
          />
          <div className="w-full text-sm font-bold flex flex-col items-center gap-1">
            {product.certificate.title}
            <p className="text-xs text-text-second">
              {" "}
              {product.certificate.subtitle}
            </p>
          </div>
        </div>
        {/* header Detail */}
        <div className="h-auto flex flex-1 flex-col  justify-start lg:justify-center">
          <h5 className="font-bold text-sm lg:text-base leading-9">
            {product.name}
          </h5>
          <div className="hidden lg:flex mt-8 flex-col gap-4">
            {product.desc.map((item, index) => (
              <Star key={index.toString()} content={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden  mt-6 flex-col gap-4">
        {product.desc.map((item, index) => (
          <Star key={index.toString()} content={item} />
        ))}
      </div>
      <div className="w-full h-[1px] bg-border-main" />
      <div className="w-full flex gap-6 md:gap-0 flex-col-reverse md:flex-row md:justify-between">
        {simple === false ? (
          <button
            disabled={loading}
            onClick={() => handleRemoveProduct(product._id)}
            className="w-[130px] h-[40px] lg:w-[146px] rounded-[8px] border border-primary-main flex items-center justify-center gap-2 hover:bg-primary-hover text-xs text-text-third hover:text-white"
          >
            <Trash />
            حذف از سبد خرید
          </button>
        ) : (
          <div className="w-full flex justify-end">
            <Link
              href={product.link}
              className="px-6 py-2 bg-secondary-main rounded-2xl text-white font-bold"
            >
              هدایت به صفحه آزمون ها
            </Link>
          </div>
        )}
        {simple === false && (
          <div className="h-full flex items-center  justify-end md:justify-start ">
            {product.discountPercent !== "0" ? (
              <div className="flex items-center gap-2 flex-row-reverse">
                <p className="font-bold text-sm text-text-second line-through">
                  {seperateNumber(product.price)}
                </p>{" "}
                <div className="w-8 h-8 rounded-[8px] flex items-center justify-center gap-1 text-white bg-primary-main">
                  {product.discountPercent}%
                </div>{" "}
                <h5 className="font-bold text-[20px] lg:text-[24px] text-text-third">
                  {calPerc(product.price, product.discountPercent)} تومان
                </h5>
              </div>
            ) : (
              <h5 className="font-bold text-[20px] lg:text-[24px] text-text-third">
                {seperateNumber(product.price)} تومان
              </h5>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
