import Button from "../../Button";
import ProfileCard from "../ProfileCard";

const LogOut = () => {
  return (
    <ProfileCard>
      <div className="w-[270px] h-[126px] flex flex-col justify-between items-center">
        <p>آیا از حساب کاربری خود خارج می شوید ؟</p>
        <div className="w-full flex justify-between">
          <Button variant="contained">بله</Button>
          <Button>خیر</Button>
        </div>
      </div>
    </ProfileCard>
  );
};

export default LogOut;
