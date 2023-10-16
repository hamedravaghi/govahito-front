const ProfileButton = ({ icon, text, handler, active }) => {
  return (
    <button
      className={`md:w-full h-10 whitespace-nowrap rounded-2xl md:rounded-none px-4 flex items-center gap-2 hover:bg-primary-main hover:text-white ${
        active ? "bg-primary-main text-white" : "bg-white text-text-main"
      }
         
         `}
      onClick={handler}
    >
      <div className="hidden md:flex"> {icon}</div> <p>{text}</p>
    </button>
  );
};

export default ProfileButton;
