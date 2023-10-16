import Link from "next/link";

const ItemButton = ({ icon, title, subTitle,link,onClick }) => {
  return (
    <Link href={link} onClick={onClick} className="w-full py-2  flex gap-2 items-center
     bg-white  hover:bg-secondary-background 
    
   ">
      {icon}
      <p className="text-sm ">{title}</p>
      <p className="text-text-second text-sm">{subTitle}</p>
    </Link>
  );
};

export default ItemButton;
