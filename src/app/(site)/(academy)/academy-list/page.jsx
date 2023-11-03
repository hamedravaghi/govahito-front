import AllAcademy from "@/src/components/sections/AllAcademy";
import AcademySearch from "@/src/components/sections/AcademySearch";
import BestAcademy from "@/src/components/sections/BestAcademy";
import CustomPadding from "@/src/components/common/CustomPadding";

const Academy = () => {
  return (
    <div className="w-full">
      <AcademySearch />
      <CustomPadding>
        <BestAcademy />
        <AllAcademy />
      </CustomPadding>
    </div>
  );
};

export default Academy;
