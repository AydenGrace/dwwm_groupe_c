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

export default function HomePage() {
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
      <Wrapper title={"Les Tendances"} datas={populars} />
      <Wrapper title={"Les Mieux Notés"} datas={bests} />
      <Wrapper title={"Les Plus Récents"} datas={news} />
      <Valeurs />
      <Prefooter />
    </>
  );
}
