import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Upload from "../../components/upload/Upload";
import { TitleContext } from "../../contexts/TitleContext";
import Landing from "./components/landing/Landing";
import CottageCard from "../../components/cottageCard/CottageCard";
import Wrapper from "./components/wrappers/Wrapper";
import { Link, useLoaderData } from "react-router-dom";
import Valeurs from "./components/valeurs/Valeurs";
import Prefooter from "./components/prefooter/Prefooter";
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation("global");
  const { setTitle } = useContext(TitleContext);
  const [populars, setPopulars] = useState(useLoaderData().Populars);
  const [news, setNews] = useState(useLoaderData().News);
  const [bests, setBests] = useState(useLoaderData().Bests);

  useEffect(() => {
    setTitle("Accueil");
  }, []);

  return (
    <>
      <Landing />
      <Wrapper title={t("home.categorietendance")} datas={populars} />
      <Wrapper title={t("home.categoriemieuxnotes")} datas={bests} />
      <Wrapper title={t("home.categorierecents")} datas={news} />
      <Valeurs />
      <Prefooter />
    </>
  );
}
