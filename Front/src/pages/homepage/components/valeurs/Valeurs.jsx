import React from "react";
import styles from "./Valeurs.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export default function Valeurs() {
  const {t } = useTranslation("global");
  return (
    <section
      className={`f-center w-100 bg-p p-20 flex-column ${styles.section}`}
    >
      <h2 className="c-w">Nos Valeurs</h2>
      <hr />
      <div className={`f-center flex-wrap p-20 ${styles.wrapper}`}>
        <div className={`${styles.item} p-20 f-center flex-column`}>
          <div className={`${styles.icon} f-center`}>
            <i className="fa-solid fa-shield-halved fa-2xl c-w"></i>
          </div>
          <div className={`${styles.description}`}>
            <h3 className="c-p">{t("home.encart1")}</h3>
            <p>
              {t("home.encarttext1")}
            </p>
          </div>
        </div>

        <div className={`${styles.item} p-20 f-center flex-column`}>
          <div className={`${styles.icon} f-center`}>
            <i className="fa-solid fa-hot-tub-person fa-2xl c-w"></i>
          </div>
          <div className={`${styles.description}`}>
            <h3 className="c-p">{t("home.encart2")}</h3>
            <p>
              {t("home.encarttext2")}
            </p>
          </div>
        </div>

        <div className={`${styles.item} p-20 f-center flex-column`}>
          <div className={`${styles.icon} f-center`}>
            <i className="fa-solid fa-people-roof fa-2xl c-w"></i>
          </div>
          <div className={`${styles.description}`}>
            <h3 className="c-p">{t("home.encart3")}</h3>
            <p>
              {t("home.encarttext3")}
            </p>
          </div>
        </div>
      </div>
      <Link className="btn btn-reverse-primary" to={"/concept"}>
        {t("home.decouvrez")}
      </Link>
    </section>
  );
}
