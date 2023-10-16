import BarWrapper from "./BarWrapper";
import BarCard from "./BarCard";
import ItemButton from "./ItemButton";
import { useContext } from "react";
import { ClientContext } from "@/src/provider/ClientProvider";

const WebItem = ({ data }) => {
  const { openItem, handleOpenItem, handleCloseItem } =
    useContext(ClientContext);

  const { title, links, subtitle } = data;

  return (
    <BarWrapper
      title={title || ""}
      onClick={() => handleOpenItem(title)}
      openItem={openItem}
      handleCloseItem={handleCloseItem}
    >
      {Array.isArray(links) ? (
        <BarCard title={title} subTitle={subtitle}>
          {links.map((link, index) => (
            <ItemButton
              key={index.toString()}
              icon={link.icon}
              title={link.title}
              subTitle={link.subtitle}
              link={link.link}
              onClick={handleCloseItem}
            />
          ))}
        </BarCard>
      ) : null}
    </BarWrapper>
  );
};

export default WebItem;
