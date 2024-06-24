import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.scss";
import Upload from "../assets/components/upload/Upload";
import { TitleContext } from "../contexts/TitleContext";

export default function HomePage() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Accueil");
  }, []);

  return (
    <div className={`w-100 h-100 f-center flex-column`}>
      <h1 className="mega">HomePage</h1>
      <Upload />
    </div>
  );
}
