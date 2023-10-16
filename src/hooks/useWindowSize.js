"use client"
import { useState, useEffect } from 'react'
const useWindowSize = () => {
     const [windowSize, setWindowSize] = useState([null, null])
     useEffect(() => {
          const handleWindlowResize = () => {
               setWindowSize([window.innerWidth, window.innerHeight])
          }


          window.addEventListener("resize", handleWindlowResize)

          handleWindlowResize()
          return () => { window.removeEventListener("resize", handleWindlowResize) }
     }, [])


     return { currentWidth: windowSize[0], currentHeight: windowSize[1], isMobile: windowSize[0] < 768 ? true : false }

}


export { useWindowSize }