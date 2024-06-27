import React, { useEffect } from "react";
import CottageCard from "../../../../assets/components/cottageCard/CottageCard";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ title, datas }) {
  return (
    <section className={`${styles.Section}`}>
      <h2 className="c-p">{title}</h2>
      <div className={`w-100 d-flex justify-content-center ${styles.Wrapper}`}>
        {datas.map((item, idx) => {
          return <CottageCard key={idx} cottage={item} />;
        })}
      </div>
    </section>
  );
}
