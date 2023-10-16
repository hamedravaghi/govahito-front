"use client";


import { usePathname } from 'next/navigation';
import { useState, createContext, useEffect } from 'react'
import { deMascBody, mascBody } from '../utils/mascBody';


export const ClientContext = createContext(
     {
          headerTitle: "",
          scrollY: "",
          device: "",
          setHeaderTitle: () => { },
          openSideBar: Boolean,
          handleSideBar: () => { },
          activePath: "",
          openItem: "",
          handleOpenItem: () => { },
          handleCloseItem: () => { },
          handleActivePath: () => { }
     }
)





const ClientProvider = ({ children }) => {
     const pathname = usePathname()
     const [headerTitle, setHeaderTitle] = useState("")
     const [openSideBar, setOpenSideBar] = useState(false)
     const [device, setDevice] = useState(null)
     const handleSideBar = () => {
          setOpenSideBar(prev => !prev)
     }




     useEffect(() => {
          setOpenSideBar(false)
     }, [pathname])



     useEffect(() => {
          if (openSideBar) {
               mascBody()
          } else {
               deMascBody()
          }
     }, [openSideBar])


     useEffect(() => {
          const handleWindlowResize = () => {
               if (window.innerWidth >= 360 && window.innerWidth < 768) {
                    setDevice("phone")
               }
               else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                    setDevice("tablet")
               } else if (window.innerWidth >= 1024) {
                    setDevice("pc")
               }
          }


          window.addEventListener("resize", handleWindlowResize)

          handleWindlowResize()
          return () => { window.removeEventListener("resize", handleWindlowResize) }
     }, [])




     const [openItem, setOpenItem] = useState(null);



     const handleOpenItem = (itemTitle) => {
          setOpenItem(null)
          setOpenItem(itemTitle);
     };

     const handleCloseItem = () => {
          setOpenItem(null);
     };

     return (
          <ClientContext.Provider value={{ headerTitle, setHeaderTitle, openSideBar, device, handleSideBar, openItem, handleOpenItem, handleCloseItem }}>
               {children}
          </ClientContext.Provider>
     )
}

export default ClientProvider