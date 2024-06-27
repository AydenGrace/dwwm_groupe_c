import React from "react";
import CottageCard from "../../../../assets/components/cottageCard/CottageCard";
import styles from "./Wrapper.module.scss";

export default function Wrapper() {
  return (
    <section className="p-10">
      <h2 className="c-p">Section</h2>
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
