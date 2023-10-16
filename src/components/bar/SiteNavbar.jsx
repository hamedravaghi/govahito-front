"use client";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { ClientContext } from "@/src/provider/ClientProvider";
import { pathBar } from "@/src/lib/data/pathBar";
import TopBar from "./TopBar";
import SecondBar from "./SecondBar";
import { useScroll } from "@/src/hooks/useScroll";

const SiteNavbar = () => {
  const { handleSideBar } = useContext(ClientContext);
  const { scrollDirection } = useScroll();

  const pathname = usePathname();
  return (
    <header
      id={"site-nav"}
      className={` w-full sticky  top-0 flex flex-col transition-all duration-200
      first-letter bg-white bg-background/50 backdrop-filter-blur z-20  ${
        scrollDirection === "up" ? "shadow-none" : "shadow-base"
      }
      
      ${scrollDirection === "down" ? "h-16" : "h-32"}
      `}
    >
      <TopBar
        className={`${scrollDirection === "down" ? "hidden" : "flex"} `}
        pathname={pathname}
        handleSideBar={handleSideBar}
        pathBar={pathBar}
      />
      <SecondBar pathname={pathname} />
    </header>
  );
};

export default SiteNavbar;
