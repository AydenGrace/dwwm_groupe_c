import React from "react";
import styles from "./Valeurs.module.scss";
import { Link } from "react-router-dom";

export default function Valeurs() {
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
            <h3 className="c-p">Sécurité</h3>
            <p>
              Être en sécurité dans son gîte, avoir un propriétaire ou locataire
              fiable c’est essentiel pour nous.
            </p>
          </div>
        </div>

        <div className={`${styles.item} p-20 f-center flex-column`}>
          <div className={`${styles.icon} f-center`}>
            <i className="fa-solid fa-hot-tub-person fa-2xl c-w"></i>
          </div>
          <div className={`${styles.description}`}>
            <h3 className="c-p">Simplicité</h3>
            <p>
              Rendre la recherche et la location de gîtes simple et accessible à
              tous est primordiale pour nous.
            </p>
          </div>
        </div>

        <div className={`${styles.item} p-20 f-center flex-column`}>
          <div className={`${styles.icon} f-center`}>
            <i className="fa-solid fa-people-roof fa-2xl c-w"></i>
          </div>
          <div className={`${styles.description}`}>
            <h3 className="c-p">Convivialité</h3>
            <p>
              Nous nous efforçons de vérifier nos utilisateurs pour qu’ils
              soient accueillant, de confiance et fiable.
            </p>
          </div>
        </div>
      </div>
      <Link className="btn btn-reverse-primary" to={"/concept"}>
        Découvrez notre concept
      </Link>
    </section>
  );
}
