"use client";
import { useEffect, useRef, useState } from "react";
import CustomPadding from "../common/CustomPadding";
import AcademyCard from "../cards/BestAcademyCard";
import { useWindowSize } from "@/src/hooks/useWindowSize";

const ScrollerButtonRight = ({ scrollHandler }) => {
  return (
    <div
      className="w-12 min-w-12 h-12 min-h-12 rounded-full flex items-center justify-center"
      onClick={() => scrollHandler("right")}
    >
      <svg
        className="w-6 md:w-12 h-6 md:h-12"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9998 39.8363L31.0398 26.7962C32.5798 25.2562 32.5798 22.7363 31.0398 21.1963L17.9998 8.15625"
          stroke="#95A5AA"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const ScrollerButtonLeft = ({ scrollHandler }) => {
  return (
    <div
      className="h-full min-h-full flex "
      onClick={() => scrollHandler("left")}
    >
      <div className="w-12 min-w-12 h-12 min-h-12 rounded-full flex items-center justify-center">
        <svg
          className="w-6 md:w-12 h-6 md:h-12"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.9999 8.16375L16.9599 21.2038C15.4199 22.7438 15.4199 25.2637 16.9599 26.8037L29.9999 39.8438"
            stroke="#95A5AA"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const BestAcademyCarousel = ({ className, children, items }) => {
  const { currentWidth } = useWindowSize();

  const currentCardSize = currentWidth >= 769 ? 249 : 252;

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;

    containerRef.current.scrollLeft = scrollLeft - dx;
  };

  const handleScroll = (direction) => {
    const container = containerRef.current;

    if (direction === "right") {
      container.scrollLeft += currentCardSize; // You can adjust this value
    } else if (direction === "left") {
      container.scrollLeft -= currentCardSize; // You can adjust this value
    }
  };

  return (
    <div className="w-full flex min-h-[250px] justify-between  items-center ">
      <ScrollerButtonRight scrollHandler={handleScroll} />
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        className={`w-full flex relative 
                      overflow-x-scroll 
                      overflow-auto
                      py-4 no-scrollbar horizontal-scroll-element
                      cursor-grab
                      drag-scroll-container  
                   
                      max-w-[996px] scroll-smooth 
                      
                      ${className} 
                               `}
      >
        {list.map((item, index) => (
          <AcademyCard
            key={index.toString()}
            id={item}
            onFocus={() => {
              console.log(index);
            }}
          />
        ))}
      </div>
      <ScrollerButtonLeft scrollHandler={handleScroll} />
    </div>
  );
};

export default BestAcademyCarousel;
