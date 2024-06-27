import React, { useEffect } from "react";
import CottageCard from "../../../../assets/components/cottageCard/CottageCard";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ title, request }) {
  const createFetchRequest = () => {
    let fetchString = import.meta.env.VITE_BACKEND;
    switch (request) {
      case 0: //Tendances
        break;
      case 1: //Meilleurs notes
        break;
      case 2: //Plus recents
        break;
      default:
        break;
    }
    return fetchString;
  };

  useEffect(() => {
    console.log(createFetchRequest());
  }, []);

  return (
    <section className={`${styles.Section}`}>
      <h2 className="c-p">{title}</h2>
      <div className={`w-100 d-flex justify-content-center ${styles.Wrapper}`}>
        <CottageCard />
        <CottageCard />
        <CottageCard />
        <CottageCard />
        <CottageCard />
      </div>
    </section>
  );
}
