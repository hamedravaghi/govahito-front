import SectionLayout from "./SectionLayout";
import SingleService from "./SingleService";
import { Services_Items } from "../../lib/data";

const ServicesSection = () => {
    return (
        <SectionLayout className="py-16">
            <div className="w-full grid place-items-center grid-cols-2 xl:grid-cols-4 gap-y-10 max-lg:gap-y-14 xl:gap-y-0">
                {Services_Items.map(({ number, text, imagePath }, index) => (
                    <SingleService key={index} number={number} text={text} imagePath={imagePath} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default ServicesSection;
