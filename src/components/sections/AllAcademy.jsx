import Link from "next/link";
import AcademyCard from "../cards/AcademyCard";
import SimpleCard from "../common/SimpleCard";
import { ChevronLeft } from "@/src/lib/svg";

const AllAcademy = () => {
  return (
    <section>
      <SimpleCard
        contentPadding={false}
        header={"سایر آموزشگاه ها"}
        className={"mt-15 md:mt-24 lg:mt-[110px]  "}
      >
        <div className="w-full flex justify-between ">
          <p className="font-bold md:text-2xl">منطقه 1</p>
          <Link href={""} className="text-text-second flex gap-1 items-center">
            <p className="text-xs">مشاهده همه</p>
            <ChevronLeft color="#95A5AA" />
          </Link>
        </div>

        <div
          className="w-full py-4  overflow-x-scroll 
                     gap-4
                     flex 
                     px-3
                     md:grid
                     md:grid-flow-row
                     md:grid-cols-3
                     lg:grid-cols-5 my-2
                     no-scrollbar
                     "
        >
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
          <AcademyCard href={`/academy/6354654654656871968`} />
         
        </div>
      </SimpleCard>
    </section>
  );
};

export default AllAcademy;
