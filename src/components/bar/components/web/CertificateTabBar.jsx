import CertificateCustomLink from "@/src/components/buttons/CertificateCustomLink";
import { Book, Category, GoldExam, MainExam } from "@/src/lib/svg";
import CertificateLogo from "./CertificateLogo";

const features = [
  { title: "کتاب یار", icon: <Book />, path: "book" },
  { title: "سوالات موضوعی", icon: <Category />, path: "categories" },
  { title: "آزمون آزمایشی", icon: <MainExam />, path: "tests" },
  { title: "آزمون طلایی", icon: <GoldExam />, path: "golds" },
];

const CertificateTabBar = ({ slug, activeSegment }) => {
  return (
    <div className="flex ">
      <CertificateLogo slug={slug} />
      <div
        className="w-full  mt-2 md:mt-0 
     max-w-full h-[48px] md:h-[56px]
      lg:h-[70px]
       shadow-base  
       rounded-none
        md:rounded-2xl
         bg-white px-0 md:px-2"
      >
        <div
          className="w-full h-full relative overflow-x-scroll no-scrollbar "
          id={"sectionList"}
        >
          <div className="flex h-full md:gap-2 items-center px-2 absolute top-0 right-0 left-0 bottom-0">
            <CertificateCustomLink
              icon={<Book active={features[0].path === activeSegment} />}
              title={features[0].title}
              path={features[0].path}
              certificateSlug={slug}
              isActive={features[0].path === activeSegment}
            />
            <div
              className={`h-[80%] min-h-[80%] min-w-[2px] bg-secondary-main hidden md:flex
          ${features[0].path === activeSegment && "bg-white"}
          ${features[1].path === activeSegment && "bg-white"}
          `}
            />
            <CertificateCustomLink
              icon={<Category active={features[1].path === activeSegment} />}
              title={features[1].title}
              path={features[1].path}
              certificateSlug={slug}
              isActive={features[1].path === activeSegment}
            />
            <div
              className={`h-[80%] min-h-[80%] min-w-[2px] bg-secondary-main hidden md:flex
          ${features[1].path === activeSegment && "bg-white"}
          ${features[2].path === activeSegment && "bg-white"}
          `}
            />
            <CertificateCustomLink
              icon={<MainExam active={features[2].path === activeSegment} />}
              title={features[2].title}
              path={features[2].path}
              certificateSlug={slug}
              isActive={features[2].path === activeSegment}
            />
            <div
              className={`h-[80%] min-h-[80%] min-w-[2px] bg-secondary-main hidden md:flex
          ${features[2].path === activeSegment && "bg-white"}
          ${features[3].path === activeSegment && "bg-white"}
          `}
            />
            <CertificateCustomLink
              icon={<GoldExam active={features[3].path === activeSegment} />}
              title={features[3].title}
              path={features[3].path}
              certificateSlug={slug}
              isActive={features[3].path === activeSegment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTabBar;
