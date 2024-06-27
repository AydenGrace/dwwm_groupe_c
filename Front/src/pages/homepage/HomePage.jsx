import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Upload from "../../assets/components/upload/Upload";
import { TitleContext } from "../../contexts/TitleContext";
import Landing from "./components/landing/Landing";
import CottageCard from "../../assets/components/cottageCard/CottageCard";
import Wrapper from "./components/wrappers/Wrapper";
import { Link, useLoaderData } from "react-router-dom";

export default function HomePage() {
  const { setTitle } = useContext(TitleContext);
  const [populars, setPopulars] = useState(useLoaderData().Populars);
  const [news, setNews] = useState(useLoaderData().News);
  const [bests, setBests] = useState(useLoaderData().Bests);

  useEffect(() => {
    setTitle("Accueil");
    console.log(populars);
  }, []);

  const giteTest = {
    rating: 4.5,
    _id: "6670251d496a8f8f619ebd73",
    name: "Gîte de test",
    address: "Lille, France",
    price_per_night: 150,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/cogite-e6395.appspot.com/o/uploads%2FGite%20de%20test%2F06a7e003-3ab9-4099-9884-aa7a1bb1ac97.webp?alt=media&token=d148efb7-ed5c-4341-9ddb-6447155fb6b8",
      "https://firebasestorage.googleapis.com/v0/b/cogite-e6395.appspot.com/o/uploads%2FGite%20de%20test%2F32c1890f-0f24-4982-8e42-74e514490e63.webp?alt=media&token=7d0946fe-c2c5-416e-8d6c-95c9c632690c",
      "https://firebasestorage.googleapis.com/v0/b/cogite-e6395.appspot.com/o/uploads%2FGite%20de%20test%2F4c8d2fe3-6199-4acb-a1ac-7f6d7d369773.webp?alt=media&token=e4bb0dd4-a50d-4bff-b731-6ea4d7a08a94",
      "https://firebasestorage.googleapis.com/v0/b/cogite-e6395.appspot.com/o/uploads%2FGite%20de%20test%2F9e2c3d73-61c6-47e0-8c92-a9e0b4a4b2a4.webp?alt=media&token=ac530d3b-e3f5-4269-b9a4-42292495efe0",
      "https://firebasestorage.googleapis.com/v0/b/cogite-e6395.appspot.com/o/uploads%2FGite%20de%20test%2Ff9a02b58-16b3-45e2-b612-b7c256199807.webp?alt=media&token=8d57da72-cc43-4491-b861-e484019560a5",
    ],
  };

  return (
    <>
      <Landing />
      <Wrapper title={"Les Tendances"} datas={populars} />
      <Wrapper title={"Les Mieux Notés"} datas={bests} />
      <Wrapper title={"Les Plus Récents"} datas={news} />
    </>
  );
}
