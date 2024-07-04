import React, { useContext, useEffect } from "react";
import styles from "./Search.module.scss";
import { TitleContext } from "../../contexts/TitleContext";

export default function Search() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Recherche");
  }, []);
  return <section>Search</section>;
}
