"use client";

import { Bar, Close, Profile } from "@/src/lib/svg";
import { ClientContext } from "@/src/provider/ClientProvider";
import { useContext } from "react";

const MobileSecondBar = () => {
  const { handleSideBar, openSideBar } = useContext(ClientContext);
  return (
    <div className="h-full flex items-center justify-center bg-white">
      <button onClick={handleSideBar}>
        {openSideBar ? <Close /> : <Bar />}
      </button>
    </div>
  );
};

export default MobileSecondBar;
