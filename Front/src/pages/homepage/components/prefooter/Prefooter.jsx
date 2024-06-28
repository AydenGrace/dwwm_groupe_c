import React from "react";
import styles from "./Prefooter.module.scss";

export default function Prefooter() {
  return (
    <section className={`d-flex w-100 ${styles.section} flex-column`}>
      <h2 className="c-w">
        Découvrez des paysages sublimes en partant en voyage dans des gîtes
        insolites, accueillant et chaleureux.
      </h2>
      <hr />
    </section>
  );
}
