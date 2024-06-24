import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.scss";
import Upload from "../../assets/components/upload/Upload";
import { TitleContext } from "../../contexts/TitleContext";
import Landing from "./components/landing/Landing";

export default function HomePage() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Accueil");
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}
