"use client";
import { useContext, useState } from "react";
import { ClientContext } from "@/src/provider/ClientProvider";

import { BarArr } from "@/src/lib/data/navbarItems";
import MobileItem from "./components/mobile/MobileItem";
import Link from "next/link";
import { ChevronLeft } from "@/src/lib/svg";
import { useScroll } from "@/src/hooks/useScroll";

const MainSideBar = () => {
  const { openSideBar, handleSideBar } = useContext(ClientContext);
  const [openItem, setOpenItem] = useState(null);
  const { scrollDirection } = useScroll();

  const handleOpen = (itemTitle) => {
    if (itemTitle !== openItem) {
      setOpenItem(itemTitle);
    } else {
      setOpenItem(null);
    }
  };

  return (
    <div
      style={{ zIndex: 10001 }}
      className={`fixed block
      ${scrollDirection === "up" ? "top-32" : "top-16"}
    right-0 h-full  
    group
    transition-all duration-200
    overflow-hidden
   
    ${openSideBar ? "w-full" : "w-0"}
    `}
    >
      <div className="w-full h-full min-h-screen absolute bottom-0 top-0 right-0 left-0 pb-[300px] bg-white overflow-y-scroll">
        <div className="w-full h-[56px] px-4  ">
          <div className="flex justify-between items-center h-full w-full border-b">
            <Link
              href={"/"}
              className="text-text-main "
              onClick={handleSideBar}
            >
              خانه
            </Link>

            {/* <ChevronLeft color="#95A5AA" /> */}
          </div>
        </div>

        {Array.isArray(BarArr) ? (
          <>
            {BarArr.map((item, index) => (
              <MobileItem
                data={item}
                key={index.toString()}
                open={openItem === item.title ? true : false}
                handleOpen={() => {
                  handleOpen(item.title);
                }}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MainSideBar;
