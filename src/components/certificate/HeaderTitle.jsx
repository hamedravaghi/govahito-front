"use client";
import { ClientContext } from "@/src/provider/ClientProvider";
import { useContext } from "react";
const HeaderTitle = ({ title }) => {
  const { setHeaderTitle } = useContext(ClientContext);
  setHeaderTitle(title);
  return null;
};

export default HeaderTitle;
