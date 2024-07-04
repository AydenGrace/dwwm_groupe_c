import React, { useContext, useEffect } from "react";
import style from "./Concept.module.scss";
import { TitleContext } from "../../contexts/TitleContext";

export default function Concept() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Concept");
  }, []);

  return <section>Concept</section>;
}
