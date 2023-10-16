const ProfileCard = ({ children }) => {
  return (
    <div className="w-full h-[416px] rounded-2xl bg-white flex flex-col gap-8 items-center justify-center shadow-base">
      {children}
    </div>
  );
};

export default ProfileCard;
