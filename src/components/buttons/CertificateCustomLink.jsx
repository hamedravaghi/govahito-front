import Link from "next/link";
const CertificateCustomLink = ({
  title,
  path,
  icon,
  certificateSlug,
  isActive,
}) => {
  return (
    <Link
    
      replace
      href={`/certificate/${certificateSlug}/${path}`}
      className={`
        flex  px-4 min-h-[70%] md:w-[24%] items-center justify-center gap-2 
    
          ${
            isActive
              ? "bg-primary-main rounded-xl lg:rounded-2xl text-white "
              : "bg-white"
          }
     `}
    >
      <div className="hidden lg:flex">{icon}</div>
      <p className="font-bold sm:font-normal text-xs md:text-base whitespace-nowrap scroll-m-80"   id={path}>
        {title}
      </p>
    </Link>
  );
};

export default CertificateCustomLink;
