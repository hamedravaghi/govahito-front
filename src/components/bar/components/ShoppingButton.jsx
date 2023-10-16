"use client";
import { useContext } from "react";
import { Shopping } from "@/src/lib/svg";
import Link from "next/link";
import { CartContext } from "@/src/provider/CartProvider";
const ShoppingButton = () => {
  const { openCart } = useContext(CartContext);
  return (
    <div className=" flex items-center justify-center h-full  ">
      <Link
        href={"/checkout"}
        className="relative p-2  rounded-full  transition duration-150 ease-in-out hover:bg-secondary-main hover:shadow-base"
      >
        {openCart && (
          <div className="absolute w-2 h-2 rounded-full left-0 top-0 bg-red-700 animate-pulse" />
        )}
        <Shopping />
      </Link>
    </div>
  );
};

export default ShoppingButton;
