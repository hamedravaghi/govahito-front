import Image from "next/image";
import SimpleCard from "../common/SimpleCard";
const ExamIntro = () => {
  return (
    // <SimpleCard header={"آزمون ها"} >
      <div className="w-full flex flex-col items-center overflow-hidden">
        <Image
          src={"images/svg/mobileGroup.svg"}
          width={"0"}
          height={"0"}
          sizes="100vw"
          className="sm:hidden w-full h-auto object-cover"
          alt="گواهیتو - سوالات آزمون راهنمایی و رانندگی"
        />
        <Image
          src={"images/svg/webGroup.svg"}
          width={"0"}
          height={"0"}
          sizes="100vw"
          className="hidden sm:flex w-full h-auto object-cover"
          alt="گواهیتو - سوالات آزمون راهنمایی و رانندگی"
        />
      </div>
    // </SimpleCard>
  );
};

export default ExamIntro;
