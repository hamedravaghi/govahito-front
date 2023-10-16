import { NoPay } from "@/src/lib/svg";
import ProfileCard from "../ProfileCard";
import Link from "next/link";

const NoPayCard = () => {
  return (
    <ProfileCard>
      <NoPay />
      <p className="font-bold">هنوز هیچ آزمونی نخریدی !...</p>
      <div className="w-full flex flex-col items-center gap-4">
        <Link
          href={"/checkout"}
          className="px-3 py-2 rounded-2xl bg-primary-main text-white"
        >
          خرید آزمون طلایی
        </Link>
      </div>
    </ProfileCard>
  );
};

const PaySection = () => {
  return <NoPayCard />;
};

export default PaySection;
