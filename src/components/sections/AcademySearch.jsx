import { ArrowBottom, Search } from "@/src/lib/svg";
import CustomPadding from "../common/CustomPadding";

const SearchInput = () => {
     return (
       <div className="w-full h-[46px] md:w-[304px] lg:w-[393px] rounded-2xl bg-white px-4 flex items-center gap-2">
         <Search />
         <input
           className={`w-full h-full  p-1 text-sm focus:outline-none `}
           placeholder="نام آموزشگاه را وارد کنید"
         />
       </div>
     );
   };
   
   const SelectLocation = () => {
     return (
       <div className="w-full h-[46px] md:w-[304px] lg:w-[393px] rounded-2xl  flex justify-between gap-4 md:gap-8">
         <div className="h-full w-1/2 flex items-center justify-between bg-white rounded-2xl px-4">
           <p className="text-text-second text-sm">استان</p>
           <ArrowBottom />
         </div>
         <div className="h-full w-1/2 flex items-center justify-between bg-white rounded-2xl px-4">
           <p className="text-text-second text-sm">شهر</p>
           <ArrowBottom />
         </div>
       </div>
     );
   };

const AcademySearch = () => {
  return (
     <div className="w-full h-[132px] md:h-[62px] lg:h-20 bg-secondary-main flex   ">
     <CustomPadding
       className={
         "min-h-[100%] flex flex-col items-center justify-evenly md:justify-between  md:flex-row "
       }
     >
       <SearchInput />
       <SelectLocation />
     </CustomPadding>
   </div>
  )
}

export default AcademySearch