const CurrentPage = ({ children,className, ...otherProps }) => {
     return (
       <div className="w-full flex h-full min-h-full flex-col items-center mt-5">
   
       <div {...otherProps} className={`px-4 md:px-8 lg:px-[70px] ${className} w-full max-w-[1366px] h-full`}>
         {children}
       </div>
       </div>
     );
   };
   
   export default CurrentPage;
   