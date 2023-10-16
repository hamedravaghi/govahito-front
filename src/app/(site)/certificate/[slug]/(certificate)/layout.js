"use client"
import { useEffect } from "react"
import CertificateTabBar from "@/src/components/bar/components/web/CertificateTabBar"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"


const CertificateLayout = ({ params, children }) => {
     const pathName = usePathname()
     const activeSegment = useSelectedLayoutSegment()
     const currentPathName = pathName.split("/").slice(-1)[0]


     useEffect(() => {

          const sectionList = document.getElementById("sectionList")
          if (activeSegment === "book") {
               sectionList?.scrollBy({ top: 0, left: 100 });
          } else {
               sectionList?.scrollBy({ top: 0, left: -100 });
          }


     }, [activeSegment]);

     return (
          <div className="w-full flex justify-center">
               <div className={`w-full ${activeSegment === currentPathName && "md:mt-5"} max-w-[1366px] flex px-0 md:px-8 lg:px-[70px] 2xl:px-0 justify-center  gap-0 md:gap-4 lg:gap-6 `}>
                    <div className="flex flex-col flex-1  max-w-screen md:max-w-full ">
                         {activeSegment === currentPathName ? <CertificateTabBar slug={params.slug} activeSegment={activeSegment} /> : null}
                         <div className={` px-4 md:px-0 scroll-mt-16`}>{children}</div>
                    </div>

               </div>
          </div>
     )
}

export default CertificateLayout