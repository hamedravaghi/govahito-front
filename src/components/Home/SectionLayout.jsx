"use client";
import { PageContext } from "@/src/provider/PageProvider";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const SectionLayout = ({ id, className, children }) => {
  const { handleSetVisible } = useContext(PageContext);
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      handleSetVisible(id);
    }
  }, [inView]);

  return (
    <section
      className={`w-full scroll-mt-[120px] ${className}`}
      id={id}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
