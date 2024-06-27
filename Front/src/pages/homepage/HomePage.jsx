import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.scss";
import Upload from "../../assets/components/upload/Upload";
import { TitleContext } from "../../contexts/TitleContext";
import Landing from "./components/landing/Landing";
import CottageCard from "../../assets/components/cottageCard/CottageCard";
import Wrapper from "./components/wrappers/Wrapper";

export default function HomePage() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Accueil");
  }, []);

  return (
    <>
      <Landing />
      <Wrapper title={"Les Tendances"} />
      <Wrapper title={"Les Mieux Notés"} />
      <Wrapper title={"Les Plus Récents"} />
    </>
  );
}
