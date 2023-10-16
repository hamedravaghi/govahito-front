"use client";
import { useContext } from "react";
import { ClientContext } from "@/src/provider/ClientProvider";
import Link from "next/link";

const BaseLink = ({ data, handleOpen, className }) => {
  const { handleSideBar } = useContext(ClientContext);
  return (
    <Link
      onClick={() => {
        handleSideBar();
        handleOpen();
      }}
      href={data.link}
      className={`w-full h-12 flex items-center gap-2 ${className}`}
    >
      {data.icon} <p>{data.title}</p>{" "}
      <p className="text-text-second text-sm">{data.subtitle}</p>
    </Link>
  );
};

export default BaseLink;
