import BtnWrapper from "./BtnWrapper";
import BaseLink from "./BaseLink";

const MobileItem = ({ data, open, handleOpen }) => {
  return (
    <div
      className={`w-screen min-h-[56px] transition-all ${
        !open ? "h-12" : "h-auto"
      }  overflow-hidden  bg-white px-4 group  `}
    >
      <div className="w-full h-full border-b border-border-main">
        <BtnWrapper
          title={data.title}
          onClick={handleOpen}
          open={open}
          desc={data.subtitle}
        />

        {data.links.map((item, index) => (
          <BaseLink
            key={index.toString()}
            data={item}
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileItem;
