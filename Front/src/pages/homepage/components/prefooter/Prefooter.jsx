import React from "react";
import styles from "./Prefooter.module.scss";
import { useTranslation } from 'react-i18next'


export default function Prefooter() {
  const { t } = useTranslation("global");
  return (
    <section className={`d-flex w-100 ${styles.section} flex-column`}>
      <h2 className="c-w">
        {t("home.accroche2")}
      </h2>
      <hr />
    </section>
  );
}
