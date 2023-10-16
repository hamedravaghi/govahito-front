"use client";
import { OldBus, OldCar, OldCycle, OldTruck } from "@/src/lib/svg";
import { authContext } from "@/src/provider/AuthProvider";

import Link from "next/link";
import { useContext } from "react";
const UserPerchases = () => {
  const { status, purchases } = useContext(authContext);
  if (status === "loading") return null;
  return (
    <div className="h-full flex flex-row-reverse items-center gap-2 py-[2px]  ">
      {Array.isArray(purchases) &&
        purchases.map((item,index) => (
          <Link
            href={item.link}
            key={index.toString()}
            className="h-12 w-12  flex items-center justify-center  relative"
          >
            <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 rounded-full bg-gradient-to-r from-secondary-main  to-primary-main animate-spin duration-700" />
            <div className="w-[95%] h-[95%] rounded-full flex items-center justify-center bg-white z-10">
              {item.certificate.slug === "car" && <OldCar />}
              {item.certificate.slug === "truck" && <OldTruck />}
              {item.certificate.slug === "cycle" && <OldCycle />}
              {item.certificate.slug === "bus" && <OldBus />}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default UserPerchases;
