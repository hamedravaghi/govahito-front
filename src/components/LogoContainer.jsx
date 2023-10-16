import Image from "next/image";
import Link from "next/link";

const LogoContainer = ({ full }) => {
  return (
    <Link href="/" className="flex ">
      {full ? (
        <Image  src={"/images/GovahitoFull.png"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-[110px] h-[92px] object-fill"
        // width={32}
        // height={32}
        alt="گواهیتو"/>
      ) : (
        <Image
          src={"/images/govahito.png"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-8 h-8 object-fill"
          // width={32}
          // height={32}
          alt="گواهیتو"
        />
      )}
    </Link>
  );
};

export default LogoContainer;
