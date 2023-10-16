"use client"
import { useEffect, useState } from "react";



export const useScroll = () => {
  const threshold = 100;
  const [scrollDir, setScrollDir] = useState("up");
  const [top,setTop]=useState(false)

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ?"down"
          : "up";
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {scrollDirection:scrollDir,top};
};





























// "use client"
// import {useState,useEffect,useRef} from 'react';

// const THRESHOLD = 100;

// const useScroll = () => {
//   const [scrollDirection, setScrollDirection] = useState('up');
//   const [top,setTop]=useState(true)

//   const blocking =useRef(false);
//   const prevScrollY =useRef(0);

//   useEffect(() => {
    
//     prevScrollY.current = window.scrollY;
//     const updateScrollDirection = () => {
//       const scrollY = window.scrollY;

      
//       if(scrollY >= 10){
//           setTop(false)
//       }else{setTop(true)}

//       if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
//         const newScrollDirection =
//           scrollY > prevScrollY.current ? 'down' : 'up';

//         setScrollDirection(newScrollDirection);

//         prevScrollY.current = scrollY > 0 ? scrollY : 0;
//       }

//       blocking.current = false;
//     };

//     const onScroll = () => {
//       if (!blocking.current) {
//         blocking.current = true;
//         window.requestAnimationFrame(updateScrollDirection);
//       }
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return {scrollDirection,top};
// };

// export { useScroll };




// "use client"
// import { useState, useEffect } from "react"

// const useScroll = () => {
//      const [top, setTop] = useState(false);
//      const [scrollY, setScrollY] = useState(0)

//      useEffect(() => {
//           function handleScroll() {
               
//                setScrollY()

//                if (scrollY <= 10) {
//                     setTop(true);
//                } else {
//                     setTop(false);
//                }
//           }
//           window.addEventListener("scroll", handleScroll)
//           return () => {
//                window.removeEventListener("scroll", handleScroll);
//           };
//      }, []);


//      return { top, scrollY }
// }


// export { useScroll }