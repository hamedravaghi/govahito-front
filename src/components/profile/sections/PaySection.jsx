"use client";
import { NoPay } from "@/src/lib/svg";
import ProfileCard from "../ProfileCard";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { authContext } from "@/src/provider/AuthProvider";
import { toast } from "react-toastify";
import { getAllUserPayment } from "@/src/services/endPoints";
import moment from "moment-jalaali";
import { seperateNumber } from "@/src/services/numberAction";
import CustomDivider from "../../common/CustomDivider";

const TextBox = ({
  content,
  value,
  valueClassName = "text-sm text-text-main font-bold",
}) => {
  return (
    <div className="flex w-full max-w-sm gap-2 items-center">
      <p className="text-sm text-text-second">{content} :</p>
      <p className={valueClassName}>{value}</p>
    </div>
  );
};

const NoPayCard = () => {
  return (
    <ProfileCard>
      <NoPay />
      <p className="font-bold">هنوز هیچ آزمونی نخریدی !...</p>
      <div className="w-full flex flex-col items-center gap-4">
        <Link
          href={"/checkout"}
          className="px-3 py-2 rounded-2xl bg-primary-main text-white"
        >
          خرید آزمون طلایی
        </Link>
      </div>
    </ProfileCard>
  );
};

const PaySection = () => {
  const { user } = useContext(authContext);
  const [userPayments, setUserPayments] = useState([]);
  useEffect(() => {
    if (user) {
      handleGetUserPayments(user.userId);
    }
  }, [user]);

  const handleGetUserPayments = async (userId) => {
    try {
      const payments = await getAllUserPayment(userId);
      const result = await payments.json();
      setUserPayments(result);
    } catch (err) {
      toast.error(
        "خطای در دریافت اطلاعات رخ داده است . لطفا دقایقی دیگر تلاش کنید"
      );
    }
  };

  useEffect(() => {
    if (userPayments.length >= 0) {
      console.log(userPayments);
    }
  }, [userPayments]);

  if (userPayments.length === 0) return <NoPayCard />;
  return (
    <div className="w-full  flex flex-col gap-3 ">
      {userPayments.map((item, index) => (
        <div
          key={item._id}
          className="w-full h-auto  bg-white rounded-2xl shadow-base px-2 py-4 flex flex-col gap-3"
        >
          <div className="w-full flex flex-wrap gap-3">
            {/* number */}
            <TextBox content={"شماره"} value={index + 1} />
            {/* date */}
            <TextBox
              content={"تاریخ پرداخت"}
              value={
                item.payDate
                  ? moment(item?.payDate).format("jYYYY/jM/jD")
                  : "--"
              }
            />

            {/* time */}
            <TextBox
              content={"ساعت پرداخت"}
              value={
                item.payDate ? moment(item?.payDate).format("HH:mm") : "--"
              }
            />

            {/* amount */}
            <TextBox content={"مبلغ"} value={seperateNumber(item.amount)} />

            {/* status */}
            <TextBox
              content={"وضعیت"}
              value={item.payment === true ? "موفق" : "نا موفق"}
              valueClassName={
                item.payment === true
                  ? "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                  : "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
              }
            />

            {/* tracking ID */}
            <TextBox content={"شماره پیگیری"} value={item.refId} />
          </div>
          <CustomDivider
            title={"خرید ها"}
            textClassName="font-sm text-text-third px-2"
          />
          <div className="w-full flex flex-col gap-3">
            {item.cart.products.map((item, index) => (
              <div className="flex px-2 gap-2" key={item._id}>
                <p>{index + 1} - </p>
                <p className="text-text-third">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaySection;
