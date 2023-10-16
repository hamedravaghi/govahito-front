import SimpleCard from "../common/SimpleCard";
import BestAcademyCarousel from "../carousel/BestAcademyCarousel.jsx";
import BestAcademyCard from "../cards/BestAcademyCard";

const BestAcademy = () => {
  return (
    <section>
      <SimpleCard
        header={"آموزشگاه های برتر"}
        button="true"
        buttonLargeText={"نمایش همه"}
        buttonSmallText={"همه"}
        className={"mt-8 md:mt-12 lg:mt-16"}
      >
        <BestAcademyCarousel>
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
          <BestAcademyCard />
        </BestAcademyCarousel>
      </SimpleCard>
    </section>
  );
};

export default BestAcademy;
